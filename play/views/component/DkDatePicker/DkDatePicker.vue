<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DkDatePickerPlay',
  setup() {
    const value = ref('2026-01-29')
    const value2 = ref('')

    return {
      value,
      value2
    }
  }
})
</script>

<template>
  <div style="padding: 12px">
    <h3>基础用法</h3>
    <dk-date-picker v-model="value" />
    <div style="margin-top: 8px">value: {{ value }}</div>

    <h3 style="margin-top: 18px">可清空</h3>
    <dk-date-picker v-model="value2" clearable />
    <div style="margin-top: 8px">value2: {{ value2 }}</div>

    <h3 style="margin-top: 18px">禁用</h3>
    <dk-date-picker v-model="value" disabled />
  </div>
</template>
