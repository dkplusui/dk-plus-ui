<script lang="ts" setup>
  import { onMounted, getCurrentInstance } from 'vue'

  import { dkWatermark } from './prop'
  const props = defineProps(dkWatermark)

  const state = {
    value: props.value,
    font: props.font,
    color: props.color,
    rotate: +props.rotate,
    opacity: props.opacity,
    appendToBody: props.appendToBody
  }

  const drawWatermark = (text: string, parentElement: HTMLElement): void => {
    const canvas = document.createElement('canvas')
    canvas.width = 300
    canvas.height = 200
    const ctx = canvas.getContext('2d')

    if (ctx) {
      ctx.font = state.font
      ctx.fillStyle = state.color
      ctx.rotate((state.rotate * Math.PI) / 180)
      ctx.fillText(text, 50, 100)

      const watermarkContainer = document.createElement('div')
      watermarkContainer.className = 'dk-watermark'
      watermarkContainer.style.opacity = state.opacity

      if (watermarkContainer) {
        watermarkContainer.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`
        if (state.appendToBody) {
          document.body.appendChild(watermarkContainer)
        } else {
          parentElement.appendChild(watermarkContainer)
        }
      }
    }
  }

  onMounted(() => {
    const instance = getCurrentInstance()
    const parentElement: HTMLElement = instance && instance.proxy && instance.proxy.$el.parentElement
    if (parentElement) {
      drawWatermark(state.value, parentElement)
    }
  })
</script>
