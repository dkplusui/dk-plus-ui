<script lang="ts">
  import { defineComponent, ref, watch } from 'vue'
  import { DkRadioGroupProps } from './props'
  import { getRadioGroup } from '../../_hooks'
  export default defineComponent({
    name: 'DkRadioGroup',
    props: DkRadioGroupProps,
    emits: ['change', 'update:modelValue'],
    setup(props, { slots, emit }) {
      const { getSlot } = getRadioGroup(props)
      const slotList = getSlot(slots)

      const checkValue = ref('radio2')

      const handleChange = (name: string): void => {
        checkValue.value = name
        emit('change', name)
        emit('update:modelValue', name)
      }

      watch(
        () => props.modelValue,
        val => {
          checkValue.value = val
        }
      )

      return {
        slotList,
        handleChange,
        checkValue
      }
    }
  })
</script>
<template>
  <div class="dk-radio-group">
    <div class="dk-radio-group_list">
      <div v-for="item in slotList" :key="item.name" class="dk-radio-group__item">
        <dk-radio
          v-model="checkValue"
          :label="item.label"
          :name="item.name"
          v-bind="item"
          @change="handleChange"
        />
      </div>
    </div>
  </div>
</template>
