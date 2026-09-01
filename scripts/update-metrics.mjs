#!/usr/bin/env node
/**
 * Refresh the live figures quoted in the courses from DefiLlama's public API.
 *
 * Run weekly by .github/workflows/update-metrics.yml, which commits the result.
 * Nothing here talks to the site at runtime — the build reads the committed
 * JSON — so a DefiLlama outage can never show a visitor a blank number.
 *
 * Failure policy: each metric is fetched independently. If one fails we keep
 * the previous committed value and carry on; the site never regresses to
 * placeholder text. Only a total wipeout (no metric updated at all) exits
 * non-zero, so the workflow surfaces it.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'data/metrics.json');
const TIMEOUT_MS = 45_000;

async function getJson(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { accept: 'application/json', 'user-agent': 'therabbithole.academy metrics bot' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

/** Each metric knows how to fetch itself and is allowed to fail alone. */
const METRICS = {
  async rwaTvl() {
    const protocols = await getJson('https://api.llama.fi/protocols');
    const rwa = protocols.filter((p) => p.category === 'RWA');
    if (!rwa.length) throw new Error('no RWA protocols in response');
    return {
      value: rwa.reduce((sum, p) => sum + (p.tvl || 0), 0),
      count: rwa.length,
    };
  },

  async robinhoodChain() {
    const chains = await getJson('https://api.llama.fi/v2/chains');
    const chain = chains.find((c) => c.name === 'Robinhood Chain');
    if (!chain) throw new Error('Robinhood Chain not listed');
    return { value: chain.tvl };
  },

  async robinhoodStables() {
    const chains = await getJson('https://stablecoins.llama.fi/stablecoinchains');
    const chain = chains.find((c) => c.name === 'Robinhood Chain');
    if (!chain) throw new Error('Robinhood Chain not in stablecoin data');
    return { value: chain.totalCirculatingUSD?.peggedUSD ?? 0 };
  },

  async tonTvl() {
    const chains = await getJson('https://api.llama.fi/v2/chains');
    const chain = chains.find((c) => c.name === 'TON');
    if (!chain) throw new Error('TON not listed');
    return { value: chain.tvl };
  },
};

function loadPrevious() {
  try {
    return JSON.parse(readFileSync(OUT, 'utf8'));
  } catch {
    return { updatedAt: null, metrics: {} };
  }
}

const previous = loadPrevious();
const metrics = { ...previous.metrics };
let updated = 0;
const failures = [];

for (const [key, fetcher] of Object.entries(METRICS)) {
  try {
    const result = await fetcher();
    metrics[key] = { ...result, fetchedAt: new Date().toISOString() };
    updated += 1;
    console.log(`  ok    ${key} = ${result.value}`);
  } catch (err) {
    failures.push(`${key}: ${err.message}`);
    const kept = previous.metrics?.[key];
    console.warn(`  FAIL  ${key} (${err.message}) — ${kept ? 'keeping previous value' : 'no previous value'}`);
  }
}

if (updated === 0) {
  console.error('\nEvery metric failed; refusing to rewrite the file.');
  console.error(failures.join('\n'));
  process.exit(1);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(
  OUT,
  JSON.stringify({ updatedAt: new Date().toISOString(), source: 'DefiLlama', metrics }, null, 2) + '\n'
);

console.log(`\n${updated}/${Object.keys(METRICS).length} metrics refreshed -> data/metrics.json`);
if (failures.length) console.log(`kept previous values for: ${failures.length}`);
