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
                  title: l('Pull at 5,500 ft', 'Abrir a 5,500 ft', 'Раскрытие на 5 500 футах'),
                  sub: l(
                    "Right hand to the pilot chute handle (the little “ball” at the bottom of the container, right side). Pull and throw it out.",
                    "Mano derecha al extractor (pilot chute) (la “pelotita” en la parte de abajo del contenedor, lado derecho). Sácalo y lánzalo.",
                    "Правая рука к ручке вытяжного парашюта («шарик» внизу ранца справа). Вытянуть и выбросить.",
                  ),
                },
                {
                  title: l('Count 5 seconds', 'Cuenta 5 segundos', 'Считаем 5 секунд'),
                  sub: l(
                    "“One thousand, two thousand … five thousand”. A canopy needs about 5 s to open fully. Don't judge it earlier.",
                    "“Mil uno, mil dos … mil cinco”. Una vela necesita unos 5 s para abrirse del todo. No la juzgues antes.",
                    "«Тысяча один, тысяча два … тысяча пять». Куполу нужно около 5 с, чтобы раскрыться. Раньше не оцениваем.",
                  ),
                },
                {
                  title: l('Look up and check', 'Mira arriba y revisa', 'Смотрим вверх и проверяем'),
                  sub: l(
                    'There, square, stable, steerable.',
                    'Está, cuadrada, estable, gobernable.',
                    'Есть, квадратный, стабильный, управляемый.',
                  ),
                },
              ],
            },
            {
              type: 'canopyCheck',
              items: [
                {
                  word: l('There', 'Está', 'Есть'),
                  text: l('Something is out over your head.', 'Hay algo fuera sobre tu cabeza.', 'Над головой что-то есть.'),
                },
                {
                  word: l('Square', 'Cuadrada', 'Квадратный'),
                  text: l(
                    'Rectangle, all cells open, slider down.',
                    'Rectángulo, todas las celdas abiertas, slider abajo.',
                    'Прямоугольник, все секции открыты, слайдер опущен.',
                  ),
                },
                {
                  word: l('Stable', 'Estable', 'Стабильный'),
                  text: l('Flies straight, not spinning.', 'Vuela recta, no gira.', 'Летит ровно, не вращается.'),
                },
                {
                  word: l('Steerable', 'Gobernable', 'Управляемый'),
                  text: l(
                    'Unstow toggles: turn left, turn right, then a practice flare.',
                    'Suelta los batidores: gira a la izquierda, gira a la derecha, luego un flare de práctica.',
                    'Снять клеванты с фиксации: поворот влево, вправо, потом пробное торможение (flare).',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              tone: 'red',
              title: l('Any “no”?', '¿Algún “no”?', 'Хоть одно «нет»?'),
              text: l(
                'Go to <a href="#ep">Part IV</a>. Decide by the decision altitude, 2,500 ft.',
                'Ve a la <a href="#ep">Parte IV</a>. Decide antes de la altura de decisión, 2,500 ft.',
                'Смотри <a href="#ep">часть IV</a>. Решение — до высоты принятия решения, 2 500 футов.',
              ),
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                clip('deploy', l('Lock on, wave off, reach, throw', 'Lock on, wave-off, alcanzar, lanzar', 'Высотомер, отмашка, дотянуться, выбросить'), 'Skydive Spaceland', 'ufz1HjyYs_0', 146),
                clip('throw', l('Locate, grip, throw, arch, count', 'Ubicar, agarrar, lanzar, arquear, contar', 'Найти, взять, выбросить, прогиб, счёт'), 'APF', 'PTYsjH7DSVA', 124),
                clip('check', l('Canopy check: shape, slider, toggles, practice flares', 'Revisión de la vela: forma, slider, batidores, flares de práctica', 'Проверка купола: форма, слайдер, клеванты, пробные flare'), 'APF', 'PTYsjH7DSVA', 154),
              ],
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'ufz1HjyYs_0', t: 146, label: l('Lock on, wave off, throw', 'Lock on, wave-off, lanzar', 'Высотомер, отмашка, выброс'), credit: 'Skydive Spaceland' },
            { yt: 'PTYsjH7DSVA', t: 124, label: l('Locate, grip, throw, count', 'Ubicar, agarrar, lanzar, contar', 'Найти, взять, выбросить, считать'), credit: 'APF' },
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
                'Ты выбросил вытяжной. Когда оцениваешь купол?',
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
                "Куполу нужно около 5 с, чтобы раскрыться. Считаем «тысяча один … тысяча пять», потом смотрим вверх.",
              ),
            },
            {
              q: l(
                'What does “square” mean in the canopy check?',
                '¿Qué significa “cuadrada” en la revisión de la vela?',
                'Что значит «квадратный» при проверке купола?',
              ),
              options: [
                l('Rectangle, all cells open, slider down', 'Rectángulo, todas las celdas abiertas, slider abajo', 'Прямоугольник, все секции открыты, слайдер опущен'),
                l('It turns left and right', 'Gira a la izquierda y a la derecha', 'Поворачивает влево и вправо'),
                l('Something is out over your head', 'Hay algo fuera sobre tu cabeza', 'Над головой что-то есть'),
              ],
              answer: 0,
              why: l(
                '“There” is something overhead, “steerable” is the turns and the practice flare. “Square” is the shape: all cells open, slider down.',
                '“Está” es que hay algo arriba, “gobernable” son los giros y el flare de práctica. “Cuadrada” es la forma: todas las celdas abiertas, slider abajo.',
                '«Есть» — что-то над головой, «управляемый» — повороты и пробный flare. «Квадратный» — это форма: все секции открыты, слайдер опущен.',
              ),
            },
            {
              q: l(
                'One answer in the check is “no”. By when must you decide?',
                'Una respuesta de la revisión es “no”. ¿Antes de qué altura tienes que decidir?',
                'Один ответ при проверке — «нет». До какой высоты нужно решить?',
              ),
              options: [
                l('By 1,000 ft', 'Antes de 1,000 ft', 'До 1 000 футов'),
                l('By 2,500 ft, the decision altitude', 'Antes de 2,500 ft, la altura de decisión', 'До 2 500 футов, высоты принятия решения'),
                l('By 300 ft', 'Antes de 300 ft', 'До 300 футов'),
              ],
              answer: 1,
              why: l(
                'Any “no” sends you to the emergency procedures in Part IV, and the decision is made by 2,500 ft.',
                'Cualquier “no” te lleva a los procedimientos de emergencia de la Parte IV, y la decisión se toma antes de 2,500 ft.',
                'Любое «нет» — это аварийные действия из части IV, и решение принимается до 2 500 футов.',
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- pattern
    {
      id: 'pattern',
      title: l('Flight plan and landing pattern', 'Plan de vuelo y circuito de aterrizaje', 'План полёта и заход на посадку'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Drawn the way it is on our ground-school test. The final leg always points into the wind, so the whole pattern turns with the wind. Check the windsock before you board; at our dropzone the wind is usually from the north. Altitudes in feet.',
            'Dibujado como en nuestro examen del curso en tierra. El tramo final siempre apunta contra el viento, así que todo el circuito gira con el viento. Mira la manga de viento antes de subir; en nuestra zona de salto el viento suele venir del norte. Alturas en pies.',
            'Нарисовано как в нашем тесте наземной подготовки. Финал всегда против ветра, поэтому вся схема поворачивается вместе с ветром. Смотрим на колдун (ветроуказатель) до посадки в самолёт; на нашей площадке ветер обычно с севера. Высоты в футах.',
          ),
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
                "Can you reach the holding point? Left-hand or right-hand pattern for today's wind? This is a canopy decision, not the 2,500 ft emergency decision altitude.",
                '¿Llegas al punto de espera? ¿Circuito por la izquierda o por la derecha con el viento de hoy? Es una decisión de vuelo con la vela, no la altura de decisión de emergencia de 2,500 ft.',
                'Долетаю ли до точки ожидания? Левая или правая схема при сегодняшнем ветре? Это решение по полёту на куполе, а не аварийная высота принятия решения 2 500 футов.',
              ),
            },
            {
              alt: '2,000',
              value: 2,
              point: [275, 205],
              title: l('Over the holding point', 'Sobre el punto de espera', 'Над точкой ожидания'),
              sub: l(
                "The point near the playground. Ask: can I reach the landing area from here? If not, pick a clear field now. <q-check/>",
                "El punto cerca del parque infantil. Pregúntate: ¿llego a la zona de aterrizaje desde aquí? Si no, elige ahora un campo despejado. <q-check/>",
                "Точка у детской площадки. Вопрос себе: долечу ли отсюда до площадки? Если нет — выбираем чистое поле сейчас. <q-check/>",
              ),
            },
            {
              alt: '2,000→1,000',
              value: 1.5,
              point: [275, 205],
              title: l('Hold there', 'Espera ahí', 'Держимся там'),
              sub: l(
                'Circle or S-turns over the point, whatever the wind. Watch the windsock and the other canopies.',
                'Círculos o eses sobre el punto, sea cual sea el viento. Mira la manga de viento y las otras velas.',
                'Кружим или делаем S-повороты над точкой, какой бы ни был ветер. Смотрим на колдун и другие купола.',
              ),
            },
            {
              alt: '900',
              value: 0.9,
              hot: true,
              point: [250, 200],
              title: l('Enter the pattern: downwind', 'Entra al circuito: viento en cola', 'Вход в схему: по ветру'),
              sub: l(
                'Wind at your back, flying alongside the landing area.',
                'Viento a tu espalda, volando paralelo a la zona de aterrizaje.',
                'Ветер в спину, летим вдоль площадки.',
              ),
            },
            {
              alt: '600',
              value: 0.6,
              hot: true,
              point: [60, 200],
              title: l('Turn 90° onto base', 'Gira 90° a base', 'Поворот 90° на базовую'),
              sub: l('Crosswind leg.', 'Tramo con viento cruzado.', 'Поперёк ветра.'),
            },
            {
              alt: '300',
              value: 0.3,
              hot: true,
              point: [60, 70],
              title: l('Turn 90° onto final', 'Gira 90° a final', 'Поворот 90° на финал'),
              sub: l(
                'Into the wind, toward the target. From here only small flat corrections (≤ 45°).',
                'Contra el viento, hacia el blanco. Desde aquí solo correcciones pequeñas y planas (≤ 45°).',
                'Против ветра, на цель. Дальше только небольшие плоские поправки (≤ 45°).',
              ),
            },
            {
              alt: '10 ft',
              value: 0.01,
              hot: true,
              point: [188, 70],
              title: l('Flare', 'Flare', 'Flare'),
              sub: l(
                'About 3 m off the ground. Smooth, both hands, finished at touchdown, then hold it.',
                'A unos 3 m del suelo. Suave, con las dos manos, terminado al tocar el suelo, y mantenlo.',
                'Примерно 3 м над землёй. Плавно, обеими руками, закончить в момент касания и держать.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          title: l('Two different 2,500 ft', 'Dos 2,500 ft distintos', 'Две разные отметки 2 500 футов'),
          text: l(
            'Under a good canopy, 2,500 ft is where you plan the landing: holding point, left or right pattern. In an emergency, 2,500 ft is the decision altitude: by then you have decided to cut away or not. Same number, different jobs.',
            'Con una vela buena, a 2,500 ft planeas el aterrizaje: punto de espera, circuito por la izquierda o por la derecha. En una emergencia, 2,500 ft es la altura de decisión: para entonces ya decidiste si liberas o no. Mismo número, tareas distintas.',
            'Под хорошим куполом на 2 500 футах планируем посадку: точка ожидания, левая или правая схема. В аварийной ситуации 2 500 футов — высота принятия решения: к ней уже решено, отцепляться или нет. Цифра одна, задачи разные.',
          ),
        },
        {
          type: 'clips',
          items: [
            clip('holding', l('Holding area, explained on a real dropzone', 'La zona de espera, explicada en una zona de salto real', 'Зона ожидания на настоящей площадке'), 'Skydive Spaceland', 'puD56VJ8loA', 84),
            clip('pattern', l('Flying the pattern: downwind, base, final', 'Volar el circuito: viento en cola, base, final', 'Схема захода: по ветру, базовая, финал'), 'Skydive Spaceland', 'puD56VJ8loA', 110),
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'puD56VJ8loA', t: 84, label: l('Landing patterns 101', 'Circuitos de aterrizaje 101', 'Схемы захода: основы'), credit: 'Skydive Spaceland' },
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
              text: l('Flat turns only, and only to avoid something.', 'Solo giros planos, y solo para esquivar algo.', 'Только плоско и только чтобы уйти от препятствия.'),
            },
          ],
        },
        {
          type: 'callout',
          text: l(
            'A big turn low is the classic way canopy pilots get hurt: the canopy dives and loses height fast.',
            'Un giro grande a baja altura es la forma clásica en que los pilotos de vela se lastiman: la vela pica y pierde altura rápido.',
            'Крутой разворот низко — классическая причина травм: купол ныряет и быстро теряет высоту.',
          ),
        },
        {
          type: 'h',
          id: 'lowturn',
          text: l('What a “low turn” is, and why it hurts', 'Qué es un “giro bajo” y por qué hace daño', 'Что такое «низкий разворот» и почему он опасен'),
        },
        {
          type: 'lowturn',
          text: l(
            "In plain words: people turned too sharply at the very end, close to the ground, and the canopy dove. When you pull one toggle, the canopy doesn't just turn: it tilts, dives and speeds up, and you swing out under it. Up high that's fine, it levels out again. Close to the ground it hasn't finished diving when you get there, so you hit the ground fast, often at an angle, with no flare left. That's a <b>low turn</b>.",
            'En pocas palabras: la gente giró demasiado fuerte justo al final, cerca del suelo, y la vela picó. Cuando tiras de un batidor, la vela no solo gira: se inclina, pica y acelera, y tú te balanceas hacia afuera debajo de ella. Arriba no pasa nada, vuelve a nivelarse. Cerca del suelo todavía no terminó de picar cuando llegas, así que golpeas el suelo rápido, a menudo de lado, sin flare que te quede. Eso es un <b>giro bajo</b>.',
            'Проще говоря: люди слишком резко поворачивали в самом конце, у земли, и купол нырял. Когда тянешь одну клеванту, купол не просто поворачивает: он кренится, ныряет и разгоняется, а тебя выносит в сторону под ним. Высоко это не страшно, купол снова выравнивается. У земли он не успевает выйти из нырка, и ты бьёшься о землю на скорости, часто под углом, без flare. Это и есть <b>низкий разворот</b>.',
          ),
          points: [
            l(
              'Below 300 ft: no turns over about 45°, and only flat ones.',
              'Por debajo de 300 ft: ningún giro de más de unos 45°, y solo planos.',
              'Ниже 300 футов: не больше примерно 45° и только плоско.',
            ),
            l(
              'Wrong spot low? Land straight, even downwind or off the target. A level wing beats the perfect landing spot (USPA SIM 4-1).',
              '¿Mal lugar estando bajo? Aterriza recto, aunque sea con viento en cola o fuera del blanco. Un ala nivelada vale más que el lugar perfecto (USPA SIM 4-1).',
              'Не туда летишь низко? Садись прямо, даже по ветру или мимо цели. Ровное крыло важнее идеального места (USPA SIM 4-1).',
            ),
            l(
              'Something in the way below 300 ft: half brakes and go into it (bush, fence) rather than turn hard.',
              'Algo en el camino por debajo de 300 ft: medio freno y entra en ello (arbusto, cerca) en vez de girar fuerte.',
              'Препятствие ниже 300 футов: половина тормозов и в него (куст, забор), а не резкий поворот.',
            ),
            l(
              'If you need to turn low: a flat turn, pull one toggle a little while holding the other partly down, so the canopy turns without diving.',
              'Si tienes que girar bajo: un giro plano, tira un poco de un batidor mientras mantienes el otro parcialmente abajo, así la vela gira sin picar.',
              'Если нужно повернуть низко: плоский поворот, одну клеванту чуть тянешь, другую держишь частично внизу, тогда купол поворачивает, не ныряя.',
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
                'Эти 2 500 футов — план полёта под сегодняшний ветер. Высота решения об отцепке тоже 2 500, но это другое решение, аварийное.',
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
                l('Entering the pattern on the downwind leg', 'Entrando al circuito en el tramo con viento en cola', 'Вход в схему, участок по ветру'),
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
                'Какой разворот можно между 1 000 и 300 футами?',
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
                'Estás a 200 ft y no sobre el blanco. ¿Qué haces?',
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
                'Резкий поворот у земли заставляет купол нырнуть, и удар о землю на скорости. Ровное крыло важнее идеального места.',
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
          type: 'p',
          text: l(
            "Best plan: see it early and steer away above 1,000 ft. That is why we are over the holding point by 2,000 ft: there is still time to see if we can reach the landing area, and to pick a clear field if not. If you still end up on one, these are the steps from our instructors and USPA (SIM 4-1).",
            'Mejor plan: verlo temprano y alejarte por encima de 1,000 ft. Por eso estamos sobre el punto de espera a 2,000 ft: todavía hay tiempo para ver si llegamos a la zona de aterrizaje y, si no, elegir un campo despejado. Si aun así caes sobre uno, estos son los pasos de nuestros instructores y de USPA (SIM 4-1).',
            'Лучший план: заметить заранее и уйти от него выше 1 000 футов. Поэтому к 2 000 футов мы уже над точкой ожидания: есть время понять, долетим ли до площадки, а если нет — выбрать чистое поле. Если всё же садишься на препятствие, вот шаги от наших инструкторов и USPA (SIM 4-1).',
          ),
        },
        {
          type: 'rules',
          items: [
            {
              title: l('Trees', 'Árboles', 'Деревья'),
              text: l(
                'Half brakes, feet and knees tight together, legs not crossed, protect your face with your arms. Stuck up there: stay put and wait for help, don\'t climb down alone.',
                'Medio freno, pies y rodillas bien juntos, piernas sin cruzar, protege la cara con los brazos. Si quedas atrapado arriba: no te muevas y espera ayuda, no bajes solo.',
                'Половина тормозов, ступни и колени плотно, ноги не скрещивать, лицо закрыть руками. Застрял: оставайся на месте и жди помощи, сам не слезай.',
              ),
            },
            {
              title: l('Water', 'Agua', 'Вода'),
              text: l(
                'Half brakes at about 10 ft above the water, take a deep breath before you go in, feet and knees together as for a PLF. Stay in the harness until you are in the water, then get out of it and swim away from the canopy fast. Leave the gear.',
                'Medio freno a unos 10 ft sobre el agua, respira hondo antes de entrar, pies y rodillas juntos como para un PLF. Quédate en el arnés hasta estar en el agua, luego sal de él y nada rápido lejos de la vela. Deja el equipo.',
                'Половина тормозов примерно в 10 футах над водой, глубокий вдох перед входом, ступни и колени вместе, как для PLF. Из системы не выбираться до касания воды, потом вылезти и быстро отплыть от купола. Снаряжение бросить.',
              ),
            },
            {
              title: l('Buildings', 'Edificios', 'Здания'),
              text: l(
                'Flare about 10 ft before you hit, then PLF. Near a wall, fly along it with a flat turn rather than into it. On a roof, collapse the canopy so the wind can\'t drag you off the edge.',
                'Haz el flare unos 10 ft antes de golpear, luego PLF. Cerca de una pared, vuela a lo largo de ella con un giro plano en vez de ir contra ella. En un techo, colapsa la vela para que el viento no te arrastre por el borde.',
                'Flare примерно за 10 футов до удара, потом PLF. Рядом со стеной лети вдоль неё плоским поворотом, а не в неё. На крыше погаси купол, чтобы ветер не стащил тебя с края.',
              ),
            },
            {
              title: l('Power lines', 'Cables eléctricos', 'Линии электропередачи'),
              tone: 'red',
              text: l(
                "Spot them early and steer away. If you can't: land parallel to the lines so you touch only one, feet and knees together, turn your head. Don't touch anything. If you hang there, nobody touches you until the power is off: wait for help.",
                'Detéctalos temprano y aléjate. Si no puedes: aterriza paralelo a los cables para tocar solo uno, pies y rodillas juntos, gira la cabeza. No toques nada. Si quedas colgado, nadie te toca hasta que corten la corriente: espera ayuda.',
                'Заметить рано и уйти. Если нельзя: садиться параллельно проводам, чтобы коснуться только одного, ступни и колени вместе, голову отвернуть. Ничего не трогать. Если повис — никто тебя не трогает, пока не отключат ток: жди помощи.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'red',
          title: l('Everywhere', 'En todos los casos', 'Везде'),
          text: l(
            'Never try to save the gear. It gets collected later; you come first.',
            'Nunca intentes salvar el equipo. Lo recogen después; tú vas primero.',
            'Никогда не пытайся спасти снаряжение. Его соберут потом; главное — ты.',
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
                l('Get out of it up high, before the water', 'Salir arriba, antes del agua', 'Выбраться ещё в воздухе, до воды'),
                l('Stay in until you are in the water, then get out and swim away', 'Quedarte hasta estar en el agua, luego salir y nadar lejos', 'Оставаться в ней до воды, потом выбраться и отплыть'),
                l('Stay in it and hold on to the canopy', 'Quedarte en él y agarrarte a la vela', 'Оставаться в ней и держаться за купол'),
              ],
              answer: 1,
              why: l(
                'Half brakes at about 10 ft, deep breath, in the harness until you are in the water. Then out, swim away fast, leave the gear.',
                'Medio freno a unos 10 ft, respira hondo, en el arnés hasta estar en el agua. Luego sal, nada rápido lejos y deja el equipo.',
                'Половина тормозов на 10 футах, вдох, в системе до воды. Потом выбраться, быстро отплыть, снаряжение бросить.',
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
                l('Grab a wire to stop', 'Agarrando un cable para frenar', 'Схватиться за провод, чтобы остановиться'),
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
                'Vas hacia una pared estando bajo. ¿Qué es mejor?',
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
                    'Hands all the way up, canopy flying level, feet and knees together. No turns.',
                    'Manos totalmente arriba, vela volando nivelada, pies y rodillas juntos. Sin giros.',
                    'Руки полностью вверху, купол летит ровно, ступни и колени вместе. Без поворотов.',
                  ),
                },
                {
                  title: l('Start at about 10 ft (3 m)', 'Empieza a unos 10 ft (3 m)', 'Начинаем примерно с 10 футов (3 м)'),
                  sub: l(
                    'Look at the horizon ahead, about 45° down, not at the ground under you. Looking straight down makes the ground rush up at you and throws your timing off.',
                    'Mira al horizonte delante, unos 45° hacia abajo, no al suelo debajo de ti. Mirar justo abajo hace que el suelo se te venga encima y te arruina el momento.',
                    'Смотрим на горизонт впереди, примерно на 45° вниз, а не на землю под собой. Если смотреть прямо вниз, земля «набегает» и момент выходит неверным.',
                  ),
                },
                {
                  title: l('Pull smoothly, both hands together', 'Tira suave, las dos manos juntas', 'Тянем плавно, обе руки вместе'),
                  sub: l(
                    "Elbows go back, hands stay close to your body, thumbs slide down past the ribs. Don't swing straight arms out to the sides. What matters is that the flare is finished at touchdown: start late, pull faster; start early, pull slower.",
                    'Los codos van hacia atrás, las manos cerca del cuerpo, los pulgares bajan rozando las costillas. No abras los brazos rectos hacia los lados. Lo que importa es que el flare termine al tocar el suelo: si empiezas tarde, tira más rápido; si empiezas temprano, tira más lento.',
                    'Локти уходят назад, кисти близко к телу, большие пальцы скользят вниз вдоль рёбер. Не разводить прямые руки в стороны. Главное — чтобы flare закончился в момент касания: начал поздно — тяни быстрее, рано — медленнее.',
                  ),
                },
                {
                  title: l('Finish all the way down and hold', 'Termina abajo del todo y mantén', 'До конца вниз и держим'),
                  sub: l(
                    "Arms fully extended until you're standing. Never let the toggles back up.",
                    'Brazos totalmente extendidos hasta que estés de pie. Nunca dejes subir los batidores.',
                    'Руки полностью вниз, пока не встал. Клеванты не отпускать вверх.',
                  ),
                },
                {
                  title: l('Feet and knees together', 'Pies y rodillas juntos', 'Ступни и колени вместе'),
                  sub: l(
                    'Ready for a parachute landing fall (PLF) if the landing is hard.',
                    'Listo para una caída de aterrizaje (PLF) si el aterrizaje es duro.',
                    'Готов к падению с перекатом (PLF), если приземление жёсткое.',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              title: l('About “5, 4, 3, 2, 1”', 'Sobre “5, 4, 3, 2, 1”', 'Про «5, 4, 3, 2, 1»'),
              text: l(
                "In class we counted “5, 4, 3, 2, 1” while pulling down. That's a count to keep the pull smooth, not five full seconds. The 5–6 seconds people mention is how long a student canopy can stay at full brakes without stalling. Flared too high: stop, hold what you have, fly straight, finish as you sink.",
                'En clase contábamos “5, 4, 3, 2, 1” mientras tirábamos hacia abajo. Es una cuenta para que el tirón sea suave, no cinco segundos completos. Los 5–6 segundos que se mencionan son lo que una vela de alumno aguanta a frenos completos sin entrar en pérdida. ¿Flare demasiado alto? Para, mantén lo que tienes, vuela recto y termina mientras bajas.',
                'На занятии мы считали «5, 4, 3, 2, 1», пока тянули вниз. Это счёт для плавности, а не пять полных секунд. 5–6 секунд — это сколько студенческий купол может держать полные тормоза без сваливания. Начал слишком высоко: остановись, держи что есть, лети прямо и дожимай, когда снижаешься.',
              ),
            },
            {
              type: 'callout',
              text: l(
                'What the flare does: on final you are coming down at an angle; the flare turns that into a short level glide, the canopy “lifts” you a little, and you step down softly. Too fast is the common mistake: a quick, jerky flare spends that energy too early. Practise a flare up high right after opening.',
                'Qué hace el flare: en final bajas en ángulo; el flare lo convierte en un planeo corto y nivelado, la vela te “levanta” un poco y te posas suave. Demasiado rápido es el error común: un flare rápido y brusco gasta esa energía demasiado pronto. Practica un flare arriba justo después de abrir.',
                'Что делает flare: на финале ты снижаешься под углом; flare превращает это в короткое ровное скольжение, купол тебя чуть «приподнимает», и ты мягко встаёшь. Частая ошибка — слишком быстро: резкий flare тратит эту энергию раньше времени. Пробный flare делаем наверху сразу после раскрытия.',
              ),
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
                  title: l('Feet and knees together, knees soft', 'Pies y rodillas juntos, rodillas flexibles', 'Ступни и колени вместе, колени мягкие'),
                  sub: l(
                    'Chin to chest, elbows in, hands on the toggles.',
                    'Barbilla al pecho, codos adentro, manos en los batidores.',
                    'Подбородок к груди, локти прижаты, руки на клевантах.',
                  ),
                },
                {
                  title: l('Roll along the side', 'Rueda por el costado', 'Перекат по боку'),
                  sub: l(
                    'Balls of the feet → calf → thigh → hip → side of the back. Five points, one after another.',
                    'Planta de los pies → pantorrilla → muslo → cadera → costado de la espalda. Cinco puntos, uno tras otro.',
                    'Подушечки стоп → икра → бедро → ягодица сбоку → бок спины. Пять точек, одна за другой.',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              text: l(
                'Not onto the stomach, then the back. The PLF roll goes along the <b>side</b> of the body, not forward onto the stomach: rolling forward, or putting a hand out to catch the ground, is how arms and collarbones get hurt. Even an imperfect PLF makes injuries less serious, so be ready for one on every landing.',
                'No sobre el estómago y luego la espalda. El PLF rueda por el <b>costado</b> del cuerpo, no hacia adelante sobre el estómago: rodar hacia adelante, o sacar una mano para frenar contra el suelo, es como se lastiman brazos y clavículas. Incluso un PLF imperfecto hace las lesiones menos graves, así que prepárate para uno en cada aterrizaje.',
                'Не на живот, потом на спину. PLF — это перекат по <b>боку</b>, а не вперёд на живот: при перекате вперёд или если выставить руку, чтобы «поймать» землю, травмируют руки и ключицы. Даже неидеальный PLF делает травмы легче, так что готовься к нему на каждой посадке.',
              ),
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
                l('the stomach, then the back', 'el estómago y luego la espalda', 'на живот, потом на спину'),
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
            'Questions 26–32 of our written test. Answer out loud, then open the card.',
            'Preguntas 26–32 de nuestro examen escrito. Responde en voz alta y luego abre la tarjeta.',
            'Вопросы 26–32 нашего письменного теста. Ответь вслух, потом открой карточку.',
          ),
        },
        {
          type: 'faq',
          items: [
            {
              n: '26',
              q: l('Draw the landing pattern with its key altitudes.', 'Dibuja el circuito de aterrizaje con sus alturas clave.', 'Нарисуй схему захода с ключевыми высотами.'),
              a: l(
                '2,500 ft: decide where to go and which side the pattern is on. 2,000 → 1,000 ft: hold over the holding point. 900 ft: start the downwind leg. 600 ft: turn onto base. 300 ft: turn onto final, into the wind. About 10 ft: flare. See <a href="#pattern">the landing pattern</a>.',
                '2,500 ft: decide adónde ir y de qué lado va el circuito. 2,000 → 1,000 ft: espera sobre el punto de espera. 900 ft: empieza el tramo con viento en cola. 600 ft: gira a base. 300 ft: gira a final, contra el viento. Unos 10 ft: flare. Ver <a href="#pattern">el circuito de aterrizaje</a>.',
                '2 500 футов: решаем, куда лететь и с какой стороны схема. 2 000 → 1 000: ожидание над точкой. 900 футов: начало участка по ветру. 600: поворот на базовую. 300: поворот на финал, против ветра. Около 10 футов: flare. См. <a href="#pattern">схему захода</a>.',
              ),
            },
            {
              n: '27',
              q: l(
                'At what altitude do you stop major turns, and which turns are allowed?',
                '¿A qué altura dejas de hacer giros grandes y qué giros se permiten?',
                'На какой высоте прекращаем большие развороты и какие развороты можно?',
              ),
              a: l(
                'Our rules: up to 180° above 1,000 ft, up to 90° from 1,000 to 300 ft, below 300 ft only small flat corrections, up to 45°. The handwriting on the sheet says “300 ft” and “45°”.',
                'Nuestras reglas: hasta 180° por encima de 1,000 ft, hasta 90° de 1,000 a 300 ft, por debajo de 300 ft solo correcciones pequeñas y planas, hasta 45°. Lo escrito a mano en la hoja dice “300 ft” y “45°”.',
                'Наши правила: до 180° выше 1 000 футов, до 90° с 1 000 до 300 футов, ниже 300 — только небольшие плоские поправки, до 45°. На листе от руки написано «300 ft» и «45°».',
              ),
            },
            {
              n: '28',
              q: l(
                'Below what altitude are only minor corrections (45° or less) allowed?',
                '¿Por debajo de qué altura solo se permiten correcciones pequeñas (45° o menos)?',
                'Ниже какой высоты разрешены только небольшие поправки (45° и меньше)?',
              ),
              a: l('300 ft.', '300 ft.', '300 футов.'),
            },
            {
              n: '29',
              q: l(
                'When do you start the flare? What if you flare too high?',
                '¿Cuándo empiezas el flare? ¿Y si haces el flare demasiado alto?',
                'Когда начинаем flare? А если начали слишком высоко?',
              ),
              a: l(
                "About 10 ft (3 m) off the ground. Too high: don't let the toggles back up. Hold them where they are, finish the flare near the ground and get ready to PLF.",
                'A unos 10 ft (3 m) del suelo. Demasiado alto: no dejes subir los batidores. Mantenlos donde están, termina el flare cerca del suelo y prepárate para el PLF.',
                'Примерно в 10 футах (3 м) от земли. Слишком высоко: клеванты не отпускать вверх. Держать там, где они есть, дожать у земли и готовиться к PLF.',
              ),
            },
            {
              n: '30',
              q: l('What is a PLF and why do we do it?', '¿Qué es un PLF y por qué lo hacemos?', 'Что такое PLF и зачем он нужен?'),
              a: l(
                'Parachute landing fall: you land on your feet and roll along the side of the body, so the impact spreads out instead of going into your ankles and legs. Feet and knees together, knees slightly bent, chin to chest, elbows in.',
                'Caída de aterrizaje en paracaídas (PLF): aterrizas sobre los pies y ruedas por el costado del cuerpo, así el impacto se reparte en vez de ir a tobillos y piernas. Pies y rodillas juntos, rodillas un poco flexionadas, barbilla al pecho, codos adentro.',
                'Parachute landing fall — приземление с перекатом: касаешься ногами и перекатываешься по боку, удар распределяется по телу, а не уходит в лодыжки и ноги. Ступни и колени вместе, колени чуть согнуты, подбородок к груди, локти прижаты.',
              ),
            },
            {
              n: '31',
              q: l('The 5 points of contact in a PLF?', '¿Los 5 puntos de contacto en un PLF?', '5 точек касания при PLF?'),
              a: l(
                '1 balls of the feet · 2 side of the calf · 3 side of the thigh · 4 side of the buttock (hip) · 5 side of the back (the “push-up” muscle).',
                '1 planta de los pies · 2 costado de la pantorrilla · 3 costado del muslo · 4 costado del glúteo (cadera) · 5 costado de la espalda (el músculo de las “flexiones”).',
                '1 подушечки стоп · 2 боковая часть икры · 3 боковая часть бедра · 4 ягодица сбоку · 5 бок спины (широчайшая мышца).',
              ),
            },
            {
              n: '32',
              q: l('The 4 hazards on the ground when landing?', '¿Los 4 peligros en el suelo al aterrizar?', '4 препятствия на земле при посадке?'),
              a: l(
                'Trees, water, buildings, power lines. See <a href="#obstacles">landing on an obstacle</a>.',
                'Árboles, agua, edificios, cables eléctricos. Ver <a href="#obstacles">aterrizar sobre un obstáculo</a>.',
                'Деревья, вода, здания, линии электропередачи. См. <a href="#obstacles">посадку на препятствие</a>.',
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
                l('Tall grass', 'Pasto alto', 'Высокая трава'),
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
