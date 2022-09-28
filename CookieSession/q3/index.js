const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'view'));

// let products = [{name : "HP Pavilion Laptop -15z-eh200" ,price:"500" ,description : "compact design and lon battery life" , id : "4812"},
// {name : "HP Laptop 15t-dw300" ,price:"450" ,description : "long lasting battery life and fast charge technology" , id : "4818"},
// {name : "OMEN by HP Laptop" ,price:"800" ,description : "1080p IPS, VESA DisplayHDR 400" , id : "4812"},
// {name : "Hp Pavilion Gaming Laptop" ,price:"700" ,description : "fast 16in micro-edge display in 15in body" , id : "4902"}];

// let cartProducts = [{Name : "HP Laptop 15t-dw300" ,Price:"450" ,Quantity : 3},
// {Name : "HP Laptop 15t-dw300" ,Price:"450" ,Quantity: 2},
// {Name : "OMEN by HP Laptop" ,Price:"800" ,Quantity:1},
// ];

app.get('/' , (req, res)=>{
   
    res.render("product" , {products:products});

});


app.get('/shoppingcart' , (req , res ) => {

    res.render("shoppingcart" , {cartProducts : cartProducts});

});

app.listen(3000);