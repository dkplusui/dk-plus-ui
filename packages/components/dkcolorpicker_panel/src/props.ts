import { setBooleanProps, setStringProp } from '../../_utils/props'
import type { ExtractPropTypes, PropType } from 'vue'
import type { ColorFormat } from './type'

export const dkColorPickerPanelProps = {
  modelValue: setStringProp(''),
  disabled: setBooleanProps(),
  showAlpha: setBooleanProps(),
  format: {
    type: String as PropType<ColorFormat>,
    default: 'hex'
  },
  width: setStringProp('280px')
} as const

export type ColorPickerPanelProps = ExtractPropTypes<typeof dkColorPickerPanelProps>
