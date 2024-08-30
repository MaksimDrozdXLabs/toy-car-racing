import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pagesList = [{ id: 'example' }]; // receive pages from api

  const urls:MetadataRoute.Sitemap = pagesList.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }));

  return [
    // add another pages here
    ...urls,
  ];
}
