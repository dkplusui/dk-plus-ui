<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'RateComp',
    setup() {
      const data = reactive({
        checked: 1,
        readonly: true
      })
      const methods = reactive({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFunctionProps(item: number): void {
          console.log('item', item)
          alert(item)
        }
      })
      return {
        ...toRefs(methods),
        ...toRefs(data)
      }
    }
  })
</script>
<template>
  <div class="box">
    <div>
      <p>checked:{{ checked }}</p>
      <dk-rate v-model="checked"></dk-rate>
    </div>
    <div>
      <p>checked:{{ checked }}</p>
      <dk-rate v-model="checked" :no-select-color="'yellow'" :select-color="'red'"></dk-rate>
    </div>
    <div>
      <p>checked:{{ checked }}</p>
      <dk-rate v-model="checked" :readonly="readonly"></dk-rate>
    </div>
    <div>
      <p>checked:{{ checked }}</p>
      <dk-rate v-model="checked" :no-select-color="'yellow'" :select-color="'red'" :number-value="5" :icon-size="30" :onchange="setFunctionProps"></dk-rate>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .box {
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .dk-shadow {
      margin-bottom: 10px;
      width: calc(50% - 10px);
    }
  }
</style>
