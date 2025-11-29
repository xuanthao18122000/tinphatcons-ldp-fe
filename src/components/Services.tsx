import { Building2, HardHat, Hammer, Wrench, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Xây Dựng Dân Dụng",
    description: "Nhà ở tùy chỉnh và khu phức hợp dân cư được xây dựng với độ chính xác cao cho cuộc sống hiện đại.",
  },
  {
    icon: HardHat,
    title: "Xây Dựng Thương Mại",
    description: "Tòa nhà văn phòng, không gian bán lẻ và phát triển thương mại thúc đẩy thành công kinh doanh.",
  },
  {
    icon: Hammer,
    title: "Dự Án Công Nghiệp",
    description: "Cơ sở công nghiệp và nhà kho quy mô lớn được thiết kế để tối ưu hóa chức năng.",
  },
  {
    icon: Wrench,
    title: "Cải Tạo & Nâng Cấp",
    description: "Biến đổi không gian hiện tại với giải pháp cải tạo sáng tạo và nâng cấp hiện đại.",
  },
  {
    icon: Users,
    title: "Quản Lý Dự Án",
    description: "Giám sát dự án từ đầu đến cuối đảm bảo giao hàng đúng hạn và tuân thủ ngân sách.",
  },
  {
    icon: Shield,
    title: "An Toàn & Chất Lượng",
    description: "Tiêu chuẩn an toàn nghiêm ngặt và kiểm soát chất lượng cho mọi giai đoạn dự án.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="animate-on-scroll fade-in-up text-accent font-semibold text-sm uppercase tracking-wider">
            Dịch Vụ Của Chúng Tôi
          </span>
          <h2 className="animate-on-scroll fade-in-up stagger-1 text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Những Gì Chúng Tôi Làm Tốt Nhất
          </h2>
          <p className="animate-on-scroll fade-in-up stagger-2 text-muted-foreground text-lg max-w-2xl mx-auto">
            Giải pháp xây dựng toàn diện được tùy chỉnh để đáp ứng nhu cầu cụ thể 
            và vượt quá mong đợi của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`animate-on-scroll scale-in stagger-${Math.min(index + 1, 6)} border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card`}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
