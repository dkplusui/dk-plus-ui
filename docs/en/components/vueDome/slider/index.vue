<script setup lang="ts">
import { ref } from 'vue'

const value = ref(30)
</script>

<template>
  <div style="padding: 12px">
    <dk-slider v-model="value" />
  </div>
</template>
