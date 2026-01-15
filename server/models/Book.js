const mongoose = require('mongoose');
const {Schema} = mongoose;

const BookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    available:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Book',BookSchema);

