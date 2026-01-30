<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  toRefs,
  watch
} from 'vue'
import { dkTimePickerProps, type TimePickerModelValue, type TimePickerValue } from './props'
import { timePickerEmits } from './emit'
import { coerceToDate, formatByPattern, parseByPattern } from '../../dkdatepicker/src/dateFormats'
import DkTimePickerPanel from './timePickerPanel.vue'

export default defineComponent({
  name: 'DkTimePicker',
  components: { DkTimePickerPanel },
  props: dkTimePickerProps,
  emits: timePickerEmits,
  setup(props, { emit, expose }) {
    const rootRef = ref<HTMLElement>()
    const triggerRef = ref<HTMLElement>()
    const dropdownRef = ref<HTMLElement>()
    const dropdownStyle = ref<Record<string, string | number>>({})

    const state = reactive({
      open: false,
      active: 'single' as 'single' | 'start' | 'end',
      text: '',
      startText: '',
      endText: ''
    })

    const committed = ref<Date | null>(null)
    const committedRange = ref<[Date | null, Date | null]>([null, null])
    const draft = ref<Date | null>(null)
    const draftRange = ref<[Date | null, Date | null]>([null, null])

    let syncingFromProps = false

    const showSeconds = computed(() => {
      const fmt = String(props.format || '')
      const vfmt = String(props.valueFormat || '')
      if (vfmt === 'timestamp') return fmt.includes('ss')
      return fmt.includes('ss') || vfmt.includes('ss')
    })

    const isEmptyValue = (val: unknown): boolean => {
      if (val === '' || val === null || val === undefined) return true
      const list = props.emptyValues
      if (!list) return false
      return Array.isArray(list) && list.some(v => Object.is(v, val))
    }

    const normalizeOne = (raw: unknown): Date | null => {
      if (isEmptyValue(raw)) return null
      const coerced = coerceToDate(raw)
      if (coerced) return coerced

      if (typeof raw === 'string') {
        const s = raw.trim()
        if (!s) return null
        if (props.valueFormat === 'timestamp') {
          const asNum = Number(s)
          return Number.isFinite(asNum) ? new Date(asNum) : null
        }
        const byValueFormat = props.valueFormat ? parseByPattern(s, props.valueFormat) : null
        if (byValueFormat) return byValueFormat
        const byFormat = props.format ? parseByPattern(s, props.format) : null
        if (byFormat) return byFormat
      }
      return null
    }

    const toDisplayValue = (d: Date | null): string => {
      if (!d) return ''
      return formatByPattern(d, props.format || 'HH:mm:ss')
    }

    const toBindValue = (d: Date | null): TimePickerValue | '' => {
      if (!d) {
        if (!props.valueFormat) return null as unknown as ''
        return ''
      }
      if (!props.valueFormat) return d
      if (props.valueFormat === 'timestamp') return d.getTime()
      if (props.valueFormat) return formatByPattern(d, props.valueFormat)
      return d
    }

    const getValueOnClear = (): unknown => {
      const v = props.valueOnClear
      if (typeof v === 'function') {
        try {
          return (v as () => unknown)()
        } catch {
          return props.isRange ? [] : (props.valueFormat ? '' : null)
        }
      }
      if (v !== undefined) return v
      return props.isRange ? [] : (props.valueFormat ? '' : null)
    }

    const isTimeDisabled = (d: Date | null): boolean => {
      if (!d) return false
      const hh = d.getHours()
      const mm = d.getMinutes()
      const ss = d.getSeconds()
      const hours = typeof props.disabledHours === 'function' ? props.disabledHours() : []
      const minutes = typeof props.disabledMinutes === 'function' ? props.disabledMinutes(hh) : []
      const seconds = typeof props.disabledSeconds === 'function' ? props.disabledSeconds(hh, mm) : []
      const disableSecond = showSeconds.value
        ? Array.isArray(seconds) && seconds.includes(ss)
        : false
      return (
        (Array.isArray(hours) && hours.includes(hh)) ||
        (Array.isArray(minutes) && minutes.includes(mm)) ||
        disableSecond
      )
    }

    const syncCommittedText = (): void => {
      if (props.isRange) {
        state.startText = toDisplayValue(committedRange.value[0])
        state.endText = toDisplayValue(committedRange.value[1])
        return
      }
      state.text = toDisplayValue(committed.value)
    }

    const syncFromModel = (): void => {
      syncingFromProps = true

      if (props.isRange) {
        const arr = Array.isArray(props.modelValue) ? props.modelValue : []
        const s = normalizeOne(arr[0])
        const e = normalizeOne(arr[1])
        committedRange.value = [s, e]
      } else {
        const raw = Array.isArray(props.modelValue) ? props.modelValue[0] : props.modelValue
        committed.value = normalizeOne(raw)
      }

      syncCommittedText()
      syncingFromProps = false
    }

    watch(() => props.modelValue, syncFromModel, { immediate: true })

    const refreshDropdownPosition = (): void => {
      if (!props.teleported) return
      if (!triggerRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      const panelW = props.isRange ? (showSeconds.value ? 560 : 420) : showSeconds.value ? 280 : 210
      const panelH = props.isRange ? 352 : 332
      const gap = 4
      const placements = [props.placement, ...(props.fallbackPlacements || [])].filter(Boolean)

      const fits = (top: number, left: number): boolean => {
        return top >= 0 && left >= 0 && top + panelH <= window.innerHeight && left + panelW <= window.innerWidth
      }

      let top = rect.bottom + gap
      let left = rect.left
      for (const p of placements) {
        if (p === 'top') {
          const t = rect.top - gap - panelH
          const l = rect.left
          if (fits(t, l)) {
            top = t
            left = l
            break
          }
        }
        if (p === 'bottom') {
          const t = rect.bottom + gap
          const l = rect.left
          if (fits(t, l)) {
            top = t
            left = l
            break
          }
        }
        if (p === 'right') {
          const t = rect.top
          const l = rect.right + gap
          if (fits(t, l)) {
            top = t
            left = l
            break
          }
        }
        if (p === 'left') {
          const t = rect.top
          const l = rect.left - gap - panelW
          if (fits(t, l)) {
            top = t
            left = l
            break
          }
        }
      }

      const arrowLeft = Math.max(12, Math.min(panelW - 12, rect.left + rect.width / 2 - left))

      dropdownStyle.value = {
        position: 'fixed',
        top: `${Math.max(0, top)}px`,
        left: `${Math.max(0, left)}px`,
        zIndex: 2023,
        '--dk-time-picker-arrow-left': `${arrowLeft}px`
      }
    }

    const documentListen = (evt: MouseEvent): void => {
      const target = evt.target as Node
      const rootEl = rootRef.value
      const dropEl = dropdownRef.value

      if (rootEl && rootEl.contains(target)) return
      if (dropEl && dropEl.contains(target)) return
      closeDropdown(false)
    }

    const initDraft = (): void => {
      if (props.isRange) {
        const [cs, ce] = committedRange.value
        const def = props.defaultValue
        const ds = Array.isArray(def) ? def[0] : def
        const de = Array.isArray(def) ? def[1] : def
        draftRange.value = [cs || (ds instanceof Date ? ds : null), ce || (de instanceof Date ? de : null)]
        state.startText = toDisplayValue(draftRange.value[0])
        state.endText = toDisplayValue(draftRange.value[1])
        return
      }

      const def = props.defaultValue
      const d = committed.value || (def instanceof Date ? def : null)
      draft.value = d
      state.text = toDisplayValue(d)
    }

    const openDropdown = (): void => {
      if (props.disabled || props.readonly) return
      if (state.open) return
      state.open = true
      initDraft()
      emit('visible-change', true)
      nextTick(() => {
        refreshDropdownPosition()
      })
      document.addEventListener('click', documentListen)
    }

    const closeDropdown = (keepDraft: boolean): void => {
      if (!state.open) return
      state.open = false
      emit('visible-change', false)
      document.removeEventListener('click', documentListen)
      if (!keepDraft) {
        syncCommittedText()
        draft.value = committed.value
        draftRange.value = [committedRange.value[0], committedRange.value[1]]
      }
    }

    const onKeydown = (evt: KeyboardEvent): void => {
      if (evt.key === 'Escape') {
        cancel()
        return
      }
      if (evt.key === 'Enter') {
        if (props.disabled) return
        if (props.readonly) return
        if (state.open) {
          commit()
          return
        }

        if (!props.editable) return
        if (props.isRange) return
        const txt = String(state.text || '').trim()
        if (!txt) return
        const parsed = parseByPattern(txt, props.format || 'HH:mm:ss')
        if (!parsed) return
        if (isTimeDisabled(parsed)) return
        draft.value = parsed
        committed.value = parsed
        const next: TimePickerModelValue = toBindValue(parsed)
        emit('update:modelValue', next)
        emit('change', next)
      }
    }

    const onFocus = (evt: FocusEvent): void => {
      openDropdown()
      emit('focus', evt)
    }

    const onBlur = (evt: FocusEvent): void => {
      emit('blur', evt)
    }

    const onInputUpdate = (v: string | number): void => {
      if (syncingFromProps) return
      state.text = String(v ?? '')
      if (!props.editable || props.disabled || props.readonly) return
      if (!state.open) {
        const txt = state.text.trim()
        if (!txt) return
        const parsed = parseByPattern(txt, props.format || 'HH:mm:ss')
        if (parsed && !isTimeDisabled(parsed)) committed.value = parsed
      }
    }

    const onStartInputUpdate = (v: string | number): void => {
      if (syncingFromProps) return
      state.startText = String(v ?? '')
    }

    const onEndInputUpdate = (v: string | number): void => {
      if (syncingFromProps) return
      state.endText = String(v ?? '')
    }

    const onStartFocus = (evt: FocusEvent): void => {
      state.active = 'start'
      onFocus(evt)
    }

    const onEndFocus = (evt: FocusEvent): void => {
      state.active = 'end'
      onFocus(evt)
    }

    const onPickSingleDraft = (d: Date): void => {
      if (props.disabled || props.readonly) return
      if (isTimeDisabled(d)) return
      draft.value = d
      state.text = toDisplayValue(d)
    }

    const onPickRangeDraftStart = (d: Date): void => {
      if (props.disabled || props.readonly) return
      if (isTimeDisabled(d)) return
      draftRange.value = [d, draftRange.value[1]]
      state.startText = toDisplayValue(d)
      state.active = 'end'
    }

    const onPickRangeDraftEnd = (d: Date): void => {
      if (props.disabled || props.readonly) return
      if (isTimeDisabled(d)) return
      draftRange.value = [draftRange.value[0], d]
      state.endText = toDisplayValue(d)
    }

    const commit = (): void => {
      if (props.disabled || props.readonly) return

      if (props.isRange) {
        const [s, e] = draftRange.value
        if (isTimeDisabled(s) || isTimeDisabled(e)) return
        committedRange.value = [s, e]
        const next: TimePickerModelValue = [toBindValue(s), toBindValue(e)]
        emit('update:modelValue', next)
        emit('change', next)
        closeDropdown(true)
        return
      }

      if (isTimeDisabled(draft.value)) return
      committed.value = draft.value
      const next: TimePickerModelValue = toBindValue(draft.value)
      emit('update:modelValue', next)
      emit('change', next)
      closeDropdown(true)
    }

    const cancel = (): void => {
      closeDropdown(false)
    }

    const onClear = (): void => {
      if (props.disabled || props.readonly) return
      const next = getValueOnClear()
      if (props.isRange) {
        committedRange.value = [null, null]
        draftRange.value = [null, null]
        state.startText = ''
        state.endText = ''
        emit('update:modelValue', Array.isArray(next) ? next : [])
        emit('change', Array.isArray(next) ? next : [])
      } else {
        committed.value = null
        draft.value = null
        state.text = ''
        emit('update:modelValue', next as TimePickerModelValue)
        emit('change', next as TimePickerModelValue)
      }
      emit('clear')
      closeDropdown(true)
    }

    watch(
      () => state.text,
      (val, oldVal) => {
        if (syncingFromProps) return
        if (!props.editable || props.readonly) return
        if (props.isRange) return
        if (oldVal && !val) onClear()
      }
    )

    watch(
      () => [state.startText, state.endText] as const,
      (val, oldVal) => {
        if (syncingFromProps) return
        if (!props.editable || props.readonly) return
        if (!props.isRange) return
        const [s, e] = val
        const [os, oe] = oldVal
        if ((os || oe) && !s && !e) onClear()
      }
    )

    watch(
      () => props.disabled,
      d => {
        if (d) closeDropdown(false)
      }
    )

    onMounted(() => {
      window.addEventListener('resize', refreshDropdownPosition)
      window.addEventListener('scroll', refreshDropdownPosition, true)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', documentListen)
      window.removeEventListener('resize', refreshDropdownPosition)
      window.removeEventListener('scroll', refreshDropdownPosition, true)
    })

    const focus = (): void => {
      const el = rootRef.value?.querySelector('input') as HTMLInputElement | null
      el?.focus?.()
    }

    const blur = (): void => {
      const el = rootRef.value?.querySelector('input') as HTMLInputElement | null
      el?.blur?.()
    }

    const handleOpen = (): void => openDropdown()
    const handleClose = (): void => closeDropdown(false)

    expose({ focus, blur, handleOpen, handleClose })

    return {
      rootRef,
      triggerRef,
      dropdownRef,
      dropdownStyle,
      showSeconds,
      ...toRefs(state),
      draft,
      draftRange,
      openDropdown,
      closeDropdown,
      onKeydown,
      onPickSingleDraft,
      onPickRangeDraftStart,
      onPickRangeDraftEnd,
      commit,
      cancel,
      onClear,
      onFocus,
      onBlur,
      onInputUpdate,
      onStartInputUpdate,
      onEndInputUpdate,
      onStartFocus,
      onEndFocus
    }
  }
})
</script>

<template>
  <div ref="rootRef" class="dk-time-picker" :class="{ 'is-disabled': disabled }" @keydown="onKeydown">
    <div ref="triggerRef" class="dk-time-picker_trigger" @click="openDropdown">
      <template v-if="!isRange">
        <dk-input
          :id="typeof id === 'string' ? id : ''"
          :model-value="text"
          :name="typeof name === 'string' ? name : ''"
          :disabled="disabled"
          :readonly="readonly || !editable"
          :clearable="clearable"
          :placeholder="placeholder"
          :size="size"
          :prefix-icon="prefixIcon"
          :clear-icon="clearIcon"
          :tabindex="tabindex"
          :aria-label="ariaLabel"
          @update:model-value="onInputUpdate"
          @focus="onFocus"
          @blur="onBlur"
        />
      </template>

      <template v-else>
        <div class="dk-time-picker_range">
          <dk-input
            :id="Array.isArray(id) ? (id[0] || '') : ''"
            :model-value="startText"
            :name="Array.isArray(name) ? (name[0] || '') : ''"
            :disabled="disabled"
            :readonly="readonly || !editable"
            :clearable="false"
            :placeholder="startPlaceholder"
            :size="size"
            :prefix-icon="prefixIcon"
            :tabindex="tabindex"
            :aria-label="ariaLabel"
            @update:model-value="onStartInputUpdate"
            @focus="onStartFocus"
            @blur="onBlur"
          />
          <span class="dk-time-picker_range-separator">{{ rangeSeparator }}</span>
          <dk-input
            :id="Array.isArray(id) ? (id[1] || '') : ''"
            :model-value="endText"
            :name="Array.isArray(name) ? (name[1] || '') : ''"
            :disabled="disabled"
            :readonly="readonly || !editable"
            :clearable="clearable"
            :placeholder="endPlaceholder"
            :size="size"
            :clear-icon="clearIcon"
            :tabindex="tabindex"
            :aria-label="ariaLabel"
            @update:model-value="onEndInputUpdate"
            @focus="onEndFocus"
            @blur="onBlur"
          />
        </div>
      </template>
    </div>

    <transition name="Dk-trigger">
      <teleport v-if="teleported" to="body">
        <div
          v-show="open"
          ref="dropdownRef"
          class="dk-time-picker_dropdown"
          :class="popperClass"
          :style="[dropdownStyle, popperStyle]"
          @mousedown.prevent
          @click.stop
        >
          <template v-if="!isRange">
            <dk-time-picker-panel
              :model-value="draft || undefined"
              :disabled="disabled"
              :arrow-control="arrowControl"
              :show-seconds="showSeconds"
              :disabled-hours="disabledHours"
              :disabled-minutes="disabledMinutes"
              :disabled-seconds="disabledSeconds"
              @update:model-value="onPickSingleDraft"
            />
          </template>

          <template v-else>
            <div class="dk-time-picker_range-panel">
              <div class="dk-time-picker_range-header">
                <span class="dk-time-picker_range-title">Start Time</span>
                <span class="dk-time-picker_range-title">End Time</span>
              </div>
              <div class="dk-time-picker_range-body">
                <dk-time-picker-panel
                  :model-value="draftRange[0] || undefined"
                  :disabled="disabled"
                  :arrow-control="arrowControl"
                  :show-seconds="showSeconds"
                  :disabled-hours="disabledHours"
                  :disabled-minutes="disabledMinutes"
                  :disabled-seconds="disabledSeconds"
                  @update:model-value="onPickRangeDraftStart"
                />
                <dk-time-picker-panel
                  :model-value="draftRange[1] || undefined"
                  :disabled="disabled"
                  :arrow-control="arrowControl"
                  :show-seconds="showSeconds"
                  :disabled-hours="disabledHours"
                  :disabled-minutes="disabledMinutes"
                  :disabled-seconds="disabledSeconds"
                  @update:model-value="onPickRangeDraftEnd"
                />
              </div>
            </div>
          </template>

          <div class="dk-time-picker_footer">
            <button type="button" class="dk-time-picker_btn" :disabled="disabled" @click="cancel">Cancel</button>
            <button type="button" class="dk-time-picker_btn primary" :disabled="disabled" @click="commit">OK</button>
          </div>
        </div>
      </teleport>

      <div
        v-else
        v-show="open"
        ref="dropdownRef"
        class="dk-time-picker_dropdown"
        :class="popperClass"
        :style="[popperStyle]"
        @mousedown.prevent
        @click.stop
      >
        <template v-if="!isRange">
          <dk-time-picker-panel
            :model-value="draft || undefined"
            :disabled="disabled"
            :arrow-control="arrowControl"
            :show-seconds="showSeconds"
            :disabled-hours="disabledHours"
            :disabled-minutes="disabledMinutes"
            :disabled-seconds="disabledSeconds"
            @update:model-value="onPickSingleDraft"
          />
        </template>

        <template v-else>
          <div class="dk-time-picker_range-panel">
            <div class="dk-time-picker_range-header">
              <span class="dk-time-picker_range-title">Start Time</span>
              <span class="dk-time-picker_range-title">End Time</span>
            </div>
            <div class="dk-time-picker_range-body">
              <dk-time-picker-panel
                :model-value="draftRange[0] || undefined"
                :disabled="disabled"
                :arrow-control="arrowControl"
                :show-seconds="showSeconds"
                :disabled-hours="disabledHours"
                :disabled-minutes="disabledMinutes"
                :disabled-seconds="disabledSeconds"
                @update:model-value="onPickRangeDraftStart"
              />
              <dk-time-picker-panel
                :model-value="draftRange[1] || undefined"
                :disabled="disabled"
                :arrow-control="arrowControl"
                :show-seconds="showSeconds"
                :disabled-hours="disabledHours"
                :disabled-minutes="disabledMinutes"
                :disabled-seconds="disabledSeconds"
                @update:model-value="onPickRangeDraftEnd"
              />
            </div>
          </div>
        </template>

        <div class="dk-time-picker_footer">
          <button type="button" class="dk-time-picker_btn" :disabled="disabled" @click="cancel">Cancel</button>
          <button type="button" class="dk-time-picker_btn primary" :disabled="disabled" @click="commit">OK</button>
        </div>
      </div>
    </transition>
  </div>
</template>
