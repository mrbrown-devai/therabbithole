import { ImageResponse } from 'next/og';
import { SITE_NAME } from './site';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

/**
 * Shared Open Graph card. Kept deliberately typographic — no remote fonts or
 * images, so generation never depends on the network.
 */
export function ogCard({ eyebrow, title, subtitle, emoji, gradient = ['#a78bfa', '#22d3ee'] }) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0a0a0f',
          backgroundImage: [
            `radial-gradient(900px circle at 8% -10%, ${gradient[0]}2e, transparent 60%)`,
            `radial-gradient(900px circle at 105% 115%, ${gradient[1]}2b, transparent 60%)`,
          ].join(','),
          padding: '64px 72px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 40 }}>🐇</div>
          <div style={{ fontSize: 28, color: '#e5e7eb', fontWeight: 700, letterSpacing: -0.5 }}>
            {SITE_NAME}
          </div>
          {eyebrow ? (
            <div
              style={{
                marginLeft: 12,
                padding: '6px 16px',
                borderRadius: 999,
                border: `2px solid ${gradient[0]}`,
                color: gradient[0],
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {emoji ? <div style={{ fontSize: 76, marginBottom: 12 }}>{emoji}</div> : null}
          <div
            style={{
              fontSize: title.length > 42 ? 62 : 76,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ marginTop: 20, fontSize: 32, color: '#9ca3af', maxWidth: 940 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, color: '#6b7280' }}>
          <div style={{ color: gradient[1], fontWeight: 700 }}>therabbithole.academy</div>
          <div>·</div>
          <div>Free · No signup</div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
