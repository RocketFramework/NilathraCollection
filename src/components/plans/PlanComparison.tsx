// components/plans/PlanComparison.tsx
"use client";

import { Check, X, Sparkles, Clock, MapPin, Globe, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function PlanComparison() {
  const tiers = [
    { id: 'regular', name: 'Regular', color: 'text-green-700' },
    { id: 'premium', name: 'Premium', color: 'text-blue-700' },
    { id: 'luxury', name: 'Luxury', color: 'text-amber-700' },
    { id: 'ultra-vip', name: 'Ultra VIP', color: 'text-neutral-900' },
    { id: 'mixed', name: 'Mixed', color: 'text-neutral-500' }
  ];

  const features = [
    {
      name: "Property Type",
      regular: "3-Star / Guest Houses",
      premium: "4-Star / Boutique",
      luxury: "Signature 5-Star",
      ultraVip: "Private Estates / Buyouts",
      mixed: "Flexible Blend"
    },
    {
      name: "Room Category",
      regular: "Standard AC",
      premium: "Deluxe / Heritage",
      luxury: "Suites / Ocean View",
      ultraVip: "Presidential / Royal",
      mixed: "Tailored Selection"
    },
    {
      name: "Guide Service",
      regular: "Remote Support",
      premium: "Chauffeur Guide",
      luxury: "National Guide",
      ultraVip: "Elite Team 24/7",
      mixed: "Tier Dependent"
    },
    {
      name: "Transport",
      regular: "Compact Sedan",
      premium: "Luxury Sedan",
      luxury: "Premium SUV",
      ultraVip: "Private Jet / Heli",
      mixed: "Hybrid Logistics"
    },
    {
      name: "Butler Service",
      regular: <X size={14} className="text-red-400 mx-auto" />,
      premium: "On Request",
      luxury: "Dedicated",
      ultraVip: <Check size={14} className="text-green-500 mx-auto" />,
      mixed: "Optional"
    },
    {
      name: "Airport Handling",
      regular: "Standard",
      premium: "Fast-Track",
      luxury: "VIP Fast-Track",
      ultraVip: "Private Personal",
      mixed: "Customizable"
    },
    {
      name: "Price / Day / Pax",
      regular: "$50 - $100",
      premium: "$150 - $400",
      luxury: "$500 - $1,000",
      ultraVip: "$5,000 - $10,000",
      mixed: "Variable"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-200">
      <h3 className="text-3xl font-serif text-brand-green mb-10 text-center">Compare Journeys</h3>

      <div className="overflow-x-auto pb-6">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b-2 border-neutral-100">
              <th className="text-left py-6 px-4 font-serif text-lg">Experience</th>
              {tiers.map(tier => (
                <th key={tier.id} className={`text-center py-6 px-4 font-serif text-lg ${tier.color}`}>
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
                <td className="py-5 px-4 font-bold text-neutral-800 text-sm italic">{feature.name}</td>
                <td className="py-5 px-4 text-center text-green-800 text-xs font-medium">{(feature as any).regular}</td>
                <td className="py-5 px-4 text-center text-blue-800 text-xs font-medium">{(feature as any).premium}</td>
                <td className="py-5 px-4 text-center text-amber-800 text-xs font-medium">{(feature as any).luxury}</td>
                <td className="py-5 px-4 text-center text-neutral-900 text-xs font-bold font-mono">{(feature as any).ultraVip}</td>
                <td className="py-5 px-4 text-center text-neutral-500 text-xs italic">{(feature as any).mixed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
        {tiers.map(tier => (
          <Link
            key={tier.id}
            href={`/plans/${tier.id === 'mixed' ? 'mixed' : tier.id === 'ultra-vip' ? 'ultra-vip' : tier.id.toLowerCase()}`}
            className="flex flex-col items-center p-4 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all group"
          >
            <span className={`text-xs font-black uppercase tracking-widest mb-2 ${tier.color}`}>Explore</span>
            <span className="text-sm font-bold text-neutral-800 group-hover:underline">View {tier.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}