import type { ExtractPropTypes } from 'vue'
import { setStringProp, setArrayProps, setBooleanProps } from '../../_utils'

/**
 * @name dk-collapse
 * @author fanKai
 * @Time 2023/08/14
 * @property {string | string[] | number[]} modelValue 折叠面板数组参数唯一标识
 * @property {boolean} accordion 是否开启手风琴效果
 * */
export const dkcollapse = {
  modelValue: setStringProp() || setArrayProps(),
  accordion: setBooleanProps()
} as const

/** Collapse 组件 props 类型 */
export type DkCollapseProps = ExtractPropTypes<typeof dkcollapse>
