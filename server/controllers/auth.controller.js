const userModel = require("../models/User");
const jwt= require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerUser(req,res){
    const {fullname,email,password}=req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if (isUserAlreadyExists){
        return res.status(400).json({
            message:"User Already Exists."
        })
    }

    const token = jwt.sign({
        id : user._id,
    },"33ebf90bdf180d310980e8a8a2b78f67")
    res.cookie("token",token)

    res.status(201).json({
        message:"User registerd",
        user:{
            _id:user._id,
            email:user.email,
            fullname:user.fullname
        }
    })

    const hashedpassword = await bcrypt.hash(password,10)
}

module.exports = {
    registerUser
}