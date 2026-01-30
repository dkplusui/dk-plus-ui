# Date Picker Panel

A single-date picker panel with month navigation and a calendar table.

- [source code](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkdatepicker_panel)
- [documents editing](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/en/components/form/datePickerPanel.md)

## <a id='basic'>Basic</a>

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

## <a id='first-day'>First day of week</a>

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

## <a id='disabled'>Disabled</a>

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

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | binding value (YYYY-MM-DD) | string | '' |
| disabled | disabled state | boolean | false |
| width | panel width | string | '320px' |
| first-day-of-week | first day of week (0-6) | number | 0 |

## Events

| Name | Description | Params |
| --- | --- | --- |
| update:modelValue | v-model update | (value: string) |
| change | emitted after pick | (value: string) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeDatePickerPanel from '../vueDome/datePickerPanel/index.vue'
</script>
