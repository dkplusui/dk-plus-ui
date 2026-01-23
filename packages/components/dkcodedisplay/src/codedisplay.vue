<script lang="ts">
  import {
    computed,
    defineComponent,
    reactive,
    toRefs,
    ref,
    nextTick,
    onBeforeUnmount,
    watch,
    onMounted
  } from 'vue'
  import { CodeDisplay } from './codedisplay'
  import { SetPosition } from './setPosition'
  export default defineComponent({
    name: 'Dkcodedisplay',
    props: CodeDisplay,
    setup() {
      const data = reactive({
        open: false,
        width: 0, //
        height: 0, // Launch height
        isShow: false, // Expand or not
        dkCodeDisplayStyleList: {} // Expand Button Style
      })

      const codeParentRef = ref<HTMLElement>()
      const codeBoxRef = ref<HTMLElement>()

      const handlePosition = new SetPosition(codeParentRef)

      const initSize = (): void => {
        nextTick(() => {
          const codeBox = codeBoxRef.value as HTMLElement
          data.height = codeBox.children[0].clientHeight
          data.width = codeBox.children[0].clientWidth
        })
      }

      const handleOpenCode = (): void => {
        nextTick(() => {
          initSize()
          data.open = !data.open
          setStyle()
          setTimeout(() => {
            handlePosition.init(codeParentRef, data.open)
          }, 1000 * 0.21)
        })
      }

      const codeHeight = computed(() => {
        return data.open ? data.height + 20 + 'px' : '0px'
      })

      const handleMouseEnter = (): void => {
        data.isShow = true
        setStyle()
      }

      const handleMouseLeave = (): void => {
        data.isShow = false
        setStyle()
      }

      const setStyle = (): void => {
        data.dkCodeDisplayStyleList = {
          '--dkcodedisplay-text-left': data.isShow ? '50%' : '52%',
          '--dkcodedisplay-text-opacity': data.isShow ? '.5' : '0.0',
          '--dkcodedisplay-margin-top': data.open ? '0' : '10px'
        }
      }

      nextTick(() => {
        setStyle()
      })

      onMounted(() => {
        initSize()
      })

      const handleResize = (): void => {
        handlePosition.init(codeParentRef, data.open)
      }

      watch(
        () => data.open,
        val => {
          if (val) {
            window.addEventListener('scroll', handleResize)
          } else {
            window.removeEventListener('scroll', handleResize)
          }
        }
      )

      onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleResize)
      })

      return {
        ...toRefs(data),
        codeHeight,
        handleOpenCode,
        handleMouseEnter,
        handleMouseLeave,
        codeBoxRef,
        codeParentRef
      }
    }
  })
</script>
<template>
  <div
    ref="codeParentRef"
    class="dkcodedisplay"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <dk-shadow>
      <slot name="code"></slot>
      <div ref="codeBoxRef" class="dkcodedisplay_code" :style="{ height: codeHeight }">
        <slot />
      </div>
      <div
        class="dkcodedisplay_open"
        :style="dkCodeDisplayStyleList"
        @click="handleOpenCode"
      >
        <div class="dkcodedisplay-text">
          <dk-icon
            size="13px"
            :icon="open ? 'IconUpperTriangle' : 'IconLowerTriangle'"
          ></dk-icon>
          <span>{{ open ? '收起' : '展开' }}</span>
        </div>
      </div>
    </dk-shadow>
  </div>
</template>
