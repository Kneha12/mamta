import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    title: 'Safe & Secure',
    icon: '🔒',
    description: 'We pack your belongings with utmost care and safety.',
  },
  {
    title: 'On-Time Delivery',
    icon: '⏱️',
    description: 'We value your time and always deliver on schedule.',
  },
  {
    title: 'All India Network',
    icon: '🌐',
    description: 'Our services are available across major cities in India.',
  },
  {
    title: '24x7 Support',
    icon: '📞',
    description: 'Our customer support team is always available for help.',
  },
  
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <h2>Why Choose Us</h2>
      <div className="why-grid">
       {features.map((item, index) => (
  <div className="why-card" key={index}>
    <div className="why-icon">{item.icon}</div>
    <p className="why-title">{item.title}</p>
    <p className="why-desc">{item.description}</p>
  </div>
))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
