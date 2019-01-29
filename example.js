const inquirer = require('inquirer');
const TimeoutConfirm = require('@zonda/inquirer-timeout-confirm-prompt');

inquirer.registerPrompt('timeout-confirm', TimeoutConfirm);
inquirer
  .prompt({
    type: 'timeout-confirm',
    name: 'test',
    message: '是否确定要删除',
    timeout: 5,
    timeoutTips: (t) => `（${t}秒后自动确认）`
  }).then(answers => {
    console.log(answers);
  });