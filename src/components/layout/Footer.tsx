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
    content: "0326 702 600",
    link: "tel:0326702600",
  },
  {
    icon: Mail,
    title: "Email",
    content: "congtytinphatvungtau@gmail.com",
    link: "mailto:congtytinphatvungtau@gmail.com",
  },
  {
    icon: MapPin,
    title: "Địa Chỉ",
    content: "106 Nam Kỳ Khởi Nghĩa, phường Vũng Tàu, thành phố Hồ Chí Minh",
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
    <footer className="text-foreground border-t border-border bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/logo-ngang.png"
                alt="CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-6">
              Đối tác tin cậy cho các dự án xây dựng dân dụng, thương mại và công nghiệp tại TP.HCM.
            </p>
            <div className="flex space-x-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background hover:bg-[#1569b7] rounded-lg flex items-center justify-center border border-border transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 text-[#1569b7]" />
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
                    className="text-muted-foreground hover:text-[#1569b7] transition-colors text-sm"
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
                    className="text-muted-foreground hover:text-[#1569b7] transition-colors text-sm"
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
                  <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center shrink-0 mt-0.5 border border-border">
                    <info.icon className="w-4 h-4 text-[#1569b7]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm text-foreground hover:text-[#1569b7] transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{info.content}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="flex flex-col space-y-1">
                <p className="text-muted-foreground text-sm">
                  © {new Date().getFullYear()} CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT. All rights reserved.
                </p>
                <p className="text-muted-foreground text-xs">
                  Tên giao dịch: TIN PHAT CTI CO., LTD
                </p>
                <p className="text-muted-foreground text-xs">
                  Mã số thuế: 3502302391 | Vốn điều lệ: 3.000.000.000 VNĐ
                </p>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-[#1569b7] transition-colors">
                  Chính Sách Bảo Mật
                </a>
                <a href="#" className="text-muted-foreground hover:text-[#1569b7] transition-colors">
                  Điều Khoản Dịch Vụ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
