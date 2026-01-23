import { toRaw, type ComponentOptions, type Slots } from 'vue'

import { getSlotList } from '../public/get-slot-list'

import type { DkCollapseProps } from '../../dkcollapse/src/props'

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
export const getCollapseSlot = (props: DkCollapseProps): checkboxReturnsType => {
  const data = toRaw(props)
  const refresh = (
    slotList: ComponentOptions[],
    name: string,
    type: boolean = true
  ): ComponentOptions[] => {
    const list: ComponentOptions[] = JSON.parse(JSON.stringify(slotList))
    list.forEach(item => {
      if (item.name === name) {
        item.modelValue = !item.modelValue
      } else {
        if (type) {
          item.modelValue = false
        }
      }
    })
    return list
  }
  const getSlot = (slots: Slots): ComponentOptions[] => {
    const list = getSlotList(slots, 'DkCollapseItem')
    return setSlot(list, data.modelValue)
  }
  const setSlot = (list: ComponentOptions[], name: string): ComponentOptions[] => {
    list.forEach(item => {
      item.modelValue = item.name === name
    })
    return list
  }
  return {
    refresh,
    getSlot
  }
}
