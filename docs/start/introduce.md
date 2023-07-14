---
title: 介绍
outline: deep
---

#### <span class="text-lg text-gray-500 font-normal">入门</span>

<!-- <div class="w-screen"></div> -->

# 介绍
<space />
<a-typography-text>
    由于业内CSS原子化的盛行，组件库参考 <a-link href="https://tailwindcss.com">tailwindcss</a-link> 的设计思路，并且结合 <a-link status="success" href="https://uniapp.dcloud.net.cn/tutorial/nvue-css.html">UNIAPP NVUE的样式支持</a-link> 给大家提供了一套原子化的CSS样式库，助力各位开发者用户高效开发业务。
</a-typography-text>

::: tip 提示
+ 样式库语法基本是<a-link href="https://tailwindcss.com">tailwindcss</a-link>的语法，所以如果熟悉<a-link href="https://tailwindcss.com">tailwindcss</a-link>的话就能零学习成本上手
:::

## CSS样式概览
::: warning 注意事项
+ 这里的<span class="font-bold">平台差异说明</span>只是<span class="font-bold">CSS分类</span>的平台差异概览，具体属性的平台差异请点击详情去该<span class="font-bold">CSS分类</span>的详情介绍查看
+ 全局样式库已自动添加了浏览器前缀处理，开发者们不需要自己手动处理浏览器前缀问题
+ NVUE的样式支持请查看<a-link status="success" href="https://uniapp.dcloud.net.cn/tutorial/nvue-css.html">UNIAPP NVUE样式</a-link>
:::
<div class="mt-10" />

## 布局
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/box-sizing">Box Sizing</a-link> | box-sizing | H5、小程序、app-vue
| <a-link status="success" href="/display">Display</a-link> | display | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/overflow">溢出</a-link> | overflow | H5、小程序、app-vue
| <a-link status="success" href="/position">定位</a-link> | position | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/top-right-bottom-left">定位位置</a-link> | top \| right \| bottom \| left | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/z-index">层级</a-link> | z-index | H5、小程序、app-vue、app-nvue

## Flexbox And Grid
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/flex-direction">Flex方向</a-link> | flex-direction | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/flex-wrap">Flex Wrap</a-link> | flex-wrap | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/flex">Flex</a-link> | flex | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/flex-grow">Flex Grow</a-link> | flex-grow | H5、小程序、app-vue
| <a-link status="success" href="/flex-shrink">Flex Shrink</a-link> | flex-shrink | H5、小程序、app-vue
| <a-link status="success" href="/grid-template-columns">Grid Template Columns</a-link> | grid-template-columns | H5、小程序、app-vue
| <a-link status="success" href="/grid-column">Grid Column Start / End</a-link> | grid-column \| grid-column-start \| grid-column-end | H5、小程序、app-vue
| <a-link status="success" href="/grid-template-rows">Grid Template Rows</a-link> | grid-template-rows | H5、小程序、app-vue
| <a-link status="success" href="/grid-row">Grid Row Start / End</a-link> | grid-row \| grid-row-start \| grid-row-end | H5、小程序、app-vue
| <a-link status="success" href="/grid-auto-flow">Grid Auto Flow</a-link> | grid-auto-flow | H5、小程序、app-vue
| <a-link status="success" href="/grid-auto-columns">Grid Auto Columns</a-link> | grid-auto-columns | H5、小程序、app-vue
| <a-link status="success" href="grid-auto-rows">Grid Auto Rows</a-link> | grid-auto-rows | H5、小程序、app-vue
| <a-link status="success" href="/gap">Gap</a-link> | gap \| column-gap \| row-gap | H5、小程序、app-vue
| <a-link status="success" href="/justify-content">Justify Content</a-link> | justify-content | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/justify-items">Justify Items</a-link> | justify-items | H5、小程序、app-vue
| <a-link status="success" href="/justify-self">Justify Self</a-link> | justify-self | H5、小程序、app-vue
| <a-link status="success" href="/align-content">Align Content</a-link> | align-content | H5、小程序、app-vue
| <a-link status="success" href="/align-items">Align Items</a-link> | align-items | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/align-self">Align Self</a-link> | align-self | H5、小程序、app-vue
| <a-link status="success" href="/place-content">Place Content</a-link> | place-content | H5、小程序、app-vue
| <a-link status="success" href="/place-items">Place Items</a-link> | place-items | H5、小程序、app-vue
| <a-link status="success" href="/place-self">Place Self</a-link> | place-self | H5、小程序、app-vue

## 间距
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/padding">内边距</a-link> | padding / padding-top \| right \| bottom \|  left | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/margin">外边距</a-link> | margin / margin-top \| right \| bottom \| left | H5、小程序、app-vue、app-nvue

## 尺寸
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/width">宽度</a-link> | width | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/min-width">最小宽度</a-link> | min-width | H5、小程序、app-vue
| <a-link status="success" href="/max-width">最大宽度</a-link> | max-width | H5、小程序、app-vue
| <a-link status="success" href="/height">高度</a-link> | height | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/min-height">最小高度</a-link> | height | H5、小程序、app-vue
| <a-link status="success" href="/max-height">最大高度</a-link> | max-height | H5、小程序、app-vue

## 排版
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/font-family">字体序列</a-link> | font-family | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/font-size">字体大小</a-link> | font-size | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/font-smoothing">字体平滑度</a-link> | font-smoothing | H5、小程序、app-vue
| <a-link status="success" href="/font-style">字体样式</a-link> | font-style | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/font-weight">字体粗细</a-link> | font-weight | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/font-variantNumeric">Font Variant Numeric</a-link> | font-variant-numeric | H5、小程序、app-vue
| <a-link status="success" href="/letter-spacing">字母间距</a-link> | letter-spacing | H5、小程序、app-vue
| <a-link status="success" href="/line-height">行高</a-link> | line-height | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/text-align">文本对齐</a-link> | text-align | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/text-color">文本颜色</a-link> | color | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/text-decoration">文本装饰</a-link> | text-decoration | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/text-transform">文本转换</a-link> | text-transform | H5、小程序、app-vue
| <a-link status="success" href="/text-overflow">文本溢出</a-link> | text-overflow | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/vertical-align">垂直对齐</a-link> | vertical-align | H5、小程序、app-vue
| <a-link status="success" href="/whitespace">空格</a-link> | white-space | H5、小程序、app-vue
| <a-link status="success" href="/word-break">文本换行</a-link> | word-break | H5、小程序、app-vue

## 背景
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/background-attachment">背景图像固定</a-link> | background-attachment | H5、小程序、app-vue
| <a-link status="success" href="/background-clip">背景图像裁剪</a-link> | background-clip | H5、小程序、app-vue
| <a-link status="success" href="/background-color">背景颜色</a-link> | background-color | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/background-origin">Background Origin</a-link> | background-origin | H5、小程序、app-vue
| <a-link status="success" href="/background-position">背景图像位置</a-link> | background-position | H5、小程序、app-vue
| <a-link status="success" href="/background-repeat">背景图像重复</a-link> | background-repeat | H5、小程序、app-vue
| <a-link status="success" href="/background-size">背景图像大小</a-link> | background-size | H5、小程序、app-vue
| <a-link status="success" href="/background-gradient">背景渐变</a-link> | background-image | H5、小程序、app-vue

## 边框
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/border-radius">边框圆角</a-link> | border-radius \| border-top-left-radius \| border-top-right-radius \| border-bottom-left-radius \| border-bottom-right-radius | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/border-width">边框厚度</a-link> | border-width \| border-top-width \| border-right-width \| border-bottom-width \| border-left-width | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/border-style">边框样式</a-link> | border-style | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/border-color">边框颜色</a-link> | border-color | H5、小程序、app-vue、app-nvue

## Effects
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/opacity">不透明度</a-link> | opacity | H5、小程序、app-vue、app-nvue

## Filters
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/blur">模糊滤镜</a-link> | filter: blur | H5、小程序、app-vue

## Tansitions And Animation
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/animation">动画</a-link> | animation | H5、小程序、app-vue

## 转换
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/transform">2D / 3D转换</a-link> | transform | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/transform-origin">变换原点</a-link> | transform-origin | H5、小程序、app-vue、app-nvue
| <a-link status="success" href="/rotate">旋转</a-link> | transform-origin | H5、小程序、app-vue、app-nvue

## 交互
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/resize">大小调整</a-link> | resize | H5、小程序、app-vue
| <a-link status="success" href="/user-select">用户选择</a-link> | user-select | H5、小程序、app-vue

## SVG
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/fill">填充</a-link> | fill | H5、app-vue
| <a-link status="success" href="/stroke">线条</a-link> | stroke | H5、app-vue
| <a-link status="success" href="/stroke-width">线条厚度</a-link> | stroke-width | H5、app-vue

## ACCESSIBILITY
| CSS分类 | CSS属性 | 平台差异说明
| --- | --- | ---
| <a-link status="success" href="/screen-readers">屏幕阅读器</a-link> | - | H5

## 致谢
-   <a-link status="success" href="https://tailwindcss.cn">
        <span class="text-lg font-bold">tailwindcss</span>
    </a-link>
-   <a-link status="success" href="https://uniapp.dcloud.net.cn">
        <span class="text-lg font-bold">uni-app</span>
    </a-link>















