<script lang="ts">
  /**
   * @name DkContainer
   * @author fanKai16
   * @Time 2023/06/12
   * @description 面布局
   **/
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DkContainerMs',
    setup() {
      const state = reactive({
        name: 'DkContainer'
      })
      return {
        ...toRefs(state)
      }
    }
  })
</script>
<template>
  <div class="container_dome">
    <h6>1.只有header的布局</h6>
    <dk-container>
      <dk-header height="80" padding="20"> header </dk-header>
    </dk-container>
    <br />
    <h6>2.有header 和 main 的布局</h6>
    <dk-container>
      <dk-header height="80" padding="20"> header </dk-header>
      <dk-main> main </dk-main>
    </dk-container>
    <br />
    <h6>3.有header 和 main 的布局 和 footer</h6>
    <dk-container>
      <dk-header height="80" padding="20"> header </dk-header>
      <dk-main> main </dk-main>
      <dk-footer> footer </dk-footer>
    </dk-container>
    <br />
    <h6>4.有 aside 左侧</h6>
    <dk-container>
      <dk-laside> Laside </dk-laside>
      <dk-main> main </dk-main>
    </dk-container>
    <h6>5.双 aside 左右侧</h6>
    <dk-container>
      <dk-laside> Laside </dk-laside>
      <dk-main> main </dk-main>
      <dk-laside> Laside </dk-laside>
    </dk-container>
    <h6>5.~~</h6>
    <dk-container>
      <dk-header height="80" padding="20"> header </dk-header>
      <dk-container>
        <dk-laside> Laside </dk-laside>
        <dk-main> main </dk-main>
        <dk-laside> Laside </dk-laside>
      </dk-container>
      <dk-footer> footer </dk-footer>
    </dk-container>
  </div>
</template>
<style lang="scss" scoped>
  .container_dome {
    width: 100%;
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    h6 {
      margin-bottom: 10px;
    }
    .dk-header {
      background-color: #b35757;
      color: #333;
      text-align: center;
      line-height: 80px;
    }
    .dk-main {
      background-color: #3178c6;
      color: #fff;
      text-align: center;
      line-height: 160px;
    }
    .dk-laside {
      background-color: #65adf0;
      color: #fff;
      text-align: center;
      line-height: 200px;
    }
    .dk-footer {
      background-color: #07996d;
      color: #333;
      text-align: center;
      line-height: 80px;
    }
  }
</style>./DkContainer.vue
