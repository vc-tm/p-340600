
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-900/95 shadow-lg backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/c84269699ab48d84baa13763552394af51b9d992?placeholderIfAbsent=true"
            className="w-[85px] md:w-[100px] lg:w-[125px] object-contain"
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link 
            to="/" 
            className="text-white hover:text-[rgba(231,27,75,1)] transition-colors text-base font-bold"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-[rgba(205,205,205,1)] hover:text-white transition-colors text-base font-bold"
          >
            About us
          </Link>
          <Link 
            to="/programs" 
            className="text-[rgba(205,205,205,1)] hover:text-white transition-colors text-base font-bold"
          >
            Training programs
          </Link>
          <Link 
            to="/branches" 
            className="text-[rgba(205,205,205,1)] hover:text-white transition-colors text-base font-bold"
          >
            Branches
          </Link>
        </div>

        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fea1831d3eb848d2853a0c0f6566ed8c/6ee8c81d7f132bcbe63e60b0c6ff77a12913f18e?placeholderIfAbsent=true"
            className="hidden lg:block w-[85px] md:w-[116px] object-contain mr-6"
            alt="Secondary logo"
          />
          <button className="bg-[rgba(231,27,75,1)] hover:bg-[rgba(231,27,75,0.9)] transition-colors gap-2.5 px-5 py-2.5 text-white font-bold">
            Register now
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="ml-4 text-white md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-neutral-900 border-t border-neutral-800"
        >
          <div className="flex flex-col p-4">
            <Link 
              to="/" 
              className="text-white py-3 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-[rgba(205,205,205,1)] py-3 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link 
              to="/programs" 
              className="text-[rgba(205,205,205,1)] py-3 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Training programs
            </Link>
            <Link 
              to="/branches" 
              className="text-[rgba(205,205,205,1)] py-3 font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Branches
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Header;
