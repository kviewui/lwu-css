---
outline: deep
---

#### <span class="text-lg text-gray-500 font-normal">入门</span>

# 快速上手

## 安装

::: code-group
```bash [pnpm]
# pnpm方式【推荐】
pnpm install lwu-css
```
```bash [npm]
# npm 方式
npm install lwu-css
```
```bash [cnpm]
# cnpm 方式
cnpm install lwu-css
```
```bash [yarn]
# yarn 方式
yarn add lwu-css
```
:::

## 使用

### 引入库文件
+ #### 入口文件引入
```ts
import 'lwu-css/dist/css/index.css'
```

+ #### 通过 CDN 引入
```html
<!-- 两个方式任选其一 -->
<!-- 方式一 -->
<link rel="stylesheet" href="https://unpkg.com/lwu-css@1.0.1/dist/index.css">
<!-- 方式二 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lwu-css/dist/index.css
">
```

### 项目中愉快使用
```html
<div class="lwu-flex lwu-justify-center">
    hello lwu-css
</div>
```