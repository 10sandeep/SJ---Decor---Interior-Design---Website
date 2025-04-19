import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/10 py-12 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-xl font-bold bg-gradient-to-r from-[#00EEFF] to-[#FF00AA] text-transparent bg-clip-text">
                SJ
              </span>
              <span className="ml-1 text-black text-lg">DECOR</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              Creating visionary interior spaces that transform how people live, work, and experience their surroundings.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-black text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-600 hover:text-black transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors text-sm">Portfolio</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-black transition-colors text-sm">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-black text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Residential Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Commercial Spaces</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Space Planning</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">3D Visualization</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Furniture Design</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-black text-lg font-medium mb-6">Join Our Newsletter</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to get design inspiration and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-black text-sm focus:ring-2 focus:ring-[#00EEFF] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-gradient-to-r from-[#00EEFF] to-[#FF00AA] text-white text-sm font-medium hover:opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SJ DECOR. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
