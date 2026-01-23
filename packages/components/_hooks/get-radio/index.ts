import type { DkRadioType } from '../../dkradio/src/props'
import { toRaw, type ComputedRef, type CSSProperties } from 'vue'
import type { ClassListName } from '../../_interface'
import { getColor, getStyleList } from '..'

interface RadioReturnsType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getRadio = (props: DkRadioType): RadioReturnsType => {
  const data = toRaw(props)

  const { classes } = getStyleList(data, 'radio')

  const defaultClassList: string[] = ['disabled', 'border']

  const classList = classes([...defaultClassList], 'dk-radio')

  const styleList = (): CSSProperties => {
    const { size, checkedColor, uncheckedColor } = data
    const targetSize: Record<string, string> = {
      large: '18px',
      medium: '16px',
      small: '14px',
      mini: '12px'
    }
    
    const style: CSSProperties = {
      '--radio-size': targetSize[size] || targetSize['small'],
      '--radio-checked-color': checkedColor || '#409eff',
      '--radio-unchecked-color': uncheckedColor || '#dcdfe6',
      '--radio-hover-color': getColor(checkedColor || '#dcdfe6').getDeepen(0.1)
    }
    return {
      ...style
    }
  }

  return {
    classList,
    styleList: styleList()
  }
}
