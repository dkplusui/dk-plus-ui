<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  watch,
  nextTick,
  onBeforeUnmount,
  computed,
  onMounted
} from 'vue'
import { dkDatePickerProps } from './props'
import { datePickerEmits } from './emit'
import type { DatePickerType, DatePickerShortcut, DateModelValue } from './pickerTypes'
import { formatByPattern, parseByPattern, coerceToDate } from './dateFormats'

export default defineComponent({
  name: 'DkDatePicker',
  props: dkDatePickerProps,
  emits: datePickerEmits,
  setup(props, { emit }) {
    const rootRef = ref<HTMLElement>()
    const triggerRef = ref<HTMLElement>()
    const dropdownRef = ref<HTMLElement>()

    const isRange = computed(() => String(props.type || 'date').includes('range'))
    const isDaterange = computed(() => (props.type as DatePickerType) === 'daterange')

    const data = reactive({
      open: false,
      text: '',
      startText: '',
      endText: '',
      committed: null as Date | null,
      committedRange: [null, null] as [Date | null, Date | null],
      draft: null as Date | null,
      draftRange: [null, null] as [Date | null, Date | null],
      rangePicking: 0 as 0 | 1
    })

    let syncingFromProps = false

    const isEmptyValue = (val: unknown): boolean => {
      if (val === '' || val === null || val === undefined) return true
      const list = props.emptyValues
      if (!list) return false
      return Array.isArray(list) && list.some(v => Object.is(v, val))
    }

    const normalizeOne = (val: unknown): Date | null => {
      if (isEmptyValue(val)) return null
      const direct = coerceToDate(val)
      if (direct) return direct
      if (typeof val === 'string') {
        const pattern = props.valueFormat || props.format || 'YYYY-MM-DD'
        return parseByPattern(val, pattern)
      }
      return null
    }

    const normalizeModel = (val: DateModelValue): { single: Date | null; range: [Date | null, Date | null] } => {
      if (isRange.value) {
        const arr = Array.isArray(val) ? val : []
        const start = normalizeOne(arr[0])
        const end = normalizeOne(arr[1])
        return { single: null, range: [start, end] }
      }
      return { single: normalizeOne(val), range: [null, null] }
    }

    const toBindValue = (d: Date | null): unknown => {
      if (!d) return props.valueFormat ? '' : null
      if (!props.valueFormat) return d
      if (props.valueFormat === 'timestamp') return d.getTime()
      return formatByPattern(d, props.valueFormat)
    }

    const toBindRange = (r: [Date | null, Date | null]): unknown => {
      const [s, e] = r
      if (!s && !e) return []
      if (!props.valueFormat) return [s, e]
      if (props.valueFormat === 'timestamp') return [s ? s.getTime() : '', e ? e.getTime() : '']
      return [s ? formatByPattern(s, props.valueFormat) : '', e ? formatByPattern(e, props.valueFormat) : '']
    }

    const displayOne = (d: Date | null): string => {
      if (!d) return ''
      return formatByPattern(d, props.format || 'YYYY-MM-DD')
    }

    const toPanelValue = (d: Date | null): string => {
      if (!d) return ''
      return formatByPattern(d, 'YYYY-MM-DD')
    }

    const getValueOnClear = (): unknown => {
      const v = props.valueOnClear
      if (typeof v === 'function') {
        try {
          return (v as () => unknown)()
        } catch {
          return []
        }
      }
      if (v !== undefined) return v
      return isRange.value ? [] : (props.valueFormat ? '' : null)
    }

    const commitDraft = (): void => {
      if (isRange.value) {
        const next = toBindRange(data.draftRange)
        emit('update:modelValue', next)
        emit('change', next)
        return
      }
      const next = toBindValue(data.draft)
      emit('update:modelValue', next)
      emit('change', next)
    }

    const dropdownStyle = ref<Record<string, string | number>>({})

    const refreshDropdownPosition = (): void => {
      if (!props.teleported) return
      if (!triggerRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      const panelW = parseFloat(String(props.panelWidth || '320')) || 320
      const panelH = 360
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
      dropdownStyle.value = {
        position: 'fixed',
        top: `${Math.max(0, top)}px`,
        left: `${Math.max(0, left)}px`,
        width: props.panelWidth,
        zIndex: 2023
      }
    }

    const documentListen = (evt: MouseEvent): void => {
      const target = evt.target as Node
      const rootEl = rootRef.value
      const dropEl = dropdownRef.value

      if (rootEl && rootEl.contains(target)) return
      if (dropEl && dropEl.contains(target)) return

      // Element Plus: when confirm button is shown, clicking outside should NOT auto-confirm.
      if (!props.showConfirm) {
        // keep current behavior: selecting a date already commits when showConfirm=false
      }
      closeDropdown()
    }

    const openDropdown = (): void => {
      if (props.disabled) return
      if (data.open) return
      data.open = true
      emit('visible-change', true)
      data.draft = data.committed
      data.draftRange = [...data.committedRange] as [Date | null, Date | null]
      data.rangePicking = 0
      document.addEventListener('click', documentListen)
      nextTick(() => refreshDropdownPosition())
    }

    const closeDropdown = (): void => {
      if (!data.open) return
      data.open = false
      emit('visible-change', false)
      document.removeEventListener('click', documentListen)
    }

    const onFocus = (evt: FocusEvent): void => {
      if (props.automaticDropdown) openDropdown()
      emit('focus', evt)
    }

    const onBlur = (evt: FocusEvent): void => {
      emit('blur', evt)
    }

    const applyShortcut = (shortcut: DatePickerShortcut): void => {
      if (props.disabled) return
      const raw = typeof shortcut.value === 'function' ? shortcut.value() : shortcut.value
      const d = normalizeOne(raw)
      if (!d) return
      data.draft = d
      data.text = displayOne(d)
      if (!props.showConfirm) {
        commitDraft()
        closeDropdown()
      }
    }

    const onPickSingle = (value: string): void => {
      if (props.disabled) return
      const picked = parseByPattern(value, 'YYYY-MM-DD')
      if (!picked) return
      data.draft = picked
      data.text = displayOne(picked)
      if (!props.showConfirm) {
        commitDraft()
        closeDropdown()
      }
    }

    const onPickRange = (value: string): void => {
      if (props.disabled) return
      if (!isDaterange.value) return
      const picked = parseByPattern(value, 'YYYY-MM-DD')
      if (!picked) return

      const [s] = data.draftRange
      if (data.rangePicking === 0) {
        data.draftRange = [picked, null]
        data.rangePicking = 1
        emit('calendar-change', toBindRange([picked, null]))
      } else {
        const start = s
        if (start && picked.getTime() < start.getTime()) {
          data.draftRange = [picked, start]
        } else {
          data.draftRange = [start, picked]
        }
        data.rangePicking = 0
        emit('calendar-change', toBindRange(data.draftRange))
        data.startText = displayOne(data.draftRange[0])
        data.endText = displayOne(data.draftRange[1])
        if (!props.showConfirm) {
          commitDraft()
          closeDropdown()
        }
      }
    }

    const onConfirm = (): void => {
      if (props.disabled) return
      if (!props.showConfirm) return
      commitDraft()
      closeDropdown()
    }

    const onClear = (): void => {
      if (props.disabled) return
      const next = getValueOnClear()
      emit('update:modelValue', next)
      emit('change', next)
      emit('clear')
      closeDropdown()
    }

    const onKeydown = (evt: KeyboardEvent): void => {
      if (evt.key === 'Escape') closeDropdown()
      if (evt.key === 'Enter') {
        if (props.disabled) return
        if (!props.editable || props.readonly) return
        if (isRange.value) return
        const parsed = parseByPattern(data.text, props.format || 'YYYY-MM-DD')
        if (!parsed) return
        data.draft = parsed
        if (!props.showConfirm) {
          commitDraft()
        }
      }
    }

    const rootStyle = computed((): Record<string, string> => {
      return {
        '--date-picker-panel-width': props.panelWidth
      }
    })

    const resolvedClearIcon = computed(() => {
      return typeof props.clearIcon === 'string' ? props.clearIcon : undefined
    })

    const resolvedPrefixIcon = computed(() => {
      if (typeof props.prefixIcon === 'string' && props.prefixIcon) return props.prefixIcon

      const t = String(props.type || 'date').toLowerCase()

      // Element Plus 风格：仅 time/timerange 用时钟，其它日期类用日历
      if (t === 'time' || t === 'timerange') return 'IconClock'
      return 'IconCalendar'
    })

    watch(
      () => props.modelValue,
      v => {
        syncingFromProps = true
        const normalized = normalizeModel(v as DateModelValue)
        data.committed = normalized.single
        data.committedRange = normalized.range
        data.draft = normalized.single
        data.draftRange = [...normalized.range] as [Date | null, Date | null]
        data.text = displayOne(normalized.single)
        data.startText = displayOne(normalized.range[0])
        data.endText = displayOne(normalized.range[1])
        nextTick(() => {
          syncingFromProps = false
        })
      },
      { immediate: true }
    )

    watch(
      () => data.text,
      (val, oldVal) => {
        if (syncingFromProps) return
        if (!props.editable || props.readonly) return
        if (oldVal && !val) onClear()
      }
    )

    watch(
      () => [data.startText, data.endText] as const,
      (val, oldVal) => {
        if (syncingFromProps) return
        if (!props.editable || props.readonly) return
        if (!isRange.value) return
        const [s, e] = val
        const [os, oe] = oldVal
        if ((os || oe) && !s && !e) onClear()
      }
    )

    watch(
      () => props.disabled,
      d => {
        if (d) closeDropdown()
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

    return {
      rootRef,
      triggerRef,
      dropdownRef,
      ...toRefs(data),
      isRange,
      rootStyle,
      dropdownStyle,
      resolvedClearIcon,
      resolvedPrefixIcon,
      displayOne,
      toPanelValue,
      openDropdown,
      closeDropdown,
      onFocus,
      onBlur,
      onKeydown,
      applyShortcut,
      onPickSingle,
      onPickRange,
      onConfirm,
      onClear,
      refreshDropdownPosition
    }
  }
})
</script>

<template>
  <div
    ref="rootRef"
    class="dk-date-picker"
    :class="{ 'is-disabled': disabled }"
    :style="rootStyle"
    @keydown="onKeydown"
  >
    <div ref="triggerRef" class="dk-date-picker_trigger" @click="openDropdown">
      <template v-if="!isRange">
        <dk-input
          :id="typeof id === 'string' ? id : ''"
          v-model="text"
          :disabled="disabled"
          :readonly="readonly || !editable"
          :clearable="clearable"
          :placeholder="placeholder"
          :width="width"
          :size="size"
          :name="typeof name === 'string' ? name : ''"
          :prefix-icon="resolvedPrefixIcon"
          :clear-icon="resolvedClearIcon"
          @focus="onFocus"
          @blur="onBlur"
        />
      </template>
      <template v-else>
        <div class="dk-date-picker_range">
          <dk-input
            :id="Array.isArray(id) ? (id[0] || '') : ''"
            v-model="startText"
            :disabled="disabled"
            :readonly="readonly || !editable"
            :clearable="false"
            :placeholder="startPlaceholder"
            :width="'auto'"
            :size="size"
            :name="Array.isArray(name) ? (name[0] || '') : ''"
            :prefix-icon="resolvedPrefixIcon"
            @focus="onFocus"
            @blur="onBlur"
          />
          <span class="dk-date-picker_range-separator">{{ rangeSeparator }}</span>
          <dk-input
            :id="Array.isArray(id) ? (id[1] || '') : ''"
            v-model="endText"
            :disabled="disabled"
            :readonly="readonly || !editable"
            :clearable="clearable"
            :placeholder="endPlaceholder"
            :width="'auto'"
            :size="size"
            :name="Array.isArray(name) ? (name[1] || '') : ''"
            :clear-icon="resolvedClearIcon"
            @focus="onFocus"
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
          class="dk-date-picker_dropdown"
          :class="popperClass"
          :style="[dropdownStyle, popperStyle]"
          @mousedown.prevent
          @click.stop
        >
          <div v-if="shortcuts && shortcuts.length" class="dk-date-picker_shortcuts">
            <button
              v-for="s in shortcuts"
              :key="s.text"
              type="button"
              class="dk-date-picker_shortcut"
              :disabled="disabled"
              @click="applyShortcut(s)"
            >
              {{ s.text }}
            </button>
          </div>

          <dk-date-picker-panel
            v-if="!isRange"
            :model-value="toPanelValue(draft)"
            :disabled="disabled"
            :width="panelWidth"
            :first-day-of-week="firstDayOfWeek"
            :disabled-date="disabledDate"
            @update:model-value="onPickSingle"
            @panel-change="$emit('panel-change', $event)"
          />

          <dk-date-picker-panel
            v-else
            :model-value="toPanelValue(draftRange[0] || draftRange[1])"
            :disabled="disabled"
            :width="panelWidth"
            :first-day-of-week="firstDayOfWeek"
            :disabled-date="disabledDate"
            @update:model-value="onPickRange"
            @panel-change="$emit('panel-change', $event)"
          />

          <div v-if="showFooter" class="dk-date-picker_footer">
            <button v-if="clearable" type="button" class="dk-date-picker_footer-btn" :disabled="disabled" @click="onClear">清空</button>
            <button v-if="showConfirm" type="button" class="dk-date-picker_footer-btn primary" :disabled="disabled" @click="onConfirm">确定</button>
          </div>
        </div>
      </teleport>

      <div
        v-else
        v-show="open"
        ref="dropdownRef"
        class="dk-date-picker_dropdown"
        :class="popperClass"
        :style="[popperStyle]"
        @mousedown.prevent
        @click.stop
      >
        <div v-if="shortcuts && shortcuts.length" class="dk-date-picker_shortcuts">
          <button
            v-for="s in shortcuts"
            :key="s.text"
            type="button"
            class="dk-date-picker_shortcut"
            :disabled="disabled"
            @click="applyShortcut(s)"
          >
            {{ s.text }}
          </button>
        </div>

        <dk-date-picker-panel
          v-if="!isRange"
          :model-value="toPanelValue(draft)"
          :disabled="disabled"
          :width="panelWidth"
          :first-day-of-week="firstDayOfWeek"
          :disabled-date="disabledDate"
          @update:model-value="onPickSingle"
          @panel-change="$emit('panel-change', $event)"
        />

        <dk-date-picker-panel
          v-else
          :model-value="toPanelValue(draftRange[0] || draftRange[1])"
          :disabled="disabled"
          :width="panelWidth"
          :first-day-of-week="firstDayOfWeek"
          :disabled-date="disabledDate"
          @update:model-value="onPickRange"
          @panel-change="$emit('panel-change', $event)"
        />

        <div v-if="showFooter" class="dk-date-picker_footer">
          <button v-if="clearable" type="button" class="dk-date-picker_footer-btn" :disabled="disabled" @click="onClear">清空</button>
          <button v-if="showConfirm" type="button" class="dk-date-picker_footer-btn primary" :disabled="disabled" @click="onConfirm">确定</button>
        </div>
      </div>
    </transition>
  </div>
</template>
