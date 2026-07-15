"use client";

import { Suspense, FormEvent, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { products } from "@/data/products";

function RFQForm() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("preselected") ?? "";
  const matchedProduct = products.find((p) => p.slug === preselectedProduct);

  const [loading, setLoading] = useState(false);
  
  // 💥 状态管理：安全防空初始化，确保绝对不会报 undefined
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    buyerType: "distributor",
    productId: "",
    requirements: "",
  });

  // 💥 监听路由传参，只要有传暗号，自动带入
  useEffect(() => {
    if (matchedProduct) {
      setFormData(prev => ({
        ...prev,
        productId: matchedProduct.id,
        requirements: `Inquiry for ${matchedProduct.name} (${matchedProduct.model || "Standard"}). Required Flow: ${matchedProduct.flowRange}, Head: ${matchedProduct.headRange}.`
      }));
    }
  }, [preselectedProduct]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // 安全查找当前选中的产品
    const currentProduct = products.find((p) => p.id === formData.productId);
    const productName = currentProduct ? currentProduct.name : "Industrial Water Pump";
    const productModel = currentProduct?.model ? ` (${currentProduct.model})` : "";

    let identityLine = "";
    let actionRequest = "";
    
    if (formData.buyerType === "distributor") {
      identityLine = "🏢 Buyer Type: Wholesaler / Distributor (Looking for OEM & Bulk Price)";
      actionRequest = "Please send us your latest Product Catalog, Price Matrix, and MOQ terms.";
    } else if (formData.buyerType === "contractor") {
      identityLine = "🏗️ Buyer Type: Project Contractor / End-User (Looking for Technical Support)";
      actionRequest = "Please provide the official Quotation, Lead Time, and full Technical Datasheets.";
    } else {
      identityLine = "💼 Buyer Type: General Inquiry";
      actionRequest = "Please contact me regarding the following requirements.";
    }

    const waNumber = "8657488888888"; // 替换为 Winning Pumps 真实的官方接收号码
    const waMessage = 
      `🔥 [New RFQ Received - Winning Pumps Global]\n\n` +
      `Hello, I just submitted an official RFQ on your website:\n\n` +
      `📌 [Product Interest]\n` +
      `- Model: ${productName}${productModel}\n\n` +
      `👤 [Contact Profile]\n` +
      `- Contact Person: ${formData.name}\n` +
      `- Business Email: ${formData.email}\n` +
      `- Phone/WhatsApp: ${formData.phone}\n` +
      `- Country/Region: ${formData.country}\n` +
      `${identityLine}\n\n` +
      `📝 [Detailed Requirements]\n` +
      `"${formData.requirements}"\n\n` +
      `🎯 [Action Required]\n` +
      `${actionRequest}\n\n` +
      `Thank you! Looking forward to your prompt response.`;

    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(whatsappUrl, "_blank");
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-steel-200 bg-white p-6 shadow-sm lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-steel-700">Contact Person *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1.5 w-full rounded-xl border border-steel-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none bg-steel-50/50"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-steel-700">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1.5 w-full rounded-xl border border-steel-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none bg-steel-50/50"
            placeholder="name@company.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-steel-700">Phone / WhatsApp *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1.5 w-full rounded-xl border border-steel-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none bg-steel-50/50"
            placeholder="+1 234 567 890"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-steel-700">Country / Region *</label>
          <input
            type="text"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1.5 w-full rounded-xl border border-steel-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none bg-steel-50/50"
            placeholder="e.g. Saudi Arabia, UAE, Russia"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="productId" className="block text-sm font-semibold text-steel-700">Select Pump Series *</label>
          <select
            id="productId"
            name="productId"
            required
            value={formData.productId}
            onChange={(e) => {
              const pId = e.target.value;
              const prod = products.find(p => p.id === pId);
              setFormData(prev => ({
                ...prev,
                productId: pId,
                requirements: prod ? `Inquiry for ${prod.name} (${prod.model || "Standard"}). Required Flow: ${prod.flowRange}, Head: ${prod.headRange}.` : ""
              }));
            }}
            className="mt-1.5 w-full rounded-xl border border-steel-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none bg-steel-50/50 font-medium"
          >
            <option value="">-- Choose Pumping System --</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="buyerType" className="block text-sm font-semibold text-steel-700">Your Business Profile *</label>
          <select
            id="buyerType"
            name="buyerType"
            required
            value={formData.buyerType}
            onChange={handleInputChange}
            className="mt-1.5 w-full rounded-xl border border-emerald-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none bg-emerald-50/30 text-steel-900 font-semibold"
          >
            <option value="distributor">Wholesaler / Distributor (OEM Inquiry)</option>
            <option value="contractor">Project Contractor / Engineering Firm</option>
            <option value="other">End-User / Direct Purchase</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-semibold text-steel-700">Technical Requirements & Order Details</label>
        <textarea
          id="requirements"
          name="requirements"
          required
          rows={4}
          value={formData.requirements}
          onChange={handleInputChange}
          className="mt-1.5 w-full rounded-xl border border-steel-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none bg-steel-50/50 resize-y leading-relaxed"
          placeholder="Please specify: Voltage/Frequency, Liquid Type, Material (e.g. SS316, Cast Iron), Est. Order Quantity."
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-brand-600 py-4 text-sm font-bold text-white shadow-lg shadow-brand-100 hover:bg-brand-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? "Processing RFQ..." : "Submit Inquiry & Contact Factory via WhatsApp"}
        </button>
      </div>
    </form>
  );
}

export default function RFQPage() {
  return (
    <div className="min-h-screen bg-steel-50 py-10 lg:py-16">
      <div className="container-custom">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Request for Quotation (RFQ)" }]} />

        <div className="mx-auto max-w-3xl text-center mt-6">
          <span className="text-xs font-bold tracking-widest text-brand-600 uppercase">B2B Sourcing Portal</span>
          <h1 className="text-2xl font-black text-steel-900 mt-1 sm:text-3xl">Get Competitive Factory Pricing</h1>
          <p className="mt-3 text-sm leading-relaxed text-steel-500 max-w-xl mx-auto">
            Fill out your parameters. Our hydraulic engineering and export sales team will contact you back with a detailed quotation sheet within 12 hours.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Suspense fallback={<div className="py-20 text-center text-steel-400 font-medium">Loading Sourcing Engine...</div>}>
            <RFQForm />
          </Suspense>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { step: "1", title: "Submit Specifications", desc: "Select series and state your technical flow & head requirements" },
            { step: "2", title: "Direct Connect", desc: "Instantly route data to our international sales team via WhatsApp" },
            { step: "3", title: "Factory Quote", desc: "Receive comprehensive OEM/ODM pricing matrix and datasheets" },
          ].map((item) => (
            <div key={item.step} className="rounded-xl border border-steel-200/60 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                {item.step}
              </div>
              <h3 className="mt-3 text-sm font-bold text-steel-900">{item.title}</h3>
              <p className="mt-1 text-xs text-steel-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}