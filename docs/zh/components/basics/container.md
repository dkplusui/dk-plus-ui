# container 页面布局容器

处理常见的一些网页布局，实现快速搭建

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkcontainer)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/container.md)

## 基本使用

- `dk-container` 最外层容器, 用于设置页面最大宽度,可以实现垂直,水平,嵌套布局
- `dk-header` 顶部布局容器
- `dk-laside` 侧边栏布局容器
- `dk-main` 主要内容布局容器
- `dk-footer` 底部布局容器


## 基本布局

下面是由 `dk plus` 提供的几种常见的页面布局演示

::: module

<template #code>
  <h6>示例1</h6>
  <dk-container>
    <dk-header> header </dk-header>
  </dk-container>
  <br/>
  <br/>
  <h6>示例2</h6>
  <dk-container>
    <dk-header> header </dk-header>
    <dk-main> main </dk-main>
  </dk-container>
  <br/>
  <br/>
  <h6>示例3</h6>
  <dk-container>
    <dk-header> header </dk-header>
    <dk-main> main </dk-main>
    <dk-footer> footer </dk-footer>
  </dk-container>
  <br/>
  <br/>
  <h6>示例4</h6>
  <dk-container>
    <dk-laside> Laside </dk-laside>
    <dk-main> main </dk-main>
  </dk-container>
  <br/>
  <br/>
  <h6>示例5</h6>
  <dk-container>
    <dk-laside> Laside </dk-laside>
    <dk-laside> Laside </dk-laside>
    <dk-main> main </dk-main>
  </dk-container>
  <br/>
  <br/>
  <h6>示例6</h6>
  <dk-container>
    <dk-laside> Laside </dk-laside>
    <dk-main> main </dk-main>
    <dk-laside> Laside </dk-laside>
  </dk-container>
  <br/>
  <br/>
  <h6>示例7</h6>
  <dk-container>
    <dk-container>
      <dk-laside> Laside </dk-laside>
      <dk-main> main </dk-main>
      <dk-laside> Laside </dk-laside>
    </dk-container>
    <dk-footer> footer </dk-footer>
  </dk-container>
  <br/>
  <br/>
  <h6>示例8</h6>
  <dk-container>
    <dk-header > header </dk-header>
    <dk-container>
      <dk-laside> Laside </dk-laside>
      <dk-main> main </dk-main>
      <dk-laside> Laside </dk-laside>
    </dk-container>
    <dk-footer> footer </dk-footer>
  </dk-container>
</template>

```html
<h6>示例1</h6>
<dk-container>
  <dk-header> header </dk-header>
</dk-container>
<h6>示例2</h6>
<dk-container>
  <dk-header> header </dk-header>
  <dk-main> main </dk-main>
</dk-container>
<h6>示例3</h6>
<dk-container>
  <dk-header> header </dk-header>
  <dk-main> main </dk-main>
  <dk-footer> footer </dk-footer>
</dk-container>
<h6>示例4</h6>
<dk-container>
  <dk-laside> Laside </dk-laside>
  <dk-main> main </dk-main>
</dk-container>
<h6>示例5</h6>
<dk-container>
  <dk-laside> Laside </dk-laside>
  <dk-laside> Laside </dk-laside>
  <dk-main> main </dk-main>
</dk-container>
<h6>示例6</h6>
<dk-container>
  <dk-laside> Laside </dk-laside>
  <dk-main> main </dk-main>
  <dk-laside> Laside </dk-laside>
</dk-container>
<h6>示例7</h6>
<dk-container>
  <dk-container>
    <dk-laside> Laside </dk-laside>
    <dk-main> main </dk-main>
    <dk-laside> Laside </dk-laside>
  </dk-container>
  <dk-footer> footer </dk-footer>
</dk-container>
<h6>示例8</h6>
<dk-container>
  <dk-header > header </dk-header>
  <dk-container>
    <dk-laside> Laside </dk-laside>
    <dk-main> main </dk-main>
    <dk-laside> Laside </dk-laside>
  </dk-container>
  <dk-footer> footer </dk-footer>
</dk-container>
<style scoped>
  h6{
    margin-bottom: 10px;
  }
  .dk-header {
      background-color: #b35757;
      color: #333;
      text-align: center;
      line-height: 50px;
    }
    .dk-main {
      background-color: #3178c6;
      color: #fff;
      text-align: center;
      line-height: 150px;
    }
    .dk-laside {
      background-color: #65adf0;
      color: #fff;
      text-align: center;
      line-height: 150px;
    }
    .dk-footer {
      background-color: #07996d;
      color: #333;
      text-align: center;
      line-height: 50px;
    }
</style>
```

:::

## container Attributes

| 参数 | 说明| 类型| 可选值| 默认值 |
| ---- | ----| ---- | -------| ------ |
| `direction` |<a href="#DkContainerPropsType">布局方向</a>   | String | horizontal / vertical | horizontal |

## header Attributes

| 参数 | 说明| 类型| 可选值| 默认值 |
| ---- | ----| ---- | -------| ------ |
| `height` | header高度   | String/number | - | 60px |
| `padding` | header内间距   | String/number | - | - |

## laside Attributes

| 参数 | 说明| 类型| 可选值| 默认值 |
| ---- | ----| ---- | -------| ------ |
| `width` | aside宽度   | String/number | - | 20% |
| `padding` | aside内间距   | String/number | - | - |
| `height` | header高度   | String/number | - | 300px |

## main Attributes

| 参数 | 说明| 类型| 可选值| 默认值 |
| ---- | ----| ---- | -------| ------ |
| `height` | header高度   | String/number | - | 180px |
| `padding` | header内间距   | String/number | - | - |

## footer Attributes

| 参数 | 说明| 类型| 可选值| 默认值 |
| ---- | ----| ---- | -------| ------ |
| `height` | header高度   | String/number | - | 60px |
| `padding` | header内间距   | String/number | - | - |

## Slots(插槽)

| name | 说明|
| ---- | ----|
| `default` | 默认插槽 |

### DkContainerPropsType

```ts
type DkContainerPropsType = 'horizontal' | 'vertical'
```

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

<style  scoped>
  h6{
    margin-bottom: 10px;
  }
  .dk-header {
      background-color: #b35757;
      color: #333;
      text-align: center;
      line-height: 50px;
    }
    .dk-main {
      background-color: #3178c6;
      color: #fff;
      text-align: center;
      line-height: 150px;
    }
    .dk-laside {
      background-color: #65adf0;
      color: #fff;
      text-align: center;
      line-height: 150px;
    }
    .dk-footer {
      background-color: #07996d;
      color: #333;
      text-align: center;
      line-height: 50px;
    }
</style>