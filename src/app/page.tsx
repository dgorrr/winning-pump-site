'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from "next/dynamic";
import { company } from "@/data/company";

const Product360 = dynamic(
  () => import("@/components/Product360"),
  {
    ssr: false,
  }
);

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGzaModal, setShowGzaModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const stats = [
    { value: company.facts.manufacturingExperience, label: 'Manufacturing Experience' },
    { value: company.facts.inventionPatents, label: 'Invention Patents' },
    { value: company.facts.employees, label: 'Employees' },
    { value: company.facts.facilityArea, label: 'Production Facility' },
    { value: company.facts.markets, label: 'Countries & Regions' },
  ];

  const productCategories = [
    { name: "Circulating & Inline Pumps", desc: "Pipeline & Multistage Systems", href: "/products?category=Circulating%20%26%20Inline%20Pumps" },
    { name: "Boosting & Fire Pumps", desc: "High Pressure & Fire Protection", href: "/products?category=Boosting%20%26%20Fire%20Pumps" },
    { name: "End Suction / Ground Pumps", desc: "ISO / DIN Standard End Suction", href: "/products?category=End%20Suction%20%2F%20Ground%20Pumps" },
    { name: "Sewage & Drainage Pumps", desc: "Submersible & Non-Clogging", href: "/products?category=Sewage%20%26%20Drainage%20Pumps" },
  ];

  const applications = [
    { name: "Building Water Supply & Boosting", icon: "🏢" },
    { name: "Municipal Wastewater Treatment", icon: "🌊" },
    { name: "Industrial Process Wastewater", icon: "⚙️" },
    { name: "Fire Fighting System", icon: "🚒" },
    { name: "Food & Beverage Processing", icon: "🥤" },
    { name: "Water Cooling & Circulation", icon: "❄️" },
    { name: "Agricultural & Irrigation", icon: "🌾" },
    { name: "Swimming Pool & Water Features", icon: "🏊" },
  ];

  const carouselSlides = [
    { id: 1, img: "/images/hero-carousel-1.webp", tag: "PRECISION MANUFACTURING", title: `${company.facts.facilityArea} Advanced Manufacturing Base` },
    { id: 2, img: "/images/hero-carousel-2.webp", tag: "PATENTED TECHNOLOGY", title: "Precision Stamping & Welding Lines" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">

      {/* HERO SECTION */}
      <section className="relative h-[760px] lg:h-[820px] overflow-hidden bg-black">
        {carouselSlides.map((slide, index) => (
          <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover scale-110 brightness-[0.75]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center">
          <div className="pl-[50px] lg:pl-[120px] max-w-5xl">
            <div className="inline-flex rounded-full bg-orange-500/10 border border-orange-400/30 px-4 py-2 text-xs tracking-[0.2em] text-orange-300 uppercase mb-6">
              China’s Pioneer of Stamped Stainless Steel Pumps
            </div>

            <h1 className="text-white font-black tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-[76px]">
              31 Years of Precision.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">100+ Patents.</span><br />
              Pumps Built To Last.
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-slate-200 leading-relaxed">
              Professional manufacturer of stainless steel stamped centrifugal pumps. 
              Delivering reliable fluid solutions for global EPC projects, industrial infrastructure and commercial applications.
            </p>

            <div className="flex gap-5 mt-8">
              <Link href="/products" className="px-9 py-4 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-500 transition">
                Explore Products
              </Link>
              <Link href="/products?action=rfq#rfq" className="px-9 py-4 rounded-xl border border-white/40 bg-white/10 text-white font-bold hover:bg-white/20 transition">
                Request Factory Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute right-10 bottom-12 z-30 text-right">
          <p className="text-xs tracking-widest text-orange-300">{carouselSlides[currentSlide].tag}</p>
          <h3 className="text-white font-black text-2xl">{carouselSlides[currentSlide].title}</h3>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
          {carouselSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-10 bg-orange-500' : 'w-3 bg-white/50'}`} />
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                <div className="mt-1 text-[11px] font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">Product Portfolio</div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Core Product Lines</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">High-performance stainless steel pumps engineered for demanding industrial applications worldwide.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat, index) => (
            <Link key={index} href={cat.href} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{cat.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{cat.desc}</p>
              <div className="mt-6 text-xs font-semibold text-slate-400 group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                View Products <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FLAGSHIP PRODUCT - GZA(S) */}
      <section className="bg-white border-y border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左侧文字 */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">Flagship Product</div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">GZA(S) Series</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Our signature end-suction centrifugal pump, protected by multiple international invention patents across the United States, Canada, Australia, and 19 European countries. Built with advanced stainless steel stamping technology for superior efficiency and durability.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-1">Patents</div>
                  <div className="font-bold text-slate-900">US / CA / EU / AU</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-1">Material</div>
                  <div className="font-bold text-slate-900">SS304 / SS316</div>
                </div>
              </div>

              <Link href="/products?search=GZA" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors">View GZA(S) Series <span>→</span></Link>
            </div>

            {/* 右侧 360° 展示 */}
            <div className="relative flex justify-center items-center min-h-[520px]">
              <Product360 />
            </div>
          </div>

          {/* 专利图片 */}
          <div className="mt-16">
            <div className="grid grid-cols-4 gap-3">
              {[
                { name: "US", img: "/images/about/us-patent.webp" },
                { name: "CA", img: "/images/about/ca-patent.webp" },
                { name: "EU", img: "/images/about/eu-patent.webp" },
                { name: "AU", img: "/images/about/au-patent.webp" },
              ].map((item) => (
                <div key={item.name} className="text-center cursor-zoom-in" onClick={() => { setModalImage(item.img); setShowGzaModal(true); setScale(1); setPosition({ x: 0, y: 0 }); }}>
                  <div className="bg-white rounded-lg p-1.5 mb-1.5 aspect-[3/4] flex items-center justify-center overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <img src={item.img} alt={`${item.name} Patent`} className="w-full h-full object-contain" />
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION SCENARIOS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">Application Matrix</div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Engineered for Real-World Applications</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {applications.map((app, index) => (
            <Link key={index} href={`/products?application=${encodeURIComponent(app.name)}`} className="group flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-orange-300 hover:shadow-sm transition-all">
              <span className="text-2xl">{app.icon}</span>
              <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600 transition-colors">{app.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">Why Global Partners Choose Us</div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Built for Long-Term Reliability</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Advanced Stamping Technology", desc: "Proprietary deep-drawing and stamping processes eliminate micro-cracks and significantly extend pump service life." },
              { title: `${company.facts.facilityArea} Manufacturing Base`, desc: "Advanced stainless steel stamping, forming, laser welding, and production systems support reliable pump manufacturing." },
              { title: "International Patent Protection", desc: "Over 100 technical patents, including multi-country PCT patents covering the United States, Europe, Canada and Australia." }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm mb-5">0{index + 1}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Partner With a Professional Pump Manufacturer</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">From pump selection to OEM manufacturing, we support reliable water transfer solutions worldwide.</p>
        <Link href="/products?action=rfq#rfq" className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-md">Contact Our Team</Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Guangdong Winning Pumps Industry Co., Ltd. All Rights Reserved.</div>
          <div className="text-slate-400">Specifications synchronized with official engineering data</div>
        </div>
      </footer>

      {/* 专利放大弹窗 */}
      {showGzaModal && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center" onClick={() => setShowGzaModal(false)}>
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img
              src={modalImage}
              alt="Patent"
              className="max-w-[90vw] max-h-[85vh] object-contain select-none"
              style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, cursor: isDragging ? 'grabbing' : 'grab' }}
              draggable={false}
              onWheel={(e) => {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.15 : 0.15;
                setScale((prev) => Math.min(Math.max(0.5, prev + delta), 5));
              }}
              onMouseDown={(e) => { setIsDragging(true); setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y }); }}
              onMouseMove={(e) => { if (isDragging) setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            />
          </div>

          <button onClick={() => setShowGzaModal(false)} className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light leading-none">×</button>
        </div>
      )}
    </main>
  );
}
