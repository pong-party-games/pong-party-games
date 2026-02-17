'use client';

import {
  Award,
  Baby,
  CloudSun,
  Megaphone,
  Package,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  {
    id: 'family-fun',
    icon: Baby,
    emoji: '\u26be',
    title: 'Built for Family Fun & Interactive Entertainment',
    color: 'from-[#003d99] to-[#0066ff]',
    features: [
      {
        icon: Users,
        text: 'All ages can play \u2013 Get everyone on the field and create a fun, family bonding tailgate experience'
      },
      {
        icon: Target,
        text: 'Skill + luck gameplay \u2013 Everyone has a chance to win, making it one of the most inclusive and fun tailgate party games'
      },
      {
        icon: Sparkles,
        text: 'Multiplayer action \u2013 No waiting around \u2014 the whole group plays together'
      },
      {
        icon: Trophy,
        text: 'Fun & educational \u2013 Learn and understand the game of baseball while you play'
      },
      {
        icon: Zap,
        text: 'No cords or batteries necessary \u2013 100% Game Time Anywhere'
      }
    ]
  },
  {
    id: 'tailgating',
    icon: Package,
    emoji: '\ud83c\udfe8',
    title: 'Designed for Tailgating & Travel',
    color: 'from-[#0052a3] to-[#0080e6]',
    features: [
      {
        icon: Zap,
        text: 'Quick, tool-free assembly \u2013 Fast setup and breakdown for game-day convenience'
      },
      {
        icon: Package,
        text: 'Custom compact game box \u2013 A truly portable tailgate game that fits in your car, truck, or RV'
      },
      {
        icon: Target,
        text: 'Small playing footprint \u2013 Perfect for parking lot tailgates, stadium tailgating, and indoor setups using minimal space'
      },
      {
        icon: Sparkles,
        text: 'Leveling legs with alignment bead \u2013 Play on grass, asphalt, concrete, or any uneven tailgating surface'
      }
    ]
  },
  {
    id: 'durability',
    icon: CloudSun,
    emoji: '\ud83d\udee1\ufe0f',
    title: 'Built Tough for Every Tailgate Season',
    color: 'from-[#004db3] to-[#0073e6]',
    features: [
      {
        icon: Award,
        text: 'Premium PVC game panels \u2013 Weather-resistant for year-round outdoor use'
      },
      {
        icon: Trophy,
        text: 'High-quality craftsmanship \u2013 Built to handle serious tailgating conditions with confidence'
      }
    ]
  },
  {
    id: 'events',
    icon: Megaphone,
    emoji: '\ud83c\udfaf',
    title: 'Perfect for Fans, Families & Corporate Events',
    color: 'from-[#003380] to-[#0066cc]',
    features: [
      {
        icon: Megaphone,
        text: 'Custom branding available \u2013 Add your company logo, team name, or promotional message'
      },
      {
        icon: Users,
        text: 'Ideal for client entertainment & team building'
      },
      {
        icon: Baby,
        text: 'A family-friendly tailgate game for all ages'
      },
      {
        icon: Sparkles,
        text: 'A unique way to advertise your business while people have fun'
      }
    ]
  }
];

const topRatedReasons = [
  'First baseball-inspired indoor/outdoor tailgate game',
  'Fast setup & compact storage',
  'Multiplayer gameplay for group entertainment',
  'Plays on any surface',
  'Durable in all weather conditions',
  'Fully customizable for teams, brands & events'
];

export default function WhyUsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="bg-gradient-to-b from-[#f8f9fb] via-white to-[#f8f9fb] py-10 sm:py-20 px-4 sm:px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block font-display text-[13px] sm:text-[14px] font-semibold text-[#0066cc] bg-[#0066cc]/10 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-[26px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#1a2b4a] mb-4 leading-[1.15] sm:leading-tight">
            What Makes Pong Party Games Unique
          </h2>
          <p className="font-body text-[16px] sm:text-lg text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
            The first indoor/outdoor baseball tailgate game designed for all ages and skill levels &mdash;
            so no one gets left out of the fun. Blending friendly competition, portability, and all-weather
            durability to create the must-have tailgating game.
          </p>
        </div>

        {/* Category Tabs - Desktop */}
        <div className="hidden sm:flex justify-center gap-3 mb-10">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-display text-[15px] font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-[#1a2b4a] text-white shadow-[0_4px_16px_rgba(26,43,74,0.3)]'
                    : 'bg-white text-[#4a5568] border border-[#e5e7eb] hover:border-[#0066cc]/30 hover:text-[#0066cc]'
                }`}
              >
                <Icon size={18} strokeWidth={2} />
                <span className="hidden lg:inline">{cat.title.split(' \u2013 ')[0]}</span>
                <span className="lg:hidden">{cat.title.split('&')[0]?.trim().split(' ').slice(0, 3).join(' ')}</span>
              </button>
            );
          })}
        </div>

        {/* Category Tabs - Mobile */}
        <div className="flex sm:hidden overflow-x-auto gap-2 mb-8 pb-2 scrollbar-hide">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full font-display text-[13px] font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-[#1a2b4a] text-white shadow-[0_4px_16px_rgba(26,43,74,0.3)]'
                    : 'bg-white text-[#4a5568] border border-[#e5e7eb]'
                }`}
              >
                <Icon size={16} strokeWidth={2} />
                <span>{cat.title.split('&')[0]?.trim().split(' ').slice(0, 2).join(' ')}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="mb-14 sm:mb-20">
          {categories.map((cat, catIndex) => (
            <div
              key={cat.id}
              className={`transition-all duration-500 ${
                activeCategory === catIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 hidden'
              }`}
            >
              {/* Category Header Card */}
              <div className={`bg-gradient-to-r ${cat.color} rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-[0_8px_32px_rgba(0,61,153,0.25)]`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl sm:text-3xl">{cat.emoji}</span>
                  <h3 className="font-display text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Features Grid */}
              <div className={`grid grid-cols-1 ${cat.features.length > 2 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2'} gap-4 sm:gap-6`}>
                {cat.features.map((feature, idx) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <div
                      key={idx}
                      className="group bg-white rounded-xl p-5 sm:p-6 border border-[#e5e7eb] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:translate-y-[-4px] transition-all duration-300 hover:border-[#0066cc]/20"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#0066cc]/10 flex items-center justify-center mb-4 group-hover:bg-[#0066cc]/15 transition-colors">
                        <FeatureIcon className="w-5 h-5 text-[#0066cc]" strokeWidth={2} />
                      </div>
                      <p className="font-body text-[15px] leading-relaxed text-[#4a5568]">
                        {feature.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Top-Rated Section */}
        <div className="bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.2)]">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-5">
              <Trophy className="w-5 h-5 text-[#fbbf24]" strokeWidth={2} />
              <span className="font-display text-[13px] sm:text-[14px] font-semibold text-white/90 tracking-wide uppercase">
                Top-Rated Tailgating Game
              </span>
            </div>
            <h3 className="font-display text-[22px] sm:text-[30px] md:text-[36px] font-semibold text-white mb-3 leading-tight">
              Why It&apos;s a Top-Rated Tailgating Game
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {topRatedReasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-[#0066cc] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-body text-[14px] sm:text-[15px] text-white/85 leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="font-body text-[15px] sm:text-[16px] text-white/70 mb-6 max-w-2xl mx-auto">
              Pong Party Games turns every tailgate, tournament, festival, and backyard party into a high-energy baseball experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#e63946] hover:bg-[#d32f3f] text-white font-display font-semibold text-[15px] sm:text-[16px] px-7 py-3.5 rounded-full shadow-[0_4px_16px_rgba(230,57,70,0.4)] hover:shadow-[0_8px_24px_rgba(230,57,70,0.5)] transition-all duration-300 hover:translate-y-[-2px]"
              >
                Shop Now
              </Link>
              <Link
                href="/custom-games"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-display font-semibold text-[15px] sm:text-[16px] px-7 py-3.5 rounded-full border border-white/20 transition-all duration-300 hover:translate-y-[-2px]"
              >
                Customize Your Game
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
