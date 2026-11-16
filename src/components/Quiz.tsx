import { useState } from 'react';
import type { QuizQuestion } from '../content/types';
import { Rich, useLang } from '../i18n';
import { ui } from '../ui';
import { markPassed, usePassed } from '../progress';

/** A short multiple-choice test at the end of a chapter. All answers right = chapter passed. */
export function Quiz({ id, questions }: { id: string; questions: QuizQuestion[] }) {
  const { t } = useLang();
  const passed = usePassed().has(id);
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null));
  const answered = picked.every(p => p !== null);
  const allRight = answered && picked.every((p, i) => p === questions[i].answer);

  function pick(qi: number, oi: number) {
    if (picked[qi] !== null) return;
    const next = picked.map((p, i) => (i === qi ? oi : p));
    setPicked(next);
    if (next.every((p, i) => p === questions[i].answer)) markPassed(id);
  }

  return (
    <section className="quiz" aria-label={t(ui.test)}>
      <div className="qh"><b>{t(ui.test)}</b>{passed && <span className="done">{t(ui.passed)}</span>}</div>
      {questions.map((q, qi) => {
        const p = picked[qi];
        return (
          <fieldset key={qi}>
            <legend><Rich s={q.q} /></legend>
            {q.options.map((o, oi) => {
              const cls = p === null ? '' : oi === q.answer ? 'right' : oi === p ? 'wrong' : '';
              return <button key={oi} type="button" className={`opt ${cls}`} disabled={p !== null} onClick={() => pick(qi, oi)}><Rich s={o} /></button>;
            })}
            {p !== null && <p className="why"><b>{t(p === q.answer ? ui.right : ui.wrong)}</b> <Rich s={q.why} /></p>}
          </fieldset>
        );
      })}
      {answered && !allRight && <div><button type="button" className="btn" onClick={() => setPicked(questions.map(() => null))}>{t(ui.retry)}</button></div>}
    </section>
  );
}
