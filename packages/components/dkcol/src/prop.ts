import type { ExtractPropTypes } from 'vue'
import { setStringNumberProps } from '../../_utils'

export const dkColProps = {
  /**
   * @name span
   * @description Number of columns occupied by the grid
   * @type number | string
   */
  span: setStringNumberProps(),
  /**
   * @name offset
   * @description Number of columns that the grid moves to the right
   * @type number | string
   */
  offset: setStringNumberProps()
}

export type DkColPropsType = ExtractPropTypes<typeof dkColProps>
