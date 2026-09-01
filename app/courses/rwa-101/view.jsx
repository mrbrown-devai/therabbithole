'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { COURSE_ID, LEVELS, MARKET_STATS, PASS_MARK, QUIZ, TICKERS } from './content';

/* ---------------------------------------------------------------- markdown */

function renderContent(text) {
  return text.split('\n').map((line, i) => {
    const html = line
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-gray-300">$1</em>')
      .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-white/10 rounded text-emerald-300 text-sm font-mono">$1</code>')
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" class="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">$1</a>'
      );

    if (line.startsWith('- ')) {
      return (
        <div key={i} className="flex items-start gap-1 ml-4 my-1">
          <span
            dangerouslySetInnerHTML={{
              __html: '<span class="text-emerald-400 mr-2">•</span>' + html.replace(/^-\s*/, ''),
            }}
          />
        </div>
      );
    }
    if (/^\d+\.\s/.test(line)) {
      return <div key={i} className="ml-4 my-1" dangerouslySetInnerHTML={{ __html: html }} />;
    }
    if (line.trim() === '') return <div key={i} className="h-3" />;
    return <div key={i} className="my-1" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

/* ------------------------------------------------------------------ pieces */

function TickerTape() {
  const row = [...TICKERS, ...TICKERS];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-black/40 py-2.5">
      <div className="ticker-track flex w-max gap-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-2 font-mono text-xs whitespace-nowrap">
            <span className="text-emerald-400 font-semibold">{t.sym}</span>
            <span className="text-gray-600">{t.name}</span>
            <span className="text-gray-700">/</span>
            <span className="text-cyan-400">on-chain</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0f] to-transparent" />
    </div>
  );
}

function StatGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
      {MARKET_STATS.map((s) => (
        <div key={s.label} className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
          <div className="text-2xl font-black text-emerald-400">{s.value}</div>
          <div className="mt-1 text-xs text-gray-300">{s.label}</div>
          <div className="mt-0.5 text-[11px] text-gray-500">{s.note}</div>
        </div>
      ))}
    </div>
  );
}

const MODELS = [
  { n: '1', name: 'Issuer-sponsored', verdict: 'Best', tone: 'emerald', line: 'The company issues the token. Can carry real equity rights.' },
  { n: '2', name: 'Custodial / 1:1 backed', verdict: 'Common', tone: 'amber', line: 'A third party holds real shares. You carry their counterparty risk.' },
  { n: '3', name: 'Synthetic / linked', verdict: 'Riskiest', tone: 'red', line: 'No shares held. Price exposure only — no dividends, no ownership.' },
];

const TONES = {
  emerald: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300',
  amber: 'border-amber-500/30 bg-amber-500/5 text-amber-300',
  red: 'border-red-500/30 bg-red-500/5 text-red-300',
};

function ModelCards() {
  return (
    <div className="grid md:grid-cols-3 gap-3 my-4">
      {MODELS.map((m) => (
        <div key={m.n} className={`rounded-xl border p-4 ${TONES[m.tone]}`}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs opacity-70">MODEL {m.n}</span>
            <span className="rounded-full border border-current px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
              {m.verdict}
            </span>
          </div>
          <div className="mt-2 font-bold text-white">{m.name}</div>
          <div className="mt-1 text-xs leading-relaxed text-gray-400">{m.line}</div>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable({ table }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="bg-white/5">
            {table.head.map((h, i) => (
              <th
                key={i}
                className={`p-3 text-left text-xs font-semibold uppercase tracking-wide ${
                  i === 0 ? 'text-gray-500' : i === 1 ? 'text-gray-300' : 'text-emerald-400'
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr key={i} className="border-t border-white/5">
              <td className="p-3 text-gray-400">{r[0]}</td>
              <td className="p-3 text-gray-300">{r[1]}</td>
              <td className="p-3 text-emerald-200/90">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Checklist({ items, sectionId }) {
  const [done, setDone] = useState({});
  useEffect(() => {
    const raw = localStorage.getItem(`${COURSE_ID}-checklist`);
    if (raw) setDone(JSON.parse(raw)[sectionId] || {});
  }, [sectionId]);

  const toggle = (i) => {
    setDone((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      const raw = localStorage.getItem(`${COURSE_ID}-checklist`);
      const all = raw ? JSON.parse(raw) : {};
      all[sectionId] = next;
      localStorage.setItem(`${COURSE_ID}-checklist`, JSON.stringify(all));
      return next;
    });
  };

  return (
    <div className="my-3 space-y-2">
      {items.map((item, i) => (
        <label
          key={i}
          className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition hover:border-white/10"
        >
          <input
            type="checkbox"
            checked={!!done[i]}
            onChange={() => toggle(i)}
            className="mt-0.5 h-4 w-4 flex-shrink-0 rounded accent-emerald-500"
          />
          <span className={done[i] ? 'text-gray-500 line-through' : 'text-gray-300'}>{item}</span>
        </label>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------- quiz */

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = QUIZ.reduce((n, q, i) => n + (answers[i] === q.correct ? 1 : 0), 0);
  const passed = score >= PASS_MARK;
  const answeredAll = Object.keys(answers).length === QUIZ.length;

  useEffect(() => {
    const raw = localStorage.getItem(`${COURSE_ID}-quiz`);
    if (raw) {
      const saved = JSON.parse(raw);
      setAnswers(saved.answers || {});
      setSubmitted(!!saved.submitted);
    }
  }, []);

  const persist = (a, s) =>
    localStorage.setItem(`${COURSE_ID}-quiz`, JSON.stringify({ answers: a, submitted: s }));

  const pick = (qi, ai) => {
    if (submitted) return;
    const next = { ...answers, [qi]: ai };
    setAnswers(next);
    persist(next, false);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    persist({}, false);
  };

  return (
    <div className="space-y-4">
      {QUIZ.map((q, qi) => (
        <div key={qi} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
          <div className="mb-3 flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-teal-500/20 font-mono text-xs text-teal-300">
              {qi + 1}
            </span>
            <h4 className="text-sm font-semibold text-white">{q.q}</h4>
          </div>
          <div className="ml-9 space-y-2">
            {q.a.map((choice, ai) => {
              const chosen = answers[qi] === ai;
              const isCorrect = ai === q.correct;
              let cls = 'border-white/5 bg-white/[0.02] hover:border-white/20 text-gray-300';
              if (submitted) {
                if (isCorrect) cls = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200';
                else if (chosen) cls = 'border-red-500/50 bg-red-500/10 text-red-200';
                else cls = 'border-white/5 bg-white/[0.02] text-gray-500';
              } else if (chosen) {
                cls = 'border-teal-500/60 bg-teal-500/10 text-white';
              }
              return (
                <button
                  key={ai}
                  onClick={() => pick(qi, ai)}
                  disabled={submitted}
                  className={`flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition ${cls} ${
                    submitted ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <span className="font-mono text-xs opacity-60">{'abcd'[ai]}</span>
                  <span className="flex-1">{choice}</span>
                  {submitted && isCorrect && <span className="text-emerald-400">✓</span>}
                  {submitted && chosen && !isCorrect && <span className="text-red-400">✕</span>}
                </button>
              );
            })}
          </div>
          {submitted && (
            <p className="ml-9 mt-3 rounded-lg bg-white/5 p-3 text-xs italic leading-relaxed text-gray-400">
              💡 {q.explain}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={() => {
            setSubmitted(true);
            persist(answers, true);
          }}
          disabled={!answeredAll}
          className={`w-full rounded-xl py-3 font-semibold transition ${
            answeredAll
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500'
              : 'cursor-not-allowed bg-white/5 text-gray-600'
          }`}
        >
          {answeredAll ? 'Submit answers' : `Answer all ${QUIZ.length} questions (${Object.keys(answers).length}/${QUIZ.length})`}
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl border p-6 text-center ${
            passed ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-amber-500/40 bg-amber-500/10'
          }`}
        >
          <div className="text-5xl">{passed ? '🎓' : '📖'}</div>
          <div className="mt-3 text-3xl font-black text-white">
            {score} / {QUIZ.length}
          </div>
          {passed ? (
            <>
              <p className="mt-2 font-semibold text-emerald-300">Certificate unlocked — RWA Explorer</p>
              <p className="mt-1 text-sm text-gray-400">
                You cleared the {PASS_MARK}/{QUIZ.length} pass mark. You understand what you own when you buy a
                tokenized stock — which puts you ahead of most people buying them.
              </p>
            </>
          ) : (
            <>
              <p className="mt-2 font-semibold text-amber-300">Pass mark is {PASS_MARK}/{QUIZ.length}</p>
              <p className="mt-1 text-sm text-gray-400">
                Close. Revisit chapters 2 and 8 — the three models and the risk list carry most of the answers.
              </p>
            </>
          )}
          <button
            onClick={reset}
            className="mt-4 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
          >
            Retake quiz
          </button>
        </motion.div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------- page */

export default function RWA101Page() {
  const [openLevels, setOpenLevels] = useState({});
  const [openSections, setOpenSections] = useState({});
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    const raw = localStorage.getItem(COURSE_ID);
    if (raw) setCompleted(JSON.parse(raw).completed || {});
  }, []);

  const toggleLevel = (id) => setOpenLevels((p) => ({ ...p, [id]: !p[id] }));
  const toggleSection = (id) => setOpenSections((p) => ({ ...p, [id]: !p[id] }));
  const toggleComplete = (id) =>
    setCompleted((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(COURSE_ID, JSON.stringify({ completed: next }));
      return next;
    });

  const totalSections = LEVELS.reduce((n, l) => n + l.sections.length, 0);
  const progress = Math.round((Object.values(completed).filter(Boolean).length / totalSections) * 100);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/90 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-gray-400 transition hover:text-white">
            <span>←</span>
            <span className="text-sm">Back to courses</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-400">{progress}%</span>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden px-4 py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="mb-4 block text-6xl">📈</span>
            <h1 className="mb-3 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
              RWA 101: Tokenized Stocks
            </h1>
            <p className="text-xl text-gray-400">Wall Street on-chain</p>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-500">
              Own Apple, Nvidia and Tesla from your crypto wallet. 24/7. No broker required.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-emerald-300">
              10 chapters
            </span>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/20 px-3 py-1 text-cyan-300">
              ~50 min
            </span>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-blue-300">
              Beginner → Intermediate
            </span>
            <span className="rounded-full border border-teal-500/30 bg-teal-500/20 px-3 py-1 text-teal-300">
              Interactive quiz
            </span>
          </div>
        </div>
      </section>

      <TickerTape />

      {/* chapters */}
      <section className="px-4 pb-12 pt-10">
        <div className="container mx-auto max-w-4xl space-y-4">
          {LEVELS.map((level) => {
            const allDone = level.sections.every((s) => completed[s.id]);
            const isOpen = openLevels[level.id];
            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * level.id }}
                className="overflow-hidden rounded-2xl border border-white/10"
                style={{ backgroundColor: level.bgColor }}
              >
                <button
                  onClick={() => toggleLevel(level.id)}
                  className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-white/5"
                >
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ backgroundColor: level.color + '33' }}
                  >
                    {allDone ? '✅' : level.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-gray-500">CH.{level.id}</span>
                      {allDone && <span className="text-xs text-emerald-400">Complete</span>}
                    </div>
                    <h3 className="text-lg font-bold">{level.title}</h3>
                    <p className="text-sm text-gray-400">{level.subtitle}</p>
                  </div>
                  <span
                    className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    ▼
                  </span>
                </button>

                {/* rendered even when collapsed so the text is crawlable */}
                <div className={`px-5 pb-5${isOpen ? '' : ' hidden'}`}>
                  <p className="mb-4 pl-16 text-sm italic text-gray-400">{level.intro}</p>
                    <div className="space-y-3">
                      {level.sections.map((section) => {
                        const open = openSections[section.id];
                        return (
                          <div
                            key={section.id}
                            className={`rounded-xl border transition ${
                              section.critical
                                ? 'border-red-500/30 bg-red-500/5'
                                : 'border-white/5 bg-white/[0.02]'
                            }`}
                          >
                            <button
                              onClick={() => toggleSection(section.id)}
                              className="flex w-full items-center gap-3 p-4 text-left"
                            >
                              <input
                                type="checkbox"
                                checked={!!completed[section.id]}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  toggleComplete(section.id);
                                }}
                                onClick={(e) => e.stopPropagation()}
                                className="h-5 w-5 flex-shrink-0 rounded accent-emerald-500"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold">{section.title}</h4>
                                {!open && <p className="mt-1 text-xs text-gray-500">{section.why}</p>}
                              </div>
                              {section.critical && (
                                <span className="rounded bg-red-500/20 px-2 py-0.5 text-xs text-red-300">
                                  Important
                                </span>
                              )}
                              <span
                                className={`text-sm text-gray-600 transition-transform ${open ? 'rotate-180' : ''}`}
                              >
                                ▼
                              </span>
                            </button>

                            <div
                              className={`px-4 pb-4 text-sm leading-relaxed text-gray-300${
                                open ? '' : ' hidden'
                              }`}
                            >
                              <div className="mb-3 rounded-lg bg-white/5 p-3 text-xs italic text-gray-400">
                                💡 {section.why}
                              </div>
                              {section.stats && <StatGrid />}
                              {section.models && <ModelCards />}
                              {section.table && <ComparisonTable table={section.table} />}
                              {section.checklist && (
                                <Checklist items={section.checklist} sectionId={section.id} />
                              )}
                              {section.content && renderContent(section.content)}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {level.sources && (
                      <div className="mt-4 rounded-xl border border-white/5 bg-black/20 p-4">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Chapter {level.id} sources
                        </div>
                        <div className="grid gap-1.5 text-xs md:grid-cols-2">
                          {level.sources.map((s) => (
                            <a
                              key={s.label}
                              href={s.href}
                              target={s.href.startsWith('/') ? undefined : '_blank'}
                              rel="noopener noreferrer"
                              className="text-gray-400 transition hover:text-emerald-400"
                            >
                              {s.label} →
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </motion.div>
            );
          })}

          {/* quiz chapter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="overflow-hidden rounded-2xl border border-teal-500/20"
            style={{ backgroundColor: '#0a2c2c' }}
          >
            <button
              onClick={() => toggleLevel('quiz')}
              className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-white/5"
            >
              <div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl"
                style={{ backgroundColor: '#14b8a633' }}
              >
                🎓
              </div>
              <div className="min-w-0 flex-1">
                <span className="font-mono text-xs text-gray-500">CH.10</span>
                <h3 className="text-lg font-bold">Quiz — Test Your RWA Knowledge</h3>
                <p className="text-sm text-gray-400">
                  {QUIZ.length} questions · pass mark {PASS_MARK}/{QUIZ.length} · certificate &ldquo;RWA Explorer&rdquo;
                </p>
              </div>
              <span
                className={`text-gray-500 transition-transform duration-300 ${openLevels.quiz ? 'rotate-180' : ''}`}
              >
                ▼
              </span>
            </button>
            <div className={`px-5 pb-5${openLevels.quiz ? '' : ' hidden'}`}>
              <p className="mb-4 pl-16 text-sm italic text-gray-400">
                Ten questions covering everything from the three models to ERC-8056 and the risk list. Answers are
                saved as you go.
              </p>
              <Quiz />
            </div>
          </motion.div>
        </div>
      </section>

      {/* cross-link */}
      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/courses/dn404"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-500/30 hover:bg-white/[0.05]"
          >
            <span className="text-4xl">🦄</span>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wide text-gray-500">Next rabbit hole</div>
              <div className="font-bold">DN404: NFT Ownership Reimagined</div>
              <div className="text-sm text-gray-400">
                How a pixel unicorn ends up paying you in Nvidia — the standard behind the Stock Back model.
              </div>
            </div>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent opacity-80 transition group-hover:opacity-100">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* sources */}
      <section className="border-t border-white/5 px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <h3 className="mb-4 text-lg font-bold">📚 Sources &amp; Further Reading</h3>
          <div className="grid gap-3 text-sm md:grid-cols-2">
            {[
              ['SEC Guidance on Tokenized Securities (Jan 2026)', 'https://www.sec.gov/newsroom/speeches-statements'],
              ['DefiLlama RWA Dashboard', 'https://defillama.com/protocols/RWA'],
              ['DefiLlama — Robinhood Chain', 'https://defillama.com/chain/robinhood-chain'],
              ['RWA.xyz — live market data', 'https://www.rwa.xyz/'],
              ['Securitize', 'https://securitize.io/'],
              ['Ondo Finance', 'https://ondo.finance/'],
              ['Dinari (dShares)', 'https://dinari.com/'],
              ['Robinhood Stock Tokens', 'https://robinhood.com/us/en/stock-tokens/'],
              ['Robinhood Chain Stock Token Documentation', 'https://docs.robinhood.com/chain/'],
              ['$FUNI — funi.art', 'https://funi.art/'],
              ['UniPump Waitlist', 'https://unipump.fun/waitlist/'],
              ['RWA404', 'https://rwa404.app/'],
              ['Quotrons', 'https://www.quotrons.cash/'],
              ['StonkBrokers', 'https://www.stonkbrokers.cash/'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 transition hover:text-emerald-300"
              >
                {label} →
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-relaxed text-gray-600">
            Educational content only. Not financial advice. Tokenized stocks are economic exposure, not shares —
            figures are as of August 2026 and change constantly. Do your own research.
          </p>
        </div>
      </section>
    </main>
  );
}
