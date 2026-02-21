import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://getfordigital.com';
  
  const staticPages = [
    '',
    '/work',
    '/services',
    '/services/automation',
    '/services/mvp-builds',
    '/services/web-apps',
    '/services/ai-workflows',
    '/services/integrations',
    '/services/dashboards',
    '/services/retainers',
    '/about',
    '/pricing',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ];
  
  const routes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : route.length < 15 ? 0.9 : 0.8,
  }));
  
  return routes;
}
