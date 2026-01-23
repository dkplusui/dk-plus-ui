<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'LayoutComp',
    setup() {
      return {}
    }
  })
</script>

<template>
  <h4>基础布局</h4>
  <div class="border">
    <dk-row>
      <dk-col><div class="dark"></div></dk-col>
    </dk-row>
    <dk-row>
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
    </dk-row>
    <dk-row>
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
      <dk-col><div class="dark"></div></dk-col>
    </dk-row>
    <dk-row>
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
    </dk-row>
    <dk-row>
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
      <dk-col><div class="dark"></div></dk-col>
    </dk-row>
  </div>
  <h4>分栏间隔</h4>
  <div class="border">
    <dk-row :gutter="30">
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
    </dk-row>
  </div>
  <h4>混合布局</h4>
  <div class="border">
    <dk-row :gutter="20">
      <dk-col :span="5"><div class="dark"></div></dk-col>
      <dk-col :span="10"><div class="light"></div></dk-col>
    </dk-row>
    <dk-row :gutter="20">
      <dk-col :span="5"><div class="dark"></div></dk-col>
      <dk-col :span="10"><div class="light"></div></dk-col>
      <dk-col :span="5"><div class="dark"></div></dk-col>
      <dk-col :span="10"><div class="light"></div></dk-col>
    </dk-row>
    <dk-row :gutter="20">
      <dk-col :span="5"><div class="dark"></div></dk-col>
      <dk-col :span="20"><div class="light"></div></dk-col>
      <dk-col :span="5"><div class="dark"></div></dk-col>
    </dk-row>
  </div>
  <h4>列偏移</h4>
  <div class="border">
    <dk-row>
      <dk-col :span="10" :offset="6"><div class="dark"></div></dk-col>
      <dk-col :offset="1"><div class="light"></div></dk-col>
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
    </dk-row>
  </div>
</template>

<style lang="scss" scoped>
  h4 {
    margin: 20px 0;
  }
  .border {
    border: 1px solid #ccc;
    padding: 10px;
    .dk-row {
      margin-top: 10px;
      .dark,
      .light {
        height: 100%;
        height: 32px;
        border-radius: 4px;
      }
      .dark {
        background-color: #ccc;
      }
      .light {
        background-color: #eee;
      }
    }
    .dk-row:first-child {
      margin-top: 0;
    }
  }
</style>
