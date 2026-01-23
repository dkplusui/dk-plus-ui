# loading Loading instruction

Custom loading-in instructions for the loading-in state on asynchronous requests.

- [Source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkloading)
- [Document editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/loading.md)

## Basic use

`loading` Basic use

`v-dk-loading='true'` is bound to a Boolean value, when the value is`true`, the loading state is displayed, when the value is`false`, the loading state is hidden.

::: module

<template #code>
<dk-space vertical >
<dk-button @click="onOpen" type="primary" size='mini'>Click to open the loading state
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
  <dk-button @click="onOpen" type="primary" size="mini"> Click to open the loading state </dk-button>
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

## Custom text

`dk-loading-text` can be set by `custom properties` to load the text

::: module

<template #code>
<dk-space>

  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-text="Loading...">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-text="Custom copy">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
   <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-text="Ha ha ha">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
</template>

```html
<dk-space>
  <div class="ls_loading" v-dk-loading="true" dk-loading-text="Loading...">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div class="ls_loading" v-dk-loading="true" dk-loading-text="Custom copy">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div class="ls_loading" v-dk-loading="true" dk-loading-text="Ha ha ha">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
```

:::

## Load Chinese case color/background color/font size

`dk-loading-color` Load the Chinese case color

`dk-loading-textSize` Load Chinese case font size

`dk-loading-background` Custom mask background color

::: module

<template #code>
<dk-space>

  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-text="Custom color">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-background="rgba(26, 115, 232, 0.7)"
    dk-loading-text="Customize the background color">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
   <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-background="rgba(26, 115, 232, 0.7)"
    dk-loading-textSize="18px"
    dk-loading-text="Customize the text size">
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
    dk-loading-text="Custom color"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div
    class="ls_loading"
    v-dk-loading="true"
    dk-loading-color="red"
    dk-loading-background="rgba(26, 115, 232, 0.7)"
    dk-loading-text="Customize the background color"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div
    class="ls_loading"
    v-dk-loading="true"
    dk-loading-color="red"
    dk-loading-background="rgba(26, 115, 232, 0.7)"
    dk-loading-textSize="18px"
    dk-loading-text="Customize the text size"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
```

:::

## Custom load Chinese file icon

`dk-loading-spinnerSize` Load Chinese case icon size

`dk-loading-spinner` Load the Chinese case icon

::: module

<template #code>
<dk-space>

  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-spinner='<g fill="currentColor" stroke="currentColor"><path d="M512 954.88c-243.712 0-442.88-199.168-442.88-442.88s199.168-442.88 442.88-442.88 442.88 199.168 442.88 442.88-199.168 442.88-442.88 442.88z m0-63.488c208.896 0 379.392-170.496 379.392-379.392s-170.496-379.392-379.392-379.392-379.392 170.496-379.392 379.392 170.496 379.392 379.392 379.392z m192-360.96h-363.52c-14.336 0-26.624-11.776-26.624-26.624V496.64c0-14.336 11.776-26.624 26.624-26.624h363.52c14.336 0 26.624 11.776 26.624 26.624v7.168c0 14.336-12.288 26.624-26.624 26.624z m-212.48 171.52l1.024-363.52c0-14.336 11.776-26.624 26.624-26.624h7.168c14.336 0 26.624 11.776 26.624 26.624l-1.024 363.52c0 14.336-11.776 26.624-26.624 26.624h-7.168c-14.848 0-26.624-11.776-26.624-26.624z"></path></g>'
    dk-loading-text="Custom color">
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
  <div 
    class="ls_loading" 
    v-dk-loading="true" 
    dk-loading-color="red"
    dk-loading-textSize="18px"
    dk-loading-spinnerSize="28px"
    dk-loading-spinner='<g fill="currentColor" stroke="currentColor"><path d="M512 954.88c-243.712 0-442.88-199.168-442.88-442.88s199.168-442.88 442.88-442.88 442.88 199.168 442.88 442.88-199.168 442.88-442.88 442.88z m0-63.488c208.896 0 379.392-170.496 379.392-379.392s-170.496-379.392-379.392-379.392-379.392 170.496-379.392 379.392 170.496 379.392 379.392 379.392z m192-360.96h-363.52c-14.336 0-26.624-11.776-26.624-26.624V496.64c0-14.336 11.776-26.624 26.624-26.624h363.52c14.336 0 26.624 11.776 26.624 26.624v7.168c0 14.336-12.288 26.624-26.624 26.624z m-212.48 171.52l1.024-363.52c0-14.336 11.776-26.624 26.624-26.624h7.168c14.336 0 26.624 11.776 26.624 26.624l-1.024 363.52c0 14.336-11.776 26.624-26.624 26.624h-7.168c-14.848 0-26.624-11.776-26.624-26.624z"></path></g>'
    dk-loading-text="Custom color">
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
    dk-loading-text="Custom color"
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
    dk-loading-text="Custom color"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
```

:::

## Load Chinese case icon direction

`dk-loading-flexDirection` column(Up.) row(Left)
row-reverse(right) column-reverse(Under the)

::: module

<template #code>
<dk-space>

   <div
      class="ls_loading"
      v-dk-loading="true"
      dk-loading-text="ICONS on text"
      dk-loading-flexDirection="column"
    ></div>
     <div
        class="ls_loading"
        v-dk-loading="true"
        dk-loading-text="The icon is to the left of the text"
        dk-loading-flexDirection="row"
    ></div>
     <div
        class="ls_loading"
        v-dk-loading="true"
        dk-loading-text="The icon is to the right of the text"
        dk-loading-flexDirection="row-reverse"
    ></div>
     <div
        class="ls_loading"
        v-dk-loading="true"
        dk-loading-text="ICONS are under the text"
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
    dk-loading-text="Custom color"
  >
    <img src="https://oss.cadwaladerss.com/dk-plus/images/isImg.bmp" />
  </div>
</dk-space>
```

:::

## Attributes

| argument | Instructions | type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| v-dk-loading             | Opens the loading instruction component | boolean | ---                                                   | false              |
| dk-loading-text          | Load Chinese file         | string  | ---                                                   | ---                |
| dk-loading-color         | Load the Chinese case color     | string  | ---                                                   | #ffffff            |
| dk-loading-background    | Custom mask background color | string  | ---                                                   | rgba(0, 0, 0, 0.7) |
| dk-loading-textSize      | Load Chinese case font size | string  | ---                                                   | 15px               |
| dk-loading-spinnerSize   | Load Chinese case icon size | string  | ---                                                   | 1em                |
| dk-loading-flexDirection | Load Chinese case icon direction | string  | column(up) row(left) row-reverse(right) column-reverse(Under the) | column             |
| dk-loading-spinner       | Load the Chinese case icon     | string  | svg String does not have a parent svg 标签                           | ---                |

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
