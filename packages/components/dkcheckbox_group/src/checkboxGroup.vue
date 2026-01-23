<script lang="ts">
  import { defineComponent, watch, reactive, toRefs } from 'vue'
  import { getCheckboxGroupSlot } from '../../_hooks'
  import type { ComponentOptions } from 'vue'
  import { checkboxGroup } from './prop'
  import type { detailChangeType } from '../../dkcheckbox/src/type'
  export default defineComponent({
    name: 'DkCheckboxGroup',
    props: checkboxGroup,
    emits: ['change'],
    setup(props, { slots, emit }) {
      const result: ReturnType<typeof getCheckboxGroupSlot> = getCheckboxGroupSlot(props)
      const { getSlot, refresh } = result

      const data = reactive({
        max: props.max,
        slotList: getSlot(slots),
        checkedList: [] as string[]
      })

      watch(
        () => props.modelValue,
        () => {
          data.slotList = refresh(slots, data.checkedList)
          data.checkedList = data.slotList
            .filter((item: ComponentOptions) => item.modelValue)
            .map((item: ComponentOptions) => item.value)
          emit('change', data.checkedList)
        },
        {
          deep: true
        }
      )

      const methods = reactive({
        handleItemChange: (target: detailChangeType): void => {
          const { value, checked } = target
          const index = data.checkedList.indexOf(value.toString())
          if (checked && index === -1) {
            data.checkedList.push(value.toString())
          } else if (!checked && index !== -1) {
            data.checkedList.splice(index, 1)
          }
          emit('change', data.checkedList)
        },
        getCheckedList: (): void => {
          data.checkedList = data.slotList
            .filter((item: ComponentOptions) => item.modelValue)
            .map((item: ComponentOptions) => item.value)
        }
      })

      methods.getCheckedList()

      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>
<template>
  <div class="dk-checkbox-group" v-bind="$attrs">
    <dk-checkbox
      v-for="item in slotList"
      :key="item.value"
      v-model="item.modelValue"
      v-bind="item"
      :disabled="item.disabled"
      @detail-change="handleItemChange"
    ></dk-checkbox>
  </div>
</template>
