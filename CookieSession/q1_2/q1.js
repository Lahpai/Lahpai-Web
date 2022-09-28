/**
 * Make a page with an “Add Cookie” form that has an input field for a key and an input field for 
a value. When you POST the form, the server should get the input and add a cookie with the 
given key and value to the cookies. 
 */

const express = require('express');
const app = express();
const path = require('path');
const cpaser = require('cookie-parser');
app.use(cpaser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req,res) => {
    res.render('form', {
        cookies: req.cookies
    })
})

app.post('/addCookie', (req, res) => {
    let key = req.body.key;
    let value = req.body.value;
    if (req.cookies.key && req.cookies.value) {
        res.cookie('key', key);
        res.cookie('value', value);
    } else {
        res.redirect('back');
    }
})

app.listen(3000);
