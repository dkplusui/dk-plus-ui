<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DkTimePickerPlay',
  setup() {
    const value = ref<Date | ''>('')
    const valueArrow = ref<Date | ''>('')
    const range = ref<[Date | '', Date | '']>(['', ''])
    const limit = ref<Date | ''>('')
    const valueString = ref('')

    const disabledHours = (): number[] => {
      // 禁用 0-8 点
      return Array.from({ length: 9 }, (_, i) => i)
    }

    const disabledMinutes = (hour: number): number[] => {
      // 12 点禁用 0/5/10/15/20/25
      if (hour !== 12) return []
      return [0, 5, 10, 15, 20, 25]
    }

    return { value, valueArrow, range, limit, valueString, disabledHours, disabledMinutes }
  }
})
</script>

<template>
  <div style="padding: 12px">
    <h3>基础用法</h3>
    <dk-time-picker v-model="value" />
    <div style="margin-top: 8px">value: {{ value }}</div>

    <h3 style="margin-top: 16px">任意时间点（arrow-control）</h3>
    <dk-time-picker v-model="valueArrow" arrow-control />
    <div style="margin-top: 8px">valueArrow: {{ valueArrow }}</div>

    <h3 style="margin-top: 16px">范围选择</h3>
    <dk-time-picker v-model="range" is-range range-separator="To" />
    <div style="margin-top: 8px">range: {{ range }}</div>

    <h3 style="margin-top: 16px">限制可选时间（disabledHours/disabledMinutes）</h3>
    <dk-time-picker v-model="limit" :disabled-hours="disabledHours" :disabled-minutes="disabledMinutes" />
    <div style="margin-top: 8px">limit: {{ limit }}</div>

    <h3 style="margin-top: 16px">绑定字符串（value-format）</h3>
    <dk-time-picker v-model="valueString" value-format="HH:mm:ss" format="HH:mm:ss" />
    <div style="margin-top: 8px">valueString: {{ valueString }}</div>
  </div>
</template>
