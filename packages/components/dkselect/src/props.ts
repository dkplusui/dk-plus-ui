/**
 * @name props
 * @description Select
 * @date December 23, 2024
 * @user FanKai <https://github.com/isMrFan>
 * @function interface 定义
*/
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { SelectProvide} from './interface'
export const dkSelectProps = {

}as const

/** select 组件 props 类型 */
export type SelectProps = ExtractPropTypes<typeof dkSelectProps>
/** select 组件注入的依赖项 */
export const SELECT_PROPS_TOKEN: InjectionKey<SelectProvide> =
  Symbol('DK-select-props-key')
