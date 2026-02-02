'use client';

import { Star as StarIcon, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import BaseballImage from '../../app/assets/images/pong-party-game-ball-image.png';
import HeroProductImage from '../../app/assets/images/pongpartygame_heroproduct.png';
import UsaFlagImage from '../../app/assets/images/usa-flag.png';

export function HeroSection() {
    return (
        <section className="relative px-4 sm:px-6 lg:px-16 pt-[140px] sm:pt-[160px] lg:pt-[50px] pb-[30px] bg-[var(--color-white)] min-h-screen flex items-center">
            <BaseballAnimation />
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-[1400px] mx-auto w-full">
                {/* Mobile: Title & Subtitle */}
                <div className="flex flex-col gap-4 w-full lg:hidden items-center text-center">
                    <MadeInUSABadge />
                    <Headline />
                    <Subheadline />
                    <FeatureRow />
                </div>

                {/* Product Image */}
                <div className="flex items-center justify-center relative w-full lg:order-2">
                    <Image
                        src={HeroProductImage}
                        alt="Pong Party Games Product"
                        width={1792}
                        height={2400}
                        priority
                        className="w-full h-auto max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] animate-[float_4s_ease-in-out_infinite] [filter:drop-shadow(0_20px_40px_rgba(0,0,0,0.2))_drop-shadow(0_10px_15px_rgba(0,0,0,0.1))] sm:[filter:drop-shadow(0_30px_60px_rgba(0,0,0,0.25))_drop-shadow(0_10px_20px_rgba(0,0,0,0.15))]"
                    />
                </div>

                {/* Desktop: Left Column - Content / Mobile: Price Below Image */}
                <div className="flex flex-col gap-4 sm:gap-6 w-full lg:order-1 items-center lg:items-start text-center lg:text-left">
                    {/* Desktop only: Badge, Title, Subtitle, Features */}
                    <div className="hidden lg:flex lg:flex-col lg:gap-6">
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-white)] border-[2.5px] border-[var(--color-navy)] rounded-[20px] font-[family-name:var(--font-family-body)] text-[11px] sm:text-[13px] font-bold text-[var(--color-navy)] uppercase tracking-[0.05em] w-fit mb-2">
            <Image
                src={UsaFlagImage}
                alt="USA Flag"
                width={20}
                height={20}
                className="rounded-none sm:w-6 sm:h-6"
            />
            <span>Made in USA</span>
        </div>
    );
}

function Headline() {
    return (
        <h1 className="font-[family-name:var(--font-family-display)] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[72px] font-semibold leading-[1.05] text-[var(--color-navy)] tracking-[-0.01em] max-w-[700px]">
            The Ultimate Baseball Party Game
        </h1>
    );
}

function Subheadline() {
    return (
        <p className="font-[family-name:var(--font-family-body)] text-[16px] sm:text-[18px] lg:text-[22px] font-bold leading-[1.5] text-[var(--color-charcoal)]">
            All Ages can play!
        </p>
    );
}

function FeatureRow() {
    const features = [
        { icon: Zap, text: 'Ready in 5 Minutes' },
        { icon: Users, text: '2-8 Players' },
        { icon: StarIcon, text: 'Premium Quality' }
    ];

    return (
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 my-2 justify-center lg:justify-start">
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
        <div className="flex flex-row gap-3 sm:gap-4 my-4 justify-center lg:justify-start">
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
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto">
            <Link
                href="https://ah2s1r-3i.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 bg-[var(--color-red)] text-[var(--color-white)] font-[family-name:var(--font-family-body)] text-[15px] sm:text-[17px] font-bold rounded-[32px] transition-all duration-[var(--duration-normal)] shadow-[0_4px_12px_rgba(230,57,70,0.3)] hover:bg-[#d62839] hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(230,57,70,0.4)]"
            >
                Buy Now
            </Link>
            <Link
                href="/custom-games"
                className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 bg-transparent text-[var(--color-navy)] font-[family-name:var(--font-family-body)] text-[15px] sm:text-[17px] font-bold border-2 border-[var(--color-navy)] rounded-[32px] transition-all duration-[var(--duration-normal)] hover:bg-[var(--color-navy)] hover:text-[var(--color-white)] hover:translate-y-[-3px] hover:shadow-[0_6px_16px_rgba(26,43,74,0.25)]"
            >
                Customize Game
            </Link>
        </div>
    );
}

function FreeShippingText() {
    return (
        <p className="font-[family-name:var(--font-family-body)] text-[13px] sm:text-[15px] lg:text-[17px] font-medium text-[var(--color-charcoal)] mt-4">
            <strong className="font-bold text-[var(--color-navy)]">Handcrafted Quality</strong> ensured on all products
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
        startX: 0.85,      // Start top-right (85% from left)
        startY: 0.15,      // 15% from top
        endX: 0.5,         // End at center (50% from left)
        endY: 0.4,         // 40% from top
        curveHeight: -0.3, // Negative = upward arc
        maxScroll: 200     // Pixels to scroll for full animation
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

        // Calculate ball position using Quadratic Bezier formula
        const t = scrollProgress;
        const ballX = Math.pow(1 - t, 2) * startX +
            2 * (1 - t) * t * midX +
            Math.pow(t, 2) * endX;
        const ballY = Math.pow(1 - t, 2) * startY +
            2 * (1 - t) * t * midY +
            Math.pow(t, 2) * endY;

        // Get path length from SVG element
        let pathLength = 0;
        if (pathRef.current) {
            pathLength = pathRef.current.getTotalLength();
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
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-10">
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
                    transform: `translate(-50%, -50%) scale(${1 - scrollProgress * 0.4}) rotate(${scrollProgress * 720}deg)`,
                    filter: `drop-shadow(0 ${4 + scrollProgress * 8}px ${8 + scrollProgress * 12}px rgba(0,0,0,${0.3 + scrollProgress * 0.2}))`,
                    zIndex: scrollProgress > 0.8 ? 1 : 100
                }}
            >
                <Image
                    src={BaseballImage}
                    alt="Baseball"
                    width={50}
                    height={50}
                    className="rounded-none"
                />
            </div>
        </div>
    );
}
