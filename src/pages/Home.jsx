import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import VisionSection from '@/components/home/VisionSection';
import StrengthsSection from '@/components/home/StrengthsSection';
import InvestedCompanies from '@/components/home/InvestedCompanies';
import NewsSection from '@/components/home/NewsSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <HeroSection />
      <VisionSection />
      <StrengthsSection />
      <InvestedCompanies />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}