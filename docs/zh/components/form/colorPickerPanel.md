# Color Picker Panel 颜色选择器面板

用于在面板中选择颜色，支持 Hue（色相）与可选 Alpha（透明度），并可通过输入框粘贴 `#RGB/#RRGGBB` 或 `rgb()/rgba()` 进行回写。

- [源代码](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkcolorpicker_panel)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/form/colorPickerPanel.md)

## <a id='基础用法'>基础用法</a>

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

## <a id='透明度'>透明度（show-alpha）</a>

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

## <a id='禁用'>禁用</a>

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

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | string | '' |
| disabled | 是否禁用 | boolean | false |
| show-alpha | 是否显示透明度条 | boolean | false |
| format | 输出格式 | 'hex' \| 'rgb' \| 'hsl' | 'hex' |
| width | 面板宽度 | string | '280px' |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | v-model 更新 | (value: string) |
| active-change | 拖动过程中实时回调 | (value: string) |
| change | 结束拖动/输入框回写后的变更 | (value: string) |
| update:rgba | RGBA 更新 | (rgba: { r: number; g: number; b: number; a: number }) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeColorPickerPanel from '../vueDome/colorPickerPanel/index.vue'
</script>
