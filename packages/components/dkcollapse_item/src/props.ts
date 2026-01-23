import type { ExtractPropTypes } from 'vue'
import { setStringProp, setBooleanProps } from '../../_utils'

export const dkCollapseItemProps = {
  /**
   * @name title
   * @param { string }  title 折叠面板子组建左边名称
   * @returns 折叠面板子组建左边名称
   */
  title: setStringProp(),
  /**
   * @name name
   * @param { string }  name 唯一展示标识
   * @returns 折叠面板子组建左边名称
   */
  name: setStringProp(),
  /**
   * @name icon
   * @param { string }  icon icon 图标展示
   * @returns 折叠面板子组建 图标展示
   */
  icon: setStringProp(),
  /**
   * @name Active
   * @param { string }  Active
   * @returns 折叠面板子组建是否展开
   */
  active: setBooleanProps(),
  /**
   * @name modelValue
   * @param { string }  modelValue
   * @returns 折叠面板子组建是否展开
   */
  modelValue: setBooleanProps()
} as const

export type DkCollapseItemProps = ExtractPropTypes<typeof dkCollapseItemProps>
