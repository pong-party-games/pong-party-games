import { Star } from 'lucide-react';
import Image from 'next/image';
import MomCerraImage from '../assets/images/momcerra.webp';

export const metadata = {
    title: 'Reviews | Best Tailgate Games Customer Reviews',
    description: 'Read customer reviews for the best tailgate games and outdoor party games. See why families love our portable tailgating games for football games, backyard parties, and outdoor events.'
};

const reviews = [
    {
        name: 'Jessica P.',
        rating: 5,
        date: 'January 18, 2026',
        text: 'Perfect addition to our tailgate parties! The game is compact, easy to transport, and provides hours of entertainment. Everyone wants to play!',
        verified: true
    },
    {
        name: 'Robert T.',
        rating: 5,
        date: 'January 12, 2026',
        text: 'Bought this for my son\'s baseball team and it\'s been a hit at every tournament. Quality construction and the kids love the baseball theme!',
        verified: true
    },
    {
        name: 'Lisa M.',
        rating: 5,
        date: 'January 8, 2026',
        text: 'Great game for all ages! We played at our family BBQ and everyone enjoyed it. Easy to learn and the quality is excellent.',
        verified: true
    },
    {
        name: 'Mark R.',
        rating: 5,
        date: 'December 30, 2025',
        text: 'This game exceeded expectations! Well-made, fun to play, and perfect for any outdoor event. Highly recommend!',
        verified: true
    },
    {
        name: 'Emily S.',
        rating: 5,
        date: 'December 22, 2025',
        text: 'Love the portability! We take it everywhere - parks, beaches, camping trips. It\'s become a family favorite.',
        verified: true
    },
    {
        name: 'Chris D.',
        rating: 5,
        date: 'December 15, 2025',
        text: 'Outstanding product! The custom box makes storage and transport so easy. Great for keeping the team entertained during downtime.',
        verified: true
    }
];

export default function ReviewsPage() {
    return (
        <div className="bg-gradient-to-b from-[#f8f9fb] via-white to-[#f5f7fa] min-h-screen -mt-[200px]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] text-white py-20 sm:py-20 lg:py-24 shadow-[0_20px_60px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center pt-48 sm:pt-40 md:pt-40 lg:pt-20">
                    <h1 className="font-display text-[48px] sm:text-[58px] md:text-[72px] font-semibold mb-4 sm:mb-5 lg:mb-6">
                        Customer Reviews
                    </h1>
                    <p className="font-body text-[20px] sm:text-[22px] leading-relaxed text-gray-300 max-w-[700px] mx-auto">
                        See what our customers are saying about Pong Party Games
                    </p>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">

                {/* Featured Review - Mom Cerra */}
                <div className="mb-16">
                    <div className="bg-gradient-to-br from-[#1a2438] via-[#0f1e35] to-[#0a1420] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(0,68,153,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-8 lg:gap-12 items-start">
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.8),0_0_40px_rgba(0,68,153,0.3)] ring-4 ring-white/10 w-full max-w-[450px]">
                                    <div className="aspect-[4/3]">
                                        <Image
                                            src={MomCerraImage}
                                            alt="Mom Cerra"
                                            width={450}
                                            height={338}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 fill-[#FFA500] text-[#FFA500]" />
                                        ))}
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-[13px] text-[#4d94ff] font-semibold mt-1">
                                        <span className="w-5 h-5 rounded-full bg-[#4d94ff] flex items-center justify-center text-white text-[11px]">✓</span>
                                        Verified Purchase
                                    </span>
                                </div>
                                <h3 className="font-display text-[28px] sm:text-[32px] font-semibold text-white mb-3">
                                    Mom Cerra
                                </h3>
                                <p className="font-body text-[18px] leading-relaxed text-gray-300 mb-4">
                                    As a busy baseball mom, I always bring Pong Party Games along when we travel to my son's tournaments. With so much downtime between games, it's important to have activities that keep the players engaged without draining their energy. Pong Party Games is the perfect solution, keeping the team focused on baseball while still letting them relax and have fun. The custom travel box makes it incredibly easy to pack, carry, and store, and it only takes minutes to set up between games. It's the ideal way to keep the whole travel team entertained, relaxed, and ready for the next matchup.
                                </p>
                                <p className="font-body text-[15px] text-gray-400">
                                    January 25, 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More Reviews */}
                <div className="mb-12">
                    <h2 className="font-display text-[36px] sm:text-[42px] font-semibold text-[#1a2b4a] mb-8 text-center">
                        More Reviews
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white via-[#f8f9fb] to-[#f0f2f5] rounded-xl p-6 sm:p-7 shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_20px_48px_rgba(0,61,153,0.25)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border border-gray-200/50"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="font-body text-[18px] font-semibold text-[#1a2b4a]">
                                        {review.name}
                                    </h3>
                                    {review.verified && (
                                        <span className="inline-flex items-center gap-1 text-[12px] text-[#003d99] font-semibold mt-1">
                                            <span className="w-4 h-4 rounded-full bg-[#003d99] flex items-center justify-center text-white text-[10px]">✓</span>
                                            Verified Purchase
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-[#FFA500] text-[#FFA500]" />
                                    ))}
                                </div>
                            </div>
                            <p className="font-body text-[16px] text-[#2d3748] leading-relaxed mb-3">
                                {review.text}
                            </p>
                            <p className="font-body text-[14px] text-gray-500">
                                {review.date}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16">
                    <div className="bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] rounded-3xl p-8 sm:p-12 text-center shadow-[0_20px_60px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                        <h2 className="font-display text-[32px] sm:text-[38px] font-semibold text-white mb-4">
                            Love Our Games?
                        </h2>
                        <p className="font-body text-[18px] text-gray-300 mb-8 max-w-[600px] mx-auto">
                            Share your experience with us! Your feedback helps us continue to create amazing party games.
                        </p>
                        <a
                            href="/shop"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#003d99] to-[#0066ff] text-white font-body font-bold text-[17px] rounded-full hover:from-[#002b6b] hover:to-[#004499] transition-all duration-300 shadow-[0_8px_20px_rgba(0,61,153,0.4)] hover:shadow-[0_12px_28px_rgba(0,61,153,0.5)] hover:-translate-y-1"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
