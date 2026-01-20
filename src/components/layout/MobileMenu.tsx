"use client";

import { useState } from "react";
import { Menu, X, Mail, Search, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "TRANG CHỦ", href: "/" },
  { name: "GIỚI THIỆU", href: "/about" },
  { name: "NĂNG LỰC THI CÔNG", href: "/capabilities" },
  { name: "DỰ ÁN", href: "/projects" },
  { name: "TIN TỨC", href: "/posts" },
];

export const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block transition-colors duration-200 font-semibold uppercase",
                    isActive
                      ? "text-[#1569b7] border-l-4 border-[#1569b7] pl-3"
                      : "text-foreground hover:text-[#1569b7]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-4 border-t border-border grid grid-cols-2 gap-3">

              <a
                href="mailto:congtytinphatvungtau@gmail.com"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#b10000] text-white py-2 hover:opacity-90 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail size={18} aria-hidden="true" />
                <span>Email</span>
              </a>
              {/* <a
                href="/#search"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#1569b7] text-white py-2 hover:opacity-90 transition-opacity col-span-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Search size={18} aria-hidden="true" />
                <span>Tìm kiếm</span>
              </a> */}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};
