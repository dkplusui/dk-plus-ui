/**
 * @description 代码保留 用于生成icon组件 可以删除
 */

import { withInstall } from '../_utils/index'
import type { ComponentOptions } from 'vue'

const iconList = import.meta.glob('./src/**/*.vue', {
  eager: true,
  import: 'default'
})

const exportComponent: Record<string, ComponentOptions> = {}

const keyList = Object.keys(iconList)
keyList.forEach(key => {
  const component = iconList[key] as ComponentOptions
  const name = component.name || 'icon'
  exportComponent[name] = withInstall(component)
})

export { exportComponent }

import * as svgList from './default'
export * from './default'
export default svgList
