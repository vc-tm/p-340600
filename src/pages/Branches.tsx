
import React from "react";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BranchCardProps {
  image: string;
  name: string;
  address: string;
  features: string[];
}

const BranchCard: React.FC<BranchCardProps> = ({ image, name, address, features }) => {
  return (
    <motion.div 
      className="bg-neutral-900 rounded-lg overflow-hidden"
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(231,27,75,0.3)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-60">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-gray-300 mt-2">{address}</p>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-[rgba(231,27,75,1)] font-bold mb-4">FEATURES</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300 flex items-center">
              <span className="inline-block w-2 h-2 bg-[rgba(231,27,75,1)] mr-2 rounded-full"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <motion.button 
          className="mt-6 bg-[rgba(231,27,75,1)] text-white px-6 py-3 rounded-sm w-full flex items-center justify-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>VIEW DETAILS</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Branches: React.FC = () => {
  const branchLocations = [
    {
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
      name: "Downtown",
      address: "123 Main St, Fitness City, FC 10001",
      features: ["24/7 Access", "Olympic Lifting Area", "Cardio Deck", "Recovery Lounge"]
    },
    {
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop",
      name: "Westside",
      address: "456 West Ave, Fitness City, FC 10002",
      features: ["MMA Training Area", "Climbing Wall", "Swimming Pool", "Sauna"]
    },
    {
      image: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?q=80&w=1470&auto=format&fit=crop",
      name: "Northgate",
      address: "789 North Blvd, Fitness City, FC 10003",
      features: ["Crossfit Box", "Outdoor Training Area", "Nutrition Bar", "Physical Therapy"]
    },
    {
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop",
      name: "Eastside",
      address: "101 East St, Fitness City, FC 10004",
      features: ["Strongman Equipment", "Basketball Court", "Dedicated Stretching Area", "Childcare"]
    },
    {
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1469&auto=format&fit=crop",
      name: "Southbay",
      address: "202 South Lane, Fitness City, FC 10005",
      features: ["Women's Only Section", "Yoga Studio", "Massage Therapy", "Juice Bar"]
    },
    {
      image: "https://images.unsplash.com/photo-1637666062717-1c6bcb9179a4?q=80&w=1470&auto=format&fit=crop",
      name: "Central",
      address: "303 Center St, Fitness City, FC 10006",
      features: ["Bodybuilding Area", "Boxing Ring", "Smoothie Bar", "Pro Shop"]
    }
  ];

  return (
    <div className="bg-black min-h-screen pb-16">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">OUR LOCATIONS</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Six elite facilities across the city – same uncompromising standards. 
            Find your nearest Stallion home and start your fitness journey today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branchLocations.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <BranchCard {...branch} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">OPENING A NEW LOCATION SOON</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're expanding to meet the demand for hardcore training. 
            Sign up for updates on our new location and be the first to get founding member rates.
          </p>
          <Link 
            to="/contact" 
            className="bg-[rgba(231,27,75,1)] text-white px-8 py-4 rounded inline-flex items-center gap-2 hover:bg-[rgba(231,27,75,0.9)] transition-colors"
          >
            <span>GET UPDATES</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Branches;
