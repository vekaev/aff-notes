import type { Part } from './types';

// The one place that is about a specific dropzone: the school where the owner did the course
// (docs/research/skydive-california.md). The rest of the app is general; swap this part to reuse it elsewhere.
export const dropzone: Part = {
  id: 'dz',
  roman: 'V',
  range: { en: 'example: Skydive California', es: 'ejemplo: Skydive California', uk: 'приклад: Skydive California', ru: 'пример: Skydive California' },
  title: { en: 'Your dropzone', es: 'Tu zona de salto', uk: 'Твій майданчик', ru: 'Твоя площадка' },
  chapters: [
    {
      id: 'sdca',
      title: { en: 'Skydive California', es: 'Skydive California', uk: 'Skydive California', ru: 'Skydive California' },
      blocks: [
        { type: 'list', title: { en: 'Skydive California, 25001 Kasson Rd, Tracy', es: 'Skydive California, 25001 Kasson Rd, Tracy', uk: 'Skydive California, 25001 Kasson Rd, Трейсі', ru: 'Skydive California, 25001 Kasson Rd, Трейси' }, items: [
          { en: 'A <b>USPA dropzone</b> with its own airfield.', es: 'Una <b>zona de salto de USPA</b> con aeródromo propio.', uk: '<b>Майданчик USPA</b> із власним аеродромом.', ru: '<b>Площадка USPA</b> со своим аэродромом.' },
          { en: '<b>Radio help</b> under canopy.', es: '<b>Ayuda por radio</b> bajo la vela.', uk: 'Під куполом <b>допомагають по радіо</b>.', ru: 'Под куполом <b>помогают по радио</b>.' },
          { en: 'Wind usually <b>from the north</b> (ground course) <q-check/>. Records from the nearby Tracy airport (daytime, 2023–24): most often <b>from the north-west</b>, then north. <b>Check the windsock</b> before every jump.', es: 'El viento suele venir <b>del norte</b> (curso en tierra) <q-check/>. Registros del aeropuerto de Tracy, muy cerca (de día, 2023–24): casi siempre <b>del noroeste</b>, luego del norte. <b>Mira el cono de viento</b> antes de cada salto.', uk: 'Вітер зазвичай <b>з півночі</b> (наземний курс) <q-check/>. Дані сусіднього аеропорту Трейсі (вдень, 2023–24): найчастіше <b>з північного заходу</b>, потім з півночі. <b>Дивись на вітровказ</b> перед кожним стрибком.', ru: 'Ветер обычно <b>с севера</b> (наземный курс) <q-check/>. Данные соседнего аэропорта Трейси (днём, 2023–24): чаще всего <b>с северо-запада</b>, потом с севера. <b>Смотри на колдун</b> перед каждым прыжком.' },
          { en: 'Holding point <b>near the playground</b> <q-check/>.', es: 'Punto de espera <b>cerca del parque infantil</b> <q-check/>.', uk: 'Точка очікування <b>біля дитячого майданчика</b> <q-check/>.', ru: 'Точка ожидания <b>у детской площадки</b> <q-check/>.' },
          { en: 'Turn limits taught here: <b>180° above 1,000 ft, 90° to 300 ft, 45° below</b>.', es: 'Límites de giro que se enseñan aquí: <b>180° por encima de 1,000 ft, 90° hasta 300 ft, 45° por debajo</b>.', uk: 'Обмеження розворотів тут: <b>180° вище 1 000 футів, 90° до 300 футів, 45° нижче</b>.', ru: 'Ограничения разворотов здесь: <b>180° выше 1 000 футов, 90° до 300 футов, 45° ниже</b>.' },
          { en: '<a href="https://skydivecalifornia.com/experienced/">Dropzone rule</a>: fly the <b>wrong landing pattern</b> again and again and you get <b>suspended</b>, even with a license.', es: '<a href="https://skydivecalifornia.com/experienced/">Norma de la zona</a>: si vuelas mal el <b>circuito de aterrizaje</b> una y otra vez, te <b>suspenden</b>, aun con licencia.', uk: '<a href="https://skydivecalifornia.com/experienced/">Правило майданчика</a>: за повторні польоти <b>не за схемою</b> посадки <b>відстороняють</b>, навіть із ліцензією.', ru: '<a href="https://skydivecalifornia.com/experienced/">Правило площадки</a>: за повторные полёты <b>не по схеме</b> захода <b>отстраняют</b>, даже с лицензией.' },
          { en: '<b>AAD required</b> for every jumper. A <b>big grassy</b> landing area.', es: '<b>AAD obligatorio</b> para todos. Una zona de aterrizaje <b>grande y con césped</b>.', uk: '<b>AAD обов’язковий</b> для всіх. Посадковий майданчик <b>великий, трав’яний</b>.', ru: '<b>AAD обязателен</b> для всех. Посадочная площадка <b>большая, травяная</b>.' },
        ] },
        { type: 'rules', items: [
          { big: '13,000 ft', title: { en: 'Exit altitude', es: 'Altura de salida', uk: 'Висота відокремлення', ru: 'Высота отделения' }, text: { en: 'For AFF students.', es: 'Para alumnos AFF.', uk: 'Для студентів AFF.', ru: 'Для студентов AFF.' } },
          { big: '5,500 ft', title: { en: 'Pull, category A', es: 'Apertura, categoría A', uk: 'Розкриття, категорія A', ru: 'Раскрытие, категория A' }, text: { en: 'Lock on at 6,000 ft. USPA lowers the pull later: <b>D 5,000 ft, E 4,500 ft</b> <q-check/>.', es: 'Lock on a 6,000 ft. USPA baja la apertura después: <b>D 5,000 ft, E 4,500 ft</b> <q-check/>.', uk: 'З 6 000 футів — лише висотомір. Далі USPA знижує розкриття: <b>D 5 000 футів, E 4 500 футів</b> <q-check/>.', ru: 'С 6 000 футов — только высотомер. Дальше USPA снижает раскрытие: <b>D 5 000 футов, E 4 500 футов</b> <q-check/>.' } },
          { big: 'A → E', title: { en: 'Categories with instructors', es: 'Categorías con instructores', uk: 'Категорії з інструкторами', ru: 'Категории с инструкторами' }, points: [
            { en: '<b>A</b>: two instructors hold you, pull at 5,500 ft', es: '<b>A</b>: dos instructores te sujetan, abres a 5,500 ft', uk: '<b>A</b>: тебе тримають два інструктори, розкриття на 5 500 футах', ru: '<b>A</b>: тебя держат два инструктора, раскрытие на 5 500 футах' },
            { en: '<b>B</b>: 90° turns, forward movement', es: '<b>B</b>: giros de 90° y avance', uk: '<b>B</b>: розвороти на 90°, рух уперед', ru: '<b>B</b>: развороты на 90°, движение вперёд' },
            { en: '<b>C-1</b>: first release', es: '<b>C-1</b>: primera suelta', uk: '<b>C-1</b>: інструктори вперше відпускають', ru: '<b>C-1</b>: инструкторы впервые отпускают' },
            { en: '<b>D-1, D-2</b>: 180° and 360° turns', es: '<b>D-1, D-2</b>: giros de 180° y 360°', uk: '<b>D-1, D-2</b>: розвороти на 180° і 360°', ru: '<b>D-1, D-2</b>: развороты на 180° и 360°' },
            { en: '<b>E-1, E-2</b>: flips, rolls, tracking', es: '<b>E-1, E-2</b>: volteretas, rolls y tracking', uk: '<b>E-1, E-2</b>: сальто, бочки, трекінг', ru: '<b>E-1, E-2</b>: сальто, бочки, трекинг' },
            { en: 'The last AFF jump is your <b>first fully solo skydive</b>', es: 'El último salto AFF es tu <b>primer salto totalmente solo</b>', uk: 'Останній стрибок AFF — твій <b>перший повністю самостійний</b>', ru: 'Последний прыжок AFF — твой <b>первый полностью самостоятельный</b>' },
            { en: 'Then the <b>A license</b>: 25 jumps, oral and written test, check-out dive', es: 'Luego la <b>licencia A</b>: 25 saltos, examen oral y escrito, salto de evaluación', uk: 'Далі <b>ліцензія A</b>: 25 стрибків, усний і письмовий іспит, перевірочний стрибок', ru: 'Дальше <b>лицензия A</b>: 25 прыжков, устный и письменный экзамен, проверочный прыжок' },
          ] },
        ] },
        { type: 'callout', title: { en: 'What jumpers say about landing here', es: 'Lo que dicen los paracaidistas sobre aterrizar aquí', uk: 'Що кажуть парашутисти про посадку тут', ru: 'Что говорят прыгуны о посадке здесь' }, points: [
          { en: '<b>Flat farm fields</b> all around.', es: 'Alrededor, <b>campos de cultivo planos</b>.', uk: 'Навколо <b>рівні поля</b>.', ru: 'Вокруг <b>ровные поля</b>.' },
          { en: 'One whole side is farmland: <b>don\'t land there</b>. Find it on the ground-school map <q-check/>.', es: 'Un lado entero es cultivo: <b>no aterrices ahí</b>. Búscalo en el mapa del curso teórico <q-check/>.', uk: 'Цілий бік майданчика — посіви: <b>туди не сідай</b>. Знайди його на карті з наземної підготовки <q-check/>.', ru: 'Целая сторона площадки — посевы: <b>туда не садись</b>. Найди её на карте с наземной подготовки <q-check/>.' },
        ] },
        { type: 'watch', items: [
          { href: 'https://skydivecalifornia.com/blog/learn-skydiving-at-skydive-california-aff-training-guide/', label: { en: 'AFF training guide', es: 'Guía de entrenamiento AFF', uk: 'Посібник із навчання AFF', ru: 'Руководство по обучению AFF' }, credit: 'skydivecalifornia.com' },
          { href: 'https://skydivecalifornia.com/blog/plf-parachute-landing-fall/', label: { en: 'PLF explained', es: 'El PLF explicado', uk: 'Що таке PLF', ru: 'Что такое PLF' }, credit: 'skydivecalifornia.com' },
          { yt: 'v5278cKX5kU', label: { en: 'A student\'s category A jump here (2022)', es: 'Salto de categoría A de un alumno aquí (2022)', uk: 'Стрибок студента на категорію A тут (2022)', ru: 'Прыжок студента на категорию A здесь (2022)' }, credit: 'AV (student)' },
          { yt: '9QnmKzjza1w', label: { en: 'AFF graduation jump here (2015)', es: 'Salto de graduación AFF aquí (2015)', uk: 'Випускний стрибок AFF тут (2015)', ru: 'Выпускной прыжок AFF здесь (2015)' }, credit: 'Skydive California' },
        ] },
        { type: 'list', title: { en: 'Not published anywhere', es: 'No publicado en ningún sitio', uk: 'Ніде не опубліковано', ru: 'Нигде не опубликовано' }, items: [
          { en: 'The <b>landing and holding-area map</b>.', es: 'El <b>mapa de la zona de aterrizaje y de espera</b>.', uk: '<b>Карта посадкового майданчика</b> і зони очікування.', ru: '<b>Карта посадочной площадки</b> и зоны ожидания.' },
          { en: '<b>Wind and turn limits</b>.', es: 'Los <b>límites de viento y de giro</b>.', uk: '<b>Ліміти вітру й розворотів</b>.', ru: '<b>Лимиты ветра и разворотов</b>.' },
          { en: '<b>Emergency altitudes</b>.', es: 'Las <b>alturas de emergencia</b>.', uk: '<b>Аварійні висоти</b>.', ru: '<b>Аварийные высоты</b>.' },
          { en: 'All in the ground-school slides: <b>ask for a copy</b>.', es: 'Todo está en las diapositivas del curso teórico: <b>pide una copia</b>.', uk: 'Усе це в слайдах наземної підготовки: <b>попроси копію</b>.', ru: 'Всё это в слайдах наземной подготовки: <b>попроси копию</b>.' },
        ] },
        { type: 'quiz', questions: [
          {
            q: { en: 'What is the exit altitude for AFF students here?', es: '¿A qué altura saltan aquí los alumnos AFF?', uk: 'З якої висоти тут стрибають студенти AFF?', ru: 'С какой высоты здесь прыгают студенты AFF?' },
            options: [
              { en: '13,000 ft', es: '13,000 ft', uk: '13 000 футів', ru: '13 000 футов' },
              { en: '10,000 ft', es: '10,000 ft', uk: '10 000 футів', ru: '10 000 футов' },
              { en: '5,500 ft', es: '5,500 ft', uk: '5 500 футів', ru: '5 500 футов' },
            ],
            answer: 0,
            why: { en: 'Students exit at 13,000 ft and pull at 5,500 ft on category A.', es: 'Los alumnos saltan a 13,000 ft y abren a 5,500 ft en la categoría A.', uk: 'Студенти стрибають з 13 000 футів і розкриваються на 5 500 на категорії A.', ru: 'Студенты прыгают с 13 000 футов и раскрываются на 5 500 на категории A.' },
          },
          {
            q: { en: 'Someone keeps flying the wrong landing pattern. What happens?', es: 'Alguien vuela mal el circuito una y otra vez. ¿Qué pasa?', uk: 'Хтось раз у раз літає не за схемою. Що буде?', ru: 'Кто-то раз за разом летает не по схеме. Что будет?' },
            options: [
              { en: 'Suspended, even with a license', es: 'Lo suspenden, aun con licencia', uk: 'Відсторонять, навіть із ліцензією', ru: 'Отстранят, даже с лицензией' },
              { en: 'Nothing, the pattern is advice', es: 'Nada, el circuito es un consejo', uk: 'Нічого, схема — лише порада', ru: 'Ничего, схема — лишь совет' },
              { en: 'Only students get a warning', es: 'Solo avisan a los alumnos', uk: 'Попереджають лише студентів', ru: 'Предупреждают только студентов' },
            ],
            answer: 0,
            why: { en: 'It is the dropzone\'s own written rule: repeated failure to fly the correct pattern means suspension, licensed or not. The pattern keeps traffic predictable, so everyone flies the one from the briefing.', es: 'Es una norma escrita de la propia zona: si vuelas mal el circuito una y otra vez, te suspenden, tengas licencia o no. El circuito hace el tráfico previsible, así que todos vuelan el del briefing.', uk: 'Це письмове правило самого майданчика: за повторні польоти не за схемою відстороняють, з ліцензією чи без. Схема робить рух куполів передбачуваним, тож усі літають ту, що на брифінгу.', ru: 'Это письменное правило самой площадки: за повторные полёты не по схеме отстраняют, с лицензией или без. Схема делает движение куполов предсказуемым, поэтому все летают ту, что на брифинге.' },
          },
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
            sub: { en: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: a free <b>refresher</b> on gear, exit, freefall, canopy, landing and emergencies. It <b>doesn\'t replace</b> your ground school.', es: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: un <b>repaso</b> gratuito de equipo, salida, caída libre, vela, aterrizaje y emergencias. <b>No sustituye</b> tu curso teórico.', uk: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: безкоштовне <b>повторення</b>: спорядження, відокремлення, вільне падіння, купол, посадка, аварійні ситуації. Наземну підготовку <b>не замінює</b>.', ru: '<a href="https://www.uspa.org/skydiveschool/landing">uspa.org/skydiveschool</a>: бесплатное <b>повторение</b>: снаряжение, отделение, свободное падение, купол, посадка, аварийные ситуации. Наземную подготовку <b>не заменяет</b>.' } },
          { title: { en: 'USPA dive flows, category A onward', es: 'Planes de salto USPA, desde la categoría A', uk: 'Плани стрибків USPA з категорії A', ru: 'Планы прыжков USPA с категории A' },
            sub: { en: '<a href="https://www.uspa.org/skydiveschool/A">Category A</a> and the <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">video playlist</a>. <b>Read the next category</b> before each jump.', es: '<a href="https://www.uspa.org/skydiveschool/A">Categoría A</a> y la <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">lista de videos</a>. <b>Lee la siguiente categoría</b> antes de cada salto.', uk: '<a href="https://www.uspa.org/skydiveschool/A">Категорія A</a> і <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">плейлист</a>. Перед кожним стрибком <b>читай наступну категорію</b>.', ru: '<a href="https://www.uspa.org/skydiveschool/A">Категория A</a> и <a href="https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh">плейлист</a>. Перед каждым прыжком <b>читай следующую категорию</b>.' } },
          { title: { en: 'USPA Skydiver\'s Information Manual, section 4-1', es: 'Manual de información del paracaidista de USPA (SIM), sección 4-1', uk: 'Довідник USPA (SIM), розділ 4-1', ru: 'Справочник USPA (SIM), раздел 4-1' },
            sub: { en: '<a href="https://www.uspa.org/sim/4-1">Emergencies</a>: <b>malfunctions</b>, two canopies, obstacle landings, decision altitudes. USPA\'s emergency procedures; the rules themselves are the <a href="https://www.uspa.org/sim/2-1">Basic Safety Requirements</a> (SIM 2-1). Read it once the course makes sense.', es: '<a href="https://www.uspa.org/sim/4-1">Emergencias</a>: <b>malfunciones</b>, dos velas, aterrizajes en obstáculos, alturas de decisión. Son los procedimientos de emergencia de USPA; las normas en sí son los <a href="https://www.uspa.org/sim/2-1">Requisitos Básicos de Seguridad</a> (SIM 2-1). Léelo cuando el curso ya tenga sentido.', uk: '<a href="https://www.uspa.org/sim/4-1">Аварійні ситуації</a>: <b>відмови</b>, два куполи, посадка на перешкоди, висоти ухвалення рішення. Це аварійні процедури USPA; самі правила — <a href="https://www.uspa.org/sim/2-1">Базові вимоги безпеки</a> (SIM 2-1). Читай, коли курс уже зрозумілий.', ru: '<a href="https://www.uspa.org/sim/4-1">Аварийные ситуации</a>: <b>отказы</b>, два купола, посадка на препятствия, высоты принятия решения. Это аварийные процедуры USPA; сами правила — <a href="https://www.uspa.org/sim/2-1">Базовые требования безопасности</a> (SIM 2-1). Читай, когда курс уже понятен.' } },
          { title: { en: 'Brian Germain, "The Parachute and its Pilot"', es: 'Brian Germain, "The Parachute and its Pilot"', uk: 'Браян Джермейн, «The Parachute and its Pilot»', ru: 'Брайан Джермейн, «The Parachute and its Pilot»' },
            sub: { en: 'The <b>classic canopy-flight book</b>. His <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">flare videos</a> are short and clear.', es: 'El <b>libro clásico de pilotaje de vela</b>. Sus <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">videos sobre el flare</a> son cortos y claros.', uk: '<b>Класична книжка</b> про пілотування купола. Його <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">відео про flare</a> короткі й зрозумілі.', ru: '<b>Классическая книга</b> о пилотировании купола. Его <a href="https://www.youtube.com/watch?v=IIN4WylwLGo">видео про flare</a> короткие и понятные.' } },
          { title: { en: 'Parachutist magazine, "Rating Corner" and "Safety Check"', es: 'Revista Parachutist, "Rating Corner" y "Safety Check"', uk: 'Журнал Parachutist, рубрики «Rating Corner» і «Safety Check»', ru: 'Журнал Parachutist, рубрики «Rating Corner» и «Safety Check»' },
            sub: { en: 'Short columns by instructors on <b>what students get wrong</b>: <a href="https://www.uspa.org/rating-corner-aff-tips">AFF tips</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">the five-second rule</a>.', es: 'Columnas breves de instructores sobre <b>los errores de los alumnos</b>: <a href="https://www.uspa.org/rating-corner-aff-tips">consejos AFF</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">la regla de los cinco segundos</a>.', uk: 'Короткі колонки інструкторів про <b>типові помилки студентів</b>: <a href="https://www.uspa.org/rating-corner-aff-tips">поради з AFF</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">правило п’яти секунд</a>.', ru: 'Короткие колонки инструкторов о <b>типичных ошибках студентов</b>: <a href="https://www.uspa.org/rating-corner-aff-tips">советы по AFF</a>, <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">правило пяти секунд</a>.' } },
        ] },
      ],
    },
  ],
};
