import React from "react";
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function PortfolioWebsite() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <hr />
      <About />
      <Skills />
      <Projects />
      <hr />
      <Contact />

      <Footer />
    </div>
  );
}
