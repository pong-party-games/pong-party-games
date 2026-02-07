import { CustomPanelsSection } from 'components/home/custom-panels-section';
import { FAQSection } from 'components/home/faq-section';
import { HeroSection } from 'components/home/hero-section';
import { VideoSection } from 'components/home/video-section';
import WhyBuySection from 'components/home/why-buy-section';

export const metadata = {
  title: 'Pong Party Games | Best Tailgate & Outdoor Party Games',
  description:
    'Premium tailgating games and outdoor party games for all ages. Perfect for baseball tailgating, backyard parties, and family fun. Portable, easy setup, Made in USA. Best outdoor lawn games for game day activities.',
  keywords: 'tailgating games, tailgate party games, outdoor tailgating games, baseball tailgating games, outdoor lawn games, backyard party games, portable tailgate games, family outdoor games, baseball party games',
  openGraph: {
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyBuySection />
      <VideoSection />
      <CustomPanelsSection />
      <FAQSection />
    </>
  );
}
