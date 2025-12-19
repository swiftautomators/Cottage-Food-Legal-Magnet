"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, MapPin, ShieldCheck, PlayCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, colorClass, delay }: { icon: any, title: string, desc: string, colorClass: string, delay: number }) => (
    <motion.div
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 hover:shadow-orange-200/20 transition-all flex flex-col"
    >
        <div className={`w-16 h-16 rounded-[1.25rem] ${colorClass} flex items-center justify-center mb-8 shadow-sm`}>
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{title}</h3>
        <p className="text-gray-500 leading-relaxed font-medium">{desc}</p>
    </motion.div>
);

export const SolutionSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                        Become the professional founder <br className="hidden md:block" />
                        your business deserves.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        Our 2025 Legal Hub is a <span className="text-orange-600 font-black italic underline decoration-orange-200 underline-offset-8">"Knowledge Magnet"</span> that translates dense legal statutes into actionable baking steps.
                    </p>
                </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24">
                <FeatureCard
                    icon={ChefHat}
                    title="Pet Clauses"
                    desc="The specific architectural requirements to bake legally with a cat or dog. We break down separation rules by state."
                    colorClass="bg-orange-50 text-orange-600 border border-orange-100"
                    delay={0.1}
                />
                <FeatureCard
                    icon={MapPin}
                    title="Labeling Matrix"
                    desc="Exact verbiage and font sizes (10pt, 11pt, or 12pt) required for your specific state labels. Stop guessing."
                    colorClass="bg-blue-50 text-blue-600 border border-blue-100"
                    delay={0.2}
                />
                <FeatureCard
                    icon={ShieldCheck}
                    title="Privacy Protocol"
                    desc="Step-by-step guide on how to use Registration IDs instead of your home address on public packaging."
                    colorClass="bg-green-50 text-green-600 border border-green-100"
                    delay={0.3}
                />
            </div>

            {/* Multimodal Hook Area */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-orange-50 to-coral-50/30 rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border border-orange-100/50 shadow-inner"
            >
                <div className="flex-1">
                    <div className="inline-block bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-orange-600 uppercase tracking-widest mb-6 border border-orange-100 shadow-sm">
                        Multimodal Learning
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">Legal Ease in 15 Seconds</h3>
                    <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                        Tired of reading legal documents that look like they were written in the 1700s? Our visual approach gives you the <span className="text-orange-600 font-bold">"cliff notes"</span> version of your state's laws.
                    </p>
                    <div className="flex items-center gap-6 group cursor-pointer active:scale-95 transition-all">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl shadow-orange-200/50 group-hover:scale-110 transition-transform">
                            <PlayCircle className="w-10 h-10 text-orange-500 fill-orange-500/10" />
                        </div>
                        <span className="text-lg font-black text-gray-900 border-b-2 border-orange-500 pb-1">Watch the 2025 Transition Summary</span>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-[420px]">
                    <div className="aspect-[9/16] bg-brand-gradient rounded-3xl relative overflow-hidden shadow-3xl group cursor-pointer ring-8 ring-white">
                        <img
                            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90"
                            alt="Cookie Visual"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform shadow-2xl">
                                <PlayCircle className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        <div className="absolute bottom-10 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white transform group-hover:translate-y-[-10px] transition-transform">
                            <p className="text-base font-bold leading-snug">"Showing complex PDF vs. our dynamic Legal Roadmap"</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};