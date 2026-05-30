"use client";

import React from 'react';
import Link from 'next/link';

const zones = ['NAM', 'LATAM', 'EMEA', 'APAC', 'MENA', 'OCE', 'C-ASIA', 'S-ASIA'];
const gridItems = Array.from({ length: 24 }, (_, i) => ({ zone: zones[i % 8], num: 100 + i, compliant: Math.random() > 0.05 }));

export default function ComplianceAuditVault() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased overflow-hidden min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl">
          <h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1>
          <p className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Infrastructure Grade</p>
        </div>
        <nav className="flex-1 space-y-base px-sm">
          <Link href="/dashboard" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">dashboard</span><span className="font-body-md">Dashboard</span>
          </Link>
          <Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">payments</span><span className="font-body-md">Grants</span>
          </Link>
          <Link href="/dashboard/projects" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">account_tree</span><span className="font-body-md">Projects</span>
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">assessment</span><span className="font-body-md">Reports</span>
          </Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-4 border-primary bg-surface-container">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span><span className="font-body-md">Vault</span>
          </Link>
          <Link href="/platform/labs" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined">science</span><span className="font-body-md">Labs</span>
          </Link>
        </nav>
        <div className="px-md py-md border-t border-outline-variant space-y-md">
          <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-title-md flex items-center justify-center gap-sm active:scale-95 transition-transform">
            <span className="material-symbols-outlined">add</span>New Initiative
          </button>
          <div className="space-y-sm">
            <Link href="#" className="flex items-center gap-md px-md py-xs text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">help</span><span className="font-body-md">Support</span></Link>
            <Link href="/settings" className="flex items-center gap-md px-md py-xs text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">settings</span><span className="font-body-md">Settings</span></Link>
          </div>
        </div>
      </aside>

      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center gap-lg w-1/3">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full bg-surface-container-low border border-outline-variant rounded px-xl py-xs font-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Search by SHA-256 hash or Entry ID..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-lg">
          <button className="bg-primary-container text-on-primary-fixed-variant px-md py-xs rounded border border-outline-variant font-label-md flex items-center gap-xs uppercase active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>Compliance Check
          </button>
          <div className="flex items-center gap-md border-l border-outline-variant pl-lg">
            <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
            <button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">history</span></button>
            <div className="flex items-center gap-sm">
              <div className="text-right hidden xl:block"><p className="font-label-md text-primary font-bold">Admin-09</p><p className="font-caption text-on-surface-variant">Infrastructure Lead</p></div>
              <img alt="Administrator" className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBhzQEOw5l11XPdVDaX5hmLtkNxCsX9zrX26jLZP4gyVafoIMcW7QMR0aV3Zg9FC3tDWl4IbKp54rRmDSgSPpwSrxbYxRBTH-W-WutJ0Y-xAI7Xb4GcXpqqFPaYYuulJCCeJVTddL7INujW032Rn9XKkS3y3-pQif6GjRVHPm6m6TH1YqitnzbXEbESvqxJPkVgbpNmv5RI30XqZq51Sk9Y-VOg_lvEOm0_B1oiKrgZTq4YHRKyHeQJKMRRKkruGXDrpkZZInqachh"/>
            </div>
          </div>
        </div>
      </header>

      <main className="ml-64 mt-16 p-margin-desktop h-[calc(100vh-64px)] overflow-y-auto" style={{ backgroundColor: '#f7f9fb', backgroundImage: 'radial-gradient(#d1d5db 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }}>
        <section className="grid grid-cols-12 gap-gutter mb-xl">
          <div className="col-span-8">
            <div className="flex items-end gap-sm mb-xs">
              <span className="material-symbols-outlined text-secondary text-[32px]">security</span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Compliance &amp; Audit Vault</h2>
            </div>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">Institutional ledger of all verified administrative decisions. Every entry is cryptographically signed and stored in the immutable record.</p>
            <div className="flex items-center gap-md mt-lg">
              <button className="flex items-center gap-sm bg-primary text-on-primary px-lg py-sm rounded-lg font-title-md hover:opacity-90 transition-opacity"><span className="material-symbols-outlined">upload_file</span>Upload Doc</button>
              <button className="flex items-center gap-sm border border-outline text-primary px-lg py-sm rounded-lg font-title-md hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">download</span>Export Log</button>
              <div className="h-8 w-px bg-outline-variant mx-sm"></div>
              <div className="flex gap-sm"><span className="px-md py-sm bg-surface-container-high rounded text-on-surface-variant font-label-md flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>Live Node Sync</span></div>
            </div>
          </div>
          <div className="col-span-4 flex justify-end">
            <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col items-center justify-center w-full max-w-[280px]">
              <p className="font-label-md text-on-surface-variant uppercase mb-md">Vault Health</p>
              <div className="relative w-[180px] h-[180px] mb-sm">
                <svg className="w-full h-full" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                  <circle className="fill-none stroke-surface-container" cx="50" cy="50" r="40" strokeWidth="8" strokeLinecap="round"></circle>
                  <circle className="fill-none stroke-secondary" cx="50" cy="50" r="40" strokeWidth="8" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="0"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center"><span className="font-display-lg text-display-lg text-primary leading-none">100%</span><span className="font-label-md text-secondary font-bold">STABLE</span></div>
              </div>
              <p className="font-caption text-on-surface-variant text-center">Fully Compliant Across All Nodes</p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl mb-xl">
          <div className="p-lg border-b border-outline-variant flex justify-between items-center">
            <h3 className="font-title-md text-primary">Verified Decisions Timeline</h3>
            <div className="flex gap-sm"><button className="p-sm text-on-surface-variant hover:bg-surface-container rounded transition-colors"><span className="material-symbols-outlined">filter_list</span></button></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low border-b border-outline-variant">
                <tr>
                  <th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Timestamp (UTC)</th>
                  <th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Entry Description</th>
                  <th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Entity ID</th>
                  <th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Verification</th>
                  <th className="px-lg py-md font-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {[
                  { ts: '2023-10-24 14:32:01', desc: 'Quarterly Board Procurement Approval', auth: 'Exec-Council-01', id: '#PR-0944-X' },
                  { ts: '2023-10-24 11:15:45', desc: 'Global Data Privacy Policy Update (v2.4)', auth: 'Legal-Compliance-04', id: '#POL-8821-B' },
                  { ts: '2023-10-23 16:50:12', desc: 'Internal Procurement Review - Southeast Asia Hub', auth: 'Audit-Lead-SEA', id: '#AUD-1029-Z' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface transition-colors cursor-pointer group">
                    <td className="px-lg py-md font-label-md text-on-surface-variant">{row.ts}</td>
                    <td className="px-lg py-md"><p className="font-body-md text-primary font-bold">{row.desc}</p><p className="font-caption text-on-surface-variant">Authored by: {row.auth}</p></td>
                    <td className="px-lg py-md"><span className="font-label-md text-on-secondary-container bg-secondary-container/20 rounded inline-block px-2 py-1">{row.id}</span></td>
                    <td className="px-lg py-md"><div className="flex items-center gap-sm"><span className="material-symbols-outlined text-secondary text-md" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span><span className="font-label-md text-secondary">IMMUTABLE</span></div></td>
                    <td className="px-lg py-md"><span className="bg-secondary/10 text-secondary border border-secondary/20 px-sm py-xs rounded text-xs font-bold uppercase tracking-widest">Recorded</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-md bg-surface-container-low flex justify-center"><button className="text-primary font-label-md hover:underline">View Full Audit History (24,809 Entries)</button></div>
        </section>

        <section className="grid grid-cols-1 gap-gutter">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-lg">
            <div className="flex items-center justify-between mb-lg">
              <div><h3 className="font-title-md text-primary">Regional Compliance Grid</h3><p className="font-caption text-on-surface-variant">Real-time status across 24 global operating zones</p></div>
              <div className="flex gap-md">
                <div className="flex items-center gap-xs"><span className="w-3 h-3 rounded bg-secondary"></span><span className="font-label-md text-on-surface-variant">Active</span></div>
                <div className="flex items-center gap-xs"><span className="w-3 h-3 rounded bg-surface-container-highest"></span><span className="font-label-md text-on-surface-variant">Pending</span></div>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-sm">
              {gridItems.map((item, i) => (
                <div key={i} className={`h-20 flex flex-col items-center justify-center rounded-lg border border-outline-variant transition-all hover:ring-2 hover:ring-primary ${item.compliant ? 'bg-secondary/10 border-secondary/20' : 'bg-surface-container'}`}>
                  <span className="font-label-md text-primary font-bold">{item.zone}-{item.num}</span>
                  <span className={`material-symbols-outlined ${item.compliant ? 'text-secondary' : 'text-on-surface-variant'} text-md`}>{item.compliant ? 'verified' : 'pending'}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
