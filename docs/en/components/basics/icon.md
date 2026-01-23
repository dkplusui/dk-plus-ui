# Icon 

Using an SVG icon library can reduce project size and improve loading speed.

- [Source code](https://github.com/dk-plus-ui/dk-plus-ui/tree/master/packages/components/dkicon)
- [Document editing](https://github.com/dk-plus-ui/dk-plus-ui/blob/master/docs/en/components/icon.md)

## 1. Basic use

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
  //Method 1 Traditional writing method
  <script lang="ts">
    import {svgList} from 'dk-plus'
    components: {
      IconShanchu1:svgList.IconShanchu1
    }
  </script>
  //Method 2 Grammar sugar
  <script setup lang="ts">
    import { svgList } from '@dk-plus/components/_icon'
    const { IconWeiXin } = svgList   //Deconstruct assignment
    const expose = { IconWeiXin }   //Much derivable
  </script>
```

:::

## assemble

`svg-icon` assemble，**Click to copy** income <span style="color: #18bb85;font-weight: bold;">{{svgListLength}}</span> ICONS

<iconDom></iconDom>

## Stats

| argument | Instructions | type | Optional value | Default value |
| --- | --- | --- | --- | --- |
| `color` | icon colour | string | --- | --- |
| `size` | icon size | string / number | --- | --- |
| `icon` | icon content | <a href='/components/icon.html#_1-基本使用'>IconType</a> | --- | --- |

## Slots

| argument | Instructions |
| --- | --- |
| default | icon content |

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
