const express = require("express");
const databaseConnection = require("./database");

const app = express();

const router = require("./router/bookroute");

databaseConnection();

app.use(express.json());

app.use("/book", router);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});