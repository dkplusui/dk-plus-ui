# Input

Simple and not simple input components

- [source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkinput)
- [documents editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/input.md)

## Basic Input

`type` Input `type` set up `text` `password` `email` `number` `tel` `url` default:`text`

::: module
<template #code>
<dk-input class='docs-input' placeholder="Please enter content"></dk-input>
</template>

```html
<template>
  <dk-input placeholder="Please enter content"></dk-input>
</template>
```

:::

## Disabled state

`disabled` Property can set the input to a disabled state

::: module
<template #code>
<dk-input class='docs-input' placeholder="Please enter content" disabled></dk-input>
</template>

```html
<template>
  <dk-input placeholder="Please enter content" disabled></dk-input>
</template>
```

:::

## prefix and suffix

`prefix-icon` and `suffix-icon` Attributes can be added with icons before and after the input ,
`prefix` and `suffix` Slots can add custom content before and after the input .

::: module
<template #code>
<dk-input class='docs-input' placeholder="prefix-icon" prefix-icon="IconSearch"></dk-input>

<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="suffix-icon" suffix-icon="IconSearch"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="slot">
    <template #prefix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
    <template #suffix>
        <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
</dk-input>
</template>

```html
<template>
  <dk-input placeholder="prefix-icon" prefix-icon="IconSearch"></dk-input>
  <dk-input placeholder="suffix-icon" suffix-icon="IconSearch"></dk-input>
  <dk-input placeholder="slot">
    <template #prefix>
      <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
    <template #suffix>
      <Dk-Icon icon="IconSearch"></Dk-Icon>
    </template>
  </dk-input>
</template>
```

:::

## Front and rear labels

`prepend` and `append` Slots can be labeled before and after the input ,
`prepend-icon` and `append-icon` Attributes can be added with icons before and after the input ,
`prepend-text` and `append-text` Attributes can be added with text before and after the input ,

> take care ⚠ : The priority order is: prepend > prepend-icon > prepend-text

::: module
<template #code>
<dk-input class='docs-input' placeholder="prepend" prepend>
<template #prepend>

<div>https://</div>
</template>
</dk-input>

<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="append" append>
    <template #append>
        <div>.com</div>
    </template>
</dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="prepend-icon" prepend-icon="IconSearch"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="append-icon" append-icon="IconSearch"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="prepend-text" prepend-text="https://"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="append-text" append-text=".com"></dk-input>
</template>

```html
<template>
  <dk-input placeholder="prepend" prepend>
    <template #prepend>
      <div>https://</div>
    </template>
  </dk-input>
  <dk-input placeholder="append" append>
    <template #append>
      <div>.com</div>
    </template>
  </dk-input>
  <dk-input placeholder="prepend-icon" prepend-icon="IconSearch"></dk-input>
  <dk-input placeholder="append-icon" append-icon="IconSearch"></dk-input>
  <dk-input placeholder="prepend-text" prepend-text="https://"></dk-input>
  <dk-input placeholder="append-text" append-text=".com"></dk-input>
</template>
```

:::

## Textarea

`type` Property set to `textarea` You can set the input as a text field, `autosize` The attribute can adapt to height.

::: module
<template #code>
<dk-input class='docs-input' placeholder="Please enter content" type="textarea"></dk-input>

<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="Please enter content" type="textarea" autosize></dk-input>
</template>

```html
<template>
  <dk-input placeholder="Please enter content" type="textarea"></dk-input>
  <dk-input placeholder="Please enter content" type="textarea" autosize></dk-input>
</template>
```

:::

## Number input

`type` Property set to `number` You can set the input as a numeric input .

::: module
<template #code>
<dk-input class='docs-input' placeholder="Please enter content" type="number"></dk-input>
</template>

```html
<template>
  <dk-input placeholder="Please enter content" type="number"></dk-input>
</template>
```

:::

## Password input

`type` Property set to `password` You can set the input as a password input ,`show-password` The property can display a password switch button.

::: module
<template #code>
<dk-input class='docs-input' placeholder="Please enter content" type="password"></dk-input>

<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="Please enter content" type="password" show-password></dk-input>
</template>

```html
<template>
  <dk-input placeholder="Please enter content" type="password"></dk-input>
  <dk-input placeholder="Please enter content" type="password" show-password></dk-input>
</template>
```

:::

## <a id='Length limit'>Length limit</a>

The `maxlength` and `minlength` attributes can limit the maximum and minimum length of input boxes, `show-length` property can display the length of the input box.

::: module
<template #code>
<dk-input class='docs-input' placeholder="Please enter content" show-length maxlength="10"></dk-input>

<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="Please enter content" minlength="10"></dk-input>
</template>

```html
<template>
  <dk-input placeholder="Please enter content" show-length maxlength="10"></dk-input>
  <dk-input placeholder="Please enter content" minlength="10"></dk-input>
</template>
```

:::

## <a id='status'>status</a>

The `status` attribute can set the status of the input box, The `status` attribute supports two states: `warning` and `error`.

::: module
<template #code>
<dk-input class='docs-input' placeholder="Please enter content" status="warning"></dk-input>

<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="Please enter content" status="error"></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="Please enter content" status="warning" prefix-icon='IconSysInformation'></dk-input>
<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="Please enter content" status="error" prefix-icon='IconSysInformation'></dk-input>
</template>

```html
<template>
  <dk-input placeholder="Please enter content" status="warning"></dk-input>
  <dk-input placeholder="Please enter content" status="error"></dk-input>
  <dk-input
    placeholder="Please enter content"
    status="warning"
    prefix-icon="IconSysInformation"
  ></dk-input>
  <dk-input
    placeholder="Please enter content"
    status="error"
    prefix-icon="IconSysInformation"
  ></dk-input>
</template>
```

:::

## <a id='personality'>personality</a>

`personality` Enables personalization, and `personal-type` supports personalization types.

::: module
<template #code>
<dk-input class='docs-input' placeholder="Please enter content" personality personality-type="underline"></dk-input>

<div style='margin-top: 10px;'></div>
<dk-input class='docs-input' placeholder="Please enter content" personality personality-type="borderRadius"></dk-input>
</template>

```html
<template>
  <dk-input
    placeholder="Please enter content"
    personality
    personality-type="underline"
  ></dk-input>
  <dk-input
    placeholder="Please enter content"
    personality
    personality-type="borderRadius"
  ></dk-input>
</template>
```

:::

## attribute

| attribute            | explain                                             | type      | Optional values                              | Default value |
| -------------------- | --------------------------------------------------- | --------- | -------------------------------------------- | ------------- |
| `type`               | type                                                | `string`  | `text` `textarea` `number` `password` `text` | `text`        |
| `placeholder`        | placeholder                                         | `string`  | -                                            | -             |
| `disabled`           | Disabled                                            | `boolean` | -                                            | `false`       |
| `readonly`           | readonly                                            | `boolean` | -                                            | `false`       |
| `clearable`          | clearable                                           | `boolean` | -                                            | `false`       |
| `show-password`      | Show password switch button                         | `boolean` | -                                            | `false`       |
| `prefix-icon`        | Input header icon                                   | `string`  | -                                            | -             |
| `suffix-icon`        | Input tail icon                                     | `string`  | -                                            | -             |
| `prepend-icon`       | Icon in front of input                              | `string`  | -                                            | -             |
| `append-icon`        | Icon at the back of the input                       | `string`  | -                                            | -             |
| `prepend-text`       | Enter text at the front of the                      | `string`  | -                                            | -             |
| `append-text`        | Enter the text at the end of the                    | `string`  | -                                            | -             |
| `autosize`           | Adaptive height (only for textarea)                 | `boolean` | -                                            | `false`       |
| `rows`               | Number of input lines (only effective for textarea) | `number`  | -                                            | `1`           |
| `maxlength`          | Maximum length of input                             | `number`  | -                                            | -             |
| `minlength`          | Minimum length of input                             | `number`  | -                                            | -             |
| `show-length`        | Display input length                                | `boolean` | -                                            | `false`       |
| `width`              | Input width                                         | `string`  | -                                            | -             |
| `height`             | Input height                                        | `string`  | -                                            | -             |
| `size`               | Input size                                          | `string`  | `large` `medium` `small`                     | `medium`      |
| `font-size`          | Input font size                                     | `string`  | -                                            | -             |
| `border-radius`      | Input rounded corners                               | `string`  | -                                            | -             |
| `text-color`         | Input font color                                    | `string`  | -                                            | -             |
| `icon-size`          | Input icon size                                     | `string`  | -                                            | -             |
| `border-color`       | Input border color                                  | `string`  | -                                            | -             |
| `focus-border-color` | Input focus border color                            | `string`  | -                                            | -             |
| `append-background`  | Input front and back content background color       | `string`  | -                                            | -             |
| `append-color`       | Input front and back content font color             | `string`  | -                                            | -             |
| `align`              | Input content alignment                             | `string`  | `left` `center` `right`                      | `left`        |
| `border`             | Input Border                                        | `string`  | `auto` `none`                                | `auto`        |
| `status`             | [status](#status)                                   | `string`  | `warning` `error`                            | -             |
| `personality`        | [personality](#personality)                         | `boolean` | -                                            | `false`       |

## Event

| Event Name | explain                                    | Callback Arguments                  |
| ---------- | ------------------------------------------ | ----------------------------------- |
| `focus`    | Triggered when the input is focused        | `(event: FocusEvent) => void`       |
| `blur`     | Triggered when the input is out of focus   | `(event: FocusEvent) => void`       |
| `clear`    | Triggered when the clear button is clicked | -                                   |
| `enter`    | Triggered when the Enter key is pressed    | `(value: string ｜ number) => void` |

## slot

| Slot Name | explain                          |
| --------- | -------------------------------- |
| `prepend` | Input front content              |
| `append`  | Content at the back of the input |
| `prefix`  | Input header content             |
| `suffix`  | Input tail content               |

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
