import { toRaw, type CSSProperties, type ComputedRef } from 'vue'
import type { SwitchPropsType } from '../../dkswitch/src/props'
import { getColor, getStyleList, setSize } from '..'
import type { ClassListName } from '../../_interface'

interface GetSwitchReturnsType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
}

export const getSwitch = (props: SwitchPropsType): GetSwitchReturnsType => {
  const data = toRaw(props)
  data

  const { classes } = getStyleList(data, 'switch')

  const defaultClass = ['dk-switch', 'disabled']

  const classList = classes([...defaultClass], 'dk-switch')

  const styleList = (): CSSProperties => {
    const { size, checkedColor, uncheckedColor, width } = data

    const targetSize: Record<string, string[]> = {
      large: ['56px', '28px'],
      medium: ['48px', '24px'],
      small: ['40px', '20px'],
      mini: ['36px', '18px']
    }

    const style = {
      '--switch-width': width ? setSize(width) : 'fit-content',
      '--switch-min-width': size
        ? targetSize[size][0] || targetSize['small'][0]
        : targetSize['small'][0],
      '--switch-height': size
        ? targetSize[size][1] || targetSize['small'][1]
        : targetSize['small'][1],
      '--switch-checked-color': getColor(checkedColor || '#409EFF').getDeepen(0),
      '--switch-unchecked-color': getColor(uncheckedColor || '#C0CCDA').getDeepen(0)
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
