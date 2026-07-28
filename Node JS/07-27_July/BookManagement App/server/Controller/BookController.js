const Book = require("../Model/book");

const handleAddBookController = async (req, res) => {
    try {
        await Book.create(req.body);
        res.send("Book Added Successfully");
    } catch (err) {
        res.send(err.message);
    }
};

module.exports = { handleAddBookController };