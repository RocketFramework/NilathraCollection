"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Gem,
    Compass,
    Star,
    Check,
    Hotel,
    Car,
    Shield,
    Sparkles,
    ArrowRight,
    Search,
    MapPin,
    Clock
} from "lucide-react";
import Link from "next/link";
import PlanRequestFormModal from "./PlanRequestFormModal";

export default function LuxuryPlan() {
    const [nights, setNights] = useState(7);
    const [travelers, setTravelers] = useState(2);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const basePrice = 750; // Average of 500-1000
    const total = basePrice * travelers * nights;

    const highlights = [
        { icon: Hotel, text: "5-Star / Signature Luxury Resorts", details: "Hand-picked flagship properties" },
        { icon: Car, text: "Premium SUV / Luxury Van Transport", details: "Land Cruiser or KDH Luxury" },
        { icon: Compass, text: "Expert Naturalist / National Guide", details: "Elite-level destination expertise" },
        { icon: Sparkles, text: "Personalized Itinerary Manager", details: "Dedicated support for every detail" },
        { icon: Shield, text: "VIP Fast-track Arrival", details: "Seamless airport experience" },
        { icon: Star, text: "Daily Spa & Wellness Session", details: "Rejuvenating local treatments" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-amber-200/50"
        >
            {/* Header */}
            <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-24 translate-x-24 blur-3xl" />

                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-white/20">
                            <Sparkles size={12} className="text-amber-300" /> Signature Collection
                        </div>
                        <h2 className="text-5xl font-serif mb-4">Luxury Plan</h2>
                        <p className="text-amber-100/80 max-w-xl text-lg leading-relaxed">
                            Uncompromising excellence in comfort and service. Stay at Sri Lanka's most iconic 5-star establishments with expert guidance.
                        </p>
                    </div>
                    <div className="text-right bg-black/20 p-8 rounded-[2rem] backdrop-blur-md border border-white/10 min-w-[280px]">
                        <div className="text-5xl font-light mb-1 font-serif">${total.toLocaleString()}</div>
                        <p className="text-amber-300 text-sm font-medium">for {nights} nights / {travelers} travelers</p>
                        <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-amber-200/60 text-[10px] uppercase tracking-widest font-bold">Inferred Budget</p>
                            <p className="text-xl font-medium">${basePrice.toLocaleString()}<span className="text-sm opacity-50 ml-1">/day</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-10">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-serif text-amber-900 flex items-center gap-3">
                                <Gem size={24} className="text-amber-600" />
                                Exclusive Inclusions
                            </h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 rounded-[1.5rem] bg-amber-50/30 border border-amber-100 hover:border-amber-200 transition-colors group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-amber-100 transition-colors">
                                            <item.icon size={22} className="text-amber-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-amber-900 text-sm mb-1">{item.text}</h4>
                                            <p className="text-xs text-amber-800/60 leading-relaxed font-medium">{item.details}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12 space-y-6">
                            <div className="p-8 rounded-[2rem] bg-neutral-50 border border-neutral-200">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6 flex items-center gap-2">
                                    <Clock size={16} /> Premium Service Standard
                                </h4>
                                <div className="grid md:grid-cols-2 gap-8 text-sm">
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                                            <p className="text-neutral-600 leading-relaxed"><span className="font-bold text-neutral-800">Expert National Guide:</span> Dedicated specialist throughout your journey with deep cultural knowledge.</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                                            <p className="text-neutral-600 leading-relaxed"><span className="font-bold text-neutral-800">Premium Dining:</span> Curated reservations at signature restaurants and hidden culinary gems.</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                                            <p className="text-neutral-600 leading-relaxed"><span className="font-bold text-neutral-800">Signature Lodging:</span> Top-tier room categories at the island's finest resorts and hotels.</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                                            <p className="text-neutral-600 leading-relaxed"><span className="font-bold text-neutral-800">Concierge Support:</span> Direct access to a dedicated manager for on-trip adjustments and requests.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-amber-50/50 p-8 rounded-[2.5rem] border border-amber-200/50 shadow-inner">
                            <h3 className="text-2xl font-serif text-amber-900 mb-8">Refined Quote</h3>

                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2em] block mb-3 pl-1">Journey Duration</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            min="3"
                                            max="21"
                                            value={nights}
                                            onChange={(e) => setNights(Number(e.target.value))}
                                            className="w-full bg-white border border-amber-200 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-amber-500 outline-none text-amber-900"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-amber-400">NIGHTS</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2em] block mb-3 pl-1">Traveler Count</label>
                                    <div className="relative">
                                        <select
                                            value={travelers}
                                            onChange={(e) => setTravelers(Number(e.target.value))}
                                            className="w-full bg-white border border-amber-200 rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-amber-500 outline-none appearance-none text-amber-900"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                                <option key={n} value={n}>{n} traveler{n > 1 ? 's' : ''}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <ArrowRight size={14} className="text-amber-400 rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-amber-200">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm text-amber-700 font-bold uppercase tracking-wider">Package Total</span>
                                        <span className="text-3xl font-serif text-amber-900">${total.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-amber-600 font-bold bg-amber-100/50 px-3 py-1.5 rounded-lg w-fit">
                                        <Check size={10} /> ALL TAXES & SERVICE CHARGES INCLUDED
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-amber-800 hover:bg-amber-900 text-white py-5 rounded-2xl font-bold uppercase tracking-[0.15em] text-xs transition-all shadow-xl hover:shadow-amber-900/20 active:scale-[0.98]"
                                >
                                    Get Personalized Proposal
                                </button>
                                <PlanRequestFormModal
                                    isOpen={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                    packageName="Luxury"
                                    nights={nights}
                                    travelers={travelers}
                                    totalPrice={total}
                                    ctaText="Get Personalized Proposal"
                                    requestType="package"
                                />
                            </div>
                        </div>

                        <div className="px-6 text-center">
                            <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                                Looking for absolute exclusivity? <br />
                                <Link href="/plans/ultra-vip" className="text-amber-600 hover:underline font-bold">Discover our Ultra VIP tier</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
