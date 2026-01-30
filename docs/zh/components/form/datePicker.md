# Date Picker 日期选择器

用于选择日期（单选）。由输入框触发下拉日期面板，选择后回填 `YYYY-MM-DD`。

- [源代码](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkdatepicker)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/form/datePicker.md)

## <a id='基础用法'>基础用法</a>

::: module
<template #code>
<VueDomeDatePicker />
</template>

```html
<template>
  <dk-date-picker v-model="value" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('2026-01-29')
</script>
```

:::

## <a id='禁用'>禁用</a>

::: module
<template #code>
<VueDomeDatePicker disabled />
</template>

```html
<template>
  <dk-date-picker v-model="value" disabled />
</template>
```

:::

## <a id='可清空'>可清空（clearable）</a>

::: module
<template #code>
<VueDomeDatePicker :clearable="true" />
</template>

```html
<template>
  <dk-date-picker v-model="value" clearable />
</template>
```

:::

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值（YYYY-MM-DD） | string | '' |
| disabled | 是否禁用 | boolean | false |
| clearable | 是否可清空 | boolean | true |
| placeholder | 占位文本 | string | '请选择日期' |
| width | 输入框宽度 | string | '240px' |
| panel-width | 面板宽度 | string | '320px' |
| first-day-of-week | 一周起始日（0-6） | number | 0 |
| disabled-date | 禁用日期（返回 true 表示禁用） | (date: Date) => boolean | - |
| shortcuts | 快捷选项 | { text: string; value: string \| Date \| (() => string \| Date) }[] | [] |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | v-model 更新 | (value: string) |
| change | 值变化时触发 | (value: string) |
| clear | 清空时触发 | - |
| visible-change | 面板显示状态变化 | (visible: boolean) |
| panel-change | 面板月份切换 | ({ year: number; month: number }) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeDatePicker from '../vueDome/datePicker/index.vue'
</script>
