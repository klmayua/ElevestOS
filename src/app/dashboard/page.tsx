"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NGODashboard() {
  const [gaugeOffset, setGaugeOffset] = useState('251.2');

  useEffect(() => {
    // Dash offset calculation: 251.2 * (1 - 850/1000) = 37.68
    setGaugeOffset('37.68');
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen overflow-x-hidden">
      {/* Left Side Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-tertiary-container text-on-primary-container border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl">
          <h1 className="font-headline-md text-headline-md font-bold text-on-primary">ElevestOS</h1>
          <p className="font-label-md text-label-md opacity-70 tracking-widest uppercase">Infrastructure Grade</p>
        </div>
        <nav className="flex-1 space-y-xs px-sm">
          <Link href="/dashboard" className="flex items-center gap-md px-md py-sm text-primary-fixed font-bold border-r-4 border-primary-fixed bg-on-primary-fixed-variant transition-colors group">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span className="font-body-md text-body-md">Dashboard</span>
          </Link>
          <Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-on-primary-fixed-variant hover:text-primary-fixed transition-colors">
            <span className="material-symbols-outlined">payments</span>
            <span className="font-body-md text-body-md">Grants</span>
          </Link>
          <Link href="/dashboard/projects" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-on-primary-fixed-variant hover:text-primary-fixed transition-colors">
            <span className="material-symbols-outlined">account_tree</span>
            <span className="font-body-md text-body-md">Projects</span>
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-on-primary-fixed-variant hover:text-primary-fixed transition-colors">
            <span className="material-symbols-outlined">assessment</span>
            <span className="font-body-md text-body-md">Reports</span>
          </Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-on-primary-fixed-variant hover:text-primary-fixed transition-colors">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-body-md text-body-md">Vault</span>
          </Link>
          <Link href="/platform/labs" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-on-primary-fixed-variant hover:text-primary-fixed transition-colors">
            <span className="material-symbols-outlined">science</span>
            <span className="font-body-md text-body-md">Labs</span>
          </Link>
        </nav>
        <div className="mt-auto px-sm pt-md border-t border-outline-variant/20">
          <button className="w-full bg-secondary text-on-tertiary py-sm rounded-lg font-title-md text-title-md flex items-center justify-center gap-sm mb-lg active:scale-95 transition-transform">
            <span className="material-symbols-outlined">add_circle</span>
            New Initiative
          </button>
          <Link href="#" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-primary-fixed transition-colors">
            <span className="material-symbols-outlined">help</span>
            <span className="font-body-md text-body-md">Support</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-primary-fixed transition-colors">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-body-md text-body-md">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center flex-1 max-w-xl">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
            <input className="w-full bg-surface-container-low border border-outline-variant rounded-full pl-xl pr-md py-xs font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Global search for grants, compliance ID, or reports..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-lg">
          <button className="font-label-md text-label-md text-deep-navy bg-surface-container-high px-md py-sm rounded hover:bg-surface-variant transition-colors border border-outline-variant">
            COMPLIANCE CHECK
          </button>
          <div className="flex items-center gap-md text-on-surface-variant">
            <button className="hover:text-primary transition-colors active:scale-95"><span className="material-symbols-outlined">notifications</span></button>
            <button className="hover:text-primary transition-colors active:scale-95"><span className="material-symbols-outlined">history</span></button>
            <div className="h-8 w-8 rounded-full overflow-hidden bg-surface-dim">
              <img alt="Admin Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_kqizZZdbRaa7cUiddvuYITdykgwEAI3YuVdLXhcMH8LDgR_X-64nWPlecMBh2eE1jk8coH9YwvOzgsuEqGBnmNBmyrtLmgLKYei3hBmm6j7M0RkFOewWh31X6SgXiGwVZBKMd8mBUKgLaK8BAlsWeYLIlYO_TeARpXbC6Lxbge3eUX1cpaBf-ewBS9o-MCnNT5s3g0-FXm9RGmUgW90dUiTYWvsPda1C8KqoHC4197D9TNzGcidr0BXcXlQE3CQzrVw-5VHVd_gi"/>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-64 mt-16 p-margin-desktop">
        {/* Welcome Header */}
        <div className="mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Institutional Dashboard</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">System oversight and fundability metrics for Q3 2024.</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-lg">
          {/* Trust Index Gauge (4 cols) */}
          <div className="col-span-12 lg:col-span-4 bg-white border border-outline-variant p-xl flex flex-col items-center justify-center text-center shadow-sm transition-all hover:shadow-md">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-lg">Trust Index Fundability</h3>
            <div className="relative w-[200px] h-[200px] mb-md">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-surface-container stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                <circle 
                  className="text-secondary stroke-current transition-all duration-1000 ease-out" 
                  style={{ 
                    transform: 'rotate(-90deg)', 
                    transformOrigin: '50% 50%', 
                    strokeDasharray: '251.2', 
                    strokeDashoffset: gaugeOffset, 
                    strokeLinecap: 'round' 
                  }} 
                  cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display-lg text-display-lg text-primary">850</span>
                <span className="font-label-md text-label-md text-secondary font-bold uppercase">Excellent</span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[200px]">Top 2% of NGOs globally for operational transparency.</p>
          </div>

          {/* Growth Velocity Chart (8 cols) */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant p-xl relative overflow-hidden shadow-sm transition-all hover:shadow-md">
            <div className="flex justify-between items-start mb-xl">
              <div>
                <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-xs">Growth Velocity</h3>
                <div className="flex items-baseline gap-sm">
                  <span className="font-headline-lg text-headline-lg">24.8k</span>
                  <span className="text-secondary font-bold text-body-md flex items-center">
                    <span className="material-symbols-outlined text-sm">arrow_upward</span> 12%
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">Daily donor interactions (Last 30 days)</p>
              </div>
              <select className="bg-surface-container-low border-outline-variant rounded font-label-md text-label-md px-sm py-xs outline-none">
                <option>Real-time Feed</option>
                <option>Weekly Aggregated</option>
              </select>
            </div>
            <div className="h-48 flex items-end justify-between gap-base w-full">
              {[60, 65, 55, 80, 75, 90, 85, 60, 70, 95, 80, 65, 70, 100].map((h, i) => (
                <div 
                  key={i} 
                  className={`w-full transition-colors hover:bg-secondary ${i === 13 ? 'bg-secondary' : 'bg-primary/10'}`} 
                  style={{ height: `${h}%` }}
                  title={`Day ${i + 1}`}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-md font-label-md text-label-md text-outline">
              <span>AUG 01</span>
              <span>AUG 15</span>
              <span>TODAY</span>
            </div>
          </div>

          {/* Active Grants Summary (8 cols) */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant shadow-sm transition-all hover:shadow-md">
            <div className="p-xl border-b border-outline-variant flex justify-between items-center">
              <h3 className="font-title-md text-title-md text-primary">Active Grants Summary</h3>
              <button className="text-primary hover:underline font-label-md text-label-md">EXPORT LEDGER</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="text-left py-md px-xl font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Initiative</th>
                    <th className="text-left py-md px-xl font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">ID</th>
                    <th className="text-left py-md px-xl font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Utilization</th>
                    <th className="text-right py-md px-xl font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-md px-xl">
                      <div className="font-body-md font-bold text-primary">Clean Water Initiative</div>
                      <div className="text-caption text-on-surface-variant">Central African Hub</div>
                    </td>
                    <td className="py-md px-xl font-label-md text-label-md text-on-surface-variant">#CWI-992</td>
                    <td className="py-md px-xl w-48">
                      <div className="flex items-center gap-md">
                        <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-[64%]"></div>
                        </div>
                        <span className="font-label-md text-label-md text-primary">64%</span>
                      </div>
                    </td>
                    <td className="py-md px-xl text-right">
                      <span className="inline-block px-sm py-xs bg-secondary-container/30 text-secondary font-bold text-caption rounded border border-secondary/20 uppercase">Operational</span>
                    </td>
                  </tr>
                  <tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                    <td className="py-md px-xl">
                      <div className="font-body-md font-bold text-primary">Digital Literacy</div>
                      <div className="text-caption text-on-surface-variant">Rural SE Asia Project</div>
                    </td>
                    <td className="py-md px-xl font-label-md text-label-md text-on-surface-variant">#DL-4022</td>
                    <td className="py-md px-xl">
                      <div className="flex items-center gap-md">
                        <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[12%]"></div>
                        </div>
                        <span className="font-label-md text-label-md text-primary">12%</span>
                      </div>
                    </td>
                    <td className="py-md px-xl text-right">
                      <span className="inline-block px-sm py-xs bg-surface-container text-on-surface-variant font-bold text-caption rounded border border-outline-variant uppercase tracking-tight">Deployment Phase</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="py-md px-xl">
                      <div className="font-body-md font-bold text-primary">Reforestation Grid</div>
                      <div className="text-caption text-on-surface-variant">Amazon Basin II</div>
                    </td>
                    <td className="py-md px-xl font-label-md text-label-md text-on-surface-variant">#RFG-771</td>
                    <td className="py-md px-xl">
                      <div className="flex items-center gap-md">
                        <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-[88%]"></div>
                        </div>
                        <span className="font-label-md text-label-md text-primary">88%</span>
                      </div>
                    </td>
                    <td className="py-md px-xl text-right">
                      <span className="inline-block px-sm py-xs bg-secondary-container/30 text-secondary font-bold text-caption rounded border border-secondary/20 uppercase">Operational</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar Info Cluster (4 cols) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-lg">
            <div className="bg-primary-container text-on-primary-container p-xl rounded border border-on-primary-fixed-variant relative overflow-hidden shadow-sm">
              <div className="relative z-10">
                <div className="flex items-center gap-sm mb-md">
                  <span className="material-symbols-outlined text-secondary">alarm</span>
                  <h3 className="font-title-md text-title-md text-primary">Critical Deadlines</h3>
                </div>
                <ul className="space-y-md">
                  <li className="flex items-start gap-md group cursor-pointer">
                    <div className="mt-xs h-3 w-3 rounded-full bg-error shrink-0"></div>
                    <div>
                      <p className="font-body-md font-bold text-primary group-hover:underline">Q3 Impact Report</p>
                      <p className="text-caption text-on-primary-container opacity-80">Due in 2 days • Finalizing metrics</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-md group cursor-pointer">
                    <div className="mt-xs h-3 w-3 rounded-full bg-error shrink-0"></div>
                    <div>
                      <p className="font-body-md font-bold text-primary group-hover:underline">USAID Compliance Audit</p>
                      <p className="text-caption text-on-primary-container opacity-80">Scheduled: Oct 14, 2024</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-md group cursor-pointer opacity-60">
                    <div className="mt-xs h-3 w-3 rounded-full bg-outline shrink-0"></div>
                    <div>
                      <p className="font-body-md font-bold text-primary">Global Fund Renewal</p>
                      <p className="text-caption text-on-primary-container opacity-80">Documentation window open</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
            </div>
            <div className="bg-white border border-outline-variant p-xl flex-1 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-sm mb-lg">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <h3 className="font-title-md text-title-md text-primary">Compliance Log</h3>
              </div>
              <div className="space-y-md">
                <div className="p-md bg-surface-container rounded-lg border border-outline-variant/50">
                  <div className="flex justify-between items-start mb-xs">
                    <span className="font-label-md text-label-md text-primary">KYB VERIFIED</span>
                    <span className="text-[10px] text-outline">14:22 UTC</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant">New donor entity 'Global Relief Found.' cleared Tier 3 vetting.</p>
                </div>
                <div className="p-md border border-outline-variant/30 rounded-lg">
                  <div className="flex justify-between items-start mb-xs">
                    <span className="font-label-md text-label-md text-primary">SYSTEM UPDATE</span>
                    <span className="text-[10px] text-outline">Yesterday</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant">Tax exemption protocols updated for 2025 EU frameworks.</p>
                </div>
                <div className="p-md border border-outline-variant/30 rounded-lg">
                  <div className="flex justify-between items-start mb-xs">
                    <span className="font-label-md text-label-md text-secondary">PASS</span>
                    <span className="text-[10px] text-outline">Oct 08</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant">Weekly smart contract integrity sweep completed. No deviations.</p>
                </div>
              </div>
              <button className="w-full mt-xl py-sm border border-outline-variant font-label-md text-label-md text-primary uppercase hover:bg-surface-container-low transition-all">
                View Full Audit Trail
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
