// Requests if user would like to add another memberExpression.
inquirer
    .prompt ([
        {
            type: 'list',
            name: 'add-member',
            message: 'Add additional team member?',
            choices: [
                'Add Engineer', new inquirer.Separator(),
                'Add Intern', new inquirer.Separator(),
            ],
        },
    });