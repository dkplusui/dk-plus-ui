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
      text: version,
      link: 'https://www.npmjs.com/package/dk-plus'
    }
  ]
}
