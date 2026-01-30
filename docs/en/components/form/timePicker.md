# Time Picker

Pick a time.

- [Source](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dktime_picker)
- [Edit this page](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/en/components/form/timePicker.md)

## <a id='Basic'>Basic</a>

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
