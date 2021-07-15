const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body style="background-color: papayawhip;">
        <div style="text-align: center; padding: 2em;">
            <h1>My Team</h1>
        </div>
    </header>
    <div class="container-fluid" style="background-color: white; padding: .5em;">
        <div class="row">
            <div class="col-md-3 shadow p-5 mb-5 bg-white rounded">
                <h2 style="background-color: peru; color:white; padding:.5em;"><b>${answers.manager-name}</b><br>Manager</h2>
                <p><b>ID:</b> ${answers.manager-ID}</p>
                <p><b>Email:</b> ${answers.manager-email}</p>
                <p><b>Office Number:</b> ${answers.manager-number}</p>
            </div>
            <div class="col-md-3 shadow p-5 mb-5 bg-white rounded">
                <h2 style="background-color: peru; color:white; padding:.5em;"><b>${answers.eng-name}</b><br>Engineer</h2>
                <p><b>ID:</b> ${answers.eng-ID}</p>
                <p><b>Email:</b> ${answers.eng-email}</p>
                <p><b>GitHub:</b> ${answers.eng-git}</p>
            </div>
            <div class="col-md-3 shadow p-5 mb-5 bg-white rounded">
                <h2 style="background-color: peru; color:white; padding:.5em;"><b>${answers.int-name}</b><br>Intern</h2>
                <p><b>ID:</b> ${answers.int-ID}</p>
                <p><b>Email:</b> ${answers.int-email}</p>
                <p><b>School:</b> ${answers.int-school}</p>
            </div>
        </div>
    </div>
</body>
</html>`;

.then((answers) => {
            let rmContent = generateHTML(answers);
        
            fs.writeFile('SAMPLE.HTML', rmContent, (err) =>
            err ? console.log(err) : console.log("Successfully generated HTML file")
            );
        });