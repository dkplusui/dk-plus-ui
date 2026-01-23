<script lang="ts">
  /**
   * @name Dkfooter
   * @author fanKai16
   * @Time 2023/06/20
   * @description 面布局--底部
   **/
  import { defineComponent } from 'vue'
  import { footerProps } from './props'
  import { getStyleList } from '../../_hooks'
  export default defineComponent({
    name: 'DkFooter',
    props: footerProps,
    setup(props) {
      const { styles } = getStyleList(props, 'header')
      const style_List = styles(['height', 'padding'])
      return { style_List }
    }
  })
</script>
<template>
  <footer class="dk-footer" :style="style_List">
    <slot />
  </footer>
</template>
