# loading 加载中指令

自定义加载中指令，用于异步请求时的加载中状态。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkloading)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/loading.md)

## 基本使用

`loading` 的基本使用

`v-dk-loading="true"` 指令绑定一个布尔值，当值为 `true` 时，显示加载中状态，为 `false` 时，隐藏加载中状态。

::: module

<template #code>
<dk-space vertical >
<dk-button @click="onOpen" type="primary" size='mini'>点击开启加载中状态
</dk-button>

  <div 
    class="ls_loading"
    v-dk-loading="loadingType"
    >
    <img src='https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp' />
  </div>
</dk-space>

</template>

```html
<dk-space vertical>
  <dk-button @click="onOpen" type="primary" size="mini"> 点击开启加载中状态 </dk-button>
  <div class="ls_loading" v-dk-loading="loadingType">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
<script lang="ts">
  import { defineComponent, toRefs, reactive } from 'vue'
  export default defineComponent({
    name: 'DocsLoading',
    setup() {
      const data = reactive({
        loadingType: false
      })
      const methods = reactive({
        onOpen() {
          data.loadingType = !data.loadingType
        }
      })
      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>
```

:::

## 自定义文字

`dk-loading-text` 可以通过`自定义属性`来设置加载文字

::: module

<template #code>
<dk-space>

  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-text="加载中...">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-text="自定义文案">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
   <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-text="哈哈嘿嘿">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
</template>

```html
<dk-space>
  <div class="ls_loading" v-dk-loading="true" dk-loading-text="加载中...">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div class="ls_loading" v-dk-loading="true" dk-loading-text="自定义文案">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div class="ls_loading" v-dk-loading="true" dk-loading-text="哈哈嘿嘿">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
```

:::

## 加载中文案颜色/背景颜色/字体大小

`dk-loading-color` 加载中文案颜色

`dk-loading-textSize` 加载中文案字体大小

`dk-loading-background` 自定义遮罩层背景色

::: module

<template #code>
<dk-space>

  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-text="自定义颜色">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-background="rgba(26, 115, 232, 0.7)"
    dk-loading-text="自定义背景颜色">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
   <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-background="rgba(26, 115, 232, 0.7)"
    dk-loading-textSize="18px"
    dk-loading-text="自定义文字大小">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
</template>

```html
<dk-space>
  <div
    class="ls_loading"
    v-dk-loading="true"
    dk-loading-color="red"
    dk-loading-text="自定义颜色"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div
    class="ls_loading"
    v-dk-loading="true"
    dk-loading-color="red"
    dk-loading-background="rgba(26, 115, 232, 0.7)"
    dk-loading-text="自定义背景颜色"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div
    class="ls_loading"
    v-dk-loading="true"
    dk-loading-color="red"
    dk-loading-background="rgba(26, 115, 232, 0.7)"
    dk-loading-textSize="18px"
    dk-loading-text="自定义文字大小"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
```

:::

## 自定义加载中文案图标

`dk-loading-spinnerSize` 加载中文案图标大小

`dk-loading-spinner` 加载中文案图标

::: module

<template #code>
<dk-space>

  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-spinner='<g fill="currentColor" stroke="currentColor"><path d="M512 954.88c-243.712 0-442.88-199.168-442.88-442.88s199.168-442.88 442.88-442.88 442.88 199.168 442.88 442.88-199.168 442.88-442.88 442.88z m0-63.488c208.896 0 379.392-170.496 379.392-379.392s-170.496-379.392-379.392-379.392-379.392 170.496-379.392 379.392 170.496 379.392 379.392 379.392z m192-360.96h-363.52c-14.336 0-26.624-11.776-26.624-26.624V496.64c0-14.336 11.776-26.624 26.624-26.624h363.52c14.336 0 26.624 11.776 26.624 26.624v7.168c0 14.336-12.288 26.624-26.624 26.624z m-212.48 171.52l1.024-363.52c0-14.336 11.776-26.624 26.624-26.624h7.168c14.336 0 26.624 11.776 26.624 26.624l-1.024 363.52c0 14.336-11.776 26.624-26.624 26.624h-7.168c-14.848 0-26.624-11.776-26.624-26.624z"></path></g>'
    dk-loading-text="自定义颜色">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-textSize="18px"
    dk-loading-spinnerSize="28px"
    dk-loading-spinner='<g fill="currentColor" stroke="currentColor"><path d="M512 954.88c-243.712 0-442.88-199.168-442.88-442.88s199.168-442.88 442.88-442.88 442.88 199.168 442.88 442.88-199.168 442.88-442.88 442.88z m0-63.488c208.896 0 379.392-170.496 379.392-379.392s-170.496-379.392-379.392-379.392-379.392 170.496-379.392 379.392 170.496 379.392 379.392 379.392z m192-360.96h-363.52c-14.336 0-26.624-11.776-26.624-26.624V496.64c0-14.336 11.776-26.624 26.624-26.624h363.52c14.336 0 26.624 11.776 26.624 26.624v7.168c0 14.336-12.288 26.624-26.624 26.624z m-212.48 171.52l1.024-363.52c0-14.336 11.776-26.624 26.624-26.624h7.168c14.336 0 26.624 11.776 26.624 26.624l-1.024 363.52c0 14.336-11.776 26.624-26.624 26.624h-7.168c-14.848 0-26.624-11.776-26.624-26.624z"></path></g>'
    dk-loading-text="自定义颜色">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
</template>

```html
<dk-space>
  <div
    class="ls_loading"
    v-dk-loading="true"
    dk-loading-color="red"
    dk-loading-spinner='<g fill="currentColor" stroke="currentColor"><path d="M512 954.88c-243.712 0-442.88-199.168-442.88-442.88s199.168-442.88 442.88-442.88 442.88 199.168 442.88 442.88-199.168 442.88-442.88 442.88z m0-63.488c208.896 0 379.392-170.496 379.392-379.392s-170.496-379.392-379.392-379.392-379.392 170.496-379.392 379.392 170.496 379.392 379.392 379.392z m192-360.96h-363.52c-14.336 0-26.624-11.776-26.624-26.624V496.64c0-14.336 11.776-26.624 26.624-26.624h363.52c14.336 0 26.624 11.776 26.624 26.624v7.168c0 14.336-12.288 26.624-26.624 26.624z m-212.48 171.52l1.024-363.52c0-14.336 11.776-26.624 26.624-26.624h7.168c14.336 0 26.624 11.776 26.624 26.624l-1.024 363.52c0 14.336-11.776 26.624-26.624 26.624h-7.168c-14.848 0-26.624-11.776-26.624-26.624z"></path></g>'
    dk-loading-text="自定义颜色"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div
    class="ls_loading"
    v-dk-loading="true"
    dk-loading-color="red"
    dk-loading-textSize="18px"
    dk-loading-spinnerSize="28px"
    dk-loading-spinner='<g fill="currentColor" stroke="currentColor"><path d="M512 954.88c-243.712 0-442.88-199.168-442.88-442.88s199.168-442.88 442.88-442.88 442.88 199.168 442.88 442.88-199.168 442.88-442.88 442.88z m0-63.488c208.896 0 379.392-170.496 379.392-379.392s-170.496-379.392-379.392-379.392-379.392 170.496-379.392 379.392 170.496 379.392 379.392 379.392z m192-360.96h-363.52c-14.336 0-26.624-11.776-26.624-26.624V496.64c0-14.336 11.776-26.624 26.624-26.624h363.52c14.336 0 26.624 11.776 26.624 26.624v7.168c0 14.336-12.288 26.624-26.624 26.624z m-212.48 171.52l1.024-363.52c0-14.336 11.776-26.624 26.624-26.624h7.168c14.336 0 26.624 11.776 26.624 26.624l-1.024 363.52c0 14.336-11.776 26.624-26.624 26.624h-7.168c-14.848 0-26.624-11.776-26.624-26.624z"></path></g>'
    dk-loading-text="自定义颜色"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
```

:::

## 加载中文案图标方向

`dk-loading-flexDirection` column(上) row(左)
row-reverse(右) column-reverse(下)

::: module

<template #code>
<dk-space>

   <div
      class="ls_loading"
      v-dk-loading="true"
      dk-loading-text="图标在文字上"
      dk-loading-flexDirection="column"
    ></div>
     <div
        class="ls_loading"
        v-dk-loading="true"
        dk-loading-text="图标在文字左"
        dk-loading-flexDirection="row"
    ></div>
     <div
        class="ls_loading"
        v-dk-loading="true"
        dk-loading-text="图标在文字右"
        dk-loading-flexDirection="row-reverse"
    ></div>
     <div
        class="ls_loading"
        v-dk-loading="true"
        dk-loading-text="图标在文字下"
        dk-loading-flexDirection="column-reverse"
    ></div>
</dk-space>
</template>

```html
<dk-space>
  <div
    class="ls_loading"
    v-dk-loading="true"
    dk-loading-color="red"
    dk-loading-text="自定义颜色"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
```

:::

## Attributes

| 参数                     | 说明               | 类型    | 可选值                                                | 默认值             |
| ------------------------ | ------------------ | ------- | ----------------------------------------------------- | ------------------ |
| v-dk-loading             | 开启加载中指令组件 | boolean | ---                                                   | false              |
| dk-loading-text          | 加载中文案         | string  | ---                                                   | ---                |
| dk-loading-color         | 加载中文案颜色     | string  | ---                                                   | #ffffff            |
| dk-loading-background    | 自定义遮罩层背景色 | string  | ---                                                   | rgba(0, 0, 0, 0.7) |
| dk-loading-textSize      | 加载中文案字体大小 | string  | ---                                                   | 15px               |
| dk-loading-spinnerSize   | 加载中文案图标大小 | string  | ---                                                   | 1em                |
| dk-loading-flexDirection | 加载中文案图标方向 | string  | column(上) row(左) row-reverse(右) column-reverse(下) | column             |
| dk-loading-spinner       | 加载中文案图标     | string  | svg 字符串不要父级 svg 标签                           | ---                |

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

<script lang="ts">
  import { defineComponent, toRefs, reactive } from 'vue'
  export default defineComponent({
    name: 'DocsLoading',
    setup() {
      const data = reactive({
        loadingType: false
      })
      const methods = reactive({
        onOpen(){
          data.loadingType=!data.loadingType
        }
      })
      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>
<style scoped>
.ls_loading{
  width:150px;
  height:150px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
}
.ls_loading img{
  width:100%;
  height:100%;
}
</style>
