import { describe, expect, it } from 'vitest'
import { isValidDateString, normalizeDateValue } from '../src/utils'

describe('DkDatePicker utils', () => {
  it('validates YYYY-MM-DD', () => {
    expect(isValidDateString('2026-01-29')).toBe(true)
    expect(isValidDateString('2026-02-29')).toBe(false)
    expect(isValidDateString('bad')).toBe(false)
  })

  it('normalizes model value', () => {
    expect(normalizeDateValue('2026-01-29')).toBe('2026-01-29')
    expect(normalizeDateValue('')).toBe('')
    expect(normalizeDateValue('2026-13-01')).toBe('')
    expect(normalizeDateValue(null)).toBe('')
  })
})
