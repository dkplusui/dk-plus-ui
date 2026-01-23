# input-number 数字输入框

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkinputNumber)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/inputNumber.md)

## <a id='基础用法'>基础用法</a>

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input'></VueDomeInputNumber>
</template>

```html
<template>
  <dk-input-number></dk-input-number>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## <a id='禁用状态'>禁用状态</a>

`disabled` 属性设置为 `true` 时，数字输入框为禁用状态。

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' disabled></VueDomeInputNumber>
</template>

```html
<template>
  <dk-input-number v-model="value" disabled></dk-input-number>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## <a id='尺寸'>尺寸</a>

`size` 属性用于控制数字输入框组件的尺寸，可选值为 `large`、`medium`、`small`(默认)和 `mini`。

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' size='large'></VueDomeInputNumber>
<VueDomeInputNumber class='docs-number docs-input' size="medium"></VueDomeInputNumber>
<VueDomeInputNumber class='docs-number docs-input' size="small"></VueDomeInputNumber>
<VueDomeInputNumber class='docs-number docs-input' size="mini"></VueDomeInputNumber>
</template>

```html
<template>
  <dk-input-number size="large"></dk-input-number>
  <dk-input-number size="medium"></dk-input-number>
  <dk-input-number size="small"></dk-input-number>
  <dk-input-number size="mini"></dk-input-number>
</template>
```

:::

## <a id='最大值与最小值'>最大值与最小值</a>

`max` 属性用于设置数字输入框的最大值，`min` 属性用于设置数字输入框的最小值。

::: module

<template #code>
<VueDomeInputNumber class='docs-number docs-input' :max="10" :min="0"></VueDomeInputNumber>
</template>

```html
<template>
  <dk-input-number :max="10" :min="0"></dk-input-number>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## <a id='步长'>步长</a>

`step` 属性用于设置数字输入框的步长，默认为 `1`。

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' :step="2"></VueDomeInputNumber>
</template>

```html
<template>
  <dk-input-number :step="2"></dk-input-number>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## <a id='精度'>精度</a>

`precision` 属性用于设置数字输入框的精度，默认为 `0`。

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' :precision="2" step="0.2"></VueDomeInputNumber>
</template>

```html
<template>
  <dk-input-number :precision="2"></dk-input-number>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## <a id='严格模式'>严格模式</a>

`strict` 属性用于设置数字输入框的严格模式，当 `strict` 属性为 `true` 时，输入框的值只能输入设置好的步长值。

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' :step="2" strict></VueDomeInputNumber>
</template>

```html
<template>
  <dk-input-number :step="2" strict></dk-input-number>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## <a id='位置'>位置</a>

`position` 属性用于设置数字输入框的位置，可选值为 `left`、`right`。

::: module

<template #code>
<VueDomeInputNumber class='docs-number docs-input' position="left"></VueDomeInputNumber>

<div style='margin-top: 10px;'></div>
<VueDomeInputNumber class='docs-number docs-input' position="right"></VueDomeInputNumber>
</template>

```html
<template>
  <dk-input-number position="left"></dk-input-number>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const value = ref(0)
      return {
        value
      }
    }
  })
</script>
```

:::

## <a id='属性'>属性</a>

| 参数          | 说明                                                       | 类型      | 可选值                          | 默认值      |
| ------------- | ---------------------------------------------------------- | --------- | ------------------------------- | ----------- |
| `v-model`     | 绑定值                                                     | `number`  | —                               | —           |
| `size`        | [输入框尺寸](#尺寸)                                        | `string`  | `large` `medium` `small` `mini` | `small`     |
| `disabled`    | [是否禁用状态](#禁用状态)                                  | `boolean` | —                               | `false`     |
| `max`         | [设置最大值](#最大值与最小值)                              | `number`  | —                               | `Infinity`  |
| `min`         | [设置最小值](#最大值与最小值)                              | `number`  | —                               | `-Infinity` |
| `step`        | [设置步长](#步长)                                          | `number`  | —                               | `1`         |
| `precision`   | [数值精度](#精度)                                          | `number`  | —                               | `0`         |
| `strict`      | 是否严格模式，严格模式下，输入框的值只能输入设置好的步长值 | `boolean` | —                               | `false`     |
| `placeholder` | 占位文本                                                   | `string`  | —                               | —           |
| `position`    | [按钮位置](#位置)                                          | `string`  | `left` `right`                  | `right`     |

## <a id='事件'>事件</a>

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| `change` | 绑定值变化时触发 | `value`  |

## <a id='Contributors'>Contributors</a>

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
  <a href="https://github.com/bugfix2020" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/29813979?v=4"/>
  </a>
</div>

<script lang='ts' setup>
  import VueDomeInputNumber from '../vueDome/inputNumber/index.vue';
</script>
