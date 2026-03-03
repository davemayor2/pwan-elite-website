import { PROPERTY_DETAILS } from '@/data/propertyData';
import PropertyDetailsClient from './PropertyDetailsClient';

export function generateStaticParams() {
  return Object.keys(PROPERTY_DETAILS).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function PropertyDetailsPage({ params }: PageProps) {
  return <PropertyDetailsClient params={params} />;
}
