<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DkTimeSelectPlay',
  setup() {
    const value = ref('')
    return { value }
  }
})
</script>

<template>
  <div style="padding: 12px">
    <h3>基础用法</h3>
    <dk-time-select v-model="value" start="09:00" end="18:00" step="00:30" />
    <div style="margin-top: 8px">value: {{ value }}</div>
  </div>
</template>
