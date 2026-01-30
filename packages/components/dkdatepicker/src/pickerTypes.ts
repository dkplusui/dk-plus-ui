import type { PropType } from 'vue'

export type DatePickerType =
  | 'date'
  | 'dates'
  | 'datetime'
  | 'daterange'
  | 'datetimerange'
  | 'month'
  | 'monthrange'
  | 'year'
  | 'week'

export type DateModelValue = string | number | Date | (string | number | Date)[]

export interface DatePickerShortcut {
  text: string
  value: string | number | Date | (() => string | number | Date)
}

export const datePickerTypeProp = {
  type: String as unknown as PropType<DatePickerType>,
  default: 'date'
} as const
