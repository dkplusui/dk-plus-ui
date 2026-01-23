# 自定义盒子模型

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkshadow)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/shadow.md)

## 介绍

`DkShadow` 是一个自定义盒子模型的组件，可以自定义阴影、圆角、边框、背景色等。

## 基础用法

::: module
<template #code>
<Dk-Shadow>
<div style="width: 100px; height: 100px; background-color: #fff;">我是盒子内容</div>
</Dk-Shadow>
</template>

```html
<Dk-Shadow>
  <div style="width: 100px; height: 100px; background-color: #fff;">我是盒子内容</div>
</Dk-Shadow>
```

:::

## <a id='type'>type</a>

`type` 用来判定是标题还是内容(`title`|标题,`box`|自定义内容,默认为`box`)(标题插槽|`slot-left` -左插槽,`slot-right` -右插槽,`slot-box` -内容插槽)

::: module

<template #code>
<Dk-Shadow :type="'title'" :hoverType="false">
  <template #left>
    <span>1.左插槽(#left) </span>
  </template>
  <template #right>
    <span>2.右插槽(#right)</span>
  </template>
</Dk-Shadow>
</template>

```html
<Dk-Shadow :type="'title'" :hoverType="false">
  <template #left>
    <span>1.左插槽(#left) </span>
  </template>
  <template #right>
    <span>2.右插槽(#right)</span>
  </template>
</Dk-Shadow>
```

:::


## <a id='shadowClass'>自定义样式</a>

使用 `shadowClass` 配置自定义样式

::: module

<template #code>
<Dk-Shadow :shadowClass="'shadow'">自定义样式(shadowClass)</Dk-Shadow>

<style>
  .shadow {
    box-shadow: 0 0 4px var(--vp-c-green);
  }
</style>
</template>

```html
<Dk-Shadow :shadowClass="'cesa'">自定义样式(shadowClass)</Dk-Shadow>
<style>
  .shadow {
    box-shadow: 0 0 4px #10b981;
  }
</style>
```

:::

## <a id='hoverType'>悬停效果</a>

`hoverType` 开启悬停效果, `hoverClass` 自定义悬停样式

::: module

<template #code>
<Dk-Shadow :hoverType="true">悬停效果(hoverType)</Dk-Shadow>
<Dk-Shadow :hoverType="true" :hoverClass="'hoverClass'">自定义悬停效果:hoverClass</Dk-Shadow>

<style>
  .hoverClass {
    transform: translateY(-2%);
    box-shadow: 1px 4px 10px 2px var(--vp-c-green);
  }
</style>
</template>

```html
<Dk-Shadow :hoverType="true">悬停效果(hoverType)</Dk-Shadow>
<Dk-Shadow :hoverType="true" :hoverClass="'hoverClass'"
  >自定义悬停效果:hoverClass</Dk-Shadow
>
<style>
  .hoverClass {
    transform: translateY(-2%);
    box-shadow: 1px 4px 10px 2px #10b981;
  }
</style>
```

:::

## API

| 参数       | 说明                                                                 | 类型    | 可选值 | 默认值 |
| ---------- | -------------------------------------------------------------------- | ------- | ------ | ------ |
| [type](#type)       | 判定是标题还是内容(`title`|标题,`box`|自定义内容,默认为`box`) | String  | —      | box    |
| [shadowClass](#shadowClass)| 自定义样式 | String  | —      | —    |
| [hoverType](#hoverType)  | 开启悬停效果 | Boolean | —      | false  |
| [hoverClass](#hoverType) | 自定义悬停样式 | String  | —      | —      |


## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>
