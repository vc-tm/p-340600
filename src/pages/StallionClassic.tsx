
import React from "react";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StallionClassic: React.FC = () => {
  const competitionSchedule = [
    { time: "8:00 AM", event: "Athlete Check-in & Weigh-in", location: "Main Entrance" },
    { time: "9:30 AM", event: "Opening Ceremony", location: "Main Stage" },
    { time: "10:00 AM", event: "Men's Powerlifting - Squat Round", location: "Power Zone" },
    { time: "11:30 AM", event: "Women's Powerlifting - Squat Round", location: "Power Zone" },
    { time: "1:00 PM", event: "Lunch Break & Exhibition", location: "Food Court & Exhibition Hall" },
    { time: "2:00 PM", event: "Men's & Women's Bench Press", location: "Power Zone" },
    { time: "4:00 PM", event: "Deadlift Competition", location: "Power Zone" },
    { time: "6:00 PM", event: "Award Ceremony", location: "Main Stage" },
    { time: "7:30 PM", event: "After Party", location: "VIP Lounge" }
  ];

  const sponsors = [
    { name: "Rogue Fitness", logo: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/bed8ff3846e40ef3bca3f297d1c30a909032d1bf" },
    { name: "Under Armour", logo: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/8848b07dff2af56d1a13aa42c2288493793c97f1" },
    { name: "Optimum Nutrition", logo: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/634f20dc2975f43cf113e7f588884c1dedeeb0ce" },
    { name: "Nike", logo: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/b9d260c04dd102217dd143eb1301cd4d34b6c7e0" }
  ];

  return (
    <div className="bg-black min-h-screen pb-16">
      <Header />
      
      {/* Hero Section */}
      <div className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590239926044-4131f5d0654d?q=80&w=1374&auto=format&fit=crop"
            alt="Stallion Classic Competition" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              THE STALLION CLASSIC
            </h1>
            <h2 className="text-2xl text-[rgba(231,27,75,1)] mb-8">
              INDIA'S PREMIER STRENGTH COMPETITION
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Witness raw power and determination as elite athletes from across the country
              compete for glory and a ₹10,00,000 prize pool.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[rgba(231,27,75,1)] text-white px-8 py-4 rounded-sm font-bold"
              >
                REGISTER AS COMPETITOR
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border border-white text-white px-8 py-4 rounded-sm font-bold"
              >
                GET SPECTATOR TICKETS
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Competition Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">EVENT DETAILS</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-bold text-[rgba(231,27,75,1)]">DATE & LOCATION</h3>
                <p className="mt-2">October 15-16, 2025 at Indira Gandhi Indoor Stadium, New Delhi</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[rgba(231,27,75,1)]">CATEGORIES</h3>
                <p className="mt-2">Men's & Women's divisions across multiple weight classes</p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Powerlifting (Squat, Bench, Deadlift)</li>
                  <li>Strongman/Strongwoman Events</li>
                  <li>Olympic Weightlifting</li>
                  <li>Crossfit Challenge</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[rgba(231,27,75,1)]">PRIZE POOL</h3>
                <p className="mt-2">₹10,00,000 total prize money distributed across all divisions</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=1469&auto=format&fit=crop" 
              alt="Powerlifting competition" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Schedule */}
      <div className="bg-neutral-900 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">COMPETITION SCHEDULE</h2>
            <p className="text-gray-300">Day 1 - October 15, 2025</p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {competitionSchedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex border-b border-gray-700 py-4 hover:bg-neutral-800 transition-colors"
              >
                <div className="w-24 text-[rgba(231,27,75,1)] font-bold">{item.time}</div>
                <div className="flex-1 px-4">
                  <h3 className="font-bold text-white">{item.event}</h3>
                </div>
                <div className="w-40 text-gray-400 text-right">{item.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sponsors */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">OUR SPONSORS</h2>
          <p className="text-gray-300">Proudly supported by these elite brands</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index + 0.6 }}
              className="flex items-center justify-center bg-neutral-900 p-8 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="max-h-16" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Registration CTA */}
      <div className="bg-[rgba(231,27,75,0.1)] py-16 mt-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">READY TO COMPETE?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Take your shot at glory and compete with the best athletes in the country.
              Registration closes September 15, 2025.
            </p>
            <Link 
              to="/contact" 
              className="bg-[rgba(231,27,75,1)] text-white px-8 py-4 rounded inline-flex items-center gap-2 hover:bg-[rgba(231,27,75,0.9)] transition-colors"
            >
              <span>REGISTER NOW</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StallionClassic;
