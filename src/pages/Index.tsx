
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import TrainingPrograms from "@/components/landing/TrainingPrograms";
import Coaches from "@/components/landing/Coaches";
import Pricing from "@/components/landing/Pricing";
import Locations from "@/components/landing/Locations";
import Testimonials from "@/components/landing/Testimonials";
import Partners from "@/components/landing/Partners";
import Contact from "@/components/landing/Contact";

const Index: React.FC = () => {
  // Smooth scroll functionality
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[rgba(244,244,244,1)] overflow-hidden w-full"
    >
      <Hero />
      <About />
      <TrainingPrograms />
      <Coaches />
      <Pricing />
      <Locations />
      <Testimonials />
      <Partners />
      <Contact />
      
      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[rgba(231,27,75,1)] text-white p-3 rounded-full shadow-lg hover:bg-[rgba(231,27,75,0.9)] transition-colors z-50"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default Index;
