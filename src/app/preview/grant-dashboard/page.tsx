"use client";

import React, { useState } from "react";
import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";
import {
  Search,
  Bookmark,
  Clock,
  TrendingUp,
  Filter,
  X,
  ChevronRight,
  Calendar,
  DollarSign,
  Building2,
  GraduationCap,
  Heart,
  Leaf,
  Globe,
  Users,
  ArrowUpRight,
  SlidersHorizontal,
  Star,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Matching Grants", value: "12", icon: Star, color: "text-brand-trust", bg: "bg-brand-trust/10" },
  { label: "Saved Opportunities", value: "5", icon: Bookmark, color: "text-brand-operational", bg: "bg-teal-50" },
  { label: "Applications In Progress", value: "3", icon: Clock, color: "text-brand-governance", bg: "bg-amber-50" },
  { label: "Success Rate", value: "68%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
];

const sectors = [
  { label: "Education", icon: GraduationCap },
  { label: "Health", icon: Heart },
  { label: "Environment", icon: Leaf },
  { label: "Human Rights", icon: Users },
  { label: "Agriculture", icon: Globe },
  { label: "Technology", icon: Building2 },
];

const mockGrants = [
  {
    id: 1,
    funder: "Global Health Foundation",
    title: "Community Health Access Initiative 2026",
    eligibilityScore: 92,
    deadline: "2026-08-15",
    amountMin: 100000,
    amountMax: 500000,
    sectors: ["Health", "Human Rights"],
    description: "Funding for community-based health programmes targeting underserved populations in Sub-Saharan Africa.",
  },
  {
    id: 2,
    funder: "Education Forward Fund",
    title: "Digital Learning for Rural Communities",
    eligibilityScore: 85,
    deadline: "2026-09-01",
    amountMin: 75000,
    amountMax: 300000,
    sectors: ["Education", "Technology"],
    description: "Supporting innovative digital learning solutions for rural and remote primary schools.",
  },
  {
    id: 3,
    funder: "Climate Action Partnership",
    title: "Smallholder Climate Resilience Programme",
    eligibilityScore: 78,
    deadline: "2026-07-30",
    amountMin: 200000,
    amountMax: 800000,
    sectors: ["Environment", "Agriculture"],
    description: "Building climate resilience for smallholder farmers through sustainable agriculture practices.",
  },
  {
    id: 4,
    funder: "Democracy & Governance Trust",
    title: "Civic Engagement and Transparency",
    eligibilityScore: 94,
    deadline: "2026-10-15",
    amountMin: 50000,
    amountMax: 250000,
    sectors: ["Human Rights"],
    description: "Strengthening civic participation and government transparency at the local level.",
  },
  {
    id: 5,
    funder: "Tech for Good Alliance",
    title: "Open-Source Tools for Social Impact",
    eligibilityScore: 71,
    deadline: "2026-08-30",
    amountMin: 150000,
    amountMax: 450000,
    sectors: ["Technology", "Education"],
    description: "Funding the development and deployment of open-source software tools for NGOs.",
  },
  {
    id: 6,
    funder: "Children's Future Foundation",
    title: "Early Childhood Nutrition Programme",
    eligibilityScore: 88,
    deadline: "2026-11-01",
    amountMin: 80000,
    amountMax: 350000,
    sectors: ["Health", "Education"],
    description: "Integrated nutrition and early learning programmes for children under five.",
  },
];

export default function GrantDashboardPreview() {
  const [search, setSearch] = useState("");
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [amountRange, setAmountRange] = useState(200000);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const toggleSector = (sector: string) => {
    setSelectedSectors((prev) =>
      prev.includes(sector) ? prev.filter((s) => s !== sector) : [...prev, sector]
    );
  };

  const formatAmount = (n: number) =>
    n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : `$${(n / 1000).toFixed(0)}K`;

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const scoreColor = (score: number) => {
    if (score >= 90) return "bg-emerald-100 text-emerald-700";
    if (score >= 80) return "bg-brand-trust/10 text-brand-trust";
    if (score >= 70) return "bg-amber-100 text-amber-700";
    return "bg-gray-100 text-gray-600";
  };

  const filteredGrants = mockGrants.filter((g) => {
    if (search && !g.title.toLowerCase().includes(search.toLowerCase()) && !g.funder.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedSectors.length > 0 && !g.sectors.some((s) => selectedSectors.includes(s))) return false;
    return true;
  });

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-body-sm font-medium text-gray-700 mb-2">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search grants or funders..."
            className="w-full pl-9 pr-4 py-2.5 text-body-sm border border-gray-200 rounded-lg bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-trust/20 focus:border-brand-trust transition-shadow"
          />
        </div>
      </div>

      <div>
        <label className="block text-body-sm font-medium text-gray-700 mb-2">Sector</label>
        <div className="space-y-2">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            const active = selectedSectors.includes(sector.label);
            return (
              <button
                key={sector.label}
                onClick={() => toggleSector(sector.label)}
                className={cn(
                  "flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-body-sm transition-all border",
                  active
                    ? "border-brand-trust bg-brand-trust/5 text-brand-trust font-medium"
                    : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                )}
              >
                <Icon className="h-4 w-4" />
                {sector.label}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-body-sm font-medium text-gray-700 mb-2">Country</label>
        <select className="w-full px-3 py-2.5 text-body-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-trust/20 focus:border-brand-trust">
          <option>All Countries</option>
          <option>Kenya</option>
          <option>Uganda</option>
          <option>Tanzania</option>
          <option>Rwanda</option>
          <option>Ethiopia</option>
          <option>Nigeria</option>
          <option>Ghana</option>
        </select>
      </div>

      <div>
        <label className="block text-body-sm font-medium text-gray-700 mb-2">
          Maximum Amount: {formatAmount(amountRange)}
        </label>
        <input
          type="range"
          min={50000}
          max={1000000}
          step={50000}
          value={amountRange}
          onChange={(e) => setAmountRange(Number(e.target.value))}
          className="w-full accent-brand-trust h-2 rounded-lg appearance-none bg-gray-200 cursor-pointer"
        />
        <div className="flex justify-between text-body-xs text-gray-400 mt-1">
          <span>$50K</span>
          <span>$1M</span>
        </div>
      </div>

      <button className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-body-sm font-medium bg-brand-trust text-white rounded-lg hover:bg-brand-trust/90 transition-colors">
        <Filter className="h-4 w-4" />
        Apply Filters
      </button>
    </div>
  );

  return (
    <>
      <PublicNavbar />
      <main className="bg-gray-50 min-h-screen">
        <section className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-trust/20 bg-brand-trust/5 px-4 py-1.5 text-body-sm font-medium text-brand-trust mb-5">
              <Eye size={14} /> Preview Mode
            </div>
            <h1 className="text-display-sm text-gray-900 font-heading tracking-tight">
              Grant Discovery Dashboard
            </h1>
            <p className="mt-3 text-body-lg text-gray-500 max-w-2xl">
              A live preview of what NGOs see inside ElevestOS. Discover matching grants filtered by your organisation&apos;s profile, sector, and track record.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 shadow-card hover:shadow-elevated transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-body-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
                    <div className={cn("p-2 rounded-lg", stat.bg)}>
                      <Icon className={cn("h-4 w-4", stat.color)} />
                    </div>
                  </div>
                  <p className="text-heading-xl font-bold text-gray-900">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="flex lg:hidden mb-6">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 text-body-sm font-medium bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {selectedSectors.length > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-body-xs font-bold bg-brand-trust text-white rounded-full">
                  {selectedSectors.length}
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-8">
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 bg-white rounded-xl border border-gray-200 p-6 shadow-card">
                <div className="flex items-center gap-2 mb-5">
                  <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                  <h3 className="text-body-sm font-semibold text-gray-700 uppercase tracking-wider">Filters</h3>
                </div>
                <FilterSidebar />
              </div>
            </aside>

            {mobileFilterOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileFilterOpen(false)} />
                <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-modal overflow-y-auto">
                  <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <h3 className="text-heading-md font-semibold text-gray-900">Filters</h3>
                    <button onClick={() => setMobileFilterOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-100">
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                  <div className="p-5">
                    <FilterSidebar />
                  </div>
                </div>
              </div>
            )}

            <div className="flex-1 min-w-0">
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredGrants.map((grant) => (
                  <div key={grant.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-elevated hover:border-gray-300 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-body-xs text-gray-500 font-medium">{grant.funder}</span>
                      <span className={cn("inline-flex items-center px-2 py-0.5 rounded-full text-body-xs font-semibold", scoreColor(grant.eligibilityScore))}>
                        {grant.eligibilityScore}%
                      </span>
                    </div>
                    <h3 className="text-heading-md font-semibold text-gray-900 mb-2 group-hover:text-brand-trust transition-colors line-clamp-2">
                      {grant.title}
                    </h3>
                    <p className="text-body-sm text-gray-500 mb-4 line-clamp-2">{grant.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {grant.sectors.map((s) => (
                        <span key={s} className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 text-body-xs text-gray-600 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 text-body-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(grant.deadline)}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" />
                        {formatAmount(grant.amountMin)} - {formatAmount(grant.amountMax)}
                      </span>
                    </div>

                    <button className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 text-body-sm font-medium bg-brand-trust text-white rounded-lg hover:bg-brand-trust/90 transition-colors">
                      View Details
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {filteredGrants.length === 0 && (
                <div className="text-center py-16">
                  <Search className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                  <p className="text-body-md text-gray-500">No grants match your filters.</p>
                  <p className="text-body-sm text-gray-400 mt-1">Try adjusting your search or sector filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
