import { computed } from 'vue'
import type { CSSProperties, ComputedRef } from 'vue'
// import { sizeChange } from '../../_utils'
// import { getStyleList, getColor } from '..'
// import type { ClassListName } from '../../_interface'
import type { DkAlertProps } from '../../dkalert/src/props'
export interface getAlertType {
  // classList: ComputedRef<ClassListName>
  styleList: ComputedRef<CSSProperties>
  isSuccess: boolean
}

export const getAlert = (props: DkAlertProps): getAlertType => {

  const { type } = props;
  const isSuccess: boolean = type === 'success'
  const styleList = computed((): CSSProperties => {

    const defaultStyle = {
      // '--alert-color': 'red',
      // '--alert-font-size': 14,
      // '--alert-background': 'blue'
    }
    return defaultStyle
  })

  return {
    isSuccess,
    styleList
  }
}
