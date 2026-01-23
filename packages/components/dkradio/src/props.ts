import type { ExtractPropTypes } from 'vue'
import { setBooleanProps, setStringProp, setColorProp } from '../../_utils'
import { DK_SIZE } from '../../_tokens'
import type { dkPlusSize } from '../../_interface'
export const dkRadioProps = {
  /**
   * @name modelValue
   * @param { boolean } modelValue  [false]
   */
  modelValue: setStringProp(),
  /**
   * @name disabled
   * @param { boolean } disabled  [false]
   * @returns 是否禁用
   * @description 是否禁用
   * @default false
   * @type boolean
   */
  disabled: setBooleanProps(false),
  /**
   * @name name
   * @param { string } name Value when selected
   */
  name: setStringProp(),
  /**
   * @name label
   * @param { string } label Copy of Radio
   */
  label: setStringProp(),
  /**
   * @name size
   * @param { string }  [large]
   * @param { string }  [medium]
   * @param { string }  [small]
   * @param { string }  [mini]
   */
  size: setStringProp<dkPlusSize>(null, (val: dkPlusSize) => {
    return DK_SIZE.includes(val)
  }),
  /**
   * @name checkedColor
   * @param { string } checkedColor  [null]
   * @description Color when selected
   * @default null
   */
  checkedColor: setColorProp(),
  /**
   * @name uncheckedColor
   * @param { string } uncheckedColor  [null]
   * @description Color when unselected
   */
  uncheckedColor: setColorProp(),
  /**
   * @name border
   * @param { boolean } border  [false]
   * @description Whether to display border
   * @default false
   * @type boolean
   */
  border: setBooleanProps(false)
}

export type DkRadioType = ExtractPropTypes<typeof dkRadioProps>
