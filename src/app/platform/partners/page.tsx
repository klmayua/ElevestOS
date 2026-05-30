"use client";

import React from 'react';
import Link from 'next/link';

export default function PartnershipFinder() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl"><h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1><p className="font-label-md text-label-md text-on-surface-variant opacity-70">Infrastructure Grade</p></div>
        <nav className="flex-grow"><ul className="space-y-xs">
          <li><Link href="/dashboard" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md"><span className="material-symbols-outlined">dashboard</span>Dashboard</Link></li>
          <li><Link href="/platform/partners" className="flex items-center gap-md px-md py-sm text-primary font-bold border-r-4 border-primary bg-surface-container transition-colors font-body-md text-body-md"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>Projects</Link></li>
          <li><Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md"><span className="material-symbols-outlined">payments</span>Grants</Link></li>
          <li><Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md"><span className="material-symbols-outlined">assessment</span>Reports</Link></li>
          <li><Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md"><span className="material-symbols-outlined">inventory_2</span>Vault</Link></li>
          <li><Link href="/platform/labs" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md"><span className="material-symbols-outlined">science</span>Labs</Link></li>
        </ul></nav>
        <div className="mt-auto px-md space-y-md">
          <button className="w-full bg-primary text-on-primary py-sm font-label-md text-label-md rounded hover:opacity-90 active:scale-95 transition-all">New Initiative</button>
          <ul className="space-y-xs"><li><Link href="#" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md"><span className="material-symbols-outlined">help</span>Support</Link></li><li><Link href="/settings" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md"><span className="material-symbols-outlined">settings</span>Settings</Link></li></ul>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center gap-lg w-1/2"><div className="relative w-full max-w-md"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span><input className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-4 py-2 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all" placeholder="Search verified partners..." type="text"/></div></div>
        <div className="flex items-center gap-lg">
          <button className="bg-primary-container text-on-primary-container px-md py-2 font-label-md text-label-md rounded hover:opacity-90 active:scale-95 transition-all">Compliance Check</button>
          <div className="flex items-center gap-md">
            <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">history</span></button>
            <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant"><img alt="Admin" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUlPpmDS9I1BubmEC8InKgFnsAeLNthtca51A2DgwXXyjkudGTdGYyo7KsfFgQ4kQqwaLXvas8nXrFZv5IDO6Y0TWBT-3o_E05HObPJVp2RIhG5f3uWrXBki7DwRaTN-ceHhj4uwk5iV8ybq-SHOmjl3NfVdN70MSjg14M1TuFWwH_pUdOKR90Qp9Jm4684gOruVlchzEKyD_qFMSR_CEt8fjWC-hXqr_wwjyxkIBN8a1OGrFilKdNkQQ_GDsCNEohR-Wawafer-1f"/></div>
          </div>
        </div>
      </header>
      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-margin-desktop">
          <div className="mb-xl flex flex-col gap-lg">
            <div className="flex justify-between items-end">
              <div><h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Partnership Finder</h2><p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">Identify and vet institutional partners for global consortiums.</p></div>
              <div className="flex gap-sm"><button className="flex items-center gap-sm px-md py-2 border border-outline-variant font-label-md text-label-md rounded hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-sm">grid_view</span>Grid</button><button className="flex items-center gap-sm px-md py-2 bg-surface-container-high border border-outline font-label-md text-label-md rounded"><span className="material-symbols-outlined text-sm">view_list</span>List</button></div>
            </div>
            <div className="grid grid-cols-4 gap-gutter bg-surface-container-low p-md rounded-lg border border-outline-variant">
              <div className="flex flex-col gap-xs"><label className="font-label-md text-label-md text-on-surface-variant">Primary Sector</label><select className="bg-white border border-outline-variant p-2 font-body-md text-body-md focus:border-primary outline-none"><option>Climate Adaptation</option><option>Public Health</option><option>Infrastructure</option><option>Education</option></select></div>
              <div className="flex flex-col gap-xs"><label className="font-label-md text-label-md text-on-surface-variant">Region of Operation</label><select className="bg-white border border-outline-variant p-2 font-body-md text-body-md focus:border-primary outline-none"><option>Sub-Saharan Africa</option><option>Southeast Asia</option><option>Latin America</option><option>Middle East</option></select></div>
              <div className="flex flex-col gap-xs"><label className="font-label-md text-label-md text-on-surface-variant">Capacity Level</label><select className="bg-white border border-outline-variant p-2 font-body-md text-body-md focus:border-primary outline-none"><option>Tier 1: Institutional</option><option>Tier 2: Regional Hub</option><option>Tier 3: Local Implementation</option></select></div>
              <div className="flex items-end"><button className="w-full bg-tertiary text-on-tertiary py-2 font-label-md text-label-md rounded hover:opacity-90">Apply Advanced Filters</button></div>
            </div>
          </div>
          <div className="flex flex-col gap-md">
            {[
              { icon: 'corporate_fare', name: 'Global Health Alliance (GHA)', verified: 'VERIFIED', loc: 'Geneva, Switzerland', staff: '500+ Staff', cap: 'High Capacity' },
              { icon: 'eco', name: 'TerraForm Foundation', verified: 'VERIFIED', loc: 'Nairobi, Kenya', staff: '120 Staff', cap: 'Medium Capacity' },
              { icon: 'foundation', name: 'Infrastructure For All', verified: 'UNDER REVIEW', loc: 'Singapore', staff: '340 Staff', cap: 'High Capacity', disabled: true },
              { icon: 'school', name: 'Beacon Education Consortium', verified: 'VERIFIED', loc: 'Washington D.C., USA', staff: '2,100 Staff', cap: 'Tier 1 Provider' },
            ].map((p, i) => (
              <div key={i} className="bg-surface-container-lowest border border-outline-variant p-lg flex items-center gap-xl hover:bg-surface-container transition-colors group">
                <div className="h-16 w-16 bg-surface-container flex-shrink-0 rounded flex items-center justify-center border border-outline-variant"><span className="material-symbols-outlined text-3xl text-primary">{p.icon}</span></div>
                <div className="flex-grow">
                  <div className="flex items-center gap-sm mb-xs"><h3 className="font-title-md text-title-md text-primary">{p.name}</h3><span className={`px-sm py-0.5 rounded font-label-md text-[10px] flex items-center gap-1 ${p.verified === 'VERIFIED' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant'}`}><span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>{p.verified === 'VERIFIED' ? 'verified' : 'pending_actions'}</span>{p.verified}</span></div>
                  <div className="flex gap-lg font-body-md text-body-md text-on-surface-variant"><span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span>{p.loc}</span><span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">groups</span>{p.staff}</span><span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">monitoring</span>{p.cap}</span></div>
                </div>
                <div className={`flex-shrink-0 flex gap-md ${p.disabled ? 'opacity-50 pointer-events-none' : ''}`}>
                  <button className="px-md py-2 font-label-md text-label-md border border-primary hover:bg-primary-container hover:text-on-primary-container transition-all">View Profile</button>
                  <button className="px-md py-2 font-label-md text-label-md bg-primary text-on-primary hover:opacity-90 transition-all">Initiate Discussion</button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2xl py-lg border-t border-outline-variant flex justify-between items-center font-label-md text-label-md text-on-surface-variant">
            <div>Showing 4 of 1,284 verified organizations</div>
            <div className="flex gap-xs">
              <button className="h-10 w-10 border border-outline-variant flex items-center justify-center hover:bg-surface-container"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="h-10 w-10 border border-primary bg-primary text-on-primary flex items-center justify-center">1</button>
              <button className="h-10 w-10 border border-outline-variant flex items-center justify-center hover:bg-surface-container">2</button>
              <button className="h-10 w-10 border border-outline-variant flex items-center justify-center hover:bg-surface-container">3</button>
              <span className="h-10 w-10 flex items-center justify-center">...</span>
              <button className="h-10 w-10 border border-outline-variant flex items-center justify-center hover:bg-surface-container">128</button>
              <button className="h-10 w-10 border border-outline-variant flex items-center justify-center hover:bg-surface-container"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
