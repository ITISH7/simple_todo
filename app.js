//importing required modules 
const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

//database connection

const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/my_diary").then(()=>{
    console.log(" mongodb connection established!! ");
}).catch((err)=>{
    console.log(err);
});

//setting path for static , view and partials 
const static_path = path.join(__dirname,'/public');
const views_path = path.join(__dirname,"/public/views");
const partials_path = path.join(__dirname,"/public/partials");

//middle ware
app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs');
app.set('views',views_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

//routing
app.use(require('./routes/index'));
app.use(require('./routes/diarydata'));
//server configuration

app.listen(8000,()=>{
    console.log("server is running!!");
});