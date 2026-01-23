import { DK_PLACEMENT } from '../../_tokens'
import type { dkPlusPlaceMent } from '../../_interface'
import { setBooleanProps, setStringProp } from '../../_utils'
import type { ExtractPropTypes } from 'vue'

export const popoverProps = {
  /**
   * @name width
   * @type string
   * @default 100%
   * @description
   */
  width: setStringProp(),
  /**
   * @name visible
   * @description Whether to display popover
   * @type { boolean }
   * @default false
   */
  visible: setBooleanProps(false),
  /**
   * @name modelValue
   * @description Whether to display popover
   * @type { boolean }
   * @default false
   */
  modelValue: setBooleanProps(false),
  /**
   * @name trigger
   * @description Trigger method
   * @type {string} [hover, click]
   */
  trigger: setStringProp('hover'),
  /**
   * @name placement
   * @description Position of the popover
   * @type {string} [ top,
   *                  bottom,
   *                  left,
   *                  right,
   *                  topLeft,
   *                  top-right,
   *                  bottom-left,
   *                  bottom-right,
   *                  left-top,
   *                  left-bottom,
   *                  right-top,
   *                  right-bottom
   *                 ]
   * @default top
   */
  placement: setStringProp<dkPlusPlaceMent>(null, (value: dkPlusPlaceMent): boolean => {
    return DK_PLACEMENT.includes(value)
  }),
  /**
   * @name showArrow
   * @description Whether to display arrow
   * @type { boolean }
   * @default true
   */
  showArrow: setBooleanProps(true)
}

export type PopoverPropsType = ExtractPropTypes<typeof popoverProps>
