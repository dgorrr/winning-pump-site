'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, pumpCategories, applicationCategories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

function ProductsContent() {
  const searchParams = useSearchParams();
  const rfqSectionRef = useRef<HTMLDivElement>(null);

  // ==================== 状态管理 ====================
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedApplication, setSelectedApplication] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // 询价表单状态
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [inquiryText, setInquiryText] = useState('');

  // ==================== 清除所有筛选 ====================
  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedApplication('All');
    setSearchTerm('');
  };

  // ==================== 统一处理 URL 参数 ====================
  useEffect(() => {
    const action = searchParams.get('action');
    const model = searchParams.get('model');
    const categoryFromUrl = searchParams.get('category');
    const applicationFromUrl = searchParams.get('application');

    // 自动选中产品分类（来自首页 Core Product Lines）
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }

    // 自动选中应用场景（来自首页 Application Matrix）
    if (applicationFromUrl) {
      setSelectedApplication(applicationFromUrl);
    }

    // 自动填充询价内容
    if (model) {
      setInquiryText(`Hi Winning Pumps Engineering Team,\n\nWe are highly interested in your Industrial Pump Model: [ ${model} ]. \nPlease send us the technical data sheet, full parameter matrix, and the factory direct B2B price tier. Thanks!`);
    } else {
      setInquiryText('');
    }

    // 自动滚动到询价区域
    if (action === 'rfq' || window.location.hash === '#rfq' || model) {
      setTimeout(() => {
        rfqSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [searchParams]);

  // ==================== 过滤逻辑 ====================
  const filteredProducts = products.filter(product => {
    const matchCategory =
      selectedCategory === 'All' ||
      (product.category && product.category === selectedCategory);

    const matchApplication =
      selectedApplication === 'All' ||
      (product.applications && product.applications.includes(selectedApplication));

    const matchSearch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.model.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchApplication && matchSearch;
  });

  // 提交 RFQ 询盘到海外核心通道 WhatsApp
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerEmail) {
      alert("Please fill in your Name and Email to secure factory quotation.");
      return;
    }
    const waNumber = "8657488888888";
    const finalMsg = `*🚨 NEW GLOBAL SOURCING INQUIRY *\n\n*Buyer Name:* ${buyerName}\n*Buyer Email:* ${buyerEmail}\n\n*Message/Specs:* \n${inquiryText}`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(finalMsg)}`, '_blank');
  };

  return (
    <div className="bg-slate-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* 顶部高端大厂风头部 */}
        <div className="mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-600 uppercase bg-brand-50 px-2.5 py-1 rounded">
            Global Procurement Hub
          </span>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 mt-3 sm:text-4xl" style={{ color: 'initial' }}>
            Industrial Catalog Matrix
          </h1>
          <p className="text-slate-500 mt-1.5 text-sm max-w-2xl">
            Filter through our engineering-grade fluid transfer systems. Every single model supports custom voltages, customized materials (SS316, Bronze), and direct OEM industrial manufacturing distribution.
          </p>
        </div>

        {/* 搜索与多维控制面板 */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-10 space-y-6">
          {/* 搜索框 */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Search Model or Keyword</label>
            <input
              type="text"
              placeholder="e.g., WB, GZA, CDL, Vertical Multistage..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {/* 泵类大分类筛选（第一层） */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Product Divisions</label>
              {selectedCategory !== 'All' && (
                <button onClick={() => setSelectedCategory('All')} className="text-xs text-brand-600 font-bold hover:underline">Reset</button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedCategory === 'All' ? 'bg-slate-900 text-white shadow-sm' : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
                style={{ color: selectedCategory === 'All' ? '#FFFFFF' : 'initial', backgroundColor: selectedCategory === 'All' ? '#0F172A' : 'initial' }}
              >
                All Machinery
              </button>
              {pumpCategories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedCategory === cat ? 'bg-slate-900 text-white shadow-sm' : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
                  style={{ color: selectedCategory === cat ? '#FFFFFF' : 'initial', backgroundColor: selectedCategory === cat ? '#0F172A' : 'initial' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 应用场景筛选（第二层） */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Application Scenarios</label>
              {selectedApplication !== 'All' && (
                <button onClick={() => setSelectedApplication('All')} className="text-xs text-brand-600 font-bold hover:underline">Reset</button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedApplication('All')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedApplication === 'All' ? 'bg-slate-900 text-white shadow-sm' : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
                style={{ color: selectedApplication === 'All' ? '#FFFFFF' : 'initial', backgroundColor: selectedApplication === 'All' ? '#0F172A' : 'initial' }}
              >
                All Applications
              </button>
              {applicationCategories.map((app, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedApplication(app)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedApplication === app ? 'bg-slate-900 text-white shadow-sm' : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
                  style={{ color: selectedApplication === app ? '#FFFFFF' : 'initial', backgroundColor: selectedApplication === app ? '#0F172A' : 'initial' }}
                >
                  {app}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 产品列表矩阵橱窗 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full bg-white border border-slate-200 rounded-2xl py-16 text-center">
              <p className="text-slate-400 text-sm font-medium">No pump configurations match your current filtering criteria.</p>
              <button onClick={clearFilters} className="mt-3 text-xs font-bold text-brand-600 hover:underline">Clear All Filters</button>
            </div>
          )}
        </div>

        {/* 全球询盘控制中心 */}
        <section 
          id="rfq" 
          ref={rfqSectionRef}
          className="scroll-mt-24 border border-slate-200/80 rounded-2xl bg-white shadow-sm overflow-hidden"
        >
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 p-8 lg:p-10 text-white flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold tracking-widest text-brand-400 uppercase bg-white/10 px-2 py-0.5 rounded">
                  B2B RFQ Control Center
                </span>
                <h2 className="text-2xl font-black tracking-tight text-white">
                  Request Factory-Direct Price Sheets
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fill out this engineering inquiry matrix. Our international engineering department will coordinate voltage, hydraulic curves, and delivery logs to provide an official corporate quote within 12 hours.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800 space-y-3 text-[11px] font-mono text-slate-400">
                <p className="flex items-center gap-2">✓ 100% Hydraulic Performance Test Before Despatch</p>
                <p className="flex items-center gap-2">✓ Complete Third-Party SGS/ISO Quality Validation</p>
                <p className="flex items-center gap-2">✓ Tailored Voltage Configurations For Global Grids</p>
              </div>
            </div>

            <form onSubmit={handleInquirySubmit} className="lg:col-span-3 p-8 lg:p-10 space-y-5 bg-white">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., John Smith"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs focus:border-brand-500 focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., purchasing@company.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs focus:border-brand-500 focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Technical Specification Requirement / Inquiry Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project requirement, required flow rate (m³/h), head pressure (m), medium temperature or specific models..."
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-mono focus:border-brand-500 focus:bg-white focus:outline-none transition-all leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-600 py-3.5 text-center text-xs font-bold tracking-wider uppercase text-white shadow-md hover:bg-brand-700 transition-all"
                  style={{ color: '#FFFFFF', backgroundColor: '#EA580C' }}
                >
                  Secure Direct Factory Quotation via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-slate-500 font-mono text-xs">Loading Procurement Center Matrix...</div>}>
      <ProductsContent />
    </Suspense>
  );
}