<script lang="ts">
import { computed, defineComponent, nextTick, ref, watch } from 'vue'
import type { PropType } from 'vue'

const pad2 = (n: number): string => String(n).padStart(2, '0')

const clamp = (n: number, min: number, max: number): number => Math.max(min, Math.min(max, n))

const range = (count: number): number[] => Array.from({ length: count }, (_, i) => i)

const toSafeDate = (d: Date | null | undefined): Date => {
  const base = d instanceof Date && !Number.isNaN(d.getTime()) ? d : new Date()
  return new Date(base.getFullYear(), base.getMonth(), base.getDate(), base.getHours(), base.getMinutes(), base.getSeconds())
}

export default defineComponent({
  name: 'DkTimePickerPanel',
  props: {
    modelValue: {
      type: Date as PropType<Date>,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    arrowControl: {
      type: Boolean,
      default: false
    },
    showSeconds: {
      type: Boolean,
      default: true
    },
    disabledHours: {
      type: Function as PropType<() => number[]>,
      default: undefined
    },
    disabledMinutes: {
      type: Function as PropType<(hour: number) => number[]>,
      default: undefined
    },
    disabledSeconds: {
      type: Function as PropType<(hour: number, minute: number) => number[]>,
      default: undefined
    }
  },
  emits: {
    'update:modelValue': (v: Date): boolean => v instanceof Date
  },
  setup(props, { emit }) {
    const hoursRef = ref<HTMLElement>()
    const minutesRef = ref<HTMLElement>()
    const secondsRef = ref<HTMLElement>()

    const hours = computed(() => range(24))
    const minutes = computed(() => range(60))
    const seconds = computed(() => range(60))

    const isHourDisabled = (h: number): boolean => {
      const fn = props.disabledHours
      const list = typeof fn === 'function' ? fn() : []
      return Array.isArray(list) ? list.includes(h) : false
    }

    const isMinuteDisabled = (h: number, m: number): boolean => {
      const fn = props.disabledMinutes
      const list = typeof fn === 'function' ? fn(h) : []
      return Array.isArray(list) ? list.includes(m) : false
    }

    const isSecondDisabled = (h: number, m: number, s: number): boolean => {
      const fn = props.disabledSeconds
      const list = typeof fn === 'function' ? fn(h, m) : []
      return Array.isArray(list) ? list.includes(s) : false
    }

    const current = computed(() => toSafeDate(props.modelValue))

    const selectedHour = computed(() => current.value.getHours())
    const selectedMinute = computed(() => current.value.getMinutes())
    const selectedSecond = computed(() => current.value.getSeconds())

    const ensureEnabledMinute = (h: number, m: number): number => {
      if (!isMinuteDisabled(h, m)) return m
      for (let i = 0; i < 60; i++) {
        const next = (m + i) % 60
        if (!isMinuteDisabled(h, next)) return next
      }
      return m
    }

    const ensureEnabledSecond = (h: number, m: number, s: number): number => {
      if (!isSecondDisabled(h, m, s)) return s
      for (let i = 0; i < 60; i++) {
        const next = (s + i) % 60
        if (!isSecondDisabled(h, m, next)) return next
      }
      return s
    }

    const commit = (h: number, m: number, s: number): void => {
      if (props.disabled) return
      if (isHourDisabled(h)) return
      if (isMinuteDisabled(h, m)) return
      if (props.showSeconds && isSecondDisabled(h, m, s)) return

      const base = current.value
      const next = new Date(base.getFullYear(), base.getMonth(), base.getDate(), h, m, props.showSeconds ? s : 0)
      emit('update:modelValue', next)
    }

    const setHour = (h: number): void => {
      const base = current.value
      const hh = clamp(h, 0, 23)
      const mm = ensureEnabledMinute(hh, base.getMinutes())
      const ss = ensureEnabledSecond(hh, mm, base.getSeconds())
      commit(hh, mm, ss)
    }

    const setMinute = (m: number): void => {
      const base = current.value
      const hh = base.getHours()
      const mm = clamp(m, 0, 59)
      const fixedM = ensureEnabledMinute(hh, mm)
      const ss = ensureEnabledSecond(hh, fixedM, base.getSeconds())
      commit(hh, fixedM, ss)
    }

    const setSecond = (s: number): void => {
      const base = current.value
      const hh = base.getHours()
      const mm = base.getMinutes()
      const ss = clamp(s, 0, 59)
      const fixedS = ensureEnabledSecond(hh, mm, ss)
      commit(hh, mm, fixedS)
    }

    const stepHour = (delta: number): void => {
      const base = current.value
      for (let i = 1; i <= 24; i++) {
        const next = (base.getHours() + delta * i + 24) % 24
        if (!isHourDisabled(next)) {
          setHour(next)
          return
        }
      }
    }

    const stepMinute = (delta: number): void => {
      const base = current.value
      const h = base.getHours()
      for (let i = 1; i <= 60; i++) {
        const next = (base.getMinutes() + delta * i + 60) % 60
        if (!isMinuteDisabled(h, next)) {
          setMinute(next)
          return
        }
      }
    }

    const stepSecond = (delta: number): void => {
      const base = current.value
      const h = base.getHours()
      const m = base.getMinutes()
      for (let i = 1; i <= 60; i++) {
        const next = (base.getSeconds() + delta * i + 60) % 60
        if (!isSecondDisabled(h, m, next)) {
          setSecond(next)
          return
        }
      }
    }

    const onWheelHours = (evt: WheelEvent): void => {
      if (props.disabled) return
      if (props.arrowControl) return
      evt.preventDefault()
      stepHour(evt.deltaY > 0 ? 1 : -1)
    }

    const onWheelMinutes = (evt: WheelEvent): void => {
      if (props.disabled) return
      if (props.arrowControl) return
      evt.preventDefault()
      stepMinute(evt.deltaY > 0 ? 1 : -1)
    }

    const onWheelSeconds = (evt: WheelEvent): void => {
      if (props.disabled) return
      if (props.arrowControl) return
      evt.preventDefault()
      stepSecond(evt.deltaY > 0 ? 1 : -1)
    }

    const scrollToActive = async(): Promise<void> => {
      await nextTick()
      const scrollTo = (root: HTMLElement | undefined, idx: number): void => {
        if (!root) return
        const el = root.querySelector<HTMLElement>(`[data-idx="${idx}"]`)
        el?.scrollIntoView({ block: 'center' })
      }
      scrollTo(hoursRef.value, selectedHour.value)
      scrollTo(minutesRef.value, selectedMinute.value)
      if (props.showSeconds) scrollTo(secondsRef.value, selectedSecond.value)
    }

    watch(() => props.modelValue, scrollToActive, { immediate: true })

    return {
      pad2,
      hours,
      minutes,
      seconds,
      selectedHour,
      selectedMinute,
      selectedSecond,
      hoursRef,
      minutesRef,
      secondsRef,
      isHourDisabled,
      isMinuteDisabled,
      isSecondDisabled,
      setHour,
      setMinute,
      setSecond,
      stepHour,
      stepMinute,
      stepSecond,
      onWheelHours,
      onWheelMinutes,
      onWheelSeconds
    }
  }
})
</script>

<template>
  <div class="dk-time-picker_panel" :class="{ 'is-disabled': disabled }" @mousedown.prevent>
    <div class="dk-time-picker_spinner">
      <div class="dk-time-picker_spinner-column">
        <button
          v-if="arrowControl"
          type="button"
          class="dk-time-picker_arrow is-up"
          :disabled="disabled"
          aria-label="decrease hours"
          @click="stepHour(-1)"
        ></button>
        <div class="dk-time-picker_spinner-list-wrapper">
          <div class="dk-time-picker_spinner-mask is-top" />
          <div class="dk-time-picker_spinner-mask is-bottom" />
          <div class="dk-time-picker_spinner-selection" />
          <div ref="hoursRef" class="dk-time-picker_spinner-list" @wheel="onWheelHours">
            <button
              v-for="h in hours"
              :key="h"
              type="button"
              class="dk-time-picker_spinner-item"
              :class="{ 'is-active': h === selectedHour, 'is-disabled': isHourDisabled(h) }"
              :disabled="disabled || isHourDisabled(h)"
              :data-idx="h"
              @click="setHour(h)"
            >
              {{ pad2(h) }}
            </button>
          </div>
        </div>
        <button
          v-if="arrowControl"
          type="button"
          class="dk-time-picker_arrow is-down"
          :disabled="disabled"
          aria-label="increase hours"
          @click="stepHour(1)"
        ></button>
      </div>

      <div class="dk-time-picker_spinner-column">
        <button
          v-if="arrowControl"
          type="button"
          class="dk-time-picker_arrow is-up"
          :disabled="disabled"
          aria-label="decrease minutes"
          @click="stepMinute(-1)"
        ></button>
        <div class="dk-time-picker_spinner-list-wrapper">
          <div class="dk-time-picker_spinner-mask is-top" />
          <div class="dk-time-picker_spinner-mask is-bottom" />
          <div class="dk-time-picker_spinner-selection" />
          <div ref="minutesRef" class="dk-time-picker_spinner-list" @wheel="onWheelMinutes">
            <button
              v-for="m in minutes"
              :key="m"
              type="button"
              class="dk-time-picker_spinner-item"
              :class="{ 'is-active': m === selectedMinute, 'is-disabled': isMinuteDisabled(selectedHour, m) }"
              :disabled="disabled || isMinuteDisabled(selectedHour, m)"
              :data-idx="m"
              @click="setMinute(m)"
            >
              {{ pad2(m) }}
            </button>
          </div>
        </div>
        <button
          v-if="arrowControl"
          type="button"
          class="dk-time-picker_arrow is-down"
          :disabled="disabled"
          aria-label="increase minutes"
          @click="stepMinute(1)"
        ></button>
      </div>

      <div v-if="showSeconds" class="dk-time-picker_spinner-column">
        <button
          v-if="arrowControl"
          type="button"
          class="dk-time-picker_arrow is-up"
          :disabled="disabled"
          aria-label="decrease seconds"
          @click="stepSecond(-1)"
        ></button>
        <div class="dk-time-picker_spinner-list-wrapper">
          <div class="dk-time-picker_spinner-mask is-top" />
          <div class="dk-time-picker_spinner-mask is-bottom" />
          <div class="dk-time-picker_spinner-selection" />
          <div ref="secondsRef" class="dk-time-picker_spinner-list" @wheel="onWheelSeconds">
            <button
              v-for="s in seconds"
              :key="s"
              type="button"
              class="dk-time-picker_spinner-item"
              :class="{ 'is-active': s === selectedSecond, 'is-disabled': isSecondDisabled(selectedHour, selectedMinute, s) }"
              :disabled="disabled || isSecondDisabled(selectedHour, selectedMinute, s)"
              :data-idx="s"
              @click="setSecond(s)"
            >
              {{ pad2(s) }}
            </button>
          </div>
        </div>
        <button
          v-if="arrowControl"
          type="button"
          class="dk-time-picker_arrow is-down"
          :disabled="disabled"
          aria-label="increase seconds"
          @click="stepSecond(1)"
        ></button>
      </div>
    </div>
  </div>
</template>
