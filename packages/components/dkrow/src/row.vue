<script lang="ts">
import { defineComponent } from 'vue'
import { dkRowProps } from './prop';
import { getRow } from '../../_hooks';
export default defineComponent({
  name: 'DkRow',
  props: dkRowProps,
  setup(props) {
    const { classList, styleList } = getRow(props)
    
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
