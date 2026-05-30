"use client";

import React from 'react';
import Link from 'next/link';

export default function StudentPortal() {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl"><h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1><p className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Infrastructure Grade</p></div>
        <nav className="flex-1 space-y-1">
          {[{icon:'dashboard',label:'Dashboard'},{icon:'payments',label:'Grants'},{icon:'account_tree',label:'Projects'},{icon:'assessment',label:'Reports'},{icon:'inventory_2',label:'Vault'},{icon:'science',label:'Labs',active:true}].map((n,i)=>(
            <Link key={i} href="#" className={`flex items-center px-md py-sm hover:bg-surface-container-high transition-colors ${n.active?'text-primary font-bold border-r-4 border-primary bg-surface-container':'text-on-surface-variant'}`}><span className="material-symbols-outlined mr-md">{n.icon}</span><span className="font-body-md">{n.label}</span></Link>
          ))}
        </nav>
        <div className="px-md mt-auto pt-md space-y-1">
          <button className="w-full mb-lg py-sm px-md bg-primary text-on-primary font-bold rounded-lg flex items-center justify-center hover:opacity-90 transition-all"><span className="material-symbols-outlined mr-sm">add</span>New Initiative</button>
          <Link href="#" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined mr-md">help</span><span className="font-body-md">Support</span></Link>
          <Link href="/settings" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined mr-md">settings</span><span className="font-body-md">Settings</span></Link>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center flex-1 max-w-xl"><div className="relative w-full"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span><input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-body-md" placeholder="Search training resources..." type="text"/></div></div>
        <div className="flex items-center gap-lg ml-xl">
          <button className="bg-secondary-container text-on-secondary-container px-md py-base font-label-md rounded text-label-md uppercase tracking-wider">Compliance Check</button>
          <div className="flex items-center gap-md">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">history</span>
            <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant"><img alt="Admin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEckm0jhRTZZQ7YbJKx4Dxu9nHmYq-ehukwfelY6htLD8_GbfXoFbErrOipvPne7ZcrL5H7jXwd-UUB8uGIc-kUG_IEhfHGLYjdDymft95REh6NKp49cc6rtxngcptqaAfc2p4rMuA4cyAnZ7I31IWcH1CM5aAyV-C4M2RIHA1UfS4xhn6noHzA8eCOQTv7dJ06ZD9nvIEtn61uBUEgKXgPj3lZc_xpxkxEq_YCrWOKViVYlcLwYanM_ySdLhruyS4Rntr15XM9KWg"/></div>
          </div>
        </div>
      </header>
      <main className="ml-64 pt-16 p-margin-desktop">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-gutter">
          <section className="col-span-12 lg:col-span-8">
            <div className="bg-surface-container-lowest border border-outline-variant p-xl rounded-xl relative overflow-hidden h-full flex flex-col justify-between">
              <div className="flex justify-between items-start z-10"><div><h2 className="font-headline-lg text-headline-lg text-primary mb-sm">Institutional Learning Path</h2><p className="text-on-surface-variant font-body-lg max-w-md">Comprehensive accreditation for multi-sector fund management and international compliance standards.</p></div><div className="text-right"><span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest block mb-2">Overall Progress</span><span className="font-display-lg text-[48px] font-bold text-primary">68%</span></div></div>
              <div className="mt-2xl z-10"><div className="flex justify-between items-end mb-sm"><span className="font-label-md text-label-md text-secondary">In Progress: Strategic Allocation</span><span className="font-label-md text-label-md text-on-surface-variant">Next: Advanced Audit Protocols</span></div><div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden"><div className="h-full w-[68%] transition-all duration-1000 ease-out" style={{background:'linear-gradient(90deg, #10B981 0%, #059669 100%)'}}></div></div></div>
              <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none"><span className="material-symbols-outlined text-[240px]">account_balance</span></div>
            </div>
          </section>
          <section className="col-span-12 lg:col-span-4">
            <div className="bg-surface-container-lowest border border-outline-variant p-xl rounded-xl h-full">
              <h3 className="font-title-md text-title-md text-primary mb-lg">Student Statistics</h3>
              <div className="space-y-xl">
                <div className="flex items-center gap-md"><div className="h-12 w-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary"><span className="material-symbols-outlined">task_alt</span></div><div><p className="font-label-md text-label-md text-on-surface-variant uppercase">Modules Done</p><p className="font-headline-md text-headline-md font-bold">12 / 18</p></div></div>
                <div className="flex items-center gap-md"><div className="h-12 w-12 rounded-lg bg-surface-container flex items-center justify-center text-primary"><span className="material-symbols-outlined">schedule</span></div><div><p className="font-label-md text-label-md text-on-surface-variant uppercase">Hours Logged</p><p className="font-headline-md text-headline-md font-bold">42.5 hrs</p></div></div>
                <div className="pt-md border-t border-outline-variant"><div className="flex justify-between items-center mb-sm"><span className="font-body-md text-on-surface-variant">Current Streak</span><span className="font-label-md text-label-md font-bold text-secondary">8 Days</span></div><div className="flex gap-1">{Array.from({length:7}).map((_,i)=><div key={i} className={`flex-1 h-1 rounded-full ${i<5?'bg-secondary':'bg-surface-container-high'}`}></div>)}</div></div>
              </div>
            </div>
          </section>
          <section className="col-span-12">
            <div className="flex justify-between items-center mb-md"><h3 className="font-title-md text-title-md text-primary">Upcoming Workshops</h3><button className="text-primary font-label-md text-label-md flex items-center hover:underline">View Schedule <span className="material-symbols-outlined ml-1 text-[18px]">chevron_right</span></button></div>
            <div className="flex overflow-x-auto gap-gutter pb-4 no-scrollbar">
              {[{date:'MAR 14, 2024',icon:'videocam',title:'Complex Fund Allocation',desc:'Deep dive into multi-currency distribution logic and automated ledger reconciliation for large-scale NGO operations.',attendees:'+18'},{date:'MAR 18, 2024',icon:'meeting_room',title:'Audit-Ready Workflows',desc:'Architecting operational processes that ensure 100% compliance transparency for federal and international audits.',attendees:'+42'},{date:'APR 02, 2024',icon:'lock',title:'Global IP Ethics',desc:'Navigating intellectual property rights in international development projects with multi-government stakeholders.',waitlist:true}].map((w,i)=>(
                <div key={i} className={`min-w-[380px] bg-surface-container-lowest border border-outline-variant p-lg rounded-xl flex flex-col justify-between hover:border-primary transition-colors cursor-pointer group ${w.waitlist?'opacity-60':''}`}>
                  <div><div className="flex justify-between items-start mb-md"><span className="bg-surface-container-high text-on-surface-variant font-label-md text-label-md px-sm py-xs rounded">{w.date}</span><span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">{w.icon}</span></div><h4 className="font-headline-md text-[20px] font-bold text-primary mb-sm">{w.title}</h4><p className="text-on-surface-variant font-body-md line-clamp-2">{w.desc}</p></div>
                  <div className="mt-lg flex items-center justify-between">
                    {w.waitlist?<><span className="text-on-surface-variant font-label-md text-label-md italic">Waitlist Only</span><button className="border border-outline text-on-surface-variant font-label-md text-label-md px-md py-base rounded cursor-not-allowed">Waitlist</button></>:<><div className="flex -space-x-2"><div className="h-8 w-8 rounded-full border-2 border-surface-container-lowest bg-surface-container overflow-hidden"><div className="w-full h-full bg-surface-container-high"></div></div><div className="h-8 w-8 rounded-full border-2 border-surface-container-lowest bg-surface-container-high flex items-center justify-center text-[10px] font-bold">{w.attendees}</div></div><button className="bg-primary text-on-primary font-label-md text-label-md px-md py-base rounded hover:scale-95 transition-transform">Register</button></>}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="col-span-12 lg:col-span-8">
            <h3 className="font-title-md text-title-md text-primary mb-md">Course Modules</h3>
            <div className="space-y-sm">
              {[{icon:'edit_note',title:'Grant Writing 201: Structural Narrative',pct:'92%',done:false},{icon:'gavel',title:'Compliance 101: Regulatory Frameworks',pct:'100%',done:true},{icon:'analytics',title:'Data Management & Impact Tracking',pct:'15%',done:false},{icon:'lock',title:'Strategic Partnership Strategy',locked:true}].map((m,i)=>(
                <div key={i} className={`bg-surface-container-lowest border border-outline-variant p-md flex items-center gap-lg hover:bg-surface-container-low transition-colors ${m.locked?'opacity-50':''}`}>
                  <div className="h-12 w-12 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0"><span className="material-symbols-outlined">{m.icon}</span></div>
                  <div className="flex-1">{m.locked?<><h5 className="font-body-lg font-bold text-on-surface-variant">{m.title}</h5><p className="font-label-md text-label-md text-on-surface-variant">Unlocks after Module 5</p></>:<><div className="flex justify-between items-center mb-1"><h5 className="font-body-lg font-bold">{m.title}</h5><span className="font-label-md text-label-md text-secondary">{m.pct} Complete</span></div><div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden"><div className="h-full bg-secondary" style={{width:m.pct}}></div></div></>}</div>
                  <button className={`material-symbols-outlined p-2 ${m.done?'text-secondary':m.locked?'text-on-surface-variant':'text-on-surface-variant hover:text-primary'}`} style={m.done?{fontVariationSettings:"'FILL' 1"}:{}}>{m.done?'check_circle':'play_circle'}</button>
                </div>
              ))}
            </div>
          </section>
          <section className="col-span-12 lg:col-span-4">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl h-full flex flex-col">
              <div className="p-lg border-b border-outline-variant"><h3 className="font-title-md text-title-md text-primary">Resource Library</h3><p className="font-body-md text-on-surface-variant mt-xs">Official templates and guidelines.</p></div>
              <div className="flex-1 p-lg space-y-md">
                {[{icon:'picture_as_pdf',ic:'text-error',name:'Compliance_Checklist_V4.pdf',size:'1.2 MB'},{icon:'table_chart',ic:'text-secondary',name:'Budget_Allocation_Template.xlsx',size:'450 KB'},{icon:'description',ic:'text-primary',name:'Grant_Reporting_Standard.docx',size:'890 KB'},{icon:'video_library',ic:'text-primary-fixed-dim',name:'Audit_Defense_Strategy.mp4',size:'124 MB',action:'visibility'}].map((r,i)=>(
                  <div key={i} className="flex items-start gap-md group cursor-pointer"><span className={`material-symbols-outlined ${r.ic} mt-1`}>{r.icon}</span><div className="flex-1 border-b border-outline-variant pb-md"><h6 className="font-body-md font-bold group-hover:text-primary transition-colors">{r.name}</h6><p className="font-caption text-caption text-on-surface-variant">{r.size}</p></div><span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">{r.action||'download'}</span></div>
                ))}
              </div>
              <div className="p-lg bg-surface-container-low rounded-b-xl border-t border-outline-variant"><button className="w-full py-sm border border-outline text-primary font-bold rounded hover:bg-surface-container transition-colors text-body-md">Browse All Resources</button></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
