<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'DkSelectPlay',
  setup() {
    const basicValue = ref('')
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

    const optionsPropsList = [
      { name: '选项 A', id: 'A' },
      { name: '选项 B', id: 'B' },
      { name: '禁用项', id: 'X', isDisabled: true }
    ]

    const optionsValueKey = [
      { id: 1, label: '北京' },
      { id: 2, label: '上海' },
      { id: 3, label: '深圳' }
    ]

    const clearableValue = ref('A')
    const disabledValue = ref('A')
    const optionsPropsValue = ref('')

    const multipleValue = ref<string[]>(['A'])
    const collapseTagsValue = ref<string[]>(['A', 'B', 'C'])
    const maxCollapseTagsValue = ref<string[]>(['A', 'B', 'C'])

    const slotOptionValue = ref('')
    const optionGroupValue = ref('')

    const headerFooterValue = ref<string[]>(['A'])
    const headerFooterAllValues = computed(() => optionsNoDisabled.map(o => o.value))
    const headerFooterChecked = computed(() => headerFooterAllValues.value.every(v => headerFooterValue.value.includes(v)))
    const headerFooterIndeterminate = computed(() => {
      const len = headerFooterValue.value.length
      return len > 0 && len < headerFooterAllValues.value.length
    })
    const toggleHeaderFooterAll = (checked: boolean): void => {
      headerFooterValue.value = checked ? [...headerFooterAllValues.value] : []
    }

    const valueKeyValue = ref<{ id: number; label: string } | ''>({ id: 2, label: '上海' })

    const emptyValue = ref('')
    const loadingValue = ref('')

    const remoteValue = ref('')
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
      }, 300)
    }

    return {
      basicValue,
      optionsBasic,
      optionsNoDisabled,
      optionsPropsList,
      optionsValueKey,
      clearableValue,
      disabledValue,
      optionsPropsValue,
      multipleValue,
      collapseTagsValue,
      maxCollapseTagsValue,
      slotOptionValue,
      optionGroupValue,
      headerFooterValue,
      headerFooterChecked,
      headerFooterIndeterminate,
      toggleHeaderFooterAll,
      valueKeyValue,
      emptyValue,
      loadingValue,
      remoteValue,
      remoteOptions,
      remoteLoading,
      remoteMethod
    }
  }
})
</script>

<template>
  <div style="padding: 12px">
    <h3>基础用法</h3>
    <dk-select v-model="basicValue" :options="optionsBasic" />
    <div style="margin: 8px 0 16px">value: {{ basicValue }}</div>

    <h3>Options 属性映射</h3>
    <dk-select
      v-model="optionsPropsValue"
      :options="optionsPropsList"
      :props="{ label: 'name', value: 'id', disabled: 'isDisabled' }"
    />
    <div style="margin: 8px 0 16px">value: {{ optionsPropsValue }}</div>

    <h3>禁用整个组件</h3>
    <dk-select v-model="disabledValue" disabled :options="optionsNoDisabled" />
    <div style="margin: 8px 0 16px">value: {{ disabledValue }}</div>

    <h3>可清空</h3>
    <dk-select v-model="clearableValue" clearable :options="optionsNoDisabled" />
    <div style="margin: 8px 0 16px">value: {{ clearableValue }}</div>

    <h3>多选</h3>
    <dk-select v-model="multipleValue" multiple :options="optionsNoDisabled" />
    <div style="margin: 8px 0 16px">value: {{ multipleValue }}</div>

    <h3>折叠标签</h3>
    <dk-select v-model="collapseTagsValue" multiple collapse-tags :options="optionsNoDisabled" />
    <div style="margin: 8px 0 16px">value: {{ collapseTagsValue }}</div>

    <h3>最多折叠标签数</h3>
    <dk-select v-model="maxCollapseTagsValue" multiple collapse-tags :max-collapse-tags="1" :options="optionsNoDisabled" />
    <div style="margin: 8px 0 16px">value: {{ maxCollapseTagsValue }}</div>

    <h3>自定义模板（Option Slot）</h3>
    <dk-select v-model="slotOptionValue">
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
    <div style="margin: 8px 0 16px">value: {{ slotOptionValue }}</div>

    <h3>自定义下拉头部与底部（含全选）</h3>
    <dk-select v-model="headerFooterValue" multiple :options="optionsNoDisabled">
      <template #header>
        <div style="padding: 6px 10px; border-bottom: 1px solid #ebeef5">
          <dk-checkbox
            style="margin-right: 8px"
            :model-value="headerFooterChecked"
            :indeterminate="headerFooterIndeterminate"
            @update:model-value="toggleHeaderFooterAll"
          />
          全选（play）
        </div>
      </template>
      <template #footer>
        <div style="padding: 8px 10px; border-top: 1px solid #ebeef5">
          <dk-button size="mini" type="success">Add an option</dk-button>
        </div>
      </template>
    </dk-select>
    <div style="margin: 8px 0 16px">value: {{ headerFooterValue }}</div>

    <h3>分组</h3>
    <dk-select v-model="optionGroupValue">
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
    <div style="margin: 8px 0 16px">value: {{ optionGroupValue }}</div>

    <h3>value-key</h3>
    <dk-select v-model="valueKeyValue" :options="optionsValueKey" value-key="id" />
    <div style="margin: 8px 0 16px">value: {{ valueKeyValue }}</div>

    <h3>Empty Slot</h3>
    <dk-select v-model="emptyValue" :options="[]">
      <template #empty>
        <div style="padding: 6px 10px; color: #909399">暂无数据</div>
      </template>
    </dk-select>
    <div style="margin: 8px 0 16px">value: {{ emptyValue }}</div>

    <h3>Loading Slot</h3>
    <dk-select v-model="loadingValue" :options="[]" loading>
      <template #loading>
        <div style="padding: 6px 10px; color: #409eff">loading icon</div>
      </template>
    </dk-select>
    <div style="margin: 8px 0 16px">value: {{ loadingValue }}</div>

    <h3>Remote（filterable + remote）</h3>
    <dk-select
      v-model="remoteValue"
      clearable
      filterable
      remote
      :options="remoteOptions"
      :remote-method="remoteMethod"
      :loading="remoteLoading"
      loading-text="加载中..."
    />
    <div style="margin-top: 8px">value: {{ remoteValue }}</div>
  </div>
</template>
