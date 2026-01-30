import type { HSVA, RGBA, ColorFormat } from './type'

const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n))

const round = (n: number): number => Math.round(n)

const toHex2 = (n: number): string => clamp(round(n), 0, 255).toString(16).padStart(2, '0').toUpperCase()

export const hsvaToRgba = (hsva: HSVA): RGBA => {
  const h = ((hsva.h % 360) + 360) % 360
  const s = clamp(hsva.s, 0, 100) / 100
  const v = clamp(hsva.v, 0, 100) / 100
  const a = clamp(hsva.a, 0, 1)

  const c = v * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = v - c

  let rp = 0
  let gp = 0
  let bp = 0

  if (h < 60) {
    rp = c
    gp = x
    bp = 0
  } else if (h < 120) {
    rp = x
    gp = c
    bp = 0
  } else if (h < 180) {
    rp = 0
    gp = c
    bp = x
  } else if (h < 240) {
    rp = 0
    gp = x
    bp = c
  } else if (h < 300) {
    rp = x
    gp = 0
    bp = c
  } else {
    rp = c
    gp = 0
    bp = x
  }

  return {
    r: round((rp + m) * 255),
    g: round((gp + m) * 255),
    b: round((bp + m) * 255),
    a
  }
}

export const rgbaToHsva = (rgba: RGBA): HSVA => {
  const r = clamp(rgba.r, 0, 255) / 255
  const g = clamp(rgba.g, 0, 255) / 255
  const b = clamp(rgba.b, 0, 255) / 255
  const a = clamp(rgba.a, 0, 1)

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min

  let h = 0
  if (delta !== 0) {
    if (max === r) h = 60 * (((g - b) / delta) % 6)
    else if (max === g) h = 60 * ((b - r) / delta + 2)
    else h = 60 * ((r - g) / delta + 4)
  }
  if (h < 0) h += 360

  const s = max === 0 ? 0 : delta / max
  const v = max

  return {
    h,
    s: s * 100,
    v: v * 100,
    a
  }
}

export const rgbaToCss = (rgba: RGBA): string => {
  const r = clamp(round(rgba.r), 0, 255)
  const g = clamp(round(rgba.g), 0, 255)
  const b = clamp(round(rgba.b), 0, 255)
  const a = clamp(rgba.a, 0, 1)
  return `rgba(${r}, ${g}, ${b}, ${Number(a.toFixed(3))})`
}

export const rgbaToHex = (rgba: RGBA): string => {
  return `#${toHex2(rgba.r)}${toHex2(rgba.g)}${toHex2(rgba.b)}`
}

const parseHex = (input: string): RGBA | null => {
  const s = input.trim()
  const m = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(s)
  if (!m) return null
  let hex = m[1]
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(ch => ch + ch)
      .join('')
  }
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  return { r, g, b, a: 1 }
}

const parseRgb = (input: string): RGBA | null => {
  const s = input.trim()
  const m = /^rgba?\(([^)]+)\)$/.exec(s)
  if (!m) return null
  const parts = m[1]
    .split(',')
    .map(p => p.trim())
    .filter(Boolean)
  if (parts.length < 3) return null
  const r = Number(parts[0])
  const g = Number(parts[1])
  const b = Number(parts[2])
  const a = parts.length >= 4 ? Number(parts[3]) : 1
  if ([r, g, b, a].some(n => Number.isNaN(n))) return null
  return { r: clamp(r, 0, 255), g: clamp(g, 0, 255), b: clamp(b, 0, 255), a: clamp(a, 0, 1) }
}

export const parseToRgba = (value: string): RGBA | null => {
  if (!value) return null
  return parseHex(value) || parseRgb(value)
}

export const formatColor = (rgba: RGBA, format: ColorFormat, showAlpha: boolean): string => {
  if (format === 'hex' && !showAlpha) return rgbaToHex(rgba)
  if (format === 'rgb') {
    const r = clamp(round(rgba.r), 0, 255)
    const g = clamp(round(rgba.g), 0, 255)
    const b = clamp(round(rgba.b), 0, 255)
    if (!showAlpha) return `rgb(${r}, ${g}, ${b})`
    return rgbaToCss(rgba)
  }
  // minimal hsl output: convert via rgb
  const r = clamp(round(rgba.r), 0, 255) / 255
  const g = clamp(round(rgba.g), 0, 255) / 255
  const b = clamp(round(rgba.b), 0, 255) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const delta = max - min
  let h = 0
  if (delta !== 0) {
    if (max === r) h = 60 * (((g - b) / delta) % 6)
    else if (max === g) h = 60 * ((b - r) / delta + 2)
    else h = 60 * ((r - g) / delta + 4)
  }
  if (h < 0) h += 360
  const l = (max + min) / 2
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  const hh = round(h)
  const ss = round(s * 100)
  const ll = round(l * 100)
  if (!showAlpha) return `hsl(${hh}, ${ss}%, ${ll}%)`
  return `hsla(${hh}, ${ss}%, ${ll}%, ${Number(clamp(rgba.a, 0, 1).toFixed(3))})`
}
