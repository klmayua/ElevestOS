"use client";

import React from 'react';
import Link from 'next/link';

const candidates = [
  { name: 'Marcus Wright', loc: 'London, UK', expertise: 'SUPPLY CHAIN', tier: 'Tier 1', exp: 'Managed $45M logistics budget for UNICEF across 12 countries. Specialized in cold-chain integrity for vaccine distribution.', img: 'A3PLEoUF8FTqah6J2iFgMBmlSIZjnwBEsPaGZ1u1UXpDxffxREbflM-btNaEKDz-TS9cESe9bzp_FfyqEncyKwZVlw8vmN-3OXBXr5vylSyVpodvn_Q8vuk1HvuzbrrjvXsjDi0RmUKL8zSqwBSdokxi_rR2rA5_Gbl9Zge_hGba3QzL9VI8zL4HT5CficSbL_hp3aDPMAfzawyp-VQw6u6N_r__wmlqAN3zsCr1sP7qqVltMr6pjnBaKkaRCKKBMU8OQOIBC9cAxf' },
  { name: 'Sarah Chen', loc: 'Singapore', expertise: 'EPIDEMIOLOGY', tier: 'Tier 1', exp: 'Lead data scientist for Red Cross health initiatives. PhD in Public Health from Johns Hopkins. Expert in predictive modeling.', img: 'C2pEeqGpjDc6YV7e3pYLjeBu_fBKIPjCp6v_pjjLcBLqFvZ5L4ZrnaGmARhJemoO_zJDl4RAATn_hW0uXBaM6cMrnWP5K6xOjQfzizqsVig9g_HoVa9jccoDhPjon7TnZMM8BReTkSHv1ownJEkdmi2g_oHsMM20FAUbuQvjIGo7d0Eqk9qgrSnNW8hduIgnBzIcnQ66xgovB6i1iWoqnwg5itXMdBwfCv1dx6E3Qr2DOpIXdKmm-AA9Pevo24wfkwqPt-NzGTtSBJ' },
  { name: 'Jean Pierre', loc: 'Nairobi, Kenya', expertise: 'INFRASTRUCTURE', tier: 'Tier 2', exp: 'Civil engineer with 15 years in post-disaster reconstruction. Specialized in sustainable water filtration and bridge modularity.', img: 'BvUr5EolQqr715Pawo9DK_Q7x7JF5pTcHVN0zBSJn2tNd0dFeVU-dg-w3_Um07_VQH79KR1VYZtFhNFhnfpr-SYN_EQPKJL4fAueviNY1FFA79iHW2ymFNucR6oVIbaHLbFmdh_OsGOrR5N6LtMgVnTP4Aw5yep2nM6ElmKwLflYjf_PI4WyxRSBYHtn-6mjMrvZ8PsVAmv372nHezlOBrqs0FjHCdf0NJve4fweLp_zoJXhMJP8EDDieuXFAMefEQId0AsotHjbLl' },
];

export default function TalentHiring() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-md z-50">
        <div className="px-md mb-xl"><h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1><p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Infrastructure Grade</p></div>
        <nav className="flex-1 px-sm space-y-1">
          <Link href="/dashboard" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">dashboard</span><span className="font-body-md text-body-md">Dashboard</span></Link>
          <Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm rounded transition-colors text-primary font-bold border-r-4 border-primary bg-surface-container"><span className="material-symbols-outlined">payments</span><span className="font-body-md text-body-md">Grants</span></Link>
          <Link href="/dashboard/projects" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">account_tree</span><span className="font-body-md text-body-md">Projects</span></Link>
          <Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">assessment</span><span className="font-body-md text-body-md">Reports</span></Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">inventory_2</span><span className="font-body-md text-body-md">Vault</span></Link>
          <Link href="/platform/labs" className="flex items-center gap-md px-md py-sm rounded transition-colors text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">science</span><span className="font-body-md text-body-md">Labs</span></Link>
        </nav>
        <div className="mt-auto px-sm border-t border-outline-variant pt-md">
          <button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary py-md rounded font-title-md text-title-md hover:opacity-90 transition-all mb-md"><span className="material-symbols-outlined">add</span><span>New Initiative</span></button>
          <Link href="#" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">help</span><span className="font-body-md text-body-md">Support</span></Link>
          <Link href="/settings" className="flex items-center gap-md px-md py-sm rounded text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">settings</span><span className="font-body-md text-body-md">Settings</span></Link>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop z-40">
        <div className="flex items-center gap-lg flex-1"><div className="relative w-full max-w-md"><span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span><input className="w-full pl-xl pr-md py-xs bg-surface-container-low border border-outline-variant rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md" placeholder="Search verified talent, expertise, or NGO history..." type="text"/></div></div>
        <div className="flex items-center gap-xl">
          <button className="bg-secondary text-on-secondary px-lg py-xs rounded font-label-md text-label-md hover:scale-95 transition-transform">Compliance Check</button>
          <div className="flex items-center gap-md text-on-surface-variant">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">notifications</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">history</span>
            <div className="flex items-center gap-sm cursor-pointer hover:text-primary transition-colors"><img alt="Admin" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7DtUn0b7bhrMdSGjhtDY4hI29KMnTmh9XUI3aTIFZcCR2mFVkHGnN_J7DfXLSizcJI-hXPMVgfFVaDA-GT7iLZ3E5XqnfmdB5rrTeFc9ay_sX9-scwy-kIdyX5E3KJ15ixXXUrOKApFlMTFxPtDCdgxDy7_euzojkjQa1yKWLSvIt2whAFduLizD_IW4f0Oy8NhEhznhAZzkeTIUTQCftoxJsbdenSAQdBWOb1AcpfVBUJC_wYES1R5DISdmcbScrK6NeOQzRAnwh"/></div>
          </div>
        </div>
      </header>
      <main className="pt-16 ml-64 min-h-screen">
        <div className="p-margin-desktop">
          <div className="flex justify-between items-end mb-2xl">
            <div>
              <nav className="flex items-center gap-xs text-on-surface-variant font-label-md text-label-md mb-xs"><span>Marketplace</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><span className="text-primary font-bold">Sector Talent</span></nav>
              <h2 className="font-headline-lg text-headline-lg text-primary">Global Talent Pool</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl">Verified professionals specialized in large-scale humanitarian logistics, public health, and infrastructure development.</p>
            </div>
            <div className="flex gap-sm">
              <button className="flex items-center gap-sm border border-outline px-lg py-sm rounded font-label-md text-label-md hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">filter_list</span><span>Advanced Filters</span></button>
              <button className="bg-primary text-on-primary px-lg py-sm rounded font-label-md text-label-md hover:opacity-90 transition-all">Export Report</button>
            </div>
          </div>
          <section className="mb-3xl">
            <div className="flex items-center gap-sm mb-lg"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span><h3 className="font-title-md text-title-md text-primary">Priority Pool: Rapid Response Unit</h3></div>
            <div className="grid grid-cols-12 gap-gutter">
              <div className="col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex gap-xl items-start relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-secondary text-on-secondary px-lg py-xs font-label-md text-label-md rounded-bl-lg">ACTIVE STATUS: DEPLOYABLE</div>
                <img className="w-32 h-32 rounded-lg object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1TuvxaiYa8XIlt4F5lhg9lW93EIcUk5ZHMOi3572whq43KWV8y-GHUSNUnt52S2195gxR3JH_TrDIm233zEzgjcIdVzrZlxajqIpLvn4g8wYMyPtLlfCMDZ9uIwavWNy6k1Dilf94Ji5z2mYQ2VT5ORAv9eG7XTxjvjVN_ERXjo88nIWjDDGm13qX5y8x_854lxjgwe0LJrazbcz8ZeGIYuNH1w-5wnBdnXTwY-bZBd7y90zohoU_bC9imx98iFrsWLpCXpb0vw3m"/>
                <div className="flex-1">
                  <h4 className="font-headline-md text-headline-md text-primary mb-xs">Dr. Elena Laurent</h4>
                  <p className="font-label-md text-label-md text-secondary mb-md">Senior Epidemiology Consultant</p>
                  <p className="text-on-surface-variant font-body-md text-body-md mb-lg leading-relaxed">Former WHO lead for regional infectious disease surveillance. Extensive experience in sub-Saharan public health infrastructure and emergency medical supply chains during global crises.</p>
                  <div className="flex flex-wrap gap-xs mb-xl"><span className="bg-surface-container-high text-on-surface-variant px-sm py-xs rounded text-label-md font-label-md">Epidemiology</span><span className="bg-surface-container-high text-on-surface-variant px-sm py-xs rounded text-label-md font-label-md">Field Operations</span><span className="bg-surface-container-high text-on-surface-variant px-sm py-xs rounded text-label-md font-label-md">Public Health</span><span className="bg-surface-container-high text-on-surface-variant px-sm py-xs rounded text-label-md font-label-md">Policy</span></div>
                  <div className="flex gap-md"><button className="bg-primary text-on-primary px-xl py-sm rounded font-title-md text-title-md hover:opacity-90">View Profile</button><button className="border border-outline px-xl py-sm rounded font-title-md text-title-md hover:bg-surface-container-low">Download CV</button></div>
                </div>
              </div>
              <div className="col-span-4 grid grid-rows-2 gap-gutter">
                <div className="bg-primary text-on-primary rounded-xl p-lg flex flex-col justify-between"><span className="material-symbols-outlined text-secondary-fixed">verified</span><div><div className="font-display-lg text-display-lg">1,240</div><div className="font-label-md text-label-md text-on-primary-container">VERIFIED FIELD EXPERTS</div></div></div>
                <div className="bg-secondary-container text-on-secondary-container rounded-xl p-lg flex flex-col justify-between border border-outline-variant"><span className="material-symbols-outlined">speed</span><div><div className="font-display-lg text-display-lg">48h</div><div className="font-label-md text-label-md text-on-secondary-fixed-variant">AVG. DEPLOYMENT TIME</div></div></div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between mb-lg"><h3 className="font-title-md text-title-md text-primary">All Candidates (85)</h3><div className="flex gap-md"><button className="text-on-surface-variant font-label-md text-label-md border-b-2 border-primary text-primary pb-1">All Experience</button><button className="text-on-surface-variant font-label-md text-label-md pb-1 hover:text-primary">Supply Chain</button><button className="text-on-surface-variant font-label-md text-label-md pb-1 hover:text-primary">Finance</button><button className="text-on-surface-variant font-label-md text-label-md pb-1 hover:text-primary">Medical</button></div></div>
            <div className="space-y-sm">
              <div className="grid grid-cols-12 px-lg py-sm bg-surface-container-high text-on-surface-variant font-label-md text-label-md uppercase tracking-wider"><div className="col-span-3">Candidate</div><div className="col-span-2">Core Expertise</div><div className="col-span-4">Key Experience Snippet</div><div className="col-span-2 text-center">Verification</div><div className="col-span-1 text-right">Action</div></div>
              {candidates.map((c, i) => (
                <div key={i} className="grid grid-cols-12 px-lg py-md bg-surface-container-lowest border border-outline-variant items-center hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <div className="col-span-3 flex items-center gap-md">
                    <img className="w-10 h-10 rounded-full border border-outline-variant" src={`https://lh3.googleusercontent.com/aida-public/AB6AXu${c.img}`}/>
                    <div><div className="font-title-md text-title-md text-primary">{c.name}</div><div className="font-label-md text-label-md text-on-surface-variant">{c.loc}</div></div>
                  </div>
                  <div className="col-span-2"><div className="flex flex-wrap gap-xs"><span className="bg-secondary-container text-on-secondary-fixed-variant px-xs py-0.5 rounded text-[10px] font-bold">{c.expertise}</span></div></div>
                  <div className="col-span-4 text-on-surface-variant font-body-md text-body-md line-clamp-2">{c.exp}</div>
                  <div className="col-span-2 flex justify-center"><div className="flex items-center gap-xs px-sm py-1 bg-surface-container border border-outline-variant rounded text-on-surface-variant font-label-md text-label-md"><span className="material-symbols-outlined text-[16px] text-secondary">verified</span><span>{c.tier}</span></div></div>
                  <div className="col-span-1 text-right"><button className="text-primary font-label-md text-label-md font-bold group-hover:underline">View</button></div>
                </div>
              ))}
            </div>
            <div className="mt-xl flex items-center justify-between"><div className="text-on-surface-variant font-label-md text-label-md">Showing 1 to 10 of 85 candidates</div><div className="flex gap-xs">
              <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
              <button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded font-label-md text-label-md">1</button>
              <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded font-label-md text-label-md hover:bg-surface-container transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded font-label-md text-label-md hover:bg-surface-container transition-colors">3</button>
              <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
            </div></div>
          </section>
        </div>
      </main>
    </div>
  );
}
