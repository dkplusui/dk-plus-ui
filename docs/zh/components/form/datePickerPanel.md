# Date Picker Panel 日期选择器面板

用于在面板中选择日期（单选），包含月份切换与日期表格。

- [源代码](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkdatepicker_panel)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/form/datePickerPanel.md)

## <a id='基础用法'>基础用法</a>

::: module
<template #code>
<VueDomeDatePickerPanel />
</template>

```html
<template>
  <dk-date-picker-panel v-model="value" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('2026-01-29')
</script>
```

:::

## <a id='一周起始日'>一周起始日（first-day-of-week）</a>

::: module
<template #code>
<VueDomeDatePickerPanel :first-day-of-week="1" />
</template>

```html
<template>
  <dk-date-picker-panel v-model="value" :first-day-of-week="1" />
</template>
```

:::

## <a id='禁用'>禁用</a>

::: module
<template #code>
<VueDomeDatePickerPanel disabled />
</template>

```html
<template>
  <dk-date-picker-panel v-model="value" disabled />
</template>
```

:::

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值（YYYY-MM-DD） | string | '' |
| disabled | 是否禁用 | boolean | false |
| width | 面板宽度 | string | '320px' |
| first-day-of-week | 一周起始日（0-6） | number | 0 |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | v-model 更新 | (value: string) |
| change | 选择日期后触发 | (value: string) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeDatePickerPanel from '../vueDome/datePickerPanel/index.vue'
</script>
