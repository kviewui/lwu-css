import { defineConfig } from 'vitepress'
import packageInfo from '../../package.json';
import timeline from 'vitepress-markdown-timeline';
import { packageJSON } from '../../build/packageJSON';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LwuCSS",
  description: "参考tailwindcss设计的一套轻量级原子化CSS样式库，助力各位开发者用户高效开发业务。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { 
        text: packageJSON.version, 
        items: [
          { text: '更新日志', link: 'changelog' },
          { text: '开源贡献', link: '/convention/contributing' },
          // { text: 'uniapp插件市场', link: '' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/kviewui/lwu-css/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    sidebar: [
      {
        text: '入门',
        items: [
          { text: '介绍', link: '/start/introduce' },
          { text: '快速上手', link: '/start/start' },
          { text: '更新日志', link: '/changelog' }
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
      },
      {
        text: '排版',
        items: [
          { text: '字体序列', link: '/font-family' },
          { text: '字体大小', link: '/font-size' },
          { text: '字体平滑度', link: '/font-smoothing' },
          { text: '字体样式', link: '/font-style' },
          { text: '字体粗细', link: '/font-weight' },
          { text: 'Font Variant Numeric', link: '/font-variant-mumeric' },
          { text: '字母间距', link: '/letter-spacing' },
          { text: '行高', link: '/line-height' },
          { text: '文本对齐', link: '/text-align' },
          { text: '文本颜色', link: '/text-color' },
          { text: '文本装饰', link: '/text-decoration' },
          { text: '文本转换', link: '/text-transform' },
          { text: '文本溢出', link: '/text-overflow' },
          { text: '垂直对齐', link: '/vertical-align' },
          { text: '空格', link: '/whitespace' },
          { text: ' 文本换行', link: '/word-break' }
        ]
      },
      {
        text: '背景',
        items: [
          { text: '背景图像固定', link: '/background-attachment' },
          { text: '背景图像裁剪', link: '/background-clip' },
          { text: '背景颜色', link: '/background-color' },
          { text: 'Background Origin', link: '/background-origin' },
          { text: '背景图像位置', link: '/background-position' },
          { text: '背景图像重复', link: '/background-repeat' },
          { text: '背景图像大小', link: '/background-size' },
          { text: '背景渐变', link: '/background-gradient' }
        ]
      },
      {
        text: '边框',
        items: [
          { text: '边框圆角', link: '/border-radius' },
          { text: '边框厚度', link: '/border-width' },
          { text: '边框样式', link: '/border-style' },
          { text: '边框颜色', link: '/border-color' }
        ]
      },
      {
        text: 'Effects',
        items: [
          { text: '不透明度', link: '/opacity' }
        ]
      },
      {
        text: 'Filters',
        items: [
          { text: '模糊滤镜', link: '/blur' }
        ]
      },
      {
        text: '过渡和动画',
        items: [
          { text: '动画', link: '/animation' }
        ]
      },
      {
        text: '转换',
        items: [
          { text: '2D / 3D转换', link: '/transform' },
          { text: '变换焦点', link: '/transform-origin' },
          { text: '旋转', link: '/rotate' }
        ]
      },
      {
        text: '交互',
        items: [
          { text: '大小调整', link: '/resize' },
          { text: '用户选择', link: '/user-select' }
        ]
      },
      {
        text: 'SVG',
        items: [
          { text: '填充', link: '/fill' },
          { text: '线条', link: '/stroke' },
          { text: '线条厚度', link: '/stroke-width' }
        ]
      },
      {
        text: 'ACCESSIBILITY',
        items: [
          { text: '屏幕阅读器', link: '/screen-readers' }
        ]
      },
      {
        text: '开源贡献',
        items: [
          { text: '贡献者名单', link: '/convention/contributors'},
          { text: '贡献指南', link: '/convention/contributing'},
          { text: '提交内容协议', link: '/convention/commit-convention'},
          { text: '代码行为准则', link: '/convention/code-of-conduct'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: packageInfo.repository.url }
    ],
    search: {
      provider: 'local'
    }
  },
  markdown: {
    config: (md) => {
      md.use(timeline);
    }
  }
})
