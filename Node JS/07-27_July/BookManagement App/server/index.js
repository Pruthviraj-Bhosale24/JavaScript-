const express = require("express");
const app = express();
const database= require("./databse")


app.get("/book",(req,res)=>{
    res.send("Building book management app ");
})

app.listen(2000,()=>{
    console.log(`Server is listening on port http://localhost:2000`);
})

database()