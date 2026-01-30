<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DkTimePickerPlay',
  setup() {
    const value = ref('')
    return { value }
  }
})
</script>

<template>
  <div style="padding: 12px">
    <h3>基础用法</h3>
    <dk-time-picker v-model="value" />
    <div style="margin-top: 8px">value: {{ value }}</div>
  </div>
</template>
