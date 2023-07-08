const route = require("express").Router()
const my_diary = require("../models/mydiary_model");

route.post("/send/details",(req,res)=>{
    const title=req.body.Title;
    const discription = req.body.Discription;
    const name = req.body.Name;
    const result= new my_diary(
        {
            title:title,
            discription:discription,
            name:name
        }
    )
    result.save();
    console.log(title,discription,name);
    res.redirect("/blog")
}).get("/delete/data/:_id",(req,res)=>{
    const {_id}= req.params;
    my_diary.deleteOne({_id}).then(()=>{console.log("deleted the blog!!")}).catch((err)=>{
        console.log(err);
    })
    res.redirect('/blog');

})

route.post("/send/updateddetails/:_id",async(req,res)=>{
    const {_id}= req.params
    await my_diary.findOneAndUpdate(_id,{
        title: req.body.Title,
        discription:req.body.Discription,
        name:req.body.Name
    })
    res.redirect("/blog");
})

module.exports=route;