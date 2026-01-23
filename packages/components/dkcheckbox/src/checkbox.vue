<script lang="ts">
  import { defineComponent, ref, reactive, watch } from 'vue'
  import { dkCheckboxProps } from './props'
  import { getCheckbox } from '../../_hooks'
  export default defineComponent({
    name: 'DkCheckbox',
    props: dkCheckboxProps,
    emits: ['update:modelValue', 'change', 'detail-change'],
    setup(props, { emit, slots }) {
      const checkedClass = ref<string>('')
      const checkbox = ref<HTMLInputElement>()

      const isChecked = ref<boolean>(props.modelValue)

      const data = reactive({
        checkedLabel: props.checkedLabel,
        uncheckedLabel: props.uncheckedLabel,
        label: props.label,
        value: props.value,
        hasSlot: !!slots.default
      })

      const isCheckLabel = data.checkedLabel || data.uncheckedLabel
      const labelValue = ref<string>('')
      const setLabelValue = (): void => {
        labelValue.value = props.modelValue ? data.checkedLabel : data.uncheckedLabel
      }
      setLabelValue()

      const change = (e: Event): void => {
        const target = e.target as HTMLInputElement
        const isChecked = target.checked

        checkedClass.value = isChecked ? 'checked' : ''

        if (isCheckLabel) {
          labelValue.value = isChecked ? data.checkedLabel : data.uncheckedLabel
        }

        emit('update:modelValue', isChecked)
        emit('change', isChecked)

        // if (props.value === null) {
        //   console.error('[TypeError] value is not defined')
        // }

        emit('detail-change', {
          checked: isChecked,
          value: (props.value && props.value.toString()) || data.label,
          label: data.label
        })
      }

      const { classList, styleList } = getCheckbox(props)

      watch(
        () => props.modelValue,
        val => {
          isChecked.value = val
          checkedClass.value = props.modelValue ? 'checked' : ''
        },
        {
          immediate: true
        }
      )
      const isIndeterminate = ref<boolean>(props.indeterminate)
      watch(
        () => props.indeterminate,
        val => {
          isIndeterminate.value = val
          if (isChecked.value) {
            checkedClass.value = 'checked'
          } else {
            checkedClass.value = val ? 'checked' : ''
          }
        }
      )

      return {
        modelValue: isChecked,
        change,
        classList,
        styleList,
        checkbox,
        checkedClass,
        indeterminate: isIndeterminate,
        ...data,
        labelValue,
        isCheckLabel
      }
    }
  })
</script>
<template>
  <!-- <div :class="classList" class="dk-checkbox--center"> -->
  <div :class="classList" :style="styleList">
    <label :class="checkedClass" class="dk-checkbox-wrapper">
      <input
        ref="checkbox"
        v-model="modelValue"
        class="dk-checkbox_inner"
        :indeterminate="indeterminate"
        type="checkbox"
        v-bind="$attrs"
        @change="change"
      />
      <span class="dk-checkbox-label"> {{ labelValue }} </span>
      <span v-if="!labelValue">
        <span v-if="!hasSlot">{{ label }}</span>
        <slot v-else></slot>
      </span>
    </label>
  </div>
</template>
