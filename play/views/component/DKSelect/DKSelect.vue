<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DkSelectPlay',
  setup() {
    const value = ref('')
    const options = [
      { label: '选项 A', value: 'A' },
      { label: '选项 B', value: 'B' },
      { label: '禁用项', value: 'X', disabled: true }
    ]
    return { value, options }
  }
})
</script>

<template>
  <div style="padding: 12px">
    <h3>基础用法</h3>
    <dk-select v-model="value" :options="options" />
    <div style="margin-top: 8px">value: {{ value }}</div>
  </div>
</template>
