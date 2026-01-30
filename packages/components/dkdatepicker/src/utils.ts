const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

export const isValidDateString = (value: string): boolean => {
  if (!DATE_RE.test(value)) return false
  const [y, m, d] = value.split('-').map(n => Number(n))
  if (!y || !m || !d) return false
  const dt = new Date(y, m - 1, d)
  return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d
}

export const normalizeDateValue = (value: unknown): string => {
  if (typeof value !== 'string') return ''
  const v = value.trim()
  if (!v) return ''
  return isValidDateString(v) ? v : ''
}
