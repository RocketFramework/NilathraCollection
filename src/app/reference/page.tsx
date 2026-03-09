"use client";

import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, HelpCircle, ArrowRight, ExternalLink, Info, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ReferencePage() {
    const resources = [
        {
            title: "Visa & Entry (ETA)",
            description: "Official Electronic Travel Authorization (ETA) for visitors to Sri Lanka. Ensure you use the official government portal for guaranteed processing.",
            link: "https://eta.gov.lk/slvisa/",
            icon: Globe,
            label: "Official Government Portal"
        },
        {
            title: "Travel Safety & Health",
            description: "Information on local medical services, emergency contacts, and general safety guidelines for international travelers.",
            link: "/contact",
            icon: ShieldCheck,
            label: "Nilathra Concierge Support"
        },
        {
            title: "Customs & Immigration",
            description: "Essential information regarding duty-free allowances and standard immigration procedures on arrival at BIA.",
            link: "#",
            icon: FileText,
            label: "Arrival Guidelines"
        }
    ];

    return (
        <MainLayout>
            <div className="pt-32 pb-24 px-6 md:px-12 bg-white min-h-screen font-sans">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-logo-blue/5 text-logo-blue rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-logo-blue/10"
                        >
                            <Sparkles size={14} /> Official Resources
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif text-logo-blue tracking-tight mb-8"
                        >
                            Travel Essentials <br />& Reference
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-neutral-500 text-xl leading-relaxed max-w-2xl"
                        >
                            Everything you need to prepare for your journey to the heart of the island.
                            We recommend reviewing these official resources well in advance of your arrival.
                        </motion.p>
                    </div>

                    {/* Resources List */}
                    <div className="space-y-12">
                        {resources.map((res, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 md:p-12 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-logo-blue/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row items-start md:items-center gap-10"
                            >
                                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-logo-blue shadow-sm border border-neutral-100 group-hover:bg-logo-blue group-hover:text-white transition-all duration-500">
                                    <res.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold mb-3">{res.label}</div>
                                    <h3 className="text-2xl font-serif text-logo-blue mb-4">{res.title}</h3>
                                    <p className="text-neutral-500 leading-relaxed mb-8 max-w-xl group-hover:text-neutral-700 transition-colors">
                                        {res.description}
                                    </p>
                                    <Link
                                        href={res.link}
                                        target={res.link.startsWith('http') ? "_blank" : "_self"}
                                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-logo-blue group-hover:gap-4 transition-all"
                                    >
                                        Access Resource {res.link.startsWith('http') ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Disclaimer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-24 p-10 rounded-[2.5rem] bg-logo-blue text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                            <Info size={100} />
                        </div>
                        <div className="relative z-10 flex gap-8 items-start">
                            <HelpCircle className="text-brand-gold shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="text-xl font-serif mb-4 tracking-tight">Need further assistance?</h4>
                                <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xl">
                                    Our travel specialists provide comprehensive guidance for all Nilathra Collection clients.
                                    If you have specific questions regarding visas, health protocols, or logistics, please contact your dedicated concierge.
                                </p>
                                <Link
                                    href="/contact"
                                    className="px-8 py-3 bg-white text-logo-blue rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all inline-block"
                                >
                                    Speak with a specialist
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
