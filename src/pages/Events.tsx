
import React from "react";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const EventCard = ({ title, date, description, location }: { title: string; date: string; description: string; location: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-[#1A1A1A] rounded-lg overflow-hidden"
  >
    <div className="p-6 flex flex-col md:flex-row items-center gap-6">
      <div className="shrink-0 w-[120px] h-[120px] bg-[rgba(231,27,75,1)] rounded-lg flex flex-col items-center justify-center text-white">
        <Calendar className="w-8 h-8 mb-2" />
        <span className="text-2xl font-bold">{date}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{location}</p>
        <p className="text-gray-300">{description}</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="shrink-0 bg-[rgba(231,27,75,1)] text-white px-6 py-3 rounded hover:bg-[rgba(231,27,75,0.9)] transition-colors"
      >
        Register Now
      </motion.button>
    </div>
  </motion.div>
);

const Events = () => {
  const upcomingEvents = [
    {
      title: "STRENGTH SUMMIT 2025",
      date: "APR 15",
      location: "Dubai Sports Complex",
      description: "Join us for the ultimate test of strength and endurance. International powerlifting champions will compete for glory."
    },
    {
      title: "NUTRITION WORKSHOP",
      date: "APR 22",
      location: "Main Branch, Mumbai",
      description: "Learn about performance nutrition from industry experts. Get personalized meal plans and supplement guidance."
    },
    {
      title: "STRONGMAN CHALLENGE",
      date: "MAY 05",
      location: "Stallion Arena, Delhi",
      description: "Watch India's strongest athletes battle it out in classic strongman events. Limited spots available."
    },
    {
      title: "POWERLIFTING MEET",
      date: "MAY 15",
      location: "Elite Center, Bangalore",
      description: "State-level powerlifting competition. All weight categories. IPF rules apply."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            UPCOMING EVENTS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for exclusive workshops, competitions, and community events.
            Register early to secure your spot.
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">WANT TO HOST AN EVENT?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Looking to organize a competition or workshop at one of our locations?
            Get in touch with our events team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[rgba(231,27,75,1)] text-white px-8 py-4 rounded inline-flex items-center gap-2 hover:bg-[rgba(231,27,75,0.9)] transition-colors"
          >
            Contact Events Team
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
