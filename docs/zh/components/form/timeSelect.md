# Time Select 时间选择

用于选择固定步长的时间列表。

- [源代码](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dktime_select)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/form/timeSelect.md)

## <a id='基础用法'>基础用法</a>

::: module
<template #code>
<VueDomeTimeSelect />
</template>

```html
<template>
  <dk-time-select v-model="value" start="09:00" end="18:00" step="00:30" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
```

:::

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | string | '' |
| start | 开始时间 | string | '09:00' |
| end | 结束时间 | string | '18:00' |
| step | 步长 | string | '00:30' |
| disabled | 是否禁用 | boolean | false |
| clearable | 是否可清空 | boolean | true |

## 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | v-model 更新 | (value: string) |
| change | 值变化 | (value: string) |
| clear | 清空 | - |

<script lang='ts' setup>
import VueDomeTimeSelect from '../vueDome/timeSelect/index.vue'
</script>
