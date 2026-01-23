import { toRaw, type ComponentOptions, type Slots } from 'vue'

import { getSlotList } from '../public/get-slot-list'

import type { CheckboxGroupPropsType } from '../../dkcheckbox_group/src/prop'

interface checkboxReturnsType {
  refresh: Function
  getSlot: Function
}

/**
 * @name refresh
 * @description refresh slot
 * @param slots slots
 * @returns slotList
 */
export const getCheckboxGroupSlot = (
  props: CheckboxGroupPropsType
): checkboxReturnsType => {
  const data = toRaw(props)
  const refresh = (slots: Slots, checkedList: string[]): ComponentOptions[] => {
    const list = getSlotList(slots, 'DkCheckbox')
    if (data.max && checkedList.length === data.max) {
      list.forEach((item: ComponentOptions) => {
        const value = item.modelValue
        if (!value) {
          item.disabled = true
        }
      })
    }

    return list
  }
  const getSlot = (slots: Slots): ComponentOptions[] => {
    const list = getSlotList(slots, 'DkCheckbox')
    return list
  }
  return {
    refresh,
    getSlot
  }
}
