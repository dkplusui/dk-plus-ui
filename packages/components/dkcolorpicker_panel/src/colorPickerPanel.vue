<script lang="ts">
import { defineComponent, reactive, ref, computed, watch } from 'vue'
import { dkColorPickerPanelProps } from './props'
import { colorPickerPanelEmits } from './emit'
import type { HSVA, RGBA } from './type'
import { hsvaToRgba, rgbaToHsva, formatColor, parseToRgba, rgbaToHex, rgbaToCss } from './color'

const clamp = (n: number, min: number, max: number): number => Math.min(max, Math.max(min, n))

const getPointer = (evt: MouseEvent | TouchEvent): { x: number; y: number } => {
  if ('touches' in evt) {
    const t = evt.touches[0] || evt.changedTouches[0]
    return { x: t?.clientX ?? 0, y: t?.clientY ?? 0 }
  }
  return { x: (evt as MouseEvent).clientX, y: (evt as MouseEvent).clientY }
}

export default defineComponent({
  name: 'DkColorPickerPanel',
  props: dkColorPickerPanelProps,
  emits: colorPickerPanelEmits,
  setup(props, { emit }) {
    const svRef = ref<HTMLElement | null>(null)
    const hueRef = ref<HTMLElement | null>(null)
    const alphaRef = ref<HTMLElement | null>(null)

    const state = reactive({
      hsva: { h: 0, s: 100, v: 100, a: 1 } as HSVA,
      inputText: ''
    })

    const rgba = computed<RGBA>(() => hsvaToRgba(state.hsva))

    const previewStyle = computed(() => ({ background: rgbaToCss(rgba.value) }))

    const hueColor = computed(() => {
      const c = hsvaToRgba({ h: state.hsva.h, s: 100, v: 100, a: 1 })
      return `rgb(${c.r}, ${c.g}, ${c.b})`
    })

    const svBgStyle = computed(() => ({ background: hueColor.value }))

    const alphaBgStyle = computed(() => {
      const c = hsvaToRgba({ ...state.hsva, a: 1 })
      return {
        background: `linear-gradient(to right, rgba(${c.r}, ${c.g}, ${c.b}, 0), rgba(${c.r}, ${c.g}, ${c.b}, 1))`
      }
    })

    const svThumbStyle = computed(() => ({
      left: `${clamp(state.hsva.s, 0, 100)}%`,
      top: `${100 - clamp(state.hsva.v, 0, 100)}%`
    }))

    const hueThumbStyle = computed(() => ({ left: `${clamp(state.hsva.h, 0, 360) / 360 * 100}%` }))

    const alphaThumbStyle = computed(() => ({ left: `${clamp(state.hsva.a, 0, 1) * 100}%` }))

    const outputValue = computed(() => formatColor(rgba.value, props.format, props.showAlpha))

    const syncInputText = (): void => {
      // show a compact preview string in input
      state.inputText = props.showAlpha ? rgbaToCss(rgba.value) : rgbaToHex(rgba.value)
    }

    const commit = (triggerChange = false): void => {
      const val = outputValue.value
      emit('update:modelValue', val)
      emit('active-change', val)
      emit('update:rgba', rgba.value)
      if (triggerChange) emit('change', val)
      syncInputText()
    }

    const applyModelValue = (val: string): void => {
      const parsed = parseToRgba(val)
      if (!parsed) {
        syncInputText()
        return
      }
      state.hsva = rgbaToHsva(parsed)
      syncInputText()
    }

    watch(
      () => props.modelValue,
      v => {
        applyModelValue(v)
      },
      { immediate: true }
    )

    const updateFromBar = (barEl: HTMLElement, evt: MouseEvent | TouchEvent, kind: 'hue' | 'alpha'): void => {
      const rect = barEl.getBoundingClientRect()
      const { x } = getPointer(evt)
      const ratio = clamp((x - rect.left) / rect.width, 0, 1)
      if (kind === 'hue') state.hsva.h = ratio * 360
      else state.hsva.a = ratio
      commit(false)
    }

    const updateFromSv = (evt: MouseEvent | TouchEvent): void => {
      if (!svRef.value) return
      const rect = svRef.value.getBoundingClientRect()
      const { x, y } = getPointer(evt)
      const sx = clamp((x - rect.left) / rect.width, 0, 1)
      const sy = clamp((y - rect.top) / rect.height, 0, 1)
      state.hsva.s = sx * 100
      state.hsva.v = (1 - sy) * 100
      commit(false)
    }

    const bindDrag = (
      startEvt: MouseEvent | TouchEvent,
      move: (evt: MouseEvent | TouchEvent) => void,
      end?: () => void
    ): void => {
      if (props.disabled) return
      startEvt.preventDefault()
      const onMove = (evt: MouseEvent | TouchEvent): void => {
        evt.preventDefault()
        move(evt)
      }
      const onMoveListener = onMove as unknown as EventListener
      const onUp = (): void => {
        window.removeEventListener('mousemove', onMoveListener)
        window.removeEventListener('mouseup', onUp)
        window.removeEventListener('touchmove', onMoveListener)
        window.removeEventListener('touchend', onUp)
        end?.()
      }
      window.addEventListener('mousemove', onMoveListener)
      window.addEventListener('mouseup', onUp)
      window.addEventListener('touchmove', onMoveListener, { passive: false })
      window.addEventListener('touchend', onUp)
    }

    const onSvDown = (evt: MouseEvent | TouchEvent): void => {
      if (props.disabled) return
      updateFromSv(evt)
      bindDrag(evt, updateFromSv, () => commit(true))
    }

    const onHueDown = (evt: MouseEvent | TouchEvent): void => {
      if (!hueRef.value || props.disabled) return
      updateFromBar(hueRef.value, evt, 'hue')
      bindDrag(evt, e => hueRef.value && updateFromBar(hueRef.value, e, 'hue'), () => commit(true))
    }

    const onAlphaDown = (evt: MouseEvent | TouchEvent): void => {
      if (!alphaRef.value || props.disabled) return
      updateFromBar(alphaRef.value, evt, 'alpha')
      bindDrag(evt, e => alphaRef.value && updateFromBar(alphaRef.value, e, 'alpha'), () => commit(true))
    }

    const onInputBlur = (): void => {
      if (props.disabled) return
      const parsed = parseToRgba(state.inputText)
      if (!parsed) {
        syncInputText()
        return
      }
      state.hsva = rgbaToHsva(parsed)
      commit(true)
    }

    const rootStyle = computed(() => ({ width: props.width }))

    return {
      svRef,
      hueRef,
      alphaRef,
      state,
      rootStyle,
      svBgStyle,
      svThumbStyle,
      hueThumbStyle,
      alphaThumbStyle,
      alphaBgStyle,
      previewStyle,
      onSvDown,
      onHueDown,
      onAlphaDown,
      onInputBlur
    }
  }
})
</script>

<template>
  <div class="dk-color-picker-panel" :class="{ 'is-disabled': disabled }" :style="rootStyle">
    <div class="dk-color-picker-panel_main">
      <div
        ref="svRef"
        class="dk-color-picker-panel_sv"
        :style="svBgStyle"
        @mousedown="onSvDown"
        @touchstart="onSvDown"
      >
        <div class="dk-color-picker-panel_sv-white"></div>
        <div class="dk-color-picker-panel_sv-black"></div>
        <div class="dk-color-picker-panel_sv-thumb" :style="svThumbStyle"></div>
      </div>

      <div class="dk-color-picker-panel_controls">
        <div class="dk-color-picker-panel_preview">
          <div class="dk-color-picker-panel_checker"></div>
          <div class="dk-color-picker-panel_preview-color" :style="previewStyle"></div>
        </div>

        <div class="dk-color-picker-panel_bars">
          <div ref="hueRef" class="dk-color-picker-panel_bar dk-color-picker-panel_hue" @mousedown="onHueDown" @touchstart="onHueDown">
            <div class="dk-color-picker-panel_bar-thumb" :style="hueThumbStyle"></div>
          </div>

          <div
            v-if="showAlpha"
            ref="alphaRef"
            class="dk-color-picker-panel_bar dk-color-picker-panel_alpha"
            @mousedown="onAlphaDown"
            @touchstart="onAlphaDown"
          >
            <div class="dk-color-picker-panel_checker"></div>
            <div class="dk-color-picker-panel_alpha-bg" :style="alphaBgStyle"></div>
            <div class="dk-color-picker-panel_bar-thumb" :style="alphaThumbStyle"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="dk-color-picker-panel_footer">
      <input
        v-model="state.inputText"
        class="dk-color-picker-panel_input"
        :disabled="disabled"
        @blur="onInputBlur"
      />
    </div>
  </div>
</template>
