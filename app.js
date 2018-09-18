const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const config = require('./config/database');

const connection = mongoose.connect(config.database);
if (connection){
    console.log('database connected');
}else{
    console.log('database not connected');
}

const user = require('./routes/users');

app.use(express.static(path.join(__dirname,"public")));

app.use('/user',user);
app.get("/",function(req,res){
res.send("Hello worls");
});

app.listen(port,function(){
console.log("listen to port 3000");
});