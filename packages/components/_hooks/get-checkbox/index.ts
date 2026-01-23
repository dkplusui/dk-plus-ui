import type { ComputedRef, CSSProperties } from 'vue'
import type { ClassListName } from '../../_interface'
import { getStyleList } from '..'
import type { DkCheckboxType } from '../../dkcheckbox/src/props'
interface CheckboxType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getCheckbox = (prop: DkCheckboxType): CheckboxType => {
  const { classes } = getStyleList(prop, 'checkbox')
  const defaultClassList: string[] = ['indeterminate', 'disabled', 'border']
  
  if(prop.size){
    defaultClassList.push('size')
  }

  const classList = classes([...defaultClassList], 'dk-checkbox')
  
  const styleList = (): CSSProperties => {
    const { size } = prop
    const targetSize: Record<string, string> = {
      large: '18px',
      medium: '16px',
      small: '14px',
      mini: '12px'
    }

    const style: CSSProperties = {
      '--checkbox-color': '#606266',
      '--checkbox-font-size': targetSize[size] || '14px',
      '--checkbox-border-radius': '4px',
      '--checkbox-border': '2px solid #BEBEBE',
      '--checkbox-checked-color': '#3894ff',
      '--checkbox-bg-color': '#fff'
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
