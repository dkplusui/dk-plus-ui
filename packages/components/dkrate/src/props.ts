import type { ExtractPropTypes } from 'vue'
import type { RateChange } from './interface'
import {
  setBooleanProps,
  setStringNumberProps,
  setNumberProps,
  setStringProp,
  setFunctionProps,
  setArrayProps
} from '../../_utils'

export const dkRateProps = {
  /**
   * @name modelValue
   * @type number
   * @default false
   */
  modelValue: setNumberProps(),
  /**
   * @name numberValue
   * @description Number of stars
   * @type number | string
   */
  numberValue: setStringNumberProps(5),
  /**
   * @name icon
   * @description icon
   * @type icon
   */

  icon: setStringProp<string>('IconStar'),
  /**
   * @name readonly
   * @description Read only or not
   * @type Boolean
   */
  readonly: setBooleanProps(),
  /**
   * @name selectColor
   * @description Selected color
   * @type string
   */
  selectColor: setStringProp<string>('#fcc202'),
  /**
   * @name noSelectColor
   * @description no Selected color
   * @type string
   */
  noSelectColor: setStringProp<string>('#5E5E5E'),
  /**
   * @name iconSize
   * @description icon Size
   * @type string
   */
  iconSize: setStringNumberProps(20),
  /**
   * @name onChange
   * @description Triggered when the score changes
   * @type string
   */
  onchange: setFunctionProps<RateChange>(),
  /**
   * @name disabled
   * @description Disabled or not
   * @type boolean
   */
  disabled: setBooleanProps(),
  /**
   * @name showScore
   * @description Show text
   * @type boolean
   */
  showScore: setBooleanProps(),
  /**
   * @name showText
   * @description Show text
   * @type string array
   */
  showText: setArrayProps<string>()
}

/** rate 组件 props 类型 */
export type RateProps = ExtractPropTypes<typeof dkRateProps>
