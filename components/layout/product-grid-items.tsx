'use client';

import { addItem, buyNow } from "components/cart/actions";
import { useCart } from "components/cart/cart-context";
import Grid from "components/grid";
import { Product } from "lib/shopify/types";
import { Loader2, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  const router = useRouter();
  const { addCartItem } = useCart();
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [addingToCart, setAddingToCart] = useState<string | null>(null);

  const handleBuyNow = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();

    // Get the default variant (assuming single variant products)
    const variant = product.variants[0];
    if (!variant) return;

    setLoadingProduct(product.handle);
    try {
      // Buy now - creates a new cart with only this product and goes to checkout
      await buyNow(variant.id);
    } catch (error) {
      setLoadingProduct(null);
    }
  };

  const handleAddToCart = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();

    const variant = product.variants[0];
    if (!variant) return;

    setAddingToCart(product.handle);
    try {
      // Add to cart - this will trigger the cart modal to open via the cart context
      addCartItem(variant, product);
      await addItem(null, variant.id);
    } finally {
      setAddingToCart(null);
    }
  };

  const handleCardClick = (e: React.MouseEvent, handle: string) => {
    // Only navigate if clicking on the card background, not on buttons
    if (
      e.target === e.currentTarget ||
      (e.target as HTMLElement).closest('.card-clickable-area')
    ) {
      router.push(`/product/${handle}`);
    }
  };

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
            <div
              className="group bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:translate-y-[-4px] cursor-pointer"
              onClick={(e) => handleCardClick(e, product.handle)}
            >
              {/* Image Container */}
              <div className="card-clickable-area block relative aspect-square bg-gradient-to-br from-[#f8f9fb] to-white overflow-hidden">
                {product.featuredImage?.url && (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.title}
                    fill
                    loading="lazy"
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                )}
                {hasDiscount && (
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-[#2d0808] to-[#6b1414] text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {Math.round(((compareAtPrice! - price) / compareAtPrice!) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="card-clickable-area">
                  <h3 className="font-display text-lg font-semibold text-[#1a2b4a] mb-3 line-clamp-2 hover:text-[#0a1420] transition-colors">
                    {product.title}
                  </h3>
                </div>

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
                  <button
                    onClick={(e) => handleBuyNow(e, product)}
                    disabled={loadingProduct === product.handle}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-br from-[#cb0c0c] via-[#b91515] to-[#6e1212] text-white font-body font-semibold text-sm rounded-xl shadow-[0_2px_8px_rgba(107,20,20,0.3)] hover:shadow-[0_4px_12px_rgba(107,20,20,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loadingProduct === product.handle ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ShoppingBag className="w-4 h-4" />
                    )}
                    {loadingProduct === product.handle ? "Processing..." : "Buy Now"}
                  </button>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={addingToCart === product.handle}
                    className="p-2.5 bg-gradient-to-br from-[#0a1420] via-[#1a2438] to-[#0f1e35] text-white rounded-xl hover:from-[#152840] hover:to-[#1a2b4a] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-label="Add to cart"
                  >
                    {addingToCart === product.handle ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </Grid.Item>
        );
      })}
    </>
  );
}
