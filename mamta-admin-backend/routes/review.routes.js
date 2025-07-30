const express = require("express");
const router = express.Router();
const {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/review.controller");

// Base path: /api/admin/reviews
router.get("/", getAllReviews);           // GET all reviews
router.post("/", createReview);           // POST a new review
router.put("/:id", updateReview);         // PUT update review
router.delete("/:id", deleteReview);      // DELETE review

module.exports = router;
