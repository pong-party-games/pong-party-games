'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoImage from '../../app/assets/images/logo.png';

export function BrandLogo() {
    const pathname = usePathname();
    const isHomepage = pathname === '/';

    return (
        <Link
            href="/"
            className="fixed top-5 left-16 z-50 hidden md:flex items-center gap-2"
        >
            <Image
                src={LogoImage}
                alt="Pong Party Games Logo"
                width={60}
                height={60}
                className="rounded-none"
            />
            <div className="flex flex-col leading-tight">
                <span className="text-[var(--color-bright-blue)] font-[family-name:var(--font-family-display)] font-semibold text-base uppercase tracking-tight">
                    PONG
                </span>
                <span className="text-[var(--color-red)] font-[family-name:var(--font-family-display)] font-semibold text-base uppercase tracking-tight">
                    PARTY
                </span>
                <span className={`font-[family-name:var(--font-family-display)] font-semibold text-base uppercase tracking-tight ${isHomepage ? 'text-black' : 'text-white'
                    }`}>
                    GAMES
                </span>
            </div>
        </Link>
    );
}

export function MobileBrandLogo() {
    const pathname = usePathname();
    const isHomepage = pathname === '/';

    return (
        <Link
            href="/"
            className="fixed top-[72px] left-4 z-50 md:hidden flex items-center gap-2"
        >
            <Image
                src={LogoImage}
                alt="Pong Party Games Logo"
                width={40}
                height={40}
                className="rounded-none"
            />
            <div className="flex flex-col leading-tight">
                <span className="text-[var(--color-bright-blue)] font-[family-name:var(--font-family-display)] font-semibold text-sm uppercase tracking-tight">
                    PONG
                </span>
                <span className="text-[var(--color-red)] font-[family-name:var(--font-family-display)] font-semibold text-sm uppercase tracking-tight">
                    PARTY
                </span>
                <span className={`font-[family-name:var(--font-family-display)] font-semibold text-sm uppercase tracking-tight ${isHomepage ? 'text-black' : 'text-white'
                    }`}>
                    GAMES
                </span>
            </div>
        </Link>
    );
}
