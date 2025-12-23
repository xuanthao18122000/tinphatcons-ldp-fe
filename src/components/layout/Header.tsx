import { ScrollHeader } from "@/components/layout/ScrollHeader";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ChevronDown, Mail, Search } from "lucide-react";

const navigation = [
  { name: "TRANG CHỦ", href: "/" },
  { name: "GIỚI THIỆU", href: "/about" },
  { name: "NĂNG LỰC THI CÔNG", href: "/capabilities" },
  { name: "DỰ ÁN", href: "/projects" },
  { name: "TIN TỨC", href: "/posts" },
];

export const Header = () => {
  return (
    <ScrollHeader>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3"
            aria-label="Công ty Xây dựng Tín Phát - Trang chủ"
          >
            <div className="h-12 w-12 rounded-sm border-2 border-[#1569b7] flex items-center justify-center bg-white shadow-sm">
              <span className="text-[#1569b7] font-black text-lg">TP</span>
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold tracking-[0.18em] text-[#1569b7]">
                TIN PHAT CONS
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold tracking-[0.02em] uppercase text-foreground hover:text-[#1569b7] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-[#1569b7] transition-colors"
            >
              <span>VN</span>
              <ChevronDown size={16} aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              <a
                href="mailto:info@tinphatcons.vn"
                className="h-10 w-10 rounded-full bg-[#b10000] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Liên hệ email"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
              <a
                href="/#search"
                className="h-10 w-10 rounded-full bg-[#1569b7] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Tìm kiếm"
              >
                <Search size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </ScrollHeader>
  );
};
