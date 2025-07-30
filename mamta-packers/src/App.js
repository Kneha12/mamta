import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Sitemap from './pages/Sitemap';
import Blog from './pages/Blog';
import Success from './pages/Success';
import Infographics from './pages/Infographics';
import News from './pages/News';
import WebStories from './pages/WebStories';

// ✅ Renamed to avoid duplicate declarations
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Quotes from "./pages/Admin/Quotes";
import Blogs from "./pages/Admin/Blogs";
import AdminReviews from "./pages/Admin/Reviews";
import AdminGallery from "./pages/Admin/Gallery";
import Bill from "./pages/Admin/Bill";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/success" element={<Success />} />
        <Route path="/infographics" element={<Infographics />} />
        <Route path="/news" element={<News />} />
        <Route path="/webstories" element={<WebStories />} />

        {/* Admin Panel routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="bill" element={<Bill />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
