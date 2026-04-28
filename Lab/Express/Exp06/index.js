//Middleware
//it is a function before sending a responce.
//It can check data , log info, authenticate user
//syntax
const express = require("express");
const app = express();
const port = 3000;
app.use((req,res,next)=>{
console.log("Data is ",new Date());
next();//pass control to the next function without next() the request will be hanging and never reach the route handler
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


