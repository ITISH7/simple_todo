const route = require("express").Router()
const mydiary=require("../models/mydiary_model");
route.get("/",(req,res)=>{
    res.render('index');
})
route.get("/blog",async(req,res)=>{
    const data= await mydiary.find()
    res.render('view_blog',{
        diary_data:data
    });
})
route.get("/update/data/:id",async(req,res)=>{
    const _id = req.params.id;
    const data = await mydiary.findById({_id:_id});
    res.render('edit',{
        diary_data:data
    })
})
module.exports=route;