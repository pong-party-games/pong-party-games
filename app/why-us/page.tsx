import WhyUsSection from 'components/home/why-us-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Us | Pong Party Games - Top-Rated Tailgate Game',
    description:
        'Discover what makes Pong Party Games the first indoor/outdoor baseball tailgate game for all ages. Built for family fun, portability, all-weather durability, and corporate events.',
    keywords: 'why pong party games, best tailgate game, baseball tailgate game, indoor outdoor party game, family tailgate game, corporate tailgate game, portable tailgate game',
    openGraph: {
        type: 'website',
    },
};

export default function WhyUsPage() {
    return (
        <div className="bg-gradient-to-b from-white via-[#f8f9fb] to-white min-h-screen">
            <WhyUsSection />
        </div>
    );
}
