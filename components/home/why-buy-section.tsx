import { Award, CloudSun, CreditCard, Megaphone, Package, Users } from 'lucide-react';

const features = [
    {
        icon: Users,
        title: 'Perfect for All Ages',
        description: 'Great family outdoor games experience! Ideal for tailgate family games and backyard party games. Everyone has a chance to win in this competitive party game!'
    },
    {
        icon: CloudSun,
        title: 'Indoor & Outdoor Tailgating',
        description: 'One of the most versatile outdoor tailgating games! Perfect for football tailgating games, parking lot tailgating, or backyard parties in any weather.'
    },
    {
        icon: CreditCard,
        title: 'Easy-to-Use Scorecard',
        description: 'Player handheld magnetic scorecard makes this one of the easiest setup games for all ages. Great for teaching kids outdoor games and sports concepts.'
    },
    {
        icon: Package,
        title: 'Portable & Compact Design',
        description: 'Among the most travel-friendly games! This compact tailgate game sets up in minutes. Custom box makes it perfect for portable tailgate games storage.'
    },
    {
        icon: Megaphone,
        title: 'Custom Corporate Games',
        description: 'Available as branded tailgate games! Perfect for corporate tailgate games, corporate party games, and promotional events with your logo.'
    },
    {
        icon: Award,
        title: 'Patented & USA Made',
        description: 'One of the newest tailgate games with a unique patented design. Proudly manufactured in the United States with premium quality materials.'
    }
];

export default function WhyBuySection() {
    return (
        <section className="bg-gradient-to-b from-[#f8f9fb] via-[#f5f5f7] to-white py-16 sm:py-20 md:py-24 lg:py-24 px-4 sm:px-6">
            <div className="max-w-[1280px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-14 md:mb-16">
                    <h2 className="font-display text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-semibold text-[#1a2b4a] mb-3 sm:mb-4">
                        Why Choose Our Tailgate Games
                    </h2>
                    <p className="font-body text-lg text-[#6b7280] max-w-2xl mx-auto">
                        The best outdoor party games for tailgating, family gatherings, and game day activities
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-white via-[#f8f9fb] to-[#f0f2f5] rounded-2xl p-6 sm:p-7 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.16),0_4px_12px_rgba(0,0,0,0.1)] border border-[#e5e7eb]"
                            >
                                {/* Icon Container */}
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#003d99] to-[#0066ff] shadow-[0_4px_16px_rgba(0,61,153,0.3),inset_0_1px_0_rgba(255,255,255,0.3)] flex items-center justify-center mb-5">
                                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-[18px] sm:text-[19px] md:text-[20px] font-semibold text-[#1a2b4a] mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="font-body text-[15px] sm:text-[15.5px] md:text-[16px] leading-relaxed text-[#4a5568]">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
