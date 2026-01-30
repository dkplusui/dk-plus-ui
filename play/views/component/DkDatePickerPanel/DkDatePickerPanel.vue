<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DkDatePickerPanelPlay',
  setup() {
    const value = ref('2026-01-29')
    const value2 = ref('2026-02-01')

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
    <dk-date-picker-panel v-model="value" />
    <div style="margin-top: 8px">value: {{ value }}</div>

    <h3 style="margin-top: 18px">一周起始日（周一）</h3>
    <dk-date-picker-panel v-model="value2" :first-day-of-week="1" />
    <div style="margin-top: 8px">value2: {{ value2 }}</div>

    <h3 style="margin-top: 18px">禁用</h3>
    <dk-date-picker-panel v-model="value" disabled />
  </div>
</template>
