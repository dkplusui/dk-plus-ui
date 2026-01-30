<script lang="ts" setup>
import { computed, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    showAlpha?: boolean
    disabled?: boolean
    format?: 'hex' | 'rgb' | 'hsl'
    width?: string
    showValue?: boolean
  }>(),
  {
    showAlpha: false,
    disabled: false,
    format: 'hex',
    width: '280px',
    showValue: false
  }
)

const value = ref('#409EFF')

const rgbaText = ref('')

const onRgba = (rgba: { r: number; g: number; b: number; a: number }): void => {
  rgbaText.value = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${Number(rgba.a.toFixed(3))})`
}

const panelProps = computed(() => ({
  showAlpha: props.showAlpha,
  disabled: props.disabled,
  format: props.format,
  width: props.width
}))
</script>

<template>
  <div>
    <dk-color-picker-panel v-model="value" v-bind="panelProps" @update:rgba="onRgba" />

    <div v-if="showValue" style="margin-top: 10px">
      <div>value: {{ value }}</div>
      <div>rgba: {{ rgbaText }}</div>
    </div>
  </div>
</template>
