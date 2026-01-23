<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'LayoutComp',
    setup(props) {
      return { props }
    }
  })
</script>

<template>
  <div class="layout">
    <dk-row>
      <dk-col :span="10" :offset="6"><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
      <dk-col><div class="dark"></div></dk-col>
      <dk-col><div class="light"></div></dk-col>
    </dk-row>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .docs-row {
    .dark,
    .light {
      height: 100%;
      height: 32px;
      border-radius: 4px;
      opacity: 0.5;
    }

    .dark {
      background-color: #ccc;
    }

    .light {
      background-color: #eee;
    }
  }
</style>
