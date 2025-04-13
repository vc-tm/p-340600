
import React from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

interface PartnerLogoProps {
  src: string;
  alt: string;
  width: string;
  delay: number;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt, width, delay }) => {
  return (
    <AnimateOnScroll animation="fadeIn" delay={delay}>
      <motion.div 
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="border flex flex-col items-center justify-center p-8 md:p-12 border-[rgba(141,141,141,1)] border-solid hover:border-[rgba(231,27,75,1)] transition-colors"
      >
        <img
          src={src}
          className={`object-contain ${width}`}
          alt={alt}
        />
      </motion.div>
    </AnimateOnScroll>
  );
};

const Partners: React.FC = () => {
  const partners = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/bed8ff3846e40ef3bca3f297d1c30a909032d1bf?placeholderIfAbsent=true",
      alt: "Partner logo",
      width: "w-[33px]"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/8848b07dff2af56d1a13aa42c2288493793c97f1?placeholderIfAbsent=true",
      alt: "Partner logo",
      width: "w-[120px]"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/664bd600caada0ca4d0a1ce0881e3c8519254951?placeholderIfAbsent=true",
      alt: "Partner logo",
      width: "w-[200px]"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/634f20dc2975f43cf113e7f588884c1dedeeb0ce?placeholderIfAbsent=true",
      alt: "Partner logo",
      width: "w-[73px]"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/b9d260c04dd102217dd143eb1301cd4d34b6c7e0?placeholderIfAbsent=true",
      alt: "Partner logo",
      width: "w-[113px]"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/bb2936c2ef4b67c30a0b9f55aa25a7efedb117b6?placeholderIfAbsent=true",
      alt: "Partner logo",
      width: "w-[116px]"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <AnimateOnScroll animation="slideUp">
        <h2 className="text-[rgba(40,40,40,1)] text-2xl md:text-3xl font-extrabold leading-none tracking-[-0.28px] text-center">
          POWERED BY THE BEST
        </h2>
        <p className="text-[rgba(20,20,20,1)] text-lg md:text-xl font-medium leading-relaxed text-center mt-4 max-w-3xl mx-auto">
          We only work with brands that match our extreme standards.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-16">
        {partners.map((partner, index) => (
          <PartnerLogo 
            key={index}
            src={partner.src}
            alt={partner.alt}
            width={partner.width}
            delay={0.1 * index}
          />
        ))}
      </div>

      <AnimateOnScroll animation="scaleUp" delay={0.3} className="mt-24">
        <div className="bg-[rgba(80,80,80,0.66)] w-full py-8 px-4 md:px-8 rounded-lg overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/4b5bae0975cb03c73e6d6de3955087f732ad8763?placeholderIfAbsent=true"
            className="w-full max-w-5xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            alt="Featured image"
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Partners;
