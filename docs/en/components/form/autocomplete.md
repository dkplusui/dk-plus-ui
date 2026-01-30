# Autocomplete

Provides suggestions while typing. Supports local options and async fetch-suggestions (Element Plus style).

- [source code](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkautocomplete)
- [documents editing](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/en/components/form/autocomplete.md)

## <a id='basic'>Basic (local options)</a>

::: module
<template #code>
<VueDomeAutocomplete placeholder="Type here" clearable />
</template>

```html
<template>
  <dk-autocomplete v-model="value" :options="options" placeholder="Type here" clearable />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { value: 'Vue' },
  { value: 'Vite' },
  { value: 'Vitest' },
  { value: 'TypeScript' }
]
</script>
```

:::

## <a id='trigger-on-focus'>Trigger on focus (trigger-on-focus)</a>

When `trigger-on-focus` is `true`, focusing the input will open and fetch suggestions.

::: module
<template #code>
<VueDomeAutocomplete
  mode="local"
  placeholder="Click to show dropdown"
  trigger-on-focus
/>
</template>

```html
<template>
  <dk-autocomplete
    v-model="value"
    :options="options"
    placeholder="Click to show dropdown"
    :trigger-on-focus="true"
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { value: 'vue' },
  { value: 'element' },
  { value: 'cooking' },
  { value: 'mint-ui' },
  { value: 'vuex' },
  { value: 'vue-router' },
  { value: 'babel' }
]
</script>
```

:::

## <a id='remote'>Remote search (fetch-suggestions)</a>

::: module
<template #code>
<VueDomeAutocomplete
  mode="remote"
  placeholder="Search"
  :debounce="300"
  highlight-first-item
/>
</template>

```html
<template>
  <dk-autocomplete
    v-model="value"
    :fetch-suggestions="fetchSuggestions"
    placeholder="Search"
    :debounce="300"
    highlight-first-item
  />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const list = [
  { value: 'Shanghai' },
  { value: 'Beijing' },
  { value: 'Shenzhen' },
  { value: 'Guangzhou' }
]

const fetchSuggestions = (queryString, cb) => {
  const q = (queryString || '').toLowerCase()
  const res = list.filter(item => item.value.toLowerCase().includes(q))
  setTimeout(() => cb(res), 200)
}
</script>
```

:::

## <a id='disabled-clearable'>Disabled & clearable</a>

::: module
<template #code>
<VueDomeAutocomplete placeholder="Disabled" disabled />

<div style="margin-top: 12px"></div>

<VueDomeAutocomplete placeholder="Clearable" clearable />
</template>

```html
<template>
  <dk-autocomplete v-model="value1" :options="options" placeholder="Disabled" disabled />
  <dk-autocomplete v-model="value2" :options="options" placeholder="Clearable" clearable />
</template>
```

:::

## <a id='custom-item'>Custom item (default slot)</a>

Use `#default="{ item }"` to customize how each suggestion is rendered.

::: module
<template #code>
<VueDomeAutocomplete
  mode="slot"
  value-key="label"
  placeholder="Custom item rendering"
>
  <template #default="{ item }">
    <div style="display:flex; justify-content:space-between; width:100%">
      <span>{{ item.label }}</span>
      <span style="opacity:.65; font-size:12px">{{ item.code }}</span>
    </div>
  </template>
</VueDomeAutocomplete>
</template>

```html
<template>
  <dk-autocomplete v-model="value" :options="options" value-key="label" placeholder="Custom item rendering">
    <template #default="{ item }">
      <div style="display:flex; justify-content:space-between; width:100%">
        <span>{{ item.label }}</span>
        <span style="opacity:.65; font-size:12px">{{ item.code }}</span>
      </div>
    </template>
  </dk-autocomplete>
</template>
```

:::

## <a id='loading-empty'>Loading & empty slots</a>

::: module
<template #code>
<VueDomeAutocomplete
  mode="remoteSlots"
  placeholder="Type to fetch"
  :debounce="200"
>
  <template #loading>
    <div style="padding: 6px 10px">Loading...</div>
  </template>
  <template #empty>
    <div style="padding: 6px 10px; text-align:center">No matches</div>
  </template>
</VueDomeAutocomplete>
</template>

```html
<template>
  <dk-autocomplete v-model="value" :fetch-suggestions="fetchSuggestions" placeholder="Type to fetch" :debounce="200">
    <template #loading>
      <div style="padding: 6px 10px">Loading...</div>
    </template>
    <template #empty>
      <div style="padding: 6px 10px; text-align:center">No matches</div>
    </template>
  </dk-autocomplete>
</template>
```

:::

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | binding value | string | '' |
| options | local suggestions | Array<string \| object> | [] |
| fetch-suggestions | suggestion fetcher (Element style) | (queryString, cb) => void \| Promise | — |
| placeholder | placeholder text | string | '' |
| disabled | disabled state | boolean | false |
| clearable | clearable | boolean | false |
| trigger-on-focus | fetch on focus | boolean | true |
| debounce | debounce(ms) | number | 300 |
| value-key | display field for object option | string | 'value' |
| highlight-first-item | highlight first item | boolean | false |
| hide-loading | hide loading | boolean | false |
| size | size | large / medium / small / mini | — |

## Slots

| Name | Description | Scope |
| --- | --- | --- |
| default | customize suggestion item | `{ item }` |
| loading | customize loading content | — |
| empty | customize empty content | — |
| prefix / suffix / prepend / append | pass-through slots for inner input (`DkInput`) | — |

## Events

| Name | Description | Params |
| --- | --- | --- |
| change | input value changed | (value: string) |
| select | option selected | (item: string \| object) |
| focus | focus | (evt: FocusEvent) |
| blur | blur | (evt: FocusEvent) |
| clear | cleared | — |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
  import VueDomeAutocomplete from '../vueDome/autocomplete/index.vue'
</script>
