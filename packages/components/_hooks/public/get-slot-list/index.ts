import { type ComponentOptions, type Slots } from 'vue'

type slotListType = ComponentOptions[]

/**
 * @name getSlotList
 * @description Gets the slot slot contents
 */
export const getSlotList = (slots: Slots, tagName: string): slotListType => {
  const domList = [] as ComponentOptions[]
  /**
   * @name handleSymbol
   * @description handle symbol type
   * @param data
   * @returns object
   */
  const handleSymbol = (data: ComponentOptions): void => {
    const list = data.children as ComponentOptions[]
    loop(list)
  }

  /**
   * @name handleObject
   * @description handle object type
   * @param data
   * @returns object
   */
  const handleObject = (data: ComponentOptions): void => {
    const type = data.type
    if (type.name === tagName) {
      const item = data.props
      if (data.children) {
        const children = data.children.default() as ComponentOptions[]
        item.children = children
      }
      domList.push(item)
    }
  }

  /**
   * @name targetMethod
   * @description slot type method
   */
  const targetMethod: Record<string, Function> = {
    symbol: handleSymbol,
    object: handleObject,
    default: (data: ComponentOptions): void => {
      console.warn(
        `[ReferenceError] The ${data.type} label is not supported, please use ${tagName}.`
      )
    }
  }

  /**
   * @name loop
   * @description loop slot
   * @param slot
   */
  const loop = (slot: ComponentOptions[]): void => {
    const len = slot.length
    let i = 0
    const defaultMethod = targetMethod['default']

    while (i < len) {
      const item = slot[i]
      const slotType: string = typeof item.type
      const method = targetMethod[slotType] || defaultMethod
      method(item)
      i++
    }
  }

  /**
   * @name getList
   * @description Gets the group slot contents
   * @param slots
   */
  const getList = (slots: Slots): slotListType => {
    if (slots.default) {
      const slot = slots.default() as ComponentOptions[]
      loop(slot)
    }

    return domList
  }
  const list = getList(slots)

  return list
}
