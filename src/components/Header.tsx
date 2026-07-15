'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' }, // 新增
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#0A66C2] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">W</span>
            </div>
            <span className="font-semibold text-2xl tracking-tight">WINNING PUMPS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-[#0A66C2] transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/products?action=rfq#rfq" 
              className="px-5 py-2.5 text-sm font-semibold border border-[#0A66C2] text-[#0A66C2] rounded-2xl hover:bg-[#0A66C2] hover:text-white transition"
            >
              Request a Quote
            </Link>
            <Link 
              href="/products?action=contact#rfq" 
              className="px-5 py-2.5 text-sm font-semibold bg-[#0A66C2] text-white rounded-2xl hover:bg-[#084d94] transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-slate-900 transition ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-900 transition ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-900 transition ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white px-6 py-6">
          <nav className="flex flex-col gap-4 text-base font-medium mb-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="py-1 hover:text-[#0A66C2]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <Link 
              href="/products?action=rfq#rfq" 
              className="w-full text-center py-3 border border-[#0A66C2] text-[#0A66C2] rounded-2xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a Quote
            </Link>
            <Link 
              href="/products?action=contact#rfq" 
              className="w-full text-center py-3 bg-[#0A66C2] text-white rounded-2xl font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}