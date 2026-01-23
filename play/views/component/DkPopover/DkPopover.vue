<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'DkPopoverComp',
    setup() {
      const data = reactive({
        visible: false,
        visible2: false,
        visible3: true,
        visible4: false,
        visible5: false,
        visible6: true,
        visible7: false,
        visible8: true
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
<template>
  <!-- <div class="container">
  </div> -->
  <div class="box" style="margin-left: 200px">
    <h4>基本使用</h4>
    <dk-popover v-model="visible">
      <template #popup>
        <div>popup</div>
        <p>
          弹出确认框
          <dk-button size="mini">取消</dk-button>
          <dk-button size="mini" type="primary">确认</dk-button>
        </p>
      </template>
      <template #default> <dk-button>hover</dk-button> </template>
    </dk-popover>
  </div>
  <div class="box" style="margin-left: 200px">
    <h4>click激活</h4>
    <dk-popover v-model="visible2" trigger="click">
      <template #popup>
        <div>popup</div>
        <p>trigger="click"</p>
      </template>
      <template #default> <dk-button>click</dk-button> </template>
    </dk-popover>
  </div>
  <div class="box" style="margin-left: 200px">
    <h4>默认打开</h4>
    <dk-popover v-model="visible3">
      <template #popup>
        <div>popup</div>
        <p>visible3 = true</p>
      </template>
      <template #default>
        <p>默认</p>
        <p>打开</p>
      </template>
    </dk-popover>
  </div>
  <div class="box" style="margin-left: 200px">
    <h4>placement</h4>
    <dk-popover v-model="visible4" placement="left" width="120px">
      <template #popup>
        <div>popup</div>
        <p>visible4 = true placement='left'</p>
      </template>
      <template #default> <dk-button>left</dk-button> </template>
    </dk-popover>
    <dk-popover v-model="visible5" placement="right" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='right'</p>
      </template>
      <template #default> <dk-button>right</dk-button> </template>
    </dk-popover>
    <div style="margin-top: 80px"></div>
    <dk-popover v-model="visible6" placement="top" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='top'</p>
      </template>
      <template #default> <dk-button>top</dk-button> </template>
    </dk-popover>
    <dk-popover v-model="visible7" placement="bottom" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='bottom'</p>
      </template>
      <template #default> <dk-button>bottom</dk-button> </template>
    </dk-popover>
    <div style="margin-top: 80px"></div>
    <dk-popover v-model="visible8" placement="top-left" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='top-left'</p>
      </template>
      <template #default> <dk-button>top-left</dk-button> </template>
    </dk-popover>
    <div style="margin-top: 80px"></div>
    <dk-popover v-model="visible8" placement="top-right" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='top-right'</p>
      </template>
      <template #default> <dk-button>top-right</dk-button> </template>
    </dk-popover>
    <dk-popover v-model="visible8" placement="bottom-left" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='bottom-left'</p>
      </template>
      <template #default> <dk-button>bottom-left</dk-button> </template>
    </dk-popover>
    <div style="margin-top: 80px"></div>
    <dk-popover v-model="visible8" placement="bottom-right" width="120px">
      <template #popup>
        <div>popup</div>
        <p>placement='bottom-right'</p>
      </template>
      <template #default> 
        <dk-button text>bottom-right</dk-button>
      </template>
    </dk-popover>
  </div>
</template>

<style lang="scss" scoped>
.box{
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
