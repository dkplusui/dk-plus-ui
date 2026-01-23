<script lang="ts">
  import { defineComponent, reactive, toRefs, watch, ref, nextTick } from 'vue'
  import { dkRadioProps } from './props'
  import { getRadio } from '../../_hooks'
  export default defineComponent({
    name: 'DkRadio',
    props: dkRadioProps,
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
      const radio = ref<HTMLInputElement>()

      // const getClassList = (): string[] => {
      //   const list = ['dk-radio']
      //   if (props.disabled) {
      //     list.push('dk-radio_disabled')
      //   }
      //   return list
      // }

      const data = reactive({
        name: props.name,
        check: props.modelValue,
        disabled: props.disabled,
        label: props.label
      })

      const { classList, styleList } = getRadio(props)

      const methods = {
        handleChange: (): void => {
          let value = data.name || data.label

          emit('update:modelValue', value)
          emit('change', value)
        }
      }

      watch(
        () => props.modelValue,
        async val => {
          await nextTick()
          if (radio.value) {
            radio.value.checked = val === data.name
          }
        },
        {
          immediate: true
        }
      )

      return {
        radio,
        ...toRefs(data),
        ...methods,
        classList,
        styleList
      }
    }
  })
</script>
<template>
  <div :class="classList" :style="styleList">
    <label class="dk-radio-wrapper" @change="handleChange">
      <input ref="radio" class="dk-radio_inner" type="radio" :disabled="disabled" />
      <div class="dk-radio_circle"></div>
      <span>{{ label }}</span>
    </label>
  </div>
</template>
