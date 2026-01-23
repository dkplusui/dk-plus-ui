<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'DkRadioComp',
    setup() {
      const radioValue = ref('radio2')
      const handleChange = (name: string): void => {
        console.log(name)
      }
      const groupValue = ref('radio2')
      const handleGroupChange = (name: string): void => {
        console.log(name);
        
      }
      return {
        radioValue,
        handleChange,
        groupValue,
        handleGroupChange
      }
    }
  })
</script>
<template>
  <div class="box">
    <h4>基础使用</h4>
    <div class="list">
      <dk-radio
        v-model="radioValue"
        label="option 1 - disabled"
        name="radio1-disabled"
        disabled
        size="large"
        @change="handleChange"
      />
      <dk-radio
        v-model="radioValue"
        label="option 1 - large"
        name="radio1"
        size="large"
        @change="handleChange"
      />
      <dk-radio
        v-model="radioValue"
        label="option 2 - medium"
        name="radio2"
        size="medium"
        @change="handleChange"
      />
      <dk-radio
        v-model="radioValue"
        label="option 3 - small"
        name="radio3"
        size="small"
        @change="handleChange"
      />
      <dk-radio
        v-model="radioValue"
        label="option 3 - default"
        name="radio3"
        @change="handleChange"
      />
      <dk-radio
        v-model="radioValue"
        label="option 4 - mini"
        name="radio4"
        size="mini"
        @change="handleChange"
      />
    </div>
  </div>
  <div class="box">
    <h4>group 组</h4>
    <dk-radio-group v-model="groupValue" @change="handleGroupChange">
      <dk-radio label="option 1" name="radio1" disabled />
      <dk-radio label="option 2" name="radio2" border />
      <dk-radio label="option 3" name="radio3" checked-color="#ee4f4f" unchecked-color="#ce853f" />
    </dk-radio-group>
  </div>
</template>

<style lang="scss" scoped>
  .box {
    margin-bottom: 20px;
    .list {
      display: flex;
      flex-wrap: wrap;
      .dk-radio {
        margin-right: 20px;
      }
    }
  }
</style>
