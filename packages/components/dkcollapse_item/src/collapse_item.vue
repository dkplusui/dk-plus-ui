<script lang="ts">
  /**
   * @name dkcollapse_item
   * @author fanKai16
   * @Time 2023/08/02
   * @description 折叠面板-父组件
   **/
  import { defineComponent, reactive, toRefs, watch } from 'vue'
  import { dkCollapseItemProps } from './props'
  export default defineComponent({
    name: 'DkCollapseItem',
    props: dkCollapseItemProps,
    emits: ['change'],
    setup(props, { emit }) {
      const { name, title, icon, active, modelValue } = toRefs(props)
      const data = reactive({
        isActive: false,
        with: 0,
        height: 0
      })
      const onClickTitle = (): void => {
        emit('change', name.value)
      }
      watch(
        () => modelValue.value,
        val => {
          data.isActive = val
        },
        {
          immediate: true
        }
      )
      watch(
        () => active.value,
        val => {
          data.isActive = val
        },
        {
          immediate: true
        }
      )
      return {
        ...toRefs(data),
        data,
        title,
        icon,
        name,
        onClickTitle
      }
    }
  })
</script>
<template>
  <div class="dk-collapseItem">
    <div
      role="tab"
      class="dk-collapseItem_title"
      :class="{ 'dk-collapseItem_title_active': isActive }"
      @click="onClickTitle"
    >
      <div class="dk-collapseItem_left">
        <slot name="title">{{ title }}{{ isActive }}</slot>
      </div>
      <div
        class="dk-collapseItem_right"
        :class="isActive ? 'dk-collapseItem_right-up' : 'dk-collapseItem_right-down'"
      >
        <dk-icon :icon="icon ? icon : 'IconRightArrow1'"></dk-icon>
      </div>
    </div>
    <dk-transition :is-active="isActive">
      <div>
        <slot></slot>
      </div>
    </dk-transition>
  </div>
</template>
