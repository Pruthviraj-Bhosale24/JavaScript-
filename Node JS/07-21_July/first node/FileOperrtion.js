const { log } = require("console")
const fs = require("fs")

function fileOperations(){
    console.log("File Operation started....");
    fs.writeFile("file1.txt" , "data wtrite from file operation file" , ()=>{
        console.log("data written to file ");
    })
    console.log("File operations ended...");   
}
module.exports=fileOperations;