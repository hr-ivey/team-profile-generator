// Gathering all necessary user input for manager info.
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'manager-name',
            message: "Team Manager Name:",
        },
        {
            type: 'input',
            name: 'manager-ID',
            message: "Team Manager ID:",
        },
        {
            type: 'input',
            name: 'manager-email',
            message: "Team Manager Email:",
        },
        {
            type: 'input',
            name: 'manager-number',
            message: "Team Manager Office Number:",
        },
    )]