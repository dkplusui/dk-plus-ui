# Time Select

Select time from a fixed-step list.

- [Source](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dktime_select)
- [Edit this page](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/en/components/form/timeSelect.md)

## <a id='Basic'>Basic</a>

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

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | binding value | string | '' |
| start | start | string | '09:00' |
| end | end | string | '18:00' |
| step | step | string | '00:30' |
| disabled | disabled | boolean | false |
| clearable | clearable | boolean | true |

## Events

| Name | Description | Params |
| --- | --- | --- |
| update:modelValue | v-model update | (value: string) |
| change | change | (value: string) |
| clear | clear | - |

<script lang='ts' setup>
import VueDomeTimeSelect from '../vueDome/timeSelect/index.vue'
</script>
