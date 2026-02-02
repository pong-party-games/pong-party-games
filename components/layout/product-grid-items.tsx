'use client';

import { AddToCart } from "components/cart/add-to-cart";
import Grid from "components/grid";
import { Product } from "lib/shopify/types";
import { Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => {
        const price = parseFloat(product.priceRange.maxVariantPrice.amount);
        const compareAtPrice = product.compareAtPriceRange?.maxVariantPrice?.amount
          ? parseFloat(product.compareAtPriceRange.maxVariantPrice.amount)
          : null;
        const hasDiscount = compareAtPrice && compareAtPrice > price;

        return (
          <Grid.Item key={product.handle} className="animate-fadeIn">
            <div className="group bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:translate-y-[-4px]">
              {/* Image Container */}
              <Link href={`/product/${product.handle}`} className="block relative aspect-square bg-gradient-to-br from-[#f8f9fb] to-white overflow-hidden">
                {product.featuredImage?.url && (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.title}
                    fill
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                )}
                {hasDiscount && (
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-[#2d0808] to-[#6b1414] text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {Math.round(((compareAtPrice! - price) / compareAtPrice!) * 100)}% OFF
                  </div>
                )}
              </Link>

              {/* Content */}
              <div className="p-5">
                <Link href={`/product/${product.handle}`}>
                  <h3 className="font-display text-lg font-semibold text-[#1a2b4a] mb-3 line-clamp-2 hover:text-[#0a1420] transition-colors">
                    {product.title}
                  </h3>
                </Link>

                {/* Price Section */}
                <div className="flex items-baseline gap-2 mb-4">
                  {hasDiscount ? (
                    <>
                      <span className="font-body text-2xl font-bold text-[#1a2b4a]">
                        ${price.toFixed(2)}
                      </span>
                      <span className="font-body text-base text-[#6b7280] line-through">
                        ${compareAtPrice!.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="font-body text-2xl font-bold text-[#1a2b4a]">
                      ${price.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={`/product/${product.handle}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-br from-[#0a1420] via-[#1a2438] to-[#0f1e35] text-white font-body font-semibold text-sm rounded-xl hover:from-[#152840] hover:to-[#1a2b4a] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Buy Now
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const form = e.currentTarget.closest('.group')?.querySelector('form');
                      if (form) {
                        const submitButton = form.querySelector('button[type="submit"]');
                        if (submitButton) {
                          (submitButton as HTMLButtonElement).click();
                        }
                      }
                    }}
                    className="p-2.5 bg-gradient-to-br from-white to-[#f8f9fb] border border-[#e5e7eb] text-[#1a2b4a] rounded-xl hover:border-[#1a2b4a] hover:bg-white transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                    aria-label="Add to cart"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Hidden Add to Cart Form */}
                <div className="hidden">
                  <AddToCart product={product} />
                </div>
              </div>
            </div>
          </Grid.Item>
        );
      })}
    </>
  );
}
