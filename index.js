const express=require("express");
var app=express()

app.get("/",function(req,res){
    res.send("helo nepal");
});
app.listen(30000,function(){
    console.log("app is starting at %",30000);
})
