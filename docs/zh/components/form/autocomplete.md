# Autocomplete 自动补全

用于输入时给出建议列表，支持本地 options 与异步 fetch-suggestions（参考 Element Plus Autocomplete）。

- [源代码](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkautocomplete)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/form/autocomplete.md)

## <a id='基础用法'>基础用法（本地 options）</a>

::: module
<template #code>
<VueDomeAutocomplete placeholder="请输入" clearable />
</template>

```html
<template>
  <dk-autocomplete v-model="value" :options="options" placeholder="请输入" clearable />
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

## <a id='聚焦触发'>聚焦触发（trigger-on-focus）</a>

`trigger-on-focus` 为 `true` 时，聚焦会触发建议列表（本地 options 会直接展示全部）。

::: module
<template #code>
<VueDomeAutocomplete
  mode="local"
  placeholder="点击输入框就会出现下拉"
  trigger-on-focus
/>
</template>

```html
<template>
  <dk-autocomplete
    v-model="value"
    :options="options"
    placeholder="点击输入框就会出现下拉"
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

## <a id='远程搜索'>远程搜索（fetch-suggestions）</a>

::: module
<template #code>
<VueDomeAutocomplete
  mode="remote"
  placeholder="输入关键字"
  :debounce="300"
  highlight-first-item
/>
</template>

```html
<template>
  <dk-autocomplete
    v-model="value"
    :fetch-suggestions="fetchSuggestions"
    placeholder="输入关键字"
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

## <a id='禁用与可清空'>禁用与可清空</a>

::: module
<template #code>
<VueDomeAutocomplete placeholder="禁用状态" disabled />

<div style="margin-top: 12px"></div>

<VueDomeAutocomplete placeholder="可清空" clearable />
</template>

```html
<template>
  <dk-autocomplete v-model="value1" :options="options" placeholder="禁用状态" disabled />

  <dk-autocomplete v-model="value2" :options="options" placeholder="可清空" clearable />
</template>
```

:::

## <a id='自定义下拉项'>自定义下拉项（默认插槽）</a>

使用默认插槽可以自定义每一项的渲染（`#default="{ item }"`）。

::: module
<template #code>
<VueDomeAutocomplete
  mode="slot"
  value-key="label"
  placeholder="支持自定义 item 渲染"
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
  <dk-autocomplete
    v-model="value"
    :options="options"
    value-key="label"
    placeholder="支持自定义 item 渲染"
  >
    <template #default="{ item }">
      <div style="display:flex; justify-content:space-between; width:100%">
        <span>{{ item.label }}</span>
        <span style="opacity:.65; font-size:12px">{{ item.code }}</span>
      </div>
    </template>
  </dk-autocomplete>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: 'Vue', code: 'vue' },
  { label: 'Vite', code: 'vite' },
  { label: 'Vitest', code: 'vitest' }
]
</script>
```

:::

## <a id='加载与空状态'>加载与空状态（loading/empty 插槽）</a>

::: module
<template #code>
<VueDomeAutocomplete
  mode="remoteSlots"
  placeholder="输入触发异步"
  :debounce="200"
>
  <template #loading>
    <div style="padding: 6px 10px">正在加载...</div>
  </template>
  <template #empty>
    <div style="padding: 6px 10px; text-align:center">暂无匹配数据</div>
  </template>
</VueDomeAutocomplete>
</template>

```html
<template>
  <dk-autocomplete v-model="value" :fetch-suggestions="fetchSuggestions" placeholder="输入触发异步" :debounce="200">
    <template #loading>
      <div style="padding: 6px 10px">正在加载...</div>
    </template>
    <template #empty>
      <div style="padding: 6px 10px; text-align:center">暂无匹配数据</div>
    </template>
  </dk-autocomplete>
</template>
```

:::

## Autocomplete 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | string | '' |
| options | 本地建议列表 | Array<string \| object> | [] |
| fetch-suggestions | 获取建议的方法（Element 风格） | (queryString, cb) => void \| Promise | — |
| placeholder | 占位符 | string | '' |
| disabled | 是否禁用 | boolean | false |
| clearable | 是否可清空 | boolean | false |
| trigger-on-focus | 聚焦时是否触发建议 | boolean | true |
| debounce | 防抖（ms） | number | 300 |
| value-key | 对象项显示字段 | string | 'value' |
| highlight-first-item | 是否高亮第一项 | boolean | false |
| hide-loading | 是否隐藏 loading | boolean | false |
| size | 尺寸 | large / medium / small / mini | — |

## Autocomplete 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 自定义下拉项内容 | `{ item }` |
| loading | 自定义 loading 内容 | — |
| empty | 自定义空状态内容 | — |
| prefix / suffix / prepend / append | 透传给内部输入框（`DkInput`）的插槽 | — |

## Autocomplete 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 输入值变化 | (value: string) |
| select | 选择某一项 | (item: string \| object) |
| focus | 获得焦点 | (evt: FocusEvent) |
| blur | 失去焦点 | (evt: FocusEvent) |
| clear | 清空 | — |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
  import VueDomeAutocomplete from '../vueDome/autocomplete/index.vue'
</script>
