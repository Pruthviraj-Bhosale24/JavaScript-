const mongoose = require("mongoose")

const schema=new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    bookAuther:{
        type:String,
        required:true
    },
    bookPrice:{
        type:Number,
        required:true
    },
    publishDate:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model("book",schema)
