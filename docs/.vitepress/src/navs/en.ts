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
      text: version,
      link: 'https://www.npmjs.com/package/dk-plus'
    }
  ]
}
