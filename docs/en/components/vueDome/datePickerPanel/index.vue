<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    width?: string
    firstDayOfWeek?: number
    showValue?: boolean
  }>(),
  {
    disabled: false,
    width: '320px',
    firstDayOfWeek: 0,
    showValue: false
  }
)

const value = ref('2026-01-29')

const panelProps = computed(() => ({
  disabled: props.disabled,
  width: props.width,
  firstDayOfWeek: props.firstDayOfWeek
}))
</script>

<template>
  <div>
    <dk-date-picker-panel v-model="value" v-bind="panelProps" />

    <div v-if="showValue" style="margin-top: 10px">value: {{ value }}</div>
  </div>
</template>
