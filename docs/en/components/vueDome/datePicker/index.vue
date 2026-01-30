<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    clearable?: boolean
    width?: string
    showValue?: boolean
  }>(),
  {
    disabled: false,
    clearable: true,
    width: '240px',
    showValue: false
  }
)

const value = ref('2026-01-29')

const pickerProps = computed(() => ({
  disabled: props.disabled,
  clearable: props.clearable,
  width: props.width
}))
</script>

<template>
  <div>
    <dk-date-picker v-model="value" v-bind="pickerProps" />

    <div v-if="showValue" style="margin-top: 10px">value: {{ value }}</div>
  </div>
</template>
