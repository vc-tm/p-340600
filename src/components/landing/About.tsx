import React from "react";

const About: React.FC = () => {
  return (
    <section className="w-full max-w-[1304px] ml-4 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[41%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col max-md:max-w-full max-md:mt-1.5">
            <div className="flex items-stretch gap-3">
              <div className="bg-[rgba(231,27,75,1)] flex w-[38px] shrink-0 h-[212px]" />
              <div className="bg-[rgba(231,27,75,1)] flex w-[38px] shrink-0 h-[212px]" />
            </div>
            <h2 className="text-[rgba(40,40,40,1)] text-[32px] font-extrabold leading-none mt-[11px] max-md:max-w-full">
              More than a gym
            </h2>
            <h3 className="text-[32px] font-extrabold leading-none border self-stretch mt-1.5 border-black border-solid max-md:max-w-full">
              A home for champion
            </h3>
            <p className="text-black text-xl font-normal leading-[21px] tracking-[-0.2px] self-stretch mt-[11px] max-md:max-w-full max-md:mr-2.5">
              At Stallion Extreme Fitness, we don't just change bodies—we forge
              unbreakable mindsets. Born from founder Jake Torrez's frustration
              with 'soft' gym cultures, we've spent the last six years
              redefining what extreme fitness means. Our 15,000 sq ft flagship
              facility isn't filled with casual treadmill users; it's a
              sweat-drenched proving ground where Olympic lifters, MMA fighters,
              and everyday warriors train side-by-side. Every rack, kettlebell,
              and battle rope here has been strategically selected to deliver
              one result: transformation. But what truly sets us apart isn't our
              24/7 access or premium equipment.
            </p>
            <div className="flex items-stretch gap-3 mt-3">
              <div className="bg-[rgba(15,65,102,1)] flex w-[38px] shrink-0 h-[348px]" />
              <div className="bg-[rgba(15,65,102,1)] flex w-[38px] shrink-0 h-[348px]" />
            </div>
          </div>
        </div>
        <div className="w-[59%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch text-base text-white font-bold text-center tracking-[-0.16px] my-auto max-md:max-w-full max-md:mt-10">
            <button className="bg-[rgba(231,27,75,1)] flex min-h-[39px] items-center gap-2.5 justify-center px-5 py-2.5 max-md:mr-2.5">
              <span className="self-stretch my-auto">Know More</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/da88696c98a43f8ac3a911c3a25827689212d850?placeholderIfAbsent=true"
                className="aspect-[0.95] object-contain w-[18px] self-stretch shrink-0 my-auto"
                alt="Arrow icon"
              />
            </button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/25bd633d86f132947eb191ac2d4eade41e0bdf9d?placeholderIfAbsent=true"
              className="aspect-[1.19] object-contain w-full mt-[49px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
              alt="Gym interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
