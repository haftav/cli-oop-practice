const inquirer = require('inquirer');

module.exports = function chooseAction() {
    return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'action',
                    message: 'What would you like to do?\n',
                    choices: ['Move', 'Take'],
                    filter: function(val) {
                        return val.toLowerCase();
                    }
                }
            ]).then(answers => {
                return answers.action;
            })
}