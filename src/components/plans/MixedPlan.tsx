"use client";

import { motion } from "framer-motion";
import {
    LayoutList,
    ArrowRight,
    Check,
    Sparkles,
    Clock,
    MapPin,
    Globe,
    RefreshCcw
} from "lucide-react";
import Link from "next/link";

export default function MixedPlan() {
    const features = [
        {
            title: "Dynamic Pacing",
            description: "Balance high-energy activities with serene luxury retreats.",
            icon: RefreshCcw
        },
        {
            title: "Tier Fluidity",
            description: "Choose Ultra VIP for secluded villas, and Luxury for boutique stays.",
            icon: Sparkles
        },
        {
            title: "Optimized Logistics",
            description: "Switch between private jets and premium ground transport as needed.",
            icon: Clock
        },
        {
            title: "True Bespoke Planning",
            description: "Every day is crafted around your specific preferences and mood.",
            icon: Globe
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200"
        >
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-600 p-12 text-white">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                        <LayoutList size={14} /> Total Flexibility
                    </div>
                    <h2 className="text-5xl font-serif mb-6 leading-tight">The Mixed Collection</h2>
                    <p className="text-xl text-neutral-200/80 leading-relaxed font-light">
                        Why choose one when you can have the best of everything? Mix and match our tiers
                        throughout your journey to create a trip that matches your exact pace and desire.
                    </p>
                </div>
            </div>

            <div className="p-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                            {features.map((feature, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-600">
                                        <feature.icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-neutral-800 leading-none">{feature.title}</h4>
                                    <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 rounded-[2rem] bg-amber-50 border border-amber-100">
                            <h4 className="text-amber-900 font-bold text-sm uppercase tracking-widest mb-4">How it works</h4>
                            <div className="space-y-4">
                                {[
                                    "Consult with our specialists about your priorities.",
                                    "We map out which segments warrant a VIP touch.",
                                    "Get a unified proposal across multiple price points.",
                                    "Enjoy the ultimate Sri Lankan journey tailored to you."
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center text-[10px] font-black text-amber-900 shrink-0">
                                            {i + 1}
                                        </div>
                                        <p className="text-sm text-amber-800 font-medium">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-neutral-900 rounded-[3rem] p-12 text-white relative z-10">
                            <h3 className="text-3xl font-serif mb-8">Ready to blend?</h3>
                            <p className="text-neutral-400 mb-10 leading-relaxed">
                                Our Mixed Collection doesn't have a fixed price.
                                It is architected around your budget and your vision.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-center gap-4 text-emerald-400">
                                    <Check size={20} />
                                    <span className="text-sm font-bold tracking-wide">HYBRID LOGISTICS</span>
                                </div>
                                <div className="flex items-center gap-4 text-emerald-400">
                                    <Check size={20} />
                                    <span className="text-sm font-bold tracking-wide">VARIED ACCOMMODATION TIER</span>
                                </div>
                                <div className="flex items-center gap-4 text-emerald-400">
                                    <Check size={20} />
                                    <span className="text-sm font-bold tracking-wide">FLEXIBLE SERVICE LEVELS</span>
                                </div>
                            </div>

                            <Link
                                href="/contact"
                                className="w-full inline-flex items-center justify-center gap-3 bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all active:scale-[0.98]"
                            >
                                START PRIVATE CONSULTATION <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-neutral-100 rounded-full -z-10 blur-3xl opacity-50" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
