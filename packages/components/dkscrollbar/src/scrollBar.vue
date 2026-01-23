<script lang="ts">
  /**
   * @name DkScrollbar
   * @description ScrollBar
   * @date July 20, 2023
   * @user WangYingJay <https://github.com/WangYingJay>
   * @function handleScrollChange Scroll bar scrolling event
   */
  import { defineComponent, reactive, toRefs, ref } from 'vue'
  import type { CSSProperties, Ref } from 'vue'
  import { dkScrollbar } from './props'
  import { getDkScroll } from '../../_hooks'
  export default defineComponent({
    name: 'DkScrollbar',
    props: dkScrollbar,
    emits: ['scroll'],
    setup(props, { emit }) {
      const { classList, styleList, wrapperClassList } = getDkScroll(props)
      const data = props
      const scrollBarStyle = ref(styleList) as Ref<CSSProperties>
      const color: string = scrollBarStyle.value['--scrollbar-thumb-color'] as string
      const thumbColor =
        color && color.replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/, '$1, $2, $3')

      const methods = reactive({
        transition(step: number, init: number) {
          let opacity = init
          const setOpacity = (): void => {
            scrollBarStyle.value[
              '--scrollbar-thumb-color'
            ] = `rgba(${thumbColor}, ${opacity})`
          }
          const animate = (): void => {
            opacity += step
            if (opacity < 1 && opacity > 0) {
              setOpacity()
              requestAnimationFrame(animate)
            }
          }
          animate()
        },
        handleScrollChange(evt: Event) {
          const target = evt.target as HTMLElement
          const prams = {
            scrollTop: target.scrollTop,
            scrollLeft: target.scrollLeft
          }
          emit('scroll', prams)
        }
      })
      return {
        ...data,
        classList,
        styleList,
        wrapperClassList,
        ...toRefs(methods),
        scrollBarStyle
      }
    }
  })
</script>

<template>
  <div
    :class="classList"
    :style="scrollBarStyle"
    @mouseenter="transition(0.1, 0)"
    @mouseleave="transition(-0.1, 1)"
    @scroll="handleScrollChange"
  >
    <div :class="wrapperClassList">
      <slot></slot>
    </div>
  </div>
</template>
