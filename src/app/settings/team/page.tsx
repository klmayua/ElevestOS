"use client";

import React from 'react';
import Link from 'next/link';

export default function TeamManagement() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-fixed-dim h-screen overflow-hidden">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full py-md z-50">
        <div className="px-lg pb-xl"><h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1><p className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Infrastructure Grade</p></div>
        <nav className="flex-1 px-sm space-y-base overflow-y-auto">
          <Link href="/dashboard" className="flex items-center px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">dashboard</span>Dashboard</Link>
          <Link href="/for-ngos/grants" className="flex items-center px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">payments</span>Grants</Link>
          <Link href="/dashboard/projects" className="flex items-center px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">account_tree</span>Projects</Link>
          <Link href="/dashboard/reports" className="flex items-center px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">assessment</span>Reports</Link>
          <Link href="/dashboard/compliance" className="flex items-center px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">inventory_2</span>Vault</Link>
          <Link href="/platform/labs" className="flex items-center px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">science</span>Labs</Link>
        </nav>
        <div className="px-sm mt-auto border-t border-outline-variant pt-md space-y-base">
          <Link href="#" className="flex items-center px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md">help</span>Support</Link>
          <Link href="/settings" className="flex items-center px-md py-sm rounded-lg text-primary font-bold border-r-4 border-primary bg-surface-container transition-all duration-150 font-body-md text-body-md"><span className="material-symbols-outlined mr-md" style={{ fontVariationSettings: "'FILL' 1" }}>settings</span>Settings</Link>
          <div className="mt-md px-md"><button className="w-full bg-primary text-on-primary py-sm rounded font-title-md text-body-md hover:opacity-90 transition-opacity">New Initiative</button></div>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center flex-1"><div className="relative w-full max-w-md"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span><input className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary" placeholder="Search institutional data..." type="text"/></div></div>
        <div className="flex items-center space-x-lg">
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-sm"><span className="material-symbols-outlined">gshield</span><span className="font-label-md text-label-md">Compliance Check</span></button>
          <div className="flex items-center space-x-md border-l border-outline-variant pl-lg">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">notifications</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">history</span>
            <div className="flex items-center gap-sm cursor-pointer"><img alt="Administrator" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkLAnsNAR79FC_llbzSmBbbNsEu1O4tBzahi_nfFb2teb0Lwfj1lqqRM0R3CPTLDeK3shiOsCI0Tm3z6JKP4t9yAEO6nwzDwHOmD-jjT3g2kk1w-WOLT4r-zBF_iHbJ_-9V1Rf5Y7FUtk3LhZxLuLGjp8gEAt2l60jy2_DK_alw49x-7ErxGlz4FpTpUA9l5NFITdc-6PCmrTDJuzB-1zRrg0F0v1O7sZBU9iOshteoaWGf0fo0T_huEyh-oknU-SSVR3EHcOs4kXh"/></div>
          </div>
        </div>
      </header>
      <main className="ml-64 pt-16 h-full overflow-y-auto bg-surface">
        <div className="p-margin-desktop space-y-xl">
          <div className="flex justify-between items-end">
            <div>
              <nav aria-label="Breadcrumb" className="flex mb-sm"><ol className="flex items-center space-x-2"><li><Link className="font-label-md text-label-md text-on-primary-container" href="#">Settings</Link></li><li><span className="material-symbols-outlined text-caption">chevron_right</span></li><li><span className="font-label-md text-label-md text-primary font-bold">Team Management</span></li></ol></nav>
              <h2 className="font-headline-lg text-headline-lg text-tertiary-container">Team Management</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Define institutional access hierarchies and manage active operational staff.</p>
            </div>
            <button className="bg-primary text-on-primary px-lg py-md flex items-center gap-sm hover:opacity-90 transition-all active:scale-95"><span className="material-symbols-outlined">person_add</span><span className="font-title-md text-body-md">Invite Member</span></button>
          </div>
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-8 space-y-lg">
              <div className="bg-surface-container-lowest border border-outline-variant overflow-hidden">
                <div className="p-md bg-surface-container-low border-b border-outline-variant flex justify-between items-center"><span className="font-label-md text-label-md text-tertiary-container uppercase tracking-widest">Active Members (14)</span><div className="flex gap-sm"><button className="p-xs hover:bg-surface-container-high"><span className="material-symbols-outlined text-body-lg">filter_list</span></button><button className="p-xs hover:bg-surface-container-high"><span className="material-symbols-outlined text-body-lg">download</span></button></div></div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead><tr className="bg-surface-container-lowest border-b border-outline-variant"><th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Member</th><th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Role</th><th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Clearance</th><th className="px-lg py-md font-label-md text-label-md text-on-surface-variant">Status</th><th className="px-lg py-md font-label-md text-label-md text-on-surface-variant"></th></tr></thead>
                    <tbody className="divide-y divide-outline-variant">
                      {[
                        { name: 'Marcus Thorne', email: 'm.thorne@elevest.org', role: 'Admin', style: 'bg-primary-fixed-dim text-primary-container', clearance: 'L5 Sovereign', clearanceIcon: 'verified_user', clrColor: 'text-secondary', active: true },
                        { name: 'Elena Rodriguez', email: 'e.rod@elevest.org', role: 'Program Manager', style: 'bg-tertiary-fixed-dim text-on-tertiary-container', clearance: 'L3 Operational', clearanceIcon: 'shield', clrColor: 'text-on-surface-variant', active: true },
                        { name: 'Samuel Okoro', email: 's.okoro@elevest.org', role: 'Field Coordinator', style: 'bg-secondary-container text-on-secondary-container', clearance: 'L2 Restricted', clearanceIcon: 'shield', clrColor: 'text-on-surface-variant', active: false },
                      ].map((m, i) => (
                        <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                          <td className="px-lg py-md"><div className="flex items-center gap-md"><img className="w-10 h-10 rounded border border-outline-variant" src={`https://lh3.googleusercontent.com/aida-public/AB6AXu${['BMKYmPDaEayZsAZKIAGYokdpPiB4krZJ4DCf13MqUjNCx92GizzKUb0Kd-4LrmlOGeMuDDVQVfmzp_ezvBZmgUFghi1WaiindoEZ8bUreB38y0fZm4W-Bb6s6HEW6XJaXkm5XZOzVZmFmVpItByoIDqE48XIjngCHvXKRTnRIQjtZwGZ9UEs05XI__h5OxNiAy-0R7NnQoHRUAUBhHKewDYpK878ZqFYmJIGna3aXmuB5QhhHezIwxWgZwuxujCq0KB9DRO2q2Ov_r', 'DvyejMtBK0UB-cHO6BE6DT8tCJXVluLbHIFY9_EVjev8PwY_bzna1uynexd7Dj6ZumhxeNI3-07U3Ywyhci5lVVs23y6wLRKoQqsU5Z3OtGOQsa0xOth_30ra50qhLc3b0yevLgnAGyTMQsTv82fMWWCTl2EOn6v2IfmF0ILoUzJ6hwMucdiLlLKiICCQUGkefGlkHe95xl0tgUFJBRUNEanDvC62WGJ9PwlPH8HGMDkUVXA1q36QqAlNlpTzq48_GbQO6HaFRziNQ', 'Aa_xbniJwd0Nw7fQuKsBWsPnhlzGEoRO2QoLMZfR2VKSEhcQz6rNbq697NqNenBtKOA91FwUFRr5d_kkSHvrBeMuZY-QKKEqSwZOO0nWYMfCJkiEwRiQChOqM_4Ytyl--BFFWZtVhxvWWLKAf9T5X79tswstAtHVwuy02AD_fI8pGZL-PgqkJUxGkEyJ9U1I7ok2ZTMmuTkh6kK4-gIls_o8J6MUytoUCaLu7dXoRrat0H1F14kR1CXrlAYLzEIP_8-GBSoF_ZbosS'][i]}`}/><div><p className="font-title-md text-body-md text-primary">{m.name}</p><p className="font-caption text-caption text-on-surface-variant">{m.email}</p></div></div></td>
                          <td className="px-lg py-md"><span className={`font-label-md text-label-md px-sm py-1 ${m.style}`}>{m.role}</span></td>
                          <td className="px-lg py-md"><div className="flex items-center gap-xs"><span className={`material-symbols-outlined text-body-md ${m.clrColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{m.clearanceIcon}</span><span className="font-label-md text-label-md">{m.clearance}</span></div></td>
                          <td className="px-lg py-md"><span className={`inline-flex items-center gap-xs ${m.active ? 'text-secondary' : 'text-on-surface-variant'}`}><span className={`w-1.5 h-1.5 rounded-full ${m.active ? 'bg-secondary' : 'bg-outline-variant'}`}></span><span className="font-label-md text-label-md">{m.active ? 'Active' : 'Offline'}</span></span></td>
                          <td className="px-lg py-md text-right"><button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-md border-t border-outline-variant bg-surface-container-low flex justify-between items-center"><p className="font-label-md text-label-md text-on-surface-variant">Showing 1-3 of 14 institutional agents</p><div className="flex gap-sm"><button className="px-sm py-1 border border-outline-variant bg-surface rounded hover:bg-surface-container-high transition-colors font-label-md text-label-md">Prev</button><button className="px-sm py-1 border border-outline-variant bg-surface rounded hover:bg-surface-container-high transition-colors font-label-md text-label-md">Next</button></div></div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-lg">
              <div className="bg-tertiary-container text-on-tertiary p-xl border border-tertiary shadow-lg">
                <div className="flex items-center gap-md mb-lg"><span className="material-symbols-outlined text-3xl">policy</span><h3 className="font-headline-md text-headline-md">Role Definitions</h3></div>
                <div className="space-y-xl">
                  {[
                    { title: 'Admin', desc: 'Full system sovereignty. Can manage fiscal buckets, authorize new nodes, and override audit protocols. Multi-factor authentication mandatory.' },
                    { title: 'Program Manager', desc: 'Strategic oversight. Permission to approve project budgets up to $1M and generate comprehensive compliance reports.' },
                    { title: 'Field Coordinator', desc: 'Tactical execution. Access to localized project vaults and real-time field data entry. No fiscal authorization permissions.' },
                  ].map((r, i) => (
                    <div key={i} className="space-y-sm"><h4 className="font-title-md text-body-md font-bold text-primary-fixed">{r.title}</h4><p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed">{r.desc}</p></div>
                  ))}
                </div>
                <button className="w-full mt-xl py-md border border-on-tertiary-container text-on-tertiary-container font-label-md text-label-md hover:bg-on-tertiary-container hover:text-tertiary-container transition-all">View Full Permission Matrix</button>
              </div>
            </div>
            <div className="col-span-12">
              <div className="bg-surface-container border border-outline-variant">
                <div className="p-md bg-surface-container-high border-b border-outline-variant flex items-center gap-md"><span className="material-symbols-outlined text-on-primary-fixed-variant">history_edu</span><span className="font-label-md text-label-md text-primary font-bold uppercase tracking-widest">Security Change Audit Trail</span></div>
                <div className="p-0">
                  <div className="divide-y divide-outline-variant">
                    {[
                      { ts: '2023-10-24 14:22:01', action: 'Role Escalation', desc: 'Marcus Thorne escalated Clearance Level for Samuel Okoro from L1 to L2.', status: 'VERIFIED', cls: 'text-secondary' },
                      { ts: '2023-10-24 09:15:44', action: 'System Login', desc: 'External node login detected from unauthorized IP (blocked). IP: 192.168.1.104', status: 'FLAGGED', cls: 'text-error' },
                      { ts: '2023-10-23 18:02:12', action: 'New Invite', desc: 'Administrator created pending invitation for Sarah J. (Program Manager).', status: 'VERIFIED', cls: 'text-secondary' },
                    ].map((a, i) => (
                      <div key={i} className="px-lg py-md flex items-center justify-between font-label-md text-label-md">
                        <div className="flex gap-xl"><span className="text-on-surface-variant font-label-md">{a.ts}</span><span className="text-primary font-bold">{a.action}</span><span className="text-on-surface-variant">{a.desc}</span></div>
                        <span className={`${a.cls} font-bold`}>{a.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-lg right-lg bg-white/80 backdrop-blur-md border border-outline-variant px-lg py-md flex items-center gap-lg shadow-xl z-50">
        <div className="flex items-center gap-sm"><div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div><span className="font-label-md text-label-md text-secondary">OS Integrity: 100%</span></div>
        <div className="h-4 w-px bg-outline-variant"></div>
        <div className="flex items-center gap-sm"><span className="material-symbols-outlined text-body-md text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span><span className="font-label-md text-label-md text-on-surface-variant">TLS 1.3 Active</span></div>
      </div>
    </div>
  );
}
