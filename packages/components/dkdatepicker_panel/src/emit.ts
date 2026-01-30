export const datePickerPanelEmits = {
  'update:modelValue': (value: string) => typeof value === 'string',
  change: (value: string) => typeof value === 'string',
  'panel-change': (payload: { year: number; month: number }) =>
    !!payload && typeof payload.year === 'number' && typeof payload.month === 'number'
} as const
