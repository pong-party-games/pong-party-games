export const metadata = {
    title: 'About Us | Pong Party Games',
    description: 'Learn about Pong Party Games - handcrafted quality party games made in the USA.'
};

export default function AboutUsPage() {
    return (
        <div className="min-h-screen pt-24 md:pt-20 px-4 md:px-16 pb-20">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="font-[family-name:var(--font-family-display)] text-[48px] md:text-[36px] font-semibold text-[var(--color-navy)] mb-8">
                    About Us
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div>
                            <h2 className="font-[family-name:var(--font-family-display)] text-[30px] font-semibold text-[var(--color-navy)] mb-4">
                                Our Story
                            </h2>
                            <p className="font-[family-name:var(--font-family-body)] text-[18px] text-[var(--color-charcoal)] leading-relaxed mb-4">
                                Pong Party Games was born from a passion for bringing people together through fun, engaging party games.
                                We believe that the best memories are made when friends and family gather to play, laugh, and enjoy each other's company.
                            </p>
                            <p className="font-[family-name:var(--font-family-body)] text-[18px] text-[var(--color-charcoal)] leading-relaxed">
                                Every game we create is handcrafted with premium materials right here in the USA, ensuring quality
                                that lasts for countless game nights to come.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-[family-name:var(--font-family-display)] text-[30px] font-semibold text-[var(--color-navy)] mb-4">
                                Our Mission
                            </h2>
                            <p className="font-[family-name:var(--font-family-body)] text-[18px] text-[var(--color-charcoal)] leading-relaxed">
                                To create premium party games that are easy to learn, quick to set up, and provide endless entertainment
                                for players of all ages. We're committed to quality craftsmanship and exceptional customer service.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[var(--color-light-gray)] rounded-[16px] p-8 space-y-6">
                        <h3 className="font-[family-name:var(--font-family-display)] text-[24px] font-semibold text-[var(--color-navy)] mb-4">
                            Why Choose Us?
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-bright-blue)] flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-sm font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-[family-name:var(--font-family-body)] text-[17px] font-semibold text-[var(--color-navy)] mb-1">
                                        Made in USA
                                    </h4>
                                    <p className="font-[family-name:var(--font-family-body)] text-[15px] text-[var(--color-charcoal)]">
                                        All our products are proudly manufactured in the United States
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-bright-blue)] flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-sm font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-[family-name:var(--font-family-body)] text-[17px] font-semibold text-[var(--color-navy)] mb-1">
                                        Premium Quality
                                    </h4>
                                    <p className="font-[family-name:var(--font-family-body)] text-[15px] text-[var(--color-charcoal)]">
                                        Handcrafted with the finest materials for durability and longevity
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-bright-blue)] flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-sm font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-[family-name:var(--font-family-body)] text-[17px] font-semibold text-[var(--color-navy)] mb-1">
                                        All Ages Welcome
                                    </h4>
                                    <p className="font-[family-name:var(--font-family-body)] text-[15px] text-[var(--color-charcoal)]">
                                        Games designed for everyone from kids to adults to enjoy together
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[var(--color-bright-blue)] flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white text-sm font-bold">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-[family-name:var(--font-family-body)] text-[17px] font-semibold text-[var(--color-navy)] mb-1">
                                        Quick Setup
                                    </h4>
                                    <p className="font-[family-name:var(--font-family-body)] text-[15px] text-[var(--color-charcoal)]">
                                        Ready to play in just 5 minutes - less setup, more fun
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
