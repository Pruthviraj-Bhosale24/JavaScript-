const express = require("express");
const { handleAddBookController } = require("../Controller/BookController");

const router = express.Router();

router.get("/msg", (req, res) => {
    res.send("Respond from book route");
});

router.post("/", handleAddBookController);

module.exports = router;