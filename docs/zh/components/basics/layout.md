# Layout 布局

迅速简便的创建布局的容器。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkrow)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/layout.md)

## <a id='基础使用'>基础使用</a>

通过 `row` 和 `col` 组件，就可以创建出基础的栅格布局。

::: module

<template #code>
<LayoutComp class="docs-row">
</LayoutComp>
</template>

```html
<template>
  <dk-row>
    <dk-col>
      <div class="dark"></div>
    </dk-col>
  </dk-row>
  <dk-row>
    <dk-col :span="12"><div class="dark"></div></dk-col>
    <dk-col :span="12"><div class="light"></div></dk-col>
  </dk-row>
  <dk-row>
    <dk-col :span="8"><div class="dark"></div></dk-col>
    <dk-col :span="8"><div class="light"></div></dk-col>
    <dk-col :span="8"><div class="dark"></div></dk-col>
  </dk-row>
  <dk-row>
    <dk-col :span="6"><div class="dark"></div></dk-col>
    <dk-col :span="6"><div class="light"></div></dk-col>
    <dk-col :span="6"><div class="dark"></div></dk-col>
    <dk-col :span="6"><div class="light"></div></dk-col>
  </dk-row>
  <dk-row>
    <dk-col><div class="dark"></div></dk-col>
    <dk-col><div class="light"></div></dk-col>
    <dk-col><div class="dark"></div></dk-col>
    <dk-col><div class="light"></div></dk-col>
    <dk-col><div class="dark"></div></dk-col>
  </dk-row>
</template>
<style>
  .dark,
  .light {
    height: 100%;
    height: 32px;
    border-radius: 4px;
    opacity: 0.5;
  }

  .dark {
    background-color: #ccc;
  }

  .light {
    background-color: #eee;
  }
</style>
```

:::

## <a id='栅格间隔'>栅格间隔</a>

通过 `gutter` 属性设置栅格间隔。

::: module

<template #code>
<LayoutCompGutter class="docs-row">
</LayoutCompGutter>
</template>

```html
<template>
  <dk-row :gutter="30">
    <dk-col><div class="dark"></div></dk-col>
    <dk-col><div class="light"></div></dk-col>
    <dk-col><div class="dark"></div></dk-col>
    <dk-col><div class="light"></div></dk-col>
  </dk-row>
</template>
<style>
  .dark,
  .light {
    height: 100%;
    height: 32px;
    border-radius: 4px;
    opacity: 0.5;
  }

  .dark {
    background-color: #ccc;
  }

  .light {
    background-color: #eee;
  }
</style>
```

:::

## <a id='混合布局'>混合布局</a>

设置不用的 `span` 值，来创建不同的布局。

::: module

<template #code>
<LayoutCompBlend class="docs-row">
</LayoutCompBlend>
</template>

```html
<template>
  <dk-row :gutter="20">
    <dk-col :span="5"><div class="dark"></div></dk-col>
    <dk-col :span="10"><div class="light"></div></dk-col>
  </dk-row>
  <dk-row :gutter="20">
    <dk-col :span="5"><div class="dark"></div></dk-col>
    <dk-col :span="10"><div class="light"></div></dk-col>
    <dk-col :span="5"><div class="dark"></div></dk-col>
    <dk-col :span="10"><div class="light"></div></dk-col>
  </dk-row>
  <dk-row :gutter="20">
    <dk-col :span="5"><div class="dark"></div></dk-col>
    <dk-col :span="20"><div class="light"></div></dk-col>
    <dk-col :span="5"><div class="dark"></div></dk-col>
  </dk-row>
</template>
<style>
  .dark,
  .light {
    height: 100%;
    height: 32px;
    border-radius: 4px;
    opacity: 0.5;
  }

  .dark {
    background-color: #ccc;
  }

  .light {
    background-color: #eee;
  }
</style>
```

:::

## <a id='列偏移'>列偏移</a>

通过 `offset` 属性设置列偏移。

::: module

<template #code>
<LayoutCompOffset class="docs-row">
</LayoutCompOffset>
</template>

```html
<template>
  <dk-row>
    <dk-col :span="10" :offset="6"><div class="dark"></div></dk-col>
    <dk-col :offset="1"><div class="light"></div></dk-col>
    <dk-col><div class="dark"></div></dk-col>
    <dk-col><div class="light"></div></dk-col>
  </dk-row>
</template>
<style>
  .dark,
  .light {
    height: 100%;
    height: 32px;
    border-radius: 4px;
    opacity: 0.5;
  }

  .dark {
    background-color: #ccc;
  }

  .light {
    background-color: #eee;
  }
</style>
```

:::

## <a id="属性">属性</a>

| 参数      | 说明                      | 类型     | 可选值                                                | 默认值  |
| --------- | ------------------------- | -------- | ----------------------------------------------------- | ------- |
| `gutter`  | 栅格间隔                  | `number` | —                                                     | `0`     |
| `justify` | flex 布局下的水平排列方式 | `string` | `start` `end` `center` `space-around` `space-between` | `start` |
| `span`    | [栅格占据的列数](#混合布局)            | `number` | -                                                     | —       |
| `offset`  | [栅格左侧的间隔格数](#列偏移)        | `number` | -                                                     | —       |

<script setup>
  import LayoutComp from '../vueDome/layout/index.vue'
  import LayoutCompGutter from '../vueDome/layout/gutter.vue'
  import LayoutCompBlend from '../vueDome/layout/blend.vue'
  import LayoutCompOffset from '../vueDome/layout/offset.vue'
</script>

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
  <a href="https://github.com/XuXiaoyingy" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/140246146?v=4"/>
  </a>
</div>
