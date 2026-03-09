"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Gem,
    Compass,
    Coffee,
    Camera,
    Map,
    Calendar,
    Check,
    Hotel,
    Utensils,
    Star,
    Car,
    Wifi,
    Shield,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import PlanRequestFormModal from "./PlanRequestFormModal";

export default function PremiumPlan() {
    const [nights, setNights] = useState(7);
    const [travelers, setTravelers] = useState(2);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const basePrice = 275; // Average of 150-400
    const total = basePrice * travelers * nights;

    const highlights = [
        { icon: Gem, text: "4-Star / Boutique Collection Selection" },
        { icon: Hotel, text: "Heritage properties & refined atmosphere" },
        { icon: Compass, text: "Professional Chauffeur Guide (English)" },
        { icon: Camera, text: "Curated cultural & local experiences" },
        { icon: Coffee, text: "Gourmet culinary journeys & welcome gift" },
        { icon: Shield, text: "Standard VIP arrival assistance" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-200"
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-logo-blue to-blue-900 p-8 text-white">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Gem size={28} className="text-blue-200" />
                            <span className="text-blue-200 text-sm uppercase tracking-widest font-bold">Refined Style</span>
                        </div>
                        <h2 className="text-4xl font-serif mb-2">Premium Plan</h2>
                        <p className="text-blue-100 max-w-xl">
                            A sophisticated balance of comfort, heritage, and contemporary Sri Lankan style. Boutique gems and personalized service throughout.
                        </p>
                    </div>
                    <div className="text-right bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                        <div className="text-4xl font-light mb-1">${total.toLocaleString()}</div>
                        <p className="text-blue-200 text-sm">for {nights} nights / {travelers} travelers</p>
                        <p className="text-blue-200 text-xs mt-2 pt-2 border-t border-white/10">(${basePrice.toLocaleString()} avg. per person/day)</p>
                    </div>
                </div>
            </div>

            <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-serif text-logo-blue mb-6 flex items-center gap-2">
                            <Star size={20} className="text-blue-500" />
                            Premium Inclusions
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100"
                                >
                                    <div className="p-2.5 bg-white rounded-xl shadow-sm">
                                        <item.icon size={20} className="text-logo-blue" />
                                    </div>
                                    <span className="text-sm font-medium text-logo-blue/90 pt-1 leading-relaxed">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10 grid md:grid-cols-2 gap-8">
                            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                                <h4 className="font-bold text-neutral-800 mb-3 text-xs uppercase tracking-widest">Transport & Service</h4>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    Travel in style in a luxury sedan or SUV with a dedicated English-speaking chauffeur guide. Your guide is an expert in local culture and history, ensuring a rich, immersive experience.
                                </p>
                            </div>
                            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                                <h4 className="font-bold text-neutral-800 mb-3 text-xs uppercase tracking-widest">Accommodation</h4>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    Our Premium Collection features boutique hotels and restored heritage properties that offer character, intimacy, and high-end modern amenities in exceptional locations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-blue-50 p-6 rounded-3xl border border-blue-200 shadow-inner">
                            <h3 className="text-lg font-serif text-blue-900 mb-6">Personalized Quote</h3>

                            <div className="space-y-5">
                                <div>
                                    <label className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">Duration (Nights)</label>
                                    <input
                                        type="number"
                                        min="3"
                                        max="21"
                                        value={nights}
                                        onChange={(e) => setNights(Number(e.target.value))}
                                        className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-blue-700 uppercase tracking-widest block mb-2">Travelers</label>
                                    <select
                                        value={travelers}
                                        onChange={(e) => setTravelers(Number(e.target.value))}
                                        className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none appearance-none"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                            <option key={n} value={n}>{n} traveler{n > 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="pt-6 border-t border-blue-200">
                                    <div className="flex justify-between items-end mb-1">
                                        <span className="text-sm text-blue-700 font-medium">Estimated Total:</span>
                                        <span className="text-2xl font-serif text-blue-900">${total.toLocaleString()}</span>
                                    </div>
                                    <p className="text-[10px] text-blue-600 italic">
                                        *Price includes all taxes and service charges.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-logo-blue hover:bg-logo-blue/90 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-md active:scale-95"
                                >
                                    GET PERSONALIZED QUOTE
                                </button>
                                <PlanRequestFormModal
                                    isOpen={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                    packageName="Premium"
                                    nights={nights}
                                    travelers={travelers}
                                    totalPrice={total}
                                    ctaText="GET PERSONALIZED QUOTE"
                                />
                            </div>
                        </div>

                        <Link href="/plans/compare" className="flex items-center justify-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors font-medium py-2">
                            Compare all plans <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
