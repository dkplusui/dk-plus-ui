import type { ExtractPropTypes } from 'vue'
import {
  DK_SIZE,
  DK_INPUT_TYPE,
  DK_INPUT_PERSONALITY_TYPE,
  DK_INPUT_STATUS
} from '../../_tokens'
import type { DkPlusAlign } from '../../_interface'

import {
  setBooleanProps,
  setStringProp,
  setFunction,
  setStringNumberProps
} from '../../_utils'
import type {
  dkPlusSize,
  dkInputType,
  MouseEventType,
  KeyboardEventType,
  dkInputPersonalityType,
  dkInputStatusType
} from '../../_interface'

export const dkInputProps = {
  /**
   * @name status
   * @property Set status of the input box.
   * @default default
   */
  status: setStringProp<dkInputStatusType>(null, (val: dkInputStatusType): boolean => {
    return DK_INPUT_STATUS.includes(val)
  }),
  /**
   * @name jumpLabelText
   * @type {string}
   * @description Set jump label text
   */
  // jumpLabelText: setStringProp(),
  /**
   * @name labelText
   * @description Set label text
   * @default ''
   */
  labelText: setStringProp(),
  /**
   * @name personalityType
   * @description Set personality type of the input box
   * @default underline
   */
  personalityType: setStringProp<dkInputPersonalityType>(
    null,
    (val: dkInputPersonalityType): boolean => {
      return DK_INPUT_PERSONALITY_TYPE.includes(val)
    }
  ),
  /**
   * @name personality
   * @description Set personality properties of the input box
   * @default false
   */
  personality: setBooleanProps(),
  border: setStringProp(),
  align: setStringProp<DkPlusAlign>('left'),
  onEnter: setFunction<KeyboardEventType>(),
  onPrependClick: setFunction<MouseEventType>(),
  onAppendClick: setFunction<MouseEventType>(),
  iconSize: setStringNumberProps(),
  /** textColor */
  textColor: setStringProp(),

  /** borderRadius */
  borderRadius: setStringNumberProps(),
  /** fontSize */
  fontSize: setStringNumberProps(),
  /** input width */
  width: setStringNumberProps(),

  /** input height */
  height: setStringNumberProps(),
  /** input border color */
  borderColor: setStringProp(),
  /** input focus border color */
  focusBorderColor: setStringProp(),
  /** input hover border color */
  hoverBorderColor: setStringProp(),

  /** Whether display password */
  showPassword: setBooleanProps(),
  /**
   * @name prependText Prefix content
   * @description Priority Order:  prepend(slot) > icon > text
   */
  prependText: setStringProp(),
  /**
   * @name appendText Append content
   * @description Priority order:  prepend(slot) > icon > text
   */
  appendText: setStringProp(),
  /**
   * @name prependIcon Prepend icon
   * @description Priority order: prepend(slot) > icon > text
   */
  prependIcon: setStringProp(),
  /**
   * @name appendIcon Append icon
   * @description Priority order: prepend(slot) > icon > text
   */
  appendIcon: setStringProp(),
  /** Append background color */
  appendBackground: setStringProp(),
  /** Append text color */
  appendColor: setStringProp(),
  /** input box content */
  modelValue: setStringNumberProps(),
  /**
   * Input box type
   * @default text
   * @param { string } type [text]
   * @param { string } type [number]
   * @param { string } type [password]
   * @param { string } type [textarea]
   * @returns { string } Returns a string, default: text
   */
  type: setStringProp<dkInputType>('text', (val: dkInputType): boolean => {
    return DK_INPUT_TYPE.includes(val)
  }),
  /**
   * 输入框尺寸
   * @default small
   * @param { string } type [large]
   * @param { string } type [medium]
   * @param { string } type [small]
   * @param { string } type [mini]
   * @returns { string } Returns a string, default: small
   */
  size: setStringProp<dkPlusSize>(null, (val: dkPlusSize) => {
    return DK_SIZE.includes(val)
  }),
  /** Whether input box disabled */
  disabled: setBooleanProps(),
  /** Whether display clear button */
  clearable: setBooleanProps(),
  /** Whether input box readonly */
  readonly: setBooleanProps(),
  /** Tip message */
  placeholder: setStringProp(),
  /** Whether display length limit */
  showLengthLimit: setBooleanProps(),
  /** Max length */
  maxlength: setStringProp(),
  /** Min length */
  minlength: setStringProp(),
  /** Whether display limit */
  showWordLimit: setBooleanProps(),
  /** Prefix icon */
  prefixIcon: setStringProp(),
  /** Suffix icon */
  suffixIcon: setStringProp(),
  rows: setStringNumberProps(),
  maxRows: setStringNumberProps(),
  /** Auto height */
  autosize: setBooleanProps(),
  /** Whether display character statistics */
  showLength: setBooleanProps()
} as const
export type DkInputProps = ExtractPropTypes<typeof dkInputProps>
