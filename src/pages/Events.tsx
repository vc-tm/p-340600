
import React from "react";
import Header from "@/components/ui/Header";
import { motion } from "framer-motion";

const EventCard = ({ title, date, image, description }: { title: string; date: string; image: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-neutral-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-bold text-xl">{title}</h3>
        <span className="text-[rgba(231,27,75,1)]">{date}</span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <button className="bg-[rgba(231,27,75,1)] text-white px-6 py-2 rounded hover:bg-[rgba(231,27,75,0.9)] transition-colors">
        Register Now
      </button>
    </div>
  </motion.div>
);

const Events = () => {
  const upcomingEvents = [
    {
      title: "STALLION CLASSIC",
      date: "MAR 15",
      image: "/path-to-image.jpg",
      description: "Annual bodybuilding championship"
    },
    {
      title: "DEADLIFT WORKSHOP",
      date: "MAR 22",
      image: "/path-to-image.jpg",
      description: "Learn proper form and technique"
    },
    {
      title: "STRENGTH SUMMIT",
      date: "APR 05",
      image: "/path-to-image.jpg",
      description: "International powerlifting meet"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white mb-4"
        >
          BATTLEGROUNDS DON'T BUILD THEMSELVES
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-12"
        >
          Monthly competitions. Pro workshops. Community meetups.
        </motion.p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">UPCOMING EVENTS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">PAST EVENTS HIGHLIGHTS</h2>
          <div className="grid grid-cols-1 gap-8">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              src="/path-to-highlight-image.jpg"
              alt="Past event highlight"
              className="w-full rounded-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">WHY JOIN OUR EVENTS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏅",
                title: "PROVE YOURSELF",
                description: "Test your limits against the best"
              },
              {
                icon: "💪",
                title: "STRONGER COMMUNITY",
                description: "Connect with like-minded athletes"
              },
              {
                icon: "🧠",
                title: "LEARN FROM PROS",
                description: "Get insights from industry experts"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.2) }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
