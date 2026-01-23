import { computed, toRaw, useSlots, reactive } from 'vue'
import { getColor, setSize, getStyleList } from '..'
import { DK_INPUT_PERSONALITY_TYPE, DK_INPUT_STATUS } from '../../_tokens'
import type { CSSProperties, ComputedRef, Slots } from 'vue'
import type { DkInputProps } from './../../dkinput/src/props'
import type { DataType, propDataModel } from '../../dkinput/src/type'
import type { dkInputType, ClassListName } from '../../_interface'

/**
 * @name getInputGlobalType
 * @Time 2023年05月05日
 * @param { dkInputType | null | undefined } [type] 组件的类型
 * @returns getInputGlobalType 所需要的 props 参数类型接口
 */

export interface getInputGlobalType {
  type?: dkInputType | null
}

export interface iSGetInputType {
  classList: ComputedRef<ClassListName>
  styleList: ComputedRef<CSSProperties>
  wrapperClassList: ComputedRef<ClassListName>
  innerClassList: ComputedRef<ClassListName>
  clearableClassList: ComputedRef<ClassListName>
  pendStyleList: ComputedRef<CSSProperties>
}

/**
 * @name getInput
 * @param props
 * @description 获取input组件的类名和样式
 * @returns
 */
export const getInput = (props: DkInputProps): iSGetInputType => {
  /**
   * @name defaultClassList
   * @description 期望转换的类名
   */
  let defaultClassList = ['type', 'size', 'personality', 'personalityType']

  /**
   * @name data
   * @description 创建一个新的props对象 用于修改props
   */
  const data = { ...toRaw(props) }

  const slot: Slots = useSlots()

  const prepend = props.prependText || props.prependIcon || slot.prepend
  const append = props.appendText || props.appendIcon || slot.append

  if (!data.personality && append && prepend) {
    data.appendText = 'wrapper-pend_text'
    data.prependText = ''
  } else {
    if (!data.personality && append) {
      data.appendText = 'wrapper-append_text'
    }
    if (!data.personality && prepend) {
      data.prependText = 'wrapper-prepend_text'
    }
  }

  /**
   * @name params
   * @description 组件传来的props和准备特殊类名合并的处理
   */
  const params = data

  /**
   * @name isDisabled
   * @description 是否禁用
   */
  const isDisabled = computed((): boolean => {
    return data.disabled
  })
  if (isDisabled.value) {
    defaultClassList = [...defaultClassList, 'disabled']
  }

  let inputClassName = 'input'
  if (data.personality && DK_INPUT_PERSONALITY_TYPE.includes(data.personalityType)) {
    inputClassName = 'input-personality'
  }
  const { classes } = getStyleList(params, inputClassName)

  const classList = classes([...defaultClassList], 'dk-' + inputClassName)

  const styleList = computed((): CSSProperties => {
    const {
      width,
      height,
      fontSize,
      borderRadius,
      textColor,
      iconSize,
      align,
      borderColor,
      focusBorderColor,
      border,
      labelText
    } = data

    let borderColorCopy = borderColor
    let focusBorderColorCopy = focusBorderColor

    const statusColorList = {
      warning: '#faad14',
      error: '#ff4d4f'
    }

    if (data.status && DK_INPUT_STATUS.includes(data.status)) {
      borderColorCopy = statusColorList[data.status]
      focusBorderColorCopy = statusColorList[data.status]
    }

    type BorderColorType = string | number | undefined | null
    let inputBorder: BorderColorType = 'transparent'
    let hoverBorder: BorderColorType = 'transparent'
    let focusColor: BorderColorType = 'transparent'
    const getBorder = (value: string): void => {
      if (value === 'none') {
        return
      }
      inputBorder = borderColorCopy ? getColor(borderColorCopy).getDodge(0) : null
      hoverBorder = borderColorCopy ? getColor(borderColorCopy).getDodge(0.4) : null
      focusColor = focusBorderColorCopy
        ? getColor(focusBorderColorCopy).getDodge(0)
        : null
    }
    getBorder(border)

    const defaultStyle: Record<string, string> = {
      '--input-align': align || 'left'
    }

    if (labelText) {
      defaultStyle['--input-margin-top'] = fontSize ? setSize(fontSize) : '18px'
    }
    if (focusBorderColorCopy) {
      defaultStyle['--input-focus-border'] = focusColor
    }
    if (borderColorCopy) {
      defaultStyle['--input-border'] = inputBorder
      defaultStyle['--input-hover-border'] = hoverBorder
    }
    if (width) {
      defaultStyle['--input-width'] = setSize(width)
    }

    if (height) {
      defaultStyle['--input-height'] = setSize(height)
    }

    if (fontSize) {
      defaultStyle['--input-font-size'] = setSize(fontSize)
    }

    if (borderRadius) {
      defaultStyle['--input-border-radius'] = setSize(borderRadius)
    }

    if (textColor) {
      defaultStyle['--input-text-color'] = getColor(textColor).getDeepen(0)
    }

    if (iconSize) {
      defaultStyle['--input-icon-size'] = setSize(iconSize)
    }
    return defaultStyle
  })

  /**
   * @name defaultWrapperClassList
   * @description 期望被转换的wrapper类名
   */
  let defaultWrapperClassList = ['appendText', 'prependText', 'readonly']

  if (data.status && DK_INPUT_STATUS.includes(data.status)) {
    defaultWrapperClassList = [...defaultWrapperClassList, 'status']
  }

  const wrapperClassList = classes(
    [...defaultWrapperClassList],
    `dk-${inputClassName}-wrapper`
  )

  /**
   * @name defaultInnerClassList
   * @description 期望被转换的inner类名
   */
  const innerClasses = getStyleList(params, 'input').classes
  const defaultInnerClassList: string[] = []
  const innerClassList = innerClasses(
    [...defaultInnerClassList],
    `dk-${inputClassName}_inner`
  )

  /**
   * @name defaultClearableStyleList
   * @description 期望被转换的clearable类名
   */
  const defaultClearableStyleList = ['clearable']
  const clearableClass = getStyleList(params, 'input').classes
  const clearableClassList = clearableClass([...defaultClearableStyleList], 'dk-input')

  const pendStyleList = computed((): CSSProperties => {
    const { appendBackground, appendColor } = data
    const pendStyleList = {
      '--pend-background': appendBackground
        ? getColor(appendBackground).getDeepen(0)
        : null,
      '--pend-hover-background': appendBackground
        ? getColor(appendBackground).getDeepen(0.4)
        : null,
      '--pend-color': appendColor ? getColor(appendColor).getDeepen(0) : null
    } as CSSProperties
    return pendStyleList
  })

  return {
    classList,
    styleList,
    wrapperClassList,
    innerClassList,
    clearableClassList,
    pendStyleList
  }
}

/**
 * @name getBooleanAnd 获取布尔值 与
 * @param {boolean[]} target
 * @returns {boolean}
 */
export const getBooleanAnd = (target: boolean[]): boolean => {
  if (target.length == 0) return false
  const result = target.find(item => !item)
  return result === undefined
}

/**
 * @name getBooleanOr 获取或
 * @param {boolean[]} target
 * @returns {boolean}
 */
export const getBooleanOr = (target: boolean[]): boolean => {
  if (target.length == 0) return false
  const result = target.find(item => item)
  return result !== undefined
}

/**
 * @name getNull 获取字符串、数组长度
 * @param {string | array} target
 * @returns {boolean}
 */
export const getNull = (target: string | [] | number): boolean => {
  if (!target) return false
  if (Array.isArray(target)) {
    if (target.length === 0) return false
  } else {
    target = target.toString().trim()
    if (typeof target === 'string') {
      if (target.length === 0) return false
    }
  }
  return true
}

/**
 * @name verifyInputType Get input type
 * @time July 12, 2023
 * @returns {dkInputType}
 * @param {dkInputType} typeProp input type
 * @param {boolean} passwordShowOrHide password show or hide
 */
export const verifyInputType = (
  typeProp: dkInputType,
  passwordShowOrHide: boolean
): dkInputType => {
  let type = typeProp
  if (typeProp === 'password') {
    if (passwordShowOrHide) {
      type = 'text'
    } else {
      type = 'password'
    }
  } else {
    type = typeProp
  }
  return type
}

/**
 * @name isShowLength
 * @time July 12, 2023
 * @param maxlengthProp The maximum length
 * @param minlengthProp  The minimum length
 * @param disabledProp  Whether to disable
 * @returns
 */
export const isShowLength = (
  maxlengthProp: number | string,
  minlengthProp: number | string,
  disabledProp: boolean
): boolean => {
  const isLength = getBooleanOr([getNull(maxlengthProp), getNull(minlengthProp)])
  return getBooleanAnd([isLength, !disabledProp])
}

/**
 * @name getIsClear Whether to display the clear button
 * @time July 13, 2023
 * @param clearable Whether to display the clear button
 * @param disabledProp Whether to disable
 * @param value input type
 * @returns {boolean}
 */
export const getIsClear = (
  clearable: boolean,
  disabledProp: boolean,
  value: dkInputType
): boolean => {
  const isTextarea = value !== 'textarea'
  const isPassword = value !== 'password'
  return getBooleanAnd([!disabledProp, isTextarea, isPassword, clearable])
}

/**
 * @name getValue
 * @time July 13, 2023
 * @description Get the value of the input box
 * @param value
 * @returns
 */
export const getValue = (
  value: string | number,
  prependText: string,
  prependIcon: string,
  appendText: string,
  appendIcon: string
): string => {
  if (typeof value === 'number') {
    value = value.toString()
  }
  let val = value
  if (prependText && !prependIcon) {
    const reg = new RegExp(`^${prependText}`)
    val = val.replace(reg, '')
  }

  if (appendText && !appendIcon) {
    const reg = new RegExp(`${appendText}$`)
    val = val.replace(reg, '')
  }
  return val
}

/**
 * @name getPendValue
 * @time July 13, 2023
 * @description Get the value of prepend and append
 * @param value input value
 * @param prependText prepend text
 * @param prependIcon prepend icon
 * @param appendText append text
 * @param appendIcon append icon
 * @returns
 */
export const getPendValue = (
  value: string | number,
  prependText: string,
  prependIcon: string,
  appendText: string,
  appendIcon: string
): string => {
  if (typeof value === 'number') {
    value = value.toString()
  }
  let val = value
  if (prependText && !prependIcon) {
    const reg = new RegExp(`^${prependText}`)
    if (!reg.test(value)) {
      val = prependText + value
    }
  }

  if (appendText && !appendIcon) {
    const reg = new RegExp(`${appendText}$`)
    if (!reg.test(value)) {
      val = val + appendText
    }
  }
  return val
}

/**
 * @name getShowLengthProp
 * @time July 13, 2023
 * @description Whether to display the length
 * @param propData
 * @param inputType
 * @returns
 */
const getShowLengthProp = (propData: propDataModel, inputType: dkInputType): boolean => {
  const isShowLen = propData.showLengthProp
  if (!isShowLen) return false
  let result = false
  const isTextarea = inputType === 'textarea'
  const isText = inputType === 'text'
  const textOrTextarea = getBooleanOr([isTextarea, isText])
  const isMaxlength = !propData.maxlengthProp
  result = getBooleanAnd([textOrTextarea, isMaxlength])
  return result
}

export const setData = (
  propData: propDataModel,
  slots: Slots,
  inputType: dkInputType
): DataType => {
  const data = reactive<DataType>({
    isPrepend: getBooleanOr([
      !!slots.prepend,
      getNull(propData.prependText),
      !!propData.prependIcon
    ]),
    isPrependIcon: getBooleanAnd([getNull(propData.prependIcon), !slots.prepend]),
    isAppendIcon: getBooleanAnd([!slots.append, !!propData.appendIcon]),
    isAppend: getBooleanOr([
      !!slots.append,
      getNull(propData.appendText),
      !!propData.appendIcon
    ]),
    isPrefixIcon: getBooleanAnd([!!propData.prefixIcon, !slots.prefix]),
    isAppendTextLen: getNull(propData.appendText),
    isPrefix: getBooleanOr([!!slots.prefix, !!propData.prefixIcon]),
    isClear: getIsClear(propData.clearable, propData.disabledProp, inputType),
    inputmode: inputType === 'number' ? 'numeric' : 'text',
    isSuffix: getBooleanOr([!!slots.suffix, !!propData.suffixIcon]),
    isSuffixIcon: getBooleanAnd([!!propData.suffixIcon, !slots.suffix]),
    isShowPassword: getBooleanAnd([inputType === 'password', propData.showPassword]),
    isLength: isShowLength(
      propData.maxlengthProp,
      propData.minlengthProp,
      propData.disabledProp
    ),
    rows: propData.rowsProp || 2,
    showLength: getShowLengthProp(propData, inputType),
    labelText: propData.labelTextProp,
    personality: propData.personalityProp
  })
  return data
}

/**
 * @name setPropData
 * @time July 14, 2023
 * @description Set props data
 * @param props
 * @returns {propDataModel}
 */
export const setPropData = (props: DkInputProps): propDataModel => {
  const propData = reactive<propDataModel>({
    prependText: props.prependText,
    appendText: props.appendText,
    placeholder: props.placeholder,
    clearable: props.clearable,
    showPassword: props.showPassword,
    prependIcon: props.prependIcon,
    appendIcon: props.appendIcon,
    disabledProp: props.disabled,
    typeProp: props.type,
    prefixIcon: props.prefixIcon,
    suffixIcon: props.suffixIcon,
    maxlengthProp: props.maxlength,
    minlengthProp: props.minlength,
    autosizeProp: props.autosize,
    rowsProp: props.rows,
    readonlyProp: props.readonly,
    showLengthProp: props.showLength,
    labelTextProp: props.labelText,
    personalityProp: props.personality
  })

  return propData
}
