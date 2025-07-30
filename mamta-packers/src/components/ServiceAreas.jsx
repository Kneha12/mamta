import React from 'react';
import './ServiceAreas.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const cities = [
  'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad',
  'Kolkata', 'Chennai', 'Pune', 'Ahmedabad',
];

const ServiceAreas = () => {
  return (
    <section className="service-areas-section">
      <h2>
        Start Your Move Across <span className="highlight">India</span>
      </h2>
      <p className="subtitle">Choose your city and get connected with verified packers and movers</p>

      <div className="cities-grid">
        {cities.map((city, index) => (
          <a href="#quote-form" key={index} className="city-card">
            <div className="city-left">
              <span className="city-icon"><FaMapMarkerAlt /></span>
              <span className="city-name">{city}</span>
            </div>
            <span className="arrow">➔</span>
          </a>
        ))}
      </div>

     <a href="#quote-form" className="see-all-button">See All Cities ➔</a>

    </section>
  );
};

export default ServiceAreas;
 