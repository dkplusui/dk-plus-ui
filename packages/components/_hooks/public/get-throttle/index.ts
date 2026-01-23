/* eslint-disable @typescript-eslint/no-explicit-any */
export function getThrottle<T extends(...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout | null = null
  let lastExecTime = 0

  return (...args: Parameters<T>) => {
    const currentTime = Date.now()

    if (!lastExecTime || currentTime - lastExecTime >= delay) {
      lastExecTime = currentTime
      func(...args)
    } else {
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        lastExecTime = currentTime
        func(...args)
      }, delay - (currentTime - lastExecTime))
    }
  }
}
