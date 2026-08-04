import { defineConfig, type HeadConfig } from 'vitepress'
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { head } from './data/head'
import { PluginModule } from './plugins'
import getNavs from '../.vitepress/src/navs/zh'
import { zhConfig } from './src/configs/zh'
import { enConfig } from './src/configs/en'
import friendlyLinks from './json/friendlyLinks.json'

const siteUrl = 'https://dk-plus.com'
const siteDescription =
  'dk-plus 是面向设计师与开发者的 Vue 3 UI 组件库，提供轻量、灵活、易用的组件与中文、英文开发文档。'
const docsRoot = resolve(__dirname, '..')

function getPageUrl(page: string) {
  const normalizedPage = page.replace(/\\/g, '/')
  const route = normalizedPage.endsWith('index.md')
    ? normalizedPage.replace(/(^|\/)index\.md$/, '$1')
    : normalizedPage.replace(/\.md$/, '.html')
  return new URL(route, `${siteUrl}/`).toString()
}

function getPageDescription(page: string, title: string) {
  const isEnglish = page.startsWith('en/')
  if (page.includes('/components/')) {
    return isEnglish
      ? `${title}: usage, examples, and API documentation for the dk-plus Vue 3 UI component library.`
      : `${title}：dk-plus Vue 3 UI 组件的使用方法、示例代码与 API 文档。`
  }
  if (page.includes('/document/')) {
    return isEnglish
      ? `${title}: dk-plus Vue 3 UI component library documentation and development guide.`
      : `${title}：dk-plus Vue 3 UI 组件库开发文档与使用指南。`
  }
  return isEnglish
    ? `${title}: documentation, examples, and guides from the dk-plus Vue 3 ecosystem.`
    : `${title}：dk-plus Vue 3 生态的文档、示例与使用指南。`
}

function getMarkdownHeading(relativePath: string): string {
  const sourcePath = resolve(docsRoot, relativePath)
  if (!existsSync(sourcePath)) return ''
  const source = readFileSync(sourcePath, 'utf8')
  const heading = source.match(/^#{1,6}\s+(.+)$/m)?.[1] || ''
  return heading.replace(/[`*_]/g, '').replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').trim()
}

function getLocaleAlternates(page: string) {
  const normalizedPage = page.replace(/\\/g, '/')
  const candidates = normalizedPage === 'index.md'
    ? [
        { lang: 'zh-CN', page: 'zh/index.md' },
        { lang: 'en-US', page: 'en/index.md' }
      ]
    : normalizedPage.startsWith('zh/') || normalizedPage.startsWith('en/')
      ? [
          { lang: 'zh-CN', page: normalizedPage.replace(/^en\//, 'zh/') },
          { lang: 'en-US', page: normalizedPage.replace(/^zh\//, 'en/') }
        ]
      : []

  return candidates.filter(({ page: candidate }) => existsSync(resolve(docsRoot, candidate)))
}

function getHtmlFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const entryPath = resolve(directory, entry)
    return statSync(entryPath).isDirectory()
      ? getHtmlFiles(entryPath)
      : entryPath.endsWith('.html')
        ? [entryPath]
        : []
  })
}

function writeSeoFiles(): void {
  const outputDirectory = resolve(docsRoot, '.vitepress/dist')
  mkdirSync(outputDirectory, { recursive: true })
  copyFileSync(resolve(docsRoot, 'seo/robots.txt'), resolve(outputDirectory, 'robots.txt'))
  copyFileSync(resolve(docsRoot, 'seo/llms.txt'), resolve(outputDirectory, 'llms.txt'))

  const updatedAt = new Date().toISOString().slice(0, 10)
  const urls = getHtmlFiles(outputDirectory)
    .map((file) => file.slice(outputDirectory.length + 1).replace(/\\/g, '/'))
    .filter((file) => file !== '404.html' && !file.startsWith('expansion/'))
    .map((file) => {
      if (file === 'index.html') return `${siteUrl}/`
      if (file.endsWith('/index.html')) return `${siteUrl}/${file.replace(/index\.html$/, '')}`
      return `${siteUrl}/${file}`
    })
    .sort()

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      (url) =>
        `  <url>\n    <loc>${url}</loc>\n    <lastmod>${updatedAt}</lastmod>\n    <changefreq>${url === `${siteUrl}/` ? 'daily' : 'weekly'}</changefreq>\n    <priority>${url === `${siteUrl}/` ? '1.0' : '0.8'}</priority>\n  </url>`
    ),
    '</urlset>',
    ''
  ].join('\n')

  writeFileSync(resolve(outputDirectory, 'sitemap.xml'), sitemap, 'utf8')
}

module.exports = defineConfig({
  lang: 'zh-CN',
  title: 'dk-plus',
  description: siteDescription,
  head,
  transformPageData(pageData) {
    const result: { title?: string; description?: string; titleTemplate?: string | boolean } = {}
    const isHomePage = pageData.relativePath.endsWith('index.md')
    let pageTitle = pageData.title

    if (!isHomePage && (!pageTitle || pageTitle === 'dk-plus')) {
      pageTitle = pageData.headers[0]?.title || getMarkdownHeading(pageData.relativePath)
    }
    if (!isHomePage && pageTitle) {
      result.title = pageTitle
    }
    if (isHomePage && pageData.title === 'dk-plus') {
      result.titleTemplate = false
    }
    if (!pageData.frontmatter.description && pageTitle) {
      result.description = getPageDescription(pageData.relativePath, pageTitle)
    }
    return result
  },
  transformHead({ page, pageData }) {
    if (pageData.isNotFound) {
      return [['meta', { name: 'robots', content: 'noindex,nofollow' }]]
    }

    const isLegacyUnlocalizedPage = page.startsWith('expansion/')
    const pageUrl = isLegacyUnlocalizedPage
      ? getPageUrl(`zh/${page}`)
      : getPageUrl(page)
    const pageTitle =
      pageData.title && pageData.title !== 'dk-plus'
        ? `${pageData.title} | dk-plus`
        : 'dk-plus'
    const pageDescription = pageData.description || siteDescription
    const isEnglish = page.startsWith('en/')
    const localeAlternates = getLocaleAlternates(page)
    const isTechnicalArticle = /\/(components|document|expansion|electronicBook)\//.test(`/${page}`)
    const structuredPage: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': isTechnicalArticle ? 'TechArticle' : 'WebPage',
      name: pageData.title || 'dk-plus',
      headline: pageData.title || 'dk-plus',
      description: pageDescription,
      url: pageUrl,
      inLanguage: isEnglish ? 'en-US' : 'zh-CN',
      isPartOf: {
        '@type': 'WebSite',
        name: 'dk-plus',
        url: `${siteUrl}/`
      },
      author: {
        '@type': 'Organization',
        name: 'dk-plus',
        url: `${siteUrl}/`
      }
    }
    if (pageData.lastUpdated) {
      structuredPage.dateModified = new Date(pageData.lastUpdated).toISOString()
    }

    const pageHead: HeadConfig[] = [
      ['meta', { name: 'robots', content: isLegacyUnlocalizedPage ? 'noindex,follow' : 'index,follow' }],
      ['link', { rel: 'canonical', href: pageUrl }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: pageUrl }],
      ['meta', { property: 'og:locale', content: isEnglish ? 'en_US' : 'zh_CN' }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }],
      ['meta', { name: 'twitter:image', content: 'https://oss.cadwaladerss.com/dk-plus/images/isicon.png' }],
      [
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(structuredPage)
      ]
    ]

    localeAlternates.forEach(({ lang, page: alternatePage }) => {
      pageHead.push(['link', { rel: 'alternate', hreflang: lang, href: getPageUrl(alternatePage) }])
    })
    const defaultLocale = localeAlternates.find(({ lang }) => lang === 'zh-CN')
    if (defaultLocale) {
      pageHead.push([
        'link',
        { rel: 'alternate', hreflang: 'x-default', href: getPageUrl(defaultLocale.page) }
      ])
    }

    if (localeAlternates.length > 1) {
      pageHead.push([
        'meta',
        { property: 'og:locale:alternate', content: isEnglish ? 'zh_CN' : 'en_US' }
      ])
    }

    if (['index.md', 'zh/index.md', 'en/index.md'].includes(page)) {
      pageHead.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'dk-plus 友情链接',
          itemListElement: friendlyLinks.friendlyList.map((link, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: link.name,
            description: isEnglish ? link.descriptionEn : link.description,
            url: link.logoSrc
          }))
        })
      ])
    }

    if (page.endsWith('ecosystem/karuibi.md')) {
      pageHead.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'KaruiBI',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: pageDescription,
          url: 'https://karuibi.docs.dk-plus.com/'
        })
      ])
    }

    if (page.endsWith('ecosystem/karui-toolbox.md')) {
      pageHead.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Karui 工具箱',
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'Windows',
          description: pageDescription,
          downloadUrl: 'https://karuibi.docs.dk-plus.com/downloads/karui-toolbox-windows-x64.exe',
          url: 'https://karuibi.docs.dk-plus.com/toolknit-desktop.html'
        })
      ])
    }

    return pageHead
  },
  buildEnd() {
    writeSeoFiles()
  },
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
