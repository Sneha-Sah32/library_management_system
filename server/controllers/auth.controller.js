const userModel = require("../models/User");
const adminModel = require("../models/Admin");
const jwt= require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("../config/nodemailer")

// Create transporter once
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });


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
    res.cookie("token",token,{
        httpOnly: true,
     sameSite: "lax",
     secure: false
    })

    // Sending welcome email
    const mailOptions={
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: 'welcome to librarylynx',
        text:`Welcome to library lynx. Your account has been created with email id: ${email}`
    }

    await transporter.sendMail(mailOptions);

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

    res.cookie("token",token,{
        httpOnly: true,
     sameSite: "lax",
     secure: false
    })

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

// async function profile(req,res){
//    try{
//      const token = req.cookies.token;

//     if(!token){
//          res.status(401).json({
//             message:"No token"
//         });
//     }

//     const decoded = jwt.verify(token,process.env.JWT_SECRET);

//     const user = await userModel
//     .findById(decoded.id)
//     .select("-password");

//     res.json(user);
// }
// catch(error){
//  res.status(401).json({
//     message:"Invalid token"
// });
// }
// }

// ================= SEND OTP =================
 async function sendOtp  (req, res) {
  try {
    const { userId } = req.body;

    const user = await userModel.findOne({ userId });

    if (user.isAccountVerified) {
      return res.json({ 
        success:false,
        message: "Account verified" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000; // 1D
    await user.save();

    const mailOption = {
         from: process.env.SENDER_EMAIL,
        to: user.email,
        subject: 'Account Verification OTP',
        text:`Your OTP IS ${otp}. Verify your account using this OTP.`
    
    }

    await transporter.sendMail(mailOption);

    res.json({success:true,
         message: "Verification OTP sent on email" });

  } catch (error) {
        console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= VERIFY OTP =================



async function verifyOtp (req, res) {
  
    const { userId, otp } = req.body;

    if (!userId || !otp) {
      return res.status(400).json({ message: "Missing Details" });
    }

    try {
    const user = await userModel.findOne({ useId });

    if(!user){
        return res.json({success:false, message:"User not found"})
    }

    if(user.verifyOtp===''||user.verifyOtp!=otp){
        return res.json({success:false, message:"invalid otp"})
    }

    if(user.verifyOtpExpireAt<Date.now()){
        return res.json({success:false, message:'OTP expired'})
    }
    user.isAccountVerified=true;
    user.verifyOtp='';
    user.verifyOtpExpireAt=0;

    await user.save();

    return res.json({success:true, message: "Email verified successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ================= RESET PASSWORD =================
async function resetPassword  (req, res) {
  try {
    const { email, newPassword } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetOtp = undefined;
    user.resetOtpExpires = undefined;

    await user.save();

    res.json({ message: "Password reset successful" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


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
    sendOtp,
    verifyOtp,
    resetPassword,
    registerAdmin,
    loginAdmin,
    logoutAdmin
}