/**
 * @name props
 * @description Trigger
 * @date December 13, 2024
 * @user FanKai <https://github.com/isMrFan>
 * @function interface 定义
*/
/**
 * Select 注入给 Option/OptionGroup 的依赖
 *
 * 这里保持轻量：Option 只需能触发 setValue，并可获取选中态。
 */
export interface SelectProvide {
  setValue: (value: unknown, label: unknown, evt: MouseEvent, disabled?: boolean) => void
  isSelected?: (value: unknown) => boolean
}
