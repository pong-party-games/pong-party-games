import { Award, CloudSun, CreditCard, Megaphone, Package, Users } from 'lucide-react';

const features = [
    {
        icon: Users,
        title: 'Fun for All Ages',
        description: 'Bring the excitement of baseball to every event with Pong Party Games, one of the most popular family outdoor baseball games for tailgates, backyard parties, family gatherings, travel teams, and corporate events. Easy to play, with a perfect mix of skill and luck that gives everyone a chance to win.'
    },
    {
        icon: CloudSun,
        title: 'Designed for Indoor & Outdoor Fun',
        description: 'Take the party anywhere with one of the most versatile indoor and outdoor tailgating games and family baseball games around. From tailgates to office parties, its weather-resistant construction makes it game time anywhere.'
    },
    {
        icon: CreditCard,
        title: 'Priceless family entertainment',
        description: 'Learn the game of baseball while having a blast with an easy-to-set-up, family–friendly baseball game. No cords, no batteries, and built for endless play. A competitive, family-friendly game where all ages can join in and enjoy the action together.'
    },
    {
        icon: Package,
        title: 'Portable & Compact Design',
        description: 'One of the most travel-friendly tailgate games around. This compact baseball game sets up in minutes with a small playing template, while the custom-designed box makes transport and storage simple wherever you go.'
    },
    {
        icon: Megaphone,
        title: 'Custom Corporate Games',
        description: 'Turn marketing into fun with custom corporate tailgate games.  Showcase your brand, engage clients, potential customers, and drive traffic to your website — all through an interactive, friendly baseball game experience.'
    },
    {
        icon: Award,
        title: 'Patented & Made in the USA',
        description: 'Built with American parts and proudly patented, Pong Party Games is a Made in the USA baseball tailgate game that reflects our commitment to quality and dedication to American craftsmanship. Join us in creating more opportunities for your family, team, and company.'
    }
];

export default function WhyBuySection() {
    return (
        <section className="bg-gradient-to-b from-[#f8f9fb] via-[#f5f5f7] to-white py-8 sm:py-20 md:py-20 lg:py-16 xl:py-18 px-4 sm:px-6">
            <div className="max-w-[1280px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-14 md:mb-16">
                    <h2 className="font-display text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-semibold text-[#1a2b4a] mb-2 sm:mb-4 leading-[1.15] sm:leading-tight">
                        Why Buy Pong Party Games Baseball Edition
                    </h2>
                    <p className="font-body text-lg text-[#6b7280] max-w-2xl mx-auto">
                        The perfect indoor-outdoor game that gets everyone interacting & having fun. The game concept combines skill & luck, making the experience fun for all ages.
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
