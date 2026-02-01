const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URI;

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