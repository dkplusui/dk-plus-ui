<script lang="ts" setup>
  import { ref } from 'vue'
  const dialogVisible = ref(false)
</script>

<template>
  <div class="dk-watermark-box">
    <dk-button @click="dialogVisible = true">展示对话框</dk-button>
    <dk-dialog v-model="dialogVisible">
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈<br>
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈<br>
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈<br>
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈<br>
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
    </dk-dialog>
  </div>
</template>
