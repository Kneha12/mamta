const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  name: String,
  phone: String,
  pickupLocation: String,
  dropLocation: String,
  shiftingType: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Quote", quoteSchema);
