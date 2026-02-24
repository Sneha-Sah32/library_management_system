const express = require("express");
const router = express.Router();
// const { getAllBooks } = require("../controllers/book.controller");

router.post("/books", getAllBooks);

module.exports = router;
