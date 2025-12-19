"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const TrustSection: React.FC = () => {
    return (
        <div className="bg-white border-y border-orange-100 py-24 md:py-32 relative overflow-hidden">
            {/* Decorative geometric patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-1.5 mb-10 bg-orange-50/50 px-6 py-2 rounded-full border border-orange-100 shadow-sm">
                        {[1, 2, 3, 4, 5].map(i => (
                            <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400 drop-shadow-sm" />
                        ))}
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-12 max-w-4xl mx-auto leading-[1.2] tracking-tight">
                        "I spent <span className="text-orange-600">40+ hours</span> auditing the 2025 legislative sessions so you don't have to."
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <div className="absolute inset-0 bg-orange-500 rounded-full blur-[10px] opacity-20" />
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=facearea&facepad=2"
                                    className="w-20 h-20 rounded-full border-4 border-white shadow-xl relative z-10"
                                    alt="Jordan Wells"
                                />
                            </div>
                            <div className="text-left">
                                <p className="font-black text-xl text-gray-900 tracking-tight">Jordan Wells</p>
                                <p className="text-orange-600 text-sm font-extrabold uppercase tracking-widest">Cottage Food Consultant</p>
                            </div>
                        </div>

                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-200 to-transparent hidden md:block" />

                        <div className="flex flex-col items-center md:items-start gap-3">
                            <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Authority Credibility</span>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-50 text-orange-700 px-5 py-2.5 rounded-2xl border border-orange-100 font-black text-sm shadow-sm flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                                    r/CookieBusinessHub
                                </div>
                                <span className="text-gray-500 font-bold text-sm tracking-tight border-b border-dashed border-gray-300">Community Authority</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};