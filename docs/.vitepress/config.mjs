import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HqHelper 使用文档",
  description: "最终幻想XIV生产采集玩家的黄金篇秘籍配方制作计算器",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/' },
      { text: '功能详解', link: '/features/' },
      { text: '常见问题', link: '/faq' },
      { text: 'GitHub', link: 'https://github.com/InfSein/hqhelper-dawntrail' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '快速入门', link: '/guide/' },
            { text: '安装部署', link: '/guide/installation' },
            { text: '界面概览', link: '/guide/interface' },
            { text: '版本选择', link: '/guide/version-selection' },
            { text: '职业选择', link: '/guide/job-selection' },
            { text: '部件选择', link: '/guide/gear-selection' },
            { text: '统计功能', link: '/guide/statistics' },
            { text: '实用工具', link: '/guide/tools' },
            { text: '设置与更新', link: '/guide/settings' }
          ]
        }
      ],
      '/features/': [
        {
          text: '功能详解',
          items: [
            { text: '概述', link: '/features/' },
            { text: '配方计算', link: '/features/recipe-calculation' },
            { text: '材料统计', link: '/features/material-statistics' },
            { text: '成本预估', link: '/features/cost-estimation' },
            { text: '宏生成', link: '/features/macro-generation' },
            { text: '导入/导出', link: '/features/import-export' },
            { text: '自定义设置', link: '/features/custom-settings' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/InfSein/hqhelper-dawntrail' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2023-2025 InfSein'
    },

    search: {
      provider: 'local'
    }
  }
})

