import { FAQSection } from 'components/home/faq-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Pong Party Games - Frequently Asked Questions',
  description:
    'Find answers to frequently asked questions about Pong Party Games. Learn about setup, gameplay, shipping, customization options, and more for the best tailgate and outdoor party games.',
  keywords: 'tailgating games FAQ, outdoor party games questions, backyard party games help, portable tailgate games info, family outdoor games FAQ',
  openGraph: {
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f8f9fb] to-white min-h-screen pt-16">
      <FAQSection />
    </div>
  );
}
