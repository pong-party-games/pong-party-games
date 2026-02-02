export const metadata = {
    title: 'How To Play | Pong Party Games',
    description: 'Learn how to play Pong Party Games. Simple rules, quick setup, endless fun!'
};

export default function HowToPlayPage() {
    return (
        <div className="min-h-screen pt-24 md:pt-20 px-4 md:px-16">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="font-[family-name:var(--font-family-display)] text-[48px] md:text-[36px] font-semibold text-[var(--color-navy)] mb-8">
                    How To Play
                </h1>
                <div className="prose max-w-none">
                    <p className="font-[family-name:var(--font-family-body)] text-[18px] text-[var(--color-charcoal)] mb-6">
                        Content coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
}
