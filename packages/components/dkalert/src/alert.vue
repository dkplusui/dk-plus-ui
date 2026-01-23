<script lang="ts">
  /**-
   * @name dk-alert
   * @author zdy
   * @Time 2023/07/06
   * @description 提示
   **/
  import { defineComponent, ref, toRefs } from 'vue'
  import { dkAlertProps } from './props'
  import { getAlert } from '../../_hooks'
  export default defineComponent({
    name: 'DkAlert',
    props: dkAlertProps,
    emits: ['close'],
    setup(Props, { emit }) {
      const dkAlertRef = ref<HTMLElement>()
      const alertVisible = ref<boolean>(true)
      const { type, title, description, center, closable, icon, closeIcon } =
        toRefs(Props)

      const { isSuccess, styleList } = getAlert(Props)

      const EventClick = (): void => {
        emit('close', onClose())
      }

      //关闭alert组件
      const onClose = (): void => {
        alertVisible.value = false
      }

      return {
        dkAlertRef,
        type: type.value || 'info',
        title,
        description,
        center: center.value || false,
        closable: closable.value,
        icon,
        closeIcon: closeIcon.value || 'IconShanchu1',
        EventClick,
        alertVisible,
        onClose,
        isSuccess,
        styleList
      }
    }
  })
</script>
<template>
  <template v-if="alertVisible">
    <div
      ref="dkAlertRef"
      :class="[`dk-alert`, `is-alert-${type}`, center ? `dk-alert-is-center` : '']"
      :style="[styleList]"
    >
      <slot v-if="icon === '' || icon === null" name="icon"></slot>
      <div v-if="icon">
        <dk-icon :icon="icon"></dk-icon>
      </div>

      <div class="dk-alert-content">
        <div :class="[description ? 'dk-alert-is-bold' : '']"><slot></slot></div>
        <div v-if="description" class="dk-alert-description">{{ description }}</div>
      </div>

      <div v-if="!closable">
        <slot v-if="closeIcon === '' || closeIcon === null" name="closeIcon"></slot>
        <div class="dk-alert-close-btn">
          <dk-icon :icon="closeIcon" @click="EventClick"></dk-icon>
        </div>
      </div>
    </div>
  </template>
</template>
