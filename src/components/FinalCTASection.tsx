"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { formSchema, FormValues } from "@/lib/schema";
import { STATES_LIST } from "@/lib/constants";
import { submitLead } from "@/lib/actions/submit-lead";

export const FinalCTASection: React.FC = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            state: "",
            email: "",
            privacy: false,
        },
    });

    async function onSubmit(values: FormValues) {
        setIsSubmitting(true);
        setError(null);
        try {
            await submitLead(values);
            setIsSuccess(true);
            form.reset();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="legal-form" className="py-24 md:py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-10 leading-[1.1] tracking-tight">
                            Your Business deserves a Foundation of <span className="text-orange-500">Confidence.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-medium">
                            Ready to take the guesswork out of your kitchen? Fill out the form to receive your state's custom 2025 Legal Roadmap instantly.
                        </p>

                        <div className="space-y-6">
                            {[
                                { text: "50-State Interactive Map Access", color: "text-blue-600", bg: "bg-blue-50" },
                                { text: "Label Font & Verbiage Checklist", color: "text-orange-600", bg: "bg-orange-50" },
                                { text: "Revenue Expansion Strategies", color: "text-green-600", bg: "bg-green-50" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                                        <CheckCircle2 className={`w-6 h-6 ${item.color}`} />
                                    </div>
                                    <span className="text-xl font-bold text-gray-800 tracking-tight">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 w-fit">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                <ShieldCheck className="w-7 h-7 text-green-500" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Secure & Private</p>
                                <p className="text-xs font-bold text-gray-400">AES-256 Webhook Encryption Applied</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Form container with glassmorphism */}
                    <div className="absolute -inset-4 bg-orange-500/5 rounded-[3rem] blur-2xl pointer-events-none" />

                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-3xl border border-orange-100 relative z-10 overflow-hidden">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner ring-8 ring-green-50/50">
                                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Roadmap Secured!</h3>
                                    <p className="text-lg text-gray-600 font-medium mb-10 leading-relaxed">
                                        Check your inbox. We've just sent the 2025 Cottage Food Legal Roadmap to your kitchen.
                                    </p>
                                    <Button
                                        onClick={() => setIsSuccess(false)}
                                        variant="ghost"
                                        className="text-orange-600 font-black text-lg hover:bg-orange-50 rounded-xl px-8"
                                    >
                                        Resend to another email?
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="mb-10">
                                        <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Get Your Free Roadmap</h3>
                                        <p className="text-gray-500 font-medium">Join 2,400+ bakers securing their legal future.</p>
                                    </div>

                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem className="space-y-2">
                                                        <FormLabel className="text-sm font-black text-gray-700 uppercase tracking-widest">Full Name</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                placeholder="Jane Baker"
                                                                {...field}
                                                                className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 text-lg px-6"
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="state"
                                                    render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-sm font-black text-gray-700 uppercase tracking-widest">Select State</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white text-lg px-6">
                                                                        <SelectValue placeholder="State" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent className="max-h-60 rounded-xl">
                                                                    {STATES_LIST.map((state) => (
                                                                        <SelectItem key={state} value={state} className="rounded-lg">{state}</SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem className="space-y-2">
                                                            <FormLabel className="text-sm font-black text-gray-700 uppercase tracking-widest">Work Email</FormLabel>
                                                            <FormControl>
                                                                <div className="relative">
                                                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                                                    <Input
                                                                        placeholder="jane@bakery.com"
                                                                        {...field}
                                                                        className="h-14 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white text-lg pl-12 pr-6"
                                                                    />
                                                                </div>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="privacy"
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-row items-center space-x-3 space-y-0 p-5 bg-gray-50 rounded-2xl border border-gray-100/50">
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value}
                                                                onCheckedChange={field.onChange}
                                                                className="w-6 h-6 rounded-lg border-2 border-orange-200 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                                                            />
                                                        </FormControl>
                                                        <div className="space-y-1 leading-none">
                                                            <FormLabel className="text-sm font-bold text-gray-600 leading-snug cursor-pointer">
                                                                I agree to the <span className="text-orange-600 underline">Privacy Policy</span> and consent to receiving the 2025 Legal Roadmap updates.
                                                            </FormLabel>
                                                        </div>
                                                    </FormItem>
                                                )}
                                            />

                                            {error && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start gap-3 text-red-600 text-sm font-bold"
                                                >
                                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                                    <p>{error}</p>
                                                </motion.div>
                                            )}

                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full h-16 rounded-[1.25rem] bg-orange-500 hover:bg-orange-600 text-white font-black text-xl shadow-2xl shadow-orange-500/20 active:scale-95 transition-all group"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                                                        Securing Your Data...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send My Legal Roadmap
                                                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </Button>

                                            <p className="text-center text-xs font-bold text-gray-400 mt-6 tracking-tight">
                                                "Your data is never shared. Unsubscribe with one click anytime."
                                            </p>
                                        </form>
                                    </Form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};