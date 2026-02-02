'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CustomGamesPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        gameType: 'baseball',
        players: '2-4',
        customization: '',
        budget: 'standard',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your interest! We\'ll contact you soon about your custom game.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen pt-24 md:pt-20 px-4 md:px-16 pb-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="font-[family-name:var(--font-family-display)] text-[48px] md:text-[36px] font-semibold text-[var(--color-navy)] mb-4">
                        Custom Party Games
                    </h1>
                    <p className="font-[family-name:var(--font-family-body)] text-[18px] text-[var(--color-charcoal)] max-w-2xl mx-auto">
                        Create your own unique party game! Customize colors, add team names, logos, or create a completely new design.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Benefits */}
                    <div className="space-y-8">
                        <div className="bg-[var(--color-light-gray)] rounded-[16px] p-8">
                            <h2 className="font-[family-name:var(--font-family-display)] text-[30px] font-semibold text-[var(--color-navy)] mb-6">
                                Why Go Custom?
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-bright-blue)] to-[var(--color-navy)] flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">1</span>
                                    </div>
                                    <div>
                                        <h3 className="font-[family-name:var(--font-family-body)] text-[17px] font-semibold text-[var(--color-navy)] mb-1">
                                            Personalized Design
                                        </h3>
                                        <p className="font-[family-name:var(--font-family-body)] text-[15px] text-[var(--color-charcoal)]">
                                            Add your team name, company logo, or personal touch to make it uniquely yours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-bright-blue)] to-[var(--color-navy)] flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">2</span>
                                    </div>
                                    <div>
                                        <h3 className="font-[family-name:var(--font-family-body)] text-[17px] font-semibold text-[var(--color-navy)] mb-1">
                                            Custom Colors
                                        </h3>
                                        <p className="font-[family-name:var(--font-family-body)] text-[15px] text-[var(--color-charcoal)]">
                                            Choose any color scheme to match your party theme or brand colors
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-bright-blue)] to-[var(--color-navy)] flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">3</span>
                                    </div>
                                    <div>
                                        <h3 className="font-[family-name:var(--font-family-body)] text-[17px] font-semibold text-[var(--color-navy)] mb-1">
                                            Perfect Gift
                                        </h3>
                                        <p className="font-[family-name:var(--font-family-body)] text-[15px] text-[var(--color-charcoal)]">
                                            Create a memorable gift for weddings, corporate events, or special occasions
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-bright-blue)] to-[var(--color-navy)] flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white text-sm font-bold">4</span>
                                    </div>
                                    <div>
                                        <h3 className="font-[family-name:var(--font-family-body)] text-[17px] font-semibold text-[var(--color-navy)] mb-1">
                                            Same Quality
                                        </h3>
                                        <p className="font-[family-name:var(--font-family-body)] text-[15px] text-[var(--color-charcoal)]">
                                            All custom games maintain our premium handcrafted quality standards
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--color-bright-blue)] to-[#0052a3] rounded-[16px] p-8 text-white">
                            <h3 className="font-[family-name:var(--font-family-display)] text-[24px] font-semibold mb-4">
                                Bulk Orders Available
                            </h3>
                            <p className="font-[family-name:var(--font-family-body)] text-[16px] mb-4 opacity-90">
                                Planning a large event or corporate gathering? We offer special pricing for bulk orders of 10+ games.
                            </p>
                            <Link
                                href="mailto:info@pongpartygames.com"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--color-bright-blue)] font-[family-name:var(--font-family-body)] text-[15px] font-bold rounded-[32px] transition-all duration-[var(--duration-normal)] hover:bg-[var(--color-light-gray)]"
                            >
                                Contact for Bulk Pricing
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white rounded-[16px] p-8 border border-[rgba(26,43,74,0.12)] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                        <h2 className="font-[family-name:var(--font-family-display)] text-[30px] font-semibold text-[var(--color-navy)] mb-6">
                            Request a Quote
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block font-[family-name:var(--font-family-body)] text-[15px] font-semibold text-[var(--color-navy)] mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[rgba(26,43,74,0.2)] rounded-[8px] font-[family-name:var(--font-family-body)] text-[15px] focus:outline-none focus:border-[var(--color-bright-blue)] focus:ring-2 focus:ring-[var(--color-bright-blue)] focus:ring-opacity-20"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-[family-name:var(--font-family-body)] text-[15px] font-semibold text-[var(--color-navy)] mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-[rgba(26,43,74,0.2)] rounded-[8px] font-[family-name:var(--font-family-body)] text-[15px] focus:outline-none focus:border-[var(--color-bright-blue)] focus:ring-2 focus:ring-[var(--color-bright-blue)] focus:ring-opacity-20"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block font-[family-name:var(--font-family-body)] text-[15px] font-semibold text-[var(--color-navy)] mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-[rgba(26,43,74,0.2)] rounded-[8px] font-[family-name:var(--font-family-body)] text-[15px] focus:outline-none focus:border-[var(--color-bright-blue)] focus:ring-2 focus:ring-[var(--color-bright-blue)] focus:ring-opacity-20"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-[family-name:var(--font-family-body)] text-[15px] font-semibold text-[var(--color-navy)] mb-2">
                                        Game Type
                                    </label>
                                    <select
                                        name="gameType"
                                        value={formData.gameType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-[rgba(26,43,74,0.2)] rounded-[8px] font-[family-name:var(--font-family-body)] text-[15px] focus:outline-none focus:border-[var(--color-bright-blue)] focus:ring-2 focus:ring-[var(--color-bright-blue)] focus:ring-opacity-20"
                                    >
                                        <option value="baseball">Baseball Pong</option>
                                        <option value="custom">Custom Design</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-[family-name:var(--font-family-body)] text-[15px] font-semibold text-[var(--color-navy)] mb-2">
                                        Number of Players
                                    </label>
                                    <select
                                        name="players"
                                        value={formData.players}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-[rgba(26,43,74,0.2)] rounded-[8px] font-[family-name:var(--font-family-body)] text-[15px] focus:outline-none focus:border-[var(--color-bright-blue)] focus:ring-2 focus:ring-[var(--color-bright-blue)] focus:ring-opacity-20"
                                    >
                                        <option value="2-4">2-4 Players</option>
                                        <option value="4-6">4-6 Players</option>
                                        <option value="6-8">6-8 Players</option>
                                        <option value="8+">8+ Players</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block font-[family-name:var(--font-family-body)] text-[15px] font-semibold text-[var(--color-navy)] mb-2">
                                    Customization Details
                                </label>
                                <input
                                    type="text"
                                    name="customization"
                                    value={formData.customization}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[rgba(26,43,74,0.2)] rounded-[8px] font-[family-name:var(--font-family-body)] text-[15px] focus:outline-none focus:border-[var(--color-bright-blue)] focus:ring-2 focus:ring-[var(--color-bright-blue)] focus:ring-opacity-20"
                                    placeholder="Team name, colors, logo, etc."
                                />
                            </div>

                            <div>
                                <label className="block font-[family-name:var(--font-family-body)] text-[15px] font-semibold text-[var(--color-navy)] mb-2">
                                    Budget Range
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[rgba(26,43,74,0.2)] rounded-[8px] font-[family-name:var(--font-family-body)] text-[15px] focus:outline-none focus:border-[var(--color-bright-blue)] focus:ring-2 focus:ring-[var(--color-bright-blue)] focus:ring-opacity-20"
                                >
                                    <option value="standard">Standard ($35-50)</option>
                                    <option value="premium">Premium ($50-75)</option>
                                    <option value="deluxe">Deluxe ($75-100)</option>
                                    <option value="custom">Custom Quote</option>
                                </select>
                            </div>

                            <div>
                                <label className="block font-[family-name:var(--font-family-body)] text-[15px] font-semibold text-[var(--color-navy)] mb-2">
                                    Additional Details
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-[rgba(26,43,74,0.2)] rounded-[8px] font-[family-name:var(--font-family-body)] text-[15px] focus:outline-none focus:border-[var(--color-bright-blue)] focus:ring-2 focus:ring-[var(--color-bright-blue)] focus:ring-opacity-20 resize-none"
                                    placeholder="Tell us more about your custom game vision..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[var(--color-red)] text-white font-[family-name:var(--font-family-body)] text-[17px] font-bold rounded-[32px] transition-all duration-[var(--duration-normal)] shadow-[0_4px_12px_rgba(230,57,70,0.3)] hover:bg-[#d62839] hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(230,57,70,0.4)]"
                            >
                                Request Custom Quote
                            </button>

                            <p className="text-center font-[family-name:var(--font-family-body)] text-[13px] text-[var(--color-gray-medium)]">
                                We'll respond within 24 hours with a personalized quote
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
