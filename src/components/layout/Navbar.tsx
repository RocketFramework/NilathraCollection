"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NavLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12",
                scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white shadow-md flex-shrink-0" style={{ padding: '3px' }}>
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/nilathra_travels_logo.jpeg"
                                alt="Nilathra Collection Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <span className={cn(
                        "font-serif text-2xl font-bold tracking-tighter transition-colors duration-500",
                        scrolled ? "text-brand-green" : "text-white"
                    )}>
                        NILTHRA <span className="text-brand-gold">COLLECTION</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {NavLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium tracking-widest uppercase transition-colors duration-300",
                                scrolled ? "text-brand-charcoal hover:text-brand-gold" : "text-white hover:text-brand-gold"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/custom-plan"
                        className={cn(
                            "luxury-button text-sm flex items-center gap-2 truncate",
                            scrolled ? "bg-brand-green text-white" : "bg-white text-brand-green"
                        )}
                    >
                        Plan My Journey
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-brand-green"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className={scrolled ? "text-brand-green" : "text-white"} />
                    ) : (
                        <Menu className={scrolled ? "text-brand-green" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-brand-green transition-transform duration-500 z-50 flex flex-col items-center justify-center gap-8 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <button
                    className="absolute top-6 right-6 text-white"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={32} />
                </button>
                {NavLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white text-2xl font-serif tracking-widest uppercase hover:text-brand-gold transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/custom-plan"
                    onClick={() => setIsOpen(false)}
                    className="luxury-button bg-white text-brand-green mt-4"
                >
                    Plan My Journey
                </Link>
            </div>
        </nav>
    );
}
