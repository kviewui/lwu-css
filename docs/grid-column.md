---
outline: deep
---

#### <span class="text-lg text-gray-500 font-normal">Flexbox And Grid</span>

<div class="w-screen"></div>

# Grid Column Start / End
<a-typography-text>
    用于控制在网格列中元素的大小和放置方式的功能类。
</a-typography-text>

<CssPrefix />

## 语法
### col-auto
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">col-auto</a-link> | <a-link>grid-column: auto;</a-link> | H5、小程序、app-vue

### col-span-[1-12]
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">col-span-1</a-link> | <a-link>grid-column: span 1 / span 1;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-2</a-link> | <a-link>grid-column: span 2 / span 2;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-3</a-link> | <a-link>grid-column: span 3 / span 3;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-4</a-link> | <a-link>grid-column: span 4 / span 4;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-5</a-link> | <a-link>grid-column: span 5 / span 5;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-6</a-link> | <a-link>grid-column: span 6 / span 6;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-7</a-link> | <a-link>grid-column: span 7 / span 7;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-8</a-link> | <a-link>grid-column: span 8 / span 8;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-9</a-link> | <a-link>grid-column: span 9 / span 9;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-10</a-link> | <a-link>grid-column: span 10 / span 10;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-11</a-link> | <a-link>grid-column: span 11 / span 11;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-span-12</a-link> | <a-link>grid-column: span 12 / span 12;</a-link> | H5、小程序、app-vue

### col-span-full
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">col-span-full</a-link> | <a-link>grid-column: 1 / -1;</a-link> | H5、小程序、app-vue

### col-start-[1-13]
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">col-start-1</a-link> | <a-link>grid-column-start: 1;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-2</a-link> | <a-link>grid-column-start: 2;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-3</a-link> | <a-link>grid-column-start: 3;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-4</a-link> | <a-link>grid-column-start: 4;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-5</a-link> | <a-link>grid-column-start: 5;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-6</a-link> | <a-link>grid-column-start: 6;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-7</a-link> | <a-link>grid-column-start: 7;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-8</a-link> | <a-link>grid-column-start: 8;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-9</a-link> | <a-link>grid-column-start: 9;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-10</a-link> | <a-link>grid-column-start: 10;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-11</a-link> | <a-link>grid-column-start: 11;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-12</a-link> | <a-link>grid-column-start: 12;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-start-13</a-link> | <a-link>grid-column-start: 13;</a-link> | H5、小程序、app-vue

### col-start-auto
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">col-start-13</a-link> | <a-link>grid-column-start: auto;</a-link> | H5、小程序、app-vue

### col-end-[1-13]
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">col-end-1</a-link> | <a-link>grid-column-end: 1;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-2</a-link> | <a-link>grid-column-end: 2;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-3</a-link> | <a-link>grid-column-end: 3;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-4</a-link> | <a-link>grid-column-end: 4;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-5</a-link> | <a-link>grid-column-end: 5;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-6</a-link> | <a-link>grid-column-end: 6;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-7</a-link> | <a-link>grid-column-end: 7;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-8</a-link> | <a-link>grid-column-end: 8;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-9</a-link> | <a-link>grid-column-end: 9;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-10</a-link> | <a-link>grid-column-end: 10;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-11</a-link> | <a-link>grid-column-end: 11;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-12</a-link> | <a-link>grid-column-end: 12;</a-link> | H5、小程序、app-vue
| <a-link status="success">col-end-13</a-link> | <a-link>grid-column-end: 13;</a-link> | H5、小程序、app-vue

### col-end-auto
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">col-end-13</a-link> | <a-link>grid-column-end: auto;</a-link> | H5、小程序、app-vue