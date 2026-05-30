"use client";

import React from 'react';
import Link from 'next/link';

export default function FunderNewGrantCall() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      <nav className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full py-md z-50">
        <div className="px-md mb-xl"><h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1><p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest opacity-70">Infrastructure Grade</p></div>
        <div className="flex-1 space-y-1">
          <Link href="/dashboard" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">dashboard</span><span>Dashboard</span></Link>
          <Link href="/for-ngos/grants" className="flex items-center px-md py-sm text-primary font-bold border-r-4 border-primary bg-surface-container font-body-md text-body-md"><span className="material-symbols-outlined mr-md">payments</span><span>Grants</span></Link>
          <Link href="/dashboard/projects" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">account_tree</span><span>Projects</span></Link>
          <Link href="/dashboard/reports" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">assessment</span><span>Reports</span></Link>
          <Link href="/dashboard/compliance" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">inventory_2</span><span>Vault</span></Link>
          <Link href="/platform/labs" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">science</span><span>Labs</span></Link>
        </div>
        <button className="mx-md mb-xl py-sm px-md bg-primary text-on-primary font-title-md text-title-md hover:opacity-90 transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined">add</span>New Initiative</button>
        <div className="mt-auto pt-md border-t border-outline-variant space-y-1">
          <Link href="#" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">help</span><span>Support</span></Link>
          <Link href="/settings" className="flex items-center px-md py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-body-md group"><span className="material-symbols-outlined mr-md group-hover:text-primary">settings</span><span>Settings</span></Link>
        </div>
      </nav>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center gap-md bg-surface-container-low px-md py-xs border border-outline-variant w-96"><span className="material-symbols-outlined text-on-surface-variant">search</span><input className="bg-transparent border-none focus:ring-0 font-body-md w-full text-on-surface" placeholder="Search funding vehicles..." type="text"/></div>
        <div className="flex items-center gap-xl">
          <button className="font-label-md text-label-md text-primary font-bold border border-primary px-md py-1.5 hover:bg-primary-fixed transition-colors">Compliance Check</button>
          <div className="flex items-center gap-md">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-transform active:scale-95">notifications</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-transform active:scale-95">history</button>
            <div className="w-8 h-8 overflow-hidden rounded-full border border-outline-variant"><img alt="Administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcmLuUc0F5Z8GKURFqjjE_l51NnJwWgDZEVtsCFwmWD2sy2e_YQitloFJdu56XJ9qZ9DdMdvQ7JnhyQmTmrtKzVN02_es5E7UIYBm-3GlPM6jgRdzE84aEkTHWxePgVAaXlIMttfoMrxDO-GbDjtFU8HrVrofOOUkrlnMIRKe1BjsKl-JZNodEdI4V39FGsuUUj4ZfiK968SnSq3b930a5NHY01PY8LanU2oY0H6UEkdZn1hrd15IJLVXoTLcWjwsRxlPanOQh6pQb"/></div>
          </div>
        </div>
      </header>
      <main className="ml-64 mt-16 p-margin-desktop min-h-screen">
        <div className="max-w-[1440px] mx-auto">
          <header className="mb-xl flex justify-between items-end">
            <div>
              <nav className="flex items-center gap-sm mb-base text-on-surface-variant font-label-md text-label-md"><span>Grants</span><span className="material-symbols-outlined text-[12px]">chevron_right</span><span className="text-primary font-bold">New Grant Call</span></nav>
              <h2 className="font-headline-lg text-headline-lg text-primary">Deploy Funding Initiative</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg">Institutional workspace for standardized call creation and eligibility mapping.</p>
            </div>
            <div className="flex gap-md">
              <button className="px-lg py-sm border border-outline font-title-md text-title-md hover:bg-surface-container-high transition-colors">Save Draft</button>
              <button className="px-lg py-sm bg-secondary text-on-secondary font-title-md text-title-md flex items-center gap-2 hover:opacity-90">Post Grant Call<span className="material-symbols-outlined">send</span></button>
            </div>
          </header>
          <div className="grid grid-cols-12 gap-gutter items-start">
            <div className="col-span-7 space-y-gutter">
              <section className="bg-surface-container-lowest border border-outline-variant p-lg">
                <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-sm"><span className="material-symbols-outlined text-primary">description</span><h3 className="font-title-md text-title-md text-primary uppercase tracking-wider">1. Call Fundamentals</h3></div>
                <div className="space-y-md">
                  <div><label className="block font-label-md text-label-md text-on-surface-variant mb-xs">GRANT TITLE</label><input className="w-full border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary py-md px-md font-body-md text-on-surface outline-none" placeholder="e.g. 2024 Climate Resilience Infrastructure Fund" type="text"/></div>
                  <div className="grid grid-cols-2 gap-md">
                    <div><label className="block font-label-md text-label-md text-on-surface-variant mb-xs">FUNDING AMOUNT (USD)</label><div className="relative"><span className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant">$</span><input className="w-full border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary py-md pl-xl pr-md font-body-md text-on-surface outline-none" placeholder="5,000,000" type="number"/></div></div>
                    <div><label className="block font-label-md text-label-md text-on-surface-variant mb-xs">DEADLINE</label><input className="w-full border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary py-md px-md font-body-md text-on-surface outline-none" type="date"/></div>
                  </div>
                  <div><label className="block font-label-md text-label-md text-on-surface-variant mb-xs">EXECUTIVE SUMMARY</label><textarea className="w-full border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary py-md px-md font-body-md text-on-surface outline-none" placeholder="Briefly describe the institutional objectives for this funding call..." rows={4}></textarea></div>
                </div>
              </section>
              <section className="bg-surface-container-lowest border border-outline-variant p-lg">
                <div className="flex items-center gap-sm mb-lg border-b border-outline-variant pb-sm"><span className="material-symbols-outlined text-primary">target</span><h3 className="font-title-md text-title-md text-primary uppercase tracking-wider">2. Targeting &amp; Eligibility</h3></div>
                <div className="space-y-md">
                  <div><label className="block font-label-md text-label-md text-on-surface-variant mb-xs">PRIMARY SECTOR</label><select className="w-full border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary py-md px-md font-body-md text-on-surface bg-white outline-none"><option>Environment &amp; Conservation</option><option>Humanitarian Aid</option><option>Economic Development</option><option>Education Infrastructure</option><option>Public Health</option></select></div>
                  <div><label className="block font-label-md text-label-md text-on-surface-variant mb-xs">TAGS &amp; KEYWORDS</label><div className="border border-outline-variant p-sm flex flex-wrap gap-xs bg-surface-container-low min-h-[48px]"><span className="bg-primary text-on-primary px-sm py-xs font-label-md text-[10px] flex items-center gap-1">CLIMATE_ADAPTATION <span className="material-symbols-outlined text-[12px] cursor-pointer">close</span></span><span className="bg-primary text-on-primary px-sm py-xs font-label-md text-[10px] flex items-center gap-1">GLOBAL_SOUTH <span className="material-symbols-outlined text-[12px] cursor-pointer">close</span></span><input className="bg-transparent border-none focus:ring-0 font-body-md text-xs py-0" placeholder="Add tag..." type="text"/></div></div>
                  <div className="p-md bg-surface border border-outline-variant"><h4 className="font-label-md text-label-md text-primary mb-sm">ELIGIBILITY CHECKLIST</h4><div className="space-y-sm"><label className="flex items-center gap-md cursor-pointer group"><input defaultChecked className="w-5 h-5 border-outline-variant text-primary focus:ring-primary" type="checkbox"/><span className="text-body-md font-body-md text-on-surface">Registered Non-Profit (501c3 or equivalent)</span></label><label className="flex items-center gap-md cursor-pointer group"><input className="w-5 h-5 border-outline-variant text-primary focus:ring-primary" type="checkbox"/><span className="text-body-md font-body-md text-on-surface">Minimum 3 years of audited financial history</span></label><label className="flex items-center gap-md cursor-pointer group"><input className="w-5 h-5 border-outline-variant text-primary focus:ring-primary" type="checkbox"/><span className="text-body-md font-body-md text-on-surface">Local presence in implementation region</span></label></div></div>
                </div>
              </section>
            </div>
            <div className="col-span-5 sticky top-24">
              <section className="bg-surface-container-highest border border-outline-variant overflow-hidden">
                <div className="bg-primary text-on-primary p-md flex justify-between items-center"><h3 className="font-label-md text-label-md uppercase">Live NGO Preview</h3><div className="flex gap-xs"><div className="w-2 h-2 rounded-full bg-on-primary opacity-20"></div><div className="w-2 h-2 rounded-full bg-on-primary opacity-20"></div><div className="w-2 h-2 rounded-full bg-on-primary"></div></div></div>
                <div className="p-lg">
                  <div className="bg-white shadow-xl border border-outline-variant aspect-[3/4] p-md relative flex flex-col">
                    <div className="absolute top-0 left-0 w-full h-32 bg-surface-container overflow-hidden"><div className="w-full h-full bg-gradient-to-br from-primary-fixed to-on-primary-fixed-variant opacity-20 flex items-center justify-center"><span className="material-symbols-outlined text-4xl text-primary">image</span></div></div>
                    <div className="mt-24 space-y-md flex-1">
                      <div className="flex justify-between items-start"><div className="h-6 w-1/4 bg-secondary-container text-on-secondary-container px-2 py-0.5 font-label-md text-[10px] flex items-center justify-center">OPEN CALL</div><span className="material-symbols-outlined text-outline-variant">bookmark</span></div>
                      <div className="space-y-xs"><div className="h-4 w-full bg-surface-container-high"></div><div className="h-4 w-3/4 bg-surface-container-high"></div></div>
                      <div className="flex gap-md border-y border-outline-variant py-md"><div className="flex-1"><p className="font-label-md text-[10px] text-on-surface-variant">FUNDING</p><div className="h-4 w-1/2 bg-surface-container-high mt-1"></div></div><div className="flex-1"><p className="font-label-md text-[10px] text-on-surface-variant">DEADLINE</p><div className="h-4 w-2/3 bg-surface-container-high mt-1"></div></div></div>
                      <div className="space-y-sm"><div className="h-2 w-full bg-surface-container-low rounded-full"><div className="h-full w-0 bg-secondary rounded-full"></div></div><div className="flex justify-between font-label-md text-[10px] text-on-surface-variant"><span>0 APPLICANTS</span><span>CAPACITY: 50</span></div></div>
                      <div className="mt-auto"><div className="w-full h-10 bg-primary opacity-20 border border-primary flex items-center justify-center font-bold text-primary">VIEW DETAILS</div></div>
                    </div>
                  </div>
                </div>
                <div className="p-md border-t border-outline-variant bg-surface-container-low"><p className="text-caption font-caption text-on-surface-variant text-center">This is a visual representation of how NGOs will view this call on the ElevestOS ecosystem.</p></div>
              </section>
              <div className="mt-gutter p-lg border border-outline-variant bg-surface-container-lowest">
                <h4 className="font-label-md text-label-md text-primary mb-md flex items-center gap-xs"><span className="material-symbols-outlined text-sm">verified_user</span>COMPLIANCE PRE-CHECK</h4>
                <div className="space-y-sm">
                  <div className="flex items-center justify-between text-body-md"><span className="text-on-surface-variant">Taxonomy Alignment</span><span className="text-secondary font-bold flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span>Valid</span></div>
                  <div className="flex items-center justify-between text-body-md"><span className="text-on-surface-variant">Fiscal Verification</span><span className="text-secondary font-bold flex items-center gap-1"><span className="material-symbols-outlined text-sm">check_circle</span>Internal</span></div>
                  <div className="flex items-center justify-between text-body-md"><span className="text-on-surface-variant">Grant ID Generation</span><span className="text-on-surface-variant italic">Pending Posting...</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
