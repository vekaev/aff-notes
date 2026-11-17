import { useEffect, useState } from 'react';
import type { L } from '../content/types';
import { headline, useLang } from '../i18n';

// The very end of the notes: why they exist, who made them, and how to send feedback.
// Plus a small feedback bubble (bottom right) that opens once by itself after 10 s.

export const EMAIL = 'vekaev4@gmail.com';
/** Where people can find the owner. LinkedIn is empty until the owner gives the link (then it shows). */
export const LINKS = {
  repo: 'https://github.com/vekaev/aff-notes',
  github: 'https://github.com/vekaev',
  linkedin: 'https://www.linkedin.com/in/vekaev',
};
const h = (en: string, es: string, ru: string, uk: string): L => ({ en, es, ru, uk });

const T = {
  eyebrow: h('About these notes', 'Sobre estos apuntes', 'Об этих заметках', 'Про ці нотатки'),
  title: h('Why I made this', 'Por qué hice esto', 'Зачем я это сделал', 'Навіщо я це зробив'),
  me: h('Yevhenii Petrenko', 'Yevhenii Petrenko', 'Евгений Петренко', 'Євгеній Петренко'),
  from: h('From Ukraine. I love learning new skills and helping people get better.', 'De Ucrania. Me encanta aprender cosas nuevas y ayudar a otros a mejorar.', 'Из Украины. Люблю учиться новому и помогать людям становиться лучше.', 'З України. Люблю вчитися нового й допомагати людям ставати кращими.'),
  story: h(
    'I went through the AFF course myself. It is an incredible sport, and the course is not easy: a lot to remember, and the things that matter most happen in seconds. I made these notes to learn it properly, and then wanted them to help others too.',
    'Hice el curso AFF yo mismo. Es un deporte increíble, y el curso no es fácil: hay mucho que recordar, y lo más importante pasa en segundos. Hice estos apuntes para aprenderlo bien, y luego quise que ayudaran a otros también.',
    'Я сам прошёл курс AFF. Это невероятный спорт, и курс непростой: многое нужно запомнить, а самое важное происходит за секунды. Я сделал эти заметки, чтобы выучить всё как следует, а потом захотел, чтобы они помогали и другим.',
    'Я сам пройшов курс AFF. Це неймовірний спорт, і курс непростий: багато треба запам\'ятати, а найважливіше відбувається за секунди. Я зробив ці нотатки, щоб вивчити все як слід, а потім захотів, щоб вони допомагали й іншим.',
  ),
  mission: h(
    '<b>My mission:</b> help everyone who wants to try this sport learn it well, prevent injuries, and connect skydivers around the world who want to share what they know.',
    '<b>Mi misión:</b> ayudar a todo el que quiera probar este deporte a aprenderlo bien, prevenir lesiones y conectar a paracaidistas de todo el mundo que quieran compartir lo que saben.',
    '<b>Моя миссия:</b> помочь каждому, кто хочет попробовать этот спорт, хорошо его выучить, предотвратить травмы и объединить парашютистов по всему миру, которые готовы делиться знаниями.',
    '<b>Моя місія:</b> допомогти кожному, хто хоче спробувати цей спорт, добре його вивчити, запобігти травмам і об\'єднати парашутистів по всьому світу, які готові ділитися знаннями.',
  ),
  imagine: h(
    'Imagine: if these notes help even one person remember the right thing at the right second, they save a life. I think the greatest thing we can do now is share what we know and build, together with skydivers all over the world, the most complete place to learn to skydive: fewer injuries and deaths, and more people enjoying their life and the feeling of flight.',
    'Imagina: si estos apuntes ayudan aunque sea a una persona a recordar lo correcto en el segundo justo, salvan una vida. Creo que lo más grande que podemos hacer ahora es compartir lo que sabemos y construir, junto con paracaidistas de todo el mundo, el lugar más completo para aprender a saltar: menos lesiones y muertes, y más gente disfrutando de su vida y de la sensación de volar.',
    'Представьте: если эти заметки помогут хотя бы одному человеку вспомнить нужное в нужную секунду, они спасут жизнь. Я думаю, самое большое, что мы можем сделать сейчас, это делиться знаниями и вместе с парашютистами со всего мира построить самое полное место, где можно научиться прыгать: меньше травм и смертей, и больше людей, которые радуются жизни и чувству полёта.',
    'Уявіть: якщо ці нотатки допоможуть хоча б одній людині згадати потрібне в потрібну секунду, вони врятують життя. Я думаю, найбільше, що ми можемо зробити зараз, це ділитися знаннями й разом із парашутистами з усього світу збудувати найповніше місце, де можна навчитися стрибати: менше травм і смертей, і більше людей, які радіють життю й відчуттю польоту.',
  ),
  fbT: h('Help make it better', 'Ayuda a mejorarlo', 'Помогите сделать лучше', 'Допоможіть зробити краще'),
  fbS: h(
    'Found a mistake or something unclear? Something to add, a book, a link or a tip that helped you? Write to me. Every message makes these notes better for the next student.',
    '¿Has visto un error o algo poco claro? ¿Algo que añadir, un libro, un enlace o un consejo que te ayudó? Escríbeme. Cada mensaje mejora estos apuntes para el próximo alumno.',
    'Нашли ошибку или что-то непонятно? Есть что добавить: книга, ссылка, совет, который помог вам? Напишите мне. Каждое сообщение делает эти заметки лучше для следующего студента.',
    'Знайшли помилку або щось незрозуміло? Є що додати: книжка, посилання, порада, яка вам допомогла? Напишіть мені. Кожне повідомлення робить ці нотатки кращими для наступного студента.',
  ),
  write: h('Write to me', 'Escríbeme', 'Написать мне', 'Написати мені'),
  copy: h('Copy email', 'Copiar email', 'Скопировать почту', 'Скопіювати пошту'),
  copied: h('Copied', 'Copiado', 'Скопировано', 'Скопійовано'),
  subject: h('AFF notes: feedback', 'Apuntes AFF: comentarios', 'Заметки AFF: отзыв', 'Нотатки AFF: відгук'),
  bubbleT: h('Questions or ideas?', '¿Preguntas o ideas?', 'Вопросы или идеи?', 'Питання чи ідеї?'),
  bubbleS: h(
    'If something was unclear, wrong or could be better, tell me. I want to make it better to help other people.',
    'Si algo no quedó claro, está mal o podría ser mejor, dímelo. Quiero mejorarlo para ayudar a otras personas.',
    'Если что-то было непонятно, неверно или может быть лучше, напишите мне. Я хочу сделать это лучше, чтобы помогать другим.',
    'Якщо щось було незрозуміло, неправильно або може бути краще, напишіть мені. Я хочу зробити це краще, щоб допомагати іншим.',
  ),
  open: h('Send feedback', 'Enviar comentarios', 'Оставить отзыв', 'Залишити відгук'),
  close: h('Close', 'Cerrar', 'Закрыть', 'Закрити'),
  notNow: h('Not now, hide this', 'Ahora no, ocultar', 'Не сейчас, скрыть', 'Не зараз, сховати'),
  why: h('Why I made this', 'Por qué hice esto', 'Зачем я это сделал', 'Навіщо я це зробив'),
  findMe: h('Find me:', 'Encuéntrame:', 'Где меня найти:', 'Де мене знайти:'),
  repoText: h('The project is open: read the code, suggest a fix or add something on', 'El proyecto es abierto: lee el código, propón un arreglo o añade algo en', 'Проект открыт: смотри код, предлагай исправления или добавляй своё на', 'Проєкт відкритий: дивись код, пропонуй виправлення або додавай своє на'),
};

function mailto(subject: string) {
  const at = location.hash ? `\n\n(${location.href})` : '';
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(at)}`;
}

export function AboutAuthor() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* blocked */ }
  };
  return (
    <div className="band gutter tone-dz author-band">
      <section id="about" className="col chapter author">
        <div className="eyebrow">{t(T.eyebrow)}</div>
        <h3>{headline(t(T.title))}</h3>
        <div className="who">
          <img src="/media/author.jpg" alt={t(T.me)} width={72} height={72} loading="lazy" />
          <div><div className="nm">{t(T.me)}</div><div className="wh">{t(T.from)}</div></div>
        </div>
        <p>{t(T.story)}</p>
        <p dangerouslySetInnerHTML={{ __html: t(T.mission) }} />
        <p className="imagine">{t(T.imagine)}</p>
        <div className="fb">
          <h4>{t(T.fbT)}</h4>
          <p className="muted">{t(T.fbS)}</p>
          <div className="row">
            <a className="btn primary" href={mailto(t(T.subject))}>{t(T.write)}</a>
            <button type="button" className="btn" onClick={copy}>{copied ? t(T.copied) : t(T.copy)}</button>
            <span className="mail">{EMAIL}</span>
          </div>
          <p className="links">
            {t(T.repoText)}{' '}<a href={LINKS.repo} target="_blank" rel="noopener">GitHub</a>.
          </p>
          <p className="links">
            <span className="muted">{t(T.findMe)}</span>{' '}
            <a href={LINKS.github} target="_blank" rel="noopener">GitHub</a>
            {LINKS.linkedin && <>{' · '}<a href={LINKS.linkedin} target="_blank" rel="noopener">LinkedIn</a></>}
          </p>
        </div>
      </section>
    </div>
  );
}

const HIDDEN = 'aff-feedback-hidden';

export function FeedbackBubble() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [hidden, setHidden] = useState(() => { try { return localStorage.getItem(HIDDEN) === '1'; } catch { return false; } });
  useEffect(() => {
    // Only the round icon appears; the card never opens by itself over what the reader is reading (owner, 2026-11-17).
    const id = setTimeout(() => setShown(true), 10000);
    return () => clearTimeout(id);
  }, []);
  const close = () => setOpen(false);
  // "Not now": the bubble and its icon go away for good on this device; the "write to me" card at the end stays.
  const hide = () => { close(); setHidden(true); try { localStorage.setItem(HIDDEN, '1'); } catch { /* ignore */ } };
  if (!shown || hidden) return null;
  return (
    <div className="fbub">
      {open && (
        <div className="fbub-card" role="dialog" aria-label={t(T.bubbleT)}>
          <button type="button" className="x" aria-label={t(T.close)} onClick={close}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <div className="nm">{t(T.bubbleT)}</div>
          <p>{t(T.bubbleS)}</p>
          <div className="row">
            <a className="btn primary" href={mailto(t(T.subject))} onClick={close}>{t(T.write)}</a>
            <a className="why" href="#about" onClick={close}>{t(T.why)} ↓</a>
          </div>
          <button type="button" className="later" onClick={hide}>{t(T.notNow)}</button>
        </div>
      )}
      <button type="button" className="fbub-btn" aria-label={t(T.open)} aria-expanded={open} onClick={() => (open ? close() : setOpen(true))}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8M8 12h5" /></svg>
      </button>
    </div>
  );
}
