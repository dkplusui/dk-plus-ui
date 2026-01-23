<script lang="ts" setup>
  import { ref, defineProps, watch } from 'vue'
  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: 'Dialog'
    }
  })

  const visible = ref(props.modelValue)

  watch(
    () => props.modelValue,
    newValue => {
      visible.value = newValue
    }
  )

  const close = (): void => {
    emit('update:modelValue', false)
  }
</script>

<template>
  <transition name="dk-dialog__fade">
    <div v-if="visible" class="dk-dialog" @click.self="close">
      <div class="dk-dialog__content" :class="{ 'dialog-leave-active': !visible }">
        <header class="dk-dialog__header">
          <h3>{{ title }}</h3>
          <dk-icon
            class="dk-dialog__close-button"
            icon="IconClose"
            @click="close"
          ></dk-icon>
        </header>
        <main
          v-dk-scroll="true"
          class="dk-dialog__body"
          width="100%"
          height="80vh"
        >
          <slot></slot>
        </main>
        <footer class="dk-dialog__footer">
          <dk-button @click="close">Close</dk-button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style scoped>
  .dk-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dk-dialog__content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: calc(100vw - 60px);
    /* overflow: auto; */
    width: 100%;
  }
  .dk-dialog__body {
    max-height: calc(100vh - 180px);
    /* overflow-y: auto; */
  }

  .dk-dialog__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .dk-dialog__close-button {
    cursor: pointer;
  }

  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .dk-dialog__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  /* 过渡效果 */
  .dk-dialog__fade-enter-active,
  .dk-dialog__fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .dk-dialog__fade-enter-from,
  .dk-dialog__fade-leave-to {
    opacity: 0;
  }

  .dk-dialog__fade-enter-to,
  .dk-dialog__fade-leave-from {
    opacity: 1;
  }
</style>
