const mongoose = require('mongoose');
const {Schema} = mongoose;

// const BookSchema = new Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     author:{
//         type:String,
//         required:true
//     },
//     category:{
//         type:String,
//         required:true
//     },
//     quantity:{
//         type:Number,
//         required:true
//     },
//     available:{
//         type:Number,
//         required:true
//     }
// })



// defining book collection structure
const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Book Title is Required'],
    trim: true,
  },
  image: {
    type: String, //Image File path stored here
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
    required: [true, 'Book Category is Required'],
  },
  available: {
    type: Boolean,
    default: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  language: {
    type: String,
    required: true,
    trim: true,
  },
  createdAdded: {
    type: Date,
    default: Date.now(),
  },
})




module.exports=mongoose.model('Book',BookSchema);

