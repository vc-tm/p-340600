
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the email to a backend service
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-neutral-800 w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <AnimateOnScroll animation="slideInLeft">
            <div className="flex flex-col">
              <h3 className="text-white text-2xl md:text-[28px] font-extrabold leading-none tracking-[-0.28px]">
                CONTACT
              </h3>
              <address className="text-white text-base font-normal leading-relaxed tracking-[-0.16px] mt-6 not-italic">
                123 Ironclad Way, Fitness City,
                <br /> FC 10001
              </address>
              <p className="text-white text-base font-normal leading-none tracking-[-0.16px] mt-4">
                (555) 789-4560
              </p>
              <motion.a
                whileHover={{ color: "rgba(231,27,75,1)" }}
                href="mailto:info@stallionxtremefitness.com"
                className="text-neutral-300 text-sm font-normal tracking-[-0.14px] mt-3 transition-colors"
              >
                info@stallionxtremefitness.com
              </motion.a>
              <div className="flex items-center gap-6 mt-6">
                <motion.a 
                  whileHover={{ scale: 1.2, color: "rgba(231,27,75,1)" }}
                  href="https://facebook.com" 
                  aria-label="Facebook"
                  className="text-white hover:text-[rgba(231,27,75,1)] transition-colors"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/2fcdd1b7681bf5d6bdf6fa3bf4dc69efbcbbbee1?placeholderIfAbsent=true"
                    className="w-5 h-auto"
                    alt="Facebook icon"
                  />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, color: "rgba(231,27,75,1)" }}
                  href="https://instagram.com" 
                  aria-label="Instagram"
                  className="text-white hover:text-[rgba(231,27,75,1)] transition-colors"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/bfb3025065bd45daa98c9331e6d293682b4764fc?placeholderIfAbsent=true"
                    className="w-5 h-auto"
                    alt="Instagram icon"
                  />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, color: "rgba(231,27,75,1)" }}
                  href="https://twitter.com" 
                  aria-label="Twitter"
                  className="text-white hover:text-[rgba(231,27,75,1)] transition-colors"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/a9f2c5fa7cb189f4e84ab8e3952811e34bb86be1?placeholderIfAbsent=true"
                    className="w-6 h-auto"
                    alt="Twitter icon"
                  />
                </motion.a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeIn" delay={0.2}>
            <div className="flex flex-col">
              <h3 className="text-white text-2xl md:text-[28px] font-extrabold leading-none tracking-[-0.28px]">
                WE ARE OPEN
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-lg text-white font-medium">Monday - Friday</p>
                  <p className="text-base text-white mt-1">05:00 AM - 09:00 PM</p>
                </div>
                <div>
                  <p className="text-lg text-white font-medium">Saturday - Sunday</p>
                  <p className="text-base text-white mt-1">05:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeIn" delay={0.3}>
            <nav className="flex flex-col">
              <h3 className="text-white text-2xl md:text-[28px] font-extrabold leading-none tracking-[-0.28px]">
                MENU
              </h3>
              <div className="mt-6 flex flex-col space-y-3">
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/" className="text-lg text-white font-medium hover:text-[rgba(231,27,75,1)] transition-colors">
                    Home
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/about" className="text-lg text-white font-medium hover:text-[rgba(231,27,75,1)] transition-colors">
                    About us
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/programs" className="text-lg text-white font-medium hover:text-[rgba(231,27,75,1)] transition-colors">
                    Training Programs
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/branches" className="text-lg text-white font-medium hover:text-[rgba(231,27,75,1)] transition-colors">
                    Branches
                  </Link>
                </motion.div>
              </div>
            </nav>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slideInRight" delay={0.4}>
            <div className="flex flex-col">
              <h3 className="text-white text-2xl md:text-[28px] font-extrabold leading-tight tracking-[-0.28px]">
                SUBSCRIBE TO OUR<br />NEWSLETTER
              </h3>
              <form onSubmit={handleSubscribe} className="mt-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address....."
                  required
                  className="w-full bg-[rgba(124,124,124,0.46)] border text-sm text-white font-medium px-4 py-3 border-white rounded-sm focus:outline-none focus:ring-2 focus:ring-[rgba(231,27,75,1)] transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[rgba(231,27,75,1)] hover:bg-[rgba(231,27,75,0.9)] transition-colors flex items-center justify-center gap-2.5 text-base text-white font-bold text-center tracking-[-0.16px] mt-4 px-5 py-3 rounded-sm"
                >
                  <span>SUBSCRIBE</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/cb1ac531eacb20c4dfd4e5a39cefd480609c80e8?placeholderIfAbsent=true"
                    className="w-[18px] h-auto object-contain"
                    alt="Arrow icon"
                  />
                </motion.button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fadeIn" delay={0.5}>
          <hr className="border-white/20 border-t mt-16" />

          <div className="flex justify-center items-center gap-2 mt-10 text-[rgba(116,116,116,1)] text-base font-bold text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/23fbaa2c68a83b735928a34054671d3b431c9e32?placeholderIfAbsent=true"
              className="w-[13px] h-[13px] object-contain rounded-full"
              alt="Copyright icon"
            />
            <p>2025 Stallionxtreme fitness - All Rights Reserved</p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
};

export default Contact;
