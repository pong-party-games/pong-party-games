'use client';

import { Clock, Flag, Hammer, Minimize2, Package, Users } from 'lucide-react';

const useCases = [
    {
        icon: Users,
        title: 'Family Fun – All Ages',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    },
    {
        icon: Clock,
        title: 'Designed for quick setup',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    },
    {
        icon: Package,
        title: 'Easy to transport',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    },
    {
        icon: Minimize2,
        title: 'Compact footprint',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    },
    {
        icon: Hammer,
        title: 'Durable construction',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    },
    {
        icon: Flag,
        title: 'American Parts',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    }
];

export function UseCasesCards() {
    return (
        <section className="bg-gradient-to-b from-white to-[#f8f9fb] py-4 sm:py-5 md:py-6 px-4 sm:px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <div
                                key={index}
                                className="glass-card group relative rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-3.5 transition-all duration-500 hover:translate-y-[-4px] overflow-hidden"
                            >
                                {/* Animated Glow Background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-row items-center gap-2 sm:gap-3">
                                    {/* Icon Container with Glow */}
                                    <div
                                        className={`w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 rounded-lg bg-gradient-to-br ${useCase.gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}
                                        style={{
                                            boxShadow: '0 2px 8px rgba(0, 61, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                                        }}
                                    >
                                        <Icon
                                            className="w-5 h-5 sm:w-5 sm:h-5 text-white transition-transform duration-500 group-hover:scale-110"
                                            strokeWidth={2}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-semibold text-[#1a2b4a] transition-colors duration-300 group-hover:text-[#0066ff] leading-tight">
                                        {useCase.title}
                                    </h3>
                                </div>

                                {/* Animated Shine Effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shine-effect"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <style jsx>{`
                .glass-card {
                    position: relative;
                    backdrop-filter: blur(2px);
                    background: rgba(255, 255, 255, 0.7);
                    box-shadow: 
                        0 4px 16px rgba(59, 159, 243, 0.15),
                        0 2px 8px rgba(77, 166, 255, 0.1),
                        0 0 20px rgba(94, 184, 255, 0.08),
                        inset 0 1px 0 rgba(255, 255, 255, 0.8);
                }
                
                .glass-card:hover {
                    box-shadow: 
                        0 8px 32px rgba(59, 159, 243, 0.25),
                        0 4px 16px rgba(77, 166, 255, 0.2),
                        0 0 40px rgba(94, 184, 255, 0.15),
                        inset 0 1px 0 rgba(255, 255, 255, 0.9);
                }
                
                .glass-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    margin: -1px;
                    padding: 1px;
                    background-image: linear-gradient(
                        to bottom,
                        rgba(200, 210, 220, 0.3),
                        rgba(180, 190, 200, 0.2)
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                }
                
                .glass-card:hover::before {
                    background-image: linear-gradient(
                        to bottom,
                        rgba(59, 159, 243, 0.3),
                        rgba(77, 166, 255, 0.2)
                    );
                }
                
                .shine-effect {
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    animation: shine 2s infinite;
                }
                
                @keyframes shine {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    );
}
