<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div style="padding: 12px">
    <dk-time-picker v-model="value" value-format="HH:mm:ss" format="HH:mm:ss" />
  </div>
</template>
