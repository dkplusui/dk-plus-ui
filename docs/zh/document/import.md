# 快速上手

## 完整引入

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import App from './App.vue'

import dkPlus from 'dk-plus'
import 'dk-plus/dkPlus/index.css'

createApp(App).use(dkPlus).mount('#app')
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式。

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 组件按需引入示例

import { DkIcon, DkShadow, DkButton } from 'dk-plus'

// 样式按需引入
import '@dk-plus/theme-chalk/dkbutton.css'
import '@dk-plus/theme-chalk/dkshadow.css'
import '@dk-plus/theme-chalk/icon.css'

createApp(App).use(DkIcon).use(DkShadow).use(DkButton).mount('#app')
```

## 使用 UMD

可通过 `UMD` 模式在 `*.html` 中引入 `dk-plus`，快速构建您的程序

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/dk-plus/dkPlus/index.css"
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
  <script src="https://cdn.jsdelivr.net/npm/dk-plus/dkPlus/index.umd.js"></script>
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
