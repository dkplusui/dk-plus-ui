# Select 选择器

用于从一组选项中选择。

- [源代码](https://github.com/isMrFan/dk-plus-ui/tree/master/packages/components/dkselect)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/form/select.md)

## <a id='基础用法'>基础用法</a>

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
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '禁用项', value: 'X', disabled: true }
]
</script>
```

:::

## <a id='Options 属性'>Options 属性</a>

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
  { name: '选项 A', id: 'A' },
  { name: '选项 B', id: 'B' },
  { name: '禁用项', id: 'X', isDisabled: true }
]
const props = { label: 'name', value: 'id', disabled: 'isDisabled' }
</script>
```

:::

## <a id='有禁用选项'>有禁用选项</a>

::: module
<template #code>
<VueDomeSelect mode="disabledOption" />
</template>

```html
<template>
  <dk-select v-model="value" :options="options" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '禁用项', value: 'X', disabled: true }
]
</script>
```

:::

## <a id='禁用整个组件'>禁用整个组件</a>

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

## <a id='可清空'>可清空</a>

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

## <a id='尺寸'>尺寸</a>

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

## <a id='基础多选'>基础多选</a>

::: module
<template #code>
<VueDomeSelect mode="multiple" />
</template>

```html
<template>
  <dk-select v-model="value" multiple :options="options" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref(['A'])
</script>
```

:::

## <a id='折叠标签'>折叠标签</a>

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

## <a id='最多折叠标签数'>最多折叠标签数</a>

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

## <a id='自定义模板'>自定义模板</a>

将内容插入到 `dk-option` 的默认插槽中即可自定义下拉项。

::: module
<template #code>
<VueDomeSelect mode="slotOption" />
</template>

```html
<template>
  <dk-select v-model="value">
    <dk-option label="北京" value="beijing">
      <span>北京</span>
      <span>Beijing</span>
    </dk-option>
  </dk-select>
</template>
```

:::

## <a id='自定义下拉头部与底部'>自定义下拉头部与底部</a>

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

## <a id='将选项进行分组'>将选项进行分组</a>

::: module
<template #code>
<VueDomeSelect mode="optionGroup" />
</template>

```html
<template>
  <dk-select v-model="value">
    <dk-option-group label="热门城市">
      <dk-option label="上海" value="shanghai" />
      <dk-option label="北京" value="beijing" />
    </dk-option-group>
  </dk-select>
</template>
```

:::

## <a id='使用值键 value-key'>使用值键 value-key</a>

当绑定值是对象时，请指定 `value-key` 作为唯一标识。

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

## <a id='自定义加载与空态'>自定义加载与空态</a>

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

## <a id='远程搜索'>远程搜索</a>

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

## Select 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | string \| number \| boolean \| object \| array | '' |
| options | 选项列表（数组模式） | array | [] |
| props | 选项字段映射（value/label/disabled/options） | object | - |
| disabled | 是否禁用 | boolean | false |
| multiple | 是否多选 | boolean | false |
| clearable | 是否可清空 | boolean | true |
| filterable | 是否可搜索 | boolean | false |
| filter-method | 自定义过滤方法 | (query: string) => boolean | - |
| remote | 是否远程搜索 | boolean | false |
| remote-method | 远程搜索方法 | (query: string) => void | - |
| debounce | 远程搜索防抖（ms） | number | 300 |
| loading | 是否加载中 | boolean | false |
| loading-text | 加载中文案 | string | 'Loading' |
| no-match-text | 无匹配数据文案 | string | '无匹配数据' |
| no-data-text | 无数据文案 | string | '无数据' |
| placeholder | 占位符 | string | '请选择' |
| width | 宽度 | string | '240px' |
| size | 尺寸 | large / medium / small / mini | - |
| value-key | 绑定值为对象时的唯一键 | string | 'value' |
| collapse-tags | 多选时是否折叠标签 | boolean | false |
| max-collapse-tags | 最多显示多少个标签（折叠时） | number | 1 |
| popper-class | 下拉弹层 class | string | '' |
| popper-style | 下拉弹层样式 | string \| object | '' |
| teleported | 是否 teleport 到 append-to | boolean | true |
| append-to | teleport 目标 | string \| HTMLElement | 'body' |
| offset | 弹层偏移 | number | 8 |
| suffix-icon | 右侧箭头图标 | string | 'IconCaretDown' |
| clear-icon | 清空图标 | string | 'IconClose' |

## Select 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义下拉项（搭配 `DkOption` / `DkOptionGroup`） |
| header | 自定义下拉头部 |
| footer | 自定义下拉底部 |
| loading | 自定义 loading 内容 |
| empty | 自定义空态内容 |

## Select 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | v-model 更新 | (value) |
| change | 值变化 | (value) |
| clear | 清空 | - |
| visible-change | 下拉显示状态变化 | (visible: boolean) |
| focus | 聚焦 | (evt: FocusEvent) |
| blur | 失焦 | (evt: FocusEvent) |
| remove-tag | 多选移除某个 tag | (tagValue) |
| popup-scroll | 下拉滚动 | (evt: Event) |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/isMrFan" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" alt="Mr.Fan" />
  </a>
</div>

<script lang='ts' setup>
import VueDomeSelect from '../vueDome/select/index.vue'
</script>
