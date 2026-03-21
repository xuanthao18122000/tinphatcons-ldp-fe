"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlurImage } from "../common";

interface ProductDetailLeftProps {
  images?: string[];
  productName?: string;
}

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || "https://cdn-v2.didongviet.vn";

export const ProductDetailLeft = ({ images = [], productName = "" }: ProductDetailLeftProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getImageUrl = (image: string) => {
    if (!image) return "/no-image-available.png";
    if (image.startsWith("http")) return image;
    return `${CDN_URL}/${image}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="border border-gray-200 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
        <p className="text-gray-500">Không có hình ảnh</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image - full width, căn giữa */}
      <div className="relative w-full border border-gray-200 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-lg z-10 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-lg z-10 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
        <div className="w-full h-[400px] flex items-center justify-center overflow-hidden">
          <div className="relative flex items-center justify-center max-h-[400px] max-w-full">
            <BlurImage
              src={getImageUrl(images[currentImageIndex])}
              alt={productName}
              width={400}
              height={400}
              className="!relative object-contain max-h-[400px] max-w-full w-auto h-auto"
            />
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                index === currentImageIndex
                  ? "border-primary-600"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <BlurImage
                src={getImageUrl(image)}
                alt={`${productName} - ${index + 1}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

