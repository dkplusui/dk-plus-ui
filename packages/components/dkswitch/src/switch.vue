<script lang="ts">
  import { defineComponent, reactive, toRefs, watch, ref, nextTick } from 'vue'
  import { switchProps } from './props'
  import { getSwitch } from '../../_hooks'
  export default defineComponent({
    name: 'DkSwitch',
    props: switchProps,
    emits: ['change', 'update:modelValue'],
    setup(props, { emit }) {
      const { classList, styleList } = getSwitch(props)

      const data = reactive({
        modelValue: props.modelValue,
        disabled: props.disabled,
        checkedText: props.checkedText,
        uncheckedText: props.uncheckedText,
        checkText: props.uncheckedText,
        checkIcon: props.uncheckedIcon,
        loading: props.loading,
        customIcon: props.checkedIcon
      })

      const methods = {
        handleChange: (e: Event): void => {
          const target = e.target as HTMLInputElement

          let value = target.checked

          // if (props.disabled) {
          //   value = !value
          // }
          target.checked = value

          emit('update:modelValue', value)
          emit('change', value)
        },
        refreshStatus: (): void => {
          data.disabled = props.disabled || props.loading
          if (data.disabled) {
            if(classList.value.includes('dk-switch_disabled')) return
            classList.value.push('dk-switch_disabled')
          }else{
            const index = classList.value.indexOf('dk-switch_disabled')
            if(index === -1) return
            classList.value.splice(index, 1)
          }
        }
      }

      const switchRef = ref<HTMLInputElement>()

      watch(
        () => props.modelValue,
        val => {
          data.modelValue = val
          data.checkText = val ? data.checkedText : data.uncheckedText
          
          data.checkIcon = val ? props.checkedIcon : props.uncheckedIcon
          
          data.customIcon = val ? props.checkedCustomIcon : props.uncheckedCustomIcon
          methods.refreshStatus()
          
          nextTick(() => {
            if (switchRef.value) {
              switchRef.value.checked = val
            }
          })
        },
        {
          immediate: true
        }
      )

      watch(
        () => props.loading,
        val => {
          data.loading = val
          methods.refreshStatus()
        },
        {
          immediate: true
        }
      )

      return {
        classList,
        styleList,
        ...toRefs(data),
        ...methods,
        switchRef
      }
    }
  })
</script>
<template>
  <div :class="classList" :style="styleList">
    <label class="dk-switch-wrapper" @change="handleChange">
      <input
        ref="switchRef"
        type="checkbox"
        class="dk-switch_inner"
        v-bind="$attrs"
      />
      <div class="dk-switch_slider">
        <dk-icon v-if="loading" icon="IconLoading"></dk-icon>
        <dk-icon v-if="!loading && customIcon" :icon="customIcon"></dk-icon>
        <span class="dk-switch_title">
          <dk-icon v-if="checkIcon" :icon="checkIcon" size="14"></dk-icon>
          {{ checkText }}
          <slot></slot>
        </span>
      </div>
    </label>
  </div>
</template>
