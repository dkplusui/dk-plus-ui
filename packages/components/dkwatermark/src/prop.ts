import type { PropType } from 'vue';
import type { ExtractPropTypes } from 'vue'
// import type { setNumberProps, setStringProp } from '../../_utils'

export const dkWatermark = {
  /**
   * @name value
   * @description 水印文案
   */
  value: {
    type: String as PropType<string>,
    default: 'dk-watermark'
  },
  /**
   * @name font
   * @description 水印位置样式
   */
  font: {
    type: String as PropType<string>,
    default: '20px 微软雅黑'
  },
  /**
   * @name color
   * @description 水印颜色
   */
  color: {
    type: String as PropType<string>,
    // default: 'rgba(0, 0, 0, 0.15)'
    default: '#000'
  },
  /**
   * @name opacity
   * @description 透明度
   */
  opacity: {
    type: String as PropType<string>,
    default: '.15'
  },
  /**
   * @name rotate
   * @description 旋转角度
   */
  rotate: {
    type: String as PropType<number | string>,
    default: -20
  },
  /**
   * @name appendToBody
   * @description 是否添加到body上
   */
  appendToBody: {
    type: Boolean as PropType<boolean>,
    default: false
  }
} as const

export type DkWatermark = ExtractPropTypes<typeof dkWatermark>
