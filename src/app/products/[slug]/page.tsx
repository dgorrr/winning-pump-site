'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { products } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const openModal = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
    setSelectedTitle('');
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    const newZoom = Math.max(0.5, Math.min(4, zoomLevel + delta));
    setZoomLevel(newZoom);
    if (newZoom === 1) setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // ==================== 最终 11 大应用场景图片映射表 ====================
  const applicationImageMap: Record<string, string> = {
    "Wastewater & Sewage": "/images/applications/municipal-treatment.png",
    "Industrial Process": "/images/applications/industrial-process.png",
    "Water Supply & Boosting": "/images/applications/building-boosting.png",
    "Municipal Wastewater Treatment": "/images/applications/municipal-treatment.png",
    "Basement & Underground Drainage": "/images/applications/basement-lifting.png",
    "Industrial Process Wastewater": "/images/applications/industrial-process.png",
    "Building Water Supply & Boosting": "/images/applications/building-boosting.png",
    "Agricultural & Irrigation": "/images/applications/agricultural-irrigation.png",
    "Fire Fighting System": "/images/applications/fire-fighting.png",
    "Swimming Pool & Water Features": "/images/applications/swimming-pool.png",
    "Deep Well & Solar Pumping": "/images/applications/deep-well-solar.png",
    "Food & Beverage Processing": "/images/applications/food-beverage-processing.png",
    "Washing & Cleaning Systems": "/images/applications/washing-cleaning-systems.png",
    "Water Cooling & Circulation": "/images/applications/water-cooling-circulation.png",
  };

  if (!slug) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-slate-500">Loading...</p>
      </div>
    );
  }

  const product = products.find((p) => p.id.toLowerCase() === slug.toLowerCase());

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="mt-4 text-slate-600">The product you are looking for does not exist.</p>
      </div>
    );
  }

  // ==================== 产品前后导航逻辑（已优化） ====================
const currentIndex = products.findIndex(
  (p) => p.id.toLowerCase() === product.id.toLowerCase()
);
const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* 上方产品信息 */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 flex items-center justify-center">
          {product.image ? (
            <img src={product.image} alt={product.name} className="max-h-[420px] w-auto object-contain" />
          ) : (
            <div className="text-slate-400">No Image Available</div>
          )}
        </div>

        <div>
          <div className="text-sm text-[#0A66C2] font-semibold tracking-wider">{product.series}</div>
          <h1 className="text-3xl font-bold mt-2 tracking-tight">{product.name}</h1>
          <p className="text-lg text-slate-500 mt-1">{product.model}</p>

          <div className="mt-6 grid grid-cols-2 gap-y-3 text-sm">
            <div><span className="font-semibold">Flow Range:</span> {product.flow}</div>
            <div><span className="font-semibold">Max Head:</span> {product.head}</div>
            <div><span className="font-semibold">Power Range:</span> {product.power}</div>
            <div><span className="font-semibold">Material:</span> {product.material}</div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-slate-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Applications</h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, index) => (
                <span key={index} className="px-3 py-1 bg-slate-100 text-sm rounded-full text-slate-700">
                  {app}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => window.location.href = '/products?action=rfq#rfq'}
            className="mt-8 w-full bg-[#0A66C2] hover:bg-[#08529e] text-white py-3.5 rounded-2xl font-semibold text-lg transition"
          >
            Request Factory Quote
          </button>
          {/* ==================== 产品前后导航（放在RFQ按钮下方） ==================== */}
<div className="mt-4 flex gap-3">
  {/* 上一个产品 */}
  {prevProduct && (
    <a
      href={`/products/${prevProduct.id}`}
      className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-slate-300 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
    >
      ← Previous Product
    </a>
  )}

  {/* 下一个产品 */}
  {nextProduct && (
    <a
      href={`/products/${nextProduct.id}`}
      className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
    >
      Next Product →
    </a>
  )}
</div>
        </div>
      </div>

      {/* ==================== Application Scenarios（11 大场景） ==================== */}
      <section className="mt-12 border border-slate-200/80 rounded-3xl bg-white p-6 lg:p-10 shadow-sm">
        <div className="mb-8">
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-600 uppercase bg-brand-50 px-2.5 py-1 rounded">
            Engineering Applications Matrix
          </span>
          <h2 className="text-xl font-black text-slate-900 tracking-tight mt-3" style={{ color: 'initial' }}>
            Heavy-Duty Deployment Scenarios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {product.applications.map((app, index) => {
            const imageSrc = applicationImageMap[app] || '/images/applications/default.png';

            return (
              <div
                key={index}
                onClick={() => openModal(imageSrc, app)}
                className="group border border-slate-200/60 rounded-2xl overflow-hidden bg-slate-50 transition-all duration-300 hover:shadow-lg hover:border-slate-300 cursor-pointer"
              >
                <div className="relative h-48 w-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={app}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/images/applications/default.png';
                    }}
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-bold text-slate-900 tracking-wide">{app}</h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Click to view larger image
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================== 产品导航按钮 ==================== */}
      <div className="mt-12 flex justify-between border-t border-slate-200 pt-8">
        {/* 上一个产品 */}
        {prevProduct && (
          <a
            href={`/products/${prevProduct.id}`}
            className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            ← 上一个产品
          </a>
        )}

        {/* 下一个产品 */}
        {nextProduct && (
          <a
            href={`/products/${nextProduct.id}`}
            className="ml-auto flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            下一个产品 →
          </a>
        )}
      </div>

      {/* 图片放大弹窗 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4" onClick={closeModal}>
          <div className="relative max-w-[95vw] max-h-[90vh] w-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-2 px-2">
              <div className="text-white text-sm font-medium">
                {selectedTitle} <span className="text-white/60">(滚轮缩放 • 拖动移动)</span>
              </div>
              <button onClick={closeModal} className="text-white hover:text-red-400 text-3xl">×</button>
            </div>

            <div
              className="flex-1 flex items-center justify-center overflow-hidden bg-[#111] rounded-2xl cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="max-w-full max-h-[80vh] object-contain select-none transition-transform duration-75"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                }}
                onWheel={handleWheel}
                draggable={false}
              />
            </div>

            <div className="text-center mt-3 text-xs text-white/50">
              滚轮缩放 • 按住拖动 • 点击空白处关闭
            </div>
          </div>
        </div>
      )}
    </div>
  );
}