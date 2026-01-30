# Date Picker

A single-date picker. It opens a date panel from an input and writes back `YYYY-MM-DD` after selection.

- [Source](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkdatepicker)
- [Edit this page](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/en/components/form/datePicker.md)

## <a id='Basic'>Basic</a>

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

## <a id='Disabled'>Disabled</a>

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

## <a id='Clearable'>Clearable</a>

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

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | binding value (YYYY-MM-DD) | string | '' |
| disabled | disabled | boolean | false |
| clearable | clearable | boolean | true |
| placeholder | placeholder | string | '请选择日期' |
| width | input width | string | '240px' |
| panel-width | panel width | string | '320px' |
| first-day-of-week | first day of week (0-6) | number | 0 |
| disabled-date | disable date (return true means disabled) | (date: Date) => boolean | - |
| shortcuts | shortcuts | { text: string; value: string \| Date \| (() => string \| Date) }[] | [] |

## Events

| Name | Description | Params |
| --- | --- | --- |
| update:modelValue | v-model update | (value: string) |
| change | value change | (value: string) |
| clear | emitted when cleared | - |
| visible-change | dropdown visibility change | (visible: boolean) |
| panel-change | panel month change | ({ year: number; month: number }) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeDatePicker from '../vueDome/datePicker/index.vue'
</script>
