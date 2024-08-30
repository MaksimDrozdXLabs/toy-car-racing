import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const key = process.env.NEXT_PUBLIC_ENV_NAME === 'prod' ? 'Allow' : 'Disallow';

  return {
    rules: {
      userAgent: '*',
      [key]: '/',
    },

    sitemap: `${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`,
  };
}
