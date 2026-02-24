const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },  
    resetPasswordOTP: {
    type: String,
  },
  resetPasswordExpiry: {
    type: Date,
  },
  otpAttempts: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

})

module.exports = mongoose.model('user',UserSchema);