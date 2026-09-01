import { ogCard, OG_CONTENT_TYPE, OG_SIZE } from '../../../lib/og';
import { courseBySlug } from '../../../lib/site';

const course = courseBySlug('telegram-fundamentals');

export const alt = course.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogCard({
    eyebrow: `${course.chapters} chapters · ${course.minutes} min`,
    title: course.title,
    subtitle: course.ogSubtitle,
    emoji: course.emoji,
    gradient: course.gradient,
  });
}
