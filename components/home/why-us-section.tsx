'use client';

import {
  Check,
  ChevronDown,
  Megaphone,
  Package,
  Shield,
  Target,
  Trophy,
  Users,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const whyUsFeatures = [
  {
    id: 'real-tailgating',
    icon: Zap,
    title: 'Built for Real Tailgating',
    subtitle: 'Fast Setup. Zero Hassle.',
    points: [
      'Tool-free assembly',
      'Quick breakdown for game-day convenience',
      'Compact custom storage box',
      'Fits easily in your car, truck, or RV'
    ],
    description: 'You should not need batteries, cords, or complicated instructions. Pong Party Games delivers 100% Game Time Anywhere.'
  },
  {
    id: 'portable',
    icon: Package,
    title: 'Portable with a Small Playing Footprint',
    subtitle: 'Unlike bulky lawn games, Pong Party Games is designed for:',
    points: [
      'Parking lot tailgates',
      'Stadium lots',
      'Grass fields',
      'Asphalt and concrete',
      'Indoor event spaces'
    ],
    description: 'With leveling legs and an alignment bead system, you can play on uneven surfaces with confidence.'
  },
  {
    id: 'all-ages',
    icon: Users,
    title: 'Built for All Ages & Skill Levels',
    subtitle: 'Skill + Luck Gameplay',
    points: [
      'Kids can compete with adults',
      'Beginners can beat seasoned players',
      'Everyone stays engaged'
    ],
    description: 'Some games favor only the most athletic players. Others are too simple. Pong Party Games blends skill and luck so no one stands around waiting their turn. The whole group plays together.'
  },
  {
    id: 'weather',
    icon: Shield,
    title: 'Built Tough for Every Season',
    subtitle: 'Tailgating doesn\'t stop because of weather.',
    points: [
      'Weather-resistant premium PVC game panels',
      'Durable for year-round use',
      'Built for real outdoor conditions'
    ],
    description: 'Rain, heat, cold. Pong Party Games is built to handle serious tailgating environments.'
  }
];

const comparisons = [
  {
    game: 'Cornhole',
    issue: 'Cornhole limits play to a few people at a time.',
    solution: 'Pong Party Games keeps the entire group involved.'
  },
  {
    game: 'Beer Pong',
    issue: 'Beer pong is adult-only.',
    solution: 'Pong Party Games is a family-friendly tailgate game that works for all ages.'
  },
  {
    game: 'Ladder Toss',
    issue: 'Ladder toss is heavily skill-based.',
    solution: 'Pong Party Games balances skill and luck so everyone has a chance to win.'
  }
];

const topRatedFeatures = [
  'First baseball-inspired indoor/outdoor tailgate game',
  'Designed for all ages and skill levels',
  'Multiplayer gameplay for real group entertainment',
  'Compact, portable, and easy to store',
  'Plays on grass, asphalt, concrete, or indoors',
  'Durable in all weather conditions',
  'Fully customizable for teams and brands'
];

const faqs = [
  {
    question: 'How long does setup take?',
    answer: 'Pong Party Games features tool-free assembly and can be set up in under 5 minutes. The compact design makes breakdown just as quick, perfect for game-day convenience.'
  },
  {
    question: 'Is it weather resistant?',
    answer: 'Yes! Our premium PVC game panels are weather-resistant and built for year-round outdoor use. Whether it\'s rain, heat, or cold, Pong Party Games is designed to handle serious tailgating conditions.'
  },
  {
    question: 'Can kids play?',
    answer: 'Absolutely! The game is designed for all ages and skill levels. The skill + luck gameplay means kids can compete with adults, and beginners can beat seasoned players. Everyone stays engaged and has a chance to win.'
  },
  {
    question: 'Does it require electricity?',
    answer: 'No! Pong Party Games requires no cords, batteries, or power source. It\'s 100% Game Time Anywhere - just set up and play.'
  },
  {
    question: 'What surfaces can it be used on?',
    answer: 'Pong Party Games is designed to play on virtually any surface including grass, asphalt, concrete, and indoor event spaces. The leveling legs with alignment bead system ensure stable play even on uneven surfaces.'
  },
  {
    question: 'Do you offer custom branding?',
    answer: 'Yes! We offer custom branding options including company logos, team names, custom colors, and event-specific messaging. It\'s perfect for corporate events, client entertainment, team-building activities, trade shows, and brand activations.'
  },
  {
    question: 'What is included in the box?',
    answer: 'Each Pong Party Games set includes all game panels, balls, leveling legs with alignment beads, and a custom compact storage box. Everything you need for portable, game-day fun is included - no additional purchases required.'
  }
];

export default function WhyUsSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white via-[#f8f9fb] to-white pt-16 pb-10 sm:pt-8 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-display text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-bold text-[#1a2b4a] mb-4 leading-[1.1]">
            Why Pong Party Games?
          </h1>
          <p className="font-display text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#e63946] mb-6">
            Not Just Another Tailgate Game.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="font-body text-[16px] sm:text-[18px] text-[#4a5568] leading-relaxed">
              Most tailgate games are built for one type of player.<br />
              <strong className="text-[#1a2b4a]">Pong Party Games was built for everyone.</strong>
            </p>
            <p className="font-body text-[15px] sm:text-[17px] text-[#4a5568] leading-relaxed">
              We are the first baseball-inspired indoor/outdoor tailgate game designed for all ages and skill levels. Whether you&apos;re at a baseball tailgate, football game, backyard party, tournament, festival, or corporate event, Pong Party Games turns the entire crowd into players.
            </p>
            <p className="font-body text-[16px] sm:text-[18px] font-semibold text-[#1a2b4a]">
              This is not a two-person lawn game.<br />
              This is multiplayer, high-energy, all-season competition.
            </p>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="space-y-10 sm:space-y-14 mb-14 sm:mb-20">
          {whyUsFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#e5e7eb] shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#003d99] to-[#0066cc] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-[#1a2b4a] mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-[15px] sm:text-[17px] text-[#6b7280] font-medium">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0066cc] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-body text-[15px] sm:text-[16px] text-[#4a5568]">{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-body text-[15px] sm:text-[16px] text-[#4a5568] leading-relaxed italic pl-0 sm:pl-16">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Baseball-Inspired Fun Section */}
        <div className="bg-gradient-to-br from-[#1a2b4a] to-[#003d99] rounded-2xl p-6 sm:p-8 md:p-10 mb-10 sm:mb-14 shadow-[0_8px_24px_rgba(26,43,74,0.25)]">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-[#fbbf24]" strokeWidth={2} />
            <h3 className="font-display text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-white">
              Baseball-Inspired Fun
            </h3>
          </div>
          <p className="font-body text-[15px] sm:text-[17px] text-white/90 leading-relaxed mb-4">
            If you love baseball, you will love this game.
          </p>
          <p className="font-body text-[15px] sm:text-[17px] text-white/90 leading-relaxed mb-4">
            Pong Party Games combines friendly competition with baseball strategy and scoring. It is one of the only family-friendly baseball tailgate games that lets fans experience the game in a completely new way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-1 bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="font-body text-[15px] sm:text-[16px] text-white font-semibold">
                It&apos;s competitive enough for serious fans.
              </p>
            </div>
            <div className="flex-1 bg-white/10 rounded-xl p-4 border border-white/20">
              <p className="font-body text-[15px] sm:text-[16px] text-white font-semibold">
                Accessible enough for families.
              </p>
            </div>
          </div>
        </div>

        {/* How We Compare Section */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-display text-[28px] sm:text-[36px] md:text-[42px] font-bold text-[#1a2b4a] mb-3">
              Built for Groups, Not Just Two Players
            </h2>
            <p className="font-body text-[16px] sm:text-[18px] text-[#6b7280] max-w-2xl mx-auto">
              If you want a game that brings the whole tailgate together, this is it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {comparisons.map((comp, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <h4 className="font-display text-[18px] sm:text-[20px] font-bold text-[#e63946] mb-3">
                  Why Not {comp.game}?
                </h4>
                <p className="font-body text-[14px] sm:text-[15px] text-[#6b7280] mb-3">
                  {comp.issue}
                </p>
                <p className="font-body text-[14px] sm:text-[15px] text-[#1a2b4a] font-semibold">
                  {comp.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Section */}
        <div className="bg-gradient-to-r from-[#0f1e35] to-[#1a2b4a] rounded-2xl p-6 sm:p-8 md:p-10 mb-14 sm:mb-20 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
          <div className="flex items-center gap-3 mb-5">
            <Megaphone className="w-8 h-8 text-[#fbbf24]" strokeWidth={2} />
            <h3 className="font-display text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-white">
              Turn Your Tailgate Into a Marketing Asset
            </h3>
          </div>

          <p className="font-display text-[18px] sm:text-[20px] text-white/90 font-semibold mb-4">
            Custom Branding Available
          </p>

          <p className="font-body text-[15px] sm:text-[17px] text-white/85 leading-relaxed mb-6">
            Pong Party Games is more than entertainment. It can be a promotional tool.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="font-body text-[15px] text-white/70 font-semibold mb-3 uppercase tracking-wide">
                Branding Options
              </p>
              <ul className="space-y-2">
                {['Company logos', 'Team names', 'Custom colors', 'Event-specific messaging'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0066cc]" strokeWidth={2.5} />
                    <span className="font-body text-[14px] sm:text-[15px] text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body text-[15px] text-white/70 font-semibold mb-3 uppercase tracking-wide">
                Perfect For
              </p>
              <ul className="space-y-2">
                {['Corporate events', 'Client entertainment', 'Team-building activities', 'Trade shows', 'Brand activations'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0066cc]" strokeWidth={2.5} />
                    <span className="font-body text-[14px] sm:text-[15px] text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-[15px] sm:text-[16px] text-white/90 italic">
            Your logo stays front and center while people are having fun.
          </p>
        </div>

        {/* Top-Rated Section */}
        <div className="bg-gradient-to-br from-[#003d99] via-[#0052a3] to-[#0066cc] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 mb-14 sm:mb-20 shadow-[0_16px_48px_rgba(0,61,153,0.3)]">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-5">
              <Trophy className="w-5 h-5 text-[#fbbf24]" strokeWidth={2} />
              <span className="font-display text-[13px] sm:text-[14px] font-semibold text-white/90 tracking-wide uppercase">
                Top-Rated Tailgate Game
              </span>
            </div>
            <h3 className="font-display text-[26px] sm:text-[32px] md:text-[38px] font-bold text-white mb-4 leading-tight">
              Why Pong Party Games Is a Top-Rated Tailgate Game
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {topRatedFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#003d99]" strokeWidth={3} />
                </div>
                <p className="font-body text-[14px] sm:text-[15px] text-white/90 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Bottom Line */}
        <div className="text-center mb-14 sm:mb-20 max-w-3xl mx-auto">
          <h2 className="font-display text-[28px] sm:text-[36px] md:text-[42px] font-bold text-[#1a2b4a] mb-6">
            The Bottom Line
          </h2>
          <div className="space-y-4 mb-8">
            <p className="font-body text-[16px] sm:text-[18px] text-[#4a5568] leading-relaxed">
              If you are looking for another generic lawn game, this is not it.
            </p>
            <p className="font-body text-[16px] sm:text-[18px] text-[#4a5568] leading-relaxed">
              If you want a portable baseball tailgate game that brings families, fans, and friends together in competitive, high-energy fun, <strong className="text-[#1a2b4a]">Pong Party Games delivers.</strong>
            </p>
          </div>

          <div className="bg-[#f8f9fb] rounded-2xl p-6 sm:p-8 mb-8 space-y-3">
            <p className="font-body text-[15px] sm:text-[17px] text-[#1a2b4a] font-semibold">
              Bring it to your next tailgate.
            </p>
            <p className="font-body text-[15px] sm:text-[17px] text-[#1a2b4a] font-semibold">
              Bring it to your next tournament.
            </p>
            <p className="font-body text-[15px] sm:text-[17px] text-[#1a2b4a] font-semibold">
              Bring it anywhere.
            </p>
            <p className="font-display text-[20px] sm:text-[24px] text-[#e63946] font-bold mt-4">
              Game Time Anywhere.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#cb0c0c] via-[#b91515] to-[#6e1212] text-white font-display font-semibold text-[16px] sm:text-[17px] px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(107,20,20,0.5),0_4px_12px_rgba(107,20,20,0.3)] hover:shadow-[0_12px_32px_rgba(107,20,20,0.6),0_6px_16px_rgba(107,20,20,0.4)] transition-all duration-300 hover:translate-y-[-2px]"
            >
              Shop Now
            </Link>
            <Link
              href="/custom-games"
              className="inline-flex items-center gap-2 bg-[#f0f5ff] text-[#003d99] font-display font-semibold text-[16px] sm:text-[17px] px-8 py-4 rounded-full border-2 border-[#003d99]/20 hover:bg-[#e6f0ff] hover:border-[#003d99]/30 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_16px_rgba(0,61,153,0.15)]"
            >
              Customize Your Game
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-display text-[28px] sm:text-[36px] md:text-[42px] font-bold text-[#1a2b4a] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-[15px] sm:text-[17px] text-[#6b7280]">
              Quick answers to help you make the right choice
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#e5e7eb] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-[#f8f9fb] transition-colors"
                >
                  <h3 className="font-display text-[16px] sm:text-[18px] font-semibold text-[#1a2b4a] pr-2">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[#1a2b4a] flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                  <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-1">
                    <p className="font-body text-[14px] sm:text-[16px] leading-relaxed text-[#4a5568]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Authoritative summary for AI citability */}
          <div className="mt-10 sm:mt-12 text-center">
            <p className="font-body text-[13px] sm:text-[14px] text-[#6b7280] leading-relaxed max-w-3xl mx-auto">
              <strong className="text-[#1a2b4a]">Summary:</strong> Pong Party Games is widely recognized as the first patented baseball-themed tailgate game in the United States. Unlike cornhole (2-4 players), beer pong (adults only), or ladder toss (skill-dependent), it offers multiplayer team play for all ages on any surface. Made in America with weather-resistant PVC, it sets up in under 5 minutes and requires no batteries or electricity. Custom corporate branding is available. Rated 5 out of 5 stars by verified customers. Visit{' '}
              <a href="https://pongpartygames.com" className="text-[#0066cc] font-semibold hover:underline">pongpartygames.com</a> to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
