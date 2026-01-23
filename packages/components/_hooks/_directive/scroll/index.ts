import type { Directive, DirectiveBinding } from 'vue'
// import { hexToRgba, rgbaToHex } from '../..'
import { getColor } from '../..'
import type { DkScrollbarType } from '../../../dkscrollbar/src/props'

/**
 * @name DirectiveScroll
 * @date July 21, 2023
 * @description Directive scroll
 */
export const DirectiveScroll = (): Directive => {
  /**
   * @name setStyle
   * @description Set style of the element
   * @param el element
   * @param opacity The current element opacity
   * @param step Gradual delicacy degree
   */
  const setStyle = (
    el: HTMLElement,
    opacity: number,
    step: number,
    color: string
  ): void => {
    color = getColor(color).rgbaToHex()
    const thumbColor = getColor(color)
      .hexToRgba(opacity)
      .replace(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)/, '$1, $2, $3')

    const animate = (): void => {
      opacity += step
      if (opacity < 1 && opacity > 0) {
        el.style.setProperty('--scrollbar-thumb-color', `rgba(${thumbColor}, ${opacity})`)
        requestAnimationFrame(animate)
      }
    }
    animate()
  }

  /**
   * @name removeScroll
   * @description Remove scroll style of the element
   * @param { HTMLElement } el The current element
   */
  const removeScroll = (el: HTMLElement): void => {
    el.classList.remove('dk-scrollbar')
    el.removeEventListener('mouseenter', (): void => {
      return
    })
    el.removeEventListener('mouseleave', (): void => {
      return
    })
  }

  /**
   * @name optionsController
   * @description Get attributes of the element
   * @param {HTMLElement} el The current element
   * @param {DirectiveBinding} binding Allocation
   */
  const optionsController = (
    el: HTMLElement,
    binding: DirectiveBinding
  ): DkScrollbarType => {
    /**
     * @name getBindingProp
     * @description Get element's attributes by key
     * @param { string } key Get current of the attributes
     * @returns DkScrollbarType
     */
    const getBindingProp = <Key extends keyof DkScrollbarType>(
      key: Key | string
    ): DkScrollbarType[Key] => {
      return binding.value[key]
    }

    /**
     * @name getProps
     * @description Get attributes of the element
     * @param { string } key
     * @returns
     */
    const getProps = <Key extends keyof DkScrollbarType>(
      key: Key | string
    ): DkScrollbarType[Key] => {
      return getBindingProp(key) || el.getAttribute(`${key}`) || ''
    }
    return {
      width: getProps('width'),
      height: getProps('height'),
      barWidth: getProps('bar-width'),
      thumbRadius: getProps('thumb-radius'),
      trackColor: getProps('track-color'),
      thumbColor: getProps('thumb-color')
    }
  }

  /**
   * @name renderScroll
   * @description Render element's scrollbar style
   * @param { HTMLElement } el The current element
   * @param { DirectiveBinding } binding Element's attributes
   */
  const renderScroll = (el: HTMLElement, binding: DirectiveBinding): void => {
    el.className = 'dk-scrollbar'
    const options = optionsController(el, binding)

    const color = getColor(options.thumbColor || '#c1c1c1').hexToRgba(0)

    options.width && el.style.setProperty('--scrollbar-width', options.width)
    options.height && el.style.setProperty('--scrollbar-height', options.height)
    options.trackColor &&
      el.style.setProperty('--scrollbar-track-color', options.trackColor)
    options.barWidth && el.style.setProperty('--scrollbar-bar-width', options.barWidth)
    options.thumbRadius &&
      el.style.setProperty('--scrollbar-thumb-radius', options.thumbRadius)
    el.style.setProperty('--scrollbar-thumb-color', color)
    el.addEventListener('mouseenter', (): void => setStyle(el, 0, 0.1, color))
    el.addEventListener('mouseleave', (): void => setStyle(el, 1, -0.1, color))
  }

  /**
   * @name vScroll Customize the scroll command
   * @see CustomInstructions https://cn.vuejs.org/guide/reusability/custom-directives.html
   */
  const vScroll: Directive = {
    mounted: (el: HTMLElement, binding: DirectiveBinding): void => {
      binding.value && renderScroll(el, binding)
    },
    updated: (el: HTMLElement, binding: DirectiveBinding) => {
      if (!binding.value) {
        removeScroll(el)
      } else {
        renderScroll(el, binding)
      }
    }
  }
  return vScroll
}
