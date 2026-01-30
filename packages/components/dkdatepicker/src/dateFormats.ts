const pad2 = (n: number): string => String(n).padStart(2, '0')

export type DateFormatToken = 'YYYY' | 'MM' | 'DD' | 'HH' | 'mm' | 'ss'

export const formatByPattern = (date: Date, pattern: string): string => {
  const map: Record<DateFormatToken, string> = {
    YYYY: String(date.getFullYear()),
    MM: pad2(date.getMonth() + 1),
    DD: pad2(date.getDate()),
    HH: pad2(date.getHours()),
    mm: pad2(date.getMinutes()),
    ss: pad2(date.getSeconds())
  }

  return pattern
    .replace(/YYYY/g, map.YYYY)
    .replace(/MM/g, map.MM)
    .replace(/DD/g, map.DD)
    .replace(/HH/g, map.HH)
    .replace(/mm/g, map.mm)
    .replace(/ss/g, map.ss)
}

export const parseByPattern = (value: string, pattern: string): Date | null => {
  const v = String(value ?? '').trim()
  if (!v) return null

  // Escape regex special chars except tokens
  const escaped = pattern.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')

  const tokenToGroup: Record<DateFormatToken, string> = {
    YYYY: '(\\d{4})',
    MM: '(\\d{2})',
    DD: '(\\d{2})',
    HH: '(\\d{2})',
    mm: '(\\d{2})',
    ss: '(\\d{2})'
  }

  const tokens: DateFormatToken[] = []

  const reSource = escaped.replace(/YYYY|MM|DD|HH|mm|ss/g, token => {
    tokens.push(token as DateFormatToken)
    return tokenToGroup[token as DateFormatToken]
  })

  const re = new RegExp(`^${reSource}$`)
  const m = re.exec(v)
  if (!m) return null

  const parts: Partial<Record<DateFormatToken, number>> = {}
  tokens.forEach((t, idx) => {
    parts[t] = Number(m[idx + 1])
  })

  const year = parts.YYYY ?? new Date().getFullYear()
  const month = (parts.MM ?? 1) - 1
  const day = parts.DD ?? 1
  const hour = parts.HH ?? 0
  const minute = parts.mm ?? 0
  const second = parts.ss ?? 0

  const dt = new Date(year, month, day, hour, minute, second)
  // validate
  if (dt.getFullYear() !== year) return null
  if (dt.getMonth() !== month) return null
  if (dt.getDate() !== day) return null
  if (dt.getHours() !== hour) return null
  if (dt.getMinutes() !== minute) return null
  if (dt.getSeconds() !== second) return null

  return dt
}

export const coerceToDate = (val: unknown): Date | null => {
  if (val == null) return null
  if (val instanceof Date) return Number.isNaN(val.getTime()) ? null : val
  if (typeof val === 'number') {
    const d = new Date(val)
    return Number.isNaN(d.getTime()) ? null : d
  }
  return null
}
