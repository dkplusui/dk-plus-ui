# scrollBar 滚动条

滚动条组件

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkscrollbar)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/scrollBar.md)

## <a id='基础使用'>基础使用</a>

`height` 设置滚动区域高度

::: module
<template #code>
<ScrollBarComp class='docs-scrollbar' height="200px"></ScrollBarComp>
</template>

```html
<template>
  <dk-scrollbar height="200px">
    <div class="item" v-for="item in 20" :key="item">{{item}}</div>
  </dk-scrollbar>
</template>
<style lang="scss" scoped>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: rgba($color: #1cb1a4, $alpha: 0.5);
    color: #fff;
  }
</style>
```

:::

## <a id='横向滚动'>横向滚动</a>

元素宽度大于滚动区域宽度时，滚动条会自动出现横向滚动条。

::: module
<template #code>
<ScrollBarComp class='docs-scrollbar' transverse='true' height="80px"></ScrollBarComp>
</template>

```html
<template>
  <dk-scrollbar height="200px">
    <div class="content">
      <div class="item" v-for="item in 20" :key="item">{{item}}</div>
    </div>
  </dk-scrollbar>
</template>
<style lang="scss" scoped>
  .content {
    width: fit-content;
    display: flex;
    .item {
      width: 50px;
      height: 50px;
      display: flex;
      margin: 10px;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 4px;
      background: rgba($color: #1cb1a4, $alpha: 0.5);
      color: #fff;
    }
  }
</style>
```

:::

## <a id='v-dk-scroll'>v-dk-scroll 指令</a>

设置 `v-dk-scroll` 指令也可以实现滚动样式， 属性和组件相同。

::: module
<template #code>
<ScrollBarComp class='docs-scrollbar' height="200px"></ScrollBarComp>
</template>

```html
<template>
  <div v-dk-scroll="true" height="200px">
    <div class="item" v-for="item in 20" :key="item">{{item}}</div>
  </div>
</template>
<style lang="scss" scoped>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: rgba($color: #1cb1a4, $alpha: 0.5);
    color: #fff;
  }
</style>
```
:::

## <a id='属性'>属性</a>

| 参数           | 说明                 | 类型      | 可选值 | 默认值        |
| -------------- | -------------------- | --------- | ------ | ------------- |
| `height`       | 滚动区域高度         | `string`  | -      | -             |
| `width`        | 滚动区域宽度         | `string`  | -      | -             |
| `bar-width`    | 滚动条宽度           | `string`  | -      | `6px`         |
| `track-color`  | 滚动条轨道颜色       | `string`  | -      | `transparent` |
| `thumb-color`  | 滚动条滑块颜色       | `string`  | -      | `#c1c1c1`     |
| `thumb-radius` | 滚动条滑块圆角       | `string`  | -      | `4px`         |
| `v-dk-scroll`  | [指令](#v-dk-scroll) | `boolean` | -      | `false`       |

## <a id='插槽'>Slots 插槽</a>

| name      | 说明         |
| --------- | ------------ |
| `default` | 滚动区域内容 |

## <a id='事件'>事件</a>

| 事件名称 | 说明             | 回调参数                                             |
| -------- | ---------------- | ---------------------------------------------------- |
| `scroll` | 滚动条滚动时触发 | `({ scrollTop: number, scrollTop: number}): => void` |

## <a id='Contributors'>Contributors</a>

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>

<script lang='ts' setup>
  import ScrollBarComp from '../vueDome/scrollbar/index.vue';
</script>
