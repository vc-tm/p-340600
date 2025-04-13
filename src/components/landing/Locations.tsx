import React from "react";

interface LocationCardProps {
  image: string;
  name: string;
  description: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  image,
  name,
  description,
}) => {
  return (
    <div className="flex flex-col relative aspect-[0.805] w-full text-base text-white font-bold pl-[23px] pr-20 pt-[359px] pb-[21px] max-md:mt-3.5 max-md:pt-[100px] max-md:px-5">
      <img
        src={image}
        className="absolute h-full w-full object-cover inset-0"
        alt={`${name} location`}
      />
      <h3 className="relative text-xl font-extrabold">{name}</h3>
      <p className="relative tracking-[-0.16px] text-center mt-3">
        {description}
      </p>
      <button className="relative bg-[rgba(231,27,75,1)] flex min-h-[39px] items-center gap-2.5 text-center tracking-[-0.16px] justify-center mt-[45px] px-5 py-2.5 max-md:mt-10">
        <span className="self-stretch my-auto">Know More</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/a9cbfb77b9798c0ded2d545fecb5472097859690?placeholderIfAbsent=true"
          className="aspect-[0.95] object-contain w-[18px] self-stretch shrink-0 my-auto"
          alt="Arrow icon"
        />
      </button>
    </div>
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
      name: "Downtown",
      description: "Where the city's strongest train.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/d48ff42668ffc23d434fc0bc8a6ed6dc7d7816d6?placeholderIfAbsent=true",
      name: "Downtown",
      description: "Where the city's strongest train.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/8c2c308a6f96bde4e5777649444dab72fa206cfd?placeholderIfAbsent=true",
      name: "Downtown",
      description: "Where the city's strongest train.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/11b30401a3f97adf4139ded4284f7ae300846457?placeholderIfAbsent=true",
      name: "Downtown",
      description: "Where the city's strongest train.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/cc4f520522728bf02db490a5e4c14f0dd25efbdc?placeholderIfAbsent=true",
      name: "Downtown",
      description: "Where the city's strongest train.",
    },
  ];

  return (
    <section>
      <h2 className="text-[rgba(40,40,40,1)] text-[28px] font-extrabold leading-none tracking-[-0.28px] text-center mt-[53px] max-md:max-w-full max-md:mt-10">
        FIND YOUR STALLION HOME
      </h2>
      <p className="text-[rgba(20,20,20,1)] text-xl font-medium leading-[1.4] mt-3 max-md:max-w-full">
        Six elite facilities across the city – same uncompromising standards.
      </p>

      <div className="w-full max-w-[1289px] mt-[55px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {locations.slice(0, 3).map((location, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <LocationCard
                image={location.image}
                name={location.name}
                description={location.description}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1289px] mt-3 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {locations.slice(3).map((location, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <LocationCard
                image={location.image}
                name={location.name}
                description={location.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
