import type { Part } from './types';

// Public material from the dropzone where the course happened (docs/research/skydive-california.md).
export const dropzone: Part = {
  id: 'dz',
  roman: 'V',
  range: { en: 'Tracy, California', es: 'Tracy, California', uk: 'Трейсі, Каліфорнія', ru: 'Трейси, Калифорния' },
  title: { en: 'Our dropzone', es: 'Nuestra zona de salto', uk: 'Наш майданчик', ru: 'Наша площадка' },
  chapters: [
    {
      id: 'sdca',
      title: { en: 'Skydive California', es: 'Skydive California', uk: 'Skydive California', ru: 'Skydive California' },
      blocks: [
        { type: 'list', title: { en: 'Skydive California, 25001 Kasson Rd, Tracy', es: 'Skydive California, 25001 Kasson Rd, Tracy', uk: 'Skydive California, 25001 Kasson Rd, Трейсі', ru: 'Skydive California, 25001 Kasson Rd, Трейси' }, items: [
          { en: 'A <b>USPA dropzone</b> with its own airfield.', es: 'Una <b>zona de salto de USPA</b> con aeródromo propio.', uk: '<b>Майданчик USPA</b> із власним аеродромом.', ru: '<b>Площадка USPA</b> со своим аэродромом.' },
          { en: 'Students exit at <b>13,000 ft</b>, pull at <b>5,500 ft</b> on category A.', es: 'Los alumnos saltan a <b>13,000 ft</b> y abren a <b>5,500 ft</b> en la categoría A.', uk: 'Студенти стрибають з <b>13 000 футів</b>, розкриваються на <b>5 500</b> на категорії A.', ru: 'Студенты прыгают с <b>13 000 футов</b>, раскрываются на <b>5 500</b> на категории A.' },
          { en: '<b>Radio help</b> under canopy.', es: '<b>Ayuda por radio</b> bajo la vela.', uk: 'Під куполом <b>допомагають по радіо</b>.', ru: 'Под куполом <b>помогают по радио</b>.' },
        ] },
        { type: 'rules', items: [
          { big: '13,000', title: { en: 'Exit altitude', es: 'Altura de salida', uk: 'Висота викидання', ru: 'Высота выброски' }, text: { en: 'For AFF students.', es: 'Para alumnos AFF.', uk: 'Для студентів AFF.', ru: 'Для студентов AFF.' } },
          { big: '5,500', title: { en: 'Pull, category A', es: 'Apertura, categoría A', uk: 'Розкриття, категорія A', ru: 'Раскрытие, категория A' }, text: { en: 'Lock on at 6,000.', es: 'Lock on a 6,000.', uk: 'З 6 000 — лише висотомір.', ru: 'С 6 000 — только высотомер.' } },
          { big: 'A → E', title: { en: 'Categories with instructors', es: 'Categorías con instructores', uk: 'Категорії з інструкторами', ru: 'Категории с инструкторами' }, points: [
            { en: '<b>B</b>: 90° turns', es: '<b>B</b>: giros de 90°', uk: '<b>B</b>: розвороти на 90°', ru: '<b>B</b>: развороты на 90°' },
            { en: '<b>C</b>: first release', es: '<b>C</b>: primera suelta', uk: '<b>C</b>: інструктори вперше відпускають', ru: '<b>C</b>: инструкторы впервые отпускают' },
            { en: '<b>D</b>: 180° and 360° turns', es: '<b>D</b>: giros de 180° y 360°', uk: '<b>D</b>: розвороти на 180° і 360°', ru: '<b>D</b>: развороты на 180° и 360°' },
            { en: '<b>E</b>: flips, rolls, tracking', es: '<b>E</b>: volteretas, rolls y tracking', uk: '<b>E</b>: сальто, бочки, трекінг', ru: '<b>E</b>: сальто, бочки, трекинг' },
          ] },
        ] },
        { type: 'callout', title: { en: 'What jumpers say about landing here', es: 'Lo que dicen los paracaidistas sobre aterrizar aquí', uk: 'Що кажуть парашутисти про посадку тут', ru: 'Что говорят прыгуны о посадке здесь' }, points: [
          { en: '<b>Flat farm fields</b> all around.', es: 'Alrededor, <b>campos de cultivo planos</b>.', uk: 'Навколо <b>рівні поля</b>.', ru: 'Вокруг <b>ровные поля</b>.' },
          { en: 'One whole side is farmland: <b>don\'t land there</b>.', es: 'Un lado entero es cultivo: <b>no aterrices ahí</b>.', uk: 'Цілий бік майданчика — посіви: <b>туди не сідай</b>.', ru: 'Целая сторона площадки — посевы: <b>туда не садись</b>.' },
          { en: 'Fly the <b>proper pattern</b>.', es: 'Vuela el <b>circuito correcto</b>.', uk: 'Літай за <b>правильною схемою</b>.', ru: 'Летай по <b>правильной схеме</b>.' },
          { en: 'Wrong one, repeatedly: even licensed jumpers get <b>suspended</b>.', es: 'Volarlo mal varias veces: <b>suspenden</b> incluso con licencia.', uk: 'За повторні порушення <b>відсторонюють</b> навіть із ліцензією.', ru: 'За повторные нарушения <b>отстраняют</b> даже с лицензией.' },
        ] },
        { type: 'watch', items: [
          { href: 'https://skydivecalifornia.com/blog/learn-skydiving-at-skydive-california-aff-training-guide/', label: { en: 'AFF training guide', es: 'Guía de entrenamiento AFF', uk: 'Посібник із навчання AFF', ru: 'Руководство по обучению AFF' }, credit: 'skydivecalifornia.com' },
          { href: 'https://skydivecalifornia.com/blog/plf-parachute-landing-fall/', label: { en: 'PLF explained', es: 'El PLF explicado', uk: 'Що таке PLF', ru: 'Что такое PLF' }, credit: 'skydivecalifornia.com' },
          { yt: 'v5278cKX5kU', label: { en: 'A student\'s category A jump here', es: 'Salto de categoría A de un alumno aquí', uk: 'Стрибок студента на категорію A тут', ru: 'Прыжок студента на категорию A здесь' }, credit: 'YouTube' },
          { yt: '9QnmKzjza1w', label: { en: 'AFF graduation jump', es: 'Salto de graduación AFF', uk: 'Випускний стрибок AFF', ru: 'Выпускной прыжок AFF' }, credit: 'Skydive California' },
        ] },
        { type: 'list', title: { en: 'Not published anywhere', es: 'No publicado en ningún sitio', uk: 'Ніде не опубліковано', ru: 'Нигде не опубликовано' }, items: [
          { en: 'The <b>landing and holding-area map</b>.', es: 'El <b>mapa de la zona de aterrizaje y de espera</b>.', uk: '<b>Карта посадкового майданчика</b> і зони очікування.', ru: '<b>Карта посадочной площадки</b> и зоны ожидания.' },
          { en: '<b>Wind and turn limits</b>.', es: 'Los <b>límites de viento y de giro</b>.', uk: '<b>Ліміти вітру й розворотів</b>.', ru: '<b>Лимиты ветра и разворотов</b>.' },
          { en: '<b>Emergency altitudes</b>.', es: 'Las <b>alturas de emergencia</b>.', uk: '<b>Аварійні висоти</b>.', ru: '<b>Аварийные высоты</b>.' },
          { en: 'All in the ground-school slides: <b>ask for a copy</b>.', es: 'Todo está en las diapositivas del curso teórico: <b>pide una copia</b>.', uk: 'Усе це в слайдах наземної підготовки: <b>попроси копію</b>.', ru: 'Всё это в слайдах наземной подготовки: <b>попроси копию</b>.' },
        ] },
      ],
    },
    {
      id: 'read',
      title: { en: 'Read and watch next', es: 'Para leer y ver', uk: 'Що почитати й подивитися', ru: 'Что почитать и посмотреть' },
      blocks: [
        { type: 'p', text: {
          en: 'The sources behind these notes, in the order worth reading them.',
          es: 'Las fuentes de estos apuntes, en el orden en que vale la pena leerlas.',
          uk: 'Джерела цього конспекту в тому порядку, в якому їх варто читати.',
          ru: 'Источники этого конспекта, в том порядке, в каком их стоит читать.',
        } },
        { type: 'steps', items: [
          { title: { en: 'USPA Online Ground School (free)', es: 'Curso teórico online de USPA (gratis)', uk: 'Онлайн-курс наземної підготовки USPA (безкоштовно)', ru: 'Онлайн-курс наземной подготовки USPA (бесплатно)' },
            sub: { en: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: <b>the whole course</b>: gear, exit, freefall, canopy, landing, emergencies.', es: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: <b>todo el curso</b>: equipo, salida, caída libre, vela, aterrizaje, emergencias.', uk: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: <b>увесь курс</b>: спорядження, відокремлення, вільне падіння, купол, посадка, аварійні ситуації.', ru: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: <b>весь курс</b>: снаряжение, отделение, свободное падение, купол, посадка, аварийные ситуации.' } },
          { title: { en: 'USPA dive flows, category A onward', es: 'Planes de salto USPA, desde la categoría A', uk: 'Плани стрибків USPA з категорії A', ru: 'Планы прыжков USPA с категории A' },
            sub: { en: '<a href="https://www.uspa.org/skydiveschool/A">Category A</a> and the <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">video playlist</a>. <b>Read the next category</b> before each jump.', es: '<a href="https://www.uspa.org/skydiveschool/A">Categoría A</a> y la <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">lista de videos</a>. <b>Lee la siguiente categoría</b> antes de cada salto.', uk: '<a href="https://www.uspa.org/skydiveschool/A">Категорія A</a> і <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">плейлист</a>. Перед кожним стрибком <b>читай наступну категорію</b>.', ru: '<a href="https://www.uspa.org/skydiveschool/A">Категория A</a> и <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">плейлист</a>. Перед каждым прыжком <b>читай следующую категорию</b>.' } },
          { title: { en: 'USPA Skydiver\'s Information Manual, section 4-1', es: 'Manual de información del paracaidista de USPA (SIM), sección 4-1', uk: 'Довідник USPA (SIM), розділ 4-1', ru: 'Справочник USPA (SIM), раздел 4-1' },
            sub: { en: '<a href="https://www.uspa.org/sim/4-1">Emergencies</a>: <b>malfunctions</b>, two canopies, obstacle landings, decision altitudes.', es: '<a href="https://www.uspa.org/sim/4-1">Emergencias</a>: <b>malfunciones</b>, dos velas, aterrizajes en obstáculos, alturas de decisión.', uk: '<a href="https://www.uspa.org/sim/4-1">Аварійні ситуації</a>: <b>відмови</b>, два куполи, посадка на перешкоди, висоти ухвалення рішення.', ru: '<a href="https://www.uspa.org/sim/4-1">Аварийные ситуации</a>: <b>отказы</b>, два купола, посадка на препятствия, высоты принятия решения.' } },
          { title: { en: 'Brian Germain, "The Parachute and its Pilot"', es: 'Brian Germain, "The Parachute and its Pilot"', uk: 'Браян Джермейн, «The Parachute and its Pilot»', ru: 'Брайан Джермейн, «The Parachute and its Pilot»' },
            sub: { en: 'The <b>classic canopy-flight book</b>. His <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">flare videos</a> are short and clear.', es: 'El <b>libro clásico de pilotaje de vela</b>. Sus <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">videos sobre el flare</a> son cortos y claros.', uk: '<b>Класична книжка</b> про пілотування купола. Його <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">відео про flare</a> короткі й зрозумілі.', ru: '<b>Классическая книга</b> о пилотировании купола. Его <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">видео про flare</a> короткие и понятные.' } },
          { title: { en: 'Parachutist magazine, "Rating Corner" and "Safety Check"', es: 'Revista Parachutist, "Rating Corner" y "Safety Check"', uk: 'Журнал Parachutist, рубрики «Rating Corner» і «Safety Check»', ru: 'Журнал Parachutist, рубрики «Rating Corner» и «Safety Check»' },
            sub: { en: 'Short columns by instructors on <b>what students get wrong</b>: <a href="https://www.uspa.org/rating-corner-aff-tips">AFF tips</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">the five-second rule</a>.', es: 'Columnas breves de instructores sobre <b>los errores de los alumnos</b>: <a href="https://www.uspa.org/rating-corner-aff-tips">consejos AFF</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">la regla de los cinco segundos</a>.', uk: 'Короткі колонки інструкторів про <b>типові помилки студентів</b>: <a href="https://www.uspa.org/rating-corner-aff-tips">поради з AFF</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">правило п\'яти секунд</a>.', ru: 'Короткие колонки инструкторов о <b>типичных ошибках студентов</b>: <a href="https://www.uspa.org/rating-corner-aff-tips">советы по AFF</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">правило пяти секунд</a>.' } },
        ] },
      ],
    },
  ],
};
