// Reviews.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { User, Phone, MessageSquare, Star, Send } from 'lucide-react';
import './Reviews.css';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/reviews");
      setReviews(res.data.reviews || []);
    } catch (err) {
      console.error("❌ Error fetching reviews:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) return;

    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:5000/api/admin/reviews", {
        ...formData,
        date: new Date()
      });
      setFormData({ name: '', email: '', message: '', rating: 0 });
      fetchReviews();
    } catch (err) {
      console.error("❌ Error submitting review:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="review-wrapper">
      <h2 className="review-title">Customer's Reviews</h2>
      <p className="review-subtitle">What our customers say about Mamta Packers & Movers</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {reviews.map((r, index) => (
          <SwiperSlide key={r._id || index}>
            <div className="review-card">
              <div className="review-header">
                <strong>{r.name}</strong>
                <span className="rating">{'⭐'.repeat(r.rating)}</span>
              </div>
              <p className="comment">"{r.message}"</p>
              <p className="date">{r.date ? new Date(r.date).toLocaleDateString() : ''}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="feedback-title">Share Your Feedback</h3>
      <p className="feedback-subtitle">
        We value your opinion! Please share your experience with our services and help us improve.
      </p>

      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-grid">
          <div>
            <label className="form-label">
              <User className="icon" /> Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="form-label">
              <Phone className="icon" /> Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="form-label">Rate Our Service *</label>
          <div className="star-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="star-button"
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
              >
                <Star
                  className={`star-icon ${star <= (hoveredRating || formData.rating) ? 'active' : 'inactive'}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="form-label">
            <MessageSquare className="icon" /> Your Feedback *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="form-textarea"
            placeholder="Please share your feedback..."
          />
        </div>

        <div className="submit-wrapper">
          <button
            type="submit"
            disabled={isSubmitting || formData.rating === 0}
            className={`submit-btn ${isSubmitting || formData.rating === 0 ? 'disabled' : ''}`}
          >
            <Send className="icon" />
            <span>{isSubmitting ? 'Submitting...' : 'Submit Feedback'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
