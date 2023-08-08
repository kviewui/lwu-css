import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import 'uno.css';
import './css/md.css';

// 引入时间轴样式
import "vitepress-markdown-timeline/dist/theme/index.css";

const theme: Theme = {
    ...DefaultTheme
};

export default theme;
