"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProjectWorkspace() {
  const [progressWidth, setProgressWidth] = useState('0%');

  useEffect(() => {
    setTimeout(() => setProgressWidth('68%'), 300);
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed overflow-hidden min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full py-md z-50">
        <div className="px-md mb-xl">
          <h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1>
          <p className="font-label-md text-label-md text-on-primary-container tracking-wider uppercase">Infrastructure Grade</p>
        </div>
        <nav className="flex-1 px-sm space-y-base">
          <Link href="/dashboard" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-body-md text-body-md">Dashboard</span>
          </Link>
          <Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">payments</span>
            <span className="font-body-md text-body-md">Grants</span>
          </Link>
          <Link href="/dashboard/projects" className="flex items-center gap-md px-md py-sm rounded text-primary font-bold border-r-4 border-primary bg-surface-container">
            <span className="material-symbols-outlined">account_tree</span>
            <span className="font-body-md text-body-md">Projects</span>
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">assessment</span>
            <span className="font-body-md text-body-md">Reports</span>
          </Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-body-md text-body-md">Vault</span>
          </Link>
          <Link href="/platform/labs" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">science</span>
            <span className="font-body-md text-body-md">Labs</span>
          </Link>
        </nav>
        <div className="px-sm pt-md border-t border-outline-variant space-y-base">
          <button className="w-full mb-md bg-primary text-on-primary font-title-md text-title-md py-sm px-md rounded active:scale-95 transition-transform flex items-center justify-center gap-sm">
            <span className="material-symbols-outlined">add</span>
            New Initiative
          </button>
          <Link href="#" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">help</span>
            <span className="font-body-md text-body-md">Support</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Viewport */}
      <main className="ml-64 h-screen flex flex-col">
        {/* Top Nav Bar */}
        <header className="h-16 flex justify-between items-center px-margin-desktop bg-surface border-b border-outline-variant z-40">
          <div className="flex items-center gap-xl">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="pl-xl pr-md py-xs bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary w-64 text-body-md" placeholder="Search resources..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-lg">
            <button className="font-label-md text-label-md bg-secondary-container text-on-secondary-container px-md py-xs rounded uppercase font-bold active:scale-95 transition-transform">
              Compliance Check
            </button>
            <div className="flex items-center gap-md border-l border-outline-variant pl-lg">
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</span>
              <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">history</span>
              <div className="flex items-center gap-sm ml-sm cursor-pointer">
                <img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARfyYmlk56EwE5wPuWkcYapfzudO_DRkZX8LLioJSsGQ10vZlGAzQsZSxgRaY3_swU0sMHiIetxc6TYmePdQVB9Pu4SkF_44M9NcoMGAHSNDVkcFMyoxZWqTnkS_L laCbrCrJr8AuBUTsbFZmIIq9wbL_Qb0oj9MBApcx8t6rWmV6MhIMzbK-FyyMFyLIcArc9xHzFg6qBEpnUXowVF2S11f8NOBwIDRj8n82XtKazG-ZJ0zIqMKYuwX4lWiOIRyYfTJFowv0Cn2U1mpUZUBFLxYHnOcHgC6RP-VFv3"/>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-margin-desktop">
          {/* Context Header */}
          <div className="mb-xl flex justify-between items-end">
            <div>
              <nav className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md uppercase mb-xs">
                <span>Projects</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-bold">Clean Water Initiative</span>
              </nav>
              <h2 className="font-headline-lg text-headline-lg text-primary">Clean Water Initiative</h2>
              <div className="flex items-center gap-md mt-sm">
                <div className="flex items-center gap-xs bg-secondary/10 px-sm py-xs rounded">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="font-label-md text-label-md text-on-secondary-container font-bold uppercase">Execution Status: ON TRACK</span>
                </div>
                <span className="text-on-surface-variant font-body-md">Phase 3 of 5</span>
              </div>
            </div>
            <div className="flex gap-sm">
              <button className="flex items-center gap-xs border border-outline px-md py-sm rounded hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">download</span>
                Export Manifest
              </button>
              <button className="flex items-center gap-xs bg-primary text-on-primary px-md py-sm rounded active:scale-95 transition-transform">
                <span className="material-symbols-outlined">edit_document</span>
                Update Log
              </button>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-gutter">
            {/* Progress & Roadmap Section */}
            <div className="col-span-8 flex flex-col gap-gutter">
              {/* Progress Overview */}
              <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
                <div className="flex justify-between items-center mb-md">
                  <h3 className="font-title-md text-title-md text-primary">Aggregate Completion</h3>
                  <span className="font-label-md text-label-md bg-primary-fixed text-on-primary-fixed px-sm py-xs rounded">68% COMPLETE</span>
                </div>
                <div className="w-full h-4 bg-surface-container rounded-full overflow-hidden mb-sm">
                  <div className="h-full bg-secondary transition-all duration-1000 ease-out" style={{ width: progressWidth }}></div>
                </div>
                <div className="flex justify-between text-caption text-on-surface-variant">
                  <span>Started: Jan 2024</span>
                  <span>Projected Completion: Dec 2024</span>
                </div>
              </div>

              {/* Interactive Milestone Roadmap */}
              <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex-1">
                <h3 className="font-title-md text-title-md text-primary mb-xl">Milestone Roadmap</h3>
                <div className="relative flex flex-col gap-xl">
                  {/* Milestone 1 */}
                  <div className="flex gap-xl relative">
                    <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 z-10">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <div className="pb-md relative">
                      <div className="absolute -left-[16px] top-0 w-[1px] h-full bg-outline-variant"></div>
                      <h4 className="font-title-md text-title-md">Feasibility Study &amp; Site Surveys</h4>
                      <p className="text-on-surface-variant text-body-md mt-xs">Completed comprehensive geological assessments across 12 target regions.</p>
                      <span className="text-caption text-on-surface-variant mt-sm block">CLOSED: FEB 12, 2024</span>
                    </div>
                  </div>
                  {/* Milestone 2 */}
                  <div className="flex gap-xl relative">
                    <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center shrink-0 z-10">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <div className="pb-md relative">
                      <div className="absolute -left-[16px] top-0 w-[1px] h-full bg-outline-variant"></div>
                      <h4 className="font-title-md text-title-md">Infrastructure Procurement</h4>
                      <p className="text-on-surface-variant text-body-md mt-xs">All high-grade filtration systems and piping modules secured and logged in Vault.</p>
                      <span className="text-caption text-on-surface-variant mt-sm block">CLOSED: APR 05, 2024</span>
                    </div>
                  </div>
                  {/* Milestone 3 Active */}
                  <div className="flex gap-xl relative">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 z-10 outline outline-4 outline-primary-container/20">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                    </div>
                    <div className="pb-md relative">
                      <div className="absolute -left-[16px] top-0 w-[1px] h-full bg-outline-variant"></div>
                      <div className="flex items-center gap-md">
                        <h4 className="font-title-md text-title-md text-primary">System Implementation (Phase 3)</h4>
                        <span className="bg-secondary/10 text-secondary text-caption px-xs py-[2px] rounded uppercase">Active</span>
                      </div>
                      <p className="text-on-surface-variant text-body-md mt-xs">Installation of filtration units in the northern sectors. 42% of hardware deployed.</p>
                      <div className="mt-md p-sm bg-surface rounded border border-outline-variant flex items-center gap-md">
                        <div className="w-12 h-12 bg-surface-variant rounded flex items-center justify-center">
                          <span className="material-symbols-outlined text-outline">engineering</span>
                        </div>
                        <div>
                          <span className="block text-caption font-bold text-on-surface uppercase">On-Site Logistics</span>
                          <span className="text-body-md text-on-surface-variant">15 field units reporting daily data.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Milestone 4 */}
                  <div className="flex gap-xl relative">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0 z-10">
                      <span className="material-symbols-outlined">pending</span>
                    </div>
                    <div className="relative">
                      <h4 className="font-title-md text-title-md text-on-surface-variant">Quality Assurance &amp; Certification</h4>
                      <p className="text-on-surface-variant text-body-md mt-xs">Pending completion of system installation. Estimated start: Sept 2024.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Widgets & Map Section */}
            <div className="col-span-4 flex flex-col gap-gutter">
              {/* Financial Widget */}
              <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
                <h3 className="font-title-md text-title-md text-primary mb-lg">Spending vs. Budget</h3>
                <div className="relative flex justify-center items-center py-md">
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle cx="80" cy="80" fill="transparent" r="70" stroke="#eceef0" strokeWidth="12"></circle>
                    <circle cx="80" cy="80" fill="transparent" r="70" stroke="#000000" strokeDasharray="440" strokeDashoffset="110" strokeWidth="12"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-headline-md text-headline-md text-primary">$2.4M</span>
                    <span className="text-caption text-on-surface-variant uppercase tracking-tighter">Expended</span>
                  </div>
                </div>
                <div className="mt-lg pt-lg border-t border-outline-variant">
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Total Allocation</span>
                    <span className="font-label-md text-label-md text-primary">$3.2M</span>
                  </div>
                  <div className="flex justify-between items-center mt-xs">
                    <span className="text-on-surface-variant">Remaining Balance</span>
                    <span className="font-label-md text-label-md text-secondary font-bold">$0.8M</span>
                  </div>
                </div>
              </div>

              {/* Implementation Zone Map */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden h-[300px] flex flex-col">
                <div className="p-md border-b border-outline-variant flex justify-between items-center">
                  <h3 className="font-title-md text-title-md text-primary">Implementation Zone</h3>
                  <span className="material-symbols-outlined text-outline cursor-pointer">open_in_full</span>
                </div>
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-surface-dim flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_IIwQfxp0G-0v2amLL7LdoTYuTJdpgWWVGzAnkGz2Xv6JfDc--XwyhkOosiTschDIDQ9TFf5VOaO8bd6pB93XYFHcdmas5DyUGOxzS7xcGeEvU5NMWDjE-sS-Dm7zJO55AAojuve9rrGTMVwmyt8rawRq3gxMTfAuVYh6sBTXKaqUkOYj37BAp_hGRGAsSyaYMbSRh93sTFJvuFky_bc-e_k5KbDY9o4PISphE0G--MWKZk-OnLiW4s_YGthWQRcDAG3YbcSlfXlH"/>
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-secondary border-2 border-white rounded-full shadow-lg"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-secondary border-2 border-white rounded-full shadow-lg"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary border-2 border-white rounded-full shadow-lg animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-md left-md bg-surface-container-lowest/90 backdrop-blur-sm p-sm rounded border border-outline-variant">
                    <span className="text-caption font-bold text-primary">LAT: 0.023 | LON: 37.906</span>
                  </div>
                </div>
              </div>

              {/* Active Collaborators */}
              <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex-1 min-h-[400px] flex flex-col">
                <h3 className="font-title-md text-title-md text-primary mb-lg">Active Collaborators</h3>
                <div className="space-y-lg flex-1 overflow-y-auto pr-xs">
                  <div className="flex items-start gap-md">
                    <img alt="Sarah Chen" className="w-10 h-10 rounded-full border border-outline-variant shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSjV4pp3IiwJntg70D4WFU_HgzbtuIf41rqTayGkANumaOiLSHibbaskhXHa9WMxyYhSW_AayIF89Pe9lz1KStCxxxZmM2aYkl66_TkNRF0Ave9AkGiZ-CkblmCfvlR72KHf1dhCGucPki_v16JJRdAgEKm93Bw09yeYE-KP4KG06qX0NZyYwZ3ld-uDCkkhfn4hGTxXRxR7LrWO4BGuC4pxFIkBamc7CE1_1S96cExaj4aiPPODxdOeMU5r43aW9IRagC08_jWiv6"/>
                    <div>
                      <div className="flex justify-between items-center">
                        <h4 className="font-body-md text-body-md font-bold text-primary">Sarah Chen</h4>
                        <span className="text-caption text-secondary">ACTIVE</span>
                      </div>
                      <p className="text-caption text-on-surface-variant">Lead Hydrologist</p>
                      <div className="mt-xs text-body-md bg-surface p-xs rounded border-l-2 border-outline-variant">
                        "Updated site-B filtration parameters."
                        <span className="block text-[10px] text-outline mt-[2px]">12 MINUTES AGO</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-md">
                    <img alt="Marcus Thorne" className="w-10 h-10 rounded-full border border-outline-variant shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8qCHtxVITkM7fm2dBjD9691RL-Dg-i42mQYwiNI3JKkHRfX9U5fO9WQ9tC6yzKdJ9GdMMesLk48-JgbJjHu6Z1jvbj_HteqMPwgx4FZN7LQdrGrbquLnSeCaNcd69HOpuoel6CJXtYcba2596N-DJthcQcI68LPb87jQE3kOE2fh5e1cZkPlX_bUDeuxUmTEB6FaqdQ09e8c2jfLEu39zODWFIAjxbo66KCeG6OyfpPh95z4sGjNL4B4k3P7vBlsbSoOxxVzuahdT"/>
                    <div>
                      <div className="flex justify-between items-center">
                        <h4 className="font-body-md text-body-md font-bold text-primary">Marcus Thorne</h4>
                        <span className="text-caption text-on-surface-variant">OFFLINE</span>
                      </div>
                      <p className="text-caption text-on-surface-variant">Ops Logistics</p>
                      <div className="mt-xs text-body-md text-on-surface-variant italic">
                        "Logistics manifests uploaded for Q3."
                        <span className="block text-[10px] text-outline mt-[2px]">2 HOURS AGO</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-md">
                    <img alt="Elena Rodriguez" className="w-10 h-10 rounded-full border border-outline-variant shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRzxOo5EPzNWXpT9RNJ4G3eWJkJeKZec4vwGuJBp9wi4Hy0_-WqV3Jdd8nf3QPTIbiJH laS_O_B8 laCbrCrJr8AuBUTsbFZmIIq9wbL_Qb0oj9MBApcx8t6rWmV6MhIMzbK-FyyMFyLIcArc9xHzFg6qBEpnUXowVF2S11f8NOBwIDRj8n82XtKazG-ZJ0zIqMKYuwX4lWiOIRyYfTJFowv0Cn2U1mpUZUBFLxYHnOcHgC6RP-VFv3"/>
                    <div>
                      <div className="flex justify-between items-center">
                        <h4 className="font-body-md text-body-md font-bold text-primary">Elena Rodriguez</h4>
                        <span className="text-caption text-secondary">ACTIVE</span>
                      </div>
                      <p className="text-caption text-on-surface-variant">Finance Lead</p>
                      <div className="mt-xs text-body-md bg-surface p-xs rounded border-l-2 border-outline-variant">
                        "Disbursement for Sector 4 approved."
                        <span className="block text-[10px] text-outline mt-[2px]">JUST NOW</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-lg py-sm text-label-md font-label-md text-primary border border-outline-variant rounded hover:bg-surface-container transition-all">
                  VIEW FULL TEAM LOGS
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
