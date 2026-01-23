<script lang="ts">
  /**
   * @name dk-input-number
   * @author WangYingJie
   * @Time July 3, 2023
   * @description
   * @function setParseFloat Retain Decimal Places
   * @function getModelValue Get the value of the input box
   * @type [string | number] modelValue The value of the input box
   * @params [boolean] disabled Whether to disable the input box
   * @params [boolean] reduceDisabled Whether to disable the reduce button
   * @params [boolean] plusDisabled Whether to disable the plus button
   * @function reduce Reduce the value of the input box
   * @function plus Increase the value of the input box
   * @function handleInputChange Input box value change event
   * @function handleMouseDown Mouse down event
   * @function handleMouseUp Mouse up event
   * @function handleMouseLeave Mouse leave event
   * @function reduceIcon Set icon for the reduce button
   * @function plusIcon Set icon for the plus button
   * @example
   */
  import { defineComponent, ref, reactive, shallowRef, watch } from 'vue'
  import { dkInputNumberProps } from './props'
  import type { DataType } from './type'
  import { getInputNumber } from '../../_hooks'
  import { DK_INPUT_NUMBER_POSITION } from '../../_tokens'

  export default defineComponent({
    name: 'DkInputNumber',
    props: dkInputNumberProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
      const input = shallowRef<HTMLInputElement>()

      const iconSizeTarget = {
        large: 24,
        medium: 20,
        small: 16,
        mini: 12
      }

      const data = reactive<DataType>({
        step: Number(props.step),
        min: props.min,
        max: props.max,
        size: props.size,
        iconSize: iconSizeTarget[props.size],
        strict: props.strict,
        precision: Number(props.precision),
        readonly: props.readonly,
        placeholder: props.placeholder,
        position: props.position
      })

      const reduceIcon = (): string => {
        // Verify legality or set default
        if (!!data.position && DK_INPUT_NUMBER_POSITION.includes(data.position) || typeof data.position === 'string') {
          data.iconSize -= 2
          return 'IconArrowBottom'
        }
        return 'IconReduce1'
      }
      
      const plusIcon = (): string => {
        // Verify legality or set default
        if (!!data.position && DK_INPUT_NUMBER_POSITION.includes(data.position) || typeof data.position === 'string') {
          return 'IconArrowTop'
        }
        return 'IconAdd1'
      }

      const setParseFloat = (value: number | string): number => {
        const targetValue = Number(value)
        const floatValue = targetValue.toFixed(data.precision)
        return parseFloat(floatValue)
      }

      const modelValue = ref<number>(props.modelValue)
      const showValue = ref<string | number>('')

      const disabled = ref<boolean>(props.disabled)

      const reduceDisabled = ref<boolean>(modelValue.value <= data.min)
      const plusDisabled = ref<boolean>(modelValue.value >= data.max)

      const reduce = (): void => {
        if (data.readonly) return
        const newValue = modelValue.value - data.step
        if (newValue < data.min) {
          modelValue.value = data.min
        } else {
          modelValue.value = newValue
        }
      }

      const plus = (): void => {
        if (data.readonly) return
        const newValue = modelValue.value + data.step
        if (newValue > data.max) {
          modelValue.value = data.max
        } else {
          modelValue.value = newValue
        }
      }

      const handleInputChange = (event: Event): void => {
        const target = event.target as HTMLInputElement
        const value = Number(target.value)
        if (data.strict) {
          const ceilValue = Math.ceil(value / data.step) * data.step
          modelValue.value = ceilValue
        } else {
          modelValue.value = value
        }
      }

      watch(
        () => props.modelValue,
        val => {
          let numberValue = Number(val)
          modelValue.value = numberValue
          showValue.value = val
          if (data.precision > 0) {
            showValue.value = numberValue.toFixed(data.precision)
          }
        },
        {
          immediate: true
        }
      )

      watch(
        (): number => modelValue.value,
        (val): void => {
          if (disabled.value) return

          let value: number = val

          reduceDisabled.value = value <= data.min
          plusDisabled.value = value >= data.max

          if (reduceDisabled.value) {
            value = data.min
          }

          if (plusDisabled.value) {
            value = data.max
          }

          if (data.precision) {
            value = setParseFloat(value)
          }

          emit('update:modelValue', value)
          emit('change', value)
        }
      )

      const { classList, styleList } = getInputNumber(props)

      let timer = ref<NodeJS.Timeout | undefined>()
      let timerOut = ref<NodeJS.Timeout | undefined>()
      const handleMouseDown = (event: MouseEvent, mode: Function): void => {
        mode()()
        timerOut.value = setTimeout(() => {
          if (timerOut.value) {
            clearTimeout(timerOut.value)
          }
          timer.value = setInterval(() => {
            mode()()
          }, 70)
        }, 700)
      }
      const clearTimer = (): void => {
        timer.value && clearInterval(timer.value as NodeJS.Timeout)
        timerOut.value && clearTimeout(timerOut.value as NodeJS.Timeout)
      }
      const handleMouseLeave = (): void => {
        clearTimer()
      }
      const handleMouseUp = (): void => {
        clearTimer()
      }

      return {
        ...data,
        reduce,
        plus,
        value: showValue,
        input,
        classList,
        styleList,
        plusDisabled,
        reduceDisabled,
        disabled,
        handleInputChange,
        handleMouseDown,
        handleMouseLeave,
        handleMouseUp,
        reduceIcon: reduceIcon(),
        plusIcon: plusIcon()
      }
    }
  })
</script>

<template>
  <div :class="classList" :style="styleList">
    <dk-button
      class="dk-input-number_reduce"
      :disabled="disabled || reduceDisabled"
      :size="size"
      @mousedown="handleMouseDown($event, () => reduce)"
      @mouseleave="handleMouseLeave"
      @mouseup="handleMouseUp"
    >
      <dk-icon :size="iconSize" :icon="reduceIcon"></dk-icon>
    </dk-button>
    <dk-input
      ref="input"
      v-model="value"
      type="number"
      align="center"
      border="none"
      :size="size"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      border-radius="0"
      @change="handleInputChange"
    />
    <dk-button
      class="dk-input-number_plus"
      :disabled="disabled || plusDisabled"
      :size="size"
      @mousedown="handleMouseDown($event, () => plus)"
      @mouseleave="handleMouseLeave"
      @mouseup="handleMouseUp"
    >
      <dk-icon :size="iconSize" :icon="plusIcon"></dk-icon>
    </dk-button>
  </div>
</template>
