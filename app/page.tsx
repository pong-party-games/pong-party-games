import { CustomPanelsSection } from 'components/home/custom-panels-section';
import { HeroSection } from 'components/home/hero-section';
import { UseCasesCards } from 'components/home/use-cases-cards';
import { VideoSection } from 'components/home/video-section';
import WhyBuySection from 'components/home/why-buy-section';

export const metadata = {
  title: 'Pong Party Games | The First Patented Baseball Tailgate Game | Made in USA',
  description:
    'Pong Party Games is the first patented baseball-inspired indoor/outdoor party game designed for all ages. Handcrafted in the USA, it combines skill and luck for tailgates, backyard parties, corporate events, and family gatherings. Sets up in under 5 minutes. Rated 5/5 stars.',
  openGraph: {
    type: 'website',
    title: 'Pong Party Games | The First Patented Baseball Tailgate Game',
    description:
      'The first patented baseball-inspired tailgate game made in America. Fun for all ages, sets up in 5 minutes, plays on any surface. Starting at $319.99.',
  },
};

export default function HomePage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Pong Party Games: Baseball Edition',
    description:
      'The first patented baseball-inspired indoor/outdoor party game designed for all ages. Handcrafted in the USA with American-made parts. Combines skill and luck for tailgates, backyard parties, corporate events, and family gatherings.',
    brand: {
      '@type': 'Brand',
      name: 'Pong Party Games',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Pong Party Games',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressRegion: 'PA',
        addressLocality: 'Downingtown',
      },
    },
    countryOfOrigin: {
      '@type': 'Country',
      name: 'United States',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Baseball Edition',
        price: '319.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://pongpartygames.com/product/pong-party-game-baseball-1',
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        name: 'Corporate Custom Edition',
        price: '419.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://pongpartygames.com/product/pong-party-game-corporate-custom',
        priceValidUntil: '2026-12-31',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '7',
      reviewCount: '7',
    },
    category: 'Outdoor Games & Activities',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Setup Time', value: 'Under 5 minutes' },
      { '@type': 'PropertyValue', name: 'Players', value: '2-4 (1v1 or 2v2)' },
      { '@type': 'PropertyValue', name: 'Suitable Ages', value: 'All ages (5+)' },
      { '@type': 'PropertyValue', name: 'Material', value: 'Weather-resistant premium PVC' },
      { '@type': 'PropertyValue', name: 'Power Required', value: 'None - no batteries or cords' },
      { '@type': 'PropertyValue', name: 'Patent Status', value: 'Patented and Trademarked' },
      { '@type': 'PropertyValue', name: 'Country of Origin', value: 'Made in USA' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <HeroSection />
      <UseCasesCards />
      <WhyBuySection />
      <VideoSection />
      <CustomPanelsSection />
    </>
  );
}
