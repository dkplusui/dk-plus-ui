/**
 * @name get-props
 * @Time 2023年05月04日
 * @author dk-plus-ui(范先生) <https://github.com/isMrFan>
 * @description 用于过滤掉不需要的props参数 例如特殊的Function(不要了),Object(解析)
 */
import { reactive, toRef } from 'vue'
import { isString, isObject } from '../../../_utils'
import type { Ref } from 'vue'

/**
 * @name FilterListType
 * @Time 2023年05月04日
 * @param { String } key 用于过滤的key
 * @param { Function } callback 用于过滤的回调函数
 */

export interface FilterListType {
  key: string
  callback: () => boolean
}

/**
 * @name FilterListType
 * @description 过滤方法参数类型接口
 */

export type FilterParams = (string | FilterListType)[]

/**
 * @name getPropsType
 * @param { Function } filter 过滤 props
 * @param { Function } interceptProps 拦截 props
 * @returns getPropsType 返回值类型接口
 */

export interface getPropsType {
  filter: (filterParams: FilterParams) => Record<string, unknown>
  interceptProps: (
    parameter: string,
    verificationRule: () => boolean,
    defaultValue?: null | string
  ) => Ref<string> | null | string
}

/**
 * @name getProps
 * @param { Function } filter 过滤 props [过滤掉Function] PS现在只对string和object进行保留了
 * @param { Function } interceptProps 拦截 props
 * @description getProps 对props进行过滤和拦截的hooks 解析props 的 hooks
 */

export const getProps = <T extends object>(props: T): getPropsType => {
  /**
   * @name filter
   * @param { string | Array } filterList 需要的参数列表
   * @returns { Object } 过滤后的 prop 响应式对象
   * @description 现在只对string 和 object 进行保留了 PS: 以后可以添加其他类型
   */
  const filter = (filterList: FilterParams): Record<string, unknown> => {
    const obj: Record<string, unknown> = reactive({})
    filterList.forEach((item: string | FilterListType) => {
      if (isString(item)) {
        obj[item] = toRef(props, item as never)
      } else if (isObject(item)) {
        obj[item.key] = toRef(props, item.key as never)
      }
    })
    return obj
  }
  /**
   * @name interceptProps
   * @param { string } parameter 传入参数
   * @param { Function } verificationRule 验证回调
   * @param { string | null } [defaultValue=null] 默认值
   * @returns { Object | string | null } 响应式数据或 null
   * @description 拦截props
   */
  const interceptProps = (
    parameter: string,
    verificationRule: () => boolean,
    defaultValue: null | string = null
  ): Ref<string> | null | string => {
    return verificationRule() ? toRef(props, parameter as never) : defaultValue
  }
  return {
    filter,
    interceptProps
  }
}
