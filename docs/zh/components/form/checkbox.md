# Checkbox 多选框

在多个选项中进行多选。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkcheckbox)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/checkbox.md)

## <a id='基础用法'>基础用法</a>

`size` 属性用来控制多选框的大小, 默认 `small`。

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

## <a id='禁用状态'>禁用状态</a>

通过 `disabled` 属性来禁用多选框。

::: module
<template #code>
<dk-checkbox disabled label='已禁用'></dk-checkbox>
<dk-checkbox label='未禁用'></dk-checkbox>
</template>

```html
<template>
  <dk-checkbox disabled label="已禁用"></dk-checkbox>
  <dk-checkbox label="未禁用"></dk-checkbox>
</template>
```

:::

## <a id='组合'>组合</a>

`dk-checkbox-group` 用于多选框组，将多个 `dk-checkbox` 放在 `dk-checkbox-group` 中即可。

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

## <a id='中间状态'>中间状态</a>

通过 `indeterminate` 属性来设置多选框的中间状态。

::: module
<template #code>
<VueDomeCheckbox></VueDomeCheckbox>
</template>

```vue
<template>
  <dk-checkbox
    v-model="allCheck"
    :indeterminate="isIndeterminate"
    label="全选"
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

## <a id='选中数量限制'>选中数量限制</a>

`max` 属性用来设置多选框的最大选中数量。

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

## <a id='带有边框'>带有边框</a>

通过 `border` 属性来设置多选框的边框。

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

## 属性

| 参数            | 说明                                         | 类型      | 可选值                          | 默认值  |
| --------------- | -------------------------------------------- | --------- | ------------------------------- | ------- |
| `v-model`       | [绑定值](#基础用法)                          | `boolean` | `true` `false`                  | -       |
| `label`         | [多选框文案](#基础用法)                      | `string`  | -                               | -       |
| `value`         | [多选框的真实值(不设置默认为`label`)](#组合) | `string`  | -                               | -       |
| `size`          | [多选框的大小](#基础用法)                    | `string`  | `large` `medium` `small` `mini` | `small` |
| `disabled`      | [是否禁用](#禁用状态)                        | `boolean` | `true` `false`                  | `false` |
| `indeterminate` | [是否为中间状态](#中间状态)                  | `boolean` | `true` `false`                  | `false` |
| `border`        | [是否带有边框](#带有边框)                    | `boolean` | `true` `false`                  | `false` |

## 事件

| 事件名称 | 说明             | 回调参数        |
| -------- | ---------------- | --------------- |
| `change` | 绑定值变化时触发 | `() => boolean` |

## 插槽

| 插槽名称          | 说明       |
| ----------------- | ---------- |
| `default`默认插槽 | 多选框文案 |

## checkbox-group 属性

| 参数      | 说明                          | 类型       | 可选值 | 默认值 |
| --------- | ----------------------------- | ---------- | ------ | ------ |
| `max`     | [最大选中数量](#选中数量限制) | `number`   | -      | -      |
| `v-model` | [绑定值](#组合)               | `string[]` | -      | -      |

## checkbox-group 事件

| 事件名称 | 说明             | 回调参数                    |
| -------- | ---------------- | --------------------------- |
| `change` | 绑定值变化时触发 | `(value: string[]) => void` |

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
