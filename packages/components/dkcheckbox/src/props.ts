import type { ExtractPropTypes } from 'vue'
import { setBooleanProps, setStringProp } from '../../_utils'
import { DK_SIZE } from '../../_tokens'
import type { dkPlusSize } from '../../_interface'
export const dkCheckboxProps = {
  modelValue: setBooleanProps(false),
  indeterminate: setBooleanProps(),
  disabled: setBooleanProps(),
  size: setStringProp(null, (val: dkPlusSize) => {
    return DK_SIZE.includes(val)
  }),
  checkedLabel: setStringProp(),
  uncheckedLabel: setStringProp(),
  border: setBooleanProps(),
  label: setStringProp(),
  value: setStringProp()
}

export type DkCheckboxType = ExtractPropTypes<typeof dkCheckboxProps>
