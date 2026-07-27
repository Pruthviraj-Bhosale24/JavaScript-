const mongoose = require('mongoose');

const connectDB = () => {
    
    mongoose.connect('mongodb+srv://bpruthviraj248_db_user:36vqH3tofX0Nf28G@bookmanagment.nspitlw.mongodb.net/?appName=bookmanagment')
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.error("Error connecting to DB:", err);
    });
};

module.exports = connectDB; 
