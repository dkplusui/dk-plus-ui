# Button 按钮

这是一个看起非常普通的按钮，但是它的功能却非常强大。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkbutton)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/button.md)

## 1.基础按钮

`type` 按钮类型 type 设置 default | primary | success | info | warning | danger 默认:default

::: module
<template #code>
<Dk-Button>默认</Dk-Button>
<Dk-Button type="primary">主要按钮</Dk-Button>
<Dk-Button type="success">成功按钮</Dk-Button>
<Dk-Button type="info">信息按钮</Dk-Button>
<Dk-Button type="warning">警告按钮</Dk-Button>
<Dk-Button type="danger">危险按钮</Dk-Button>
</template>

```html
<Dk-Button> 默认</Dk-Button>
<Dk-Button type="primary">主要按钮</Dk-Button>
<Dk-Button type="success">成功按钮</Dk-Button>
<Dk-Button type="info">信息按钮</Dk-Button>
<Dk-Button type="warning">警告按钮</Dk-Button>
<Dk-Button type="danger">危险按钮</Dk-Button>
```

:::

## 2.圆形按钮

`circle` 属性可以将按钮变成圆形按钮

::: module
<template #code>
<Dk-Button circle>范</Dk-Button>
<Dk-Button circle type="primary">先</Dk-Button>
<Dk-Button circle type="success">生</Dk-Button>
<Dk-Button circle type="info">英</Dk-Button>
<Dk-Button circle type="warning">杰</Dk-Button>
<Dk-Button circle type="danger">✌</Dk-Button>
</template>

```html
<Dk-Button circle>范</Dk-Button>
<Dk-Button circle type="primary">先</Dk-Button>
<Dk-Button circle type="success">生</Dk-Button>
<Dk-Button circle type="info">英</Dk-Button>
<Dk-Button circle type="warning">杰</Dk-Button>
<Dk-Button circle type="danger">✌</Dk-Button>
```

:::

## 3.圆角按钮

`round` 属性可以将按钮变成圆角风格的按钮  `round` 和 `circle` 不能同时使用

::: module
<template #code>
<dk-button round>默认按钮</dk-button>
<dk-button round type="primary">主要按钮</dk-button>
<dk-button round type="success">成功按钮</dk-button>
<dk-button round type="info">信息按钮</dk-button>
<dk-button round type="warning">警告按钮</dk-button>
<dk-button round type="danger">危险按钮</dk-button>
</template>

```html
<dk-button round>默认按钮</dk-button>
<dk-button round type="primary">主要按钮</dk-button>
<dk-button round type="success">成功按钮</dk-button>
<dk-button round type="info">信息按钮</dk-button>
<dk-button round type="warning">警告按钮</dk-button>
<dk-button round type="danger">危险按钮</dk-button>

```

:::

## 4.带有阴影

`shadow` 可以自定义按钮的阴影样式，可传入一个原生[box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 属性值

::: module
<template #code>
<dk-button shadow="0 1px 10px 0 #f0f0f0">默认按钮</dk-button>
<dk-button shadow="0 1px 10px 0 #409eff" type="primary" size="large">基础</dk-button>
<dk-button shadow="0 1px 10px 0 #67c23a" type="success" size="large">成功</dk-button>
<dk-button shadow="0 1px 10px 0 #909399" type="info" size="large">信息</dk-button>
<dk-button shadow="0 1px 10px 0 #e6a23c" type="warning" size="large">警告
</dk-button>
<dk-button shadow="0 1px 10px 0 #f56c6c" type="danger" size="large">危险
</dk-button>
</template>

```html
<dk-button 
  shadow="0 1px 10px 0 #f0f0f0"
  >
  默认按钮
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #409eff" 
  type="primary"
  >
  基础
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #67c23a" 
  type="success"
  >
  成功
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #909399" 
  type="info"
  >
  信息
  </dk-button>
<dk-button 
  shadow="0 1px 10px 0 #e6a23c" 
  type="warning"
  >
  警告
</dk-button>
<dk-button 
  shadow="0 1px 10px 0 #f56c6c" 
  type="danger"
  >
  危险
</dk-button>

```

:::

## 5.涟漪效果(不可和扩散效果联动因为太丑)

`ripples` 可以配置是否展示点击涟漪效果  false | true

`ripples-bg-color` 自定义涟漪背景色(支持16进制,支持rgb,支持rgba)

::: module
<template #code>
<dk-button ripples>默认</dk-button>
<dk-button type="primary" ripples>基础信息</dk-button>
<dk-button type="success" ripples>成功按钮</dk-button>
<dk-button type="info" ripples>信息按钮</dk-button>
<dk-button type="warning" ripples>警告按钮</dk-button>
<dk-button type="danger" ripples>危险按钮</dk-button>
<dk-button ripples type="primary" ripples-bg-color="red">
  自定义涟漪颜色
</dk-button>
</template>

```html
<dk-button ripples>默认</dk-button>
<dk-button type="primary" ripples>基础信息</dk-button>
<dk-button type="success" ripples>成功按钮</dk-button>
<dk-button type="info" ripples>信息按钮</dk-button>
<dk-button type="warning" ripples>警告按钮</dk-button>
<dk-button type="danger" ripples>危险按钮</dk-button>
<dk-button ripples type="primary" ripples-bg-color="red">
  自定义涟漪颜色
</dk-button>
```

:::

## 6.扩散效果(不可和涟漪效果联动因为太丑)

`diffusion` 可以配置是否展示点击扩散效果 false | true

`diffusion-bg-color` 自定义扩散效果背景色(支持16进制,支持rgb,支持rgba)

::: module
<template #code>
<dk-button diffusion type="primary">基础信息</dk-button>
<dk-button diffusion type="success">成功按钮</dk-button>
<dk-button diffusion type="info">信息按钮</dk-button>
<dk-button diffusion type="warning">警告按钮</dk-button>
<dk-button diffusion type="danger" >危险按钮</dk-button>
<dk-button diffusion type="success">默认按钮</dk-button>
<dk-button diffusion type="primary" diffusion-bg-color="red">自定扩散效果 颜色</dk-button>
</template>

```html
<dk-button diffusion type="primary">基础信息</dk-button>
<dk-button diffusion type="success">成功按钮</dk-button>
<dk-button diffusion type="info">信息按钮</dk-button>
<dk-button diffusion type="warning">警告按钮</dk-button>
<dk-button diffusion type="danger" >危险按钮</dk-button>
<dk-button diffusion type="success">默认按钮</dk-button>
<dk-button 
  diffusion 
  type="primary" 
  diffusion-bg-color="red"
  >
  自定扩散效果 颜色
</dk-button>

```

:::

## 7.禁用状态

`disabled` 可以配置是否禁用按钮 默认为false

::: module
<template #code>
<Dk-Button disabled>默认</Dk-Button>
<Dk-Button type="primary" disabled>主要按钮</Dk-Button>
<Dk-Button type="success" disabled>成功按钮</Dk-Button>
<Dk-Button type="info" disabled>信息按钮</Dk-Button>
<Dk-Button type="warning" disabled>警告按钮</Dk-Button>
<Dk-Button type="danger" disabled>危险按钮</Dk-Button>
</template>

```html
<Dk-Button disabled>默认</Dk-Button>
<Dk-Button type="primary" disabled>主要按钮</Dk-Button>
<Dk-Button type="success" disabled>成功按钮</Dk-Button>
<Dk-Button type="info" disabled>信息按钮</Dk-Button>
<Dk-Button type="warning" disabled>警告按钮</Dk-Button>
<Dk-Button type="danger" disabled>危险按钮</Dk-Button>

```

:::

## 8.不同尺寸

`size` 可以配置按钮的大小 large | medium | small | mini

::: module
<template #code>
<Dk-Button size="large">默认</Dk-Button>
<Dk-Button type="primary" size="large">主要按钮</Dk-Button>
<Dk-Button type="success" size="medium">成功按钮</Dk-Button>
<Dk-Button type="info" size="small">信息按钮</Dk-Button>
<Dk-Button type="warning" size="mini">警告按钮</Dk-Button>
<Dk-Button type="danger" size="mini">危险按钮</Dk-Button>
</template>

```html
<Dk-Button size="large">默认</Dk-Button>
<Dk-Button type="primary" size="large">主要按钮</Dk-Button>
<Dk-Button type="success" size="medium">成功按钮</Dk-Button>
<Dk-Button type="info" size="small">信息按钮</Dk-Button>
<Dk-Button type="warning" size="mini">警告按钮</Dk-Button>
<Dk-Button type="danger" size="mini">危险按钮</Dk-Button>

```

:::

## 9.带有Icon的按钮

`icon` 可以配置按钮的图标这个为左侧图标

`afterIcon` 可以配置按钮的右侧图标

::: module
<template #code>
<h6>1.文本图标</h6>
<dk-button text :icon="'IconShanchu1'" :after-icon="'IconShanchu1'">默认</dk-button>
<h6>2.A标签图标</h6>
<dk-button link :href="'https://dk-plus.com'" :icon="'IconShanchu1'" :after-icon="'IconShanchu1'" type="danger">
  https://dk-plus.com
</dk-button>
<h6>3.块元素图标按钮</h6>
<dk-button :icon="'IconShanchu1'" type="default">default</dk-button>
</template>

```html
<Dk-Button size="large">默认</Dk-Button>
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

## 10.加载中状态

`loading` 可以配置按钮的加载状态

::: module
<template #code>
<dk-button loading> 加载中 </dk-button>
<dk-button loading text> 加载中 </dk-button>
<dk-button
    loading
    link
    :icon="'IconShanchu1'"
    :href="'https://m.baidu.com/'"
    type="primary"
>
  默认https://m.baidu.com/
</dk-button>
</template>

```html
<dk-button loading> 加载中 </dk-button>
```

:::



## 11.个性按钮(示例)

::: module
<template #code>
  <h6>1.BI缺角渐变按钮(BiCurvedA)</h6>
  <dk-button personality personality-type="BiCurvedA" personality-size="large">
    BI缺角渐变按钮
  </dk-button>
  <h6>2.多重阴影按钮(multiple)</h6>
  <dk-button personality personality-type="multiple" personality-size="large">
    多重阴影按钮(multiple)
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
    多重阴影按钮(multiple)
  </dk-button>
  <h6>3.收缩动画按钮(stretchBtn)</h6>
  <dk-button personality personality-type="stretchBtn" personality-size="medium">
    基础信息(stretchBtn)
  </dk-button>
  <h6>4.闪亮 发光(shine)</h6>
  <dk-button personality personality-type="shine" personality-size="medium">
    基础信息(shine)
  </dk-button>
  <dk-button
    personality
    personality-type="shine"
    personality-bg-color="#38ef7d"
    personality-bg-hove-color="red"
    personality-size="medium"
  >
    自定义基础信息(shine)
  </dk-button>
  <h6>5.银光倒影(SilverReflection)</h6>
  <dk-button
    personality
    personality-type="SilverReflection"
    personality-size="medium"
  >
    银光倒影(SilverReflection)
  </dk-button>
  <h6 style='margin-top:50px;'>6.扁平按钮(flatBtn)</h6>
  <dk-button personality personality-type="flatBtn" personality-size="medium">
    扁平按钮(flatBtn)
  </dk-button>
  <h6>7.双展开按钮(TurnOpen)</h6>
  <dk-button personality personality-type="TurnOpen" personality-size="medium">
    双展开按钮(TurnOpen)
  </dk-button>
  <!-- <h6>8.灯光按钮(lightBtn)(暂未实现)</h6>
  <dk-button personality personality-type="lightBtn" personality-size="medium">
    灯光按钮(lightBtn)
  </dk-button> -->
  <h6>8.立体嵌入式按钮(stereoscopic)</h6>
  <dk-button
    personality
    personality-type="stereoscopic"
    personality-size="medium"
  >
    立体嵌入式按钮(lightBtn)
  </dk-button>
  <h6>9.双展开按钮2(TurnOpenBorder)</h6>
  <dk-button
    personality
    personality-type="TurnOpenBorder"
    personality-size="medium"
  >
    双展开按钮2(TurnOpenBorder)
  </dk-button>
</template>

```html
-----------------1.BI缺角渐变按钮(BiCurvedA)-----------------
<dk-button personality personality-type="BiCurvedA" personality-size="large">
  BI缺角渐变按钮(BiCurvedA)
</dk-button>
-----------------2.多重阴影按钮(multiple)-----------------
<dk-button personality personality-type="multiple" personality-size="large">
  多重阴影按钮(multiple)
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
  多重阴影按钮(multiple)
</dk-button>
-----------------3.收缩动画按钮(stretchBtn)-----------------
<dk-button personality personality-type="stretchBtn" personality-size="medium">
  基础信息(stretchBtn)
</dk-button>
-----------------4.闪亮 发光(shine)-----------------
<dk-button personality personality-type="shine" personality-size="medium">
  基础信息(shine)
</dk-button>
<dk-button
  personality
  personality-type="shine"
  personality-bg-color="#38ef7d"
  personality-bg-hove-color="red"
  personality-size="medium"
>
  自定义基础信息(shine)
</dk-button>
-----------------5.银光倒影(SilverReflection)-----------------
<dk-button
  personality
  personality-type="SilverReflection"
  personality-size="medium"
>
  银光倒影(SilverReflection)
</dk-button>
-----------------6.扁平按钮(flatBtn)-----------------
<dk-button personality personality-type="flatBtn" personality-size="medium">
  扁平按钮(flatBtn)
</dk-button>
-----------------7.双展开按钮(TurnOpen)-----------------
<dk-button personality personality-type="TurnOpen" personality-size="medium">
  双展开按钮(TurnOpen)
</dk-button>
-----------------9.立体嵌入式按钮(stereoscopic)-----------------
<dk-button
  personality
  personality-type="stereoscopic"
  personality-size="medium"
>
  立体嵌入式按钮(lightBtn)
</dk-button>
-----------------10.双展开按钮2(TurnOpenBorder)-----------------
<dk-button
  personality
  personality-type="TurnOpenBorder"
  personality-size="medium"
>
  双展开按钮2(TurnOpenBorder)
</dk-button>
```

:::

## 基础按钮属性(颜色支持:16进制,RGB,RGBA)

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| `link` | 是否为A标签按钮 | booler | `true` `false` | `false` |
| `href` | A标签超链接 `link=true` 时生效 | string | - - | - - |
| `target` | A标签超链接 `link=true` 时生效 | string | `_blank` `_self` `_parent` `_top` | `_blank` |
| `text` | 是否为文本按钮 | booler | `true` `false` | `false` |
| `size` | 按钮尺寸 | string | `large` `medium` `small` `mini` | `large` |
| `type` | 按钮的类型(不同类型对应不同的背景和字体颜色，非自定义按钮颜色时有效,A标签无效) | <a>dkPlusType</a> | `primary` `success` `info` `warning` `danger`| `primary` |
| `fontSize` | 按钮文字大小 | string/number | - - | - - |
| `fontColor` | 按钮的字体颜色(支持16进制 rgb rgba) | string | - - | - - |
| `bgColor` | 按钮的背景颜色(支持16进制 rgb rgba) | string | - - | - - |
| `disabled` | 按钮否禁用 | booler | `true` `false` | `false` |
| `textDecoration` | 文本按钮中上下划线 | string | `lineThrough` `overline` `underline`| - - |
| `circle` | 圆形按钮 | booler | `true` `false` | `false` |
| `shadow` | 按钮阴影效果 例:`shadow="0 1px 10px 0 自定义颜色(16进制,RGB,RGBA)"` | string | - - | - - |
| `ripples` | 涟漪效果 | booler | `true` `false` | `false` |
| `ripplesBgColor` | 涟漪效果的自定义颜色(支持16进制 rgb rgba) | string | - - | - - |
| `diffusion` | 扩散效果 | booler | `true` `false` | `false` |
| `diffusionBgColor` | 扩散效果的自定义颜色(支持16进制 rgb rgba) | string | - - | - - |
| `round` | 半圆形按钮 | booler | `true` `false`  |`false`|
| `icon` | 按钮前置图标 | string | <a href='/components/icon.html'>iconType</a>  | - - |
| `afterIcon` | 按钮后置图标 | string | <a href='/components/icon.html'>iconType</a>  | - - |
| `loading` | 加载中 | booler | `true` `false` | `false` |

## 个性按钮属性(颜色支持:16进制,RGB,RGBA)

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| `personality` | 是否为个性按钮  | booler | `true` `false` | `false` |
| `personalityType` | 个性按钮类型 | string | `BiCurvedA` `multiple` <br> `stretchBtn` `shine`  <br> `SilverReflection` `flatBtn`  <br> `TurnOpen` `stereoscopic` | - - |
| `personalitySize` | 按钮类型大小 | string | `large` `medium` `small` `mini`| `large` |
| `personalityBorderColor` | 个性按钮边框颜色 | string Arr[string] | 例:personality-border-color="['red', 'red', 'red', 'red']" | - - |
| `personalityBorderHoveColor` | 个性按钮边框颜色悬停时 | string Arr[string] | 例::personality-border-hove-color="['blue', 'blue', 'blue', 'blue']" | - - |
| `personalityBgColor` | 个性按钮背景颜色 | string | 例:personality-bg-color="#38ef7d" | - - |
| `personalityBgHoveColor` | 个性按钮背景颜色悬停时 | string | 例: personality-bg-hove-color="red" | - - |
| `personalityFontColor` | 个性按钮背字体颜色 | string | 例: personality-font-color="red" | - - |
| `personalityFontHoveColor` | 个性按钮字体颜色悬停 | string | 例: personality-font-hove-color="red" | - - |
| `personalityBoxShadow` | BoxShadow配置 | string | 例:  personality-box-shadow="red 5px 5px, red 10px 10px,red 50px 50px" | - - |
| `personalityBoxShadowHove` | BoxShadow悬停配置 | string | 例: personality-box-shadow-hove="red 5px 5px, red 10px 10px,red 50px 50px" | - - |
| `personalityReflect` | 倒影效果 | string | 例: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4)) | - - |

## Slots(插槽)

| 名称 | 说明 |
| ---  | --- |
| icon | icon图标前置 |
| afterIcon | icon图标后置 |

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