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
