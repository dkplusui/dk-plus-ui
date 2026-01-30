import { setBooleanProps, setFunctionProps, setNumberProps, setStringProp } from '../../_utils'
import type { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import type { dkPlusSize } from '../../_interface'
import type { DateModelValue, DatePickerShortcut, DatePickerType } from './pickerTypes'

export type PopperStyle = string | CSSProperties

export type DatePickerDefaultValue = Date | [Date, Date]
export type DatePickerDefaultTime = Date | [Date, Date]

export const dkDatePickerProps = {
  modelValue: {
    type: [String, Number, Date, Array] as unknown as PropType<DateModelValue>,
    default: ''
  },
  readonly: setBooleanProps(false),
  disabled: setBooleanProps(false),
  size: setStringProp<dkPlusSize>(null),
  editable: setBooleanProps(true),
  clearable: setBooleanProps(true),
  placeholder: setStringProp<string>(''),
  startPlaceholder: setStringProp<string>(''),
  endPlaceholder: setStringProp<string>(''),
  type: setStringProp<DatePickerType>('date'),
  format: setStringProp<string>('YYYY-MM-DD'),
  popperClass: setStringProp<string>(''),
  popperStyle: {
    type: [String, Object] as unknown as PropType<PopperStyle>,
    default: ''
  },
  popperOptions: {
    type: Object as PropType<Record<string, unknown>>,
    default: (): Record<string, unknown> => ({})
  },
  rangeSeparator: setStringProp<string>('-'),
  defaultValue: {
    type: [Date, Array] as unknown as PropType<DatePickerDefaultValue>,
    default: undefined
  },
  defaultTime: {
    type: [Date, Array] as unknown as PropType<DatePickerDefaultTime>,
    default: undefined
  },
  valueFormat: setStringProp<string>(''),
  id: {
    type: [String, Array] as unknown as PropType<string | string[]>,
    default: ''
  },
  name: {
    type: [String, Array] as unknown as PropType<string | string[]>,
    default: ''
  },
  unlinkPanels: setBooleanProps(false),
  prefixIcon: {
    type: [String, Object] as unknown as PropType<unknown>,
    default: ''
  },
  clearIcon: {
    type: [String, Object] as unknown as PropType<unknown>,
    default: 'IconClose'
  },
  validateEvent: setBooleanProps(true),
  disabledDate: setFunctionProps<(date: Date) => boolean>(),
  shortcuts: {
    type: Array as unknown as PropType<DatePickerShortcut[]>,
    default: (): DatePickerShortcut[] => []
  },
  cellClassName: setFunctionProps<(date: Date) => string>(),
  teleported: setBooleanProps(true),
  emptyValues: {
    type: Array as unknown as PropType<unknown[]>,
    default: undefined
  },
  valueOnClear: {
    type: [String, Number, Boolean, Function] as unknown as PropType<
      string | number | boolean | (() => unknown)
    >,
    default: undefined
  },
  fallbackPlacements: {
    type: Array as unknown as PropType<string[]>,
    default: (): string[] => ['bottom', 'top', 'right', 'left']
  },
  placement: setStringProp<string>('bottom'),
  showFooter: setBooleanProps(true),
  showConfirm: setBooleanProps(true),
  showWeekNumber: setBooleanProps(false),
  automaticDropdown: setBooleanProps(true),

  // dk-plus 扩展：宽度
  width: setStringProp<string>('240px'),
  panelWidth: setStringProp<string>('320px'),
  firstDayOfWeek: setNumberProps(0)
} as const

export type DatePickerProps = ExtractPropTypes<typeof dkDatePickerProps>
