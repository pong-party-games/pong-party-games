import { Award, Heart, Target, TrendingUp, Users, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import GroupPhotoImage from '../assets/images/group-photo-with-product.jpeg';
import LopesImage from '../assets/images/lopes.jpg';
import MikeFounderImage from '../assets/images/mike-founder.jpeg';
import MikeWithLopezImage from '../assets/images/mike-with-lopez.png';

export const metadata: Metadata = {
    title: 'About Us | Premium Tailgate & Outdoor Party Games',
    description: 'Learn about Pong Party Games - Premium tailgating games and outdoor party games handcrafted in the USA. Perfect for football tailgating, backyard parties, corporate events, and family outdoor games.',
};

const features = [
    {
        icon: Zap,
        title: 'Easy Setup & Transport',
        description: 'Lightweight and designed for simple assembly, perfect for any venue—backyards, parks, or game rooms.'
    },
    {
        icon: Users,
        title: 'Fun for All Ages',
        description: 'Ideal for family gatherings, parties, or casual get-togethers. Multiple players, everyone can join the fun.'
    },
    {
        icon: Target,
        title: 'Educational Value',
        description: 'Teaches the basic concepts of baseball while providing an entertaining experience.'
    },
    {
        icon: Award,
        title: 'Durable Design',
        description: 'Made from high-quality materials, built to last, promising years of enjoyment.'
    },
    {
        icon: TrendingUp,
        title: 'Versatile Gameplay',
        description: 'Patented design allows for future expansions and different game editions, ensuring ongoing excitement.'
    },
    {
        icon: Heart,
        title: 'Small Playing Footprint',
        description: 'Compact design lets you play anywhere without requiring large spaces.'
    }
];

export default function AboutUsPage() {
    return (
        <div className="bg-gradient-to-b from-[#f8f9fb] via-white to-[#f5f7fa] min-h-screen -mt-[200px]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] text-white py-20 sm:py-20 lg:py-24 shadow-[0_20px_60px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center pt-52 sm:pt-40 md:pt-40 lg:pt-20">
                    <h1 className="font-display text-[48px] sm:text-[58px] md:text-[72px] font-semibold mb-4 sm:mb-5 lg:mb-6">
                        About Us
                    </h1>
                    <p className="font-body text-[20px] sm:text-[22px] leading-relaxed text-gray-300 max-w-[700px] mx-auto">
                        Where passion for baseball meets family fun. Discover the story behind America's newest favorite party game.
                    </p>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">

                {/* Founder Section */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#002b6b] to-[#004499] text-white font-display font-semibold text-[14px] rounded-full shadow-lg">
                                    Created by Mike Whelan
                                </span>
                            </div>
                            <h2 className="font-display text-[36px] sm:text-[42px] font-semibold text-[#1a2b4a] mb-6">
                                Pong Party Games: Baseball Edition
                            </h2>
                            <div className="space-y-4 font-body text-[18px] leading-relaxed text-[#2d3748]">
                                <p>
                                    <strong className="text-[#1a2b4a]">Mike Whelan</strong>, an avid sports fan and lifelong baseball enthusiast, has channeled his passion into creating Pong Party Games. As a dedicated player in a local Senior baseball league and competitor in national tournaments, Mike's love for the game runs deep.
                                </p>
                                <p>
                                    His experience coaching his children and grandchildren in softball and baseball has given him a unique perspective on family sports experiences. After years of attending MLB games, tournaments, and tailgates, Mike recognized a gap: there were few engaging activities for families and kids at these events.
                                </p>
                                <p className="text-[#003d99] font-semibold">
                                    This inspired him to develop a game that captures the spirit of baseball while providing fun for all ages.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] ring-2 ring-gray-200 max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] w-full">
                                <Image
                                    src={MikeFounderImage}
                                    alt="Mike Whelan - Founder of Pong Party Games"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto object-cover scale-125 object-[center_20%]"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* What is Pong Party Games Section */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="font-display text-[36px] sm:text-[42px] font-semibold text-[#1a2b4a] mb-6">
                            What is Pong Party Games?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="space-y-5 font-body text-[18px] leading-relaxed text-[#2d3748]">
                            <p>
                                The Pong Party Game is a new <strong className="text-[#003d99]">indoor/outdoor game for all ages</strong>, providing fun, excitement and a competitive atmosphere. Pong Party Games is easy to set up, disassemble, transport & store.
                            </p>
                            <p>
                                The game offers a <strong className="text-[#003d99]">combination of skill & luck</strong> giving everyone a chance to have fun while being competitive. The game uses a small footprint so you can play anywhere.
                            </p>
                            <p>
                                The first game introduced will be the <strong className="text-[#003d99]">baseball edition</strong>. It will help teach the concept of baseball while having family fun. The game's excellent quality makes it easy to maintain and it will never expire.
                            </p>
                            <p className="text-[19px] font-semibold pt-4 text-[#003d99]">
                                This patented game will have the capabilities to add other games to the game base, making it more versatile & exciting at all family events.
                            </p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                            <Image
                                src={GroupPhotoImage}
                                alt="Game Time Anywhere - Pong Party Games Team"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1420]/60 to-transparent flex items-end p-6 sm:p-8">
                                <div className="text-white">
                                    <h3 className="font-display text-[22px] sm:text-[28px] font-semibold mb-1">
                                        Game Time Anywhere!
                                    </h3>
                                    <p className="font-body text-[14px] sm:text-[16px] text-gray-200">
                                        Bringing families together through America's pastime
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features Grid */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-[36px] sm:text-[42px] font-semibold text-[#1a2b4a] mb-4">
                            Key Features
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-white via-[#f8f9fb] to-[#f0f2f5] rounded-xl p-6 sm:p-7 shadow-[0_8px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_20px_48px_rgba(0,61,153,0.25)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border border-gray-200/50"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#003d99] via-[#0052cc] to-[#0066ff] shadow-[0_8px_20px_rgba(0,61,153,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] flex items-center justify-center mb-5">
                                        <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                                    </div>
                                    <h3 className="font-display text-[20px] font-semibold text-[#1a2b4a] mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="font-body text-[16px] leading-relaxed text-[#2d3748]">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Coach Steve Lopes Section */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="font-display text-[36px] sm:text-[42px] font-semibold text-[#1a2b4a] mb-6">
                            Honorary Figure: Coach Steve Lopes
                        </h2>
                    </div>
                    <div className="max-w-[900px] mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
                            <div className="rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.15)] ring-2 ring-gray-200 h-[400px] sm:h-[450px]">
                                <Image
                                    src={LopesImage}
                                    alt="Coach Steve Lopes"
                                    width={450}
                                    height={450}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.15)] ring-2 ring-gray-200 h-[400px] sm:h-[450px]">
                                <Image
                                    src={MikeWithLopezImage}
                                    alt="Mike Whelan with Coach Steve Lopes"
                                    width={450}
                                    height={450}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="font-body text-[18px] leading-relaxed text-[#2d3748]">
                                <strong className="text-[#1a2b4a]">Coach Steve Lopes</strong> is an honorary figure in our Pong Party Game (PPG) graphics. His love for the game and dedication to coaching & playing at all age levels are truly remarkable. With Pong Party Games, Coach Lopes is having family fun while teaching his grandkids the game of baseball.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Conclusion CTA Section */}
                <div className="bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] rounded-3xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-[0_20px_60px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <div className="max-w-[800px] mx-auto">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#0066ff] to-[#003d99] mb-6 shadow-[0_8px_20px_rgba(0,102,255,0.3)]">
                            <Heart className="w-10 h-10" strokeWidth={2} />
                        </div>
                        <h2 className="font-display text-[36px] sm:text-[46px] font-semibold mb-6">
                            A Celebration of America's Pastime
                        </h2>
                        <p className="font-body text-[18px] sm:text-[20px] leading-relaxed text-gray-300 mb-8">
                            Pong Party Games is more than just a game; it's a celebration of America's pastime that brings families together. With its inviting design and engaging gameplay, it's sure to become a favorite at gatherings, making it <strong className="text-white">"GAME TIME ANYWHERE!"</strong>
                        </p>
                        <p className="font-display text-[24px] sm:text-[28px] font-semibold mb-10 text-[#0066ff]">
                            Hit it out of the park with family fun today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/shop"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#b31b2b] to-[#e63946] text-white font-body font-bold text-[17px] rounded-full hover:from-[#991725] hover:to-[#cc1f33] transition-all duration-300 shadow-[0_8px_20px_rgba(230,57,70,0.4)] hover:shadow-[0_12px_28px_rgba(230,57,70,0.5)] hover:-translate-y-1"
                            >
                                Shop Now
                            </a>
                            <a
                                href="/how-to-play"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-body font-bold text-[17px] rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
                            >
                                Learn How To Play
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
