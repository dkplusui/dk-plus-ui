<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ScrollBarComp',
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="docs-scroll">
    <dk-scrollbar v-bind="$attrs">
      <div :class="$attrs.transverse === 'true' ? 'item-list' : ''">
        <div v-for="item in 20" :key="item" class="item">{{ item }}</div>
      </div>
    </dk-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.docs-scroll {
  .item-list {
    width: fit-content;
    display: flex;

    .item {
      width: 50px;
    }
  }

  .item {
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
}
</style>
