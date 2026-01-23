/**
 * @name get-button
 * @Time 2023年04月28日
 * @description 按钮用的hooks
 * CSSProperties：表示 CSS 样式属性的键值对集合，用于指定 DOM 元素的样式；
 * ComputedRef：表示一个计算属性的引用，即一个响应式的、只读的值；
 * useSlots：是一个 Vue 3 中的 Hook，用于获取组件的插槽内容；
 * Slots：表示一个插槽对象，包含了组件中定义的所有插槽内容。
 */
import { useSlots, computed, reactive, toRefs } from 'vue'
import type { CSSProperties, ComputedRef, Slots } from 'vue'
import { getStyleList, getColor } from '..'
import { sizeChange } from '../../_utils'
import type { ClassListName } from '../../_interface'
import type { DkButtonProps } from '../../dkbutton/src/props'

/**
 * @name get-button
 * @Time 2023年04月28日
 * @description 按钮用的hooks
 */

/**
 * @name getButtonType
 * @Time 2023年04月28日
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */

export interface getButtonType {
  classList: ComputedRef<ClassListName>
  styleList: ComputedRef<CSSProperties>
  personaClassList: ComputedRef<ClassListName>
  personalityStylist: ComputedRef<CSSProperties>
}

/**
 * @name getButton
 * @Time 2023年05月04日
 * @author dk-plus-ui(范先生) <https://github.com/isMrFan>
 * @description button组件方法封装
 * @return classList 传统按钮类名
 * @return styleList 传统按钮style
 * @return personaClassList 个性按钮类名
 * @return personalityStylist 个性按钮style
 */
interface Params {
  iconSlot?: boolean
  afterIconSlot?: boolean
}
type MergedParams = Params & DkButtonProps

export const getButton = (props: MergedParams): getButtonType => {
  /**
   * @name slot
   * @description 获取当前组件的插槽
   */
  const slot: Slots = useSlots()
  const isSlot= computed(
    (): boolean => !(slot.default && slot.default() && slot.default()[0].children)
  )

  /**
   * @name defaultClassList
   * @description 默认转换的类名
   */
  let defaultClassList = [
    'type',
    'size',
    'disabled',
    'loading',
    'round',
    'circle',
    'textDecoration',
    'shadow',
    'ripples',
    'diffusion'
  ]
  /**
   * @name params
   * @description 组件传来的props和准备特殊类名合并的处理
   */
  const params = reactive({
    ...toRefs(props)
  })
  // console.log('params', params);

  /**
   * @description 判断组件是否有插槽有则添加对应的类名用于样式处理
   */
  if (isSlot.value) {
    const iconSlot = !!slot.icon
    if (iconSlot) {
      defaultClassList = [...defaultClassList, ...['iconSlot']]
      params['iconSlot'] = true
    }
    const afterIconSlot = !!slot.afterIcon
    if (afterIconSlot) {
      defaultClassList = [...defaultClassList, ...['afterIconSlot']]
      params['afterIconSlot'] = true
    }
  }
  /**
   * @name classes
   * @description 进行类名的处理
   */
  const { classes, stylesList } = getStyleList(params, 'button')
  const classList = classes([...defaultClassList], 'button')
  /**
   * @name styleList
   * @description 样式自定义处理
   */
  const styleList = computed((): CSSProperties => {
    const { bgColor, fontColor, shadow, fontSize, diffusionBgColor } = props
    let defaultStyle = {
      '--button-color': fontColor,
      '--button-hover': fontColor ? getColor(props.fontColor).getDodge(0.4) : null,
      '--button-active': fontColor ? getColor(props.fontColor).getDeepen(0.4) : null,
      '--button-shadow': shadow,
      '--button-font-size': sizeChange(fontSize),
      '--button-hover-borderColor': bgColor
        ? getColor(props.bgColor).getDodge(0.4)
        : null,
      '--button-hover-background': bgColor ? getColor(props.bgColor).getDodge(0.4) : null,
      '--button-background': bgColor || null,
      '--button-ripples-BgColor': diffusionBgColor || null
    } as CSSProperties
    if (bgColor) {
      const bgStyle = {
        '--button-background': bgColor || null,
        '--button-hover': bgColor ? getColor(props.bgColor).getDeepen(0.4) : null,
        '--button-active': bgColor ? getColor(props.bgColor).getDeepen(0.2) : null
      } as CSSProperties
      defaultStyle = { ...defaultStyle, ...bgStyle }
    }
    return defaultStyle
  })
  /**
   * @name personaDefault
   * @description 默认个性按钮Class
   */
  const personaDefault = ['personalityType', 'personalitySize', 'disabled']
  /**
   * @name personaClassList
   * @description 个性按钮样Class名自定义处理
   */
  const personaClassList = classes([...personaDefault], 'button')
  /**
   * @name personalityStylist
   * @description 个性按钮样式自定义处理
   */
  const personalityStylist = computed((): CSSProperties => {
    const {
      personalityBorderColor,
      personalityBorderHoveColor,
      personalityBgColor,
      personalityBgHoveColor,
      personalityFontColor,
      personalityFontHoveColor,
      personalityBoxShadow,
      personalityBoxShadowHove,
      personalityReflect,
      fontSize
    } = props
    const defaultStyle = {
      '--border-color': stylesList(personalityBorderColor),
      '--button-borderColor-top': stylesList(personalityBorderColor, 0),
      '--button-borderColor-right': stylesList(personalityBorderColor, 1),
      '--button-borderColor-bottom': stylesList(personalityBorderColor, 2),
      '--button-borderColor-left': stylesList(personalityBorderColor, 3),
      '--button-borderColor-top-hover': stylesList(personalityBorderHoveColor, 0),
      '--button-borderColor-right-hover': stylesList(personalityBorderHoveColor, 1),
      '--button-borderColor-bottom-hover': stylesList(personalityBorderHoveColor, 2),
      '--button-borderColor-left-hover': stylesList(personalityBorderHoveColor, 3),
      '--button-bgColor': personalityBgColor || null,
      '--button-bgColor-hover': personalityBgHoveColor || null,
      '--button-FontColor': personalityFontColor || null,
      '--button-FontColor-hover': personalityFontHoveColor || null,
      '--button-box-shadow': personalityBoxShadow || null,
      '--button-box-shadow-hover': personalityBoxShadowHove,
      '--button-font-size': sizeChange(fontSize),
      '--button-box-reflect': personalityReflect || null
    } as CSSProperties
    return defaultStyle
  })
  return {
    classList,
    styleList,
    personaClassList,
    personalityStylist
  }
}
