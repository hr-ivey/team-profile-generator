// Including required packages.
const { file } = require('@babel/types');
const fs = require('fs');
const inquirer = require ('inquirer');
const jest = require('jest');

// // Creating function to generate HTML file.
const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    
${answers.project_title} < - this is how to call in information 

</body>
</html>`;

// Gathering all necessary user input. 


    .then((answers) => {
            let rmContent = generateHTML(answers);
        
            fs.writeFile('SAMPLE.HTML', rmContent, (err) =>
            err ? console.log(err) : console.log("Successfully generated HTML file")
            );
        });