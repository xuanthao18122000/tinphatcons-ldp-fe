import { Facebook, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";

const navigation = {
  company: [
    { name: "Giới Thiệu", href: "/about" },
    { name: "Dự Án", href: "/projects" },
    { name: "Tin Tức", href: "/posts" },
    { name: "Liên Hệ", href: "#contact" },
  ],
  services: [
    { name: "Xây Dựng Dân Dụng", href: "#services" },
    { name: "Xây Dựng Thương Mại", href: "#services" },
    { name: "Xây Dựng Công Nghiệp", href: "#services" },
    { name: "Cải Tạo & Nâng Cấp", href: "#services" },
  ],
};

const contactInfo = [
  {
    icon: Phone,
    title: "Điện Thoại",
    content: "+84 (028) 123-4567",
    link: "tel:+842812 34567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@tinphat.vn",
    link: "mailto:info@tinphat.vn",
  },
  {
    icon: MapPin,
    title: "Địa Chỉ",
    content: "TP. Hồ Chí Minh",
  },
  {
    icon: Clock,
    title: "Giờ Làm Việc",
    content: "T2 - T6: 8:00 - 18:00",
  },
];

const social = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/tinphatcons" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/tinphatcons" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center">
                <span className="text-accent font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold">Tín Phát</span>
            </div>
            <p className="text-background/80 mb-6">
              Đối tác tin cậy cho các dự án xây dựng dân dụng, thương mại và công nghiệp tại TP.HCM.
            </p>
            <div className="flex space-x-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Công Ty</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-background/80 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Dịch Vụ</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-background/80 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên Hệ</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <info.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-background/60 mb-1">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm text-background/90 hover:text-accent transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-background/90">{info.content}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Công ty Xây dựng Tín Phát. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Chính Sách Bảo Mật
              </a>
              <a href="#" className="text-background/60 hover:text-accent transition-colors">
                Điều Khoản Dịch Vụ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
