<script lang="ts">
  import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
  import { popoverProps } from './props'
  import { getPopover } from '../../_hooks'
  export default defineComponent({
    name: 'DkPopover',
    props: popoverProps,
    emits: ['update:modelValue', 'hidden'],
    setup(props, { emit }) {
      const { classList, styleList, wrapperClassList, setTop } = getPopover(props)
      const data = reactive({
        visible: props.visible,
        trigger: props.trigger,
        wrapperRef: null,
        placement: props.placement,
        top: '0px',
        left: '0px',
        showArrow: props.showArrow
      })

      onMounted(() => {
        const { height, width } = setTop(data.wrapperRef)
        // console.log(height, width);
        
        data.top = height + 'px'
        data.left = width + 'px'
      })

      const methods = {
        handleMouseEnter: (): void => {
          if (data.trigger !== 'hover') return
          if (!classList.value.includes('dk-popover-active')) {
            classList.value.push('dk-popover-active')
          }

          emit('update:modelValue', true)
          emit('hidden', true)
        },
        handleMouseLeave: (): void => {
          if (data.trigger !== 'hover') return
          if (classList.value.includes('dk-popover-active')) {
            classList.value.splice(classList.value.indexOf('dk-popover-active'), 1)
          }
          emit('update:modelValue', false)
          emit('hidden', false)
        },
        setClassName: (visible: boolean): void => {
          if (visible) {
            if (!classList.value.includes('dk-popover-active')) {
              classList.value.push('dk-popover-active')
            }
          } else {
            if (classList.value.includes('dk-popover-active')) {
              classList.value.splice(classList.value.indexOf('dk-popover-active'), 1)
            }
          }
        },
        handleClick: (): void => {
          emit('update:modelValue', !data.visible)
          emit('hidden', !data.visible)
        }
      }

      watch(
        () => props.visible,
        val => {
          data.visible = val
          methods.setClassName(val)
        },
        {
          immediate: true
        }
      )

      watch(
        () => props.modelValue,
        val => {
          data.visible = val
          methods.setClassName(val)
        },
        {
          immediate: true
        }
      )

      return {
        ...toRefs(data),
        ...methods,
        classList,
        styleList,
        wrapperClassList
      }
    }
  })
</script>
<template>
  <div
    :class="classList"
    :style="styleList"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <div
      :class="wrapperClassList"
      :style="{ '--popover-top': top, '--popover-left': left }"
    >
      <div v-if="showArrow" class="dk-popover-wrapper_arrow"></div>
      <div ref="wrapperRef" class="dk-popover-wrapper_container">
        <slot name="popup"></slot>
      </div>
    </div>
    <div class="dk-popover_inner">
      <slot name="default"></slot>
    </div>
  </div>
</template>
