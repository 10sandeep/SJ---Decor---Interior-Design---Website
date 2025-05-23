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

import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

// CloudinaryImage component
const CloudinaryImage = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dd80og2rl" } });

  const img = cld
    .image("cld-sample-5")
    .format("auto")
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return <AdvancedImage cldImg={img} />;
};

// Home page component
const HomePage = () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto">
        <PortfolioGallery />
        <AboutSection />
        <RoomDesigner />
        <CloudinaryImage /> {/* Integrated Cloudinary image here */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

// Gallery page component
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

// App component
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallary" element={<GalleryPage />} />
          <Route path="/interior-design-gallery" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
