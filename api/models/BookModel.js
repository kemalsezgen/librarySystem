const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
    unique: true
  },

  author: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  department: {
    type: String,
    required: true,
  }
}, {timestamps: true})

module.exports = mongoose.model("BookStore", bookSchema);