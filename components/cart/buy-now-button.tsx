"use client";

import clsx from "clsx";
import { buyNow } from "components/cart/actions";
import { Product, ProductVariant } from "lib/shopify/types";
import { Loader2, ShoppingBag } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function BuyNowButton({
    availableForSale,
    selectedVariantId,
}: {
    availableForSale: boolean;
    selectedVariantId: string | undefined;
}) {
    const [isLoading, setIsLoading] = useState(false);
    const buttonClasses =
        "relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#6b1414] via-[#8b1a1a] to-[#6b1414] p-3 sm:p-4 tracking-wide text-white font-body font-bold text-sm sm:text-lg shadow-[0_4px_16px_rgba(107,20,20,0.3)] transition-all duration-300";
    const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";
    const activeClasses = "hover:from-[#7d1818] hover:to-[#5a1010] hover:shadow-[0_8px_24px_rgba(107,20,20,0.4)] hover:translate-y-[-2px]";

    if (!availableForSale) {
        return (
            <button disabled className={clsx(buttonClasses, disabledClasses)}>
                Out Of Stock
            </button>
        );
    }

    if (!selectedVariantId) {
        return (
            <button
                aria-label="Please select an option"
                disabled
                className={clsx(buttonClasses, disabledClasses)}
            >
                <ShoppingBag className="h-5 w-5" />
                Buy Now
            </button>
        );
    }

    return (
        <button
            aria-label="Buy now"
            disabled={isLoading}
            onClick={async () => {
                setIsLoading(true);
                try {
                    await buyNow(selectedVariantId);
                } catch (error) {
                    setIsLoading(false);
                }
            }}
            className={clsx(buttonClasses, isLoading ? disabledClasses : activeClasses)}
        >
            {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
                <ShoppingBag className="h-5 w-5" />
            )}
            {isLoading ? "Processing..." : "Buy Now"}
        </button>
    );
}

export function BuyNow({ product }: { product: Product }) {
    const { variants, availableForSale } = product;
    const searchParams = useSearchParams();

    const variant = variants.find((variant: ProductVariant) =>
        variant.selectedOptions.every(
            (option) => option.value === searchParams.get(option.name.toLowerCase()),
        ),
    );
    const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
    const selectedVariantId = variant?.id || defaultVariantId;

    return (
        <BuyNowButton
            availableForSale={availableForSale}
            selectedVariantId={selectedVariantId}
        />
    );
}
