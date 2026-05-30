"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function FieldOperationsLedger() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="bg-surface font-body-md text-body-md overflow-hidden min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant flex flex-col h-full py-md z-50">
        <div className="px-md mb-xl"><h1 className="font-headline-md text-headline-md font-bold text-primary">ElevestOS</h1><p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Infrastructure Grade</p></div>
        <nav className="flex-1 space-y-1 px-sm">
          <Link href="/dashboard" className="flex items-center gap-md px-md py-sm rounded-lg transition-colors hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">dashboard</span><span className="font-body-md">Dashboard</span></Link>
          <Link href="/for-ngos/grants" className="flex items-center gap-md px-md py-sm rounded-lg transition-colors hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">payments</span><span className="font-body-md">Grants</span></Link>
          <Link href="/dashboard/projects" className="flex items-center gap-md px-md py-sm rounded-lg text-primary font-bold border-r-4 border-primary bg-surface-container"><span className="material-symbols-outlined">account_tree</span><span className="font-body-md">Projects</span></Link>
          <Link href="/dashboard/reports" className="flex items-center gap-md px-md py-sm rounded-lg transition-colors hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">assessment</span><span className="font-body-md">Reports</span></Link>
          <Link href="/dashboard/compliance" className="flex items-center gap-md px-md py-sm rounded-lg transition-colors hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">inventory_2</span><span className="font-body-md">Vault</span></Link>
          <Link href="/platform/labs" className="flex items-center gap-md px-md py-sm rounded-lg transition-colors hover:bg-surface-container-high text-on-surface-variant"><span className="material-symbols-outlined">science</span><span className="font-body-md">Labs</span></Link>
        </nav>
        <div className="mt-auto px-sm pt-md border-t border-outline-variant">
          <button className="w-full bg-primary text-white py-sm rounded flex items-center justify-center gap-sm mb-md font-bold active:scale-95 transition-transform"><span className="material-symbols-outlined text-sm">add</span><span>New Initiative</span></button>
          <Link href="#" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">help</span><span>Support</span></Link>
          <Link href="/settings" className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"><span className="material-symbols-outlined">settings</span><span>Settings</span></Link>
        </div>
      </aside>
      <main className="ml-64 min-h-screen flex flex-col">
        <header className="h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop sticky top-0 z-40">
          <div className="flex items-center gap-xl w-1/3"><div className="relative w-full max-w-sm"><span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span><input className="w-full bg-surface-container-low border-none rounded py-base pl-10 pr-md font-body-md focus:ring-2 focus:ring-primary" placeholder="Search operational data..." type="text"/></div></div>
          <div className="flex items-center gap-lg">
            <button className="px-md py-base border border-primary text-primary font-label-md rounded hover:bg-primary hover:text-white transition-colors uppercase">Compliance Check</button>
            <div className="flex items-center gap-md text-on-surface-variant">
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
              <button className="hover:text-primary transition-colors"><span className="material-symbols-outlined">history</span></button>
              <div className="flex items-center gap-sm ml-sm">
                <img alt="Administrator" className="w-8 h-8 rounded-full border border-outline-variant object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh9Z7EsHTij93h0FfbjlrMGzcuktEj5LV4XKLR3bmNiAMQMyiWjEQf4RDOiYXx85xLTMcbhEkVkFDHCI2WGNh3ZJXMPJ3Woh_Vw9HV7fojVByAsiN4JsJsoPCwILR8I_zWUU2xVAgXmLtG6HDohYXPm83nf9y3eYKIbOfh8dkRILul6QrZA1toT9NdQL_Ydoqz54pxU_4ey0miTN55SuhQAXsY4_ShKH55EJmMWTcniEkV_CmBCBexVxEFdFj2lK6qM5jTfQNrkASl"/>
                <span className="font-label-md">HQ Admin</span>
              </div>
            </div>
          </div>
        </header>
        <div className="p-margin-desktop space-y-lg overflow-y-auto max-h-[calc(100vh-64px)]">
          <section className="flex justify-between items-end pb-md border-b border-outline-variant">
            <div>
              <nav className="flex items-center gap-xs text-on-surface-variant mb-xs"><span className="font-label-md">PROJECTS</span><span className="material-symbols-outlined text-sm">chevron_right</span><span className="font-label-md">FIELD OPERATIONS</span></nav>
              <h2 className="font-headline-lg text-headline-lg text-primary">Data Log: Real-time Entry</h2>
            </div>
            <div className="flex gap-xl text-right">
              <div className="space-y-1"><p className="font-label-md text-on-surface-variant">CURRENT PROJECT</p><p className="font-title-md text-title-md text-primary">Northeast Water Infrastructure Phase II</p></div>
              <div className="space-y-1 border-l border-outline-variant pl-xl"><p className="font-label-md text-on-surface-variant">LOCATION</p><p className="font-title-md text-title-md text-primary flex items-center gap-xs"><span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>Garissa County, Kenya</p></div>
            </div>
          </section>
          <section className="grid grid-cols-[450px_1fr] gap-gutter">
            <div className="space-y-lg">
              <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded shadow-sm">
                <div className="flex items-center gap-sm mb-lg"><span className="material-symbols-outlined text-primary">edit_note</span><h3 className="font-title-md text-title-md uppercase tracking-tight">Log New Activity</h3></div>
                <form className="space-y-md" onSubmit={handleSubmit}>
                  <div className="space-y-xs"><label className="font-label-md text-on-surface-variant">ACTIVITY TYPE</label><select className="w-full border border-outline-variant rounded p-sm bg-white font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"><option>Infrastructure Inspection</option><option>Beneficiary Distribution</option><option>Stakeholder Consultation</option><option>Technical Maintenance</option></select></div>
                  <div className="space-y-xs"><label className="font-label-md text-on-surface-variant">BENEFICIARIES REACHED</label><div className="relative"><input className="w-full border border-outline-variant rounded p-sm bg-white font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="0" type="number"/><span className="absolute right-sm top-1/2 -translate-y-1/2 text-outline font-label-md">PERSONS</span></div></div>
                  <div className="space-y-xs"><label className="font-label-md text-on-surface-variant">FIELD NOTES</label><textarea className="w-full border border-outline-variant rounded p-sm bg-white font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Describe the current status and any immediate blockers..." rows={4}></textarea></div>
                  <div className="grid grid-cols-2 gap-md">
                    <div className="border-2 border-dashed border-outline-variant rounded p-md flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:bg-surface-container transition-all cursor-pointer"><span className="material-symbols-outlined text-xl mb-xs">photo_camera</span><span className="font-label-md">UPLOAD PHOTO</span></div>
                    <div className="border-2 border-dashed border-outline-variant rounded p-md flex flex-col items-center justify-center text-on-surface-variant hover:border-primary hover:bg-surface-container transition-all cursor-pointer"><span className="material-symbols-outlined text-xl mb-xs">my_location</span><span className="font-label-md">FETCH GPS</span></div>
                  </div>
                  <button className={`w-full py-md font-bold rounded flex items-center justify-center gap-md transition-all ${submitted ? 'bg-secondary text-white' : 'bg-primary text-white hover:opacity-90'}`} type="submit">
                    {submitted ? <><span className="material-symbols-outlined">check_circle</span>DATA COMMITTED</> : <><span className="material-symbols-outlined">cloud_upload</span>SYNC TO CENTRAL COMMAND</>}
                  </button>
                </form>
              </div>
              <div className="bg-primary-container p-lg rounded border border-primary text-on-primary-container">
                <div className="flex items-start gap-md"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>info</span><div className="space-y-sm"><h4 className="font-title-md">Sync Status</h4><p className="text-on-primary-container opacity-80 font-body-md">You are currently connected to the primary data node. Logs will be processed and visible to HQ in under 3 seconds.</p><div className="flex items-center gap-sm pt-sm"><div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></div><span className="font-label-md uppercase tracking-widest">Live: encrypted channel</span></div></div></div>
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded shadow-sm flex flex-col overflow-hidden">
              <div className="p-lg border-b border-outline-variant flex justify-between items-center bg-white sticky top-0 z-10">
                <div className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary">analytics</span><h3 className="font-title-md text-title-md uppercase tracking-tight">Recent Synchronized Logs</h3></div>
                <div className="flex gap-md"><span className="px-md py-1 bg-surface-container rounded-full font-label-md text-on-surface-variant">Last 24 Hours</span><button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">filter_list</button></div>
              </div>
              <div className="flex-1 overflow-y-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-surface-container-low border-b border-outline-variant"><tr><th className="p-md font-label-md uppercase tracking-wider text-on-surface-variant">Timestamp</th><th className="p-md font-label-md uppercase tracking-wider text-on-surface-variant">Unit / Agent</th><th className="p-md font-label-md uppercase tracking-wider text-on-surface-variant">Activity</th><th className="p-md font-label-md uppercase tracking-wider text-on-surface-variant">Impact</th><th className="p-md font-label-md uppercase tracking-wider text-on-surface-variant">Status</th></tr></thead>
                  <tbody className="divide-y divide-outline-variant">
                    {[
                      { ts: '14:22:15', tz: 'UTC +3', unit: 'Field-Alpha-7', agent: 'A. Abdi (Lead Engineer)', activity: 'Wellbore Integrity Test', detail: 'Pressure check successful. All valves operating within standard institutional safety thresholds.', impact: 'N/A', status: 'Verified', img: false },
                      { ts: '13:05:44', tz: 'UTC +3', unit: 'Logistics-Bravo', agent: 'E. Mwamidi', activity: 'Beneficiary Distribution', detail: '', impact: '245 REACHED', status: 'Pending HQ', img: true },
                      { ts: '11:40:02', tz: 'UTC +3', unit: 'Field-Alpha-7', agent: 'A. Abdi (Lead Engineer)', activity: 'Supply Chain Update', detail: 'Receipt of 500m PVC piping confirmed. Inventory updated in local vault.', impact: 'N/A', status: 'Verified', img: false },
                      { ts: '09:12:18', tz: 'UTC +3', unit: 'Monitor-3', agent: 'S. Patel', activity: 'Stakeholder Meeting', detail: 'Meeting with County Commissioner regarding land access rights. Minutes attached to Secure Vault.', impact: 'REGULATORY', status: 'Verified', img: false },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                        <td className="p-md align-top"><div className="font-label-md text-primary">{row.ts}</div><div className="text-on-surface-variant text-xs">{row.tz}</div></td>
                        <td className="p-md align-top"><div className="font-body-md font-bold">{row.unit}</div><div className="text-on-surface-variant text-xs">{row.agent}</div></td>
                        <td className="p-md align-top max-w-xs"><div className="font-body-md text-primary">{row.activity}</div>{row.img ? <div className="flex gap-2 mt-2"><img className="w-12 h-12 rounded border border-outline-variant object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpJM1kfpGNl2zPRP09Ab39X16Xe5wKXVmzoSLK_e8XlhERylYLVFzRrzv0OMoeJbZ4QsdK_JrRa4AeEYWI0NG8Ml0NI855hOCOQ_auo3ZAJFU7ofY9TAPYg1ovF65ifn3TeDlS-UQWaUY_lrXHtJj9tr4tQVCr-Pn5q6t6Rs_wmVBqJrw7JHA4IetQKxWeGHWfJOO4i0cjRhhOYr8XgdwHhTHzrpy4u7VqJl6QKeeTcQ1DYHBqr66lgR0VXU6e6hcWCVPXBjgkbCWM"/><div className="text-xs text-on-surface-variant italic py-1">Photo synced with GPS meta...</div></div> : <p className="text-on-surface-variant text-xs mt-1">{row.detail}</p>}</td>
                        <td className="p-md align-top"><div className="font-label-md text-secondary font-bold">{row.impact}</div></td>
                        <td className="p-md align-top"><span className={`inline-block px-md py-1 rounded font-label-md uppercase tracking-tight ${row.status === 'Verified' ? 'bg-secondary-container text-on-secondary-container' : 'bg-tertiary-fixed text-on-tertiary-fixed'}`}>{row.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-md border-t border-outline-variant bg-surface-container-low flex justify-center"><button className="font-label-md text-primary hover:underline flex items-center gap-xs">LOAD ARCHIVED LOGS<span className="material-symbols-outlined">keyboard_arrow_down</span></button></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
