<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'VueDomeInputNumber',
    setup(props) {
      let value = ref<number>(0)
      return {
        value,
        props
      }
    }
  })
</script>
<template>
  <dk-input-number v-model="value" v-bind="props"></dk-input-number>
</template>
<style scoped>
  .dk-input-number {
    margin-bottom: 10px;
  }
</style>
