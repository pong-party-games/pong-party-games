import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Custom Corporate Pong Party Games | Branded Tailgate Games for Events',
    description:
        'Order custom-branded Pong Party Games with your company logo, QR codes, and colors on 3 panels. Trusted by Allstate, 3Tree Marketing, Carlson, and Rebel for corporate events, trade shows, and team building. Starting at $395.99.',
};

export default function CustomGamesLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
