import { describe, expect, it } from 'vitest'
import { normalizeSliderValue } from '../src/utils'

describe('DkSlider utils', () => {
  it('normalizes single value', () => {
    expect(normalizeSliderValue(10, 0, 100, false)).toBe(10)
    expect(normalizeSliderValue(-1, 0, 100, false)).toBe(0)
    expect(normalizeSliderValue(101, 0, 100, false)).toBe(100)
  })

  it('normalizes range value', () => {
    expect(normalizeSliderValue([20, 10], 0, 100, true)).toEqual([10, 20])
    expect(normalizeSliderValue([200, -1], 0, 100, true)).toEqual([0, 100])
  })
})
