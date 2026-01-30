/**
 * @name props
 * @description Trigger
 * @date November 28, 2024
 * @user FanKai <https://github.com/isMrFan>
 * @function interface 定义
*/
import {
  setStringNumberProps,
  setBooleanProps,
  setStringProp,
  setNumberProps,
  setFunctionProps
} from '../../_utils'
import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { TriggerProvide, TypeTrigger } from './interface'
import type { HandleChange } from '../../_interface/public/dkPlus-event'
export const dkTriggerProps = {
  /** 触发器和内容之间的间距 */
  spanInterval: setStringNumberProps(),
  /** 是否禁用 */
  disabled: setBooleanProps(),
  /**
   * 触发方式：移入、点击
   * @values hover click
   * @default hover
   */
  trigger: setStringProp<TypeTrigger>('hover', (value: TypeTrigger): boolean => {
    return (['hover', 'click'] as const).includes(value)
  }),
  /** 是否带有箭头 */
  arrow: setBooleanProps(),
  /** 弹出动画持续时间 */
  popUpDuration: setNumberProps(),
  /** 关闭动画持续时间 */
  offUpDuration: setNumberProps(),
  /** 弹窗状态改变时触发的回调 */
  onChange: setFunctionProps<HandleChange>(),
  /** 弹窗状态打开时触发的回调 */
  onOpen: setFunctionProps<HandleChange>(),
  /** 弹窗状态关闭时触发的回调 */
  onClose: setFunctionProps<HandleChange>(),
  /**
   * teleported 场景下：将弹层根元素传入，用于 click-outside 判定
   * 例如 Select/DatePicker 把 dropdown teleport 到 body 时，点击弹层内部不应触发关闭
   */
  contentRef: {
    type: Object as PropType<HTMLElement | null>,
    default: null
  }
} as const

/** trigger 组件 props 类型 */
export type TriggerProps = ExtractPropTypes<typeof dkTriggerProps>
/** trigger 组件注入的关闭方法依赖项 */
export const TRIGGER_CLOSE_KEY: InjectionKey<TriggerProvide> = Symbol('trigger-close-key')
