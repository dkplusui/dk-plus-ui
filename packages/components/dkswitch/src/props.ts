import { setBooleanProps, setColorProp, setStringProp } from '../../_utils'
import { type ExtractPropTypes } from 'vue'
import type { dkPlusSize } from '../../_interface'
import { DK_SIZE } from '../../_tokens'

export const switchProps = {
  /**
   * @name modelValue
   * @type boolean
   * @default false
   * @description Selected status of the switch
   */
  modelValue: setBooleanProps(false),
  /**
   * @name disabled
   * @type boolean
   * @default false
   * @description Whether the switch is disabled
   */
  disabled: setBooleanProps(false),
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
   * @type string
   * @default #409EFF
   * @description Switch on color
   */
  checkedColor: setColorProp('#409EFF'),
  /**
   * @name unCheckedColor
   * @type string
   * @default #C0CCDA
   * @description Switch off color
   */
  uncheckedColor: setColorProp('#C0CCDA'),
  /**
   * @name checkedText
   * @type string
   * @default ''
   * @description Checked text
   */
  checkedText: setStringProp(''),
  /**
   * @name unCheckedText
   * @type string
   * @default ''
   * @description Unchecked text
   */
  uncheckedText: setStringProp(''),
  /**
   * @name width
   * @type string | number
   * @default 40px
   * @description Switch width
   */
  width: setStringProp(),
  /**
   * @name checkedIcon
   * @type string
   * @default ''
   * @description Checked icon
   */
  checkedIcon: setStringProp(''),
  /**
   * @name unCheckedIcon
   * @type string
   * @default ''
   * @description Unchecked icon
   */
  uncheckedIcon: setStringProp(''),
  /**
   * @name loading
   * @type boolean
   * @default false
   */
  loading: setBooleanProps(false),
  /**
   * @name checkedCustomIcon
   * @type string
   * @default ''
   * @description Custom checked icon
   */
  checkedCustomIcon: setStringProp(''),
  /**
   * @name uncheckedCustomIcon
   * @type string
   * @default ''
   * @description Custom unchecked icon
  */
  uncheckedCustomIcon: setStringProp('')
}

export type SwitchPropsType = ExtractPropTypes<typeof switchProps>
