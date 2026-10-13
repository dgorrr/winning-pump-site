'use client';

import React, { useState, useEffect, useRef } from 'react';
import { products, pumpCategories, applicationCategories } from '@/data/products';
import ProductCard from '@/components/ProductCard';

type ProductsClientProps = {
  initialAction?: string;
  initialModel?: string;
  initialCategory?: string;
  initialApplication?: string;
};

function buildInquiryText(model?: string) {
  if (!model) return '';
  return `Hi Winning Pumps Engineering Team,\n\nWe are highly interested in your Industrial Pump Model: [ ${model} ]. \nPlease send us the technical data sheet, full parameter matrix, and the factory direct B2B price tier. Thanks!`;
}

export default function ProductsClient({
  initialAction,
  initialModel,
  initialCategory,
  initialApplication,
}: ProductsClientProps) {
  const rfqSectionRef = useRef<HTMLDivElement>(null);

  // ==================== 状态管理 ====================
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [selectedApplication, setSelectedApplication] = useState(initialApplication || 'All');
  const [searchTerm, setSearchTerm] = useState('');

  // 询价表单状态
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [inquiryText, setInquiryText] = useState(buildInquiryText(initialModel));

  // ==================== 清除所有筛选 ====================
  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedApplication('All');
    setSearchTerm('');
  };

  // Apply URL parameters passed from the Server Component page.
  // This keeps the catalog and product links in the initial HTML for crawlers.
  useEffect(() => {
    setSelectedCategory(initialCategory || 'All');
    setSelectedApplication(initialApplication || 'All');
    setInquiryText(buildInquiryText(initialModel));

    // Automatically scroll to the RFQ section for quote links.
    if (initialAction === 'rfq' || window.location.hash === '#rfq' || initialModel) {
      window.setTimeout(() => {
        rfqSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [initialAction, initialModel, initialCategory, initialApplication]);

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

// 提交 RFQ 询盘到邮箱
const handleInquirySubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!buyerName || !buyerEmail) {
    alert("Please fill in your Name and Email.");
    return;
  }

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: buyerName,
        email: buyerEmail,
        company: "",
        subject: "Factory Quote Request",
        message: inquiryText,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to send inquiry");
    }

    alert("Thank you. Your inquiry has been sent successfully.");

    setBuyerName("");
    setBuyerEmail("");
    setInquiryText("");

  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};  return (
    <div className="bg-slate-50/50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* 顶部高端大厂风头部 */}
        <div className="mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-600 uppercase bg-brand-50 px-2.5 py-1 rounded">
            PRODUCT CATALOG
          </span>
          <h1 className="text-5xl font-black tracking-tight text-slate-900 mt-3 sm:text-4xl" style={{ color: 'initial' }}>
            Industrial Pump Product Catalog
          </h1>
          <p className="text-slate-500 mt-1.5 text-sm max-w-2xl">
            Browse centrifugal, multistage, end-suction, inline and sewage pump ranges. Review available model information and request a quote for your application.
          </p>
        </div>

        {/* 搜索与多维控制面板 */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm mb-10 space-y-6">
          {/* 搜索框 */}
          <div>
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Search Model or Keyword</label>
            <input
              type="text"
              placeholder="e.g., WB, GZA, DW, Vertical Multistage..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-all"
            />
          </div>

          {/* 泵类大分类筛选（第一层） */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Product Divisions</label>
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
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Application Scenarios</label>
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
                <span className="text-xs font-mono font-bold tracking-widest text-brand-400 uppercase bg-white/10 px-3 py-1 rounded">
                  FACTORY DIRECT QUOTATION
                </span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Request a Factory Quote
                </h2>
                <p className="text-base lg:text-lg text-slate-300 leading-relaxed">
                  Submit your pump requirements and our engineering team will provide the suitable model selection, technical information, and quotation.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800 space-y-5 text-sm font-medium text-slate-300">
                <p className="flex items-center gap-2">✓ Engineering Support Before Purchase</p>
                <p className="flex items-center gap-2">✓ Product Selection Based on Your Application</p>
                <p className="flex items-center gap-2">✓  OEM / ODM Manufacturing Available</p>
              </div>
            </div>

            <form onSubmit={handleInquirySubmit} className="lg:col-span-3 p-8 lg:p-10 space-y-5 bg-white">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xm font-bold text-slate-500 uppercase tracking-wider mb-1.5">Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., John Smith"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs focus:border-brand-500 focus:bg-white focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xm font-bold text-slate-500 uppercase tracking-wider mb-1.5">Contact Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., purchasing@company.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-xs focus:border-brand-500 focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xm font-bold text-slate-500 uppercase tracking-wider mb-1.5">Technical Specification Requirement / Inquiry Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project requirement, required flow rate (m³/h), head pressure (m), medium temperature or specific models..."
                  value={inquiryText}
                  onChange={(e) => setInquiryText(e.target.value)}
                  className="
w-full 
rounded-lg 
border 
border-slate-200 
bg-slate-50 
px-4 
py-3 
text-sm 
font-mono 
focus:border-brand-500 
focus:bg-white 
focus:outline-none 
transition-all 
leading-relaxed
"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-600 py-3.5 text-center text-sm font-bold tracking-wider uppercase text-white shadow-md hover:bg-brand-700 transition-all"
                  style={{ color: '#FFFFFF', backgroundColor: '#EA580C' }}
                >
                  Request Factory Quote
                </button>
              </div>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
}

