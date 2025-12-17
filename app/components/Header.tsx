"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-extrabold tracking-wide"
        >
          <Image
            src="/app-logo.png"
            alt="AAG Associate Logo"
            width={70}
            height={70}
            priority
          />
          <span className="text-xl font-bold tracking-wide whitespace-nowrap">
            AAG <span className="text-yellow-500">ASSOCIATE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-medium transition
                ${
                  pathname === item.href
                    ? "text-yellow-400 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/quote"
            className="bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 border-b border-gray-700
                ${
                  pathname === item.href
                    ? "bg-gray-700 text-yellow-400"
                    : "text-gray-200 hover:bg-gray-700"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default memo(Header);
