"use client";

import React from 'react';
import { ChefHat, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
    const scrollToForm = () => {
        document.getElementById('legal-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-2xl border-b border-orange-50/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:rotate-12 transition-transform">
                        <ChefHat className="text-white w-6 h-6" />
                    </div>
                    <span className="font-black text-2xl tracking-tight text-gray-900">
                        LegalHub <span className="text-orange-500">2025</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    <a href="#solutions" className="text-sm font-black text-gray-500 hover:text-orange-500 tracking-widest uppercase transition-colors">Inside</a>
                    <Button
                        onClick={scrollToForm}
                        className="bg-orange-50 text-orange-600 font-black px-6 py-6 rounded-2xl hover:bg-orange-100 border border-orange-100 shadow-sm transition-all"
                    >
                        Access Database
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-gray-50 py-20 px-6 border-t border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm">
                            <ChefHat className="text-white w-5 h-5" />
                        </div>
                        <span className="font-black text-xl text-gray-900">LegalHub 2025</span>
                    </div>
                    <p className="text-gray-500 font-medium max-w-sm mb-8 leading-relaxed">
                        Empowering home-based food founders to build professional, compliant, and thriving businesses through clarity and confidence.
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <Globe className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="text-sm font-black text-gray-900 uppercase tracking-widest">Global Cookie Compliance</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-6">Legal</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-all font-bold text-sm">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-all font-bold text-sm">Terms of Use</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-all font-bold text-sm">Cookie Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-6">Resources</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-all font-bold text-sm">Label Database</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-all font-bold text-sm">2025 Updates</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-orange-500 transition-all font-bold text-sm">Support Hub</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-gray-100">
                <p className="text-gray-400 text-sm font-medium italic">
                    © 2025 CookieCraft AI. Not legal advice. Consult with a professional attorney.
                </p>
                <div className="flex gap-10">
                    <span className="text-gray-400 font-black text-xs uppercase tracking-[0.2em] border-b-2 border-orange-500/20 pb-1">Built for Bakers</span>
                </div>
            </div>
        </footer>
    );
};