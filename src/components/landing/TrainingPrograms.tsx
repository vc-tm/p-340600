import React from "react";

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col relative aspect-[0.786] grow text-xl tracking-[-0.2px] max-md:mt-[18px]">
      <img
        src={image}
        className="absolute h-full w-full object-cover inset-0"
        alt={title}
      />
      <div className="relative flex flex-col items-stretch pt-[428px] pb-[34px] px-8 max-md:pt-[100px] max-md:px-5">
        <h3 className="text-[rgba(237,237,237,1)] font-extrabold leading-none self-center">
          {title}
        </h3>
        <p className="text-white font-medium leading-[21px] text-center mt-[7px]">
          {description}
        </p>
      </div>
    </div>
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
    <section className="bg-neutral-800 self-stretch flex w-full flex-col items-stretch px-[74px] py-[111px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <h2 className="text-white text-[32px] font-extrabold leading-none self-center max-md:max-w-full">
        YOUR TRANSFORMATION STARTS HERE
      </h2>
      <p className="text-white text-xl font-medium leading-[1.4] self-center mt-[15px] max-md:max-w-full">
        Tailored programs for every fitness level—from first-timers to elite
        athletes.
      </p>

      <div className="mt-[59px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {programs.slice(0, 3).map((program, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <ProgramCard
                image={program.image}
                title={program.title}
                description={program.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-[-25px] mt-4 max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {programs.slice(3).map((program, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <ProgramCard
                image={program.image}
                title={program.title}
                description={program.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
