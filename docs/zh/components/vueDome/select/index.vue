<script setup lang="ts">
import { computed, ref, watch } from 'vue'

type Mode =
  | 'basic'
  | 'optionsProps'
  | 'disabledOption'
  | 'disabledSelect'
  | 'clearable'
  | 'size'
  | 'multiple'
  | 'collapseTags'
  | 'maxCollapseTags'
  | 'slotOption'
  | 'slotHeaderFooter'
  | 'optionGroup'
  | 'valueKey'
  | 'emptySlot'
  | 'loadingSlot'
  | 'remote'

const props = withDefaults(
  defineProps<{
    mode?: Mode
    showValue?: boolean
  }>(),
  {
    mode: 'basic',
    showValue: false
  }
)

const value = ref<unknown>('')

watch(
  () => props.mode,
  m => {
    if (m === 'multiple' || m === 'collapseTags' || m === 'maxCollapseTags') value.value = ['A']
    else if (m === 'valueKey') value.value = { id: 2, label: '上海' }
    else value.value = ''
  },
  { immediate: true }
)

const optionsBasic = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '禁用项', value: 'X', disabled: true }
]

const optionsNoDisabled = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' }
]

const optionsValueKey = [
  { id: 1, label: '北京' },
  { id: 2, label: '上海' },
  { id: 3, label: '深圳' }
]

const optionsPropsList = [
  { name: '选项 A', id: 'A' },
  { name: '选项 B', id: 'B' },
  { name: '禁用项', id: 'X', isDisabled: true }
]

const remoteLoading = ref(false)
const remoteOptions = ref<{ label: string; value: string }[]>([])
const remoteMethod = (query: string): void => {
  remoteLoading.value = true
  const q = (query || '').trim().toLowerCase()
  const all = [
    { label: '北京', value: 'beijing' },
    { label: '上海', value: 'shanghai' },
    { label: '深圳', value: 'shenzhen' },
    { label: '广州', value: 'guangzhou' }
  ]
  window.setTimeout(() => {
    remoteOptions.value = q ? all.filter(i => i.label.toLowerCase().includes(q) || i.value.includes(q)) : all
    remoteLoading.value = false
  }, 400)
}

const selectProps = computed(() => {
  const m = props.mode

  if (m === 'optionsProps') {
    return {
      options: optionsPropsList,
      props: { label: 'name', value: 'id', disabled: 'isDisabled' }
    }
  }

  if (m === 'disabledSelect') return { options: optionsNoDisabled, disabled: true }
  if (m === 'clearable') return { options: optionsNoDisabled, clearable: true }
  if (m === 'multiple') return { options: optionsNoDisabled, multiple: true }
  if (m === 'collapseTags') return { options: optionsNoDisabled, multiple: true, collapseTags: true }
  if (m === 'maxCollapseTags') return { options: optionsNoDisabled, multiple: true, collapseTags: true, maxCollapseTags: 1 }
  if (m === 'valueKey') return { options: optionsValueKey, valueKey: 'id' }
  if (m === 'emptySlot') return { options: [] as unknown[] }
  if (m === 'loadingSlot') return { options: [] as unknown[], loading: true }
  if (m === 'remote') {
    return {
      options: remoteOptions.value,
      filterable: true,
      remote: true,
      remoteMethod,
      loading: remoteLoading.value,
      loadingText: '加载中...'
    }
  }

  // basic / disabledOption
  return { options: optionsBasic }
})

const sizeValueLarge = ref('A')
const sizeValueMedium = ref('A')
const sizeValueSmall = ref('A')
const sizeValueMini = ref('A')
</script>

<template>
  <div style="padding: 12px">
    <template v-if="mode === 'size'">
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap">
        <dk-select v-model="sizeValueLarge" size="large" :options="optionsNoDisabled" />
        <dk-select v-model="sizeValueMedium" size="medium" :options="optionsNoDisabled" />
        <dk-select v-model="sizeValueSmall" size="small" :options="optionsNoDisabled" />
        <dk-select v-model="sizeValueMini" size="mini" :options="optionsNoDisabled" />
      </div>
    </template>

    <template v-else-if="mode === 'slotOption'">
      <dk-select v-model="value">
        <dk-option label="北京" value="beijing">
          <div style="display: flex; justify-content: space-between; width: 100%">
            <span>北京</span>
            <span style="opacity: 0.7">Beijing</span>
          </div>
        </dk-option>
        <dk-option label="上海" value="shanghai">
          <div style="display: flex; justify-content: space-between; width: 100%">
            <span>上海</span>
            <span style="opacity: 0.7">Shanghai</span>
          </div>
        </dk-option>
        <dk-option label="南京" value="nanjing">
          <div style="display: flex; justify-content: space-between; width: 100%">
            <span>南京</span>
            <span style="opacity: 0.7">Nanjing</span>
          </div>
        </dk-option>
      </dk-select>
    </template>

    <template v-else-if="mode === 'optionGroup'">
      <dk-select v-model="value">
        <dk-option-group label="热门城市">
          <dk-option label="上海" value="shanghai" />
          <dk-option label="北京" value="beijing" />
        </dk-option-group>
        <dk-option-group label="城市名">
          <dk-option label="南京" value="nanjing" />
          <dk-option label="成都" value="chengdu" />
          <dk-option label="深圳" value="shenzhen" />
          <dk-option label="广州" value="guangzhou" />
          <dk-option label="大连" value="dalian" />
        </dk-option-group>
      </dk-select>
    </template>

    <template v-else-if="mode === 'slotHeaderFooter'">
      <dk-select v-model="value" :options="optionsNoDisabled">
        <template #header>
          <div style="padding: 6px 10px; border-bottom: 1px solid #ebeef5">
            <dk-checkbox style="margin-right: 8px" /> 全选（示例）
          </div>
        </template>
        <template #footer>
          <div style="padding: 8px 10px; border-top: 1px solid #ebeef5">
            <dk-button size="mini" type="success">Add an option</dk-button>
          </div>
        </template>
      </dk-select>
    </template>

    <template v-else>
      <dk-select v-model="value" v-bind="selectProps">
        <template v-if="mode === 'emptySlot'" #empty>
          <div style="padding: 6px 10px; color: #909399">暂无数据</div>
        </template>
        <template v-if="mode === 'loadingSlot'" #loading>
          <div style="padding: 6px 10px; color: #409eff">loading icon</div>
        </template>
      </dk-select>
    </template>

    <div v-if="showValue" style="margin-top: 8px">value: {{ value }}</div>
  </div>
</template>
