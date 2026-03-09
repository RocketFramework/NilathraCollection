"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Crown,
    Check,
    X,
    Info,
    ArrowRight,
    Star,
    Sparkles,
    ShieldCheck,
    Gem,
    Plane,
    Map,
    Car,
    Users,
    Clock,
    Heart
} from "lucide-react";
import PlanRequestFormModal from "./PlanRequestFormModal";
import Link from "next/link";

export default function UltraVIPPlan() {
    const [showBreakdown, setShowBreakdown] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nights, setNights] = useState(7);
    const [travelers, setTravelers] = useState(2);

    const nightRatePerPerson = 7500; // mid range of 5000-10000
    const total = nightRatePerPerson * nights * travelers;

    const pricing = {
        total: total,
        perNight: nightRatePerPerson,
        breakdown: {
            accommodation: 4500 * nights * Math.ceil(travelers / 2),
            meals: 800 * travelers * nights,
            transport: 1200 * nights, // private jets/helis
            guide: 500 * nights,
            experiences: 1000 * travelers,
            taxes: 0
        }
    };

    const subtotal = pricing.breakdown.accommodation + pricing.breakdown.meals + pricing.breakdown.transport + pricing.breakdown.guide + (pricing.breakdown.experiences * travelers);
    pricing.breakdown.taxes = total - subtotal;

    const inclusions = [
        {
            category: "Accommodation",
            icon: Crown,
            items: [
                "Ultra-Luxury Villas / Private Estates (Buyout option)",
                "Presidential Suites at Flagship Resorts",
                "Dedicated Private Staff (Butlers & Valets)",
                "Daily Spa & Holistic Wellness within suite"
            ]
        },
        {
            category: "Marine & Aerial",
            icon: Plane,
            items: [
                "Private Jet Service (Domestic & Regional)",
                "Helicopter Transfers between all locations",
                "Luxury Yacht Charter (Private Crewed Experience)",
                "VIP Airport Fast-track (Terminal to Tarmac)"
            ]
        },
        {
            category: "Elite Service Team",
            icon: ShieldCheck,
            items: [
                "Elite Guide Team (Multiple Subject Experts)",
                "24/7 Personal Concierge & Lifestyle Manager",
                "Private Chef & Dedicated Waitstaff",
                "End-to-End White Glove Handling"
            ]
        },
        {
            category: "Exclusivity",
            icon: Gem,
            items: [
                "Money-can't-buy Experiences & Private Access",
                "Exclusive After-hours Monument Access",
                "Private Dining in Extraordinary Locations",
                "Custom-crafted Curated Amenities"
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-neutral-950 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(251,191,36,0.1)] border border-amber-900/30 text-amber-50"
        >
            {/* Super VIP Header */}
            <div className="relative h-[600px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070')] bg-cover bg-center opacity-40 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-10">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 px-6 py-2 bg-amber-500/10 rounded-full border border-amber-500/30 backdrop-blur-md mb-8"
                    >
                        <Crown size={20} className="text-amber-500" />
                        <span className="text-amber-500 text-xs font-black uppercase tracking-[0.4em]">The Ultimate Experience</span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-7xl md:text-8xl font-serif text-white mb-6 tracking-tight"
                    >
                        Ultra VIP
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-amber-100/60 max-w-2xl text-xl leading-relaxed mb-12"
                    >
                        Reserved for the world's most discerning travelers.
                        A realm of absolute privacy, bespoke luxury, and peerless service.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:px-12 md:py-10 shadow-2xl">
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-amber-500/60 font-black mb-2">Starting Quote</p>
                                    <div className="text-6xl font-serif text-white tracking-widest leading-none">
                                        ${total.toLocaleString()}
                                    </div>
                                    <p className="text-amber-100/40 text-xs mt-3 font-medium uppercase tracking-widest">
                                        {nights} Nights · {travelers} Travelers
                                    </p>
                                </div>
                                <div className="h-20 w-px bg-white/10 hidden md:block" />
                                <div className="text-center md:text-left">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-amber-500/60 font-black mb-2">Daily Allocation</p>
                                    <div className="text-4xl font-serif text-amber-500 leading-none">
                                        ${nightRatePerPerson.toLocaleString()}
                                    </div>
                                    <p className="text-amber-100/40 text-xs mt-3 font-medium uppercase tracking-widest">
                                        Per Person / Per Day
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 py-24 md:px-12">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    {/* Left: Philosophy & Breakdown */}
                    <div className="space-y-16">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif text-white">The White Glove Standard</h2>
                            <p className="text-amber-100/60 text-lg leading-relaxed">
                                Our Ultra VIP tier is not just a package; it's a dedicated architecture of luxury.
                                We rebuild every aspect of the journey to ensure total seclusion, absolute flexibility,
                                and experiences that are literally impossible to access otherwise.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <h3 className="text-xl font-serif text-amber-500">Service Breakdown</h3>
                                <button
                                    onClick={() => setShowBreakdown(!showBreakdown)}
                                    className="text-[10px] font-black uppercase tracking-widest text-amber-100/40 hover:text-amber-500 transition-colors"
                                >
                                    {showBreakdown ? "Hide Details" : "Reveal Pricing"}
                                </button>
                            </div>

                            <AnimatePresence>
                                {showBreakdown && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden space-y-4"
                                    >
                                        <div className="grid gap-4 text-sm font-medium">
                                            {[
                                                { label: "Elite Accommodation & Butlers", value: pricing.breakdown.accommodation },
                                                { label: "Private Aviation (Jets/Helis)", value: pricing.breakdown.transport },
                                                { label: "Bespoke Culinary Management", value: pricing.breakdown.meals },
                                                { label: "Specialist Guide & Concierge Team", value: pricing.breakdown.guide },
                                                { label: "One-of-a-kind Experiences", value: pricing.breakdown.experiences * travelers },
                                                { label: "Regulatory Fees & White-Glove Tax", value: pricing.breakdown.taxes },
                                            ].map((item, i) => (
                                                <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 hover:bg-white/5 transition-colors px-4 rounded-lg">
                                                    <span className="text-amber-100/60 tracking-wide">{item.label}</span>
                                                    <span className="text-amber-500 font-serif text-lg tracking-widest">${item.value.toLocaleString()}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="p-4 bg-amber-500/5 rounded-[2rem] border border-amber-500/10">
                                    <Users size={32} className="text-amber-500 mb-4" />
                                    <h4 className="font-serif text-xl text-white">Privacy First</h4>
                                    <p className="text-xs text-amber-100/40 leading-relaxed font-medium">Full NDA compliance and absolute anonymity for high-profile clients.</p>
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="p-4 bg-amber-500/5 rounded-[2rem] border border-amber-500/10">
                                    <Sparkles size={32} className="text-amber-500 mb-4" />
                                    <h4 className="font-serif text-xl text-white">Impossible Access</h4>
                                    <p className="text-xs text-amber-100/40 leading-relaxed font-medium">We open doors to private collections, remote sites, and sacred spaces.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Inclusions & Quote */}
                    <div className="space-y-12">
                        <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-12 space-y-12">
                            {inclusions.map((section, idx) => (
                                <div key={idx} className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                                            <section.icon size={24} className="text-amber-500" />
                                        </div>
                                        <h3 className="text-xl font-serif text-white">{section.category}</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500/40 shrink-0" />
                                                <span className="text-sm font-medium text-amber-100/70 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="pt-12 border-t border-white/10 flex flex-col items-center">
                                <div className="w-full space-y-6 mb-10">
                                    <div className="flex justify-between gap-4">
                                        <div className="flex-grow">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-amber-500/60 block mb-3">Journey Duration</label>
                                            <select
                                                value={nights}
                                                onChange={(e) => setNights(Number(e.target.value))}
                                                className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-sm font-black text-white focus:border-amber-500 outline-none transition-colors"
                                            >
                                                {[5, 7, 10, 14, 21].map(n => <option key={n} value={n}>{n} Nights</option>)}
                                            </select>
                                        </div>
                                        <div className="flex-grow">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-amber-500/60 block mb-3">Party Size</label>
                                            <select
                                                value={travelers}
                                                onChange={(e) => setTravelers(Number(e.target.value))}
                                                className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-sm font-black text-white focus:border-amber-500 outline-none transition-colors"
                                            >
                                                {[1, 2, 4, 6].map(n => <option key={n} value={n}>{n} Travelers</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-amber-500 hover:bg-amber-400 text-black py-6 rounded-3xl font-black uppercase tracking-[0.25em] text-sm transition-all shadow-[0_20px_40px_rgba(245,158,11,0.2)] active:scale-[0.97]"
                                >
                                    Initiate VIP Consultation
                                </button>

                                <p className="mt-6 text-[10px] uppercase font-black tracking-[0.2em] text-amber-500/40">
                                    private concierge assigned upon request
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PlanRequestFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                packageName="Ultra VIP"
                nights={nights}
                travelers={travelers}
                totalPrice={total}
                ctaText="Initiate VIP Consultation"
                requestType="ultra-vip"
            />
        </motion.div>
    );
}
