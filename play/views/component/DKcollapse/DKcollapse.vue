<script lang="ts">
  /**
   * @name DKcollapseS
   * @author fanKai16
   * @Time 2023/06/30
   * @description 面布局
   **/
  import { defineComponent, reactive, toRefs, ref } from 'vue'
  export default defineComponent({
    name: 'DkContainer',
    setup() {
      const state = reactive({
        NackName: ['1', '3'],
        list: [
          {
            id: 1,
            title: '这是名字1',
            name: '1',
            isShow: true
          },
          {
            id: 2,
            title: '这是名字2',
            name: '2',
            isShow: false
          },
          {
            id: 3,
            title: '这是名字3',
            name: '3',
            isShow: false
          }
        ]
      })
      const activeName = ref('1')
      const handleChange = (e: string): void => {
        console.log(e)
        activeName.value = e
      }
      return {
        ...toRefs(state),
        activeName,
        handleChange
      }
    }
  })
</script>
<template>
  <div>
    <div class="box">
      <h2>手风琴效果 默认展开参数为数组 123 {{ NackName }}</h2>
      <h2>关闭手风琴效果 设置accordion</h2>
      <dk-collapse v-model="NackName" accordion @change="handleChange">
        <dk-collapse-item title="折叠1" name="1">
          <div>996996996996996996🤬🤬🤬</div>
        </dk-collapse-item>
        <dk-collapse-item title="折叠2" name="2">
          <div>996996996996996996🤬🤬🤬</div>
        </dk-collapse-item>
        <dk-collapse-item title="折叠3" name="3">
          <div>9999999999🤬🤬🤬</div>
        </dk-collapse-item>
      </dk-collapse>
    </div>
  </div>
</template>
