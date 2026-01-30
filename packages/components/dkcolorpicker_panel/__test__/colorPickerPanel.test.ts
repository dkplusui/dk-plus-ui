import { describe, expect, it } from 'vitest'
import { hsvaToRgba, rgbaToHex, rgbaToHsva, parseToRgba, formatColor } from '../src/color'

describe('DkColorPickerPanel', () => {
  it('color utils: hsva -> rgba -> hex', () => {
    const rgba = hsvaToRgba({ h: 180, s: 100, v: 100, a: 1 })
    expect(rgbaToHex(rgba)).toBe('#00FFFF')
  })

  it('color utils: rgba -> hsva', () => {
    const hsva = rgbaToHsva({ r: 0, g: 255, b: 255, a: 0.5 })
    expect(Math.round(hsva.h)).toBe(180)
    expect(Math.round(hsva.s)).toBe(100)
    expect(Math.round(hsva.v)).toBe(100)
    expect(hsva.a).toBe(0.5)
  })

  it('parses hex/rgb strings', () => {
    expect(parseToRgba('#fff')?.r).toBe(255)
    expect(parseToRgba('#00FF00')?.g).toBe(255)
    expect(parseToRgba('rgb(255, 0, 0)')?.r).toBe(255)
    expect(parseToRgba('rgba(255, 0, 0, 0.5)')?.a).toBe(0.5)
  })

  it('formats output with format/showAlpha', () => {
    const rgba = { r: 64, g: 158, b: 255, a: 0.6 }
    expect(formatColor(rgba, 'hex', false)).toBe('#409EFF')
    expect(formatColor(rgba, 'rgb', false)).toBe('rgb(64, 158, 255)')
    expect(formatColor(rgba, 'rgb', true)).toBe('rgba(64, 158, 255, 0.6)')
  })
})
