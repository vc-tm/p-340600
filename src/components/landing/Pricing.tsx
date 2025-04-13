import React from "react";

interface PricingPlanProps {
  price: string;
  features: string[];
  bestFor: string;
  buttonText: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  price,
  features,
  bestFor,
  buttonText,
}) => {
  return (
    <div className="bg-[rgba(158,158,158,0.13)] border flex w-full flex-col text-xl text-white font-bold leading-[1.4] mx-auto pt-[103px] pb-[29px] px-[29px] rounded-[10px] border-white border-solid max-md:mt-6 max-md:pt-[100px] max-md:px-5">
      <div className="text-5xl font-normal leading-none max-md:text-[40px] max-md:ml-1.5">
        {price}
      </div>
      <div className="border self-stretch shrink-0 h-0 mt-[43px] border-white border-solid max-md:mt-10" />

      {features.map((feature, index) => (
        <div key={index} className="ml-9 mt-[23px] max-md:ml-2.5">
          {feature}
        </div>
      ))}

      <div className="text-2xl leading-none mt-[41px] max-md:mt-10">
        Best for - {bestFor}
      </div>

      <button className="self-stretch bg-[rgba(231,27,75,1)] gap-2.5 mt-[135px] px-[120px] py-2.5 rounded-md max-md:mt-10 max-md:px-5">
        {buttonText}
      </button>
    </div>
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
    <section className="bg-neutral-800 self-stretch flex w-full flex-col items-center mt-[88px] pt-[60px] pb-[199px] px-[70px] max-md:max-w-full max-md:mt-10 max-md:pb-[100px] max-md:px-5">
      <h2 className="text-white text-[28px] font-extrabold leading-none tracking-[-0.28px] text-center max-md:max-w-full">
        INVEST IN YOUR STRONGEST SELF
      </h2>
      <p className="text-white text-xl font-medium leading-[1.4] mt-3 max-md:max-w-full">
        No hidden fees. Cancel anytime. Results guaranteed
      </p>
      <div className="text-white text-[160px] font-extrabold mt-11 max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        PRICING
      </div>

      <div className="self-stretch -mb-10 max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="w-[33%] max-md:w-full max-md:ml-0">
              <PricingPlan
                price={plan.price}
                features={plan.features}
                bestFor={plan.bestFor}
                buttonText={plan.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
