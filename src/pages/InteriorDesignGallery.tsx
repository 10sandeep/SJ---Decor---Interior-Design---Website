import React, { useState } from 'react';
import RESTRO1 from '../assets/Restaurant 1.jpg'
import RESTRO2 from '../assets/Restaurant 2.jpg'
import RESTRO3 from '../assets/Restaurant 3.jpg'
import RESTRO4 from '../assets/Restaurant 4.jpg'
import RESTRO5 from '../assets/Restaurant 5.jpg'

// Define our project types
interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const InteriorDesignGallery: React.FC = () => {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "residential",
      imageUrl: RESTRO1,
      description: "Contemporary design with clean lines and neutral palette"
    },
    {
      id: 2,
      title: "Luxury Kitchen",
      category: "kitchen",
      imageUrl:RESTRO2,
      description: "High-end finishes with marble countertops and custom cabinetry"
    },
    {
      id: 3,
      title: "Minimalist Bedroom",
      category: "bedroom",
      imageUrl: RESTRO3,
      description: "Tranquil space with essential elements and natural materials"
    },
    {
      id: 4,
      title: "Corporate Office",
      category: "commercial",
      imageUrl: RESTRO4,
      description: "Professional environment optimized for productivity"
    },
    {
      id: 5,
      title: "Boutique Hotel Lobby",
      category: "commercial",
      imageUrl: RESTRO5,
      description: "Elegant entrance with custom furniture and artistic lighting"
    },
    {
      id: 6,
      title: "Bathroom Retreat",
      category: "bathroom",
      imageUrl: "/api/placeholder/800/605",
      description: "Spa-like bathroom with luxury fixtures and natural stone"
    },
    {
      id: 7,
      title: "Fine Dining Restaurant",
      category: "commercial",
      imageUrl: "/api/placeholder/800/606",
      description: "Sophisticated dining space with perfect ambiance"
    },
    {
      id: 8,
      title: "Open Concept Living",
      category: "residential",
      imageUrl: "/api/placeholder/800/607",
      description: "Seamless flow between kitchen, dining and living areas"
    },
    {
      id: 9,
      title: "Home Office",
      category: "workspace",
      imageUrl: "/api/placeholder/800/608",
      description: "Functional workspace blending aesthetics and practicality"
    }
  ];

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Design Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of thoughtfully crafted interior spaces that showcase our dedication to transforming environments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay with Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.description}
                </p>
                <button className="mt-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full py-2 px-4 text-sm font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-150">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignGallery;