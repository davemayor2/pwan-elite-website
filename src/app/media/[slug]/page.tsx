import { MEDIA_ITEMS } from '@/data/mediaData';
import MediaDetailsClient from './MediaDetailsClient';

export function generateStaticParams() {
  return MEDIA_ITEMS.map((item) => ({ slug: item.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function MediaDetailsPage({ params }: PageProps) {
  return <MediaDetailsClient params={params} />;
}
