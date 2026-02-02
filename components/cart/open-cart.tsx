'use client';

import clsx from "clsx";
import { ShoppingBag } from "lucide-react";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className={clsx(
        "relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a1420] via-[#1a2438] to-[#0f1e35] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25),0_0_40px_rgba(26,43,74,0.15)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] cursor-pointer border border-white/10",
        className
      )}>
        <ShoppingBag className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />

        {quantity && quantity > 0 ? (
          <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-br from-[#6b1414] to-[#4a0e0e] border-2 border-white shadow-lg flex items-center justify-center">
            <span className="text-[11px] font-bold text-white">
              {quantity > 9 ? '9+' : quantity}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
