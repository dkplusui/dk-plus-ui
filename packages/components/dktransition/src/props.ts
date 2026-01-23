import type { ExtractPropTypes } from 'vue'
import { setBooleanProps } from '../../_utils'

export const dktransition = {
  /**
   * @name isActive
   * @param { boolean }  isActive 展开收起状态
   * @returns 展开收起状态
   */
  isActive: setBooleanProps()
} as const

export type DktransitionProps = ExtractPropTypes<typeof dktransition>
