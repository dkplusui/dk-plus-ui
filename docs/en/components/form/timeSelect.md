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
| min-time | minimum selectable time | string | '' |
| max-time | maximum selectable time | string | '' |
| disabled-hours | disable hours options | () => number[] | — |
| disabled-minutes | disable minutes options | (hour: number) => number[] | — |
| disabled-seconds | disable seconds options | (hour: number, minute: number) => number[] | — |
| disabled | disabled | boolean | false |
| editable | whether the input is editable | boolean | true |
| clearable | clearable | boolean | true |
| placeholder | placeholder | string | '' |
| name | native input name attribute | string | '' |
| id | native input id attribute | string | '' |

## Events

| Name | Description | Params |
| --- | --- | --- |
| update:modelValue | v-model update | (value: string) |
| change | change | (value: string) |
| clear | clear | - |
| focus | triggered when input gets focus | (evt: FocusEvent) |
| blur | triggered when input loses focus | (evt: FocusEvent) |

## Exposes

| Name | Description |
| --- | --- |
| focus | focus the input |
| blur | blur the input |

<script lang='ts' setup>
import VueDomeTimeSelect from '../vueDome/timeSelect/index.vue'
</script>
