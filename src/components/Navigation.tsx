"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#cerceveler", label: "Çerçeveler" },
  { href: "#iletisim", label: "İletişim" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-stone-800 dark:bg-stone-950/95"
      role="banner"
    >
      <nav
        className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-24"
        aria-label="Ana navigasyon"
      >
        {/* Logo - Horizontal version */}
        <a
          href="#"
          className="mt-2 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg"
          aria-label="Ebrar Optik - Ana Sayfa"
        >
          <Image
            src="/assets/logo-v3-glasses.svg"
            alt=""
            width={200}
            height={70}
            className="h-14 w-auto md:h-16 lg:h-20"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div
          className="hidden items-center lg:flex"
          role="navigation"
          aria-label="Masaüstü menü"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-sm px-3 xl:px-4 py-2.5 text-sm font-semibold text-stone-600 transition-all hover:bg-stone-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50 ${index < navLinks.length - 1 ? "border-r border-stone-200 dark:border-stone-700" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2.5 text-stone-600 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:text-stone-300 dark:hover:bg-stone-800 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-stone-200 bg-white px-6 py-4 dark:border-stone-800 dark:bg-stone-950 lg:hidden"
          role="navigation"
          aria-label="Mobil menü"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-[44px] flex items-center rounded-lg px-4 py-3 text-sm font-medium text-stone-600 transition-all hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
