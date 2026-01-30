<script lang="ts" setup>
import { computed, ref } from 'vue'

type Mode = 'local' | 'remote' | 'slot' | 'remoteSlots'

interface BaseItem {
  value: string
}

interface SlotItem {
  label: string
  code: string
}

const props = withDefaults(
  defineProps<{
    mode?: Mode
    placeholder?: string
    disabled?: boolean
    clearable?: boolean
    triggerOnFocus?: boolean
    debounce?: number
    valueKey?: string
    highlightFirstItem?: boolean
    hideLoading?: boolean
    size?: 'large' | 'medium' | 'small' | 'mini' | null
    showValue?: boolean
  }>(),
  {
    mode: 'local',
    placeholder: '',
    disabled: false,
    clearable: false,
    triggerOnFocus: true,
    debounce: 300,
    valueKey: 'value',
    highlightFirstItem: false,
    hideLoading: false,
    size: null,
    showValue: false
  }
)

const value = ref('')

const localOptions: BaseItem[] = [
  { value: 'Vue' },
  { value: 'Vite' },
  { value: 'Vitest' },
  { value: 'TypeScript' }
]

const focusOptions: BaseItem[] = [
  { value: 'vue' },
  { value: 'element' },
  { value: 'cooking' },
  { value: 'mint-ui' },
  { value: 'vuex' },
  { value: 'vue-router' },
  { value: 'babel' }
]

const slotOptions: SlotItem[] = [
  { label: 'Vue', code: 'vue' },
  { label: 'Vite', code: 'vite' },
  { label: 'Vitest', code: 'vitest' },
  { label: 'TypeScript', code: 'ts' }
]

const cityList: BaseItem[] = [
  { value: 'Shanghai' },
  { value: 'Beijing' },
  { value: 'Shenzhen' },
  { value: 'Guangzhou' }
]

const resolvedOptions = computed(() => {
  if (props.mode === 'slot') return slotOptions as unknown as (string | object)[]
  if (props.mode === 'local') return localOptions
  return focusOptions
})

const fetchSuggestions = (queryString: string, cb: (list: BaseItem[]) => void): void => {
  const q = (queryString || '').toLowerCase()
  const res = cityList.filter(item => item.value.toLowerCase().includes(q))
  setTimeout(() => cb(res), 300)
}

const fetchSuggestionsSlow = (queryString: string, cb: (list: BaseItem[]) => void): void => {
  const q = (queryString || '').toLowerCase()
  const res = cityList.filter(item => item.value.toLowerCase().includes(q))
  setTimeout(() => cb(res), 600)
}

const resolvedFetcher = computed(() => {
  if (props.mode === 'remote') return fetchSuggestions
  if (props.mode === 'remoteSlots') return fetchSuggestionsSlow
  return undefined
})
</script>

<template>
  <div>
    <dk-autocomplete
      v-model="value"
      :options="resolvedOptions"
      :fetch-suggestions="resolvedFetcher"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      :trigger-on-focus="triggerOnFocus"
      :debounce="debounce"
      :value-key="valueKey"
      :highlight-first-item="highlightFirstItem"
      :hide-loading="hideLoading"
      :size="size"
    >
      <template v-if="$slots.default" #default="scope">
        <slot v-bind="scope" />
      </template>
      <template v-if="$slots.loading" #loading>
        <slot name="loading" />
      </template>
      <template v-if="$slots.empty" #empty>
        <slot name="empty" />
      </template>
    </dk-autocomplete>

    <div v-if="showValue" style="margin-top: 8px">value: {{ value }}</div>
  </div>
</template>
