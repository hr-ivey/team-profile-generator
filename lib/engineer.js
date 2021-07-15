// Gathering all necessary user input for engineer info.
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'eng-name',
            message: "Engineer Name:",
        },
        {
            type: 'input',
            name: 'eng-ID',
            message: "Engineer ID:",
        },
        {
            type: 'input',
            name: 'eng-email',
            message: "Engineer Email:",
        },
        {
            type: 'input',
            name: 'eng-git',
            message: "Engineer Github Username:",
        },
    });