import data from '../data/metrics.json';

/**
 * Live figures refreshed weekly by scripts/update-metrics.mjs and committed to
 * the repo, so they are baked in at build time rather than fetched by visitors.
 */
export const METRICS = data.metrics;
export const METRICS_UPDATED_AT = data.updatedAt;
export const METRICS_SOURCE = data.source;

/** 27529749511 -> "$27.53B" */
export function usd(n, digits = 2) {
  if (typeof n !== 'number' || !Number.isFinite(n)) return '—';
  const abs = Math.abs(n);
  if (abs >= 1e12) return `$${(n / 1e12).toFixed(digits)}T`;
  if (abs >= 1e9) return `$${(n / 1e9).toFixed(digits)}B`;
  if (abs >= 1e6) return `$${(n / 1e6).toFixed(digits)}M`;
  if (abs >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

/** "August 2026" — for the "figures as of" line. */
export function metricsMonth(locale = 'en') {
  if (!METRICS_UPDATED_AT) return '';
  try {
    return new Date(METRICS_UPDATED_AT).toLocaleDateString(locale, {
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

/**
 * Values addressable from course prose as {{token}}. Keeping this map explicit
 * means a typo renders the literal token rather than silently vanishing, which
 * is easy to spot in review.
 */
export const TOKENS = {
  rwaTvl: usd(METRICS.rwaTvl?.value),
  rwaProtocolCount: String(METRICS.rwaTvl?.count ?? '—'),
  robinhoodTvl: usd(METRICS.robinhoodChain?.value),
  robinhoodStables: usd(METRICS.robinhoodStables?.value),
  tonTvl: usd(METRICS.tonTvl?.value),
  asOf: metricsMonth(),
};

/** Replaces {{token}} in course copy with the current value. */
export function applyMetrics(text) {
  if (typeof text !== 'string') return text;
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) =>
    key in TOKENS ? TOKENS[key] : match
  );
}
