require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 5000;
const mongodb = require("./db"); //index.js ma nalekhinjel samma db work gardaina
const cookieparser = require('cookie-parser');
const authRoutes = require("./routes/auth.route");
const bookRoutes = require("./routes/book.route");


mongodb(); //mathi kai lai as a function call gareko

//place cors first
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json());

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With,Content-Type,Accept"
//     );
//     next();
// })
//DONT MIX CORS WITH MANUAL HEADERS

app.use(cookieparser());

app.get("/",(req,res)=>{
    res.send("Hello,Express.js!");
})

//routes
app.use("/api/auth",authRoutes);
app.use("/api", bookRoutes);

// console.log("Mongo URI:", process.env.MONGO_URI);


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})