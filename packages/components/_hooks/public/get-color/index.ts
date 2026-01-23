/**
 * @name get-color
 * @Time 2023年05月05日
 * @author dk-plus-ui(范先生) <https://github.com/isMrFan>
 * @param { Function } getDeepen 加深方法
 * @param { Function } getDodge 减淡方法
 * @description 颜色处理的hooks 主要用于颜色的加深和减淡 防止样式直接控制导致CSS样式嘎嘎多
 */

export interface getColorType {
  getDeepen: (value?: number) => string
  getDodge: (value?: number) => string
  hexToRgba: (opacity: number) => string
  rgbaToHex: () => string
}

const englishColor = {
  white: '#FFFFFF',
  silver: '#C0C0C0',
  gray: '#808080',
  black: '#000000',
  red: '#FF0000',
  maroon: '#800000',
  yellow: '#FFFF00',
  olive: '#808000',
  lime: '#00FF00',
  green: '#008000',
  aqua: '#00FFFF',
  teal: '#008080',
  blue: '#0000FF',
  navy: '#000080',
  fuchsia: '#FF00FF',
  purple: '#800080'
}

export type Color = keyof typeof englishColor | string

/**
 * @name get-color
 * @param { string } color 需要计算的颜色
 * @returns { Object } 加深原色 减淡颜色
 * @param { Function } getDeepen 加深方法
 * @param { Function } getDodge 减淡方法
 * @param { Function } hexToRgba Hex convert to rgba
 * @param { Function } rgbaToHex Rgba to hex
 * @description 根据传入的值计算颜色的加深和减淡 目前支持16进制色号 rgb色号 rgba色号 英文色号
 */

export const getColor = (color: Color): getColorType => {
  /**
   * @name isHexColor
   * @returns { boolean }
   * @description 判断是是否为16进制色号
   */
  const isHexColor = /^#([0-9a-f]{3}){1,2}$/i.test(color)
  /**
   * @name isRgbColor
   * @returns { boolean }
   * @description 判断是是否为rgb色号
   */
  const isRgbColor = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i.test(color)
  /**
   * @name isRgbaColor
   * @returns { boolean }
   * @description 判断是是否为rgba色号
   */
  const isRgbaColor =
    /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0?\.\d+|1)\)$/i.test(color)
  /**
   * @name isColors
   * @description 数组中包含的英文色号
   */
  // const isColors: string[] = [
  //   'white',
  //   'silver',
  //   'gray',
  //   'black',
  //   'red',
  //   'maroon',
  //   'yellow',
  //   'olive',
  //   'lime',
  //   'green',
  //   'aqua',
  //   'teal',
  //   'blue',
  //   'navy',
  //   'fuchsia',
  //   'purple'
  // ]

  // const isEnglishColor = isColors.includes(color.toLowerCase())
  const isEnglishColor = Object.keys(englishColor).includes(color)

  /**
   * @name hexToRgb
   * @returns { string[] } rgb 色号数组
   * @description 将十六进制色号转换为 rgb
   */
  const hexToRgb = (hxrColor = ''): string[] => {
    let code: string =
      hxrColor === '' ? color.replace('#', '') : hxrColor.replace('#', '')
    if (code.length === 3) {
      code = code[0] + code[0] + code[1] + code[1] + code[2] + code[2]
    }
    const hex: string[] = code.match(/../g) as string[]
    for (let i = 0; i < hex.length; i++) {
      hex[i] = parseInt(hex[i], 16).toString()
    }

    return hex
  }
  /**
   * @name rgbToHex
   * @returns { string[] } rgb 色号数组
   * @description 将 rgb 色号转换为十六进制色号
   */
  const rgbToHex = (...rgb: string[]): string => {
    const hex: string[] = [...rgb]
    for (let i = 0; i < hex.length; i++) {
      if (hex[i].length === 1) {
        hex[i] = '0' + hex[i]
      }
    }
    return '#' + hex.join('')
  }
  /**
   * @name getDeepen
   * @param { number } level 加深的程度
   * @returns { string } 16进制色号
   * @description 加深为原色的颜色
   */
  const getDeepen = (level = 0): string => {
    if (isHexColor) {
      const rgb: string[] = hexToRgb()
      for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16)
      }
      return rgbToHex(...rgb)
    }
    if (isRgbColor) {
      const rgbString = color
      const rgb: string[] = []
      rgb[0] = rgbString.split('(')[1].split(',')[0]
      rgb[1] = rgbString.split('(')[1].split(',')[1]
      rgb[2] = rgbString.split('(')[1].split(',')[2].split(')')[0]
      for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16)
      }
      return rgbToHex(...rgb)
    }
    if (isRgbaColor) {
      const rgbaString = color
      const rgb: string[] = []
      let a = ''
      rgb[0] = rgbaString.split('(')[1].split(',')[0]
      rgb[1] = rgbaString.split('(')[1].split(',')[1]
      rgb[2] = rgbaString.split('(')[1].split(',')[2][0]
      a = rgbaString.split('(')[1].split(',')[3].split(')')[0]
      a = Math.round(Number(a) * 255)
        .toString(16)
        .padStart(2, '0')
      for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16)
      }
      rgb.push(a)
      return rgbToHex(...rgb)
    }

    // 若isEnglishColor 为true则断言color为englishColor的枚举key
    if (isEnglishColor) {
      const HexColor: string = englishColor[color as Exclude<Color, string>]
      const rgb: string[] = hexToRgb(HexColor)
      for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Number(rgb[i]) * (1 - level)).toString(16)
      }
      return rgbToHex(...rgb)
    }
    if (!isHexColor && !isRgbColor && !isRgbaColor && !isEnglishColor) {
      throw new Error(`dk-plus -> getDeepen -> ${color} is not a color`)
    }
    return color
  }
  /**
   * @name getDeepen
   * @param { number } level 加深的程度
   * @returns { string } 16进制色号
   * @description 减淡后的颜色
   */
  const getDodge = (level = 0): string => {
    if (isHexColor) {
      const rgb: string[] = hexToRgb()
      for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16)
      }
      return rgbToHex(...rgb)
    }
    if (isRgbColor) {
      const rgbString = color
      const rgb: string[] = []
      rgb[0] = rgbString.split('(')[1].split(',')[0]
      rgb[1] = rgbString.split('(')[1].split(',')[1]
      rgb[2] = rgbString.split('(')[1].split(',')[2].split(')')[0]
      for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16)
      }
      return rgbToHex(...rgb)
    }
    if (isRgbaColor) {
      const rgbaString = color
      const rgb: string[] = []
      let a = ''
      rgb[0] = rgbaString.split('(')[1].split(',')[0]
      rgb[1] = rgbaString.split('(')[1].split(',')[1]
      rgb[2] = rgbaString.split('(')[1].split(',')[2][0]
      a = rgbaString.split('(')[1].split(',')[3].split(')')[0]
      a = Math.round(Number(a) * 255)
        .toString(16)
        .padStart(2, '0')
      for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16)
      }
      rgb.push(a)
      return rgbToHex(...rgb)
    }

    // 若isEnglishColor 为true则断言color为englishColor的枚举key
    if (isEnglishColor) {
      const HexColor: string = englishColor[color as Exclude<Color, string>]
      const rgb: string[] = hexToRgb(HexColor)
      for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor((255 - Number(rgb[i])) * level + Number(rgb[i])).toString(16)
      }
      return rgbToHex(...rgb)
    }
    if (!isHexColor && !isRgbColor && !isRgbaColor && !isEnglishColor) {
      throw new Error(`dk-plus -> getDodge -> ${color} is not a color`)
    }
    return color
  }

  /**
   * @name hexToRgba
   * @description Hex convert to rgba
   * @param { number } opacity Opacity
   * @returns { string } rgba color
   */
  const hexToRgba = (opacity: number): string => {
    const hexColor = color.replace('#', '')
    const r = parseInt(hexColor.substring(0, 2), 16)
    const g = parseInt(hexColor.substring(2, 4), 16)
    const b = parseInt(hexColor.substring(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  /**
   * @name rgbaToHex
   * @description Rgba to hex 
   * @returns
   */
  const rgbaToHex = (): string => {
    const rgbaValues = color.replace(/[rgba()]/g, '').split(',')

    const r = parseInt(rgbaValues[0])
    const g = parseInt(rgbaValues[1])
    const b = parseInt(rgbaValues[2])

    const rHex = r.toString(16).padStart(2, '0')
    const gHex = g.toString(16).padStart(2, '0')
    const bHex = b.toString(16).padStart(2, '0')

    const hexColor = `#${rHex}${gHex}${bHex}`

    return hexColor
  }

  return {
    getDeepen,
    getDodge,
    hexToRgba,
    rgbaToHex
  }
}
