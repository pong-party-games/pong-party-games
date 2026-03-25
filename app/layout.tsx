import { CartProvider } from 'components/cart/cart-context';
import CartModal from 'components/cart/modal';
import { BrandLogo, MobileBrandLogo } from 'components/home/brand-logo';
import { FloatingNav, MobileNav } from 'components/home/floating-nav';
import Footer from 'components/layout/footer';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { baseUrl } from 'lib/utils';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

const { SITE_NAME } = process.env;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Don't await the fetch, pass the Promise to the context provider
  // Wrap in a promise that catches errors to prevent layout crashes
  const cart = getCart().catch((error) => {
    console.error('Failed to load cart:', error);
    return undefined;
  });

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pong Party Games',
    url: 'https://pongpartygames.com',
    logo: 'https://pongpartygames.com/android-chrome-512x512.png',
    description:
      'Pong Party Games is the first patented baseball-inspired indoor/outdoor party game designed for all ages, handcrafted in the USA with American-made parts.',
    foundingDate: '2023',
    founder: {
      '@type': 'Person',
      name: 'Mike Whelan',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '131 Wallace Ave, Unit 8',
      addressLocality: 'Downingtown',
      addressRegion: 'PA',
      postalCode: '19335',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-484-356-4377',
      contactType: 'customer service',
      email: 'info@pongpartygames.com',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://facebook.com/pongpartygames',
      'https://instagram.com/pongpartygames',
      'https://tiktok.com/@pongpartygames',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pong Party Games',
    url: 'https://pongpartygames.com',
    description:
      'The first patented baseball-inspired tailgate and party game. Made in America for all ages.',
    publisher: {
      '@type': 'Organization',
      name: 'Pong Party Games',
    },
  };

  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white text-[var(--color-charcoal)] selection:bg-[var(--color-bright-blue)] selection:text-white">
        <CartProvider cartPromise={cart}>
          <header className="w-full bg-white">
            <BrandLogo />
            <MobileBrandLogo />
          </header>
          <FloatingNav />
          <MobileNav />
          <CartModal />
          <main>
            {children}
            <Toaster closeButton />
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
