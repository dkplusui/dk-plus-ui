export const timeSelectEmits = {
  'update:modelValue': (v: string): boolean => {
    void v
    return true
  },
  change: (v: string): boolean => {
    void v
    return true
  },
  clear: () => true,
  focus: (evt: FocusEvent): boolean => {
    void evt
    return true
  },
  blur: (evt: FocusEvent): boolean => {
    void evt
    return true
  }
}
