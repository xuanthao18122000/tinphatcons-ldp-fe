import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Không Tìm Thấy Trang",
  description: "Tín Phát Construction - Tin Phat Construction. Trang bạn đang tìm kiếm không tồn tại. Vui lòng quay lại trang chủ Công ty Xây dựng Tín Phát hoặc sử dụng menu điều hướng.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Không Tìm Thấy Trang
          </h2>
          <p className="text-muted-foreground mb-8">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Về Trang Chủ
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
