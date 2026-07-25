const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://bpruthviraj248_db_user:P9nPsKS2uNNDnanH@demo2.f3nr1k0.mongodb.net/studentDB?retryWrites=true&w=majority&appName=demo2"
)
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    console.log("Database Connection Error");
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("Hello from Express.js");
});

app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});