import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBoxOpen,
  FaShieldAlt,
  FaFileAlt,
  FaStar,
  FaQuestionCircle,
  FaSitemap,
  FaTruck,
  FaMotorcycle,
  FaHome,
  FaWarehouse,
  FaChartBar,
  FaTrophy,
  FaNewspaper,
  FaGamepad
} from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs'; // X (Twitter)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <FaMapMarkerAlt />{' '}
            <a
              href="https://www.google.com/maps/place/Opp.+DC+Lounge,+near+Kagal+Nagar+Auto+Stand,+Sonari,+Jamshedpur,+Jharkhand+831011"
              target="_blank"
              rel="noopener noreferrer"
            >
              Opp. DC Lounge, near Kagal Nagar Auto Stand, Sonari – 831011
            </a>
          </p>
          <p><FaPhoneAlt /> +91 91422 25833</p>
          <p><FaPhoneAlt /> +91 89876 03455</p>
          <p><FaEnvelope /> <a href="mailto:mamtapackersandmovers5@gmail.com">mamtapackersandmovers5@gmail.com</a></p>

          {/* Social Media */}
          <div className="social-icons">
            <a href="https://www.instagram.com/mamta_packersandmovers" target="_blank" className="instagram" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@mamtapackersandmovers5" target="_blank" className="youtube" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/share/1ADEZXpB5n/" target="_blank" className="facebook" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/mamtapacke47743" target="_blank" className="x-twitter" rel="noopener noreferrer">
              <BsTwitterX />
            </a>
            <a href="https://wa.me/919142225833" target="_blank" className="whatsapp" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Company Info */}
<div className="footer-section">
  <h4>Company Info</h4>
  <p><FaBoxOpen /> <Link to="/about">About Us</Link></p>
  <p><FaShieldAlt /> <Link to="/privacy">Privacy Policy</Link></p>
  <p><FaFileAlt /> <Link to="/terms">Terms and Conditions</Link></p>
  <p><FaStar /> <Link to="/reviews">Customer Reviews</Link></p>
  <p><FaQuestionCircle /> <Link to="/faq">FAQ</Link></p>
  <p><FaSitemap /> <Link to="/sitemap">Sitemap</Link></p>
</div>

{/* Our Services */}
<div className="footer-section">
  <h4>Our Services</h4>
  <p><FaTruck /> <Link to="/services#car-transport">Car Transport</Link></p>
  <p><FaMotorcycle /> <Link to="/services#bike-transport">Bike Transport</Link></p>
  <p><FaHome /> <Link to="/services#local-shifting">Local Shifting</Link></p>
  <p><FaHome /> <Link to="/services#office-relocation">Office Relocation</Link></p>
  <p><FaBoxOpen /> <Link to="/services#luggage-transport">Luggage Transport</Link></p>
  <p><FaWarehouse /> <Link to="/services#warehousing">Warehousing & Storage</Link></p>
  <p><FaHome /> <Link to="/services#home-shifting">Home Shifting</Link></p>
</div>

{/* Media & Resources */}
<div className="footer-section">
  <h4>Media & Resources</h4>
  <p><FaChartBar /> <Link to="/blog">Blog</Link></p>
  <p><FaTrophy /> <Link to="/success-stories">Success Stories</Link></p>
  <p><FaChartBar /> <Link to="/infographics">Infographics</Link></p>
  <p><FaNewspaper /> <Link to="/news">News</Link></p>
  <p><FaGamepad /> <Link to="/web-stories">Web Stories</Link></p>
</div>


      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Mamta Packers & Movers. All Rights Reserved.</p>
        <p>Developed by <a href="https://vepsinfotech.com" target="_blank" rel="noopener noreferrer">VEPS Infotech</a></p>
        <p>
          <a href="/terms">Terms & Conditions</a> |
          <a href="/privacy"> Privacy Policy</a> |
          <a href="/disclaimer"> Disclaimer</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
