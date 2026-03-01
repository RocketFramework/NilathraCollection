"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Users, Package, MapPin, TrendingUp, AlertTriangle, CheckCircle, Navigation } from "lucide-react";
import Link from "next/link";
import { UserService } from "@/services/user.service";

export default function AdminDashboard() {
    // In a real app, retrieve user role securely server-side or via context. Using state for mock implementation.
    const [userRole, setUserRole] = useState<'admin' | 'agent' | null>('admin');
    const router = useRouter();

    const [requests, setRequests] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        const fetchRequests = async () => {
            setIsLoading(true);
            try {
                // In production, this would use a secure server-side method if strictly for admins,
                // but for our prototype we can assume the admin is authenticated.
                const { RequestService } = await import('@/services/request.service');
                const { data, count } = await RequestService.getAllRequests(currentPage, pageSize);

                // Map database format to UI format
                if (data) {
                    const mapped = data.map((req: any) => {
                        const touristName = req.tourist_profile?.[0]?.first_name && req.tourist_profile?.[0]?.last_name
                            ? `${req.tourist_profile[0].first_name} ${req.tourist_profile[0].last_name}`
                            : req.email || 'Anonymous';

                        const dests = req.details?.[0]?.destinations || [];
                        const packageName = req.details?.[0]?.package_name || req.request_type;

                        return {
                            id: req.id,
                            type: req.request_type === 'package' ? packageName : 'Custom Plan',
                            tourist: touristName,
                            status: req.status,
                            destinations: Array.isArray(dests) ? dests : [dests].filter(Boolean),
                            assignedTo: req.admin_assigned_to ? 'Assigned' : 'Unassigned',
                            date: new Date(req.created_at).toLocaleDateString()
                        };
                    });
                    setRequests(mapped);
                    setTotalPages(Math.ceil((count || 0) / pageSize) || 1);
                }
            } catch (error) {
                console.error("Failed to load requests:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRequests();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(c => c + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(c => c - 1);
    };

    const adminStats = [
        { label: "Total Users", value: "1,245", icon: Users, trend: "+12%" },
        { label: "Active Packages", value: "48", icon: Package, trend: "+3%" },
        { label: "Pending Requests", value: "12", icon: MapPin, trend: "0%" },
        { label: "Revenue", value: "$84,500", icon: TrendingUp, trend: "+18%" },
    ];

    const agentStats = [
        { label: "My Active Tours", value: "14", icon: Navigation, trend: "+2" },
        { label: "Pending Requests", value: "3", icon: MapPin, trend: "New" },
        { label: "Completed Tours", value: "42", icon: CheckCircle, trend: "" }
    ];

    const stats = userRole === 'admin' ? adminStats : agentStats;

    return (
        <div className="max-w-7xl mx-auto p-10 animate-in fade-in duration-500">
            {/* Quick role toggle for testing ONLY */}
            <div className="flex gap-2 mb-8 p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-xl">
                <span className="text-sm font-bold text-brand-gold flex items-center mr-4">DEV TOGGLE:</span>
                <button onClick={() => setUserRole('admin')} className={`px-4 py-1 rounded text-sm font-bold ${userRole === 'admin' ? 'bg-brand-gold text-white' : 'bg-white text-brand-charcoal'}`}>Admin View</button>
                <button onClick={() => setUserRole('agent')} className={`px-4 py-1 rounded text-sm font-bold ${userRole === 'agent' ? 'bg-brand-gold text-white' : 'bg-white text-brand-charcoal'}`}>Agent View</button>
            </div>

            <div className="space-y-8 mt-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold font-playfair text-[#2B2B2B]">
                            {userRole === 'admin' ? 'Master Dashboard' : 'Agent Workspace'}
                        </h1>
                        <p className="text-[#6B7280] mt-1">Welcome back. Here is what's happening with your operations today.</p>
                    </div>
                </div>
                <div className="p-6 md:p-10 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-500 pb-32">

                    {/* Top Stat Metrics */}
                    <MasterDashboardMetrics userRole={userRole} />

                    {/* Main Content Area - Split Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Left Column (Main Focus Area) */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Revenue Chart */}
                            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 hidden md:block">
                                <RevenueChart />
                            </div>

                            {/* Pending Requests / Leads */}
                            <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden">
                                <div className="px-6 py-5 border-b border-[#E5E7EB] flex items-center justify-between">
                                    <h2 className="text-lg font-bold text-brand-charcoal">Recent Incoming Requests</h2>
                                    <Link href="/admin/requests" className="text-sm font-bold text-brand-gold hover:text-[#B3932F] transition-colors">
                                        View All Requests
                                    </Link>
                                </div>
                                <div className="divide-y divide-neutral-100">
                                    {isLoading ? (
                                        <div className="p-8 text-center text-neutral-500">
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brand-gold mx-auto mb-3"></div>
                                            Loading requests...
                                        </div>
                                    ) : requests.length === 0 ? (
                                        <div className="p-8 text-center text-neutral-500">
                                            <p>No requests found in the database.</p>
                                        </div>
                                    ) : requests.map(req => (
                                        <div
                                            key={req.id}
                                            className="p-6 hover:bg-neutral-50 flex flex-col md:flex-row gap-4 items-center justify-between transition-colors cursor-pointer group"
                                            onClick={() => router.push(`/admin/requests/${req.id}`)}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-brand-charcoal text-white flex items-center justify-center font-bold">
                                                    {req.tourist ? req.tourist.charAt(0).toUpperCase() : '?'}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-brand-charcoal text-sm">{req.details?.package_name || 'Custom Trip Request'}</p>
                                                    <div className="flex items-center gap-3 text-xs text-neutral-500 mt-1">
                                                        <span>{req.details?.nights || '?'} Nights</span>
                                                        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                                                        <span>{req.details?.adults || 0} Adults</span>
                                                        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                                                        <span>${req.details?.estimated_price?.toLocaleString() || 'TBD'} Budget</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
                                                {userRole === 'admin' && req.status === 'Pending' && (
                                                    <button
                                                        className="flex-1 md:flex-none text-xs font-bold uppercase tracking-wider bg-brand-gold text-white px-4 py-2 rounded-lg hover:bg-[#B3932F] transition-colors"
                                                        onClick={(e) => { e.stopPropagation(); /* TODO Admin Assign Modal */ }}
                                                    >
                                                        Assign Agent
                                                    </button>
                                                )}
                                                {userRole === 'agent' && req.status === 'Assigned' && (
                                                    <button
                                                        className="flex-1 md:flex-none text-xs font-bold uppercase tracking-wider bg-brand-green text-white px-4 py-2 rounded-lg hover:bg-green-900 transition-colors"
                                                        onClick={(e) => { e.stopPropagation(); /* TODO Build Itin Modal/Route */ }}
                                                    >
                                                        Build Itinerary
                                                    </button>
                                                )}
                                                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${req.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                    req.status === 'Assigned' ? 'bg-blue-100 text-blue-700' :
                                                        req.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-neutral-200 text-neutral-700'
                                                    }`}>
                                                    {req.status}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Pagination Controls */}
                                {totalPages > 1 && (
                                    <div className="flex justify-between items-center p-4 border-t border-neutral-100">
                                        <button
                                            onClick={handlePrevPage}
                                            disabled={currentPage === 1}
                                            className="px-4 py-2 text-sm font-medium text-brand-charcoal bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Previous
                                        </button>
                                        <span className="text-sm text-neutral-600">Page {currentPage} of {totalPages}</span>
                                        <button
                                            onClick={handleNextPage}
                                            disabled={currentPage === totalPages}
                                            className="px-4 py-2 text-sm font-medium text-brand-charcoal bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Side Panel (Admin: Suspensions, Agent: Quick Links) */}
                        <div className="space-y-6">
                            {userRole === 'admin' ? (
                                <div className="bg-red-50/50 rounded-2xl shadow-sm border border-red-100 p-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                    <h3 className="text-lg font-bold text-red-800 flex items-center gap-2 mb-4 relative z-10"><AlertTriangle size={18} /> Suspension Approvals</h3>
                                    <div className="space-y-3 relative z-10">
                                        <div className="p-4 bg-white rounded-xl border border-red-100 shadow-sm">
                                            <p className="text-sm font-bold text-brand-charcoal">The Grand Colombo</p>
                                            <p className="text-xs text-neutral-500 mt-1">Recommended by: Agent Samadhi</p>
                                            <p className="text-xs text-red-600 mt-2 bg-red-50 p-2 rounded italic">"Consistent negative feedback regarding service speeds."</p>
                                            <div className="flex gap-2 mt-3">
                                                <button className="flex-1 text-xs font-bold bg-red-600 text-white py-1.5 rounded-lg hover:bg-red-700 transition-colors">Approve</button>
                                                <button className="flex-1 text-xs font-bold bg-neutral-100 text-neutral-600 py-1.5 rounded-lg hover:bg-neutral-200 transition-colors">Reject</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6">
                                    <h3 className="text-lg font-bold text-brand-charcoal mb-4">Quick Actions</h3>
                                    <div className="space-y-2">
                                        <button className="w-full text-left px-4 py-3 bg-neutral-50 hover:bg-brand-green/5 hover:text-brand-green rounded-xl text-sm font-medium transition-colors border border-transparent hover:border-brand-green/20">
                                            Review Vendor Database
                                        </button>
                                        <button className="w-full text-left px-4 py-3 bg-neutral-50 hover:bg-brand-green/5 hover:text-brand-green rounded-xl text-sm font-medium transition-colors border border-transparent hover:border-brand-green/20">
                                            Submit Vendor Rating
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Access to Master Records for Admin */}
                            {userRole === 'admin' && (
                                <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6">
                                    <h3 className="text-lg font-bold text-brand-charcoal mb-4">Master Data Management</h3>
                                    <div className="space-y-2">
                                        <Link href="/admin/master-data" className="block w-full text-left px-4 py-3 bg-neutral-50 hover:bg-brand-green/5 hover:text-brand-green rounded-xl text-sm font-medium transition-colors border border-transparent hover:border-brand-green/20">
                                            Manage Hotels & Vendors
                                        </Link>
                                        <button className="w-full text-left px-4 py-3 bg-neutral-50 hover:bg-brand-green/5 hover:text-brand-green rounded-xl text-sm font-medium transition-colors border border-transparent hover:border-brand-green/20">
                                            Manage Staff Accounts
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Dummy components for charts to resolve build errors
function MasterDashboardMetrics({ userRole }: { userRole: string | null }) {
    if (userRole !== 'admin') return null;
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <p className="text-sm text-neutral-500">Revenue</p>
                <p className="font-bold text-xl">$124,500</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <p className="text-sm text-neutral-500">Active Tours</p>
                <p className="font-bold text-xl">42</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <p className="text-sm text-neutral-500">New Requests</p>
                <p className="font-bold text-xl">12</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <p className="text-sm text-neutral-500">Conversion Rate</p>
                <p className="font-bold text-xl">68%</p>
            </div>
        </div>
    );
}

function RevenueChart() {
    return (
        <div className="h-64 flex flex-col items-center justify-center bg-neutral-50 rounded-lg">
            <p className="text-neutral-500 font-medium">Revenue Chart Area</p>
            <p className="text-xs text-neutral-400">Waiting for Data Visualization Library</p>
        </div>
    );
}
