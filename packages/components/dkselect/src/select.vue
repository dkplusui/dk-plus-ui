<script lang="ts">
import { defineComponent, reactive, toRefs, watch, computed, nextTick, ref, onBeforeUnmount, provide } from 'vue'
import { dkSelectProps, SELECT_PROPS_TOKEN } from './props'

type SelectValue = string | number | boolean | Record<string, unknown>
type Option = { label: string; value: SelectValue; disabled?: boolean }
type Model = SelectValue | SelectValue[]

export default defineComponent({
  name: 'DkSelect',
  props: dkSelectProps,
  emits: {
    'update:modelValue': (_v: Model) => true,
    change: (_v: Model) => true,
    clear: () => true,
    'visible-change': (_v: boolean) => true,
    focus: (_evt: FocusEvent) => true,
    blur: (_evt: FocusEvent) => true,
    'remove-tag': (_tagValue: SelectValue) => true,
    'popup-scroll': (_evt: Event) => true
  },
  setup(props, { emit, slots }) {
    const triggerCompRef = ref<any>(null)
    const triggerElRef = ref<HTMLElement | null>(null)
    const dropdownRef = ref<HTMLElement | null>(null)

    const state = reactive({
      query: '',
      open: false,
      hoverIndex: -1,
      hovering: false,
      dropdownStyle: {} as Record<string, string>,
      debounceTimer: 0 as unknown as number
    })

    const optionKeys = computed(() => {
      const p = props.props || {}
      return {
        value: (p.value || 'value') as string,
        label: (p.label || 'label') as string,
        disabled: (p.disabled || 'disabled') as string
      }
    })

    const equalsValue = (a: SelectValue, b: SelectValue): boolean => {
      if (a === b) return true
      if (a == null || b == null) return false
      if (typeof a === 'object' && typeof b === 'object') {
        const key = props.valueKey || 'value'
        return (a as Record<string, unknown>)[key] === (b as Record<string, unknown>)[key]
      }
      return false
    }

    const normalizeOptions = computed((): Option[] => {
      const list = (props.options || []) as Array<Record<string, unknown>>
      const keys = optionKeys.value
      return list.map(item => {
        const value = item[keys.value] as SelectValue
        const labelRaw = item[keys.label]
        const label = String(labelRaw ?? value ?? '')
        const disabled = !!item[keys.disabled]
        return { label, value, disabled }
      })
    })

    const selectedList = computed(() => {
      const opts = normalizeOptions.value
      const mv = props.modelValue as unknown
      const values = props.multiple ? (Array.isArray(mv) ? (mv as SelectValue[]) : []) : [mv as SelectValue]
      return values
        .map(v => {
          const found = opts.find(o => equalsValue(o.value, v))
          return found ? { value: found.value, label: found.label } : null
        })
        .filter(Boolean) as Array<{ value: SelectValue; label: string }>
    })

    const displayText = computed(() => {
      if (props.multiple) return ''
      return selectedList.value[0]?.label ?? ''
    })

    const hasValue = computed(() => {
      if (props.multiple) return selectedList.value.length > 0
      return selectedList.value.length > 0 && selectedList.value[0]?.label !== ''
    })

    const showClear = computed(() => {
      return !!props.clearable && !props.disabled && hasValue.value && (state.hovering || state.open)
    })

    const inputText = computed({
      get: () => {
        if (props.multiple) {
          return props.filterable && state.open ? state.query : ''
        }
        if (props.filterable && state.open) return state.query
        return displayText.value
      },
      set: (val: string) => {
        if (!props.filterable) return
        state.query = val
        if (!props.disabled) setOpen(true)

        if (props.remote && typeof props.remoteMethod === 'function') {
          if (state.debounceTimer) window.clearTimeout(state.debounceTimer)
          state.debounceTimer = window.setTimeout(() => {
            props.remoteMethod?.(state.query)
          }, props.debounce || 300) as unknown as number
        }
      }
    })

    const filteredOptions = computed(() => {
      const opts = normalizeOptions.value
      if (!props.filterable) return opts
      const q = state.query.trim()
      if (!q) return opts

      // remote: options 由外部控制，不在本地过滤
      if (props.remote) return opts

      // filterMethod: 兼容现有签名 (query)=>boolean
      if (typeof props.filterMethod === 'function') {
        try {
          return props.filterMethod(q) ? opts : []
        } catch {
          return opts
        }
      }

      const lower = q.toLowerCase()
      return opts.filter(o => String(o.label).toLowerCase().includes(lower))
    })

    const emptyDisplayText = computed(() => {
      if (props.loading) return props.loadingText || 'Loading'
      if (props.filterable && state.query.trim() && filteredOptions.value.length === 0) {
        return props.noMatchText || props.emptyText
      }
      if (normalizeOptions.value.length === 0) return props.noDataText || props.emptyText
      if (filteredOptions.value.length === 0) return props.emptyText
      return ''
    })

    const collapsedTags = computed(() => {
      if (!props.multiple) return []
      if (!props.collapseTags) return selectedList.value
      const max = Math.max(0, props.maxCollapseTags || 1)
      return selectedList.value.slice(0, max)
    })

    const collapsedMoreCount = computed(() => {
      if (!props.multiple || !props.collapseTags) return 0
      const max = Math.max(0, props.maxCollapseTags || 1)
      return Math.max(0, selectedList.value.length - max)
    })

    const multiplePlaceholder = computed(() => {
      if (!props.multiple) return props.placeholder
      return selectedList.value.length ? '' : props.placeholder
    })

    const hasDefaultSlot = computed(() => {
      return !!slots.default
    })

    const isValueSelected = (value: SelectValue): boolean => {
      if (props.multiple) {
        const mv = props.modelValue
        return Array.isArray(mv) ? (mv as SelectValue[]).some(v => equalsValue(v, value)) : false
      }
      return equalsValue(props.modelValue as unknown as SelectValue, value)
    }

    provide(SELECT_PROPS_TOKEN, {
      setValue: (value: unknown, label: unknown, evt: MouseEvent, disabled?: boolean): void => {
        evt?.stopPropagation?.()
        onPick({ value: value as SelectValue, label: String(label ?? ''), disabled: !!disabled })
      },
      isSelected: (value: unknown): boolean => {
        return isValueSelected(value as SelectValue)
      }
    })

    const syncHoverIndex = (): void => {
      const opts = filteredOptions.value
      if (!opts.length) {
        state.hoverIndex = -1
        return
      }

      const selectedValue = selectedList.value[0]?.value
      const idx = opts.findIndex(o => o.value === selectedValue && !o.disabled)
      state.hoverIndex = idx >= 0 ? idx : opts.findIndex(o => !o.disabled)
    }

    const setOpen = (v: boolean): void => {
      state.open = v
      emit('visible-change', v)
      if (v) {
        nextTick(() => {
          refreshDropdownPosition()
          syncHoverIndex()
          window.addEventListener('resize', refreshDropdownPosition)
          window.addEventListener('scroll', refreshDropdownPosition, true)
        })
      } else {
        window.removeEventListener('resize', refreshDropdownPosition)
        window.removeEventListener('scroll', refreshDropdownPosition, true)
        // 关闭时恢复展示文本（单选）
        if (!props.multiple) state.query = ''
        state.hoverIndex = -1
      }
    }

    const refreshDropdownPosition = (): void => {
      const triggerEl = triggerElRef.value
      if (!triggerEl) return
      const rect = triggerEl.getBoundingClientRect()
      const top = rect.bottom + (props.offset || 0)
      const left = rect.left
      state.dropdownStyle = {
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        minWidth: props.width || `${rect.width}px`,
        zIndex: '3000'
      }
    }

    const onOpen = (): void => {
      if (props.disabled) return
      setOpen(true)
    }

    const onClose = (): void => {
      setOpen(false)
    }

    const closeByTrigger = (): void => {
      // DkTrigger 内部才是弹层显示的真正状态；这里需要主动调用其关闭方法
      // Options API 组件的实例会暴露 setup return 中的方法
      triggerCompRef.value?.handelClose?.()
      triggerCompRef.value?.close?.()
      setOpen(false)
    }

    const onTriggerChange = (v: boolean): void => {
      setOpen(v)
    }

    const updateModel = (next: Model): void => {
      emit('update:modelValue', next)
      emit('change', next)
    }

    const onPick = (opt: Option): void => {
      if (props.disabled || opt.disabled) return

      if (props.multiple) {
        const arr = Array.isArray(props.modelValue) ? ([...props.modelValue] as SelectValue[]) : ([] as SelectValue[])
        const idx = arr.findIndex(v => equalsValue(v, opt.value))
        if (idx >= 0) {
          arr.splice(idx, 1)
          updateModel(arr)
          return
        }

        const limit = props.multipleLimit || 0
        if (limit > 0 && arr.length >= limit) return

        arr.push(opt.value)
        updateModel(arr)
        return
      }

      updateModel(opt.value)
      state.query = ''
      closeByTrigger()
    }

    const onClear = (): void => {
      if (props.disabled) return
      if (props.multiple) updateModel([])
      else updateModel('')
      state.query = ''
      emit('clear')
      closeByTrigger()
    }

    const onRemoveTag = (val: SelectValue): void => {
      if (props.disabled) return
      if (!props.multiple) return
      const arr = Array.isArray(props.modelValue) ? ([...props.modelValue] as SelectValue[]) : ([] as SelectValue[])
      const idx = arr.findIndex(v => equalsValue(v, val))
      if (idx >= 0) arr.splice(idx, 1)
      updateModel(arr)
      emit('remove-tag', val)
    }

    watch(
      () => props.disabled,
      d => {
        if (d) closeByTrigger()
      }
    )

    watch(
      () => props.modelValue,
      () => {
        // 值变化后更新 hover 定位
        if (state.open) syncHoverIndex()
      }
    )

    const isSelected = (opt: Option): boolean => {
      if (props.multiple) {
        const mv = props.modelValue
        return Array.isArray(mv) ? (mv as SelectValue[]).some(v => equalsValue(v, opt.value)) : false
      }
      return equalsValue(props.modelValue as unknown as SelectValue, opt.value)
    }

    const moveHover = (delta: number): void => {
      const opts = filteredOptions.value
      if (!opts.length) return
      let idx = state.hoverIndex
      if (idx < 0) idx = 0
      for (let i = 0; i < opts.length; i += 1) {
        idx = (idx + delta + opts.length) % opts.length
        if (!opts[idx].disabled) {
          state.hoverIndex = idx
          return
        }
      }
    }

    const pickHover = (): void => {
      const opts = filteredOptions.value
      const idx = state.hoverIndex
      if (idx < 0 || idx >= opts.length) return
      onPick(opts[idx])
    }

    const onKeydown = (evt: KeyboardEvent): void => {
      if (props.disabled) return
      if (evt.key === 'Escape') {
        onClose()
        return
      }
      if (evt.key === 'ArrowDown') {
        evt.preventDefault()
        if (!state.open) onOpen()
        moveHover(1)
        return
      }
      if (evt.key === 'ArrowUp') {
        evt.preventDefault()
        if (!state.open) onOpen()
        moveHover(-1)
        return
      }
      if (evt.key === 'Enter') {
        if (!state.open) {
          onOpen()
          return
        }
        evt.preventDefault()
        pickHover()
      }
    }

    const onFocus = (evt: FocusEvent): void => emit('focus', evt)
    const onBlur = (evt: FocusEvent): void => emit('blur', evt)

    const onPopupScroll = (evt: Event): void => {
      emit('popup-scroll', evt)
    }

    onBeforeUnmount(() => {
      window.removeEventListener('resize', refreshDropdownPosition)
      window.removeEventListener('scroll', refreshDropdownPosition, true)
      if (state.debounceTimer) window.clearTimeout(state.debounceTimer)
    })

    return {
      ...toRefs(state),
      triggerCompRef,
      triggerElRef,
      dropdownRef,
      selectedList,
      collapsedTags,
      collapsedMoreCount,
      multiplePlaceholder,
      displayText,
      hasValue,
      showClear,
      inputText,
      filteredOptions,
      emptyDisplayText,
      hasDefaultSlot,
      isSelected,
      onOpen,
      onClose,
      onTriggerChange,
      onPick,
      onClear,
      onRemoveTag,
      onKeydown,
      onFocus,
      onBlur,
      refreshDropdownPosition,
      onPopupScroll
    }
  }
})
</script>

<template>
  <div class="dk-select" :class="{ 'is-disabled': disabled, 'is-open': open, 'is-show-clear': showClear, 'is-multiple': multiple }" @keydown="onKeydown">
    <dk-trigger
      ref="triggerCompRef"
      trigger="click"
      :disabled="disabled"
      :on-open="onOpen"
      :on-close="onClose"
      :on-change="onTriggerChange"
      :content-ref="dropdownRef"
    >
      <div
        ref="triggerElRef"
        class="dk-select_trigger"
        :style="{ width }"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
        @click="refreshDropdownPosition"
      >
        <template v-if="multiple">
          <dk-input
            :id="id"
            :name="name"
            v-model="inputText"
            :disabled="disabled"
            :readonly="!filterable"
            :clearable="false"
            :placeholder="multiplePlaceholder"
            :size="size"
            :width="width"
            @focus="onFocus"
            @blur="onBlur"
          >
            <template v-if="collapsedTags.length || (collapseTags && collapsedMoreCount)" #prefix>
              <div class="dk-select_tags">
                <span v-for="t in collapsedTags" :key="String(t.value)" class="dk-select_tag">
                  {{ t.label }}
                  <button class="dk-select_tag-close" type="button" @click.stop="onRemoveTag(t.value)">×</button>
                </span>
                <span v-if="collapseTags && collapsedMoreCount" class="dk-select_tag dk-select_tag--more">+{{ collapsedMoreCount }}</span>
              </div>
            </template>
          </dk-input>
        </template>
        <template v-else>
          <dk-input
            :id="id"
            :name="name"
            v-model="inputText"
            :disabled="disabled"
            :readonly="!filterable"
            :clearable="false"
            :placeholder="displayText || placeholder"
            :size="size"
            :width="width"
            @focus="onFocus"
            @blur="onBlur"
          />
        </template>
        <dk-icon v-if="showClear" class="dk-select_clear" :icon="clearIcon" size="16px" @click.stop="onClear" />
        <dk-icon class="dk-select_arrow" :class="{ 'is-open': open }" :icon="suffixIcon" size="16px" />
      </div>

      <template #content>
        <teleport v-if="teleported" :to="appendTo">
          <div v-show="open" ref="dropdownRef" class="dk-select_dropdown" :class="popperClass" :style="[dropdownStyle, popperStyle]" @scroll.passive="onPopupScroll">
            <div v-if="$slots.header" class="dk-select_header"><slot name="header" /></div>

            <template v-if="hasDefaultSlot">
              <slot />
            </template>
            <template v-else>
              <button
                v-for="opt in filteredOptions"
                :key="String(opt.label) + String((opt as any).value)"
                class="dk-select_option"
                :class="{ 'is-selected': isSelected(opt), 'is-hover': hoverIndex >= 0 && filteredOptions[hoverIndex]?.label === opt.label }"
                type="button"
                :disabled="disabled || !!opt.disabled"
                @click.stop="onPick(opt)"
              >
                {{ opt.label }}
              </button>
            </template>

            <div v-if="(filteredOptions.length === 0 && !hasDefaultSlot) || loading" class="dk-select_empty">
              <slot v-if="$slots.loading && loading" name="loading" />
              <slot v-else-if="$slots.empty" name="empty" />
              <template v-else>{{ emptyDisplayText }}</template>
            </div>

            <div v-if="$slots.footer" class="dk-select_footer"><slot name="footer" /></div>
          </div>
        </teleport>
        <div v-else v-show="open" ref="dropdownRef" class="dk-select_dropdown" :class="popperClass" :style="[dropdownStyle, popperStyle]" @scroll.passive="onPopupScroll">
          <div v-if="$slots.header" class="dk-select_header"><slot name="header" /></div>

          <template v-if="hasDefaultSlot">
            <slot />
          </template>
          <template v-else>
            <button
              v-for="opt in filteredOptions"
              :key="String(opt.label) + String((opt as any).value)"
              class="dk-select_option"
              :class="{ 'is-selected': isSelected(opt), 'is-hover': hoverIndex >= 0 && filteredOptions[hoverIndex]?.label === opt.label }"
              type="button"
              :disabled="disabled || !!opt.disabled"
              @click.stop="onPick(opt)"
            >
              {{ opt.label }}
            </button>
          </template>

          <div v-if="(filteredOptions.length === 0 && !hasDefaultSlot) || loading" class="dk-select_empty">
            <slot v-if="$slots.loading && loading" name="loading" />
            <slot v-else-if="$slots.empty" name="empty" />
            <template v-else>{{ emptyDisplayText }}</template>
          </div>

          <div v-if="$slots.footer" class="dk-select_footer"><slot name="footer" /></div>
        </div>
      </template>
    </dk-trigger>
  </div>
</template>
