# Radio 单选框

在给定的一组选项中**单选**。和 `Checkbox` 的区别是，单选框一般用在**状态改变后需要提交**的场景。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/radio)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/radio.md)

## <a id='基础用法'>基础用法</a>

`label` 为单选框的文案，`name` 为单选框的真实值，`v-model` 为绑定值。

::: module
<template #code>

<div class='box'>
  <div class='box-item'>
    <dk-radio v-model='checked' size='large' label='option1(large)' name='option1(large)'></dk-radio>
    <dk-radio size='medium' label='option2(medium)' name='option2(medium)'></dk-radio>
    <dk-radio size='small' label='option3(small)' name='option3(small)'></dk-radio>
    <dk-radio size='mini' label='option4(mini)' name='option4(mini)'></dk-radio>
  </div>
  <div class='box-item'>
    <dk-radio disabled label='option1' name='option1'></dk-radio>
    <dk-radio disabled label='option2' name='option2'></dk-radio>
    <dk-radio disabled label='option3' name='option3'></dk-radio>
    <dk-radio disabled label='option4' name='option4'></dk-radio>
  </div>
</div>
</template>

```vue
<template>
  <div class="box">
    <div class="box-item">
      <dk-radio
        v-model="checked"
        size="large"
        label="option1(large)"
        name="option1(large)"
      ></dk-radio>
      <dk-radio size="medium" label="option2(medium)" name="option2(medium)"></dk-radio>
      <dk-radio size="small" label="option3(small)" name="option3(small)"></dk-radio>
      <dk-radio size="mini" label="option4(mini)" name="option4(mini)"></dk-radio>
    </div>
    <div class="box-item">
      <dk-radio disabled label="option1" name="option1"></dk-radio>
      <dk-radio disabled label="option2" name="option2"></dk-radio>
      <dk-radio disabled label="option3" name="option3"></dk-radio>
      <dk-radio disabled label="option4" name="option4"></dk-radio>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    checked: 'option1(large)'
  })
  const { checked } = toRefs(data)
</script>
```

:::

## <a id='单选框组'>单选框组</a>

使用 `dk-radio-group` 可以实现单选框组。

::: module
<template #code>
<dk-radio-group v-model="groupValue">
<dk-radio label="option 1" name="radio1" />
<dk-radio label="option 2" name="radio2" />
<dk-radio label="option 3" name="radio3" />
</dk-radio-group>
</template>

```vue
<template>
  <dk-radio-group v-model="groupValue" @change="handleGroupChange">
    <dk-radio label="option 1" name="radio1" />
    <dk-radio label="option 2" name="radio2" />
    <dk-radio label="option 3" name="radio3" />
  </dk-radio-group>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    groupValue: 'option 1'
  })
  const { groupValue } = toRefs(data)
  const handleGroupChange = (val: string) => {
    console.log(val)
  }
</script>
```

:::

## <a id='禁用状态'>禁用状态</a>

通过 `disabled` 属性来禁用单选框。

::: module
<template #code>
<dk-radio-group v-model="disabledGroupValue">
<dk-radio label="option 1" name="radio1" />
<dk-radio label="option 2" name="radio2" />
<dk-radio label="option 3" name="radio3" disabled />
</dk-radio-group>
</template>

```vue
<template>
  <dk-radio-group v-model="groupValue">
    <dk-radio label="option 1" name="radio1" />
    <dk-radio label="option 2" name="radio2" />
    <dk-radio label="option 3" name="radio3" disabled />
  </dk-radio-group>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    groupValue: 'option 1'
  })
  const { groupValue } = toRefs(data)
</script>
```

:::

## <a id='带有边框的单选框'>带有边框的单选框</a>

通过 `border` 属性来设置带有边框的单选框。

::: module
<template #code>
<dk-radio-group v-model="borderGroupValue">
<dk-radio label="option 1" name="radio1" border />
<dk-radio label="option 2" name="radio2" border />
<dk-radio label="option 3" name="radio3" border />
</dk-radio-group>
</template>

```vue
<template>
  <dk-radio-group v-model="groupValue">
    <dk-radio label="option 1" name="radio1" border />
    <dk-radio label="option 2" name="radio2" border />
    <dk-radio label="option 3" name="radio3" border />
  </dk-radio-group>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    groupValue: 'option 1'
  })
  const { groupValue } = toRefs(data)
</script>
```

:::

## <a id='尺寸'>尺寸</a>

通过 `size` 属性来设置单选框的尺寸, 支持 `large`、`medium`、`small`、`mini`, 默认 `small`。

::: module
<template #code>
<dk-radio-group v-model="sizeGroupValue">
<dk-radio label="option 1" name="radio1" size="large" />
<dk-radio label="option 2" name="radio2" size="medium" />
<dk-radio label="option 3" name="radio3" size="small" />
<dk-radio label="option 4" name="radio4" size="mini" />
</dk-radio-group>

<div style='margin-top: 20px'></div>
<dk-radio-group v-model="sizeGroupValue">
<dk-radio label="option 1" name="radio1" border size="large" />
<dk-radio label="option 2" name="radio2" border size="medium" />
<dk-radio label="option 3" name="radio3" border size="small" />
<dk-radio label="option 4" name="radio4" border size="mini" />
</dk-radio-group>
</template>

```vue
<template>
  <dk-radio-group v-model="groupValue">
    <dk-radio label="option 1" name="radio1" size="large" />
    <dk-radio label="option 2" name="radio2" size="medium" />
    <dk-radio label="option 3" name="radio3" size="small" />
    <dk-radio label="option 4" name="radio4" size="mini" />
  </dk-radio-group>
  <dk-radio-group v-model="sizeGroupValue">
    <dk-radio label="option 1" name="radio1" border size="large" />
    <dk-radio label="option 2" name="radio2" border size="medium" />
    <dk-radio label="option 3" name="radio3" border size="small" />
    <dk-radio label="option 4" name="radio4" border size="mini" />
  </dk-radio-group>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    groupValue: 'option 1'
  })
  const { groupValue } = toRefs(data)
</script>
```

:::

## <a id='属性'>属性</a>

| 参数              | 说明                                             | 类型      | 可选值                          | 默认值    |
| ----------------- | ------------------------------------------------ | --------- | ------------------------------- | --------- |
| `v-model`         | [绑定值](#基础用法)                              | `string`  | -                               | -         |
| `label`           | [单选框文案](#基础用法)                          | `string`  | -                               | -         |
| `name`            | [单选框的真实值(不设置默认为`label`)](#基础用法) | `string`  | -                               | -         |
| `size`            | [单选框的大小](#尺寸)                            | `string`  | `large` `medium` `small` `mini` | `small`   |
| `disabled`        | [是否禁用](#禁用状态)                            | `boolean` | `true` `false`                  | `false`   |
| `border`          | [是否带有边框](#带有边框的单选框)                | `boolean` | `true` `false`                  | `false`   |
| `checked-color`   | 选中时的颜色                                     | `string`  | -                               | `#409eff` |
| `unchecked-color` | 未选中时的颜色                                   | `string`  | -                               | `#c0ccda` |

## <a id='事件'>事件</a>

| 事件名   | 说明                | 回调参数                   |
| -------- | ------------------- | -------------------------- |
| `change` | [绑定值](#基础用法) | `(value: string) => value` |

## <a id='RadioGroup属性'>RadioGroup 属性</a>

| 参数      | 说明                | 类型     | 可选值 | 默认值 |
| --------- | ------------------- | -------- | ------ | ------ |
| `v-model` | [绑定值](#单选框组) | `string` | -      | -      |

## <a id='RadioGroup事件'>RadioGroup 事件</a>

| 事件名   | 说明                | 回调参数                   |
| -------- | ------------------- | -------------------------- |
| `change` | [绑定值](#单选框组) | `(value: string) => value` |


## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>

<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    checked: 'option1(large)',
    groupValue: 'option 1',
    disabledGroupValue: 'option 1',
    borderGroupValue: 'option 1',
    sizeGroupValue: 'option 1'
  })
  const { checked, groupValue, disabledGroupValue, borderGroupValue, sizeGroupValue } = toRefs(data)
</script>
