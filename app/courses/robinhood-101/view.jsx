'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { COURSE_ID, LEVELS, PASS_MARK, QUIZ, CHAIN_STATS, UI } from './content';
import TRANSLATIONS from './translations';
import { applyMetrics } from '../../../lib/metrics';
import {
  LANGUAGES,
  mergeTranslation,
  readStoredLanguage,
  storeLanguage,
} from '../../../lib/i18n';

/* ------------------------------------------------------------------ course */

const CourseContext = createContext(null);
const useCourse = () => useContext(CourseContext);

/** "Answer all {n} questions" -> "Answer all 10 questions" */
function fmt(template, vars) {
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replaceAll(`{${k}}`, String(v)),
    template
  );
}

/* ---------------------------------------------------------------- markdown */

/** {{tokens}} resolve to the weekly DefiLlama figures before any other markup. */
function inline(line) {
  return applyMetrics(line)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-gray-300">$1</em>')
    .replace(
      /`(.*?)`/g,
      '<code class="px-1.5 py-0.5 bg-white/10 rounded text-[#00A604] text-sm font-mono">$1</code>'
    )
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-[#CCFF00] hover:text-[#00A604] underline underline-offset-2">$1</a>'
    );
}

function renderContent(text) {
  return text.split('\n').map((line, i) => {
    const html = inline(line);
    if (line.startsWith('- ')) {
      return (
        <div key={i} className="my-1 ml-4 flex items-start gap-1">
          <span
            dangerouslySetInnerHTML={{
              __html: '<span class="text-[#CCFF00] mr-2">•</span>' + html.replace(/^-\s*/, ''),
            }}
          />
        </div>
      );
    }
    if (/^\d+\.\s/.test(line)) {
      return <div key={i} className="my-1 ml-4" dangerouslySetInnerHTML={{ __html: html }} />;
    }
    if (line.trim() === '') return <div key={i} className="h-3" />;
    return <div key={i} className="my-1" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

/* ------------------------------------------------------------------ pieces */

function LanguageSelect({ language, onChange }) {
  return (
    <select
      value={language}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Language"
      className="cursor-pointer appearance-none rounded-lg border-none bg-white/5 py-2 pl-3 pr-8 text-sm font-medium text-white transition hover:bg-white/10"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '16px',
        backgroundPosition: 'right 8px center',
      }}
    >
      {LANGUAGES.map((l) => (
        <option key={l.code} value={l.code} className="bg-slate-800 text-white">
          {l.flag} {l.label}
        </option>
      ))}
    </select>
  );
}

/** Dated events, the spine of a biography chapter. */
function Timeline({ items }) {
  return (
    <div className="my-4 space-y-0">
      {items.map((item, i) => (
        <div key={item.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#CCFF00]" />
            {i < items.length - 1 && <div className="w-px flex-1 bg-white/10" />}
          </div>
          <div className="pb-5">
            <div className="font-mono text-xs uppercase tracking-wide text-[#00A604]/80">
              {item.date}
            </div>
            <div className="mt-0.5 text-sm font-semibold text-white">{item.title}</div>
            <div
              className="mt-1 text-sm leading-relaxed text-gray-400"
              dangerouslySetInnerHTML={{ __html: inline(item.content) }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/** The pull-out lesson. One per chapter at most. */
function Callout({ variant, content }) {
  const tone =
    variant === 'important'
      ? 'border-[#CCFF00]/30 bg-[#CCFF00]/10'
      : 'border-white/10 bg-white/5';
  return (
    <div className={`my-4 rounded-xl border p-4 text-sm leading-relaxed ${tone}`}>
      <div
        className="text-gray-200"
        dangerouslySetInnerHTML={{ __html: inline(content) }}
      />
    </div>
  );
}

function StatGrid() {
  const { chainStats } = useCourse();
  return (
    <div className="my-4 grid grid-cols-2 gap-3 md:grid-cols-4">
      {chainStats.map((s) => (
        <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="text-xs text-gray-500">{s.label}</div>
          <div className="mt-1 text-xl font-bold text-white">{applyMetrics(s.value)}</div>
          <div className="mt-0.5 text-[11px] text-gray-500">{applyMetrics(s.note)}</div>
        </div>
      ))}
    </div>
  );
}

/** The whole-life recap in the final chapter. */
function Summary({ items }) {
  return (
    <div className="my-4 space-y-1.5">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-gray-300"
          dangerouslySetInnerHTML={{ __html: inline(item) }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------- quiz */

function Quiz() {
  const { ui, quiz } = useCourse();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const score = quiz.reduce((n, q, i) => n + (answers[i] === q.correct ? 1 : 0), 0);
  const passed = score >= PASS_MARK;

  const pick = (qi, ai) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qi]: ai }));
  };

  return (
    <div className="space-y-4">
      {quiz.map((q, qi) => {
        const chosen = answers[qi];
        return (
          <div key={qi} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="mb-3 flex gap-2 text-sm font-semibold text-white">
              <span className="font-mono text-gray-500">{qi + 1}.</span>
              <span>{q.q}</span>
            </div>
            <div className="space-y-2">
              {q.a.map((option, ai) => {
                const isChosen = chosen === ai;
                const isCorrect = ai === q.correct;
                let cls = 'border-white/10 bg-white/[0.02] hover:border-white/20';
                if (submitted && isCorrect) cls = 'border-[#CCFF00]/60 bg-[#CCFF00]/15';
                else if (submitted && isChosen) cls = 'border-[#FF5C5C]/60 bg-[#FF5C5C]/10';
                else if (isChosen) cls = 'border-[#CCFF00]/60 bg-[#CCFF00]/10';
                return (
                  <button
                    key={ai}
                    type="button"
                    onClick={() => pick(qi, ai)}
                    disabled={submitted}
                    className={`w-full rounded-lg border px-3 py-2 text-left text-sm text-gray-300 transition ${cls}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-3 rounded-lg bg-white/5 p-3 text-xs leading-relaxed text-gray-400">
                {q.explain}
              </p>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={answeredCount < quiz.length}
          className={`w-full rounded-xl py-3 font-semibold transition ${
            answeredCount < quiz.length
              ? 'cursor-not-allowed bg-white/5 text-gray-600'
              : 'bg-gradient-to-r from-[#CCFF00] to-[#00A604] text-[#110E08] hover:opacity-90'
          }`}
        >
          {answeredCount < quiz.length
            ? fmt(ui.quizAnswerAll, { n: quiz.length, done: answeredCount })
            : ui.quizSubmit}
        </button>
      ) : (
        <div
          className={`rounded-xl border p-5 text-center ${
            passed ? 'border-[#CCFF00]/40 bg-[#CCFF00]/10' : 'border-amber-500/30 bg-amber-500/10'
          }`}
        >
          <div className="text-3xl font-black text-white">
            {score}/{quiz.length}
          </div>
          <div className="mt-2 font-semibold text-white">
            {passed
              ? ui.quizPassTitle
              : fmt(ui.quizFailTitle, { pass: PASS_MARK, n: quiz.length })}
          </div>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-gray-400">
            {fmt(passed ? ui.quizPassBody : ui.quizFailBody, {
              pass: PASS_MARK,
              n: quiz.length,
            })}
          </p>
          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
            }}
            className="mt-4 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/5"
          >
            {ui.quizRetake}
          </button>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------- page */

export default function VladTenevPage() {
  const [language, setLanguage] = useState('en');
  const [openLevels, setOpenLevels] = useState({});
  const [openSections, setOpenSections] = useState({});
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    setLanguage(readStoredLanguage());
    try {
      const raw = localStorage.getItem(COURSE_ID);
      if (raw) setCompleted(JSON.parse(raw).completed || {});
    } catch {
      /* ignore */
    }
  }, []);

  const changeLanguage = (code) => {
    setLanguage(code);
    storeLanguage(code);
  };

  // English is the source; overlays carry text only, and anything a translation
  // omits falls back to English rather than rendering empty.
  const course = useMemo(
    () =>
      mergeTranslation(
        { ui: UI, levels: LEVELS, quiz: QUIZ, chainStats: CHAIN_STATS },
        TRANSLATIONS[language]
      ),
    [language]
  );

  const { ui, levels, quiz } = course;

  const toggleLevel = (id) => setOpenLevels((p) => ({ ...p, [id]: !p[id] }));
  const toggleSection = (id) => setOpenSections((p) => ({ ...p, [id]: !p[id] }));
  const toggleComplete = (id) =>
    setCompleted((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(COURSE_ID, JSON.stringify({ completed: next }));
      } catch {
        /* ignore */
      }
      return next;
    });

  const totalSections = levels.reduce((n, l) => n + l.sections.length, 0);
  const progress = Math.round(
    (Object.values(completed).filter(Boolean).length / totalSections) * 100
  );

  return (
    <CourseContext.Provider value={course}>
      <main className="min-h-screen bg-[#0a0a0f] text-white">
        <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/90 backdrop-blur-xl">
          <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-4">
            <Link href="/" className="flex items-center gap-2 text-gray-400 transition hover:text-white">
              <span>←</span>
              <span className="hidden text-sm sm:inline">{ui.back}</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="h-2 w-20 overflow-hidden rounded-full bg-white/10 sm:w-24">
                <div
                  className="h-full bg-gradient-to-r from-[#CCFF00] to-[#00A604] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-sm text-gray-400">{progress}%</span>
              <LanguageSelect language={language} onChange={changeLanguage} />
            </div>
          </div>
        </header>

        {/* hero — the cover art carries the title, subtitle and stat row, so the
            text hero it replaces would only repeat it. The h1 and lede stay in
            the DOM for search engines and screen readers, which cannot read the
            image. */}
        <section className="px-4 pt-6">
          <div className="container mx-auto max-w-5xl">
            <h1 className="sr-only">{ui.heroTitle}</h1>
            <p className="sr-only">{ui.heroSubtitle}</p>
            <p className="sr-only">{ui.heroLede}</p>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/covers/robinhood-101.webp"
                alt={`${ui.heroTitle} — ${ui.heroSubtitle}`}
                width={1600}
                height={800}
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* chapters */}
        <section className="px-4 pb-12 pt-4">
          <div className="container mx-auto max-w-4xl space-y-4">
            {levels.map((level) => {
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
                        {allDone && <span className="text-xs text-emerald-400">✓</span>}
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

                  {/* rendered even when collapsed so the text stays crawlable */}
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
                                ? 'border-amber-500/30 bg-amber-500/5'
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
                                className="h-5 w-5 flex-shrink-0 rounded accent-[#CCFF00]"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold">{section.title}</h4>
                                {!open && <p className="mt-1 text-xs text-gray-500">{section.why}</p>}
                              </div>
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
                              {section.content && renderContent(section.content)}
                              {section.timeline && <Timeline items={section.timeline} />}
                              {section.stats && <StatGrid />}
                              {section.summary && <Summary items={section.summary} />}
                              {section.callout && (
                                <Callout
                                  variant={section.callout.variant}
                                  content={section.callout.content}
                                />
                              )}
                              {section.link && (
                                <Link
                                  href={section.link.href}
                                  className="mt-2 inline-block text-sm text-[#CCFF00] transition hover:text-[#00A604]"
                                >
                                  {section.link.label}
                                </Link>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {level.sources && (
                      <div className="mt-4 rounded-xl border border-white/5 bg-black/20 p-4">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {fmt(ui.chapterSources, { n: level.id })}
                        </div>
                        <div className="grid gap-1.5 text-xs md:grid-cols-2">
                          {level.sources.map((s) => (
                            <a
                              key={s.label}
                              href={s.href}
                              target={s.href.startsWith('/') ? undefined : '_blank'}
                              rel="noopener noreferrer"
                              className="text-gray-400 transition hover:text-[#CCFF00]"
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
              transition={{ delay: 0.4 }}
              className="overflow-hidden rounded-2xl border border-[#CCFF00]/20"
              style={{ backgroundColor: '#0d1f0d' }}
            >
              <button
                onClick={() => toggleLevel('quiz')}
                className="flex w-full items-center gap-4 p-5 text-left transition hover:bg-white/5"
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl"
                  style={{ backgroundColor: '#CCFF0033' }}
                >
                  🎓
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-xs text-gray-500">CH.8</span>
                  <h3 className="text-lg font-bold">{ui.quizChapterTitle}</h3>
                  <p className="text-sm text-gray-400">
                    {fmt(ui.quizChapterSubtitle, { n: quiz.length, pass: PASS_MARK })}
                  </p>
                </div>
                <span
                  className={`text-gray-500 transition-transform duration-300 ${openLevels.quiz ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>
              </button>
              <div className={`px-5 pb-5${openLevels.quiz ? '' : ' hidden'}`}>
                <p className="mb-4 pl-16 text-sm italic text-gray-400">{ui.quizIntro}</p>
                <Quiz />
              </div>
            </motion.div>
          </div>
        </section>

        {/* cross-links */}
        <section className="px-4 pb-12">
          <div className="container mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            <Link
              href="/courses/rwa-101"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#CCFF00]/40 hover:bg-white/[0.05]"
            >
              <span className="text-4xl">📈</span>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wide text-gray-500">{ui.nextEyebrow}</div>
                <div className="font-bold">{ui.nextTitle}</div>
                <div className="text-sm text-gray-400">{ui.nextBody}</div>
              </div>
            </Link>
            <Link
              href="/courses/vlad-tenev"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#00A604]/40 hover:bg-white/[0.05]"
            >
              <span className="text-4xl">🏹</span>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wide text-gray-500">
                  {ui.companionEyebrow}
                </div>
                <div className="font-bold">{ui.companionTitle}</div>
                <div className="text-sm text-gray-400">{ui.companionBody}</div>
              </div>
            </Link>
          </div>
        </section>

        {/* sources */}
        <section className="border-t border-white/5 px-4 py-12">
          <div className="container mx-auto max-w-4xl">
            <h3 className="mb-4 text-lg font-bold">{ui.sourcesHeading}</h3>
            <div className="grid gap-3 text-sm md:grid-cols-2">
              {[
                ['Vlad Tenev — Robinhood Investor Relations', 'https://investors.robinhood.com/management/vlad-tenev'],
                ['Robinhood Board of Directors', 'https://investors.robinhood.com/governance/board-of-directors'],
                ['Robinhood Newsroom', 'https://robinhood.com/us/en/newsroom/'],
                ['Robinhood Presents: The World is Flat', 'https://robinhood.com/us/en/newsroom/robinhood-presents-the-world-is-flat/'],
                ['Vlad Tenev — Wikipedia', 'https://en.wikipedia.org/wiki/Vlad_Tenev'],
                ['UCLA Math — 2019 Commencement Keynote', 'https://ww3.math.ucla.edu/2019-math-commencement-keynote-speaker-vladimir-tenev'],
                ['Who is Vlad Tenev? The Robinhood CEO explained', 'https://cryptonews.net/news/other/33163402/'],
                ['The Rabbit Hole — Pavel Durov', '/courses/pavel-durov'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('/') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-gray-400 transition hover:text-[#CCFF00]"
                >
                  {label} →
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-relaxed text-gray-600">{ui.disclaimer}</p>
          </div>
        </section>
      </main>
    </CourseContext.Provider>
  );
}
