// const express = require("express");
// const router = express.Router();
// const { getAllBooks } = require("../controllers/book.controller");

// router.get("/books", getAllBooks);

// module.exports = router;


const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");
const userAuth = require("../middleware/userAuth");

router.post("/add", userAuth, bookController.addBook);
router.get("/", bookController.getBooks);
router.get("/search", bookController.searchBooks);

module.exports = router;
