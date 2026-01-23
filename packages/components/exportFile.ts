import * as components from './components'
import * as componentsIcon from './components-icon'
import { version } from '../components/package.json'
import { DkLoading } from './dkloading'
import { DkScroll } from './dkscrollbar'
import { objectEntries } from './_utils'
import type { App } from 'vue'

const directiveList = {
  'dk-loading': DkLoading,
  'dk-scroll': DkScroll
}

/**
 * 注册组件
 *
 * @param { Object } app 应用实例
 * @returns { Object } 应用实例
 */
const install = (app: App): App => {
  /**
   * 注册组件
   *
   * @see registration https://cn.vuejs.org/guide/components/registration.html
   * @see Array.prototype.forEach() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  objectEntries(components).forEach(([key, value]): void => {
    app.component(key, value)
  })

  objectEntries(componentsIcon).forEach(([key, value]): void => {
    app.component(key, value)
  })
  for(const key in directiveList) {
    const target = directiveList[key as keyof typeof directiveList]
    app.directive(key, target.directive)
  }

  return app
}

export default {
  version,
  install
}
