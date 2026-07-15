"use client";

import { FormEvent, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="py-10 lg:py-14">
      <div className="container-main">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        <div className="mb-10">
          <h1 className="section-heading">Contact Us</h1>
          <p className="section-subheading">
            Get in touch with our export sales team
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="card p-6">
              <h2 className="text-lg font-semibold text-steel-900">
                Winning Pumps Co., Ltd.
              </h2>
              <p className="mt-1 text-sm text-brand-600">胜利水泵制造有限公司</p>
              <ul className="mt-6 space-y-4 text-sm text-steel-600">
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    No. 888 Industrial Park Road
                    <br />
                    Ningbo, Zhejiang Province
                    <br />
                    China 315000
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <a href="tel:+86-574-8888-8888" className="hover:text-brand-600">
                      +86 574 8888 8888
                    </a>
                    <p className="text-xs text-steel-400">Mon–Sat, 8:00–18:00 (GMT+8)</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <a href="mailto:sales@winningpumps.com" className="hover:text-brand-600">
                      sales@winningpumps.com
                    </a>
                    <p className="text-xs text-steel-400">Export inquiries</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>WhatsApp: +86 138 0000 8888</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-steel-900">Business Hours</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-steel-500">Monday – Friday</dt>
                  <dd className="font-medium text-steel-900">8:00 – 18:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-steel-500">Saturday</dt>
                  <dd className="font-medium text-steel-900">9:00 – 15:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-steel-500">Sunday</dt>
                  <dd className="font-medium text-steel-900">Closed</dd>
                </div>
                <div className="flex justify-between border-t border-steel-100 pt-2">
                  <dt className="text-steel-500">Timezone</dt>
                  <dd className="font-medium text-steel-900">GMT+8 (CST)</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-lg bg-brand-900 p-6 text-white">
              <h3 className="font-semibold">Need a Quote?</h3>
              <p className="mt-2 text-sm text-brand-100">
                For product pricing and bulk orders, please use our RFQ form for faster processing.
              </p>
              <a href="/rfq" className="btn-accent mt-4 inline-block">
                Go to RFQ Form
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-steel-900">Message Sent</h2>
                <p className="mt-2 text-steel-600">
                  Thank you for contacting us. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mt-6"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
                <h2 className="mb-6 text-lg font-semibold text-steel-900">
                  Send Us a Message
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label-field">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="name" name="name" required className="input-field" />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-field">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="email" name="email" required className="input-field" />
                  </div>
                  <div>
                    <label htmlFor="company" className="label-field">
                      Company
                    </label>
                    <input type="text" id="company" name="company" className="input-field" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="label-field">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select id="subject" name="subject" required className="input-field">
                      <option value="">Select...</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="oem">OEM / ODM Partnership</option>
                      <option value="after-sales">After-Sales Support</option>
                      <option value="visit">Factory Visit Request</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="label-field">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="input-field resize-y"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-primary mt-6">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-10 overflow-hidden rounded-lg border border-steel-200">
          <div className="flex h-64 items-center justify-center bg-gradient-to-br from-steel-100 to-brand-50 sm:h-80">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="mt-3 font-medium text-steel-700">Ningbo, Zhejiang, China</p>
              <p className="text-sm text-steel-500">Industrial Park · 50,000 m² Factory</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
