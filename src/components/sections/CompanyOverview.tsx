export const CompanyOverview = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-5">
          Về Tín Phát
        </h2>

        {/* Đoạn mô tả ngắn */}
        <div className="max-w-3xl mx-auto mb-10 text-center text-sm md:text-base text-muted-foreground">
          <p>
            Hơn 20 năm hình thành và phát triển, Công ty Xây dựng Tín Phát đã không ngừng vươn mình mạnh mẽ,
            từng bước khẳng định vị thế là một trong những tổng thầu xây dựng hàng đầu tại Việt Nam.
          </p>
        </div>

        {/* Khối số liệu thống kê */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[#b10000] mb-2">
              20+
            </div>
            <div className="text-sm md:text-base text-foreground">
              Năm kiến tạo giá trị bền vững
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[#b10000] mb-2">
              TOP 5
            </div>
            <div className="text-sm md:text-base text-foreground">
              Nhà thầu xuất sắc 2019
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[#b10000] mb-2">
              180+
            </div>
            <div className="text-sm md:text-base text-foreground">
              Dự án trong và ngoài nước
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[#b10000] mb-2">
              TOP 10
            </div>
            <div className="text-sm md:text-base text-foreground">
              Nhà thầu hàng đầu 2025
            </div>
          </div>
        </div>

        {/* Khối nội dung dưới: text bên trái, hình bên phải */}
        <div className="mt-10 md:mt-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Phước Thành đã khẳng định vị thế là một trong những Tổng thầu uy tín hàng đầu Việt Nam
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 h-10 rounded-full text-sm font-semibold text-[#1569b7] border border-[#1569b7] hover:bg-[#1569b7] hover:text-white transition-colors"
              >
                Xem thêm
              </a>
              <a
                href="https://phuocthanh.vn/wp-content/uploads/2025/08/2025-Digital-PhuocThanh-Profile_resize.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 h-10 rounded-full text-sm font-semibold bg-white border border-input text-foreground hover:bg-muted transition-colors"
              >
                Tải hồ sơ năng lực
              </a>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://phuocthanh.vn/wp-content/uploads/2025/05/VSCZXV-e1748504159210.webp"
                alt="Về Tín Phát"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
