import type { App, Directive, Component } from 'vue' // 只导入类型 而不是导入值
// 类型必须导出 否则生成不了.d.ts
export type Install<T> = T & {
  install(app: App): void
}
export const withInstall = <T extends Component>(comp: T): Install<T> => {
  (comp as Record<string, unknown>).install = (app: App): void => {
    const { name } = comp
    name && app.component(name, comp)
  }
  return comp as Install<T>
}

/**
 * @name 注册自定义指令组件
 * @param { Object } main 组件实例
 * @param { string } name 组件名
 * @returns { Object } 组件实例
 */
export const installDirective = <T extends Directive>(
  main: T,
  name: string
): Install<T> => {
  
  (main as Install<T>).install = (app: App): void => {
    app.directive(name, main as Install<T>)
  }
  return main as Install<T>
}

/**
 * @name 注册内置组件
 * @param { Object } main 组件实例
 * @param { string } name 组件名
 * @returns { Object } 组件实例
 */
export const interior = <T>(main: T, name: string): Install<T> => {
  (main as Install<T>).install = (app: App): void => {
    app.config.globalProperties[name] = main as Install<T>
  }
  return main as Install<T>
}
