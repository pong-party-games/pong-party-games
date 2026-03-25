import { VideoPlayer } from 'components/video/video-player';
import {
  getVideoBySlug,
  getVideoContentUrl,
  getVideoRoute,
  getVideoThumbnailUrl,
  getVideoUrl,
  siteVideos,
} from 'lib/video';
import { baseUrl } from 'lib/utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type WatchPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return siteVideos.map((video) => ({ slug: video.slug }));
}

export async function generateMetadata({
  params,
}: WatchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) {
    return {};
  }

  const videoUrl = getVideoUrl(video.slug);
  const thumbnailUrl = getVideoThumbnailUrl(video.thumbnailPath);
  const contentUrl = getVideoContentUrl(video.contentPath);

  return {
    title: `Watch ${video.name}`,
    description: video.description,
    alternates: {
      canonical: getVideoRoute(video.slug),
    },
    openGraph: {
      type: 'website',
      url: videoUrl,
      title: `Watch ${video.name}`,
      description: video.description,
      images: [
        {
          url: thumbnailUrl,
          width: 1200,
          height: 630,
          alt: video.name,
        },
      ],
      videos: [
        {
          url: contentUrl,
          width: video.width,
          height: video.height,
        },
      ],
    },
  };
}

export default async function WatchVideoPage({ params }: WatchPageProps) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  const videoUrl = getVideoUrl(video.slug);
  const contentUrl = getVideoContentUrl(video.contentPath);
  const thumbnailUrl = getVideoThumbnailUrl(video.thumbnailPath);

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: [thumbnailUrl],
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl,
    embedUrl: videoUrl,
    url: videoUrl,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Pong Party Games',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/android-chrome-512x512.png`,
      },
    },
    potentialAction: {
      '@type': 'WatchAction',
      target: videoUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_55%)] py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              Dedicated Watch Page
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              {video.name}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              {video.description}
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-5xl">
            <VideoPlayer src={video.contentPath} mimeType={video.mimeType} />
          </div>
        </div>
      </section>
    </>
  );
}
