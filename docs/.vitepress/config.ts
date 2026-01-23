import { defineConfig } from 'vitepress'
import { head } from './data/head'
import { PluginModule } from './plugins'
import getNavs from '../.vitepress/src/navs/zh'
import { zhConfig } from './src/configs/zh'
import { enConfig } from './src/configs/en'

module.exports = defineConfig({
  lang: 'zh-CN',
  title: 'dk-plus',
  head,
  appearance: true,
  /**
   * 是否显示最后更新时间
   * @see last-updated https://vitepress.vuejs.org/guide/theme-last-updated#last-updated
   */
  lastUpdated: true,
  locales: {
    zh: { label: '简体中文', lang: 'zh-CN', link: '/zh/', ...zhConfig },
    en: { label: 'English', lang: 'en-US', link: '/en/', ...enConfig }
  },
  /**
   * 主题配置
   *
   * @see theme-config https://vitepress.vuejs.org/guide/migration-from-vitepress-0#theme-config
   */
  themeConfig: {
    /**
     * 最后更新时间的文案显示
     * @see lastUpdatedText https://vitepress.vuejs.org/config/theme-configs#lastupdatedtext
     */
    lastUpdatedText: '最后更新时间',
    nav: getNavs(),
    /**
     * 配置导航栏图表
     * @see socialLinks https://vitepress.vuejs.org/config/theme-configs#sociallinks
     */
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/isMrFan/dk-plus-ui'
      }
    ],
    /**
     * 配置 logo
     * @see logo https://vitepress.vuejs.org/config/theme-configs#logo
     */
    logo: {
      src: 'https://oss.cadwaladerss.com/dk-plus/images/24ICON.png',
      alt: 'dk-plus'
    },
    siteTitle: 'dk-plus'
  },
  markdown: {
    config: (md): void => {
      md.use(PluginModule)
    }
  }
})
