const mongoose = require("mongoose");
const { verifyOtp } = require("../controllers/auth.controller");
const {Schema} = mongoose;

const UserSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },  
      role: {
    type: String,
    enum: ["admin", "member"],
    default: "member"
  },

  //   resetPasswordOTP: {
  //   type: String,
  // },
  // verifyOtp:{
  //   type:String,
  //   default:''
  // },
  // verifyOtpExpireAt:{
  //   type:Number,
  //   default:0
  // },
  //   resetOtp:{
  //     type:String,
  //     default:''
  //   },
  //   resetOtpExpireAt:{
  //     type:Number,
  //     default:0
  //   }
  
  // resetPasswordExpiry: {
  //   type: Date,
  // },
  // otpAttempts: {
  //   type: Number,
  //   default: 0,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },

    resetOtp: { type: String },           // store OTP
  otpExpiry: { type: Date },            // store OTP expiration time
},
 {
   timestamps: true 

});


module.exports = mongoose.model('user',UserSchema);