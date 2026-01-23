import { toRaw } from 'vue'
import { getStyleList, setSize } from '../../_hooks'
import type { CSSProperties, ComputedRef } from 'vue'
import type { DkRowPropsType } from '../../dkrow/src/prop'
import type { ClassListName } from '../../_interface'

interface DkRowType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getRow = (props: DkRowPropsType): DkRowType => {
  const data = { ...toRaw(props) }

  const { classes } = getStyleList(data, 'row')

  const defaultClassList: string[] = []
  const classList = classes(defaultClassList, 'dk-row')

  const styleList = (): CSSProperties => {
    const { gutter, justify } = data
    const style: Record<string, string> = {
      '--row-width': '100%',
      '--row-gutter': setSize(gutter || '0px'),
      '--row-justify': justify
    }
    return style
  }
  return {
    classList,
    styleList: styleList()
  }
}
