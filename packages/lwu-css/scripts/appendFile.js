const sourceDir = '../shared/style/css';
const styleDir = '../dist';

const fs = require('fs');
const os = require('os');
const shell = require('shelljs');
const chalk = require('chalk');

const str = fs.readFileSync(`${sourceDir}/demo.css`, 'utf-8');
const content = fs.readFileSync(`${styleDir}/index.css`, 'utf-8');

// 生成文件头部注释内容
var head = require('../shared/constant').FILE_HEAD;
var contents = [content, str];

function appendFile(filePath){
    for(var i=0;i<contents.length;i++){
        shell.chmod('-R', 755, filePath);
        fs.appendFileSync(filePath,contents[i]+os.EOL);
    }
}

var fileContents = [head];

function writeFile(filePath) {
    for(var i=0;i<fileContents.length;i++){
        shell.chmod('-R', 755, filePath);
        fs.writeFileSync(filePath,fileContents[i]+os.EOL);
    }
}

writeFile(`${styleDir}/index.css`);
appendFile(`${styleDir}/index.css`);

console.log(chalk.green('LwuCSS样式库文件构建完成...'));