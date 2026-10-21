import { version } from '../../../../packages/components/package.json'

export default function getNavs() {
  return [
    {
      text: '文档',
      activeMatch: '^/zh/document/',
      link: '/zh/document/install'
    },
    {
      text: '基础组件',
      activeMatch: '^/zh/components/basics/icon',
      link: '/zh/components/basics/icon'
    },
    {
      text: '技术拓展',
      items: [
        {
          text: '1.Flutter',
          activeMatch: '^/zh/expansion/Flutter/',
          link: '/zh/expansion/Flutter/windows/WinInstall'
        }
      ]
    },
    {
      text: '其他',
      items: [
        {
          text: '1.电子书',
          activeMatch: '^/zh/electronicBook/',
          link: '/zh/electronicBook/StereotypedWriting'
        }
      ]
    },
    {
      text: 'KaruiBI',
      activeMatch: '^/zh/ecosystem/karuibi',
      link: '/zh/ecosystem/karuibi'
    },
    {
      text: 'Karui 工具箱',
      activeMatch: '^/zh/ecosystem/karui-toolbox',
      link: '/zh/ecosystem/karui-toolbox'
    },
    {
      text: 'AI 漫剧',
      items: [
        {
          text: '总览',
          activeMatch: '^/zh/ecosystem/ai-comic$',
          link: '/zh/ecosystem/ai-comic'
        },
        {
          text: '制作流程',
          activeMatch: '^/zh/ecosystem/ai-comic-workflow',
          link: '/zh/ecosystem/ai-comic-workflow'
        },
        {
          text: '提示词与规范',
          activeMatch: '^/zh/ecosystem/ai-comic-prompts',
          link: '/zh/ecosystem/ai-comic-prompts'
        },
        {
          text: '变现路径',
          activeMatch: '^/zh/ecosystem/ai-comic-monetize',
          link: '/zh/ecosystem/ai-comic-monetize'
        },
        {
          text: '合规与授权',
          activeMatch: '^/zh/ecosystem/ai-comic-compliance',
          link: '/zh/ecosystem/ai-comic-compliance'
        }
      ]
    },
    {
      text: version,
      link: 'https://www.npmjs.com/package/dk-plus'
    }
  ]
}
