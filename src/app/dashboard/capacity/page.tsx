"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function CapacityProgressDashboard() {
  useEffect(() => {
    const paths = document.querySelectorAll('path');
    paths.forEach(path => {
      const length = path.getTotalLength();
      if (path instanceof SVGPathElement) {
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
        path.getBoundingClientRect();
        path.style.transition = 'stroke-dashoffset 2s ease-in-out';
        path.style.strokeDashoffset = '0';
      }
    });
  }, []);

  return (
    <div className="bg-surface font-body-md text-body-md overflow-hidden min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl"><h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1><p className="font-label-md text-label-md text-on-surface-variant tracking-wider">Infrastructure Grade</p></div>
        <nav className="flex-1 px-sm space-y-xs overflow-y-auto">
          <Link href="/dashboard" className="flex items-center gap-md px-md py-sm rounded-none text-primary font-bold border-r-4 border-primary bg-surface-container transition-colors"><span className="material-symbols-outlined">dashboard</span><span className="font-body-md">Dashboard</span></Link>
          <Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">payments</span><span className="font-body-md">Grants</span></Link>
          <Link href="/dashboard/projects" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">account_tree</span><span className="font-body-md">Projects</span></Link>
          <Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">assessment</span><span className="font-body-md">Reports</span></Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">inventory_2</span><span className="font-body-md">Vault</span></Link>
          <Link href="/platform/labs" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">science</span><span className="font-body-md">Labs</span></Link>
        </nav>
        <div className="mt-auto px-sm pt-xl border-t border-outline-variant space-y-xs">
          <button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary py-sm mb-lg font-bold hover:opacity-90 transition-all active:scale-95"><span className="material-symbols-outlined text-[20px]">add</span><span>New Initiative</span></button>
          <Link href="#" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">help</span><span className="font-body-md">Support</span></Link>
          <Link href="/settings" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">settings</span><span className="font-body-md">Settings</span></Link>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center gap-lg"><div className="relative w-96"><span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span><input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent rounded-none font-body-md" placeholder="Global capacity search..." type="text"/></div></div>
        <div className="flex items-center gap-lg">
          <button className="font-label-md text-label-md text-primary border border-primary px-4 py-1.5 hover:bg-surface-container-high transition-colors active:scale-95">Compliance Check</button>
          <div className="flex items-center gap-md">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">history</span></button>
            <div className="w-8 h-8 rounded-none border border-outline-variant overflow-hidden"><img alt="Admin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo5nYqelfgkIvmPfTe1GsneCYyPkiL52tJ7Ca6MjP-GoAW2oodvdisWe_nDFnF-PqPC1LCIGx7YfL4_BiE87e83Mi2DRO_9od7PfLey60AYf28sI7QD5M6mvJeM6PfNOwXiOM-sBkCCgfHNhhxIBH4lA_MLRSCFeFhUmIpLhnVcesdqj1JUu89opylM6eVugi10_UzMkWoEQVM3uX1OO4rpxCpFssttq-Bmun9JlEYH0mCElbuXa1ylKUIrCuRyYqpo2uUR36i2sg8"/></div>
          </div>
        </div>
      </header>
      <main className="ml-64 mt-16 p-margin-desktop h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="max-w-[1400px] mx-auto space-y-lg">
          <div className="flex flex-col md:flex-row justify-between items-end gap-lg">
            <div><h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Capacity Progress Dashboard</h2><p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Institutional maturity and growth analytics. Tracking compliance, readiness, and systemic reliability metrics across the global NGO network.</p></div>
            <div className="flex items-center gap-sm bg-surface-container-low px-4 py-2 border border-outline-variant"><span className="font-label-md text-label-md text-on-surface-variant">TIMELINE:</span><span className="font-label-md text-label-md text-primary font-bold">CY21 — PROJ CY25</span><span className="material-symbols-outlined text-secondary">trending_up</span></div>
          </div>
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-lg flex flex-col h-[480px]">
              <div className="flex justify-between items-center mb-xl">
                <div><h3 className="font-title-md text-title-md text-primary">Institutional Growth Trend</h3><p className="font-caption text-caption text-on-surface-variant uppercase tracking-widest">Growth Index Value (GIV)</p></div>
                <div className="flex gap-md"><div className="flex items-center gap-xs"><span className="w-3 h-3 bg-primary"></span><span className="text-caption font-label-md uppercase">Historical</span></div><div className="flex items-center gap-xs"><span className="w-3 h-3 bg-secondary"></span><span className="text-caption font-label-md uppercase">Projected</span></div></div>
              </div>
              <div className="flex-1 relative border-l border-b border-outline" style={{ backgroundImage: 'radial-gradient(#e0e3e5 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
                  <line stroke="#e0e3e5" strokeDasharray="4" x1="0" x2="800" y1="225" y2="225"></line>
                  <line stroke="#e0e3e5" strokeDasharray="4" x1="0" x2="800" y1="150" y2="150"></line>
                  <line stroke="#e0e3e5" strokeDasharray="4" x1="0" x2="800" y1="75" y2="75"></line>
                  <path d="M 0 280 L 160 250 L 320 180 L 480 140" fill="none" stroke="black" strokeWidth="3"></path>
                  <path d="M 480 140 L 640 80 L 800 40" fill="none" stroke="#10B981" strokeDasharray="8 4" strokeWidth="3"></path>
                  <circle cx="0" cy="280" fill="black" r="4"></circle>
                  <circle cx="160" cy="250" fill="black" r="4"></circle>
                  <circle cx="320" cy="180" fill="black" r="4"></circle>
                  <circle cx="480" cy="140" fill="black" r="6"></circle>
                  <circle cx="640" cy="80" fill="#10B981" r="4"></circle>
                  <circle cx="800" cy="40" fill="#10B981" r="4"></circle>
                </svg>
                <div className="flex justify-between mt-sm"><span className="font-label-md text-label-md text-on-surface-variant">CY21</span><span className="font-label-md text-label-md text-on-surface-variant">CY22</span><span className="font-label-md text-label-md text-on-surface-variant">CY23</span><span className="font-label-md text-label-md text-on-surface-variant">CY24 (CURRENT)</span><span className="font-label-md text-label-md text-on-surface-variant">CY25-E</span><span className="font-label-md text-label-md text-on-surface-variant">PROJ</span></div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg flex flex-col h-[480px]">
              <div className="mb-xl"><h3 className="font-title-md text-title-md text-primary">Systemic Reliability</h3><p className="font-caption text-caption text-on-surface-variant uppercase tracking-widest">Areal Coverage</p></div>
              <div className="flex-1 flex items-center justify-center relative">
                <div className="w-64 h-64 border border-outline-variant rounded-full relative flex items-center justify-center">
                  <div className="w-48 h-48 border border-outline-variant rounded-full absolute"></div><div className="w-32 h-32 border border-outline-variant rounded-full absolute"></div><div className="w-16 h-16 border border-outline-variant rounded-full absolute"></div>
                  <div className="absolute w-full h-[1px] bg-outline-variant rotate-0"></div><div className="absolute w-full h-[1px] bg-outline-variant rotate-60"></div><div className="absolute w-full h-[1px] bg-outline-variant rotate-120"></div>
                  <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100"><polygon fill="rgba(16, 185, 129, 0.1)" points="50,15 80,35 75,70 50,85 25,70 20,35" stroke="#10B981" strokeWidth="2"></polygon></svg>
                  <span className="absolute top-[-24px] font-label-md text-[10px] uppercase">Compliance</span><span className="absolute bottom-[-24px] font-label-md text-[10px] uppercase">Integrity</span><span className="absolute left-[-40px] top-[40%] font-label-md text-[10px] uppercase">Readiness</span><span className="absolute right-[-40px] top-[40%] font-label-md text-[10px] uppercase">Velocity</span>
                </div>
              </div>
              <div className="mt-xl space-y-sm"><div className="flex justify-between items-center py-2 border-b border-outline-variant"><span className="text-on-surface-variant font-body-md">Global Average</span><span className="font-label-md text-primary">82.4%</span></div><div className="flex justify-between items-center py-2 border-b border-outline-variant"><span className="text-on-surface-variant font-body-md">Target Threshold</span><span className="font-label-md text-secondary">95.0%</span></div></div>
            </div>
            {[{ title: 'Regulatory Compliance', val: '98.2%', w: '98.2%', delta: '+1.4% vs prev quarter', icon: 'shield' },
              { title: 'Response Readiness', val: 'High', w: '85%', delta: 'Standardized at Grade A-', icon: 'bolt' },
              { title: 'Institutional Trust Index', val: '4.9/5.0', w: '98%', delta: 'All-time high verification', icon: 'verified_user' }
            ].map((kpi, i) => (
              <div key={i} className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg">
                <div className="flex items-center gap-md mb-md"><div className="w-12 h-12 bg-surface-container-high flex items-center justify-center"><span className="material-symbols-outlined text-primary">{kpi.icon}</span></div><div><h4 className="font-label-md text-label-md uppercase text-on-surface-variant">{kpi.title}</h4><p className="font-headline-md text-headline-md text-primary">{kpi.val}</p></div></div>
                <div className="w-full bg-surface-container h-1"><div className="bg-secondary h-full" style={{ width: kpi.w }}></div></div>
                <p className="mt-sm font-caption text-caption text-secondary">{kpi.delta}</p>
              </div>
            ))}
            <div className="col-span-12 bg-surface-container-lowest border border-outline-variant">
              <div className="p-lg border-b border-outline-variant flex justify-between items-center"><h3 className="font-title-md text-title-md text-primary">Recent Improvement Ledger</h3><button className="flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined text-[16px]">download</span>EXPORT AUDIT LOG</button></div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead><tr className="bg-surface-container-low"><th className="px-lg py-md font-label-md text-label-md uppercase text-on-surface-variant border-b border-outline-variant">Reference ID</th><th className="px-lg py-md font-label-md text-label-md uppercase text-on-surface-variant border-b border-outline-variant">Metric Area</th><th className="px-lg py-md font-label-md text-label-md uppercase text-on-surface-variant border-b border-outline-variant">Baseline</th><th className="px-lg py-md font-label-md text-label-md uppercase text-on-surface-variant border-b border-outline-variant">Delta</th><th className="px-lg py-md font-label-md text-label-md uppercase text-on-surface-variant border-b border-outline-variant">Signatory</th><th className="px-lg py-md font-label-md text-label-md uppercase text-on-surface-variant border-b border-outline-variant">Status</th></tr></thead>
                  <tbody className="divide-y divide-outline-variant">
                    {[
                      ['#OS-882-C', 'Financial Governance', '82%', '+12.4%', 'Audit Board', true],
                      ['#OS-129-R', 'Emergency Readiness', 'Grade B', 'Grade A-', 'Field Ops HQ', true],
                      ['#OS-774-P', 'Stakeholder Transparency', '94%', '+2.1%', 'Ethics Comm.', true],
                      ['#OS-003-V', 'Vault Security Protocol', 'Legacy', 'Encrypted', 'Sys Admin', false],
                    ].map((r, i) => (
                      <tr key={i} className={`hover:bg-surface-container-low transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}`}>
                        <td className="px-lg py-md font-label-md">{r[0]}</td><td className="px-lg py-md font-body-md font-semibold">{r[1]}</td><td className="px-lg py-md font-body-md">{r[2]}</td><td className="px-lg py-md font-body-md text-secondary">{r[3]}</td><td className="px-lg py-md font-body-md">{r[4]}</td>
                        <td className="px-lg py-md"><span className={`px-2 py-0.5 text-caption uppercase border font-bold ${r[5] === true ? 'bg-secondary/10 text-secondary border-secondary/20' : 'bg-primary/10 text-primary border-outline'}`}>{r[5] === true ? 'Validated' : 'Pending Review'}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center py-xl border-t border-outline-variant text-on-surface-variant"><p className="font-caption">ElevestOS Infrastructure Grade Monitoring Engine v4.2.0-stable</p><div className="flex gap-lg font-label-md text-label-md"><span className="flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-secondary"></span>System Online</span><span className="flex items-center gap-xs">Latency: 12ms</span><span className="flex items-center gap-xs">Last Sync: 2m ago</span></div></div>
        </div>
      </main>
      <button className="fixed bottom-margin-desktop right-margin-desktop bg-primary text-on-primary w-14 h-14 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all z-50"><span className="material-symbols-outlined text-[28px]">add_chart</span></button>
    </div>
  );
}
