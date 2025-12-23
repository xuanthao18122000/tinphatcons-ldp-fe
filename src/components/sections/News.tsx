import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "Hoàn thành dự án Biệt thự Quận 2 vượt tiến độ",
    category: "Tin dự án",
    date: "15/11/2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    excerpt: "Dự án biệt thự cao cấp tại Quận 2 đã hoàn thiện vượt tiến độ 2 tuần so với kế hoạch ban đầu. Công trình với diện tích 500m2, thiết kế hiện đại...",
  },
  {
    title: "Khởi công dự án Nhà xưởng 5000m2 tại KCN Hiệp Phước",
    category: "Tin dự án",
    date: "01/11/2024",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&h=400&fit=crop",
    excerpt: "Công ty Tín Phát chính thức khởi công dự án nhà xưởng công nghiệp quy mô 5000m2, dự kiến hoàn thành trong 6 tháng...",
  },
  {
    title: "Hoàn thành cải tạo Trụ sở công ty ABC",
    category: "Hoạt động",
    date: "20/10/2024",
    image: "https://images.unsplash.com/photo-1522071820081-000001457879?w=600&h=400&fit=crop",
    excerpt: "Dự án cải tạo văn phòng hiện đại, tối ưu không gian làm việc và nâng cao trải nghiệm nhân viên...",
  },
];

export const News = () => {
  return (
    <section id="news" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="animate-on-scroll fade-in-up text-4xl md:text-5xl font-bold text-foreground mb-2">
              Tin mới nhất
            </h2>
          </div>
          <a
            href="/posts"
            className="animate-on-scroll fade-in-up stagger-1 group hidden md:flex items-center gap-2 px-4 h-9 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Xem thêm
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className={`animate-on-scroll scale-in stagger-${index + 1} group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">| {item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <a
            href="/posts"
            className="inline-flex items-center gap-2 px-4 h-9 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors group"
          >
            Xem thêm
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
