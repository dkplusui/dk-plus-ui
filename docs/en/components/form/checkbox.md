# Checkbox

在多个选项中进行多选。

- [source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkcheckbox)
- [documents editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/checkbox.md)

## <a id='BasicUsage'>Basic usage</a>

The `size` attribute is used to control the size of the multi selection box, with a default of `small`.

::: module
<template #code>

<div class='box'>
  <div class='box-item'>
    <dk-checkbox v-model='checked' size='large' label='option1(large)'></dk-checkbox>
    <dk-checkbox size='medium' label='option2(medium)'></dk-checkbox>
    <dk-checkbox size='small' label='option3(small)'></dk-checkbox>
    <dk-checkbox size='mini' label='option4(mini)'></dk-checkbox>
  </div>
  <div class='box-item'>
    <dk-checkbox disabled label='option1'></dk-checkbox>
    <dk-checkbox disabled label='option2'></dk-checkbox>
    <dk-checkbox disabled label='option3'></dk-checkbox>
    <dk-checkbox disabled label='option4'></dk-checkbox>
  </div>
</div>
</template>

```vue
<template>
  <div class="box">
    <div class="box-item">
      <dk-checkbox v-model="checked" size="large" label="option1(large)"></dk-checkbox>
      <dk-checkbox size="medium" label="option2(medium)"></dk-checkbox>
      <dk-checkbox size="small" label="option3(small)"></dk-checkbox>
      <dk-checkbox size="mini" label="option4(mini)"></dk-checkbox>
    </div>
    <div class="box-item">
      <dk-checkbox disabled label="option1"></dk-checkbox>
      <dk-checkbox disabled label="option2"></dk-checkbox>
      <dk-checkbox disabled label="option3"></dk-checkbox>
      <dk-checkbox disabled label="option4"></dk-checkbox>
    </div>
  </div>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'checkbox',
    setup() {
      const data = reactive({
        checked: true
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

## <a id='DisabledState'>Disabled state</a>

Disable the checkbox through the `disabled` attribute.

::: module
<template #code>
<dk-checkbox disabled label='disabled'></dk-checkbox>
<dk-checkbox label='Not disabled '></dk-checkbox>
</template>

```html
<template>
  <dk-checkbox disabled label="disabled"></dk-checkbox>
  <dk-checkbox label="Not disabled "></dk-checkbox>
</template>
```

:::

## <a id='group'>group</a>

`dk-checkbox-group`is used for multiple selection box groups. Multiple`dk-checkboxes` can be placed in the `dk-checkbox-group`.

::: module
<template #code>
<dk-checkbox-group v-model='checkList'>
<dk-checkbox label='option1'></dk-checkbox>
<dk-checkbox label='option2'></dk-checkbox>
<dk-checkbox label='option3'></dk-checkbox>
<dk-checkbox label='option4'></dk-checkbox>
</dk-checkbox-group>
</template>

```vue
<template>
  <dk-checkbox-group v-model="checkList">
    <dk-checkbox
      v-for="item in checkList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></dk-checkbox>
  </dk-checkbox-group>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'checkbox',
    setup() {
      const data = reactive({
        checkList: [
          { label: 'option1', value: '1' },
          { label: 'option2', value: '2' },
          { label: 'option3', value: '3' },
          { label: 'option4', value: '4' }
        ]
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

## <a id='Intermediate'>Intermediate</a>

Use the `indeterminate` attribute to set the intermediate state of the multi selection box.

::: module
<template #code>
<VueDomeCheckbox></VueDomeCheckbox>
</template>

```vue
<template>
  <dk-checkbox
    v-model="allCheck"
    :indeterminate="isIndeterminate"
    label="Select All"
    @change="handleAllCheckChange"
  ></dk-checkbox>
  <dk-checkbox-group v-model="checkList" @change="handleGroupChange">
    <dk-checkbox
      v-for="item in checkList"
      :key="item.value"
      v-model="item.checked"
      :label="item.label"
      :value="item.value"
    ></dk-checkbox>
  </dk-checkbox-group>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'checkbox',
    setup() {
      const data = reactive({
        allCheck: false,
        isIndeterminate: true,
        checkList: [
          { label: 'option1', value: '1', checked: false },
          { label: 'option2', value: '2', checked: false },
          { label: 'option3', value: '3', checked: false },
          { label: 'option4', value: '4', checked: false }
        ]
      })
      const methods = reactive({
        handleAllCheckChange(val: boolean) {
          data.checkList.forEach(item => {
            item.checked = val
          })
          data.isIndeterminate = false
        },
        handleGroupChange(val: string[]) {
          data.allCheck = val.length === data.checkList.length
          data.isIndeterminate = val.length > 0 && val.length < data.checkList.length
        },
        getIndeterminate() {
          const isChecked = data.checkList.find(item => item.checked)
          if (isChecked !== undefined && data.allCheck === false) {
            return true
          }
          return false
        }
      })
      data.isIndeterminate = methods.getIndeterminate()
      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>
```

:::

## <a id='SelectedQuantityLimit'>SelectedQuantityLimit</a>

The `max` attribute is used to set the maximum number of selected boxes.

::: module
<template #code>
<VueDomeCheckboxMax></VueDomeCheckboxMax>
</template>

```vue
<template>
  <dk-checkbox-group v-model="checkList" :max="2">
    <dk-checkbox
      v-for="item in checkList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    ></dk-checkbox>
  </dk-checkbox-group>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'checkbox',
    setup() {
      const data = reactive({
        checkList: [
          { label: 'option1', value: '1' },
          { label: 'option2', value: '2' },
          { label: 'option3', value: '3' },
          { label: 'option4', value: '4' }
        ]
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

## <a id='WithBorder'>With border</a>

Set the border of the multi-selection box through the `border` attribute.

::: module
<template #code>
<dk-checkbox-group v-model='checkList' border>
<dk-checkbox border label='option1'></dk-checkbox>
<dk-checkbox border label='option2'></dk-checkbox>
<dk-checkbox border label='option3'></dk-checkbox>
<dk-checkbox border label='option4'></dk-checkbox>
</dk-checkbox-group>
</template>

```vue
<template>
  <dk-checkbox-group v-model="checkList" border>
    <dk-checkbox
      v-for="item in checkList"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      border
    ></dk-checkbox>
  </dk-checkbox-group>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'checkbox',
    setup() {
      const data = reactive({
        checkList: [
          { label: 'option1', value: '1' },
          { label: 'option2', value: '2' },
          { label: 'option3', value: '3' },
          { label: 'option4', value: '4' }
        ]
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

## attribute

| parameter       | explain                                                                              | type      | Optional values                 | Default value |
| --------------- | ------------------------------------------------------------------------------------ | --------- | ------------------------------- | ------------- |
| `v-model`       | [BindingValue](#BasicUsage)                                                          | `boolean` | `true` `false`                  | -             |
| `label`         | [MultipleChoiceBoxCopy](#BasicUsage)                                                 | `string`  | -                               | -             |
| `value`         | [The true value of the multiple selection box(Do not set default to`label`)](#group) | `string`  | -                               | -             |
| `size`          | [Size of Multiple Selection Box](#BasicUsage)                                        | `string`  | `large` `medium` `small` `mini` | `small`       |
| `disabled`      | [Is it disabled](#DisabledState)                                                     | `boolean` | `true` `false`                  | `false`       |
| `indeterminate` | [Is it in an intermediate state](#Intermediate)                                      | `boolean` | `true` `false`                  | `false`       |
| `border`        | [Is there a border](#WithBorder)                                                     | `boolean` | `true` `false`                  | `false`       |

## Event

| Event Name | explain                                  | Callback Arguments |
| ---------- | ---------------------------------------- | ------------------ |
| `change`   | Triggered when the binding value changes | `() => boolean`    |

## Slot

| Slot Name             | explain                  |
| --------------------- | ------------------------ |
| `default`Default slot | Multiple Choice Box Copy |

## checkbox-group attribute

| parameter | explain                                             | type       | Optional values | Default value |
| --------- | --------------------------------------------------- | ---------- | --------------- | ------------- |
| `max`     | [Maximum selected quantity](#SelectedQuantityLimit) | `number`   | -               | -             |
| `v-model` | [Binding value](#group)                             | `string[]` | -               | -             |

## checkbox-group Event

| Event Name | explain                                  | Callback Arguments          |
| ---------- | ---------------------------------------- | --------------------------- |
| `change`   | Triggered when the binding value changes | `(value: string[]) => void` |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.box-item{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
}
</style>

<script setup>
  import VueDomeCheckbox from '../vueDome/checkbox/index.vue';
  import VueDomeCheckboxMax from '../vueDome/checkbox/max.vue';
  import { ref } from 'vue'
  const checked = ref(true)
  const checkList = ref([
    { label: 'option1', value: '1' },
    { label: 'option2', value: '2' },
    { label: 'option3', value: '3' },
    { label: 'option4', value: '4' }
  ])
</script>
