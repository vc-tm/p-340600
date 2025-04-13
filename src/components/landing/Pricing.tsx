
import React from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

interface PricingPlanProps {
  price: string;
  features: string[];
  bestFor: string;
  buttonText: string;
  index: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  price,
  features,
  bestFor,
  buttonText,
  index
}) => {
  return (
    <AnimateOnScroll animation="slideUp" delay={0.2 * index}>
      <motion.div 
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-[rgba(158,158,158,0.13)] border h-full flex flex-col text-xl text-white font-bold leading-relaxed mx-auto pt-16 pb-8 px-8 rounded-xl border-white border-solid shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="text-4xl md:text-5xl font-normal leading-none">
          {price}
        </div>
        <div className="border-t w-full my-8 border-white border-solid" />

        <ul className="space-y-5 flex-grow">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <svg
                className="w-5 h-5 text-[rgba(231,27,75,1)] mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {feature}
            </motion.li>
          ))}
        </ul>

        <div className="text-2xl mt-8">
          Best for - {bestFor}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 self-stretch bg-[rgba(231,27,75,1)] hover:bg-[rgba(231,27,75,0.9)] transition-colors gap-2.5 py-3 px-8 rounded-md text-center font-bold"
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </AnimateOnScroll>
  );
};

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      price: "₹ 1500/month",
      features: [
        "24/7 Gym Access",
        "Premium Equipment",
        "Free Wi-Fi & Charging Stations",
        "Locker Rentals",
        "Discounts",
      ],
      bestFor: "Casual Lifters",
      buttonText: "Start Lifting",
    },
    {
      price: "₹ 2000/month",
      features: [
        "Unlimited Group Classes",
        "2 Guest Passes/Month",
        "Advanced Analytics",
        "Recovery Lounge Access",
        "Priority Equipment Booking",
      ],
      bestFor: "Fitness Enthusiasts",
      buttonText: "Join Classes",
    },
    {
      price: "₹ 2500/month",
      features: [
        "Meal Planning",
        "Injury Prevention Screenings",
        "24/7 Coach Chat",
        "Elite Athlete Perks",
      ],
      bestFor: "Competitive Athletes",
      buttonText: "Go Elite",
    },
  ];

  return (
    <section className="bg-neutral-800 w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeIn">
          <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-none tracking-[-0.28px] text-center">
            INVEST IN YOUR STRONGEST SELF
          </h2>
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed text-center mt-4 max-w-2xl mx-auto">
            No hidden fees. Cancel anytime. Results guaranteed
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scaleUp" delay={0.3}>
          <div className="relative">
            <div className="text-white text-6xl md:text-8xl lg:text-[160px] font-extrabold text-center my-16 opacity-60">
              PRICING
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingPlan
              key={index}
              price={plan.price}
              features={plan.features}
              bestFor={plan.bestFor}
              buttonText={plan.buttonText}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
