'use client';

import { Gift, Home, Play, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/how-to-play', icon: Play, label: 'How To Play' },
    { path: '/about-us', icon: Star, label: 'About Us' },
    { path: '/reviews', icon: Star, label: 'Reviews' },
    { path: '/custom-games', icon: Gift, label: 'Custom Games' },
    { path: '/shop', icon: ShoppingCart, label: 'Shop' }
];

export function FloatingNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-5 right-16 z-50 hidden md:flex items-center gap-0 bg-[var(--color-navy)] rounded-full px-1.5 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            {routes.map((route) => {
                const Icon = route.icon;
                const isActive = pathname === route.path;

                return (
                    <Link
                        key={route.path}
                        href={route.path}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-[20px] font-[family-name:var(--font-family-display)] font-semibold text-[15px] transition-all duration-[var(--duration-normal)] ease-[cubic-bezier(0,0,0.2,1)] ${isActive
                                ? 'bg-[var(--color-white)] text-[var(--color-navy)]'
                                : 'text-[var(--color-white)] hover:bg-white/10'
                            }`}
                    >
                        <Icon size={20} strokeWidth={2} />
                        <span>{route.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}

export function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center gap-0 bg-[var(--color-navy)] px-4 py-3 overflow-x-auto shadow-[0_2px_8px_rgba(0,0,0,0.1)] scrollbar-hide">
            {routes.map((route) => {
                const Icon = route.icon;
                const isActive = pathname === route.path;

                return (
                    <Link
                        key={route.path}
                        href={route.path}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-[20px] font-[family-name:var(--font-family-display)] font-semibold text-[14px] whitespace-nowrap transition-all duration-[var(--duration-normal)] ease-[cubic-bezier(0,0,0.2,1)] ${isActive
                                ? 'bg-[var(--color-white)] text-[var(--color-navy)]'
                                : 'text-[var(--color-white)] hover:bg-white/10'
                            }`}
                    >
                        <Icon size={20} strokeWidth={2} />
                        <span>{route.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}
