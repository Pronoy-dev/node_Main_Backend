const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const categorySchema = new Schema(
  {
    name: {
      name: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("category", categorySchema);
