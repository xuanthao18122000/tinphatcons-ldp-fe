import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Award, Target, Eye, Heart } from "lucide-react";

export const metadata = {
  title: "Giới Thiệu",
  description: "Công ty Xây dựng Tín Phát với hơn 10 năm kinh nghiệm trong lĩnh vực xây dựng dân dụng, thương mại và công nghiệp. Đội ngũ chuyên nghiệp, quy trình thi công khoa học, cam kết chất lượng và tiến độ.",
  keywords: "giới thiệu công ty xây dựng, về chúng tôi, Tín Phát construction, công ty xây dựng TP.HCM",
  alternates: {
    canonical: "https://tinphatcons.vn/about",
  },
  openGraph: {
    title: "Giới Thiệu | Công ty Xây dựng Tín Phát",
    description: "Tìm hiểu về Công ty Xây dựng Tín Phát - Hơn 10 năm kinh nghiệm, 100+ dự án hoàn thành",
    url: "https://tinphatcons.vn/about",
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
      
      {/* Hero Section */}
      <header className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Giới Thiệu Công Ty Xây Dựng Tín Phát
            </h1>
            <p className="text-muted-foreground text-lg">
              Đối tác tin cậy với hơn 10 năm kinh nghiệm trong lĩnh vực xây dựng tại TP.HCM
            </p>
          </div>
        </div>
      </header>

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
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
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
                  <h3 className="text-xl font-bold text-foreground mb-6">
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

