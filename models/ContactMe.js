const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add your name"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please add your email"],
  },
  number: {
    type: String,
    required: [true, "Please add your phone number"],
  },
  message: {
    type: String,
    trim: true,
    required: [true, "Please add your message"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('contact', TransactionSchema);