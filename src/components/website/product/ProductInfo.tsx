"use client";

import React from "react";
import Link from "next/link";
import { Star, Info, Plus } from "lucide-react";

interface Product {
  product_id: number;
  product: string;
  ratings?: {
    count?: number;
    avg_point?: number;
  };
  [key: string]: any;
}

interface SelectedItem {
  barcode?: string;
  [key: string]: any;
}

interface ProductInfoProps {
  product: Product;
  selectedItem?: SelectedItem;
}

const ProductInfo = ({ product, selectedItem }: ProductInfoProps) => {
  const copyToClipboard = (text: string) => {
    if (!text) return;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Simple success notification
        alert("Sao chép thành công");
      })
      .catch(() => {
        alert("Sao chép thất bại");
      });
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-primary-600 text-primary-600" size={16} />
        ))}
        {hasHalfStar && (
          <div className="relative w-4 h-4">
            <Star className="w-4 h-4 fill-gray-300 text-gray-300" size={16} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-4 h-4 fill-primary-600 text-primary-600" size={16} />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 fill-gray-300 text-gray-300" size={16} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex md:mt-2 md:flex-row flex-col gap-2">
        <h1
          className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 cursor-pointer"
          onClick={() => copyToClipboard(product?.product || "")}
        >
          {product?.product}
        </h1>
      </div>
    </div>
  );
};

export default ProductInfo;

