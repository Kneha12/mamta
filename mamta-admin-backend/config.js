// config.js
const mongoose = require('mongoose');
 require('dotenv').config();
const URI = process.env.MONGO_URI;
console.log(URI);

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Optional: fail faster if can't connect
    });

    console.log('✅ MongoDB connected successfully');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Stop the app if DB fails
  }
};

module.exports = connectDB;
