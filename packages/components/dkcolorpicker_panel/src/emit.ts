import type { RGBA } from './type'

export const colorPickerPanelEmits = {
  'update:modelValue': (value: string) => typeof value === 'string',
  change: (value: string) => typeof value === 'string',
  'active-change': (value: string) => typeof value === 'string',
  'update:rgba': (rgba: RGBA) => !!rgba && typeof rgba.r === 'number'
} as const
