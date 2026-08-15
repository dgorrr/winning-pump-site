"use client";

import { FormEvent, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { company } from "@/data/company";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {


  e.preventDefault();

  setLoading(true);


  const formData = new FormData(e.currentTarget);


  const data = {

    name: formData.get("name"),

    email: formData.get("email"),

    company: formData.get("company"),

    subject: formData.get("subject"),

    message: formData.get("message"),

  };



  try {


    const response = await fetch(
      "/api/send-email",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),

      }
    );



    if(response.ok){

      setSubmitted(true);

    } else {

      alert("Failed to send message");

    }


  } catch(error){


    console.error(error);

    alert("Something went wrong");


  }


  setLoading(false);


}

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* 顶部轻微层次 */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-14">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Contact" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600 mb-4">
              Global Support
            </div>

            <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              Contact Winning Pumps
            </h1>

            <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-2xl">
              Connect with our engineering team for pump solutions, OEM cooperation,
              and global technical support.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">

        <div className="grid gap-8 lg:grid-cols-5">

          {/* LEFT INFORMATION */}
          <div className="lg:col-span-2 space-y-5">

            {/* COMPANY CARD */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                {company.legalName}
              </h2>
              <p className="mt-1.5 text-sm text-orange-600 font-medium">
                {company.tagline}
              </p>

              <div className="mt-6 space-y-5 text-sm text-slate-600">
                <div className="flex gap-3">
                  <span className="text-orange-500 mt-0.5 shrink-0">📍</span>
                  <p className="leading-relaxed">
                    {company.location.address},<br />
                    {company.location.city}, {company.location.province},<br />
                    {company.location.country} {company.location.postalCode}
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="text-orange-500 mt-0.5 shrink-0">☎</span>
                  <div>
                    <p className="font-medium text-slate-800">{company.contact.phone}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Mon–Sat, 8:00–17:00 (GMT+8)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-orange-500 mt-0.5 shrink-0">✉</span>
                  <div>
                    <p className="font-medium text-slate-800">{company.contact.email}</p>
                    <p className="text-xs text-slate-400 mt-0.5">Export inquiries</p>
                  </div>
                </div>

              </div>
            </div>

            {/* BUSINESS HOURS */}
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
              <h3 className="font-bold text-slate-900">Business Hours</h3>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Monday – Friday</span>
                  <span className="font-medium text-slate-800">8:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Saturday</span>
                  <span className="font-medium text-slate-800">8:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Sunday</span>
                  <span className="font-medium text-slate-800">Closed</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-3">
                  <span className="text-slate-500">Timezone</span>
                  <span className="font-medium text-slate-800">GMT+8 (CST)</span>
                </div>
              </div>
            </div>

            {/* RFQ CARD */}
            <div className="rounded-2xl bg-[#0B1016] p-7 text-white">
              <h3 className="text-lg font-bold">Need a Quote?</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                For product pricing, technical specifications, and bulk orders,
                contact our engineering team directly.
              </p>
              <Link
                href="/products?action=rfq#rfq"
                className="inline-flex mt-5 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-600 transition"
              >
                Request A Quote
              </Link>
            </div>
          </div>

          {/* FORM AREA */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm h-full flex flex-col items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-5 text-3xl font-black text-slate-900">Message Sent</h2>
                <p className="mt-3 text-slate-500">
                  Thank you for contacting Winning Pumps. Our team will reply shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold hover:bg-slate-50"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 shadow-sm"
              >
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-[0.25em] font-bold text-orange-600">
                    Inquiry
                  </div>
                  <h2 className="mt-3 text-2xl font-black text-slate-900">
                    Send Us A Message
                  </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    >
                      <option value="">Select...</option>
                      <option>Product Information</option>
                      <option>Quotation Request</option>
                      <option>OEM / ODM Partnership</option>
                      <option>Factory Visit</option>
                      <option>After Sales Support</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 resize-y"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-7 rounded-lg bg-orange-500 px-8 py-3 text-sm font-bold text-white hover:bg-orange-600 transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FACTORY LOCATION */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-12">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                Manufacturing Base
              </div>

              <h2 className="mt-4 text-3xl font-black text-slate-900">
                Yangjiang Factory
              </h2>

              <p className="mt-4 leading-relaxed text-slate-500 max-w-md">
               Based in Yangjiang city, Guangdong province, our
  manufacturing facility specializes in
  stainless steel pump production and
  precision engineering.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-black text-slate-900">{company.facts.manufacturingExperience}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">{company.facts.facilityArea}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">
                    Factory Area
                  </div>
                </div>
              </div>
            </div>

           <div className="min-h-[300px] border-l border-slate-200">
  <iframe
    title="Winning Pumps Yangjiang Factory"
    src="https://maps.google.com/maps?q=21.920333,112.064742&z=17&output=embed"
    className="w-full h-full min-h-[300px] border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />
</div>
          </div>
        </div>

      </div>
    </div>
  );
}
