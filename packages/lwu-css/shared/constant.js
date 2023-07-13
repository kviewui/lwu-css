const package = require('../package.json');
const os = require('os');

const addZero = (n) => {
	return n < 10 ? `0${n}` : n;
}

const nowDate = new Date();
const nowDateTime = `${nowDate.getFullYear()}-${addZero(nowDate.getMonth()+1)}-${addZero(nowDate.getDate())} ${addZero(nowDate.getHours())}:${addZero(nowDate.getMinutes())}`;

// 文件注释头部内容
var head = `/**${os.EOL}`;
    head += `* lwuCSS 全局样式库，由工具自动生成，请不要手动修改！！！${os.EOL}`;
    head += `* ${nowDateTime}${os.EOL}`;
    head += `* @author ${package.author}${os.EOL}`;
    head += `* @version ${package.version}${os.EOL}`;
    head += `* @see {@link ${package.repository.url}}${os.EOL}`;
    head += `* @license MIT${os.EOL}`;
    head += `* Copyright (c) ${new Date().getFullYear()} ${package.homepage}${os.EOL}`;
    head += `*${os.EOL}`;
    head += `* Permission is hereby granted, free of charge, to any person obtaining a copy${os.EOL}`;
    head += `* of this software and associated documentation files (the "Software"), to deal${os.EOL}`;
    head += `* in the Software without restriction, including without limitation the rights${os.EOL}`;
    head += `* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell${os.EOL}`;
    head += `* copies of the Software, and to permit persons to whom the Software is${os.EOL}`;
    head += `* furnished to do so, subject to the following conditions:${os.EOL}`;
    head += `*${os.EOL}`;
    head += `* The above copyright notice and this permission notice shall be included in all${os.EOL}`;
    head += `* copies or substantial portions of the Software.${os.EOL}`;
    head += `*${os.EOL}`;
    head += `* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR${os.EOL}`;
    head += `* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,${os.EOL}`;
    head += `* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE${os.EOL}`;
    head += `* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER${os.EOL}`;
    head += `* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,${os.EOL}`;
    head += `* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE${os.EOL}`;
    head += `* SOFTWARE.${os.EOL}`;
    head += `*${os.EOL}`;
    head += `**/${os.EOL}`;

module.exports = {
    FILE_HEAD: head
}