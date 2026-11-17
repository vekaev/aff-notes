import type { L } from '../types';

/**
 * School-rules profiles (phase 2 of deep localization, docs/i18n/DEEP-LOCALIZATION.md).
 *
 * The content is written with USPA's numbers, in feet. Text marks the numbers that are rules with a tag right after
 * the quantity: "pull at 5,500 ft{pull}". The reader's profile then shows its own value, in its own unit. A profile
 * that has no sourced value for a rule shows the USPA number with the "check" badge: never a guess.
 *
 * Every value carries its source (a test fails without one). Research: docs/i18n/units-and-rules.md.
 * `check: true` marks values that come from schools or study notes, not from the federation's own document.
 */
export type Fed = 'uspa' | 'dfv' | 'ffp' | 'bs' | 'ruua';
export const FEDS: readonly Fed[] = ['uspa', 'dfv', 'ffp', 'bs', 'ruua'];

export type RuleId =
  | 'exit' | 'lockOn' | 'pull' | 'minOpen' | 'decision' | 'hardDeck'
  | 'holdingReach' | 'holding' | 'patternEntry' | 'downwind' | 'base' | 'final'
  | 'wind' | 'aLicence';
export const RULE_IDS: readonly RuleId[] = [
  'exit', 'lockOn', 'pull', 'minOpen', 'decision', 'hardDeck',
  'holdingReach', 'holding', 'patternEntry', 'downwind', 'base', 'final', 'wind', 'aLicence',
];

export type RuleUnit = 'ft' | 'm' | 'mph' | 'kt' | 'm/s' | 'jumps';
export interface Src { label: string; href: string }
export interface RuleValue { n: number; to?: number; unit: RuleUnit; src: Src; check?: true; note?: L }
export interface Profile { id: Fed; name: L; short: string; unit: 'ft' | 'm'; values: Partial<Record<RuleId, RuleValue>> }

const l = (en: string, es: string, uk: string, ru: string): L => ({ en, es, uk, ru });

const SIM_2_1: Src = { label: 'USPA SIM 2-1 (Basic Safety Requirements)', href: 'https://www.uspa.org/SIM/2-1' };
const ISP_B: Src = { label: 'USPA ISP Category B', href: 'https://www.uspa.org/skydiveschool/B' };
const SIM_5: Src = { label: 'USPA SIM 5-9', href: 'https://www.uspa.org/SIM/5' };
const SIM_3_1: Src = { label: 'USPA SIM 3-1', href: 'https://www.uspa.org/SIM/3-1' };
const DZ_BRIEF: Src = { label: 'Skydive California student briefing (this app, dropzone chapter)', href: '#dz' };
const DZ_PATTERN: Src = { label: 'Skydive California landing pattern (this app, pattern chapter)', href: '#pattern' };
const DFV_AHB: Src = { label: 'DFV AFF-Ausbildungshandbuch v8 (2025)', href: 'https://www.dfv.aero/downloads/AFF-AHB_Teil_I_und_Teil_II_Version_8.pdf' };
const FFP_DT49: Src = { label: 'FFP Directive Technique 49 (1 Apr 2026)', href: 'https://paramag.fr/wp-content/uploads/2026/04/Directive-Technique-49-modifiee-27-mars-2026.pdf' };
const BS_OPS: Src = { label: 'British Skydiving Operations Manual (June 2026)', href: 'https://skydivetilstock.co.uk/wp-content/uploads/2026/08/Operations-Manual-June-2026.pdf' };
const RPP: Src = { label: 'DOSAAF RPP-2010', href: 'https://www.aeroclub73.ru/wp-content/uploads/2020/01/RPP-2010.pdf' };

export const PROFILES: Record<Fed, Profile> = {
  uspa: {
    id: 'uspa', short: 'USPA', unit: 'ft',
    name: l('USPA (USA)', 'USPA (EE. UU.)', 'USPA (США)', 'USPA (США)'),
    values: {
      exit: { n: 13000, unit: 'ft', src: DZ_BRIEF },
      lockOn: { n: 6000, unit: 'ft', src: DZ_BRIEF },
      pull: { n: 5500, unit: 'ft', src: ISP_B },
      minOpen: { n: 3000, unit: 'ft', src: SIM_2_1 },
      decision: { n: 2500, unit: 'ft', src: ISP_B },
      hardDeck: { n: 1000, unit: 'ft', src: SIM_5 },
      holdingReach: { n: 2500, unit: 'ft', src: DZ_PATTERN },
      holding: { n: 2000, unit: 'ft', src: DZ_PATTERN },
      patternEntry: { n: 1000, unit: 'ft', src: DZ_PATTERN },
      downwind: { n: 900, unit: 'ft', src: DZ_PATTERN },
      base: { n: 600, unit: 'ft', src: DZ_PATTERN },
      final: { n: 300, unit: 'ft', src: DZ_PATTERN },
      wind: { n: 14, unit: 'mph', src: SIM_2_1 },
      aLicence: { n: 25, unit: 'jumps', src: SIM_3_1 },
    },
  },
  dfv: {
    id: 'dfv', short: 'DFV', unit: 'm',
    name: l('DFV (Germany)', 'DFV (Alemania)', 'DFV (Німеччина)', 'DFV (Германия)'),
    values: {
      exit: { n: 3000, unit: 'm', src: DFV_AHB, note: l('Minimum for AFF jumps (2.1.1).', 'Mínimo para saltos AFF (2.1.1).', 'Мінімум для стрибків AFF (2.1.1).', 'Минимум для прыжков AFF (2.1.1).') },
      lockOn: { n: 1700, unit: 'm', src: DFV_AHB, note: l('"No more" (end of work), Levels 2–5.', '"No more" (fin del trabajo), niveles 2–5.', '«No more» (кінець роботи), рівні 2–5.', '«No more» (конец работы), уровни 2–5.') },
      pull: { n: 1500, unit: 'm', src: DFV_AHB, note: l('Wave off and open at 1,500 m. Level 1: wave off at 1,500 m, pull by 1,200 m at the latest.', 'Wave-off y apertura a 1,500 m. Nivel 1: wave-off a 1,500 m, abrir como muy tarde a 1,200 m.', 'Відмашка й розкриття на 1 500 м. Рівень 1: відмашка на 1 500 м, розкриття не пізніше ніж на 1 200 м.', 'Отмашка и раскрытие на 1 500 м. Уровень 1: отмашка на 1 500 м, раскрытие не позже 1 200 м.') },
      minOpen: { n: 1200, unit: 'm', src: DFV_AHB, note: l('Level 1: pull by 1,200 m at the latest (4.2.2).', 'Nivel 1: abrir como muy tarde a 1,200 m (4.2.2).', 'Рівень 1: розкриття не пізніше ніж на 1 200 м (4.2.2).', 'Уровень 1: раскрытие не позже 1 200 м (4.2.2).') },
    },
  },
  ffp: {
    id: 'ffp', short: 'FFP', unit: 'm',
    name: l('FFP (France)', 'FFP (Francia)', 'FFP (Франція)', 'FFP (Франция)'),
    values: {
      exit: { n: 3000, unit: 'm', src: FFP_DT49, note: l('PAC levels 1 and 4; levels 2–3: 3,500 m minimum.', 'Niveles PAC 1 y 4; niveles 2–3: 3,500 m como mínimo.', 'Рівні PAC 1 і 4; рівні 2–3: щонайменше 3 500 м.', 'Уровни PAC 1 и 4; уровни 2–3: не ниже 3 500 м.') },
      pull: { n: 1500, unit: 'm', src: FFP_DT49 },
      minOpen: { n: 1500, unit: 'm', src: FFP_DT49 },
      wind: { n: 7, unit: 'm/s', src: FFP_DT49 },
      aLicence: { n: 12, unit: 'jumps', src: FFP_DT49 },
    },
  },
  bs: {
    id: 'bs', short: 'British Skydiving', unit: 'ft',
    name: l('British Skydiving (UK)', 'British Skydiving (Reino Unido)', 'British Skydiving (Велика Британія)', 'British Skydiving (Великобритания)'),
    values: {
      minOpen: { n: 3000, unit: 'ft', src: BS_OPS },
      wind: { n: 15, unit: 'kt', src: BS_OPS },
    },
  },
  ruua: {
    id: 'ruua', short: 'RU/UA', unit: 'm',
    name: l('Metric schools (Russia, Ukraine)', 'Escuelas métricas (Rusia, Ucrania)', 'Метричні школи (Росія, Україна)', 'Метрические школы (Россия, Украина)'),
    values: {
      exit: { n: 4000, unit: 'm', check: true, src: { label: 'Vatulino AFF course; FPSU AFF page (4,200 m)', href: 'https://vatulino.ru/learn/aff' } },
      pull: { n: 1500, unit: 'm', check: true, src: { label: 'FlyPiter AFF level 1 (schools vary: 1,200–1,500 m)', href: 'https://pryzhokparashyut-flypiter.ru/kurs-aff' } },
      minOpen: { n: 1000, unit: 'm', src: RPP, note: l('Beginners up to 25 jumps (§98).', 'Principiantes hasta 25 saltos (§98).', 'Початківці до 25 стрибків (§98).', 'Начинающие до 25 прыжков (§98).') },
      decision: { n: 600, unit: 'm', check: true, src: { label: 'Methodical notes, not official (some say 800 m)', href: 'https://poznayka.org/s82621t1.html' } },
      hardDeck: { n: 300, unit: 'm', check: true, src: { label: 'Methodical notes, not official', href: 'https://poznayka.org/s82621t1.html' } },
      wind: { n: 8, unit: 'm/s', src: RPP, check: true, note: l('Beginners on ram-air canopies; the same table also lists 5 m/s up to 30 jumps.', 'Principiantes con velas de cajones; la misma tabla también da 5 m/s hasta 30 saltos.', 'Початківці на крилі; та сама таблиця дає також 5 м/с до 30 стрибків.', 'Начинающие на крыле; та же таблица даёт также 5 м/с до 30 прыжков.') },
    },
  },
};

/** What each rule is, for the "where these numbers come from" list. */
export const RULE_NAMES: Record<RuleId, L> = {
  exit: l('Exit altitude', 'Altura de salida', 'Висота відокремлення', 'Высота отделения'),
  lockOn: l('Lock on: no more exercises', 'Lock on: se acabaron los ejercicios', 'Лише висотомір: більше жодних вправ', 'Только высотомер: больше никаких упражнений'),
  pull: l('Pull altitude', 'Altura de apertura', 'Висота розкриття', 'Высота раскрытия'),
  minOpen: l('Lowest opening for students', 'Apertura mínima para alumnos', 'Найнижче розкриття для студентів', 'Минимальная высота раскрытия для студентов'),
  decision: l('Decision altitude (fix or cut away)', 'Altura de decisión (arreglar o liberar)', 'Висота ухвалення рішення (виправити чи відчепитися)', 'Высота принятия решения (исправить или отцепиться)'),
  hardDeck: l('No cutaway below', 'No liberar por debajo de', 'Не відчіплюватися нижче', 'Не отцепляться ниже'),
  holdingReach: l('Can you reach the holding point?', '¿Llegas al punto de espera?', 'Долітаєш до точки очікування?', 'Долетаешь до точки ожидания?'),
  holding: l('Over the holding point', 'Sobre el punto de espera', 'Над точкою очікування', 'Над точкой ожидания'),
  patternEntry: l('Leave it, start the pattern', 'Déjalo, empieza el circuito', 'Виходь на схему заходу', 'Уходи в схему захода'),
  downwind: l('Downwind leg', 'Tramo de viento en cola', 'Відрізок за вітром', 'Отрезок по ветру'),
  base: l('Base leg', 'Tramo base', 'Базовий відрізок', 'Базовый отрезок'),
  final: l('Final', 'Final', 'Фінальна пряма', 'Финальная прямая'),
  wind: l('Student wind limit', 'Límite de viento para alumnos', 'Ліміт вітру для студентів', 'Лимит ветра для студентов'),
  aLicence: l('Jumps for the first licence', 'Saltos para la primera licencia', 'Стрибків до першої ліцензії', 'Прыжков до первой лицензии'),
};

/** Default profile from the browser region (not the language: a Spanish speaker may train in Florida). */
const REGION_FED: Record<string, Fed> = {
  US: 'uspa', DE: 'dfv', AT: 'dfv', FR: 'ffp', GB: 'bs', UK: 'bs', IE: 'bs', RU: 'ruua', UA: 'ruua', BY: 'ruua', KZ: 'ruua',
};
export function fedForRegion(region: string | undefined): Fed {
  return (region && REGION_FED[region.toUpperCase()]) || 'uspa';
}
