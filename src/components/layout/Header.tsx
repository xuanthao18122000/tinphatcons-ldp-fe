"use client";

import { ScrollHeader } from "@/components/layout/ScrollHeader";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ChevronDown, Mail, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "TRANG CHỦ", href: "/" },
  { name: "GIỚI THIỆU", href: "/about" },
  { name: "NĂNG LỰC THI CÔNG", href: "/capabilities" },
  { name: "DỰ ÁN", href: "/projects" },
  { name: "TIN TỨC", href: "/posts" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <ScrollHeader>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center"
            aria-label="CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT - Trang chủ"
          >
            <img
              src="/logo-ngang.png"
              alt="CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-semibold tracking-[0.02em] uppercase transition-colors",
                    isActive
                      ? "text-[#1569b7] border-b-2 border-[#1569b7] pb-1"
                      : "text-foreground hover:text-[#1569b7]"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="mailto:congtytinphatvungtau@gmail.com"
                className="h-10 w-10 rounded-full bg-[#b10000] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Liên hệ email"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
              {/* <a
                href="/#search"
                className="h-10 w-10 rounded-full bg-[#1569b7] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Tìm kiếm"
              >
                <Search size={18} aria-hidden="true" />
              </a> */}
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </ScrollHeader>
  );
};
