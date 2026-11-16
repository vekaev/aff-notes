import type { Clip, L, Part } from './types';

// Part III: from the pull at 5,500 ft to standing on the ground.
const l = (en: string, es: string, ru: string): L => ({ en, es, ru });

const clip = (src: string, caption: L, credit: string, yt: string, t: number): Clip => ({ src, caption, credit, yt, t });

export const part3: Part = {
  id: 'part3',
  roman: 'III',
  range: l('5,500 ft → ground', '5,500 ft → suelo', '5 500 футов → земля'),
  title: l('Under canopy', 'Bajo vela', 'Под куполом'),
  chapters: [
    // ---------------------------------------------------------------- deploy
    {
      id: 'deploy',
      title: l('Pull, count, check', 'Abrir, contar, revisar', 'Раскрытие, счёт, проверка'),
      blocks: [
        {
          type: 'split',
          left: [
            {
              type: 'steps',
              items: [
                {
                  title: l('Pull at 5,500 ft', 'Abre a 5,500 ft', 'Раскрытие на 5 500 футах'),
                  sub: l(
                    "Right hand to the <b>pilot chute handle</b> (the little “ball” at the bottom of the container, right side). Pull it out and <b>throw it</b>.",
                    "Mano derecha a la <b>manija del extractor</b> (la “pelotita” en la parte de abajo del contenedor, lado derecho). Sácalo y <b>lánzalo</b>.",
                    "Правая рука — на <b>ручку вытяжного парашюта</b> («шарик» внизу ранца справа). Вытащить и <b>выбросить</b>.",
                  ),
                },
                {
                  title: l('Count 5 seconds', 'Cuenta 5 segundos', 'Считаем 5 секунд'),
                  sub: l(
                    "“One thousand, two thousand … five thousand”. A canopy needs <b>about 5 s</b> to open fully. <b>Don't judge it earlier.</b>",
                    "“Mil uno, mil dos … mil cinco”. Una vela necesita <b>unos 5 s</b> para abrirse del todo. <b>No la juzgues antes.</b>",
                    "«Тысяча один, тысяча два … тысяча пять». Куполу нужно <b>около 5 с</b>, чтобы полностью раскрыться. <b>Раньше не оцениваем.</b>",
                  ),
                },
                {
                  title: l('Look up and check', 'Mira arriba y revisa', 'Смотрим вверх и проверяем'),
                  sub: l(
                    '<b>There, square, stable, steerable.</b>',
                    '<b>Está, cuadrada, estable, gobernable.</b>',
                    '<b>Есть, квадратный, стабильный, управляемый.</b>',
                  ),
                },
              ],
            },
            {
              type: 'canopyCheck',
              items: [
                {
                  word: l('There', 'Está', 'Есть'),
                  text: l('Something is out over your head.', 'Hay algo abierto sobre tu cabeza.', 'Над головой что-то есть.'),
                },
                {
                  word: l('Square', 'Cuadrada', 'Квадратный'),
                  text: l(
                    'Rectangle, <b>all cells open</b>, slider down.',
                    'Rectángulo, <b>todas las celdas abiertas</b>, slider abajo.',
                    'Прямоугольник, <b>все секции наполнены</b>, слайдер опущен.',
                  ),
                },
                {
                  word: l('Stable', 'Estable', 'Стабильный'),
                  text: l('Flies straight, <b>not spinning</b>.', 'Vuela recta, <b>no gira</b>.', 'Летит ровно, <b>не вращается</b>.'),
                },
                {
                  word: l('Steerable', 'Gobernable', 'Управляемый'),
                  text: l(
                    'Unstow the toggles: turn left, turn right, then a <b>practice flare</b>.',
                    'Desengancha los batidores: gira a la izquierda, gira a la derecha y luego haz un <b>flare de práctica</b>.',
                    'Снять клеванты с фиксации: поворот влево, вправо, потом <b>пробное торможение (flare)</b>.',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              tone: 'red',
              title: l('Any “no”?', '¿Algún “no”?', 'Хоть одно «нет»?'),
              text: l(
                'Go to <a href="#ep">Part IV</a>. Decide by the decision altitude, <b>2,500 ft</b>.',
                'Ve a la <a href="#ep">Parte IV</a>. Decide antes de la altura de decisión, <b>2,500 ft</b>.',
                'Переходи к <a href="#ep">части IV</a>. Решить нужно до высоты принятия решения — <b>2 500 футов</b>.',
              ),
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                clip('deploy', l('Lock on, wave off, reach, throw', 'Altímetro, wave-off, buscar, lanzar', 'Высотомер, отмашка, дотянуться, выбросить'), 'Skydive Spaceland', 'ufz1HjyYs_0', 146),
                clip('throw', l('Locate, grip, throw, arch, count', 'Localizar, agarrar, lanzar, arquear, contar', 'Найти, взять, выбросить, прогиб, счёт'), 'APF', 'PTYsjH7DSVA', 124),
                clip('check', l('Canopy check: shape, slider, toggles, practice flares', 'Revisión de la vela: forma, slider, batidores, flares de práctica', 'Проверка купола: форма, слайдер, клеванты, пробные flare'), 'APF', 'PTYsjH7DSVA', 154),
              ],
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'ufz1HjyYs_0', t: 146, label: l('Lock on, wave off, throw', 'Altímetro, wave-off, lanzar', 'Высотомер, отмашка, выброс'), credit: 'Skydive Spaceland' },
            { yt: 'PTYsjH7DSVA', t: 124, label: l('Locate, grip, throw, count', 'Localizar, agarrar, lanzar, contar', 'Найти, взять, выбросить, считать'), credit: 'APF' },
            { yt: 'PTYsjH7DSVA', t: 154, label: l('Canopy check and practice flares', 'Revisión de la vela y flares de práctica', 'Проверка купола и пробные flare'), credit: 'APF' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: l(
                'You threw the pilot chute. When do you judge the canopy?',
                'Lanzaste el extractor. ¿Cuándo juzgas la vela?',
                'Ты выбросил вытяжной парашют. Когда оценивать купол?',
              ),
              options: [
                l('Right away, as soon as you feel the tug', 'Enseguida, en cuanto sientes el tirón', 'Сразу, как только почувствовал рывок'),
                l('After counting about 5 seconds', 'Después de contar unos 5 segundos', 'После счёта примерно 5 секунд'),
                l('After landing', 'Después de aterrizar', 'После приземления'),
              ],
              answer: 1,
              why: l(
                "A canopy needs about 5 s to open fully. Count “one thousand … five thousand”, then look up.",
                "Una vela necesita unos 5 s para abrirse del todo. Cuenta “mil uno … mil cinco” y luego mira arriba.",
                "Куполу нужно около 5 с, чтобы полностью раскрыться. Считаем «тысяча один … тысяча пять», потом смотрим вверх.",
              ),
            },
            {
              q: l(
                'What does “square” mean in the canopy check?',
                '¿Qué significa “cuadrada” en la revisión de la vela?',
                'Что значит «квадратный» при проверке купола?',
              ),
              options: [
                l('Rectangle, all cells open, slider down', 'Rectángulo, todas las celdas abiertas, slider abajo', 'Прямоугольник, все секции наполнены, слайдер опущен'),
                l('It turns left and right', 'Gira a la izquierda y a la derecha', 'Поворачивает влево и вправо'),
                l('Something is out over your head', 'Hay algo fuera sobre tu cabeza', 'Над головой что-то есть'),
              ],
              answer: 0,
              why: l(
                '“There” is something overhead, “steerable” is the turns and the practice flare. “Square” is the shape: all cells open, slider down.',
                '“Está” es que hay algo arriba, “gobernable” son los giros y el flare de práctica. “Cuadrada” es la forma: todas las celdas abiertas, slider abajo.',
                '«Есть» — что-то над головой, «управляемый» — повороты и пробный flare. «Квадратный» — это форма: все секции наполнены, слайдер опущен.',
              ),
            },
            {
              q: l(
                'One answer in the check is “no”. By what altitude must you decide?',
                'Una respuesta de la revisión es “no”. ¿Antes de qué altura tienes que decidir?',
                'Один ответ при проверке — «нет». До какой высоты нужно решить?',
              ),
              options: [
                l('By 1,000 ft', 'Antes de 1,000 ft', 'До 1 000 футов'),
                l('By 2,500 ft, the decision altitude', 'Antes de 2,500 ft, la altura de decisión', 'До 2 500 футов — высоты принятия решения'),
                l('By 300 ft', 'Antes de 300 ft', 'До 300 футов'),
              ],
              answer: 1,
              why: l(
                'Any “no” sends you to the emergency procedures in Part IV, and the decision is made by 2,500 ft.',
                'Cualquier “no” te lleva a los procedimientos de emergencia de la Parte IV, y la decisión se toma antes de 2,500 ft.',
                'Любое «нет» — переходишь к аварийным действиям из части IV, и решение принимается до 2 500 футов.',
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- pattern
    {
      id: 'pattern',
      title: l('Flight plan and landing pattern', 'Plan de vuelo y circuito de aterrizaje', 'План полёта и схема захода'),
      blocks: [
        {
          type: 'list',
          items: [
            l(
              'Drawn as on our <b>ground-school test</b>. Altitudes in feet.',
              'Dibujado como en nuestro <b>examen del curso en tierra</b>. Alturas en pies.',
              'Нарисовано как в нашем <b>тесте наземной подготовки</b>. Высоты в футах.',
            ),
            l(
              'Final always points <b>into the wind</b>, so the whole pattern turns with it.',
              'El final siempre apunta <b>contra el viento</b>, así que todo el circuito gira con él.',
              'Финал всегда <b>против ветра</b>, поэтому вся схема поворачивается вместе с ним.',
            ),
            l(
              'Check the <b>windsock</b> before you board.',
              'Mira la <b>manga de viento</b> antes de subir al avión.',
              'Смотрим на <b>колдун</b> (ветроуказатель) до посадки в самолёт.',
            ),
            l(
              'At our dropzone the wind is usually <b>from the north</b>.',
              'En nuestra zona de salto el viento suele venir <b>del norte</b>.',
              'У нас на аэродроме ветер обычно <b>с севера</b>.',
            ),
          ],
        },
        {
          type: 'pattern',
          rows: [
            {
              alt: '2,500',
              value: 2.5,
              point: [275, 205],
              title: l('Decide where to go', 'Decide adónde ir', 'Решаем, куда лететь'),
              sub: l(
                "Can you reach the <b>holding point</b>? <b>Left or right</b> pattern for today's wind? A canopy decision, not the emergency one.",
                '¿Llegas al <b>punto de espera</b>? ¿Circuito por la <b>izquierda o derecha</b> con el viento de hoy? Decisión de vuelo, no la de emergencia.',
                'Долетаю ли до <b>точки ожидания</b>? <b>Левая или правая</b> схема при сегодняшнем ветре? Решение по полёту, а не аварийное.',
              ),
            },
            {
              alt: '2,000',
              value: 2,
              point: [275, 205],
              title: l('Over the holding point', 'Sobre el punto de espera', 'Над точкой ожидания'),
              sub: l(
                "The point <b>near the playground</b>. Ask: can I reach the landing area from here? If not, <b>pick a clear field</b> now. <q-check/>",
                "El punto <b>cerca del parque infantil</b>. Pregúntate: ¿llego a la zona de aterrizaje desde aquí? Si no, <b>elige ahora un campo despejado</b>. <q-check/>",
                "Точка <b>у детской площадки</b>. Спроси себя: долечу ли отсюда до зоны приземления? Если нет — <b>сразу выбираем свободное поле</b>. <q-check/>",
              ),
            },
            {
              alt: '2,000→1,000',
              value: 1.5,
              point: [275, 205],
              title: l('Hold there', 'Espera ahí', 'Ожидание над точкой'),
              sub: l(
                '<b>Circle or S-turns</b> over the point, whatever the wind. Watch the <b>windsock</b> and the <b>other canopies</b>.',
                'Haz <b>círculos o eses</b> sobre el punto, sea cual sea el viento. Mira la <b>manga de viento</b> y las <b>otras velas</b>.',
                '<b>Кружим или летаем «змейкой»</b> над точкой при любом ветре. Смотрим на <b>колдун</b> и на <b>другие купола</b>.',
              ),
            },
            {
              alt: '900',
              value: 0.9,
              hot: true,
              point: [250, 200],
              title: l('Enter the pattern: downwind', 'Entra al circuito: viento en cola', 'Вход в схему: по ветру'),
              sub: l(
                '<b>Wind at your back</b>, flying alongside the landing area.',
                '<b>Viento en la espalda</b>, vuelas paralelo a la zona de aterrizaje.',
                '<b>Ветер в спину</b>, летим вдоль зоны приземления.',
              ),
            },
            {
              alt: '600',
              value: 0.6,
              hot: true,
              point: [60, 200],
              title: l('Turn 90° onto base', 'Gira 90° a base', 'Поворот 90° на базовую'),
              sub: l('<b>Crosswind</b> leg.', 'Tramo con <b>viento cruzado</b>.', 'Участок <b>поперёк ветра</b>.'),
            },
            {
              alt: '300',
              value: 0.3,
              hot: true,
              point: [60, 70],
              title: l('Turn 90° onto final', 'Gira 90° a final', 'Поворот 90° на финал'),
              sub: l(
                '<b>Into the wind</b>, toward the target. From here only small flat corrections (<b>≤ 45°</b>).',
                '<b>Contra el viento</b>, hacia el blanco. Desde aquí solo correcciones pequeñas y planas (<b>≤ 45°</b>).',
                '<b>Против ветра</b>, на цель. Дальше только небольшие плоские поправки (<b>≤ 45°</b>).',
              ),
            },
            {
              alt: '10 ft',
              value: 0.01,
              hot: true,
              point: [188, 70],
              title: l('Flare', 'Flare', 'Flare'),
              sub: l(
                '<b>About 3 m</b> off the ground. Smooth, both hands, <b>finished at touchdown</b>, then hold it.',
                '<b>A unos 3 m</b> del suelo. Suave, con las dos manos, que <b>termine al tocar el suelo</b>, y luego mantenlo.',
                '<b>Примерно 3 м</b> над землёй. Плавно, обеими руками, <b>закончить к моменту касания</b> и держать.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          title: l('Two different 2,500 ft', 'Dos 2,500 ft distintos', 'Две разные отметки 2 500 футов'),
          points: [
            l(
              '<b>Good canopy</b>: plan the landing. Holding point, left or right pattern.',
              '<b>Vela buena</b>: planeas el aterrizaje. Punto de espera, izquierda o derecha.',
              '<b>Хороший купол</b>: планируем посадку. Точка ожидания, левая или правая схема.',
            ),
            l(
              '<b>Emergency</b>: the decision altitude. By now you have decided to cut away or not.',
              '<b>Emergencia</b>: la altura de decisión. Ya decidiste si liberas o no.',
              '<b>Аварийная ситуация</b>: высота принятия решения. Ты уже решил, отцепляться или нет.',
            ),
            l('Same number, <b>different jobs</b>.', 'Mismo número, <b>tareas distintas</b>.', 'Цифра одна, <b>задачи разные</b>.'),
          ],
        },
        {
          type: 'clips',
          items: [
            clip('holding', l('Holding area, explained on a real dropzone', 'La zona de espera, explicada en una zona de salto real', 'Зона ожидания на настоящем аэродроме'), 'Skydive Spaceland', 'puD56VJ8loA', 84),
            clip('pattern', l('Flying the pattern: downwind, base, final', 'Volar el circuito: viento en cola, base, final', 'Схема захода: по ветру, базовая, финал'), 'Skydive Spaceland', 'puD56VJ8loA', 110),
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'puD56VJ8loA', t: 84, label: l('Landing patterns 101', 'Circuitos de aterrizaje: lo básico', 'Схемы захода: основы'), credit: 'Skydive Spaceland' },
          ],
        },
        { type: 'h', text: l('Turn limits', 'Límites de giro', 'Ограничения разворотов') },
        {
          type: 'rules',
          items: [
            { big: '≤ 180°', title: l('Above 1,000 ft', 'Por encima de 1,000 ft', 'Выше 1 000 футов') },
            { big: '≤ 90°', title: l('1,000 → 300 ft', '1,000 → 300 ft', '1 000 → 300 футов') },
            {
              big: '≤ 45°',
              tone: 'red',
              title: l('Below 300 ft', 'Por debajo de 300 ft', 'Ниже 300 футов'),
              text: l('<b>Flat turns only</b>, and only to avoid something.', '<b>Solo giros planos</b>, y solo para esquivar algo.', '<b>Только плоские развороты</b> и только чтобы уйти от препятствия.'),
            },
          ],
        },
        {
          type: 'callout',
          text: l(
            'A <b>big turn low</b> is the classic way canopy pilots get hurt: the canopy <b>dives</b> and loses height fast.',
            'Un <b>giro grande a baja altura</b> es la forma clásica en que los pilotos de vela se lesionan: la vela <b>pica</b> y pierde altura rápido.',
            '<b>Большой разворот низко</b> над землёй — классическая причина травм: купол <b>ныряет</b> и быстро теряет высоту.',
          ),
        },
        {
          type: 'h',
          id: 'lowturn',
          text: l('What a “low turn” is, and why it hurts', 'Qué es un “giro bajo” y por qué hace daño', 'Что такое «низкий разворот» и почему он опасен'),
        },
        {
          type: 'list',
          title: l('Pull one toggle and the canopy doesn’t just turn', 'Tiras de un batidor y la vela no solo gira', 'Тянешь одну клеванту, и купол не просто поворачивает'),
          items: [
            l('It <b>tilts, dives and speeds up</b>.', 'Se <b>inclina, pica y acelera</b>.', 'Он <b>кренится, ныряет и разгоняется</b>.'),
            l('You <b>swing out</b> under it.', 'Tú te <b>balanceas hacia afuera</b> debajo de ella.', 'Тебя <b>выносит в сторону</b> под ним.'),
            l('Up high that’s fine: it <b>levels out</b> again.', 'Arriba no pasa nada: <b>vuelve a nivelarse</b>.', 'Высоко это не страшно: купол <b>снова выравнивается</b>.'),
            l('Close to the ground it’s <b>still diving</b> when you get there.', 'Cerca del suelo <b>todavía está picando</b> cuando llegas.', 'У земли он <b>ещё не вышел из нырка</b>.'),
          ],
        },
        {
          type: 'lowturn',
          text: l(
            'Turning <b>too sharply</b> at the very end, near the ground: you hit fast, often at an angle, with <b>no flare left</b>. That’s a <b>low turn</b>.',
            'Girar <b>demasiado fuerte</b> justo al final, cerca del suelo: golpeas rápido, a menudo inclinado, <b>sin margen para el flare</b>. Eso es un <b>giro bajo</b>.',
            'Слишком <b>резкий поворот</b> в самом конце, у земли: удар на скорости, часто под углом, и <b>на flare нет запаса</b>. Это и есть <b>низкий разворот</b>.',
          ),
          points: [
            l(
              'Below 300 ft: <b>about 45° max</b>, flat turns only.',
              'Por debajo de 300 ft: <b>unos 45° como máximo</b>, solo giros planos.',
              'Ниже 300 футов: <b>не больше примерно 45°</b>, только плоские.',
            ),
            l(
              'Wrong spot low? <b>Land straight</b>, even downwind or off target.',
              '¿Bajo y en mal lugar? <b>Aterriza recto</b>, aunque sea con viento en cola o fuera del blanco.',
              'Низко и не туда? <b>Садись прямо</b>, даже по ветру или мимо цели.',
            ),
            l(
              'A <b>level wing</b> beats the perfect spot (USPA SIM 4-1).',
              'Un <b>ala nivelada</b> vale más que el lugar perfecto (USPA SIM 4-1).',
              '<b>Ровное крыло</b> важнее идеального места (USPA SIM 4-1).',
            ),
            l(
              'Obstacle below 300 ft (bush, fence): <b>half brakes</b>, go into it, don’t turn hard.',
              'Obstáculo por debajo de 300 ft (arbusto, cerca): <b>medio freno</b>, entra en él, no gires fuerte.',
              'Препятствие ниже 300 футов (куст, забор): <b>полутормоза</b>, садись в него, резко не поворачивай.',
            ),
            l(
              'Must turn low? <b>Flat turn</b>: one toggle a little, the other partly down. No dive.',
              '¿Tienes que girar bajo? <b>Giro plano</b>: un batidor un poco, el otro parcialmente abajo. Sin picar.',
              'Нужно повернуть низко? <b>Плоский поворот</b>: одну клеванту чуть, другую частично вниз. Без нырка.',
            ),
          ],
          clip: clip(
            'lowturn',
            l(
              'News report: “skydiving deaths often result from sharp turns”',
              'Noticia: “las muertes en paracaidismo suelen deberse a giros bruscos”',
              'Репортаж: «гибель парашютистов часто связана с резкими поворотами»',
            ),
            'Cronkite News',
            '3dsAULINDhU',
            129,
          ),
        },
        {
          type: 'quiz',
          questions: [
            {
              q: l(
                'At 2,500 ft under a good canopy, what do you decide?',
                'A 2,500 ft con una vela buena, ¿qué decides?',
                'Что решаешь на 2 500 футах под хорошим куполом?',
              ),
              options: [
                l('Whether to cut away', 'Si liberar o no', 'Отцепляться или нет'),
                l('Whether you can reach the holding point, and a left- or right-hand pattern', 'Si llegas al punto de espera, y circuito por la izquierda o por la derecha', 'Долетаю ли до точки ожидания и какая схема: левая или правая'),
                l('When to start the flare', 'Cuándo empezar el flare', 'Когда начинать flare'),
              ],
              answer: 1,
              why: l(
                "This 2,500 ft is the canopy plan for today's wind. The cutaway decision altitude is also 2,500 ft, but it's a different decision, for emergencies.",
                'Estos 2,500 ft son el plan de vuelo para el viento de hoy. La altura de decisión para liberar también es 2,500 ft, pero es otra decisión, para emergencias.',
                'Эти 2 500 футов — план полёта под сегодняшний ветер. Высота решения об отцепке тоже 2 500 футов, но это другое решение, аварийное.',
              ),
            },
            {
              q: l(
                'Where are you at 900 ft?',
                '¿Dónde estás a 900 ft?',
                'Где ты на 900 футах?',
              ),
              options: [
                l('Still over the holding point', 'Todavía sobre el punto de espera', 'Ещё над точкой ожидания'),
                l('On final, into the wind', 'En final, contra el viento', 'На финале, против ветра'),
                l('Entering the pattern on the downwind leg', 'Entrando al circuito en el tramo con viento en cola', 'Вхожу в схему на участке по ветру'),
              ],
              answer: 2,
              why: l(
                'Hold from 2,000 to 1,000, enter downwind at 900, base at 600, final at 300, flare at about 10 ft.',
                'Espera de 2,000 a 1,000, entra con viento en cola a 900, base a 600, final a 300, flare a unos 10 ft.',
                'Ожидание с 2 000 до 1 000, вход по ветру на 900, базовая на 600, финал на 300, flare примерно на 10 футах.',
              ),
            },
            {
              q: l(
                'How big a turn is allowed between 1,000 and 300 ft?',
                '¿Qué tan grande puede ser un giro entre 1,000 y 300 ft?',
                'Какой разворот допустим между 1 000 и 300 футами?',
              ),
              options: [
                l('Up to 180°', 'Hasta 180°', 'До 180°'),
                l('Up to 90°', 'Hasta 90°', 'До 90°'),
                l('None at all', 'Ninguno', 'Никакой'),
              ],
              answer: 1,
              why: l(
                'Above 1,000 ft up to 180°, from 1,000 to 300 ft up to 90°, below 300 ft up to 45° and flat.',
                'Por encima de 1,000 ft hasta 180°, de 1,000 a 300 ft hasta 90°, por debajo de 300 ft hasta 45° y plano.',
                'Выше 1 000 футов — до 180°, с 1 000 до 300 — до 90°, ниже 300 — до 45° и плоско.',
              ),
            },
            {
              q: l(
                "You're at 200 ft and not over the target. What do you do?",
                'Estás a 200 ft y no estás sobre el blanco. ¿Qué haces?',
                'Ты на 200 футах и не над целью. Что делаешь?',
              ),
              options: [
                l('Turn hard toward the target', 'Giras fuerte hacia el blanco', 'Резко поворачиваешь к цели'),
                l('Land straight ahead with a level wing, even off the target', 'Aterrizas recto con el ala nivelada, aunque sea fuera del blanco', 'Садишься прямо с ровным крылом, даже мимо цели'),
                l('Turn into the wind, whatever it takes', 'Giras contra el viento, como sea', 'Разворачиваешься против ветра любой ценой'),
              ],
              answer: 1,
              why: l(
                'A sharp turn close to the ground makes the canopy dive, and you hit the ground fast. A level wing beats the perfect landing spot.',
                'Un giro brusco cerca del suelo hace picar la vela y golpeas el suelo rápido. Un ala nivelada vale más que el lugar perfecto.',
                'Резкий поворот у земли заставляет купол нырнуть, и ты ударяешься о землю на скорости. Ровное крыло важнее идеального места.',
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- obstacles
    {
      id: 'obstacles',
      title: l('Landing on an obstacle', 'Aterrizar sobre un obstáculo', 'Посадка на препятствие'),
      blocks: [
        {
          type: 'list',
          kind: 'do',
          title: l('Best plan: never get there', 'El mejor plan: no llegar ahí', 'Лучший план: туда не попасть'),
          items: [
            l('<b>See it early</b> and steer away <b>above 1,000 ft</b>.', '<b>Detéctalo temprano</b> y aléjate <b>por encima de 1,000 ft</b>.', '<b>Заметь заранее</b> и уйди <b>выше 1 000 футов</b>.'),
            l('Be over the holding point <b>by 2,000 ft</b>: still time to judge if you reach the landing area.', 'Estar sobre el punto de espera <b>a 2,000 ft</b>: aún hay tiempo para ver si llegas.', 'К <b>2 000 футам</b> будь над точкой ожидания: ещё есть время понять, долетишь ли.'),
            l("Can't make it? <b>Pick a clear field</b> and land there, into the wind.", '¿No llegas? <b>Elige un campo despejado</b> y aterriza ahí, contra el viento.', 'Не долетаешь? <b>Выбери чистое поле</b> и садись туда, против ветра.'),
          ],
        },
        { type: 'p', muted: true, text: l('Still ending up on one? The steps from our instructors and USPA (SIM 4-1):', '¿Aun así vas a caer sobre uno? Los pasos de nuestros instructores y de USPA (SIM 4-1):', 'Всё равно садишься на препятствие? Шаги от наших инструкторов и USPA (SIM 4-1):') },
        {
          type: 'rules',
          items: [
            {
              icon: 'tree',
              title: l('Trees', 'Árboles', 'Деревья'),
              points: [
                l('<b>Half brakes</b>', '<b>Medio freno</b>', '<b>Полутормоза</b>'),
                l('<b>Feet and knees tight</b>, legs not crossed', '<b>Pies y rodillas juntos</b>, piernas sin cruzar', '<b>Ступни и колени плотно</b>, ноги не скрещивать'),
                l('<b>Protect your face</b> with your arms', '<b>Protege la cara</b> con los brazos', '<b>Закрой лицо</b> руками'),
                l('Stuck: <b>stay put, wait for help</b>, don\'t climb down', 'Atrapado: <b>quieto, espera ayuda</b>, no bajes solo', 'Застрял: <b>не двигайся, жди помощи</b>, сам не слезай'),
              ],
            },
            {
              icon: 'water',
              title: l('Water', 'Agua', 'Вода'),
              points: [
                l('<b>Half brakes</b> at about 10 ft', '<b>Medio freno</b> a unos 10 ft', '<b>Полутормоза</b> примерно на 10 футах'),
                l('<b>Deep breath</b>, feet and knees together', '<b>Respira hondo</b>, pies y rodillas juntos', '<b>Глубокий вдох</b>, ступни и колени вместе'),
                l('<b>Stay in the harness</b> until you are in the water', '<b>Quédate en el arnés</b> hasta estar en el agua', '<b>Из системы не выбирайся</b> до касания воды'),
                l('Then <b>get out and swim away</b> from the canopy fast', 'Luego <b>sal y nada lejos</b> de la vela rápido', 'Потом <b>выберись и отплыви</b> от купола быстро'),
              ],
            },
            {
              icon: 'building',
              title: l('Buildings', 'Edificios', 'Здания'),
              points: [
                l('Near a wall: <b>fly along it</b> with a flat turn, not into it', 'Cerca de una pared: <b>vuela a lo largo</b> con un giro plano, no contra ella', 'У стены: <b>лети вдоль неё</b> плоским поворотом, не в неё'),
                l('Going to hit: <b>flare about 10 ft before</b>, then PLF', 'Si vas a golpear: <b>flare unos 10 ft antes</b>, luego PLF', 'Удар неизбежен: <b>flare примерно за 10 футов</b>, потом PLF'),
                l('On a roof: <b>collapse the canopy</b> so the wind can\'t drag you off', 'En un techo: <b>colapsa la vela</b> para que el viento no te arrastre', 'На крыше: <b>погаси купол</b>, чтобы ветер не стащил'),
              ],
            },
            {
              icon: 'power',
              title: l('Power lines', 'Cables eléctricos', 'Линии электропередачи'),
              tone: 'red',
              points: [
                l('<b>Spot them early</b>, steer away', '<b>Detéctalos temprano</b> y aléjate', '<b>Заметь рано</b> и уйди'),
                l("Can't: land <b>parallel</b>, so you touch only one", 'Si no: aterriza <b>paralelo</b> para tocar solo uno', 'Не получается: садись <b>параллельно</b>, чтобы коснуться одного'),
                l('Feet and knees together, <b>turn your head</b>', 'Pies y rodillas juntos, <b>gira la cabeza</b>', 'Ступни и колени вместе, <b>голову отверни</b>'),
                l('Hanging: <b>touch nothing</b>, nobody touches you until the power is off', 'Colgado: <b>no toques nada</b>, nadie te toca hasta cortar la corriente', 'Повис: <b>ничего не трогай</b>, никто не трогает, пока не отключат ток'),
              ],
            },
          ],
        },
        {
          type: 'callout',
          tone: 'red',
          title: l('Everywhere', 'En todos los casos', 'В любом случае'),
          text: l(
            '<b>Never try to save the gear.</b> It gets collected later; you come first.',
            '<b>Nunca intentes salvar el equipo.</b> Lo recogen después; tú vas primero.',
            '<b>Никогда не спасай снаряжение.</b> Его соберут потом; главное — ты.',
          ),
        },
        {
          type: 'quiz',
          questions: [
            {
              q: l(
                'You are about to land in water. What do you do with the harness?',
                'Vas a caer al agua. ¿Qué haces con el arnés?',
                'Ты садишься на воду. Что с подвесной системой?',
              ),
              options: [
                l('Get out of it up high, before the water', 'Salirte en el aire, antes del agua', 'Выбраться ещё в воздухе, до воды'),
                l('Stay in until you are in the water, then get out and swim away', 'Quedarte hasta estar en el agua, luego salir y nadar lejos', 'Оставаться в ней до воды, потом выбраться и отплыть'),
                l('Stay in it and hold on to the canopy', 'Quedarte en él y agarrarte a la vela', 'Оставаться в ней и держаться за купол'),
              ],
              answer: 1,
              why: l(
                'Half brakes at about 10 ft, deep breath, in the harness until you are in the water. Then out, swim away fast, leave the gear.',
                'Medio freno a unos 10 ft, respira hondo, en el arnés hasta estar en el agua. Luego sal, nada rápido lejos y deja el equipo.',
                'Полутормоза примерно на 10 футах, вдох, в системе до воды. Потом выбраться, быстро отплыть, снаряжение бросить.',
              ),
            },
            {
              q: l(
                "You can't avoid power lines. How do you land?",
                'No puedes evitar los cables eléctricos. ¿Cómo aterrizas?',
                'Уйти от проводов не получается. Как садишься?',
              ),
              options: [
                l('Across the lines, to get past them fast', 'Cruzando los cables, para pasarlos rápido', 'Поперёк проводов, чтобы быстрее их проскочить'),
                l('Parallel to the lines, so you touch only one', 'Paralelo a los cables, para tocar solo uno', 'Параллельно проводам, чтобы коснуться только одного'),
                l('Grab a wire to stop', 'Agarrar un cable para frenar', 'Схватиться за провод, чтобы остановиться'),
              ],
              answer: 1,
              why: l(
                "Parallel, feet and knees together, touch nothing. If you hang there, nobody touches you until the power is off.",
                'Paralelo, pies y rodillas juntos, sin tocar nada. Si quedas colgado, nadie te toca hasta que corten la corriente.',
                'Параллельно, ступни и колени вместе, ничего не трогать. Если повис — никто не трогает, пока не отключат ток.',
              ),
            },
            {
              q: l(
                "You're flying toward a wall low down. What's better?",
                'Vas bajo hacia una pared. ¿Qué es mejor?',
                'Ты низко летишь на стену. Что лучше?',
              ),
              options: [
                l('Fly along it with a flat turn', 'Volar a lo largo de ella con un giro plano', 'Лететь вдоль неё плоским поворотом'),
                l('A hard turn away at full speed', 'Un giro fuerte para alejarte a toda velocidad', 'Резкий разворот от неё на полной скорости'),
                l('Fly straight into it with hands up', 'Ir recto contra ella con las manos arriba', 'Лететь прямо в неё с поднятыми руками'),
              ],
              answer: 0,
              why: l(
                'A flat turn along the wall keeps you from hitting it without making the canopy dive. If you do hit, flare about 10 ft before and PLF.',
                'Un giro plano a lo largo de la pared evita el golpe sin hacer picar la vela. Si igual golpeas, flare unos 10 ft antes y PLF.',
                'Плоский поворот вдоль стены уводит от удара, не заставляя купол нырять. Если всё же удар — flare примерно за 10 футов и PLF.',
              ),
            },
            {
              q: l(
                'You landed in a tree. What about your gear?',
                'Caíste en un árbol. ¿Y tu equipo?',
                'Ты сел на дерево. Что со снаряжением?',
              ),
              options: [
                l('Pull the canopy free, then climb down', 'Soltar la vela del árbol y luego bajar', 'Сдёрнуть купол, потом слезть'),
                l('Leave it, stay put and wait for help', 'Dejarlo, quedarte quieto y esperar ayuda', 'Оставить, не двигаться и ждать помощи'),
                l('Cut the lines and jump down', 'Cortar las líneas y saltar', 'Перерезать стропы и спрыгнуть'),
              ],
              answer: 1,
              why: l(
                "Never try to save the gear: it gets collected. In a tree you stay put and don't climb down alone.",
                'Nunca intentes salvar el equipo: lo recogen. En un árbol te quedas quieto y no bajas solo.',
                'Снаряжение не спасаем — его соберут. На дереве остаёшься на месте и сам не слезаешь.',
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- flare
    {
      id: 'flare',
      title: l('The flare', 'El flare', 'Выравнивание (flare)'),
      blocks: [
        {
          type: 'split',
          left: [
            {
              type: 'steps',
              items: [
                {
                  title: l('On final: full flight, legs together', 'En final: vuelo completo, piernas juntas', 'На финале: полная скорость, ноги вместе'),
                  sub: l(
                    '<b>Hands all the way up</b>, canopy flying level, feet and knees together. <b>No turns.</b>',
                    '<b>Manos totalmente arriba</b>, vela volando nivelada, pies y rodillas juntos. <b>Sin giros.</b>',
                    '<b>Руки полностью вверху</b>, купол летит ровно, ступни и колени вместе. <b>Без поворотов.</b>',
                  ),
                },
                {
                  title: l('Start at about 10 ft (3 m)', 'Empieza a unos 10 ft (3 m)', 'Начинаем примерно с 10 футов (3 м)'),
                  sub: l(
                    'Look at the <b>horizon ahead</b>, about 45° down, not at the ground under you. Looking straight down makes the ground rush up and <b>throws your timing off</b>.',
                    'Mira al <b>horizonte delante</b>, unos 45° hacia abajo, no al suelo debajo de ti. Mirar justo abajo hace que el suelo se te venga encima y <b>arruina el momento</b>.',
                    'Смотрим на <b>горизонт впереди</b>, примерно на 45° вниз, а не на землю под собой. Если смотреть прямо вниз, земля «набегает» и <b>момент выходит неверным</b>.',
                  ),
                },
                {
                  title: l('Pull smoothly, both hands together', 'Tira suave, las dos manos juntas', 'Тянем плавно, обе руки вместе'),
                  sub: l(
                    "<b>Elbows go back</b>, hands close to your body, thumbs slide down past the ribs. <b>No straight arms</b> out to the sides.",
                    '<b>Los codos van hacia atrás</b>, las manos cerca del cuerpo, los pulgares bajan rozando las costillas. <b>No abras los brazos rectos</b> hacia los lados.',
                    '<b>Локти уходят назад</b>, кисти близко к телу, большие пальцы скользят вниз вдоль рёбер. <b>Не разводить прямые руки</b> в стороны.',
                  ),
                },
                {
                  title: l('Finish all the way down and hold', 'Termina abajo del todo y mantén', 'До конца вниз и держим'),
                  sub: l(
                    "Arms <b>fully extended</b> until you're standing. Never let the toggles <b>back up</b>.",
                    'Brazos <b>totalmente extendidos</b> hasta que estés de pie. Nunca dejes <b>subir los batidores</b>.',
                    'Руки <b>полностью вниз</b>, пока не встал. Клеванты <b>не отпускать вверх</b>.',
                  ),
                },
                {
                  title: l('Feet and knees together', 'Pies y rodillas juntos', 'Ступни и колени вместе'),
                  sub: l(
                    'Ready for a <b>parachute landing fall (PLF)</b> if the landing is hard.',
                    'Listo para una <b>caída de aterrizaje (PLF)</b> si el aterrizaje es duro.',
                    'Готов к <b>падению с перекатом (PLF)</b>, если приземление жёсткое.',
                  ),
                },
              ],
            },
            {
              type: 'list',
              title: l('Timing', 'El momento', 'Темп'),
              items: [
                l('What matters: the flare is <b>finished at touchdown</b>.', 'Lo que importa: el flare <b>termina al tocar el suelo</b>.', 'Главное — flare <b>закончился в момент касания</b>.'),
                l('Started late: <b>pull faster</b>.', 'Si empiezas tarde: <b>tira más rápido</b>.', 'Начал поздно — <b>тяни быстрее</b>.'),
                l('Started early: <b>pull slower</b>.', 'Si empiezas temprano: <b>tira más lento</b>.', 'Начал рано — <b>тяни медленнее</b>.'),
              ],
            },
            {
              type: 'callout',
              title: l('About “5, 4, 3, 2, 1”', 'Sobre “5, 4, 3, 2, 1”', 'Про «5, 4, 3, 2, 1»'),
              points: [
                l(
                  'In class we counted it <b>while pulling down</b>.',
                  'En clase lo contábamos <b>mientras tirábamos hacia abajo</b>.',
                  'На занятии мы считали это, <b>пока тянули вниз</b>.',
                ),
                l(
                  'A count to keep the pull <b>smooth</b>, not five full seconds.',
                  'Una cuenta para que el tirón sea <b>suave</b>, no cinco segundos completos.',
                  'Это счёт для <b>плавности</b>, а не пять полных секунд.',
                ),
                l(
                  '<b>5–6 s</b>: how long a student canopy stays at full brakes without stalling.',
                  '<b>5–6 s</b>: lo que una vela de alumno aguanta a frenos completos sin pérdida.',
                  '<b>5–6 с</b> — сколько студенческий купол летит на полных тормозах без сваливания.',
                ),
                l(
                  'Flared too high: <b>stop, hold</b> what you have, fly straight, finish as you sink.',
                  '¿Flare demasiado alto? <b>Para, mantén</b> lo que tienes, vuela recto, termina al bajar.',
                  'Начал слишком высоко: <b>остановись, держи</b> клеванты, лети прямо, дожимай при снижении.',
                ),
              ],
            },
            {
              type: 'callout',
              title: l('What the flare does', 'Qué hace el flare', 'Что делает flare'),
              points: [
                l('On final you come down <b>at an angle</b>.', 'En final bajas <b>en ángulo</b>.', 'На финале ты снижаешься <b>под углом</b>.'),
                l(
                  'The flare makes it a <b>short level glide</b>; the canopy “lifts” you a little.',
                  'El flare lo convierte en un <b>planeo corto y nivelado</b>; la vela te “levanta” un poco.',
                  'Flare превращает это в <b>короткое горизонтальное планирование</b>, купол чуть «приподнимает».',
                ),
                l('You <b>step down softly</b>.', 'Te <b>posas suave</b>.', 'Ты <b>мягко встаёшь</b>.'),
                l(
                  'Common mistake: <b>too fast</b>. A jerky flare spends that energy too early.',
                  'Error común: <b>demasiado rápido</b>. Un flare brusco gasta esa energía demasiado pronto.',
                  'Частая ошибка — <b>слишком быстро</b>: резкий flare тратит энергию раньше времени.',
                ),
                l(
                  '<b>Practise a flare</b> up high right after opening.',
                  '<b>Practica un flare</b> arriba justo después de abrir.',
                  '<b>Пробный flare</b> делаем наверху сразу после раскрытия.',
                ),
              ],
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                clip('flare_cue', l('Where to start the flare', 'Dónde empezar el flare', 'Где начинать flare'), 'Rhythm Skydiving', 'tUFSss3guic', 33),
                clip('flare_land', l('Final, flare, slide, stand', 'Final, flare, deslizar, de pie', 'Финал, flare, скольжение, встал'), 'Rhythm Skydiving', 'tUFSss3guic', 85),
                clip('flare_end', l('Level out just above the ground, slide', 'Nivelar justo sobre el suelo, deslizar', 'Выровняться у самой земли и скользить'), 'Rhythm Skydiving', 'tUFSss3guic', 148),
              ],
            },
          ],
        },
        { type: 'h', id: 'plf', text: l('PLF', 'PLF', 'PLF') },
        {
          type: 'split',
          left: [
            {
              type: 'steps',
              items: [
                {
                  title: l('Feet and knees together, knees soft', 'Pies y rodillas juntos, rodillas un poco flexionadas', 'Ступни и колени вместе, колени чуть согнуты'),
                  sub: l(
                    '<b>Chin to chest</b>, elbows in, hands on the toggles.',
                    '<b>Barbilla al pecho</b>, codos adentro, manos en los batidores.',
                    '<b>Подбородок к груди</b>, локти прижаты, руки на клевантах.',
                  ),
                },
                {
                  title: l('Roll along the side', 'Rueda por el costado', 'Перекат по боку'),
                  sub: l(
                    'Balls of the feet → calf → thigh → hip → side of the back. <b>Five points</b>, one after another.',
                    'Parte delantera de la planta → pantorrilla → muslo → cadera → costado de la espalda. <b>Cinco puntos</b>, uno tras otro.',
                    'Подушечки стоп → икра → бедро → ягодица сбоку → бок спины. <b>Пять точек</b>, одна за другой.',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              title: l('Not onto the stomach, then the back', 'No sobre el estómago y luego la espalda', 'Не на живот, потом на спину'),
              points: [
                l(
                  'Roll along the <b>side</b> of the body, not forward onto the stomach.',
                  'Rueda por el <b>costado</b> del cuerpo, no hacia adelante sobre el estómago.',
                  'Перекат по <b>боку</b>, а не вперёд на живот.',
                ),
                l(
                  'Rolling forward or <b>a hand out</b> to catch the ground: hurt arms, collarbones.',
                  'Rodar hacia adelante o <b>sacar una mano</b> para frenar: brazos y clavículas lastimados.',
                  'Перекат вперёд или <b>рука</b>, чтобы «поймать» землю: травмы рук и ключиц.',
                ),
                l(
                  'Even an imperfect PLF makes injuries <b>less serious</b>.',
                  'Incluso un PLF imperfecto hace las lesiones <b>menos graves</b>.',
                  'Даже неидеальный PLF делает травмы <b>легче</b>.',
                ),
                l('Be ready for one on <b>every landing</b>.', 'Prepárate para uno en <b>cada aterrizaje</b>.', 'Готовься к нему на <b>каждой посадке</b>.'),
              ],
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                clip('plf', l('PLF: feet, calf, thigh, hip, back', 'PLF: pies, pantorrilla, muslo, cadera, espalda', 'PLF: стопы, икра, бедро, ягодица, спина'), 'USPA', 'lCWKPIQuK8Q', 0),
              ],
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'tUFSss3guic', t: 65, label: l('The landing flare', 'El flare de aterrizaje', 'Выравнивание при посадке'), credit: 'Rhythm Skydiving' },
            { yt: 'lCWKPIQuK8Q', t: 0, label: l('Parachute landing fall', 'Caída de aterrizaje en paracaídas (PLF)', 'Приземление с перекатом (PLF)'), credit: 'USPA' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: l(
                'Where do you look when you start the flare?',
                '¿Adónde miras al empezar el flare?',
                'Куда смотришь, когда начинаешь flare?',
              ),
              options: [
                l('Straight down at the ground under you', 'Justo abajo, al suelo debajo de ti', 'Прямо вниз, на землю под собой'),
                l('At the horizon ahead, about 45° down', 'Al horizonte delante, unos 45° hacia abajo', 'На горизонт впереди, примерно на 45° вниз'),
                l('Up at the canopy', 'Arriba, a la vela', 'Вверх, на купол'),
              ],
              answer: 1,
              why: l(
                'Looking straight down makes the ground rush up and the timing goes wrong. Look ahead, about 45° down.',
                'Mirar justo abajo hace que el suelo se te venga encima y el momento sale mal. Mira delante, unos 45° hacia abajo.',
                'Если смотреть прямо вниз, земля «набегает» и момент выходит неверным. Смотри вперёд, примерно на 45° вниз.',
              ),
            },
            {
              q: l(
                'We counted “5, 4, 3, 2, 1” while flaring. What does that mean?',
                'Contábamos “5, 4, 3, 2, 1” al hacer el flare. ¿Qué significa?',
                'Мы считали «5, 4, 3, 2, 1» во время flare. Что это значит?',
              ),
              options: [
                l('The pull must last exactly five seconds', 'El tirón tiene que durar exactamente cinco segundos', 'Движение должно длиться ровно пять секунд'),
                l('Start the flare at 5 ft', 'Empezar el flare a 5 ft', 'Начинать flare на 5 футах'),
                l("It's a count to keep the pull smooth, finished at touchdown", 'Es una cuenta para que el tirón sea suave y termine al tocar el suelo', 'Это счёт для плавности, закончить в момент касания'),
              ],
              answer: 2,
              why: l(
                "It's a count, not five full seconds. What matters is a smooth pull that is finished at touchdown.",
                'Es una cuenta, no cinco segundos completos. Lo que importa es un tirón suave que termine al tocar el suelo.',
                'Это счёт, а не пять полных секунд. Главное — плавно и закончить в момент касания.',
              ),
            },
            {
              q: l(
                'You started the flare too high. What now?',
                'Empezaste el flare demasiado alto. ¿Y ahora?',
                'Начал flare слишком высоко. Что теперь?',
              ),
              options: [
                l('Let the toggles back up and start again', 'Dejar subir los batidores y empezar de nuevo', 'Отпустить клеванты вверх и начать заново'),
                l('Hold what you have, fly straight, finish as you sink', 'Mantener lo que tienes, volar recto y terminar mientras bajas', 'Держать что есть, лететь прямо, дожать при снижении'),
                l('Turn to lose height', 'Girar para perder altura', 'Повернуть, чтобы потерять высоту'),
              ],
              answer: 1,
              why: l(
                'Never let the toggles back up: the canopy would dive. Hold, fly straight, finish near the ground and get ready to PLF.',
                'Nunca dejes subir los batidores: la vela picaría. Mantén, vuela recto, termina cerca del suelo y prepárate para el PLF.',
                'Клеванты вверх не отпускать: купол нырнёт. Держать, лететь прямо, дожать у земли и готовиться к PLF.',
              ),
            },
            {
              q: l(
                'In a PLF you roll along…',
                'En un PLF ruedas por…',
                'При PLF перекат идёт…',
              ),
              options: [
                l('the stomach, then the back', 'el estómago y luego la espalda', 'по животу, потом по спине'),
                l('the side: feet, calf, thigh, hip, back', 'el costado: pies, pantorrilla, muslo, cadera, espalda', 'по боку: стопы, икра, бедро, ягодица, спина'),
                l('your hands first', 'primero las manos', 'сначала на руки'),
              ],
              answer: 1,
              why: l(
                'Along the side, five points one after another. Rolling forward or catching yourself with a hand hurts arms and collarbones.',
                'Por el costado, cinco puntos uno tras otro. Rodar hacia adelante o frenar con la mano lastima brazos y clavículas.',
                'По боку, пять точек одна за другой. Перекат вперёд или упор рукой травмирует руки и ключицы.',
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- test
    {
      id: 'test',
      eyebrow: l('From the ground-school test', 'Del examen del curso en tierra', 'Из теста наземной подготовки'),
      title: l('Landing questions', 'Preguntas de aterrizaje', 'Вопросы про приземление'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Questions 26–32 of our written test. <b>Answer out loud</b>, then open the card.',
            'Preguntas 26–32 de nuestro examen escrito. <b>Responde en voz alta</b> y luego abre la tarjeta.',
            'Вопросы 26–32 нашего письменного теста. <b>Ответь вслух</b>, потом открой карточку.',
          ),
        },
        {
          type: 'faq',
          items: [
            {
              n: '26',
              q: l('Draw the landing pattern with its key altitudes.', 'Dibuja el circuito de aterrizaje con sus alturas clave.', 'Нарисуй схему захода с ключевыми высотами.'),
              a: l(
                '<b>2,500 ft</b>: decide where to go and which side the pattern is on. <b>2,000 → 1,000 ft</b>: hold over the holding point. <b>900 ft</b>: start the downwind leg. <b>600 ft</b>: turn onto base. <b>300 ft</b>: turn onto final, into the wind. <b>About 10 ft</b>: flare. See <a href="#pattern">the landing pattern</a>.',
                '<b>2,500 ft</b>: decide adónde ir y de qué lado va el circuito. <b>2,000 → 1,000 ft</b>: espera sobre el punto de espera. <b>900 ft</b>: empieza el tramo con viento en cola. <b>600 ft</b>: gira a base. <b>300 ft</b>: gira a final, contra el viento. <b>Unos 10 ft</b>: flare. Ver <a href="#pattern">el circuito de aterrizaje</a>.',
                '<b>2 500 футов</b>: решаем, куда лететь и с какой стороны схема. <b>2 000 → 1 000</b>: ожидание над точкой. <b>900 футов</b>: начало участка по ветру. <b>600</b>: поворот на базовую. <b>300</b>: поворот на финал, против ветра. <b>Около 10 футов</b>: flare. См. <a href="#pattern">схему захода</a>.',
              ),
            },
            {
              n: '27',
              q: l(
                'At what altitude do you stop major turns, and which turns are allowed?',
                '¿A qué altura dejas de hacer giros grandes y qué giros se permiten?',
                'На какой высоте прекращаем большие развороты и какие развороты разрешены?',
              ),
              a: l(
                'Our rules: up to <b>180°</b> above 1,000 ft, up to <b>90°</b> from 1,000 to 300 ft, below 300 ft only small flat corrections, up to <b>45°</b>. The handwriting on the sheet says “300 ft” and “45°”.',
                'Nuestras reglas: hasta <b>180°</b> por encima de 1,000 ft, hasta <b>90°</b> de 1,000 a 300 ft, por debajo de 300 ft solo correcciones pequeñas y planas, hasta <b>45°</b>. Lo escrito a mano en la hoja dice “300 ft” y “45°”.',
                'Наши правила: до <b>180°</b> выше 1 000 футов, до <b>90°</b> с 1 000 до 300 футов, ниже 300 — только небольшие плоские поправки, до <b>45°</b>. На листе от руки написано «300 ft» и «45°».',
              ),
            },
            {
              n: '28',
              q: l(
                'Below what altitude are only minor corrections (45° or less) allowed?',
                '¿Por debajo de qué altura solo se permiten correcciones pequeñas (45° o menos)?',
                'Ниже какой высоты разрешены только небольшие поправки (45° и меньше)?',
              ),
              a: l('<b>300 ft.</b>', '<b>300 ft.</b>', '<b>300 футов.</b>'),
            },
            {
              n: '29',
              q: l(
                'When do you start the flare? What if you flare too high?',
                '¿Cuándo empiezas el flare? ¿Y si haces el flare demasiado alto?',
                'Когда начинаем flare? А если начали слишком высоко?',
              ),
              a: l(
                "<b>About 10 ft (3 m)</b> off the ground. Too high: <b>don't let the toggles back up</b>. Hold them where they are, finish the flare near the ground and get ready to PLF.",
                '<b>A unos 10 ft (3 m)</b> del suelo. Demasiado alto: <b>no dejes subir los batidores</b>. Mantenlos donde están, termina el flare cerca del suelo y prepárate para el PLF.',
                '<b>Примерно в 10 футах (3 м)</b> от земли. Слишком высоко: <b>клеванты не отпускать вверх</b>. Держать там, где они есть, дожать у земли и готовиться к PLF.',
              ),
            },
            {
              n: '30',
              q: l('What is a PLF and why do we do it?', '¿Qué es un PLF y por qué lo hacemos?', 'Что такое PLF и зачем он нужен?'),
              a: l(
                'Parachute landing fall: you land on your feet and <b>roll along the side</b> of the body, so the <b>impact spreads out</b> instead of going into your ankles and legs. Feet and knees together, knees slightly bent, chin to chest, elbows in.',
                'Caída de aterrizaje en paracaídas (PLF): aterrizas sobre los pies y <b>ruedas por el costado</b> del cuerpo, así el <b>impacto se reparte</b> en vez de ir a tobillos y piernas. Pies y rodillas juntos, rodillas un poco flexionadas, barbilla al pecho, codos adentro.',
                'Parachute landing fall — приземление с перекатом: касаешься ногами и <b>перекатываешься по боку</b>, <b>удар распределяется</b> по телу, а не уходит в лодыжки и ноги. Ступни и колени вместе, колени чуть согнуты, подбородок к груди, локти прижаты.',
              ),
            },
            {
              n: '31',
              q: l('The 5 points of contact in a PLF?', '¿Los 5 puntos de contacto en un PLF?', '5 точек касания при PLF?'),
              a: l(
                '1 <b>balls of the feet</b> · 2 side of the <b>calf</b> · 3 side of the <b>thigh</b> · 4 side of the <b>buttock</b> (hip) · 5 side of the <b>back</b> (the “push-up” muscle).',
                '1 <b>parte delantera de la planta</b> · 2 costado de la <b>pantorrilla</b> · 3 costado del <b>muslo</b> · 4 costado del <b>glúteo</b> (cadera) · 5 costado de la <b>espalda</b> (el músculo de las “flexiones”).',
                '1 <b>подушечки стоп</b> · 2 боковая часть <b>икры</b> · 3 боковая часть <b>бедра</b> · 4 <b>ягодица</b> сбоку · 5 бок <b>спины</b> (широчайшая мышца).',
              ),
            },
            {
              n: '32',
              q: l('The 4 hazards on the ground when landing?', '¿Los 4 peligros en el suelo al aterrizar?', '4 препятствия на земле при посадке?'),
              a: l(
                '<b>Trees, water, buildings, power lines.</b> See <a href="#obstacles">landing on an obstacle</a>.',
                '<b>Árboles, agua, edificios, cables eléctricos.</b> Ver <a href="#obstacles">aterrizar sobre un obstáculo</a>.',
                '<b>Деревья, вода, здания, линии электропередачи.</b> См. <a href="#obstacles">посадку на препятствие</a>.',
              ),
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: l(
                'Below what altitude are only corrections of 45° or less allowed?',
                '¿Por debajo de qué altura solo se permiten correcciones de 45° o menos?',
                'Ниже какой высоты можно только поправки до 45°?',
              ),
              options: [
                l('1,000 ft', '1,000 ft', '1 000 футов'),
                l('600 ft', '600 ft', '600 футов'),
                l('300 ft', '300 ft', '300 футов'),
              ],
              answer: 2,
              why: l(
                'Question 28: below 300 ft, only small flat corrections, 45° or less.',
                'Pregunta 28: por debajo de 300 ft, solo correcciones pequeñas y planas, de 45° o menos.',
                'Вопрос 28: ниже 300 футов — только небольшие плоские поправки, до 45°.',
              ),
            },
            {
              q: l(
                'Which of these is one of the 4 hazards on the ground?',
                '¿Cuál de estos es uno de los 4 peligros en el suelo?',
                'Что из этого входит в 4 препятствия на земле?',
              ),
              options: [
                l('Tall grass', 'Hierba alta', 'Высокая трава'),
                l('Power lines', 'Cables eléctricos', 'Линии электропередачи'),
                l('Other canopies', 'Otras velas', 'Другие купола'),
              ],
              answer: 1,
              why: l(
                'Question 32: trees, water, buildings, power lines.',
                'Pregunta 32: árboles, agua, edificios, cables eléctricos.',
                'Вопрос 32: деревья, вода, здания, линии электропередачи.',
              ),
            },
          ],
        },
      ],
    },
  ],
};
