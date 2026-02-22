"use client";

import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Gem, Star, Shield } from "lucide-react";

interface FormData {
    destinations: string[];
    nights: string;
    travelers: string;
    tier: "VIP" | "Deluxe" | "Standard";
    name: string;
    email: string;
    message: string;
}

export default function CustomPlanPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        destinations: [],
        nights: "",
        travelers: "",
        tier: "Deluxe",
        name: "",
        email: "",
        message: ""
    });

    const destinations = [
        "Sigiriya", "Ella", "Yala", "Galle", "Kandy", "Bentota", "Nuwara Eliya", "Trincomalee", "Colombo"
    ];

    const handleDestClick = (dest: string) => {
        setFormData(prev => ({
            ...prev,
            destinations: prev.destinations.includes(dest)
                ? prev.destinations.filter(d => d !== dest)
                : [...prev.destinations, dest]
        }));
    };

    return (
        <MainLayout>
            <section className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="section-subtitle">Tailored For You</span>
                        <h1 className="section-title">Design Your Experience</h1>
                        <p className="text-brand-charcoal/60 font-light max-w-xl mx-auto italic">
                            "Fill in your preferences, and our expert concierge will craft a personalized itinerary that matches your vision of luxury."
                        </p>
                    </div>

                    <div className="glass-card p-8 md:p-12 rounded-sm border-t-4 border-brand-gold">
                        {/* Steps Indicator */}
                        <div className="flex justify-between mb-12 relative">
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-charcoal/10 -z-10" />
                            {[1, 2, 3].map((s) => (
                                <div
                                    key={s}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg transition-all duration-500 bg-white border ${step >= s ? 'border-brand-gold text-brand-gold shadow-md' : 'border-brand-charcoal/20 text-brand-charcoal/30'}`}
                                >
                                    {s}
                                </div>
                            ))}
                        </div>

                        <form className="space-y-10">
                            {step === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-4">
                                        <label className="flex items-center gap-2 text-brand-green font-serif text-xl">
                                            <MapPin size={20} className="text-brand-gold" /> Where would you like to go?
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {destinations.map(dest => (
                                                <button
                                                    key={dest}
                                                    type="button"
                                                    onClick={() => handleDestClick(dest)}
                                                    className={`px-4 py-3 text-sm rounded-sm transition-all border ${formData.destinations.includes(dest) ? 'bg-brand-green text-white border-brand-green' : 'bg-transparent text-brand-charcoal/70 border-brand-charcoal/10 hover:border-brand-gold'}`}
                                                >
                                                    {dest}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                        <div className="space-y-2">
                                            <label className="text-sm uppercase tracking-widest text-brand-charcoal/50 font-medium">Number of Nights</label>
                                            <input
                                                type="number"
                                                placeholder="e.g. 10"
                                                className="w-full bg-brand-sand/50 border-b border-brand-charcoal/20 p-3 focus:border-brand-gold outline-none transition-colors"
                                                onChange={(e) => setFormData({ ...formData, nights: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm uppercase tracking-widest text-brand-charcoal/50 font-medium">Number of Travelers</label>
                                            <input
                                                type="number"
                                                placeholder="e.g. 2"
                                                className="w-full bg-brand-sand/50 border-b border-brand-charcoal/20 p-3 focus:border-brand-gold outline-none transition-colors"
                                                onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-4 text-center">
                                        <label className="font-serif text-2xl text-brand-green block mb-8">Choose Your Preferred Tier</label>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, tier: 'VIP' })}
                                                className={`p-6 border rounded-sm flex flex-col items-center gap-4 transition-all ${formData.tier === 'VIP' ? 'bg-brand-green border-brand-green text-white shadow-xl scale-105' : 'bg-white border-brand-charcoal/10 text-brand-charcoal hover:border-brand-gold'}`}
                                            >
                                                <Gem size={32} className={formData.tier === 'VIP' ? 'text-brand-gold' : 'text-brand-charcoal/40'} />
                                                <span className="font-serif text-xl">Super VIP</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, tier: 'Deluxe' })}
                                                className={`p-6 border rounded-sm flex flex-col items-center gap-4 transition-all ${formData.tier === 'Deluxe' ? 'bg-brand-green border-brand-green text-white shadow-xl scale-105' : 'bg-white border-brand-charcoal/10 text-brand-charcoal hover:border-brand-gold'}`}
                                            >
                                                <Star size={32} className={formData.tier === 'Deluxe' ? 'text-brand-gold' : 'text-brand-charcoal/40'} />
                                                <span className="font-serif text-xl">Deluxe</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, tier: 'Standard' })}
                                                className={`p-6 border rounded-sm flex flex-col items-center gap-4 transition-all ${formData.tier === 'Standard' ? 'bg-brand-green border-brand-green text-white shadow-xl scale-105' : 'bg-white border-brand-charcoal/10 text-brand-charcoal hover:border-brand-gold'}`}
                                            >
                                                <Shield size={32} className={formData.tier === 'Standard' ? 'text-brand-gold' : 'text-brand-charcoal/40'} />
                                                <span className="font-serif text-xl">Standard</span>
                                            </button>
                                        </div>
                                        <p className="text-brand-gold text-xs uppercase tracking-widest mt-4">Note: You can further customize this in the next step.</p>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-6">
                                        <label className="font-serif text-2xl text-brand-green">Final Details</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <input
                                                type="text"
                                                placeholder="Your Full Name"
                                                className="w-full bg-brand-sand/50 border-b border-brand-charcoal/20 p-3 focus:border-brand-gold outline-none"
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                            <input
                                                type="email"
                                                placeholder="Your Email Address"
                                                className="w-full bg-brand-sand/50 border-b border-brand-charcoal/20 p-3 focus:border-brand-gold outline-none"
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <textarea
                                            placeholder="Additional Preferences (e.g. Dietary requirements, specific interests...)"
                                            rows={4}
                                            className="w-full bg-brand-sand/50 border-b border-brand-charcoal/20 p-3 focus:border-brand-gold outline-none resize-none"
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                </motion.div>
                            )}

                            <div className="flex justify-between pt-10 border-t border-brand-charcoal/5">
                                {step > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step - 1)}
                                        className="text-brand-charcoal/50 hover:text-brand-charcoal transition-colors uppercase tracking-widest text-xs font-bold"
                                    >
                                        Back
                                    </button>
                                )}
                                <div className="ml-auto flex gap-4">
                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={() => setStep(step + 1)}
                                            className="luxury-button !px-12 flex items-center gap-4"
                                        >
                                            Next Step
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="luxury-button !px-12 flex items-center gap-4 bg-brand-gold hover:bg-brand-gold/90"
                                            onClick={() => alert('Consultation Request Sent! Our specialists will contact you shortly.')}
                                        >
                                            Request Consultation <Send size={18} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
