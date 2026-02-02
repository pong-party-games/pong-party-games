import FooterMenu from 'components/layout/footer-menu';
import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import LogoImage from '../../app/assets/images/logo.png';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded-sm bg-neutral-200';
  const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <footer className="text-sm text-[var(--color-gray-medium)] bg-white">
      {/* Top Section */}
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-6 md:gap-12 border-t border-[rgba(107,114,128,0.2)] px-6 py-12">
        {/* Logo Section */}
        <div>
          <Link
            className="flex items-center gap-2 text-[var(--color-navy)]"
            href="/"
          >
            <Image
              src={LogoImage}
              alt="Pong Party Games"
              width={40}
              height={40}
              className="rounded-none"
            />
            <span className="font-[family-name:var(--font-family-display)] font-semibold uppercase tracking-tight">
              Pong Party Games
            </span>
          </Link>
        </div>

        {/* Footer Menu */}
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-[rgba(107,114,128,0.2)] py-6">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-1 px-4">
          <p className="font-[family-name:var(--font-family-body)] text-sm text-[var(--color-gray-medium)]">
            &copy; {copyrightDate} Pong Party Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
