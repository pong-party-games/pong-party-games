'use client';

export function VideoSection() {
    return (
        <section className="py-20 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[#1a2b4a] text-center mb-8 sm:mb-12 tracking-tight leading-tight">
                    See Pong Party Games in Action
                </h2>
                <div className="max-w-[1200px] mx-auto overflow-hidden rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.2)]">
                    <video
                        autoPlay
                        loop
                        playsInline
                        className="w-full h-auto max-h-[70vh] block"
                    >
                        <source src="/Pong-Party-Games.mov" type="video/mp4" />
                        <div className="bg-gray-100 p-12 text-center">
                            <p className="text-gray-600">Video not available. Please add Pong-Party-Games.mov or Pong-Party-Games.mp4 to the public folder.</p>
                        </div>
                    </video>
                </div>
            </div>
        </section>
    );
}
