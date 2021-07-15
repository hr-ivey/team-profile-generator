// Gathering all necessary user input for intern info.
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'int-name',
            message: "Intern Name:",
        },
        {
            type: 'input',
            name: 'int-ID',
            message: "Intern ID:",
        },
        {
            type: 'input',
            name: 'int-email',
            message: "Intern Email:",
        },
        {
            type: 'input',
            name: 'int-school',
            message: "Intern School Name:",
        },
    });