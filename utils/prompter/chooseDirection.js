const inquirer = require('inquirer');

module.exports = function chooseDirection() {
    return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'direction',
                    message: 'In which direction would you like to go?\n',
                    choices: ['North', 'South', 'East', 'West'],
                    filter: function (val) {
                        return val.toLowerCase();
                    }
                }
            ])
            .then(answers => {
                return answers.direction;
            })
}