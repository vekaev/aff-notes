import type { Clip, L, Part } from './types';

// Part III: from the pull at 5,500 ft to standing on the ground.
const l = (en: string, es: string, ru: string, uk: string): L => ({ en, es, uk, ru });

const clip = (src: string, caption: L, credit: string, yt: string, t: number): Clip => ({ src, caption, credit, yt, t });

export const part3: Part = {
  id: 'part3',
  roman: 'III',
  range: l('5,500 ft → ground', '5,500 ft → suelo', '5 500 футов → земля', '5 500 футів → земля'),
  title: l('Under canopy', 'Bajo vela', 'Под куполом', 'Під куполом'),
  chapters: [
    // ---------------------------------------------------------------- deploy
    {
      id: 'deploy',
      title: l('Pull, count, check', 'Abrir, contar, revisar', 'Раскрытие, счёт, проверка', 'Розкриття, рахунок, перевірка'),
      blocks: [
        {
          type: 'split',
          left: [
            {
              type: 'steps',
              items: [
                {
                  title: l('Pull at 5,500 ft', 'Abre a 5,500 ft', 'Раскрытие на 5 500 футах', 'Розкриття на 5 500 футах'),
                  sub: l(
                    "Right hand to the <b>pilot chute handle</b> (the little “ball” at the bottom of the container, right side), <b>left hand overhead</b> for balance. Pull it out and <b>throw it</b> to the side at arm's length, then back to the arch while you count. Can't find it or it won't come out? <b>Two tries or 5 s</b>, then <a href=\"#mal\">Part IV</a>.",
                    "Mano derecha a la <b>manija del extractor</b> (la “pelotita” en la parte de abajo del contenedor, lado derecho), <b>mano izquierda arriba</b> para equilibrarte. Sácalo y <b>lánzalo</b> hacia el costado con el brazo estirado, y vuelve al arco mientras cuentas. ¿No la encuentras o no sale? <b>Dos intentos o 5 s</b>, y luego la <a href=\"#mal\">Parte IV</a>.",
                    "Правая рука — на <b>ручку вытяжного парашюта</b> («шарик» внизу ранца справа), <b>левая рука над головой</b> для равновесия. Вытащить и <b>выбросить</b> в сторону на вытянутой руке, потом снова прогиб и счёт. Не нашёл ручку или она не выходит? <b>Две попытки или 5 с</b>, потом <a href=\"#mal\">часть IV</a>.",
                    "Права рука — на <b>ручку витяжного парашута</b> («кулька» внизу ранця справа), <b>ліва рука над головою</b> для рівноваги. Витягни його і <b>викинь</b> убік на витягнутій руці, потім знову прогин і рахунок. Не знайшов ручку або вона не виходить? <b>Дві спроби або 5 с</b>, потім <a href=\"#mal\">частина IV</a>.",
                  ),
                },
                {
                  title: l('Count to five', 'Cuenta hasta cinco', 'Считаем до пяти', 'Рахуємо до п’яти'),
                  sub: l(
                    "“One thousand, two thousand … five thousand”: the count from our ground course. USPA's AFF syllabus counts to <b>three</b>, then checks for the <b>pilot chute</b> and the <b>canopy</b>. Ask which one your instructors want. <q-check/>",
                    "“Mil uno, mil dos … mil cinco”: la cuenta de nuestro curso en tierra. El programa AFF de USPA cuenta hasta <b>tres</b> y luego busca el <b>extractor</b> y la <b>vela</b>. Pregunta cuál quieren tus instructores. <q-check/>",
                    "«Тысяча один, тысяча два … тысяча пять» — так считали на нашей наземной подготовке. В программе AFF USPA считают до <b>трёх</b>, потом проверяют <b>вытяжной парашют</b> и <b>купол</b>. Спроси, как хотят твои инструкторы. <q-check/>",
                    "«Тисяча один, тисяча два … тисяча п’ять» — так рахували на нашій наземній підготовці. У програмі AFF USPA рахують до <b>трьох</b>, потім перевіряють <b>витяжний парашут</b> і <b>купол</b>. Запитай, як хочуть твої інструктори. <q-check/>",
                  ),
                },
                {
                  title: l('Look up and check', 'Mira arriba y revisa', 'Смотрим вверх и проверяем', 'Дивимося вгору й перевіряємо'),
                  sub: l(
                    '<b>There, square, stable, steerable.</b>',
                    '<b>Está, cuadrada, estable, gobernable.</b>',
                    '<b>Есть, квадратный, стабильный, управляемый.</b>',
                    '<b>Є, квадратний, стабільний, керований.</b>',
                  ),
                },
                {
                  title: l('Then look around', 'Luego mira alrededor', 'Потом осмотрись', 'Потім роззирнися'),
                  sub: l(
                    'Check your <b>altitude</b>, look for <b>other canopies</b>, find the <b>holding point</b>.',
                    'Mira la <b>altura</b>, busca <b>otras velas</b> y encuentra el <b>punto de espera</b>.',
                    'Проверь <b>высоту</b>, найди глазами <b>другие купола</b> и <b>точку ожидания</b>.',
                    'Перевір <b>висоту</b>, знайди очима <b>інші куполи</b> і <b>точку очікування</b>.',
                  ),
                },
              ],
            },
            {
              type: 'canopyCheck',
              items: [
                {
                  word: l('There', 'Está', 'Есть', 'Є'),
                  text: l('Something is out over your head.', 'Hay algo abierto sobre tu cabeza.', 'Над головой что-то есть.', 'Над головою щось є.'),
                },
                {
                  word: l('Square', 'Cuadrada', 'Квадратный', 'Квадратний'),
                  text: l(
                    'Rectangle, <b>all cells open</b>, slider down.',
                    'Rectángulo, <b>todas las celdas abiertas</b>, slider abajo.',
                    'Прямоугольник, <b>все секции наполнены</b>, слайдер опущен.',
                    'Прямокутник, <b>усі секції наповнені</b>, слайдер опущений.',
                  ),
                },
                {
                  word: l('Stable', 'Estable', 'Стабильный', 'Стабільний'),
                  text: l('Flies straight, <b>not spinning</b>.', 'Vuela recta, <b>no gira</b>.', 'Летит ровно, <b>не вращается</b>.', 'Летить рівно, <b>не обертається</b>.'),
                },
                {
                  word: l('Steerable', 'Gobernable', 'Управляемый', 'Керований'),
                  text: l(
                    'Line twists? <b>Kick them out first</b>. Then unstow the toggles: turn left, turn right, then a <b>practice flare</b>.',
                    '¿Vueltas en las líneas? <b>Primero patea hasta deshacerlas</b>. Luego desengancha los batidores: gira a la izquierda, gira a la derecha y luego haz un <b>flare de práctica</b>.',
                    'Закрутка строп? <b>Сначала раскрутись</b>. Потом снять клеванты с фиксации: поворот влево, вправо, потом <b>пробное торможение (flare)</b>.',
                    'Закрутка строп? <b>Спершу розкрутися</b>. Потім зніми клеванти з фіксації: поворот ліворуч, праворуч, потім <b>пробне гальмування (flare)</b>.',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              tone: 'red',
              title: l('Any “no”?', '¿Algún “no”?', 'Хоть одно «нет»?', 'Хоч одне «ні»?'),
              text: l(
                'Try the fixes in <a href="#ep">Part IV</a>. Not fixed: <b>decide and act by 2,500 ft</b>, the decision altitude.',
                'Prueba los arreglos de la <a href="#ep">Parte IV</a>. ¿No se arregla? <b>Decide y actúa antes de 2,500 ft</b>, la altura de decisión.',
                'Попробуй исправить по <a href="#ep">части IV</a>. Не исправилось — <b>реши и действуй до 2 500 футов</b> (высота принятия решения).',
                'Спробуй виправити за <a href="#ep">частиною IV</a>. Не виправилося — <b>виріши й дій до 2 500 футів</b> (висота ухвалення рішення).',
              ),
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                clip('deploy', l('Lock on, wave off, reach, throw (their altimeter, not your pull altitude)', 'Altímetro, wave-off, buscar, lanzar (su altímetro, no tu altura de apertura)', 'Высотомер, отмашка, дотянуться, выбросить (их высотомер, не твоя высота раскрытия)', 'Висотомір, відмашка, дотягнутися, викинути (їхній висотомір, не твоя висота розкриття)'), 'Skydive Spaceland', 'ufz1HjyYs_0', 146),
                clip('throw', l('Locate, grip, throw, arch, count', 'Localizar, agarrar, lanzar, arquear, contar', 'Найти, взять, выбросить, прогиб, счёт', 'Знайти, взяти, викинути, прогин, рахунок'), 'APF', 'PTYsjH7DSVA', 124),
                clip('check', l('Canopy check: shape, slider, toggles, practice flares', 'Revisión de la vela: forma, slider, batidores, flares de práctica', 'Проверка купола: форма, слайдер, клеванты, пробные flare', 'Перевірка купола: форма, слайдер, клеванти, пробні flare'), 'APF', 'PTYsjH7DSVA', 154),
                clip('canopy_check_pov', l('Your view right after opening: slider coming down, then the check: square, stable, steerable', 'Lo que ves justo después de abrir: el slider baja, luego la revisión: cuadrada, estable, gobernable', 'Что ты видишь сразу после раскрытия: слайдер опускается, дальше проверка: квадратный, стабильный, управляемый', 'Що ти бачиш одразу після розкриття: слайдер опускається, далі перевірка: квадратний, стабільний, керований'), 'Strictly Clown Business', 'moBHeP1WNNI', 33),
              ],
            },
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
                'Ти викинув витяжний парашут. Коли оцінювати купол?',
              ),
              options: [
                l('Right away, as soon as you feel the tug', 'Enseguida, en cuanto sientes el tirón', 'Сразу, как только почувствовал рывок', 'Одразу, щойно відчув ривок'),
                l('At the end of your count, then look up', 'Al terminar tu cuenta, luego miras arriba', 'В конце счёта, потом смотришь вверх', 'Наприкінці рахунку, потім дивишся вгору'),
                l('Only once you are down to 2,500 ft', 'Solo cuando bajas a 2,500 ft', 'Только когда снизишься до 2 500 футов', 'Лише коли знизишся до 2 500 футів'),
              ],
              answer: 1,
              why: l(
                "Count first, then look for the pilot chute and the canopy. Our ground course counts to five, USPA's AFF syllabus to three: ask which your instructors want.",
                "Primero cuentas, luego buscas el extractor y la vela. Nuestro curso en tierra cuenta hasta cinco, el programa AFF de USPA hasta tres: pregunta cuál quieren tus instructores.",
                "Сначала счёт, потом проверяешь вытяжной парашют и купол. На нашей наземной подготовке считали до пяти, в программе AFF USPA — до трёх: спроси, как хотят твои инструкторы.",
                "Спочатку рахунок, потім перевіряєш витяжний парашут і купол. На нашій наземній підготовці рахували до п’яти, у програмі AFF USPA — до трьох: запитай, як хочуть твої інструктори.",
              ),
            },
            {
              q: l(
                'What does “square” mean in the canopy check?',
                '¿Qué significa “cuadrada” en la revisión de la vela?',
                'Что значит «квадратный» при проверке купола?',
                'Що означає «квадратний» під час перевірки купола?',
              ),
              options: [
                l('Rectangle, all cells open, slider down', 'Rectángulo, todas las celdas abiertas, slider abajo', 'Прямоугольник, все секции наполнены, слайдер опущен', 'Прямокутник, усі секції наповнені, слайдер опущений'),
                l('It turns left and right', 'Gira a la izquierda y a la derecha', 'Поворачивает влево и вправо', 'Повертає ліворуч і праворуч'),
                l('Something is out over your head', 'Hay algo fuera sobre tu cabeza', 'Над головой что-то есть', 'Над головою щось є'),
              ],
              answer: 0,
              why: l(
                '“There” is something overhead, “steerable” is the turns and the practice flare. “Square” is the shape: all cells open, slider down.',
                '“Está” es que hay algo arriba, “gobernable” son los giros y el flare de práctica. “Cuadrada” es la forma: todas las celdas abiertas, slider abajo.',
                '«Есть» — что-то над головой, «управляемый» — повороты и пробный flare. «Квадратный» — это форма: все секции наполнены, слайдер опущен.',
                '«Є» — щось над головою, «керований» — повороти й пробний flare. «Квадратний» — це форма: усі секції наповнені, слайдер опущений.',
              ),
            },
            {
              q: l(
                'One answer in the check is “no” and the fix doesn’t work. By what altitude must you decide and act?',
                'Una respuesta de la revisión es “no” y el arreglo no funciona. ¿Antes de qué altura tienes que decidir y actuar?',
                'Один ответ при проверке — «нет», и исправить не получается. До какой высоты нужно решить и действовать?',
                'Одна відповідь під час перевірки — «ні», і виправити не виходить. До якої висоти треба вирішити й діяти?',
              ),
              options: [
                l('By 1,000 ft, before the pattern', 'Antes de 1,000 ft, antes del circuito', 'До 1 000 футов, до входа в схему', 'До 1 000 футів, до входу в схему'),
                l('By 2,500 ft, the decision altitude', 'Antes de 2,500 ft, la altura de decisión', 'До 2 500 футов, высоты решения', 'До 2 500 футів, висоти рішення'),
                l('By 300 ft, before final', 'Antes de 300 ft, antes del final', 'До 300 футов, до финала', 'До 300 футів, до фіналу'),
              ],
              answer: 1,
              why: l(
                'Small problems (an end cell closed, the slider up) are often fixed with a canopy-control check (Part IV). Not fixed: decide and act by 2,500 ft (USPA SIM 4-1).',
                'Los problemas pequeños (una celda lateral cerrada, el slider arriba) suelen arreglarse con una prueba de control de la vela (Parte IV). Si no se arregla: decide y actúa antes de 2,500 ft (USPA SIM 4-1).',
                'Мелкие проблемы (закрытая крайняя секция, слайдер вверху) часто исправляются проверкой управления куполом (часть IV). Не исправилось — реши и действуй до 2 500 футов (USPA SIM 4-1).',
                'Дрібні проблеми (закрита крайня секція, слайдер угорі) часто виправляються перевіркою керування куполом (частина IV). Не виправилося — виріши й дій до 2 500 футів (USPA SIM 4-1).',
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- pattern
    {
      id: 'pattern',
      title: l('Flight plan and landing pattern', 'Plan de vuelo y circuito de aterrizaje', 'План полёта и схема захода', 'План польоту і схема заходу'),
      blocks: [
        {
          type: 'list',
          items: [
            l(
              'Drawn as on a typical <b>ground-school test</b>. Altitudes in feet.',
              'Dibujado como en un <b>examen típico del curso en tierra</b>. Alturas en pies.',
              'Нарисовано как в типичном <b>тесте наземной подготовки</b>. Высоты в футах.',
              'Намальовано як у типовому <b>тесті наземної підготовки</b>. Висоти у футах.',
            ),
            l(
              'Final normally points <b>into the wind</b> (or the landing direction the dropzone sets), so the pattern turns with it.',
              'El final normalmente apunta <b>contra el viento</b> (o en la dirección de aterrizaje que fija la zona de salto), así que el circuito gira con él.',
              'Финал обычно <b>против ветра</b> (или по направлению посадки, которое задаёт аэродром), поэтому схема поворачивается вместе с ним.',
              'Фінал зазвичай <b>проти вітру</b> (або за напрямком посадки, який задає аеродром), тому схема повертається разом із ним.',
            ),
            l(
              'The wind changes by dropzone and by day: <b>check the windsock</b> before you board. The map below is drawn with the wind from the right as a <b>right-hand</b> pattern (turns to the right), not to scale.',
              'El viento cambia según la zona de salto y el día: <b>mira la manga de viento</b> antes de subir. El mapa de abajo tiene el viento desde la derecha y un circuito <b>por la derecha</b> (giros a la derecha), y no está a escala.',
              'Ветер зависит от площадки и дня: <b>посмотри на ветроуказатель</b> перед посадкой в самолёт. На карте ниже ветер дует справа, схема <b>правая</b> (повороты вправо), масштаб не соблюдён.',
              'Вітер залежить від майданчика і дня: <b>подивись на вітровказівник</b> перед посадкою в літак. На карті нижче вітер дме справа, схема <b>права</b> (повороти праворуч), масштаб не дотримано.',
            ),
          ],
        },
        {
          type: 'pattern',
          rows: [
            {
              alt: '2,500 ft',
              value: 2.5,
              point: [275, 205],
              title: l('Decide where to go', 'Decide adónde ir', 'Решаем, куда лететь', 'Вирішуємо, куди летіти'),
              sub: l(
                "Can you reach the <b>holding point</b>? Which side is the pattern on today: <b>left-hand</b> (turns to the left) or <b>right-hand</b> (turns to the right)? The side is chosen so final points into the wind and away from obstacles; the dropzone decides. <q-check/> Why now: there is still height to change the plan.",
                '¿Llegas al <b>punto de espera</b>? ¿De qué lado va hoy el circuito: <b>por la izquierda</b> (giros a la izquierda) o <b>por la derecha</b> (giros a la derecha)? El lado se elige para que el final apunte contra el viento y lejos de obstáculos; lo decide la zona de salto. <q-check/> Por qué ahora: todavía hay altura para cambiar el plan.',
                'Долетаю ли до <b>точки ожидания</b>? С какой стороны сегодня схема: <b>левая</b> (повороты влево) или <b>правая</b> (повороты вправо)? Сторону выбирают так, чтобы финал шёл против ветра и в стороне от препятствий; решает аэродром. <q-check/> Почему сейчас: ещё есть высота, чтобы поменять план.',
                'Чи долітаю до <b>точки очікування</b>? З якого боку сьогодні схема: <b>ліва</b> (повороти ліворуч) чи <b>права</b> (повороти праворуч)? Бік обирають так, щоб фінал ішов проти вітру й далі від перешкод; вирішує аеродром. <q-check/> Чому зараз: ще є висота, щоб змінити план.',
              ),
            },
            {
              alt: '2,000 ft',
              value: 2,
              point: [275, 205],
              title: l('Over the holding point', 'Sobre el punto de espera', 'Над точкой ожидания', 'Над точкою очікування'),
              sub: l(
                "The point <b>your instructors showed on the map</b> <q-check/>. Not sure you'll make the landing area? <b>Pick a clear field now</b> (USPA SIM 4-1: by 2,000 ft). Why: there is still time to land somewhere safe.",
                "El punto <b>que tus instructores marcaron en el mapa</b> <q-check/>. ¿No estás seguro de llegar a la zona de aterrizaje? <b>Elige ya un campo despejado</b> (USPA SIM 4-1: antes de 2,000 ft). Por qué: aún hay tiempo para aterrizar en un sitio seguro.",
                "Точка, <b>которую инструкторы показали на карте</b> <q-check/>. Не уверен, что долетишь до зоны приземления? <b>Сразу выбери свободное поле</b> (USPA SIM 4-1: до 2 000 футов). Почему: ещё есть время сесть в безопасном месте.",
                "Точка, <b>яку інструктори показали на карті</b> <q-check/>. Не впевнений, що долетиш до зони приземлення? <b>Одразу обери вільне поле</b> (USPA SIM 4-1: до 2 000 футів). Чому: ще є час сісти в безпечному місці.",
              ),
            },
            {
              alt: '2,000→1,000 ft',
              value: 1.5,
              point: [275, 205],
              title: l('Hold there', 'Espera ahí', 'Ожидание над точкой', 'Очікування над точкою'),
              sub: l(
                '<b>S-turns or figure-eights</b> over the point, each turn <b>180° or less</b> <q-check/>. Watch the <b>windsock</b> and the <b>other canopies</b>. Why: you stay upwind with height to spare, and the traffic stays predictable. At <b>1,000 ft</b> leave the point and fly to the entry.',
                'Haz <b>eses u ochos</b> sobre el punto, cada giro de <b>180° o menos</b> <q-check/>. Mira la <b>manga de viento</b> y las <b>otras velas</b>. Por qué: te quedas a barlovento (viento arriba) con altura de sobra y el tráfico es predecible. A <b>1,000 ft</b> deja el punto y vuela a la entrada.',
                'Летаем <b>«змейкой» или восьмёрками</b> над точкой, каждый разворот <b>не больше 180°</b> <q-check/>. Смотрим на <b>колдун</b> и на <b>другие купола</b>. Почему: ты остаёшься с наветренной стороны с запасом высоты, а движение куполов предсказуемо. На <b>1 000 футов</b> уходи с точки к входу в схему.',
                'Летимо <b>«змійкою» або вісімками</b> над точкою, кожен розворот <b>не більше 180°</b> <q-check/>. Дивимося на <b>колдун</b> і на <b>інші куполи</b>. Чому: ти лишаєшся з навітряного боку із запасом висоти, а рух куполів передбачуваний. На <b>1 000 футів</b> іди з точки до входу в схему.',
              ),
            },
            {
              alt: '900 ft',
              value: 0.9,
              hot: true,
              point: [250, 200],
              title: l('Enter the pattern: downwind', 'Entra al circuito: viento en cola', 'Вход в схему: по ветру', 'Вхід у схему: по вітру'),
              sub: l(
                '<b>Wind at your back</b>, flying alongside the landing area. Why: you can see the target beside you and judge the wind before you turn.',
                '<b>Viento en la espalda</b>, vuelas paralelo a la zona de aterrizaje. Por qué: ves el blanco a tu lado y juzgas el viento antes de girar.',
                '<b>Ветер в спину</b>, летим вдоль зоны приземления. Почему: цель видна сбоку, и ветер можно оценить до поворота.',
                '<b>Вітер у спину</b>, летимо вздовж зони приземлення. Чому: ціль видно збоку, і вітер можна оцінити до повороту.',
              ),
            },
            {
              alt: '600 ft',
              value: 0.6,
              hot: true,
              point: [60, 200],
              title: l('Turn 90° onto base', 'Gira 90° a base', 'Поворот 90° на базовую прямую', 'Поворот на 90° на базову пряму'),
              sub: l(
                '<b>Crosswind</b> leg. Why: room to judge your height and adjust before final.',
                'Tramo con <b>viento cruzado</b>. Por qué: margen para juzgar la altura y corregir antes del final.',
                'Участок <b>поперёк ветра</b>. Почему: есть запас, чтобы оценить высоту и поправиться до финала.',
                'Ділянка <b>поперек вітру</b>. Чому: є запас, щоб оцінити висоту й виправитися до фіналу.',
              ),
            },
            {
              alt: '300 ft',
              value: 0.3,
              hot: true,
              point: [60, 70],
              title: l('Turn 90° onto final', 'Gira 90° a final', 'Поворот 90° на финал', 'Поворот на 90° на фінал'),
              sub: l(
                '<b>Into the wind</b>, toward the target. From here only small flat corrections (<b>≤ 45°</b>). Why: time to fly straight and level before the flare.',
                '<b>Contra el viento</b>, hacia el blanco. Desde aquí solo correcciones pequeñas y planas (<b>≤ 45°</b>). Por qué: tiempo para volar recto y nivelado antes del flare.',
                '<b>Против ветра</b>, на цель. Дальше только небольшие плоские поправки (<b>≤ 45°</b>). Почему: есть время лететь прямо и ровно до flare.',
                '<b>Проти вітру</b>, на ціль. Далі лише невеликі пласкі поправки (<b>≤ 45°</b>). Чому: є час летіти прямо й рівно до flare.',
              ),
            },
            {
              alt: '10 ft',
              value: 0.01,
              hot: true,
              point: [188, 70],
              title: l('Flare', 'Flare', 'Flare', 'Flare'),
              sub: l(
                '<b>About 3 m</b> off the ground. Smooth, both hands, <b>finished at touchdown</b>, then hold it. Why: it turns the descent into a short level glide.',
                '<b>A unos 3 m</b> del suelo. Suave, con las dos manos, que <b>termine al tocar el suelo</b>, y luego mantenlo. Por qué: convierte el descenso en un planeo corto y nivelado.',
                '<b>Примерно 3 м</b> над землёй. Плавно, обеими руками, <b>закончить к моменту касания</b> и держать. Почему: снижение превращается в короткое ровное планирование.',
                '<b>Приблизно 3 м</b> над землею. Плавно, обома руками, <b>закінчити в момент торкання</b> і тримати. Чому: зниження перетворюється на коротке рівне планування.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          title: l('Two different 2,500 ft', 'Dos 2,500 ft distintos', 'Две разные отметки 2 500 футов', 'Дві різні позначки 2 500 футів'),
          points: [
            l(
              '<b>Good canopy</b>: plan the landing. Holding point, left or right pattern.',
              '<b>Vela buena</b>: planeas el aterrizaje. Punto de espera, izquierda o derecha.',
              '<b>Хороший купол</b>: планируем посадку. Точка ожидания, левая или правая схема.',
              '<b>Добрий купол</b>: плануємо посадку. Точка очікування, ліва чи права схема.',
            ),
            l(
              '<b>Emergency</b>: the decision altitude. By now you have <b>acted</b>: fixed it or cut away.',
              '<b>Emergencia</b>: la altura de decisión. Para entonces ya <b>actuaste</b>: lo arreglaste o liberaste.',
              '<b>Аварийная ситуация</b>: высота принятия решения. К этому моменту ты уже <b>действовал</b>: исправил или отцепился.',
              '<b>Аварійна ситуація</b>: висота ухвалення рішення. На цей момент ти вже <b>діяв</b>: виправив або відчепився.',
            ),
            l('Same number, <b>different jobs</b>.', 'Mismo número, <b>tareas distintas</b>.', 'Цифра одна, <b>задачи разные</b>.', 'Цифра та сама, <b>завдання різні</b>.'),
          ],
        },
        {
          type: 'clips',
          items: [
            clip('holding', l('Holding area, explained on a real dropzone', 'La zona de espera, explicada en una zona de salto real', 'Зона ожидания на настоящем аэродроме', 'Зона очікування на справжньому аеродромі'), 'Skydive Spaceland', 'puD56VJ8loA', 84),
            clip('pattern', l('Flying the pattern: downwind, base, final', 'Volar el circuito: viento en cola, base, final', 'Схема захода: по ветру, базовая прямая, финал', 'Схема заходу: по вітру, базова пряма, фінал'), 'Skydive Spaceland', 'puD56VJ8loA', 110),
            clip('pattern_pov', l('From the canopy: downwind, base and final drawn on a real field (north wind at that dropzone)', 'Desde la vela: viento en cola, base y final dibujados sobre un campo real (viento del norte en esa zona de salto)', 'С купола: участки по ветру, базовая и финал нарисованы на настоящем поле (северный ветер на той площадке)', 'З купола: ділянки по вітру, базова й фінал намальовані на справжньому полі (північний вітер на тому майданчику)'), 'Skydive Miami', 'KUUMP_XCBUE', 217),
          ],
        },
        {
          type: 'h',
          id: 'traffic',
          text: l('Traffic: other canopies around you', 'Tráfico: otras velas a tu alrededor', 'Трафик: другие купола рядом', 'Трафік: інші куполи поруч'),
        },
        {
          type: 'list',
          title: l('Rules of the road under canopy (USPA SIM 4-1)', 'Reglas de vuelo bajo vela (USPA SIM 4-1)', 'Правила движения под куполом (USPA SIM 4-1)', 'Правила руху під куполом (USPA SIM 4-1)'),
          items: [
            l(
              'Right after opening: <b>know where the others are</b>. Someone close? <b>Steer away with the rear risers</b>, then do your canopy check.',
              'Justo al abrir: <b>sabe dónde están los demás</b>. ¿Alguien cerca? <b>Apártate con las bandas traseras</b> y luego haz tu revisión de la vela.',
              'Сразу после раскрытия: <b>знай, где остальные</b>. Кто-то близко? <b>Уходи задними свободными концами</b>, потом проверка купола.',
              'Одразу після розкриття: <b>знай, де інші</b>. Хтось близько? <b>Відходь задніми вільними кінцями</b>, потім перевірка купола.',
            ),
            l(
              '<b>Look before you turn</b>, every turn, all the way down.',
              '<b>Mira antes de girar</b>, en cada giro, hasta el suelo.',
              '<b>Смотри, прежде чем повернуть</b>, перед каждым разворотом, до самой земли.',
              '<b>Дивись, перш ніж повернути</b>, перед кожним розворотом, до самої землі.',
            ),
            l(
              'To avoid someone, <b>turn right</b>. Coming at each other head-on? <b>Both turn right</b>.',
              'Para esquivar a alguien, <b>gira a la derecha</b>. ¿Venís de frente? <b>Los dos giran a la derecha</b>.',
              'Чтобы разойтись, <b>поворачивай вправо</b>. Летите лоб в лоб? <b>Оба вправо</b>.',
              'Щоб розминутися, <b>повертай праворуч</b>. Летите лоб у лоб? <b>Обидва праворуч</b>.',
            ),
            l(
              'The <b>lower canopy has the right of way</b>. That doesn’t make the landing area yours: fly the <b>same pattern</b> as everyone and stay predictable.',
              'La <b>vela más baja tiene preferencia</b>. Eso no te da toda la zona de aterrizaje: vuela el <b>mismo circuito</b> que todos y sé predecible.',
              'У <b>нижнего купола приоритет</b>. Но площадка от этого не твоя: летай по <b>той же схеме</b>, что и все, и будь предсказуем.',
              'У <b>нижнього купола пріоритет</b>. Але майданчик від цього не твій: літай за <b>тією самою схемою</b>, що й усі, і будь передбачуваним.',
            ),
          ],
        },
        { type: 'h', text: l('Turn limits', 'Límites de giro', 'Ограничения разворотов', 'Обмеження розворотів') },
        {
          type: 'p',
          muted: true,
          text: l(
            "A dropzone rule, not a USPA one: ask yours for its limits.",
            'Una regla de la zona de salto, no de USPA: pregunta los límites de la tuya.',
            'Правило аэродрома, а не USPA: спроси ограничения на своём.',
            'Правило аеродрому, а не USPA: запитай обмеження на своєму.',
          ),
        },
        {
          type: 'rules',
          items: [
            {
              big: '≤ 180°',
              title: l('Above 1,000 ft', 'Por encima de 1,000 ft', 'Выше 1 000 футов', 'Вище 1 000 футів'),
              text: l('Setting up and <b>looking around</b>.', 'Para prepararte y <b>mirar alrededor</b>.', 'Подготовка к заходу, <b>смотрим вокруг</b>.', 'Підготовка до заходу, <b>дивимося довкола</b>.'),
            },
            {
              big: '≤ 90°',
              title: l('1,000 → 300 ft', '1,000 → 300 ft', '1 000 → 300 футов', '1 000 → 300 футів'),
              text: l('<b>Pattern turns only</b>: downwind → base → final.', '<b>Solo los giros del circuito</b>: viento en cola → base → final.', '<b>Только повороты схемы</b>: по ветру → базовая → финал.', '<b>Лише повороти схеми</b>: по вітру → базова → фінал.'),
            },
            {
              big: '≤ 45°',
              tone: 'red',
              title: l('Below 300 ft', 'Por debajo de 300 ft', 'Ниже 300 футов', 'Нижче 300 футів'),
              text: l('<b>Flat turns only</b>, and only to avoid something.', '<b>Solo giros planos</b>, y solo para esquivar algo.', '<b>Только плоские развороты</b> и только чтобы уйти от препятствия.', '<b>Лише пласкі розвороти</b> і лише щоб оминути перешкоду.'),
            },
          ],
        },
        {
          type: 'h',
          id: 'lowturn',
          text: l('What a “low turn” is, and why it hurts', 'Qué es un “giro bajo” y por qué hace daño', 'Что такое «низкий разворот» и почему он опасен', 'Що таке «низький розворот» і чому він небезпечний'),
        },
        {
          type: 'list',
          title: l('Pull one toggle and the canopy doesn’t just turn', 'Tiras de un batidor y la vela no solo gira', 'Тянешь одну клеванту, и купол не просто поворачивает', 'Тягнеш одну клеванту, і купол не просто повертає'),
          items: [
            l('It <b>tilts, dives and speeds up</b>.', 'Se <b>inclina, pica y acelera</b>.', 'Он <b>кренится, ныряет и разгоняется</b>.', 'Він <b>крениться, пірнає і розганяється</b>.'),
            l('You <b>swing out</b> under it.', 'Tú te <b>balanceas hacia afuera</b> debajo de ella.', 'Тебя <b>выносит в сторону</b> под ним.', 'Тебе <b>виносить убік</b> під ним.'),
            l('Up high that’s fine: it <b>levels out</b> again.', 'Arriba no pasa nada: <b>vuelve a nivelarse</b>.', 'Высоко это не страшно: купол <b>снова выравнивается</b>.', 'Високо це не страшно: купол <b>знову вирівнюється</b>.'),
            l('Close to the ground it’s <b>still diving</b> when you get there.', 'Cerca del suelo <b>todavía está picando</b> cuando llegas.', 'У земли он <b>ещё не вышел из нырка</b>.', 'Біля землі він <b>ще не вийшов із пірнання</b>.'),
          ],
        },
        {
          type: 'lowturn',
          text: l(
            'Turning <b>too sharply</b> at the very end, near the ground: you hit fast, often at an angle, with <b>no flare left</b>. That’s a <b>low turn</b>.',
            'Girar <b>demasiado fuerte</b> justo al final, cerca del suelo: golpeas rápido, a menudo inclinado, <b>sin margen para el flare</b>. Eso es un <b>giro bajo</b>.',
            'Слишком <b>резкий поворот</b> в самом конце, у земли: удар на скорости, часто под углом, и <b>на flare нет запаса</b>. Это и есть <b>низкий разворот</b>.',
            'Надто <b>різкий поворот</b> у самому кінці, біля землі: удар на швидкості, часто під кутом, і <b>на flare немає запасу</b>. Це і є <b>низький розворот</b>.',
          ),
          points: [
            l(
              'Wrong spot low? <b>Land straight</b>, even downwind or off target.',
              '¿Bajo y en mal lugar? <b>Aterriza recto</b>, aunque sea con viento en cola o fuera del blanco.',
              'Низко и не туда? <b>Садись прямо</b>, даже по ветру или мимо цели.',
              'Низько і не туди? <b>Сідай прямо</b>, навіть по вітру чи повз ціль.',
            ),
            l(
              'A <b>level wing</b> beats the perfect spot. Landing priorities (USPA SIM 4-1): <b>1 level wing</b>, flying straight; <b>2 a clear area</b>, even a farther one; <b>3 flare and PLF</b>.',
              'Un <b>ala nivelada</b> vale más que el lugar perfecto. Prioridades al aterrizar (USPA SIM 4-1): <b>1 ala nivelada</b>, volando recto; <b>2 una zona despejada</b>, aunque esté más lejos; <b>3 flare y PLF</b>.',
              '<b>Ровное крыло</b> важнее идеального места. Приоритеты при посадке (USPA SIM 4-1): <b>1 ровное крыло</b>, полёт по прямой; <b>2 свободная площадка</b>, даже если она дальше; <b>3 flare и PLF</b>.',
              '<b>Рівне крило</b> важливіше за ідеальне місце. Пріоритети під час посадки (USPA SIM 4-1): <b>1 рівне крило</b>, політ по прямій; <b>2 вільний майданчик</b>, навіть якщо він далі; <b>3 flare і PLF</b>.',
            ),
            l(
              'Obstacle below 300 ft (bush, fence): <b>half brakes</b>; the smallest <b>flat braked turn</b> that misses it, or go into it with feet and knees together, <b>flare and PLF</b>. Never a hard turn.',
              'Obstáculo por debajo de 300 ft (arbusto, cerca): <b>medio freno</b>; el <b>giro plano con freno</b> más pequeño que lo esquive, o entra en él con pies y rodillas juntos, <b>flare y PLF</b>. Nunca un giro fuerte.',
              'Препятствие ниже 300 футов (куст, забор): <b>полутормоза</b>; самый маленький <b>плоский поворот на тормозах</b>, чтобы его обойти, или садись в него, ступни и колени вместе, <b>flare и PLF</b>. Никаких резких поворотов.',
              'Перешкода нижче 300 футів (кущ, паркан): <b>напівгальма</b>; найменший <b>плаский поворот на гальмах</b>, щоб її оминути, або сідай у неї, ступні й коліна разом, <b>flare і PLF</b>. Жодних різких поворотів.',
            ),
            l(
              'Must turn low? A <b>braked flat turn</b>: from half brakes, let one toggle up a little and pull the other down a little more. No dive. Then flare from there.',
              '¿Tienes que girar bajo? Un <b>giro plano con freno</b>: desde medio freno, sube un poco un batidor y baja un poco más el otro. Sin picar. Luego flare desde ahí.',
              'Нужно повернуть низко? <b>Плоский поворот на тормозах</b>: из полутормозов чуть отпусти одну клеванту и чуть добери другую. Без нырка. Потом flare из этого положения.',
              'Треба повернути низько? <b>Плаский поворот на гальмах</b>: з напівгальм трохи відпусти одну клеванту й трохи добери другу. Без пірнання. Потім flare із цього положення.',
            ),
            l(
              'Already in a low turn? <b>Opposite toggle down</b> to stop the turn and bring the canopy back overhead. Then <b>flare from those brakes</b> and get ready for a hard landing (PLF). Hit early? <b>Keep flying</b> the canopy (USPA SIM 4-1).',
              '¿Ya estás en un giro bajo? <b>Baja el batidor contrario</b> para parar el giro y volver a tener la vela encima. Luego <b>flare desde esos frenos</b> y prepárate para un aterrizaje duro (PLF). ¿Tocas antes? <b>Sigue pilotando</b> la vela (USPA SIM 4-1).',
              'Уже в низком развороте? <b>Противоположную клеванту вниз</b>, чтобы остановить разворот и вернуть купол над головой. Потом <b>flare из этих тормозов</b> и готовься к жёсткой посадке (PLF). Коснулся раньше? <b>Продолжай управлять</b> куполом (USPA SIM 4-1).',
              'Уже в низькому розвороті? <b>Протилежну клеванту вниз</b>, щоб зупинити розворот і повернути купол над головою. Потім <b>flare із цих гальм</b> і готуйся до жорсткої посадки (PLF). Торкнувся раніше? <b>Далі керуй</b> куполом (USPA SIM 4-1).',
            ),
          ],
          clip: clip(
            'x_lowturn2',
            l(
              'Seen from the ground: a swoop (a planned fast landing turn) started too low; the canopy is still diving at the water',
              'Visto desde el suelo: un swoop (un giro rápido de aterrizaje hecho a propósito) empezado demasiado bajo; la vela sigue picando al llegar al agua',
              'Вид с земли: свуп (намеренный скоростной разворот перед посадкой) начат слишком низко, и купол ещё ныряет у самой воды',
              'Вигляд із землі: свуп (навмисний швидкісний розворот перед посадкою) почато надто низько, і купол ще пірнає біля самої води',
            ),
            'Chris Forman',
            '5Lj_O4MLo0M',
            19,
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
                'Що вирішуєш на 2 500 футах під добрим куполом?',
              ),
              options: [
                l('Whether to cut away or keep this canopy', 'Si liberar o quedarte con esta vela', 'Отцепляться или лететь на этом куполе', 'Відчіплюватися чи летіти на цьому куполі'),
                l('The holding point and a left or right pattern', 'El punto de espera y circuito izquierdo o derecho', 'Точку ожидания и левую или правую схему', 'Точку очікування й ліву чи праву схему'),
                l('How high to start the flare today', 'A qué altura empezar hoy el flare', 'На какой высоте сегодня начать flare', 'На якій висоті сьогодні почати flare'),
              ],
              answer: 1,
              why: l(
                "This 2,500 ft is the canopy plan for today's wind. The cutaway decision altitude is also 2,500 ft, but it's a different decision, for emergencies.",
                'Estos 2,500 ft son el plan de vuelo para el viento de hoy. La altura de decisión para liberar también es 2,500 ft, pero es otra decisión, para emergencias.',
                'Эти 2 500 футов — план полёта под сегодняшний ветер. Высота решения об отцепке тоже 2 500 футов, но это другое решение, аварийное.',
                'Ці 2 500 футів — план польоту під сьогоднішній вітер. Висота рішення про відчеплення теж 2 500 футів, але це інше рішення, аварійне.',
              ),
            },
            {
              q: l(
                'Where are you at 900 ft?',
                '¿Dónde estás a 900 ft?',
                'Где ты на 900 футах?',
                'Де ти на 900 футах?',
              ),
              options: [
                l('Still over the holding point', 'Todavía sobre el punto de espera', 'Ещё над точкой ожидания', 'Ще над точкою очікування'),
                l('On final, into the wind', 'En final, contra el viento', 'На финале, против ветра', 'На фіналі, проти вітру'),
                l('Entering the pattern on the downwind leg', 'Entrando al circuito en el tramo con viento en cola', 'Вхожу в схему на участке по ветру', 'Входжу в схему на ділянці по вітру'),
              ],
              answer: 2,
              why: l(
                'Hold from 2,000 to 1,000 ft, enter downwind at 900 ft, base at 600 ft, final at 300 ft, flare at about 10 ft.',
                'Espera de 2,000 a 1,000 ft, entra con viento en cola a 900 ft, base a 600 ft, final a 300 ft, flare a unos 10 ft.',
                'Ожидание с 2 000 до 1 000 футов, вход по ветру на 900 футах, базовая прямая на 600, финал на 300, flare примерно на 10 футах.',
                'Очікування з 2 000 до 1 000 футів, вхід по вітру на 900 футах, базова пряма на 600, фінал на 300, flare приблизно на 10 футах.',
              ),
            },
            {
              q: l(
                'How big a turn is allowed between 1,000 and 300 ft?',
                '¿Qué tan grande puede ser un giro entre 1,000 y 300 ft?',
                'Какой разворот допустим между 1 000 и 300 футами?',
                'Який розворот допустимий між 1 000 і 300 футами?',
              ),
              options: [
                l('Up to 180°', 'Hasta 180°', 'До 180°', 'До 180°'),
                l('Up to 90°', 'Hasta 90°', 'До 90°', 'До 90°'),
                l('Up to 45°', 'Hasta 45°', 'До 45°', 'До 45°'),
              ],
              answer: 1,
              why: l(
                'Above 1,000 ft up to 180°, from 1,000 to 300 ft up to 90°, below 300 ft up to 45° and flat.',
                'Por encima de 1,000 ft hasta 180°, de 1,000 a 300 ft hasta 90°, por debajo de 300 ft hasta 45° y plano.',
                'Выше 1 000 футов — до 180°, с 1 000 до 300 — до 90°, ниже 300 — до 45° и плоско.',
                'Вище 1 000 футів — до 180°, з 1 000 до 300 — до 90°, нижче 300 — до 45° і пласко.',
              ),
            },
            {
              q: l(
                "You're at 200 ft and not over the target. What do you do?",
                'Estás a 200 ft y no estás sobre el blanco. ¿Qué haces?',
                'Ты на 200 футах и не над целью. Что делаешь?',
                'Ти на 200 футах і не над ціллю. Що робиш?',
              ),
              options: [
                l('Turn hard toward the target', 'Giras fuerte hacia el blanco', 'Резко поворачиваешь к цели', 'Різко повертаєш до цілі'),
                l('Land straight ahead, wing level', 'Aterrizas recto, con el ala nivelada', 'Садишься прямо, крыло ровно', 'Сідаєш прямо, крило рівно'),
                l('Turn into the wind, whatever it takes', 'Giras contra el viento, como sea', 'Разворачиваешься против ветра любой ценой', 'Розвертаєшся проти вітру за будь-яку ціну'),
              ],
              answer: 1,
              why: l(
                'A sharp turn close to the ground makes the canopy dive, and you hit the ground fast. A level wing beats the perfect landing spot.',
                'Un giro brusco cerca del suelo hace picar la vela y golpeas el suelo rápido. Un ala nivelada vale más que el lugar perfecto.',
                'Резкий поворот у земли заставляет купол нырнуть, и ты ударяешься о землю на скорости. Ровное крыло важнее идеального места.',
                'Різкий поворот біля землі змушує купол пірнути, і ти вдаряєшся об землю на швидкості. Рівне крило важливіше за ідеальне місце.',
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- obstacles
    {
      id: 'obstacles',
      title: l('Landing on an obstacle', 'Aterrizar sobre un obstáculo', 'Посадка на препятствие', 'Посадка на перешкоду'),
      blocks: [
        {
          type: 'list',
          kind: 'do',
          title: l('Best plan: never get there', 'El mejor plan: no llegar ahí', 'Лучший план: туда не попасть', 'Найкращий план: туди не потрапити'),
          items: [
            l('<b>See it early</b> and turn away from it <b>while you are still above 1,000 ft</b>.', '<b>Detéctalo temprano</b> y aléjate de él <b>mientras estés por encima de 1,000 ft</b>.', '<b>Заметь заранее</b> и отверни от него, <b>пока ты выше 1 000 футов</b>.', '<b>Помічай заздалегідь</b> і відвертай від неї, <b>поки ти вище 1 000 футів</b>.'),
            l('Be over the holding point <b>by 2,000 ft</b>: still time to judge if you reach the landing area.', 'Llega sobre el punto de espera <b>antes de 2,000 ft</b>: aún hay tiempo para ver si llegas.', 'К <b>2 000 футам</b> будь над точкой ожидания: ещё есть время понять, долетишь ли.', 'На <b>2 000 футах</b> будь над точкою очікування: ще є час зрозуміти, чи долетиш.'),
            l("Can't make it? <b>Pick a clear field</b> and land there, into the wind if you can do it without a low turn.", '¿No llegas? <b>Elige un campo despejado</b> y aterriza ahí, contra el viento si puedes hacerlo sin un giro bajo.', 'Не долетаешь? <b>Выбери чистое поле</b> и садись туда, против ветра, если для этого не нужен низкий разворот.', 'Не долітаєш? <b>Обери чисте поле</b> й сідай туди, проти вітру, якщо для цього не потрібен низький розворот.'),
          ],
        },
        { type: 'p', muted: true, text: l('Still ending up on one? The steps from instructors and USPA (SIM 4-1):', '¿Aun así vas a caer sobre uno? Los pasos de los instructores y de USPA (SIM 4-1):', 'Всё равно садишься на препятствие? Шаги от инструкторов и USPA (SIM 4-1):', 'Усе одно сідаєш на перешкоду? Кроки від інструкторів і USPA (SIM 4-1):') },
        {
          type: 'rules',
          items: [
            {
              icon: 'tree',
              title: l('Trees', 'Árboles', 'Деревья', 'Дерева'),
              points: [
                l('<b>Half brakes</b>, aim for the <b>middle</b> of the tree', '<b>Medio freno</b>, apunta al <b>centro</b> del árbol', '<b>Полутормоза</b>, целься в <b>середину</b> дерева', '<b>Напівгальма</b>, цілься в <b>середину</b> дерева'),
                l('<b>Feet and knees tight</b>, legs not crossed, <b>ready to PLF</b>: you often go through to the ground', '<b>Pies y rodillas juntos</b>, piernas sin cruzar, <b>listo para el PLF</b>: a menudo atraviesas el árbol hasta el suelo', '<b>Ступни и колени плотно</b>, ноги не скрещивать, <b>готов к PLF</b>: часто пролетаешь сквозь дерево до земли', '<b>Ступні й коліна щільно</b>, ноги не схрещувати, <b>готовий до PLF</b>: часто пролітаєш крізь дерево до землі'),
                l('<b>Cover your face</b> with your hands, <b>elbows tight</b> to the chest', '<b>Cúbrete la cara</b> con las manos, <b>codos pegados</b> al pecho', '<b>Закрой лицо</b> руками, <b>локти прижаты</b> к груди', '<b>Закрий обличчя</b> руками, <b>лікті притиснуті</b> до грудей'),
                l('Stuck: <b>hold the trunk or a big branch</b>, wait for help, don\'t climb down', 'Atrapado: <b>abrázate al tronco o a una rama gruesa</b>, espera ayuda, no bajes solo', 'Застрял: <b>держись за ствол или толстую ветку</b>, жди помощи, сам не слезай', 'Застряг: <b>тримайся за стовбур або товсту гілку</b>, чекай допомоги, сам не злазь'),
              ],
            },
            {
              icon: 'water',
              title: l('Water', 'Agua', 'Вода', 'Вода'),
              points: [
                l('Time permitting: <b>loosen the chest strap</b>, <b>disconnect the RSL</b>', 'Si hay tiempo: <b>afloja la cinta de pecho</b>, <b>desconecta el RSL</b>', 'Если есть время: <b>ослабь грудную перемычку</b>, <b>отсоедини RSL</b>', 'Якщо є час: <b>послаб грудну перемичку</b>, <b>від’єднай RSL</b>'),
                l('<b>Half brakes</b> at about 10 ft', '<b>Medio freno</b> a unos 10 ft', '<b>Полутормоза</b> примерно на 10 футах', '<b>Напівгальма</b> приблизно на 10 футах'),
                l('<b>Deep breath</b>, feet and knees together, ready to PLF', '<b>Respira hondo</b>, pies y rodillas juntos, listo para el PLF', '<b>Глубокий вдох</b>, ступни и колени вместе, готов к PLF', '<b>Глибокий вдих</b>, ступні й коліна разом, готовий до PLF'),
                l('<b>Stay in the harness</b> until you are in the water', '<b>Quédate en el arnés</b> hasta estar en el agua', '<b>Из системы не выбирайся</b> до касания воды', '<b>Із системи не вибирайся</b>, доки не торкнешся води'),
                l('In the water: <b>cut away</b>, arms back, <b>swim forward</b> out of the harness', 'En el agua: <b>libera</b>, brazos atrás y <b>nada hacia adelante</b> para salir del arnés', 'В воде: <b>отцепись</b>, руки назад, <b>выплыви вперёд</b> из системы', 'У воді: <b>відчепися</b>, руки назад, <b>випливи вперед</b> із системи'),
                l('Canopy on top of you: follow <b>one seam</b> to its edge; swim <b>upwind</b>, away from the lines', 'Vela encima de ti: sigue <b>una costura</b> hasta el borde; nada <b>contra el viento</b>, lejos de las líneas', 'Купол накрыл: плыви вдоль <b>одного шва</b> к краю; плыви <b>против ветра</b>, подальше от строп', 'Купол накрив: пливи вздовж <b>одного шва</b> до краю; пливи <b>проти вітру</b>, подалі від строп'),
              ],
            },
            {
              icon: 'building',
              title: l('Buildings', 'Edificios', 'Здания', 'Будівлі'),
              points: [
                l('Near a wall: <b>fly along it</b> with a flat turn, not into it', 'Cerca de una pared: <b>vuela a lo largo</b> con un giro plano, no contra ella', 'У стены: <b>лети вдоль неё</b> плоским поворотом, не в неё', 'Біля стіни: <b>лети вздовж неї</b> пласким поворотом, не в неї'),
                l('Going to hit: <b>flare about 10 ft above where you\'ll touch</b>, then PLF', 'Si vas a golpear: <b>flare a unos 10 ft por encima del punto de contacto</b>, luego PLF', 'Удар неизбежен: <b>flare на высоте около 10 футов над точкой касания</b>, потом PLF', 'Удару не уникнути: <b>flare на висоті близько 10 футів над точкою дотику</b>, потім PLF'),
                l('On a roof: <b>collapse the canopy</b>; if the wind drags you, <b>cut away</b> (disconnect the RSL first if you can; USPA SIM 4-1)', 'En un techo: <b>colapsa la vela</b>; si el viento te arrastra, <b>libera</b> (antes desconecta el RSL si puedes; USPA SIM 4-1)', 'На крыше: <b>погаси купол</b>; если ветер тащит — <b>отцепляйся</b> (сначала отсоедини RSL, если можешь; USPA SIM 4-1)', 'На даху: <b>погаси купол</b>; якщо вітер тягне — <b>відчіплюйся</b> (спершу від’єднай RSL, якщо можеш; USPA SIM 4-1)'),
              ],
            },
            {
              icon: 'power',
              title: l('Power lines', 'Cables eléctricos', 'Линии электропередачи', 'Лінії електропередачі'),
              tone: 'red',
              points: [
                l('<b>Spot them early</b>, steer away', '<b>Detéctalos temprano</b> y aléjate', '<b>Заметь рано</b> и уйди', '<b>Помічай рано</b> й відходь'),
                l("Can't: land <b>parallel</b>, so you touch only one", 'Si no: aterriza <b>paralelo</b> para tocar solo uno', 'Не получается: садись <b>параллельно</b>, чтобы коснуться только одного', 'Не виходить: сідай <b>паралельно</b>, щоб торкнутися лише одного'),
                l('<b>Slow the canopy</b> (brakes), feet and knees tight, <b>turn your head</b>, ready to PLF', '<b>Frena la vela</b> (frenos), pies y rodillas bien juntos, <b>gira la cabeza</b>, listo para el PLF', '<b>Притормози купол</b> (тормоза), ступни и колени плотно, <b>голову отверни</b>, готов к PLF', '<b>Пригальмуй купол</b> (гальма), ступні й коліна щільно, <b>голову відверни</b>, готовий до PLF'),
                l('Hanging: <b>touch nothing</b>, nobody touches you until the <b>power company</b> confirms the power is off and stays off', 'Colgado: <b>no toques nada</b>, nadie te toca hasta que la <b>compañía eléctrica</b> confirme que cortó la corriente y que seguirá cortada', 'Повис: <b>ничего не трогай</b>, никто не трогает, пока <b>энергокомпания</b> не подтвердит, что ток отключён и не включится', 'Повис: <b>нічого не торкайся</b>, ніхто не торкається тебе, доки <b>енергокомпанія</b> не підтвердить, що струм вимкнено й він не ввімкнеться'),
                l('Feet on the ground, canopy in the wires: <b>disconnect the RSL</b>, <b>cut away</b>, leave the main', 'Pies en el suelo y la vela en los cables: <b>desconecta el RSL</b>, <b>libera</b> y deja la principal', 'Ноги на земле, купол на проводах: <b>отсоедини RSL</b>, <b>отцепись</b>, основной оставь', 'Ноги на землі, купол на дротах: <b>від’єднай RSL</b>, <b>відчепися</b>, основний залиш'),
              ],
            },
          ],
        },
        {
          type: 'callout',
          tone: 'red',
          title: l('Everywhere', 'En todos los casos', 'В любом случае', 'У будь-якому разі'),
          text: l(
            '<b>Never try to save the gear.</b> It gets collected later; you come first.',
            '<b>Nunca intentes salvar el equipo.</b> Lo recogen después; tú vas primero.',
            '<b>Никогда не спасай снаряжение.</b> Его соберут потом; главное — ты.',
            '<b>Ніколи не рятуй спорядження.</b> Його зберуть потім; головне — ти.',
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
                'Ти сідаєш на воду. Що з підвісною системою?',
              ),
              options: [
                l('Get out of it up high and drop into the water', 'Salir de él en el aire y caer al agua', 'Выбраться ещё в воздухе и упасть в воду', 'Вибратися ще в повітрі й упасти у воду'),
                l('Stay in until you are in the water, then swim away', 'Quedarte hasta estar en el agua y luego nadar lejos', 'Оставаться в ней до воды, потом отплыть', 'Залишатися в ній до води, потім відпливти'),
                l('Stay in it and hold on to the canopy to float', 'Quedarte en él y agarrarte a la vela para flotar', 'Оставаться в ней и держаться за купол на плаву', 'Залишатися в ній і триматися за купол на плаву'),
              ],
              answer: 1,
              why: l(
                'Chest strap loose and RSL off if there is time, half brakes at about 10 ft, deep breath, in the harness until you are in the water. Then cut away, swim forward out of the harness, leave the gear.',
                'Si hay tiempo, cinta de pecho floja y RSL desconectado; medio freno a unos 10 ft, respira hondo, en el arnés hasta estar en el agua. Luego libera, nada hacia adelante para salir del arnés y deja el equipo.',
                'Если есть время — ослабить грудную перемычку и отсоединить RSL; полутормоза примерно на 10 футах, вдох, в системе до воды. Потом отцепиться, выплыть вперёд из системы, снаряжение бросить.',
                'Якщо є час — послабити грудну перемичку й від’єднати RSL; напівгальма приблизно на 10 футах, вдих, у системі до води. Потім відчепитися, випливти вперед із системи, спорядження покинути.',
              ),
            },
            {
              q: l(
                "You can't avoid power lines. How do you land?",
                'No puedes evitar los cables eléctricos. ¿Cómo aterrizas?',
                'Уйти от проводов не получается. Как садишься?',
                'Оминути дроти не виходить. Як сідаєш?',
              ),
              options: [
                l('Across the lines, to get past them fast', 'Cruzando los cables, para pasarlos rápido', 'Поперёк проводов, чтобы быстрее их проскочить', 'Поперек дротів, щоб швидше їх проскочити'),
                l('Parallel to the lines, so you touch only one', 'Paralelo a los cables, para tocar solo uno', 'Параллельно проводам, чтобы коснуться только одного', 'Паралельно дротам, щоб торкнутися лише одного'),
                l('Grab a wire with both hands to stop', 'Agarrar un cable con las dos manos para frenar', 'Схватиться за провод обеими руками, чтобы остановиться', 'Схопитися за дріт обома руками, щоб зупинитися'),
              ],
              answer: 1,
              why: l(
                "Parallel, feet and knees together, touch nothing. If you hang there, nobody touches you until the power is off.",
                'Paralelo, pies y rodillas juntos, sin tocar nada. Si quedas colgado, nadie te toca hasta que corten la corriente.',
                'Параллельно, ступни и колени вместе, ничего не трогать. Если повис — никто не трогает, пока не отключат ток.',
                'Паралельно, ступні й коліна разом, нічого не торкатися. Якщо повис — ніхто тебе не торкається, доки не вимкнуть струм.',
              ),
            },
            {
              q: l(
                "You're flying toward a wall low down. What's better?",
                'Vas bajo hacia una pared. ¿Qué es mejor?',
                'Ты низко летишь на стену. Что лучше?',
                'Ти низько летиш на стіну. Що краще?',
              ),
              options: [
                l('Fly along it with a flat turn', 'Volar a lo largo de ella con un giro plano', 'Лететь вдоль неё плоским поворотом', 'Летіти вздовж неї пласким поворотом'),
                l('A hard turn away at full speed', 'Un giro fuerte para alejarte a toda velocidad', 'Резкий разворот от неё на полной скорости', 'Різкий розворот від неї на повній швидкості'),
                l('Fly straight into it with hands up', 'Ir recto contra ella con las manos arriba', 'Лететь прямо в неё с поднятыми руками', 'Летіти просто в неї з піднятими руками'),
              ],
              answer: 0,
              why: l(
                'A flat turn along the wall keeps you from hitting it without making the canopy dive. If you do hit, flare about 10 ft above where you\'ll touch, then PLF.',
                'Un giro plano a lo largo de la pared evita el golpe sin hacer picar la vela. Si igual golpeas, flare a unos 10 ft por encima del punto de contacto y luego PLF.',
                'Плоский поворот вдоль стены уводит от удара, не заставляя купол нырять. Если всё же удар — flare на высоте около 10 футов над точкой касания, потом PLF.',
                'Плаский поворот уздовж стіни відводить від удару й не змушує купол пірнати. Якщо удару не уникнути — flare на висоті близько 10 футів над точкою дотику, потім PLF.',
              ),
            },
            {
              q: l(
                'You landed in a tree. What about your gear?',
                'Caíste en un árbol. ¿Y tu equipo?',
                'Ты сел на дерево. Что со снаряжением?',
                'Ти сів на дерево. Що зі спорядженням?',
              ),
              options: [
                l('Pull the canopy free, then climb down', 'Soltar la vela del árbol y luego bajar', 'Сдёрнуть купол, потом слезть', 'Смикнути купол, потім злізти'),
                l('Leave it, stay put and wait for help', 'Dejarlo, quedarte quieto y esperar ayuda', 'Оставить, не двигаться и ждать помощи', 'Залишити, не рухатися й чекати допомоги'),
                l('Cut the lines and jump to the ground', 'Cortar las líneas y saltar al suelo', 'Перерезать стропы и спрыгнуть на землю', 'Перерізати стропи й зістрибнути на землю'),
              ],
              answer: 1,
              why: l(
                "Never try to save the gear: it gets collected. In a tree you stay put and don't climb down alone.",
                'Nunca intentes salvar el equipo: lo recogen. En un árbol te quedas quieto y no bajas solo.',
                'Снаряжение не спасаем — его соберут. На дереве остаёшься на месте и сам не слезаешь.',
                'Спорядження не рятуємо — його зберуть. На дереві залишаєшся на місці й сам не злазиш.',
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- flare
    {
      id: 'flare',
      title: l('The flare', 'El flare', 'Выравнивание (flare)', 'Вирівнювання (flare)'),
      blocks: [
        {
          type: 'split',
          left: [
            {
              type: 'callout',
              title: l('What the flare does', 'Qué hace el flare', 'Что делает flare', 'Що робить flare'),
              points: [
                l('On final you come down <b>at an angle</b>.', 'En final bajas <b>en ángulo</b>.', 'На финале ты снижаешься <b>под углом</b>.', 'На фіналі ти знижуєшся <b>під кутом</b>.'),
                l(
                  'The flare makes it a <b>short level glide</b>; the canopy “lifts” you a little.',
                  'El flare lo convierte en un <b>planeo corto y nivelado</b>; la vela te “levanta” un poco.',
                  'Flare превращает это в <b>короткое горизонтальное планирование</b>, купол чуть «приподнимает».',
                  'Flare перетворює це на <b>коротке горизонтальне планування</b>, купол трохи «підіймає».',
                ),
                l('You <b>step down softly</b>.', 'Te <b>posas suave</b>.', 'Ты <b>мягко встаёшь</b>.', 'Ти <b>м’яко стаєш</b> на ноги.'),
                l(
                  'Common mistake: <b>too fast</b>. A jerky flare spends the canopy’s speed too early, and you drop the last few feet.',
                  'Error común: <b>demasiado rápido</b>. Un flare brusco gasta la velocidad de la vela demasiado pronto y caes los últimos pies.',
                  'Частая ошибка — <b>слишком быстро</b>: резкий flare тратит скорость купола раньше времени, и последние футы ты падаешь.',
                  'Часта помилка — <b>надто швидко</b>: різкий flare витрачає швидкість купола завчасно, і останні фути ти падаєш.',
                ),
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: l('On final: full flight, legs together', 'En final: vuelo completo, piernas juntas', 'На финале: полная скорость, ноги вместе', 'На фіналі: повна швидкість, ноги разом'),
                  sub: l(
                    '<b>Hands all the way up</b>, canopy flying level, feet and knees together. <b>Only small flat corrections.</b>',
                    '<b>Manos totalmente arriba</b>, vela volando nivelada, pies y rodillas juntos. <b>Solo correcciones pequeñas y planas.</b>',
                    '<b>Руки полностью вверху</b>, купол летит ровно, ступни и колени вместе. <b>Только небольшие плоские поправки.</b>',
                    '<b>Руки повністю вгорі</b>, купол летить рівно, ступні й коліна разом. <b>Лише невеликі пласкі поправки.</b>',
                  ),
                },
                {
                  title: l('Start at about 10 ft (3 m)', 'Empieza a unos 10 ft (3 m)', 'Начинаем примерно с 10 футов (3 м)', 'Починаємо приблизно з 10 футів (3 м)'),
                  sub: l(
                    'Look <b>ahead</b>, not at your feet: looking straight down makes the ground rush up and <b>throws your timing off</b>. Our ground course: eyes on the <b>horizon</b>. USPA: <b>forward and down at about 45°</b>, so you still see the ground to judge the height. <q-check/> 10 ft is about a one-storey roof; USPA: feet about <b>twice your height</b> off the ground. Schools differ (10–15 ft). <q-check/>',
                    'Mira <b>hacia delante</b>, no a tus pies: mirar justo abajo hace que el suelo se te venga encima y <b>te hace calcular mal el momento</b>. Nuestro curso en tierra: la vista en el <b>horizonte</b>. USPA: <b>adelante y abajo, a unos 45°</b>, para seguir viendo el suelo y juzgar la altura. <q-check/> 10 ft es más o menos un techo de una planta; USPA: los pies a unas <b>dos veces tu estatura</b> del suelo. Cada escuela dice algo distinto (10–15 ft). <q-check/>',
                    'Смотрим <b>вперёд</b>, а не под ноги: если смотреть прямо вниз, земля «набегает» и <b>ошибаешься с моментом</b>. На нашей наземной подготовке: взгляд на <b>горизонт</b>. USPA: <b>вперёд и вниз примерно под 45°</b>, чтобы видеть землю и оценивать высоту. <q-check/> 10 футов — это примерно крыша одноэтажного дома; USPA: ноги примерно на <b>двух твоих ростах</b> над землёй. В разных школах по-разному (10–15 футов). <q-check/>',
                    'Дивимося <b>вперед</b>, а не під ноги: якщо дивитися просто вниз, земля «набігає» і <b>помиляєшся з моментом</b>. На нашій наземній підготовці: погляд на <b>горизонт</b>. USPA: <b>вперед і вниз приблизно під 45°</b>, щоб бачити землю й оцінювати висоту. <q-check/> 10 футів — це приблизно дах одноповерхового будинку; USPA: ноги приблизно на <b>двох твоїх зростах</b> над землею. У різних школах по-різному (10–15 футів). <q-check/>',
                  ),
                },
                {
                  title: l('Pull smoothly, both hands together', 'Tira suave, las dos manos juntas', 'Тянем плавно, обе руки вместе', 'Тягнемо плавно, обидві руки разом'),
                  sub: l(
                    "<b>Elbows go back</b>, hands close to your body, thumbs slide down past the ribs. <b>No straight arms</b> out to the sides.",
                    '<b>Los codos van hacia atrás</b>, las manos cerca del cuerpo, los pulgares bajan rozando las costillas. <b>No abras los brazos rectos</b> hacia los lados.',
                    '<b>Локти уходят назад</b>, кисти близко к телу, большие пальцы скользят вниз вдоль рёбер. <b>Не разводить прямые руки</b> в стороны.',
                    '<b>Лікті йдуть назад</b>, кисті близько до тіла, великі пальці ковзають униз уздовж ребер. <b>Не розводь прямі руки</b> в боки.',
                  ),
                },
                {
                  title: l('Finish all the way down and hold', 'Termina abajo del todo y mantén', 'До конца вниз и держим', 'До кінця вниз і тримаємо'),
                  sub: l(
                    "Hands <b>all the way down</b> by your hips until you're standing. Never let the toggles <b>back up</b>.",
                    'Manos <b>abajo del todo</b>, a la altura de la cadera, hasta que estés de pie. Nunca dejes <b>subir los batidores</b>.',
                    'Руки <b>до упора вниз</b>, у бёдер, пока не встал. Клеванты <b>не отпускать вверх</b>.',
                    'Руки <b>до кінця вниз</b>, біля стегон, доки не встав. Клеванти <b>не відпускати вгору</b>.',
                  ),
                },
                {
                  title: l('Feet and knees together', 'Pies y rodillas juntos', 'Ступни и колени вместе', 'Ступні й коліна разом'),
                  sub: l(
                    'Ready for a <b>parachute landing fall (PLF)</b> if the landing is hard.',
                    'Listo para una <b>caída de aterrizaje (PLF)</b> si el aterrizaje es duro.',
                    'Готов к <b>PLF — приземлению с перекатом</b>, если приземление жёсткое.',
                    'Готовий до <b>PLF — приземлення з перекатом</b>, якщо посадка жорстка.',
                  ),
                },
              ],
            },
            {
              type: 'list',
              title: l('Timing', 'El momento', 'Когда тянуть', 'Коли тягнути'),
              items: [
                l('What matters: the flare is <b>finished at touchdown</b>. USPA: arms all the way down when your feet are about <b>1–3 ft</b> off the ground.', 'Lo que importa: el flare <b>termina al tocar el suelo</b>. USPA: brazos abajo del todo cuando los pies están a <b>1–3 ft</b> del suelo.', 'Главное — flare <b>закончился в момент касания</b>. USPA: руки до упора вниз, когда ноги примерно в <b>1–3 футах</b> от земли.', 'Головне — flare <b>закінчено в момент торкання</b>. USPA: руки до кінця вниз, коли ноги приблизно за <b>1–3 фути</b> від землі.'),
                l('Started late: <b>pull faster</b>.', 'Si empiezas tarde: <b>tira más rápido</b>.', 'Начал поздно — <b>тяни быстрее</b>.', 'Почав пізно — <b>тягни швидше</b>.'),
                l('Started early: <b>pull slower</b>.', 'Si empiezas temprano: <b>tira más lento</b>.', 'Начал рано — <b>тяни медленнее</b>.', 'Почав рано — <b>тягни повільніше</b>.'),
                l(
                  'Flared too high: <b>stop, hold</b> what you have, fly straight, finish as you sink.',
                  '¿Flare demasiado alto? <b>Para, mantén</b> lo que tienes, vuela recto y termina al bajar.',
                  'Начал слишком высоко: <b>остановись, держи</b> то, что есть, лети прямо, дожимай при снижении.',
                  'Почав надто високо: <b>зупинись, тримай</b> те, що є, лети прямо, дотискай під час зниження.',
                ),
                l(
                  'Why hold: letting the toggles back up makes the canopy <b>dive</b>. Stop where you are, finish the flare as you get close, then PLF (USPA).',
                  'Por qué mantener: si dejas subir los batidores, la vela <b>pica</b>. Para donde estás, termina el flare al acercarte al suelo y luego PLF (USPA).',
                  'Почему держать: если отпустить клеванты вверх, купол <b>нырнёт</b>. Остановись там, где есть, дожми flare у самой земли, потом PLF (USPA).',
                  'Чому тримати: якщо відпустити клеванти вгору, купол <b>пірне</b>. Зупинись там, де є, дотисни flare біля самої землі, потім PLF (USPA).',
                ),
                l(
                  'No radio call and the ground is close? <b>Flare anyway</b>: you fly your canopy.',
                  '¿No llega la llamada por radio y el suelo está cerca? <b>Haz el flare igual</b>: tú pilotas tu vela.',
                  'Команды по радио нет, а земля близко? <b>Всё равно делай flare</b>: куполом управляешь ты.',
                  'Команди по радіо немає, а земля близько? <b>Однаково роби flare</b>: куполом керуєш ти.',
                ),
              ],
            },
            {
              type: 'callout',
              title: l('About “5, 4, 3, 2, 1”', 'Sobre “5, 4, 3, 2, 1”', 'Про «5, 4, 3, 2, 1»', 'Про «5, 4, 3, 2, 1»'),
              points: [
                l(
                  'In class we counted it <b>while pulling down</b>.',
                  'En clase lo contábamos <b>mientras tirábamos hacia abajo</b>.',
                  'На занятии мы считали это, <b>пока тянули вниз</b>.',
                  'На занятті ми рахували це, <b>поки тягнули вниз</b>.',
                ),
                l(
                  'A count to keep the pull <b>smooth</b>, not five full seconds.',
                  'Una cuenta para que el tirón sea <b>suave</b>, no cinco segundos completos.',
                  'Это счёт для <b>плавности</b>, а не пять полных секунд.',
                  'Це рахунок для <b>плавності</b>, а не п’ять повних секунд.',
                ),
                l(
                  'Unlike the <b>count</b> after the pull, this one is just a rhythm.',
                  'A diferencia de la <b>cuenta</b> tras abrir, esta es solo un ritmo.',
                  'В отличие от <b>счёта</b> после раскрытия, здесь это просто ритм.',
                  'На відміну від <b>рахунку</b> після розкриття, тут це просто ритм.',
                ),
              ],
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                clip('flare_cue', l('Where to start the flare (this school says 12–15 ft)', 'Dónde empezar el flare (esta escuela dice 12–15 ft)', 'Где начинать flare (в этой школе — 12–15 футов)', 'Де починати flare (у цій школі — 12–15 футів)'), 'Rhythm Skydiving', 'tUFSss3guic', 33),
                clip('flare_land', l('Final, flare, slide, stand', 'Final, flare, deslizar, de pie', 'Финал, flare, скольжение, встал', 'Фінал, flare, ковзання, встав'), 'Rhythm Skydiving', 'tUFSss3guic', 85),
                clip('flare_end', l('Level out just above the ground, slide', 'Nivelar justo sobre el suelo, deslizar', 'Выровняться у самой земли и скользить', 'Вирівнятися біля самої землі й ковзати'), 'Rhythm Skydiving', 'tUFSss3guic', 148),
              ],
            },
          ],
        },
        { type: 'h', id: 'plf', text: l('PLF', 'PLF', 'PLF', 'PLF') },
        {
          type: 'split',
          left: [
            {
              type: 'steps',
              items: [
                {
                  title: l('Feet and knees together, knees soft', 'Pies y rodillas juntos, rodillas un poco flexionadas', 'Ступни и колени вместе, колени чуть согнуты', 'Ступні й коліна разом, коліна трохи зігнуті'),
                  sub: l(
                    '<b>Chin to chest</b>, elbows in, hands on the toggles. Legs slightly forward; <b>don’t reach for the ground</b> with one foot or a hand.',
                    '<b>Barbilla al pecho</b>, codos adentro, manos en los batidores. Piernas un poco adelante; <b>no busques el suelo</b> con un pie ni con una mano.',
                    '<b>Подбородок к груди</b>, локти прижаты, руки на клевантах. Ноги чуть вперёд; <b>не тянись к земле</b> одной ногой или рукой.',
                    '<b>Підборіддя до грудей</b>, лікті притиснуті, руки на клевантах. Ноги трохи вперед; <b>не тягнися до землі</b> однією ногою чи рукою.',
                  ),
                },
                {
                  title: l('Roll along the side', 'Rueda por el costado', 'Перекат по боку', 'Перекат по боку'),
                  sub: l(
                    'Balls of the feet → calf → thigh → hip → side of the back. <b>Five points</b>, one after another. USPA describes the end as rolling through the small of the back, then diagonally across it to the opposite shoulder.',
                    'Parte delantera de la planta → pantorrilla → muslo → cadera → costado de la espalda. <b>Cinco puntos</b>, uno tras otro. USPA describe el final como rodar por la parte baja de la espalda y luego en diagonal hasta el hombro contrario.',
                    'Подушечки стоп → икра → бедро → ягодица сбоку → бок спины. <b>Пять точек</b>, одна за другой. В USPA конец описан так: перекат через поясницу, потом по диагонали через спину к противоположному плечу.',
                    'Подушечки стоп → литка → стегно → сідниця збоку → бік спини. <b>П’ять точок</b>, одна за одною. У USPA кінець описано так: перекат через поперек, потім по діагоналі через спину до протилежного плеча.',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              title: l('On the side, not front-to-back', 'Por el costado, no de frente a espalda', 'По боку, а не с живота на спину', 'По боку, а не з живота на спину'),
              points: [
                l(
                  'Roll along the <b>side</b> of the body, not forward onto the stomach.',
                  'Rueda por el <b>costado</b> del cuerpo, no hacia adelante sobre el estómago.',
                  'Перекат по <b>боку</b>, а не вперёд на живот.',
                  'Перекат по <b>боку</b>, а не вперед на живіт.',
                ),
                l(
                  'Rolling forward or <b>a hand out</b> to catch the ground: hurt arms, collarbones.',
                  'Rodar hacia adelante o <b>sacar una mano</b> para frenar: brazos y clavículas lastimados.',
                  'Перекат вперёд или <b>рука</b>, чтобы «поймать» землю: травмы рук и ключиц.',
                  'Перекат уперед або <b>рука</b>, щоб «зловити» землю: травми рук і ключиць.',
                ),
                l(
                  'Even an imperfect PLF makes injuries <b>less serious</b>.',
                  'Incluso un PLF imperfecto hace las lesiones <b>menos graves</b>.',
                  'Даже неидеальный PLF делает травмы <b>легче</b>.',
                  'Навіть неідеальний PLF робить травми <b>легшими</b>.',
                ),
                l('Be ready for one on <b>every landing</b>.', 'Prepárate para uno en <b>cada aterrizaje</b>.', 'Готовься к нему на <b>каждой посадке</b>.', 'Готуйся до нього на <b>кожній посадці</b>.'),
              ],
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                clip('plf', l('PLF: feet, calf, thigh, hip, back', 'PLF: pies, pantorrilla, muslo, cadera, espalda', 'PLF: стопы, икра, бедро, ягодица, спина', 'PLF: стопи, литка, стегно, сідниця, спина'), 'USPA', 'lCWKPIQuK8Q', 0),
              ],
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'tUFSss3guic', t: 65, label: l('The landing flare', 'El flare de aterrizaje', 'Выравнивание при посадке', 'Вирівнювання під час посадки'), credit: 'Rhythm Skydiving' },
            { yt: 'lCWKPIQuK8Q', t: 0, label: l('Parachute landing fall', 'Caída de aterrizaje en paracaídas (PLF)', 'PLF — приземление с перекатом', 'PLF — приземлення з перекатом'), credit: 'USPA' },
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
                'Куди дивишся, коли починаєш flare?',
              ),
              options: [
                l('Straight down at the ground under you', 'Justo abajo, al suelo debajo de ti', 'Прямо вниз, на землю под собой', 'Просто вниз, на землю під собою'),
                l('Ahead, not straight down at your feet', 'Hacia delante, no justo abajo a tus pies', 'Вперёд, а не прямо вниз под ноги', 'Вперед, а не просто вниз під ноги'),
                l('Up at the canopy, to check its shape', 'Arriba, a la vela, para ver su forma', 'Вверх, на купол, проверить его форму', 'Угору, на купол, перевірити його форму'),
              ],
              answer: 1,
              why: l(
                'Looking straight down makes the ground rush up, and you get the timing wrong. Look ahead: our ground course says at the horizon, USPA says forward and down at about 45°, so you still see the ground.',
                'Mirar justo abajo hace que el suelo se te venga encima y calculas mal el momento. Mira hacia delante: nuestro curso en tierra dice al horizonte, USPA dice adelante y abajo a unos 45°, para seguir viendo el suelo.',
                'Если смотреть прямо вниз, земля «набегает», и ошибаешься с моментом. Смотри вперёд: на нашей наземной подготовке — на горизонт, по USPA — вперёд и вниз примерно под 45°, чтобы видеть землю.',
                'Якщо дивитися просто вниз, земля «набігає», і помиляєшся з моментом. Дивись уперед: на нашій наземній підготовці — на горизонт, за USPA — вперед і вниз приблизно під 45°, щоб бачити землю.',
              ),
            },
            {
              q: l(
                'We counted “5, 4, 3, 2, 1” while flaring. What does that mean?',
                'Contábamos “5, 4, 3, 2, 1” al hacer el flare. ¿Qué significa?',
                'Мы считали «5, 4, 3, 2, 1» во время flare. Что это значит?',
                'Ми рахували «5, 4, 3, 2, 1» під час flare. Що це означає?',
              ),
              options: [
                l('The pull must last exactly five seconds', 'El tirón tiene que durar exactamente cinco segundos', 'Движение должно длиться ровно пять секунд', 'Рух має тривати рівно п’ять секунд'),
                l('Start the flare at 5 ft above the ground', 'Empezar el flare a 5 ft del suelo', 'Начинать flare в 5 футах над землёй', 'Починати flare за 5 футів над землею'),
                l('A rhythm to keep the pull smooth', 'Un ritmo para que el tirón sea suave', 'Ритм, чтобы тянуть плавно', 'Ритм, щоб тягнути плавно'),
              ],
              answer: 2,
              why: l(
                "It's a count, not five full seconds. What matters is a smooth pull that is finished at touchdown.",
                'Es una cuenta, no cinco segundos completos. Lo que importa es un tirón suave que termine al tocar el suelo.',
                'Это счёт, а не пять полных секунд. Главное — плавно и закончить в момент касания.',
                'Це рахунок, а не п’ять повних секунд. Головне — плавно й закінчити в момент торкання.',
              ),
            },
            {
              q: l(
                'You started the flare too high. What now?',
                'Empezaste el flare demasiado alto. ¿Y ahora?',
                'Начал flare слишком высоко. Что теперь?',
                'Почав flare надто високо. Що тепер?',
              ),
              options: [
                l('Let the toggles back up and start again', 'Dejar subir los batidores y empezar de nuevo', 'Отпустить клеванты вверх и начать заново', 'Відпустити клеванти вгору й почати знову'),
                l('Hold what you have, fly straight, finish as you sink', 'Mantener lo que tienes, volar recto y terminar mientras bajas', 'Держать что есть, лететь прямо, дожать при снижении', 'Тримати те, що є, летіти прямо, дотиснути під час зниження'),
                l('Make a turn to lose the extra height', 'Hacer un giro para perder la altura de más', 'Сделать поворот, чтобы сбросить лишнюю высоту', 'Зробити поворот, щоб скинути зайву висоту'),
              ],
              answer: 1,
              why: l(
                'Never let the toggles back up: the canopy would dive. Hold, fly straight, finish near the ground and get ready to PLF.',
                'Nunca dejes subir los batidores: la vela picaría. Mantén, vuela recto, termina cerca del suelo y prepárate para el PLF.',
                'Клеванты вверх не отпускать: купол нырнёт. Держать, лететь прямо, дожать у земли и готовиться к PLF.',
                'Клеванти вгору не відпускати: купол пірне. Тримати, летіти прямо, дотиснути біля землі й готуватися до PLF.',
              ),
            },
            {
              q: l(
                'In a PLF you roll along…',
                'En un PLF ruedas por…',
                'При PLF перекат идёт…',
                'Під час PLF перекат іде…',
              ),
              options: [
                l('the stomach, then the back', 'el estómago y luego la espalda', 'по животу, потом по спине', 'по животу, потім по спині'),
                l('the side: feet, calf, thigh, hip, back', 'el costado: pies, pantorrilla, muslo, cadera, espalda', 'по боку: стопы, икра, бедро, ягодица, спина', 'по боку: стопи, литка, стегно, сідниця, спина'),
                l('your hands first, to catch the ground', 'primero las manos, para frenar', 'сначала на руки, чтобы «поймать» землю', 'спочатку на руки, щоб «зловити» землю'),
              ],
              answer: 1,
              why: l(
                'Along the side, five points one after another. Rolling forward or catching yourself with a hand hurts arms and collarbones.',
                'Por el costado, cinco puntos uno tras otro. Rodar hacia adelante o frenar con la mano lastima brazos y clavículas.',
                'По боку, пять точек одна за другой. Перекат вперёд или упор рукой травмирует руки и ключицы.',
                'По боку, п’ять точок одна за одною. Перекат уперед або спроба спертися на руку травмує руки й ключиці.',
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- test
    {
      id: 'test',
      eyebrow: l('From the ground-school test', 'Del examen del curso en tierra', 'Из теста наземной подготовки', 'З тесту наземної підготовки'),
      title: l('Landing questions', 'Preguntas de aterrizaje', 'Вопросы про приземление', 'Питання про приземлення'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Questions 26–32 of the ground-school written test. <b>Answer out loud</b>, then open the card.',
            'Preguntas 26–32 del examen escrito del curso en tierra. <b>Responde en voz alta</b> y luego abre la tarjeta.',
            'Вопросы 26–32 письменного теста наземной подготовки. <b>Ответь вслух</b>, потом открой карточку.',
            'Питання 26–32 письмового тесту наземної підготовки. <b>Відповідай уголос</b>, потім відкрий картку.',
          ),
        },
        {
          type: 'faq',
          items: [
            {
              n: '26',
              q: l('Draw the landing pattern with its key altitudes.', 'Dibuja el circuito de aterrizaje con sus alturas clave.', 'Нарисуй схему захода с ключевыми высотами.', 'Намалюй схему заходу з ключовими висотами.'),
              a: l(
                '<b>2,500 ft</b>: decide where to go and which side the pattern is on.\n<b>2,000 → 1,000 ft</b>: hold over the holding point.\n<b>900 ft</b>: start the downwind leg.\n<b>600 ft</b>: turn onto base.\n<b>300 ft</b>: turn onto final, into the wind.\n<b>About 10 ft</b>: flare.\nSee <a href="#pattern">the landing pattern</a>.',
                '<b>2,500 ft</b>: decide adónde ir y de qué lado va el circuito.\n<b>2,000 → 1,000 ft</b>: espera sobre el punto de espera.\n<b>900 ft</b>: empieza el tramo con viento en cola.\n<b>600 ft</b>: gira a base.\n<b>300 ft</b>: gira a final, contra el viento.\n<b>Unos 10 ft</b>: flare.\nVer <a href="#pattern">el circuito de aterrizaje</a>.',
                '<b>2 500 футов</b>: решаем, куда лететь и с какой стороны схема.\n<b>2 000 → 1 000 футов</b>: ожидание над точкой.\n<b>900 футов</b>: начало участка по ветру.\n<b>600 футов</b>: поворот на базовую прямую.\n<b>300 футов</b>: поворот на финал, против ветра.\n<b>Около 10 футов</b>: flare.\nСм. <a href="#pattern">схему захода</a>.',
                '<b>2 500 футів</b>: вирішуємо, куди летіти і з якого боку схема.\n<b>2 000 → 1 000 футів</b>: очікування над точкою.\n<b>900 футів</b>: початок ділянки по вітру.\n<b>600 футів</b>: поворот на базову пряму.\n<b>300 футів</b>: поворот на фінал, проти вітру.\n<b>Близько 10 футів</b>: flare.\nДив. <a href="#pattern">схему заходу</a>.',
              ),
            },
            {
              n: '27',
              q: l(
                'At what altitude do you stop major turns, and which turns are allowed?',
                '¿A qué altura dejas de hacer giros grandes y qué giros se permiten?',
                'На какой высоте прекращаем большие развороты и какие развороты разрешены?',
                'На якій висоті припиняємо великі розвороти і які розвороти дозволені?',
              ),
              a: l(
                '<b>300 ft.</b> <q-check/> Below it, only small flat corrections, up to <b>45°</b>. (Question 28 asks about 300 ft too, so the answer key may say <b>1,000 ft</b>: below it, only the 90° pattern turns.)\nThe full ladder (ask your dropzone):\nAbove 1,000 ft: up to <b>180°</b>.\n1,000 → 300 ft: up to <b>90°</b>.',
                '<b>300 ft.</b> <q-check/> Por debajo, solo correcciones pequeñas y planas, hasta <b>45°</b>. (La pregunta 28 también pregunta por 300 ft, así que la respuesta oficial puede ser <b>1,000 ft</b>: por debajo, solo los giros de 90° del circuito.)\nLa escala completa (pregunta en tu zona de salto):\nPor encima de 1,000 ft: hasta <b>180°</b>.\n1,000 → 300 ft: hasta <b>90°</b>.',
                '<b>300 футов.</b> <q-check/> Ниже — только небольшие плоские поправки, до <b>45°</b>. (Вопрос 28 тоже про 300 футов, поэтому в ключе может быть <b>1 000 футов</b>: ниже — только повороты схемы на 90°.)\nВся лесенка (уточни на своей площадке):\nВыше 1 000 футов: до <b>180°</b>.\n1 000 → 300 футов: до <b>90°</b>.',
                '<b>300 футів.</b> <q-check/> Нижче — лише невеликі пласкі поправки, до <b>45°</b>. (Питання 28 теж про 300 футів, тож у ключі може бути <b>1 000 футів</b>: нижче — лише повороти схеми на 90°.)\nУся драбинка (уточни на своєму майданчику):\nВище 1 000 футів: до <b>180°</b>.\n1 000 → 300 футів: до <b>90°</b>.',
              ),
            },
            {
              n: '28',
              q: l(
                'Below what altitude are only minor corrections (45° or less) allowed?',
                '¿Por debajo de qué altura solo se permiten correcciones pequeñas (45° o menos)?',
                'Ниже какой высоты разрешены только небольшие поправки (45° и меньше)?',
                'Нижче якої висоти дозволені лише невеликі поправки (45° і менше)?',
              ),
              a: l('<b>300 ft.</b>', '<b>300 ft.</b>', '<b>300 футов.</b>', '<b>300 футів.</b>'),
            },
            {
              n: '29',
              q: l(
                'When do you start the flare? What if you flare too high?',
                '¿Cuándo empiezas el flare? ¿Y si haces el flare demasiado alto?',
                'Когда начинаем flare? А если начали слишком высоко?',
                'Коли починаємо flare? А якщо почали надто високо?',
              ),
              a: l(
                "<b>About 10 ft (3 m)</b> off the ground. Too high: <b>don't let the toggles back up</b>. Stop, hold what you have, fly straight, finish as you sink and get ready to PLF.",
                '<b>A unos 10 ft (3 m)</b> del suelo. Demasiado alto: <b>no dejes subir los batidores</b>. Para, mantén lo que tienes, vuela recto, termina al bajar y prepárate para el PLF.',
                '<b>Примерно в 10 футах (3 м)</b> от земли. Слишком высоко: <b>клеванты не отпускать вверх</b>. Остановись, держи то, что есть, лети прямо, дожимай при снижении и готовься к PLF.',
                '<b>Приблизно на 10 футах (3 м)</b> над землею. Надто високо: <b>клеванти не відпускати вгору</b>. Зупинись, тримай те, що є, лети прямо, дотискай під час зниження й готуйся до PLF.',
              ),
            },
            {
              n: '30',
              q: l('What is a PLF and why do we do it?', '¿Qué es un PLF y por qué lo hacemos?', 'Что такое PLF и зачем он нужен?', 'Що таке PLF і навіщо він потрібен?'),
              a: l(
                'Parachute landing fall: you land on your feet and <b>roll along the side</b> of the body, so the <b>impact spreads out</b> instead of going into your ankles and legs. Feet and knees together, knees slightly bent, chin to chest, elbows in.',
                'Caída de aterrizaje en paracaídas (PLF): aterrizas sobre los pies y <b>ruedas por el costado</b> del cuerpo, así el <b>impacto se reparte</b> en vez de ir a tobillos y piernas. Pies y rodillas juntos, rodillas un poco flexionadas, barbilla al pecho, codos adentro.',
                'PLF — приземление с перекатом (parachute landing fall): касаешься ногами и <b>перекатываешься по боку</b>, <b>удар распределяется</b> по телу, а не уходит в лодыжки и ноги. Ступни и колени вместе, колени чуть согнуты, подбородок к груди, локти прижаты.',
                'PLF — приземлення з перекатом (parachute landing fall): торкаєшся землі ногами й <b>перекочуєшся по боку</b>, тож <b>удар розподіляється</b> по тілу, а не йде в щиколотки й ноги. Ступні й коліна разом, коліна трохи зігнуті, підборіддя до грудей, лікті притиснуті.',
              ),
            },
            {
              n: '31',
              q: l('The 5 points of contact in a PLF?', '¿Los 5 puntos de contacto en un PLF?', '5 точек касания при PLF?', '5 точок торкання під час PLF?'),
              a: l(
                '1 <b>balls of the feet</b> · 2 side of the <b>calf</b> · 3 side of the <b>thigh</b> · 4 side of the <b>buttock</b> (hip) · 5 side of the <b>back</b> (the “pull-up” muscle, the lat).',
                '1 <b>parte delantera de la planta</b> · 2 costado de la <b>pantorrilla</b> · 3 costado del <b>muslo</b> · 4 costado del <b>glúteo</b> (cadera) · 5 costado de la <b>espalda</b> (el dorsal ancho, el músculo de las dominadas).',
                '1 <b>подушечки стоп</b> · 2 боковая часть <b>икры</b> · 3 боковая часть <b>бедра</b> · 4 <b>ягодица</b> сбоку · 5 бок <b>спины</b> (широчайшая мышца).',
                '1 <b>подушечки стоп</b> · 2 бічна частина <b>литки</b> · 3 бічна частина <b>стегна</b> · 4 <b>сідниця</b> збоку · 5 бік <b>спини</b> (найширший м’яз).',
              ),
            },
            {
              n: '32',
              q: l('The 4 hazards on the ground when landing?', '¿Los 4 peligros en el suelo al aterrizar?', '4 препятствия на земле при посадке?', '4 перешкоди на землі під час посадки?'),
              a: l(
                '<b>Trees, water, buildings, power lines.</b> See <a href="#obstacles">landing on an obstacle</a>.',
                '<b>Árboles, agua, edificios, cables eléctricos.</b> Ver <a href="#obstacles">aterrizar sobre un obstáculo</a>.',
                '<b>Деревья, вода, здания, линии электропередачи.</b> См. <a href="#obstacles">посадку на препятствие</a>.',
                '<b>Дерева, вода, будівлі, лінії електропередачі.</b> Див. <a href="#obstacles">посадку на перешкоду</a>.',
              ),
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: l(
                'In a PLF, what is the 5th point of contact?',
                'En un PLF, ¿cuál es el 5.º punto de contacto?',
                'Какая 5-я точка касания при PLF?',
                'Яка 5-та точка торкання під час PLF?',
              ),
              options: [
                l('The back of the head, chin tucked', 'La nuca, con la barbilla recogida', 'Затылок, подбородок прижат', 'Потилиця, підборіддя притиснуте'),
                l('The side of the back, the lat', 'El costado de la espalda, el dorsal', 'Бок спины, широчайшая мышца', 'Бік спини, найширший м’яз'),
                l('Both hands, palms on the ground', 'Las dos manos, palmas al suelo', 'Обе ладони, упор в землю', 'Обидві долоні, упор у землю'),
              ],
              answer: 1,
              why: l(
                'Question 31: balls of the feet, calf, thigh, buttock, then the side of the back (the lat, the “pull-up” muscle).',
                'Pregunta 31: parte delantera de la planta, pantorrilla, muslo, glúteo y luego el costado de la espalda (el dorsal ancho, el músculo de las dominadas).',
                'Вопрос 31: подушечки стоп, икра, бедро, ягодица, потом бок спины (широчайшая мышца).',
                'Питання 31: подушечки стоп, литка, стегно, сідниця, потім бік спини (найширший м’яз).',
              ),
            },
            {
              q: l(
                'Which of these is one of the 4 hazards on the ground?',
                '¿Cuál de estos es uno de los 4 peligros en el suelo?',
                'Что из этого входит в 4 препятствия на земле?',
                'Що з цього входить до 4 перешкод на землі?',
              ),
              options: [
                l('Tall grass', 'Hierba alta', 'Высокая трава', 'Висока трава'),
                l('Power lines', 'Cables eléctricos', 'Линии электропередачи', 'Лінії електропередачі'),
                l('A dirt road', 'Un camino de tierra', 'Грунтовая дорога', 'Ґрунтова дорога'),
              ],
              answer: 1,
              why: l(
                'Question 32: trees, water, buildings, power lines.',
                'Pregunta 32: árboles, agua, edificios, cables eléctricos.',
                'Вопрос 32: деревья, вода, здания, линии электропередачи.',
                'Питання 32: дерева, вода, будівлі, лінії електропередачі.',
              ),
            },
            {
              q: l(
                'Under canopy at 3,000 ft, another canopy is flying straight at you, head-on. What do you do?',
                'Bajo vela a 3,000 ft, otra vela viene directo hacia ti, de frente. ¿Qué haces?',
                'Под куполом на 3 000 футах на тебя летит другой купол, лоб в лоб. Что делаешь?',
                'Під куполом на 3 000 футах на тебе летить інший купол, лоб у лоб. Що робиш?',
              ),
              options: [
                l('Turn left, away from the pattern side; the other jumper keeps flying straight', 'Giras a la izquierda, lejos del lado del circuito; el otro sigue recto', 'Поворачиваю влево, в сторону от схемы; другой летит прямо', 'Повертаю ліворуч, убік від схеми; інший летить прямо'),
                l('Hold straight and wait; the higher canopy has to move out of your way', 'Sigues recto y esperas; la vela más alta tiene que apartarse', 'Лечу прямо и жду; уходить с пути должен купол, который выше', 'Лечу прямо й чекаю; сходити з дороги має купол, який вище'),
                l('Look, then turn right; the other jumper turns right too', 'Miras y giras a la derecha; el otro también gira a la derecha', 'Смотрю и ухожу вправо; другой тоже уходит вправо', 'Дивлюся й відходжу праворуч; інший теж відходить праворуч'),
              ],
              answer: 2,
              why: l(
                'Head-on, both canopies steer right (USPA SIM 4-1). Look before every turn.',
                'De frente, las dos velas giran a la derecha (USPA SIM 4-1). Mira antes de cada giro.',
                'Лоб в лоб оба купола уходят вправо (USPA SIM 4-1). Смотри перед каждым разворотом.',
                'Лоб у лоб обидва куполи відходять праворуч (USPA SIM 4-1). Дивись перед кожним розворотом.',
              ),
            },
            {
              q: l(
                'At about 150 ft you realise you have started a turn that is too low. What now?',
                'A unos 150 ft te das cuenta de que empezaste un giro demasiado bajo. ¿Y ahora?',
                'Примерно на 150 футах понимаешь, что начал слишком низкий разворот. Что теперь?',
                'Приблизно на 150 футах розумієш, що почав надто низький розворот. Що тепер?',
              ),
              options: [
                l('Opposite toggle down to stop the turn, flare from those brakes, PLF', 'Bajas el batidor contrario para parar el giro, flare desde esos frenos, PLF', 'Противоположную клеванту вниз, чтобы остановить разворот, flare из этих тормозов, PLF', 'Протилежну клеванту вниз, щоб зупинити розворот, flare із цих гальм, PLF'),
                l('Pull the same toggle harder to finish the turn fast, then flare from there', 'Tiras más del mismo batidor para terminar el giro rápido, y flare desde ahí', 'Сильнее тяну ту же клеванту, чтобы быстрее докрутить, потом flare', 'Сильніше тягну ту саму клеванту, щоб швидше докрутити, потім flare'),
                l('Let both toggles all the way up for speed, then a hard flare at the end', 'Subes los dos batidores del todo para ganar velocidad, y un flare fuerte al final', 'Отпускаю обе клеванты до конца ради скорости, потом резкий flare', 'Відпускаю обидві клеванти до кінця заради швидкості, потім різкий flare'),
              ],
              answer: 0,
              why: l(
                'Stop the turn with the opposite toggle, get the canopy back overhead, flare from there and PLF. Hit early? Keep flying the canopy (USPA SIM 4-1).',
                'Para el giro con el batidor contrario, vuelve a tener la vela encima, flare desde ahí y PLF. ¿Tocas antes? Sigue pilotando la vela (USPA SIM 4-1).',
                'Останови разворот противоположной клевантой, верни купол над головой, flare оттуда и PLF. Коснулся раньше? Продолжай управлять куполом (USPA SIM 4-1).',
                'Зупини розворот протилежною клевантою, поверни купол над головою, flare звідти й PLF. Торкнувся раніше? Далі керуй куполом (USPA SIM 4-1).',
              ),
            },
          ],
        },
      ],
    },
  ],
};
