inquirer
    .prompt ([
        {
            type: 'list',
            name: 'add-member',
            message: 'Add additional member?',
            choices: [
                'Add Engineer', new inquirer.Separator(),
                'Add Intern', new inquirer.Separator(),
            ],
        },
    )]