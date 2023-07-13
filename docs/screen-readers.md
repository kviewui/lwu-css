#### <span class="text-lg text-gray-500 font-normal">ACCESSIBILITY</span>

<div class="w-screen"></div>

# 屏幕阅读器
<a-typography-text>
    用于改善屏幕阅读器的可访问性的功能类。
</a-typography-text>

<CssPrefix />

## 语法
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">sr-only</a-link> | <a-link>position: absolute;</a-link><br/><a-link>width: 1px;</a-link><br/><a-link>height: 1px;</a-link><br/><a-link>padding: 0;</a-link><br/><a-link>margin: -1px;</a-link><br/><a-link>overflow: hidden;</a-link><br/><a-link>clip: rect(0, 0, 0, 0);</a-link><br/><a-link>white-space: nowrap;</a-link><br/><a-link>border-width: 0;</a-link> | H5
| <a-link status="success">not-sr-only</a-link> | <a-link>position: static;</a-link><br/><a-link>width: auto;</a-link><br/><a-link>height: auto;</a-link><br/><a-link>padding: 0;</a-link><br/><a-link>margin: 0;</a-link><br/><a-link>overflow: visible;</a-link><br/><a-link>clip: auto;</a-link><br/><a-link>white-space: nowrap;</a-link><br/> | H5