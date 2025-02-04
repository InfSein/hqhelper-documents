import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HqHelper 帮助文档",
  description: "Help you understand, learn how to use, and even participate in the development of HqHelper.",
  base: '/hqhelper-documents/',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '欢迎页', link: '/' },
      { text: '指南', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/InfSein/hqhelper-dawntrail' }
    ]
  }
})
