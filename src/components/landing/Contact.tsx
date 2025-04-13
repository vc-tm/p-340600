import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the email to a backend service
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-neutral-800 self-stretch flex w-full flex-col items-stretch pt-[91px] pb-[30px] px-[69px] max-md:max-w-full max-md:px-5">
      <div className="flex gap-5 flex-wrap justify-between max-md:max-w-full max-md:mr-0.5">
        <div className="flex flex-col mt-[11px]">
          <h3 className="text-white text-[28px] font-extrabold leading-none tracking-[-0.28px] text-center">
            CONTACT
          </h3>
          <address className="text-white text-base font-normal leading-[21px] tracking-[-0.16px] self-stretch mt-[22px] not-italic">
            123 Ironclad Way, Fitness City,
            <br /> FC 10001
          </address>
          <p className="text-white text-base font-normal leading-none tracking-[-0.16px] text-center mt-[5px]">
            (555) 789-4560
          </p>
          <a
            href="mailto:info@stallionxtremefitness.com"
            className="text-neutral-300 text-sm font-normal tracking-[-0.14px] self-stretch mt-2 max-md:mr-2.5"
          >
            info@stallionxtremefitness.com
          </a>
          <div className="flex items-stretch gap-[40px_42px] mt-[22px]">
            <a href="https://facebook.com" aria-label="Facebook">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/2fcdd1b7681bf5d6bdf6fa3bf4dc69efbcbbbee1?placeholderIfAbsent=true"
                className="aspect-[0.59] object-contain w-[13px] shrink-0"
                alt="Facebook icon"
              />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/bfb3025065bd45daa98c9331e6d293682b4764fc?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 shrink-0"
                alt="Instagram icon"
              />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/a9f2c5fa7cb189f4e84ab8e3952811e34bb86be1?placeholderIfAbsent=true"
                className="aspect-[1.47] object-contain w-[25px] shrink-0 my-auto"
                alt="Twitter icon"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col text-lg text-white font-medium tracking-[-0.18px] leading-none mt-[11px]">
          <h3 className="text-[28px] font-extrabold leading-none tracking-[-0.28px] text-center self-stretch">
            we are open
          </h3>
          <p className="mt-[17px]">Monday - Friday</p>
          <p className="text-base leading-none tracking-[-0.16px] text-center mt-[5px]">
            05 : 00 AM - 09 : 00 PM
          </p>
          <p className="mt-[15px]">Saturday - Sunday</p>
          <p className="text-base leading-none tracking-[-0.16px] text-center mt-[5px]">
            05 : 00 AM - 06 : 00 PM
          </p>
        </div>

        <nav className="flex flex-col text-lg text-white font-medium tracking-[-0.18px] leading-none mt-[11px]">
          <h3 className="text-[28px] font-extrabold leading-none tracking-[-0.28px] text-center">
            Menu
          </h3>
          <Link to="/" className="mt-[17px]">
            Home
          </Link>
          <Link to="/about" className="mt-1">
            About us
          </Link>
          <Link to="/programs" className="self-stretch mt-1">
            Training Programs
          </Link>
          <Link to="/branches" className="mt-1">
            Branches
          </Link>
        </nav>

        <div className="flex flex-col items-stretch text-white">
          <h3 className="text-[28px] font-extrabold leading-[21px] tracking-[-0.28px]">
            SUBSCRIBE TO OUR
            <br />
            NEWSLETTER
          </h3>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address....."
              required
              className="bg-[rgba(124,124,124,0.46)] border text-sm font-medium text-center tracking-[-0.14px] mt-5 px-4 py-[13px] border-white border-solid max-md:pr-5 w-full"
            />
            <button
              type="submit"
              className="bg-[rgba(231,27,75,1)] flex min-h-[39px] items-center gap-2.5 text-base font-bold whitespace-nowrap text-center tracking-[-0.16px] justify-center mt-[21px] px-5 py-2.5 w-full"
            >
              <span className="self-stretch my-auto">SUBSCRIBE</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/cb1ac531eacb20c4dfd4e5a39cefd480609c80e8?placeholderIfAbsent=true"
                className="aspect-[0.95] object-contain w-[18px] self-stretch shrink-0 my-auto"
                alt="Arrow icon"
              />
            </button>
          </form>
        </div>
      </div>

      <hr className="border-white border-solid mt-[55px] max-md:max-w-full max-md:mt-10" />

      <div className="self-center flex w-[366px] max-w-full items-stretch gap-[9px] text-base text-[rgba(116,116,116,1)] font-bold text-center tracking-[-0.16px] mt-[52px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/23fbaa2c68a83b735928a34054671d3b431c9e32?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[13px] shrink-0 my-auto rounded-[50%]"
          alt="Copyright icon"
        />
        <p className="grow shrink w-[341px] basis-auto">
          2025 Stallionxtreme fitness - All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Contact;
