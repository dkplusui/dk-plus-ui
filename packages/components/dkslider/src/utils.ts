import type { SliderModelValue } from './props'

export const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n))

export const getStepPrecision = (step: number): number => {
  const s = String(step)
  const idx = s.indexOf('.')
  return idx === -1 ? 0 : s.length - idx - 1
}

export const roundToStep = (value: number, step: number, min: number): number => {
  if (!step || !Number.isFinite(step) || step <= 0) return value
  const precision = getStepPrecision(step)
  const offset = value - min
  const steps = Math.round(offset / step)
  const next = min + steps * step
  return Number(next.toFixed(precision))
}

export const valueToPercent = (value: number, min: number, max: number): number => {
  const range = max - min
  if (range <= 0) return 0
  return ((value - min) / range) * 100
}

export const normalizeSliderValue = (
  value: SliderModelValue,
  min: number,
  max: number,
  range: boolean
): SliderModelValue => {
  if (range) {
    const arr = Array.isArray(value) ? value : [min, max]
    const a = clamp(Number(arr[0] ?? min), min, max)
    const b = clamp(Number(arr[1] ?? max), min, max)
    return a <= b ? [a, b] : [b, a]
  }
  return clamp(Number(Array.isArray(value) ? value[0] : value), min, max)
}

export const isRangeValue = (v: SliderModelValue): v is [number, number] => Array.isArray(v)
