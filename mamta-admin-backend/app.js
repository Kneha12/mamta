// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Base Route
app.get("/", (req, res) => {
  res.send("🚚 Mamta Admin Backend is running");
});

// Admin Routes
app.use("/api/admin/bill", require("./routes/bill.routes"));
app.use("/api/admin/quotes", require("./routes/quote.routes"));
app.use("/api/admin/reviews", require("./routes/review.routes"));
app.use("/api/admin/gallery", require("./routes/gallery.routes"));
app.use("/api/admin/blogs", require("./routes/blog.routes"));

module.exports = app;
