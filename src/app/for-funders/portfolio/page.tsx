"use client";

import React from 'react';
import Link from 'next/link';

export default function PortfolioOverview() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-hidden min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl"><div className="flex items-center gap-sm"><div className="w-10 h-10 bg-primary flex items-center justify-center rounded"><span className="material-symbols-outlined text-on-primary">account_balance</span></div><div><h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1><p className="font-label-md text-[10px] uppercase tracking-wider text-on-surface-variant">Infrastructure Grade</p></div></div></div>
        <nav className="flex-1 space-y-1 px-sm">
          <Link href="/dashboard" className="flex items-center gap-md px-md py-sm text-primary font-bold border-r-4 border-primary bg-surface-container transition-all duration-150"><span className="material-symbols-outlined">dashboard</span><span className="font-body-md">Dashboard</span></Link>
          <Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">payments</span><span className="font-body-md">Grants</span></Link>
          <Link href="/dashboard/projects" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">account_tree</span><span className="font-body-md">Projects</span></Link>
          <Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">assessment</span><span className="font-body-md">Reports</span></Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">inventory_2</span><span className="font-body-md">Vault</span></Link>
          <Link href="/platform/labs" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">science</span><span className="font-body-md">Labs</span></Link>
        </nav>
        <div className="mt-auto px-sm space-y-1">
          <button className="w-full mb-lg py-sm px-md bg-primary text-on-primary font-title-md rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-sm"><span className="material-symbols-outlined">add</span>New Initiative</button>
          <Link href="#" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">help</span><span className="font-body-md">Support</span></Link>
          <Link href="/settings" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">settings</span><span className="font-body-md">Settings</span></Link>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center flex-1"><div className="relative w-96"><span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span><input className="w-full pl-xl pr-md py-xs bg-surface-container-low border border-outline-variant rounded-full text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" placeholder="Search programs, assets, or compliance logs..." type="text"/></div></div>
        <div className="flex items-center gap-lg">
          <button className="px-md py-xs bg-secondary-container text-on-secondary-container font-label-md rounded flex items-center gap-xs hover:scale-95 transition-transform"><span className="material-symbols-outlined text-[18px]">verified_user</span>Compliance Check</button>
          <div className="flex items-center gap-md text-on-surface-variant">
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">history</span></button>
            <div className="h-8 w-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant"><img alt="Admin" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ14PMS-7dG3cx_amOu-OPGn_gN5jCYRP6-GYNrT49cdIOpcaCRY3Xovvmisew9_hEqxGHmHmMe3zq_2zg2kk9oqtnRmKNZnEYEpsdeZd39GD3Yd8A45y94x_X2b3cvAybjtdcBAF4P2fV_thwEJwlrw5qkP3rwU7lJ3UYVQfhLbX2blxGJNNxFaDDjF12UUomYEBfzl4OJRbZOL-XfhAX0kuTZW01VHYQmJ3qlSNskiy-2fYExjuei_oMVhU1zYIuwQovhF9PNH-G"/></div>
          </div>
        </div>
      </header>
      <main className="ml-64 mt-16 p-margin-desktop h-[calc(100vh-64px)] overflow-y-auto">
        <div className="flex flex-col gap-lg h-full">
          <div className="flex justify-between items-end">
            <div><h2 className="font-headline-lg text-headline-lg text-primary">Portfolio Command Center</h2><p className="text-on-surface-variant font-body-lg">Institutional overview of global concurrent initiatives and resource allocation.</p></div>
            <div className="flex gap-sm"><button className="px-md py-sm border border-outline text-on-surface-variant hover:bg-surface-container transition-colors rounded flex items-center gap-xs"><span className="material-symbols-outlined">filter_list</span>Filter View</button><button className="px-md py-sm border border-outline text-on-surface-variant hover:bg-surface-container transition-colors rounded flex items-center gap-xs"><span className="material-symbols-outlined">download</span>Export PDF</button></div>
          </div>
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-lg flex flex-col justify-between h-64">
              <div className="flex justify-between items-start"><span className="font-label-md text-on-surface-variant">BUDGET UTILIZATION</span><span className="material-symbols-outlined text-secondary">trending_up</span></div>
              <div className="mt-md"><h3 className="font-display-lg text-display-lg text-primary">$42.8M</h3><p className="text-on-surface-variant text-body-md mt-xs">Utilized from $50M total allocation</p></div>
              <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden mt-md"><div className="h-full bg-secondary" style={{ width: '85.6%' }}></div></div>
              <div className="flex justify-between mt-sm text-label-md"><span>85.6% Paced</span><span className="text-on-surface-variant">14.4% Remaining</span></div>
            </div>
            <div className="col-span-12 md:col-span-5 bg-surface-container-lowest border border-outline-variant p-lg relative overflow-hidden h-64">
              <div className="relative z-10 flex flex-col h-full">
                <span className="font-label-md text-on-surface-variant mb-sm">REGIONAL HEALTH STATUS</span>
                <div className="flex-1 flex flex-col justify-center"><div className="space-y-md"><div className="flex items-center gap-md"><span className="w-3 h-3 rounded-full bg-secondary"></span><span className="font-body-md flex-1">Sub-Saharan Africa</span><span className="font-label-md bg-secondary-container text-on-secondary-container px-sm py-[2px] rounded">OPTIMAL</span></div><div className="flex items-center gap-md"><span className="w-3 h-3 rounded-full bg-secondary"></span><span className="font-body-md flex-1">South Asia</span><span className="font-label-md bg-secondary-container text-on-secondary-container px-sm py-[2px] rounded">STABLE</span></div><div className="flex items-center gap-md"><span className="w-3 h-3 rounded-full bg-error"></span><span className="font-body-md flex-1">Latin America</span><span className="font-label-md bg-error-container text-on-error-container px-sm py-[2px] rounded">AT RISK</span></div></div></div>
              </div>
              <div className="absolute right-[-40px] top-[-20px] opacity-10 pointer-events-none scale-150"><span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>public</span></div>
            </div>
            <div className="col-span-12 md:col-span-3 bg-primary-container text-on-primary p-lg h-64 flex flex-col">
              <span className="font-label-md text-on-primary-container">PORTFOLIO VELOCITY</span>
              <div className="flex-1 flex flex-col justify-end"><div className="text-[56px] font-bold leading-none">94.2%</div><p className="text-on-primary-container text-body-md mt-sm">Programs hitting milestone targets within +/- 3 day variance.</p><div className="mt-lg flex gap-xs"><div className="h-1 flex-1 bg-secondary"></div><div className="h-1 flex-1 bg-secondary"></div><div className="h-1 flex-1 bg-secondary"></div><div className="h-1 flex-1 bg-secondary"></div><div className="h-1 flex-1 bg-secondary-dim opacity-30"></div></div></div>
            </div>
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant flex flex-col min-h-[400px]">
              <div className="p-lg border-b border-outline-variant flex justify-between items-center"><h3 className="font-title-md text-primary">Portfolio Registry</h3><div className="flex gap-md"><button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">grid_view</span></button><button className="text-primary"><span className="material-symbols-outlined">list</span></button></div></div>
              <div className="overflow-x-auto flex-1">
                <table className="w-full text-left border-collapse"><thead><tr className="border-b border-outline-variant text-label-md text-on-surface-variant">
                  <th className="px-lg py-md font-medium uppercase tracking-wider">Program Name</th><th className="px-lg py-md font-medium uppercase tracking-wider">Status</th><th className="px-lg py-md font-medium uppercase tracking-wider">Burn Rate</th><th className="px-lg py-md font-medium uppercase tracking-wider">Next Milestone</th><th className="px-lg py-md font-medium uppercase tracking-wider">Risk</th></tr></thead>
                  <tbody className="text-body-md">
                    {[
                      ['Clean Water Initiative Phase IV', 'Active', '-$420k/mo', 'Q3 Infrastructure Review', 'check_circle', 'text-secondary'],
                      ["Educational Equity Fund '24", 'Pending Audit', '-$115k/mo', 'Regional Licensing', 'info', 'text-outline'],
                      ['Renewable Grid Expansion', 'Active', '-$1.2M/mo', 'Environmental Impact Cert', 'warning', 'text-error'],
                      ['Healthcare Access Mobile Units', 'Active', '-$380k/mo', 'Unit Deployment Cycle 2', 'check_circle', 'text-secondary'],
                      ['Agri-Tech Grant Pilot', 'Delayed', '-$45k/mo', 'Seed Procurement', 'priority_high', 'text-error'],
                    ].map((p, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-lg py-md font-bold text-primary">{p[0]}</td>
                        <td className="px-lg py-md"><span className={`px-sm py-[2px] text-caption rounded ${p[1] === 'Active' ? 'bg-secondary-container text-on-secondary-container' : p[1] === 'Delayed' ? 'bg-error-container text-on-error-container' : 'bg-surface-container-high text-on-surface-variant'}`}>{p[1]}</span></td>
                        <td className="px-lg py-md font-label-md">{p[2]}</td><td className="px-lg py-md">{p[3]}</td>
                        <td className="px-lg py-md"><span className={`material-symbols-outlined ${p[5]}`}>{p[4]}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
              <div className="bg-surface-container-low border border-outline-variant p-lg h-full">
                <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-md"><span className="material-symbols-outlined text-primary">timer</span><h3 className="font-title-md text-primary">Critical Deadlines</h3></div>
                <div className="space-y-xl">
                  {[
                    { urgent: true, time: 'In 2 Hours', title: 'FY24 Annual Impact Report Submission', desc: 'Required for Board of Directors Review.' },
                    { time: 'In 3 Days', title: 'Renewable Grid Compliance Audit', desc: 'Site visit scheduled for Northern Region.' },
                    { time: 'July 14, 2024', title: 'Clean Water Grant Extension Request', desc: 'Submit documentation for Phase V funding.' },
                    { time: 'July 22, 2024', title: 'Q3 Regional Health Review Meeting', desc: 'Global stakeholders virtual briefing.' },
                  ].map((d, i) => (
                    <div key={i} className={`relative pl-lg border-l-2 ${d.urgent ? 'border-error' : 'border-outline-variant'}`}>
                      <div className={`absolute -left-[5px] top-0 w-2 h-2 rounded-full ${d.urgent ? 'bg-error' : 'bg-outline-variant'}`}></div>
                      <p className={`font-label-md uppercase mb-xs ${d.urgent ? 'text-error' : 'text-on-surface-variant'}`}>{d.time}</p>
                      <h4 className="font-body-md font-bold text-primary">{d.title}</h4><p className="text-caption text-on-surface-variant mt-xs">{d.desc}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-xl py-sm border border-outline text-on-surface-variant font-label-md hover:bg-surface-container-high transition-colors">VIEW CALENDAR</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-lg right-lg"><button className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all"><span className="material-symbols-outlined">support_agent</span></button></div>
    </div>
  );
}
