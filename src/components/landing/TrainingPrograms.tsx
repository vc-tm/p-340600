
import React from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  image,
  title,
  description,
  index
}) => {
  return (
    <AnimateOnScroll 
      animation="fadeIn" 
      delay={0.2 * index} 
      className="h-full"
    >
      <motion.div 
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col relative aspect-[0.786] h-full overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={image}
          className="absolute h-full w-full object-cover inset-0 transition-transform duration-700 hover:scale-110"
          alt={title}
        />
        <div className="relative flex flex-col items-stretch mt-auto bg-gradient-to-t from-black via-black/70 to-transparent pt-20 pb-8 px-8">
          <h3 className="text-[rgba(237,237,237,1)] font-extrabold leading-none text-xl md:text-2xl text-center">
            {title}
          </h3>
          <p className="text-white font-medium leading-relaxed text-base md:text-lg text-center mt-4">
            {description}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[rgba(231,27,75,1)] hover:bg-[rgba(231,27,75,0.9)] text-white font-bold py-2 px-6 rounded-md self-center transition-colors"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
};

const TrainingPrograms: React.FC = () => {
  const programs = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/3437278818da935b4326aa81ec5af332b533193f?placeholderIfAbsent=true",
      title: "STALLION STRENGTH",
      description:
        "Build raw power with Olympic lifts, deadlifts, and our signature strength protocols",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/20ddda2993d91a12757fcfcaa8a443c22f965448?placeholderIfAbsent=true",
      title: "HIIT INFERNO",
      description:
        "Torch fat in 30 mins with battle ropes, sled pushes, and metabolic conditioning",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/007dc5129f983e7f0ecd01f2fcbab593d5caf309?placeholderIfAbsent=true",
      title: "FUNCTIONAL WARRIOR",
      description:
        "Train like an athlete—agility drills, sandbag work, and real-world mobility",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/c27820d82564401693bb2d1d85a60def4b77893c?placeholderIfAbsent=true",
      title: "BOXING CONDITIONING",
      description:
        "Combines heavy bag work, footwork drills, and fight-ready endurance training.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/da4079784ec6895a427dbed7321c3eb72171c9bb?placeholderIfAbsent=true",
      title: "MOBILITY MASTERY",
      description:
        "Recover smarter with guided stretching, yoga flows, and injury prevention.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/8266accc6d778015ab26a8eb33e3a2fc7dc05afd?placeholderIfAbsent=true",
      title: "ELITE 1 : 1 COACHING",
      description:
        "Fully customized plans with your dedicated trainer (nutrition included).",
    },
  ];

  return (
    <section className="bg-neutral-800 w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none text-center">
            YOUR TRANSFORMATION STARTS HERE
          </h2>
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed text-center mt-4 max-w-3xl mx-auto">
            Tailored programs for every fitness level—from first-timers to elite
            athletes.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              image={program.image}
              title={program.title}
              description={program.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
