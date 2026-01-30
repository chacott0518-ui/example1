import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DesignerSection from './components/DesignerSection';
import StyleSection from './components/StyleSection';
import PriceSection from './components/PriceSection';
import ReviewSection from './components/ReviewSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <DesignerSection />
        <StyleSection />
        <PriceSection />
        <ReviewSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;