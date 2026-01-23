# Icon 图标

使用 svg 的图标库，可以减少项目体积，提高加载速度。

- [源代码](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkicon)
- [文档编辑](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/zh/components/icon.md)

## 1.基本使用

::: module
 <template #code>
   <div style='display: flex;'>
      <dk-icon>
        <IconWeiXin></IconWeiXin>
      </dk-icon>
      <dk-icon :size='24' :color="'#18bb85'">
        <IconWeiXin></IconWeiXin>
      </dk-icon>
    </div>
 </template>

```html
  <div style='display: flex;'>
    <dk-icon>
      <IconWeiXin></IconWeiXin>
    </dk-icon>
    <dk-icon :size='24' :color="'#18bb85'">
      <IconWeiXin></IconWeiXin>
  </dk-icon>
  </div>
  //方法一 传统写法
  <script lang="ts">
    import {svgList} from 'dk-plus'
    components: {
      IconShanchu1:svgList.IconShanchu1
    }
  </script>
  //方法二 语法糖
  <script setup lang="ts">
    import { svgList } from '@dk-plus/components/_icon'
    const { IconWeiXin } = svgList   //解构赋值
    const expose = { IconWeiXin }   //可导出很多
  </script>
```

:::

## 集合

`svg-icon` 集合，**点击即可复制**，共收入 <span style="color: #18bb85;font-weight: bold;">{{svgListLength}}</span> 个图标

<iconDom></iconDom>

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| `color` | icon 颜色 | string | --- | --- |
| `size` | icon 大小 | string / number | --- | --- |
| `icon` | icon 内容 | <a href='/components/icon.html#_1-基本使用'>IconType</a> | --- | --- |

## Slots(插槽)

| 参数 | 说明 |
| --- | --- |
| default | icon 内容 |

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

<script setup lang="ts">
  import iconDom from '../vueDome/icon/index.vue'
  import svgList from 'isIcon'
  const svgListLength=Object.keys(svgList).length
</script>
