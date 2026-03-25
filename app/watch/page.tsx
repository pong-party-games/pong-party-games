import { getVideoRoute, siteVideos } from 'lib/video';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Watch Pong Party Games Videos | Product Demos & Gameplay',
  description:
    'Watch Pong Party Games in action. See how the first patented baseball-inspired tailgate game plays at tailgates, backyard parties, corporate events, and family gatherings. Video demos and gameplay walkthroughs.',
  alternates: {
    canonical: '/watch',
  },
};

export default function WatchIndexPage() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_55%)] py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            Watch Section
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Product Videos and Demos
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            This section gives each video its own watch page, which keeps the library organized
            now and makes it easy to add future demos without changing the homepage.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {siteVideos.map((video) => (
            <Link
              key={video.slug}
              href={getVideoRoute(video.slug)}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(15,23,42,0.12)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                <Image
                  src={video.thumbnailPath}
                  alt={video.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                  {video.durationLabel}
                </div>
              </div>
              <div className="px-6 py-6">
                <h2 className="font-display text-2xl font-semibold text-slate-950">
                  {video.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{video.description}</p>
                <p className="mt-5 text-sm font-semibold text-sky-700">Open watch page</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
