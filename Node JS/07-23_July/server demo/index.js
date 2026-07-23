// const http = require('http');
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html");
//     res.end("<h1>Hello from Node js</h1>");
// });

// server.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });




const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello form express js")
})

app.get("/home",(req,res)=>{
    res.send("Home Pagee")
})

app.listen(2000,()=>{
    console.log("server is listening on port 2000");
    
})