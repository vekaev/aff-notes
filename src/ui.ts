import type { L } from './content/types';

// Interface words (not lesson content). Same rule as content: all three languages.
export const ui = {
  brand: { en: 'AFF notes', es: 'Apuntes AFF', ru: 'Конспект AFF' },
  heroEyebrow: { en: 'Accelerated Freefall · level 1 · study notes', es: 'Caída libre acelerada · nivel 1 · apuntes', ru: 'Ускоренное обучение AFF · уровень 1 · конспект' },
  heroTitle: { en: 'from the seat to the ground', es: 'del asiento al suelo', ru: 'от сиденья до земли' },
  heroText: {
    en: 'Everything from the ground course, in the order it happens on the jump, with real footage. Your instructors\' briefing always wins over this page. <q-check/> marks things to confirm with them.',
    es: 'Todo el curso en tierra, en el orden en que pasa en el salto, con vídeos reales. Lo que diga tu instructor siempre manda sobre esta página. <q-check/> marca lo que hay que confirmar con ellos.',
    ru: 'Вся наземная подготовка в том порядке, как это происходит в прыжке, с настоящими видео. Брифинг инструкторов всегда важнее этой страницы. <q-check/> — то, что нужно уточнить у них.',
  },
  part: { en: 'Part', es: 'Parte', ru: 'Часть' },
  chapter: { en: 'Chapter', es: 'Capítulo', ru: 'Глава' },
  watch: { en: 'Watch the original', es: 'Ver el original', ru: 'Смотреть оригинал' },
  next: { en: 'Next step', es: 'Siguiente', ru: 'Дальше' },
  play: { en: 'Play', es: 'Reproducir', ru: 'Пуск' },
  thumbCheck: { en: 'Thumb-to-ear check', es: 'Pulgares a las orejas', ru: 'Пальцы к ушам' },
  pull: { en: 'Pull', es: 'Abrir', ru: 'Раскрыть' },
  test: { en: 'Test yourself', es: 'Ponte a prueba', ru: 'Проверь себя' },
  passed: { en: 'passed', es: 'aprobado', ru: 'сдано' },
  right: { en: 'Right.', es: 'Correcto.', ru: 'Верно.' },
  wrong: { en: 'Not quite.', es: 'No exactamente.', ru: 'Не совсем.' },
  retry: { en: 'Try again', es: 'Repetir', ru: 'Ещё раз' },
  testsDone: { en: 'tests passed', es: 'pruebas aprobadas', ru: 'тестов сдано' },
  hideNames: { en: 'Hide the names', es: 'Ocultar nombres', ru: 'Скрыть названия' },
  showNames: { en: 'Show the names', es: 'Mostrar nombres', ru: 'Показать названия' },
  footer: {
    en: 'Study notes for personal use, not instruction. Clips are short excerpts from public tutorials; each links to its original.',
    es: 'Apuntes de uso personal, no son instrucción. Los clips son fragmentos breves de tutoriales públicos; cada uno enlaza a su original.',
    ru: 'Конспект для личного использования, а не инструкция. Клипы — короткие отрывки из публичных уроков, у каждого есть ссылка на оригинал.',
  },
  sideView: { en: 'side view', es: 'vista lateral', ru: 'вид сбоку' },
  wind: { en: 'wind', es: 'viento', ru: 'ветер' },
} satisfies Record<string, L>;
