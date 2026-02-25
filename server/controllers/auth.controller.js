const userModel = require("../models/User");
const jwt= require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const transporter = require("../config/nodemailer")




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
    // const mailOptions={
    //     from: process.env.SENDER_EMAIL,
    //     to: email,
    //     subject: 'welcome to librarylynx',
    //     text:`Welcome to library lynx. Your account has been created with email id: ${email}`
    // }

    // await transporter.sendMail(mailOptions);

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

// ================= SEND OTP =================
//  async function sendOtp  (req, res) {
//   try {
//     const { userId } = req.body;

//     const user = await userModel.findOne({ userId });

//     if (user.isAccountVerified) {
//       return res.json({ 
//         success:false,
//         message: "Account verified" });
//     }

//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     user.verifyOtp = otp;
//     user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000; // 1D
//     await user.save();

//     const mailOption = {
//          from: process.env.SENDER_EMAIL,
//         to: user.email,
//         subject: 'Account Verification OTP',
//         text:`Your OTP IS ${otp}. Verify your account using this OTP.`
    
//     }

//     await transporter.sendMail(mailOption);

//     res.json({success:true,
//          message: "Verification OTP sent on email" });

//   } catch (error) {
//         console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ================= VERIFY OTP =================



// async function verifyOtp (req, res) {
  
//     const { userId, otp } = req.body;

//     if (!userId || !otp) {
//       return res.status(400).json({ message: "Missing Details" });
//     }

//     try {
//     const user = await userModel.findOne({ useId });

//     if(!user){
//         return res.json({success:false, message:"User not found"})
//     }

//     if(user.verifyOtp===''||user.verifyOtp!=otp){
//         return res.json({success:false, message:"invalid otp"})
//     }

//     if(user.verifyOtpExpireAt<Date.now()){
//         return res.json({success:false, message:'OTP expired'})
//     }
//     user.isAccountVerified=true;
//     user.verifyOtp='';
//     user.verifyOtpExpireAt=0;

//     await user.save();

//     return res.json({success:true, message: "Email verified successfully" });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // ================= RESET PASSWORD =================
// async function resetPassword  (req, res) {
//   try {
//     const { email, newPassword } = req.body;

//     const user = await userModel.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     user.password = hashedPassword;
//     user.resetOtp = undefined;
//     user.resetOtpExpires = undefined;

//     await user.save();

//     res.json({ message: "Password reset successful" });

//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };




// Generate 6-digit OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// ---------- SEND OTP ----------
const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = generateOtp();
    console.log("Generated OTP for testing:", otp); 
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // valid 10 minutes

    user.resetOtp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // Send OTP email
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Your OTP for Password Reset",
      text: `Your OTP for password reset is ${otp}. It is valid for 10 minutes.`,
    });

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// ---------- VERIFY OTP ----------
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.resetOtp !== otp)
      return res.status(400).json({ message: "Invalid OTP" });

    if (user.otpExpiry < new Date())
      return res.status(400).json({ message: "OTP expired" });

    res.json({ message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ---------- RESET PASSWORD ----------
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.resetOtp !== otp)
      return res.status(400).json({ message: "Invalid OTP" });

    if (user.otpExpiry < new Date())
      return res.status(400).json({ message: "OTP expired" });

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    // Clear OTP
    user.resetOtp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    sendOtp,
    verifyOtp,
    resetPassword,
   
}