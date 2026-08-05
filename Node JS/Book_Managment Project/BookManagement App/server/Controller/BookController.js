const book = require("../Model/book");
const Book = require("../Model/book");


//add Books 
const handleAddBookController = async (req, res) => {
    try {
        await Book.create(req.body);
        res.send("Book Added Successfully");
    } catch (err) {
        res.send(err.message);
    }
};


//display ALL book
const handlegetAllBookController= async(req,res)=>{
    try{
        const booklist = await book.find({})
        return res.status(200).json({message:"Book Details fetched", booklist})
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}


//delete books
const  handleDeleteBookController = async(req,res)=>{
    try{
        const data = req.body
        const deleted = await book.deleteOne({ _id: req.body._id });
        console.log("Book deleted");
        
        return res.status(200).json({message:"Book Deleted....."})
    }catch(err){
          return res.status(500).json({message:err.message})
    }
}

//update Books
const handleUpdateBookController = async (req, res) => {
  try {
    const { _id, ...updatedData } = req.body;

    const updatedBook = await book.updateOne(
      { _id },
      { $set: updatedData }
    );

    return res.status(200).json({
      message: "Book Updated Successfully",
      updatedBook,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { handleAddBookController, handlegetAllBookController , handleDeleteBookController , handleUpdateBookController};
