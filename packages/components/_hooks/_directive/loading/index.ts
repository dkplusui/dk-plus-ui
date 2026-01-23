import { createApp } from 'vue'
import loadingVue from '../../../dkloading/src/loading.vue'
import type { Directive, ComponentPublicInstance, DirectiveBinding, App } from 'vue'
import type { LoadingPropsType } from '../../../dkloading/src/props'

/**
 * @name Dkloading 元素节点类型接口
 * @param { Object } vm
 * @param { Object | null } loadingInstance
 * @param { string } originalPosition
 * @param { Object } style
 */
export interface LoadingInterface extends HTMLElement {
  vm: ComponentPublicInstance
  loadingInstance: App | null
  originalPosition: string
  style: CSSStyleDeclaration
}

export const DirectiveLoading = (): Directive => {
  const optionsOrganizer = (
    el: LoadingInterface,
    binding: DirectiveBinding
  ): LoadingPropsType => {
    /**
     * @name getBindingProp 获取props中的值
     * @param { string } Key props 的键
     */
    const getBindingProp = <K extends keyof LoadingPropsType>(
      Key: K
    ): LoadingPropsType[K] => {
      return binding.value[Key]
    }

    /**
     * @name getProps 获取 组件的props
     * @param { string } Key props 的键
     */
    const getProps = <K extends keyof LoadingPropsType>(
      Key: K
    ): LoadingPropsType[K] | string => {
      return getBindingProp(Key) || el.getAttribute(`dk-loading-${Key}`) || ''
    }

    return {
      visible: !!binding.value,
      text: getProps('text'),
      textSize: getProps('textSize'),
      color: getProps('color'),
      background: getProps('background'),
      spinner: getProps('spinner'),
      spinnerSize: getProps('spinnerSize'),
      flexDirection: getProps('flexDirection')
    } as LoadingPropsType
  }

  /**
   * @name  renderLoading 渲染元素节点
   * @param { Object } el 元素节点
   * @param { Object } binding 一个obj,包含一些配置参数
   */
  const renderLoading = (el: LoadingInterface, binding: DirectiveBinding): void => {
    if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
      el.style.position = 'relative'
    }
    const options = optionsOrganizer(el, binding)
    const loadingInstance = createApp(loadingVue, options)
    const _vm = loadingInstance.mount(
      document.createElement('div')
    ) as ComponentPublicInstance
    el.vm = _vm
    el.loadingInstance = loadingInstance
    el.appendChild(_vm.$el)
  }

  /**
   * @name removeLoading 移除 loading 节点
   * @param { Object } el 元素节点
   */
  const removeLoading = (el: LoadingInterface): void => {
    if (!el.loadingInstance) return
    el.style.position = el.originalPosition
    el.removeChild(el.vm.$el)
    el.loadingInstance.unmount()
    el.loadingInstance = null
  }

  /**
   * @name vLoading 自定义 loading 指令
   * @see 自定义指令 https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
   */
  const vLoading: Directive = {
    /**
     * @name mounted  在元素和节点挂载后执行
     * @param { Object } el 指令绑定到的元素。这可以用于直接操作 DOM
     * @param { Object } binding 一个对象，包含一些配置参数
     */
    mounted: (el: LoadingInterface, binding: DirectiveBinding): void => {      
      const originalPosition: string = getComputedStyle(el)['position'] || 'static'
      el.originalPosition = originalPosition
      binding.value && renderLoading(el, binding)
    },
    /**
     * @name mounted  在元素和节点更新后执行
     * @param { Object } el 指令绑定到的元素,这可以用于直接操作 DOM.
     * @param { Object } binding 一个obj,包含一些配置参数
     */
    updated: (el: LoadingInterface, binding: DirectiveBinding): void => {
      if (binding.value !== binding.oldValue) {
        if (!binding.value) {
          removeLoading(el)
        } else {
          renderLoading(el, binding)
        }
      }
    }
  } as const

  return vLoading
}
