// models/review.js
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  rating: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
