# Alert Warning prompt

- [Source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkalert)
- [Document editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/alert.md)

## introduce

`DkAlert` Used for warning prompts to display information that needs attention.

## <a id='type'>Basic usage</a>

The component provides four types, specified by the type attribute, with a default value of info。

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

`icon` is used to customize the front icon,`closeIcon` is used to customize the close icon.

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

## <a id='center'>Text centered</a>

use `center` Attribute to center text horizontally.

::: module

<template #code>
<dk-alert class='docs-alert' :icon="'IconSysInformation'" center>dk-plus-alert </dk-alert>
</template>

```html
<dk-alert :icon="'IconSysInformation'" center>dk-plus-alert </dk-alert>
```

:::

## <a id='description'>Text description</a>

`description` Attribute to center the text horizontally to add a more detailed description to the Alert component to help users learn more information, in addition to the mandatory title attribute，You can set the `description` attribute to help you better introduce it, which we call auxiliary text. Auxiliary text can only store text content. When the content exceeds the length limit, Line wrap and word wrap will be displayed.

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

## <a id='onclose'>closed event</a>

`onclose` The callback function triggered when the Alert component is closed.

::: module

<template #code>
<dk-alert class='docs-alert' :icon="'IconSysInformation'" @close="handleClose">dk-plus-alert </dk-alert>
</template>

```html
<dk-alert :icon="'IconSysInformation'" @close="handleClose">dk-plus-alert </dk-alert>

const handleClose = (): void => { console.log('close') }
```

:::

## API

| argument                    | Instructions                         | type                    | Optional value                | Default value |
| --------------------------- | ------------------------------------ | ----------------------- | ----------------------------- | ------------- | 
| [type](#type)               | Specify the style of warning prompts | String                  | success、info、warning、error | info          |
| [icon、closeIcon](#icon)    | Front prompt icon, close icon        | String                  | —                             | —             |
| [center](#center)           | Is the text centered                 | Boolean                 | —                             | false         |
| [description](#description) | descriptive text                     | String                  | —                             | —             |     | —   |
| [close](#close)             | Event triggered when closing Alert   | (e: MouseEvent) => void | —                             | —             |

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