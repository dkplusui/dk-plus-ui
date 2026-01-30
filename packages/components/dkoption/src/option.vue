<script lang="ts">
import { defineComponent, computed, inject } from 'vue'
import { SELECT_PROPS_TOKEN } from '../../dkselect/src/props'
import type { SelectProvide } from '../../dkselect/src/interface'

export default defineComponent({
  name: 'DkOption',
  props: {
    label: {
      type: [String, Number, Boolean] as unknown as () => string | number | boolean,
      default: ''
    },
    value: {
      type: [String, Number, Boolean, Object] as unknown as () => unknown,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const select = inject<SelectProvide | null>(SELECT_PROPS_TOKEN, null)

    const selected = computed(() => {
      return !!select?.isSelected?.(props.value)
    })

    const onClick = (evt: MouseEvent): void => {
      if (props.disabled) return
      select?.setValue?.(props.value, props.label, evt, props.disabled)
    }

    return {
      selected,
      onClick
    }
  }
})
</script>

<template>
  <button
    class="dk-select_option"
    :class="{ 'is-selected': selected }"
    type="button"
    :disabled="disabled"
    @click.stop="onClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>
