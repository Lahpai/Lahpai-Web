const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "info.html"));
})

app.post ("/result", (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name}, Age is ${age}.`);
})

app.listen(3000);
