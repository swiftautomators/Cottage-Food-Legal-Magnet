
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ShieldCheck, 
  MapPin, 
  ChefHat, 
  AlertTriangle, 
  ArrowRight, 
  Star,
  CheckCircle2,
  Lock,
  Zap,
  PlayCircle
} from 'lucide-react';
import { StateQuickStats } from './components/StateQuickStats';
import { LegalForm } from './components/LegalForm';

const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden ${className}`}>
    {children}
  </section>
);

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const scrollToForm = () => {
    document.getElementById('legal-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden bg-brand-gradient">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-orange-50/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
              <ChefHat className="text-white w-5 h-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-gray-900">LegalHub <span className="text-orange-500">2025</span></span>
          </div>
          <button 
            onClick={scrollToForm}
            className="hidden md:block bg-orange-50 text-orange-600 font-bold px-5 py-2 rounded-full hover:bg-orange-100 transition-colors"
          >
            Access Database
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <SectionWrapper className="pt-32 md:pt-48 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-extrabold uppercase tracking-widest mb-6">
              New for 2025 Edition
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Stop Guessing If Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-coral-500">Kitchen is Legal.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Navigating the 2025 legislative shifts like <span className="font-bold text-gray-800 italic">Texas SB 541</span> and the <span className="font-bold text-gray-800 italic">OBBBA</span> shouldn't feel like guesswork. Access our interactive database to protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToForm}
                className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-5 rounded-2xl shadow-xl shadow-orange-200 transition-all flex items-center justify-center gap-2 text-lg active:scale-95"
              >
                Get My State Roadmap <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 justify-center lg:justify-start px-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Avatar" />
                  ))}
                </div>
                <span>Join 2,400+ Bakers</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 relative w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-200/50 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl animate-pulse" />
            <StateQuickStats />
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Anxiety Section */}
      <div className="bg-gray-900 py-24 text-white overflow-hidden">
        <SectionWrapper className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="w-12 h-1 bg-orange-500" />
              <span className="text-orange-400 font-bold uppercase tracking-wider">The Problem</span>
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-snug italic text-gray-300 mb-8">
              "It’s exhausting to pour hours into your craft only to fear a cease-and-desist because your label font is too small or your frosting isn't 'shelf-stable' enough."
            </p>
            <p className="text-lg text-gray-400">
              It feels like you’re shouting into a void of outdated blog posts, doesn't it?
            </p>
          </div>

          <div className="flex-1 grid gap-6">
            <h3 className="text-2xl font-bold mb-2">The Risks You're Facing Today:</h3>
            
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Lock className="w-8 h-8 text-orange-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Privacy Vulnerability</h4>
                  <p className="text-gray-400 text-sm">Are you still putting your home address on every cookie box? There are better ways in 2025.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-blue-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Revenue Ceilings</h4>
                  <p className="text-gray-400 text-sm">Did you know Florida just raised its cap to $250k? You might be stopping your growth for no reason.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">The TCS Trap</h4>
                  <p className="text-gray-400 text-sm">Texas now allows refrigerated items—if you know the rules. Are you missing out on the cheesecake market?</p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      {/* Solution Section */}
      <SectionWrapper id="solutions">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Become the professional founder <br/>your business needs.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our 2025 Legal Hub is a <span className="text-orange-600 font-bold italic">"Knowledge Magnet"</span> that translates dense statutes into actionable steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Pet Clauses",
              desc: "The architectural requirements to bake legally with a cat or dog. Specific separation rules by state.",
              icon: ChefHat,
              color: "bg-orange-50 text-orange-600"
            },
            {
              title: "Labeling Matrix",
              desc: "Exact verbiage and font sizes (10pt, 11pt, or 12pt) required for your specific state labels.",
              icon: MapPin,
              color: "bg-blue-50 text-blue-600"
            },
            {
              title: "Privacy Protocol",
              desc: "Step-by-step guide on how to use Registration IDs instead of your home address on public packaging.",
              icon: ShieldCheck,
              color: "bg-green-50 text-green-600"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Video Multimodal Hook Placeholder */}
        <div className="mt-20 bg-orange-50 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-orange-100">
          <div className="flex-1">
            <h3 className="text-3xl font-black text-gray-900 mb-6">Legal Ease in 15 Seconds</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Tired of reading legal documents that look like they were written in the 1700s? Our multimodal approach gives you the "cliff notes" version of your state's laws.
            </p>
            <div className="flex items-center gap-4 text-orange-600 font-bold">
              <PlayCircle className="w-8 h-8" />
              <span>Watch the 2025 Summary</span>
            </div>
          </div>
          <div className="flex-1 w-full max-w-sm">
             <div className="aspect-[9/16] bg-gray-200 rounded-3xl relative overflow-hidden shadow-2xl group cursor-pointer">
                <img src="https://picsum.photos/400/700?cookier" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white">
                  <p className="text-sm font-bold">"Showing confusing documents vs. the simple roadmap"</p>
                </div>
             </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Trust Section (E-E-A-T) */}
      <div className="bg-white border-y border-orange-100 py-24">
        <SectionWrapper className="text-center">
          <div className="inline-flex items-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-10 max-w-4xl mx-auto leading-tight">
            "I spent 40+ hours auditing the 2025 legislative sessions so you don't have to."
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/80/80?expert" className="w-16 h-16 rounded-full border-4 border-orange-100" />
              <div className="text-left">
                <p className="font-bold text-lg">Jordan Wells</p>
                <p className="text-orange-600 text-sm font-semibold">Cottage Food Consultant</p>
              </div>
            </div>
            <div className="h-px w-20 bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-gray-400 font-medium">Featured In:</span>
              <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded font-bold text-sm">r/CookieBusinessHub</span>
              <span className="text-gray-400 font-medium text-sm">Community Authority</span>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Final Action Section */}
      <SectionWrapper id="legal-form" className="relative pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Your Business deserves a Foundation of <span className="text-orange-500">Confidence.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Ready to take the guesswork out of your kitchen? Fill out the form to receive your state's custom 2025 Legal Roadmap instantly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="text-green-500 w-6 h-6" /> 50-State Interactive Map Access
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="text-green-500 w-6 h-6" /> Label Font & Verbiage Checklist
              </div>
              <div className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="text-green-500 w-6 h-6" /> Revenue Expansion Strategies
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <LegalForm />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <ChefHat className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-gray-800">LegalHub 2025</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 CookieCraft AI family. Not legal advice. Consult with a local attorney.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
