'use client';

import { Briefcase, PartyPopper, Truck, Users } from 'lucide-react';

const useCases = [
    {
        icon: Truck,
        title: 'Made for Tailgating',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    },
    {
        icon: PartyPopper,
        title: 'Backyard Parties',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    },
    {
        icon: Users,
        title: 'Family Fun',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    },
    {
        icon: Briefcase,
        title: 'Corporate Events',
        gradient: 'from-[#3b9ff3] via-[#4da6ff] to-[#2575B3]'
    }
];

export function UseCasesCards() {
    return (
        <section className="bg-gradient-to-b from-white to-[#f8f9fb] py-4 sm:py-6 md:py-8 px-4 sm:px-6">
            <div className="max-w-[1000px] mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {useCases.map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <div
                                key={index}
                                className="glass-card group relative rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 transition-all duration-500 hover:translate-y-[-4px] overflow-hidden"
                            >
                                {/* Animated Glow Background */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left gap-2 sm:gap-3">
                                    {/* Icon Container with Glow */}
                                    <div
                                        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 flex-shrink-0 rounded-lg bg-gradient-to-br ${useCase.gradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}
                                        style={{
                                            boxShadow: '0 2px 8px rgba(0, 61, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                                        }}
                                    >
                                        <Icon
                                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 text-white transition-transform duration-500 group-hover:scale-110"
                                            strokeWidth={2}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-[#1a2b4a] transition-colors duration-300 group-hover:text-[#0066ff] leading-tight">
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
                    margin: -2px;
                    padding: 2px;
                    background-image: conic-gradient(
                        #b3d9ff 78deg,
                        #99ccff 85deg 95deg,
                        #b3d9ff 102deg 258deg,
                        #a3d2ff 265deg 275deg,
                        #b3d9ff 282deg
                    );
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                }
                
                .glass-card:hover::before {
                    background-image: conic-gradient(
                        #3b9ff3 78deg,
                        #4da6ff 85deg 95deg,
                        #3b9ff3 102deg 258deg,
                        #5eb8ff 265deg 275deg,
                        #3b9ff3 282deg
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
