// const userModel = require("../models/User");
// const adminModel = require("../models/Admin");
// const Book = require("../models/Book");
// const jwt= require("jsonwebtoken");
// const bcrypt = require("bcrypt");


//  async function adminDashboard(req, res){
//   try {
//     const totalUsers = await User.countDocuments();
//     const totalBooks = await Book.countDocuments();
//     const totalAdmins = await Admin.countDocuments();

//     const borrowedBooks = await Book.countDocuments({ status: "borrowed" });
//     const returnedBooks = await Book.countDocuments({ status: "returned" });

//     res.json({
//       totalUsers,
//       totalBooks,
//       totalAdmins,
//       borrowedBooks,
//       returnedBooks
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server Error" });
//   }
// };


// module.exports={
//     adminDashboard
// };