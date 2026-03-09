"use client";

import { useState } from "react";
import {
    Hotel,
    Car,
    MapPin,
    Shield,
    Check,
    ArrowRight
} from "lucide-react";
import PlanRequestFormModal from "./PlanRequestFormModal";
import Link from "next/link";

export default function RegularPlan() {
    const [selectedNights, setSelectedNights] = useState(7);
    const [travelers, setTravelers] = useState(2);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const basePrice = 75; // average of 50-100
    const totalPrice = basePrice * travelers * selectedNights;

    const inclusions = [
        { icon: Hotel, text: "3-Star / Comfortable Guest Houses", details: "Clean, safe, and authentic local stays" },
        { icon: Car, text: "Compact Sedan / Shared Shuttle", details: "Reliable transport for your journey" },
        { icon: MapPin, text: "Essential Sightseeing", details: "Major landmarks and local highlights" },
        { icon: Shield, text: "24/7 Remote Support", details: "Local experts available via phone/WhatsApp" }
    ];

    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-green-200">
            <div className="bg-gradient-to-r from-green-800 to-green-600 p-8 text-white">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div>
                        <h2 className="text-3xl font-serif mb-2">Regular Plan</h2>
                        <p className="text-green-100 max-w-xl">
                            Exceptional value without compromising on safety or authenticity. Perfect for the budget-conscious traveler.
                        </p>
                    </div>
                    <div className="text-right bg-white/10 p-6 rounded-2xl">
                        <div className="text-4xl font-light mb-1">${totalPrice.toLocaleString()}</div>
                        <p className="text-green-200 text-sm">for {selectedNights} nights / {travelers} travelers</p>
                        <p className="text-green-200 text-xs text-center border-t border-white/10 mt-2 pt-2">${basePrice} avg. per person/day</p>
                    </div>
                </div>
            </div>

            <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-serif text-green-900 mb-6">Standard Inclusions</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {inclusions.map((item, idx) => (
                                <div key={idx} className="bg-green-50 p-5 rounded-2xl border border-green-100/50">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-white rounded-lg shadow-sm">
                                            <item.icon size={20} className="text-green-700" />
                                        </div>
                                        <span className="font-bold text-green-900">{item.text}</span>
                                    </div>
                                    <p className="text-sm text-green-700/80 leading-relaxed">{item.details}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                            <h4 className="font-bold text-neutral-800 mb-4 uppercase text-xs tracking-widest">Typical Daily Experience</h4>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Our Regular plan focuses on the heart of Sri Lanka. You'll stay in highly-rated 3-star properties or charming guesthouses known for their hospitality. Transport is provided by professional drivers in comfortable, air-conditioned compact vehicles. You'll have the flexibility to explore at your own pace with the security of our 24/7 remote assistance.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-green-50/50 p-6 rounded-3xl border border-green-100">
                            <h4 className="font-serif text-xl text-green-900 mb-6">Calculate Quote</h4>

                            <div className="space-y-5">
                                <div>
                                    <label className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Duration (Nights)</label>
                                    <input
                                        type="number"
                                        min="3"
                                        max="30"
                                        value={selectedNights}
                                        onChange={(e) => setSelectedNights(Number(e.target.value))}
                                        className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Travelers</label>
                                    <select
                                        value={travelers}
                                        onChange={(e) => setTravelers(Number(e.target.value))}
                                        className="w-full border border-green-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 outline-none appearance-none bg-white"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                            <option key={n} value={n}>{n} traveler{n > 1 ? 's' : ''}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="pt-6 border-t border-green-100">
                                    <div className="flex justify-between items-end mb-1">
                                        <span className="text-sm text-green-700">Estimated Total:</span>
                                        <span className="text-2xl font-serif text-green-900">${totalPrice.toLocaleString()}</span>
                                    </div>
                                    <p className="text-[10px] text-green-600 italic">
                                        *Final price depends on seasonal availability.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-md active:scale-95"
                                >
                                    request customized quote
                                </button>
                                <PlanRequestFormModal
                                    isOpen={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                    packageName="Regular"
                                    nights={selectedNights}
                                    travelers={travelers}
                                    totalPrice={totalPrice}
                                    ctaText="request customized quote"
                                />
                            </div>
                        </div>

                        <Link href="/plans/compare" className="flex items-center justify-center gap-2 text-sm text-green-700 hover:text-green-900 transition-colors font-medium py-2">
                            Compare with other plans <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
