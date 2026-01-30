# Slider

Select a value within a fixed range by dragging the slider.

- [Source](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkslider)
- [Edit this page](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/en/components/form/slider.md)

## <a id='Basic'>Basic</a>

::: module
<template #code>
<VueDomeSlider />
</template>

```html
<template>
  <dk-slider v-model="value" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(30)
</script>
```

:::

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | binding value | number \| [number, number] | 0 |
| min | min | number | 0 |
| max | max | number | 100 |
| step | step | number | 1 |
| disabled | disabled | boolean | false |
| range | range (skeleton) | boolean | false |

## Events

| Name | Description | Params |
| --- | --- | --- |
| update:modelValue | v-model update | (value) |
| input | while dragging | (value) |
| change | on release | (value) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeSlider from '../vueDome/slider/index.vue'
</script>
