/// <reference types="vite/client" />

import type * as components from './components'
import type * as componentsIcon from './components-icon'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DkButton: typeof components.DkButton
    Dkcodedisplay: typeof components.Dkcodedisplay
    DkContainer: typeof components.DkContainer
    DkFooter: typeof components.DkFooter
    DkHeader: typeof components.DkHeader
    DkIcon: typeof components.DkIcon
    DkInput: typeof components.DkInput
    DkInputNumber: typeof components.DkInputNumber
    DkMain: typeof components.DkMain
    DkShadow: typeof components.DkShadow
    DkSpace: typeof components.DkSpace
    IconRefresh: typeof componentsIcon.IconRefresh
    DkAlert: typeof components.DkAlert
    DkRow: typeof components.DkRow
    DkCol: typeof components.DkCol
    DkCheckboxGroup: typeof components.DkCheckboxGroup
    DkCheckbox: typeof components.DkCheckbox
    DkCollapse: typeof components.DkCollapse
    DkCollapseItem: typeof components.DkCollapseItem
    DkTransition: typeof components.DkTransition
    DkRadio: typeof components.DkRadio
    DkRadioGroup: typeof components.DkRadioGroup
    DkPopover: typeof components.DkPopover
    DkScrollbar: typeof components.DkScrollbar
    DkRate: typeof components.DkRate
  }
  export interface ImportMetaEnv {
    VITE_APP_BASE_API: string
    // 添加以下声明
    VITE_GLOB_APP_INDEX: string
    VITE_GLOB_APP: string
    VITE_GLOB_COMPONENTS: string
    // 添加其他可能使用到的 glob 变量
  }
  interface ComponentCustomProperties {
    DkLoading: typeof components.DkLoading
    DkScroll: typeof components.DkScroll
  }
}

declare global {
  const isDev: boolean
}
