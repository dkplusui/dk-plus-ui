/**
 * @name props
 * @description Select
 * @date December 23, 2024
 * @user FanKai <https://github.com/isMrFan>
 * @function interface 定义
*/
import type { ExtractPropTypes, InjectionKey, PropType, CSSProperties } from 'vue'
import type { SelectProvide } from './interface'
import type { dkPlusSize } from '../../_interface'

export type SelectModelValue = string | number | boolean
export type SelectModelValueItem = SelectModelValue | Record<string, unknown>
export type SelectModelValueType = SelectModelValueItem | SelectModelValueItem[]

export type SelectOption = Record<string, unknown>

export interface SelectOptionsProps {
  value?: string
  label?: string
  disabled?: string
  options?: string
}

export type PopperStyle = string | CSSProperties

export const dkSelectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array] as unknown as PropType<SelectModelValueType>,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  filterable: {
    type: Boolean,
    default: false
  },
  filterMethod: {
    type: Function as unknown as PropType<(query: string) => boolean>,
    default: undefined
  },
  remote: {
    type: Boolean,
    default: false
  },
  remoteMethod: {
    type: Function as unknown as PropType<(query: string) => void>,
    default: undefined
  },
  debounce: {
    type: Number,
    default: 300
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Loading'
  },
  noMatchText: {
    type: String,
    default: '无匹配数据'
  },
  noDataText: {
    type: String,
    default: '无数据'
  },
  size: {
    type: String as unknown as () => dkPlusSize | null,
    default: null
  },
  width: {
    type: String,
    default: '240px'
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  /** 兼容旧属性：空态文案（优先级低于 noMatchText/noDataText） */
  emptyText: {
    type: String,
    default: '无匹配数据'
  },
  clearIcon: {
    type: String,
    default: 'IconClose'
  },
  suffixIcon: {
    type: String,
    default: 'IconCaretDown'
  },
  multipleLimit: {
    type: Number,
    default: 0
  },
  collapseTags: {
    type: Boolean,
    default: false
  },
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  props: {
    type: Object as PropType<SelectOptionsProps>,
    default: (): SelectOptionsProps => ({
      value: 'value',
      label: 'label',
      disabled: 'disabled',
      options: 'options'
    })
  },
  options: {
    type: Array as unknown as PropType<SelectOption[]>,
    default: () => []
  },
  id: {
    type: String,
    default: undefined
  },
  name: {
    type: String,
    default: undefined
  },
  popperClass: {
    type: String,
    default: ''
  },
  popperStyle: {
    type: [String, Object] as unknown as PropType<PopperStyle>,
    default: ''
  },
  teleported: {
    type: Boolean,
    default: true
  },
  appendTo: {
    type: [String, Object] as unknown as PropType<string | HTMLElement>,
    default: 'body'
  },
  offset: {
    type: Number,
    default: 8
  }
} as const

/** select 组件 props 类型 */
export type SelectProps = ExtractPropTypes<typeof dkSelectProps>
/** select 组件注入的依赖项 */
export const SELECT_PROPS_TOKEN: InjectionKey<SelectProvide> = Symbol.for('DK_SELECT_PROPS_TOKEN')
