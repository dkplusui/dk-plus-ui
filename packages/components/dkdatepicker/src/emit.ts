export const datePickerEmits = {
  'update:modelValue': (value: unknown): boolean => {
    void value
    return true
  },
  change: (value: unknown): boolean => {
    void value
    return true
  },
  blur: (evt: FocusEvent): boolean => {
    void evt
    return true
  },
  focus: (evt: FocusEvent): boolean => {
    void evt
    return true
  },
  clear: () => true,
  'calendar-change': (value: unknown): boolean => {
    void value
    return true
  },
  'panel-change': (payload: unknown): boolean => {
    void payload
    return true
  },
  'visible-change': (value: boolean) => typeof value === 'boolean'
} as const
