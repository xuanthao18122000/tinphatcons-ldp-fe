import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BannerCarousel } from "@/components/sections/BannerCarousel";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { News } from "@/components/sections/News";
import { FeaturedClients } from "@/components/sections/FeaturedClients";

export const metadata: Metadata = {
  title: "Tín Phát Construction | Công ty Xây dựng Tín Phát - Xây dựng Uy Tín TP.HCM",
  description: "Tín Phát Construction - Tin Phat Construction. Công ty Xây dựng Tín Phát - Đối tác tin cậy cho các dự án xây dựng dân dụng, thương mại và công nghiệp tại TP.HCM. ✓ Chất lượng ✓ Uy tín ✓ Đúng tiến độ. Liên hệ ngay để được tư vấn miễn phí!",
  keywords: "Tín Phát Construction, Tin Phat Construction, Tín Phát Construction Company, Công ty Xây dựng Tín Phát, xây dựng, công ty xây dựng, thi công xây dựng, nhà thầu xây dựng, xây nhà trọn gói, xây biệt thự, xây nhà xưởng, xây dựng dân dụng, xây dựng công nghiệp, TP.HCM",
  alternates: {
    canonical: "https://tinphatcons.com",
  },
  openGraph: {
    title: "Tín Phát Construction | Công ty Xây dựng Tín Phát - Xây dựng Uy Tín TP.HCM",
    description: "Tín Phát Construction - Tin Phat Construction. Đối tác tin cậy cho các dự án xây dựng dân dụng, thương mại và công nghiệp tại TP.HCM",
    type: "website",
    url: "https://tinphatcons.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tín Phát Construction - Công ty Xây dựng Tín Phát",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BannerCarousel />
      <CompanyOverview />
      {/* <Hero /> */}
      <About />
      <Services />
      <Projects />
      <News />
      <FeaturedClients />
      <Footer />
    </div>
  );
}
