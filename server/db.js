const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://sahsneha2062_db_user:librarymgnt@librarymanagement.pgwfihl.mongodb.net/?appName=librarymanagement";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("MongoDB connected successfully");
    
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};
module.exports = connectDB;