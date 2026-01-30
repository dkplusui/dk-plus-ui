import { setBooleanProps, setNumberProps, setStringProp } from '../../_utils'
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'

export type SliderModelValue = number | [number, number]

export type SliderMarks = Record<
  number,
  | string
  | {
    style?: CSSProperties
    label: string
  }
>

export const dkSliderProps = {
  modelValue: {
    type: [Number, Array] as PropType<SliderModelValue>,
    default: 0
  },
  min: setNumberProps(0),
  max: setNumberProps(100),
  step: setNumberProps(1),
  disabled: setBooleanProps(false),
  showInput: setBooleanProps(false),
  showStops: setBooleanProps(false),
  showTooltip: setBooleanProps(true),
  range: setBooleanProps(false),
  vertical: setBooleanProps(false),
  height: setStringProp(''),
  debounce: setNumberProps(0),
  formatTooltip: {
    type: Function as PropType<(val: number) => string | number>,
    default: undefined
  },
  marks: {
    type: Object as PropType<SliderMarks>,
    default: undefined
  },
  validateEvent: setBooleanProps(true)
} as const

export type DkSliderProps = ExtractPropTypes<typeof dkSliderProps>
