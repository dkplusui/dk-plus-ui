# Color Picker Panel

A panel color picker with Hue and optional Alpha controls. You can also paste `#RGB/#RRGGBB` or `rgb()/rgba()` into the input to sync back.

- [source code](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkcolorpicker_panel)
- [documents editing](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/en/components/form/colorPickerPanel.md)

## <a id='basic'>Basic</a>

::: module
<template #code>
<VueDomeColorPickerPanel />
</template>

```html
<template>
  <dk-color-picker-panel v-model="value" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('#409EFF')
</script>
```

:::

## <a id='alpha'>Alpha (show-alpha)</a>

::: module
<template #code>
<VueDomeColorPickerPanel show-alpha format="rgb" />
</template>

```html
<template>
  <dk-color-picker-panel v-model="value" show-alpha format="rgb" />
</template>
```

:::

## <a id='disabled'>Disabled</a>

::: module
<template #code>
<VueDomeColorPickerPanel disabled />
</template>

```html
<template>
  <dk-color-picker-panel v-model="value" disabled />
</template>
```

:::

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | binding value | string | '' |
| disabled | disabled state | boolean | false |
| show-alpha | show alpha slider | boolean | false |
| format | output format | 'hex' \| 'rgb' \| 'hsl' | 'hex' |
| width | panel width | string | '280px' |

## Events

| Name | Description | Params |
| --- | --- | --- |
| update:modelValue | v-model update | (value: string) |
| active-change | emitted while dragging | (value: string) |
| change | emitted on drag end / input sync | (value: string) |
| update:rgba | RGBA update | (rgba: { r: number; g: number; b: number; a: number }) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeColorPickerPanel from '../vueDome/colorPickerPanel/index.vue'
</script>
