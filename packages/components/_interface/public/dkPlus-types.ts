import type { VNode, Component } from 'vue'
/**
 * @name ClassListName
 * @Time 2023年04月28日
 * @description class 类名集合类型
 **/

export type ClassListName = (string | Record<string, unknown>)[]

/**
 * @name dkPlusType
 * @Time 2023年04月28日
 * @param { string }  [default] 默认值
 * @param { string }  [primary] 基础
 * @param { string }  [success] 成功
 * @param { string }  [info] 信息
 * @param { string }  [warning] 警告
 * @param { string }  [danger] 危险
 * @description 不同的组件类型公共类型
 **/

export type dkPlusType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default'
/**
 * @name dkPlusSize
 * @Time 2023年04月28日
 * @param { string }  [large] 大
 * @param { string }  [medium] 中
 * @param { string }  [small] 小
 * @param { string }  [mini] 迷你
 * @description 不同的组件尺寸公共类型
 **/

export type dkPlusSize = 'large' | 'medium' | 'small' | 'mini'

/**
 * @name dkTarget
 * @Time 2023年04月28日
 * @param { string }  [_blank] 在新窗口中打开链接或显示表单提交的结果。
 * @param { string }  [_self]  在当前窗口中打开链接或显示表单提交的结果（这是默认值）。
 * @param { string }  [_parent] 在父窗口中打开链接或显示表单提交的结果。如果没有父窗口，则与_self相同。
 * @param { string }  [_top] 在顶级窗口中打开链接或显示表单提交的结果。如果没有父窗口，则与 _self 相同。
 * @description 该属性指定在何处显示链接的资源
 **/

export type dkTarget = '_blank' | '_self' | '_parent' | '_top'

/**
 * @name dkPlusJustify
 * @Time July 27, 2023
 * @param { string }  [center] Center
 * @param { string }  [end] End
 * @param { string } [flex-end] Flex end
 * @param { string }  [flex-start] Flex start
 * @param { string }  [inherit] Inherit
 * @param { string }  [initial] Initial
 * @param { string }  [left] Left
 * @param { string }  [normal] Normal
 * @param { string }  [revert] Revert
 * @param { string }  [right] Right
 * @param { string }  [space-around] Around
 * @param { string }  [space-between] Between
 * @param { string } [space-evenly] Evenly
 * @param { string }  [start] Starting from scratch
 * @param { string }  [stretch] Stretch
 * @param { string }  [unset] Unset
 * @description Different component justification public type
 */

export type dkPlusJustify =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'left'
  | 'normal'
  | 'revert'
  | 'right'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch'
  | 'unset'

/**
 * @name MouseEventType
 * @see MouseEvent https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/MouseEvent
 * @param { Object } evt 事件对象
 * @description 按钮点击的回调类型MouseEvent() 构造函数创建自定义的鼠标事件对象
 */

export type MouseEventType = (evt: MouseEvent) => void

/**
 * @name DkIcon
 * @description DkIcon 组件类型(动态组件)
 */
export type DkIcon = VNode | Component

/**
 * @name KeyboardEventType
 * @param { Object } evt 事件对象
 *
 */

export type KeyboardEventType = (evt: KeyboardEvent) => void

/**
 * @name dkInputPersonalityType
 * @Time July 18, 2023
 * @param { string }  [underline]
 * @param { string }  [borderRadius]
 */
export type dkInputPersonalityType = 'underline' | 'borderRadius'

/**
 * @name dkInputStatusType
 * @Time July 19, 2023
 * @param { string } [warning]
 * @param { string } [error]
 */
export type dkInputStatusType = 'warning' | 'error'

/**
 * @name DkPlusAlign
 * @Time 2023年04月28日
 * @param { string }  [left] 居左
 * @param { string }  [center] 居中
 * @param { string }  [right] 居右
 * @description 不同的组件对齐方式公共类型
 */

export type DkPlusAlign = 'left' | 'center' | 'right'

/**
 * @name DkPlusPosition
 * @Time July 1, 2023
 * @param { string }  [top] On top
 * @param { string }  [right] On right
 * @param { string }  [bottom] On bottom
 * @param { string }  [left] On left
 * @description Different component position public type
 */

export type DkPlusPosition = 'top' | 'right' | 'bottom' | 'left'

/**
 * @name dkPlusBasicType
 * @Time 2023年07月07日
 * @param { string }  [success] 成功
 * @param { string }  [info] 信息
 * @param { string }  [warning] 警告
 * @description 不同的组件基本类型公共类型
 */

// export type dkPlusBasicType = 'success' | 'info' | 'warning';

/**
 * @name dkPlusAlertType
 * @Time 2023年07月07日
 * @param { string }  [error] 错误
 * @description 拓展Alert类型
 */
// export type dkPlusAlertType = dkPlusBasicType & 'error';
export type dkPlusAlertType = 'success' | 'info' | 'warning' | 'error'

/**
 * @name dkPlusPlaceMent
 * @Time September 14, 2023
 * @param { string }  [top] on the top
 * @param { string }  [bottom] on the bottom
 * @param { string }  [left] on the left
 * @param { string }  [right] on the right
 * @param { string }  [left-top] on the top left
 * @param { string }  [bottom-top] on the top right
 * @param { string }  [bottom-left] on the bottom left
 * @param { string }  [bottom-right] on the bottom right
 * @description The position of the component
 */

export type dkPlusPlaceMent =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
