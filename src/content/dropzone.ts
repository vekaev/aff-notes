import type { Part } from './types';

// Public material from the dropzone where the course happened (docs/research/skydive-california.md).
export const dropzone: Part = {
  id: 'dz',
  roman: 'V',
  range: { en: 'Tracy, California', es: 'Tracy, California', ru: 'Трейси, Калифорния' },
  title: { en: 'Our dropzone', es: 'Nuestra zona de salto', ru: 'Наша площадка' },
  chapters: [
    {
      id: 'sdca',
      title: { en: 'Skydive California', es: 'Skydive California', ru: 'Skydive California' },
      blocks: [
        { type: 'p', text: {
          en: 'Skydive California, 25001 Kasson Rd, Tracy. A USPA dropzone with its own airfield. Students exit at 13,000 ft and pull at 5,500 ft on category A, with radio help under canopy.',
          es: 'Skydive California, 25001 Kasson Rd, Tracy. Una zona de salto de USPA con aeródromo propio. Los alumnos saltan a 13,000 ft y abren a 5,500 ft en la categoría A, con ayuda por radio bajo la vela.',
          ru: 'Skydive California, 25001 Kasson Rd, Трейси. Площадка USPA со своим аэродромом. Студенты прыгают с 13 000 футов и раскрываются на 5 500 на категории A; под куполом им помогают по радио.',
        } },
        { type: 'rules', items: [
          { big: '13,000', title: { en: 'Exit altitude', es: 'Altura de salida', ru: 'Высота выброски' }, text: { en: 'For AFF students.', es: 'Para alumnos AFF.', ru: 'Для студентов AFF.' } },
          { big: '5,500', title: { en: 'Pull, category A', es: 'Apertura, categoría A', ru: 'Раскрытие, категория A' }, text: { en: 'Lock on at 6,000.', es: 'Lock on a 6,000.', ru: 'С 6 000 — только высотомер.' } },
          { big: 'A → E', title: { en: 'Categories with instructors', es: 'Categorías con instructores', ru: 'Категории с инструкторами' }, text: { en: 'B: 90° turns. C: first release. D: 180° and 360° turns. E: flips, rolls, tracking.', es: 'B: giros de 90°. C: primera suelta. D: giros de 180° y 360°. E: volteretas, rolls y tracking.', ru: 'B: развороты на 90°. C: инструкторы впервые отпускают. D: развороты на 180° и 360°. E: сальто, бочки, трекинг.' } },
        ] },
        { type: 'callout', title: { en: 'What jumpers say about landing here', es: 'Lo que dicen los paracaidistas sobre aterrizar aquí', ru: 'Что говорят прыгуны о посадке здесь' }, text: {
          en: 'Flat farm fields all around, and one whole side of the landing area is farmland you must not land in. Fly the proper pattern; repeatedly flying the wrong one gets licensed jumpers suspended.',
          es: 'Alrededor todo son campos de cultivo planos, y un lado entero de la zona de aterrizaje es cultivo donde no se puede aterrizar. Vuela el circuito correcto: a quienes lo vuelan mal varias veces los suspenden, aunque tengan licencia.',
          ru: 'Вокруг ровные поля, и целая сторона посадочной площадки — посевы, куда садиться нельзя. Летай по правильной схеме: за повторные нарушения схемы отстраняют даже прыгунов с лицензией.',
        } },
        { type: 'watch', items: [
          { href: 'https://skydivecalifornia.com/blog/learn-skydiving-at-skydive-california-aff-training-guide/', label: { en: 'AFF training guide', es: 'Guía de entrenamiento AFF', ru: 'Руководство по обучению AFF' }, credit: 'skydivecalifornia.com' },
          { href: 'https://skydivecalifornia.com/blog/plf-parachute-landing-fall/', label: { en: 'PLF explained', es: 'El PLF explicado', ru: 'Что такое PLF' }, credit: 'skydivecalifornia.com' },
          { yt: 'v5278cKX5kU', label: { en: 'A student\'s category A jump here', es: 'Salto de categoría A de un alumno aquí', ru: 'Прыжок студента на категорию A здесь' }, credit: 'YouTube' },
          { yt: '9QnmKzjza1w', label: { en: 'AFF graduation jump', es: 'Salto de graduación AFF', ru: 'Выпускной прыжок AFF' }, credit: 'Skydive California' },
        ] },
        { type: 'p', muted: true, text: {
          en: 'Not published anywhere: the landing and holding-area map, wind and turn limits, and emergency altitudes. They are in the ground-school slides; ask for a copy.',
          es: 'No está publicado en ningún sitio: el mapa de la zona de aterrizaje y de espera, los límites de viento y de giro, y las alturas de emergencia. Están en las diapositivas del curso teórico; pide una copia.',
          ru: 'Нигде не опубликованы: карта посадочной площадки и зоны ожидания, лимиты ветра и разворотов, аварийные высоты. Они есть в слайдах наземной подготовки — попроси копию.',
        } },
      ],
    },
    {
      id: 'read',
      title: { en: 'Read and watch next', es: 'Para leer y ver', ru: 'Что почитать и посмотреть' },
      blocks: [
        { type: 'p', text: {
          en: 'The sources behind these notes, in the order worth reading them.',
          es: 'Las fuentes de estos apuntes, en el orden en que vale la pena leerlas.',
          ru: 'Источники этого конспекта, в том порядке, в каком их стоит читать.',
        } },
        { type: 'steps', items: [
          { title: { en: 'USPA Online Ground School (free)', es: 'Curso teórico online de USPA (gratis)', ru: 'Онлайн-курс наземной подготовки USPA (бесплатно)' },
            sub: { en: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: gear, exit, freefall, canopy, landing, emergencies.', es: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: equipo, salida, caída libre, vela, aterrizaje, emergencias.', ru: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: снаряжение, отделение, свободное падение, купол, посадка, аварийные ситуации.' } },
          { title: { en: 'USPA dive flows, category A onward', es: 'Planes de salto USPA, desde la categoría A', ru: 'Планы прыжков USPA с категории A' },
            sub: { en: '<a href="https://www.uspa.org/skydiveschool/A">Category A</a> and the <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">video playlist</a>. Read the next category before each jump.', es: '<a href="https://www.uspa.org/skydiveschool/A">Categoría A</a> y la <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">lista de videos</a>. Lee la siguiente categoría antes de cada salto.', ru: '<a href="https://www.uspa.org/skydiveschool/A">Категория A</a> и <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">плейлист</a>. Перед каждым прыжком читай следующую категорию.' } },
          { title: { en: 'USPA Skydiver\'s Information Manual, section 4-1', es: 'Manual de información del paracaidista de USPA (SIM), sección 4-1', ru: 'Справочник USPA (SIM), раздел 4-1' },
            sub: { en: '<a href="https://www.uspa.org/sim/4-1">Emergencies</a>: malfunctions, two canopies, obstacle landings, decision altitudes.', es: '<a href="https://www.uspa.org/sim/4-1">Emergencias</a>: malfunciones, dos velas, aterrizajes en obstáculos, alturas de decisión.', ru: '<a href="https://www.uspa.org/sim/4-1">Аварийные ситуации</a>: отказы, два купола, посадка на препятствия, высоты принятия решения.' } },
          { title: { en: 'Brian Germain, "The Parachute and its Pilot"', es: 'Brian Germain, "The Parachute and its Pilot"', ru: 'Брайан Джермейн, «The Parachute and its Pilot»' },
            sub: { en: 'The classic canopy-flight book. His <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">flare videos</a> are short and clear.', es: 'El libro clásico de pilotaje de vela. Sus <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">videos sobre el flare</a> son cortos y claros.', ru: 'Классическая книга о пилотировании купола. Его <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">видео про flare</a> короткие и понятные.' } },
          { title: { en: 'Parachutist magazine, "Rating Corner" and "Safety Check"', es: 'Revista Parachutist, "Rating Corner" y "Safety Check"', ru: 'Журнал Parachutist, рубрики «Rating Corner» и «Safety Check»' },
            sub: { en: 'Short columns by instructors on what students get wrong: <a href="https://www.uspa.org/rating-corner-aff-tips">AFF tips</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">the five-second rule</a>.', es: 'Columnas breves de instructores sobre los errores de los alumnos: <a href="https://www.uspa.org/rating-corner-aff-tips">consejos AFF</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">la regla de los cinco segundos</a>.', ru: 'Короткие колонки инструкторов о типичных ошибках студентов: <a href="https://www.uspa.org/rating-corner-aff-tips">советы по AFF</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">правило пяти секунд</a>.' } },
        ] },
      ],
    },
  ],
};
