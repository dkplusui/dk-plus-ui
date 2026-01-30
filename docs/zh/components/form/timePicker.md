# Time Picker 时间选择器

用于选择时间。

- [源代码](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dktime_picker)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/form/timePicker.md)

## <a id='基础用法'>基础用法</a>

::: module
<template #code>
<VueDomeTimePicker />
</template>

```html
<template>
  <dk-time-picker v-model="value" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

:::

<script lang='ts' setup>
import VueDomeTimePicker from '../vueDome/timePicker/index.vue'
</script>

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值；当 `value-format` 为空时，默认绑定 `Date`；范围选择时为长度 2 的数组 | string / number / Date / Array | '' |
| readonly | 完全只读 | boolean | false |
| disabled | 禁用 | boolean | false |
| editable | 文本框可输入 | boolean | true |
| clearable | 是否显示清除按钮 | boolean | true |
| size | 输入框尺寸 | enum | — |
| placeholder | 非范围选择时占位内容 | string | '' |
| start-placeholder | 范围选择开始占位 | string | '' |
| end-placeholder | 范围选择结束占位 | string | '' |
| is-range | 是否为时间范围选择 | boolean | false |
| range-separator | 范围选择分隔符 | string | '-' |
| arrow-control | 是否使用箭头进行时间选择（否则使用滚轮） | boolean | false |
| format | 显示在输入框中的格式 | string | 'HH:mm:ss' |
| value-format | 绑定值的格式；为空时绑定值为 `Date` | string | '' |
| default-value | 打开面板时默认展示的时间 | Date / [Date, Date] | — |
| disabled-hours | 禁止选择部分小时选项 | () => number[] | — |
| disabled-minutes | 禁止选择部分分钟选项 | (hour: number) => number[] | — |
| disabled-seconds | 禁止选择部分秒选项 | (hour: number, minute: number) => number[] | — |
| popper-class | 下拉框的类名 | string | '' |
| popper-style | 下拉框自定义样式 | string / object | '' |
| popper-options | 自定义 popper 选项（预留） | object | {} |
| teleported | 是否将下拉列表传送到 body | boolean | true |
| placement | 下拉框出现的位置 | string | 'bottom' |
| fallback-placements | 位置兜底列表 | string[] | ['bottom','top','right','left'] |
| tabindex | 输入框的 tabindex | string / number | 0 |
| aria-label | 等价于原生 input aria-label 属性 | string | '' |
| prefix-icon | 自定义前缀图标 | string | 'IconClock' |
| clear-icon | 自定义清除图标 | string | 'IconShanchu1' |
| id | 等价于原生 input id 属性 | string / string[] | — |
| name | 等价于原生 input name 属性 | string / string[] | — |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | v-model 更新 | (value) |
| change | 用户确认选定的值时触发 | (value) |
| focus | Input 获得焦点时触发 | (evt: FocusEvent) |
| blur | Input 失去焦点时触发 | (evt: FocusEvent) |
| clear | 用户点击清空按钮时触发 | - |
| visible-change | 下拉列表出现/消失时触发 | (visible: boolean) |

## 暴露

| 名称 | 说明 |
| --- | --- |
| focus | 使组件获取焦点 |
| blur | 使组件失去焦点 |
| handleOpen | 打开时间选择器弹窗 |
| handleClose | 关闭时间选择器弹窗 |
