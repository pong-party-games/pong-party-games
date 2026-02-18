import WhyUsSection from 'components/home/why-us-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Pong Party Games? | Not Just Another Tailgate Game',
    description:
        'Discover why Pong Party Games beats every other tailgate game. The first baseball-inspired indoor/outdoor game designed for all ages. Fast setup, portable, weather-resistant, and built for multiplayer fun.',
    keywords: 'why pong party games, best tailgate game, baseball tailgate game, portable tailgate games, multiplayer tailgate game, weather resistant outdoor games, family tailgate game, corporate branding games, vs cornhole, vs beer pong',
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
