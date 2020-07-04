const mongoose = require("mongoose");

const NewContractSchema = new mongoose.Schema({
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
  description: {
    j_name: {
      type: String,
      trim: true,
      required: [true, "Please add your type"],
    },
    professionality: {
      type: String,
      trim: true,
      required: [true, "Please add your level"],
    },
    server: {
      type: Boolean,
      required: [true, "Please add your server option"],
    },
    salary: {
      type: Number,
      required: [true, "Please add your amount"],
    },
    timeline: {
      type: String,
      trim: true,
      required: [true, "Please add your timeline"],
    },
    availability: {
      type: Boolean,
      required: [true, "Please add your availability"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Please add your description"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('contracts', NewContractSchema);