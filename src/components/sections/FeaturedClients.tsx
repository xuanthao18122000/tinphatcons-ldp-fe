const clients = [
  "https://phuocthanh.vn/wp-content/uploads/2025/05/b34d85931d921027770251d74f240e067d696b5f.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/398ee8a82f282cf0c1081782a847e41ff6be4ac2.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/b372df6abbb5367ae536009dc2b4ac3adcde1778.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/d82cd25251795a8b704808260f6571c384dd867e.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/6922933fc640b9be0285109c0fceb78c341783b2.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/ba5008acbb659a92ca0ac912242e99c4dd109e9a.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/d66f96e98eaaa087eab765bc395151a1d6402db0.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/685d2a252ac4727137837963f610eadc5562e77f.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/cb34030e43f64e7c8b0a66b7524810c07f625db2.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/beca8b10ed259679751d7f0bce6c319077d5e6d6.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/7ae73f3760f88a9b68477cc4d81c7f224cc4919b.webp",
  "https://phuocthanh.vn/wp-content/uploads/2025/05/6f208f40a49280c243195ca894574874a45892f6.webp",
];

export const FeaturedClients = () => {
  return (
    <section className="py-24 bg-[#e9f4ff]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-10 items-stretch">
          {/* Text block */}
          <div className="bg-[#1569b7] text-white rounded-lg px-10 py-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Khách hàng
              <br />
              tiêu biểu
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              Tín Phát tự hào được đồng hành cùng nhiều Chủ đầu tư uy tín trong và ngoài nước. 
              Sự tin tưởng của Quý đối tác chính là minh chứng cho năng lực, uy tín và cam kết 
              của chúng tôi trong từng công trình thi công.
            </p>
          </div>

          {/* Logos grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm border border-slate-100 flex items-center justify-center p-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt={`Logo khách hàng ${index + 1}`}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

