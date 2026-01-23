<p align="center">
   <img height="160px"  src="https://oss.cadwaladerss.com/dk-plus/images/isicon.png">
</p>
<p align="center" style="margin-top:-50px">
  DK-plus can quickly build interactive interfaces in web applications based on Vue 3. With comprehensive components and convenient tools, you can easily create your project like a fish in water.
</p>
<p align="center">
  English | <a href="https://github.com/dk-plus-ui/dk-plus-ui/blob/master/README.md">Chinese</a>
</p>

<p align="center">
  <a href="https://github.com/dk-plus-ui/dk-plus-ui/stargazers">
    <img src="https://img.shields.io/github/stars/dk-plus-ui/dk-ui" />
  </a>
  <a href="https://www.npmjs.com/package/dk-plus">
    <img src="https://badgen.net/npm/v/dk-plus" />
  </a>
  <a href="https://dk-plus-uis.com">
    <img src="https://img.shields.io/badge/dk--plus-Docs-blue" />
  </a>
  <a href="https://github.com/dk-plus-ui/dk-plus-ui/blob/master/CUpdateLog.md">
    <img src="https://img.shields.io/badge/dk--plus-CUpdateLog-blue" />
  </a>
</p>

## ✨ Features

- 🪐 10+ common components
- 🏆 support full import and on-demand import
- 🤟 easy to configure and get started
- ❤️ developed according to actual needs
- 📃 high-quality and detailed documentation
- 👍 continuously improved based on user feedback
- 🛠 more features under development

## 🔑 Install

Install using `pnpm` :

```shell
pnpm add --save-dev dk-plus
```

Install using `npm` :

```shell
npm install --save-dev dk-plus
```

Install using `yarn` :

```shell
yarn add --save-dev dk-plus
```

## 🎉 Quick Start

```ts
import { createApp } from 'vue'
import App from './App.vue'
import dkPlus from 'dk-plus'
import '@dk-plus/theme-chalk/src/index.scss'

createApp(App).use(dkPlus).mount('#app')
```

## 🪂 Quick experience

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/dk-plus/dist/theme-chalk/index.css"
  />
</head>

<body>
  <div id="app">
    <Dk-Button round type="default">默认</Dk-Button>
    <Dk-Button round type="primary">主要按钮</Dk-Button>
    <Dk-Button round type="success">成功</Dk-Button>
    <Dk-Button round type="info">信息</Dk-Button>
    <Dk-Button round type="warning">警告</Dk-Button>
    <Dk-Button round type="danger">danger</Dk-Button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dk-plus/dist/index.js"></script>
  <script>
    const { createApp, ref } = Vue
    const app = createApp({
      setup() {
        const visible = ref(false)
        return { visible }
      }
    })
    app.use(DKplush.default)
    app.mount('#app')
  </script>
</body>
```

## 🐳 Related links

- [Official documents](https://dk-plus-uis.com)
- [NPM](https://www.npmjs.com/package/dk-plus)
- [CONTRIBUTING](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/contribution.md)
- [CHANGELOG](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/CUpdateLog.md)

## 🌈 Join Fighting Design

Add WeChat & please note the `Github` username

<img height="200px"  src="https://oss.cadwaladerss.com/dk-plus/images/wxcrcoder.jpg">

## 💌 Special Thanks

Thanks to [everyone](https://github.com/dk-plus-ui/dk-plus-ui/graphs/contributors)
who has already contributed to `DK-plus`
<a href="https://github.com/dk-plus-ui/dk-plus-ui/graphs/contributors">
<img src="https://github.com/dk-plus-ui/dk-plus-ui/graphs/contributors" />
</a>

## 💬 LICENSE

[MIT](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/LICENSE)
