"use client";

import React from 'react';
import Link from 'next/link';

export default function RegistrationPage() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      {/* TopNavBar (Fixed Top Shell) */}
      <nav className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center gap-md">
          <div className="md:hidden">
            <span className="material-symbols-outlined text-on-surface">menu</span>
          </div>
          <div className="hidden md:flex bg-surface-container h-10 w-64 rounded-lg border border-outline-variant px-md items-center gap-sm">
            <span className="material-symbols-outlined text-outline">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-body-md w-full" placeholder="Search infrastructure..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-lg">
          <button className="bg-primary text-on-primary px-lg py-sm font-label-md rounded-lg active:scale-95 transition-transform">Compliance Check</button>
          <div className="flex items-center gap-md text-on-surface-variant">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">notifications</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">history</span>
            <div className="h-8 w-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
              <img 
                alt="Admin" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDuy4Wsi-l6R1ZrNA8n0rUPe5kAeoohX6MnIlT0hi6pSMQ4dDojrGNHsNGfptxCJlQNAsT4ZrrTrZUvp6XbSZo97ylquNHANEWbP7ir2kvEIClVHYaPLv8Q4ZBB0xXSfDC2dltQ4Q7WoliqBzuJIorBrBM5fr3LgUn345Mt_t8XjDLnAWzJmF4Tzb0bbw9ZvsBZcFnPGgum9_riPqqMpR6PXHr-md5FEcfrvIgkHPIKjhKDvILDvruDzn1uY50zHb-CfmU85W7dBHQ"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* SideNavBar (Fixed Left Shell) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex-col py-md z-50">
        <div className="px-lg pb-xl border-b border-outline-variant">
          <div className="flex items-center gap-sm">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[20px]">account_balance</span>
            </div>
            <div>
              <h1 className="font-headline-md text-primary font-bold leading-tight">ElevestOS</h1>
              <p className="text-on-primary-container font-label-md text-[10px] uppercase tracking-widest">Infrastructure Grade</p>
            </div>
          </div>
        </div>
        <div className="flex-grow py-xl px-sm space-y-base">
          <Link href="/dashboard" className="flex items-center gap-md px-md py-sm rounded hover:bg-surface-container-high text-on-surface-variant transition-colors group">
            <span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
            <span className="font-body-md">Dashboard</span>
          </Link>
          <Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm rounded bg-surface-container text-primary font-bold border-r-4 border-primary transition-colors">
            <span className="material-symbols-outlined">payments</span>
            <span className="font-body-md">Grants</span>
          </Link>
          <Link href="/dashboard/projects" className="flex items-center gap-md px-md py-sm rounded hover:bg-surface-container-high text-on-surface-variant transition-colors group">
            <span className="material-symbols-outlined group-hover:text-primary">account_tree</span>
            <span className="font-body-md">Projects</span>
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm rounded hover:bg-surface-container-high text-on-surface-variant transition-colors group">
            <span className="material-symbols-outlined group-hover:text-primary">assessment</span>
            <span className="font-body-md">Reports</span>
          </Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm rounded hover:bg-surface-container-high text-on-surface-variant transition-colors group">
            <span className="material-symbols-outlined group-hover:text-primary">inventory_2</span>
            <span className="font-body-md">Vault</span>
          </Link>
          <Link href="/platform/labs" className="flex items-center gap-md px-md py-sm rounded hover:bg-surface-container-high text-on-surface-variant transition-colors group">
            <span className="material-symbols-outlined group-hover:text-primary">science</span>
            <span className="font-body-md">Labs</span>
          </Link>
        </div>
        <div className="px-lg pt-xl border-t border-outline-variant space-y-md">
          <button className="w-full bg-primary-container text-on-primary-container py-md rounded font-title-md flex items-center justify-center gap-sm">
            <span className="material-symbols-outlined">add</span>
            New Initiative
          </button>
          <div className="space-y-base">
            <Link href="#" className="flex items-center gap-md px-md py-xs text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">help</span>
              <span className="font-body-md">Support</span>
            </Link>
            <Link href="/settings" className="flex items-center gap-md px-md py-xs text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-body-md">Settings</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="md:ml-64 pt-16 min-h-screen">
        <div className="px-margin-desktop py-xl max-w-7xl mx-auto">
          {/* Header & Stepper Section */}
          <div className="mb-xl">
            <div className="flex items-end justify-between mb-lg">
              <div>
                <span className="font-label-md text-secondary uppercase tracking-widest mb-sm block">Registration Phase</span>
                <h2 className="font-headline-lg text-primary">NGO Institutional Registration</h2>
              </div>
              <div className="text-right">
                <span className="font-label-md text-on-surface-variant">Estimated Completion: 12 Minutes</span>
              </div>
            </div>
            {/* Progress Stepper */}
            <div className="relative pt-lg pb-xl">
              <div className="absolute top-[3.25rem] left-0 w-full h-[2px] bg-surface-container-high z-0"></div>
              <div className="absolute top-[3.25rem] left-0 w-1/4 h-[2px] bg-secondary z-0 transition-all duration-700"></div>
              <div className="relative z-10 flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold mb-sm border-4 border-background">1</div>
                  <span className="font-label-md text-secondary">Organization Details</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold mb-sm border-4 border-background">2</div>
                  <span className="font-label-md text-on-surface-variant">Legal Framework</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold mb-sm border-4 border-background">3</div>
                  <span className="font-label-md text-on-surface-variant">Financial Disclosures</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold mb-sm border-4 border-background">4</div>
                  <span className="font-label-md text-on-surface-variant">Governance Bench</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Layout Content */}
          <div className="grid grid-cols-12 gap-xl">
            {/* Main Form Card (Left/Center) */}
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-surface-container-lowest border border-outline-variant p-xl rounded shadow-sm">
                <header className="mb-xl border-b border-outline-variant pb-lg">
                  <h3 className="font-title-md text-primary mb-xs">Step 1: Core Identity</h3>
                  <p className="text-on-surface-variant font-body-md">Provide basic organizational identifiers as recognized by your domestic jurisdiction.</p>
                </header>
                <form className="space-y-xl">
                  <div className="grid grid-cols-2 gap-lg">
                    <div className="col-span-2">
                      <label className="block font-label-md text-on-surface-variant uppercase mb-sm">Full Organization Name (Legal)</label>
                      <input className="w-full bg-surface border border-outline-variant rounded-lg p-md focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Enter name exactly as on articles of incorporation" type="text"/>
                    </div>
                    <div className="col-span-1">
                      <label className="block font-label-md text-on-surface-variant uppercase mb-sm">Registration Number</label>
                      <input className="w-full bg-surface border border-outline-variant rounded-lg p-md focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="e.g. NGO-129-XXL" type="text"/>
                    </div>
                    <div className="col-span-1">
                      <label className="block font-label-md text-on-surface-variant uppercase mb-sm">Country of Operation</label>
                      <select className="w-full bg-surface border border-outline-variant rounded-lg p-md focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none">
                        <option>Select Primary Jurisdiction</option>
                        <option>Switzerland</option>
                        <option>Kenya</option>
                        <option>Singapore</option>
                        <option>Brazil</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block font-label-md text-on-surface-variant uppercase mb-sm">Primary Sector Focus</label>
                      <div className="grid grid-cols-3 gap-md">
                        <label className="border border-outline-variant p-md rounded-lg flex items-center gap-md cursor-pointer hover:bg-surface-container-low transition-colors">
                          <input className="text-primary focus:ring-primary" name="sector" type="radio"/>
                          <span className="font-body-md">Healthcare</span>
                        </label>
                        <label className="border border-outline-variant p-md rounded-lg flex items-center gap-md cursor-pointer hover:bg-surface-container-low transition-colors">
                          <input className="text-primary focus:ring-primary" name="sector" type="radio"/>
                          <span className="font-body-md">Sustainability</span>
                        </label>
                        <label className="border border-outline-variant p-md rounded-lg flex items-center gap-md cursor-pointer hover:bg-surface-container-low transition-colors">
                          <input className="text-primary focus:ring-primary" name="sector" type="radio"/>
                          <span className="font-body-md">Education</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pt-xl flex justify-between items-center">
                    <p className="text-caption text-on-surface-variant italic">Data is automatically saved as you type.</p>
                    <div className="flex gap-md">
                      <button className="px-xl py-md border border-outline font-label-md rounded-lg hover:bg-surface-container-high transition-colors" type="button">Save Draft</button>
                      <button className="px-xl py-md bg-primary text-on-primary font-label-md rounded-lg hover:opacity-90 transition-opacity flex items-center gap-sm" type="submit">
                        Next Phase
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Sidebar Notice (Right) */}
            <div className="col-span-12 lg:col-span-4 space-y-xl">
              <div className="bg-primary-container text-on-primary-container p-xl rounded border border-on-primary-fixed-variant relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-sm mb-md">
                    <span className="material-symbols-outlined text-secondary-fixed">verified_user</span>
                    <h4 className="font-title-md text-on-primary">Verification Notice</h4>
                  </div>
                  <p className="text-body-md text-on-primary-container mb-lg leading-relaxed">
                    ElevestOS performs real-time cross-referencing with the <strong>Global Entity Identification System (GEIS)</strong> and regional NGO registries.
                  </p>
                  <div className="space-y-md">
                    <div className="flex gap-md">
                      <span className="material-symbols-outlined text-[20px] text-secondary-fixed">check_circle</span>
                      <div>
                        <p className="font-body-md font-bold text-on-primary">Anti-Fraud Validation</p>
                        <p className="text-caption text-on-primary-container opacity-80">Automated KYC/AML screening for all officers.</p>
                      </div>
                    </div>
                    <div className="flex gap-md">
                      <span className="material-symbols-outlined text-[20px] text-secondary-fixed">check_circle</span>
                      <div>
                        <p className="font-body-md font-bold text-on-primary">Tax Status Sync</p>
                        <p className="text-caption text-on-primary-container opacity-80">Direct integration with jurisdictional tax authorities.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                </div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant p-lg rounded">
                <h4 className="font-label-md text-on-surface-variant uppercase mb-md">Required Documentation</h4>
                <ul className="space-y-sm">
                  <li className="flex items-center justify-between p-sm bg-surface-container-lowest rounded border border-outline-variant/30">
                    <span className="text-body-md">Articles of Incorporation</span>
                    <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">info</span>
                  </li>
                  <li className="flex items-center justify-between p-sm bg-surface-container-lowest rounded border border-outline-variant/30">
                    <span className="text-body-md">Tax ID Certification</span>
                    <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">info</span>
                  </li>
                  <li className="flex items-center justify-between p-sm bg-surface-container-lowest rounded border border-outline-variant/30">
                    <span className="text-body-md">Board Charter</span>
                    <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">info</span>
                  </li>
                </ul>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded">
                <div className="flex items-center justify-between mb-md">
                  <h4 className="font-label-md text-on-surface-variant uppercase">Profile Readiness</h4>
                  <span className="font-label-md text-secondary">25%</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="w-1/4 h-full bg-secondary transition-all duration-1000"></div>
                </div>
                <p className="text-caption text-on-surface-variant mt-md">Finish Step 1 to unlock Project Grants dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Meta-Action */}
      <footer className="md:ml-64 bg-surface border-t border-outline-variant py-md px-margin-desktop">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-lg">
            <span className="font-label-md text-on-surface-variant">System Latency: 12ms</span>
            <span className="font-label-md text-on-surface-variant">Encryption: AES-256</span>
          </div>
          <div className="flex gap-md items-center">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-md text-on-surface-variant">Node: CH-GEN-02 ACTIVE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
