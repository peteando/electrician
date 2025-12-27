// app/page.js
import React from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Gallery from '../components/Gallery.jsx';
import Services from '../components/Services.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Faq from '@/components/Faq.jsx';
import Contact from '../components/Contact.jsx';





const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <Services/>
      <Gallery/>
      <Testimonials/>
      <About/>
      <Faq/>
      <Contact/>

      
      
      
      
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;
