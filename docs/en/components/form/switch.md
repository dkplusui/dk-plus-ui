# Switch

The switch selector used for switching between two states.

- [source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/switch)
- [documents editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/switch.md)

## <a id='Basicusage'>Basic usage</a>

`v-model` is the binding value, `true` is the checked state, `false` is the unchecked state, `checked-color` is the background color of the checked state, and `unchecked-color` is the background color of the unchecked state.

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

## <a id='disabled'>Disabled</a>

`disabled` indicates the disabled state.

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

## <a id='Size'>Size</a>

`size` is the size, optional values are `large`, `medium`, `small`, `mini`, default is `small`.

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

## <a id='Text'>Text</a>

`checked-text` is a selected copy, while `unchecked-text` is an unselected copy.
`Width` is the width of the switch. When the width is not set, the width of the switch is adaptive. When the width is set, the width of the switch is the set width, and ellipses are displayed for any excess.

::: module
<template #code>

  <div class='box' style='display: flex; gap: 10px; align-items: center'>
    <dk-switch v-model='checkValue' checked-text='open' unchecked-text='close'></dk-switch>
    <dk-switch v-model='checkValue2' checked-text='open' unchecked-text='close'></dk-switch>
  </div>
  <div class='box' style='display: flex; gap: 10px; align-items: center; margin-top:10px'>
    <dk-switch v-model='checkValue' checked-text='Set width' unchecked-text='Switch width exceeds display ellipsis' width="100px"></dk-switch>
    <dk-switch v-model='checkValue2' checked-text='No width set' unchecked-text='Width adaptation of switches'></dk-switch>
  </div>
</template>
  
  ```vue
<template>
  <div class='box' style='display: flex; gap: 10px; align-items: center'>
    <dk-switch 
      v-model='checkValue'
      checked-text='open'
      unchecked-text='close'
    ></dk-switch>
    <dk-switch
      v-model='checkValue2'
      checked-text='open'
      unchecked-text='close'
    ></dk-switch>
  </div>
  <div class='box' style='display: flex; gap: 10px; align-items: center; margin-top:10px'>
    <dk-switch
      v-model='checkValue'
      checked-text='Set width'
      unchecked-text='Switch width exceeds display ellipsis'
      width="100px"
    ></dk-switch>
    <dk-switch
      v-model='checkValue2'
      checked-text='No width set'
      unchecked-text='Width adaptation of switches'
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

## <a id='Switchwithicon'>Switch with icon</a>

`checked-icon` is the icon of the selected state, and `unchecked-icon` is the icon of the unchecked state.

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

## <a id='Loading'>Loading</a>

`loading` is the Loading state, `checked-custom-icon` is the custom icon of the selected state, and `unchecked-custom-icon` is the custom icon of the unchecked state.

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

## <a id='attribute'>attribute</a>

| parameter               | explain                                             | type      | Optional values                 | Default value |
| ----------------------- | --------------------------------------------------- | --------- | ------------------------------- | ------------- |
| `v-model`               | [Binding value](#Basicusage)                        | `boolean` | -                               | -             |
| `checked-color`         | [Background color when selected](#Basicusage)       | `string`  | -                               | `#409eff`     |
| `unchecked-color`       | [Background color when not selected](#Basicusage)   | `string`  | -                               | `#c0ccda`     |
| `checked-text`          | [Selected copy](#Text)                              | `string`  | -                               | -             |
| `unchecked-text`        | [Copy when not selected](#Text)                     | `string`  | -                               | -             |
| `checked-icon`          | [Icon when selected](#Switchwithicon)               | `string`  | -                               | -             |
| `unchecked-icon`        | [The icon when it is not selected](#Switchwithicon) | `string`  | -                               | -             |
| `checked-custom-icon`   | [Custom icon when selected](#Loading)               | `string`  | -                               | -             |
| `unchecked-custom-icon` | [Custom icon when not selected](#Loading)           | `string`  | -                               | -             |
| `width`                 | [Width of switch](#Text)                            | `string`  | -                               | -             |
| `size`                  | [Size of switch](#Size)                             | `string`  | `large` `medium` `small` `mini` | `small`       |
| `disabled`              | [Whether to disable](#disabled)                     | `boolean` | `true` `false`                  | `false`       |
| `loading`               | [Whether it is loaded](#Loading)                    | `boolean` | `true` `false`                  | `false`       |

## <a id='Event'>Event</a>

| Event    | explain                                  | Callback                    |
| -------- | ---------------------------------------- | --------------------------- |
| `change` | Triggered when the switch status changes | `(value: boolean) => value` |

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
