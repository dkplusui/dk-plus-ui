<script lang="ts">
  import { defineComponent } from 'vue'
  import { dkColProps } from './prop'
  import { getCol } from '../../_hooks'
  export default defineComponent({
    name: 'DkCol',
    props: dkColProps,
    setup(props) {
      const { classList, styleList } = getCol(props)
      return {
        classList,
        styleList
      }
    }
  })
</script>

<template>
  <div :class="classList" :style="styleList">
    <slot></slot>
  </div>
</template>
