import { describe, expect, it } from 'vitest'
import { addMonths, buildMonthCells, formatDate, parseDate } from '../src/date'

describe('DkDatePickerPanel date utils', () => {
  it('format/parse date (YYYY-MM-DD)', () => {
    const d = new Date(2026, 0, 29)
    expect(formatDate(d)).toBe('2026-01-29')
    expect(parseDate('2026-01-29')?.getFullYear()).toBe(2026)
    expect(parseDate('bad')).toBe(null)
  })

  it('addMonths keeps day in range', () => {
    const d = new Date(2024, 0, 31)
    const next = addMonths(d, 1)
    expect(next.getMonth()).toBe(1)
    expect(next.getDate()).toBe(29)
  })

  it('buildMonthCells returns 42 cells', () => {
    const cells = buildMonthCells(2026, 0, new Date(2026, 0, 1), 0, false, undefined)
    expect(cells.length).toBe(42)
  })
})
