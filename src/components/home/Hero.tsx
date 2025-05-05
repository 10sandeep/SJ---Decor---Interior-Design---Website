import React, { useEffect, useRef } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.backgroundPosition = `${50 + moveX * 0.5}% ${
        50 + moveY * 0.5
      }%`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector("#portfolio");
    if (portfolioSection) {
      window.scrollTo({
        top:
          portfolioSection.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };
  
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      window.scrollTo({
        top:
          contactSection.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
  };

  const openWhatsApp = () => {
    // Note: Remove the "+" symbol from the beginning of your number
    const yourWhatsAppNumber = "918456834944";
    
    // Open WhatsApp chat directly with your number
    window.open(`https://wa.me/${yourWhatsAppNumber}`, "_blank");
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-white">Designing</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
              The Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Creating spaces that inspire, transform, and elevate your lifestyle
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={scrollToPortfolio}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Portfolio
            </button>
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 backdrop-blur-lg text-white font-medium transform hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <button
          onClick={scrollToPortfolio}
          className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Scroll down"
        >
          <span className="mb-2 text-sm font-light">Scroll Down</span>
          <ChevronDown size={24} />
        </button>
      </div>

      {/* WhatsApp Fixed Button - Direct chat */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </section>
  );
};

export default Hero;