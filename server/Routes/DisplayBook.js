const express = require ('express');
const router = express.Router();

router.post("/displaybook",(req,res)=>{
    try{
        console.log(books)
        res.send([books])
    }catch(error){
        console.log(error.message);
        res.send("Server error")
    }
})

module.exports=router;