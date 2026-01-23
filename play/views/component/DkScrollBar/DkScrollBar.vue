<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'ScrollbarComponent',
    setup() {
      interface ScrollType {
        scrollTop: number
        scrollLeft: number
      }
      const handleScrollChange = (evt: ScrollType): void => {
        console.log(evt)
      }
      return {
        handleScrollChange
      }
    }
  })
</script>

<template>
  <div class="scroll-box">
    <h4>基础实用</h4>
    <dk-scrollbar height="200px" bar-width="6px" thumb-color="#1cb1a4">
      <div v-for="item in 20" :key="item" class="scrollbar-list-item">{{ item }}</div>
    </dk-scrollbar>
    <h4>横向滚动</h4>
    <dk-scrollbar height="80px" track-color="#ccc" bar-width="6px" thumb-color="#1cb1a4">
      <div class="item-list">
        <div v-for="item in 20" :key="item" class="scrollbar-list-item">{{ item }}</div>
      </div>
    </dk-scrollbar>
    <h4>v-scroll指令</h4>
    <div 
      v-dk-scroll="true"
      thumb-color="#1cb1a4" 
      class="instruct-box"
      thumb-radius="0"
      bar-width="10px"
      track-color="#ccc"
      width="100%"
      height="100px"
    >
      <div class="item-list">
        <div v-for="item in 20" :key="item" class="scrollbar-list-item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h4 {
    margin-top: 20px;
  }
  .instruct-box {
    width: 100%;
  }
  .item-list,
  .instruct-box {
    width: fit-content;
    display: flex;
    .scrollbar-list-item {
      width: 50px;
    }
  }
  .scrollbar-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: rgba($color: #1cb1a4, $alpha: 0.5);
    color: #fff;
  }
</style>
