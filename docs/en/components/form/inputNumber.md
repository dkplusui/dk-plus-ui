# input-number Number input box

- [source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkinputNumber)
- [documents editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/inputNumber.md)

## Basic usage

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input'></VueDomeInputNumber>
</template>

```html
<dk-input-number></dk-input-number>
<script lang='ts'>
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

## Disabled state

`disabled` Property set to `true`, The digital input box is disabled.

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' disabled></VueDomeInputNumber>
</template>

```html
<dk-input-number v-model='value' disabled></dk-input-number>
<script lang='ts'>
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

## size

`size` The attribute is used to control the size of the digital input box component, with optional values being `large`、`medium`、`small`(default)and `mini`。

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' size="large"></VueDomeInputNumber>
<VueDomeInputNumber class='docs-number docs-input' size="medium"></VueDomeInputNumber>
<VueDomeInputNumber class='docs-number docs-input' size="small"></VueDomeInputNumber>
<VueDomeInputNumber class='docs-number docs-input' size="mini"></VueDomeInputNumber>
</template>

```html
<dk-input-number size="large"></dk-input-number>
<dk-input-number size="medium"></dk-input-number>
<dk-input-number size="small"></dk-input-number>
<dk-input-number size="mini"></dk-input-number>
```

:::

## Maximum and minimum values

`max` Property is used to set the maximum value of the numeric input box,`min` Property is used to set the minimum value of the numeric input box.

::: module

<template #code>
<VueDomeInputNumber class='docs-number docs-input' :max="10" :min="0"></VueDomeInputNumber>
</template>

```html
<dk-input-number :max="10" :min="0"></dk-input-number>
<script lang='ts'>
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

## step

`step` Property is used to set the step size of the numeric input box, which defaults to `1`。

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' :step="2"></VueDomeInputNumber>
</template>

```html
<dk-input-number :step="2"></dk-input-number>
<script lang='ts'>
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

## accuracy

`precision` Property is used to set the precision of the numeric input box, which defaults to `0`。

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' :precision="2" step="0.2"></VueDomeInputNumber>
</template>

```html
<dk-input-number :precision="2"></dk-input-number>
<script lang='ts'>
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

## Strict mode

`strict` Property is used to set the strict mode of the numeric input box, when `strict` Attribute is `true` , The value in the input box can only enter the set step size value.

::: module
<template #code>
<VueDomeInputNumber class='docs-number docs-input' :step="2" strict></VueDomeInputNumber>
</template>

```html
<dk-input-number :step="2" strict></dk-input-number>
<script lang='ts'>
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

## attribute

| parameter      | explain                                                                 | type    | Optional values | Default value |
| --------- | -------------------------------------------------------------------- | ------- | ------ | ------ |
| `v-model`     | v-model                                                               | `number`  | —      | —      |
| `size`      | Input box size                                                           | `string`  | `large` `medium` `small` `mini`      | `small`  |
| `disabled`  | Is the state disabled                                                         | `boolean` | —      | `false`  |
| `max`       | Set maximum value                                                           | `number`  | —      | `Infinity` |
| `min`       | Set minimum value                                                           | `number`  | —      | `-Infinity` |
| `step`      | Set Step Size                                                             | `number`  | —      | `1`      |
| `precision` | Numerical accuracy                                                             | `number`  | —      | `0`      |
| `strict`    | Is it strict mode? In strict mode, the value in the input box can only enter the set step size value | `boolean` | —      | `false`  |

## Event

| Event Name | explain             | Callback Arguments  |
| -------- | ---------------- | -------- |
| `change` | Triggered when the binding value changes | `value`  |



## Contributors

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
