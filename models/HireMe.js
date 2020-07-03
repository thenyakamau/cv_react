const mongoose = require("mongoose");

const SaveJobSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add your company name"],
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
    job: {
      type: String,
      required: [true, "Please add job name"],
    },
    locality: {
      type: String,
      required: [true, "Please add job location"],
    },
    type: {
      type: String,
      required: [true, "Please add job type"],
    },
    salary: {
      type: Number,
      required: [true, "Please add job salary"],

    },
    description: {
      type: String,
      required: [true, "Please add job description"],

    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("job_requests", SaveJobSchema);