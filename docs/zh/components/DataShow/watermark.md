# watermark 水印

水印组件，支持自定义颜色、位置等。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkwatermark)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/dkwatermark.md)

## <a id="基础用法">基础用法</a>

:::module
<template #code>

<div class="dk-watermark-box" style="width: 100%;height: 300px;">
  <dk-watermark value="dk-watermark 水印"></dk-watermark>
</div>
</template>

```vue
<template>
  <dk-watermark value="dk-watermark 水印"></dk-watermark>
</template>
```

:::

## 属性

| 属性             | 说明                   | 类型      | 可选值 | 默认值  |
| ---------------- | ---------------------- | --------- | ------ | ------- |
| `value`          | 水印内容               | `string`  | -      | -       |
| `color`          | 水印颜色               | `string`  | -      | `#000`  |
| `opacity`        | 水印透明度             | `number`  | -      | `0.15`  |
| `rotate`         | 水印旋转角度           | `number`  | -      | `-20`   |
| `append-to-body` | 是否添加到 body 元素上 | `boolean` | -      | `false` |

## Contributors

<div style='display: flex;'>
  <a href="https://github.com/WangYingJay" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/117073291?s=64&v=4"/>
  </a>
  <a href="https://github.com/dk-plus-ui" target="_blank" style='margin-right:10px;'>
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/88755587?v=4" />
  </a>
  <a href="https://github.com/bugfix2020" target="_blank">
    <img style='width:60px;height:60px;border-radius: 50%;' src="https://avatars.githubusercontent.com/u/29813979?v=4"/>
  </a>
</div>