const Review = require("../models/review");

// ✅ GET: Get all reviews with pagination, search, and optional date filter
exports.getAllReviews = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "", date } = req.query;
    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ];
    }

    if (date) {
      const targetDate = new Date(date);
      targetDate.setHours(0, 0, 0, 0);
      const nextDate = new Date(targetDate);
      nextDate.setDate(nextDate.getDate() + 1);

      query.date = { $gte: targetDate, $lt: nextDate };
    }

    const total = await Review.countDocuments(query);
    const reviews = await Review.find(query)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json({ reviews, total });
  } catch (err) {
    console.error("❌ Error fetching reviews:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ POST: Create a new review (from user/frontend)
exports.createReview = async (req, res) => {
  try {
    const { name, email, message, rating, date } = req.body;

    if (!name || !email || !message || !rating) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = await Review.create({
      name,
      email,
      message,
      rating,
      date: date || new Date(),
    });

    res.status(201).json({ message: "Review created successfully", data: newReview });
  } catch (err) {
    console.error("❌ Error creating review:", err);
    res.status(400).json({ error: "Failed to create review" });
  }
};

// ✅ PUT: Admin updates a review
exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedReview = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json({ message: "Review updated successfully", data: updatedReview });
  } catch (err) {
    console.error("❌ Error updating review:", err);
    res.status(400).json({ error: "Failed to update review" });
  }
};

// ✅ DELETE: Admin deletes a review
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting review:", err);
    res.status(400).json({ error: "Failed to delete review" });
  }
};
