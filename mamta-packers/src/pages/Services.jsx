import React, { useState } from 'react';
import './Services.css';

import carImg from '../assets/car.jpg';
import bikeImg from '../assets/bike.jpg';
import homeImg from '../assets/household.jpg';
import commercialImg from '../assets/commercial_shifting.jpg';
import boleroImg from '../assets/bolero.png';
import lptImg from '../assets/LPT.jpg';
import tataaceImg from '../assets/tataace.jpg'; 
import insuranceImg from '../assets/insurance.jpg';
import officeImg from '../assets/office.jpg';
import transportationImg from '../assets/transportation.jpg';
import loadImg from '../assets/load.jpg';
import banner6Img from '../assets/banner6.jpg'; 

const Services = () => {
  const services = [
    { 
      name: "Car Shifting", 
      image: carImg, 
      description: "Safe and secure transportation for your car with specialized vehicles and trained drivers."
    },
    { 
      name: "Bike Shifting", 
      image: bikeImg, 
      description: "Hassle-free bike relocation with protective packaging to ensure no damage."
    },
    { 
      name: "Household Shifting", 
      image: homeImg, 
      description: "Complete household moving solutions, including packing and unpacking services."
    },
    { 
      name: "Commercial Shifting", 
      image: commercialImg, 
      description: "Efficient relocation for businesses, minimizing downtime with professional handling."
    },
    { 
      name: "Office Shifting", 
      image: officeImg, 
      description: "Seamless office relocation with careful handling of equipment and furniture."
    },
    { 
      name: "Transportation Service", 
      image: transportationImg, 
      description: "Reliable logistics for goods transport with a fleet of modern vehicles."
    },
    { 
      name: "Insurance", 
      image: insuranceImg, 
      description: "Comprehensive insurance coverage to protect your belongings during transit."
    },
  ];

  const truckTypes = [
    { 
      name: "Bolero Pickup", 
      image: boleroImg, 
      description: "Ideal for small to medium loads, perfect for compact moves."
    },
    { 
      name: "LPT", 
      image: lptImg, 
      description: "Heavy-duty truck for large-scale commercial and household shifting."
    },
    { 
      name: "Tata ACE", 
      image: tataaceImg, 
      description: "Versatile mini-truck for quick and efficient small load transport."
    },
  ];

  const employees = [
    { name: "Load & Unload Labours", image: loadImg },
    { name: "Household Gadgets Installation & Uninstallation", image: homeImg },
    { name: "Drivers", image: banner6Img },
  ];

  const faqs = [
    { 
      question: "How do I book a service?", 
      answer: "Simply click on 'Book Now' or 'Get a Quote' and fill out your details." 
    },
    { 
      question: "Are my belongings insured?", 
      answer: "Yes, we offer insurance services to ensure complete safety of your goods." 
    },
    { 
      question: "What types of trucks do you provide?", 
      answer: "We offer Tata ACE, Bolero Pickup, and LPT based on your load." 
    },
  ];

  const Section = ({ title, items, className = "" }) => (
    <div className={`section ${className}`}>
      <h2 className="section-title">{title}</h2>
      <div className="grid">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} className="card-image" />
            <p className="card-text">{item.name}</p>
            {item.description && <p className="card-description">{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );

  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="faq-item">
        <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
          <span>{question}</span>
          <svg
            className={`faq-icon ${isOpen ? 'rotate' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
          <p>{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="services-container">
      <h1 className="main-title">Our Services</h1>
      <p className="intro-text">
        We offer a comprehensive range of logistics and relocation services designed to meet your needs with safety, reliability, and efficiency. From vehicle and household shifting to specialized transportation and insurance, our skilled team ensures a seamless experience.
      </p>

      <Section title="What We Offer" items={services} className="what-we-offer" />
      <Section title="Our Truck Types" items={truckTypes} />
      <Section title="Our Team" items={employees} />

      {/* FAQs with Accordion */}
      <div className="detailed-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>Ready to Make Your Move?</h2>
        <p>Click below to book your service or get a personalized quote.</p>
        <div className="cta-buttons">
          <button className="cta-btn book-btn">Book Now</button>
          <button className="cta-btn quote-btn">Get a Quote</button>
        </div>
        <p>Let our team take care of your move, so you can relax and look forward to your new beginning.</p>
      </div>
    </div>
  );
};

export default Services;