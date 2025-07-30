// Blog.js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  content: String,
  image: String
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);
