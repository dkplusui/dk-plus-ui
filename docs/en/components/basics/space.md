# spacing

The most basic use of this component is to provide uniform spacing between components。

- [Source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkspace)
- [Document editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/space.md)

## Basic use

`dk-space` Basic use

::: module

<template #code>
<dk-space>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
</template>

```html
<dk-space>
  <dk-button type="primary">Main button</dk-button>
  <dk-button type="success">Success button</dk-button>
  <dk-button type="warning">Warning button</dk-button>
</dk-space>
```

:::

## Spacing size

`dk-space` pass `spacingType` Property to control the size of the spacing. The optional value is `large`、`medium`、`small`,、`mini` the default is `large`。

### 1.Large size spacing

When `spacingType` is`large`, the spacing is`14px`.

::: module

<template #code>
<dk-space spacingType='large'>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
</template>

```html
<dk-space spacingType='large'>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
```

:::

### 2.Medium dimensional spacing

When `spacingType` is `medium`, the spacing is `10px`.

::: module

<template #code>
<dk-space spacingType='medium'>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
</template>

```html
<dk-space spacingType='medium'>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
```

:::

### 3.Small size spacing

When spacingType is`small`, the spacing is`6px`.

::: module

<template #code>
<dk-space spacingType='small'>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
</template>

```html
<dk-space spacingType='small'>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
```

:::

### 4.Super small size spacing

When `spacingType` is `mini`, the spacing is `2px`.

::: module

<template #code>
<dk-space spacingType='mini'>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
</template>

```html
<dk-space spacingType='mini'>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
```

:::

## Spacing direction

You can use `vertical` to set whether the spacing is vertical.

::: module

<template #code>
<dk-space vertical>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
</template>

```html
<dk-space vertical>
  <Dk-Button type="primary">Main button</Dk-Button>
  <Dk-Button type="success">Success button</Dk-Button>
  <Dk-Button type="info">Information button</Dk-Button>
  <Dk-Button type="warning">Warning button</Dk-Button>
  <Dk-Button type="danger">Danger button</Dk-Button>
</dk-space>
```

:::

## Custom spacing

Vertical spacing can be customized using the `port-rait` attribute to define the size of the spacing in units of `px`.

Horizontal spacing can be customized using the `land-scape` property to define the size of the spacing in units of `px`.

::: module

<template #code>
<dk-space vertical port-rait="55px">
  <dk-button type="primary" size="large"> large </dk-button>
  <dk-button type="primary" size="large"> large</dk-button>
</dk-space>
</template>

```html
<dk-space vertical port-rait="55px">
  <dk-button type="primary" size="large"> large</dk-button>
  <dk-button type="primary" size="large"> large</dk-button>
</dk-space>
```

:::

::: module

<template #code>
<dk-space land-scape="55px">
  <dk-button type="primary" size="large"> large</dk-button>
  <dk-button type="primary" size="large"> large</dk-button>
</dk-space>
</template>

```html
<dk-space land-scape="55px">
  <dk-button type="primary" size="large"> large</dk-button>
  <dk-button type="primary" size="large"> large</dk-button>
</dk-space>
```

:::

## Attributes

| argument | Instructions | type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| vertical | Vertical or not | boolean | --- | false |
| nowrap | Whether to disable line feed | boolean | --- | false |
| port-rait | Custom vertical spacing (remember to add units`px`)| string | --- | 10px |
| land-scape | Custom horizontal spacing (remember to add units`px`) | string | --- | 10px |
| spacingType | Spacing size | string | `large` `middle` `small` `mini` | large |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
</div>