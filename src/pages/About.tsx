
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
          FROM 1 RACK TO 1000 <br />TONNES OF IRON
        </motion.h1>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The story starts with a 23-year-old student who transformed his garage into a gym during Covid. A year later, we had our first commercial space. Today, we're India's fastest-growing chain of hardcore performance gyms. We don't do Zumba. No cookie-cutter routines. No BS promises about magic pills. Just pure, brutally effective strength and conditioning—backed by a team that lives what they preach.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">MEET THE VISIONARIES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-[rgba(231,27,75,1)] text-xl font-bold mb-4">ABHILASH</h3>
              <p className="text-gray-300">Former fitness model turned startup founder. Obsessed with creating the perfect training environment. Serial entrepreneur who turned down VC funding to keep Stallion true to its hardcore roots.</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-[rgba(231,27,75,1)] text-xl font-bold mb-4">SURESH</h3>
              <p className="text-gray-300">Elite trainer with 12+ years under the bar. Specializes in transforming beginners into beasts. Known for his no-excuses approach and encyclopedic knowledge of exercise science.</p>
            </div>
          </div>
        </motion.section>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-bold text-center text-white mb-8"
        >
          TWO MEN, ONE OBSESSION, ZERO COMPROMISES.
        </motion.h2>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">WHY CHOOSE US</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ELITE EQUIPMENT",
                description: "Competition-grade gear from Rogue, Eleiko, and Arsenal Strength."
              },
              {
                title: "24/7 ACCESS",
                description: "Train when you want. No restrictions. No excuses."
              },
              {
                title: "CERTIFIED COACHES",
                description: "Every trainer holds multiple international certifications."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.2) }}
                className="bg-neutral-900 p-6 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                <h3 className="text-[rgba(231,27,75,1)] text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
