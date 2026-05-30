"use client";

import React from 'react';
import Link from 'next/link';

export default function GrantMatchingPage() {
  return (
    <div className="bg-background text-body-md text-body-md overflow-hidden min-h-screen">
      {/* SIDE NAV BAR (The Anchor) */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full py-md z-50">
        <div className="px-md mb-xl">
          <div className="flex items-center gap-sm">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[20px]" data-icon="account_balance">account_balance</span>
            </div>
            <div>
              <h1 className="font-headline-md text-[18px] font-bold text-primary leading-tight">ElevestOS</h1>
              <p className="text-[10px] uppercase tracking-widest text-on-primary-container font-bold">Infrastructure Grade</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link href="/dashboard" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined mr-md" data-icon="dashboard">dashboard</span>
            <span className="font-body-md">Dashboard</span>
          </Link>
          <Link href="/for-ngos/grants" className="flex items-center px-md py-sm text-primary font-bold border-r-4 border-primary bg-surface-container transition-colors">
            <span className="material-symbols-outlined mr-md" data-icon="payments">payments</span>
            <span className="font-body-md">Grants</span>
          </Link>
          <Link href="/dashboard/projects" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined mr-md" data-icon="account_tree">account_tree</span>
            <span className="font-body-md">Projects</span>
          </Link>
          <Link href="/dashboard/reports" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined mr-md" data-icon="assessment">assessment</span>
            <span className="font-body-md">Reports</span>
          </Link>
          <Link href="/dashboard/compliance" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined mr-md" data-icon="inventory_2">inventory_2</span>
            <span className="font-body-md">Vault</span>
          </Link>
          <Link href="/platform/labs" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined mr-md" data-icon="science">science</span>
            <span className="font-body-md">Labs</span>
          </Link>
        </nav>
        <div className="mt-auto px-md py-md border-t border-outline-variant">
          <button className="w-full bg-primary text-on-primary py-sm rounded font-bold text-[14px] mb-lg hover:opacity-90 active:scale-95 transition-all">
            New Initiative
          </button>
          <div className="space-y-1">
            <Link href="#" className="flex items-center py-xs text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined mr-md" data-icon="help">help</span>
              <span className="font-body-md">Support</span>
            </Link>
            <Link href="/settings" className="flex items-center py-xs text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined mr-md" data-icon="settings">settings</span>
              <span className="font-body-md">Settings</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* TOP NAV BAR */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center gap-xl flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
            <input className="w-full bg-surface-container-low border border-outline-variant rounded py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none" placeholder="Search institutional grants..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-lg">
          <button className="bg-primary-container text-on-primary-container px-md py-sm rounded font-label-md text-label-md hover:opacity-80 transition-opacity">
            Compliance Check
          </button>
          <div className="flex items-center gap-md border-l border-outline-variant pl-lg">
            <button className="text-on-surface-variant hover:text-primary relative">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <button className="text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined" data-icon="history">history</span>
            </button>
            <div className="flex items-center gap-sm cursor-pointer group">
              <img className="w-8 h-8 rounded-full object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeM6YJ-Etah0rQGeNgbu04-f3RxY4tHhaDPJQJ9yCib8rR6jXd7ul041Es_4j7DsK0WUA8vdT-IQcUfw4TI9Z65ulwZiAvwCc2qjJthLyk laCbrCrJr8AuBUTsbFZmIIq9wbL_Qb0oj9MBApcx8t6rWmV6MhIMzbK-FyyMFyLIcArc9xHzFg6qBEpnUXowVF2S11f8NOBwIDRj8n82XtKazG-ZJ0zIqMKYuwX4lWiOIRyYfTJFowv0Cn2U1mpUZUBFLxYHnOcHgC6RP-VFv3"/>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary" data-icon="account_circle">account_circle</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="ml-64 mt-16 flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Center Grid (Discovery) */}
        <section className="flex-1 overflow-y-auto p-margin-desktop">
          {/* Page Header */}
          <div className="flex justify-between items-end mb-xl">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary">Grant Opportunities</h2>
              <p className="text-on-surface-variant font-body-lg">Curated matches for institutional infrastructure &amp; NGO programs.</p>
            </div>
            <div className="flex gap-md">
              <button className="flex items-center gap-sm px-md py-sm border border-outline-variant rounded font-label-md text-label-md hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                All Filters
              </button>
              <button className="flex items-center gap-sm px-md py-sm bg-primary text-on-primary rounded font-label-md text-label-md hover:opacity-90">
                <span className="material-symbols-outlined text-[18px]" data-icon="sort">sort</span>
                Recommended
              </button>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="grid grid-cols-3 gap-lg mb-2xl">
            <div className="bg-surface-container-low p-md rounded border border-outline-variant">
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Sector Focus</label>
              <select className="w-full bg-transparent border-none font-title-md text-primary focus:ring-0 cursor-pointer">
                <option>Global Health &amp; Sanitation</option>
                <option>Clean Water Infrastructure</option>
                <option>Education Technology</option>
                <option>Climate Resilience</option>
              </select>
            </div>
            <div className="bg-surface-container-low p-md rounded border border-outline-variant">
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Delivery History</label>
              <select className="w-full bg-transparent border-none font-title-md text-primary focus:ring-0 cursor-pointer">
                <option>High Output (5+ years)</option>
                <option>Emerging (1-3 years)</option>
                <option>Any History</option>
              </select>
            </div>
            <div className="bg-surface-container-low p-md rounded border border-outline-variant">
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Capacity Level</label>
              <select className="w-full bg-transparent border-none font-title-md text-primary focus:ring-0 cursor-pointer">
                <option>L3 Institutional (&gt;$10M Assets)</option>
                <option>L2 Advanced (&gt;$2M Assets)</option>
                <option>L1 Standard</option>
              </select>
            </div>
          </div>

          {/* Grant Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-md">
                <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center p-sm overflow-hidden">
                  <img className="w-full h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyZXJI-saSFD2H4Sf9GefXB877bHmGwQJFdH8rydQvisSyoCKEMguufdUT32L10f97fEybKsjx0iED4cx0QClf8rSvwE0HZVy0Le9AwkrCrJr8AuBUTsbFZmIIq9wbL_Qb0oj9MBApcx8t6rWmV6MhIMzbK-FyyMFyLIcArc9xHzFg6qBEpnUXowVF2S11f8NOBwIDRj8n82XtKazG-ZJ0zIqMKYuwX4lWiOIRyYfTJFowv0Cn2U1mpUZUBFLxYHnOcHgC6RP-VFv3"/>
                </div>
                <div className="bg-secondary-container px-sm py-1 rounded text-on-secondary-container font-label-md text-label-md flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="verified">verified</span>
                  98% Match
                </div>
              </div>
              <h3 className="font-title-md text-primary mb-xs">Global Water Equity Fund</h3>
              <p className="text-on-surface-variant text-body-md mb-md">Bill &amp; Melinda Gates Foundation</p>
              <div className="mb-lg py-sm border-y border-outline-variant flex justify-between items-center">
                <div>
                  <p className="text-caption text-on-surface-variant">AWARD RANGE</p>
                  <p className="font-title-md text-primary">$500k - $2.5M</p>
                </div>
                <div className="text-right">
                  <p className="text-caption text-on-surface-variant">DEADLINE</p>
                  <p className="font-label-md text-primary">OCT 24, 2024</p>
                </div>
              </div>
              <div className="mb-lg">
                <p className="font-label-md text-label-md text-on-surface-variant mb-sm uppercase">Eligibility Gaps</p>
                <div className="space-y-sm">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="check_circle">check_circle</span>
                    <span className="text-body-md">Geographic Alignment (Sub-Saharan Africa)</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="check_circle">check_circle</span>
                    <span className="text-body-md">Fiscal Audit Compliance (2021-2023)</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="info">info</span>
                    <span className="text-body-md text-on-surface-variant italic">Direct Community Engagement Proof (Pending)</span>
                  </div>
                </div>
              </div>
              <button className="mt-auto w-full py-md border border-primary text-primary font-bold rounded hover:bg-primary hover:text-on-primary transition-all">View Details</button>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-md">
                <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center p-sm overflow-hidden">
                  <img className="w-full h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3DqyIgU-1_svyl7qKxwVaUe_SEwREmjxla_RMH6petyIUyVoeVJ_ok3BH4s0D4VjQO3kmXQV0fDYcQMirHr1XHYAWCyl7ZCW2V9eVJVAN0SSAxrf2KHqeR7XRtKGHG7JpIf6RrxTGBr3QCMO1D-BMkQfyIEn33iMpN09Po7LbfHBSLQDn_g0Q-m4nmzE4bzxf_Dn6eEWqE_3bzXbt_MTiQbXowt90Y4JfpbJ7i9w9369AWwDlnqM0WrMfTLj1EqZ5zWazUqON2dV"/>
                </div>
                <div className="bg-secondary-container px-sm py-1 rounded text-on-secondary-container font-label-md text-label-md flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="verified">verified</span>
                  92% Match
                </div>
              </div>
              <h3 className="font-title-md text-primary mb-xs">Climate Resilience Grant</h3>
              <p className="text-on-surface-variant text-body-md mb-md">Green Climate Fund (GCF)</p>
              <div className="mb-lg py-sm border-y border-outline-variant flex justify-between items-center">
                <div>
                  <p className="text-caption text-on-surface-variant">AWARD RANGE</p>
                  <p className="font-title-md text-primary">$1.2M - $5.0M</p>
                </div>
                <div className="text-right">
                  <p className="text-caption text-on-surface-variant">DEADLINE</p>
                  <p className="font-label-md text-primary">NOV 12, 2024</p>
                </div>
              </div>
              <div className="mb-lg">
                <p className="font-label-md text-label-md text-on-surface-variant mb-sm uppercase">Eligibility Gaps</p>
                <div className="space-y-sm">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="check_circle">check_circle</span>
                    <span className="text-body-md">Environmental Impact Score &gt; 8.5</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-on-tertiary-container text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="info">info</span>
                    <span className="text-body-md text-on-surface-variant italic">Multi-year reporting capacity verification</span>
                  </div>
                </div>
              </div>
              <button className="mt-auto w-full py-md border border-primary text-primary font-bold rounded hover:bg-primary hover:text-on-primary transition-all">View Details</button>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-md">
                <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center p-sm overflow-hidden">
                  <img className="w-full h-full object-contain mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV1gKqWFPBRW91qeMeybW-zzpnpMZbNvAVqvxzlu8ls8jAMvjNrayns7xQpMwpY-51sL9elKxMa7OOpm0iMlYpLzGAhPIDhx4Elux4YpmxanfCRvyUAOvF53iQUTQEbG1GF4sZZ95w5lIuRGs2J9UttcLlHxDKvGtil9Kd64SveaZoyog-gIHAcMH3twa_kNqXdUjIbtK6gOnCdyUR6YBX1GWCM0G5q-eQZXYTrdfQ40ziynjYFsdusqaANZiN7StFrhq94s1LoZlJ"/>
                </div>
                <div className="bg-surface-container-highest px-sm py-1 rounded text-on-surface-variant font-label-md text-label-md flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]" data-icon="analytics">analytics</span>
                  85% Match
                </div>
              </div>
              <h3 className="font-title-md text-primary mb-xs">Education Infrastructure 2025</h3>
              <p className="text-on-surface-variant text-body-md mb-md">Global Partnership for Education</p>
              <div className="mb-lg py-sm border-y border-outline-variant flex justify-between items-center">
                <div>
                  <p className="text-caption text-on-surface-variant">AWARD RANGE</p>
                  <p className="font-title-md text-primary">$250k - $750k</p>
                </div>
                <div className="text-right">
                  <p className="text-caption text-on-surface-variant">DEADLINE</p>
                  <p className="font-label-md text-primary">DEC 01, 2024</p>
                </div>
              </div>
              <div className="mb-lg">
                <p className="font-label-md text-label-md text-on-surface-variant mb-sm uppercase">Eligibility Gaps</p>
                <div className="space-y-sm">
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="check_circle">check_circle</span>
                    <span className="text-body-md">Governance Structure Verified</span>
                  </div>
                  <div className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-error text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="cancel">cancel</span>
                    <span className="text-body-md text-error">Missing Tertiary Reference (Ministry level)</span>
                  </div>
                </div>
              </div>
              <button className="mt-auto w-full py-md border border-primary text-primary font-bold rounded hover:bg-primary hover:text-on-primary transition-all">View Details</button>
            </div>
          </div>
        </section>

        {/* Right Sidebar (Saved/Shortlisted) */}
        <aside className="w-80 bg-surface border-l border-outline-variant overflow-y-auto p-lg">
          <div className="mb-xl">
            <h3 className="font-title-md text-primary flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="bookmarks">bookmarks</span>
              Saved Calls
            </h3>
            <div className="mt-md space-y-md">
              <div className="p-md bg-surface-container-lowest border border-outline-variant rounded hover:border-primary cursor-pointer transition-all">
                <p className="text-caption text-on-surface-variant uppercase font-bold">Health &amp; Hygiene</p>
                <h4 className="font-body-md font-bold text-primary mt-1">Pandemic Preparedness Lab</h4>
                <div className="flex justify-between mt-sm text-caption">
                  <span>$2.0M Remaining</span>
                  <span className="text-secondary font-bold">94% Fit</span>
                </div>
              </div>
              <div className="p-md bg-surface-container-lowest border border-outline-variant rounded hover:border-primary cursor-pointer transition-all">
                <p className="text-caption text-on-surface-variant uppercase font-bold">Agritech</p>
                <h4 className="font-body-md font-bold text-primary mt-1">Arid Land Irrigation Fund</h4>
                <div className="flex justify-between mt-sm text-caption">
                  <span>$500k Remaining</span>
                  <span className="text-on-surface-variant">Pending</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-xl">
            <h3 className="font-title-md text-primary flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="group">group</span>
              Shortlisted Partners
            </h3>
            <div className="mt-md space-y-sm">
              <div className="flex items-center gap-md p-sm hover:bg-surface-container transition-colors rounded">
                <div className="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center font-bold text-primary">HA</div>
                <div>
                  <p className="font-body-md font-bold">Habitat Alliance</p>
                  <p className="text-caption text-on-surface-variant">L3 Implementation</p>
                </div>
              </div>
              <div className="flex items-center gap-md p-sm hover:bg-surface-container transition-colors rounded">
                <div className="w-10 h-10 rounded bg-secondary-fixed flex items-center justify-center font-bold text-secondary">SC</div>
                <div>
                  <p className="font-body-md font-bold">Sustain Corps</p>
                  <p className="text-caption text-on-surface-variant">L2 Reporting</p>
                </div>
              </div>
              <div className="flex items-center gap-md p-sm hover:bg-surface-container transition-colors rounded">
                <div className="w-10 h-10 rounded bg-tertiary-fixed flex items-center justify-center font-bold text-tertiary">WF</div>
                <div>
                  <p className="font-body-md font-bold">WaterFirst NGO</p>
                  <p className="text-caption text-on-surface-variant">Local Specialist</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-md text-label-md font-label-md text-primary hover:underline flex items-center justify-center gap-xs">
              Find New Partners
              <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
          <div className="bg-surface-container p-md rounded-xl">
            <p className="font-title-md text-primary mb-sm">AI Recommendation</p>
            <p className="text-body-md text-on-surface-variant leading-relaxed mb-md">
              Based on your "Project Cleanwater" history, you have a high probability of success for the <strong>Global Water Equity Fund</strong>.
            </p>
            <div className="w-full bg-surface-container-highest rounded-full h-1 mb-md">
              <div className="bg-secondary h-1 rounded-full" style={{ width: '98%' }}></div>
            </div>
            <button className="w-full bg-tertiary-container text-on-tertiary py-sm rounded font-bold text-[14px] hover:opacity-90">Auto-Fill Application</button>
          </div>
        </aside>
      </main>
    </div>
  );
}
