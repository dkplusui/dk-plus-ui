<script lang="ts">
import { defineComponent, reactive, computed, watch } from 'vue'
import { dkDatePickerPanelProps } from './props'
import { datePickerPanelEmits } from './emit'
import type { CalendarCell } from './type'
import { addMonths, buildMonthCells, buildWeekdays, formatDate, parseDate } from './date'

export default defineComponent({
  name: 'DkDatePickerPanel',
  props: dkDatePickerPanelProps,
  emits: datePickerPanelEmits,
  setup(props, { emit }) {
    const state = reactive({
      viewDate: new Date(),
      selected: null as Date | null
    })

    const firstDay = computed(() => {
      const v = props.firstDayOfWeek ?? 0
      return Math.min(6, Math.max(0, v))
    })

    const weekdays = computed(() => buildWeekdays(firstDay.value))

    const headerText = computed(() => {
      const y = state.viewDate.getFullYear()
      const m = state.viewDate.getMonth() + 1
      return `${y} 年 ${m} 月`
    })

    const cells = computed<CalendarCell[]>(() => {
      const y = state.viewDate.getFullYear()
      const m = state.viewDate.getMonth()
      return buildMonthCells(y, m, state.selected, firstDay.value, props.disabled, props.disabledDate)
    })

    const rows = computed(() => {
      const list = cells.value
      return [list.slice(0, 7), list.slice(7, 14), list.slice(14, 21), list.slice(21, 28), list.slice(28, 35), list.slice(35, 42)]
    })

    const rootStyle = computed(() => ({ width: props.width }))

    const applyModelValue = (val: string): void => {
      const parsed = parseDate(val)
      state.selected = parsed
      if (parsed) state.viewDate = new Date(parsed.getFullYear(), parsed.getMonth(), 1)
    }

    watch(
      () => props.modelValue,
      v => applyModelValue(v || ''),
      { immediate: true }
    )

    const toPrevMonth = (): void => {
      if (props.disabled) return
      state.viewDate = addMonths(state.viewDate, -1)
      emit('panel-change', { year: state.viewDate.getFullYear(), month: state.viewDate.getMonth() + 1 })
    }

    const toNextMonth = (): void => {
      if (props.disabled) return
      state.viewDate = addMonths(state.viewDate, 1)
      emit('panel-change', { year: state.viewDate.getFullYear(), month: state.viewDate.getMonth() + 1 })
    }

    const onPick = (cell: CalendarCell): void => {
      if (props.disabled || cell.isDisabled) return
      state.selected = new Date(cell.date.getFullYear(), cell.date.getMonth(), cell.date.getDate())
      const val = formatDate(state.selected)
      emit('update:modelValue', val)
      emit('change', val)
    }

    return {
      state,
      rootStyle,
      weekdays,
      headerText,
      rows,
      toPrevMonth,
      toNextMonth,
      onPick
    }
  }
})
</script>

<template>
  <div class="dk-date-picker-panel" :class="{ 'is-disabled': disabled }" :style="rootStyle">
    <div class="dk-date-picker-panel_header">
      <button class="dk-date-picker-panel_nav" type="button" :disabled="disabled" @click="toPrevMonth">‹</button>
      <div class="dk-date-picker-panel_title">{{ headerText }}</div>
      <button class="dk-date-picker-panel_nav" type="button" :disabled="disabled" @click="toNextMonth">›</button>
    </div>

    <table class="dk-date-picker-panel_table" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th v-for="w in weekdays" :key="w" class="dk-date-picker-panel_th">{{ w }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, idx) in rows" :key="idx">
          <td v-for="cell in r" :key="cell.date.getTime()" class="dk-date-picker-panel_td">
            <button
              class="dk-date-picker-panel_cell"
              type="button"
              :class="{
                'is-other-month': !cell.isCurrentMonth,
                'is-today': cell.isToday,
                'is-selected': cell.isSelected
              }"
              :disabled="disabled"
              @click="onPick(cell)"
            >
              <span class="dk-date-picker-panel_cell-inner">{{ cell.text }}</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
