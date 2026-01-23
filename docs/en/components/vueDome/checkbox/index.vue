<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DkCheckboxComp',
    setup() {
      const data = reactive({
        allCheck: false,
        isIndeterminate: true,
        checkList: [
          { label: 'option1', value: '1', checked: false },
          { label: 'option2', value: '2', checked: false },
          { label: 'option3', value: '3', checked: false },
          { label: 'option4', value: '4', checked: false }
        ]
      })
      const methods = reactive({
        handleAllCheckChange(val: boolean) {
          data.checkList.forEach(item => {
            item.checked = val
          })
          data.isIndeterminate = false
        },
        handleGroupChange(val: string[]) {
          data.allCheck = val.length === data.checkList.length
          data.isIndeterminate = val.length > 0 && val.length < data.checkList.length
        },
        getIndeterminate() {
          const isChecked = data.checkList.find(item => item.checked)
          if (isChecked !== undefined && data.allCheck === false) {
            return true
          }
          return false
        }
      })
      data.isIndeterminate = methods.getIndeterminate()
      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>
<template>
  <dk-checkbox
    v-model="allCheck"
    :indeterminate="isIndeterminate"
    label="Select All"
    @change="handleAllCheckChange"
  ></dk-checkbox>
  <dk-checkbox-group v-model="checkList" @change="handleGroupChange">
    <dk-checkbox
      v-for="item in checkList"
      :key="item.value"
      v-model="item.checked"
      :label="item.label"
      :value="item.value"
    ></dk-checkbox>
  </dk-checkbox-group>
</template>
