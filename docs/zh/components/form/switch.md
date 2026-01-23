# Switch 开关

两种状态间进行切换时用到的开关选择器。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/switch)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/switch.md)

## <a id='基础用法'>基础用法</a>

`v-model` 为绑定值， `true` 为选中状态，`false` 为未选中状态，`checked-color` 为选中状态的背景色，`unchecked-color` 为未选中状态的背景色。

::: module
<template #code>

  <div class='box' style='display: flex; gap: 10px'>
    <dk-switch v-model='checkValue'></dk-switch>
    <dk-switch v-model='checkValue2' checked-color='#10b981' unchecked-color='#d33f3f'></dk-switch>
  </div>
</template>

```vue
<template>
  <div class="box" style="display: flex; gap: 10px">
    <dk-switch v-model="checkValue"></dk-switch>
    <dk-switch
      v-model="checkValue2"
      checked-color="#10b981"
      unchecked-color="#d33f3f"
    ></dk-switch>
  </div>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    checkValue: false,
    checkValue2: true
  })
  const { checkValue, checkValue2 } = toRefs(data)
</script>
```

:::

## <a id='禁用状态'>禁用状态</a>

`disabled` 为禁用状态。

::: module
<template #code>

  <div class='box' style='display: flex; gap: 10px'>
    <dk-switch v-model='checkValue3' disabled></dk-switch>
    <dk-switch v-model='checkValue4' disabled></dk-switch>
  </div>
</template>
  
  ```vue
<template>
  <div class="box" style="display: flex; gap: 10px">
    <dk-switch v-model="checkValue" disabled></dk-switch>
    <dk-switch v-model="checkValue2" disabled></dk-switch>
  </div>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    checkValue: false,
    checkValue2: true
  })
  const { checkValue, checkValue2 } = toRefs(data)
</script>
```

:::

## <a id='不同尺寸'>不同尺寸</a>

`size` 为尺寸，可选值为 `large`、`medium`、`small`、`mini`, 默认为 `small`。

::: module
<template #code>

  <div class='box' style='display: flex; gap: 10px; align-items: center'>
    <dk-switch v-model='checkValue5' size='large'></dk-switch>
    <dk-switch v-model='checkValue5' size='medium'></dk-switch>
    <dk-switch v-model='checkValue5' size='small'></dk-switch>
    <dk-switch v-model='checkValue5' size='mini'></dk-switch>
  </div>
</template>
  
  ```vue
<template>
  <div class="box" style="display: flex; gap: 10px">
    <dk-switch v-model="checkValue" size="large"></dk-switch>
    <dk-switch v-model="checkValue" size="medium"></dk-switch>
    <dk-switch v-model="checkValue" size="small"></dk-switch>
    <dk-switch v-model="checkValue" size="mini"></dk-switch>
  </div>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    checkValue: false
  })
  const { checkValue } = toRefs(data)
</script>
```

:::

## <a id='文案设置'>文案设置</a>

`checked-text` 为选中状态的文案，`unchecked-text` 为未选中状态的文案。
`width` 为开关的宽度，没有设置宽度时，开关的宽度自适应，设置宽度时，开关的宽度为设置的宽度，超出部分显示省略号。

::: module
<template #code>

  <div class='box' style='display: flex; gap: 10px; align-items: center'>
    <dk-switch v-model='checkValue' checked-text='开启' unchecked-text='关闭'></dk-switch>
    <dk-switch v-model='checkValue2' checked-text='开启' unchecked-text='关闭'></dk-switch>
  </div>
  <div class='box' style='display: flex; gap: 10px; align-items: center; margin-top:10px'>
    <dk-switch v-model='checkValue' checked-text='设置宽度' unchecked-text='开关宽度超出显示省略号' width="100px"></dk-switch>
    <dk-switch v-model='checkValue2' checked-text='没有设置宽度' unchecked-text='开关的宽度自适应'></dk-switch>
  </div>
</template>
  
  ```vue
<template>
  <div class='box' style='display: flex; gap: 10px; align-items: center'>
    <dk-switch 
      v-model='checkValue'
      checked-text='开启'
      unchecked-text='关闭'
    ></dk-switch>
    <dk-switch
      v-model='checkValue2'
      checked-text='开启'
      unchecked-text='关闭'
    ></dk-switch>
  </div>
  <div class='box' style='display: flex; gap: 10px; align-items: center; margin-top:10px'>
    <dk-switch
      v-model='checkValue'
      checked-text='设置宽度'
      unchecked-text='开关宽度超出显示省略号'
      width="100px"
    ></dk-switch>
    <dk-switch
      v-model='checkValue2'
      checked-text='没有设置宽度'
      unchecked-text='开关的宽度自适应'
    ></dk-switch>
  </div>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    checkValue: false,
    checkValue2: true
  })
  const { checkValue, checkValue2 } = toRefs(data)
</script>
```

:::

## <a id='带有图标的开关'>带有图标的开关</a>

`checked-icon` 为选中状态的图标，`unchecked-icon` 为未选中状态的图标。

::: module
<template #code>

  <div class='box' style='display: flex; gap: 10px; align-items: center'>
    <dk-switch v-model='checkValue6' checked-icon='IconCheck' unchecked-icon='IconClose'></dk-switch>
    <dk-switch v-model='checkValue7' checked-icon='IconCheck' unchecked-icon='IconClose'></dk-switch>
  </div>
</template>
  
  ```vue
<template>
  <div class='box' style='display: flex; gap: 10px; align-items: center'>
    <dk-switch
      v-model='checkValue'
      checked-icon='check'
      unchecked-icon='close'
    ></dk-switch>
    <dk-switch
      v-model='checkValue2'
      checked-icon='check'
      unchecked-icon='close'
    ></dk-switch>
  </div>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    checkValue: false,
    checkValue2: true
  })
  const { checkValue, checkValue2 } = toRefs(data)
</script>
```

:::

## <a id='Loading状态'>Loading 状态</a>

`loading` 为 Loading 状态，`checked-custom-icon` 为选中状态的自定义图标，`unchecked-custom-icon` 为未选中状态的自定义图标。

::: module
<template #code>

  <div class='box' style='display: flex; gap: 10px; align-items: center'>
    <dk-switch v-model='checkValue8' loading></dk-switch>
    <dk-switch v-model='checkValue9' loading></dk-switch>
  </div>
  <div class='box' style='display: flex; gap: 10px; align-items: center; margin-top:10px'>
    <dk-switch v-model='checkValue8' checked-custom-icon='IconCheck' unchecked-custom-icon='IconClose'></dk-switch>
    <dk-switch v-model='checkValue9' checked-custom-icon='IconCheck' unchecked-custom-icon='IconClose'></dk-switch>
  </div>
</template>
  
  ```vue
<template>
  <div class='box' style='display: flex; gap: 10px; align-items: center'>
    <dk-switch v-model='checkValue' loading></dk-switch>
    <dk-switch v-model='checkValue2' loading></dk-switch>
  </div>
  <div class='box' style='display: flex; gap: 10px; align-items: center; margin-top:10px'>
    <dk-switch
      v-model='checkValue'
      checked-custom-icon='IconCheck'
      unchecked-custom-icon='IconClose'
    ></dk-switch>
    <dk-switch
      v-model='checkValue2'
      checked-custom-icon='IconCheck'
      unchecked-custom-icon='IconClose'
    ></dk-switch>
  </div>
</template>
<script setup lang="ts">
  import { reactive, toRefs } from 'vue'
  const data = reactive({
    checkValue: false,
    checkValue2: true
  })
  const { checkValue, checkValue2 } = toRefs(data)
</script>
```

:::

## <a id='属性'>属性</a>

| 参数                    | 说明                                 | 类型      | 可选值                          | 默认值    |
| ----------------------- | ------------------------------------ | --------- | ------------------------------- | --------- |
| `v-model`               | [绑定值](#基础用法)                  | `boolean` | -                               | -         |
| `checked-color`         | [选中时的背景色](#基础用法)          | `string`  | -                               | `#409eff` |
| `unchecked-color`       | [未选中时的背景色](#基础用法)        | `string`  | -                               | `#c0ccda` |
| `checked-text`          | [选中时的文案](#文案设置)            | `string`  | -                               | -         |
| `unchecked-text`        | [未选中时的文案](#文案设置)          | `string`  | -                               | -         |
| `checked-icon`          | [选中时的图标](#带有图标的开关)      | `string`  | -                               | -         |
| `unchecked-icon`        | [未选中时的图标](#带有图标的开关)    | `string`  | -                               | -         |
| `checked-custom-icon`   | [选中时的自定义图标](#Loading状态)   | `string`  | -                               | -         |
| `unchecked-custom-icon` | [未选中时的自定义图标](#Loading状态) | `string`  | -                               | -         |
| `width`                 | [开关的宽度](#文案设置)              | `string`  | -                               | -         |
| `size`                  | [开关的尺寸](#不同尺寸)              | `string`  | `large` `medium` `small` `mini` | `small`   |
| `disabled`              | [是否禁用](#禁用状态)                | `boolean` | `true` `false`                  | `false`   |
| `loading`               | [是否为加载状态](#Loading状态)       | `boolean` | `true` `false`                  | `false`   |

## <a id='事件'>事件</a>

| 事件名   | 说明                   | 回调参数                    |
| -------- | ---------------------- | --------------------------- |
| `change` | 开关状态发生变化时触发 | `(value: boolean) => value` |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>


<script lang='ts' setup>
import { reactive, toRefs } from 'vue'
const data = reactive({
  checkValue: true,
  checkValue2: true,
  checkValue3: false,
  checkValue4: true,
  checkValue5: false,
  checkValue6: false,
  checkValue7: false,
  checkValue8: false,
  checkValue9: true
})
const { 
  checkValue,
  checkValue2,
  checkValue3,
  checkValue4,
  checkValue5,
  checkValue6,
  checkValue7,
  checkValue8,
  checkValue9
} = toRefs(data)
</script>
