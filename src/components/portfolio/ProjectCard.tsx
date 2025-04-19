import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 group hover:scale-[1.03] hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="aspect-[4/5] overflow-hidden rounded-2xl">
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Content Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 backdrop-blur-xl bg-white/10 border-t border-white/10 rounded-b-2xl transform transition-all duration-500 z-20 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-semibold text-white leading-tight drop-shadow-md">
            {project.title}
          </h3>
          <span className="p-2 rounded-full bg-white/10 text-white shadow-sm hover:bg-white/20 transition">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#00EEFF]/20 text-[#00EEFF] text-xs font-semibold tracking-wide uppercase">
            {project.category}
          </span>

          <button className="text-sm text-white/80 hover:text-white transition-colors font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
