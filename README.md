# The Rabbit Hole

Source for [therabbithole.academy](https://therabbithole.academy) — free, visual Web3 courses.

Next.js 14 (App Router) · React 18 · Tailwind CSS 3 · framer-motion · deployed on Vercel.

## Courses

| Route | Course | i18n |
| --- | --- | --- |
| `/` | Landing + course index | 6 languages |
| `/courses/rwa-101` | RWA 101: Tokenized Stocks | English |
| `/courses/dn404` | DN404: NFT Ownership Reimagined | English |
| `/courses/telegram-fundamentals` | Telegram + TON Masterclass | 6 languages |
| `/courses/agent-protocol` | Agent Protocol | 6 languages |

Six-language content for the Telegram/TON courses lives in `contexts/LanguageContext.js`
and is served through the `LanguageProvider` mounted in `app/layout.js`.

## Local development

```bash
npm install
npm run dev
```

## A note on the source

This repository was reconstructed from the deployed production bundles, because the project
had been deployed to Vercel as raw file trees with no git remote and no surviving local copy.
Rendered output was verified identical to production for `/`, `/courses/dn404`,
`/courses/telegram-fundamentals` and `/courses/agent-protocol` before the first commit.

Two consequences worth knowing:

- The four recovered pages are **de-minified**, not original source. They are valid, buildable
  modules that call `jsx()`/`jsxs()` directly instead of using JSX syntax, and they import
  vendor namespaces through the small shims in `lib/`. Content edits are straightforward;
  large refactors are easier done by rewriting a page in idiomatic JSX.
- `app/courses/rwa-101/` is hand-written in normal JSX and is the model to follow for new courses.

## Known issues

Five courses are listed on the landing page but have no route and currently 404:
`pavel-durov`, `ton-history`, `ton-technology`, `memecoin-trading`, `ton-gifts`.
