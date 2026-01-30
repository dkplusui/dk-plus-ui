import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

//引入以上配置 是英文界面需要修改zh为en
import getNavs from '../navs/zh'
import { sidebar } from '../sidebars/zh'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
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
