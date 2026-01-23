# Alert 警示提示

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkalert)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/alert.md)

## 介绍

`DkAlert` 用于警告提示，展现需要关注的信息。

## <a id='type'>基础用法</a>

组件提供四种类型，由 type 属性指定，默认值为 info。
::: module
<template #code>
<dk-alert class='docs-alert'>info alert</dk-alert>
<dk-alert class='docs-alert_success' type="success">success alert</dk-alert>
<dk-alert class='docs-alert_warning' type="warning">warning alert</dk-alert>
<dk-alert class='docs-alert_error' type="error">error alert</dk-alert>
</template>

```html
<dk-alert>info alert</dk-alert>
<dk-alert type="success">success alert</dk-alert>
<dk-alert type="warning">warning alert</dk-alert>
<dk-alert type="error">error alert</dk-alert>
```

:::

## <a id='icon'>icon</a>

`icon` 用来自定义设置前置图标，`closeIcon`用来自定义设置关闭图标。

::: module

<template #code>
<dk-alert class='docs-alert' :icon="'IconSysInformation'">dk-plus-alert</dk-alert>
<dk-alert class='docs-alert' :closeIcon="'IconCollectActive'">dk-plus-alert</dk-alert>
</template>

```html
<dk-alert :icon="'IconSysInformation'">dk-plus-alert</dk-alert>
<dk-alert :closeIcon="'IconCollectActive'">dk-plus-alert</dk-alert>
```

:::

## <a id='center'>文字居中</a>

使用 `center` 属性来让文字水平居中。

::: module

<template #code>
<dk-alert class='docs-alert' :icon="'IconSysInformation'" center>dk-plus-alert </dk-alert>
</template>

```html
<dk-alert :icon="'IconSysInformation'" center>dk-plus-alert </dk-alert>
```

:::

## <a id='description'>文字描述</a>

`description` 为 Alert 组件添加一个更加详细的描述来使用户了解更多信息,除了必填的 title 属性外，你可以设置 `description` 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。

::: module

<template #code>
<dk-alert
      :icon="'IconSysInformation'"
      description="dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description..."
      class='docs-alert'
    >
dk-plus-alert
</dk-alert>
</template>

```html
<dk-alert
  :icon="'IconSysInformation'"
  description="dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description,dk-plus-alert-description..."
>
  dk-plus-alert
</dk-alert>
```

:::


## <a id='onclose'>关闭事件</a>

`onclose` 为 Alert 组件关闭时触发的回调函数。

::: module

<template #code>
<dk-alert class='docs-alert' :icon="'IconSysInformation'" @close="handleClose">dk-plus-alert </dk-alert>
</template>

```html
<dk-alert :icon="'IconSysInformation'" @close="handleClose">dk-plus-alert </dk-alert>

const handleClose = (): void => {
  console.log('关闭了')
}
```

:::

## API


| 参数       | 说明                                                                 | 类型    | 可选值 | 默认值 |
| ---------- | -------------------------------------------------------------------- | ------- | ------ | ------ |
| [type](#type)       |指定警告提示的样式 | String  | success、info、warning、error     | info   |
| [icon、closeIcon](#icon)| 前置提示图标、关闭图标 | String  | —      | —    |
| [center](#center)  | 文字是否居中 | Boolean | —      | false  |
| [description](#description) | 描述性文本 | String  | —      | —      |                | —      |
| [close](#close) | 关闭 Alert 时触发的事件 | (e: MouseEvent) => void  | —      | —      |      
## Contributors

<div style='display: flex;'>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>

  <a href="https://github.com/usertutu" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/54882060?v=4"/>
  </a>
</div>
