
import React from "react";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 pt-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white mb-8"
        >
          FROM 1 RACK TO 1000
          <br />
          TONNES OF IRON
        </motion.h1>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">ABOUT US</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The story starts with a 23-year-old student who transformed his garage into a gym during Covid. A year later, we had our first commercial space. Today, we're India's fastest-growing chain of hardcore performance gyms. We don't do Zumba. No cookie-cutter routines. No BS promises about magic pills. Just pure, brutally effective strength and conditioning—backed by a team that lives what they preach.
          </p>
        </motion.section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">MEET THE VISIONARIES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-neutral-900 p-8 rounded-lg"
            >
              <h3 className="text-[rgba(231,27,75,1)] text-xl font-bold mb-4">ABHILASH</h3>
              <div className="flex items-center gap-6">
                <img 
                  src={"/lovable-uploads/c4507176-f5a9-4388-a3c7-8d4a38c39a7f.png"} 
                  alt="Abhilash" 
                  className="w-48 h-48 object-cover rounded"
                />
                <p className="text-gray-300">
                  Former fitness model turned startup founder. Obsessed with creating the perfect training environment. Serial entrepreneur who turned down VC funding to keep Stallion true to its hardcore roots.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-neutral-900 p-8 rounded-lg"
            >
              <h3 className="text-[rgba(231,27,75,1)] text-xl font-bold mb-4">SURESH</h3>
              <div className="flex items-center gap-6">
                <img 
                  src={"/lovable-uploads/d652d2d5-9102-4348-b494-dfd06cfb1e02.png"} 
                  alt="Suresh" 
                  className="w-48 h-48 object-cover rounded"
                />
                <p className="text-gray-300">
                  Elite trainer with 12+ years under the bar. Specializes in transforming beginners into beasts. Known for his no-excuses approach and encyclopedic knowledge of exercise science.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          TWO MEN, ONE OBSESSION, ZERO COMPROMISES.
        </motion.h2>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">WHY CHOOSE US</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="p-6 hover:bg-neutral-800 transition-colors rounded-lg"
            >
              <h3 className="text-[rgba(231,27,75,1)] text-lg font-bold mb-3">ELITE EQUIPMENT</h3>
              <p className="text-gray-300">Competition-grade gear from Rogue, Eleiko, and Arsenal Strength.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="p-6 hover:bg-neutral-800 transition-colors rounded-lg"
            >
              <h3 className="text-[rgba(231,27,75,1)] text-lg font-bold mb-3">24/7 ACCESS</h3>
              <p className="text-gray-300">Train when you want. No restrictions. No excuses.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="p-6 hover:bg-neutral-800 transition-colors rounded-lg"
            >
              <h3 className="text-[rgba(231,27,75,1)] text-lg font-bold mb-3">CERTIFIED COACHES</h3>
              <p className="text-gray-300">Every trainer holds multiple international certifications.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
