import { ogCard, OG_CONTENT_TYPE, OG_SIZE } from '../lib/og';

export const alt = 'The Rabbit Hole — free Web3, crypto and AI courses';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogCard({
    title: 'How deep does it go?',
    subtitle: 'Free courses on tokenized stocks, DN404, TON and AI agents.',
    emoji: '🕳️',
  });
}
