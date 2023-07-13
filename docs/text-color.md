---
outline: deep
---

#### <span class="text-lg text-gray-500 font-normal">排版</span>

<div class="w-screen"></div>

# 文本颜色
<a-typography-text>
    用于控制元素的文字颜色的功能类。
</a-typography-text>

<CssPrefix />

## 语法
::: tip
+ 文本颜色已内置 <a-link>暗黑模式</a-link> 的支持
+ 在文本色class后面紧跟 `dark` 即可实现 <a-link>暗黑模式</a-link>，示例如下：
    ```html
        <view class="lwu-white dark"></view>
    ```
:::
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">transparent</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: transparent;">Aa</div></div> | <div class="flex justify-center"><a-link>color: transparent;</a-link></div> | H5、小程序、app-vue
| <div class="flex justify-center items-center"><a-link status="success">current</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: currentColor;">Aa</div></div> | <div class="flex justify-center"><a-link>color: currentColor;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">black</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #000000">Aa</div></div> | <div class="flex justify-center"><a-link>color: #000000;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">white</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFFFFF">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFFFFF;</a-link></div> | H5、小程序、app-vue、app-nvue

### Grey / 中性灰
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">grey-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #f7f8fa;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #f7f8fa;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">grey-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #f2f3f5;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #f2f3f5;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">grey-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #e5e6eb;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #e5e6eb;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">grey-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #c9cdd4;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #c9cdd4;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">grey-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #a9aeb8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #a9aeb8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">grey-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #86909c;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #86909c;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">grey-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #6b7785;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #6b7785;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">grey-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4e5969;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4e5969;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">grey-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #272e3b;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #272e3b;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">grey-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #1d2129;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #1d2129;</a-link></div> | H5、小程序、app-vue、app-nvue

### Red / 浪漫红
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">red-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFECE8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFECE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">red-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FDCDC5;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FDCDC5;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">red-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FBACA3;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FBACA3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">red-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F98981;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F98981;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">red-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F76560;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F76560;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">red-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F53F3F;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F53F3F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">red-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #CB272D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #CB272D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">red-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #A1151E;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #A1151E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">red-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #770813;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #770813;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">red-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4D000A;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4D000A;</a-link></div> | H5、小程序、app-vue、app-nvue

### Orangered / 晚秋红
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">orangered-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFF3E8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFF3E8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orangered-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FDDDC3;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FDDDC3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orangered-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FCC59F;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FCC59F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orangered-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FAAC7B;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FAAC7B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orangered-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F99057;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F99057;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orangered-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F77234;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F77234;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orangered-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #CC5120;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #CC5120;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orangered-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #A23511;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #A23511;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orangered-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #771F06;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #771F06;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orangered-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4D0E00;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4D0E00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Orange / 活力橙
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">orange-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFF7E8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFF7E8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orange-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFE4BA;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFE4BA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orange-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFCF8B;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFCF8B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orange-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFB65D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFB65D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orange-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FF9A2E;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FF9A2E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orange-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FF7D00;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FF7D00;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orange-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #D25F00;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #D25F00;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orange-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #A64500;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #A64500;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orange-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #792E00;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #792E00;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">orange-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4D1B00;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4D1B00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Gold / 黄昏色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">gold-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFFCE8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFFCE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">gold-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FDF4BF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FDF4BF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">gold-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FCE996;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FCE996;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">gold-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FADC6D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FADC6D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">gold-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F9CC45;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F9CC45;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">gold-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F7BA1E;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F7BA1E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">gold-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #CC9213;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #CC9213;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">gold-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #A26D0A;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #A26D0A;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">gold-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #774B04;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #774B04;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">gold-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4D2D00;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4D2D00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Yellow / 柠檬黄
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">yellow-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FEFFE8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FEFFE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">yellow-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FEFEBE;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FEFEBE;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">yellow-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FDFA94;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FDFA94;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">yellow-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FCF26B;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FCF26B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">yellow-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FBE842;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FBE842;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">yellow-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FADC19;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FADC19;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">yellow-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #CFAF0F;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #CFAF0F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">yellow-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #A38408;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #A38408;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">yellow-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #785D03;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #785D03;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">yellow-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4D3800;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4D3800;</a-link></div> | H5、小程序、app-vue、app-nvue

### Lime / 新生绿
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">lime-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FCFFE8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FCFFE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">lime-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #EDF8BB;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #EDF8BB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">lime-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #DCF190;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #DCF190;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">lime-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #C9E968;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #C9E968;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">lime-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #B5E241;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #B5E241;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">lime-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #9FDB1D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #9FDB1D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">lime-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #7EB712;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #7EB712;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">lime-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #5F940A;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #5F940A;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">lime-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #437004;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #437004;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">lime-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #2A4D00;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #2A4D00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Green / 翡翠绿
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">green-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E8FFF3;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E8FFF3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">green-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #B0F2D2;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #B0F2D2;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">green-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #7DE4B6;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #7DE4B6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">green-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4ED79E;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4ED79E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">green-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #25C98A;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #25C98A;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">green-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #00BC79;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #00BC79;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">green-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #00A06D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #00A06D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">green-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #00845F;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #00845F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">green-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #00684E;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #00684E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">green-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #004D3C;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #004D3C;</a-link></div> | H5、小程序、app-vue、app-nvue

### Cyan / 碧涛青
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">cyan-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E8FFFB;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E8FFFB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">cyan-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #B7F4EC;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #B7F4EC;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">cyan-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #89E9E0;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #89E9E0;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">cyan-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #5EDFD6;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #5EDFD6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">cyan-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #37D4CF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #37D4CF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">cyan-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #14C9C9;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #14C9C9;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">cyan-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #0DA5AA;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #0DA5AA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">cyan-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #07828B;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #07828B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">cyan-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #03616C;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #03616C;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">cyan-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #00424D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #00424D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Blue / 海空蓝
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">blue-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E8F7FF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E8F7FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">blue-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #C3E7FE;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #C3E7FE;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">blue-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #9FD4FD;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #9FD4FD;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">blue-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #7BC0FC;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #7BC0FC;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">blue-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #57A9FB;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #57A9FB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">blue-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #3491FA;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #3491FA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">blue-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #206CCF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #206CCF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">blue-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #114BA3;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #114BA3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">blue-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #063078;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #063078;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">blue-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #001A4D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #001A4D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Deepblue / 极致蓝
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">deepblue-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E8F3FF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E8F3FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">deepblue-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #BEDAFF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #BEDAFF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">deepblue-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #94BFFF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #94BFFF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">deepblue-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #6AA1FF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #6AA1FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">deepblue-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4080FF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4080FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">deepblue-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #165DFF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #165DFF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">deepblue-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #0E42D2;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #0E42D2;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">deepblue-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #072CA6;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #072CA6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">deepblue-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #031A79;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #031A79;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">deepblue-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #000D4D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #000D4D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Purple / 暗夜紫
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">purple-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F5E8FF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F5E8FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">purple-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #DDBEF6;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #DDBEF6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">purple-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #C396ED;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #C396ED;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">purple-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #A871E3;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #A871E3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">purple-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #8D4EDA;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #8D4EDA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">purple-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #722ED1;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #722ED1;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">purple-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #551DB0;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #551DB0;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">purple-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #3C108F;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #3C108F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">purple-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #27066E;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #27066E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">purple-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #16004D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #16004D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Pinkpurple / 青春紫
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFE8FB;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFE8FB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F7BAEF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F7BAEF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F08EE6;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F08EE6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E865DF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E865DF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E13EDB;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E13EDB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #D91AD9;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #D91AD9;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #B010B6;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #B010B6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #8A0993;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #8A0993;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #650370;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #650370;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">pinkpurple-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #42004D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #42004D;</a-link></div> | H5、小程序、app-vue、app-nvue

### magenta / 品红色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">magenta-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFE8F1;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFE8F1;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">magenta-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FDC2DB;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FDC2DB;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">magenta-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FB9DC7;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FB9DC7;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">magenta-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F979B7;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F979B7;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">magenta-4</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F754A8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F754A8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">magenta-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F5319D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F5319D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">magenta-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #CB1E83;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #CB1E83;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">magenta-7</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #A11069;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #A11069;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">magenta-8</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #77064F;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #77064F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">magenta-9</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4D0034;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4D0034;</a-link></div> | H5、小程序、app-vue、app-nvue

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
| <div class="flex justify-center items-center"><a-link status="success">primary-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E8FFF3;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E8FFF3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">primary-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #B0F2D2;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #B0F2D2;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">primary-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #7DE4B6;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #7DE4B6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">primary-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4ED79E;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4ED79E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">primary-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #00BC79;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #00BC79;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">primary-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #00A06D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #00A06D;</a-link></div> | H5、小程序、app-vue、app-nvue

#### Success-成功色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">success-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E8FFF3;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E8FFF3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">success-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #B0F2D2;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #B0F2D2;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">success-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #7DE4B6;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #7DE4B6;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">success-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #4ED79E;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #4ED79E;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">success-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #00BC79;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #00BC79;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">success-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #00A06D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #00A06D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Danger / 危险色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">danger-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFECE8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFECE8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">danger-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FDCDC5;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FDCDC5;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">danger-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FBACA3;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FBACA3;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">danger-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F98981;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F98981;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">danger-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #F53F3F;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #F53F3F;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">danger-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #CB272D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #CB272D;</a-link></div> | H5、小程序、app-vue、app-nvue

### Warning / 警告色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">warning-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFF7E8;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFF7E8;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">warning-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFE4BA;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFE4BA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">warning-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFCF8B;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFCF8B;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">warning-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FFB65D;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FFB65D;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">warning-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #FF7D00;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #FF7D00;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">warning-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #D25F00;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #D25F00;</a-link></div> | H5、小程序、app-vue、app-nvue

### Link / 链接色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">link-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E8F7FF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E8F7FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">link-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #C3E7FE;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #C3E7FE;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">link-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #9FD4FD;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #9FD4FD;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">link-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #7BC0FC;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #7BC0FC;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">link-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #3491FA;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #3491FA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">link-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #206CCF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #206CCF;</a-link></div> | H5、小程序、app-vue、app-nvue

### Info / 信息色
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <div class="flex justify-center items-center"><a-link status="success">info-0</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #E8F7FF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #E8F7FF;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">info-1</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #C3E7FE;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #C3E7FE;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">info-2</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #9FD4FD;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #9FD4FD;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">info-3</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #7BC0FC;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #7BC0FC;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">info-5</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #3491FA;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #3491FA;</a-link></div> | H5、小程序、app-vue、app-nvue
| <div class="flex justify-center items-center"><a-link status="success">info-6</a-link><div class="w-5 h-5 mx-2 rounded font-bold" style="color: #206CCF;">Aa</div></div> | <div class="flex justify-center"><a-link>color: #206CCF;</a-link></div> | H5、小程序、app-vue、app-nvue