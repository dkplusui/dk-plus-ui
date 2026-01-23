import { toRaw } from 'vue'
import type { ComputedRef, CSSProperties } from 'vue'
import type { DkScrollbarType } from '../../dkscrollbar/src/props'
import type { ClassListName } from '../../_interface'
import { getStyleList, setSize, getColor } from '..'

interface LinkType {
  classList: ComputedRef<ClassListName>
  styleList: CSSProperties
  wrapperClassList: ComputedRef<ClassListName>
}

export const getDkScroll = (props: DkScrollbarType): LinkType => {
  const data = { ...toRaw(props) }

  const { classes } = getStyleList(data, 'scrollbar')

  const defaultClassList: string[] = []
  const classList = classes([...defaultClassList], 'dk-scrollbar')

  const styleList = (): CSSProperties => {
    const { width, height, barWidth, trackColor, thumbColor, thumbRadius } = data
    const thumb = thumbColor || '#c1c1c1'

    return {
      '--scrollbar-width': width && setSize(width),
      '--scrollbar-height': height && setSize(height),
      '--scrollbar-bar-width': barWidth && setSize(barWidth),
      '--scrollbar-track-color': trackColor && getColor(trackColor).getDodge(0),
      '--scrollbar-thumb-radius': thumbRadius && setSize(thumbRadius),
      '--scrollbar-thumb-color': getColor(thumb).hexToRgba(0)
    }
  }

  const defaultWrapperClassList: string[] = []
  const wrapperClassList = classes([...defaultWrapperClassList], 'dk-scrollbar-wrapper')

  return {
    classList,
    styleList: styleList(),
    wrapperClassList
  }
}
