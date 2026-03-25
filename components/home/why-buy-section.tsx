import { Award, CloudSun, CreditCard, Megaphone, Package, Users } from 'lucide-react';

const features = [
    {
        icon: Users,
        title: 'Fun for All Ages',
        description: 'Pong Party Games is one of the few party games genuinely designed for all ages — from children as young as 5 to grandparents. The game blends skill and luck so that beginners can beat experienced players and kids regularly compete with adults. Perfect for tailgates, backyard parties, family reunions, travel baseball tournaments, and corporate events.'
    },
    {
        icon: CloudSun,
        title: 'Indoor & Outdoor on Any Surface',
        description: 'Plays on grass, asphalt, concrete, or indoors. The weather-resistant premium PVC construction handles rain, heat, and cold for year-round use. Leveling legs with an alignment bead system provide stable play on uneven surfaces. No batteries, cords, or electricity required.'
    },
    {
        icon: CreditCard,
        title: 'Teaches Baseball While Entertaining',
        description: 'The Baseball Edition introduces players to real baseball concepts — innings, outs, singles, doubles, triples, home runs, walks, and base running — through interactive gameplay. A competitive, family-friendly game where learning happens naturally while everyone has fun.'
    },
    {
        icon: Package,
        title: 'Portable & Sets Up in Under 5 Minutes',
        description: 'Tool-free assembly with a compact playing footprint smaller than cornhole, bocce, or ladder toss. The custom-designed storage box makes transport and storage simple. Fits easily in a car trunk, truck bed, or RV for game day anywhere.'
    },
    {
        icon: Megaphone,
        title: 'Corporate Custom Branding Available',
        description: 'The Corporate Custom Edition features your company logo, QR codes, and promotional messaging on 3 customizable panels. Trusted by companies including Allstate, 3Tree Marketing, Carlson, and Rebel for trade shows, corporate events, and client entertainment.'
    },
    {
        icon: Award,
        title: 'Patented & Made in the USA',
        description: 'Pong Party Games is a US-patented and trademarked product handcrafted in Downingtown, Pennsylvania with American-made parts. Built with premium materials for durability that lasts years. Founded by Mike Whelan, a lifelong baseball enthusiast committed to American craftsmanship.'
    }
];

export default function WhyBuySection() {
    return (
        <section className="bg-gradient-to-b from-[#f8f9fb] via-[#f5f5f7] to-white py-8 sm:py-20 md:py-20 lg:py-16 xl:py-18 px-4 sm:px-6">
            <div className="max-w-[1280px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-14 md:mb-16">
                    <h2 className="font-display text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-semibold text-[#1a2b4a] mb-2 sm:mb-4 leading-[1.15] sm:leading-tight">
                        Why Pong Party Games Is the Best Tailgate Game for Families
                    </h2>
                    <p className="font-body text-lg text-[#6b7280] max-w-2xl mx-auto">
                        The only baseball-inspired indoor/outdoor party game that combines skill and luck for all ages. Patented design, weather-resistant construction, and 5-minute setup make it the go-to game for tailgates, parties, and events across America.
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
