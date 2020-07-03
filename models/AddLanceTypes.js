const mongoose = require("mongoose");

const AddLanceType = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please add job type"],
  },
  decodedProfession: [
    {
      level: {
        type: String,
        required: [true, "Please input level"],
      },
      server: {
        type: Boolean,
        required: [true, "Please input server"],
      },
      cost: {
        type: Number,
        required: [true, "Please add job type"],
      },
    },
  ],
  available: {
    type: Boolean,
    required: [true, "Please add availability"],
  },
  file_path: {
    type: String,
    required: [true, "Please add upload image"],
  },
});

module.exports = mongoose.model("job_type", AddLanceType);
