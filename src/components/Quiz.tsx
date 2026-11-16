import { useState } from 'react';
import type { QuizQuestion } from '../content/types';
import { Rich, useLang } from '../i18n';
import { ui } from '../ui';
import { markPassed, usePassed } from '../progress';

/**
 * "Test yourself" as a deck of cards: one question at a time, answer, read why, next.
 * All answers right on the first try = chapter passed (remembered in this browser).
 */
export function Quiz({ id, questions }: { id: string; questions: QuizQuestion[] }) {
  const { t } = useLang();
  const passed = usePassed().has(id);
  const [picked, setPicked] = useState<(number | null)[]>(() => questions.map(() => null));
  const [i, setI] = useState(0);
  const done = i >= questions.length;
  const right = picked.filter((p, k) => p === questions[k].answer).length;

  function pick(oi: number) {
    if (picked[i] !== null) return;
    const next = picked.map((p, k) => (k === i ? oi : p));
    setPicked(next);
    if (next.every((p, k) => p === questions[k].answer)) markPassed(id);
  }
  const restart = () => { setPicked(questions.map(() => null)); setI(0); };

  return (
    <section className="quiz" aria-label={t(ui.test)}>
      <div className="qh">
        <b>{t(ui.test)}</b>
        <span className="dots" aria-hidden="true">
          {questions.map((q, k) => <span key={k} className={`dot ${k === i ? 'cur' : ''} ${picked[k] === null ? '' : picked[k] === q.answer ? 'ok' : 'no'}`} />)}
        </span>
        {passed && <span className="done">{t(ui.passed)}</span>}
      </div>

      {!done ? (
        <div className="qcard" key={i}>
          <div className="qn">{i + 1} / {questions.length}</div>
          <p className="qq"><Rich s={questions[i].q} /></p>
          <div className="opts">
            {questions[i].options.map((o, oi) => {
              const p = picked[i];
              const cls = p === null ? '' : oi === questions[i].answer ? 'right' : oi === p ? 'wrong' : 'dim';
              return <button key={oi} type="button" className={`opt ${cls}`} disabled={p !== null} onClick={() => pick(oi)}><Rich s={o} /></button>;
            })}
          </div>
          {picked[i] !== null && <p className="why"><b>{t(picked[i] === questions[i].answer ? ui.right : ui.wrong)}</b> <Rich s={questions[i].why} /></p>}
          <div className="qnav">
            <button type="button" className="btn" style={{ visibility: i === 0 ? 'hidden' : undefined }} onClick={() => setI(i - 1)}>{t(ui.prev)}</button>
            <button type="button" className="btn primary" disabled={picked[i] === null} onClick={() => setI(i + 1)}>{t(i === questions.length - 1 ? ui.finish : ui.next)}</button>
          </div>
        </div>
      ) : (
        <div className="qcard end">
          <div className="score-big">{right} / {questions.length}</div>
          <p className="qq">{t(right === questions.length ? ui.allRight : ui.someWrong)}</p>
          <div className="qnav"><button type="button" className="btn primary" onClick={restart}>{t(ui.retry)}</button></div>
        </div>
      )}
    </section>
  );
}
