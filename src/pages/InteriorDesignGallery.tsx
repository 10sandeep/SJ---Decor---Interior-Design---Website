import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import RESTRO1 from '../assets/Restaurant 1.jpg'
import RESTRO2 from '../assets/Restaurant 2.jpg'
import RESTRO3 from '../assets/Restaurant 3.jpg'
import RESTRO4 from '../assets/Restaurant 4.jpg'
import RESTRO5 from '../assets/Restaurant 5.jpg'
import RESTRO6 from '../assets/Restaurant 6.jpg'
import RESTRO7 from '../assets/Restaurant 7.jpg'
import RESTRO8 from '../assets/Restaurant 8.jpg'
import RESTRO9 from '../assets/Restaurant 9.jpg'
import RESTRO10 from '../assets/Restaurant 10.jpg'
import MANDAP1 from '../assets/Mandap 1.jpg'
import MANDAP2 from '../assets/Mandap 2.jpg'
import MANDAP3 from '../assets/Mandap 3.jpg'
import MANDAP4 from '../assets/Mandap 4.jpg'
import MANDAP5 from '../assets/Mandap 5.jpg'

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
      imageUrl: RESTRO2,
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
      category: "Restaurant",
      imageUrl: RESTRO6,
      description: "Spa-like bathroom with luxury fixtures and natural stone"
    },
    {
      id: 7,
      title: "Fine Dining Restaurant",
      category: "Restaurant",
      imageUrl: RESTRO7,
      description: "Sophisticated dining space with perfect ambiance"
    },
    {
      id: 8,
      title: "Open Concept Living",
      category: "Restaurant",
      imageUrl: RESTRO8,
      description: "Seamless flow between kitchen, dining and living areas"
    },
    {
      id: 9,
      title: "Home Office",
      category: "Restaurant",
      imageUrl: RESTRO9,
      description: "Functional workspace blending aesthetics and practicality"
    },
    {
      id: 10,
      title: "Modern Workspace",
      category: "Restaurant",
      imageUrl: RESTRO10,
      description: "Contemporary workspace designed for creativity and focus"
    },
    {
        id: 11,
        title: "Marriage Mandap",
        category: "Mandap",
        imageUrl: MANDAP1,
        description: "Contemporary workspace designed for creativity and focus"
      },
      {
        id: 12,
        title: "Marriage Mandap",
        category: "Mandap",
        imageUrl: MANDAP2,
        description: "Contemporary workspace designed for creativity and focus"
      },
      {
        id: 13,
        title: "Marriage Mandap",
        category: "Mandap",
        imageUrl: MANDAP3,
        description: "Contemporary workspace designed for creativity and focus"
      },
      {
        id: 14,
        title: "Marriage Mandap",
        category: "Mandap",
        imageUrl: MANDAP4,
        description: "Contemporary workspace designed for creativity and focus"
      },
      {
        id: 15,
        title: "Marriage Mandap",
        category: "Mandap",
        imageUrl: MANDAP5,
        description: "Contemporary workspace designed for creativity and focus"
      }
  ];

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // State for modal
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Get current projects for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Open modal with selected image
  const openModal = (project: Project) => {
    setSelectedImage(project);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous or next image in modal
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedImage.id);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredProjects[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') navigateImage('prev');
      else if (e.key === 'ArrowRight') navigateImage('next');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedImage]);

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
                  ? 'bg-gradient-to-r from-[#00EEFF] to-[#FF00AA] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(project)}
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
                <button 
                  className="mt-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full py-2 px-4 text-sm font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 delay-150"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(project);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentPage === number
                    ? 'bg-gradient-to-r from-[#00EEFF] to-[#FF00AA] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {number}
              </button>
            ))}
            
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Modal for displaying full image */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          
          {/* Previous button */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          {/* Image container */}
          <div className="max-w-5xl max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              className="w-full h-full object-contain"
            />
            
            {/* Image details */}
            <div className="bg-black/70 text-white p-4">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-1">{selectedImage.description}</p>
            </div>
          </div>
          
          {/* Next button */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default InteriorDesignGallery;