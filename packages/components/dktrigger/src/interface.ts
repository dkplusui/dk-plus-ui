/**
 * @name interface
 * @description Trigger
 * @date November 28, 2024
 * @user FanKai <https://github.com/isMrFan>
 * @function interface 定义
*/

/** 触发方式类型 */
export type { TriggerProps } from './props'
export type TypeTrigger = 'hover' | 'click'

/**
 * 注入的依赖项对象类型接口
 *
 * @param { Function } handelOnClose 关闭方法
 */

export interface TriggerProvide {
  handelOnClose: () => void
}
