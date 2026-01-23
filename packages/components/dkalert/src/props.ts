import type { ExtractPropTypes } from 'vue'
import { setStringProp, setBooleanProps, setFunction } from '../../_utils'
import { DK_ALERT_TYPE } from '../../_tokens'
import type { dkPlusAlertType } from '../../_interface'

/**
 * @name dk-alert
 * @author zdy
 * @Time 2023/07/07
 * @property {string} type 指定警告提示的样式，有四种选择 success、info、warning、error
 * @property {string} title 指定警告标题
 * @property {string} description 指定警告描述性文本
 * @property {boolean} center 文字是否居中
 * @property {boolean} closable 是否可关闭
 * @property {function} close 关闭时触发的回调函数
 * @property {string} icon 前置icon
 * @property {string} closeIcon 关闭icon
 *
 * */
export const dkAlertProps = {
  type: setStringProp<dkPlusAlertType>(null, (value: dkPlusAlertType): boolean => {
    return DK_ALERT_TYPE.includes(value)
  }),
  title: setStringProp(),
  description: setStringProp(),
  center: setBooleanProps(),
  closable: setBooleanProps(),
  close: setFunction(),
  icon: setStringProp(),
  closeIcon: setStringProp()
}
export type DkAlertProps = ExtractPropTypes<typeof dkAlertProps>
