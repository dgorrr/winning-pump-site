'use client';

import React, { useState, WheelEvent, MouseEvent } from 'react';
import Link from 'next/link';
import { company, companyPatentPortfolio, companyTimeline } from "@/data/company";

export default function AboutPage() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeZoomImg, setActiveZoomImg] = useState('');
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const stats = [
    { label: 'Manufacturing Experience', value: company.facts.manufacturingExperience },
    { label: 'Invention Patents', value: company.facts.inventionPatents },
    { label: 'Technical Team', value: company.facts.technicalTeam },
    { label: 'Employees', value: company.facts.employees },
    { label: 'Countries & Regions', value: company.facts.markets },
  ];

  const patentMatrix = companyPatentPortfolio;
  const timeline = companyTimeline;

  const openZoom = (imgUrl: string) => {
    setActiveZoomImg(imgUrl);
    setIsZoomed(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setScale((prev) => Math.min(Math.max(0.5, prev + delta), 5));
  };

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const closeLightbox = () => {
    setIsZoomed(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
    setActiveZoomImg('');
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans antialiased">

      {/* ==================== HERO ==================== */}
      <section className="bg-[#0B1016] text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 lg:py-36">
         <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            
            <div>
              <div className="text-orange-400 text-xs font-bold tracking-[0.35em] uppercase mb-5">
                Flagship Engineering Platform
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-[72px] font-black tracking-[-0.045em] leading-[0.95] mb-8 max-w-[620px]">
  The Origin of

Stainless Steel

Pump Technology
</h1>

             <p className="text-slate-300 text-xl leading-relaxed mb-12 max-w-xl">
                Since {company.facts.pumpTechnologySince}, Winning Pumps has continuously developed precision stainless steel pump technologies, building a foundation of engineering innovation recognized through international patents.
              </p>

              <div className="space-y-5">
                <div className="border-l-2 border-orange-400 pl-5">
                  <div className="font-bold text-lg">{company.facts.pumpTechnologySince} Stamped Pump Technology</div>
                  <p className="text-sm text-slate-400 mt-1">
                    Stamped centrifugal pump technology established the foundation of Winning Pumps innovation.
                  </p>
                </div>

                <div className="border-l-2 border-slate-600 pl-5">
                  <div className="font-bold text-lg">Global Patent Recognition</div>
                  <p className="text-sm text-slate-400 mt-1">
                    Protected technologies across the United States, Europe, Canada and Australia.
                  </p>
                </div>

                <div className="border-l-2 border-slate-600 pl-5">
                  <div className="font-bold text-lg">31 Years of Manufacturing Expertise</div>
                  <p className="text-sm text-slate-400 mt-1">
                    Three decades of stainless steel pump manufacturing expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="relative w-full max-w-lg flex flex-col items-center">
                <img
                  src="/images/products/gza-s.webp"
                  alt="GZA(S) Stainless Steel Pump"
                  className="w-full object-contain drop-shadow-2xl scale-[1.35]"
                />
                <div className="mt-6 text-center text-xs tracking-[0.3em] text-slate-500 uppercase">
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                <div className="mt-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ==================== PATENTS ==================== */}
<section className="bg-slate-50">
  <div className="max-w-7xl mx-auto px-8 lg:px-12 py-28">
          <div className="mb-16 max-w-3xl">
            <div className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">
              Intellectual Property
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              International Patent Portfolio
            </h2>
          </div>

          <div className="space-y-5">
            {patentMatrix.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-slate-200 rounded-xl p-8 lg:p-10 flex flex-col md:flex-row gap-10 items-center shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              >
                {/* Left accent */}
                <div className="hidden md:block w-1 self-stretch rounded-full bg-gradient-to-b from-orange-400 to-orange-600 opacity-80" />

                <div
                  className="w-32 flex-shrink-0 cursor-zoom-in"
                  onClick={() => openZoom(item.img)}
                >
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 shadow-inner group-hover:shadow transition-shadow">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                    {item.sub}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <div className="text-xs font-mono text-slate-400">{item.patentNo}</div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE ==================== */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-28">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-bold tracking-[0.3em] text-orange-600 uppercase mb-4">
              Industrial Evolution
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              Three Decades of<br />Engineering Innovation
            </h2>
            <p className="mt-5 text-slate-500 text-base leading-relaxed">
              From our 1994 foundation to international patent recognition, Winning Pumps has continuously developed precision stainless steel pump technologies for global applications.
            </p>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[6px] top-3 bottom-3 w-px bg-slate-300" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-8 items-start">
                  {/* dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-orange-500 ring-4 ring-orange-100" />
                  </div>

                  <div className="flex-1 pb-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1.5">
                      <span className="text-2xl font-black text-slate-900 tracking-tight">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-slate-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed max-w-2xl text-[15px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-[#0B1016] text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
            Engineering Partnership
Built on Three Decades of Expertise
          </h3>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            Contact our team for technical support, product datasheets, and factory-direct quotations.
          </p>
          <Link
            href="/products?action=rfq#rfq"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-lg shadow-orange-500/20"
          >
            Initiate Project RFQ
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {isZoomed && activeZoomImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-light"
          >
            ×
          </button>

          <img
            src={activeZoomImg}
            alt="Zoomed Patent"
            onMouseDown={handleMouseDown}
            className="max-w-[90vw] max-h-[85vh] object-contain select-none"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'transform 0.1s ease',
            }}
            draggable={false}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Scroll to zoom · Drag to move · Click outside to close
          </div>
        </div>
      )}
    </div>
  );
}
