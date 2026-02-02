import { Award, CloudSun, CreditCard, Megaphone, Package, Users } from 'lucide-react';

const features = [
    {
        icon: Users,
        title: 'All ages can play',
        description: 'Great family bonding experience while playing a fun & competitive game of skill and luck. Everyone has a chance to win!'
    },
    {
        icon: CloudSun,
        title: 'Indoor & outdoor use',
        description: 'No limitations on where your event may be. Made to handle any weather and takes up little space.'
    },
    {
        icon: CreditCard,
        title: 'Magnetic scorecard',
        description: 'Player handheld magnetic scorecard makes game scoring easy for all players and helps teach the game concept.'
    },
    {
        icon: Package,
        title: 'Easy setup & storage',
        description: 'Set up takes minutes and a custom box makes it easy for transportation and storage.'
    },
    {
        icon: Megaphone,
        title: 'Custom advertising',
        description: 'The game can be customized to promote your company, promotion, or services.'
    },
    {
        icon: Award,
        title: 'Patented & USA made',
        description: 'Unique concept has a Patent and manufacturing is in the United States.'
    }
];

export default function WhyBuySection() {
    return (
        <section className="bg-[#f5f5f7] py-16 sm:py-20 md:py-24 lg:py-24 px-4 sm:px-6">
            <div className="max-w-[1280px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-14 md:mb-16">
                    <h2 className="font-display text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-semibold text-[#1a2b4a] mb-3 sm:mb-4">
                        Why Buy Pong Party Games
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 sm:p-7 md:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-250 hover:translate-y-[-4px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
                            >
                                {/* Icon Container */}
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#1a2b4a] flex items-center justify-center mb-5">
                                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-[18px] sm:text-[19px] md:text-[20px] font-semibold text-[#1a2b4a] mb-3">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="font-body text-[15px] sm:text-[15.5px] md:text-[16px] leading-relaxed text-[#2d3748]">
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
