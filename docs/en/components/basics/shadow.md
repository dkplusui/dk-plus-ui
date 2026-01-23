# Custom Box Model

- [Source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkshadow)
- [Document editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/shadow.md)

## introduce

`DkShadow` Is a custom box model component, you can customize the shadow, rounded corners, borders, background color, etc.

## Basic usage

::: module
<template #code>
<Dk-Shadow>
<div style="width: 100px; height: 100px; background-color: #fff;">I'm the contents of the box</div>
</Dk-Shadow>
</template>

```html
<Dk-Shadow>
  <div style="width: 100px; height: 100px; background-color: #fff;">I'm the contents of the box</div>
</Dk-Shadow>
```

:::

## <a id='type'>type</a>

`type` is used to determine the title or content (` title`| `title`,`box`  custom content, default is`box`)(title slots |`slot-left` -left slot, `slot-right` -right slot, `slot-box` - content slot)

::: module

<template #code>
<Dk-Shadow :type="'title'" :hoverType="false">
  <template #left>
    <span>1.Left slot(#left) </span>
  </template>
  <template #right>
    <span>2.Right slot(#right)</span>
  </template>
</Dk-Shadow>
</template>

```html
<Dk-Shadow :type="'title'" :hoverType="false">
  <template #left>
    <span>1.Left slot(#left) </span>
  </template>
  <template #right>
    <span>2.Right slot(#right)</span>
  </template>
</Dk-Shadow>
```

:::


## <a id='shadowClass'>Custom style</a>

Use `shadowClass` to configure custom styles

::: module

<template #code>
<Dk-Shadow :shadowClass="'shadow'">Custom style(shadowClass)</Dk-Shadow>

<style>
  .shadow {
    box-shadow: 0 0 4px var(--vp-c-green);
  }
</style>
</template>

```html
<Dk-Shadow :shadowClass="'cesa'">Custom style(shadowClass)</Dk-Shadow>
<style>
  .shadow {
    box-shadow: 0 0 4px #10b981;
  }
</style>
```

:::

## <a id='hoverType'>Hover effect</a>

`hoverType` opens hover effect, `hoverClass` customizes hover style

::: module

<template #code>
<Dk-Shadow :hoverType="true">Hover effect(hoverType)</Dk-Shadow>
<Dk-Shadow :hoverType="true" :hoverClass="'hoverClass'">Customize the hover effect:hoverClass</Dk-Shadow>

<style>
  .hoverClass {
    transform: translateY(-2%);
    box-shadow: 1px 4px 10px 2px var(--vp-c-green);
  }
</style>
</template>

```html
<Dk-Shadow :hoverType="true">Hover effect(hoverType)</Dk-Shadow>
<Dk-Shadow :hoverType="true" :hoverClass="'hoverClass'"
  >Customize the hover effect:hoverClass</Dk-Shadow
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

| argument | Instructions | type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| [type](#type)       | Decide whether it's the title or the content(`title`|title,`box`|The default value is`box`) | String  | —      | box    |
| [shadowClass](#shadowClass)| Custom style | String  | —      | —    |
| [hoverType](#hoverType)  | Turn on hover effect | Boolean | —      | false  |
| [hoverClass](#hoverType) | Customize the hover style | String  | —      | —      |


## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
  <a href="https://github.com/bugfix2020" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/29813979?v=4"/>
  </a>
</div>