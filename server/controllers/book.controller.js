// const Book = require("../models/Book");
// exports.getAllBooks = async (req,res)=>{
//     try{
//         const books = await Book.find();
//         res.status(200).json(books);

//     }catch(error){
//         res.status(500).json({
//             message:"Failed to fetch books"
//         });
//     }
// };


const Book =  require("../models/Book");

// Add a book
const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book added", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
      res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search books
const searchBooks = async (req, res) => {
  try {
    const { title, author, language, category } = req.query;
    const query = {};
    if (title) query.title = { $regex: title, $options: "i" };
    if (author) query.author = { $regex: author, $options: "i" };
    if (language) query.language = language;
    if (category) query.category = category;

    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addBook, getBooks, searchBooks };