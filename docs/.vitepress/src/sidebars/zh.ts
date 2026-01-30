/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
import { znExpansionNav } from '../../data/znExpansionNav'
export const sidebar = {
  '/zh/document/': [
    {
      text: '开发指南',
      items: [
        { text: '安装', link: '/zh/document/install' },
        { text: '快速上手', link: '/zh/document/import' }
      ]
    },
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/zh/document/introduce' },
        { text: '贡献指南', link: '/zh/document/contributing' },
        { text: '加入我们', link: '/zh/document/join' }
      ]
    },
    {
      text: '发展历程',
      items: [
        { text: '更新日志', link: '/zh/document/update' },
        { text: '里程碑', link: '/zh/document/mileage' }
      ]
    }
  ],
  '/zh/components/': [
    {
      text: '设计',
      items: [
        { text: 'Palette 色板', link: '/zh/components/design/swatches' }
      ]
    },
    {
      text: '基础组件',
      items: [
        { text: 'Icon 图标', link: '/zh/components/basics/icon' },
        { text: 'Container 页面布局', link: '/zh/components/basics/container' },
        { text: 'Space 间距', link: '/zh/components/basics/space' },
        { text: 'Button 按钮', link: '/zh/components/basics/button' },
        { text: 'Shadow 盒子', link: '/zh/components/basics/shadow' },
        { text: 'Alert 警示', link: '/zh/components/basics/alert' },
        { text: 'ScrollBar 滚动条', link: '/zh/components/basics/scrollBar' },
        { text: 'Layout 布局', link: '/zh/components/basics/layout' }
      ]
    },
    {
      text: '表单组件',
      items: [
        { text: 'Input 输入框', link: '/zh/components/form/input' },
        { text: 'Autocomplete 自动补全', link: '/zh/components/form/autocomplete' },
        { text: 'Color Picker Panel 颜色选择器面板', link: '/zh/components/form/colorPickerPanel' },
        { text: 'Date Picker 日期选择器', link: '/zh/components/form/datePicker' },
        { text: 'Date Picker Panel 日期选择器面板', link: '/zh/components/form/datePickerPanel' },
        { text: 'Select 选择器', link: '/zh/components/form/select' },
        { text: 'Slider 滑块', link: '/zh/components/form/slider' },
        { text: 'Time Select 时间选择', link: '/zh/components/form/timeSelect' },
        { text: 'Time Picker 时间选择器', link: '/zh/components/form/timePicker' },
        { text: 'InputNumber 计数器', link: '/zh/components/form/inputNumber' },
        { text: 'Checkbox 多选框', link: '/zh/components/form/checkbox' },
        { text: 'Radio 单选框', link: '/zh/components/form/radio' },
        { text: 'Switch 开关', link: '/zh/components/form/switch' }
      ]
    },
    {
      text: 'Data展示组件',
      items: [
        { text: 'Rate 评分', link: '/zh/components/DataShow/rate' },
        { text: 'Watermark 水印', link: '/zh/components/DataShow/watermark' }
      ]
    },
    {
      text: '反馈组件',
      items: [{ text: 'Loading 加载', link: '/zh/components/feedback/loading' }]
    }
  ],
  '/zh/expansion/': znExpansionNav,
  '/zh/electronicBook/': [
    {
      text: '其他知识点',
      items: [
        { text: '电子书首页', link: '/zh/electronicBook/StereotypedWriting' },
        { text: 'MsDKPlus', link: '/zh/electronicBook/MsDKPlus' }
      ]
    }
  ]
}
