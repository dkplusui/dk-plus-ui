<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'DkSwitchComp',
    setup() {
      const checked = ref(true)
      return {
        checked
      }
    }
  })
</script>
<template>
  <div class="box">
    <h4>基础使用</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" />
    </div>
  </div>
  <div class="box">
    <h4>尺寸</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" size="large" />
      <dk-switch v-model="checked" size="medium" />
      <dk-switch v-model="checked" size="small" />
      <dk-switch v-model="checked" size="mini"></dk-switch>
    </div>
  </div>
  <div class="box">
    <h4>选中颜色</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" checked-color="#359a35" unchecked-color="#d33f3f" />
    </div>
  </div>
  <div class="box">
    <h4>禁用</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" disabled />
    </div>
  </div>
  <div class="box">
    <h4>文案设置</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" checked-text="是" unchecked-text="否" />
    </div>
    <div class="switch-list">
      <dk-switch v-model="checked" checked-text="设置了宽度" unchecked-text="超出的部分显示省略号" width="100px" />
      <dk-switch
        v-model="checked"
        checked-text="不设置宽度"
        unchecked-text="自适应"
      />
    </div>
  </div>
  <div class="box">
    <h4>带有图标的开关</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" checked-text="是" unchecked-text="否" />
      <dk-switch v-model="checked" checked-icon="IconCheck" unchecked-icon="IconClose" />
    </div>
  </div>
  <div class="box">
    <h4>加载效果的开关</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" :loading="checked" checked-color="#359a35" unchecked-color="#d33f3f" />
    </div>
  </div>
  <div class="box">
    <h4>自定义图标开关</h4>
    <div class="switch-list">
      <dk-switch v-model="checked" checked-custom-icon="LeftFastForward" unchecked-custom-icon="RightFastForward" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .switch-list {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
</style>
