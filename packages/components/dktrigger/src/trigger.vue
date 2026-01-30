<script lang="ts">
/**
 * @name DkTrigger
 * @description Trigger
 * @date Oct 31, 2024
 * @user FanKai <https://github.com/isMrFan>
 * @function 组件触发器用于组件展示下拉
*/
import { defineComponent, ref, reactive, toRefs, computed, provide, onBeforeUnmount } from 'vue'
import type { CSSProperties } from 'vue'
import { sizeChange } from '../../_utils'
import { dkTriggerProps,TRIGGER_CLOSE_KEY } from './props'
import { getReturn } from '../../_hooks'
import type { TriggerProvide } from './interface'
export default defineComponent({
  name: 'DkTrigger',
  props:dkTriggerProps,
  setup(props, { expose }) {
    const data = reactive({})
    const {getRun}=getReturn()
    const rootRef = ref<HTMLElement>()
    /**
     * @description 是否展示主内容
   */
    const showContent = ref<boolean>(false)
    /**
     * @description 打开
   */
    const handelOpen = (): void => {
      if (props.disabled) return
      showContent.value = true
      getRun(props.onOpen, showContent.value)
      getRun(props.onChange,showContent.value)
    }
    /**
     * @description 关闭
   */
    const handelClose = (): void => {
      showContent.value = false
      getRun(props.onClose, showContent.value)
      getRun(props.onChange, showContent.value)
      document.removeEventListener('click', documentListen)
    }

    expose({
      handelOpen,
      handelClose,
      showContent
    })
    /**
     * @description 打开事件
   */
    const openEvent = computed((): 'mouseover' | 'click' => {
      return props.trigger === 'hover' ? 'mouseover' : 'click'
    })
    /**
      * @description 关闭事件
    */
    const closeEvent = computed((): 'mouseleave' | '' => {
      return props.trigger === 'hover' ? 'mouseleave' : ''
    })
    /**
       * @description 样式列表
     */
    const styleList = computed((): CSSProperties => {
      const { spanInterval, popUpDuration, offUpDuration } = props
      return {
        '--trigger-spacing-size': sizeChange(spanInterval),
        '--trigger-enter-duration': popUpDuration && popUpDuration + 's',
        '--trigger-leave-duration': offUpDuration && offUpDuration + 's'
      } as CSSProperties
    })
    /**
   * 文档监听
   *
   * @param { Object } evt 事件对象
   */
  const documentListen = (evt: MouseEvent): void => {
  const root = rootRef.value
  const content = props.contentRef
  const target = evt.target as Node | null
  if (root && target && root.contains(target)) return
  if (content && target && content.contains(target)) return

  handelClose()
  }
  /**
   * 弹窗打开
   *
   * 给 document 添加事件监听用于关闭触发器
   */
  const onBeforeEnter = (): void => {
    document.addEventListener('click', documentListen)
  }

  onBeforeUnmount(() => {
    document.removeEventListener('click', documentListen)
  })
  /**
   * 注入关闭方法依赖项
   *
   * 目前仅为了在 dropdown-item 组件中实现点击关闭
   */
  provide<TriggerProvide>(TRIGGER_CLOSE_KEY, {
    handelOnClose: (): void => {
      showContent.value = false
    }
  })
    return {
      styleList,
      showContent,
      closeEvent,
      openEvent,
      handelOpen,
      handelClose,
      onBeforeEnter,
      rootRef,
      ...toRefs(data)
    }
  }
  
})
</script>
<template>
  <div 
    class="Dk-Trigger" 
    :style="styleList"
    ref="rootRef"
    @[closeEvent].stop="handelClose"
  >
    <div class="Dk-Trigger__trigger" @[openEvent].stop="handelOpen">
      <slot />
    </div>
    <transition name="Dk-trigger" @before-enter="onBeforeEnter">
      <div
        v-show="showContent"
        :class="['Dk-Trigger__content-box',{ 'Dk-Trigger__arrow': arrow }]"
      >
        <div class="Dk-Trigger__content">
          <slot name="content" />
        </div>
      </div>
    </transition>
  </div>
</template>
