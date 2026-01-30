import { setBooleanProps, setFunctionProps, setStringProp } from '../../_utils'
import type { ExtractPropTypes, PropType, CSSProperties } from 'vue'
import type { dkPlusSize } from '../../_interface'

export type PopperStyle = string | CSSProperties

export type TimePickerValue = string | number | Date
export type TimePickerModelValue = TimePickerValue | TimePickerValue[]

export type TimePickerDefaultValue = Date | [Date, Date]

export const dkTimePickerProps = {
  modelValue: {
    type: [String, Number, Date, Array] as unknown as PropType<TimePickerModelValue>,
    default: ''
  },
  readonly: setBooleanProps(false),
  isRange: setBooleanProps(false),
  disabled: setBooleanProps(false),
  size: setStringProp<dkPlusSize>(null),
  editable: setBooleanProps(true),
  clearable: setBooleanProps(true),
  placeholder: setStringProp<string>(''),
  startPlaceholder: setStringProp<string>(''),
  endPlaceholder: setStringProp<string>(''),
  rangeSeparator: setStringProp<string>('-'),
  format: setStringProp<string>('HH:mm:ss'),
  valueFormat: setStringProp<string>(''),
  defaultValue: {
    type: [Date, Array] as unknown as PropType<TimePickerDefaultValue>,
    default: undefined
  },
  disabledHours: setFunctionProps<() => number[]>(),
  disabledMinutes: setFunctionProps<(hour: number) => number[]>(),
  disabledSeconds: setFunctionProps<(hour: number, minute: number) => number[]>(),
  arrowControl: setBooleanProps(false),
  popperClass: setStringProp<string>(''),
  popperStyle: {
    type: [String, Object] as unknown as PropType<PopperStyle>,
    default: ''
  },
  popperOptions: {
    type: Object as PropType<Record<string, unknown>>,
    default: (): Record<string, unknown> => ({})
  },
  fallbackPlacements: {
    type: Array as PropType<string[]>,
    default: () => ['bottom', 'top', 'right', 'left']
  },
  teleported: setBooleanProps(true),
  placement: setStringProp<string>('bottom'),
  tabindex: {
    type: [String, Number] as PropType<string | number>,
    default: 0
  },
  ariaLabel: setStringProp<string>(''),
  emptyValues: {
    type: Array as PropType<unknown[]>,
    default: undefined
  },
  valueOnClear: {
    type: [String, Number, Boolean, Function, Array, Object] as unknown as PropType<unknown>,
    default: undefined
  },
  prefixIcon: setStringProp<string>('IconClock'),
  clearIcon: setStringProp<string>('IconShanchu1'),
  id: {
    type: [String, Array] as PropType<string | string[]>,
    default: undefined
  },
  name: {
    type: [String, Array] as PropType<string | string[]>,
    default: undefined
  }
} as const

export type DkTimePickerProps = ExtractPropTypes<typeof dkTimePickerProps>
