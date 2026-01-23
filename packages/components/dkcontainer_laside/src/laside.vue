<script lang="ts">
  /**
   * @name DkMain
   * @author fanKai16
   * @Time 2023/06/20
   * @description 面布局--左侧布局
   **/
  import { defineComponent } from 'vue'
  import { lasProps } from './props'
  import { getStyleList } from '../../_hooks'
  export default defineComponent({
    name: 'DkLaside',
    props: lasProps,
    setup(props) {
      const { styles } = getStyleList(props, 'header')
      const style_List = styles(['height', 'padding', 'width', 'background'])
      return { style_List }
    }
  })
</script>
<template>
  <alias class="dk-laside" :style="style_List">
    <slot />
  </alias>
</template>
