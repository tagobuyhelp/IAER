import React from 'react';
import Link from 'next/link';
import { ArrowRight, LayoutTemplate, Layers, LayoutGrid } from 'lucide-react';

export default function AllLandingPages() {
  const landingPages = [
    {
      title: 'BCA Landing Page',
      path: '/best-bca-college-in-kolkata',
      description: 'High-conversion landing page for BCA, AI & ML, and Cyber Security & Data Science.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'BBA Landing Page',
      path: '/best-bba-college-in-kolkata',
      description: 'High-conversion landing page for BBA General and all specialized tracks.',
      color: 'from-indigo-500 to-purple-500',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4">
            <LayoutGrid className="w-8 h-8 text-[#143674]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#143674] tracking-tight mb-3">
            Landing Page Directory
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Quickly navigate and preview all active, high-conversion landing pages currently deployed on the frontend.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {landingPages.map((page, idx) => (
            <Link 
              key={idx} 
              href={page.path}
              target="_blank"
              className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${page.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${page.color} bg-opacity-10 text-white shadow-inner`}>
                  <LayoutTemplate className="w-6 h-6" />
                </div>
                <div className="bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full group-hover:bg-[#143674] group-hover:text-white transition-colors">
                  View Page
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#143674] transition-colors">
                {page.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {page.description}
              </p>

              <div className="flex items-center text-[#143674] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                Open in new tab <ArrowRight className="w-4 h-4 ml-1.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
