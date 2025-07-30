import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css';

const AdminReviewManager = () => {
  const [reviews, setReviews] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({ name: '', message: '', rating: 0 });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const res = await axios.get('http://localhost:5000/api/admin/reviews');
    setReviews(res.data.reviews);
  };

  const startEditing = (review) => {
    setEditing(review._id);
    setEditData({ name: review.name, message: review.message, rating: review.rating });
  };

  const saveEdit = async () => {
    await axios.put(`http://localhost:5000/api/admin/reviews/${editing}`, editData);
    setEditing(null);
    fetchReviews();
  };

  return (
    <div className="review-container">
      <h2 className="review-title">🛠 Review Editor</h2>
      {reviews.map((review) => (
        <div key={review._id} className="review-card">
          {editing === review._id ? (
            <>
              <input
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                placeholder="Name"
              />
              <input
                value={editData.rating}
                onChange={(e) => setEditData({ ...editData, rating: Number(e.target.value) })}
                type="number"
                min="1"
                max="5"
                placeholder="Rating"
              />
              <textarea
                value={editData.message}
                onChange={(e) => setEditData({ ...editData, message: e.target.value })}
                rows={4}
              />
              <div className="review-buttons">
                <button className="review-button save" onClick={saveEdit}>Save</button>
                <button className="review-button cancel" onClick={() => setEditing(null)}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <p><strong>{review.name}</strong> ({review.rating}★)</p>
              <p>{review.message}</p>
              <div className="review-buttons">
                <button className="review-button edit" onClick={() => startEditing(review)}>Edit</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminReviewManager;
