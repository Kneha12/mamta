import React, { useState } from 'react';
import './QuoteForm.css';
import axios from 'axios';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupLocation: '',
    dropLocation: '',
    shiftingType: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 Submitted Form Data:", JSON.stringify(formData, null, 2));

    try {
      await axios.post("http://localhost:5000/api/admin/quotes", formData);
      alert("✅ Thank you for sharing your details.\nOur Mamta Packers & Movers team will get in touch with you shortly.");
      e.target.reset();
      setFormData({
        name: '',
        phone: '',
        pickupLocation: '',
        dropLocation: '',
        shiftingType: '',
        date: '',
      });
    } catch (err) {
      console.error("❌ Error submitting quote:", err);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="quote-form-section" id="quote-form">
      <h2>Get a Quick Quote</h2>
      <form className="quote-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pickupLocation"
          placeholder="Pickup Location"
          required
          value={formData.pickupLocation}
          onChange={handleChange}
        />
        <input
          type="text"
          name="dropLocation"
          placeholder="Drop Location"
          required
          value={formData.dropLocation}
          onChange={handleChange}
        />
        <select
          name="shiftingType"
          required
          value={formData.shiftingType}
          onChange={handleChange}
        >
          <option value="">Select Shifting Type</option>
          <option value="local">Local Shifting</option>
          <option value="office">Office Relocation</option>
          <option value="home">Home Shifting</option>
          <option value="vehicle">Car/Bike Transport</option>
          <option value="warehouse">Warehousing & Storage</option>
          <option value="luggage">Luggage Transport</option>
          <option value="international">International Moving</option>
          <option value="other">Other</option>
        </select>
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
        />
        <button type="submit">Get Estimate</button>
      </form>
    </section>
  );
};

export default QuoteForm;
