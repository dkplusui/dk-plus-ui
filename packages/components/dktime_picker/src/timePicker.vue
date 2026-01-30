<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from 'vue'
import { dkTimePickerProps } from './props'
import { timePickerEmits } from './emit'

export default defineComponent({
  name: 'DkTimePicker',
  props: dkTimePickerProps,
  emits: timePickerEmits,
  setup(props, { emit }) {
    const rootRef = ref<HTMLElement>()

    const state = reactive({
      open: false,
      text: '',
      startText: '',
      endText: ''
    })

    const syncFromModel = (): void => {
      if (props.isRange) {
        const arr = Array.isArray(props.modelValue) ? props.modelValue : []
        state.startText = String(arr[0] ?? '')
        state.endText = String(arr[1] ?? '')
      } else {
        state.text = String(Array.isArray(props.modelValue) ? props.modelValue[0] ?? '' : props.modelValue ?? '')
      }
    }

    watch(() => props.modelValue, syncFromModel, { immediate: true })

    const open = (): void => {
      if (props.disabled) return
      if (state.open) return
      state.open = true
      emit('visible-change', true)
      document.addEventListener('click', onDoc)
    }

    const close = (): void => {
      if (!state.open) return
      state.open = false
      emit('visible-change', false)
      document.removeEventListener('click', onDoc)
    }

    const onDoc = (evt: MouseEvent): void => {
      const el = rootRef.value
      if (!el) return
      if (el.contains(evt.target as Node)) return
      close()
    }

    const onPick = (val: string): void => {
      if (props.disabled) return
      if (props.isRange) {
        if (!state.startText || (state.startText && state.endText)) {
          state.startText = val
          state.endText = ''
          emit('update:modelValue', [state.startText, state.endText])
          emit('change', [state.startText, state.endText])
          return
        }
        state.endText = val
        emit('update:modelValue', [state.startText, state.endText])
        emit('change', [state.startText, state.endText])
        close()
        return
      }

      state.text = val
      emit('update:modelValue', val)
      emit('change', val)
      close()
    }

    const onClear = (): void => {
      if (props.disabled) return
      if (props.isRange) {
        state.startText = ''
        state.endText = ''
        emit('update:modelValue', ['', ''])
        emit('change', ['', ''])
      } else {
        state.text = ''
        emit('update:modelValue', '')
        emit('change', '')
      }
      emit('clear')
      close()
    }

    const onFocus = (evt: FocusEvent): void => {
      open()
      emit('focus', evt)
    }

    const onBlur = (evt: FocusEvent): void => {
      emit('blur', evt)
    }

    return {
      rootRef,
      ...toRefs(state),
      open,
      close,
      onPick,
      onClear,
      onFocus,
      onBlur
    }
  }
})
</script>

<template>
  <div ref="rootRef" class="dk-time-picker" :class="{ 'is-disabled': disabled }">
    <template v-if="!isRange">
      <dk-input
        :id="typeof id === 'string' ? id : ''"
        v-model="text"
        :name="typeof name === 'string' ? name : ''"
        :disabled="disabled"
        :readonly="!editable"
        :clearable="clearable"
        :placeholder="placeholder"
        @focus="onFocus"
        @blur="onBlur"
      />
    </template>
    <template v-else>
      <div class="dk-time-picker__range">
        <dk-input
          :id="Array.isArray(id) ? (id[0] || '') : ''"
          v-model="startText"
          :name="Array.isArray(name) ? (name[0] || '') : ''"
          :disabled="disabled"
          :readonly="!editable"
          :clearable="false"
          :placeholder="startPlaceholder"
          @focus="onFocus"
          @blur="onBlur"
        />
        <span class="dk-time-picker__range-separator">-</span>
        <dk-input
          :id="Array.isArray(id) ? (id[1] || '') : ''"
          v-model="endText"
          :name="Array.isArray(name) ? (name[1] || '') : ''"
          :disabled="disabled"
          :readonly="!editable"
          :clearable="clearable"
          :placeholder="endPlaceholder"
          @focus="onFocus"
          @blur="onBlur"
        />
      </div>
    </template>

    <div v-show="open" class="dk-time-picker__dropdown" @mousedown.prevent>
      <dk-time-select
        :model-value="isRange ? '' : text"
        start="00:00"
        end="23:30"
        step="00:30"
        :disabled="disabled"
        :clearable="false"
        @update:model-value="onPick"
      />
      <div class="dk-time-picker__footer">
        <button v-if="clearable" type="button" class="dk-time-picker__btn" :disabled="disabled" @click="onClear">清空</button>
      </div>
    </div>
  </div>
</template>
