'use client';

import { Clock, Minimize2, Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import BaseballImage from '../../app/assets/images/pong-party-game-ball-image.png';
import HeroProductImage from '../../app/assets/images/pong-party-game-hero.png';
import UsaFlagImage from '../../app/assets/images/usa-flag.png';

export function HeroSection() {
    return (
        <section className="relative px-4 sm:px-6 lg:px-16 pt-[60px] sm:pt-[60px] md:pt-[80px] lg:pt-[20px] pb-[15px] sm:pb-[20px] md:pb-[15px] lg:pb-[20px] bg-[var(--color-white)] flex items-center">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 sm:gap-3 md:gap-2 lg:gap-4 xl:gap-12 items-center max-w-[1400px] mx-auto w-full">
                {/* Mobile: Title & Subtitle */}
                <div className="flex flex-col gap-2 sm:gap-1.5 md:gap-1.5 w-full lg:hidden items-center text-center">
                    <MadeInUSABadge />
                    <Headline />
                    <Subheadline />
                    <FeatureRow />
                </div>

                {/* Product Image */}
                <div className="flex items-center justify-center relative w-full lg:order-2">
                    <div className="relative">
                        <BaseballAnimation />
                        <Image
                            src={HeroProductImage}
                            alt="Pong Party Games Product"
                            width={1792}
                            height={2400}
                            priority
                            fetchPriority="high"
                            className="w-full h-auto max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[480px] animate-[float_4s_ease-in-out_infinite] [filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.2))_drop-shadow(0_10px_15px_rgba(0,0,0,0.1))] sm:[filter:drop-shadow(0_30px_60px_rgba(0,0,0,0.25))_drop-shadow(0_10px_20px_rgba(0,0,0,0.15))]"
                        />
                        <TrademarkPatentBadge />
                    </div>
                </div>

                {/* Desktop: Left Column - Content / Mobile: Price Below Image */}
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2 lg:gap-2.5 xl:gap-6 w-full lg:order-1 items-center lg:items-start text-center lg:text-left">
                    {/* Desktop only: Badge, Title, Subtitle, Features */}
                    <div className="hidden lg:flex lg:flex-col lg:gap-2 xl:gap-6">
                        <MadeInUSABadge />
                        <Headline />
                        <Subheadline />
                        <FeatureRow />
                    </div>

                    {/* All screens: Pricing & CTA */}
                    <PricingBoxes />
                    <CTAButtons />
                    <FreeShippingText />
                </div>
            </div>
        </section>
    );
}

function MadeInUSABadge() {
    return (
        <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 md:py-1 lg:py-1.5 bg-[var(--color-white)] border-[2px] sm:border-[2.5px] lg:border-[3px] border-[var(--color-navy)] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[24px] font-[family-name:var(--font-family-body)] text-[11px] sm:text-[13px] md:text-[15px] lg:text-[18px] xl:text-[20px] font-bold text-[var(--color-navy)] uppercase tracking-[0.05em] w-fit">
            <Image
                src={UsaFlagImage}
                alt="USA Flag"
                width={47}
                height={25}
                loading="lazy"
                className="rounded-none w-[20px] sm:w-[24px] md:w-[28px] lg:w-[34px] xl:w-[38px] h-auto"
            />
            <span>Made in USA</span>
        </div>
    );
}

function TrademarkPatentBadge() {
    return (
        <div className="absolute -right-1 sm:-right-2 lg:-right-8 top-[78%] -translate-y-1/2 inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 bg-gradient-to-br from-[var(--color-bright-blue)] to-[#0052a3] rounded-full shadow-[0_4px_16px_rgba(0,102,204,0.4)] w-fit z-20">
            {/* Ribbon Seal Icon */}
            <div className="relative flex items-center justify-center">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                >
                    {/* Seal Badge Circle */}
                    <circle
                        cx="24"
                        cy="20"
                        r="14"
                        fill="#0066CC"
                        stroke="white"
                        strokeWidth="2.5"
                    />
                    {/* Seal Scalloped Edge */}
                    <g>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
                            const angle = (i * 30 * Math.PI) / 180;
                            const x = 24 + Math.cos(angle) * 14;
                            const y = 20 + Math.sin(angle) * 14;
                            return (
                                <circle
                                    key={i}
                                    cx={x}
                                    cy={y}
                                    r="2.5"
                                    fill="#0066CC"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                            );
                        })}
                    </g>
                    {/* Check Mark */}
                    <path
                        d="M19 20L22 23L29 16"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Ribbon Tails */}
                    <path
                        d="M18 30L14 45L18 42L22 45L18 30Z"
                        fill="#0066CC"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M30 30L26 45L30 42L34 45L30 30Z"
                        fill="#0066CC"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-0.5">
                <span className="font-[family-name:var(--font-family-body)] text-white text-[8px] sm:text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.08em] opacity-95">
                    Trademarked &amp;
                </span>
                <span className="font-[family-name:var(--font-family-body)] text-white text-[11px] sm:text-[13px] md:text-[15px] lg:text-[16px] font-extrabold uppercase tracking-[0.05em] leading-[1]">
                    Patented
                </span>
            </div>
        </div>
    );
}

function Headline() {
    return (
        <h1 className="font-[family-name:var(--font-family-display)] text-[36px] sm:text-[42px] md:text-[52px] lg:text-[72px] font-semibold leading-[1] sm:leading-[1.05] text-[var(--color-navy)] tracking-[-0.01em] max-w-[700px]">
            Pong Party Games
        </h1>
    );
}

function Subheadline() {
    return (
        <p className="font-[family-name:var(--font-family-body)] text-[16px] sm:text-[18px] lg:text-[22px] font-bold leading-[1.5] text-[var(--color-charcoal)]">
            Fun for ALL AGES and the perfect game for family entertainment
        </p>
    );
}

function FeatureRow() {
    const features = [
        { icon: Clock, text: 'Designed for quick setup' },
        { icon: Package, text: 'Easy to transport' },
        { icon: Minimize2, text: 'Compact footprint' }
    ];

    return (
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 my-1 sm:my-0 justify-center lg:justify-start">
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                        <Icon size={20} strokeWidth={2} className="text-[var(--color-navy)] flex-shrink-0 sm:w-6 sm:h-6" />
                        <span className="font-[family-name:var(--font-family-body)] text-[14px] sm:text-[16px] lg:text-[17px] font-semibold text-[var(--color-charcoal)]">
                            {feature.text}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

function PricingBoxes() {
    return (
        <div className="flex flex-row gap-3 sm:gap-4 my-2 sm:my-1 lg:my-2 justify-center lg:justify-start">
            {/* WAS Price Box */}
            <div className="relative flex flex-col gap-1 px-4 sm:px-5 py-3 sm:py-3.5 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-[12px] sm:rounded-[16px] border border-[rgba(26,43,74,0.12)] shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] transition-transform duration-[var(--duration-normal)] hover:translate-y-[-2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[rgba(26,43,74,0.1)] before:to-transparent">
                <span className="text-[10px] sm:text-[12px] font-bold text-[#6c757d] uppercase tracking-[0.12em]">Was</span>
                <span className="text-[20px] sm:text-[24px] font-semibold text-[#6c757d] line-through opacity-70">$479.95</span>
            </div>

            {/* NOW Price Box */}
            <div className="relative flex flex-col gap-1 px-5 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-br from-[var(--color-bright-blue)] to-[#0052a3] rounded-[12px] sm:rounded-[16px] border border-[rgba(255,255,255,0.15)] shadow-[0_6px_20px_rgba(0,102,204,0.4),0_2px_8px_rgba(0,102,204,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-[var(--duration-normal)] hover:translate-y-[-3px] hover:scale-[1.02] hover:shadow-[0_10px_28px_rgba(0,102,204,0.5)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.4)] before:to-transparent">
                <span className="text-[10px] sm:text-[12px] font-bold text-white uppercase tracking-[0.12em] [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">Now</span>
                <span className="text-[28px] sm:text-[36px] font-extrabold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.2)] tracking-[-0.02em]">$395.99</span>
            </div>
        </div>
    );
}

function CTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-1 sm:mt-1 lg:mt-1 w-full sm:w-auto">
            <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 sm:px-9 py-3 sm:py-4 bg-gradient-to-br from-[#cb0c0c] via-[#b91515] to-[#6e1212] text-white font-[family-name:var(--font-family-body)] text-[14px] sm:text-[17px] font-bold rounded-[32px] transition-all duration-[var(--duration-normal)] shadow-[0_8px_20px_rgba(107,20,20,0.5),0_4px_12px_rgba(107,20,20,0.3),inset_0_2px_0_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(107,20,20,0.6),0_6px_16px_rgba(107,20,20,0.4),0_0_40px_rgba(107,20,20,0.3),inset_0_2px_0_rgba(255,255,255,0.2)] hover:translate-y-[-4px] hover:scale-[1.02] relative before:absolute before:inset-0 before:rounded-[32px] before:bg-gradient-to-t before:from-transparent before:to-white/10 before:pointer-events-none"
            >
                Buy Now
            </Link>
            <Link
                href="/custom-games"
                className="inline-flex items-center justify-center px-6 sm:px-9 py-3 sm:py-4 bg-transparent text-[var(--color-navy)] font-[family-name:var(--font-family-body)] text-[14px] sm:text-[17px] font-bold border-2 border-[var(--color-navy)] rounded-[32px] transition-all duration-[var(--duration-normal)] hover:bg-[var(--color-navy)] hover:text-[var(--color-white)] hover:translate-y-[-3px] hover:shadow-[0_6px_16px_rgba(26,43,74,0.25)]"
            >
                Customize Game
            </Link>
        </div>
    );
}

function FreeShippingText() {
    return (
        <p className="font-[family-name:var(--font-family-body)] text-[13px] sm:text-[15px] lg:text-[17px] font-medium text-[var(--color-charcoal)] mt-2 sm:mt-3 lg:mt-4">
            <strong className="font-bold text-[var(--color-navy)]">Premium Quality</strong> — Weather-resistant construction for year-round use
        </p>
    );
}

function BaseballAnimation() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [pathData, setPathData] = useState({
        path: '',
        ballPos: { x: 0, y: 0 },
        pathLength: 0
    });
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    // Configuration
    const config = {
        startX: 0,       // Start left side
        startY: 0.1,       // Start top
        endX: 0.45,         // End at exact center (product center)
        endY: 0.4,         // End at exact center (product center)
        curveHeight: -0.25, // Negative = upward arc
        maxScroll: 400     // Pixels to scroll for full animation
    };

    const calculatePath = () => {
        if (!containerRef.current) return;

        // Get container dimensions
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Convert relative positions to absolute coordinates
        const startX = width * config.startX;
        const startY = height * config.startY;
        const endX = width * config.endX;
        const endY = height * config.endY;

        // Calculate control point for parabolic curve
        const midX = (startX + endX) / 2;
        const midY = Math.min(startY, endY) + (height * config.curveHeight);

        // Create SVG path (Quadratic Bezier curve)
        const pathString = `M ${startX} ${startY} Q ${midX} ${midY}, ${endX} ${endY}`;

        // Update path first to get accurate length
        if (pathRef.current) {
            pathRef.current.setAttribute('d', pathString);
        }

        // Get path length from SVG element
        let pathLength = 0;
        let ballX = startX;
        let ballY = startY;

        if (pathRef.current) {
            pathLength = pathRef.current.getTotalLength();

            // Use getPointAtLength to get exact position along the path
            // This ensures ball is at the exact endpoint of the visible trail
            const pointAlongPath = pathRef.current.getPointAtLength(scrollProgress * pathLength);
            ballX = pointAlongPath.x;
            ballY = pointAlongPath.y;
        }

        setPathData({
            path: pathString,
            ballPos: { x: ballX, y: ballY },
            pathLength
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const progress = Math.min(scrollY / config.maxScroll, 1);
            setScrollProgress(progress);
        };

        const handleResize = () => {
            calculatePath();
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Initial calculation after a short delay to ensure DOM is ready
        setTimeout(calculatePath, 100);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Recalculate path when scroll progress changes
    useEffect(() => {
        calculatePath();
    }, [scrollProgress]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-visible z-10 p-4">
            {/* SVG Trail */}
            <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                    <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 0.7 }} />
                        <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: '#FF4444', stopOpacity: 0.9 }} />
                    </linearGradient>
                </defs>
                <path
                    ref={pathRef}
                    d={pathData.path}
                    stroke="url(#pathGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    opacity={0.8}
                    strokeDasharray={`${(1 - scrollProgress) * pathData.pathLength} ${pathData.pathLength}`}
                    strokeDashoffset={-scrollProgress * pathData.pathLength}
                />
            </svg>

            {/* Baseball */}
            <div
                className="absolute will-change-transform"
                style={{
                    left: `${pathData.ballPos.x}px`,
                    top: `${pathData.ballPos.y}px`,
                    transform: `translate(-50%, -50%) scale(${1 - scrollProgress * 0.3}) rotate(${scrollProgress * 720}deg)`,
                    filter: `drop-shadow(0 ${2 + scrollProgress * 4}px ${4 + scrollProgress * 6}px rgba(0,0,0,${0.15 + scrollProgress * 0.1}))`,
                    zIndex: scrollProgress > 0.8 ? 1 : 100
                }}
            >
                <Image
                    src={BaseballImage}
                    alt="Baseball"
                    width={50}
                    height={50}
                    loading="lazy"
                    className="rounded-none"
                />
            </div>
        </div>
    );
}
