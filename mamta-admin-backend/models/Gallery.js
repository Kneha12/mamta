// Gallery.js
const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  fileUrl: String,
  type: { type: String, enum: ["image", "video"], default: "image" },
  tag: String
}, { timestamps: true });

module.exports = mongoose.model("Gallery", gallerySchema);
