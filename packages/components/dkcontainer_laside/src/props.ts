import { setStringNumberProps } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const lasProps = {
  /**
   * 自定义宽度
   * @see height https://developer.mozilla.org/zh-CN/docs/Web/CSS/width
   */
  width: setStringNumberProps(),
  /**
   * 自定义高度
   * @see height https://developer.mozilla.org/zh-CN/docs/Web/CSS/height
   */
  height: setStringNumberProps(),
  /**
   * 自定义内边距
   * @see padding https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
   */
  padding: setStringNumberProps()
} as const

export type lasPropsType = ExtractPropTypes<typeof lasProps>
