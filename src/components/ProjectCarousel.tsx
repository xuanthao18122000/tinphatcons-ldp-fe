"use client";

import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const featuredProjects = [
  {
    title: "VINHOMES SMART CITY",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop",
  },
  {
    title: "NHÀ MÁY ĐIỆN GIÓ PHÚ LẠC 2",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&h=600&fit=crop",
  },
  {
    title: "SELAVIA",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1200&h=600&fit=crop",
  },
  {
    title: "VĂN PHÒNG HIỆN ĐẠI",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
  },
  {
    title: "KHU DÂN CƯ CAO CẤP",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=600&fit=crop",
  },
];

export const ProjectCarousel = () => {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-2">
            Dự án
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent"></div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredProjects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <a href="/projects">
                  <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    <div className="relative h-[400px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Title */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl md:text-2xl font-bold">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Buttons */}
          <CarouselPrevious className="left-2 md:left-4 bg-white/90 hover:bg-white border-none shadow-lg" />
          <CarouselNext className="right-2 md:right-4 bg-white/90 hover:bg-white border-none shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
};

