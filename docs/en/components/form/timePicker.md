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

## Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | Binding value; when `value-format` is empty, it binds `Date` by default; range mode uses an array with length 2 | string / number / Date / Array | '' |
| readonly | Completely read-only | boolean | false |
| disabled | Disable the component | boolean | false |
| editable | Whether the input is editable | boolean | true |
| clearable | Whether to show clear button | boolean | true |
| size | Input size | enum | — |
| placeholder | Placeholder (non-range) | string | '' |
| start-placeholder | Placeholder for start time (range) | string | '' |
| end-placeholder | Placeholder for end time (range) | string | '' |
| is-range | Whether to select a time range | boolean | false |
| range-separator | Range separator | string | '-' |
| arrow-control | Use arrow controls (otherwise wheel/spinner) | boolean | false |
| format | Display format in input | string | 'HH:mm:ss' |
| value-format | Value format for binding; empty means binding `Date` | string | '' |
| default-value | Default time shown when panel opens | Date / [Date, Date] | — |
| disabled-hours | Disable hours options | () => number[] | — |
| disabled-minutes | Disable minutes options | (hour: number) => number[] | — |
| disabled-seconds | Disable seconds options | (hour: number, minute: number) => number[] | — |
| popper-class | Custom class name for dropdown | string | '' |
| popper-style | Custom style for dropdown | string / object | '' |
| popper-options | Custom popper options (reserved) | object | {} |
| teleported | Whether to teleport dropdown to body | boolean | true |
| placement | Dropdown placement | string | 'bottom' |
| fallback-placements | Fallback placements | string[] | ['bottom','top','right','left'] |
| tabindex | Native input tabindex | string / number | 0 |
| aria-label | Native input aria-label attribute | string | '' |
| prefix-icon | Custom prefix icon | string | 'IconClock' |
| clear-icon | Custom clear icon | string | 'IconShanchu1' |
| id | Native input id attribute | string / string[] | — |
| name | Native input name attribute | string / string[] | — |

## Events

| Name | Description | Parameters |
| --- | --- | --- |
| update:modelValue | v-model update | (value) |
| change | Triggered when user confirms the value | (value) |
| focus | Triggered when input gets focus | (evt: FocusEvent) |
| blur | Triggered when input loses focus | (evt: FocusEvent) |
| clear | Triggered when clear icon is clicked | - |
| visible-change | Triggered when dropdown shows/hides | (visible: boolean) |

## Exposes

| Name | Description |
| --- | --- |
| focus | Focus the input |
| blur | Blur the input |
| handleOpen | Open dropdown panel |
| handleClose | Close dropdown panel |
