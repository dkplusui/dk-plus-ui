# Select

Select a value from options.

- [Source](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkselect)
- [Edit this page](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/en/components/form/select.md)

## <a id='Basic'>Basic</a>

::: module
<template #code>
<VueDomeSelect />
</template>

```html
<template>
  <dk-select v-model="value" :options="options" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
  { label: 'Disabled', value: 'X', disabled: true }
]
</script>
```

:::

## <a id='Options'>Options</a>

::: module
<template #code>
<VueDomeSelect mode="optionsProps" />
</template>

```html
<template>
  <dk-select v-model="value" :options="options" :props="props" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { name: 'Option A', id: 'A' },
  { name: 'Option B', id: 'B' },
  { name: 'Disabled', id: 'X', isDisabled: true }
]
const props = { label: 'name', value: 'id', disabled: 'isDisabled' }
</script>
```

:::

## <a id='Disabled Option'>Disabled Option</a>

::: module
<template #code>
<VueDomeSelect mode="disabledOption" />
</template>

```html
<template>
  <dk-select v-model="value" :options="options" />
</template>
```

:::

## <a id='Disabled'>Disabled</a>

::: module
<template #code>
<VueDomeSelect mode="disabledSelect" />
</template>

```html
<template>
  <dk-select v-model="value" disabled :options="options" />
</template>
```

:::

## <a id='Clearable'>Clearable</a>

::: module
<template #code>
<VueDomeSelect mode="clearable" />
</template>

```html
<template>
  <dk-select v-model="value" clearable :options="options" />
</template>
```

:::

## <a id='Size'>Size</a>

::: module
<template #code>
<VueDomeSelect mode="size" />
</template>

```html
<template>
  <dk-select v-model="value" size="large" :options="options" />
  <dk-select v-model="value" size="medium" :options="options" />
  <dk-select v-model="value" size="small" :options="options" />
  <dk-select v-model="value" size="mini" :options="options" />
</template>
```

:::

## <a id='Multiple'>Multiple</a>

::: module
<template #code>
<VueDomeSelect mode="multiple" />
</template>

```html
<template>
  <dk-select v-model="value" multiple :options="options" />
</template>
```

:::

## <a id='Collapse Tags'>Collapse Tags</a>

::: module
<template #code>
<VueDomeSelect mode="collapseTags" />
</template>

```html
<template>
  <dk-select v-model="value" multiple collapse-tags :options="options" />
</template>
```

:::

## <a id='Max Collapse Tags'>Max Collapse Tags</a>

::: module
<template #code>
<VueDomeSelect mode="maxCollapseTags" />
</template>

```html
<template>
  <dk-select v-model="value" multiple collapse-tags :max-collapse-tags="1" :options="options" />
</template>
```

:::

## <a id='Custom Option Template'>Custom Option Template</a>

::: module
<template #code>
<VueDomeSelect mode="slotOption" />
</template>

```html
<template>
  <dk-select v-model="value">
    <dk-option label="Beijing" value="beijing">...</dk-option>
  </dk-select>
</template>
```

:::

## <a id='Custom Dropdown Header/Footer'>Custom Dropdown Header/Footer</a>

::: module
<template #code>
<VueDomeSelect mode="slotHeaderFooter" />
</template>

```html
<template>
  <dk-select v-model="value" :options="options">
    <template #header>...</template>
    <template #footer>...</template>
  </dk-select>
</template>
```

:::

## <a id='Option Group'>Option Group</a>

::: module
<template #code>
<VueDomeSelect mode="optionGroup" />
</template>

```html
<template>
  <dk-select v-model="value">
    <dk-option-group label="Popular cities">
      <dk-option label="Shanghai" value="shanghai" />
      <dk-option label="Beijing" value="beijing" />
    </dk-option-group>
  </dk-select>
</template>
```

:::

## <a id='Value Key'>Value Key</a>

When binding value is an object, set `value-key` as the unique key.

::: module
<template #code>
<VueDomeSelect mode="valueKey" />
</template>

```html
<template>
  <dk-select v-model="value" :options="options" value-key="id" />
</template>
```

:::

## <a id='Custom Loading & Empty'>Custom Loading & Empty</a>

::: module
<template #code>
<div style="display:flex; gap: 12px; align-items:center; flex-wrap:wrap">
  <VueDomeSelect mode="loadingSlot" />
  <VueDomeSelect mode="emptySlot" />
</div>
</template>

```html
<template>
  <dk-select v-model="value" loading>
    <template #loading>...</template>
  </dk-select>
  <dk-select v-model="value" :options="[]">
    <template #empty>...</template>
  </dk-select>
</template>
```

:::

## <a id='Remote Search'>Remote Search</a>

::: module
<template #code>
<VueDomeSelect mode="remote" />
</template>

```html
<template>
  <dk-select v-model="value" filterable remote :remote-method="remoteMethod" :loading="loading" :options="options" />
</template>
```

:::

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | binding value | string \| number \| boolean \| object \| array | '' |
| options | options list (array mode) | array | [] |
| props | field mapping (value/label/disabled/options) | object | - |
| disabled | disabled | boolean | false |
| multiple | multiple | boolean | false |
| clearable | clearable | boolean | true |
| filterable | filterable | boolean | false |
| filter-method | custom filter method | (query: string) => boolean | - |
| remote | remote search | boolean | false |
| remote-method | remote method | (query: string) => void | - |
| debounce | debounce(ms) | number | 300 |
| loading | loading | boolean | false |
| loading-text | loading text | string | 'Loading' |
| no-match-text | no match text | string | '无匹配数据' |
| no-data-text | no data text | string | '无数据' |
| placeholder | placeholder | string | '请选择' |
| width | width | string | '240px' |
| size | size | large / medium / small / mini | - |
| value-key | unique key when value is object | string | 'value' |
| collapse-tags | collapse tags (multiple) | boolean | false |
| max-collapse-tags | max tags shown | number | 1 |
| popper-class | dropdown class | string | '' |
| popper-style | dropdown style | string \| object | '' |
| teleported | teleported | boolean | true |
| append-to | teleport target | string \| HTMLElement | 'body' |
| offset | dropdown offset | number | 8 |
| suffix-icon | suffix icon | string | 'IconCaretDown' |
| clear-icon | clear icon | string | 'IconClose' |

## Slots

| Name | Description |
| --- | --- |
| default | custom options (with `DkOption` / `DkOptionGroup`) |
| header | dropdown header |
| footer | dropdown footer |
| loading | loading content |
| empty | empty content |

## Events

| Name | Description | Params |
| --- | --- | --- |
| update:modelValue | v-model update | (value) |
| change | value changed | (value) |
| clear | cleared | - |
| visible-change | dropdown visibility | (visible: boolean) |
| focus | focus | (evt: FocusEvent) |
| blur | blur | (evt: FocusEvent) |
| remove-tag | remove a tag (multiple) | (tagValue) |
| popup-scroll | dropdown scroll | (evt: Event) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeSelect from '../vueDome/select/index.vue'
</script>
