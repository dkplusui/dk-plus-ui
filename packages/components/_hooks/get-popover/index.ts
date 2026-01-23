import type { ClassListName } from '../../_interface'
import { toRaw, type CSSProperties, type ComputedRef } from 'vue'
import { getStyleList, setSize } from '..'
import type { PopoverPropsType } from '../../dkpopover/src/props'
import { DK_PLACEMENT } from '../../_tokens'

interface GetPopoverReturnType {
  classList: ComputedRef<ClassListName>
  wrapperClassList: ComputedRef<ClassListName>
  styleList: CSSProperties
  setTop: Function
}

export const getPopover = (props: PopoverPropsType): GetPopoverReturnType => {
  const data = toRaw(props)
  const { classes } = getStyleList(props, 'popover')
  const defaultClass = ['dk-popover']

  const classList = classes([...defaultClass], 'dk-popover')
  
  const defaultWrapperClass = ['dk-popover-wrapper']
  if (DK_PLACEMENT.includes(data.placement)) {
    defaultWrapperClass.push('placement')
  }
  const wrapperClassList = classes([...defaultWrapperClass], 'dk-popover-wrapper')

  const styleList = (): CSSProperties => {
    const { width } = data
    
    const styleList = {
      '--popover-width': setSize(width || '240px')
    }
    return styleList
  }

  const setTop = (dom: Element): CSSProperties => {
    const height = dom.clientHeight
    const width = dom.clientWidth
    return {
      width: width,
      height: height
    }
  }

  return {
    classList,
    styleList: styleList(),
    wrapperClassList,
    setTop
  }
}
