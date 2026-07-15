'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGzaModal, setShowGzaModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const stats = [
    { value: '31+', label: 'Years of Experience' },
    { value: '100+', label: 'Technical Patents' },
    { value: '1500+', label: 'Global Clients' },
    { value: '2500+', label: 'Manufacturing Equipment' },
    { value: '60+', label: 'Countries Served' },
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
    {
      id: 1,
      img: "/images/hero-carousel-1.png",
      tag: "PRECISION MANUFACTURING",
      title: "140,000㎡ Advanced Manufacturing Base"
    },
    {
      id: 2,
      img: "/images/hero-carousel-2.png",
      tag: "PATENTED TECHNOLOGY",
      title: "Precision Stamping & Welding Lines"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-28 pb-16 overflow-hidden bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-600 uppercase">
                China’s Pioneer of Stamped Stainless Steel Pumps
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
                31 Years of Precision.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  100+ Patents.
                </span>
              </h1>
              
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Professional manufacturer of stainless steel stamped centrifugal pumps. 
                Delivering reliable fluid solutions for global EPC projects and industrial infrastructure.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="/products" 
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-md"
                >
                  Explore Products
                </Link>
                <Link 
                  href="/products?action=rfq#rfq" 
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-bold tracking-wide hover:bg-slate-50 transition-all"
                >
                  Request Factory Quote
                </Link>
              </div>
            </div>

            {/* Right - Carousel */}
            <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              {carouselSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-[10px] font-mono font-bold tracking-widest text-orange-300 mb-1">
                      {slide.tag}
                    </div>
                    <div className="text-white font-bold text-lg sm:text-xl">
                      {slide.title}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentSlide ? 'w-6 bg-orange-500' : 'w-1.5 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT CATEGORIES ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">
            Product Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Core Product Lines
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            High-performance stainless steel pumps engineered for demanding industrial applications worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                {cat.name}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                {cat.desc}
              </p>
              <div className="mt-6 text-xs font-semibold text-slate-400 group-hover:text-orange-600 flex items-center gap-1 transition-colors">
                View Products
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ==================== FLAGSHIP PRODUCT - GZA(S) ==================== */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* 左侧文字 */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-3 py-1 text-xs font-semibold text-orange-600 uppercase tracking-wider mb-4">
                Flagship Product
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                GZA(S) Series
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                Our signature end-suction centrifugal pump, protected by multiple international invention patents 
                across the United States, Canada, Australia, and 19 European countries. Built with advanced 
                stainless steel stamping technology for superior efficiency and durability.
              </p>
              
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

              <Link
                href="/products?search=GZA"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors"
              >
                View GZA(S) Series
                <span>→</span>
              </Link>
            </div>

            {/* 右侧视觉区 */}
            <div className="space-y-5">
              <div 
                className="flex items-center justify-center min-h-[380px] cursor-zoom-in bg-slate-50 rounded-2xl border border-slate-200"
                onClick={() => {
                  setModalImage('/images/gza-s.png');
                  setShowGzaModal(true);
                  setScale(1);
                  setPosition({ x: 0, y: 0 });
                }}
              >
                <img 
                  src="/images/gza-s.png"
                  alt="GZA(S) Series"
                  className="max-h-[340px] object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: "US", img: "/images/about/us-patent.png" },
                  { name: "CA", img: "/images/about/ca-patent.png" },
                  { name: "EU", img: "/images/about/eu-patent.png" },
                  { name: "AU", img: "/images/about/au-patent.png" },
                ].map((item) => (
                  <div 
                    key={item.name} 
                    className="text-center cursor-zoom-in"
                    onClick={() => {
                      setModalImage(item.img);
                      setShowGzaModal(true);
                      setScale(1);
                      setPosition({ x: 0, y: 0 });
                    }}
                  >
                    <div className="bg-white rounded-lg p-1.5 mb-1.5 aspect-[3/4] flex items-center justify-center overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <img 
                        src={item.img} 
                        alt={`${item.name} Patent`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 图片放大弹窗 */}
        {showGzaModal && (
          <div 
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
            onClick={() => {
              setShowGzaModal(false);
              setScale(1);
              setPosition({ x: 0, y: 0 });
            }}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.15 : 0.15;
                setScale((prev) => Math.min(Math.max(0.5, prev + delta), 5));
              }}
              onMouseDown={(e) => {
                setIsDragging(true);
                setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
              }}
              onMouseMove={(e) => {
                if (isDragging) {
                  setPosition({
                    x: e.clientX - dragStart.x,
                    y: e.clientY - dragStart.y
                  });
                }
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            >
              <img
                src={modalImage}
                alt="Zoom view"
                className="max-w-[90vw] max-h-[85vh] object-contain select-none"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  cursor: isDragging ? 'grabbing' : 'grab',
                  transition: isDragging ? 'none' : 'transform 0.1s ease'
                }}
                draggable={false}
              />
            </div>

            <button
              onClick={() => {
                setShowGzaModal(false);
                setScale(1);
                setPosition({ x: 0, y: 0 });
              }}
              className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light leading-none"
            >
              ×
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              Scroll to zoom · Drag to move · Click outside to close
            </div>
          </div>
        )}
      </section>

      {/* ==================== APPLICATION SCENARIOS ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">
            Application Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Engineered for Real-World Applications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {applications.map((app, index) => (
            <Link
              key={index}
              href={`/products?application=${encodeURIComponent(app.name)}`}
              className="group flex items-center gap-4 bg-white border border-slate-200 rounded-xl px-5 py-4 hover:border-orange-300 hover:shadow-sm transition-all"
            >
              <span className="text-2xl">{app.icon}</span>
              <span className="text-sm font-medium text-slate-700 group-hover:text-orange-600 transition-colors">
                {app.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-[0.2em] text-orange-600 uppercase mb-3">
              Why Global Partners Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Built for Long-Term Reliability
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Stamping Technology",
                desc: "Proprietary deep-drawing and stamping processes eliminate micro-cracks and significantly extend pump service life."
              },
              {
                title: "140,000㎡ Manufacturing Base",
                desc: "Fully equipped with automated laser cutting, robotic welding lines, and complete hydraulic testing facilities."
              },
              {
                title: "International Patent Protection",
                desc: "Over 100 technical patents, including multi-country PCT patents covering the United States, Europe, Canada and Australia."
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm mb-5">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Ready to Source Industrial Pumps?
        </h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Contact our engineering team for technical datasheets, hydraulic curves, and factory-direct quotations.
        </p>
        <Link
          href="/products?action=rfq#rfq"
          className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-md"
        >
          Request Factory Quotation
        </Link>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Guangdong Winning Pumps Industry Co., Ltd. All Rights Reserved.</div>
          <div className="text-slate-400">Specifications synchronized with official engineering data</div>
        </div>
      </footer>
    </main>
  );
}