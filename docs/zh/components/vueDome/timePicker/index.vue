<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div style="padding: 12px">
    <dk-time-picker v-model="value" />
    <div style="margin-top: 8px">value: {{ value }}</div>
  </div>
</template>
