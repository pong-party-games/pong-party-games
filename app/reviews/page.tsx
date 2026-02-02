import { Star } from 'lucide-react';

export const metadata = {
    title: 'Reviews | Pong Party Games',
    description: 'See what our customers are saying about Pong Party Games.'
};

const reviews = [
    {
        name: 'Sarah M.',
        rating: 5,
        date: 'January 15, 2026',
        text: 'Absolutely love this game! We played it at our family reunion and everyone from age 8 to 80 had a blast. The quality is outstanding and setup was super easy.',
        verified: true
    },
    {
        name: 'Mike D.',
        rating: 5,
        date: 'January 10, 2026',
        text: 'Best party game purchase I\'ve made! The craftsmanship is top-notch and it\'s been the highlight of every gathering. Highly recommend!',
        verified: true
    },
    {
        name: 'Jennifer L.',
        rating: 5,
        date: 'December 28, 2025',
        text: 'Got this for my husband as a gift and it was a huge hit! The game is well-made and the instructions were clear. Worth every penny.',
        verified: true
    },
    {
        name: 'Tom R.',
        rating: 5,
        date: 'December 20, 2025',
        text: 'Great quality, fast shipping, and endless fun. We use it at every backyard BBQ. The kids and adults equally enjoy playing!',
        verified: true
    },
    {
        name: 'Amanda K.',
        rating: 5,
        date: 'December 15, 2025',
        text: 'This game exceeded my expectations! Beautifully crafted and incredibly fun. It\'s become a staple at all our parties.',
        verified: true
    },
    {
        name: 'David P.',
        rating: 5,
        date: 'December 5, 2025',
        text: 'Outstanding product! The build quality is impressive and it\'s so much fun to play. Customer service was also excellent when I had questions.',
        verified: true
    }
];

export default function ReviewsPage() {
    return (
        <div className="min-h-screen pt-24 md:pt-20 px-4 md:px-16 pb-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <h1 className="font-[family-name:var(--font-family-display)] text-[48px] md:text-[36px] font-semibold text-[var(--color-navy)] mb-4">
                        Customer Reviews
                    </h1>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-[#FFA500] text-[#FFA500]" />
                            ))}
                        </div>
                        <span className="font-[family-name:var(--font-family-body)] text-[18px] font-semibold text-[var(--color-charcoal)]">
                            5.0 out of 5
                        </span>
                        <span className="font-[family-name:var(--font-family-body)] text-[16px] text-[var(--color-gray-medium)]">
                            ({reviews.length} reviews)
                        </span>
                    </div>
                    <p className="font-[family-name:var(--font-family-body)] text-[18px] text-[var(--color-charcoal)]">
                        See what our customers are saying about Pong Party Games.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[16px] p-6 border border-[rgba(26,43,74,0.12)] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-normal)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:translate-y-[-4px]"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="font-[family-name:var(--font-family-body)] text-[17px] font-semibold text-[var(--color-navy)]">
                                        {review.name}
                                    </h3>
                                    {review.verified && (
                                        <span className="inline-flex items-center gap-1 text-[12px] text-[var(--color-bright-blue)] font-medium mt-1">
                                            <span className="w-4 h-4 rounded-full bg-[var(--color-bright-blue)] flex items-center justify-center text-white text-[10px]">✓</span>
                                            Verified Purchase
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#FFA500] text-[#FFA500]" />
                                    ))}
                                </div>
                            </div>
                            <p className="font-[family-name:var(--font-family-body)] text-[15px] text-[var(--color-charcoal)] leading-relaxed mb-3">
                                {review.text}
                            </p>
                            <p className="font-[family-name:var(--font-family-body)] text-[13px] text-[var(--color-gray-medium)]">
                                {review.date}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="bg-[var(--color-light-gray)] rounded-[16px] p-8 max-w-2xl mx-auto">
                        <h2 className="font-[family-name:var(--font-family-display)] text-[30px] font-semibold text-[var(--color-navy)] mb-4">
                            Love Our Games?
                        </h2>
                        <p className="font-[family-name:var(--font-family-body)] text-[18px] text-[var(--color-charcoal)] mb-6">
                            Share your experience with us! Your feedback helps us continue to create amazing party games.
                        </p>
                        <button className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-bright-blue)] text-white font-[family-name:var(--font-family-body)] text-[17px] font-bold rounded-[32px] transition-all duration-[var(--duration-normal)] shadow-[0_4px_12px_rgba(0,102,204,0.3)] hover:bg-[#0052a3] hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(0,102,204,0.4)]">
                            Write a Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
