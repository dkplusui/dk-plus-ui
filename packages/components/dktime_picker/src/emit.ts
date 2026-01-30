import type { TimePickerModelValue } from './props'

export const timePickerEmits = {
  'update:modelValue': (v: TimePickerModelValue): boolean => {
    void v
    return true
  },
  change: (v: TimePickerModelValue): boolean => {
    void v
    return true
  },
  focus: (evt: FocusEvent): boolean => {
    void evt
    return true
  },
  blur: (evt: FocusEvent): boolean => {
    void evt
    return true
  },
  clear: () => true,
  'visible-change': (v: boolean): boolean => {
    void v
    return true
  }
}
