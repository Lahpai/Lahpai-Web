const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    res.send (`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="/css/${cssFile}">
</head>
<body>
    <form action="/result" method="post">
        Name : <input type="text" id="name" name="name" /> <br><br>
        Age&nbsp; : &nbsp;&nbsp;<input type="age" id="age" name="age" /><br><br>
        <input type="submit" value=" Submit">
    </form>
</body>
</html>
    `)
})

app.post ("/result", (req, res) => {
    const {name, age} = req.body;
    res.redirect(`/output?name=${name}&age=${age}`);
})

app.get ("/output", (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    res.send(`Welcome ${name}, Age is ${age}.`);
})

app.listen(3000);