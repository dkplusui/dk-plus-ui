import type { SliderModelValue } from './props'

export const sliderEmits = {
  'update:modelValue': (v: SliderModelValue): boolean => {
    void v
    return true
  },
  input: (v: SliderModelValue): boolean => {
    void v
    return true
  },
  change: (v: SliderModelValue): boolean => {
    void v
    return true
  }
}
