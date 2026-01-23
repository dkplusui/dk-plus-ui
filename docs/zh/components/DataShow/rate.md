# rate 评分

用于评分或打星

- [源代码](https://github.com/isMrFan/dk-plus-ui/blob/master/packages/components/dkrate/src/rate.vue)
- [文档编辑](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/DataShow/rate.md)

## 1.基本使用

通过 `v-model` 绑定一个值

::: module
<template #code>
  <dk-rate v-model="checked"></dk-rate>
</template>

```vue
<template>
  <dk-rate v-model="checked"></dk-rate>
</template>
<script>
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'RateComp',
    setup() {
      const data = reactive({
        checked: 1
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
```

:::

## 2.自定义颜色

`select-color` 属性可以配置星星选中时的颜色，`no-select-color`属性可以配置星星未选中时的颜色

::: module
<template #code>
  <dk-rate
    v-model="checked1"
    :select-color="'red'"
    :no-select-color="'#26BF8C'">
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked1" 
      :select-color="'red'" 
      :no-select-color="'#26BF8C'">
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked1: 2
        })
        return {
          ...toRefs(data)
        }
      }
    })
  </script>
```

:::

## 3.自定义 icon

`icon` 属性可以自定义 `icon` (目前只支持ICON图标组件库内图标)

::: module
<template #code>
  <dk-rate
    v-model="checked1"
    :icon="'IconAndroid'"
  >
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked1" 
      :icon="'IconAndroid'"
    >
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked1: 2
        })
        return {
          ...toRefs(data)
        }
      }
    })
  </script>
```

:::

## 4.图标大小

`iconSize` 属性可以定义ICON 大小

::: module
<template #code>
  <dk-rate
    v-model="checked2"
    :icon="'IconAndroid'"
    :iconSize="35"
  >
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked2" 
      :iconSize="35"
      :icon="'IconAndroid'"
    >
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked2: 2
        })
        return {
          ...toRefs(data)
        }
      }
    })
  </script>
```

:::

## 5.是否禁用

`readonly` 评分是否禁用  true | false

::: module
<template #code>
  <dk-rate
    v-model="checked3"
    :readonly='true'
  >
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked3" 
      :readonly='true'
    >
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked3: 2
        })
        return {
          ...toRefs(data)
        }
      }
    })
  </script>
```

:::

## 6.监听事件

`onchange` 监听事件

::: module
<template #code>
  <dk-rate
    v-model="checked4"
    :onchange="setFunctionProps"
  >
  </dk-rate>
</template>

```vue
  <template>
    <dk-rate 
      v-model="checked4" 
      :onchange="setFunctionProps"
    >
    </dk-rate>
  </template>
  <script>
    import { defineComponent, reactive, toRefs } from 'vue'
    export default defineComponent({
      name: 'RateComp',
      setup() {
        const data = reactive({
          checked4: 2
        })
        const methods = reactive({
          setFunctionProps(item) {
           alert(item)
          }
        })
        return {
          ...toRefs(data),
          ...toRefs(methods)
        }
      }
    })
  </script>
```

:::

## 属性

| 参数| 说明 | 类型 | 可选值 | 默认值  |
| --------------- | -------------------------------------------- | --------- | ------------------------------- | ------- |
| `v-model`       | [绑定值](#_1-基本使用)                          | `string  number` | -                  | -       |
| `select-color`       | [选定的颜色](#_2.自定义颜色)                          | `string` | -               | #fcc202       |
| `no-select-color`       | [没有选定的颜色](#_2.自定义颜色)                          | `string` | -               | #5E5E5E       |
| `icon`       | [自定义 icon](#_3.自定义icon)                          | `string` | -               | IconAndroid       |
| `iconSize`       | [图标大小](#_4.图标大小)                          | `string number` | -               | 20       |
| `readonly`       | [是否禁用](#_4.是否禁用)                          | `boolean` | `true false`               | -       |

## 事件

| 事件名称 | 说明             | 回调参数        |
| -------- | ---------------- | --------------- |
| `change` | 绑定值变化时触发 | `() => number` |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>

<script setup>
  import { ref } from 'vue'
  const checked = ref(1)
  const checked1 = ref(2)
  const checked2 = ref(2)
  const checked3 = ref(2)
  const checked4 = ref(2)
  const setFunctionProps=(item)=> {
    console.log(item)
    alert("你看英杰兄弟,还有宇轩兄弟监听事件生效了当前点击的值是"+item)
  }
</script>
