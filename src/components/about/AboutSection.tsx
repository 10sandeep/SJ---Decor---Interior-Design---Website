import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Spaces Transformed", value: "120+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Design Awards", value: "15+" },
  { label: "Years of Expertise", value: "12+" },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative max-w-[640px] w-full overflow-hidden shadow-2xl transition-all duration-500">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/3379937/pexels-photo-3379937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Elegant Interior Design"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating Detail Images */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Detail Shot" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Detail Shot" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1 mb-5 rounded-full bg-amber-100 text-amber-800 text-sm font-medium tracking-wide">
              Our Story
            </span>

            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 leading-tight">
              Where Vision Meets <span className="italic text-amber-700">Craftsmanship</span>
            </h2>

            <p className="text-gray-700 mb-5 text-lg leading-relaxed">
              At <strong className="text-amber-800">Elegant Spaces</strong>, we believe your home should tell your story. Our award-winning design team transforms ordinary spaces into extraordinary experiences that reflect your personality, enhance your lifestyle, and stand the test of time.
            </p>

            <p className="text-gray-700 mb-10 text-lg leading-relaxed">
              From concept to completion, we balance artistic vision with meticulous attention to detail. Every material is thoughtfully selected, every proportion carefully considered, and every element harmoniously integrated to create spaces that feel both inspiring and intimately yours.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                  className="p-5 rounded-xl bg-white shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="text-3xl font-serif font-bold text-amber-800 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 15px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="px-8 py-3 rounded-full bg-amber-700 hover:bg-amber-800 text-white font-medium shadow-md tracking-wide transition-all duration-300"
            >
              Explore Our Portfolio
            </motion.button>
            
            {/* Design Philosophy */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-800">Our Design Philosophy</h3>
              <div className="flex flex-wrap gap-3">
                {["Timeless Elegance", "Thoughtful Innovation", "Sustainable Materials", "Functional Beauty"].map((tag, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;