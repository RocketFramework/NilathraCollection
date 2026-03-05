import re

with open("src/app/admin/(authenticated)/planner/types.ts", "r") as f:
    text = f.read()

# Add to DB Purchase Order
target = """    internal_notes?: string;
    vendor_notes?: string;
    cancellation_policy?: string;

    items?: DBPurchaseOrderItem[];"""

replacement = """    internal_notes?: string;
    vendor_notes?: string;
    cancellation_policy?: string;

    // Operational Tracking Fields
    sent_email?: string;
    sent_to_name?: string;
    sent_date?: string;
    accepted_by_name?: string;
    accepted_date?: string;

    items?: DBPurchaseOrderItem[];"""

if target in text:
    text = text.replace(target, replacement)
    with open("src/app/admin/(authenticated)/planner/types.ts", "w") as f:
        f.write(text)
    print("Patched types.ts")
else:
    print("Could not find target in types.ts")

with open("src/app/admin/(authenticated)/planner/steps/FinanceAndBookingStep.tsx", "r") as f:
    text2 = f.read()

t2 = """                                                        ) : (
                                                            <input
                                                                value={item.description}
                                                                onChange={(e) => updateLocalPOItem(item.id, { description: e.target.value })}
                                                                className="w-full text-sm font-bold bg-neutral-50 border-none rounded-xl px-4 py-2 focus:ring-1 focus:ring-brand-gold"
                                                                placeholder="Item Description"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="col-span-4">"""

r2 = """                                                        ) : (
                                                            <input
                                                                value={item.description}
                                                                onChange={(e) => updateLocalPOItem(item.id, { description: e.target.value })}
                                                                className="w-full text-sm font-bold bg-neutral-50 border-none rounded-xl px-4 py-2 focus:ring-1 focus:ring-brand-gold"
                                                                placeholder="Item Description"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="col-span-12 md:col-span-4">
                                                        <label className="text-[9px] text-neutral-400 uppercase font-black mb-1 block">Service Date</label>
                                                        <input
                                                            type="date"
                                                            value={item.service_date || ""}
                                                            onChange={(e) => updateLocalPOItem(item.id, { service_date: e.target.value })}
                                                            className="w-full text-sm font-bold bg-neutral-50 border-none rounded-xl px-4 py-2 focus:ring-1 focus:ring-brand-gold"
                                                        />
                                                    </div>
                                                    <div className="col-span-4">"""

if t2 in text2:
    text2 = text2.replace(t2, r2)
    with open("src/app/admin/(authenticated)/planner/steps/FinanceAndBookingStep.tsx", "w") as f:
        f.write(text2)
    print("Patched FinanceAndBookingStep.tsx")
else:
    print("Could not find target in FinanceAndBookingStep.tsx")

