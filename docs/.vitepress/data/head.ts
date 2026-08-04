import type { HeadConfig } from 'vitepress'

/**
 * 头部配置
 *
 * @see head https://vitepress.vuejs.org/config/app-configs#head
 */
export const head: HeadConfig[] = [
  /** 标签栏略缩图 */
  [
    'link',
    {
      rel: 'icon',
      href: 'https://oss.cadwaladerss.com/dk-plus/images/isicon.png'
    }
  ],
  /** 解决移动端点击输入框自动放大的问题 */
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0,user-scalable=no'
    }
  ],
  /** 网站关键词，有助于 SEO 优化 */
  [
    'meta',
    {
      name: 'keywords',
      content:
        'Vue3组件,dk-plus,dk-plus-ui,dk-plus组件库,dk-plus-ui组件库,Vue3组件库,Vue3 UI组件库,dkPlus,dkPlusUI,KaruiBI,Karui工具箱,KaruToolbox'
    }
  ],
  /** 网站作者 */
  [
    'meta',
    {
      name: 'author',
      content: 'Mr·Fan,isMrFan,范凯,刘宇轩,王英杰,bugfix2019'
    }
  ],
  /** OG 类型 */
  [
    'meta',
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  /** OG 略缩图 */
  [
    'meta',
    {
      property: 'og:image',
      content: 'https://oss.cadwaladerss.com/dk-plus/images/isicon.png'
    }
  ],
  /** OG 页面所在网站名 */
  [
    'meta',
    {
      property: 'og:site_name',
      content: 'dk-plus-ui'
    }
  ]
] as HeadConfig[]
