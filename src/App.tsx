import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import PortfolioGallery from "./components/portfolio/PortfolioGallery";
import AboutSection from "./components/about/AboutSection";
import RoomDesigner from "./components/interactive/RoomDesigner";
import ContactSection from "./components/contact/ContactSection";
import InteriorDesignGallery from "./pages/InteriorDesignGallery";
import Footer from "./components/layout/Footer";
import "./App.css";

// Create a HomePage component that contains all the main sections
const HomePage = () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto">
        <PortfolioGallery />
        <AboutSection />
        <RoomDesigner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

// Create a GalleryPage component that only shows the gallery and footer
const GalleryPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto">
        <InteriorDesignGallery />
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            
              <HomePage />
            
          } />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallary" element={<GalleryPage />} />
          <Route path="/interior-design-gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;