import type { CalendarCell } from './type'

const pad2 = (n: number): string => String(n).padStart(2, '0')

export const formatDate = (date: Date): string => {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return `${y}-${pad2(m)}-${pad2(d)}`
}

export const parseDate = (value: string): Date | null => {
  if (!value) return null
  const m = /^\s*(\d{4})-(\d{2})-(\d{2})\s*$/.exec(value)
  if (!m) return null
  const year = Number(m[1])
  const month = Number(m[2])
  const day = Number(m[3])
  if ([year, month, day].some(n => Number.isNaN(n))) return null
  if (month < 1 || month > 12) return null
  if (day < 1 || day > 31) return null
  const dt = new Date(year, month - 1, day)
  if (dt.getFullYear() !== year || dt.getMonth() !== month - 1 || dt.getDate() !== day) return null
  return dt
}

export const startOfDay = (d: Date): Date => new Date(d.getFullYear(), d.getMonth(), d.getDate())

export const isSameDay = (a: Date, b: Date): boolean => {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export const addMonths = (base: Date, offset: number): Date => {
  const y = base.getFullYear()
  const m = base.getMonth() + offset
  const d = base.getDate()
  const next = new Date(y, m, 1)
  const daysInTargetMonth = new Date(next.getFullYear(), next.getMonth() + 1, 0).getDate()
  next.setDate(Math.min(d, daysInTargetMonth))
  return next
}

export const buildMonthCells = (
  viewYear: number,
  viewMonth: number,
  selected: Date | null,
  firstDayOfWeek: number,
  disabled: boolean,
  disabledDate?: (date: Date) => boolean
): CalendarCell[] => {
  const first = new Date(viewYear, viewMonth, 1)
  const firstDow = first.getDay() // 0..6
  const offset = ((firstDow - firstDayOfWeek) % 7 + 7) % 7

  const start = new Date(viewYear, viewMonth, 1 - offset)
  const today = startOfDay(new Date())

  const cells: CalendarCell[] = []
  for (let i = 0; i < 42; i++) {
    const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
    const isCurrentMonth = date.getMonth() === viewMonth
    const isDisabledDate = typeof disabledDate === 'function' ? !!disabledDate(date) : false
    cells.push({
      date,
      text: date.getDate(),
      isCurrentMonth,
      isToday: isSameDay(date, today),
      isSelected: !!selected && isSameDay(date, selected),
      isDisabled: disabled || isDisabledDate
    })
  }
  return cells
}

export const buildWeekdays = (firstDayOfWeek: number): string[] => {
  const base = ['日', '一', '二', '三', '四', '五', '六']
  const fd = ((firstDayOfWeek % 7) + 7) % 7
  return base.slice(fd).concat(base.slice(0, fd))
}
