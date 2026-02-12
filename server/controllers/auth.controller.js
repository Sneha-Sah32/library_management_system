const userModel = require("../models/User");
const adminModel = require("../models/Admin");
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

     const hashedpassword = await bcrypt.hash(password,10)

     const user = await userModel.create({
        fullname,
        email,
        password:hashedpassword
     });

    const token = jwt.sign({
        id : user._id,
    },process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(201).json({
        message:"User registerd",
        token,   //<- this token must be sent so that we can use it in frontend and switch login and out
        user:{
            _id:user._id,
            email:user.email,
            fullname:user.fullname
        }
    })

   
}

async function loginUser(req,res) {
    const {email,password}=req.body;

    const user = await userModel.findOne({
        email
    })

    if (!user){
        res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if (!isPasswordValid){
        res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET);

    res.cookie("token",token)

    res.status(201).json({
        message:"User logged in successfully",token,
        user:{
            _id:user._id,
            email:user.email,
            password:user.password
        }
    })

}

function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"User logged out Succesfully"
    })
    // res.redirect("/loginUser")
}

//admin


async function registerAdmin(req,res){
    const {fullname,email,password}=req.body;

    const isAdminAlreadyExists = await adminModel.findOne({
        email
    })

    if (isAdminAlreadyExists){
        return res.status(400).json({
            message:"Admin Already Exists."
        })
    }

    const token = jwt.sign({
        id : admin._id,
    },process.env.JWT_SECRET)
    res.cookie("token",token)

    res.status(201).json({
        message:"Admin registerd",
        user:{
            _id:admin._id,
            email:admin.email,
            fullname:admin.fullname
        }
    })

    const hashedpassword = await bcrypt.hash(password,10)
}

async function loginAdmin(req,res) {
    const {email,password}=req.body;

    const admin = adminModel.findOne({
        email
    })

    if (!user){
        res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,admin.password);

    if (!isPasswordValid){
        res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const token = jwt.sign({
        id:admin._id,
    },process.env.JWT_SECRET);

    res.cookie("token",token)

    res.status(201).json({
        message:"Admin logged in successfully",
        user:{
            _id:admin._id,
            email:admin.email,
            password:admin.password
        }
    })

}

function logoutAdmin(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"Admin logged out Succesfully"
    })
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerAdmin,
    loginAdmin,
    logoutAdmin
}