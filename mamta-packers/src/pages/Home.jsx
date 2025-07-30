import React from 'react';
import HeroSection from '../components/HeroSection';
import QuoteForm from '../components/QuoteForm';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';     // ✅ Fixed
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';      // ✅ Fixed
import ServiceAreas from '../components/ServiceAreas'; // Import at the top

const Home = () => {
  return (
    <>
      <HeroSection />
      <QuoteForm />
      <WhyChooseUs />
      <ServiceAreas />
      <Reviews />
      <CTABanner />
      <Footer />
    </>
  );
};

export default Home;
