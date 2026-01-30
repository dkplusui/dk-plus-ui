<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DkColorPickerPanelPlay',
  setup() {
    const value1 = ref('#409EFF')
    const value2 = ref('rgba(64, 158, 255, 0.6)')

    const rgbaText = ref('')

    const onRgba = (rgba: { r: number; g: number; b: number; a: number }): void => {
      rgbaText.value = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${Number(rgba.a.toFixed(3))})`
    }

    return {
      value1,
      value2,
      rgbaText,
      onRgba
    }
  }
})
</script>

<template>
  <div style="padding: 12px">
    <h3>基础用法（hex）</h3>
    <dk-color-picker-panel v-model="value1" />
    <div style="margin-top: 8px">value1: {{ value1 }}</div>

    <h3 style="margin-top: 18px">透明度（show-alpha） + rgb</h3>
    <dk-color-picker-panel v-model="value2" show-alpha format="rgb" @update:rgba="onRgba" />
    <div style="margin-top: 8px">value2: {{ value2 }}</div>
    <div style="margin-top: 8px">rgba: {{ rgbaText }}</div>

    <h3 style="margin-top: 18px">禁用</h3>
    <dk-color-picker-panel v-model="value1" disabled />
  </div>
</template>
