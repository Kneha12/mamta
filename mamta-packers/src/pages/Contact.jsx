import React from 'react';
import './Contact.css';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Contact = () => {
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

      <a href="tel:+919142225833" className="cta-call-button">
        <FaPhoneAlt /> Call Now
      </a>

      <div className="social-icons">
        <a href="https://www.instagram.com/mamta_packersandmovers" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://youtube.com/@mamtapackersandmovers5" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://www.facebook.com/share/1ADEZXpB5n/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://x.com/mamtapacke47743" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://wa.me/919142225833" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Contact;
