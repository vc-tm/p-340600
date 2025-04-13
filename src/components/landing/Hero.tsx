
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/ui/Header";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col self-stretch relative min-h-[100vh] w-full max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/133ad0f984ef064c5caefd5bf5e1c1fbe38b3335?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Hero background"
      />
      <div className="relative flex w-full flex-col items-stretch pt-[120px] md:pt-[160px] max-md:max-w-full">
        <Header />
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between mt-[60px] max-md:mt-10">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/123fdb9317b08228c8bbb504afe6824e1e00deb2?placeholderIfAbsent=true"
            className="hidden md:block aspect-[0.6] object-contain w-[130px] lg:w-[187px] max-w-full"
            alt="Decorative element"
          />
          
          <div className="flex flex-col items-center mt-6 max-md:max-w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[rgba(246,246,246,1)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.6px] text-center max-md:max-w-full"
            >
              UNLEASH YOUR INNER <br />
              STALLION
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white text-xl md:text-2xl font-medium tracking-[-0.24px] text-center mt-[17px]"
            >
              Train Like an Athlete, Look Like a Champion
            </motion.h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:mt-12 w-full max-w-xl">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/0d7845377d3b458f669314ff082ecb7e4bda75c1?placeholderIfAbsent=true"
                className="w-[100px] md:w-[150px] object-contain"
                alt="Decorative element"
              />
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[rgba(231,27,75,1)] flex min-h-[39px] items-center gap-2.5 text-base text-white font-bold text-center tracking-[-0.16px] w-full md:w-auto justify-center px-8 py-3 md:py-3.5"
              >
                <span className="self-stretch my-auto">Join now</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/da88696c98a43f8ac3a911c3a25827689212d850?placeholderIfAbsent=true"
                  className="aspect-[0.95] object-contain w-[18px] self-stretch shrink-0 my-auto"
                  alt="Arrow icon"
                />
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="self-stretch bg-[rgba(255,255,255,0.1)] border hover:bg-[rgba(255,255,255,0.2)] transition-colors gap-2.5 text-base text-white font-bold text-center tracking-[-0.16px] w-full md:w-auto px-8 py-3 md:py-3.5 border-[rgba(231,27,75,1)] border-solid"
              >
                Explore now
              </motion.button>
              
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/052e65d8fff4aff7ab1b28af7123a213da393951?placeholderIfAbsent=true"
                className="hidden md:block w-[100px] md:w-[150px] object-contain"
                alt="Decorative element"
              />
            </div>
          </div>
          
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/6631bd71cf2e9cea70434249b5adfd4568bf64d3?placeholderIfAbsent=true"
            className="hidden md:block aspect-[0.61] object-contain w-[130px] lg:w-[189px] max-w-full"
            alt="Decorative element"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
