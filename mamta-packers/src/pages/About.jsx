import React from 'react';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  const visionText = "To be the first choice in comprehensive logistics and relocation solutions—known for our safety-first mindset, punctual service, and unwavering client trust.";

  const missionText = "Deliver excellence in packing, moving, loading, and unloading through a skilled, customer-focused team. Champion safety by using secure methods, protective packaging, and quality equipment to safeguard every item. Prioritize timeliness through streamlined operations and proactive communication—so schedules matter, and we meet them. Earn and keep client trust by treating goods as our own and backing every service with transparent, reliable support.";

  const coreValuesText = "Safety & Care: Every item is precious, and we handle your goods with utmost protection. Reliability: On-time delivery and consistent execution build real peace of mind. Trust & Integrity: We deliver what we promise—and own up if anything goes off-track. Adaptability: As needs change, so do we—adding services, technology, and responsiveness. Client-Centric Service: Your satisfaction drives us, and we listen, customize, and follow through.";

  const whyStandOutText = "A decade of experience since 2015 across events, logistics, and relocations. Integrated solutions cover everything from packing to unpacking, providing complete end-to-end service you can count on. Client trust is the foundation of our success, built on long-term relationships and repeated referrals. Our commitment to advancement means we evolve as new challenges arise, continuously adding services to stay ahead.";

  const yearsOfExperienceText = "Since our inception in 2015, we have accumulated over a decade of expertise in logistics, event support, and relocation services. Our experience ensures seamless operations, informed decision-making, and a deep understanding of client needs across diverse projects.";

  const ourTeamText = "Our team comprises dedicated professionals trained in packing, moving, and logistics management. From skilled packers to experienced drivers and logistics coordinators, each member is committed to delivering top-notch service with a focus on safety and efficiency.";

  const serviceGuaranteeText = "We stand behind our services with a commitment to quality. If any aspect of our service falls short, we’ll make it right—whether through prompt resolution or compensation. Your satisfaction is our priority, and we back it with transparent communication and dependable support.";

  const safetyMeasuresText = "Safety is at the core of our operations. We use high-quality packing materials, secure loading techniques, and well-maintained vehicles to protect your belongings. Our team is trained in safe handling practices, ensuring your items arrive in pristine condition.";

  const clientTestimonials = [
    {
      name: "Rachit Roy",
      text: "Mamta Packers & Movers made our office relocation seamless. Their attention to detail and punctuality were impressive!",
      image: "https://via.placeholder.com/100x100.png?text=John+Doe"
    },
    {
      name: "Shivay Kumar",
      text: "I trusted them with my home move, and they handled everything with care. Highly recommend their professional service!",
      image: "https://via.placeholder.com/100x100.png?text=Sarah+Smith"
    },
    {
      name: "Amit Patel",
      text: "Their team went above and beyond during our event setup. Reliable, safe, and efficient—couldn’t ask for more.",
      image: "https://via.placeholder.com/100x100.png?text=Amit+Patel"
    }
  ];

  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Logistics Coordinator",
      image: "https://via.placeholder.com/100x100.png?text=Team+Member+1"
    },
    {
      name: "Team Member 2",
      role: "Lead Packer",
      image: "https://via.placeholder.com/100x100.png?text=Team+Member+2"
    },
    {
      name: "Team Member 3",
      role: "Driver",
      image: "https://via.placeholder.com/100x100.png?text=Team+Member+3"
    }
  ];

  return (
    <div className="about-container">
      <div className="content-wrapper">
        <h1 className="main-title">Who We Are</h1>
        <p className="main-text">
          Founded in 2015, we started as a loading/unloading specialist serving events, shifting operations, and more.
          As customer needs evolved, we expanded to full packing, moving, and logistics services. Over the years,
          our business has grown—yet our core focus remains the same: safe handling, on-time delivery, and earning trust one client at a time.
        </p>

        {/* Leadership Section */}
        <div className="leadership-section">
          <h2 className="section-title">Our Leadership</h2>
          <div className="leadership-grid">
            <div className="leader-card founder-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlVKBENOiym2zW5EFok5dAHYy89hBAfhwpaA&s"
                alt="Founder"
                className="leader-image"
              />
              <h3 className="leader-name">Mamta</h3>
              <p className="leader-text">
                Mamta, our Founder, brings a decade of leadership to Mamta Packers & Movers. Her vision and customer-first approach have shaped the foundation of our operations since 2015.
              </p>
            </div>
            <div className="co-founder-container">
              <div className="leader-card co-founder-card">
                <img
                  src="https://via.placeholder.com/300x300.png?text=Co-Founder"
                  alt="Co-Founder"
                  className="leader-image"
                />
                <h3 className="leader-name">Abhishek</h3>
                <p className="leader-text">
                  Abhishek, our Co-Founder, plays a vital role in managing operations and building a skilled workforce. His logistics expertise helps us deliver services with precision.
                </p>
              </div>
              <div className="leader-card co-founder-card">
                <img
                  src="https://via.placeholder.com/300x300.png?text=Co-Founder"
                  alt="Co-Founder"
                  className="leader-image"
                />
                <h3 className="leader-name">Riya</h3>
                <p className="leader-text">
                  Riya, Co-Founder of Mamta Packers & Movers, oversees strategy, partnerships, and digital growth. Her focus on innovation ensures we stay ahead in a competitive logistics market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Years of Experience */}
        <div className="section">
          <h2 className="section-title">Years of Experience</h2>
          <p className="section-text">{yearsOfExperienceText}</p>
        </div>

        {/* Our Team */}
        <div className="section">
          <h2 className="section-title">Our Team</h2>
          <p className="section-text">{ourTeamText}</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="section">
          <h2 className="section-title">Vision</h2>
          <p className="section-text">{visionText}</p>
        </div>

        {/* Mission Statement */}
        <div className="section">
          <h2 className="section-title">Mission</h2>
          <p className="section-text">{missionText}</p>
        </div>

        {/* Core Values */}
        <div className="section">
          <h2 className="section-title">Core Values</h2>
          <p className="section-text">{coreValuesText}</p>
        </div>

        {/* Why We Stand Out */}
        <div className="section">
          <h2 className="section-title">Why We Stand Out</h2>
          <p className="section-text">{whyStandOutText}</p>
        </div>

        {/* Service Guarantee */}
        <div className="section">
          <h2 className="section-title">Service Guarantee</h2>
          <p className="section-text">{serviceGuaranteeText}</p>
        </div>

        {/* Safety Measures */}
        <div className="section">
          <h2 className="section-title">Safety Measures</h2>
          <p className="section-text">{safetyMeasuresText}</p>
        </div>

        {/* Client Testimonials */}
        <div className="section">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonials-grid">
            {clientTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;