const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
    title:String,
    discription:String,
    name:String
})
module.exports= new mongoose.model('diarypage',diarySchema);
