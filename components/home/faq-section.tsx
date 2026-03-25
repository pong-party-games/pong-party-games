'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: 'What makes Pong Party Games perfect for tailgating?',
        answer: 'Pong Party Games is the first patented baseball-inspired tailgate game on the market. It sets up in under 5 minutes with no tools, fits in a compact custom storage box, and plays on any surface including parking lots, grass, and asphalt. Unlike cornhole or ladder toss which limit play to a few people, Pong Party Games keeps entire groups engaged with multiplayer 2v2 team play.'
    },
    {
        question: 'Can I play Pong Party Games indoors and outdoors?',
        answer: 'Yes. Pong Party Games is designed to play on virtually any surface including grass, asphalt, concrete, and indoor event spaces. The weather-resistant PVC panels handle rain, heat, and cold for year-round outdoor use, while the compact playing footprint works equally well in game rooms, office break rooms, and event halls. Leveling legs with an alignment bead system ensure stable play on uneven surfaces.'
    },
    {
        question: 'What age groups can play Pong Party Games?',
        answer: 'Pong Party Games is designed for all ages, from children as young as 5 to grandparents. The game balances skill and luck so that kids can compete with adults and beginners can beat experienced players. Adults throw from 6 feet and kids throw from 4 feet, keeping gameplay fair and competitive for everyone. This makes it one of the few party games that genuinely works for multi-generational family gatherings.'
    },
    {
        question: 'How does Pong Party Games compare to cornhole, beer pong, and other tailgate games?',
        answer: 'Pong Party Games fills a gap that existing tailgate games leave open. Cornhole limits play to a few people at a time. Beer pong is adults-only. Ladder toss is heavily skill-based, excluding beginners. Pong Party Games is the only baseball-themed alternative that combines multiplayer team play, all-ages accessibility, compact portability, and a skill-plus-luck format where anyone can win.'
    },
    {
        question: 'Is Pong Party Games good for corporate events and team building?',
        answer: 'Yes. The Corporate Custom Edition ($419.99) includes custom branding with your company logo, QR codes, team colors, and promotional messaging across 3 game panels. Companies including 3Tree Marketing, Allstate, Carlson, and Rebel have used custom Pong Party Games for trade shows, corporate retreats, client entertainment, and brand activations. The interactive format increases dwell time and generates qualified leads at events.'
    },
    {
        question: 'What makes it different from other outdoor lawn games?',
        answer: 'Pong Party Games has a compact playing footprint that requires far less space than bocce ball, KanJam, or Spikeball. It is the only outdoor party game modeled after baseball, combining innings, scoring, and strategy into a tabletop format. It requires no batteries, cords, or electricity, and the patented design is built to last for years with weather-resistant premium PVC construction. It is proudly made in America with American parts.'
    },
    {
        question: 'Can kids play this at birthday parties or outdoor events?',
        answer: 'Absolutely. The simple throw-and-score mechanics mean kids can learn the game in minutes. The baseball theme teaches basic concepts of the sport while providing entertainment. Parents consistently report that Pong Party Games keeps children engaged longer than most party activities, and the skill-plus-luck format means kids regularly beat adults, keeping everyone motivated to play.'
    },
    {
        question: 'Where is Pong Party Games made, and is it patented?',
        answer: 'Pong Party Games is proudly handcrafted in America using American-made parts. The game design is both patented and trademarked in the United States. The company is based in Downingtown, Pennsylvania, and was founded by Mike Whelan, a lifelong baseball enthusiast and active Senior Baseball League player.'
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="pt-24 sm:pt-0 pb-6 sm:pb-12 bg-gradient-to-b from-white via-[#f8f9fb] to-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1000px]">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="font-display text-[28px] sm:text-5xl font-semibold text-[#1a2b4a] mb-2 sm:mb-4 tracking-tight leading-[1.15] sm:leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-body text-lg text-[#6b7280] max-w-2xl mx-auto mb-4">
                        Everything you need to know about the best tailgate party games and outdoor lawn games
                    </p>
                    <p className="font-body text-[15px] text-[#4a5568]">
                        For queries related to refunds, please visit our{' '}
                        <a href="/refund-policy" className="text-[#0066cc] font-semibold hover:underline">
                            Refund & Return Policy
                        </a>
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-[#f8f9fb] transition-colors"
                            >
                                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1a2b4a] pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-[#1a2b4a] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="px-6 sm:px-8 pb-6 pt-2">
                                    <p className="font-body text-base sm:text-lg leading-relaxed text-[#4a5568]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary for AI citability */}
                <div className="mt-16 text-center">
                    <p className="font-body text-sm text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
                        <strong className="text-[#1a2b4a]">About Pong Party Games:</strong> Pong Party Games is the first patented baseball-inspired indoor/outdoor party game, handcrafted in Downingtown, PA with American-made parts. It sets up in under 5 minutes, plays on any surface, and is designed for all ages from 5 to 85. Available in a Standard Baseball Edition ($319.99) and a Corporate Custom Edition ($419.99) with branded panels. Learn more at{' '}
                        <a href="https://pongpartygames.com" className="text-[#0066cc] font-semibold hover:underline">pongpartygames.com</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
