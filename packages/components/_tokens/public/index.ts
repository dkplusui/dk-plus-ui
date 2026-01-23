/**
 * @name DK_SIZE
 * @Time 2023年04月28日
 * @param { string }  [large] 大
 * @param { string }  [medium] 中
 * @param { string }  [small] 小
 * @param { string }  [mini] 迷你
 * @returns 尺寸大小
 */

export const DK_SIZE = ['large', 'medium', 'small', 'mini'] as const

/**
 * @name DK_TYPE
 * @Time 2023年04月28日
 * @param { string }  [default] 默认值
 * @param { string }  [primary] 基础
 * @param { string }  [success] 成功
 * @param { string }  [info] 信息
 * @param { string }  [warning] 警告
 * @param { string }  [danger] 危险
 * @returns 组件Type类型
 */

export const DK_TYPE = [
  'primary',
  'success',
  'info',
  'warning',
  'danger',
  'default'
] as const

/**
 * @name DK_TYPE_COLOR
 * @Time 2023年05月12日
 * @param { string }  [default] 默认颜色值
 * @param { string }  [primary] 基础颜色值
 * @param { string }  [success] 成功颜色值
 * @param { string }  [info] 信息颜色值
 * @param { string }  [warning] 警告颜色值
 * @param { string }  [danger] 危险颜色值
 * @returns 组件Type类型颜色
 */
export const DK_TYPE_COLOR = {
  default: '#f0f0f0',
  primary: '#409eff',
  success: '#67c23a',
  info: '#909399',
  warning: '#e6a23c',
  danger: '#f56c6c'
} as const

/**
 * @name DK_TARGET
 * @Time 2023年04月28日
 * @param { string }  [_blank] 在新窗口中打开链接或显示表单提交的结果。
 * @param { string }  [_self]  在当前窗口中打开链接或显示表单提交的结果（这是默认值）。
 * @param { string }  [_parent] 在父窗口中打开链接或显示表单提交的结果。如果没有父窗口，则与_self相同。
 * @param { string }  [_top] 在顶级窗口中打开链接或显示表单提交的结果。如果没有父窗口，则与 _self 相同。
 * @description 该属性指定在何处显示链接的资源
 **/

export const DK_TARGET = ['_blank', '_self', '_parent', '_top'] as const

/**
 * @name DK_POSITION
 * @Time July 1, 2023
 * @param { string }  [top] on the top
 * @param { string }  [bottom] on the bottom
 * @param { string }  [left] on the left
 * @param { string }  [right] on the right
 * @description The position of the component
 */

export const DK_POSITION = ['top', 'bottom', 'left', 'right'] as const

export const DK_ALERTTYPE = [
  'success',
  'info',
  'warning',
  'error'
] as const

/**
 * @name DK_JUSTIFY
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

export const DK_JUSTIFY = [
  'center',
  'end',
  'flex-end',
  'flex-start',
  'inherit',
  'initial',
  'left',
  'normal',
  'revert',
  'right',
  'space-around',
  'space-between',
  'space-evenly',
  'start',
  'stretch',
  'unset'
] as const

/**
 * @name DK_PLACEMENT
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
 * @description 组件的位置
 */

export const DK_PLACEMENT = [
  'top',
  'bottom',
  'left',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right'
] as const
