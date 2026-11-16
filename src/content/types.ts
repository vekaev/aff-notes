// Content model. Every visible string is an L: all languages side by side, so a missing
// translation is a type error, not a blank on screen. Text may contain a small set of inline tags:
// <b>, <a href>, and <q-check/> (rendered as the "check with your instructor" badge).

export const LANGS = ['en', 'es', 'uk', 'ru'] as const;
export type Lang = (typeof LANGS)[number];
export type L = Record<Lang, string>;

/** Each language in its own name, for the language menu. Add a language here and in LANGS. */
export const LANG_NAMES: Record<Lang, string> = { en: 'English', es: 'Español', uk: 'Українська', ru: 'Русский' };

/** A short silent looping clip cut from a public tutorial, served from /media. */
export interface Clip {
  src: string;            // file name in public/media, without extension
  caption: L;
  credit: string;         // channel or organisation
  yt: string;             // YouTube video id of the original
  t: number;              // start second in the original
}

/** A link that opens the original video at the right second. */
export interface Watch {
  yt?: string;            // YouTube id, or
  href?: string;          // any other URL (playlist, website)
  t?: number;
  label: L;
  credit: string;
}

import type { IconName } from '../components/Icon';
export type { IconName };

export interface Step { title: L; sub?: L; icon?: IconName }
/** A card: optional icon or big number, a title, and either a short text or (better) a few bullet points. */
export interface Rule { big?: string; icon?: IconName; title?: L; text?: L; points?: L[]; tone?: 'red' | 'accent' }
/** One bar: a label and a share in percent. */
export interface Bar { label: L; value: number; hl?: boolean }
export interface Mistakes { title: L; bad: L[]; good: L[]; badTitle?: L; goodTitle?: L }
export interface FaqItem { n: string; q: L; a: L }
export interface QuizQuestion { q: L; options: L[]; answer: number; why: L }

/** Signals and malfunction cards: a clip (or a drawing when no clip exists) with a name and an action. */
export interface Card {
  clip?: string;          // media file, or
  drawing?: 'none' | 'spin' | 'twist' | 'good';
  name: L;
  what: L;
  act?: L;
  tone?: 'key' | 'ep' | 'fix';
}

/** Ordered rows with an altitude on the left; tapping one moves the altimeter / map marker. */
export interface AltRow { alt: string; value: number; title: L; sub: L; hot?: boolean; point?: [number, number] }

export type Block =
  | { type: 'p'; text: L; muted?: boolean }
  | { type: 'h'; text: L; id?: string }
  | { type: 'steps'; items: Step[]; timeline?: boolean }
  | { type: 'rules'; items: Rule[] }
  | { type: 'callout'; text?: L; points?: L[]; title?: L; tone?: 'note' | 'red'; check?: boolean }
  /** Bullets instead of a paragraph. 'do' = green ticks, 'dont' = red crosses, default = accent dots. */
  | { type: 'list'; items: L[]; title?: L; kind?: 'do' | 'dont' }
  | { type: 'clips'; items: Clip[] }
  | { type: 'watch'; items: Watch[] }
  | { type: 'cards'; items: Card[]; groupTitle?: L; groupSub?: L; pill?: 'EP' | 'FIX'; small?: boolean }
  | { type: 'faq'; items: FaqItem[] }
  | { type: 'tips'; items: Mistakes[]; sources: { label: string; href: string }[] }
  | { type: 'questions'; items: L[] }
  | { type: 'stats'; items: Rule[] }
  | { type: 'bars'; title: L; items: Bar[]; source: { label: string; href: string } }
  | { type: 'climb'; steps: Step[]; captions: L[] }          // animated door climb-out
  | { type: 'exit'; steps: Step[] }                          // animated exit count
  | { type: 'altimeter'; rows: AltRow[] }                    // dive flow with a live altimeter
  | { type: 'pattern'; rows: AltRow[] }                      // landing pattern map
  | { type: 'lowturn'; text: L; points: L[]; clip: Clip }    // low-turn diagram
  | { type: 'canopyCheck'; items: { word: L; text: L }[] }   // pull, count, there/square/stable/steerable
  | { type: 'quiz'; questions: QuizQuestion[] }
  | { type: 'split'; left: Block[]; right: Block[] };        // two columns on wide screens

export interface Chapter { id: string; title: L; eyebrow?: L; blocks: Block[] }
export interface Part { id: string; roman: string; range: L; title: L; chapters: Chapter[]; tone?: 'red' }
