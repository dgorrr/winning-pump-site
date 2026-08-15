"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  // 规范对齐新数据源大类标签
  const categoryLabels: Record<string, string> = {
    "Circulating & Inline Pumps": "Circulating / Centrifugal",
    "Boosting & Fire Pumps": "Boosting & Fire",
    "Sewage & Drainage Pumps": "Sewage / Drainage",
  };

  // 动态机械工业级 SVG 占位符
  const renderFallbackSVG = () => (
    <div className="flex flex-col items-center justify-center text-slate-400 gap-2 select-none relative z-10">
      <svg className="w-12 h-12 text-slate-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400">Engineering Specification</span>
    </div>
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300/70">
      
      {/* 🌟 核心改动：把整个图片外壳变成可点击链接，直达详情页 */}
      <Link href={`/products/${product.id}`} className="relative flex h-60 w-full shrink-0 items-center justify-center bg-gradient-to-b from-slate-50/80 to-slate-100 p-6 border-b border-slate-200/40 overflow-hidden cursor-pointer">
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:12px_12px]"></div>
        <div className="absolute w-40 h-40 rounded-full bg-white/90 blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <span className="absolute right-4 top-4 z-10 text-[9px] font-mono font-bold text-slate-400/60 tracking-wider uppercase select-none">
          {product.series} Matrix
        </span>

        {!imgError && product.image ? (
          <div className="relative h-full w-full flex flex-col items-center justify-center z-10 pt-2">
            <img
              src={product.image}
              alt={product.model}
              onError={() => setImgError(true)}
              className="h-44 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ filter: "contrast(1.02) drop-shadow(0 8px 12px rgba(15, 23, 42, 0.08))" }}
              loading="lazy"
            />
            <div className="w-32 h-1.5 bg-slate-900/10 blur-[3px] rounded-full mt-1 transition-transform duration-500 group-hover:scale-110"></div>
          </div>
        ) : (
          renderFallbackSVG()
        )}
      </Link>

      {/* 下方核心商流数据区 */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between bg-gradient-to-b from-white to-slate-50/30">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-bold border border-slate-200 bg-slate-50 text-slate-500 uppercase tracking-wider">Heavy Duty Specification</span>
            <p className="text-xs font-black text-brand-600 uppercase tracking-widest">{product.model}</p>
          </div>
          
          {/* 🌟 核心改动：把产品名称也用 Link 包起来，标题也可以点击 */}
          <Link href={`/products/${product.id}`} className="block group-hover:text-brand-600 transition-colors">
            <h3 className="text-lg font-black tracking-tight text-slate-900 line-clamp-2 cursor-pointer" style={{ color: 'initial' }}>
              {product.name}
            </h3>
          </Link>
          <p className="text-sm leading-relaxed text-slate-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* 工业参数指标 */}
        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-100 pt-4 text-sm">
          <div>
            <span className="block font-medium text-slate-400">Power Matrix</span>
            <span className="font-bold text-slate-800" style={{ color: 'initial' }}>{product.power}</span>
          </div>
          <div>
            <span className="block font-medium text-slate-400">Flow Range</span>
            <span className="font-bold text-slate-800" style={{ color: 'initial' }}>{product.flow}</span>
          </div>
        
        </div>

        {/* 下方询盘按钮，依然维持直达列表页表单并自动填写的极致闭环体验 */}
        <div className="mt-5 pt-3 border-t border-slate-100">
          <Link
            href={`/products?model=${encodeURIComponent(product.model)}#rfq`}
            className="block w-full rounded-xl bg-slate-900 py-3.5 text-center text-sm font-bold tracking-wider uppercase text-white shadow-sm transition-all duration-200 hover:bg-brand-600 hover:shadow-lg"
            style={{ color: '#FFFFFF', backgroundColor: '#0F172A' }}
          >
            Sourcing Inquiry
          </Link>
        </div>
      </div>
    </article>
  );
}