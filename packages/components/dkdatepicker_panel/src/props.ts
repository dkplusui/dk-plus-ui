import { setBooleanProps, setFunctionProps, setNumberProps, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const dkDatePickerPanelProps = {
  modelValue: setStringProp<string>(''),
  disabled: setBooleanProps(),
  width: setStringProp<string>('320px'),
  firstDayOfWeek: setNumberProps(0),
  disabledDate: setFunctionProps<(date: Date) => boolean>()
} as const

export type DatePickerPanelProps = ExtractPropTypes<typeof dkDatePickerPanelProps>
