"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Lock, AlertTriangle } from 'lucide-react';

const RiskCard = ({ icon: Icon, title, desc, colorClass, delay }: { icon: any, title: string, desc: string, colorClass: string, delay: number }) => (
    <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="bg-gray-800/40 p-8 rounded-[2rem] border border-gray-700/50 hover:border-orange-500/30 transition-all group backdrop-blur-sm"
    >
        <div className={`w-14 h-14 rounded-2xl ${colorClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
            <Icon className="w-8 h-8" />
        </div>
        <h4 className="font-bold text-xl text-white mb-3 tracking-tight">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

export const AnxietySection: React.FC = () => {
    return (
        <div className="bg-[#0B0F1A] py-24 md:py-32 text-white relative overflow-hidden">
            {/* Subtle light leak */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center relative z-10">
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-8 flex items-center gap-4">
                            <div className="w-12 h-1.5 bg-orange-500 rounded-full" />
                            <span className="text-orange-500 font-black uppercase tracking-[0.2em] text-sm">The Problem</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-10 text-gray-100">
                            "It’s exhausting to pour hours into your craft only to fear a cease-and-desist because your label font is too small or your frosting isn't 'shelf-stable' enough."
                        </h2>

                        <p className="text-xl text-gray-400 font-medium italic border-l-4 border-gray-800 pl-6 py-2">
                            It feels like you’re shouting into a void of outdated blog posts, doesn't it?
                        </p>
                    </motion.div>
                </div>

                <div className="flex-1 w-full flex flex-col gap-6">
                    <h3 className="text-2xl font-bold mb-4 text-orange-100 flex items-center gap-3">
                        <ShieldAlert className="w-6 h-6 text-orange-500" />
                        The Risks You're Facing Today:
                    </h3>

                    <div className="grid gap-6">
                        <RiskCard
                            icon={Lock}
                            title="Privacy Vulnerability"
                            desc="Are you still putting your home address on every cookie box? There are better ways in 2025 to shield your family."
                            colorClass="bg-orange-500/10 text-orange-500"
                            delay={0.1}
                        />

                        <RiskCard
                            icon={Zap}
                            title="Revenue Ceilings"
                            desc="Did you know Florida just raised its cap to $250k? You might be stopping your growth for no reason based on old data."
                            colorClass="bg-blue-500/10 text-blue-500"
                            delay={0.2}
                        />

                        <RiskCard
                            icon={AlertTriangle}
                            title="The TCS Trap"
                            desc="Texas now allows refrigerated items—if you know the specific rules. Are you missing out on the massive cheesecake market?"
                            colorClass="bg-red-500/10 text-red-500"
                            delay={0.3}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};