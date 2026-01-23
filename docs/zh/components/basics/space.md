# space 间距

最基础的用法，通过这个组件来给组件之间提供统一的间距。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkspace)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/space.md)

## 基本使用

`dk-space` 的基本使用

::: module

<template #code>
<dk-space>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
</template>

```html
<dk-space>
  <dk-button type="primary">主要按钮</dk-button>
  <dk-button type="success">成功按钮</dk-button>
  <dk-button type="warning">警告按钮</dk-button>
</dk-space>
```

:::

## 间距尺寸

`dk-space` 通过 `spacingType` 属性来控制间距的尺寸，可选值为 `large`、`medium`、`small`,、`mini`，默认为 `large`。

### 1.大尺寸间距

`spacingType` 值为 `large` 时，间距为 `14px`。

::: module

<template #code>
<dk-space spacingType='large'>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
</template>

```html
<dk-space spacingType='large'>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
```

:::

### 2.中尺寸间距

`spacingType` 值为 `medium` 时，间距为 `10px`。

::: module

<template #code>
<dk-space spacingType='medium'>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
</template>

```html
<dk-space spacingType='medium'>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
```

:::

### 3.小尺寸间距

`spacingType` 值为 `small` 时，间距为 `6px`。

::: module

<template #code>
<dk-space spacingType='small'>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
</template>

```html
<dk-space spacingType='small'>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
```

:::

### 4.超小尺寸间距

`spacingType` 值为 `mini` 时，间距为 `2px`。

::: module

<template #code>
<dk-space spacingType='mini'>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
</template>

```html
<dk-space spacingType='mini'>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
```

:::

## 间距方向

可使用 `vertical` 设置间距是否为垂直方向。

::: module

<template #code>
<dk-space vertical>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
</template>

```html
<dk-space vertical>
  <Dk-Button type="primary">主要按钮</Dk-Button>
  <Dk-Button type="success">成功按钮</Dk-Button>
  <Dk-Button type="info">信息按钮</Dk-Button>
  <Dk-Button type="warning">警告按钮</Dk-Button>
  <Dk-Button type="danger">危险按钮</Dk-Button>
</dk-space>
```

:::

## 自定义间距

纵向间距可使用 `port-rait`属性来自定义间距的尺寸，单位为 `px`。

横向间距可使用 `land-scape`属性来自定义间距的尺寸，单位为 `px`。

::: module

<template #code>
<dk-space vertical port-rait="55px">
  <dk-button type="primary" size="large"> large(大) </dk-button>
  <dk-button type="primary" size="large"> large(大)</dk-button>
</dk-space>
</template>

```html
<dk-space vertical port-rait="55px">
  <dk-button type="primary" size="large"> large(大) </dk-button>
  <dk-button type="primary" size="large"> large(大)</dk-button>
</dk-space>
```

:::

::: module

<template #code>
<dk-space land-scape="55px">
  <dk-button type="primary" size="large"> large(大) </dk-button>
  <dk-button type="primary" size="large"> large(大)</dk-button>
</dk-space>
</template>

```html
<dk-space land-scape="55px">
  <dk-button type="primary" size="large"> large(大) </dk-button>
  <dk-button type="primary" size="large"> large(大)</dk-button>
</dk-space>
```

:::

## Attributes(属性)

| 参数 | 说明| 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| vertical | 是否竖直排列 | boolean | --- | false |
| nowrap | 是否禁止换行 | boolean | --- | false |
| port-rait | 自定义纵向间距(记得添加单位`px`) | string | --- | 10px |
| land-scape | 自定义横向间距(记得添加单位`px`) | string | --- | 10px |
| spacingType | 间距尺寸 | string | `large` `middle` `small` `mini` | large |

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