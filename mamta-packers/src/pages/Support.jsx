import React from 'react';
import './Support.css';

const supportData = [
  {
    title: 'Booking Support',
    description: 'Need help with booking a move? Call or message us directly.',
    contact: 'Call: +91 79037 72516',
    link: 'tel:+917903772516',
  },
  {
    title: 'Service Support',
    description: 'Questions about your current or upcoming relocation service?',
    contact: 'Email: support@mamta-movers.com',
    link: 'mailto:support@mamta-movers.com',
  },
  {
    title: 'Payment Queries',
    description: 'Doubts about pricing, receipts, or payment confirmation?',
    contact: 'Call: +91 95127 94571',
    link: 'tel:+919512794571',
  },
  {
    title: 'Damage & Insurance Help',
    description: 'Report damaged goods or file an insurance claim.',
    contact: 'Call: +91 91422 25833',
    link: 'tel:+919142225833',
  },
  {
    title: 'Technical Support',
    description: 'Issues with website, bookings, or quote forms?',
    contact: 'Email: techsupport@mamta-movers.com',
    link: 'mailto:techsupport@mamta-movers.com',
  },
  {
    title: 'Live Chat / WhatsApp',
    description: 'Connect with us instantly on WhatsApp or Chat.',
    contact: 'Chat: WhatsApp Now',
    link: 'https://wa.me/917903772516',
  },
];

const Support = () => {
  return (
    <div className="support-container">
      <h1 className="section-title">Support & Help Center</h1>
      <p className="support-intro">
        Whether you're planning your move, need help with payment, or facing an issue — we're just a click or call away.
      </p>

      <div className="support-grid">
        {supportData.map((item, index) => (
          <a href={item.link} key={index} className="support-card" target="_blank" rel="noopener noreferrer">
            <h3 className="support-title">{item.title}</h3>
            <p className="support-desc">{item.description}</p>
            <p className="support-contact">{item.contact}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Support;