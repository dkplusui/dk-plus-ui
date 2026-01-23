<script lang="ts">
  /**
   * @name Dkheader
   * @author fanKai16
   * @Time 2023/06/20
   * @description 面布局--头部
   **/
  import { defineComponent } from 'vue'
  import { HeaderProps } from './props'
  import { getStyleList } from '../../_hooks'
  export default defineComponent({
    name: 'DkHeader',
    props: HeaderProps,
    setup(props) {
      const { styles } = getStyleList(props, 'header')
      const style_List = styles(['height', 'padding'])
      return { style_List }
    }
  })
</script>
<template>
  <header class="dk-header" role="banner" :style="style_List">
    <slot />
  </header>
</template>
