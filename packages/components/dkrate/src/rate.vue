<script lang="ts">
  import { defineComponent, reactive, toRefs, watch, computed } from 'vue'
  import { getReturn } from '../../_hooks'
  import { dkRateProps } from './props'
  import { isNumber } from '../../_utils'
  import { model_Value } from '../../_tokens'
  export default defineComponent({
    name: 'DkRate',
    props: dkRateProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
      const { getRun } = getReturn()
      const { numberValue, disabled, selectColor, noSelectColor, showScore, showText, readonly } = toRefs(props)
      const data = reactive({
        modelValue: props.modelValue,
        numberValue: numberValue,
        disabled: disabled,
        selectColor: selectColor,
        noSelectColor: noSelectColor,
        IsNumberValue: 0,
        isMouseEnter: false,
        markList: computed((): number => (isNumber(numberValue.value) ? numberValue.value : 5)),
        showScore: showScore,
        showText: showText,
        timestampTime: 0 as number
      })
      
      const methods = {
        /**
         * @description 鼠标移出
         */
        onMouseout: (): void => {
          if (readonly.value) return
          data.modelValue = props.modelValue
        },
        /**
         * @description 鼠标移入
         */
        onMouseover: (index: number): void => {
          if (readonly.value) return
          data.modelValue = index
        },
        handleClick: (ind: number): void => {
          if (readonly.value) return
          data.modelValue = ind
          emit(model_Value, ind)
          getRun(props.onchange, ind)
        }
      }
      watch(
        (): number => props.modelValue,
        val => {
          data.modelValue = val
        },
        {
          immediate: true
        }
      )
      watch(
        (): number => data.modelValue,
        () => {
          data.timestampTime = new Date().getTime()
        },
        {
          immediate: true
        }
      )
      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>
<template>
  <div class="dk-rate" role="slider">
    <div :key="timestampTime" class="dk-rate_list">
      <div
        v-for="(item, index) in markList"
        :key="index"
        :class="['dk-rate_star', { 'dk-rate_star-readonly': readonly },{ 'dk-rate_star_forbidden': readonly }]"
        @mouseout="onMouseout"
        @mouseover="onMouseover(index + 1)"
        @click="handleClick(index + 1)"
      >
        <dk-icon
          :icon="icon"
          :color="modelValue > index ? selectColor : noSelectColor"
          :size="iconSize"
        >
        </dk-icon>
      </div>
    </div>
    <span v-if="showScore" class="dk-rate__text">{{ modelValue }}</span>
    <span v-if="showText" class="dk-rate__text">{{ showText[modelValue - 1] }}</span>
  </div>
</template>
