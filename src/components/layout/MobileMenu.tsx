"use client";

import { useState } from "react";
import { Menu, X, Mail, Search, ChevronDown } from "lucide-react";

const navigation = [
  { name: "TRANG CHỦ", href: "/" },
  { name: "GIỚI THIỆU", href: "/about" },
  { name: "NĂNG LỰC THI CÔNG", href: "/capabilities" },
  { name: "DỰ ÁN", href: "/projects" },
  { name: "TIN TỨC", href: "/posts" },
];

export const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="text-foreground"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-[#1569b7] transition-colors duration-200 font-semibold uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-1 text-foreground hover:text-[#1569b7] font-semibold transition-colors"
              >
                <span>VN</span>
                <ChevronDown size={16} aria-hidden="true" />
              </button>
              <a
                href="mailto:info@tinphatcons.vn"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#b10000] text-white py-2 hover:opacity-90 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail size={18} aria-hidden="true" />
                <span>Email</span>
              </a>
              <a
                href="/#search"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#1569b7] text-white py-2 hover:opacity-90 transition-opacity col-span-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search size={18} aria-hidden="true" />
                <span>Tìm kiếm</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};
