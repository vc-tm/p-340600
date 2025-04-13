
import React from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

interface CoachThumbnailProps {
  image: string;
  selected?: boolean;
  onClick?: () => void;
}

const CoachThumbnail: React.FC<CoachThumbnailProps> = ({ image, selected, onClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`cursor-pointer overflow-hidden rounded-md ${selected ? 'border-2 border-[rgba(231,27,75,1)]' : ''}`}
      onClick={onClick}
    >
      <img
        src={image}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        alt="Coach thumbnail"
      />
    </motion.div>
  );
};

const Coaches: React.FC = () => {
  const coaches = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/dae1c0461a4223c09e7b0ca0ca29957383a0da9c?placeholderIfAbsent=true",
      name: "Jake Torrez",
      specialty: "MMA Conditioning",
      bio: "Former pro fighter with 12-3 record. Trained UFC athletes. No-nonsense approach."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/e2f8b6f378f20864b0be3fcb004233ecfb35007e?placeholderIfAbsent=true",
      name: "Sarah Mitchell",
      specialty: "Strength & Conditioning",
      bio: "Former Olympic weightlifter. Specializes in powerlifting and strength development."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/97569c8877d5102c9028cbf76efb56ce8864f198?placeholderIfAbsent=true",
      name: "Raj Patel",
      specialty: "Functional Training",
      bio: "Movement specialist with 8+ years experience. Teaches mobility and functional training."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/cfd359b80f13df4268180234baf96c491d003db9?placeholderIfAbsent=true",
      name: "Maria Rodriguez",
      specialty: "HIIT & Conditioning",
      bio: "Former pro athlete with expertise in metabolic conditioning and fat loss."
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <AnimateOnScroll animation="slideUp">
        <h2 className="text-[rgba(40,40,40,1)] text-2xl md:text-3xl font-extrabold leading-none tracking-[-0.28px] text-center">
          MEET YOUR TACTICAL COACHING TEAM
        </h2>
        <p className="text-black text-lg md:text-xl font-medium leading-relaxed text-center mt-4 max-w-3xl mx-auto">
          World-class trainers who've been where you want to go.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
        <AnimateOnScroll animation="slideInLeft" className="md:col-span-2">
          <div className="relative rounded-lg overflow-hidden h-full max-h-[600px]">
            <img
              src={coaches[0].image}
              className="w-full h-full object-cover"
              alt={`Coach ${coaches[0].name}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex flex-col">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/3bf9f959abe226f0e74075c8179d2fa2784c2f77?placeholderIfAbsent=true"
                  className="w-6 h-6 mb-4"
                  alt="Quote icon"
                />
                <h3 className="text-[rgba(231,27,75,1)] text-2xl font-extrabold">
                  {coaches[0].name}
                </h3>
                <p className="text-white text-base mt-2">
                  {coaches[0].specialty}
                </p>
                <p className="text-white text-base mt-6 max-w-lg">
                  {coaches[0].bio}
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slideInRight" delay={0.2} className="md:col-span-1">
          <div className="grid grid-cols-1 gap-4 h-full">
            {coaches.slice(1).map((coach, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-md overflow-hidden h-[150px] md:h-[170px] shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={coach.image}
                  className="w-full h-full object-cover"
                  alt={`Coach thumbnail`}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h4 className="font-bold text-lg">{coach.name}</h4>
                    <p className="text-sm mt-1">{coach.specialty}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Coaches;
