import { AlertCircle, Award, Target, TrendingUp, Users, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How To Play | Pong Party Games',
    description: 'Learn how to play Pong Party Games - The ultimate baseball party game. Complete rules, setup instructions, and gameplay guide.',
};

export default function HowToPlayPage() {
    return (
        <div className="bg-gradient-to-b from-[#f8f9fb] via-white to-[#f5f7fa] min-h-screen -mt-[200px]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] text-white py-20 sm:py-20 lg:py-24 shadow-[0_20px_60px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center pt-48 sm:pt-24 lg:pt-20">
                    <h1 className="font-display text-[42px] sm:text-[52px] md:text-[64px] font-semibold mb-3 sm:mb-4 lg:mb-5">
                        How To Play
                    </h1>
                    <p className="font-body text-[18px] sm:text-[20px] leading-relaxed text-gray-300 max-w-[700px] mx-auto">
                        Master the game in minutes! Follow our simple guide to start playing the ultimate baseball party game.
                    </p>
                </div>
            </div>

            {/* Setup Section */}
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16">
                {/* Quick Setup */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a1420] via-[#1a2438] to-[#0f1e35] shadow-[0_4px_12px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[38px] font-semibold text-[#1a2b4a]">
                            Quick Setup
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Throwing Distance */}
                        <div className="bg-gradient-to-br from-[#0a1420] via-[#152840] to-[#1a2b4a] rounded-2xl p-8 text-white shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
                            <Target className="w-10 h-10 mb-4" strokeWidth={2} />
                            <h3 className="font-display text-[24px] font-semibold mb-4">Throwing Distance</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center font-display text-[24px] font-bold">
                                        6'
                                    </div>
                                    <div>
                                        <p className="font-body text-[18px] font-semibold">Adults</p>
                                        <p className="font-body text-[14px] text-white/80">6 feet from the board</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center font-display text-[24px] font-bold">
                                        4'
                                    </div>
                                    <div>
                                        <p className="font-body text-[18px] font-semibold">Kids</p>
                                        <p className="font-body text-[14px] text-white/80">4 feet from the board</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Teams */}
                        <div className="bg-gradient-to-br from-[#2d0808] via-[#4a0e0e] to-[#6b1414] rounded-2xl p-8 text-white shadow-[0_8px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
                            <Users className="w-10 h-10 mb-4" strokeWidth={2} />
                            <h3 className="font-display text-[24px] font-semibold mb-4">Team Setup</h3>
                            <div className="space-y-4 font-body">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 font-bold">
                                        1
                                    </div>
                                    <p className="text-[16px] leading-relaxed">Choose <strong>Home vs Visitors</strong> via coin flip</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 font-bold">
                                        2
                                    </div>
                                    <p className="text-[16px] leading-relaxed"><strong>Visitors bat first</strong></p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 font-bold">
                                        3
                                    </div>
                                    <p className="text-[16px] leading-relaxed">Play <strong>1v1</strong> or <strong>2v2 teams</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Baseball Diamond Guide */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a1420] via-[#1a2438] to-[#0f1e35] shadow-[0_4px_12px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center">
                            <Award className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[38px] font-semibold text-[#1a2b4a]">
                            The Baseball Diamond
                        </h2>
                    </div>

                    <div className="bg-[#f5f5f7] rounded-2xl p-6 sm:p-8 md:p-10 mb-8">
                        <p className="font-body text-[17px] leading-relaxed text-[#2d3748] mb-8 text-center">
                            The 4 cups represent a baseball diamond. Each cup determines how runners advance on the bases.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {/* Single */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border-4 border-[#1e4620] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#1e4620] to-[#2d5a2f] flex items-center justify-center text-white font-display text-[24px] font-bold mb-3">
                                        1B
                                    </div>
                                    <h3 className="font-display text-[20px] font-semibold text-[#1a2b4a]">Single</h3>
                                </div>
                                <p className="font-body text-[15px] text-center text-[#2d3748] leading-relaxed">
                                    Runners advance <strong>1 base</strong>
                                </p>
                            </div>

                            {/* Double */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border-4 border-[#1a2b4a] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#1a2b4a] to-[#0f1e35] flex items-center justify-center text-white font-display text-[24px] font-bold mb-3">
                                        2B
                                    </div>
                                    <h3 className="font-display text-[20px] font-semibold text-[#1a2b4a]">Double</h3>
                                </div>
                                <p className="font-body text-[15px] text-center text-[#2d3748] leading-relaxed">
                                    Runners advance <strong>2 bases</strong>
                                </p>
                            </div>

                            {/* Triple */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border-4 border-[#6b4510] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#6b4510] to-[#4a3008] flex items-center justify-center text-white font-display text-[24px] font-bold mb-3">
                                        3B
                                    </div>
                                    <h3 className="font-display text-[20px] font-semibold text-[#1a2b4a]">Triple</h3>
                                </div>
                                <p className="font-body text-[15px] text-center text-[#2d3748] leading-relaxed">
                                    Runners advance <strong>3 bases</strong>
                                </p>
                            </div>

                            {/* Walk/HR */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border-4 border-[#6b1414] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                                <div className="text-center mb-4">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#6b1414] to-[#4a0e0e] flex items-center justify-center text-white font-display text-[20px] font-bold mb-3">
                                        HR
                                    </div>
                                    <h3 className="font-display text-[20px] font-semibold text-[#1a2b4a]">Walk / HR</h3>
                                </div>
                                <p className="font-body text-[15px] text-center text-[#2d3748] leading-relaxed">
                                    Runners advance <strong>if forced</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Special HR Rule */}
                    <div className="bg-gradient-to-r from-[#2d0808] via-[#4a0e0e] to-[#6b1414] rounded-xl p-6 text-white shadow-[0_8px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
                        <div className="flex items-start gap-4">
                            <TrendingUp className="w-8 h-8 flex-shrink-0 mt-1" strokeWidth={2} />
                            <div>
                                <h3 className="font-display text-[22px] font-semibold mb-2">🎯 Hit a Home Run!</h3>
                                <p className="font-body text-[16px] leading-relaxed">
                                    Sink a ball in the <strong>Single, Double & Triple</strong> cups in the same inning to score a <strong>Home Run</strong>! Any additional balls in the HR cup will count as home runs and score all runners on base.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gameplay Rules */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a1420] via-[#1a2438] to-[#0f1e35] shadow-[0_4px_12px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] flex items-center justify-center">
                            <AlertCircle className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[38px] font-semibold text-[#1a2b4a]">
                            Gameplay Rules
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* Outs */}
                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-4 border-[#1a2b4a] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                            <h3 className="font-display text-[22px] font-semibold text-[#1a2b4a] mb-4">Recording Outs</h3>
                            <div className="space-y-4 font-body text-[16px] leading-relaxed text-[#2d3748]">
                                <div className="flex items-start gap-3">
                                    <span className="text-[#1a2b4a] font-bold text-[20px] flex-shrink-0">•</span>
                                    <p><strong>1 Out:</strong> Ball misses all cups on the board</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#1a2b4a] font-bold text-[20px] flex-shrink-0">•</span>
                                    <p><strong>2 Outs:</strong> Ball bounces out of the board or misses entirely</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#1a2b4a] font-bold text-[20px] flex-shrink-0">•</span>
                                    <p><strong>3 Outs:</strong> Inning ends, remove all balls from cups and ball drop</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#6b1414] font-bold text-[20px] flex-shrink-0">⚠</span>
                                    <p><strong>Foul/Automatic Out:</strong> Hand crosses the throw line</p>
                                </div>
                            </div>
                        </div>

                        {/* Walks */}
                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-4 border-[#6b4510] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                            <h3 className="font-display text-[22px] font-semibold text-[#1a2b4a] mb-4">Walk Rules</h3>
                            <div className="space-y-4 font-body text-[16px] leading-relaxed text-[#2d3748]">
                                <div className="flex items-start gap-3">
                                    <span className="text-[#6b4510] font-bold text-[20px] flex-shrink-0">1</span>
                                    <p><strong>First Walk:</strong> Ball in HR/Walk cup = base on balls, runners advance if forced</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#6b4510] font-bold text-[20px] flex-shrink-0">2</span>
                                    <p><strong>Second Walk:</strong> Another ball in HR/Walk cup = second walk, runners advance if forced</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#6b1414] font-bold text-[20px] flex-shrink-0">✓</span>
                                    <p><strong>Max 2 Walks:</strong> After 2 walks, HR/Walk cup becomes a foul ball (throw again)</p>
                                </div>
                            </div>
                        </div>

                        {/* Team Rotation */}
                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-4 border-[#1e4620] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                            <h3 className="font-display text-[22px] font-semibold text-[#1a2b4a] mb-4">Team Play (2v2)</h3>
                            <div className="space-y-4 font-body text-[16px] leading-relaxed text-[#2d3748]">
                                <div className="flex items-start gap-3">
                                    <span className="text-[#1e4620] font-bold text-[20px] flex-shrink-0">↻</span>
                                    <p><strong>Rotation:</strong> Teammates rotate throws after each out is recorded</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#1e4620] font-bold text-[20px] flex-shrink-0">✓</span>
                                    <p>Each player continues throwing until 3 outs are recorded</p>
                                </div>
                            </div>
                        </div>

                        {/* Final Inning */}
                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-4 border-[#6b1414] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                            <h3 className="font-display text-[22px] font-semibold text-[#1a2b4a] mb-4">Winning the Game</h3>
                            <div className="space-y-4 font-body text-[16px] leading-relaxed text-[#2d3748]">
                                <div className="flex items-start gap-3">
                                    <span className="text-[#6b1414] font-bold text-[20px] flex-shrink-0">🏆</span>
                                    <p><strong>Home Team Advantage:</strong> Home team gets the last opportunity to tie or win</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-[#6b1414] font-bold text-[20px] flex-shrink-0">⏹</span>
                                    <p><strong>3rd Out Rule:</strong> Ball drop results after the 3rd out do NOT count</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-[#1a2b4a] to-[#2d3748] rounded-2xl p-8 sm:p-12 text-white text-center">
                    <h2 className="font-display text-[32px] sm:text-[38px] font-semibold mb-4">
                        Ready to Play?
                    </h2>
                    <p className="font-body text-[18px] leading-relaxed text-gray-300 mb-8 max-w-[600px] mx-auto">
                        Get your Pong Party Game and start playing today! Perfect for parties, family gatherings, and competitive fun.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://ah2s1r-3i.myshopify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#e63946] text-white font-body font-bold text-[17px] rounded-full hover:bg-[#d62839] transition-colors shadow-lg"
                        >
                            Shop Now
                        </a>
                        <a
                            href="/custom-games"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-body font-bold text-[17px] rounded-full hover:bg-white/20 transition-colors border-2 border-white/30"
                        >
                            Custom Games
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
