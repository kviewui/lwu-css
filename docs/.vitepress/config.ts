import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LwuCSS",
  description: "参考tailwindcss设计的一套轻量级原子化CSS样式库，助力各位开发者用户高效开发业务。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        text: '快速上手',
        items: [
          { text: '介绍', link: '/start/introduce' }
        ]
      },
      {
        text: '布局',
        items: [
          { text: 'Box Sizing', link: '/box-sizing' },
          { text: 'Display', link: '/display' },
          { text: '溢出', link: '/overflow' },
          { text: '定位', link: '/position' },
          { text: '定位位置', link: '/top-right-bottom-left' },
          { text: '层级', link: '/z-index' }
        ]
      },
      {
        text: 'Flexbox And Grid',
        items: [
          { text: 'Flex方向', link: '/flex-direction' },
          { text: 'Flex Wrap', link: '/flex-wrap' },
          { text: 'Flex', link: '/flex' },
          { text: 'Flex Grow', link: '/flex-grow' },
          { text: 'Flex Shrink', link: '/flex-shrink' },
          { text: 'Grid Template Columns', link: '/grid-template-columns' },
          { text: 'Grid Column Start / End', link: '/grid-column' },
          { text: 'Grid Template Rows', link: '/grid-template-rows' },
          { text: 'Grid Row Start / End', link: '/grid-row' },
          { text: 'Grid Auto Flow', link: '/grid-auto-flow' },
          { text: 'Grid Auto Columns', link: '/grid-auto-columns' },
          { text: 'Gap', link: '/gap' },
          { text: 'Justify Content', link: '/justify-content' },
          { text: 'Justify Items', link: '/justify-items' },
          { text: 'Justify Self', link: '/justify-self' },
          { text: 'Align Content', link: '/align-content' },
          { text: 'Align Items', link: '/align-items' },
          { text: 'Align Self', link: '/align-self' },
          { text: 'Place Content', link: '/place-content' },
          { text: 'Place Items', link: '/place-items' },
          { text: 'Place Self', link: '/place-self' }
        ]
      },
      {
        text: '间距',
        items: [
          { text: '内边距', link: '/padding' },
          { text: '外边距', link: '/margin' }
        ]
      },
      {
        text: '尺寸',
        items: [
          { text: '宽度', link: '/width' },
          { text: '最小宽度', link: '/min-width' },
          { text: '最大宽度', link: '/max-width' },
          { text: '高度', link: '/height' },
          { text: '最小高度', link: '/min-height' },
          { text: '最大高度', link: '/max-height' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    }
  }
})
