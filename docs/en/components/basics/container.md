# container 页面布局容器

Handle some common web layout, to achieve fast construction

- [Source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkcontainer)
- [Document editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/container.md)

## Basic use

- `dk-container` The outermost container, used to set the maximum width of the page, can achieve vertical, horizontal, nested layout
- `dk-header` Top layout container
- `dk-laside` Sidebar layout container
- `dk-main` Main contents Layout container
- `dk-footer` Bottom layout container


## Basic layout

Here are some common page layout demos provided by `dk plus` 

::: module

<template #code>
  <h6>Give an example 1</h6>
  <dk-container>
    <dk-header> header </dk-header>
  </dk-container>
  <br/>
  <br/>
  <h6>Give an example 2</h6>
  <dk-container>
    <dk-header> header </dk-header>
    <dk-main> main </dk-main>
  </dk-container>
  <br/>
  <br/>
  <h6>Give an example 3</h6>
  <dk-container>
    <dk-header> header </dk-header>
    <dk-main> main </dk-main>
    <dk-footer> footer </dk-footer>
  </dk-container>
  <br/>
  <br/>
  <h6>Give an example 4</h6>
  <dk-container>
    <dk-laside> Laside </dk-laside>
    <dk-main> main </dk-main>
  </dk-container>
  <br/>
  <br/>
  <h6>Give an example 5</h6>
  <dk-container>
    <dk-laside> Laside </dk-laside>
    <dk-laside> Laside </dk-laside>
    <dk-main> main </dk-main>
  </dk-container>
  <br/>
  <br/>
  <h6>Give an example 6</h6>
  <dk-container>
    <dk-laside> Laside </dk-laside>
    <dk-main> main </dk-main>
    <dk-laside> Laside </dk-laside>
  </dk-container>
  <br/>
  <br/>
  <h6>Give an example 7</h6>
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
  <h6>Give an example 8</h6>
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
<h6>Give an example 1</h6>
<dk-container>
  <dk-header> header </dk-header>
</dk-container>
<h6>Give an example 2</h6>
<dk-container>
  <dk-header> header </dk-header>
  <dk-main> main </dk-main>
</dk-container>
<h6>Give an example 3</h6>
<dk-container>
  <dk-header> header </dk-header>
  <dk-main> main </dk-main>
  <dk-footer> footer </dk-footer>
</dk-container>
<h6>Give an example 4</h6>
<dk-container>
  <dk-laside> Laside </dk-laside>
  <dk-main> main </dk-main>
</dk-container>
<h6>Give an example 5</h6>
<dk-container>
  <dk-laside> Laside </dk-laside>
  <dk-laside> Laside </dk-laside>
  <dk-main> main </dk-main>
</dk-container>
<h6>Give an example 6</h6>
<dk-container>
  <dk-laside> Laside </dk-laside>
  <dk-main> main </dk-main>
  <dk-laside> Laside </dk-laside>
</dk-container>
<h6>Give an example 7</h6>
<dk-container>
  <dk-container>
    <dk-laside> Laside </dk-laside>
    <dk-main> main </dk-main>
    <dk-laside> Laside </dk-laside>
  </dk-container>
  <dk-footer> footer </dk-footer>
</dk-container>
<h6>Give an example 8</h6>
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

| argument | Instructions | type | Optional value | Default value |
| ---- | ----| ---- | -------| ------ |
| `direction` |<a href="#DkContainerPropsType">Layout direction</a>   | String | horizontal / vertical | horizontal |

## header Attributes

| argument | Instructions | type | Optional value | Default value |
| ---- | ----| ---- | -------| ------ |
| `height` | header   Altitude | String/number | - | 60px |
| `padding` | header Inner distance   | String/number | - | - |

## laside Attributes

| argument | Instructions | type | Optional value | Default value |
| ---- | ----| ---- | -------| ------ |
| `width` | aside breadth   | String/number | - | 20% |
| `padding` | aside Inner distance   | String/number | - | - |
| `height` | header Altitude   | String/number | - | 300px |

## main Attributes

| argument | Instructions | type | Optional value | Default value |
| ---- | ----| ---- | -------| ------ |
| `height` | header Altitude   | String/number | - | 180px |
| `padding` | header Inner distance   | String/number | - | - |

## footer Attributes

| argument | Instructions | type | Optional value | Default value |
| ---- | ----| ---- | -------| ------ |
| `height` | header Altitude   | String/number | - | 60px |
| `padding` | header Inner distance   | String/number | - | - |

## Slots

| name | Instructions |
| ---- | ----|
| `default` | Default slot |

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