"use client";

import React from 'react';
import Link from 'next/link';

export default function FeaturedEvents() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl"><h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1><p className="font-label-md text-label-md text-on-primary-container tracking-wider uppercase">Infrastructure Grade</p></div>
        <nav className="flex-1 space-y-1">
          <Link href="/dashboard" className="flex items-center px-md py-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high transition-colors group"><span className="material-symbols-outlined mr-md">dashboard</span><span>Dashboard</span></Link>
          <Link href="/for-ngos/grants" className="flex items-center px-md py-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high transition-colors group"><span className="material-symbols-outlined mr-md">payments</span><span>Grants</span></Link>
          <Link href="/dashboard/projects" className="flex items-center px-md py-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high transition-colors group"><span className="material-symbols-outlined mr-md">account_tree</span><span>Projects</span></Link>
          <Link href="/dashboard/reports" className="flex items-center px-md py-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high transition-colors group"><span className="material-symbols-outlined mr-md">assessment</span><span>Reports</span></Link>
          <Link href="/dashboard/compliance" className="flex items-center px-md py-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high transition-colors group"><span className="material-symbols-outlined mr-md">inventory_2</span><span>Vault</span></Link>
          <Link href="/resources/events" className="flex items-center px-md py-sm font-body-md text-body-md text-primary font-bold border-r-4 border-primary bg-surface-container transition-all"><span className="material-symbols-outlined mr-md" style={{ fontVariationSettings: "'FILL' 1" }}>science</span><span>Labs</span></Link>
        </nav>
        <div className="mt-auto px-md py-md border-t border-outline-variant">
          <button className="w-full py-sm px-md bg-primary text-on-primary font-title-md text-title-md rounded hover:opacity-90 transition-all mb-xl">New Initiative</button>
          <div className="space-y-1">
            <Link href="#" className="flex items-center px-md py-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined mr-md">help</span><span>Support</span></Link>
            <Link href="/settings" className="flex items-center px-md py-sm font-body-md text-body-md text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined mr-md">settings</span><span>Settings</span></Link>
          </div>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center bg-surface-container-low px-md py-base rounded w-96 border border-outline-variant"><span className="material-symbols-outlined text-on-surface-variant mr-sm">search</span><input className="bg-transparent border-none focus:ring-0 text-body-md w-full" placeholder="Search resources..." type="text"/></div>
        <div className="flex items-center gap-xl">
          <button className="font-label-md text-label-md text-primary hover:underline uppercase tracking-widest">Compliance Check</button>
          <div className="flex items-center gap-md">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">notifications</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">history</button>
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center"><span className="material-symbols-outlined text-on-primary-fixed">account_circle</span></div>
          </div>
        </div>
      </header>
      <main className="ml-64 pt-16 min-h-screen">
        <div className="px-margin-desktop py-xl grid grid-cols-12 gap-gutter">
          <section className="col-span-8 space-y-xl">
            <div className="relative overflow-hidden rounded-xl bg-primary-container text-on-primary border border-outline-variant h-[440px] group">
              <img alt="Institutional Education" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRa0uLKq-YuARmNhVOpvd4rmz2tUUt5Q5RdWr8ICWYdcp703uNYVWszCjbXb1bkJoEW3p7k5WHWcQMPMXlUbDd4MRIN0KGQnSNs3MEEYQ4tbnXiA3XV1UaSRGESyTZpUNsjORB_4AI3Z092aM_9conJ3KJ7SJ4X5rZMg-5-4j6hnpemQanT8DHXyqfiLzbvcdR9tMaV1YV6a4aRfR--o9bjX7NS9cLxTLyEZCe8KPbyWvI0EhcAnutGfvQg8CwlXHYOePHld53FPCq"/>
              <div className="absolute inset-0 bg-gradient-to-r from-tertiary-container via-tertiary-container/80 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-2xl">
                <div className="inline-flex items-center bg-secondary px-sm py-base rounded mb-md text-on-secondary font-label-md text-label-md"><span className="material-symbols-outlined text-[14px] mr-xs" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>CERTIFIED COURSE</div>
                <h2 className="font-display-lg text-display-lg mb-md leading-tight max-w-2xl">Institutional Grant Mastery</h2>
                <p className="font-body-lg text-body-lg text-on-primary-container mb-xl max-w-xl">A comprehensive 12-week certification for NGO leaders and finance directors on navigating G7 funding frameworks and multi-lateral compliance.</p>
                <div className="flex items-center gap-xl">
                  <div className="flex items-center gap-md">
                    <div className="text-center"><div className="font-headline-md text-headline-md text-on-primary">14</div><div className="font-label-md text-label-md uppercase opacity-60">Days</div></div>
                    <div className="text-headline-md opacity-40">:</div>
                    <div className="text-center"><div className="font-headline-md text-headline-md text-on-primary">08</div><div className="font-label-md text-label-md uppercase opacity-60">Hrs</div></div>
                    <div className="text-headline-md opacity-40">:</div>
                    <div className="text-center"><div className="font-headline-md text-headline-md text-on-primary">42</div><div className="font-label-md text-label-md uppercase opacity-60">Mins</div></div>
                  </div>
                  <button className="bg-on-primary text-primary px-3xl py-md font-title-md text-title-md rounded hover:bg-surface-variant transition-colors">Register Enrollment</button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-lg"><h3 className="font-headline-md text-headline-md">Upcoming Workshops</h3><Link href="#" className="font-label-md text-label-md text-secondary flex items-center hover:gap-sm transition-all uppercase">View All <span className="material-symbols-outlined ml-xs">arrow_forward</span></Link></div>
              <div className="grid grid-cols-2 gap-lg">
                {[{icon:'policy', date:'JUL 24', title:'Data Ethics in Public Policy', desc:'Implementing GDPR and local sovereignty frameworks in data-poor environments.', instructor:'Dr. Aris Thorne'},{icon:'verified_user', date:'AUG 02', title:'Macro-Scale Risk Management', desc:'Mitigating geopolitical instability in multi-year regional grant cycles.', instructor:'Elena Kovac'}].map((w,i)=>(
                  <div key={i} className="bg-surface-container-lowest border border-outline-variant p-lg hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-md"><span className="material-symbols-outlined text-secondary text-3xl">{w.icon}</span><span className="font-label-md text-label-md text-on-surface-variant">{w.date}</span></div>
                    <h4 className="font-title-md text-title-md mb-sm group-hover:text-primary">{w.title}</h4><p className="font-body-md text-body-md text-on-surface-variant mb-lg">{w.desc}</p>
                    <div className="flex items-center gap-md"><div className="w-8 h-8 rounded-full bg-surface-variant"></div><span className="font-label-md text-label-md text-on-surface">{w.instructor}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-outline-variant rounded">
              <div className="px-lg py-md border-b border-outline-variant bg-surface-container-low"><h3 className="font-title-md text-title-md">Sector Seminars</h3></div>
              <div className="divide-y divide-outline-variant">
                {[{icon:'health_and_safety', title:'Global Health Resilience', desc:'Post-pandemic funding strategies for endemic control.', status:'Live in 3 Days', extra:'124 registered'},{icon:'tsunami', title:'Climate Policy Adaptation', desc:'Financial instruments for municipal infrastructure transition.', status:'On-Demand', extra:'2.1k views'}].map((s,i)=>(
                  <div key={i} className="flex items-center p-lg hover:bg-surface-container transition-colors group">
                    <div className="w-12 h-12 bg-primary-container text-on-primary-container flex items-center justify-center rounded mr-lg"><span className="material-symbols-outlined">{s.icon}</span></div>
                    <div className="flex-1"><h5 className="font-title-md text-title-md">{s.title}</h5><p className="font-body-md text-body-md text-on-surface-variant">{s.desc}</p></div>
                    <div className="text-right"><div className="font-label-md text-label-md text-on-surface">{s.status}</div><div className="font-caption text-caption text-on-surface-variant">{s.extra}</div></div>
                    <span className="material-symbols-outlined ml-xl opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <aside className="col-span-4 space-y-xl">
            <div className="bg-primary-container text-on-primary p-xl rounded border border-outline-variant shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h3 className="font-headline-md text-headline-md mb-lg">The Elevest Standard</h3>
              <ul className="space-y-lg">
                {[{t:'GTM Pipeline Integration',d:'Seamless transfer from research labs to global market implementation.'},{t:'Institutional Fidelity',d:'99.8% compliance audit success rate across all certified programs.'},{t:'Funder Sovereignty',d:'Strict adherence to bilateral transparency protocols and data privacy.'}].map((item,i)=>(
                  <li key={i} className="flex gap-md"><span className="material-symbols-outlined text-secondary" style={{fontVariationSettings:"'FILL' 1"}}>check_circle</span><div><span className="font-title-md text-title-md block">{item.t}</span><span className="font-body-md text-body-md opacity-70">{item.d}</span></div></li>
                ))}
              </ul>
              <button className="w-full mt-2xl py-md bg-secondary text-on-secondary font-title-md text-title-md hover:brightness-110 transition-all rounded">Download Credibility Deck</button>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded">
              <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-lg">Certification Progress</h4>
              <div className="space-y-lg">
                {[{label:'Institutional Compliance',pct:'85%'},{label:'Financial Reporting',pct:'42%'}].map((p,i)=>(
                  <div key={i}><div className="flex justify-between mb-sm font-label-md text-label-md"><span>{p.label}</span><span>{p.pct}</span></div><div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden"><div className="bg-secondary h-full" style={{width:p.pct}}></div></div></div>
                ))}
              </div>
            </div>
            <div className="pt-md"><h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-lg">Accredited By</h4><div className="grid grid-cols-2 gap-md opacity-40 grayscale"><div className="h-12 bg-surface-dim rounded flex items-center justify-center font-bold text-lg">W.F.O.</div><div className="h-12 bg-surface-dim rounded flex items-center justify-center font-bold text-lg">G-SUMMIT</div><div className="h-12 bg-surface-dim rounded flex items-center justify-center font-bold text-lg">ISO-GRANT</div><div className="h-12 bg-surface-dim rounded flex items-center justify-center font-bold text-lg">E.D.F.</div></div></div>
          </aside>
        </div>
      </main>
    </div>
  );
}
