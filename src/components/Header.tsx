import { ScrollHeader } from "@/components/ScrollHeader";
import { MobileMenu } from "@/components/MobileMenu";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Năng lực thi công", href: "/#services" },
  { name: "Dự án", href: "/projects" },
  { name: "Tin tức", href: "/posts" },
];

export const Header = () => {
  return (
    <ScrollHeader>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" aria-label="Công ty Xây dựng Tín Phát - Trang chủ">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-accent font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold text-primary">Tín Phát</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </ScrollHeader>
  );
};
