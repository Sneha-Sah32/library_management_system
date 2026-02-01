require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 5000;
const mongodb = require("./db"); //index.js ma nalekhinjel samma db work gardaina

const cookieparser = require('cookie-parser');
const authRoutes = require("./routes/auth.route")


mongodb(); //mathi kai lai as a function call gareko
app.use(express.json());
app.use(cookieparser());
app.get("/",(req,res)=>{
    res.send("Hello,Express.js!");
})

app.use("/api",authRoutes);
// console.log("Mongo URI:", process.env.MONGO_URI);


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})