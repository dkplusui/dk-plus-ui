import { describe, expect, it } from 'vitest'
import { buildTimeList, parseTimeToSeconds } from '../src/utils'

describe('DkTimeSelect utils', () => {
  it('parses time', () => {
    expect(parseTimeToSeconds('00:00')).toBe(0)
    expect(parseTimeToSeconds('23:59')).toBe(23 * 3600 + 59 * 60)
    expect(parseTimeToSeconds('bad')).toBe(null)
  })

  it('builds list', () => {
    expect(buildTimeList('09:00', '10:00', '00:30')).toEqual(['09:00', '09:30', '10:00'])
  })
})
