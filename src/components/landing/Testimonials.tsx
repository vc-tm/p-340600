import React from "react";

interface TestimonialCardProps {
  image: string;
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  quote,
  author,
}) => {
  return (
    <div className="border flex w-full flex-col items-stretch pt-[9px] pb-5 px-[11px] border-white border-solid max-md:mt-[26px]">
      <img
        src={image}
        className="aspect-[1.5] object-contain w-full"
        alt="Client testimonial"
      />
      <p className="text-white text-[28px] font-medium leading-[39px] tracking-[-0.28px] mt-[68px] max-md:ml-2 max-md:mr-[9px] max-md:mt-10">
        {quote}
      </p>
      <p className="text-white text-base font-bold tracking-[-0.16px] mt-[15px] max-md:ml-2">
        {author}
      </p>
      <div className="flex items-stretch gap-[13px] ml-[11px] mt-[34px] max-md:ml-2.5">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/697d3907b747ab7915c77d93b5556d93908d74ad?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[18px] shrink-0 rounded-[1px]"
            alt="Star rating"
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/1ac8fd8c2ee19f41cc96269b2328d5bddc24fe7c?placeholderIfAbsent=true",
      quote:
        "Lost 28lbs of fat in 12 weeks. The trainers don't let you cheat – even when you want to.",
      author: "-Paul K",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/d4104e1870789f9d06fcdfc5551e399165244dd6?placeholderIfAbsent=true",
      quote:
        "I went from avoiding the gym to competing in powerlifting. This place changes people.",
      author: "-Tyler",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/294a68cf0e6dde5e52ac42da2dbd1eff8bbe5388?placeholderIfAbsent=true",
      quote:
        "Lost 28lbs of fat in 12 weeks. The trainers don't let you cheat – even when you want to.",
      author: "-Paul K",
    },
  ];

  return (
    <section className="flex flex-col self-stretch relative min-h-[954px] w-full items-stretch justify-center mt-[71px] py-0.5 max-md:max-w-full max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/135c43ada0f0339d9b60e0e1a96e596ac1caab50?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Testimonials background"
      />
      <div className="relative z-10 flex mt-[-5px] w-full flex-col items-center pt-[57px] pb-[189px] max-md:max-w-full max-md:pb-[100px]">
        <h2 className="text-white text-[28px] font-extrabold leading-none tracking-[-0.28px] text-center max-md:max-w-full">
          DON'T TAKE OUR WORD FOR IT
        </h2>
        <p className="text-white text-xl font-medium leading-[1.4] mt-3">
          Hear from the Stallion herd.
        </p>
        <div className="self-stretch flex mb-[-38px] w-full flex-col mt-[17px] px-[79px] max-md:max-w-full max-md:mb-2.5 max-md:px-5">
          <div className="bg-[rgba(231,27,75,1)] text-[28px] text-white font-medium text-center tracking-[-0.28px] leading-none ml-[34px] px-[27px] py-[9px] max-md:ml-2.5 max-md:px-5">
            Client Testimonials
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/1b7e71f2a096f9fc21591973263ee0d6e669a419?placeholderIfAbsent=true"
            className="aspect-[1.18] object-contain w-[13px] ml-[62px] max-md:ml-2.5"
            alt="Arrow icon"
          />
          <div className="self-stretch mt-5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
                  <TestimonialCard
                    image={testimonial.image}
                    quote={testimonial.quote}
                    author={testimonial.author}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
