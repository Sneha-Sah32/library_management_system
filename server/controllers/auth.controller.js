const userModel = require("../models/User");
const jwt= require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerUser(req,res){
    const {f_name,l_name,email,password}=req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if (isUserAlreadyExists){
        return res.status(400).json({
            message:"User Already Exists."
        })
    }

    const hashedpassword = await bcrypt.hash(password,10)
}

module.exports = {
    registerUser
}