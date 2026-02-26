// const express = require("express");
// const router = express.Router();
// const { getAllBooks } = require("../controllers/book.controller");

// router.get("/books", getAllBooks);

// module.exports = router;


const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");
const userAuth = require("../middleware/userAuth");
const authMiddleware =require("../middleware/authMiddleware")
const isAdmin = require("../middleware/roleMiddleware");
// import { authMiddleware } from "../middleware/authMiddleware.js";
// import { isAdmin } from "../middleware/roleMiddleware.js";

// router.post("/add", userAuth, bookController.addBook);

router.post(
  "/add-book",
  authMiddleware,
  isAdmin,
  (req, res) => {
    res.json("Book Added Successfully");
  }
);

router.get("/", bookController.getBooks);
router.get("/search", bookController.searchBooks);

module.exports = router;
