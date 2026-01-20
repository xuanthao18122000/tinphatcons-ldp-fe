import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Award, Target, Eye, Heart, Building2, Mail, Phone, Globe, MapPin, FileText, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới Thiệu",
  description: "Công ty Xây dựng Tín Phát với hơn 10 năm kinh nghiệm trong lĩnh vực xây dựng dân dụng, thương mại và công nghiệp. Đội ngũ chuyên nghiệp, quy trình thi công khoa học, cam kết chất lượng và tiến độ.",
  keywords: "giới thiệu công ty xây dựng, về chúng tôi, Tín Phát construction, công ty xây dựng TP.HCM",
  alternates: {
    canonical: "https://tinphatcons.com/about",
  },
  openGraph: {
    title: "Giới Thiệu | Công ty Xây dựng Tín Phát",
    description: "Tìm hiểu về Công ty Xây dựng Tín Phát - Hơn 10 năm kinh nghiệm, 100+ dự án hoàn thành",
    url: "https://tinphatcons.com/about",
    images: ["/og-image.jpg"],
  },
};

const values = [
  {
    icon: Target,
    title: "Sứ Mệnh",
    description: "Cung cấp các giải pháp xây dựng chất lượng cao, đáp ứng mọi nhu cầu của khách hàng với chi phí tối ưu nhất."
  },
  {
    icon: Eye,
    title: "Tầm Nhìn",
    description: "Trở thành công ty xây dựng hàng đầu tại TP.HCM, được khách hàng tin tưởng và lựa chọn."
  },
  {
    icon: Heart,
    title: "Giá Trị Cốt Lõi",
    description: "Uy tín - Chất lượng - Đúng tiến độ - Tận tâm với khách hàng."
  },
];

const services = [
  {
    title: "Xây Dựng Dân Dụng",
    items: [
      "Thiết kế và thi công nhà ở",
      "Biệt thự, nhà phố cao cấp",
      "Chung cư, khu đô thị",
      "Cải tạo, sửa chữa nhà cũ"
    ]
  },
  {
    title: "Xây Dựng Công Nghiệp",
    items: [
      "Nhà xưởng sản xuất",
      "Kho bãi, logistics",
      "Nhà máy, công trình công nghiệp",
      "Hạ tầng kỹ thuật"
    ]
  },
  {
    title: "Xây Dựng Thương Mại",
    items: [
      "Văn phòng làm việc",
      "Trung tâm thương mại",
      "Khách sạn, resort",
      "Nhà hàng, cafe"
    ]
  },
];

const achievements = [
  { number: "100+", label: "Dự Án Hoàn Thành" },
  { number: "50+", label: "Đội Ngũ Chuyên Nghiệp" },
  { number: "10+", label: "Năm Kinh Nghiệm" },
  { number: "100%", label: "Khách Hàng Hài Lòng" },
];

const strengths = [
  "Đội ngũ kỹ sư, kiến trúc sư giàu kinh nghiệm",
  "Quy trình thi công chuyên nghiệp, khoa học",
  "Sử dụng vật liệu chất lượng cao",
  "Cam kết tiến độ và bảo hành dài hạn",
  "Tư vấn miễn phí, báo giá minh bạch",
  "Hỗ trợ khách hàng 24/7"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Company Information Section */}
      <section className="pt-32 py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1569b7] mb-3">
                THÔNG TIN CÔNG TY
              </h2>
              <p className="text-xl md:text-2xl font-bold text-[#b10000] mb-4">Company Information</p>
              <div className="h-1 w-24 bg-[#b10000] mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Company Information List */}
              <div className="space-y-6">
                {/* Company Name */}
                <div className="flex items-start gap-4 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-[#1569b7]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-[#1569b7]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Tên Công Ty / Company name
                    </p>
                    <p className="text-base font-bold text-foreground leading-tight mb-1">
                      CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      TIN PHAT CONSTRUCTION TRADING INVESTMENT COMPANY LIMITED
                    </p>
                  </div>
                </div>

                {/* Short Name */}
                <div className="flex items-start gap-4 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-[#1569b7]/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[#1569b7]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Tên Viết Tắt / Short name
                    </p>
                    <p className="text-base font-bold text-foreground">TIN PHAT CTI CO., LTD</p>
                  </div>
                </div>

                {/* Trade Name */}
                <div className="flex items-start gap-4 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-[#1569b7]/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[#1569b7]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Tên Giao Dịch / Trade name
                    </p>
                    <p className="text-base font-bold text-foreground">TIN PHAT CTI CO., LTD</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-[#1569b7]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1569b7]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Trụ Sở Chính / Main office
                    </p>
                    <p className="text-base font-semibold text-foreground mb-1">
                      106 Nam Kỳ Khởi Nghĩa, phường Vũng Tàu, thành phố Hồ Chí Minh
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      106 Nam Ky Khoi Nghia, Vung Tau Ward, Ho Chi Minh City
                    </p>
                  </div>
                </div>

                {/* Hotline */}
                <div className="flex items-start gap-4 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-[#b10000]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#b10000]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Hotline
                    </p>
                    <a href="tel:0326702600" className="text-lg font-bold text-[#1569b7] hover:text-[#b10000] transition-colors">
                      0326 702 600
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-[#1569b7]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#1569b7]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Email
                    </p>
                    <a href="mailto:congtytinphatvungtau@gmail.com" className="text-base font-semibold text-[#1569b7] hover:text-[#b10000] transition-colors break-all">
                      congtytinphatvungtau@gmail.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-[#1569b7]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-[#1569b7]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Website
                    </p>
                    <a href="https://tinphatcons.com" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-[#1569b7] hover:text-[#b10000] transition-colors">
                      https://tinphatcons.com
                    </a>
                  </div>
                </div>

                {/* Tax Code */}
                <div className="flex items-start gap-4 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-[#1569b7]/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[#1569b7]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                      Mã Số Thuế / Tax code
                    </p>
                    <p className="text-lg font-bold text-foreground">3502302391</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="sticky top-24">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1200&fit=crop"
                      alt="Công trình xây dựng hiện đại của Công ty Tín Phát"
                      className="w-full h-[600px] md:h-[700px] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Letter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1569b7] mb-2">
                THƯ NGỎ
              </h2>
              <p className="text-xl font-bold text-[#b10000] mb-6">Open Letter</p>
              <div className="h-1 w-20 bg-[#b10000] mb-8"></div>
            </div>

            {/* Greeting */}
            <p className="text-foreground text-lg mb-8">
              Kính gửi: Quý Đối Tác – Quý Khách Hàng
            </p>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src="/logo-ngang.png"
                alt="CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Vietnamese Content */}
            <div className="space-y-4 mb-8 text-foreground leading-relaxed">
              <p>
                <strong>CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT</strong> xin gửi đến Quý Đối Tác, 
                Quý Khách Hàng lời chúc sức khỏe, thành công và thịnh vượng.
              </p>
              <p>
                Với định hướng phát triển bền vững, chúng tôi cam kết mang đến những giải pháp xây dựng 
                chất lượng cao, đáp ứng mọi nhu cầu về đầu tư, thương mại, hoàn thiện dự án và giải pháp 
                kỹ thuật trên toàn quốc. Với phương châm hoạt động <strong>"Uy tín - Chất lượng - Tiến bộ"</strong>, 
                chúng tôi tự hào về đội ngũ kỹ sư, kỹ thuật viên giàu kinh nghiệm, quy trình làm việc chuyên nghiệp 
                và năng lực thi công mạnh mẽ.
              </p>
              <p>
                Mỗi công trình của chúng tôi đều thể hiện cam kết về chất lượng, an toàn và giá trị bền vững 
                cho khách hàng. Chúng tôi mong muốn trở thành đối tác tin cậy, sẵn sàng đồng hành cùng Quý khách 
                hàng trong tất cả các giai đoạn của dự án, từ tư vấn, thiết kế đến thi công, bàn giao và bảo trì 
                dài hạn.
              </p>
              <p>
                Chúng tôi rất mong nhận được sự tin tưởng, hợp tác và đồng hành của Quý Đối Tác, Quý Khách Hàng 
                trong thời gian tới.
              </p>
            </div>

            {/* Closing */}
            <div className="mt-12 space-y-4">
              <p className="text-foreground text-lg">Trân trọng kính chào!</p>
              <p className="text-foreground font-semibold">
                CÔNG TY TNHH ĐẦU TƯ XÂY DỰNG THƯƠNG MẠI TÍN PHÁT
              </p>
              <div className="mt-8">
                <p className="text-foreground mb-2">Giám Đốc</p>
                <p className="text-foreground font-semibold text-lg">Bùi Đức Hùng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background" aria-labelledby="company-overview">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                alt="Đội ngũ kỹ sư và công nhân của Công ty Xây dựng Tín Phát đang thi công công trình"
                width="800"
                height="600"
                className="w-full h-[400px] object-cover rounded-xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 id="company-overview" className="text-3xl md:text-4xl font-bold text-foreground">
                Về Công Ty Chúng Tôi
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Được thành lập với sứ mệnh mang đến những công trình xây dựng chất lượng cao, 
                Công ty Xây dựng Tín Phát đã và đang khẳng định vị thế của mình trên thị trường 
                xây dựng tại TP.HCM.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Với đội ngũ kỹ sư, kiến trúc sư giàu kinh nghiệm cùng đội ngũ công nhân lành nghề, 
                chúng tôi cam kết mang đến cho khách hàng những công trình đạt chất lượng cao nhất, 
                đúng tiến độ và giá cả hợp lý.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Chúng tôi chuyên thi công các dự án dân dụng, công nghiệp và thương mại với 
                quy trình làm việc chuyên nghiệp, minh bạch và luôn đặt sự hài lòng của 
                khách hàng lên hàng đầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 my-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thành Tựu Của Chúng Tôi
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground my-6">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Điểm Mạnh Của Chúng Tôi
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground text-lg">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sẵn Sàng Bắt Đầu Dự Án Của Bạn?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn và báo giá miễn phí
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-md text-base font-medium bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors"
          >
            Liên Hệ Ngay
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

