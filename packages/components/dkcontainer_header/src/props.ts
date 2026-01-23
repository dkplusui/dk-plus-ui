import { setStringNumberProps } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const HeaderProps = {
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

export type HeaderPropsType = ExtractPropTypes<typeof HeaderProps>
