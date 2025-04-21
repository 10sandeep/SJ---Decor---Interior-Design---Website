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

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/gallary" element={<InteriorDesignGallery/>} />
            <Route
              path="/InteriorDesignGallery"
              element={<InteriorDesignGallery />}
            />
          </Routes>
          <main>
            <PortfolioGallery />
            <AboutSection />
            <RoomDesigner />
            <ContactSection />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;






