'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    {
        question: 'What makes Pong Party Games perfect for tailgating?',
        answer: 'Pong Party Games is one of the best tailgate games available! It\'s portable, compact, and sets up in under 5 minutes - perfect for parking lot tailgating before football games. Unlike cornhole, beer pong, or ladder toss, it combines the excitement of baseball with party game fun. It\'s ideal for all ages and works great as outdoor tailgating games for any sports event.'
    },
    {
        question: 'Can I play Pong Party Games indoors and outdoors?',
        answer: 'Absolutely! This versatile tabletop baseball game works perfectly as both indoor-outdoor baseball entertainment. Use it as a backyard party game during summer BBQs, bring it to stadium tailgate games, or play indoors during winter. It\'s one of the most travel-friendly games you\'ll find for any occasion.'
    },
    {
        question: 'What age groups can play Pong Party Games?',
        answer: 'Pong Party Games is truly an all ages game! Kids outdoor games enthusiasts love it, teens enjoy the competitive party games aspect, and adults appreciate the nostalgic baseball theme. It\'s perfect for family tailgate games, making it one of the best family-friendly tailgate games on the market. From travel baseball games to family outdoor games, everyone can play!'
    },
    {
        question: 'How does it compare to other popular tailgate games?',
        answer: 'While games like cornhole, KanJam, Spikeball, and giant Jenga are great, Pong Party Games offers something unique. It\'s more compact than ladder toss or bocce ball, more engaging than washer toss, and more strategic than beer pong. As one of the newest tailgate games, it combines the best elements of sports-themed party games with easy setup and portability.'
    },
    {
        question: 'Is this good for corporate events and team building?',
        answer: 'Yes! Many companies use Pong Party Games as corporate tailgate games and corporate party games. We offer branded tailgate games with custom logos perfect for promotional events, trade shows, and team building activities. It\'s great for travel baseball games tournaments, travel softball games events, and corporate fun zone games.'
    },
    {
        question: 'What makes it different from other outdoor lawn games?',
        answer: 'Unlike traditional outdoor lawn games that require lots of space, Pong Party Games is a compact tailgate game that needs minimal room. It\'s more engaging than typical portable yard games, combines tabletop family games convenience with outdoor party games excitement, and offers competitive party games action. It\'s perfect for backyard tailgate games without taking up your entire lawn!'
    },
    {
        question: 'Can kids play this at birthday parties or outdoor events?',
        answer: 'Definitely! It\'s one of the best kids tailgating games and kids outdoor games for parties. The easy setup games format means kids can start playing quickly. Perfect for backyard party games, baseball party games themed events, or any family outdoor games gathering. Parents love it as a group party games option that keeps everyone entertained.'
    },
    {
        question: 'Is it suitable for game day activities?',
        answer: 'Perfect for game day! Whether it\'s football tailgating games before the big match or baseball tailgate games at the stadium, Pong Party Games enhances any game day activities. It\'s become one of the best tailgate games for creating pre-game excitement and brings people together for tailgate family games fun.'
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-8 sm:py-24 bg-gradient-to-b from-white via-[#f8f9fb] to-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1000px]">
                <div className="text-center mb-8 sm:mb-16">
                    <h2 className="font-display text-[28px] sm:text-5xl font-semibold text-[#1a2b4a] mb-2 sm:mb-4 tracking-tight leading-[1.15] sm:leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-body text-lg text-[#6b7280] max-w-2xl mx-auto">
                        Everything you need to know about the best tailgate party games and outdoor lawn games
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

                {/* SEO-friendly keyword section */}
                <div className="mt-16 text-center">
                    <p className="font-body text-sm text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
                        <strong className="text-[#1a2b4a]">Popular Searches:</strong> Tailgating games, Outdoor party games,
                        Football tailgating games, Backyard party games, Portable tailgate games, Family outdoor games,
                        Baseball party games, Easy setup games, Compact tailgate games, Best tailgate games,
                        Sports themed party games, All ages games, New tailgate games
                    </p>
                </div>
            </div>
        </section>
    );
}
