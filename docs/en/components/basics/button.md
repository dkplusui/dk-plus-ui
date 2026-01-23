# Button

This is a very ordinary looking button, but it is very powerful。

- [Source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkbutton)
- [Document editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/button.md)

## 1.Base button

`type` Button type `type` default | primary | success | info | warning | danger 

::: module
<template #code>
<Dk-Button>default</Dk-Button>
<Dk-Button type="primary">primary button</Dk-Button>
<Dk-Button type="success">success button</Dk-Button>
<Dk-Button type="info">info button</Dk-Button>
<Dk-Button type="warning">warning button</Dk-Button>
<Dk-Button type="danger">danger button</Dk-Button>
</template>

```html
<Dk-Button>default</Dk-Button>
<Dk-Button type="primary">primary button</Dk-Button>
<Dk-Button type="success">success button</Dk-Button>
<Dk-Button type="info">info button</Dk-Button>
<Dk-Button type="warning">warning button</Dk-Button>
<Dk-Button type="danger">danger button</Dk-Button>
```

:::

## 2.Round button

`circle` Property can turn a button into a round button

::: module
<template #code>
<Dk-Button circle>Fan</Dk-Button>
<Dk-Button circle type="primary">First</Dk-Button>
<Dk-Button circle type="success">raw</Dk-Button>
<Dk-Button circle type="info">Ying</Dk-Button>
<Dk-Button circle type="warning">Jie</Dk-Button>
<Dk-Button circle type="danger">✌</Dk-Button>
</template>

```html
<Dk-Button circle>Fan</Dk-Button>
<Dk-Button circle type="primary">First</Dk-Button>
<Dk-Button circle type="success">raw</Dk-Button>
<Dk-Button circle type="info">Ying</Dk-Button>
<Dk-Button circle type="warning">Jie</Dk-Button>
<Dk-Button circle type="danger">✌</Dk-Button>
```

:::

## 3.Rounded button

The `round` property can turn the button into a rounded corner style button `round` and `circle` cannot be used together

::: module
<template #code>
<dk-button round>Default button</dk-button>
<dk-button round type="primary">Main button</dk-button>
<dk-button round type="success">Success button</dk-button>
<dk-button round type="info">Information button</dk-button>
<dk-button round type="warning">Warning button</dk-button>
<dk-button round type="danger">Danger button</dk-button>
</template>

```html
<dk-button round>Default button</dk-button>
<dk-button round type="primary">Main button</dk-button>
<dk-button round type="success">Success button</dk-button>
<dk-button round type="info">Information button</dk-button>
<dk-button round type="warning">Warning button</dk-button>
<dk-button round type="danger">Danger button</dk-button>

```

:::

## 4.shaded

`shadow` Can customize the shadow style of the button, can be passed in a native[box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) Attribute value

::: module
<template #code>
<dk-button shadow="0 1px 10px 0 #f0f0f0">Default button</dk-button>
<dk-button shadow="0 1px 10px 0 #409eff" type="primary" size="large">Main button</dk-button>
<dk-button shadow="0 1px 10px 0 #67c23a" type="success" size="large">Success button</dk-button>
<dk-button shadow="0 1px 10px 0 #909399" type="info" size="large">Information button</dk-button>
<dk-button shadow="0 1px 10px 0 #e6a23c" type="warning" size="large">Warning button
</dk-button>
<dk-button shadow="0 1px 10px 0 #f56c6c" type="danger" size="large">Danger button
</dk-button>
</template>

```html
<dk-button 
  shadow="0 1px 10px 0 #f0f0f0"
>
  Default button
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #409eff" 
  type="primary" 
  size="large"
  >
  Main button
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #67c23a" 
  type="success" 
  size="large"
>
  Success button
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #909399" 
  type="info" 
  size="large"
>
  Information button
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #e6a23c" 
  type="warning" 
  size="large"
>
  Warning button
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #f56c6c" 
  type="danger" 
  size="large"
>
  Danger button
</dk-button>

```

:::

## 5.Ripple effect (do not interact with diffusion effect because it is too ugly)

`ripples` You can configure whether the click ripple effect is displayed  false | true

`ripples-bg-color` Custom ripple background color (hexadecimal, rgb, rgba)

::: module
<template #code>
<dk-button ripples>Default button</dk-button>
<dk-button type="primary" ripples>Main button</dk-button>
<dk-button type="success" ripples>Success button</dk-button>
<dk-button type="info" ripples>Information button</dk-button>
<dk-button type="warning" ripples>Warning button</dk-button>
<dk-button type="danger" ripples>Danger button</dk-button>
<dk-button ripples type="primary" ripples-bg-color="red">
  Custom ripple colors
</dk-button>
</template>

```html
<dk-button ripples>Default button</dk-button>
<dk-button type="primary" ripples>Main button</dk-button>
<dk-button type="success" ripples>Success button</dk-button>
<dk-button type="info" ripples>Information button</dk-button>
<dk-button type="warning" ripples>Warning button</dk-button>
<dk-button type="danger" ripples>Danger button</dk-button>
<dk-button ripples type="primary" ripples-bg-color="red">
  Custom ripple colors
</dk-button>

```

:::

## 6.Diffusion effect (do not interact with ripple effect because it is too ugly)

`diffusion` You can configure whether to display the click diffusion effect false | true

`diffusion-bg-color` Custom diffused background color (hexadecimal, rgb, rgba)

::: module
<template #code>
<dk-button diffusion type="primary">Main button</dk-button>
<dk-button diffusion type="success">Success button</dk-button>
<dk-button diffusion type="info">Information button</dk-button>
<dk-button diffusion type="warning">Warning button</dk-button>
<dk-button diffusion type="danger" >Danger button</dk-button>
<dk-button diffusion >Default button</dk-button>
<dk-button diffusion type="primary" diffusion-bg-color="red">Custom diffusion effect color</dk-button>
</template>

```html
<dk-button diffusion type="primary">Main button</dk-button>
<dk-button diffusion type="success">Success button</dk-button>
<dk-button diffusion type="info">Information button</dk-button>
<dk-button diffusion type="warning">Warning button</dk-button>
<dk-button diffusion type="danger" >Danger button</dk-button>
<dk-button diffusion >Default button</dk-button>
<dk-button 
  diffusion 
  type="primary" 
  diffusion-bg-color="red"
  >
  Custom diffusion effect color
</dk-button>

```

:::

## 7.Disabled state

`disabled` You can configure whether the disable button defaults to false

::: module
<template #code>
<Dk-Button disabled>Default button</Dk-Button>
<Dk-Button type="primary" disabled>Main button</Dk-Button>
<Dk-Button type="success" disabled>Success button</Dk-Button>
<Dk-Button type="info" disabled>Information button</Dk-Button>
<Dk-Button type="warning" disabled>Warning button</Dk-Button>
<Dk-Button type="danger" disabled>Danger button</Dk-Button>
</template>

```html
<Dk-Button disabled>Default button</Dk-Button>
<Dk-Button type="primary" disabled>Main button</Dk-Button>
<Dk-Button type="success" disabled>Success button</Dk-Button>
<Dk-Button type="info" disabled>Information button</Dk-Button>
<Dk-Button type="warning" disabled>Warning button</Dk-Button>
<Dk-Button type="danger" disabled>Danger button</Dk-Button>

```

:::

## 8.Different size

`size` The button size can be configured. large | medium | small | mini

::: module
<template #code>
<Dk-Button size="large">Default button</Dk-Button>
<Dk-Button type="primary" size="large">Main button</Dk-Button>
<Dk-Button type="success" size="medium">Success button</Dk-Button>
<Dk-Button type="info" size="small">Information button</Dk-Button>
<Dk-Button type="warning" size="mini">Warning button</Dk-Button>
<Dk-Button type="danger" size="mini">Danger button</Dk-Button>
</template>

```html
<Dk-Button size="large">Default button</Dk-Button>
<Dk-Button type="primary" size="large">Main button</Dk-Button>
<Dk-Button type="success" size="medium">Success button</Dk-Button>
<Dk-Button type="info" size="small">Information button</Dk-Button>
<Dk-Button type="warning" size="mini">Warning button</Dk-Button>
<Dk-Button type="danger" size="mini">Danger button</Dk-Button>

```

:::

## 9.Button with Icon

`icon` You can configure the icon of the button this is the left icon

`afterIcon` The right icon of the button can be configured

::: module
<template #code>
<h6>1.Text icon</h6>
<dk-button text :icon="'IconShanchu1'" :after-icon="'IconShanchu1'">Default</dk-button>
<h6>2.A Label icon</h6>
<dk-button link :href="'https://dk-plus.com'" :icon="'IconShanchu1'" :after-icon="'IconShanchu1'" type="danger">
  https://dk-plus.com
</dk-button>
<h6>3.Block element icon button</h6>
<dk-button :icon="'IconShanchu1'" type="default">default</dk-button>
</template>

```html
<Dk-Button size="large">default</Dk-Button>
<dk-button 
  link 
  :href="'https://dk-plus.com'" 
  :icon="'IconShanchu1'" 
  :after-icon="'IconShanchu1'" 
  type="danger"
>
  https://dk-plus.com
</dk-button>
<dk-button :icon="'IconShanchu1'" type="default">default</dk-button>
```

:::

## 10.Loading state

`loading` You can configure the loading state of the button

::: module
<template #code>
<dk-button loading> Loading </dk-button>
<dk-button loading text> Loading </dk-button>
<dk-button
    loading
    link
    :icon="'IconShanchu1'"
    :href="'https://m.baidu.com/'"
    type="primary"
>
  Default https://m.baidu.com/
</dk-button>
</template>

```html
<dk-button loading> Loading </dk-button>
```

:::



## 11.Personality button (Example)

::: module
<template #code>
  <h6>1.BI Corner gradient button(BiCurvedA)</h6>
  <dk-button personality personality-type="BiCurvedA" personality-size="large">
    BI Corner gradient button
  </dk-button>
  <h6>2.Multiple shadow button(multiple)</h6>
  <dk-button personality personality-type="multiple" personality-size="large">
    Multiple shadow button(multiple)
  </dk-button>
  <dk-button
    personality
    personality-type="multiple"
    loading
    :personality-border-color="['red', 'red', 'red', 'red']"
    :personality-border-hove-color="['blue', 'blue', 'blue', 'blue']"
    personality-font-color="red"
    personality-box-shadow-hove="red 5px 5px, red 5px 5px,red 30px 30px"
  >
    Multiple shadow button(multiple)
  </dk-button>
  <h6>3.Shrink animation button(stretchBtn)</h6>
  <dk-button personality personality-type="stretchBtn" personality-size="medium">
    Basic information(stretchBtn)
  </dk-button>
  <h6>4.shine(shine)</h6>
  <dk-button personality personality-type="shine" personality-size="medium">
    Basic information(shine)
  </dk-button>
  <dk-button
    personality
    personality-type="shine"
    personality-bg-color="#38ef7d"
    personality-bg-hove-color="red"
    personality-size="medium"
  >
    Customize basic information(shine)
  </dk-button>
  <h6>5.Silver reflection(SilverReflection)</h6>
  <dk-button
    personality
    personality-type="SilverReflection"
    personality-size="medium"
  >
    Silver reflection(SilverReflection)
  </dk-button>
  <h6 style='margin-top:50px;'>6.Flat button(flatBtn)</h6>
  <dk-button personality personality-type="flatBtn" personality-size="medium">
    Flat button(flatBtn)
  </dk-button>
  <h6>7.Double expansion button(TurnOpen)</h6>
  <dk-button personality personality-type="TurnOpen" personality-size="medium">
    Double expansion button(TurnOpen)
  </dk-button>
  <!-- <h6>8.灯光按钮(lightBtn)(暂未实现)</h6>
  <dk-button personality personality-type="lightBtn" personality-size="medium">
    灯光按钮(lightBtn)
  </dk-button> -->
  <h6>8.Stereoscopic push-button(stereoscopic)</h6>
  <dk-button
    personality
    personality-type="stereoscopic"
    personality-size="medium"
  >
    Stereoscopic push-button(lightBtn)
  </dk-button>
  <h6>9.Stereoscopic push-button2(TurnOpenBorder)</h6>
  <dk-button
    personality
    personality-type="TurnOpenBorder"
    personality-size="medium"
  >
    Stereoscopic push-button2(TurnOpenBorder)
  </dk-button>
</template>

```html
-----------------1.BI Corner gradient button(BiCurvedA)-----------------
<dk-button personality personality-type="BiCurvedA" personality-size="large">
  BI Corner gradient button(BiCurvedA)
</dk-button>
-----------------2.Multiple shadow button(multiple)-----------------
<dk-button personality personality-type="multiple" personality-size="large">
  Multiple shadow button(multiple)
</dk-button>
<dk-button
  personality
  personality-type="multiple"
  loading
  :personality-border-color="['red', 'red', 'red', 'red']"
  :personality-border-hove-color="['blue', 'blue', 'blue', 'blue']"
  personality-font-color="red"
  personality-box-shadow-hove="red 5px 5px, red 10px 10px,red 50px 50px"
>
  Multiple shadow button(multiple)
</dk-button>
-----------------3.Shrink animation button(stretchBtn)-----------------
<dk-button personality personality-type="stretchBtn" personality-size="medium">
  Basic information(stretchBtn)
</dk-button>
-----------------4.shine(shine)-----------------
<dk-button personality personality-type="shine" personality-size="medium">
  Basic information(shine)
</dk-button>
<dk-button
  personality
  personality-type="shine"
  personality-bg-color="#38ef7d"
  personality-bg-hove-color="red"
  personality-size="medium"
>
  Customize basic information(shine)
</dk-button>
-----------------5.Silver reflection(SilverReflection)-----------------
<dk-button
  personality
  personality-type="SilverReflection"
  personality-size="medium"
>
  Silver reflection(SilverReflection)
</dk-button>
-----------------6.Flat button(flatBtn)-----------------
<dk-button personality personality-type="flatBtn" personality-size="medium">
  Flat button(flatBtn)
</dk-button>
-----------------7.Double expansion button(TurnOpen)-----------------
<dk-button personality personality-type="TurnOpen" personality-size="medium">
  Double expansion button(TurnOpen)
</dk-button>
-----------------9.Stereoscopic push-button(stereoscopic)-----------------
<dk-button
  personality
  personality-type="stereoscopic"
  personality-size="medium"
>
  Stereoscopic push-button(lightBtn)
</dk-button>
-----------------10.Double expansion button 2(TurnOpenBorder)-----------------
<dk-button
  personality
  personality-type="TurnOpenBorder"
  personality-size="medium"
>
  Double expansion button 2(TurnOpenBorder)
</dk-button>
```

:::

## Basic button properties (Color support: hexadecimal,RGB,RGBA)

| argument | Instructions | type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| `link` | Whether to label A button | booler | `true` `false` | `false` |
| `href` | A Label hyperlink Be effective at`link=true` | string | - - | - - |
| `target` | A Label hyperlink Be effective at`link=true` | string | `_blank` `_self` `_parent` `_top` | `_blank` |
| `text` | Whether it is a text button | booler | `true` `false` | `false` |
| `size` | Button size | string | `large` `medium` `small` `mini` | `large` |
| `type` | Button type (Different types correspond to different background and font colors, valid for non-custom button colors,A label is invalid) | <a>dkPlusType</a> | `primary` `success` `info` `warning` `danger`| `primary` |
| `fontSize` | Button text size | string/number | - - | - - |
| `fontColor` | Button font color (support hexadecimal rgb rgba) | string | - - | - - |
| `bgColor` | Button background color (support hexadecimal rgb rgba) | string | - - | - - |
| `disabled` | Button No Disable | booler | `true` `false` | `false` |
| `textDecoration` | Underline the text button | string | `lineThrough` `overline` `underline`| - - |
| `circle` | Round button | booler | `true` `false` | `false` |
| `shadow` | Button shadow effect example:`shadow="0 1px 10px 0 Custom colors (hexadecimal,RGB,RGBA)"` | string | - - | - - |
| `ripples` | Ripple effect | booler | `true` `false` | `false` |
| `ripplesBgColor` | Custom colors for ripple effects (hexadecimal rgb rgba support)| string | - - | - - |
| `diffusion` | Diffusion effect | booler | `true` `false` | `false` |
| `diffusionBgColor` | Custom colors for diffusion effects (hexadecimal rgb rgba support) | string | - - | - - |
| `round` | Semicircular button | booler | `true` `false`  |`false`|
| `icon` | Button front icon | string | <a href='/components/icon.html'>iconType</a>  | - - |
| `afterIcon` | Button rear icon | string | <a href='/components/icon.html'>iconType</a>  | - - |
| `loading` | Loading | booler | `true` `false` | `false` |

## Personality button properties (Color support: hexadecimal,RGB,RGBA)

| argument | Instructions | type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| `personality` | Whether it is a personality button  | booler | `true` `false` | `false` |
| `personalityType` | Personality button type | string | `BiCurvedA` `multiple` <br> `stretchBtn` `shine`  <br> `SilverReflection` `flatBtn`  <br> `TurnOpen` `stereoscopic` | - - |
| `personalitySize` | Button type size | string | `large` `medium` `small` `mini`| `large` |
| `personalityBorderColor` | Personality button border color | string Arr[string] | case:personality-border-color="['red', 'red', 'red', 'red']" | - - |
| `personalityBorderHoveColor` | Personality button border color when hovering | string Arr[string] | case::personality-border-hove-color="['blue', 'blue', 'blue', 'blue']" | - - |
| `personalityBgColor` | Personality button background color | string | case:personality-bg-color="#38ef7d" | - - |
| `personalityBgHoveColor` | Personality button background color when hovering | string | case: personality-bg-hove-color="red" | - - |
| `personalityFontColor` | Personality button back font color | string | case: personality-font-color="red" | - - |
| `personalityFontHoveColor` | Personality button font color hover | string | case: personality-font-hove-color="red" | - - |
| `personalityBoxShadow` | BoxShadow configuration | string | case:  personality-box-shadow="red 5px 5px, red 10px 10px,red 50px 50px" | - - |
| `personalityBoxShadowHove` | BoxShadow hover configuration | string | case: personality-box-shadow-hove="red 5px 5px, red 10px 10px,red 50px 50px" | - - |
| `personalityReflect` | Reflection effect | string | case: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4)) | - - |

## Slots

| argument | Instructions |
| ---  | --- |
| icon | icon Icon front |
| afterIcon | icon Indicates the icon rear position |

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