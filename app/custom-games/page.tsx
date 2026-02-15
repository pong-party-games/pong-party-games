'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CustomFieldPanel from '../assets/images/custom-left-and-right.png';
import CustomScoreboard from '../assets/images/custom-stadium.png';

// Import custom panel images
import ThreeTreeBack from '../assets/images/custom-panels/3tree-backpanel.jpeg';
import ThreeTreeSide from '../assets/images/custom-panels/3tree-side.jpeg';
import ThreeTreeSidePanel from '../assets/images/custom-panels/3tree-sidepanel.jpeg';
import AllstateBack from '../assets/images/custom-panels/allstate-back.jpg';
import AllstateSide from '../assets/images/custom-panels/allstate-side.jpeg';
import CarlsonBack from '../assets/images/custom-panels/carlson-back.jpeg';
import CarlsonSide from '../assets/images/custom-panels/carlson-side.jpeg';
import RebelBack from '../assets/images/custom-panels/rebel-back.jpeg';
import RebelFront from '../assets/images/custom-panels/rebel-front.jpeg';
import RebelSide from '../assets/images/custom-panels/rebel-side.jpeg';

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

export default function CustomGamesPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div className="bg-gradient-to-b from-[#f8f9fb] via-white to-[#f5f7fa] min-h-screen -mt-[200px]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] text-white py-20 sm:py-20 lg:py-24 shadow-[0_20px_60px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center pt-48 sm:pt-40 md:pt-40 lg:pt-20">
                    <h1 className="font-display text-[48px] sm:text-[58px] md:text-[72px] font-semibold mb-4 sm:mb-5 lg:mb-6">
                        Custom Pong Party Games
                    </h1>
                    <p className="font-body text-[20px] sm:text-[22px] leading-relaxed text-gray-300 max-w-[800px] mx-auto">
                        Fully personalized with your company or team name, logo, and colors — the ultimate centerpiece for corporate events, team building, and unforgettable company celebrations.
                    </p>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#f8f9fb] to-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">

                        <div className="font-body text-lg text-[#4a5568] leading-relaxed space-y-4 text-left">
                            <p>
                                We can customize your Pong Party Game with your Company Logo, QR Code, Mission Statement or Promotional information. Taking the game to Vendor show, company functions or simply personal use is a great way to have fun with customers, friends & family members while advertising your company.
                            </p>
                            <p>
                                You will have 3 panels to customize. The back panels on the 1st base & 3rd base side and the back panel on the Scoreboard. We also put your logo in the VIP box on the 3rd base side/field level. The Custom Pong Party Game is new & exciting way to draw people to play or watch. Now tell them about your company and let them join in.
                            </p>
                            <p className="font-semibold text-[#1a2b4a]">
                                See the sample of 3Tree Marketing, an advertising company in Wisconsin who was our first Corporate Custom Game Customer.
                            </p>
                        </div>
                    </div>

                    {/* Customization Showcase */}
                    <div id="panels" className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto scroll-mt-24">
                        {/* Custom Field Panel Card */}
                        <div className="bg-gradient-to-br from-[#1a2438] via-[#0f1e35] to-[#0a1420] rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/10">
                            <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden border border-white/20 shadow-lg">
                                <Image
                                    src={CustomFieldPanel}
                                    alt="Custom Field Panel showing team branding customization"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-3">
                                Custom Field – Left & Right Side Panel
                            </h3>
                            <p className="font-body text-base text-white/80 leading-relaxed">
                                Your information will be on the Left & Right Side Panels as seen above.
                            </p>
                            <p className="font-body text-base text-white/90 leading-relaxed mt-2 font-semibold">
                                Printing Space: 18" W x 7" H
                            </p>
                        </div>

                        {/* Custom Scoreboard Card */}
                        <div className="bg-gradient-to-br from-[#1a2438] via-[#0f1e35] to-[#0a1420] rounded-2xl p-8 shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/10">
                            <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden border border-white/20 shadow-lg">
                                <Image
                                    src={CustomScoreboard}
                                    alt="Custom Scoreboard with personalized branding"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="font-display text-2xl font-bold text-white mb-3">
                                Customized Stadium Scoreboard Back
                            </h3>
                            <p className="font-body text-base text-white/80 leading-relaxed">
                                Your information will be displayed on the stadium scoreboard back panel.
                            </p>
                            <p className="font-body text-base text-white/90 leading-relaxed mt-2 font-semibold">
                                Printing Space: 19" W x 17" H
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sample Customer Section */}
            <div className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a2b4a] mb-6">
                                Custom Creations Gallery
                            </h2>
                            <p className="font-body text-lg text-[#4a5568] max-w-3xl mx-auto">
                                See how our customers have transformed their Pong Party Games with custom branding.
                                Hover over each image to see company details.
                            </p>
                        </div>

                        {/* Masonry Grid */}
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-12">
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
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                        {/* Testimonial Card */}
                        <div className="bg-gradient-to-br from-white via-[#f8f9fb] to-[#f0f2f5] rounded-2xl p-8 sm:p-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#e5e7eb]">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#003d99] to-[#0066ff] flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white shadow-lg">
                                    3T
                                </div>
                                <div>
                                    <h3 className="font-display text-2xl font-bold text-[#1a2b4a] mb-2">
                                        3Tree Marketing
                                    </h3>
                                    <p className="font-body text-base text-[#6b7280]">
                                        Corporate Event • Team Building
                                    </p>
                                </div>
                            </div>
                            <p className="font-body text-lg text-[#4a5568] leading-relaxed mb-6">
                                "We ordered custom Pong Party Games for our annual company retreat, featuring our logo and team colors. The games were a massive hit and created amazing memories. The quality and attention to detail exceeded our expectations!"
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 bg-white rounded-full font-body text-sm font-semibold text-[#003d99] border border-[#e5e7eb]">
                                    Custom Logo
                                </span>
                                <span className="px-4 py-2 bg-white rounded-full font-body text-sm font-semibold text-[#003d99] border border-[#e5e7eb]">
                                    Team Colors
                                </span>
                                <span className="px-4 py-2 bg-white rounded-full font-body text-sm font-semibold text-[#003d99] border border-[#e5e7eb]">
                                    Bulk Order
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-[#1a2438] via-[#0f1e35] to-[#0a1420] scroll-mt-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
                            Let's Get On the Field with Your Custom Pong Party Game
                        </h2>
                        <p className="font-body text-2xl text-white/90 mb-10 leading-relaxed font-semibold">
                            It's simple & fast:
                        </p>

                        <div className="bg-white/10 rounded-2xl p-8 mb-8 border border-white/20">
                            <div className="text-left space-y-4">
                                <p className="font-body text-lg text-white/90 leading-relaxed">
                                    <span className="font-bold text-white">1.</span> Email us at{' '}
                                    <a href="mailto:info@pongpartygames.com" className="text-[#ff4757] font-semibold underline hover:text-white transition-colors">
                                        info@pongpartygames.com
                                    </a>
                                    {' '}with your name, company, and contact number.
                                </p>
                                <p className="font-body text-lg text-white/90 leading-relaxed">
                                    <span className="font-bold text-white">2.</span> We will contact you & help you design your Custom Pong Party Game for <span className="font-bold text-[#ff4757]">GRAND SLAM</span> results.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="mailto:info@pongpartygames.com"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#e63946] text-white font-body text-lg font-bold rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(230,57,70,0.3)] hover:bg-[#d62839] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(230,57,70,0.4)]"
                            >
                                Email Us Now
                            </Link>
                            <Link
                                href="/shop"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-body text-lg font-bold rounded-full transition-all duration-300 border-2 border-white/20 hover:bg-white/20 hover:border-white/30"
                            >
                                View Standard Games
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
