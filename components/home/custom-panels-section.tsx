'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Import images
import ThreeTreeBack from '../../app/assets/images/custom-panels/3tree-backpanel.jpeg';
import ThreeTreeSide from '../../app/assets/images/custom-panels/3tree-side.jpeg';
import ThreeTreeSidePanel from '../../app/assets/images/custom-panels/3tree-sidepanel.jpeg';
import AllstateBack from '../../app/assets/images/custom-panels/allstate-back.jpg';
import AllstateSide from '../../app/assets/images/custom-panels/allstate-side.jpeg';
import CarlsonBack from '../../app/assets/images/custom-panels/carlson-back.jpeg';
import CarlsonSide from '../../app/assets/images/custom-panels/carlson-side.jpeg';
import RebelBack from '../../app/assets/images/custom-panels/rebel-back.jpeg';
import RebelFront from '../../app/assets/images/custom-panels/rebel-front.jpeg';
import RebelSide from '../../app/assets/images/custom-panels/rebel-side.jpeg';

interface CustomPanel {
    src: any;
    alt: string;
    company: string;
    side: string;
}

const customPanels: CustomPanel[] = [
    {
        src: ThreeTreeBack,
        alt: '3Tree Marketing Back Panel',
        company: '3Tree Marketing',
        side: 'Back Panel'
    },
    {
        src: ThreeTreeSide,
        alt: '3Tree Marketing Side Panel',
        company: '3Tree Marketing',
        side: 'Side Panel'
    },
    {
        src: ThreeTreeSidePanel,
        alt: '3Tree Marketing Side Panel',
        company: '3Tree Marketing',
        side: 'Side Panel'
    },
    {
        src: AllstateBack,
        alt: 'Allstate Back Panel',
        company: 'Allstate',
        side: 'Back Panel'
    },
    {
        src: AllstateSide,
        alt: 'Allstate Side Panel',
        company: 'Allstate',
        side: 'Side Panel'
    },
    {
        src: CarlsonBack,
        alt: 'Carlson Back Panel',
        company: 'Carlson',
        side: 'Back Panel'
    },
    {
        src: CarlsonSide,
        alt: 'Carlson Side Panel',
        company: 'Carlson',
        side: 'Side Panel'
    },
    {
        src: RebelBack,
        alt: 'Rebel Back Panel',
        company: 'Rebel',
        side: 'Back Panel'
    },
    {
        src: RebelFront,
        alt: 'Rebel Front Panel',
        company: 'Rebel',
        side: 'Front Panel'
    },
    {
        src: RebelSide,
        alt: 'Rebel Side Panel',
        company: 'Rebel',
        side: 'Side Panel'
    }
];

export function CustomPanelsSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="py-8 sm:py-14 lg:py-16 bg-gradient-to-b from-white via-[#f8f9fb] to-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-6 sm:mb-10">
                    <h2 className="font-display text-[32px] sm:text-[52px] font-semibold text-[#1a2b4a] mb-3 sm:mb-4 leading-[1.15] sm:leading-tight">
                        Showcase Your Brand &amp; Customize Your Game Panels.
                    </h2>
                    <p className="font-body text-[16px] sm:text-[20px] text-[#4a5568] max-w-[800px] mx-auto leading-relaxed mb-2">
                        <strong>Stand out. Drive traffic. Be remembered.</strong>
                    </p>
                    <p className="font-body text-[16px] sm:text-[18px] text-[#4a5568] max-w-[900px] mx-auto leading-relaxed">
                        Create an interactive branded event experience that increases dwell time, generates qualified leads, and delivers memorable client engagement through a professional, fun, and fully customized corporate game.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
                    {customPanels.map((panel, index) => (
                        <div
                            key={index}
                            className="relative break-inside-avoid group cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <Image
                                    src={panel.src}
                                    alt={panel.alt}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                />

                                {/* Overlay with company info on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="font-display text-[20px] font-bold mb-1">
                                            {panel.company}
                                        </h3>
                                        <p className="font-body text-[14px] text-white/90">
                                            {panel.side}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 sm:mt-12 bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] rounded-3xl p-6 sm:p-12 text-center shadow-[0_20px_60px_rgba(10,20,32,0.3)]">
                    <h3 className="font-display text-[24px] sm:text-[36px] font-bold text-white mb-2 sm:mb-3 leading-[1.2] sm:leading-tight">
                        Let's Get On the Field with Your Custom Pong Party Game
                    </h3>
                    <p className="font-body text-[18px] sm:text-[20px] text-white/90 mb-6 font-semibold">
                        It's simple & fast:
                    </p>

                    <div className="bg-white/10 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 border border-white/20 max-w-[700px] mx-auto">
                        <div className="text-left space-y-3 sm:space-y-4">
                            <p className="font-body text-[15px] sm:text-[17px] text-white/90 leading-relaxed">
                                <span className="font-bold text-white">1.</span> Email us at{' '}
                                <a href="mailto:info@pongpartygames.com?subject=Custom%20Pong%20Party%20Game%20Inquiry&body=Hi%20Pong%20Party%20Games%20Team%2C%0D%0A%0D%0AI%20am%20interested%20in%20creating%20a%20custom%20pong%20party%20game.%0D%0A%0D%0AName%3A%20%0D%0ACompany%3A%20%0D%0AContact%20Number%3A%20%0D%0A%0D%0APlease%20contact%20me%20to%20discuss%20design%20options%20and%20pricing.%0D%0A%0D%0AThank%20you!" className="text-[#ff4757] font-semibold underline hover:text-white transition-colors">
                                    info@pongpartygames.com
                                </a>
                                {' '}with your name, company, and contact number.
                            </p>
                            <p className="font-body text-[15px] sm:text-[17px] text-white/90 leading-relaxed">
                                <span className="font-bold text-white">2.</span> We will contact you & help you design your Custom Pong Party Game for <span className="font-bold text-[#ff4757]">GRAND SLAM</span> results.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="mailto:info@pongpartygames.com?subject=Custom%20Pong%20Party%20Game%20Inquiry&body=Hi%20Pong%20Party%20Games%20Team%2C%0D%0A%0D%0AI%20am%20interested%20in%20creating%20a%20custom%20pong%20party%20game.%0D%0A%0D%0AName%3A%20%0D%0ACompany%3A%20%0D%0AContact%20Number%3A%20%0D%0A%0D%0APlease%20contact%20me%20to%20discuss%20design%20options%20and%20pricing.%0D%0A%0D%0AThank%20you!"
                            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-br from-[#cb0c0c] via-[#b91515] to-[#6e1212] text-white font-body font-bold text-[16px] sm:text-[18px] rounded-full shadow-[0_8px_20px_rgba(107,20,20,0.5),0_4px_12px_rgba(107,20,20,0.3)] hover:shadow-[0_12px_32px_rgba(107,20,20,0.6),0_6px_16px_rgba(107,20,20,0.4)] transition-all duration-300 hover:-translate-y-1 transform"
                        >
                            Email Us Now
                        </Link>
                        <Link
                            href="/custom-games/#panels"
                            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-white/10 text-white font-body font-bold text-[16px] sm:text-[18px] rounded-full transition-all duration-300 border-2 border-white/20 hover:bg-white/20 hover:border-white/30"
                        >
                            View Panel Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
