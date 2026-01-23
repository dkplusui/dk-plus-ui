import type { ExtractPropTypes } from 'vue'
import { setStringNumberProps, setStringProp } from '../../_utils'
import type { dkPlusJustify } from '../../_interface'
import { DK_JUSTIFY } from '../../_tokens'

export const dkRowProps = {
  /**
   * @name gutter
   * @description Grid spacing
   * @type { string | number }
   * @default 0
   */
  gutter: setStringNumberProps(),
  /**
   * @name justify
   * @description Horizontal arrangement
   */
  justify: setStringProp<dkPlusJustify>('start', (value: dkPlusJustify): boolean => {
    return DK_JUSTIFY.includes(value)
  })
}

export type DkRowPropsType = ExtractPropTypes<typeof dkRowProps>
