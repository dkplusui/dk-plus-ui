# rate Rating

for rating or giving stars

- [source code](https://github.com/isMrFan/dk-plus-ui/blob/master/packages/components/dkrate/src/rate.vue)
- [document editing](https://github.com/isMrFan/dk-plus-ui/blob/master/docs/zh/components/DataShow/rate.md)

## 1.basic usage

binding a value using `v-model`

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

## 2.custom color

`select-color` property can configure the color of the stars when selected, and the `no-select-color` property can configure the color of the stars when not selected.

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

## 3.custom icon

`icon` property can be used to customize the `icon` (currently only supports icons from the ICON component library).

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

## 4.icon size

`iconSize` property can define the size of the icon.小

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

## 5.whether it is disabled

`readonly` determines whether the rating is disabled. It accepts `true` or `false` values.

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

## 6.listen to events

`onchange` listen to events

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

## property

| parameter| description | type | possible values | default value  |
| --------------- | -------------------------------------------- | --------- | ------------------------------- | ------- |
| `v-model`       | [bound value](#_1-basicusage)                          | `string  number` | -                  | -       |
| `select-color`       | [selected color](#_2.customColor)                          | `string` | -               | #fcc202       |
| `no-select-color`       | [unselected color](#_2.customcolor)                          | `string` | -               | #5E5E5E       |
| `icon`       | [custom icon](#_3.customicon)                          | `string` | -               | IconAndroid       |
| `iconSize`       | [icon size](#_4.iconSize)                          | `string number` | -               | 20       |
| `readonly`       | [whether disabled](#_4.whetherDisabled)                          | `boolean` | `true false`               | -       |

## event

| event name | description             | callback parameters        |
| -------- | ---------------- | --------------- |
| `change` | triggered when the bound value changes | `() => number` |

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
