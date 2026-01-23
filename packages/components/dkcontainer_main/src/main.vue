<script lang="ts">
  /**
   * @name DkMain
   * @author fanKai16
   * @Time 2023/06/20
   * @description 面布局--中间主要内容
   **/
  import { defineComponent } from 'vue'
  import { mainProps } from './props'
  import { getStyleList } from '../../_hooks'
  export default defineComponent({
    name: 'DkMain',
    props: mainProps,
    setup(props) {
      const { styles } = getStyleList(props, 'header')
      const style_List = styles(['height', 'padding'])
      return { style_List }
    }
  })
</script>
<template>
  <main class="dk-main" role="main" :style="style_List">
    <slot />
  </main>
</template>
