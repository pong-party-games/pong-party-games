import WhyUsSection from 'components/home/why-us-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Why Pong Party Games? | Pong Party Games vs Cornhole, Beer Pong & Ladder Toss',
    description:
        'Pong Party Games is the first baseball-inspired indoor/outdoor tailgate game built for all ages. Compared to cornhole (2-player), beer pong (adults only), and ladder toss (skill-heavy), it offers multiplayer fun, 5-minute setup, weather-resistant PVC, and custom branding options.',
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
