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
    else if (m === 'valueKey') value.value = { id: 2, label: 'Shanghai' }
    else value.value = ''
  },
  { immediate: true }
)

const optionsBasic = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
  { label: 'Disabled', value: 'X', disabled: true }
]

const optionsNoDisabled = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
  { label: 'Option C', value: 'C' }
]

const optionsValueKey = [
  { id: 1, label: 'Beijing' },
  { id: 2, label: 'Shanghai' },
  { id: 3, label: 'Shenzhen' }
]

const optionsPropsList = [
  { name: 'Option A', id: 'A' },
  { name: 'Option B', id: 'B' },
  { name: 'Disabled', id: 'X', isDisabled: true }
]

const remoteLoading = ref(false)
const remoteOptions = ref<{ label: string; value: string }[]>([])
const remoteMethod = (query: string): void => {
  remoteLoading.value = true
  const q = (query || '').trim().toLowerCase()
  const all = [
    { label: 'Beijing', value: 'beijing' },
    { label: 'Shanghai', value: 'shanghai' },
    { label: 'Shenzhen', value: 'shenzhen' },
    { label: 'Guangzhou', value: 'guangzhou' }
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
      loadingText: 'Loading...'
    }
  }

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
        <dk-option label="Beijing" value="beijing">
          <div style="display: flex; justify-content: space-between; width: 100%">
            <span>Beijing</span>
            <span style="opacity: 0.7">Beijing</span>
          </div>
        </dk-option>
        <dk-option label="Shanghai" value="shanghai">
          <div style="display: flex; justify-content: space-between; width: 100%">
            <span>Shanghai</span>
            <span style="opacity: 0.7">Shanghai</span>
          </div>
        </dk-option>
        <dk-option label="Nanjing" value="nanjing">
          <div style="display: flex; justify-content: space-between; width: 100%">
            <span>Nanjing</span>
            <span style="opacity: 0.7">Nanjing</span>
          </div>
        </dk-option>
      </dk-select>
    </template>

    <template v-else-if="mode === 'optionGroup'">
      <dk-select v-model="value">
        <dk-option-group label="Popular cities">
          <dk-option label="Shanghai" value="shanghai" />
          <dk-option label="Beijing" value="beijing" />
        </dk-option-group>
        <dk-option-group label="City name">
          <dk-option label="Nanjing" value="nanjing" />
          <dk-option label="Chengdu" value="chengdu" />
          <dk-option label="Shenzhen" value="shenzhen" />
          <dk-option label="Guangzhou" value="guangzhou" />
          <dk-option label="Dalian" value="dalian" />
        </dk-option-group>
      </dk-select>
    </template>

    <template v-else-if="mode === 'slotHeaderFooter'">
      <dk-select v-model="value" :options="optionsNoDisabled">
        <template #header>
          <div style="padding: 6px 10px; border-bottom: 1px solid #ebeef5">
            <dk-checkbox style="margin-right: 8px" /> All (demo)
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
          <div style="padding: 6px 10px; color: #909399">No data</div>
        </template>
        <template v-if="mode === 'loadingSlot'" #loading>
          <div style="padding: 6px 10px; color: #409eff">loading icon</div>
        </template>
      </dk-select>
    </template>

    <div v-if="showValue" style="margin-top: 8px">value: {{ value }}</div>
  </div>
</template>
