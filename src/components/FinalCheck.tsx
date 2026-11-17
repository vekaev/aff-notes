import { useMemo, useState } from 'react';
import { parts } from '../content';
import { LANG_NAMES, type L, type QuizQuestion } from '../content/types';
import { glue, headline, useLang } from '../i18n';
import { forRules } from '../rules';
import { Quiz } from './Quiz';

// The end of the notes: check everything you learned before the jump, three ways.
// 1) a mixed test from every chapter, 2) answers in your own words to show an instructor,
// 3) a ready prompt to practise with any AI assistant (ChatGPT, Claude, Gemini…).

const h = (en: string, es: string, ru: string, uk: string): L => ({ en, es, ru, uk });

const T = {
  eyebrow: h('Before the jump', 'Antes del salto', 'Перед прыжком', 'Перед стрибком'),
  title: h('Final check', 'Repaso final', 'Финальная проверка', 'Фінальна перевірка'),
  intro: h(
    'Three ways to make sure you really know it. Your instructors\' briefing always wins over these notes.',
    'Tres formas de comprobar que de verdad lo sabes. El briefing de tus instructores siempre manda sobre estos apuntes.',
    'Три способа убедиться, что ты действительно всё знаешь. Брифинг инструкторов всегда важнее этих заметок.',
    'Три способи переконатися, що ти справді все знаєш. Брифінг інструкторів завжди важливіший за ці нотатки.',
  ),
  examT: h('1. Test on everything', '1. Prueba de todo', '1. Тест по всему', '1. Тест з усього'),
  examS: h('20 questions mixed from every chapter, a new set each time.', '20 preguntas mezcladas de todos los capítulos, otras cada vez.', '20 вопросов из всех глав вперемешку, каждый раз новые.', '20 питань з усіх розділів упереміш, щоразу нові.'),
  start: h('Start the test', 'Empezar la prueba', 'Начать тест', 'Почати тест'),
  again: h('New set of questions', 'Otras preguntas', 'Другие вопросы', 'Інші питання'),
  ownT: h('2. In your own words', '2. Con tus palabras', '2. Своими словами', '2. Своїми словами'),
  ownS: h(
    'Answer out loud or type it here (it stays on this device). Then show it to an instructor: they\'ll catch what a test can\'t.',
    'Responde en voz alta o escríbelo aquí (se queda en este dispositivo). Luego enséñaselo a un instructor: verá lo que una prueba no ve.',
    'Ответь вслух или напиши здесь (остаётся только на этом устройстве). Потом покажи инструктору: он заметит то, что тест не поймает.',
    'Відповідай уголос або напиши тут (лишається тільки на цьому пристрої). Потім покажи інструктору: він помітить те, чого тест не впіймає.',
  ),
  copyMine: h('Copy my answers', 'Copiar mis respuestas', 'Скопировать мои ответы', 'Скопіювати мої відповіді'),
  aiT: h('3. Practise with your AI', '3. Practica con tu IA', '3. Повтори с AI', '3. Повтори з AI'),
  aiS: h(
    'Copy a ready prompt with all these notes and paste it into ChatGPT, Claude, Gemini or any assistant. It will quiz you one situation at a time, explain your mistakes and go deeper where you\'re unsure.',
    'Copia un prompt listo con todos estos apuntes y pégalo en ChatGPT, Claude, Gemini o cualquier asistente. Te preguntará situación por situación, explicará tus errores y profundizará donde dudes.',
    'Скопируй готовый запрос со всеми этими заметками и вставь в ChatGPT, Claude, Gemini или любой ассистент. Он будет спрашивать по одной ситуации, объяснит ошибки и углубится там, где ты не уверен.',
    'Скопіюй готовий запит з усіма цими нотатками і встав у ChatGPT, Claude, Gemini чи будь-який асистент. Він питатиме по одній ситуації, пояснить помилки й заглибиться там, де ти не впевнений.',
  ),
  copyAi: h('Copy the prompt for my AI', 'Copiar el prompt para mi IA', 'Скопировать запрос для AI', 'Скопіювати запит для AI'),
  copied: h('Copied', 'Copiado', 'Скопировано', 'Скопійовано'),
  aiNote: h('An AI can be wrong too: anything it says that isn\'t in your notes, check with your instructors.', 'Una IA también se equivoca: lo que diga que no esté en tus apuntes, confírmalo con tus instructores.', 'AI тоже ошибается: всё, чего нет в твоих заметках, уточняй у инструкторов.', 'AI теж помиляється: усе, чого немає в твоїх нотатках, уточнюй в інструкторів.'),
};

/** Open questions: decisions a student must be able to explain, not just recognise. */
const OWN: L[] = [
  h('Walk through your climb-out and exit count.', 'Explica tu salida a la puerta y la cuenta de salida.', 'Расскажи выход в дверь и счёт на отделение.', 'Розкажи вихід у двері й рахунок на відокремлення.'),
  h('What do you do at 6,000 ft{lockOn}, and at 5,500 ft{pull}?', '¿Qué haces a 6,000 ft y a 5,500 ft?', 'Что ты делаешь на 6 000 и на 5 500 футов?', 'Що ти робиш на 6 000 і на 5 500 футів?'),
  h('You reach for the pilot chute and can\'t find it. What exactly do you do?', 'Buscas el extractor y no lo encuentras. ¿Qué haces exactamente?', 'Тянешься к вытяжному и не находишь его. Что именно ты делаешь?', 'Тягнешся до витяжного й не знаходиш його. Що саме ти робиш?'),
  h('Your canopy opens. How do you check it, and what makes you cut away?', 'Se abre tu vela. ¿Cómo la revisas y qué te hace liberar?', 'Купол открылся. Как ты его проверяешь и что заставит отцепиться?', 'Купол відкрився. Як ти його перевіряєш і що змусить відчепитися?'),
  h('Say your emergency procedure out loud, step by step, with the altitudes.', 'Di tu procedimiento de emergencia en voz alta, paso a paso, con las alturas.', 'Произнеси аварийную процедуру вслух, по шагам, с высотами.', 'Промов аварійну процедуру вголос, крок за кроком, з висотами.'),
  h('Line twists: when do you fix them, and when is it an emergency?', 'Twists: ¿cuándo los arreglas y cuándo es una emergencia?', 'Закрутка строп: когда исправляешь, а когда это авария?', 'Закрутка строп: коли виправляєш, а коли це аварія?'),
  h('Plan today\'s landing: 2,500{holdingReach}, 2,000{holding}, 1,000{patternEntry}, 900{downwind}, 600{base}, 300 ft{final} and the flare.', 'Planea el aterrizaje de hoy: 2,500, 2,000, 1,000, 900, 600, 300 ft y el flare.', 'Спланируй сегодняшнюю посадку: 2 500, 2 000, 1 000, 900, 600, 300 футов и flare.', 'Сплануй сьогоднішню посадку: 2 500, 2 000, 1 000, 900, 600, 300 футів і flare.'),
  h('What are your turn limits under canopy, and why?', '¿Cuáles son tus límites de giro bajo la vela y por qué?', 'Какие у тебя ограничения разворотов под куполом и почему?', 'Які в тебе обмеження розворотів під куполом і чому?'),
  h('You\'re going to land in trees, water or near power lines. What do you do for each?', 'Vas a caer en árboles, agua o cerca de cables. ¿Qué haces en cada caso?', 'Ты садишься на деревья, в воду или у проводов. Что делаешь в каждом случае?', 'Ти сідаєш на дерева, у воду чи біля дротів. Що робиш у кожному випадку?'),
  h('Two canopies out: what do you do in each case?', 'Dos velas fuera: ¿qué haces en cada caso?', 'Вышли два купола: что делаешь в каждом случае?', 'Вийшли два куполи: що робиш у кожному випадку?'),
  h('You lost both instructors in freefall. What now?', 'Perdiste a los dos instructores en caída libre. ¿Y ahora?', 'Ты потерял обоих инструкторов в свободном падении. Что теперь?', 'Ти загубив обох інструкторів у вільному падінні. Що тепер?'),
  h('Flare and PLF: when, how, and what goes wrong most often?', 'Flare y PLF: cuándo, cómo y qué sale mal más a menudo?', 'Flare и PLF: когда, как и что чаще всего идёт не так?', 'Flare і PLF: коли, як і що найчастіше йде не так?'),
];

const ALL: QuizQuestion[] = parts.flatMap(p => p.chapters.flatMap(c => c.blocks.flatMap(b => (b.type === 'quiz' ? b.questions : []))));
const KEY = 'aff-own-answers';
const strip = (s: string) => glue(s).replace(/<q-check\s*\/>/g, '(check)').replace(/<[^>]+>/g, '');

function sample(n: number, seed: number, pool: QuizQuestion[] = ALL): QuizQuestion[] {
  const a = pool.map((q, i) => ({ q, k: Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453 % 1 }));
  return a.sort((x, y) => x.k - y.k).slice(0, n).map(x => x.q);
}

/** The prompt for any AI assistant: role, rules, then every question of the notes with its answer and why. */
function aiPrompt(t: (l: L) => string, lang: string): string {
  const head: Record<string, string> = {
    en: 'You are my skydiving tutor. I am a student before my first AFF jumps (USPA, category A). Below are my study notes as questions with the correct answers. Quiz me one question at a time, mostly as situations ("you are at X ft and Y happens: what do you do?"). Wait for my answer, tell me if it is right and why, and go deeper where I am unsure. Mix all topics; ask about emergencies most often. Keep answers short. Do not invent procedures: where schools differ, tell me to confirm with my instructors (their briefing always wins). At the end, list what I should review. Reply in English.',
    es: 'Eres mi tutor de paracaidismo. Soy alumno antes de mis primeros saltos AFF (USPA, categoría A). Abajo están mis apuntes como preguntas con las respuestas correctas. Pregúntame una a una, sobre todo como situaciones ("estás a X ft y pasa Y: ¿qué haces?"). Espera mi respuesta, dime si es correcta y por qué, y profundiza donde dude. Mezcla todos los temas; pregunta más por emergencias. Respuestas cortas. No inventes procedimientos: donde las escuelas difieren, dime que lo confirme con mis instructores (su briefing siempre manda). Al final, dime qué repasar. Responde en español.',
    ru: 'Ты мой инструктор-репетитор по парашютному спорту. Я студент перед первыми прыжками по AFF (USPA, категория A). Ниже мои заметки: вопросы с правильными ответами. Спрашивай по одному вопросу, чаще в виде ситуаций («ты на высоте X, случилось Y: что делаешь?»). Жди мой ответ, скажи, верно ли и почему, и углубляйся там, где я не уверен. Смешивай темы, чаще всего спрашивай про аварийные ситуации. Отвечай коротко. Не придумывай процедуры: где школы учат по-разному, скажи уточнить у инструкторов (их брифинг всегда важнее). В конце перечисли, что повторить. Отвечай по-русски.',
    uk: 'Ти мій інструктор-репетитор з парашутного спорту. Я студент перед першими стрибками за AFF (USPA, категорія A). Нижче мої нотатки: питання з правильними відповідями. Питай по одному, частіше у вигляді ситуацій («ти на висоті X, сталося Y: що робиш?»). Чекай моєї відповіді, скажи, чи правильно і чому, і заглиблюйся там, де я не впевнений. Змішуй теми, найчастіше питай про аварійні ситуації. Відповідай коротко. Не вигадуй процедур: де школи вчать по-різному, скажи уточнити в інструкторів (їхній брифінг завжди важливіший). Наприкінці перелічи, що повторити. Відповідай українською.',
  };
  const lines: string[] = [head[lang] ?? head.en.replace('Reply in English.', `Reply in ${LANG_NAMES[lang as keyof typeof LANG_NAMES]}.`), ''];
  for (const p of parts) {
    lines.push(`## ${p.roman}. ${t(p.title)}`);
    for (const c of p.chapters) {
      const qs = c.blocks.flatMap(b => (b.type === 'quiz' ? b.questions : []));
      if (!qs.length) continue;
      lines.push(`### ${strip(t(c.title))}`);
      for (const q of qs) lines.push(`- Q: ${strip(t(q.q))}\n  A: ${strip(t(q.options[q.answer]))}. ${strip(t(q.why))}`);
    }
  }
  return lines.join('\n');
}

export function FinalCheck() {
  const { t, lang, rules } = useLang();
  const [seed, setSeed] = useState(0);
  const exam = useMemo(() => (seed ? sample(20, seed, forRules(ALL, rules)) : []), [seed, rules]);
  const [own, setOwn] = useState<string[]>(() => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } });
  const [copied, setCopied] = useState<'' | 'own' | 'ai'>('');
  const save = (i: number, v: string) => {
    const next = OWN.map((_, k) => (k === i ? v : own[k] ?? ''));
    setOwn(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* ignore */ }
  };
  const copy = async (what: 'own' | 'ai') => {
    const text = what === 'ai' ? aiPrompt(t, lang) : OWN.map((q, i) => `${i + 1}. ${t(q)}\n${own[i]?.trim() || '—'}`).join('\n\n');
    try { await navigator.clipboard.writeText(text); setCopied(what); setTimeout(() => setCopied(''), 2000); } catch { /* clipboard blocked */ }
  };

  return (
    <div className="band gutter tone-dz final-band">
      <section id="final" className="col chapter final">
        <div className="eyebrow">{t(T.eyebrow)}</div>
        <h3>{headline(t(T.title))}</h3>
        <div className="blocks">
          <p>{t(T.intro)}</p>

          <h4>{t(T.examT)}</h4>
          <p className="muted">{t(T.examS)}</p>
          {seed ? <Quiz key={seed} id="final-exam" questions={exam} /> : null}
          <div><button type="button" className="btn primary" onClick={() => setSeed(s => s + 1 + Math.floor(Math.random() * 1000))}>{t(seed ? T.again : T.start)}</button></div>

          <h4>{t(T.ownT)}</h4>
          <p className="muted">{t(T.ownS)}</p>
          <ol className="own">
            {OWN.map((q, i) => (
              <li key={i}>
                <label htmlFor={`own-${i}`}>{glue(t(q))}</label>
                <textarea id={`own-${i}`} rows={2} value={own[i] ?? ''} onChange={e => save(i, e.target.value)} />
              </li>
            ))}
          </ol>
          <div><button type="button" className="btn" onClick={() => copy('own')}>{t(copied === 'own' ? T.copied : T.copyMine)}</button></div>

          <h4>{t(T.aiT)}</h4>
          <p className="muted">{t(T.aiS)}</p>
          <div><button type="button" className="btn primary" onClick={() => copy('ai')}>{t(copied === 'ai' ? T.copied : T.copyAi)}</button></div>
          <p className="muted small">{t(T.aiNote)}</p>
        </div>
      </section>
    </div>
  );
}
