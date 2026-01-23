/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
import { enExpansionNav } from '../../data/enExpansionNav'
export const sidebar = {
  '/en/document/': [
    {
      text: 'Development guide',
      items: [
        { text: 'Install', link: '/en/document/install' },
        { text: 'Get started quickly', link: '/en/document/import' }
      ]
    },
    {
      text: 'guide',
      items: [
        { text: 'Introduce', link: '/en/document/introduce' },
        { text: 'Contribution guide', link: '/en/document/contributing' },
        { text: 'Join us', link: '/en/document/join' }
      ]
    },
    {
      text: 'Development course',
      items: [
        { text: 'Update log', link: '/en/document/update' },
        { text: 'Milestone', link: '/en/document/mileage' }
      ]
    }
  ],
  '/en/components/': [
    {
      text: 'design',
      items: [
        {text:'Palette swatches',link:'/en/components/design/swatches'}
      ]
    },
    {
      text: 'Base component',
      items: [
        { text: 'Icon', link: '/en/components/basics/icon' },
        { text: 'Container', link: '/en/components/basics/container' },
        { text: 'Space', link: '/en/components/basics/space' },
        { text: 'Button', link: '/en/components/basics/button' },
        { text: 'Shadow', link: '/en/components/basics/shadow' },
        { text: 'Alert', link: '/en/components/basics/alert' },
        { text: 'ScrollBar', link: '/en/components/basics/scrollBar' },
        { text: 'Layout', link: '/en/components/basics/layout' }
      ]
    },
    {
      text: 'Form',
      items: [
        { text: 'Input', link: '/en/components/form/input' },
        { text: 'InputNumber', link: '/en/components/form/inputNumber' },
        { text: 'Checkbox', link: '/en/components/form/checkbox' },
        { text: 'Radio', link: '/en/components/form/radio' },
        { text: 'Switch', link: '/en/components/form/switch' }
      ]
    },
    {
      text: 'Data Display element',
      items: [
        { text: 'Rate mark', link: '/en/components/DataShow/rate' },
        { text: 'Watermark watermark', link: '/en/components/DataShow/watermark' }
      ]
    },
    {
      text: 'Feedback element',
      items: [{ text: 'Loading', link: '/en/components/feedback/loading' }]
    }
  ],
  '/en/expansion/': enExpansionNav,
  '/en/electronicBook/': [
    {
      text: 'Related ebook',
      items: [
        { text: 'Ebook home page', link: '/en/electronicBook/StereotypedWriting' },
        { text: 'MsDKPlus', link: '/en/electronicBook/MsDKPlus' }
      ]
    }
  ]
}
