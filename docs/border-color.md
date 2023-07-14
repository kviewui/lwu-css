---
outline: deep
---

#### <span class="text-lg text-gray-500 font-normal">边框</span>

<div class="w-screen"></div>

# 边框颜色
<space />
<a-typography-text>
    用于控制元素边框颜色的功能类。
</a-typography-text>

<CssPrefix />

## 语法
::: tip
+ 边框颜色已内置 <a-link>暗黑模式</a-link> 的支持
+ 在边框颜色class后面紧跟 `dark` 即可实现 <a-link>暗黑模式</a-link>，示例如下：
    ```html
        <view class="lwu-border-primary dark"></view>
    ```
:::
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-transparent</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: transparent;"></div></div> | <div class="flex justify-center"><a-link>border-color: transparent;</a-link></div> | H5、小程序、app-vue
| <div class="flex justify-center items-center"><a-link status="success">border-current</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: currentColor;"></div></div> | <div class="flex justify-center"><a-link>border-color: currentColor;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-black</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #000000"></div></div> | <div class="flex justify-center"><a-link>border-color: #000000;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-white</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFFFFF"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFFFFF;</a-link></div> | H5、小程序、app-vue、app-nvue

### Grey / 中性灰
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-grey-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #f7f8fa;"></div></div> | <div class="flex justify-center"><a-link>border-color: #f7f8fa;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-grey-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #f2f3f5;"></div></div> | <div class="flex justify-center"><a-link>border-color: #f2f3f5;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-grey-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #e5e6eb;"></div></div> | <div class="flex justify-center"><a-link>border-color: #e5e6eb;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-grey-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #c9cdd4;"></div></div> | <div class="flex justify-center"><a-link>border-color: #c9cdd4;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-grey-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #a9aeb8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #a9aeb8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-grey-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #86909c;"></div></div> | <div class="flex justify-center"><a-link>border-color: #86909c;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-grey-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #6b7785;"></div></div> | <div class="flex justify-center"><a-link>border-color: #6b7785;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-grey-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4e5969;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4e5969;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-grey-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #272e3b;"></div></div> | <div class="flex justify-center"><a-link>border-color: #272e3b;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-grey-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #1d2129;"></div></div> | <div class="flex justify-center"><a-link>border-color: #1d2129;</a-link></div> | H5、小程序、app-vue、app-nvue

### Red / 浪漫红
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-red-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFECE8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFECE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-red-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FDCDC5;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FDCDC5;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-red-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FBACA3;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FBACA3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-red-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F98981;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F98981;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-red-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F76560;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F76560;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-red-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F53F3F;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F53F3F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-red-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #CB272D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #CB272D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-red-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #A1151E;"></div></div> | <div class="flex justify-center"><a-link>border-color: #A1151E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-red-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #770813;"></div></div> | <div class="flex justify-center"><a-link>border-color: #770813;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-red-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4D000A;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4D000A;</a-link></div> | H5、小程序、app-vue、app-nvue

### Orangered / 晚秋红
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFF3E8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFF3E8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FDDDC3;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FDDDC3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FCC59F;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FCC59F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FC7B;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FC7B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F99057;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F99057;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F77234;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F77234;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #CC5120;"></div></div> | <div class="flex justify-center"><a-link>border-color: #CC5120;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #A23511;"></div></div> | <div class="flex justify-center"><a-link>border-color: #A23511;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #771F06;"></div></div> | <div class="flex justify-center"><a-link>border-color: #771F06;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orangered-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4D0E00;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4D0E00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Orange / 活力橙
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-orange-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFF7E8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFF7E8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orange-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFE4BA;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFE4BA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orange-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFCF8B;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFCF8B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orange-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFB65D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFB65D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orange-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FF9A2E;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FF9A2E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orange-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FF7D00;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FF7D00;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orange-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #D25F00;"></div></div> | <div class="flex justify-center"><a-link>border-color: #D25F00;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orange-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #A64500;"></div></div> | <div class="flex justify-center"><a-link>border-color: #A64500;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orange-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #792E00;"></div></div> | <div class="flex justify-center"><a-link>border-color: #792E00;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-orange-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4D1B00;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4D1B00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Gold / 黄昏色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-gold-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFFCE8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFFCE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-gold-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FDF4BF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FDF4BF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-gold-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FCE996;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FCE996;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-gold-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FADC6D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FADC6D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-gold-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F9CC45;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F9CC45;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-gold-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F7BA1E;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F7BA1E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-gold-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #CC9213;"></div></div> | <div class="flex justify-center"><a-link>border-color: #CC9213;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-gold-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #A26D0A;"></div></div> | <div class="flex justify-center"><a-link>border-color: #A26D0A;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-gold-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #774B04;"></div></div> | <div class="flex justify-center"><a-link>border-color: #774B04;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-gold-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4D2D00;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4D2D00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Yellow / 柠檬黄
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FEFFE8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FEFFE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FEFEBE;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FEFEBE;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FDFA94;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FDFA94;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FCF26B;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FCF26B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FBE842;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FBE842;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FADC19;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FADC19;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #CFAF0F;"></div></div> | <div class="flex justify-center"><a-link>border-color: #CFAF0F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #A38408;"></div></div> | <div class="flex justify-center"><a-link>border-color: #A38408;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #785D03;"></div></div> | <div class="flex justify-center"><a-link>border-color: #785D03;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-yellow-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4D3800;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4D3800;</a-link></div> | H5、小程序、app-vue、app-nvue

### Lime / 新生绿
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-lime-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FCFFE8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FCFFE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-lime-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #EDF8BB;"></div></div> | <div class="flex justify-center"><a-link>border-color: #EDF8BB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-lime-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #DCF190;"></div></div> | <div class="flex justify-center"><a-link>border-color: #DCF190;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-lime-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #C9E968;"></div></div> | <div class="flex justify-center"><a-link>border-color: #C9E968;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-lime-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #B5E241;"></div></div> | <div class="flex justify-center"><a-link>border-color: #B5E241;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-lime-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #9FDB1D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #9FDB1D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-lime-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #7EB712;"></div></div> | <div class="flex justify-center"><a-link>border-color: #7EB712;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-lime-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #5F940A;"></div></div> | <div class="flex justify-center"><a-link>border-color: #5F940A;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-lime-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #437004;"></div></div> | <div class="flex justify-center"><a-link>border-color: #437004;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-lime-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #2A4D00;"></div></div> | <div class="flex justify-center"><a-link>border-color: #2A4D00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Green / 翡翠绿
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-green-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E8FFF3;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E8FFF3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-green-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #B0F2D2;"></div></div> | <div class="flex justify-center"><a-link>border-color: #B0F2D2;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-green-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #7DE4B6;"></div></div> | <div class="flex justify-center"><a-link>border-color: #7DE4B6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-green-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4ED79E;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4ED79E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-green-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #25C98A;"></div></div> | <div class="flex justify-center"><a-link>border-color: #25C98A;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-green-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #00BC79;"></div></div> | <div class="flex justify-center"><a-link>border-color: #00BC79;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-green-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #00A06D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #00A06D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-green-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #00845F;"></div></div> | <div class="flex justify-center"><a-link>border-color: #00845F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-green-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #00684E;"></div></div> | <div class="flex justify-center"><a-link>border-color: #00684E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-green-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #004D3C;"></div></div> | <div class="flex justify-center"><a-link>border-color: #004D3C;</a-link></div> | H5、小程序、app-vue、app-nvue

### Cyan / 碧涛青
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E8FFFB;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E8FFFB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #B7F4EC;"></div></div> | <div class="flex justify-center"><a-link>border-color: #B7F4EC;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #89E9E0;"></div></div> | <div class="flex justify-center"><a-link>border-color: #89E9E0;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #5EDFD6;"></div></div> | <div class="flex justify-center"><a-link>border-color: #5EDFD6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #37D4CF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #37D4CF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #14C9C9;"></div></div> | <div class="flex justify-center"><a-link>border-color: #14C9C9;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #0DA5;"></div></div> | <div class="flex justify-center"><a-link>border-color: #0DA5;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #07828B;"></div></div> | <div class="flex justify-center"><a-link>border-color: #07828B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #03616C;"></div></div> | <div class="flex justify-center"><a-link>border-color: #03616C;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-cyan-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #00424D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #00424D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Blue / 海空蓝
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-blue-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E8F7FF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E8F7FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-blue-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #C3E7FE;"></div></div> | <div class="flex justify-center"><a-link>border-color: #C3E7FE;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-blue-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #9FD4FD;"></div></div> | <div class="flex justify-center"><a-link>border-color: #9FD4FD;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-blue-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #7BC0FC;"></div></div> | <div class="flex justify-center"><a-link>border-color: #7BC0FC;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-blue-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #57A9FB;"></div></div> | <div class="flex justify-center"><a-link>border-color: #57A9FB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-blue-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #3491FA;"></div></div> | <div class="flex justify-center"><a-link>border-color: #3491FA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-blue-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #206CCF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #206CCF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-blue-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #114BA3;"></div></div> | <div class="flex justify-center"><a-link>border-color: #114BA3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-blue-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #063078;"></div></div> | <div class="flex justify-center"><a-link>border-color: #063078;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-blue-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #001A4D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #001A4D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Deepblue / 极致蓝
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E8F3FF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E8F3FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #BEDAFF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #BEDAFF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #94BFFF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #94BFFF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #61FF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #61FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4080FF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4080FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #165DFF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #165DFF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #0E42D2;"></div></div> | <div class="flex justify-center"><a-link>border-color: #0E42D2;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #072CA6;"></div></div> | <div class="flex justify-center"><a-link>border-color: #072CA6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #031A79;"></div></div> | <div class="flex justify-center"><a-link>border-color: #031A79;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-deepblue-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #000D4D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #000D4D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Purple / 暗夜紫
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-purple-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F5E8FF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F5E8FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-purple-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #DDBEF6;"></div></div> | <div class="flex justify-center"><a-link>border-color: #DDBEF6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-purple-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #C396ED;"></div></div> | <div class="flex justify-center"><a-link>border-color: #C396ED;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-purple-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #A871E3;"></div></div> | <div class="flex justify-center"><a-link>border-color: #A871E3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-purple-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #8D4EDA;"></div></div> | <div class="flex justify-center"><a-link>border-color: #8D4EDA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-purple-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #722ED1;"></div></div> | <div class="flex justify-center"><a-link>border-color: #722ED1;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-purple-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #551DB0;"></div></div> | <div class="flex justify-center"><a-link>border-color: #551DB0;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-purple-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #3C108F;"></div></div> | <div class="flex justify-center"><a-link>border-color: #3C108F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-purple-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #27066E;"></div></div> | <div class="flex justify-center"><a-link>border-color: #27066E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-purple-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #16004D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #16004D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Pinkpurple / 青春紫
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFE8FB;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFE8FB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F7BAEF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F7BAEF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F08EE6;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F08EE6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E865DF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E865DF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E13EDB;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E13EDB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #D91AD9;"></div></div> | <div class="flex justify-center"><a-link>border-color: #D91AD9;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #B010B6;"></div></div> | <div class="flex justify-center"><a-link>border-color: #B010B6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #8A0993;"></div></div> | <div class="flex justify-center"><a-link>border-color: #8A0993;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #650370;"></div></div> | <div class="flex justify-center"><a-link>border-color: #650370;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-pinkpurple-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #42004D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #42004D;</a-link></div> | H5、小程序、app-vue、app-nvue

### magenta / 品红色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFE8F1;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFE8F1;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FDC2DB;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FDC2DB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FB9DC7;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FB9DC7;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F979B7;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F979B7;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F754A8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F754A8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F5319D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F5319D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #CB1E83;"></div></div> | <div class="flex justify-center"><a-link>border-color: #CB1E83;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #A11069;"></div></div> | <div class="flex justify-center"><a-link>border-color: #A11069;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #77064F;"></div></div> | <div class="flex justify-center"><a-link>border-color: #77064F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-magenta-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4D0034;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4D0034;</a-link></div> | H5、小程序、app-vue、app-nvue

### 功能色
::: tip 使用场景
+ 0-白底悬浮
+ 1-文字禁用
+ 2-一般禁用
+ 3-特殊场景
+ 5-常规使用
+ 6-点击状态
:::
#### Primary-品牌色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-primary-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E8FFF3;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E8FFF3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-primary-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #B0F2D2;"></div></div> | <div class="flex justify-center"><a-link>border-color: #B0F2D2;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-primary-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #7DE4B6;"></div></div> | <div class="flex justify-center"><a-link>border-color: #7DE4B6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-primary-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4ED79E;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4ED79E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-primary-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #00BC79;"></div></div> | <div class="flex justify-center"><a-link>border-color: #00BC79;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-primary-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #00A06D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #00A06D;</a-link></div> | H5、小程序、app-vue、app-nvue

#### Success-成功色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-success-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E8FFF3;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E8FFF3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-success-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #B0F2D2;"></div></div> | <div class="flex justify-center"><a-link>border-color: #B0F2D2;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-success-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #7DE4B6;"></div></div> | <div class="flex justify-center"><a-link>border-color: #7DE4B6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-success-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #4ED79E;"></div></div> | <div class="flex justify-center"><a-link>border-color: #4ED79E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-success-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #00BC79;"></div></div> | <div class="flex justify-center"><a-link>border-color: #00BC79;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-success-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #00A06D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #00A06D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Danger / 危险色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-danger-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFECE8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFECE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-danger-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FDCDC5;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FDCDC5;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-danger-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FBACA3;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FBACA3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-danger-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F98981;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F98981;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-danger-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #F53F3F;"></div></div> | <div class="flex justify-center"><a-link>border-color: #F53F3F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-danger-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #CB272D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #CB272D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Warning / 警告色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-warning-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFF7E8;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFF7E8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-warning-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFE4BA;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFE4BA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-warning-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFCF8B;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFCF8B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-warning-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FFB65D;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FFB65D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-warning-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #FF7D00;"></div></div> | <div class="flex justify-center"><a-link>border-color: #FF7D00;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-warning-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #D25F00;"></div></div> | <div class="flex justify-center"><a-link>border-color: #D25F00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Link / 链接色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-link-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E8F7FF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E8F7FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-link-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #C3E7FE;"></div></div> | <div class="flex justify-center"><a-link>border-color: #C3E7FE;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-link-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #9FD4FD;"></div></div> | <div class="flex justify-center"><a-link>border-color: #9FD4FD;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-link-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #7BC0FC;"></div></div> | <div class="flex justify-center"><a-link>border-color: #7BC0FC;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-link-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #3491FA;"></div></div> | <div class="flex justify-center"><a-link>border-color: #3491FA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-link-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #206CCF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #206CCF;</a-link></div> | H5、小程序、app-vue、app-nvue

### Info / 信息色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">border-info-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #E8F7FF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #E8F7FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-info-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #C3E7FE;"></div></div> | <div class="flex justify-center"><a-link>border-color: #C3E7FE;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-info-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #9FD4FD;"></div></div> | <div class="flex justify-center"><a-link>border-color: #9FD4FD;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-info-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #7BC0FC;"></div></div> | <div class="flex justify-center"><a-link>border-color: #7BC0FC;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-info-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #3491FA;"></div></div> | <div class="flex justify-center"><a-link>border-color: #3491FA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">border-info-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold border-1px border-solid" style="border-color: #206CCF;"></div></div> | <div class="flex justify-center"><a-link>border-color: #206CCF;</a-link></div> | H5、小程序、app-vue、app-nvue