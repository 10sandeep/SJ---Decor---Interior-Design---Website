import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import PortfolioGallery from './components/portfolio/PortfolioGallery';
import AboutSection from './components/about/AboutSection';
import RoomDesigner from './components/interactive/RoomDesigner';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <PortfolioGallery />
          <AboutSection />
          <RoomDesigner />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;