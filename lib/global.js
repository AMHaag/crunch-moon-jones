let manager;
const engineers = [];
const interns = [];
const page =[];
const head = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="../dist/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Radio+Canada:wght@300&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Registry</title>
</head>
<body>
    <header class="top-bar"><h1>The Team</h1>
    </header>
    <main class="card-container">`;

const tail = `</main></body></html>`;

module.exports = {
    manager,
    engineers,
    interns,
    head,
    tail,
    page
}