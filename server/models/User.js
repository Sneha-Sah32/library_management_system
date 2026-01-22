const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    f_name:{
        type:string,
        required:true
    },
    l_name:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    }
})

module.exports = mongoose.model('user',UserSchema);