const express = require ('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// router.post("/displaybook",(req,res)=>{
//     try{
//         console.log(books)
//         res.send([books])
//     }catch(error){
//         console.log(error.message);
//         res.send("Server error")
//     }
// })


router.post("/user/register",authController.registerUser);
router.post("/user/login",authController.loginUser);
router.get("/user/logout",authController.logoutUser);

router.post("/admin/register",authController.registerAdmin);
router.post("/admin/login",authController.loginAdmin);
router.get("/admin/logout",authController.logoutAdmin);
module.exports=router;