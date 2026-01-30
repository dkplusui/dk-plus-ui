<script lang="ts">
import { defineComponent, computed, reactive, toRefs, watch } from 'vue'
import { dkTimeSelectProps } from './props'
import { timeSelectEmits } from './emit'
import { buildTimeList } from './utils'

export default defineComponent({
  name: 'DkTimeSelect',
  props: dkTimeSelectProps,
  emits: timeSelectEmits,
  setup(props, { emit }) {
    const state = reactive({
      open: false,
      text: props.modelValue
    })

    watch(
      () => props.modelValue,
      v => {
        state.text = v || ''
      },
      { immediate: true }
    )

    const options = computed(() => buildTimeList(props.start, props.end, props.step))

    const onPick = (v: string): void => {
      if (props.disabled) return
      state.text = v
      emit('update:modelValue', v)
      emit('change', v)
      state.open = false
    }

    const onClear = (): void => {
      if (props.disabled) return
      state.text = ''
      emit('update:modelValue', '')
      emit('change', '')
      emit('clear')
      state.open = false
    }

    const onFocus = (evt: FocusEvent): void => {
      if (props.disabled) return
      state.open = true
      emit('focus', evt)
    }

    const onBlur = (evt: FocusEvent): void => {
      emit('blur', evt)
    }

    return {
      ...toRefs(state),
      options,
      onPick,
      onClear,
      onFocus,
      onBlur
    }
  }
})
</script>

<template>
  <div class="dk-time-select" :class="{ 'is-disabled': disabled }">
    <dk-input
      :id="id"
      v-model="text"
      :name="name"
      :disabled="disabled"
      :readonly="!editable"
      :clearable="clearable"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
    />

    <div v-show="open" class="dk-time-select__dropdown" @mousedown.prevent>
      <button
        v-for="t in options"
        :key="t"
        class="dk-time-select__option"
        type="button"
        @click="onPick(t)"
      >
        {{ t }}
      </button>
      <button v-if="clearable" class="dk-time-select__clear" type="button" @click="onClear">清空</button>
    </div>
  </div>
</template>
