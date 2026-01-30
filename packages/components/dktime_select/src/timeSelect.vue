<script lang="ts">
import { defineComponent, computed, reactive, toRefs, watch, ref, onBeforeUnmount } from 'vue'
import { dkTimeSelectProps } from './props'
import { timeSelectEmits } from './emit'
import { buildTimeList, parseTimeToSeconds } from './utils'

export default defineComponent({
  name: 'DkTimeSelect',
  props: dkTimeSelectProps,
  emits: timeSelectEmits,
  setup(props, { emit }) {
    const rootRef = ref<HTMLElement | null>(null)

    const state = reactive({
      open: false,
      text: props.modelValue,
      committed: props.modelValue
    })

    watch(
      () => props.modelValue,
      v => {
        state.text = v || ''
        state.committed = v || ''
      },
      { immediate: true }
    )

    const optionItems = computed(() => {
      const list = buildTimeList(props.start, props.end, props.step)
      const min = props.minTime ? parseTimeToSeconds(props.minTime) : null
      const max = props.maxTime ? parseTimeToSeconds(props.maxTime) : null
      return list.map(v => {
        const sec = parseTimeToSeconds(v)
        const disabledByRange =
          sec == null ||
          (min != null && sec < min) ||
          (max != null && sec > max)

        let disabledByFn = false
        if (sec != null) {
          const hh = Math.floor(sec / 3600)
          const mm = Math.floor((sec % 3600) / 60)
          const ss = sec % 60

          const hours = typeof props.disabledHours === 'function' ? props.disabledHours() : []
          const minutes = typeof props.disabledMinutes === 'function' ? props.disabledMinutes(hh) : []
          const seconds = typeof props.disabledSeconds === 'function' ? props.disabledSeconds(hh, mm) : []

          disabledByFn =
            (Array.isArray(hours) && hours.includes(hh)) ||
            (Array.isArray(minutes) && minutes.includes(mm)) ||
            (Array.isArray(seconds) && seconds.includes(ss))
        }

        return { value: v, disabled: disabledByRange || disabledByFn }
      })
    })

    const isSelected = (v: string): boolean => {
      return (props.modelValue || '') === v
    }

    const isOptionDisabled = (v: string): boolean => {
      const found = optionItems.value.find(i => i.value === v)
      return !!found?.disabled
    }

    const commitValue = (v: string): void => {
      state.text = v
      state.committed = v
      emit('update:modelValue', v)
      emit('change', v)
    }

    const onPick = (v: string): void => {
      if (props.disabled) return
      if (isOptionDisabled(v)) return
      commitValue(v)
      state.open = false
    }

    const onClear = (): void => {
      if (props.disabled) return
      if (!state.text) {
        state.open = false
        return
      }
      state.text = ''
      state.committed = ''
      emit('update:modelValue', '')
      emit('change', '')
      emit('clear')
      state.open = false
    }

    const onInputUpdate = (v: string | number): void => {
      state.text = String(v ?? '')
    }

    const onFocus = (evt: FocusEvent): void => {
      if (props.disabled) return
      state.open = true
      emit('focus', evt)
    }

    const onBlur = (evt: FocusEvent): void => {
      // 手动输入：blur 时校验
      if (!props.editable || props.disabled) {
        emit('blur', evt)
        return
      }

      const next = (state.text || '').trim()
      if (!next) {
        if (state.committed) onClear()
        emit('blur', evt)
        return
      }

      const exists = optionItems.value.some(i => i.value === next && !i.disabled)
      if (exists) {
        if (next !== state.committed) commitValue(next)
      } else {
        // 非法输入回退
        state.text = state.committed
      }
      emit('blur', evt)
    }

    const onDocumentMousedown = (e: MouseEvent): void => {
      if (!state.open) return
      const root = rootRef.value
      const target = e.target as Node | null
      if (!root || !target) return
      if (!root.contains(target)) state.open = false
    }

    watch(
      () => state.open,
      open => {
        if (open) document.addEventListener('mousedown', onDocumentMousedown)
        else document.removeEventListener('mousedown', onDocumentMousedown)
      },
      { immediate: true }
    )

    onBeforeUnmount(() => {
      document.removeEventListener('mousedown', onDocumentMousedown)
    })

    return {
      ...toRefs(state),
      rootRef,
      optionItems,
      isSelected,
      onPick,
      onClear,
      onInputUpdate,
      onFocus,
      onBlur
    }
  }
})
</script>

<template>
  <div ref="rootRef" class="dk-time-select" :class="{ 'is-disabled': disabled }">
    <dk-input
      :id="id"
      :name="name"
      :model-value="text"
      :disabled="disabled"
      :readonly="!editable"
      :clearable="clearable"
      :placeholder="placeholder"
      @update:model-value="onInputUpdate"
      @focus="onFocus"
      @blur="onBlur"
    />

    <div v-show="open" class="dk-time-select_dropdown" @mousedown.prevent>
      <button
        v-for="it in optionItems"
        :key="it.value"
        class="dk-time-select_option"
        :class="{ 'is-selected': isSelected(it.value) }"
        type="button"
        :disabled="it.disabled"
        @click="onPick(it.value)"
      >
        {{ it.value }}
      </button>
      <button v-if="clearable" class="dk-time-select_clear" type="button" @click="onClear">清空</button>
    </div>
  </div>
</template>
