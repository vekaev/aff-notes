import type { Part } from './types';

export const part2: Part = {
  id: 'part2',
  roman: 'II',
  range: { en: '13,500 → 5,500 ft', es: '13,500 → 5,500 ft', ru: '13 500 → 5 500 футов' },
  title: { en: 'Freefall', es: 'Caída libre', ru: 'Свободное падение' },
  chapters: [
    // ---------------------------------------------------------------- body
    {
      id: 'body',
      title: { en: 'Body position: the box', es: 'Posición del cuerpo: la caja (box)', ru: 'Положение тела: «коробочка»' },
      blocks: [
        {
          type: 'split',
          left: [
            {
              type: 'p',
              text: {
                en: 'Right after exit: push the hips down toward the ground and arch. This is the most stable position, belly to earth.',
                es: 'Justo después de salir: empuja la cadera hacia el suelo y arquea. Es la posición más estable, panza a tierra.',
                ru: 'Сразу после отделения: таз толкаем вниз, к земле, и прогибаемся. Это самое устойчивое положение — животом к земле.',
              },
            },
            {
              type: 'steps',
              items: [
                {
                  title: { en: 'Hips down, arch', es: 'Cadera abajo, arquea', ru: 'Таз вниз, прогиб' },
                  sub: { en: 'The hips are the lowest point of the body.', es: 'La cadera es el punto más bajo del cuerpo.', ru: 'Таз — самая нижняя точка тела.' },
                },
                {
                  title: { en: 'Arms square', es: 'Brazos en escuadra', ru: 'Руки «квадратом»' },
                  sub: {
                    en: 'Elbows bent about 90°, hands near head level.',
                    es: 'Codos doblados a unos 90°, manos cerca de la altura de la cabeza.',
                    ru: 'Локти согнуты примерно на 90°, кисти примерно на уровне головы.',
                  },
                },
                {
                  title: { en: 'Thumb-to-ear check', es: 'Pulgares a las orejas', ru: 'Проверка: большие пальцы к ушам' },
                  sub: {
                    en: 'Touch your thumbs to your ears, then open back out: that\'s where square arms are.',
                    es: 'Toca las orejas con los pulgares y vuelve a abrir: ahí están los brazos en escuadra.',
                    ru: 'Приложи большие пальцы к ушам и разведи руки обратно: это и есть руки «квадратом».',
                  },
                },
                {
                  title: { en: 'Legs', es: 'Piernas', ru: 'Ноги' },
                  sub: {
                    en: 'You said "legs together and up". Many schools teach knees about shoulder width, shins up, toes pointed. <q-check/>',
                    es: 'Dijiste "piernas juntas y arriba". Muchas escuelas enseñan rodillas más o menos a la anchura de los hombros, espinillas arriba, puntas de los pies estiradas. <q-check/>',
                    ru: 'Ты сказал «ноги вместе и вверх». Во многих школах учат: колени примерно на ширине плеч, голени вверх, носки вытянуты. <q-check/>',
                  },
                },
              ],
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                {
                  src: 'arch',
                  caption: { en: 'Arch practice on the ground, against a wall', es: 'Práctica del arco en tierra, contra una pared', ru: 'Тренировка прогиба на земле, у стены' },
                  credit: 'Skydive Fundamentals',
                  yt: '7OT3X9lVt8c',
                  t: 19,
                },
                {
                  src: 'tunnel',
                  caption: { en: 'The box in the wind tunnel: hips, knees, chin', es: 'La caja en el túnel de viento: cadera, rodillas, barbilla', ru: 'Коробочка в аэротрубе: таз, колени, подбородок' },
                  credit: 'Rhythm Skydiving',
                  yt: 'YCe5OHjtQF0',
                  t: 129,
                },
              ],
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: '7OT3X9lVt8c', t: 19, label: { en: 'Arch practice on the ground', es: 'Práctica del arco en tierra', ru: 'Тренировка прогиба на земле' }, credit: 'Skydive Fundamentals' },
            { yt: 'YCe5OHjtQF0', t: 0, label: { en: 'Box position in the tunnel', es: 'Posición de caja en el túnel', ru: 'Коробочка в аэротрубе' }, credit: 'Rhythm Skydiving' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'What do you do right after exit?', es: '¿Qué haces justo después de salir?', ru: 'Что делаешь сразу после отделения?' },
              options: [
                { en: 'Push the hips down and arch', es: 'Empujas la cadera hacia abajo y arqueas', ru: 'Толкаешь таз вниз и прогибаешься' },
                { en: 'Look down to find the ground', es: 'Miras abajo para ver el suelo', ru: 'Смотришь вниз, ищешь землю' },
                { en: 'Pull your knees to your chest', es: 'Llevas las rodillas al pecho', ru: 'Подтягиваешь колени к груди' },
              ],
              answer: 0,
              why: {
                en: 'Hips down and arch: belly to earth is the most stable position, with the hips as the lowest point.',
                es: 'Cadera abajo y arco: panza a tierra es la posición más estable, con la cadera como punto más bajo.',
                ru: 'Таз вниз и прогиб: животом к земле — самое устойчивое положение, таз — самая нижняя точка.',
              },
            },
            {
              q: { en: 'How do you find square arms?', es: '¿Cómo encuentras los brazos en escuadra?', ru: 'Как найти положение рук «квадратом»?' },
              options: [
                { en: 'Stretch both arms straight out to the sides', es: 'Estiras los dos brazos rectos a los lados', ru: 'Вытянуть руки прямо в стороны' },
                { en: 'Touch your thumbs to your ears, then open back out', es: 'Tocas las orejas con los pulgares y vuelves a abrir', ru: 'Приложить большие пальцы к ушам и развести руки обратно' },
                { en: 'Hold the chest strap', es: 'Agarras la cinta de pecho', ru: 'Держаться за грудную перемычку' },
              ],
              answer: 1,
              why: {
                en: 'The thumb-to-ear check puts your elbows at about 90° with hands near head level.',
                es: 'Llevar los pulgares a las orejas deja los codos a unos 90° y las manos cerca de la altura de la cabeza.',
                ru: 'Проверка «пальцы к ушам» ставит локти примерно на 90°, кисти — примерно на уровне головы.',
              },
            },
            {
              q: { en: 'In the box, which part of your body is the lowest?', es: 'En la caja, ¿qué parte del cuerpo queda más baja?', ru: 'Какая часть тела в «коробочке» самая нижняя?' },
              options: [
                { en: 'Your head', es: 'La cabeza', ru: 'Голова' },
                { en: 'Your knees', es: 'Las rodillas', ru: 'Колени' },
                { en: 'Your hips', es: 'La cadera', ru: 'Таз' },
              ],
              answer: 2,
              why: {
                en: 'You push the hips down toward the ground, so they are the lowest point of the body.',
                es: 'Empujas la cadera hacia el suelo, así que es el punto más bajo del cuerpo.',
                ru: 'Таз толкаем вниз, к земле, поэтому он — самая нижняя точка тела.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- flow
    {
      id: 'flow',
      title: { en: 'Freefall dive flow', es: 'Plan de salto en caída libre', ru: 'План прыжка в свободном падении' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Tap a line to see the altimeter. Between every block: check altitude.',
            es: 'Toca una línea para ver el altímetro. Entre bloque y bloque: mira la altura.',
            ru: 'Нажми на строку, чтобы увидеть высотомер. Между блоками — проверка высоты.',
          },
        },
        {
          type: 'altimeter',
          rows: [
            {
              alt: '~13,500',
              value: 13.5,
              title: { en: 'Exit, arch', es: 'Salida, arquea', ru: 'Отделение, прогиб' },
              sub: {
                en: 'Hips down, chin up. Exit altitude not confirmed. <q-check/>',
                es: 'Cadera abajo, barbilla arriba. Altura de salida sin confirmar. <q-check/>',
                ru: 'Таз вниз, подбородок вверх. Высота отделения не подтверждена. <q-check/>',
              },
            },
            {
              alt: '↓',
              value: 12.5,
              title: { en: 'Circle of awareness', es: 'Círculo de atención', ru: 'Круг внимания' },
              sub: {
                en: 'Altitude → left instructor → right instructor → chin up → altitude.',
                es: 'Altura → instructor izquierdo → instructor derecho → barbilla arriba → altura.',
                ru: 'Высота → левый инструктор → правый инструктор → подбородок вверх → высота.',
              },
            },
            {
              alt: '↓',
              value: 11.5,
              title: { en: '3 practice touches', es: '3 toques de práctica', ru: '3 тренировочных касания' },
              sub: {
                en: 'Left hand over your head, right hand back to the pilot chute. Back to arch. Three times. Then altitude.',
                es: 'Mano izquierda sobre la cabeza, mano derecha atrás al extractor. De vuelta al arco. Tres veces. Luego la altura.',
                ru: 'Левая рука над головой, правая назад к вытяжному. Обратно в прогиб. Три раза. Потом высота.',
              },
            },
            {
              alt: '↓',
              value: 10,
              title: { en: 'Circle of awareness again', es: 'Círculo de atención otra vez', ru: 'Снова круг внимания' },
              sub: {
                en: 'Left → right → chin up → altitude.',
                es: 'Izquierda → derecha → barbilla arriba → altura.',
                ru: 'Влево → вправо → подбородок вверх → высота.',
              },
            },
            {
              alt: '↓',
              value: 8,
              title: { en: 'Hold the box, check altitude every 3–5 s', es: 'Mantén la caja, mira la altura cada 3–5 s', ru: 'Держим коробочку, высота каждые 3–5 с' },
              sub: {
                en: 'Relax, legs, arch. Answer instructor signals.',
                es: 'Relájate, piernas, arco. Responde a las señales de los instructores.',
                ru: 'Расслабься, ноги, прогиб. Отвечай на жесты инструкторов.',
              },
            },
            {
              alt: '6,000',
              value: 6,
              hot: true,
              title: { en: 'Lock on', es: 'Lock on', ru: 'Только высотомер' },
              sub: { en: 'No more exercises.', es: 'Se acabaron los ejercicios.', ru: 'Больше никаких упражнений.' },
            },
            {
              alt: '5,500',
              value: 5.5,
              hot: true,
              title: { en: 'PULL', es: 'ABRIR', ru: 'РАСКРЫТИЕ' },
              sub: {
                en: 'Look, reach, pull. Then count to five (Part III).',
                es: 'Mira, alcanza, tira. Luego cuenta hasta cinco (Parte III).',
                ru: 'Посмотри, дотянись, выдерни. Потом счёт до пяти (часть III).',
              },
            },
          ],
        },
        {
          type: 'clips',
          items: [
            {
              src: 'coa',
              caption: { en: 'Circle of awareness: horizon, altimeter, instructors', es: 'Círculo de atención: horizonte, altímetro, instructores', ru: 'Круг внимания: горизонт, высотомер, инструкторы' },
              credit: 'Skydive Fundamentals',
              yt: 'LpoztnjW5c8',
              t: 233,
            },
            {
              src: 'touches',
              caption: { en: 'Three practice touches', es: 'Tres toques de práctica', ru: 'Три тренировочных касания' },
              credit: 'Skydive Fundamentals',
              yt: 'LpoztnjW5c8',
              t: 274,
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'LpoztnjW5c8', t: 233, label: { en: 'Circle of awareness and 3 practice touches', es: 'Círculo de atención y 3 toques de práctica', ru: 'Круг внимания и 3 тренировочных касания' }, credit: 'Skydive Fundamentals' },
            { yt: 'zVEcVYljD6Y', t: 10, label: { en: 'Category A jump in the air', es: 'Salto de categoría A en el aire', ru: 'Прыжок категории A в воздухе' }, credit: 'Skydive Palatka' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'What is the order of the circle of awareness?', es: '¿Cuál es el orden del círculo de atención?', ru: 'Какой порядок у круга внимания?' },
              options: [
                { en: 'Altitude → left instructor → right instructor → chin up → altitude', es: 'Altura → instructor izquierdo → instructor derecho → barbilla arriba → altura', ru: 'Высота → левый инструктор → правый инструктор → подбородок вверх → высота' },
                { en: 'Chin up → pull → altitude', es: 'Barbilla arriba → abrir → altura', ru: 'Подбородок вверх → раскрытие → высота' },
                { en: 'Right instructor → ground → altitude', es: 'Instructor derecho → suelo → altura', ru: 'Правый инструктор → земля → высота' },
              ],
              answer: 0,
              why: {
                en: 'You start and finish with the altimeter: altitude, left, right, chin up, altitude.',
                es: 'Empiezas y terminas con el altímetro: altura, izquierda, derecha, barbilla arriba, altura.',
                ru: 'Начинаешь и заканчиваешь высотомером: высота, влево, вправо, подбородок вверх, высота.',
              },
            },
            {
              q: { en: 'How many practice touches do you do?', es: '¿Cuántos toques de práctica haces?', ru: 'Сколько тренировочных касаний делаешь?' },
              options: [
                { en: 'One', es: 'Uno', ru: 'Одно' },
                { en: 'Three', es: 'Tres', ru: 'Три' },
                { en: 'Five', es: 'Cinco', ru: 'Пять' },
              ],
              answer: 1,
              why: {
                en: 'Three times: left hand over your head, right hand back to the pilot chute, back to arch. Then altitude.',
                es: 'Tres veces: mano izquierda sobre la cabeza, mano derecha atrás al extractor, de vuelta al arco. Luego la altura.',
                ru: 'Три раза: левая рука над головой, правая назад к вытяжному, обратно в прогиб. Потом высота.',
              },
            },
            {
              q: { en: 'What happens at 6,000 ft?', es: '¿Qué pasa a 6,000 ft?', ru: 'Что происходит на высоте 6 000 футов?' },
              options: [
                { en: 'Another circle of awareness', es: 'Otro círculo de atención', ru: 'Ещё один круг внимания' },
                { en: 'You pull', es: 'Abres', ru: 'Раскрытие' },
                { en: 'Lock on: no more exercises', es: 'Lock on: se acabaron los ejercicios', ru: 'Только высотомер: больше никаких упражнений' },
              ],
              answer: 2,
              why: {
                en: '6,000 is lock on: stop exercises and watch the altimeter. You pull at 5,500.',
                es: '6,000 es lock on: deja los ejercicios y mira el altímetro. Abres a 5,500.',
                ru: '6 000 — только высотомер: прекращаешь упражнения и смотришь на высотомер. Раскрытие на 5 500.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- altitude
    {
      id: 'altitude',
      title: { en: 'When to check altitude', es: 'Cuándo mirar la altura', ru: 'Когда смотреть на высоту' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Altitude awareness is the number-one job in freefall. Check it:',
            es: 'Controlar la altura es la tarea número uno en caída libre. Mírala:',
            ru: 'Контроль высоты — задача номер один в свободном падении. Смотри на высотомер:',
          },
        },
        {
          type: 'rules',
          items: [
            {
              icon: 'altimeter',
              big: '3–5 s',
              text: {
                en: 'USPA says every 3 seconds; some schools teach about 5. All the time.',
                es: 'La USPA dice cada 3 segundos; algunas escuelas enseñan unos 5. Todo el tiempo.',
                ru: 'USPA: каждые 3 секунды; некоторые школы учат около 5. Постоянно.',
              },
            },
            {
              icon: 'repeat',
              text: { en: 'Before and after every maneuver.', es: 'Antes y después de cada maniobra.', ru: 'До и после каждого манёвра.' },
            },
            {
              icon: 'question',
              text: { en: 'Whenever in doubt.', es: 'Siempre que tengas dudas.', ru: 'Всегда, когда сомневаешься.' },
            },
            {
              icon: 'tap',
              text: {
                en: 'When an instructor signals you to. <q-check/>',
                es: 'Cuando un instructor te lo indique. <q-check/>',
                ru: 'Когда инструктор подаёт знак. <q-check/>',
              },
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          text: {
            en: 'You remembered three reasons; "instructor signal" (a slap on the wrist) is the usual fourth. Your "every 3" is USPA\'s rule: an altitude check every 3 seconds. Overloaded or lost? Default to: altitude, arch, pull at 5,500.',
            es: 'Recordaste tres motivos; "señal del instructor" (una palmada en la muñeca) suele ser el cuarto. Tu "cada 3" es la regla de la USPA: mirar la altura cada 3 segundos. ¿Saturado o perdido? Vuelve a lo básico: altura, arco, abrir a 5,500.',
            ru: 'Ты запомнил три причины; обычно четвёртая — «по знаку инструктора» (хлопок по запястью). Твоё «каждые 3» — это правило USPA: проверка высоты каждые 3 секунды. Перегружен или потерялся? По умолчанию: высота, прогиб, раскрытие на 5 500.',
          },
        },
        {
          type: 'rules',
          items: [
            {
              big: '6,000',
              tone: 'accent',
              title: { en: 'Lock on', es: 'Lock on', ru: 'Только высотомер' },
              text: {
                en: 'Stop all exercises. Watch the altimeter only.',
                es: 'Deja todos los ejercicios. Mira solo el altímetro.',
                ru: 'Прекрати все упражнения. Смотри только на высотомер.',
              },
            },
            {
              big: '5,500',
              tone: 'accent',
              title: { en: 'Pull', es: 'Abrir', ru: 'Раскрытие' },
              text: {
                en: 'Our pull altitude is 5,500 ft, not 5,000.',
                es: 'Nuestra altura de apertura es 5,500 ft, no 5,000.',
                ru: 'Мы раскрываемся на высоте 5 500 футов, а не 5 000.',
              },
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'How often does USPA say to check altitude?', es: '¿Cada cuánto dice la USPA que mires la altura?', ru: 'Как часто, по правилам USPA, нужно смотреть на высоту?' },
              options: [
                { en: 'Every 3 seconds', es: 'Cada 3 segundos', ru: 'Каждые 3 секунды' },
                { en: 'Every 15 seconds', es: 'Cada 15 segundos', ru: 'Каждые 15 секунд' },
                { en: 'Only at 6,000 ft', es: 'Solo a 6,000 ft', ru: 'Только на высоте 6 000 футов' },
              ],
              answer: 0,
              why: {
                en: 'USPA says every 3 seconds; some schools teach about 5. Either way, all the time.',
                es: 'La USPA dice cada 3 segundos; algunas escuelas enseñan unos 5. En todo caso, todo el tiempo.',
                ru: 'USPA: каждые 3 секунды; некоторые школы учат около 5. В любом случае — постоянно.',
              },
            },
            {
              q: { en: 'What is our pull altitude?', es: '¿Cuál es nuestra altura de apertura?', ru: 'На какой высоте мы раскрываемся?' },
              options: [
                { en: '5,000 ft', es: '5,000 ft', ru: '5 000 футов' },
                { en: '5,500 ft', es: '5,500 ft', ru: '5 500 футов' },
                { en: '6,000 ft', es: '6,000 ft', ru: '6 000 футов' },
              ],
              answer: 1,
              why: {
                en: 'We pull at 5,500 ft, not 5,000. 6,000 is lock on.',
                es: 'Abrimos a 5,500 ft, no a 5,000. 6,000 es lock on.',
                ru: 'Раскрываемся на 5 500 футах, а не на 5 000. На 6 000 — только высотомер.',
              },
            },
            {
              q: { en: 'You feel overloaded or lost in freefall. What do you default to?', es: 'Te sientes saturado o perdido en caída libre. ¿A qué vuelves?', ru: 'В свободном падении ты перегружен или потерялся. К чему возвращаешься?' },
              options: [
                { en: 'Look for the instructors until you find them', es: 'Buscar a los instructores hasta encontrarlos', ru: 'Искать инструкторов, пока не найдёшь' },
                { en: 'Repeat the practice touches', es: 'Repetir los toques de práctica', ru: 'Повторить тренировочные касания' },
                { en: 'Altitude, arch, pull at 5,500', es: 'Altura, arco, abrir a 5,500', ru: 'Высота, прогиб, раскрытие на 5 500' },
              ],
              answer: 2,
              why: {
                en: 'When in doubt, go back to the basics: altitude, arch, pull at 5,500.',
                es: 'Ante la duda, vuelve a lo básico: altura, arco, abrir a 5,500.',
                ru: 'Сомневаешься — возвращайся к основам: высота, прогиб, раскрытие на 5 500.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- signals
    {
      id: 'signals',
      title: { en: 'Hand signals', es: 'Señales de mano', ru: 'Жесты инструктора' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'It\'s too loud to talk, so instructors show these right in front of your face, or touch you. Filmed by an AFF school (Skydive Fundamentals); most schools use the same set, but confirm each one with yours.',
            es: 'Hay demasiado ruido para hablar, así que los instructores las muestran justo delante de tu cara o te tocan. Las grabó una escuela AFF (Skydive Fundamentals); la mayoría de las escuelas usa las mismas, pero confirma cada una con la tuya.',
            ru: 'Слишком шумно, чтобы говорить, поэтому инструкторы показывают жесты прямо перед лицом или касаются тебя. Сняты школой AFF (Skydive Fundamentals); в большинстве школ жесты те же, но сверь каждый со своей.',
          },
        },
        {
          type: 'cards',
          items: [
            {
              clip: 's_pull',
              tone: 'key',
              name: { en: 'Pull', es: 'Abre', ru: 'Раскрывайся' },
              what: { en: 'One finger pointed, in any direction.', es: 'Un dedo apuntando, en cualquier dirección.', ru: 'Один вытянутый палец, в любую сторону.' },
              act: {
                en: 'Pull right now; you\'ll talk about why on the ground.',
                es: 'Abre ahora mismo; el porqué lo hablarán en tierra.',
                ru: 'Раскрывайся сразу; почему — обсудите на земле.',
              },
            },
            {
              clip: 's_arch',
              name: { en: 'Arch', es: 'Arquea', ru: 'Прогнись' },
              what: {
                en: 'Thumb down. This is the "thumb down" you remembered. <q-check/>',
                es: 'Pulgar abajo. Este es el "pulgar abajo" que recordabas. <q-check/>',
                ru: 'Большой палец вниз. Это тот самый «палец вниз», который ты запомнил. <q-check/>',
              },
              act: {
                en: 'Push your hips forward / down, arch more.',
                es: 'Empuja la cadera hacia adelante / abajo, arquea más.',
                ru: 'Таз вперёд / вниз, прогнись сильнее.',
              },
            },
            {
              clip: 's_legsout',
              name: { en: 'Legs out', es: 'Estira las piernas', ru: 'Выпрями ноги' },
              what: { en: 'Two fingers, V.', es: 'Dos dedos en V.', ru: 'Два пальца буквой V.' },
              act: {
                en: 'Smoothly extend your legs until you get a thumbs up.',
                es: 'Estira las piernas suavemente hasta que te hagan pulgar arriba.',
                ru: 'Плавно выпрямляй ноги, пока не покажут «палец вверх».',
              },
            },
            {
              clip: 's_good',
              name: { en: 'Good', es: 'Bien', ru: 'Хорошо' },
              what: { en: 'Thumbs up.', es: 'Pulgar arriba.', ru: 'Большой палец вверх.' },
              act: { en: 'Hold what you have now.', es: 'Mantén la posición que tienes.', ru: 'Так и держи.' },
            },
            {
              clip: 's_relax',
              name: { en: 'Relax', es: 'Relájate', ru: 'Расслабься' },
              what: { en: 'Shaking, floppy hand.', es: 'Mano floja que se sacude.', ru: 'Расслабленная трясущаяся кисть.' },
              act: {
                en: 'Deep breath, loosen up, shake your hands.',
                es: 'Respira hondo, aflójate, sacude las manos.',
                ru: 'Глубокий вдох, расслабься, потряси кистями.',
              },
            },
            {
              clip: 's_arms',
              name: { en: 'Arms 90/90', es: 'Brazos 90/90', ru: 'Руки 90/90' },
              what: { en: 'Thumb and pinky out, an "L".', es: 'Pulgar y meñique extendidos, una "L".', ru: 'Большой палец и мизинец в стороны, буква «L».' },
              act: {
                en: 'Check arm position: 90° at the shoulder, 90° at the elbow.',
                es: 'Revisa la posición de los brazos: 90° en el hombro, 90° en el codo.',
                ru: 'Проверь положение рук: 90° в плече, 90° в локте.',
              },
            },
            {
              clip: 's_toetap',
              name: { en: 'Toe taps', es: 'Toque de puntas', ru: 'Стукни носками' },
              what: { en: 'Bent flat hand.', es: 'Mano plana doblada.', ru: 'Согнутая ладонь.' },
              act: {
                en: 'Legs too wide or uneven: tap your toes together and even them out.',
                es: 'Piernas demasiado abiertas o disparejas: junta las puntas de los pies con un toque y emparéjalas.',
                ru: 'Ноги слишком широко или неровно: стукни носками друг о друга и выровняй.',
              },
            },
            {
              clip: 's_coa',
              name: { en: 'Circle of awareness', es: 'Círculo de atención', ru: 'Круг внимания' },
              what: { en: 'Fingers bunched.', es: 'Dedos juntos en punta.', ru: 'Пальцы собраны в щепоть.' },
              act: { en: 'Do your circle of awareness now.', es: 'Haz tu círculo de atención ahora.', ru: 'Сделай круг внимания сейчас.' },
            },
            {
              clip: 's_touch',
              name: { en: 'Practice touch', es: 'Toque de práctica', ru: 'Тренировочное касание' },
              what: { en: 'Fist.', es: 'Puño.', ru: 'Кулак.' },
              act: { en: 'Do one more practice touch, slowly.', es: 'Haz un toque de práctica más, despacio.', ru: 'Сделай ещё одно тренировочное касание, медленно.' },
            },
            {
              clip: 's_chin',
              name: { en: 'Chin up', es: 'Barbilla arriba', ru: 'Подбородок вверх' },
              what: { en: 'Tap on the chin.', es: 'Toque en la barbilla.', ru: 'Касание по подбородку.' },
              act: { en: 'Head up, look forward.', es: 'Cabeza arriba, mira al frente.', ru: 'Подними голову, смотри вперёд.' },
            },
            {
              clip: 's_alt',
              name: { en: 'Check altitude', es: 'Mira la altura', ru: 'Проверь высоту' },
              what: { en: 'Slap or tap on your wrist.', es: 'Palmada o toque en la muñeca.', ru: 'Хлопок или касание по запястью.' },
              act: { en: 'Look at the altimeter.', es: 'Mira el altímetro.', ru: 'Посмотри на высотомер.' },
            },
            {
              name: { en: 'Shaking you on exit', es: 'Te sacuden al salir', ru: 'Трясут после отделения' },
              what: {
                en: 'An instructor shakes your harness right after exit.',
                es: 'Un instructor sacude tu arnés justo después de salir.',
                ru: 'Инструктор трясёт тебя за подвесную систему сразу после отделения.',
              },
              act: {
                en: 'Push hips further forward, chin up.',
                es: 'Empuja más la cadera hacia adelante, barbilla arriba.',
                ru: 'Таз ещё сильнее вперёд, подбородок вверх.',
              },
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'V4rn53L4isw', t: 105, label: { en: 'All freefall hand signals', es: 'Todas las señales de mano en caída libre', ru: 'Все жесты в свободном падении' }, credit: 'Skydive Fundamentals' },
            { yt: 'o6hGuKffq1k', t: 399, label: { en: 'Signals, longer version', es: 'Señales, versión larga', ru: 'Жесты, подробная версия' }, credit: 'Skydive Fundamentals' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'An instructor shows you one finger pointed in any direction. What do you do?', es: 'Un instructor te muestra un dedo apuntando en cualquier dirección. ¿Qué haces?', ru: 'Инструктор показывает тебе один палец, направленный в любую сторону. Что делаешь?' },
              options: [
                { en: 'Turn the way the finger points', es: 'Girar hacia donde apunta el dedo', ru: 'Повернуть туда, куда показывает палец' },
                { en: 'Pull right now', es: 'Abrir ahora mismo', ru: 'Раскрыться сразу' },
                { en: 'Check your altimeter', es: 'Mirar el altímetro', ru: 'Посмотреть на высотомер' },
              ],
              answer: 1,
              why: {
                en: 'One finger pointed means pull, right now. You\'ll talk about why on the ground.',
                es: 'Un dedo apuntando significa abrir, ahora mismo. El porqué lo hablarán en tierra.',
                ru: 'Один палец — раскрывайся сразу. Почему — обсудите на земле.',
              },
            },
            {
              q: { en: 'An instructor slaps or taps your wrist. What does it mean?', es: 'Un instructor te da una palmada o un toque en la muñeca. ¿Qué significa?', ru: 'Инструктор хлопает или касается твоего запястья. Что это значит?' },
              options: [
                { en: 'Check altitude', es: 'Mira la altura', ru: 'Проверь высоту' },
                { en: 'Relax', es: 'Relájate', ru: 'Расслабься' },
                { en: 'Legs out', es: 'Estira las piernas', ru: 'Выпрями ноги' },
              ],
              answer: 0,
              why: {
                en: 'A slap or tap on the wrist means look at the altimeter.',
                es: 'Una palmada o un toque en la muñeca significa mirar el altímetro.',
                ru: 'Хлопок или касание по запястью — посмотри на высотомер.',
              },
            },
            {
              q: { en: 'You see two fingers in a V. What do you do?', es: 'Ves dos dedos en V. ¿Qué haces?', ru: 'Видишь два пальца буквой V. Что делаешь?' },
              options: [
                { en: 'Two more practice touches', es: 'Dos toques de práctica más', ru: 'Ещё два тренировочных касания' },
                { en: 'Bring your knees to your chest', es: 'Llevar las rodillas al pecho', ru: 'Подтянуть колени к груди' },
                { en: 'Smoothly extend your legs until you get a thumbs up', es: 'Estirar las piernas suavemente hasta que te hagan pulgar arriba', ru: 'Плавно выпрямлять ноги, пока не покажут «палец вверх»' },
              ],
              answer: 2,
              why: {
                en: 'V is legs out. Extend smoothly; a thumbs up means good, hold it.',
                es: 'La V es estirar las piernas. Estíralas suavemente; el pulgar arriba significa bien, mantenlo así.',
                ru: 'V — выпрями ноги. Выпрямляй плавно; «палец вверх» значит «хорошо», так и держи.',
              },
            },
            {
              q: { en: 'In the filmed signals, what does thumb down mean?', es: 'En las señales grabadas, ¿qué significa pulgar abajo?', ru: 'Что значит «палец вниз» в снятых жестах?' },
              options: [
                { en: 'Go lower, dive', es: 'Baja más, en picada', ru: 'Ниже, пикируй' },
                { en: 'Arch: push your hips forward, arch more', es: 'Arquea: empuja la cadera hacia adelante, arquea más', ru: 'Прогнись: таз вперёд, прогнись сильнее' },
                { en: 'Something is wrong, pull', es: 'Algo va mal, abre', ru: 'Что-то не так, раскрывайся' },
              ],
              answer: 1,
              why: {
                en: 'Thumb down is arch: hips forward, arch more. Confirm it with your school.',
                es: 'Pulgar abajo es arquear: cadera adelante, arquea más. Confírmalo con tu escuela.',
                ru: 'Палец вниз — прогиб: таз вперёд, прогнись сильнее. Сверь со своей школой.',
              },
            },
          ],
        },
      ],
    },
  ],
};
