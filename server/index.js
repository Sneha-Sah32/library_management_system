const express = require("express");
const app = express();
const PORT = 5000;
const mongodb = require("./db"); //index.js ma nalekhinjel samma db work gardaina

mongodb(); //mathi kai lai as a function call gareko
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello,Express.js!");
})

app.use("/api",require("./Routes/DisplayBook"));

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})