"use client";

import React from 'react';
import Link from 'next/link';

export default function TeacherPortal() {
  return (
    <div className="text-on-surface min-h-screen" style={{ backgroundColor: '#f7f9fb' }}>
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl"><div className="flex items-center gap-sm"><div className="w-10 h-10 bg-primary flex items-center justify-center rounded"><span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span></div><div><h1 className="font-headline-md text-[20px] font-bold text-primary leading-tight">ElevestOS</h1><p className="font-label-md text-[10px] text-on-primary-container tracking-widest uppercase">Infrastructure Grade</p></div></div></div>
        <nav className="flex-1 flex flex-col gap-xs">
          {[{icon:'dashboard',label:'Dashboard'},{icon:'payments',label:'Grants'},{icon:'account_tree',label:'Projects'},{icon:'assessment',label:'Reports'},{icon:'inventory_2',label:'Vault'},{icon:'science',label:'Labs',active:true}].map((n,i)=>(
            <Link key={i} href="#" className={`flex items-center gap-md px-md py-sm hover:bg-surface-container-high transition-colors font-body-md ${n.active?'text-primary font-bold border-r-4 border-primary bg-surface-container':'text-on-surface-variant'}`}><span className="material-symbols-outlined" style={n.active?{fontVariationSettings:"'FILL' 1"}:{}}>{n.icon}</span><span>{n.label}</span></Link>
          ))}
        </nav>
        <div className="px-md mt-auto pt-md flex flex-col gap-xs">
          <button className="w-full bg-primary text-white font-title-md text-body-md py-sm mb-md rounded shadow-sm hover:opacity-90 transition-opacity">New Initiative</button>
          <Link href="#" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md"><span className="material-symbols-outlined">help</span><span>Support</span></Link>
          <Link href="/settings" className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md"><span className="material-symbols-outlined">settings</span><span>Settings</span></Link>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center bg-surface-container px-md py-xs rounded-lg w-96 border border-outline-variant/30"><span className="material-symbols-outlined text-on-surface-variant mr-sm">search</span><input className="bg-transparent border-none focus:ring-0 text-body-md w-full placeholder:text-on-surface-variant/60" placeholder="Search institutional data..." type="text"/></div>
        <div className="flex items-center gap-lg">
          <div className="flex gap-md border-r border-outline-variant pr-lg">
            <button className="relative p-base hover:bg-surface-container-high rounded transition-colors"><span className="material-symbols-outlined text-on-surface-variant">notifications</span><span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span></button>
            <button className="p-base hover:bg-surface-container-high rounded transition-colors"><span className="material-symbols-outlined text-on-surface-variant">history</span></button>
          </div>
          <div className="flex items-center gap-sm"><div className="text-right"><p className="font-title-md text-body-md leading-tight">Dr. Aris Thorne</p><p className="font-label-md text-on-primary-container">Senior Laboratory Lead</p></div><img alt="Admin" className="w-10 h-10 rounded-full object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyL1Y0fLrtqghCuSrZVG-oFfZEL8GHD laS_O_B8 laCbrCrJr8AuBUTsbFZmIIq9wbL_Qb0oj9MBApcx8t6rWmV6MhIMzbK-FyyMFyLIcArc9xHzFg6qBEpnUXowVF2S11f8NOBwIDRj8n82XtKazG-ZJ0zIqMKYuwX4lWiOIRyYfTJFowv0Cn2U1mpUZUBFLxYHnOcHgC6RP-VFv3"/></div>
        </div>
      </header>
      <main className="ml-64 pt-16 min-h-screen bg-background">
        <div className="p-margin-desktop grid grid-cols-12 gap-gutter">
          <section className="col-span-12 flex items-center justify-between mb-sm"><div><h2 className="font-headline-lg text-headline-lg text-primary">Lab Ecosystem Overview</h2><p className="font-body-md text-on-surface-variant">Real-time engagement across institutional training tracks.</p></div><button className="flex items-center gap-sm bg-white border border-outline px-md py-sm rounded hover:bg-surface-container transition-colors font-title-md text-body-md"><span className="material-symbols-outlined text-[18px]">download</span>Export Ledger</button></section>
          {[{label:'Active NGOs',val:'48',delta:'+4 this month',icon:'corporate_fare',c:'text-secondary'},{label:'Review Queue',val:'09',delta:'Avg. 4h response time',icon:'priority_high',c:'text-error'}].map((kpi,i)=>(
            <div key={i} className="col-span-3 bg-white p-lg border border-outline-variant relative overflow-hidden group"><div className="absolute top-0 right-0 p-md opacity-10"><span className="material-symbols-outlined text-[64px]">{kpi.icon}</span></div><p className="font-label-md text-on-surface-variant uppercase tracking-wider mb-base">{kpi.label}</p><h3 className={`font-display-lg text-display-lg ${kpi.c}`}>{kpi.val}</h3><div className={`mt-md flex items-center gap-xs ${kpi.c}`}><span className="material-symbols-outlined text-[16px]">{kpi.c.includes('error')?'timer':'trending_up'}</span><span className="font-label-md">{kpi.delta}</span></div></div>
          ))}
          <div className="col-span-6 bg-white p-lg border border-outline-variant flex items-center justify-between"><div className="flex-1"><p className="font-label-md text-on-surface-variant uppercase tracking-wider mb-base">Cohort Milestone</p><h3 className="font-title-md text-title-md mb-sm">Grants Masterclass `24</h3><div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"><div className="bg-secondary h-full w-3/4 rounded-full"></div></div></div><div className="ml-xl text-right"><p className="font-display-lg text-display-lg text-primary">75%</p><p className="font-label-md text-secondary">Complete</p></div></div>
          <div className="col-span-8 space-y-gutter">
            <div className="bg-white border border-outline-variant p-lg">
              <div className="flex items-center justify-between mb-lg"><h4 className="font-title-md text-title-md">Performance Analytics</h4><div className="flex gap-sm"><span className="px-sm py-xs bg-surface-container text-primary font-label-md rounded border border-outline-variant/50">Weekly</span><span className="px-sm py-xs text-on-surface-variant font-label-md rounded hover:bg-surface-container cursor-pointer transition-colors">Monthly</span></div></div>
              <div className="h-64 w-full flex items-end gap-md px-md pb-md">
                {[40,65,85,55,92,30,70].map((h,i)=>(
                  <div key={i} className={`flex-1 hover:bg-primary transition-all relative group ${i===4?'bg-primary':'bg-surface-container-highest'}`} style={{height:`${h}%`}}><div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-xs hidden group-hover:block bg-tertiary text-white px-sm py-xs rounded text-[10px] whitespace-nowrap">Cohort {String.fromCharCode(65+i)}: {h}%</div></div>
                ))}
              </div>
              <div className="flex justify-between mt-sm border-t border-outline-variant pt-sm">{['Jan','Feb','Mar','Apr','May','Jun','Jul'].map((m,i)=><span key={i} className={`font-label-md ${m==='May'?'text-primary font-bold':'text-on-surface-variant'}`}>{m}</span>)}</div>
            </div>
            <div className="bg-white border border-outline-variant overflow-hidden">
              <div className="p-lg border-b border-outline-variant flex justify-between items-center"><h4 className="font-title-md text-title-md">Assignment Review</h4><a className="text-primary font-label-md underline" href="#">View All Submissions</a></div>
              <table className="w-full text-left border-collapse">
                <thead className="bg-surface-container-low"><tr><th className="px-lg py-md font-label-md text-on-surface-variant border-b border-outline-variant">NGO ENTITY</th><th className="px-lg py-md font-label-md text-on-surface-variant border-b border-outline-variant">MODULE</th><th className="px-lg py-md font-label-md text-on-surface-variant border-b border-outline-variant">REVIEW STATUS</th><th className="px-lg py-md font-label-md text-on-surface-variant border-b border-outline-variant text-right">ACTIONS</th></tr></thead>
                <tbody className="divide-y divide-outline-variant">
                  {[{initials:'GH',name:'Global Health Initiative',sub:'Sub 1204-A',module:'Financial Compliance',status:'Urgent',ss:'bg-error-container text-on-error-container'},{initials:'WW',name:'WaterWays Alliance',sub:'Sub 1205-C',module:'Logistics Strategy',status:'Pending',ss:'bg-surface-container text-on-surface-variant'},{initials:'EF',name:'EcoFoundry Lab',sub:'Sub 1208-F',module:'Eco-Accounting',status:'In Review',ss:'bg-secondary-container text-on-secondary-container'}].map((a,i)=>(
                    <tr key={i} className="hover:bg-surface transition-colors">
                      <td className="px-lg py-md"><div className="flex items-center gap-md"><div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-label-md">{a.initials}</div><div><p className="font-body-md font-bold">{a.name}</p><p className="text-[10px] text-on-surface-variant uppercase">{a.sub}</p></div></div></td>
                      <td className="px-lg py-md font-body-md">{a.module}</td>
                      <td className="px-lg py-md"><span className={`inline-flex items-center px-sm py-base rounded font-label-md text-[10px] uppercase font-bold ${a.ss}`}>{a.status}</span></td>
                      <td className="px-lg py-md text-right"><button className={`${a.status==='Urgent'?'bg-primary text-white':'bg-white border border-outline text-primary'} px-md py-xs rounded font-label-md hover:bg-surface-container transition-colors`}>{a.status==='Urgent'?'Provide Feedback':'Review'}{a.status==='In Review'?' (Resume)':''}</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-4 space-y-gutter">
            <div className="bg-white border border-outline-variant p-lg">
              <h4 className="font-title-md text-title-md mb-lg flex items-center justify-between">Session Schedule<span className="material-symbols-outlined text-on-surface-variant">calendar_today</span></h4>
              <div className="space-y-md">
                {[{day:'24',title:'Expert Workshop: Risk Mitigation',time:'14:00 - 15:30 • MS Teams',active:true},{day:'25',title:'Office Hours: Peer Review',time:'09:00 - 11:00 • Lab Hall B',dim:true},{day:'28',title:'Grant Disbursement Lab',time:'16:00 - 17:30 • Auditorium',active:true}].map((s,i)=>(
                  <div key={i} className={`flex gap-md group cursor-pointer ${s.dim?'opacity-60':''}`}><div className="flex-none w-12 text-center border-r border-outline-variant pr-md"><p className={`font-label-md ${s.active?'text-primary font-bold':'text-on-surface-variant'}`}>{s.day}</p><p className="font-label-md text-on-surface-variant">MAY</p></div><div className="flex-1"><p className={`font-body-md font-bold ${s.active?'group-hover:text-secondary transition-colors':''}`}>{s.title}</p><p className="font-label-md text-on-surface-variant">{s.time}</p></div></div>
                ))}
              </div>
              <button className="w-full mt-lg py-sm border border-outline-variant hover:bg-surface transition-colors font-label-md text-primary uppercase tracking-widest">View Full Calendar</button>
            </div>
            <div className="bg-tertiary-container text-white p-lg border border-outline relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 opacity-20 transform rotate-12"><span className="material-symbols-outlined text-[160px]">support_agent</span></div>
              <h4 className="font-title-md text-title-md text-white mb-sm">Expert Support</h4>
              <p className="font-body-md text-on-tertiary-container mb-lg">Access the Elevest Infrastructure helpdesk for protocol inquiries and system support.</p>
              <div className="space-y-sm relative z-10">
                {[{icon:'menu_book',label:'Documentation'},{icon:'chat',label:'Live Liaison'}].map((s,i)=>(
                  <a key={i} className="flex items-center justify-between p-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" href="#"><div className="flex items-center gap-md"><span className="material-symbols-outlined text-[20px]">{s.icon}</span><span className="font-body-md">{s.label}</span></div><span className="material-symbols-outlined text-[16px]">north_east</span></a>
                ))}
              </div>
            </div>
            <div className="bg-white border border-outline-variant p-lg"><div className="flex items-center gap-sm"><div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div><p className="font-label-md text-on-surface-variant">Elevest Core v4.8.2 Online</p></div></div>
          </div>
        </div>
      </main>
      <div className="fixed bottom-margin-desktop right-margin-desktop flex flex-col gap-md"><button className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"><span className="material-symbols-outlined">add</span></button></div>
    </div>
  );
}
