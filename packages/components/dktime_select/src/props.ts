import { setBooleanProps, setFunctionProps, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const dkTimeSelectProps = {
  modelValue: setStringProp<string>(''),
  start: setStringProp<string>('09:00'),
  end: setStringProp<string>('18:00'),
  step: setStringProp<string>('00:30'),
  minTime: setStringProp<string>(''),
  maxTime: setStringProp<string>(''),
  disabledHours: setFunctionProps<() => number[]>(),
  disabledMinutes: setFunctionProps<(hour: number) => number[]>(),
  disabledSeconds: setFunctionProps<(hour: number, minute: number) => number[]>(),
  disabled: setBooleanProps(false),
  editable: setBooleanProps(true),
  clearable: setBooleanProps(true),
  placeholder: setStringProp<string>('请选择时间'),
  name: setStringProp<string>(),
  id: setStringProp<string>()
} as const

export type DkTimeSelectProps = ExtractPropTypes<typeof dkTimeSelectProps>
