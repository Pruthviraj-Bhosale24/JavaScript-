const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb://bpruthviraj248_db_user:36vqH3tofX0Nf28G@ac-1mtxvpm-shard-00-00.nspitlw.mongodb.net:27017,ac-1mtxvpm-shard-00-01.nspitlw.mongodb.net:27017,ac-1mtxvpm-shard-00-02.nspitlw.mongodb.net:27017/?ssl=true&replicaSet=atlas-lbkqen-shard-0&authSource=admin&appName=bookmanagment")
        .then(() => {
            console.log("DB connected successfully...");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB;

