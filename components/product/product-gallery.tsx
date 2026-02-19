"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImage {
    url: string;
    altText: string;
}

interface ProductGalleryProps {
    images: ProductImage[];
    productTitle: string;
    hasDiscount: boolean;
    discountPercent?: number;
}

export function ProductGallery({ images, productTitle, hasDiscount, discountPercent }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-row gap-3 lg:flex-col lg:space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square flex-1 max-w-[500px] mx-auto lg:mx-0 bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                {images[selectedImage]?.url && (
                    <Image
                        src={images[selectedImage].url}
                        alt={images[selectedImage].altText || productTitle}
                        fill
                        className="object-contain p-6"
                        priority
                    />
                )}
                {hasDiscount && discountPercent && (
                    <div className="absolute top-6 right-6 bg-gradient-to-br from-[#2d0808] to-[#6b1414] text-white px-4 py-2 rounded-full text-base font-bold shadow-lg">
                        Save {discountPercent}%
                    </div>
                )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
                <div className="flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:gap-3 w-20 lg:w-auto">
                    {images.slice(0, 4).map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={`relative aspect-square bg-white rounded-lg overflow-hidden border transition-colors ${selectedImage === index
                                    ? "border-[#1a2b4a] ring-2 ring-[#1a2b4a]"
                                    : "border-[#e5e7eb] hover:border-[#1a2b4a]"
                                } cursor-pointer`}
                        >
                            <Image
                                src={image.url}
                                alt={`${productTitle} - Image ${index + 1}`}
                                fill
                                loading="lazy"
                                className="object-contain p-1"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
