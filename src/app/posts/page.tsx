import type { Metadata } from "next";
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDate } from '@/lib/utils'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "Tin Tức & Hoạt Động",
  description: "Cập nhật tin tức, dự án mới, kiến thức xây dựng và hoạt động của Công ty Xây dựng Tín Phát. Tin tức xây dựng TP.HCM, xu hướng ngành xây dựng 2024.",
  keywords: "tin tức xây dựng, tin tức ngành xây dựng, blog xây dựng, kiến thức xây dựng, dự án mới, hoạt động công ty",
  alternates: {
    canonical: "https://tinphatcons.vn/posts",
  },
  openGraph: {
    title: "Tin Tức & Hoạt Động | Công ty Xây dựng Tín Phát",
    description: "Cập nhật tin tức mới nhất về các dự án và hoạt động của Tín Phát",
    url: "https://tinphatcons.vn/posts",
    images: ["/og-image.jpg"],
  },
};

const mockPosts = [
  {
    id: '1',
    title: 'Dự án Biệt thự Quận 2 - Hoàn thiện vượt tiến độ',
    slug: 'du-an-biet-thu-quan-2-hoan-thien-vuot-tien-do',
    excerpt: 'Dự án biệt thự cao cấp tại Quận 2 đã hoàn thiện vượt tiến độ 2 tuần so với kế hoạch ban đầu. Công trình với diện tích 500m2, thiết kế hiện đại.',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    category: 'Tin dự án',
    publishedAt: new Date('2024-11-15'),
    status: 'PUBLISHED',
  },
  {
    id: '2',
    title: 'Khởi công dự án Nhà xưởng 5000m2 tại KCN Hiệp Phước',
    slug: 'khoi-cong-du-an-nha-xuong-5000m2-tai-kcn-hiep-phuoc',
    excerpt: 'Công ty Tín Phát chính thức khởi công dự án nhà xưởng công nghiệp quy mô 5000m2 tại KCN Hiệp Phước, dự kiến hoàn thành trong 6 tháng.',
    thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
    category: 'Tin dự án',
    publishedAt: new Date('2024-11-01'),
    status: 'PUBLISHED',
  },
  {
    id: '3',
    title: 'Hoàn thành cải tạo Trụ sở công ty ABC',
    slug: 'hoan-thanh-cai-tao-tru-so-cong-ty-abc',
    excerpt: 'Dự án cải tạo và nâng cấp trụ sở công ty ABC đã hoàn thành, mang đến diện mạo mới hiện đại, chuyên nghiệp cho văn phòng.',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    category: 'Hoạt động',
    publishedAt: new Date('2024-10-20'),
    status: 'PUBLISHED',
  },
  {
    id: '4',
    title: 'Thi công Nhà phố 4 tầng tại Bình Thạnh',
    slug: 'thi-cong-nha-pho-4-tang-tai-binh-thanh',
    excerpt: 'Dự án nhà phố 4 tầng tại quận Bình Thạnh đang trong giai đoạn hoàn thiện, dự kiến bàn giao vào cuối tháng 12/2024.',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    category: 'Tin dự án',
    publishedAt: new Date('2024-10-05'),
    status: 'PUBLISHED',
  },
  {
    id: '5',
    title: 'Thi công Chung cư Green Valley đúng tiến độ',
    slug: 'thi-cong-chung-cu-green-valley-dung-tien-do',
    excerpt: 'Dự án chung cư cao cấp Green Valley đang trong giai đoạn hoàn thiện nội thất, cam kết bàn giao đúng tiến độ theo hợp đồng.',
    thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    category: 'Tin dự án',
    publishedAt: new Date('2024-09-15'),
    status: 'PUBLISHED',
  },
  {
    id: '6',
    title: 'Kỹ thuật xây dựng móng nhà trên nền đất yếu',
    slug: 'ky-thuat-xay-dung-mong-nha-tren-nen-dat-yeu',
    excerpt: 'Chia sẻ kinh nghiệm và kỹ thuật xây dựng móng nhà trên nền đất yếu, đảm bảo an toàn và độ bền công trình lâu dài.',
    thumbnail: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop',
    category: 'Kiến thức',
    publishedAt: new Date('2024-09-01'),
    status: 'PUBLISHED',
  },
];

export default async function PostsPage() {
  const posts = mockPosts;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tin Tức & Hoạt Động
            </h1>
            <p className="text-muted-foreground text-lg">
              Cập nhật tin tức mới nhất về các dự án và hoạt động của Công ty Xây dựng Tín Phát
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              Tin tức khác
            </h2>
          </div>

          {posts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  Chưa có bài viết nào được xuất bản
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} href={`/posts/${post.slug}`}>
                  <div className="group cursor-pointer">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      {/* Date */}
                      <p className="text-xs text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </p>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Back Link */}
          <div className="mt-12 text-center">
            <a href="/" className="text-muted-foreground hover:text-accent transition-colors">
              ← Quay lại trang chủ
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
