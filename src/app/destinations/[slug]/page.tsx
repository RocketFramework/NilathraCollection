import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Check, Camera, Coffee } from "lucide-react";
import React from "react";

// Mock data for destinations
const destinationsData: Record<string, any> = {
    sigiriya: {
        name: "Sigiriya",
        tagline: "The Lion Rock Fortress",
        heroImage: "/images/sigiriya_hero.png",
        description: "Sigiriya is one of the most valuable historical monuments of Sri Lanka. Referred by locals as the Eighth Wonder of the World, this ancient palace and fortress complex has significant archaeological importance and attracts thousands of tourists every year. It is probably the most visited tourist destination in Sri Lanka.",
        highlights: [
            "Climb the 1200 steps to the summit",
            "Marvel at the ancient frescoes",
            "Explore the royal water gardens",
            "Watch the sunset from Pidurangala Rock",
        ],
        bestTime: "January to April",
        experiences: [
            { name: "Private Guided Tour", icon: MapPin },
            { name: "Luxury Jungle Picnic", icon: Coffee },
            { name: "Heritage Photography", icon: Camera },
        ],
        accommodations: [
            { name: "Boutique Heritage Suite (VIP)", type: "Super Luxury" },
            { name: "Forest Pavilion (Deluxe)", type: "Premium" },
            { name: "Rock View Lodge (Standard)", type: "Comfort" },
        ]
    },
    galle: {
        name: "Galle",
        tagline: "Colonial Charm & Ocean Breeze",
        heroImage: "/images/galle_hero.png",
        description: "Galle is a jewel. A UNESCO World Heritage site, this city is a mosaic of colonial history and tropical beauty. The Dutch Fort is the heartbeat of Galle, housing boutique hotels, chic cafes, and art galleries within its ancient ramparts.",
        highlights: [
            "Walk the ramparts at sunset",
            "Explore the labyrinth of colonial streets",
            "Visit the iconic white lighthouse",
            "Relax on the pristine beaches of Unawatuna",
        ],
        bestTime: "December to March",
        experiences: [
            { name: "Fort Heritage Walk", icon: MapPin },
            { name: "Coastal Sailing", icon: Coffee },
            { name: "Colonial High Tea", icon: Camera },
        ],
        accommodations: [
            { name: "The Governor's Mansion (VIP)", type: "Super Luxury" },
            { name: "Fort Bliss Boutique (Deluxe)", type: "Premium" },
            { name: "Lighthouse Inn (Standard)", type: "Comfort" },
        ]
    },
    yala: {
        name: "Yala",
        tagline: "Wild Safaris & Leopards",
        heroImage: "/images/yala_hero.png",
        description: "Yala National Park is the most visited and second largest national park in Sri Lanka. The park is best known for its variety of wild animals. It is important for the conservation of Sri Lankan elephants, Sri Lankan leopards and aquatic birds.",
        highlights: [
            "Exclusive dawn leopard safari",
            "Elephants at the watering holes",
            "Bird watching in the wetlands",
            "Beach walk along the park's coast",
        ],
        bestTime: "February to June",
        experiences: [
            { name: "Private Photographer Safari", icon: Camera },
            { name: "Luxury Tented Camping", icon: Coffee },
            { name: "Expert Wildlife Tracker", icon: MapPin },
        ],
        accommodations: [
            { name: "Wild Coast Tented Lodge (VIP)", type: "Super Luxury" },
            { name: "Safari Heritage Camp (Deluxe)", type: "Premium" },
            { name: "Nature's Edge Lodge (Standard)", type: "Comfort" },
        ]
    },
    kandy: {
        name: "Kandy",
        tagline: "The Sacred Hill Capital",
        heroImage: "/images/kandy_real.jpg",
        description: "Nestled amidst misty green hills, Kandy is the cultural soul of Sri Lanka. Home to the sacred Temple of the Tooth Relic, this city offers a blend of spirituality, history, and natural beauty.",
        highlights: [
            "Visit the Temple of the Tooth Relic",
            "Morning walk around Kandy Lake",
            "Explore the Royal Botanical Gardens",
            "Evening Kandyan dance performance",
        ],
        bestTime: "January to April",
        experiences: [
            { name: "Curated Temple Visit", icon: MapPin },
            { name: "Royal Botanical Tour", icon: Coffee },
            { name: "Cultural Preservation Insight", icon: Camera },
        ],
        accommodations: [
            { name: "The King's Pavilion (VIP)", type: "Super Luxury" },
            { name: "Misty Mountain Resort (Deluxe)", type: "Premium" },
            { name: "City Heritage Lodge (Standard)", type: "Comfort" },
        ]
    },
    colombo: {
        name: "Colombo",
        tagline: "Luxury Cosmopolitan Hub",
        heroImage: "/images/colombo_hero.png",
        description: "A dynamic metropolis where colonial mansions stand alongside modern skyscrapers. Colombo is the gateway to Sri Lanka, offering high-end shopping, gourmet dining, and a vibrant nightlife.",
        highlights: [
            "High tea at the Galle Face Hotel",
            "Luxury shopping at One Galle Face",
            "Private city heritage tour",
            "Sunset at Beira Lake",
        ],
        bestTime: "December to March",
        experiences: [
            { name: "Urban Heritage Walk", icon: MapPin },
            { name: "Fine Dining Experience", icon: Coffee },
            { name: "Art & Architecture Tour", icon: Camera },
        ],
        accommodations: [
            { name: "Shangri-La Horizon (VIP)", type: "Super Luxury" },
            { name: "Cinnamon Grand (Deluxe)", type: "Premium" },
            { name: "Jetwing Urban (Standard)", type: "Comfort" },
        ]
    },
    ella: {
        name: "Ella",
        tagline: "Highlands & Tea Estates",
        heroImage: "/images/ella_hero.png",
        description: "Ella is a small town in the Badulla District of Uva Province, Sri Lanka. It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna.",
        highlights: [
            "Walk across the Nine Arch Bridge",
            "Sunrise trek to Little Adam's Peak",
            "Visit the Ravana Falls",
            "Luxury tea tasting experience",
        ],
        bestTime: "January to May",
        experiences: [
            { name: "Private Hike with Naturalists", icon: MapPin },
            { name: "Ceylon Tea Masterclass", icon: Coffee },
            { name: "Waterfall Private Picnic", icon: Camera },
        ],
        accommodations: [
            { name: "The Tea Estate Reserve (VIP)", type: "Super Luxury" },
            { name: "Mountain View Boutique (Deluxe)", type: "Premium" },
            { name: "Mist Valley Inn (Standard)", type: "Comfort" },
        ]
    },
    bentota: {
        name: "Bentota",
        tagline: "Golden Sands & River Safaris",
        heroImage: "/images/bentota_hero.png",
        description: "Bentota is the jewel of the south-western coast, where the river meets the sea. Famous for its broad, golden beaches and calm waters, it is the ultimate destination for water sports enthusiasts and those seeking refined coastal relaxation.",
        highlights: [
            "Private boat safari on the Madu River",
            "Visit the Brief Garden by Bevis Bawa",
            "Sunset dinner on the pristine beach",
            "Luxury ayurvedic wellness treatments",
        ],
        bestTime: "November to April",
        experiences: [
            { name: "Madu River Private Safari", icon: MapPin },
            { name: "Archery & Water Sports", icon: Coffee },
            { name: "Turtle Hatchery Visit", icon: Camera },
        ],
        accommodations: [
            { name: "Saman Villas Exclusive (VIP)", type: "Super Luxury" },
            { name: "Vivanta by Taj (Deluxe)", type: "Premium" },
            { name: "Bentota Beach Hotel (Standard)", type: "Comfort" },
        ]
    },
    "nuwara-eliya": {
        name: "Nuwara Eliya",
        tagline: "Tea Estates & Misty Hills",
        heroImage: "/images/nuwara_eliya_hero.png",
        description: "Known as 'Little England', Nuwara Eliya is nestled in the heart of the central highlands. It is famous for its cool climate, colonial-era architecture, and vast emerald tea plantations that produce some of the world's finest Ceylon tea.",
        highlights: [
            "Private tea factory & estate tour",
            "High tea at the historic Grand Hotel",
            "Visit Horton Plains & World's End",
            "Boat ride on Lake Gregory",
        ],
        bestTime: "February to May",
        experiences: [
            { name: "Tea Masterclass", icon: Coffee },
            { name: "Horton Plains Private Trek", icon: MapPin },
            { name: "Colonial Heritage Walk", icon: Camera },
        ],
        accommodations: [
            { name: "Ceylon Tea Trails (VIP)", type: "Super Luxury" },
            { name: "The Grand Hotel (Deluxe)", type: "Premium" },
            { name: "Jetwing St. Andrew's (Standard)", type: "Comfort" },
        ]
    },
    trincomalee: {
        name: "Trincomalee",
        tagline: "East Coast Charm & Blue Seas",
        heroImage: "/images/trincomalee_hero.png",
        description: "Trincomalee, on the east coast of Sri Lanka, is home to one of the world's finest natural deep-sea harbors. It offers pristine white sand beaches, sacred Hindu temples, and world-class whale watching opportunities.",
        highlights: [
            "Private whale & dolphin watching",
            "Visit the sacred Koneswaram Temple",
            "Snorkeling at Pigeon Island",
            "Relax on Nilaveli Beach",
        ],
        bestTime: "May to October",
        experiences: [
            { name: "Deep Sea Whale Safari", icon: MapPin },
            { name: "Temple Heritage Tour", icon: Coffee },
            { name: "Marine Life Exploration", icon: Camera },
        ],
        accommodations: [
            { name: "Jungle Beach by Uga (VIP)", type: "Super Luxury" },
            { name: "Trinco Blu by Cinnamon (Deluxe)", type: "Premium" },
            { name: "Nilaveli Beach Hotel (Standard)", type: "Comfort" },
        ]
    },
};

export async function generateStaticParams() {
    return [
        { slug: "sigiriya" },
        { slug: "galle" },
        { slug: "ella" },
        { slug: "yala" },
        { slug: "kandy" },
        { slug: "bentota" },
        { slug: "nuwara-eliya" },
        { slug: "trincomalee" },
        { slug: "colombo" },
    ];
}

export default function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const data = destinationsData[slug] || destinationsData["sigiriya"];

    return (
        <MainLayout>
            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={data.heroImage}
                    alt={data.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 cinematic-overlay" />
                <div className="relative z-10 text-center text-white px-6">
                    <Link href="/destinations" className="inline-flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors mb-6 text-sm uppercase tracking-widest">
                        <ArrowLeft size={16} /> Back to Destinations
                    </Link>
                    <h1 className="text-6xl md:text-8xl font-serif mb-4">{data.name}</h1>
                    <p className="text-brand-gold text-lg uppercase tracking-[0.4em]">{data.tagline}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                    <div className="flex-1 space-y-12">
                        <div>
                            <span className="section-subtitle">The Destination</span>
                            <h2 className="section-title">Overview</h2>
                            <p className="text-brand-charcoal/70 text-lg leading-relaxed font-light">
                                {data.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <h3 className="font-serif text-2xl text-brand-green">Experience Highlights</h3>
                                <ul className="space-y-4">
                                    {data.highlights.map((item: string) => (
                                        <li key={item} className="flex gap-3 items-start text-brand-charcoal/80">
                                            <Check size={18} className="text-brand-gold shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="font-serif text-2xl text-brand-green">Essential Info</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <Calendar className="text-brand-gold" />
                                        <div>
                                            <p className="text-xs uppercase tracking-widest text-brand-charcoal/40">Best Time to Visit</p>
                                            <p className="font-medium text-brand-charcoal">{data.bestTime}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {data.experiences.map((exp: any) => (
                                            <div key={exp.name} className="flex items-center gap-4">
                                                <exp.icon className="text-brand-gold" />
                                                <div>
                                                    <p className="text-xs uppercase tracking-widest text-brand-charcoal/40">Exclusive Offering</p>
                                                    <p className="font-medium text-brand-charcoal">{exp.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="lg:w-[400px] space-y-8">
                        <div className="bg-brand-sand p-10 rounded-sm shadow-sm border border-brand-charcoal/5">
                            <h3 className="font-serif text-2xl text-brand-green mb-8">Accommodation Suggestions</h3>
                            <div className="space-y-6">
                                {data.accommodations.map((acc: any) => (
                                    <div key={acc.name} className="border-b border-brand-charcoal/10 pb-6 last:border-0 last:pb-0">
                                        <p className="text-brand-green font-medium">{acc.name}</p>
                                        <p className="text-xs uppercase tracking-widest text-brand-gold">{acc.type}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/custom-plan" className="luxury-button w-full mt-10 text-center flex justify-center">
                                Inquire About Stay
                            </Link>
                        </div>

                        <div className="relative h-[300px] rounded-sm overflow-hidden group">
                            <Image
                                src="/images/galle_hero.png"
                                alt="Luxury travel"
                                fill
                                className="object-cover transition-transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-green/40 flex items-center justify-center p-8 text-center bg-brand-green/60 opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white text-sm">Design a custom itinerary including {data.name} and other premium locations.</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Dynamic CTA */}
            <section className="py-24 px-6 md:px-12 bg-brand-green text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-serif text-4xl mb-8">Include {data.name} in Your Luxury Escape</h2>
                    <p className="text-white/70 mb-12 text-lg font-light">
                        Our specialists can blend {data.name} with other iconic Sri Lankan destinations to create a seamless journey of discovery.
                    </p>
                    <Link href="/custom-plan" className="luxury-button border border-white/20 !px-12 !py-5">
                        Plan My {data.name} Experience
                    </Link>
                </div>
            </section>
        </MainLayout>
    );
}
