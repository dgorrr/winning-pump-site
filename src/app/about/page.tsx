'use client';

import React, { useState, useRef, WheelEvent, MouseEvent } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeZoomImg, setActiveZoomImg] = useState('');
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const stats = [
    { label: 'Years of Experience', value: '31+' },
    { label: 'Technical Patents', value: '100+' },
    { label: 'Global Clients Served', value: '1500+' },
    { label: 'Manufacturing Equipment', value: '2500+' },
    { label: 'Countries & Regions', value: '60+' },
  ];

  const patentMatrix = [
    { id: 'us-1', title: 'UNITED STATES PATENT', sub: 'PCT REGISTRATION', patentNo: 'PCT US 6,409,474 B1', desc: 'Official United States Patent and Trademark Office certification for our high-efficiency stamped centrifugal pump design.', img: '/images/about/us-patent.png' },
    { id: 'us-2', title: 'UNITED STATES PATENT', sub: 'ENGINEERING ARCHITECTURE', patentNo: 'ZL99111134.6', desc: 'Design blueprints and deep-drawing welding execution logics filed under international technical protocols.', img: '/images/about/us-patent-2.png' },
    { id: 'eu', title: 'EUROPEAN UNION PATENT', sub: '19 CONTRACTING NATIONS', patentNo: 'PCT EU 1059455', desc: 'Cross-continent invention verification securing manufacturing standards across 19 European industrial networks.', img: '/images/about/eu-patent.png' },
    { id: 'ca', title: 'CANADIAN PATENT', sub: 'INTELLECTUAL PROPERTY', patentNo: 'CA 2,316,909', desc: 'Official Canadian invention patent authorizing our flagship stainless steel housing design.', img: '/images/about/ca-patent.png' },
    { id: 'au', title: 'AUSTRALIAN PATENT', sub: 'COMMONWEALTH COMPLIANCE', patentNo: 'AU 737740', desc: 'Commonwealth standard patent certifying the unique centrifugal pump casing manufacturing methodology.', img: '/images/about/au-patent.png' }
  ];

  const timeline = [
    { year: '1995', title: 'The Foundation in Yangjiang', desc: 'Guangdong Stainless Steel Stamped Pump Industry Co., Ltd. (predecessor of Winning Pumps) was established in Yangjiang, Guangdong, China.' },
    { year: '1996', title: 'First Landmark Invention Patent: GZA(S)', desc: 'GZA(S) series awarded the Chinese Invention Patent for "Stamped Centrifugal Pump and Its Manufacturing Method".' },
    { year: '1997', title: 'Trademark Registration', desc: 'The "Yuehua" trademark was officially registered, laying the brand foundation for international recognition.' },
    { year: '1998', title: 'Global PCT Patents', desc: 'GZA(S) series secured PCT Invention Patents in the United States, Canada, and Australia.' },
    { year: '2003', title: 'DL Series Breakthrough', desc: 'DL series awarded Chinese Invention Patent for "Stamped and Welded Vertical Multistage Centrifugal Pump".' },
    { year: '2004', title: '19 European Nations Patent', desc: 'GZA(S) series awarded unified PCT Invention Patents across 19 European countries. Recognized as High-tech Enterprise in Guangdong.' },
    { year: '2005', title: 'National Torch Program', desc: 'Recognized as a Key High-tech Enterprise under the National Torch Program of China.' },
    { year: '2009', title: 'GD & BK Series Patents', desc: 'GD series and BK series both won Chinese Invention Patents for stamped and welded pump technologies.' },
    { year: '2010', title: 'Corporate Consolidation', desc: 'Guangdong Winning Pumps Industry Co., Ltd. was officially established. GD series won US PCT Invention Patent.' },
    { year: '2014', title: 'GQS Certification', desc: 'Awarded the GQS (Global Quality Supplier Certification).' },
    { year: '2018', title: 'Hydraulic Bulging Technology', desc: 'Awarded Chinese Invention Patent for "Hydraulic Bulging Method for Centrifugal Pump Casing and Its Bulging Equipment".' }
  ];

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

      {/* Hero */}
      <section className="bg-white border-b border-slate-200 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-600 uppercase mb-6">
            About Winning Pumps
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-6">
            31 Years of Precision.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              100+ Patents.
            </span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Guangdong Winning Pumps Industry Co., Ltd. is a professional manufacturer of stainless steel stamped centrifugal pumps, serving global EPC projects and industrial infrastructure across 60+ countries.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">Intellectual Property</div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">International Patent Portfolio</h2>
        </div>

        <div className="space-y-6">
          {patentMatrix.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-md transition-shadow">
              <div 
                className="w-36 flex-shrink-0 cursor-zoom-in"
                onClick={() => openZoom(item.img)}
              >
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 shadow-sm hover:shadow transition-shadow">
                  <img src={item.img} alt={item.title} className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">{item.sub}</div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <div className="text-xs font-mono text-slate-500">{item.patentNo}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="mb-14">
            <div className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">Our Journey</div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Development History</h2>
          </div>

          <div className="relative border-l-2 border-slate-200 pl-8 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-orange-500 shadow-sm"></div>
                <div className="text-sm font-bold text-orange-600 mb-1">{item.year}</div>
                <h4 className="text-base font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
          Partner with a Verified Industry Leader
        </h3>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Contact our team for technical support, product datasheets, and factory-direct quotations.
        </p>
        <Link
          href="/products?action=rfq#rfq"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-md"
        >
          Initiate Project RFQ
        </Link>
      </section>

      {/* Lightbox */}
      {isZoomed && activeZoomImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
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
              transition: isDragging ? 'none' : 'transform 0.1s ease'
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