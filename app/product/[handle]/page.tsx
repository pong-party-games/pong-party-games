import { AddToCart } from "components/cart/add-to-cart";
import { BuyNow } from "components/cart/buy-now-button";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import { getProduct, getProductRecommendations } from "lib/shopify";
import { Shield, Star } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
        images: [
          {
            url,
            width,
            height,
            alt,
          },
        ],
      }
      : null,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const price = parseFloat(product.priceRange.maxVariantPrice.amount);
  const compareAtPrice = product.compareAtPriceRange?.maxVariantPrice?.amount
    ? parseFloat(product.compareAtPriceRange.maxVariantPrice.amount)
    : null;
  const hasDiscount = compareAtPrice && compareAtPrice > price;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

      <div className="bg-gradient-to-b from-white via-[#f8f9fb] to-white min-h-screen pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm font-body text-[#6b7280]">
            <Link href="/" className="hover:text-[#1a2b4a]">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#1a2b4a]">Shop</Link>
            <span>/</span>
            <span className="text-[#1a2b4a]">{product.title}</span>
          </nav>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                {product.featuredImage?.url && (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.title}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                )}
                {hasDiscount && (
                  <div className="absolute top-6 right-6 bg-gradient-to-br from-[#2d0808] to-[#6b1414] text-white px-4 py-2 rounded-full text-base font-bold shadow-lg">
                    Save {Math.round(((compareAtPrice! - price) / compareAtPrice!) * 100)}%
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.slice(0, 4).map((image, index) => (
                    <div key={index} className="relative aspect-square bg-white rounded-xl overflow-hidden border border-[#e5e7eb] hover:border-[#1a2b4a] cursor-pointer transition-colors">
                      <Image
                        src={image.url}
                        alt={`${product.title} - Image ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1a2b4a] mb-4">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <span className="font-body text-sm text-[#6b7280]">(128 reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-5xl font-bold text-[#1a2b4a]">
                    ${price.toFixed(2)}
                  </span>
                  {hasDiscount && (
                    <>
                      <span className="font-body text-2xl text-[#6b7280] line-through">
                        ${compareAtPrice!.toFixed(2)}
                      </span>
                      <span className="font-body text-lg font-semibold text-[#6b1414]">
                        You Save ${(compareAtPrice! - price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <div className="mb-8">
                  <p className="font-body text-lg text-[#4a5568] leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-white to-[#f8f9fb] rounded-xl border border-[#e5e7eb]">
                  <Shield className="w-5 h-5 text-[#1a2b4a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-semibold text-sm text-[#1a2b4a]">Quality</p>
                    <p className="font-body text-xs text-[#6b7280]">Guaranteed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-white to-[#f8f9fb] rounded-xl border border-[#e5e7eb]">
                  <Star className="w-5 h-5 text-[#1a2b4a] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-semibold text-sm text-[#1a2b4a]">USA Made</p>
                    <p className="font-body text-xs text-[#6b7280]">Premium quality</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="sticky bottom-6 bg-white rounded-2xl border border-[#e5e7eb] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)] space-y-3">
                <Suspense fallback={<div className="h-12 bg-[#f8f9fb] rounded-xl animate-pulse" />}>
                  <BuyNow product={product} />
                </Suspense>
                <Suspense fallback={<div className="h-12 bg-[#f8f9fb] rounded-xl animate-pulse" />}>
                  <AddToCart product={product} />
                </Suspense>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <Suspense fallback={null}>
            <RelatedProducts id={product.id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="mt-20">
      <h2 className="font-display text-3xl font-bold text-[#1a2b4a] mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.slice(0, 4).map((product) => {
          const price = parseFloat(product.priceRange.maxVariantPrice.amount);
          return (
            <Link
              key={product.handle}
              href={`/product/${product.handle}`}
              className="group bg-white rounded-xl overflow-hidden border border-[#e5e7eb] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="relative aspect-square bg-gradient-to-br from-[#f8f9fb] to-white">
                {product.featuredImage?.url && (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-body text-base font-semibold text-[#1a2b4a] mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <p className="font-body text-xl font-bold text-[#1a2b4a]">
                  ${price.toFixed(2)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
