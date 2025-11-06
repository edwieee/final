"use client";

import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#properties", label: "Properties" },
  { href: "#rera", label: "RERA" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/70 backdrop-blur-xl shadow-sm supports-[backdrop-filter]:bg-white/65">
      <div className="mx-auto max-w-[1200px] px-4 py-2 flex items-center gap-6">
        <Link href="#home" className="font-semibold text-lg text-gray-900 tracking-tight">
          EverGreen Realty
        </Link>

        <nav className="hidden md:flex items-center gap-4 rounded-full bg-white/70 backdrop-blur px-2.5 py-1.5 border border-gray-100 shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="tel:+910000000000"
            className="inline-flex items-center rounded-full bg-green-600 text-white px-6 py-2.5 text-sm font-medium shadow hover:opacity-95"
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full border border-gray-200 px-6 py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}


