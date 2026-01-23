import { toRaw } from 'vue'
import { getStyleList } from '..'
import type { CSSProperties, ComputedRef } from 'vue'
import type { DkColPropsType } from '../../dkcol/src/prop'
import type { ClassListName } from '../../_interface'

interface DkColType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getCol = (props: DkColPropsType): DkColType => {
  const data = { ...toRaw(props) }

  const { classes } = getStyleList(data, 'col')

  const defaultClassList: string[] = []
  const classList = classes(defaultClassList, 'dk-col')

  const styleList = (): CSSProperties => {
    const { span, offset } = data
    const style: Record<string, number | string> = {
      '--col-span': Math.abs(Number(span)) / 24 * 100 + '%' || '100%',
      '--col-margin-left': (Math.abs(Number(offset)) / 24) * 100 + '%' || 0
    }
    return style
  }
  return {
    classList,
    styleList: styleList()
  }
}
