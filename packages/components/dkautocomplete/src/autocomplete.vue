<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, nextTick } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import type { AutocompleteOption } from './type'
import { dkAutocompleteProps } from './props'
import { autocompleteEmits } from './emit'

export default defineComponent({
  name: 'DkAutocomplete',
  props: dkAutocompleteProps,
  emits: autocompleteEmits,
  setup(props, { emit }) {
    const rootRef = ref<HTMLElement>()
    const dropdownRef = ref<HTMLElement>()

    const itemRefs: (HTMLElement | null)[] = []
    const setItemRef = (
      el: Element | ComponentPublicInstance | null,
      index: number
    ): void => {
      if (!el) {
        itemRefs[index] = null
        return
      }
      if (el instanceof HTMLElement) {
        itemRefs[index] = el
        return
      }
      const maybe = (el as unknown as { $el?: unknown }).$el
      itemRefs[index] = maybe instanceof HTMLElement ? maybe : null
    }

    const scrollActiveIntoView = (): void => {
      if (!dropdownRef.value) return
      if (data.activeIndex < 0) return
      const el = itemRefs[data.activeIndex]
      if (!el) return
      try {
        el.scrollIntoView({ block: 'nearest' })
      } catch {
        // ignore
      }
    }

    const data = reactive({
      inputValue: props.modelValue,
      showDropdown: false,
      loading: false,
      activeIndex: -1,
      suggestions: [] as AutocompleteOption[]
    })

    let debounceTimer: number | null = null
    let syncingFromProps = false

    const getOptionText = (option: AutocompleteOption): string => {
      if (typeof option === 'string') return option
      const key = props.valueKey || 'value'
      const v = (option as Record<string, unknown>)[key]
      return v === undefined || v === null ? '' : String(v)
    }

    const setSuggestions = (list: AutocompleteOption[]): void => {
      data.suggestions = list
      if (props.highlightFirstItem) {
        data.activeIndex = list.length > 0 ? 0 : -1
      } else {
        data.activeIndex = -1
      }

      nextTick(() => {
        scrollActiveIntoView()
      })
    }

    const doFetch = async(queryString: string): Promise<void> => {
      if (props.disabled) return

      const hasFetcher = !!props.fetchSuggestions
      const hasOptions = Array.isArray(props.options) && props.options.length > 0

      if (!hasFetcher && !hasOptions) {
        setSuggestions([])
        return
      }

      // local filter
      if (!hasFetcher) {
        const q = queryString.trim().toLowerCase()
        const list = (props.options || []).filter(item => {
          const text = getOptionText(item).toLowerCase()
          return q ? text.includes(q) : true
        })
        setSuggestions(list)
        return
      }

      const cb = (list: AutocompleteOption[]): void => {
        data.loading = false
        setSuggestions(Array.isArray(list) ? list : [])
      }

      data.loading = true
      try {
        const ret = props.fetchSuggestions(queryString, cb)
        if (ret && typeof (ret as Promise<AutocompleteOption[]>).then === 'function') {
          const res = await (ret as Promise<AutocompleteOption[]>)
          cb(res)
        }
      } catch (e) {
        data.loading = false
        setSuggestions([])
      }
    }

    const fetchWithDebounce = (queryString: string): void => {
      // local options should respond immediately
      if (!props.fetchSuggestions) {
        if (debounceTimer) window.clearTimeout(debounceTimer)
        doFetch(queryString)
        return
      }

      const wait = props.debounce || 0
      if (debounceTimer) window.clearTimeout(debounceTimer)
      debounceTimer = window.setTimeout(() => {
        doFetch(queryString)
      }, wait)
    }

    const openDropdown = (): void => {
      if (props.disabled) return
      data.showDropdown = true
      document.addEventListener('click', documentListen)
    }

    const closeDropdown = (): void => {
      data.showDropdown = false
      data.activeIndex = -1
      document.removeEventListener('click', documentListen)
    }

    const documentListen = (evt: MouseEvent): void => {
      const el = rootRef.value
      if (!el) return
      const target = evt.target as Node
      if (el.contains(target)) return
      closeDropdown()
    }

    const onFocus = (evt: FocusEvent): void => {
      openDropdown()
      emit('focus', evt)
      if (props.triggerOnFocus) {
        fetchWithDebounce(data.inputValue)
      }
    }

    const onBlur = (evt: FocusEvent): void => {
      emit('blur', evt)
      // do not close immediately, let click option happen
      window.setTimeout(() => {
        closeDropdown()
      }, 120)
    }

    const onSelect = (item: AutocompleteOption): void => {
      if (props.disabled) return
      const text = getOptionText(item)
      data.inputValue = text
      emit('update:modelValue', text)
      emit('select', item)
      closeDropdown()
    }

    const onKeydown = (evt: KeyboardEvent): void => {
      if (!data.showDropdown) return
      if (data.suggestions.length === 0) return

      if (evt.key === 'ArrowDown') {
        evt.preventDefault()
        const next = data.activeIndex + 1
        data.activeIndex = next >= data.suggestions.length ? 0 : next
        nextTick(() => scrollActiveIntoView())
        return
      }

      if (evt.key === 'ArrowUp') {
        evt.preventDefault()
        const next = data.activeIndex - 1
        data.activeIndex = next < 0 ? data.suggestions.length - 1 : next
        nextTick(() => scrollActiveIntoView())
        return
      }

      if (evt.key === 'Enter') {
        if (data.activeIndex < 0) return
        evt.preventDefault()
        onSelect(data.suggestions[data.activeIndex])
        return
      }

      if (evt.key === 'Escape') {
        closeDropdown()
      }
    }

    watch(
      () => props.modelValue,
      val => {
        syncingFromProps = true
        data.inputValue = val
        nextTick(() => {
          syncingFromProps = false
        })
      }
    )

    watch(
      () => data.inputValue,
      (val, oldVal) => {
        if (syncingFromProps) return

        const v = String(val ?? '')
        emit('update:modelValue', v)
        emit('change', v)

        if (oldVal !== '' && v === '') {
          emit('clear')

          // When cleared, ElementPlus-like behavior is to allow re-open/show suggestions
          // (especially for local options). Only fetch on empty when triggerOnFocus is enabled.
          if (props.triggerOnFocus) {
            openDropdown()
            fetchWithDebounce('')
          } else {
            setSuggestions([])
            closeDropdown()
          }
          return
        }

        openDropdown()
        fetchWithDebounce(v)
      }
    )

    watch(
      () => props.options,
      () => {
        if (!data.showDropdown) return
        fetchWithDebounce(data.inputValue)
      }
    )

    return {
      rootRef,
      dropdownRef,
      ...toRefs(data),
      getOptionText,
      onFocus,
      onBlur,
      onSelect,
      onKeydown,
      setItemRef
    }
  }
})
</script>

<template>
  <div ref="rootRef" class="dk-autocomplete" @keydown="onKeydown">
    <dk-input
      v-model="inputValue"
      :disabled="disabled"
      :clearable="clearable"
      :placeholder="placeholder"
      :size="size"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template v-if="$slots.suffix" #suffix>
        <slot name="suffix" />
      </template>
      <template v-if="$slots.prepend" #prepend>
        <slot name="prepend" />
      </template>
      <template v-if="$slots.append" #append>
        <slot name="append" />
      </template>
    </dk-input>

    <transition name="Dk-trigger">
      <div v-show="showDropdown" ref="dropdownRef" class="dk-autocomplete_dropdown">
        <div v-if="loading && !hideLoading" class="dk-autocomplete_loading">
          <slot name="loading">
            loading...
          </slot>
        </div>

        <div
          v-for="(item, index) in suggestions"
          :key="index"
          :ref="(el) => setItemRef(el, index)"
          :class="[
            'dk-autocomplete_item',
            { 'is-active': index === activeIndex }
          ]"
          @mousedown.prevent
          @click="onSelect(item)"
        >
          <slot :item="item">
            {{ getOptionText(item) }}
          </slot>
        </div>

        <div v-if="!loading && suggestions.length === 0" class="dk-autocomplete_empty">
          <slot name="empty">
            No Data
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>
