export type TimeSelectStep = string

const pad2 = (n: number): string => (n < 10 ? `0${n}` : String(n))

export const parseTimeToSeconds = (t: string): number | null => {
  const m = /^([01]\d|2[0-3]):([0-5]\d)(?::([0-5]\d))?$/.exec(String(t || '').trim())
  if (!m) return null
  const hh = Number(m[1])
  const mm = Number(m[2])
  const ss = Number(m[3] ?? 0)
  return hh * 3600 + mm * 60 + ss
}

export const secondsToTime = (sec: number, withSeconds = false): string => {
  const s = Math.max(0, Math.floor(sec))
  const hh = Math.floor(s / 3600)
  const mm = Math.floor((s % 3600) / 60)
  const ss = s % 60
  return withSeconds ? `${pad2(hh)}:${pad2(mm)}:${pad2(ss)}` : `${pad2(hh)}:${pad2(mm)}`
}

export const parseStepToSeconds = (step: TimeSelectStep): number => {
  const sec = parseTimeToSeconds(step)
  if (sec === null || sec <= 0) return 30 * 60
  return sec
}

export const buildTimeList = (start: string, end: string, step: string): string[] => {
  const s = parseTimeToSeconds(start)
  const e = parseTimeToSeconds(end)
  const st = parseStepToSeconds(step)
  if (s === null || e === null) return []
  const list: string[] = []
  for (let cur = s; cur <= e; cur += st) list.push(secondsToTime(cur, false))
  return list
}
