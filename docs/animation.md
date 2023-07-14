---
outline: deep
---

#### <span class="text-lg text-gray-500 font-normal">过渡和动画</span>

<div class="w-screen"></div>

# 动画
<space />
<a-typography-text>
    使元素产生动画的CSS动画功能类。
</a-typography-text>

<CssPrefix />

## 语法
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">animate-none</a-link> | <a-link>animate: none</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-spin</a-link> | <a-link>animation: spin 1s linear infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-ping</a-link> | <a-link>animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-pulse</a-link> | <a-link>animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-bounce</a-link> | <a-link>animation: bounce 1s infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-flicker</a-link> | <a-link>animation: flicker 1s  infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-heartbeat</a-link> | <a-link>animation: heartbeat 1s infinite</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-shake</a-link> | <a-link>animation: shake 0.6s</a-link> | H5、小程序、app-vue

## 动画时间曲线
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">animate-tf-linear</a-link> | <a-link>animation-timing-function: linear</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-tf-ease</a-link> | <a-link>animation-timing-function: ease</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-tf-ease-in</a-link> | <a-link>animation-timing-function: ease-in</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-tf-ease-out</a-link> | <a-link>animation-timing-function: ease-out</a-link> | H5、小程序、app-vue
| <a-link status="success">animate-tf-ease-in-out</a-link> | <a-link>animation-timing-function: ease-in-out</a-link> | H5、小程序、app-vue

## 循环动画
| Class | Properties | 平台兼容性说明
| --- | --- | ---
| <a-link status="success">animate-ic-loop</a-link> | <a-link>animation-iteration-count: infinite</a-link> | H5、小程序、app-vue

### @keyframes spin
```css
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
```

### @keyframes ping
```css
@keyframes ping {

    75%,
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
```

### @keyframes pulse
```css
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: .5;
    }
}
```

### @keyframes bounce
```css
@keyframes bounce {

    0%,
    100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
```

### @keyframes flicker
```css
@keyframes flicker {
    from {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
```

### @keyframes heartbeat
```css
@keyframes heartbeat {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}
```

### @keyframes shake
```css
@keyframes shake {
    0%,
    90%,
    100% {
        transform: translateX(0);
    }
    10% {
        transform: translateX(-8px);
    }
    20% {
        transform: translateX(7px);
    }
    30% {
        transform: translateX(-6px);
    }
    40% {
        transform: translateX(5px);
    }
    50% {
        transform: translateX(-4px);
    }
    60% {
        transform: translateX(3px);
    }
    70% {
        transform: translateX(-2px);
    }
    80% {
        transform: translateX(1px);
    }
}
```