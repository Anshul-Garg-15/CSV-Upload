const express = require('express');
const port = 5001;
const app = express();
const bodyParser  = require('body-parser');
const csv = require('csv-parser');
const db = require('./config/mongoose');

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./assets"));

app.set('views engine' , 'ejs');
app.set('views' , './views');


app.listen(port , function(err){
    if(err){
        console.log("Error in running server" , err);
        return;
    }
    console.log("Server is successfully running on port" , port);
});