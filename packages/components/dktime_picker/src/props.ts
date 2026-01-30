import { setBooleanProps, setStringProp } from '../../_utils'
import type { ExtractPropTypes, PropType } from 'vue'

export type TimePickerModelValue = string | string[]

export const dkTimePickerProps = {
  modelValue: {
    type: [String, Array] as PropType<TimePickerModelValue>,
    default: ''
  },
  isRange: setBooleanProps(false),
  disabled: setBooleanProps(false),
  editable: setBooleanProps(true),
  clearable: setBooleanProps(true),
  placeholder: setStringProp<string>('请选择时间'),
  startPlaceholder: setStringProp<string>('开始时间'),
  endPlaceholder: setStringProp<string>('结束时间'),
  format: setStringProp<string>('HH:mm'),
  valueFormat: setStringProp<string>('HH:mm'),
  arrowControl: setBooleanProps(false),
  popperClass: setStringProp<string>(''),
  teleported: setBooleanProps(true),
  placement: setStringProp<string>('bottom'),
  fallbackPlacements: {
    type: Array as PropType<string[]>,
    default: () => ['bottom', 'top']
  },
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
