import { baseUrl } from 'lib/utils';

export type SiteVideo = {
  slug: string;
  name: string;
  description: string;
  contentPath: string;
  thumbnailPath: string;
  uploadDate: string;
  duration: string;
  durationLabel: string;
  mimeType: string;
  width: number;
  height: number;
};

export const watchRoute = '/watch';

export const siteVideos: SiteVideo[] = [
  {
    slug: 'pong-party-games-in-action',
    name: 'Pong Party Games in Action',
    description:
      'Watch Pong Party Games in action and see how the baseball-inspired party game plays at tailgates, backyard parties, and events.',
    contentPath: '/Pong-Party-Games.mov',
    thumbnailPath: '/images/pong-party-games-watch-thumbnail.png',
    uploadDate: '2026-02-02',
    duration: 'PT49S',
    durationLabel: '48-second product walkthrough',
    mimeType: 'video/mp4',
    width: 1280,
    height: 720,
  },
];

export const featuredVideo = siteVideos[0];

export const getVideoRoute = (slug: string) => `${watchRoute}/${slug}`;
export const getVideoBySlug = (slug: string) =>
  siteVideos.find((video) => video.slug === slug);
export const getVideoUrl = (slug: string) => `${baseUrl}${getVideoRoute(slug)}`;
export const getVideoContentUrl = (contentPath: string) => `${baseUrl}${contentPath}`;
export const getVideoThumbnailUrl = (thumbnailPath: string) => `${baseUrl}${thumbnailPath}`;
