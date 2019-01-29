# Timeout Confirm Prompt

[Inquirer](https://github.com/SBoudrias/Inquirer.js) 确认提示，超时自动确认

## 安装

``` bash
npm install --save @zonday/inquirer-timeout-confirm-prompt
```

## 使用

``` javascript
const inquirer = require('inquirer');
const TimeoutConfirm = require('@zonda/inquirer-time-confirm-prompt');

inquirer.registerPrompt('timeout-confirm', TimeoutConfirm);
inquirer
  .prompt({
    type: 'timeout-confirm',
    name: 'test',
    message: '是否确定要删除',
    timeout: 5,
    timeoutTips: (t) => `（${t}秒后自动确认）`
  }).then(answers => {
     // ...
  });
```