import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from "lucide-react";

// Mock data - trong thực tế sẽ lấy từ database
const mockPosts = [
  {
    id: '1',
    title: 'Dự án Biệt thự Quận 2 - Hoàn thiện vượt tiến độ',
    slug: 'du-an-biet-thu-quan-2-hoan-thien-vuot-tien-do',
    excerpt: 'Dự án biệt thự cao cấp tại Quận 2 đã hoàn thiện vượt tiến độ 2 tuần so với kế hoạch ban đầu. Công trình với diện tích 500m2, thiết kế hiện đại.',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
    category: 'Tin dự án',
    publishedAt: new Date('2024-11-15'),
    author: 'Tín Phát Construction',
    status: 'PUBLISHED',
    content: `
      <p>Dự án biệt thự cao cấp tại Thảo Điền, Quận 2 đã chính thức hoàn thiện và bàn giao cho chủ đầu tư, vượt trước tiến độ cam kết 2 tuần. Đây là minh chứng cho năng lực thi công chuyên nghiệp và sự cam kết của Công ty Xây dựng Tín Phát.</p>
      
      <h2>Thông tin dự án</h2>
      <p>Dự án biệt thự này có tổng diện tích 500m2, được thiết kế theo phong cách hiện đại, kết hợp hài hòa giữa không gian sống tiện nghi và thẩm mỹ cao cấp. Công trình bao gồm:</p>
      <ul>
        <li>3 tầng với tổng diện tích xây dựng 450m2</li>
        <li>5 phòng ngủ master với phòng tắm riêng</li>
        <li>Phòng khách rộng 80m2 với trần cao 4.5m</li>
        <li>Bể bơi ngoài trời 40m2</li>
        <li>Sân vườn cảnh quan 100m2</li>
        <li>Hầm xe rộng cho 3 ô tô</li>
      </ul>

      <h2>Điểm nổi bật của dự án</h2>
      <p>Dự án sử dụng toàn bộ vật liệu cao cấp nhập khẩu từ châu Âu, hệ thống Smart Home hiện đại, và được thi công bởi đội ngũ thợ lành nghề có nhiều năm kinh nghiệm.</p>
      
      <h3>Vật liệu cao cấp</h3>
      <ul>
        <li>Gạch Marble tự nhiên nhập khẩu Italy cho sảnh và phòng khách</li>
        <li>Gỗ tự nhiên Óc Chó cho nội thất phòng ngủ</li>
        <li>Kính Low-E cách nhiệt cho toàn bộ mặt tiền</li>
        <li>Thiết bị vệ sinh Kohler và Duravit</li>
        <li>Hệ thống điều hòa trung tâm Daikin VRV</li>
      </ul>

      <h3>Công nghệ Smart Home</h3>
      <p>Biệt thự được trang bị hệ thống Smart Home toàn diện giúp chủ nhà điều khiển mọi thiết bị từ xa:</p>
      <ul>
        <li>Điều khiển chiếu sáng, nhiệt độ, rèm cửa tự động</li>
        <li>Hệ thống camera an ninh 24/7 với AI nhận diện khuôn mặt</li>
        <li>Khóa cửa vân tay và mật mã</li>
        <li>Hệ thống báo động khẩn cấp</li>
        <li>Điều khiển bằng giọng nói và ứng dụng di động</li>
      </ul>

      <h2>Quy trình thi công chuyên nghiệp</h2>
      <p>Để đảm bảo tiến độ và chất lượng, Tín Phát đã áp dụng quy trình quản lý dự án chặt chẽ:</p>
      <ol>
        <li><strong>Giai đoạn chuẩn bị:</strong> Khảo sát địa chất, thiết kế chi tiết, dự trù vật tư</li>
        <li><strong>Thi công móng và kết cấu:</strong> 2 tháng với giám sát chất lượng 24/7</li>
        <li><strong>Hoàn thiện kiến trúc:</strong> 3 tháng thi công mặt ngoài và hệ thống kỹ thuật</li>
        <li><strong>Hoàn thiện nội thất:</strong> 2 tháng lắp đặt nội thất và thiết bị</li>
        <li><strong>Nghiệm thu và bàn giao:</strong> Kiểm tra toàn diện và chỉnh sửa hoàn thiện</li>
      </ol>

      <h2>Phản hồi của chủ đầu tư</h2>
      <p>"Tôi rất hài lòng với chất lượng công trình và sự chuyên nghiệp của Tín Phát. Đội ngũ thi công làm việc rất tận tâm, luôn cập nhật tiến độ thường xuyên và giải quyết mọi vấn đề phát sinh một cách nhanh chóng. Ngôi nhà của tôi không chỉ đẹp mà còn được hoàn thiện vượt thời gian cam kết." - Chủ đầu tư Nguyễn Văn A</p>

      <h2>Cam kết chất lượng</h2>
      <p>Tín Phát cam kết bảo hành công trình 5 năm và hỗ trợ bảo trì định kỳ. Mọi chi tiết thi công đều được kiểm tra kỹ lưỡng và tuân thủ nghiêm ngặt các quy chuẩn xây dựng Việt Nam.</p>

      <p>Nếu bạn đang có nhu cầu xây dựng biệt thự hoặc nhà ở cao cấp, hãy liên hệ với Tín Phát để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
    `,
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    ]
  },
  {
    id: '2',
    title: 'Khởi công dự án Nhà xưởng 5000m2 tại KCN Hiệp Phước',
    slug: 'khoi-cong-du-an-nha-xuong-5000m2-tai-kcn-hiep-phuoc',
    excerpt: 'Công ty Tín Phát chính thức khởi công dự án nhà xưởng công nghiệp quy mô 5000m2 tại KCN Hiệp Phước.',
    thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=800&fit=crop',
    category: 'Tin dự án',
    publishedAt: new Date('2024-11-01'),
    author: 'Tín Phát Construction',
    status: 'PUBLISHED',
    content: `
      <p>Sáng ngày 01/11/2024, Công ty Xây dựng Tín Phát đã tổ chức lễ khởi công dự án nhà xưởng công nghiệp quy mô 5000m2 tại Khu Công nghiệp Hiệp Phước, TP.HCM với sự tham dự của Ban lãnh đạo công ty và đại diện chủ đầu tư.</p>

      <h2>Thông tin dự án</h2>
      <p>Dự án nhà xưởng này được thiết kế theo tiêu chuẩn công nghiệp hiện đại, đáp ứng nhu cầu sản xuất của doanh nghiệp:</p>
      <ul>
        <li>Diện tích: 5000m2</li>
        <li>Kết cấu: Khung thép tiền chế</li>
        <li>Chiều cao: 12m</li>
        <li>Tải trọng sàn: 3 tấn/m2</li>
        <li>Hệ thống cửa cuốn lớn cho xe container</li>
        <li>Văn phòng điều hành 200m2</li>
      </ul>

      <h2>Tiến độ thi công</h2>
      <p>Dự án được chia thành 3 giai đoạn chính:</p>
      <ol>
        <li><strong>Tháng 1-2:</strong> Chuẩn bị mặt bằng, đào móng, đổ bê tông móng</li>
        <li><strong>Tháng 3-4:</strong> Lắp dựng kết cấu thép, lợp mái</li>
        <li><strong>Tháng 5-6:</strong> Hoàn thiện tường, sàn, hệ thống điện nước</li>
      </ol>

      <p>Dự kiến hoàn thành và bàn giao vào tháng 6/2025.</p>

      <h2>Cam kết của Tín Phát</h2>
      <p>Với kinh nghiệm thi công nhiều nhà xưởng công nghiệp, Tín Phát cam kết:</p>
      <ul>
        <li>Hoàn thành đúng tiến độ cam kết</li>
        <li>Đảm bảo chất lượng theo thiết kế</li>
        <li>Tuân thủ an toàn lao động tuyệt đối</li>
        <li>Bảo hành công trình 3 năm</li>
      </ul>
    `,
    gallery: [
      'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
    ]
  },
  // Thêm các bài viết khác tương tự...
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: "Không tìm thấy bài viết",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: `${post.category}, tin tức xây dựng, dự án xây dựng, Tín Phát`,
    alternates: {
      canonical: `https://tinphatcons.com/posts/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Công ty Xây dựng Tín Phát`,
      description: post.excerpt,
      url: `https://tinphatcons.com/posts/${post.slug}`,
      images: [post.thumbnail],
      type: 'article',
      publishedTime: post.publishedAt.toISOString(),
    },
  };
}

export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = mockPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Bài viết liên quan
  const relatedPosts = mockPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 -mt-20 relative z-10 mb-16">
        <div className="max-w-4xl mx-auto">
          {/* Post Header Card */}
          <Card className="mb-8 shadow-xl border-none">
            <CardContent className="p-6 md:p-10">
              <Badge className="mb-4">{post.category}</Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{formatDate(post.publishedAt)}</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-[#1569b7] pl-4">
                {post.excerpt}
              </p>
            </CardContent>
          </Card>

          {/* Post Content */}
          <Card className="mb-8 border-none shadow-lg">
            <CardContent className="p-6 md:p-10">
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-muted-foreground prose-ul:mb-4
                  prose-ol:text-muted-foreground prose-ol:mb-4
                  prose-li:mb-2
                  prose-strong:text-foreground prose-strong:font-semibold"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>

          {/* Gallery */}
          {post.gallery && post.gallery.length > 0 && (
            <Card className="mb-8 border-none shadow-lg">
              <CardContent className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Hình ảnh dự án</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {post.gallery.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg group">
                      <img
                        src={image}
                        alt={`${post.title} - Hình ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Share Buttons */}
          <Card className="mb-8 border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Chia sẻ bài viết
                </h3>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/posts"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại danh sách tin tức
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Bài viết liên quan</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/posts/${relatedPost.slug}`}>
                    <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedPost.thumbnail}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-3">{relatedPost.category}</Badge>
                        <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <p className="text-xs text-muted-foreground mt-3">
                          {formatDate(relatedPost.publishedAt)}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
