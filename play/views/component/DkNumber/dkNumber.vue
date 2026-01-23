<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Number',
  emits: ['update:modelValue'],
  setup() {
    let value = ref<number>(5)
    const handleChange = (value: number): void => {
      console.log(value);
    }
    const msg = ref<string>('asdf')
    const changeMsg = (): void => {
      msg.value = 'aaa'
    }
    return {
      value,
      handleChange,
      msg,
      changeMsg
    }
  }
})
</script>
<template>
  <div class="number">
    <h4>位置</h4>
    <dk-input-number v-model="value" position placeholder="left"></dk-input-number>
    <dk-input-number v-model="value" position="left" placeholder="left"></dk-input-number>
    <dk-input-number v-model="value" position="right" placeholder="left"></dk-input-number>
    <dk-input-number v-model="value" position="aa" placeholder="number"></dk-input-number>
    <h4>浮点型</h4>
    <dk-input-number v-model="value" precision="2" step="0.2" strict @change="handleChange"></dk-input-number>
    <h4>禁用</h4>
    <dk-input-number v-model="value" disabled></dk-input-number>
    <h4>最大、最小值</h4>
    <dk-input-number v-model="value" :min="0" :max="10"></dk-input-number>
    <h4>严格模式</h4>
    <dk-input-number v-model="value" :step="2" strict></dk-input-number>
    <h4>步长</h4>
    <dk-input-number v-model="value" :step="2"></dk-input-number>
    <h4>尺寸</h4>
    <dk-input-number v-model="value" position="left" size="large"></dk-input-number>
    <dk-input-number v-model="value" position="left" size="medium"></dk-input-number>
    <dk-input-number v-model="value" position="left" size="small"></dk-input-number>
    <dk-input-number v-model="value" position="left" size="mini"></dk-input-number>
    父组件{{ value }}
  </div>
</template>

<style lang="scss">
  .number{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>./DkNumber.vue
