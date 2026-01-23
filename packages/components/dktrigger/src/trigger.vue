<script lang="ts">
/**
 * @name DkTrigger
 * @description Trigger
 * @date Oct 31, 2024
 * @user FanKai <https://github.com/isMrFan>
 * @function 组件触发器用于组件展示下拉
*/
import { defineComponent, ref, reactive, toRefs, computed,provide } from 'vue'
import type { CSSProperties } from 'vue'
import { sizeChange } from '../../_utils'
import { dkTriggerProps,TRIGGER_CLOSE_KEY } from './props'
import { getReturn } from '../../_hooks'
import type { TriggerProvide } from './interface'
export default defineComponent({
  name: 'DkTrigger',
  props:dkTriggerProps,
  setup(props) {
    const data = reactive({})
    const {getRun}=getReturn()
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
    }
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
  /**
   * 获取点击的孩子节点是否存在 f-trigger 类名的标签
   *
   * @see Event.composedPath() https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composedPath
   * @see Array.prototype.some() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
   */
  const isHaveTrigger: boolean = (evt.composedPath() as HTMLElement[]).some(
    (item: HTMLElement): boolean => item.className === 'f-trigger'
  )

  /** 如果有，则说明点击是孩子节点，则不需要关闭 */
  if (isHaveTrigger) return

  /** 否则关闭触发器 */
  handelClose()

  /** 关闭之后移除事件监听 */
  document.removeEventListener('click', documentListen)
  }
  /**
   * 弹窗打开
   *
   * 给 document 添加事件监听用于关闭触发器
   */
  const onBeforeEnter = (): void => {
    document.addEventListener('click', documentListen)
  }
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
      ...toRefs(data)
    }
  }
  
})
</script>
<template>
  <div 
    class="Dk-Trigger" 
    :style="styleList"
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
