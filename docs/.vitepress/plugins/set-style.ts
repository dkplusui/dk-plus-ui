import { nextTick } from 'vue'

/**
 * @name setStyle
 * @description 设置样式
 * @param {string} theme 主题
 * @function intercept 拦截切换主题的按钮点击事件
 * @function loadThemeStyle 加载主题样式
 * @function getSize 获取页面尺寸
 * @function handleSizeChange 页面尺寸变化时，重载按钮点击事件
 * @function loadHamburgerMenu 加载菜单点击事件
 * @function getWindowSize 获取页面尺寸
 * @function unInstall 卸载事件监听
 * @function init 初始化
 * @function browserBackground 监听浏览器窗口变化
 */
let setStyle: any = null
if (typeof window !== 'undefined') {
  // 在这里使用 window 对象
  setStyle = class SetStyle {
    theme: string | null = null
    isDark: boolean = false
    hamburgerMenuCount: number = 0
    interceptCount: number = 0

    constructor() {
      this.theme = window.localStorage.getItem('vitepress-theme-appearance')
      this.init()
    }

    /**
     * @name intercept
     * @description 拦截切换主题的按钮点击事件
     */
    intercept = (): void => {
      const VPSwitchAppearanceList: HTMLCollectionOf<Element> =
        document.getElementsByClassName('VPSwitchAppearance')

      const len: number = VPSwitchAppearanceList.length
      if (len === 0) {
        // TODO: 没办法了 只能这样了 有更好的方法请告诉我 谢谢
        setTimeout(() => {
          this.intercept()
        }, 0)
        return
      }

      this.interceptCount++
      if (this.interceptCount > 1) return

      for (let i = 0; i < len; i++) {
        VPSwitchAppearanceList[i].addEventListener('click', (): void => {
          setTimeout(() => {
            this.theme = window.localStorage.getItem('vitepress-theme-appearance')
            this.loadThemeStyle()
          }, 0)
        })
      }
    }

    /**
     * @name loadThemeStyle
     * @description 主题样式 黑白主题
     */
    loadThemeStyle = (): void => {
      const isDark = this.theme === 'dark'
      const homeStyleList: Record<string, string> = {
        '--theme-color': '#3eaf7c',
        '--text-color': isDark ? '#dfdfd7' : '#333',
        '--background-color': isDark ? '#1e1e20' : '#fff',
        '--sub-text-color': '#666',
        '--grey-background-color': isDark ? '#252525' : '#f6f6f6',
        '--dark-grey-background-color': isDark ? '#1e1e20' : '#e3e3e6',
        '--border-color': isDark ? '#333' : '#eaecef',
        '--hover-border-color': isDark ? '#656464' : '#eaecef',
        '--dk-alert-bg-color': isDark ? '#202121' : '#f4f4f5',
        '--dk-alert-success-bg-color': isDark ? '#1c2518' : '#f0f9eb',
        '--dk-alert-warning-bg-color': isDark ? '#292218' : '#fdf6ec',
        '--dk-alert-error-bg-color': isDark ? '#2b1d1d' : '#fef0f0'
      }
      const keyList: string[] = Object.keys(homeStyleList)
      const len: number = keyList.length
      for (let i = 0; i < len; i++) {
        const dom = document.documentElement as HTMLElement
        const body = dom.querySelector('body') as HTMLElement
        body.style.setProperty(keyList[i], homeStyleList[keyList[i]])
      }
    }

    /**
     * @name getSize
     * @description 获取页面尺寸
     */
    getSize = (): void => {
      window.addEventListener('resize', this.handleSizeChange)
    }

    /**
     * @name handleSizeChange
     * @description 页面尺寸变化时，重载按钮点击事件
     */
    handleSizeChange = (e: Event): void => {
      const target = e.target as Window
      if (target.innerWidth > 750 && target.innerWidth < 768) {
        this.loadHamburgerMenu()
      }
    }

    /**
     * @name loadHamburgerMenu
     * @description 加载菜单点击事件
     */
    loadHamburgerMenu = async (): Promise<void> => {
      await nextTick()
      const VPNavBarHamburger = document.getElementsByClassName('VPNavBarHamburger')
      if (VPNavBarHamburger[0] === undefined) {
        // TODO: 这里同上
        setTimeout(() => {
          this.loadHamburgerMenu()
        }, 0)
        return
      }
      this.hamburgerMenuCount++

      if (this.hamburgerMenuCount > 1) return

      VPNavBarHamburger[0].addEventListener('click', (): void => {
        const isLaunch = VPNavBarHamburger[0].attributes['aria-expanded'].value === 'true'
        if (isLaunch) {
          this.intercept()
        }
      })
    }

    /**
     * @name getWindowSize
     * @description 获取页面尺寸
     */
    getWindowSize = (): void => {
      const innerWidth = window.innerWidth
      if (innerWidth > 768) {
        this.intercept()
      } else {
        this.loadHamburgerMenu()
      }
    }

    /**title
     * @name unInstall
     * @description 卸载事件监听
     */
    unInstall = (): void => {
      // 卸载拦截切换主题的按钮点击事件
      const VPSwitchAppearanceList = document.getElementsByClassName('VPSwitchAppearance')
      const len = VPSwitchAppearanceList.length
      for (let i = 0; i < len; i++) {
        VPSwitchAppearanceList[i].removeEventListener('click', (): void => {
          null
        })
      }

      // 卸载获取页面尺寸
      window.removeEventListener('resize', this.handleSizeChange)

      // 卸载拦截切换主题的按钮点击事件
      const VPNavBarHamburger = document.getElementsByClassName('VPNavBarHamburger')
      VPNavBarHamburger[0].removeEventListener('click', (): void => {
        null
      })
    }

    /**
     * @name init
     * @description 初始化
     */
    init = (): void => {
      this.loadThemeStyle()
      this.getSize()
      this.getWindowSize()
      this.browserBackground(this.unInstall, this.init)
    }

    /**
     * @function browserBackground
     * @description 监听浏览器窗口变化
     * @param {Function} unInstall 卸载
     * @param {Function} mount 挂载
     */
    browserBackground = (unInstall: Function, mount: Function): void => {
      const event = (): void => {
        if (document.hidden) {
          unInstall && unInstall()
        } else {
          mount && mount()
        }
      }
      window.addEventListener('load', (): void => {
        document.addEventListener('visibilitychange', event)
      })
      window.addEventListener('beforeunload', (): void => {
        document.removeEventListener('visibilitychange', event)
      })
    }
  }
}

/**
 * @name loadStyle
 * @description 加载样式 外部只能调用init方法
 */
const loadStyle = setStyle === null ? '' : new setStyle()
export { loadStyle }
export default loadStyle
