"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, ArrowRight } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { STATE_LEGAL_DATA, STATES_LIST } from "@/lib/constants";

export const StateFactsSelector = () => {
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const data = selectedState ? STATE_LEGAL_DATA[selectedState] || STATE_LEGAL_DATA["Other"] : null;

    return (
        <div className="w-full max-w-sm mx-auto lg:mx-0">
            <Card className="p-6 bg-white/40 backdrop-blur-2xl border-white/60 shadow-3xl rounded-[2rem] overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <MapPin className="w-20 h-20 text-orange-500" />
                </div>

                <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Quick 2025 State Stat</label>

                <Select onValueChange={(val) => setSelectedState(val)}>
                    <SelectTrigger className="h-12 rounded-xl border-gray-100 bg-white/60 text-base font-bold px-4 mb-6 shadow-sm">
                        <SelectValue placeholder="Check your state..." />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 rounded-xl">
                        {STATES_LIST.map((state) => (
                            <SelectItem key={state} value={state} className="font-medium">{state}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <AnimatePresence mode="wait">
                    {data ? (
                        <motion.div
                            key={selectedState}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-4"
                        >
                            <div className="flex justify-between items-center border-b border-gray-100/50 pb-3">
                                <span className="text-sm font-bold text-gray-500">Revenue Cap</span>
                                <span className="text-base font-black text-gray-900">{data.cap}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100/50 pb-3">
                                <span className="text-sm font-bold text-gray-500">Privacy Rank</span>
                                <span className={`text-xs font-black uppercase px-2 py-0.5 rounded ${data.privacy === 'Highly Protected' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                    {data.privacy}
                                </span>
                            </div>
                            <div className="p-3 bg-orange-50/50 rounded-xl border border-orange-100/50">
                                <div className="flex gap-2 items-start">
                                    <Info className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                                    <p className="text-xs font-bold text-orange-700 leading-snug">
                                        {data.refrigeration}
                                    </p>
                                </div>
                            </div>

                            <motion.button
                                onClick={() => document.getElementById('legal-form')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 text-white rounded-xl font-black text-sm shadow-lg shadow-orange-500/20"
                            >
                                View Full {selectedState} Roadmap
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-6"
                        >
                            <p className="text-sm font-bold text-gray-400 italic">Select a state to see "Zero-Click" value.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </div>
    );
};