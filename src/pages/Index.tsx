import React from "react";
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
  return (
    <div className="bg-[rgba(244,244,244,1)] flex flex-col overflow-hidden items-center pb-[269px] max-md:pb-[100px]">
      <Hero />
      <About />
      <TrainingPrograms />
      <Coaches />
      <Pricing />
      <Locations />
      <Testimonials />
      <Partners />
      <Contact />
    </div>
  );
};

export default Index;
