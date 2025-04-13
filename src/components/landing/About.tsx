
import React from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col">
          <AnimateOnScroll animation="slideInLeft">
            <div className="flex items-stretch gap-3">
              <div className="bg-[rgba(231,27,75,1)] flex w-[38px] shrink-0 h-[212px]" />
              <div className="bg-[rgba(231,27,75,1)] flex w-[38px] shrink-0 h-[212px]" />
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeIn" delay={0.2}>
            <h2 className="text-[rgba(40,40,40,1)] text-3xl lg:text-[32px] font-extrabold leading-none mt-6">
              More than a gym
            </h2>
            <h3 className="text-3xl lg:text-[32px] font-extrabold leading-none border-b-2 border-black py-2 mt-1.5">
              A home for champion
            </h3>
            
            <p className="text-black text-lg lg:text-xl font-normal leading-relaxed tracking-[-0.2px] mt-6">
              At Stallion Extreme Fitness, we don't just change bodies—we forge
              unbreakable mindsets. Born from founder Jake Torrez's frustration
              with 'soft' gym cultures, we've spent the last six years
              redefining what extreme fitness means. Our 15,000 sq ft flagship
              facility isn't filled with casual treadmill users; it's a
              sweat-drenched proving ground where Olympic lifters, MMA fighters,
              and everyday warriors train side-by-side. Every rack, kettlebell,
              and battle rope here has been strategically selected to deliver
              one result: transformation. But what truly sets us apart isn't our
              24/7 access or premium equipment.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slideInLeft" delay={0.4}>
            <div className="flex items-stretch gap-3 mt-6">
              <div className="bg-[rgba(15,65,102,1)] flex w-[38px] shrink-0 h-[348px]" />
              <div className="bg-[rgba(15,65,102,1)] flex w-[38px] shrink-0 h-[348px]" />
            </div>
          </AnimateOnScroll>
        </div>
        
        <div className="flex flex-col justify-center">
          <AnimateOnScroll animation="slideInRight">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[rgba(231,27,75,1)] flex min-h-[39px] items-center gap-2.5 justify-center px-8 py-3 text-base text-white font-bold hover:bg-[rgba(231,27,75,0.9)] transition-colors w-full md:w-auto"
            >
              <span className="self-stretch my-auto">Know More</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/da88696c98a43f8ac3a911c3a25827689212d850?placeholderIfAbsent=true"
                className="aspect-[0.95] object-contain w-[18px] self-stretch shrink-0 my-auto"
                alt="Arrow icon"
              />
            </motion.button>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="scaleUp" delay={0.3}>
            <div className="mt-10 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/25bd633d86f132947eb191ac2d4eade41e0bdf9d?placeholderIfAbsent=true"
                className="w-full h-auto object-cover"
                alt="Gym interior"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
