import type { ExtractPropTypes } from 'vue'
import { setStringProp } from '../../_utils'

export const DkRadioGroupProps = {
  modelValue: setStringProp()
}

export type DkRadioGroupPropsType = ExtractPropTypes<typeof DkRadioGroupProps>
