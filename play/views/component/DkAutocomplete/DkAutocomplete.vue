<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DkAutocompletePlay',
  setup() {
    const value = ref('')
    const value2 = ref('')
    const value3 = ref('')
    const value4 = ref('')

    const options = [
      { value: 'Vue' },
      { value: 'Vite' },
      { value: 'Vitest' },
      { value: 'TypeScript' }
    ]

    interface SlotItem {
      label: string
      code: string
    }

    const slotOptions: SlotItem[] = [
      { label: 'Vue', code: 'vue' },
      { label: 'Vite', code: 'vite' },
      { label: 'Vitest', code: 'vitest' },
      { label: 'TypeScript', code: 'ts' }
    ]

    interface CityItem { value: string }

    const cityList: CityItem[] = [
      { value: 'Shanghai' },
      { value: 'Beijing' },
      { value: 'Shenzhen' },
      { value: 'Guangzhou' }
    ]

    const fetchSuggestions = (queryString: string, cb: (list: CityItem[]) => void): void => {
      const q = (queryString || '').toLowerCase()
      const res = cityList.filter(item => item.value.toLowerCase().includes(q))
      setTimeout(() => cb(res), 200)
    }

    const fetchSuggestions2 = (queryString: string, cb: (list: CityItem[]) => void): void => {
      const q = (queryString || '').toLowerCase()
      const res = cityList.filter(item => item.value.toLowerCase().includes(q))
      setTimeout(() => cb(res), 500)
    }

    const onSelect = (item: unknown): void => {
      console.log('select:', item)
    }

    return {
      value,
      value2,
      value3,
      value4,
      options,
      slotOptions,
      fetchSuggestions,
      fetchSuggestions2,
      onSelect
    }
  }
})
</script>

<template>
  <div style="padding: 12px">
    <h3>本地 options</h3>
    <dk-autocomplete v-model="value" :options="options" clearable placeholder="请输入" @select="onSelect" />
    <div style="margin-top: 8px">value: {{ value }}</div>

    <h3 style="margin-top: 18px">聚焦触发（trigger-on-focus）</h3>
    <dk-autocomplete v-model="value3" :options="options" placeholder="点击输入框就出现下拉" trigger-on-focus />
    <div style="margin-top: 8px">value3: {{ value3 }}</div>

    <h3 style="margin-top: 18px">远程 fetch-suggestions</h3>
    <dk-autocomplete
      v-model="value2"
      :fetch-suggestions="fetchSuggestions"
      placeholder="输入关键字"
      :debounce="300"
      highlight-first-item
      @select="onSelect"
    />
    <div style="margin-top: 8px">value2: {{ value2 }}</div>

    <h3 style="margin-top: 18px">自定义下拉项（默认插槽）</h3>
    <dk-autocomplete
      v-model="value4"
      :options="slotOptions"
      value-key="label"
      placeholder="支持自定义 item 渲染"
      clearable
      @select="onSelect"
    >
      <template #default="{ item }">
        <div style="display:flex; justify-content:space-between; width:100%">
          <span>{{ item.label }}</span>
          <span style="opacity:.65; font-size:12px">{{ item.code }}</span>
        </div>
      </template>
    </dk-autocomplete>
    <div style="margin-top: 8px">value4: {{ value4 }}</div>

    <h3 style="margin-top: 18px">loading / empty 插槽</h3>
    <dk-autocomplete :fetch-suggestions="fetchSuggestions2" placeholder="输入触发异步" :debounce="200">
      <template #loading>
        <div style="padding: 6px 10px">正在加载...</div>
      </template>
      <template #empty>
        <div style="padding: 6px 10px; text-align:center">暂无匹配数据</div>
      </template>
    </dk-autocomplete>
  </div>
</template>
