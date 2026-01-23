<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DkCheckboxComp',
    setup() {
      const data = reactive({
        checkList: [
          { label: 'option1', value: '1', checked: false },
          { label: 'option2', value: '2', checked: false },
          { label: 'option3', value: '3', checked: false },
          { label: 'option4', value: '4', checked: false }
        ]
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
<template>
  <dk-checkbox-group v-model="checkList" :max="2">
    <dk-checkbox
      v-for="item in checkList"
      :key="item.value"
      v-model="item.checked"
      :label="item.label"
      :value="item.value"
    ></dk-checkbox>
  </dk-checkbox-group>
</template>
