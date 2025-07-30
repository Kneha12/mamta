import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import banner1 from '../assets/banner4.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
 // Add your real image names

const banners = [banner1, banner2, banner3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${banners[current]})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Your Trusted Moving Partner</h1>
          <p>Reliable, Safe, and Affordable Relocation Services</p>
          <a href="/contact" className="cta-button">Get Free Quote</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
