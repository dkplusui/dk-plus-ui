<p align="center">
   <img height="160px"  src="https://oss.cadwaladerss.com/dk-plus/images/isicon.png">
</p>
<p align="center" style="margin-top:-50px">
  DK-plus 可在 vue3 的web应用中快速构建交互界面,全面的组件和便捷的工具会让您信手拈来，如鱼得水.
</p>
<p align="center">
  中文 | <a href="https://github.com/dk-plus-ui/dk-plus-ui/blob/master/README.en-US.md">English</a>
</p>
<p align="center">
  <a href="https://github.com/dk-plus-ui/dk-plus-ui/stargazers">
    <img src="https://img.shields.io/github/stars/dk-plus-ui/dk-ui" />
  </a>
  <a href="https://www.npmjs.com/package/dk-plus">
    <img src="https://badgen.net/npm/v/dk-plus" />
  </a>
  <a href="https://dk-plus.com">
    <img src="https://img.shields.io/badge/dk--plus-Docs-blue" />
  </a>
  <a href="https://github.com/dk-plus-ui/dk-plus-ui/blob/master/CUpdateLog.md">
    <img src="https://img.shields.io/badge/dk--plus-CUpdateLog-blue" />
  </a>
</p>

## ✨ 特性

- 🪐 15+ 常用组件
- 🏆 支持完整引入和按需引入
- 🤟 配置简单，上手容易
- ❤️ 根据实际需求开发
- 📃 优质详细的文档
- 👍 提出需求，不断完善
- 🛠 更多特性开发中

## 🔑 安装

使用 `pnpm` 安装

```shell
pnpm add --save-dev dk-plus
```

使用 `npm` 安装

```shell
npm install --save-dev dk-plus
```

使用 `yarn` 安装

```shell
yarn add --save-dev dk-plus
```

## 🎉 快速上手

```ts
import { createApp } from 'vue'
import App from './App.vue'
import dkPlus from 'dk-plus'
import '@dk-plus/theme-chalk/src/index.scss'

createApp(App).use(dkPlus).mount('#app')
```

## 🪂 快速体验

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/dk-plus/theme-chalk/index.css"
  />
</head>

<body>
  <div id="app">
    <h1>示例</h1>
    <dk-button type="primary">默认按钮</dk-button>
    <dk-button type="success">主要按钮</dk-button>
    <dk-button type="danger">成功按钮</dk-button>
    <dk-button type="warning">警告按钮</dk-button>
  </div>
  <script src="https://unpkg.com/vue@3.5.13/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dk-plus"></script>
  <script type="module">
    const { createApp, ref } = Vue
    const app = createApp({
      setup() {
        const visible = ref(false)
        return { visible }
      }
    })
    app.use(dkPlus.default)
    app.mount('#app')
  </script>
</body>
```

## 🐳 相关链接

- [官方文档](https://dk-plus-uis.com)
- [NPM](https://www.npmjs.com/package/dk-plus)
- [贡献指南](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/contribution.md)
- [更新日志](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/CUpdateLog.md)

## 🌈 加入 DK-plus

添加微信请备注 `Github` 用户名(最近太忙暂停更新)

<img height="200px"  src="https://oss.cadwaladerss.com/dk-plus/images/wxcrcoder.jpg">

## 💌 特别感谢

感谢所有已经为 `DK-plus` [做出贡献的人！](https://github.com/dk-plus-ui/dk-plus-ui/graphs/contributors)

<a href="https://github.com/dk-plus-ui/dk-plus-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dk-plus-ui/dk-plus-ui" />
</a>

## 📃 协议许可证

[MIT](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/LICENSE)
