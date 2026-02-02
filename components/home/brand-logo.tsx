'use client';

import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../../app/assets/images/logo.png';

export function BrandLogo() {
    return (
        <Link
            href="/"
            className="hidden md:flex items-center gap-2 pt-5 px-16"
        >
            <Image
                src={LogoImage}
                alt="Pong Party Games Logo"
                width={60}
                height={60}
                className="rounded-none"
            />
        </Link>
    );
}

export function MobileBrandLogo() {
    return null;
}
