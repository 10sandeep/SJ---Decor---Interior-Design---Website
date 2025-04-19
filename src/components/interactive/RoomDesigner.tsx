import React, { useState } from 'react';
import { Sparkles, Download, Heart, RefreshCw } from 'lucide-react';

interface ColorOption {
  id: string;
  name: string;
  value: string;
}

const wallColors: ColorOption[] = [
  { id: 'white', name: 'Ivory White', value: '#f5f5f5' },
  { id: 'beige', name: 'Warm Beige', value: '#e8dacb' },
  { id: 'gray', name: 'Soft Gray', value: '#d0d0d0' },
  { id: 'blue', name: 'French Blue', value: '#b8d8e3' },
  { id: 'green', name: 'Sage Green', value: '#b3c5a3' },
  { id: 'taupe', name: 'Elegant Taupe', value: '#d6ccbd' },
];

const accentColors: ColorOption[] = [
  { id: 'amber', name: 'Amber Gold', value: '#d4a137' },
  { id: 'terracotta', name: 'Terracotta', value: '#c87f62' },
  { id: 'navy', name: 'Deep Navy', value: '#21364f' },
  { id: 'emerald', name: 'Emerald', value: '#50c878' },
  { id: 'burgundy', name: 'Burgundy', value: '#800020' },
  { id: 'olive', name: 'Olive Green', value: '#556b2f' },
];

interface StyleOption {
  id: string;
  name: string;
  image: string;
  filter: string;
  description: string;
}

const roomStyles: StyleOption[] = [
  { 
    id: 'modern', 
    name: 'Modern', 
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    filter: 'contrast(1.05) brightness(1.05)',
    description: 'Clean lines with open spaces and natural light'
  },
  { 
    id: 'minimalist', 
    name: 'Minimalist', 
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    filter: 'brightness(1.1) contrast(0.95)',
    description: 'Simplified elegance with essential elements only'
  },
  { 
    id: 'traditional', 
    name: 'Traditional', 
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    filter: 'saturate(1.1) brightness(0.95)',
    description: 'Classic elements with refined sophistication'
  },
  { 
    id: 'scandinavian', 
    name: 'Scandinavian', 
    image: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    filter: 'brightness(1.15) contrast(0.9)',
    description: 'Light and airy with natural materials'
  },
];

const RoomDesigner: React.FC = () => {
  const [selectedWallColor, setSelectedWallColor] = useState(wallColors[0]);
  const [selectedAccentColor, setSelectedAccentColor] = useState(accentColors[0]);
  const [roomStyle, setRoomStyle] = useState(roomStyles[0]);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Get current style object
  const currentStyle = roomStyles.find(style => style.id === roomStyle.id) || roomStyles[0];
  
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4 tracking-wide">
            VISUALIZE YOUR SPACE
          </span>
          <h2 className="text-4xl font-serif font-bold mb-6 text-gray-800">Design Your Dream Room</h2>
          <p className="text-gray-600 text-lg">
            Explore colors, styles, and finishes to create a space that perfectly reflects your vision
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Room Preview */}
          <div className="lg:col-span-3 order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Room Preview Container */}
              <div 
                className="aspect-[4/3] relative overflow-hidden"
                style={{ backgroundColor: selectedWallColor.value }}
              >
                {/* Room Base Image with dynamic styling */}
                <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply"
                  style={{ 
                    backgroundImage: `url(${currentStyle.image})`,
                    filter: currentStyle.filter
                  }}
                />
                
                {/* Accent Color Elements */}
                <div 
                  className="absolute bottom-20 left-40 w-16 h-40 rounded-lg shadow-lg"
                  style={{ backgroundColor: selectedAccentColor.value, opacity: 0.8 }}
                />
                
                <div 
                  className="absolute top-20 right-40 w-24 h-24 rounded-full shadow-lg"
                  style={{ backgroundColor: selectedAccentColor.value, opacity: 0.7 }}
                />
                
                {/* Style-based Elements */}
                {roomStyle.id === 'modern' && (
                  <div className="absolute bottom-16 right-16 w-32 h-1 bg-white opacity-70"></div>
                )}
                
                {roomStyle.id === 'traditional' && (
                  <div className="absolute top-16 left-16 w-20 h-20 border-2 rounded-full border-amber-200 opacity-40"></div>
                )}
                
                {/* UI Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-lg font-medium">{roomStyle.name} Design</p>
                    <p className="text-white/80 text-sm">{selectedWallColor.name} walls with {selectedAccentColor.name} accents</p>
                  </div>
                </div>
              </div>
              
              {/* Style Thumbnails */}
              <div className="bg-white p-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-gray-800 font-medium">Design Styles</h3>
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)} 
                    className={`flex items-center text-sm ${isFavorite ? 'text-rose-500' : 'text-gray-500'}`}
                  >
                    <Heart size={16} className={`mr-1 ${isFavorite ? 'fill-rose-500' : ''}`} />
                    {isFavorite ? 'Saved' : 'Save'}
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {roomStyles.map((style) => (
                    <button
                      key={style.id}
                      className={`aspect-video rounded-lg overflow-hidden transition-all ${
                        roomStyle.id === style.id ? 'ring-2 ring-amber-500 scale-105' : 'border border-gray-200 hover:shadow-md'
                      }`}
                      onClick={() => setRoomStyle(style)}
                    >
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url(${style.image})`,
                          filter: style.filter
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Controls Panel */}
          <div className="lg:col-span-2 order-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2 flex items-center">
                  <Sparkles size={20} className="mr-2 text-amber-700" />
                  Room Customizer
                </h3>
                <p className="text-gray-600 text-sm">{currentStyle.description}</p>
              </div>
              
              <div className="p-6 space-y-8">
                {/* Wall Color Selection */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-3">
                    Wall Color
                  </label>
                  <div className="grid grid-cols-6 gap-2 mb-4">
                    {wallColors.map((color) => (
                      <button
                        key={color.id}
                        className={`w-10 h-10 rounded-full shadow-sm transition-all ${
                          selectedWallColor.id === color.id 
                            ? 'ring-2 ring-offset-2 ring-amber-700 scale-110' 
                            : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => setSelectedWallColor(color)}
                        aria-label={`Select ${color.name}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    {selectedWallColor.name}
                  </p>
                </div>
                
                {/* Accent Color Selection */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-3">
                    Accent Color
                  </label>
                  <div className="grid grid-cols-6 gap-2 mb-4">
                    {accentColors.map((color) => (
                      <button
                        key={color.id}
                        className={`w-10 h-10 rounded-full shadow-sm transition-all ${
                          selectedAccentColor.id === color.id 
                            ? 'ring-2 ring-offset-2 ring-amber-700 scale-110' 
                            : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => setSelectedAccentColor(color)}
                        aria-label={`Select ${color.name}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    {selectedAccentColor.name}
                  </p>
                </div>
                
                {/* Material Selection */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-3">
                    Featured Materials
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Wood', 'Marble', 'Metal', 'Glass', 'Fabric', 'Leather'].map((material) => (
                      <div 
                        key={material}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-100 cursor-pointer"
                      >
                        <span className="text-sm text-gray-700">{material}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-3">
                <button className="w-full py-3 rounded-lg bg-amber-700 text-white font-medium hover:bg-amber-800 transition-all flex items-center justify-center">
                  <Download size={18} className="mr-2" />
                  Save This Design
                </button>
                
                <button className="w-full py-3 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all flex items-center justify-center">
                  <RefreshCw size={18} className="mr-2" />
                  Try Another Room
                </button>
              </div>
              
              {/* Professional Help */}
              <div className="mx-6 my-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <h4 className="text-amber-800 font-medium mb-1">Need professional guidance?</h4>
                <p className="text-amber-700 text-sm mb-3">Our designers can help bring your vision to life.</p>
                <a href="#contact" className="text-sm text-amber-800 font-medium underline underline-offset-2">
                  Schedule a consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDesigner;