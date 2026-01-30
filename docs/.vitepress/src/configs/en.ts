import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

//引入以上配置 是英文界面需要修改zh为en
import getNavs from '../navs/en'
import { sidebar } from '../sidebars/en'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    lastUpdatedText: 'Last update',
    returnToTopLabel: 'Back to top',
    docFooter: {
      prev: 'Previous',
      next: 'Next page'
    },
    logo: {
      src: 'https://oss.cadwaladerss.com/dk-plus/images/24ICON.png',
      alt: 'dk-plus'
    },
    siteTitle: 'dk-plus',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/isMrFan/dk-plus-ui'
      }
    ],
    nav: getNavs(),
    sidebar: sidebar,
    outline: {
      level: 'deep', // 右侧大纲标题层级
      label: '目录' // 右侧大纲标题文本配置
    }
  }
}
