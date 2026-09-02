'use client';

import { useEffect, useState } from 'react';
import { readStoredLanguage } from '../lib/i18n';

/**
 * Two things changed for TON in 2026 and the course bodies still read as if
 * they hadn't:
 *
 *   4 May 2026  — Telegram replaced the TON Foundation as the network's
 *                 driving force and became its largest validator.
 *   15 Jun 2026 — after an 81.22% community vote, the native token was
 *                 renamed Toncoin (TON) -> Gram (GRAM). Name, ticker and logo
 *                 only; balances, addresses, contracts, NFTs and staking were
 *                 untouched.
 *
 * Rather than rewrite ~40 embedded amounts across six languages — which would
 * also falsify historical figures that were quoted in TON at the time — the
 * courses carry this note and keep their original numbers.
 */

const COPY = {
  en: {
    tag: '2026 update',
    body:
      'The token is now **Gram (GRAM)** — renamed from Toncoin (TON) on 15 June 2026 after an 81.22% community vote. Only the name, ticker and logo changed. The network is still called **The Open Network (TON)**. Amounts quoted below are historical and were correct when written.',
  },
  fr: {
    tag: 'Mise à jour 2026',
    body:
      "Le token s'appelle désormais **Gram (GRAM)** — renommé depuis Toncoin (TON) le 15 juin 2026 après un vote communautaire à 81,22 %. Seuls le nom, le ticker et le logo ont changé. Le réseau, lui, s'appelle toujours **The Open Network (TON)**. Les montants cités ci-dessous sont historiques et étaient exacts au moment de leur rédaction.",
  },
  'pt-BR': {
    tag: 'Atualização 2026',
    body:
      'O token agora é **Gram (GRAM)** — renomeado a partir de Toncoin (TON) em 15 de junho de 2026, após uma votação da comunidade com 81,22%. Mudaram apenas o nome, o ticker e o logo. A rede continua se chamando **The Open Network (TON)**. Os valores citados abaixo são históricos e estavam corretos quando foram escritos.',
  },
  es: {
    tag: 'Actualización 2026',
    body:
      'El token ahora es **Gram (GRAM)**: se renombró desde Toncoin (TON) el 15 de junio de 2026 tras una votación de la comunidad del 81,22 %. Solo cambiaron el nombre, el ticker y el logo. La red se sigue llamando **The Open Network (TON)**. Las cantidades citadas más abajo son históricas y eran correctas cuando se escribieron.',
  },
  ru: {
    tag: 'Обновление 2026',
    body:
      'Токен теперь называется **Gram (GRAM)** — переименован из Toncoin (TON) 15 июня 2026 года после голосования сообщества с результатом 81,22 %. Изменились только название, тикер и логотип. Сеть по-прежнему называется **The Open Network (TON)**. Суммы, указанные ниже, историчны и были верны на момент написания.',
  },
  zh: {
    tag: '2026 年更新',
    body:
      '代币现已更名为 **Gram（GRAM）** —— 于 2026 年 6 月 15 日经社区 81.22% 投票通过，由 Toncoin（TON）更名而来。仅名称、代号和标识发生变化。网络名称仍为 **The Open Network（TON）**。下文引用的金额为历史数据，在撰写时是准确的。',
  },
};

function bold(text) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );
}

export default function TokenRenameNotice() {
  const [lang, setLang] = useState('en');
  useEffect(() => setLang(readStoredLanguage()), []);
  const copy = COPY[lang] || COPY.en;

  return (
    <div className="border-b border-amber-500/20 bg-amber-500/[0.07] px-4 py-3">
      <div className="container mx-auto flex max-w-4xl items-start gap-3">
        <span className="mt-0.5 flex-shrink-0 rounded-full border border-amber-500/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-300">
          {copy.tag}
        </span>
        <p className="text-xs leading-relaxed text-amber-100/80">{bold(copy.body)}</p>
      </div>
    </div>
  );
}
