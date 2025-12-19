"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StateFactsSelector } from '@/components/StateFactsSelector';

export const HeroSection: React.FC = () => {
    const scrollToForm = () => {
        document.getElementById('legal-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            {/* Background blobs for depth */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-coral-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-center lg:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur-sm border border-orange-200 px-4 py-1.5 rounded-full text-sm font-bold text-orange-700 uppercase tracking-wider mb-8 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                            New for 2025 Edition
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.05] tracking-tight mb-8">
                            Stop Guessing If Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-coral-500 to-orange-500">Kitchen is Legal.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Navigating the 2025 legislative shifts like <span className="text-gray-900 font-bold border-b-2 border-orange-200">Texas SB 541</span> and the <span className="text-gray-900 font-bold border-b-2 border-orange-200">OBBBA</span> shouldn't feel like guesswork. Access our interactive database to protect your business.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                            <Button
                                onClick={scrollToForm}
                                size="lg"
                                className="h-16 px-10 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all group"
                            >
                                Get My State Roadmap
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <div className="flex flex-col items-center lg:items-start">
                                <div className="flex -space-x-3 mb-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User Avatar" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-50 flex items-center justify-center shadow-sm text-[10px] font-bold text-orange-600">
                                        +2.4k
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-gray-500">Join 2,400+ Bakers using the hub</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="flex-1 relative w-full flex justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                >
                    <div className="relative w-full max-w-[500px]">
                        {/* Background decorative elements */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-400/10 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-[80px]" />

                        {/* Hero Visual Mockup Replacement Component will go here */}
                        <div className="relative z-10">
                            <StateFactsSelector />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};