import { HeroSection } from 'components/home/hero-section';
import WhyBuySection from 'components/home/why-buy-section';

export const metadata = {
  title: 'Pong Party Games | The Ultimate Baseball Party Game',
  description:
    'Premium handcrafted party games for all ages. Ready in 5 minutes, 2-8 players. Made in USA with quality materials.',
  openGraph: {
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyBuySection />
    </>
  );
}
