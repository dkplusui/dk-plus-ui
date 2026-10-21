import { version } from '../../../../packages/components/package.json'
export default function getNavs() {
  return [
    {
      text: 'Document',
      activeMatch: '^/en/document/',
      link: '/en/document/install'
    },
    {
      text: 'Base component',
      activeMatch: '^/en/components/',
      link: '/en/components/icon'
    },
    {
      text: 'Technology development',
      items: [
        {
          text: '1.Flutter',
          activeMatch: '^/zh/expansion/Flutter/',
          link: '/zh/expansion/Flutter/windows/WinInstall'
        }
      ]
    },
    {
      text: 'other',
      items: [
        {
          text: 'Electronic book',
          activeMatch: '^/en/electronicBook/',
          link: '/en/electronicBook/StereotypedWriting'
        }
      ]
    },
    {
      text: 'KaruiBI',
      activeMatch: '^/en/ecosystem/karuibi',
      link: '/en/ecosystem/karuibi'
    },
    {
      text: 'Karui Toolbox',
      activeMatch: '^/en/ecosystem/karui-toolbox',
      link: '/en/ecosystem/karui-toolbox'
    },
    {
      text: 'AI Comic',
      items: [
        {
          text: 'Overview',
          activeMatch: '^/en/ecosystem/ai-comic$',
          link: '/en/ecosystem/ai-comic'
        },
        {
          text: 'Workflow',
          activeMatch: '^/en/ecosystem/ai-comic-workflow',
          link: '/en/ecosystem/ai-comic-workflow'
        },
        {
          text: 'Prompts & Standards',
          activeMatch: '^/en/ecosystem/ai-comic-prompts',
          link: '/en/ecosystem/ai-comic-prompts'
        },
        {
          text: 'Monetization',
          activeMatch: '^/en/ecosystem/ai-comic-monetize',
          link: '/en/ecosystem/ai-comic-monetize'
        },
        {
          text: 'Compliance & Rights',
          activeMatch: '^/en/ecosystem/ai-comic-compliance',
          link: '/en/ecosystem/ai-comic-compliance'
        }
      ]
    },
    {
      text: version,
      link: 'https://www.npmjs.com/package/dk-plus'
    }
  ]
}
