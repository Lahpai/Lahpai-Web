const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
app.use(session ({secret: 'Big Secret'}));

app.use(express.json());
app.use(express.urlencoded());

app.use("/css", express.static(path.join(__dirname, 'css')));

app.get('/', (req,res) => {
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Express | Form</title>
            <link rel="stylesheet" href="/css/${cssFile}">
        </head>
        <body>
            <form action="/result" method="post">
                Name : <input type="text" id="name" name="name" /> <br><br>
                Age&nbsp; : &nbsp;&nbsp;<input type="age" id="age" name="age" /><br><br>
                <input type="submit" value=" Submit">
            </form>
        </body>
        </html>`
    )
})

app.get("/output",(req, res) =>{
    let name = req.session.name;
    let age=req.session.age; 
    res.send(`Welcome ${name}, Age is ${age}.`);

})

app.post('/result', (req, res) => {
    const {name, age} = req.body;
    req.session.name = name;
    req.session.age = age;
    res.redirect(303, `/output`);
})

app.listen(3000);
