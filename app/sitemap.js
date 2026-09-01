import { COURSES, SITE_URL } from '../lib/site';

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...COURSES.map((c) => ({
      url: `${SITE_URL}/courses/${c.slug}`,
      lastModified: new Date(c.updated),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
