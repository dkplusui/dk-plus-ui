<script lang="ts">
  /**
   * @name dk-collapse
   * @author fanKai16
   * @Time 2023/08/02
   * @description 折叠面板nextTick
   **/
  import {
    defineComponent,
    toRefs,
    ref,
    reactive,
    onMounted,
    type ComponentOptions
  } from 'vue'

  import { dkcollapse } from './props'
  import { getCollapseSlot } from '../../_hooks'
  export default defineComponent({
    name: 'DkCollapse',
    props: dkcollapse,
    emits: ['change', 'update:modelValue'],
    setup(props, { slots, emit }) {
      const dkCollapse = ref<Element>()
      dkCollapse.value = document.createElement('div')
      const { getSlot, refresh } = getCollapseSlot(props)
      const { modelValue, accordion } = toRefs(props)
      const data = reactive({
        slotList: getSlot(slots),
        RenewalTime: new Date().getTime() as number
      })
      const handleChange = (e: string): void => {
        data.slotList = refresh(data.slotList, e, accordion.value)
        emit('update:modelValue', e)
      }
      onMounted(() => {
        const InParameter = modelValue.value || []

        if (!Array.isArray(InParameter)) {
          console.error('The parameter type must be an array. 入参类型必须为数组')
        } else {
          const InParameterArray = InParameter as string[]
          const slotList = data.slotList

          for (let oIndex = 0, oLen = slotList.length; oIndex < oLen; oIndex++) {
            const slot = slotList[oIndex] as ComponentOptions
            const name = slot.name || ''

            if (InParameterArray.includes(name)) {
              slot.modelValue = true
            }
          }
        }
      })
      return {
        handleChange,
        ...toRefs(data),
        dkCollapse
      }
    }
  })
</script>
<template>
  <div ref="dkCollapse" class="dk-collapse" role="tablist" aria-multiselectable="true">
    <dk-collapse-item
      v-for="(item, ind) in slotList"
      ref="dkCollapseItem"
      :key="ind"
      v-model="item.modelValue"
      :title="item.title"
      :name="item.name"
      @change="handleChange"
    >
      <!-- TODO: 这里需要兼容一下 兼容数据结构 -->
      <component
        :is="component.type"
        v-for="(component, index) in item.children"
        :key="index"
      >
        <template v-if="typeof component.children === 'object'">
          <component
            :is="childComponent.type"
            v-for="(childComponent, childIndex) in component.children"
            :key="childIndex"
          >
            {{ childComponent.children }}
          </component>
        </template>
        <template v-else>
          {{ component.children }}
        </template>
      </component>
    </dk-collapse-item>
  </div>
</template>
