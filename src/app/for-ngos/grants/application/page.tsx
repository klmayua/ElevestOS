"use client";

import React from 'react';
import Link from 'next/link';

export default function GrantApplicationWorkspace() {
  return (
    <div className="bg-background text-on-background overflow-hidden min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl">
          <div className="flex items-center gap-sm">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[20px]">account_balance</span>
            </div>
            <div>
              <h1 className="font-headline-md text-headline-md font-bold text-primary leading-none">ElevestOS</h1>
              <p className="font-label-md text-[10px] text-on-primary-container uppercase tracking-widest mt-1">Infrastructure Grade</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-sm space-y-1">
          <Link href="/dashboard" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-4 border-primary bg-surface-container transition-all duration-150 font-body-md text-body-md">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
            <span>Grants</span>
          </Link>
          <Link href="/dashboard/projects" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md">
            <span className="material-symbols-outlined">account_tree</span>
            <span>Projects</span>
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md">
            <span className="material-symbols-outlined">assessment</span>
            <span>Reports</span>
          </Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md">
            <span className="material-symbols-outlined">inventory_2</span>
            <span>Vault</span>
          </Link>
          <Link href="/platform/labs" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md">
            <span className="material-symbols-outlined">science</span>
            <span>Labs</span>
          </Link>
        </nav>
        <div className="mt-auto px-sm pt-md border-t border-outline-variant space-y-1">
          <button className="w-full mb-md py-sm px-md bg-primary text-white font-body-md rounded-lg flex items-center justify-center gap-sm hover:opacity-90 transition-all">
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            New Initiative
          </button>
          <Link href="#" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md">
            <span className="material-symbols-outlined">help</span>
            <span>Support</span>
          </Link>
          <Link href="/settings" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </Link>
        </div>
      </aside>

      {/* Top Navigation */}
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center gap-md">
          <div className="relative group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-outline">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </span>
            <input className="bg-surface-container border-none rounded-lg pl-10 pr-4 py-2 w-80 text-body-md focus:ring-2 focus:ring-primary" placeholder="Search institutional records..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-xl">
          <button className="px-md py-sm bg-surface-container-high text-primary font-label-md rounded border border-outline-variant flex items-center gap-sm hover:bg-surface-dim transition-colors scale-95">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            Compliance Check
          </button>
          <div className="flex items-center gap-lg text-on-surface-variant">
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
            <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">history</span></button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
              <img alt="Administrator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0XMrarNHfsCCeGby4zg9Igfp7nycunGUlcXoySMftevHv9rb5jm1OPFV9KfEkfsEwv-ZvmM7ux7b98mw0ZUboNxG UNE_ laCbrCrJr8AuBUTsbFZmIIq9wbL_Qb0oj9MBApcx8t6rWmV6MhIMzbK-FyyMFyLIcArc9xHzFg6qBEpnUXowVF2S11f8NOBwIDRj8n82XtKazG-ZJ0zIqMKYuwX4lWiOIRyYfTJFowv0Cn2U1mpUZUBFLxYHnOcHgC6RP-VFv3"/>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="ml-64 mt-16 p-margin-desktop h-[calc(100vh-64px)] grid grid-cols-12 gap-gutter overflow-hidden bg-surface">
        {/* Left Pane: Progress Indicator */}
        <section className="col-span-3 flex flex-col gap-lg overflow-y-auto pr-2 custom-scrollbar">
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
            <h3 className="font-label-md text-label-md text-on-primary-container mb-md uppercase tracking-widest">Application Flow</h3>
            <div className="space-y-xl relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-outline-variant"></div>
              <div className="relative flex items-start gap-md">
                <div className="relative z-10 w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md leading-none text-secondary">Institutional Context</p>
                  <p className="font-body-md text-[12px] text-on-surface-variant mt-1">Completed Jan 14, 2024</p>
                </div>
              </div>
              <div className="relative flex items-start gap-md">
                <div className="relative z-10 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center border-4 border-surface-container-low">
                  <span className="material-symbols-outlined text-[16px]">pending</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md leading-none text-primary">Financial Planning</p>
                  <p className="font-body-md text-[12px] text-on-primary-container mt-1">Step 2 of 5 · Active</p>
                  <div className="mt-md space-y-sm">
                    <div className="flex items-center gap-sm text-primary">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      <span className="font-body-md text-body-md font-semibold">Budget Documentation</span>
                    </div>
                    <div className="flex items-center gap-sm text-on-surface-variant">
                      <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
                      <span className="font-body-md text-body-md">Allocation Matrix</span>
                    </div>
                    <div className="flex items-center gap-sm text-on-surface-variant">
                      <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
                      <span className="font-body-md text-body-md">Risk Assessment</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-start gap-md opacity-50">
                <div className="relative z-10 w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-outline">lock</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md leading-none">Impact Framework</p>
                  <p className="font-body-md text-[12px] mt-1">Locked until Step 2 complete</p>
                </div>
              </div>
              <div className="relative flex items-start gap-md opacity-50">
                <div className="relative z-10 w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-outline">lock</span>
                </div>
                <div>
                  <p className="font-title-md text-title-md leading-none">Global Partnership</p>
                  <p className="font-body-md text-[12px] mt-1">Locked until Step 2 complete</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Center Pane: Main Form */}
        <section className="col-span-6 flex flex-col gap-lg overflow-y-auto custom-scrollbar px-md">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
            <div className="px-xl py-lg border-b border-outline-variant bg-surface-container-low">
              <h2 className="font-headline-md text-headline-md text-primary">Required Documents</h2>
              <p className="font-body-md text-on-surface-variant mt-1">Mandatory financial and legal filings for high-capacity grants.</p>
            </div>
            <div className="p-xl space-y-2xl">
              <div className="space-y-md">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-title-md text-title-md text-primary">Comprehensive Budget</h4>
                    <p className="font-body-md text-on-surface-variant">Multi-year projection including direct and indirect overheads.</p>
                  </div>
                  <span className="font-label-md text-label-md text-secondary">VERIFIED</span>
                </div>
                <div className="border border-outline-variant rounded-lg p-md flex items-center justify-between bg-surface">
                  <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined text-primary text-[32px]">description</span>
                    <div>
                      <p className="font-body-lg text-body-lg font-semibold">FY24_Global_Budget_v2.xlsx</p>
                      <p className="font-body-md text-[12px] text-on-surface-variant">4.2 MB · Uploaded by J. Doe</p>
                    </div>
                  </div>
                  <div className="flex gap-sm">
                    <button className="p-sm hover:bg-surface-variant rounded transition-colors text-on-surface-variant">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                    <button className="p-sm hover:bg-surface-variant rounded transition-colors text-on-surface-variant">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="space-y-md">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-title-md text-title-md text-primary">Governance Structure</h4>
                    <p className="font-body-md text-on-surface-variant">Board of Directors roster and organizational chart.</p>
                  </div>
                  <span className="font-label-md text-label-md text-on-primary-container italic">PENDING</span>
                </div>
                <div className="border-2 border-dashed border-outline-variant rounded-lg p-2xl flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[40px]">upload_file</span>
                  <p className="font-body-lg text-body-lg font-medium mt-md">Drop PDF or Excel file here</p>
                  <p className="font-body-md text-on-surface-variant mt-xs">Maximum file size: 50MB</p>
                  <button className="mt-lg px-xl py-sm bg-primary text-white font-title-md rounded-lg">Browse Vault</button>
                </div>
              </div>
              <div className="space-y-md">
                <div>
                  <h4 className="font-title-md text-title-md text-primary">Legal Registration</h4>
                  <p className="font-body-md text-on-surface-variant">Current 501(c)(3) or international equivalency certification.</p>
                </div>
                <div className="grid grid-cols-2 gap-md">
                  <div className="border border-outline-variant rounded-lg p-md bg-surface-container-high relative">
                    <span className="material-symbols-outlined absolute top-2 right-2 text-secondary">check_circle</span>
                    <p className="font-label-md text-[10px] text-on-primary-container uppercase">Document Type</p>
                    <p className="font-body-lg text-body-lg font-semibold mt-1">IRS Determination</p>
                  </div>
                  <div className="border border-outline-variant rounded-lg p-md bg-surface-container-high relative">
                    <span className="material-symbols-outlined absolute top-2 right-2 text-secondary">check_circle</span>
                    <p className="font-label-md text-[10px] text-on-primary-container uppercase">Expiry Date</p>
                    <p className="font-body-lg text-body-lg font-semibold mt-1">Dec 2026</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-xl py-lg bg-surface-container-low border-t border-outline-variant flex justify-end gap-md">
              <button className="px-xl py-md text-on-surface-variant font-title-md border border-outline-variant rounded-lg hover:bg-surface-variant transition-colors">Save Draft</button>
              <button className="px-xl py-md bg-primary text-white font-title-md rounded-lg hover:opacity-90 transition-all">Proceed to Step 3</button>
            </div>
          </div>
        </section>

        {/* Right Pane: Internal Reviews & Readiness */}
        <section className="col-span-3 flex flex-col gap-lg overflow-y-auto custom-scrollbar pl-2">
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl">
            <h3 className="font-label-md text-label-md text-on-primary-container mb-md uppercase tracking-widest">Submission Readiness</h3>
            <div className="flex items-center justify-between mb-sm">
              <span className="font-display-lg text-display-lg text-primary">68%</span>
              <div className="w-16 h-16 relative">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle className="stroke-surface-container-highest" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                  <circle className="stroke-secondary" cx="18" cy="18" fill="none" r="16" strokeDasharray="68, 100" strokeLinecap="round" strokeWidth="3"></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                </div>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant mb-lg">Institutional review required before final submission activation.</p>
            <div className="space-y-md">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span className="font-body-md text-body-md">Primary Information</span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span className="font-body-md text-body-md">Financial Core Documents</span>
              </div>
              <div className="flex items-center gap-sm opacity-40">
                <span className="material-symbols-outlined text-outline text-[18px]">radio_button_unchecked</span>
                <span className="font-body-md text-body-md">Governance Validation</span>
              </div>
              <div className="flex items-center gap-sm opacity-40">
                <span className="material-symbols-outlined text-outline text-[18px]">radio_button_unchecked</span>
                <span className="font-body-md text-body-md">Impact Signature</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex-1 flex flex-col">
            <h3 className="font-label-md text-label-md text-on-primary-container mb-md uppercase tracking-widest">Internal Review Notes</h3>
            <div className="space-y-lg flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-md bg-surface-container-low rounded-lg border-l-4 border-error">
                <div className="flex items-center justify-between mb-sm">
                  <div className="flex items-center gap-sm">
                    <img alt="Auditor 1" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjAfxPEypsYX4s_o1xchfLdej7-XfrYyZqQVN9lulkrf4GxrDRb4zoF3KmrDS9H_S_O_B8 laCbrCrJr8AuBUTsbFZmIIq9wbL_Qb0oj9MBApcx8t6rWmV6MhIMzbK-FyyMFyLIcArc9xHzFg6qBEpnUXowVF2S11f8NOBwIDRj8n82XtKazG-ZJ0zIqMKYuwX4lWiOIRyYfTJFowv0Cn2U1mpUZUBFLxYHnOcHgC6RP-VFv3"/>
                    <span className="font-label-md text-label-md text-primary">Senior Auditor</span>
                  </div>
                  <span className="font-label-md text-[10px] text-on-primary-container">2H AGO</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface">The Budget XLS v2 is missing the inflation adjustment clause for the year 3 allocation. Please revise or provide a justification note.</p>
              </div>
              <div className="p-md bg-surface-container-low rounded-lg border-l-4 border-outline">
                <div className="flex items-center justify-between mb-sm">
                  <div className="flex items-center gap-sm">
                    <img alt="Auditor 2" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARfyYmlk56EwE5wPuWkcYapfzudO_DRkZX8LLioJSsGQ10vZlGAzQsZSxgRaY3_swU0sMHiIetxc6TYmePdQVB9Pu4SkF_44M9NcoMGAHSNDVkcFMyoxZWqTnk5Zjrx7VO7AWTPbdu9tbhMih2C7zRFePF4nDERHolmR6JZkCQRX-h43e_fDuhv1SXr86_7NZNzBWZBL17nSGOGJqf2qK3OG2AaTtZPfJ21zjQ4kr0PnnRB7Ty9ZSEQFdpMFJKji9z1YnegXdhzSve"/>
                    <span className="font-label-md text-label-md text-primary">Compliance Officer</span>
                  </div>
                  <span className="font-label-md text-[10px] text-on-primary-container">5H AGO</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface">IRS documents are valid. Ensuring registration matches the legal name in section 1.1.</p>
              </div>
            </div>
            <div className="mt-lg pt-lg border-t border-outline-variant">
              <div className="flex gap-sm">
                <input className="flex-1 bg-surface-container border border-outline-variant rounded-lg px-md py-sm text-body-md focus:ring-1 focus:ring-primary" placeholder="Add internal note..." type="text"/>
                <button className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
