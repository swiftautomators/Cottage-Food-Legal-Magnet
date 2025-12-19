"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { AnxietySection } from '@/components/AnxietySection';
import { SolutionSection } from '@/components/SolutionSection';
import { TrustSection } from '@/components/TrustSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Navbar, Footer } from '@/components/Navigation';

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <HeroSection />

      <div id="solutions">
        <AnxietySection />
        <SolutionSection />
      </div>

      <TrustSection />

      <FinalCTASection />

      <Footer />
    </main>
  );
}