const connectdb=require("../config/mongodb")
const express=require("express");
const app=express();
connectdb().then(()=>{
        app.listen(300,()=>{
            console.log("DATABASE SUCCESSFULLY CONNECTED");
        })
})
.catch(()=>{
    console.log("database not connected");
    
})



