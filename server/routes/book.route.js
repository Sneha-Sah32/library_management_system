const express = require("express");
const router = express.Router();
const { getAllBooks } = require("../controllers/book.controller");

router.get("/books", getAllBooks);

module.exports = router;
