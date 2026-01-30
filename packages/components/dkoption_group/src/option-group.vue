<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DkOptionGroup',
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <div class="dk-select_group" :class="{ 'is-disabled': disabled }">
    <div v-if="label" class="dk-select_group-label">{{ label }}</div>
    <div class="dk-select_group-options">
      <slot />
    </div>
  </div>
</template>
