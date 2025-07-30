import React from 'react';
import './CTABanner.css';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs'; // ✅ Add X icon import

const CTABanner = () => {
  return (
    <div className="cta-banner">
      <h2>📦 Connect With Mamta Packers & Movers</h2>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt /> <span>+91 91422 25833, 89876 03455</span>
        </div>
        <div className="contact-item">
          <FaEnvelope /> <span>mamtapackersandmovers5@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt /> <span>Opp. DC Lounge, near Kagal Nagar Auto Stand, Sonari – 831011</span>
        </div>
      </div>

      {/* Call Now Button */}
      <a href="tel:+919142225833" className="cta-call-button">
        <FaPhoneAlt /> Call Now
      </a>

      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.instagram.com/mamta_packersandmovers" className="instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://youtube.com/@mamtapackersandmovers5" className="youtube" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/share/1ADEZXpB5n/" className="facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://x.com/mamtapacke47743" className="x-twitter" target="_blank" rel="noopener noreferrer">
          <BsTwitterX />
        </a>
        <a href="https://wa.me/919142225833" className="whatsapp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default CTABanner;
