import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { News } from "@/components/News";
import { Footer } from "@/components/Footer";
import { ScrollAnimationInit } from "@/components/ScrollAnimationInit";

export const metadata = {
  title: "Công ty Xây dựng Tín Phát | Xây dựng Uy Tín TP.HCM",
  description: "Công ty Xây dựng Tín Phát - Đối tác tin cậy cho các dự án xây dựng dân dụng, thương mại và công nghiệp tại TP.HCM. ✓ Chất lượng ✓ Uy tín ✓ Đúng tiến độ. Liên hệ ngay để được tư vấn miễn phí!",
  keywords: "xây dựng, công ty xây dựng, thi công xây dựng, nhà thầu xây dựng, xây nhà trọn gói, xây biệt thự, xây nhà xưởng, xây dựng dân dụng, xây dựng công nghiệp, TP.HCM",
  alternates: {
    canonical: "https://tinphatcons.vn",
  },
  openGraph: {
    title: "Công ty Xây dựng Tín Phát | Xây dựng Uy Tín TP.HCM",
    description: "Đối tác tin cậy cho các dự án xây dựng dân dụng, thương mại và công nghiệp tại TP.HCM",
    type: "website",
    url: "https://tinphatcons.vn",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Công ty Xây dựng Tín Phát",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ScrollAnimationInit />
      <Header />
      <Hero />
      <ProjectCarousel />
      <About />
      <Services />
      <Projects />
      <News />
      <Footer />
    </div>
  );
}
