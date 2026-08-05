const express = require("express");
const { handleAddBookController, handlegetAllBookController, handleDeleteBookController, handleUpdateBookController } = require("../Controller/BookController");

const router = express.Router();

router.get("/msg", (req, res) => {
    res.send("Respond from book route");
});

router.post("/addBook", handleAddBookController);
router.get("/getBook", handlegetAllBookController)
router.delete("/deleteBook", handleDeleteBookController)
router.put("/updatedBook", handleUpdateBookController)



module.exports = router;
