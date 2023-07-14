#### <span class="text-lg text-gray-500 font-normal">背景</span>

<div class="w-screen"></div>

# 背景渐变
<space />
<a-typography-text>
    用于控制元素背景渐变的功能类。
</a-typography-text>

<CssPrefix />

## 语法
### bg-gradient-to-\{渐变方向\}-\{(内置颜色)主题色 | (内置颜色1)主题色1-(内置颜色2)主题色2\}
::: tip
+ 由于 <a-link href="https://uniapp.dcloud.net.cn/tutorial/nvue-css.html">uni-app nvue样式限制</a-link>，背景渐变只支持样式库 <a-link href="../palette">内置颜色</a-link> 和 <a-link href="../token">主题色</a-link> 的双色渐变或单色渐变
+ 双色渐变使用示例如下
```html
<view class="lwu-bg-gradient-to-r-primary-info"></view>
```
+ 单色渐变使用示例如下
```html
<view class="lwu-bg-gradient-to-r-primary"></view>
```
:::

::: warning 注意事项
+ 颜色和主题色不支持传色阶，如 `lwu-bg-gradient-to-r-primary-0-info-1` 
:::

### 渐变方向 t | r | b | l | tl | br | tr | bl
| 渐变方向 | 描述 | Properties | 平台兼容性说明
| --- | --- |  --- | ---
| <a-link status="success">t</a-link> | 从下到上渐变 | <a-link>background-image: linear-gradient(to top, (内置颜色)主题色 \| (内置颜色1)主题色1-(内置颜色2)主题色2);</a-link> | H5、小程序、app-vue、app-nvue
| <a-link status="success">r</a-link> | 从左到右渐变 | <a-link>background-image: linear-gradient(to right, (内置颜色)主题色 \| (内置颜色1)主题色1-(内置颜色2)主题色2);</a-link> | H5、小程序、app-vue、app-nvue
| <a-link status="success">b</a-link> | 从上到下渐变 | <a-link>background-image: linear-gradient(to bottom, (内置颜色)主题色 \| (内置颜色1)主题色1-(内置颜色2)主题色2);</a-link> | H5、小程序、app-vue、app-nvue
| <a-link status="success">l</a-link> | 从右到左渐变 | <a-link>background-image: linear-gradient(to left, (内置颜色)主题色 \| (内置颜色1)主题色1-(内置颜色2)主题色2);</a-link> | H5、小程序、app-vue、app-nvue
| <a-link status="success">tl</a-link> | 从右下角到左上角渐变 | <a-link>background-image: linear-gradient(to top left, (内置颜色)主题色 \| (内置颜色1)主题色1-(内置颜色2)主题色2);</a-link> | H5、小程序、app-vue、app-nvue
| <a-link status="success">br</a-link> | 从左上角到右下角渐变 | <a-link>background-image: linear-gradient(to top bottom right, (内置颜色)主题色 \| (内置颜色1)主题色1-(内置颜色2)主题色2);</a-link> | H5、小程序、app-vue、app-nvue
| <a-link status="success">tr</a-link> | 从左下角到右上角渐变 | <a-link>background-image: linear-gradient(to top right, (内置颜色)主题色 \| (内置颜色1)主题色1-(内置颜色2)主题色2);</a-link> | H5、小程序、app-vue
| <a-link status="success">bl</a-link> | 从右上角到左下角渐变 | <a-link>background-image: linear-gradient(to top bottom left, (内置颜色)主题色 \| (内置颜色1)主题色1-(内置颜色2)主题色2);</a-link> | H5、小程序、app-vue