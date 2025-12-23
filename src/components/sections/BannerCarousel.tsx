 "use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const bannerImages = [
  "https://phuocthanh.vn/wp-content/uploads/2025/09/gen-h-z6989597279908_39097953778f5eac37aaadc27d88d1e2.jpg",
  "https://phuocthanh.vn/wp-content/uploads/2025/09/KHP-new.jpeg",
  "https://phuocthanh.vn/wp-content/uploads/2025/09/A_03-scaled.png",
];

export const BannerCarousel = () => {
  return (
    <section className="w-full bg-white pt-20">
      <Carousel className="w-full">
        <CarouselContent>
          {bannerImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[600px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Banner ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/80 text-[#1569b7] hover:bg-white shadow-lg left-4" />
        <CarouselNext className="bg-white/80 text-[#1569b7] hover:bg-white shadow-lg right-4" />
      </Carousel>
    </section>
  );
};

