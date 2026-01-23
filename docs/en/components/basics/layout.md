# Layout

Create a container for layout quickly and easily.

- [source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkrow)
- [documents editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/layout.md)

## <a id='Basic usage'>Basic usage</a>

By using the `row` and `col` components, a basic grid layout can be created.

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

## <a id='GridSpacing'>Grid spacing</a>

Set the grid interval through the `gutter` attribute.

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

## <a id='MixedLayout'>Mixed layout</a>

Set unused `span` values to create different layouts.

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

## <a id='ColumnOffset'>Column offset</a>

Set the column offset through the `offset` attribute.

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

## <a id="attribute">attribute</a>

| parameter      | explain                      | type     | Optional values                                                | Default value  |
| --------- | ------------------------- | -------- | ----------------------------------------------------- | ------- |
| `gutter`  | [Grid spacing](#GridSpacing)                  | `number` | —                                                     | `0`     |
| `justify` | Horizontal arrangement under `flex` layout | `string` | `start` `end` `center` `space-around` `space-between` | `start` |
| `span`    | [Number of columns occupied by the grid](#MixedLayout)            | `number` | -                                                     | —       |
| `offset`  | [Number of spacing cells on the left side of the grid](#ColumnOffset)        | `number` | -                                                     | —       |

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
