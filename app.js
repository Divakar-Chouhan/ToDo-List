//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const Date=require(__dirname+"/date.js");

const app=express();

const items=["Buy Food","Cook Food","Eat Food"];
const workItems=[];


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){

    const day=Date.getDate();
    res.render("list",{ListTitle:day,newListItems:items});

});

app.post("/",function(req,res){

    const item=req.body.newItem;    
    if(req.body.list==="work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
})
app.get("/about",function(req,res){
    res.render("about");
})
app.get("/work",function(req,res){
    res.render("list",{ListTitle:"work",newListItems:workItems});
})
app.listen(3000,function(){
    console.log("server is running on port 3000");
    
})