
import React from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

interface LocationCardProps {
  image: string;
  name: string;
  description: string;
  index: number;
}

const LocationCard: React.FC<LocationCardProps> = ({
  image,
  name,
  description,
  index
}) => {
  return (
    <AnimateOnScroll animation="fadeIn" delay={0.15 * index}>
      <motion.div 
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col relative aspect-[0.805] w-full h-full overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={image}
          className="absolute h-full w-full object-cover inset-0 transition-transform duration-700 hover:scale-110"
          alt={`${name} location`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
        <div className="relative flex flex-col h-full justify-end p-6">
          <h3 className="text-white text-xl md:text-2xl font-extrabold">{name}</h3>
          <p className="text-white tracking-[-0.16px] font-bold mt-3">
            {description}
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[rgba(231,27,75,1)] hover:bg-[rgba(231,27,75,0.9)] transition-colors flex items-center gap-2.5 text-white font-bold tracking-[-0.16px] justify-center mt-6 px-5 py-2.5 rounded w-full md:w-auto"
          >
            <span>Know More</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/a9cbfb77b9798c0ded2d545fecb5472097859690?placeholderIfAbsent=true"
              className="aspect-[0.95] object-contain w-[18px]"
              alt="Arrow icon"
            />
          </motion.button>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
};

const Locations: React.FC = () => {
  const locations = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/4465ab23c82ebbabcb92a9e732cca24ace5a3681?placeholderIfAbsent=true",
      name: "Downtown",
      description: "Where the city's strongest train.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/bb373928575fd047528b51d3438adb4c5a55d231?placeholderIfAbsent=true",
      name: "Uptown",
      description: "Premium equipment, premium results.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/d48ff42668ffc23d434fc0bc8a6ed6dc7d7816d6?placeholderIfAbsent=true",
      name: "East Side",
      description: "Rise early, train hard, no excuses.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/8c2c308a6f96bde4e5777649444dab72fa206cfd?placeholderIfAbsent=true",
      name: "West End",
      description: "The newest addition to our empire.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/11b30401a3f97adf4139ded4284f7ae300846457?placeholderIfAbsent=true",
      name: "Southside",
      description: "Open 24/7 for the dedicated.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/cc4f520522728bf02db490a5e4c14f0dd25efbdc?placeholderIfAbsent=true",
      name: "North District",
      description: "Where champions are forged.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <AnimateOnScroll animation="slideUp">
        <h2 className="text-[rgba(40,40,40,1)] text-2xl md:text-3xl font-extrabold leading-none tracking-[-0.28px] text-center">
          FIND YOUR STALLION HOME
        </h2>
        <p className="text-[rgba(20,20,20,1)] text-lg md:text-xl font-medium leading-relaxed text-center mt-4 max-w-3xl mx-auto">
          Six elite facilities across the city – same uncompromising standards.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
        {locations.map((location, index) => (
          <LocationCard
            key={index}
            image={location.image}
            name={location.name}
            description={location.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Locations;
