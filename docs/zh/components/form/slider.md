# Slider 滑块

通过拖动滑块在固定区间内进行选择。

- [源代码](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkslider)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/form/slider.md)

## <a id='基础用法'>基础用法</a>

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

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | number \| [number, number] | 0 |
| min | 最小值 | number | 0 |
| max | 最大值 | number | 100 |
| step | 步长 | number | 1 |
| disabled | 是否禁用 | boolean | false |
| range | 是否范围选择（基础骨架） | boolean | false |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | v-model 更新 | (value) |
| input | 拖动中触发 | (value) |
| change | 释放后触发 | (value) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeSlider from '../vueDome/slider/index.vue'
</script>
