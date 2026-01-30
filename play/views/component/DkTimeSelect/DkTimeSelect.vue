<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DkTimeSelectPlay',
  setup() {
    const basic = ref('')
    const disabled = ref('10:00')
    const clearable = ref('11:00')
    const limit = ref('')
    const editable = ref('')
    return { basic, disabled, clearable, limit, editable }
  }
})
</script>

<template>
  <div style="padding: 12px">
    <h3>基础用法</h3>
    <dk-time-select v-model="basic" start="09:00" end="18:00" step="00:30" />
    <div style="margin: 8px 0 16px">value: {{ basic }}</div>

    <h3>禁用</h3>
    <dk-time-select v-model="disabled" disabled start="09:00" end="18:00" step="00:30" />
    <div style="margin: 8px 0 16px">value: {{ disabled }}</div>

    <h3>可清空</h3>
    <dk-time-select v-model="clearable" clearable start="09:00" end="18:00" step="00:30" />
    <div style="margin: 8px 0 16px">value: {{ clearable }}</div>

    <h3>minTime / maxTime（禁用超出范围的选项）</h3>
    <dk-time-select v-model="limit" start="09:00" end="18:00" step="00:30" min-time="10:00" max-time="16:00" />
    <div style="margin: 8px 0 16px">value: {{ limit }}</div>

    <h3>不可编辑（readonly）</h3>
    <dk-time-select v-model="editable" :editable="false" placeholder="请选择时间" start="09:00" end="18:00" step="00:30" />
    <div style="margin-top: 8px">value: {{ editable }}</div>
  </div>
</template>
