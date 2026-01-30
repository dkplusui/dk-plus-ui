<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, reactive, ref, watch } from 'vue'
import type { SliderModelValue, SliderMarks } from './props'
import { dkSliderProps } from './props'
import { sliderEmits } from './emit'
import { clamp, isRangeValue, normalizeSliderValue, roundToStep, valueToPercent } from './utils'

interface MarkItem {
  value: number
  label: string
  style?: Record<string, string>
}

export default defineComponent({
  name: 'DkSlider',
  props: dkSliderProps,
  emits: sliderEmits,
  setup(props, { emit }) {
    const runwayRef = ref<HTMLElement>()
    const state = reactive({
      inner: normalizeSliderValue(props.modelValue, props.min, props.max, props.range) as SliderModelValue,
      dragging: false,
      draggingIndex: 0 as 0 | 1,
      hoverIndex: null as null | 0 | 1,
      activeIndex: 0 as 0 | 1
    })

    let inputDebounceTimer: number | undefined

    const clearInputDebounce = (): void => {
      if (inputDebounceTimer) window.clearTimeout(inputDebounceTimer)
      inputDebounceTimer = undefined
    }

    const emitInput = (v: SliderModelValue): void => {
      emit('update:modelValue', v)
      emit('input', v)
    }

    const emitChange = (v: SliderModelValue): void => {
      emit('update:modelValue', v)
      emit('change', v)
    }

    watch(
      () => [props.modelValue, props.min, props.max, props.range] as const,
      () => {
        state.inner = normalizeSliderValue(props.modelValue, props.min, props.max, props.range)
      },
      { immediate: true }
    )

    onBeforeUnmount(() => {
      clearInputDebounce()
      detachDocumentListeners()
    })

    const rangeMin = computed(() => Math.min(props.min, props.max))
    const rangeMax = computed(() => Math.max(props.min, props.max))

    const normalized = computed(() => normalizeSliderValue(state.inner, rangeMin.value, rangeMax.value, props.range))
    const firstValue = computed(() => (isRangeValue(normalized.value) ? normalized.value[0] : (normalized.value as number)))
    const secondValue = computed(() => (isRangeValue(normalized.value) ? normalized.value[1] : (normalized.value as number)))

    const minValue = computed(() => (props.range ? Math.min(firstValue.value, secondValue.value) : firstValue.value))
    const maxValue = computed(() => (props.range ? Math.max(firstValue.value, secondValue.value) : firstValue.value))

    const runwayStyle = computed(() => {
      if (!props.vertical) return {}
      return {
        height: props.height || '200px'
      }
    })

    const barStyle = computed(() => {
      const startPercent = valueToPercent(minValue.value, rangeMin.value, rangeMax.value)
      const endPercent = valueToPercent(maxValue.value, rangeMin.value, rangeMax.value)
      const size = Math.max(0, endPercent - startPercent)
      if (props.vertical) {
        return {
          height: `${size}%`,
          bottom: `${startPercent}%`
        }
      }
      return {
        width: `${size}%`,
        left: `${startPercent}%`
      }
    })

    const buttonStyle = (idx: 0 | 1): Record<string, string> => {
      const val = idx === 0 ? (props.range ? minValue.value : firstValue.value) : maxValue.value
      const p = clamp(valueToPercent(val, rangeMin.value, rangeMax.value), 0, 100)
      return props.vertical ? { bottom: `${p}%` } : { left: `${p}%` }
    }

    const formatTooltipText = (val: number): string => {
      if (props.formatTooltip) return String(props.formatTooltip(val))
      return String(val)
    }

    const tooltipVisible = (idx: 0 | 1): boolean => {
      if (!props.showTooltip) return false
      if (state.dragging && state.draggingIndex === idx) return true
      if (state.hoverIndex === idx) return true
      return false
    }

    const marksList = computed<MarkItem[]>(() => {
      const marks = props.marks as SliderMarks | undefined
      if (!marks) return []
      const items: MarkItem[] = []
      for (const k of Object.keys(marks)) {
        const n = Number(k)
        if (!Number.isFinite(n)) continue
        const raw = marks[n]
        if (typeof raw === 'string') {
          items.push({ value: n, label: raw })
        } else if (raw && typeof raw === 'object') {
          items.push({
            value: n,
            label: raw.label,
            style: raw.style ? (raw.style as unknown as Record<string, string>) : undefined
          })
        }
      }
      return items
        .filter(i => i.value >= rangeMin.value && i.value <= rangeMax.value)
        .sort((a, b) => a.value - b.value)
    })

    const stops = computed(() => {
      if (!props.showStops) return [] as number[]
      const min = rangeMin.value
      const max = rangeMax.value
      const step = props.step
      if (!Number.isFinite(step) || step <= 0) return []
      const count = Math.floor((max - min) / step)
      if (count <= 1) return []
      const res: number[] = []
      for (let i = 1; i < count; i++) {
        const v = min + i * step
        const p = clamp(valueToPercent(v, min, max), 0, 100)
        res.push(p)
      }
      return res
    })

    const stopStyle = (p: number): Record<string, string> => (props.vertical ? { bottom: `${p}%` } : { left: `${p}%` })

    const markStyle = (val: number): Record<string, string> => {
      const p = clamp(valueToPercent(val, rangeMin.value, rangeMax.value), 0, 100)
      return props.vertical ? { bottom: `${p}%` } : { left: `${p}%` }
    }

    const getValueFromPosition = (clientX: number, clientY: number): number => {
      const el = runwayRef.value
      if (!el) return rangeMin.value
      const rect = el.getBoundingClientRect()
      const min = rangeMin.value
      const max = rangeMax.value
      const range = max - min
      if (range <= 0) return min

      let percent = 0
      if (props.vertical) {
        const height = rect.height || 1
        percent = (rect.bottom - clientY) / height
      } else {
        const width = rect.width || 1
        percent = (clientX - rect.left) / width
      }
      percent = clamp(percent, 0, 1)

      const raw = min + percent * range
      const snapped = roundToStep(raw, props.step, min)
      return clamp(snapped, min, max)
    }

    const setValueByIndex = (idx: 0 | 1, val: number, emitKind: 'input' | 'change'): void => {
      if (props.disabled) return

      const min = rangeMin.value
      const max = rangeMax.value
      const v = clamp(roundToStep(val, props.step, min), min, max)

      if (!props.range) {
        state.inner = v
        emitKind === 'input' ? emitInput(state.inner) : emitChange(state.inner)
        return
      }

      const current = isRangeValue(normalized.value) ? [...normalized.value] : [min, max]
      current[idx] = v
      let next: [number, number] = [current[0], current[1]]

      if (next[0] > next[1]) {
        // swap when crossing
        next = [next[1], next[0]]
        state.activeIndex = idx === 0 ? 1 : 0
        state.draggingIndex = state.activeIndex
      }

      state.inner = next
      emitKind === 'input' ? emitInput(state.inner) : emitChange(state.inner)
    }

    const pickClosestHandle = (val: number): 0 | 1 => {
      if (!props.range) return 0
      const a = minValue.value
      const b = maxValue.value
      return Math.abs(val - a) <= Math.abs(val - b) ? 0 : 1
    }

    const onRunwayMouseDown = (evt: MouseEvent): void => {
      if (props.disabled) return
      if (evt.button !== 0) return
      const v = getValueFromPosition(evt.clientX, evt.clientY)
      const idx = pickClosestHandle(v)
      state.activeIndex = idx
      setValueByIndex(idx, v, 'change')
    }

    const attachDocumentListeners = (): void => {
      document.addEventListener('mousemove', onDocumentMove)
      document.addEventListener('mouseup', onDocumentUp)
      document.addEventListener('touchmove', onDocumentTouchMove, { passive: false })
      document.addEventListener('touchend', onDocumentTouchEnd)
    }

    const detachDocumentListeners = (): void => {
      document.removeEventListener('mousemove', onDocumentMove)
      document.removeEventListener('mouseup', onDocumentUp)
      document.removeEventListener('touchmove', onDocumentTouchMove)
      document.removeEventListener('touchend', onDocumentTouchEnd)
    }

    const onButtonDown = (idx: 0 | 1, evt: MouseEvent): void => {
      if (props.disabled) return
      if (evt.button !== 0) return
      state.dragging = true
      state.draggingIndex = idx
      state.activeIndex = idx
      attachDocumentListeners()
    }

    const onButtonTouchStart = (idx: 0 | 1): void => {
      if (props.disabled) return
      state.dragging = true
      state.draggingIndex = idx
      state.activeIndex = idx
      attachDocumentListeners()
    }

    const onDocumentMove = (evt: MouseEvent): void => {
      if (!state.dragging) return
      const v = getValueFromPosition(evt.clientX, evt.clientY)
      setValueByIndex(state.draggingIndex, v, 'input')
    }

    const onDocumentUp = (): void => {
      if (!state.dragging) return
      state.dragging = false
      detachDocumentListeners()
      emitChange(state.inner)
    }

    const onDocumentTouchMove = (evt: TouchEvent): void => {
      if (!state.dragging) return
      evt.preventDefault()
      const t = evt.touches[0]
      if (!t) return
      const v = getValueFromPosition(t.clientX, t.clientY)
      setValueByIndex(state.draggingIndex, v, 'input')
    }

    const onDocumentTouchEnd = (): void => {
      if (!state.dragging) return
      state.dragging = false
      detachDocumentListeners()
      emitChange(state.inner)
    }

    const onKeydown = (idx: 0 | 1, evt: KeyboardEvent): void => {
      if (props.disabled) return
      const step = props.step
      if (!Number.isFinite(step) || step <= 0) return

      const key = evt.key
      if (key !== 'ArrowLeft' && key !== 'ArrowRight' && key !== 'ArrowUp' && key !== 'ArrowDown' && key !== 'Home' && key !== 'End') {
        return
      }
      evt.preventDefault()

      const cur = idx === 0 ? (props.range ? minValue.value : firstValue.value) : maxValue.value
      let next = cur
      if (key === 'ArrowLeft' || key === 'ArrowDown') next = cur - step
      if (key === 'ArrowRight' || key === 'ArrowUp') next = cur + step
      if (key === 'Home') next = rangeMin.value
      if (key === 'End') next = rangeMax.value
      state.activeIndex = idx
      setValueByIndex(idx, next, 'change')
    }

    const onInputNumberChange = (idx: 0 | 1, val: number): void => {
      if (props.disabled) return
      clearInputDebounce()
      const wait = props.debounce || 0
      if (!wait) {
        state.activeIndex = idx
        setValueByIndex(idx, val, 'change')
        return
      }
      inputDebounceTimer = window.setTimeout(() => {
        state.activeIndex = idx
        setValueByIndex(idx, val, 'change')
      }, wait)
    }

    const isRange = computed(() => !!props.range)

    return {
      runwayRef,
      state,
      normalized,
      firstValue,
      secondValue,
      minValue,
      maxValue,
      isRange,
      runwayStyle,
      barStyle,
      buttonStyle,
      tooltipVisible,
      formatTooltipText,
      marksList,
      stops,
      stopStyle,
      markStyle,
      onRunwayMouseDown,
      onButtonDown,
      onButtonTouchStart,
      onKeydown,
      onInputNumberChange
    }
  }
})
</script>

<template>
  <div class="dk-slider" :class="{ 'is-disabled': disabled, 'is-vertical': vertical }">
    <div ref="runwayRef" class="dk-slider_runway" :style="runwayStyle" @mousedown="onRunwayMouseDown">
      <div class="dk-slider_bar" :style="barStyle"></div>

      <template v-if="showStops">
        <span v-for="p in stops" :key="p" class="dk-slider_stop" :style="stopStyle(p)"></span>
      </template>

      <template v-if="marksList.length">
        <span
          v-for="m in marksList"
          :key="m.value"
          class="dk-slider_mark"
          :style="{ ...markStyle(m.value), ...(m.style || {}) }"
        >
          <span class="dk-slider_mark-text">{{ m.label }}</span>
        </span>
      </template>

      <div
        class="dk-slider_button-wrapper"
        :style="buttonStyle(0)"
        @mouseenter="state.hoverIndex = 0"
        @mouseleave="state.hoverIndex = null"
        @mousedown.stop.prevent="onButtonDown(0, $event)"
        @touchstart.stop.prevent="onButtonTouchStart(0)"
      >
        <div
          class="dk-slider_button"
          tabindex="0"
          @focus="state.activeIndex = 0"
          @keydown="onKeydown(0, $event)"
        ></div>
        <div v-if="showTooltip" v-show="tooltipVisible(0)" class="dk-slider_tooltip">
          {{ formatTooltipText(isRange ? minValue : firstValue) }}
        </div>
      </div>

      <div
        v-if="isRange"
        class="dk-slider_button-wrapper"
        :style="buttonStyle(1)"
        @mouseenter="state.hoverIndex = 1"
        @mouseleave="state.hoverIndex = null"
        @mousedown.stop.prevent="onButtonDown(1, $event)"
        @touchstart.stop.prevent="onButtonTouchStart(1)"
      >
        <div
          class="dk-slider_button"
          tabindex="0"
          @focus="state.activeIndex = 1"
          @keydown="onKeydown(1, $event)"
        ></div>
        <div v-if="showTooltip" v-show="tooltipVisible(1)" class="dk-slider_tooltip">
          {{ formatTooltipText(maxValue) }}
        </div>
      </div>
    </div>

    <div v-if="showInput" class="dk-slider_input">
      <dk-input-number
        v-if="!isRange"
        :model-value="firstValue"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        @change="onInputNumberChange(0, $event)"
      ></dk-input-number>

      <template v-else>
        <dk-input-number
          :model-value="minValue"
          :min="min"
          :max="max"
          :step="step"
          :disabled="disabled"
          @change="onInputNumberChange(0, $event)"
        ></dk-input-number>
        <span class="dk-slider_input-separator">-</span>
        <dk-input-number
          :model-value="maxValue"
          :min="min"
          :max="max"
          :step="step"
          :disabled="disabled"
          @change="onInputNumberChange(1, $event)"
        ></dk-input-number>
      </template>
    </div>
  </div>
</template>
