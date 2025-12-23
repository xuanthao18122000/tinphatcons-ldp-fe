import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Biệt thự Quận 2",
    category: "Dân Dụng",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    location: "Thảo Điền, Quận 2, TP.HCM",
    completion: "2024",
  },
  {
    title: "Nhà xưởng KCN Hiệp Phước",
    category: "Công Nghiệp",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    location: "KCN Hiệp Phước, TP.HCM",
    completion: "Đang thi công",
  },
  {
    title: "Nhà phố Bình Thạnh",
    category: "Dân Dụng",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    location: "Quận Bình Thạnh, TP.HCM",
    completion: "Đang thi công",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="animate-on-scroll fade-in-up text-accent font-semibold text-sm uppercase tracking-wider">
            Danh Mục Dự Án
          </span>
          <h2 className="animate-on-scroll fade-in-up stagger-1 text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Các Dự Án Tiêu Biểu
          </h2>
          <p className="animate-on-scroll fade-in-up stagger-2 text-muted-foreground text-lg max-w-2xl mx-auto">
            Thể hiện cam kết về sự xuất sắc của chúng tôi thông qua việc hoàn thành 
            thành công các dự án trong nhiều lĩnh vực khác nhau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`animate-on-scroll scale-in stagger-${index + 1} group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📍 {project.location}</p>
                  <p>📅 Hoàn thành: {project.completion}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/projects"
            className="animate-on-scroll fade-in-up stagger-4 inline-flex items-center justify-center gap-2 px-8 h-10 rounded-md text-sm font-medium border-2 border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Xem Tất Cả Dự Án
          </a>
        </div>
      </div>
    </section>
  );
};
