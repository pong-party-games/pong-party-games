import { FAQSection } from 'components/home/faq-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ | Pong Party Games - Common Questions Answered',
    description:
        'Get answers about Pong Party Games, the first patented baseball tailgate game. Learn about 5-minute setup, all-ages gameplay, weather-resistant construction, corporate customization, and shipping.',
    openGraph: {
        type: 'website',
    },
};

export default function FAQPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What makes Pong Party Games perfect for tailgating?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pong Party Games is the first patented baseball-inspired tailgate game. It is portable, compact, and sets up in under 5 minutes with no tools required. Unlike cornhole or ladder toss, it combines baseball strategy with party game fun and works for all ages. The weather-resistant PVC construction handles any outdoor conditions.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I play Pong Party Games indoors and outdoors?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Pong Party Games plays on any surface including grass, asphalt, concrete, and indoor event spaces. The leveling legs with alignment bead system ensure stable play even on uneven surfaces. Its compact footprint means you can play in a parking lot, backyard, game room, or office break room.',
                },
            },
            {
                '@type': 'Question',
                name: 'What age groups can play Pong Party Games?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pong Party Games is designed for all ages, from children as young as 5 to grandparents. The game blends skill and luck, so kids can compete with adults and beginners can beat experienced players. Adults throw from 6 feet and kids from 4 feet, keeping it fair for everyone.',
                },
            },
            {
                '@type': 'Question',
                name: 'How does Pong Party Games compare to cornhole, beer pong, and other tailgate games?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Unlike cornhole (limited to 2-4 players), beer pong (adults only), or ladder toss (heavily skill-based), Pong Party Games is a multiplayer, family-friendly game that keeps entire groups engaged. It has a smaller playing footprint than most lawn games and is the only baseball-themed tailgate game on the market.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is Pong Party Games good for corporate events and team building?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Pong Party Games offers a Corporate Custom Edition ($419.99) with custom branding including company logos, QR codes, team colors, and promotional messaging on 3 panels. Companies like 3Tree Marketing, Allstate, Carlson, and Rebel have used custom games for corporate events, trade shows, and client entertainment.',
                },
            },
            {
                '@type': 'Question',
                name: 'What is included in the box?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Each Pong Party Games set includes all game panels, balls, leveling legs with alignment beads, and a custom compact storage box. Everything needed is included with no additional purchases required. The game requires no batteries, cords, or electricity.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is Pong Party Games weather resistant?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Pong Party Games is built with weather-resistant premium PVC game panels designed for year-round outdoor use. Rain, heat, or cold, the game handles serious outdoor conditions. It is also low-maintenance and built to last for years.',
                },
            },
            {
                '@type': 'Question',
                name: 'Where is Pong Party Games made?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pong Party Games is proudly made in America with American-made parts. The company is based in Downingtown, Pennsylvania. The game design is patented and trademarked in the United States.',
                },
            },
        ],
    };

    return (
        <div className="bg-gradient-to-b from-white via-[#f8f9fb] to-white min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <FAQSection />
        </div>
    );
}
