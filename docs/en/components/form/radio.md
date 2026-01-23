# Radio

In the given set of options, **single select**. The difference between `Checkbox` and `Checkbox` is that radio boxes are generally used in scenarios where **status changes and submission** is required.

- [source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/radio)
- [documents editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/radio.md)

## <a id='Basicusage'>Basic usage</a>

`label` is the copy of the radio box, `name` is the true value of the radio box, and `v-model` is the bound value.

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

## <a id='Radio-Box-Group'>RadioBoxGroup</a>

Using `dk-radio-group` can achieve radio box groups.

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

## <a id='disabled'>disabled</a>

Disable the radio box through the `disabled` attribute.

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

## <a id='border'>border</a>

Set a radio box with a border through the `border` attribute.

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

## <a id='size'>size</a>

Through the `size` property to set the size of the radio box, support `large`, `medium`, `small`, `mini`, default `small`.

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

## <a id='attribute'>attribute</a>

| parameter         | explain                                                                      | type      | Optional values                 | Default value |
| ----------------- | ---------------------------------------------------------------------------- | --------- | ------------------------------- | ------------- |
| `v-model`         | [Binding value](#Basicusage)                                                 | `string`  | -                               | -             |
| `label`           | [Radio Box Copy](#Basicusage)                                                | `string`  | -                               | -             |
| `name`            | [The true value of the radio box(Do not set default to`label`)](#Basicusage) | `string`  | -                               | -             |
| `size`            | [The size of the radio box](#size)                                           | `string`  | `large` `medium` `small` `mini` | `small`       |
| `disabled`        | [Is it disabled](#disabled)                                                  | `boolean` | `true` `false`                  | `false`       |
| `border`          | [Is there a border](#border)                                                 | `boolean` | `true` `false`                  | `false`       |
| `checked-color`   | Color when selected                                                          | `string`  | -                               | `#409eff`     |
| `unchecked-color` | Color when not selected                                                      | `string`  | -                               | `#c0ccda`     |

## <a id='Events'>Events</a>

| Event Name | explain                      | Callback Arguments         |
| ---------- | ---------------------------- | -------------------------- |
| `change`   | [Binding value](#Basicusage) | `(value: string) => value` |

## <a id='RadioGroupAttribute'>RadioGroup attribute</a>

| parameter | explain                           | type     | Optional values | Default value |
| --------- | --------------------------------- | -------- | --------------- | ------------- |
| `v-model` | [Binding value](#Radio-Box-Group) | `string` | -               | -             |

## <a id='RadioGroupEvents'>RadioGroup Events</a>

| Event Name | explain                           | Callback Arguments         |
| ---------- | --------------------------------- | -------------------------- |
| `change`   | [Binding value](#Radio-Box-Group) | `(value: string) => value` |

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
