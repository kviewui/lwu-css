---
outline: deep
---

#### <span class="text-lg text-gray-500 font-normal">Flexbox And Grid</span>

<div class="w-screen"></div>

# Gap
<space />
<a-typography-text>
    用于控制隐式创建的网格行与列之间的间隙的功能类。
</a-typography-text>

<CssPrefix />

## 语法
### 0-3，步进0.5
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">gap-0</a-link> | <a-link>gap: 0px;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-0</a-link> | <a-link>column-gap: 0px;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-0</a-link> | <a-link>row-gap: 0px;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-px</a-link> | <a-link>gap: 1px;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-px</a-link> | <a-link>column-gap: 1px;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-px</a-link> | <a-link>row-gap: 1px;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-0.5</a-link> | <a-link>gap: 0.125 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-0.5</a-link> | <a-link>column-gap: 0.125 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-o.5</a-link> | <a-link>row-gap: 0.125 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-1</a-link> | <a-link>gap: 0.25 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-1</a-link> | <a-link>column-gap: 0.25 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-1</a-link> | <a-link>row-gap: 0.25 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-1.5</a-link> | <a-link>gap: 0.375 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-1.5</a-link> | <a-link>column-gap: 0.375 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-1.5</a-link> | <a-link>row-gap: 0.375 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-2</a-link> | <a-link>gap: 0.5 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-2</a-link> | <a-link>column-gap: 0.5 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-2</a-link> | <a-link>row-gap: 0.5 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-2.5</a-link> | <a-link>gap: 0.625 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-2.5</a-link> | <a-link>column-gap: 0.625 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-2.5</a-link> | <a-link>row-gap: 0.625 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-3</a-link> | <a-link>gap: 0.75 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-3</a-link> | <a-link>column-gap: 0.75 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-3</a-link> | <a-link>row-gap: 0.75 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-3.5</a-link> | <a-link>gap: 0.875 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-3.5</a-link> | <a-link>column-gap: 0.875 * 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-3.5</a-link> | <a-link>row-gap: 0.875 * 1rem;</a-link> | H5、小程序、app-vue

### 4-12，步进1
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">gap-4</a-link> | <a-link>gap: 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-4</a-link> | <a-link>column-gap: 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-4</a-link> | <a-link>row-gap: 1rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-5</a-link> | <a-link>gap: 1.25rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-5</a-link> | <a-link>column-gap: 1.25rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-5</a-link> | <a-link>row-gap: 1.25rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-6</a-link> | <a-link>gap: 1.5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-6</a-link> | <a-link>column-gap: 1.5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-6</a-link> | <a-link>row-gap: 1.5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-7</a-link> | <a-link>gap: 1.75rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-7</a-link> | <a-link>column-gap: 1.75rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-7</a-link> | <a-link>row-gap: 1.75rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-8</a-link> | <a-link>gap: 2rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-8</a-link> | <a-link>column-gap: 2rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-8</a-link> | <a-link>row-gap: 2rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-9</a-link> | <a-link>gap: 2.25rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-9</a-link> | <a-link>column-gap: 2.25rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-9</a-link> | <a-link>row-gap: 2.25rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-10</a-link> | <a-link>gap: 2.5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-10</a-link> | <a-link>column-gap: 2.5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-10</a-link> | <a-link>row-gap: 2.5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-11</a-link> | <a-link>gap: 2.75rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-11</a-link> | <a-link>column-gap: 2.75rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-11</a-link> | <a-link>row-gap: 2.75rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-12</a-link> | <a-link>gap: 3rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-12</a-link> | <a-link>column-gap: 3rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-12</a-link> | <a-link>row-gap: 3rem;</a-link> | H5、小程序、app-vue

### 14
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">gap-14</a-link> | <a-link>gap: 3.5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-14</a-link> | <a-link>column-gap: 3.5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-14</a-link> | <a-link>row-gap: 3.5rem;</a-link> | H5、小程序、app-vue

### 16-64，进步4
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">gap-16</a-link> | <a-link>gap: 4rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-16</a-link> | <a-link>column-gap: 4rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-16</a-link> | <a-link>row-gap: 4rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-20</a-link> | <a-link>gap: 5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-20</a-link> | <a-link>column-gap: 5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-20</a-link> | <a-link>row-gap: 5rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-24</a-link> | <a-link>gap: 6rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-24</a-link> | <a-link>column-gap: 6rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-24</a-link> | <a-link>row-gap: 6rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-28</a-link> | <a-link>gap: 7rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-28</a-link> | <a-link>column-gap: 7rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-28</a-link> | <a-link>row-gap: 7rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-32</a-link> | <a-link>gap: 8rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-32</a-link> | <a-link>column-gap: 8rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-32</a-link> | <a-link>row-gap: 8rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-36</a-link> | <a-link>gap: 9rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-36</a-link> | <a-link>column-gap: 9rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-36</a-link> | <a-link>row-gap: 9rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-40</a-link> | <a-link>gap: 10rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-40</a-link> | <a-link>column-gap: 10rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-40</a-link> | <a-link>row-gap: 10rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-44</a-link> | <a-link>gap: 11rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-44</a-link> | <a-link>column-gap: 11rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-44</a-link> | <a-link>row-gap: 11rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-48</a-link> | <a-link>gap: 12rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-48</a-link> | <a-link>column-gap: 12rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-48</a-link> | <a-link>row-gap: 12rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-52</a-link> | <a-link>gap: 13rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-52</a-link> | <a-link>column-gap: 13rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-52</a-link> | <a-link>row-gap: 13rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-56</a-link> | <a-link>gap: 14rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-56</a-link> | <a-link>column-gap: 14rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-56</a-link> | <a-link>row-gap: 14rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-60</a-link> | <a-link>gap: 15rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-60</a-link> | <a-link>column-gap: 15rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-60</a-link> | <a-link>row-gap: 15rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-64</a-link> | <a-link>gap: 16rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-64</a-link> | <a-link>column-gap: 16rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-64</a-link> | <a-link>row-gap: 16rem;</a-link> | H5、小程序、app-vue

### 72、80、96
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">gap-72</a-link> | <a-link>gap: 18rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-72</a-link> | <a-link>column-gap: 18rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-72</a-link> | <a-link>row-gap: 18rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-80</a-link> | <a-link>gap: 20rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-80</a-link> | <a-link>column-gap: 20rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-80</a-link> | <a-link>row-gap: 20rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-96</a-link> | <a-link>gap: 24rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-x-96</a-link> | <a-link>column-gap: 24rem;</a-link> | H5、小程序、app-vue
| <a-link status="success">gap-y-96</a-link> | <a-link>row-gap: 24rem;</a-link> | H5、小程序、app-vue