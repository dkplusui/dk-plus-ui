<script lang="ts">
  /**
   * @name dk-transition
   * @author fanKai16
   * @Time 2023/08/07
   * @description 过渡动画
   **/
  import { defineComponent, ref, computed, toRefs } from 'vue'
  import { dktransition } from './props'
  export default defineComponent({
    name: 'DkTransition',
    props: dktransition,
    setup(props) {
      const { isActive } = toRefs(props)
      const dkTransition = ref<HTMLButtonElement>()
      let codeHeight = computed((): string => {
        const content = dkTransition.value as HTMLElement
        if (content) {
          const setHeight = (
            content.querySelector('.dk-TransitionContent') as HTMLElement
          )?.offsetHeight
          return isActive.value ? setHeight + 'px' : '0px'
        }
        return '0px'
      })
      return {
        dkTransition,
        codeHeight
      }
    }
  })
</script>
<template>
  <div ref="dkTransition" class="dk-Transition" :style="{ height: codeHeight }">
    <div class="dk-TransitionContent">
      <slot></slot>
    </div>
  </div>
</template>
