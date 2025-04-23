import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "../ui/NavLink";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if current page is gallery
  const isGalleryPage = location.pathname === "/gallary";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Creating a common class for both Link and NavLink components
  const linkClass =
    "text-gray-300 hover:text-white relative px-2 py-1 transition-all duration-300 group";

  // Determine if header should have dark background (scrolled or gallery page)
  const shouldHaveDarkBackground = isScrolled || isGalleryPage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldHaveDarkBackground
          ? "bg-black/80 backdrop-blur-lg py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00EEFF] to-[#FF00AA] text-transparent bg-clip-text">
              SJ
            </span>
            <span className="ml-2 text-white text-xl">DECOR</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass}>
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00EEFF] to-[#FF00AA] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Link to="/gallary" className={linkClass}>
              <span className="relative z-10">Gallery</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00EEFF] to-[#FF00AA] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-white transition-all duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl py-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-4 px-8">
            <Link
              to="/"
              className={linkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00EEFF] to-[#FF00AA] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <NavLink
              href="#portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
            <Link
              to="/gallary"
              className={linkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Gallery</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00EEFF] to-[#FF00AA] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
