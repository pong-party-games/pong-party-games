import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CustomFieldPanel from '../assets/images/custom-left-and-right.png';
import CustomScoreboard from '../assets/images/custom-stadium.png';

export const metadata: Metadata = {
    title: 'Custom Tailgate Games | Branded Corporate Party Games',
    description: 'Create custom tailgate games with your logo. Perfect for corporate tailgate games, branded party games, and promotional events. Best corporate party games for team building and trade shows.',
};

export default function CustomGamesPage() {
    return (
        <div className="bg-gradient-to-b from-[#f8f9fb] via-white to-[#f5f7fa] min-h-screen -mt-[200px]">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0a1420] via-[#0f1e35] to-[#1a2b4a] text-white py-20 sm:py-20 lg:py-24 shadow-[0_20px_60px_rgba(10,20,32,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center pt-48 sm:pt-40 md:pt-40 lg:pt-20">
                    <h1 className="font-display text-[48px] sm:text-[58px] md:text-[72px] font-semibold mb-4 sm:mb-5 lg:mb-6">
                        Custom Pong Party Games
                    </h1>
                    <p className="font-body text-[20px] sm:text-[22px] leading-relaxed text-gray-300 max-w-[700px] mx-auto">
                        Make it yours with personalized team names, logos, and colors. Perfect for corporate events, team building, and unforgettable celebrations.
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a2b4a] mb-6">
                                Custom Creations
                            </h2>
                            <p className="font-body text-lg text-[#4a5568]">
                                See how our customers have made Pong Party Games their own
                            </p>
                        </div>

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
            <div className="py-16 sm:py-20 bg-gradient-to-br from-[#1a2438] via-[#0f1e35] to-[#0a1420]">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
                            Ready to Create Your Custom Game?
                        </h2>
                        <p className="font-body text-lg text-white/90 mb-10 leading-relaxed">
                            Email us your ideas, logo, and preferred colors. We'll create a design mockup and provide a custom quote within 24 hours.
                        </p>

                        <div className="bg-white/10 rounded-2xl p-6 mb-8 border border-white/20">
                            <h3 className="font-display text-xl font-bold text-white mb-4">Contact Information</h3>
                            <div className="space-y-2 font-body text-base text-white/90">
                                <p><span className="font-semibold">Email:</span> <a href="mailto:Mike@pongpartygames.com" className="underline hover:text-white">Mike@pongpartygames.com</a></p>
                                <p><span className="font-semibold">Phone:</span> <a href="tel:4142305806" className="underline hover:text-white">(414) 230-5806</a></p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <Link
                                href="mailto:Mike@pongpartygames.com"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#e63946] text-white font-body text-lg font-bold rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(230,57,70,0.3)] hover:bg-[#d62839] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(230,57,70,0.4)]"
                            >
                                Email for Custom Quote
                            </Link>
                            <Link
                                href="/shop"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-body text-lg font-bold rounded-full transition-all duration-300 border-2 border-white/20 hover:bg-white/20 hover:border-white/30"
                            >
                                View Standard Games
                            </Link>
                        </div>
                        <p className="font-body text-base text-white/70">
                            Minimum order: 1 game • Typical turnaround: 2-3 weeks • Bulk discounts available
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
