import type { Part } from './types';

export const part2: Part = {
  id: 'part2',
  roman: 'II',
  range: { en: '13,000 → 5,500 ft', es: '13,000 → 5,500 ft', uk: '13 000 → 5 500 футів', ru: '13 000 → 5 500 футов' },
  title: { en: 'Freefall', es: 'Caída libre', uk: 'Вільне падіння', ru: 'Свободное падение' },
  chapters: [
    // ---------------------------------------------------------------- body
    {
      id: 'body',
      title: { en: 'Body position: the box', es: 'Posición del cuerpo: la caja (box)', uk: 'Положення тіла: «коробочка»', ru: 'Положение тела: «коробочка»' },
      blocks: [
        {
          type: 'split',
          left: [
            {
              type: 'p',
              text: {
                en: 'On exit: <b>hips forward, into the wind</b>, chin up. A few seconds later you\'re <b>belly to earth</b>: the hips are the lowest point and you <b>arch</b>. This is the most stable position.',
                es: 'Al salir: <b>cadera adelante, contra el viento</b>, barbilla arriba. Unos segundos después estás <b>panza a tierra</b>: la cadera es el punto más bajo y <b>arqueas</b>. Es la posición más estable.',
                uk: 'На відокремленні: <b>таз уперед, назустріч потоку</b>, підборіддя вгору. За кілька секунд ти <b>животом до землі</b>: таз — найнижча точка, і ти <b>прогинаєшся</b>. Це найстійкіше положення.',
                ru: 'На отделении: <b>таз вперёд, навстречу потоку</b>, подбородок вверх. Через несколько секунд ты <b>животом к земле</b>: таз — самая нижняя точка, и ты <b>прогибаешься</b>. Это самое устойчивое положение.',
              },
            },
            {
              type: 'steps',
              items: [
                {
                  title: { en: 'Hips forward, arch', es: 'Cadera adelante, arquea', uk: 'Таз уперед, прогин', ru: 'Таз вперёд, прогиб' },
                  sub: {
                    en: 'Belly to earth, "forward" means <b>toward the ground</b>: the hips are the <b>lowest point</b> of the body.',
                    es: 'Panza a tierra, "adelante" significa <b>hacia el suelo</b>: la cadera es el <b>punto más bajo</b> del cuerpo.',
                    uk: 'Коли ти животом до землі, «уперед» означає <b>до землі</b>: таз — <b>найнижча точка</b> тіла.',
                    ru: 'Когда ты животом к земле, «вперёд» значит <b>к земле</b>: таз — <b>самая нижняя точка</b> тела.',
                  },
                },
                {
                  title: { en: 'Arms square', es: 'Brazos en escuadra', uk: 'Руки «квадратом»', ru: 'Руки «квадратом»' },
                  sub: {
                    en: 'Elbows bent about <b>90°</b>, hands near <b>head level</b>.',
                    es: 'Codos doblados a unos <b>90°</b>, manos cerca de la <b>altura de la cabeza</b>.',
                    uk: 'Лікті зігнуті приблизно на <b>90°</b>, кисті приблизно на <b>рівні голови</b>.',
                    ru: 'Локти согнуты примерно на <b>90°</b>, кисти примерно на <b>уровне головы</b>.',
                  },
                },
                {
                  title: { en: 'Thumb-to-ear check', es: 'Pulgares a las orejas', uk: 'Перевірка: великі пальці до вух', ru: 'Проверка: большие пальцы к ушам' },
                  sub: {
                    en: 'Touch your <b>thumbs to your ears</b>, then <b>open your arms out to the sides</b>: that\'s where square arms are.',
                    es: 'Toca las <b>orejas con los pulgares</b> y <b>abre los brazos a los lados</b>: ahí están los brazos en escuadra.',
                    uk: 'Приклади <b>великі пальці до вух</b> і <b>розведи руки в сторони</b>: це і є руки «квадратом».',
                    ru: 'Приложи <b>большие пальцы к ушам</b> и <b>разведи руки в стороны</b>: это и есть руки «квадратом».',
                  },
                },
                {
                  title: { en: 'Legs', es: 'Piernas', uk: 'Ноги', ru: 'Ноги' },
                  sub: {
                    en: 'Knees about <b>shoulder width</b>, legs <b>slightly extended</b> (knees bent about <b>45°</b>), toes pointed (USPA). Some instructors say "legs together and up": which does your school want? <q-check/>',
                    es: 'Rodillas más o menos a la <b>anchura de los hombros</b>, piernas <b>un poco estiradas</b> (rodillas dobladas unos <b>45°</b>), puntas de los pies estiradas (USPA). Algunos instructores dicen "piernas juntas y arriba": ¿qué pide tu escuela? <q-check/>',
                    uk: 'Коліна приблизно на <b>ширині плечей</b>, ноги <b>трохи випрямлені</b> (коліна зігнуті приблизно на <b>45°</b>), носки витягнуті (USPA). Деякі інструктори кажуть «ноги разом і вгору»: як навчає твоя школа? <q-check/>',
                    ru: 'Колени примерно на <b>ширине плеч</b>, ноги <b>слегка выпрямлены</b> (колени согнуты примерно на <b>45°</b>), носки вытянуты (USPA). Некоторые инструкторы говорят «ноги вместе и вверх»: как учит твоя школа? <q-check/>',
                  },
                },
                {
                  title: { en: 'Relax, breathe', es: 'Relájate, respira', uk: 'Розслабся, дихай', ru: 'Расслабься, дыши' },
                  sub: {
                    en: 'USPA cue: <b>altitude, arch, legs, relax</b>. A <b>stiff</b> body is one of the most common student faults.',
                    es: 'La consigna de la USPA: <b>altura, arco, piernas, relájate</b>. Un cuerpo <b>rígido</b> es uno de los fallos más comunes del alumno.',
                    uk: 'Підказка USPA: <b>висота, прогин, ноги, розслабся</b>. <b>Скуте</b> тіло — одна з найчастіших помилок студента.',
                    ru: 'Подсказка USPA: <b>высота, прогиб, ноги, расслабься</b>. <b>Скованное</b> тело — одна из самых частых ошибок студента.',
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
                  caption: { en: 'Arch practice on the ground, against a wall', es: 'Práctica del arco en tierra, contra una pared', uk: 'Тренування прогину на землі, біля стіни', ru: 'Тренировка прогиба на земле, у стены' },
                  credit: 'Skydive Fundamentals',
                  yt: '7OT3X9lVt8c',
                  t: 19,
                },
                {
                  src: 'tunnel',
                  caption: { en: 'The box in the wind tunnel: hips, knees, chin', es: 'La caja en el túnel de viento: cadera, rodillas, barbilla', uk: 'Коробочка в аеротрубі: таз, коліна, підборіддя', ru: 'Коробочка в аэротрубе: таз, колени, подбородок' },
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
            { yt: '7OT3X9lVt8c', t: 19, label: { en: 'Arch practice on the ground', es: 'Práctica del arco en tierra', uk: 'Тренування прогину на землі', ru: 'Тренировка прогиба на земле' }, credit: 'Skydive Fundamentals' },
            { yt: 'YCe5OHjtQF0', t: 0, label: { en: 'Box position in the tunnel', es: 'Posición de caja en el túnel', uk: 'Коробочка в аеротрубі', ru: 'Коробочка в аэротрубе' }, credit: 'Rhythm Skydiving' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'What do you do right after exit?', es: '¿Qué haces justo después de salir?', uk: 'Що робиш одразу після відокремлення?', ru: 'Что делаешь сразу после отделения?' },
              options: [
                { en: 'Hips forward into the wind, chin up', es: 'Cadera adelante contra el viento, barbilla arriba', uk: 'Таз уперед назустріч потоку, підборіддя вгору', ru: 'Таз вперёд навстречу потоку, подбородок вверх' },
                { en: 'Look straight down to find the ground', es: 'Miras hacia abajo para buscar el suelo', uk: 'Дивишся вниз, щоб знайти землю', ru: 'Смотришь вниз, чтобы найти землю' },
                { en: 'Pull your knees up to your chest', es: 'Llevas las rodillas hacia el pecho', uk: 'Підтягуєш коліна до грудей', ru: 'Подтягиваешь колени к груди' },
              ],
              answer: 0,
              why: {
                en: 'On exit you face the wind, not the ground: hips into it, chin up. A few seconds later you\'re belly to earth with the hips lowest.',
                es: 'Al salir miras al viento, no al suelo: cadera contra él, barbilla arriba. Unos segundos después estás panza a tierra con la cadera como punto más bajo.',
                uk: 'На відокремленні ти обличчям до потоку, а не до землі: таз назустріч йому, підборіддя вгору. За кілька секунд ти животом до землі, таз — найнижче.',
                ru: 'На отделении ты лицом к потоку, а не к земле: таз навстречу ему, подбородок вверх. Через несколько секунд ты животом к земле, таз — ниже всего.',
              },
            },
            {
              q: { en: 'How do you find square arms?', es: '¿Cómo encuentras los brazos en escuadra?', uk: 'Як знайти положення рук «квадратом»?', ru: 'Как найти положение рук «квадратом»?' },
              options: [
                { en: 'Stretch both arms straight out to the sides', es: 'Estiras los dos brazos rectos a los lados', uk: 'Витягнути руки прямо в сторони', ru: 'Вытянуть руки прямо в стороны' },
                { en: 'Thumbs to your ears, then arms out to the sides', es: 'Pulgares a las orejas y luego brazos a los lados', uk: 'Пальці до вух, потім розвести руки в сторони', ru: 'Пальцы к ушам, потом развести руки в стороны' },
                { en: 'Hold the chest strap with both hands', es: 'Agarras la cinta de pecho con las dos manos', uk: 'Триматися обома руками за грудну перемичку', ru: 'Держаться обеими руками за грудную перемычку' },
              ],
              answer: 1,
              why: {
                en: 'The thumb-to-ear check puts your elbows at about 90° with hands near head level.',
                es: 'Llevar los pulgares a las orejas deja los codos a unos 90° y las manos cerca de la altura de la cabeza.',
                uk: 'Перевірка «пальці до вух» ставить лікті приблизно на 90°, кисті — приблизно на рівні голови.',
                ru: 'Проверка «пальцы к ушам» ставит локти примерно на 90°, кисти — примерно на уровне головы.',
              },
            },
            {
              q: { en: 'Where are your legs in the box (USPA)?', es: '¿Dónde van las piernas en la caja (USPA)?', uk: 'Як тримати ноги в «коробочці» (USPA)?', ru: 'Как держать ноги в «коробочке» (USPA)?' },
              options: [
                { en: 'Knees tucked under your belly, feet crossed', es: 'Rodillas bajo el vientre, pies cruzados', uk: 'Коліна під животом, ступні схрещені', ru: 'Колени под животом, ступни скрещены' },
                { en: 'Legs straight and locked, feet touching', es: 'Piernas rectas y rígidas, pies juntos', uk: 'Ноги прямі й напружені, ступні разом', ru: 'Ноги прямые и напряжены, ступни вместе' },
                { en: 'Knees shoulder width, legs slightly extended', es: 'Rodillas a la anchura de los hombros, piernas un poco estiradas', uk: 'Коліна на ширині плечей, ноги трохи випрямлені', ru: 'Колени на ширине плеч, ноги слегка выпрямлены' },
              ],
              answer: 2,
              why: {
                en: 'USPA neutral position: knees about shoulder width, legs slightly extended (knees about 45°), toes pointed.',
                es: 'Posición neutra de la USPA: rodillas más o menos a la anchura de los hombros, piernas un poco estiradas (rodillas a unos 45°), puntas estiradas.',
                uk: 'Нейтральне положення за USPA: коліна приблизно на ширині плечей, ноги трохи випрямлені (коліна приблизно 45°), носки витягнуті.',
                ru: 'Нейтральное положение по USPA: колени примерно на ширине плеч, ноги слегка выпрямлены (колени примерно 45°), носки вытянуты.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- flow
    {
      id: 'flow',
      title: { en: 'Freefall dive flow', es: 'Plan de salto en caída libre', uk: 'План стрибка у вільному падінні', ru: 'План прыжка в свободном падении' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Tap a line to see the altimeter. Between every block: <b>check altitude</b>.',
            es: 'Toca una línea para ver el altímetro. Entre bloque y bloque: <b>mira la altura</b>.',
            uk: 'Натисни на рядок, щоб побачити висотомір. Між блоками — <b>перевірка висоти</b>.',
            ru: 'Нажми на строку, чтобы увидеть высотомер. Между блоками — <b>проверка высоты</b>.',
          },
        },
        {
          type: 'altimeter',
          rows: [
            {
              alt: '13,000',
              value: 13,
              title: { en: 'Exit, arch', es: 'Salida, arquea', uk: 'Відокремлення, прогин', ru: 'Отделение, прогиб' },
              sub: {
                en: '<b>Hips into the wind</b>, chin up. Then <b>breathe</b> and check your body position.',
                es: '<b>Cadera contra el viento</b>, barbilla arriba. Luego <b>respira</b> y revisa tu posición.',
                uk: '<b>Таз назустріч потоку</b>, підборіддя вгору. Потім <b>вдихни</b> й перевір положення тіла.',
                ru: '<b>Таз навстречу потоку</b>, подбородок вверх. Потом <b>вдохни</b> и проверь положение тела.',
              },
            },
            {
              alt: '↓',
              value: 12.5,
              title: { en: 'Circle of awareness', es: 'Círculo de atención', uk: 'Коло уваги', ru: 'Круг внимания' },
              sub: {
                en: '<b>Altitude</b> → left instructor → right instructor → chin up (horizon) → <b>altitude</b>.',
                es: '<b>Altura</b> → instructor izquierdo → instructor derecho → barbilla arriba (horizonte) → <b>altura</b>.',
                uk: '<b>Висота</b> → лівий інструктор → правий інструктор → підборіддя вгору (горизонт) → <b>висота</b>.',
                ru: '<b>Высота</b> → левый инструктор → правый инструктор → подбородок вверх (горизонт) → <b>высота</b>.',
              },
            },
            {
              alt: '↓',
              value: 11.5,
              title: { en: '3 practice touches', es: '3 toques de práctica', uk: '3 тренувальні дотики', ru: '3 тренировочных касания' },
              sub: {
                en: 'Left hand over your head, right hand back to the <b>pilot chute</b>. Back to arch. <b>Three times</b>. Then altitude.',
                es: 'Mano izquierda sobre la cabeza, mano derecha atrás al <b>extractor</b>. De vuelta al arco. <b>Tres veces</b>. Luego la altura.',
                uk: 'Ліва рука над головою, права назад до <b>витяжного парашута</b>. Знову в прогин. <b>Три рази</b>. Потім висота.',
                ru: 'Левая рука над головой, правая назад к <b>вытяжному</b>. Обратно в прогиб. <b>Три раза</b>. Потом высота.',
              },
            },
            {
              alt: '↓',
              value: 10,
              title: { en: 'Circle of awareness again', es: 'Círculo de atención otra vez', uk: 'Знову коло уваги', ru: 'Снова круг внимания' },
              sub: {
                en: 'Left → right → chin up (horizon) → <b>altitude</b>.',
                es: 'Izquierda → derecha → barbilla arriba (horizonte) → <b>altura</b>.',
                uk: 'Ліворуч → праворуч → підборіддя вгору (горизонт) → <b>висота</b>.',
                ru: 'Влево → вправо → подбородок вверх (горизонт) → <b>высота</b>.',
              },
            },
            {
              alt: '↓',
              value: 8,
              title: { en: 'Hold the box, check altitude every 3 s', es: 'Mantén la caja, mira la altura cada 3 s', uk: 'Тримаємо коробочку, висота кожні 3 с', ru: 'Держим коробочку, высота каждые 3 с' },
              sub: {
                en: 'Relax, legs, arch. Answer <b>instructor signals</b>.',
                es: 'Relájate, piernas, arco. Responde a las <b>señales de los instructores</b>.',
                uk: 'Розслабся, ноги, прогин. Відповідай на <b>жести інструкторів</b>.',
                ru: 'Расслабься, ноги, прогиб. Отвечай на <b>жесты инструкторов</b>.',
              },
            },
            {
              alt: '6,000',
              value: 6,
              hot: true,
              title: { en: 'Lock on', es: 'Lock on', uk: 'Лише висотомір', ru: 'Только высотомер' },
              sub: { en: '<b>No more</b> exercises.', es: '<b>Se acabaron</b> los ejercicios.', uk: 'Більше <b>жодних</b> вправ.', ru: 'Больше <b>никаких</b> упражнений.' },
            },
            {
              alt: '5,500',
              value: 5.5,
              hot: true,
              title: { en: 'PULL', es: 'ABRIR', uk: 'РОЗКРИТТЯ', ru: 'РАСКРЫТИЕ' },
              sub: {
                en: 'Wave off just before you pull, if your school teaches it <q-check/>. Then <b>look, reach, throw</b> and count to five (Part III).',
                es: 'Haz el wave-off justo antes de abrir, si tu escuela lo enseña <q-check/>. Luego <b>mira, alcanza, lanza</b> y cuenta hasta cinco (Parte III).',
                uk: 'Відмашка просто перед розкриттям, якщо так навчає твоя школа <q-check/>. Потім <b>подивись, дотягнись, викинь</b> і рахуй до п’яти (частина III).',
                ru: 'Отмашка прямо перед раскрытием, если так учит твоя школа <q-check/>. Потом <b>посмотри, дотянись, выбрось</b> и считай до пяти (часть III).',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'red',
          text: {
            en: 'Lost <b>one</b> instructor: <b>carry on</b> with the dive. Lost <b>both</b>: <b>pull now</b>.',
            es: '¿Perdiste a <b>un</b> instructor? <b>Sigue</b> con el salto. ¿Perdiste a <b>los dos</b>? <b>Abre ya</b>.',
            uk: 'Втратив <b>одного</b> інструктора — <b>продовжуй</b> стрибок. Втратив <b>обох</b> — <b>розкривайся одразу</b>.',
            ru: 'Потерял <b>одного</b> инструктора — <b>продолжай</b> прыжок. Потерял <b>обоих</b> — <b>раскрывайся сразу</b>.',
          },
        },
        {
          type: 'clips',
          items: [
            {
              src: 'coa',
              caption: { en: 'Circle of awareness: horizon, altimeter, instructors', es: 'Círculo de atención: horizonte, altímetro, instructores', uk: 'Коло уваги: горизонт, висотомір, інструктори', ru: 'Круг внимания: горизонт, высотомер, инструкторы' },
              credit: 'Skydive Fundamentals',
              yt: 'LpoztnjW5c8',
              t: 233,
            },
            {
              src: 'touches',
              caption: { en: 'Three practice touches', es: 'Tres toques de práctica', uk: 'Три тренувальні дотики', ru: 'Три тренировочных касания' },
              credit: 'Skydive Fundamentals',
              yt: 'LpoztnjW5c8',
              t: 274,
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'LpoztnjW5c8', t: 233, label: { en: 'Circle of awareness and 3 practice touches', es: 'Círculo de atención y 3 toques de práctica', uk: 'Коло уваги і 3 тренувальні дотики', ru: 'Круг внимания и 3 тренировочных касания' }, credit: 'Skydive Fundamentals' },
            { yt: 'zVEcVYljD6Y', t: 10, label: { en: 'Category A jump in the air', es: 'Salto de categoría A en el aire', uk: 'Стрибок категорії A в повітрі', ru: 'Прыжок категории A в воздухе' }, credit: 'Skydive Palatka' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'What is the order of the circle of awareness?', es: '¿Cuál es el orden del círculo de atención?', uk: 'Який порядок у кола уваги?', ru: 'Какой порядок у круга внимания?' },
              options: [
                { en: 'Altitude → left instructor → right instructor → chin up → altitude', es: 'Altura → instructor izquierdo → instructor derecho → barbilla arriba → altura', uk: 'Висота → лівий інструктор → правий інструктор → підборіддя вгору → висота', ru: 'Высота → левый инструктор → правый инструктор → подбородок вверх → высота' },
                { en: 'Left instructor → right instructor → altitude → chin up → pull', es: 'Instructor izquierdo → instructor derecho → altura → barbilla arriba → abrir', uk: 'Лівий інструктор → правий інструктор → висота → підборіддя вгору → розкриття', ru: 'Левый инструктор → правый инструктор → высота → подбородок вверх → раскрытие' },
                { en: 'Chin up → right instructor → left instructor → ground → altitude', es: 'Barbilla arriba → instructor derecho → instructor izquierdo → suelo → altura', uk: 'Підборіддя вгору → правий інструктор → лівий інструктор → земля → висота', ru: 'Подбородок вверх → правый инструктор → левый инструктор → земля → высота' },
              ],
              answer: 0,
              why: {
                en: 'You start and finish with the altimeter: altitude, left, right, chin up, altitude.',
                es: 'Empiezas y terminas con el altímetro: altura, izquierda, derecha, barbilla arriba, altura.',
                uk: 'Починаєш і закінчуєш висотоміром: висота, ліворуч, праворуч, підборіддя вгору, висота.',
                ru: 'Начинаешь и заканчиваешь высотомером: высота, влево, вправо, подбородок вверх, высота.',
              },
            },
            {
              q: { en: 'How many practice touches do you do?', es: '¿Cuántos toques de práctica haces?', uk: 'Скільки тренувальних дотиків робиш?', ru: 'Сколько тренировочных касаний делаешь?' },
              options: [
                { en: 'One', es: 'Uno', uk: 'Один', ru: 'Одно' },
                { en: 'Three', es: 'Tres', uk: 'Три', ru: 'Три' },
                { en: 'Five', es: 'Cinco', uk: 'П’ять', ru: 'Пять' },
              ],
              answer: 1,
              why: {
                en: 'Three times: left hand over your head, right hand back to the pilot chute, back to arch. Then altitude.',
                es: 'Tres veces: mano izquierda sobre la cabeza, mano derecha atrás al extractor, de vuelta al arco. Luego la altura.',
                uk: 'Три рази: ліва рука над головою, права назад до витяжного парашута, знову в прогин. Потім висота.',
                ru: 'Три раза: левая рука над головой, правая назад к вытяжному, обратно в прогиб. Потом высота.',
              },
            },
            {
              q: { en: 'What do you do between every block of the dive?', es: '¿Qué haces entre bloque y bloque del salto?', uk: 'Що робиш між блоками стрибка?', ru: 'Что делаешь между блоками прыжка?' },
              options: [
                { en: 'Do one more practice touch', es: 'Haces un toque de práctica más', uk: 'Робиш ще один тренувальний дотик', ru: 'Делаешь ещё одно тренировочное касание' },
                { en: 'Look down to see the ground', es: 'Miras abajo para ver el suelo', uk: 'Дивишся вниз, на землю', ru: 'Смотришь вниз, на землю' },
                { en: 'Check your altitude', es: 'Miras la altura', uk: 'Перевіряєш висоту', ru: 'Проверяешь высоту' },
              ],
              answer: 2,
              why: {
                en: 'Between every block you check altitude. It comes before everything else in the dive.',
                es: 'Entre bloque y bloque miras la altura. Va antes que todo lo demás en el salto.',
                uk: 'Між блоками перевіряєш висоту. Вона важливіша за все інше в стрибку.',
                ru: 'Между блоками проверяешь высоту. Она важнее всего остального в прыжке.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- altitude
    {
      id: 'altitude',
      title: { en: 'When to check altitude', es: 'Cuándo mirar la altura', uk: 'Коли дивитися на висоту', ru: 'Когда смотреть на высоту' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Altitude awareness is the <b>number-one job</b> in freefall. Check it:',
            es: 'Controlar la altura es la <b>tarea número uno</b> en caída libre. Mírala:',
            uk: 'Контроль висоти — <b>завдання номер один</b> у вільному падінні. Дивися на висотомір:',
            ru: 'Контроль высоты — <b>задача номер один</b> в свободном падении. Смотри на высотомер:',
          },
        },
        {
          type: 'rules',
          items: [
            {
              icon: 'altimeter',
              big: '3 s',
              text: {
                en: '<b>Every 3 seconds</b> (USPA). <b>All the time.</b>',
                es: '<b>Cada 3 segundos</b> (USPA). <b>Todo el tiempo.</b>',
                uk: '<b>Кожні 3 секунди</b> (USPA). <b>Постійно.</b>',
                ru: '<b>Каждые 3 секунды</b> (USPA). <b>Постоянно.</b>',
              },
            },
            {
              icon: 'repeat',
              text: { en: '<b>Before and after</b> every maneuver.', es: '<b>Antes y después</b> de cada maniobra.', uk: '<b>До і після</b> кожного маневру.', ru: '<b>До и после</b> каждого манёвра.' },
            },
            {
              icon: 'question',
              text: { en: 'Whenever <b>in doubt</b>.', es: 'Siempre que tengas <b>dudas</b>.', uk: 'Завжди, коли <b>сумніваєшся</b>.', ru: 'Всегда, когда <b>сомневаешься</b>.' },
            },
            {
              icon: 'tap',
              text: {
                en: 'When an <b>instructor signals</b> you to (a tap on the wrist).',
                es: 'Cuando un <b>instructor te lo indique</b> (un toque en la muñeca).',
                uk: 'Коли <b>інструктор подає знак</b> (поплескування по зап’ястю).',
                ru: 'Когда <b>инструктор подаёт знак</b> (хлопок по запястью).',
              },
            },
          ],
        },
        {
          type: 'callout',
          text: {
            en: 'Overloaded or lost? Default to: <b>altitude, arch, pull at 5,500</b>.',
            es: '¿Saturado o perdido? Vuelve a lo básico: <b>altura, arco, abrir a 5,500</b>.',
            uk: 'Перевантажений чи загубився? За замовчуванням: <b>висота, прогин, розкриття на 5 500</b>.',
            ru: 'Перегружен или потерялся? По умолчанию: <b>высота, прогиб, раскрытие на 5 500</b>.',
          },
        },
        {
          type: 'rules',
          items: [
            {
              big: '6,000',
              tone: 'accent',
              title: { en: 'Lock on', es: 'Lock on', uk: 'Лише висотомір', ru: 'Только высотомер' },
              text: {
                en: 'Stop <b>all exercises</b>. Watch the <b>altimeter only</b>. The pull takes about <b>1,000 ft</b>, so this leaves time to pull at 5,500.',
                es: 'Deja <b>todos los ejercicios</b>. Mira <b>solo el altímetro</b>. La apertura lleva unos <b>1,000 ft</b>, así te da tiempo a abrir a 5,500.',
                uk: 'Припини <b>усі вправи</b>. Дивися <b>лише на висотомір</b>. Розкриття забирає близько <b>1 000 футів</b>, тож так устигаєш розкритися на 5 500.',
                ru: 'Прекрати <b>все упражнения</b>. Смотри <b>только на высотомер</b>. Раскрытие занимает около <b>1 000 футов</b>, так что успеваешь раскрыться на 5 500.',
              },
            },
            {
              big: '5,500',
              tone: 'accent',
              title: { en: 'Pull', es: 'Abrir', uk: 'Розкриття', ru: 'Раскрытие' },
              text: {
                en: 'On <b>category A</b> we pull at <b>5,500 ft</b>, not 5,000. Ask about later categories.',
                es: 'En la <b>categoría A</b> abrimos a <b>5,500 ft</b>, no a 5,000. Pregunta por las categorías siguientes.',
                uk: 'На <b>категорії A</b> розкриваємося на <b>5 500 футах</b>, а не на 5 000. Про наступні категорії запитай.',
                ru: 'На <b>категории A</b> раскрываемся на <b>5 500 футах</b>, а не на 5 000. Про следующие категории спроси.',
              },
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'How often does USPA say to check altitude?', es: '¿Cada cuánto dice la USPA que mires la altura?', uk: 'Як часто, за правилами USPA, треба дивитися на висоту?', ru: 'Как часто, по правилам USPA, нужно смотреть на высоту?' },
              options: [
                { en: 'Every 3 seconds', es: 'Cada 3 segundos', uk: 'Кожні 3 секунди', ru: 'Каждые 3 секунды' },
                { en: 'Every 15 seconds', es: 'Cada 15 segundos', uk: 'Кожні 15 секунд', ru: 'Каждые 15 секунд' },
                { en: 'Only at 6,000 ft', es: 'Solo a 6,000 ft', uk: 'Тільки на висоті 6 000 футів', ru: 'Только на высоте 6 000 футов' },
              ],
              answer: 0,
              why: {
                en: 'USPA says every 3 seconds, all the time: before and after every maneuver, and whenever in doubt.',
                es: 'La USPA dice cada 3 segundos, todo el tiempo: antes y después de cada maniobra, y siempre que dudes.',
                uk: 'USPA: кожні 3 секунди, постійно — до і після кожного маневру та щоразу, коли сумніваєшся.',
                ru: 'USPA: каждые 3 секунды, постоянно — до и после каждого манёвра и всякий раз, когда сомневаешься.',
              },
            },
            {
              q: { en: 'What is the pull altitude on category A?', es: '¿Cuál es la altura de apertura en la categoría A?', uk: 'На якій висоті розкриваються на категорії A?', ru: 'На какой высоте раскрываются на категории A?' },
              options: [
                { en: '5,000 ft', es: '5,000 ft', uk: '5 000 футів', ru: '5 000 футов' },
                { en: '5,500 ft', es: '5,500 ft', uk: '5 500 футів', ru: '5 500 футов' },
                { en: '6,000 ft', es: '6,000 ft', uk: '6 000 футів', ru: '6 000 футов' },
              ],
              answer: 1,
              why: {
                en: 'We pull at 5,500 ft, not 5,000. 6,000 is lock on.',
                es: 'Abrimos a 5,500 ft, no a 5,000. 6,000 es lock on.',
                uk: 'Розкриваємося на 5 500 футах, а не на 5 000. На 6 000 — лише висотомір.',
                ru: 'Раскрываемся на 5 500 футах, а не на 5 000. На 6 000 — только высотомер.',
              },
            },
            {
              q: { en: 'You feel overloaded or lost in freefall. What do you default to?', es: 'Te sientes saturado o perdido en caída libre. ¿A qué vuelves?', uk: 'У вільному падінні ти перевантажений або загубився. До чого повертаєшся?', ru: 'В свободном падении ты перегружен или потерялся. К чему возвращаешься?' },
              options: [
                { en: 'Look for the instructors until you find them', es: 'Buscar a los instructores hasta encontrarlos', uk: 'Шукати інструкторів, поки не знайдеш', ru: 'Искать инструкторов, пока не найдёшь' },
                { en: 'Repeat the practice touches until calm', es: 'Repetir los toques de práctica hasta calmarte', uk: 'Повторювати тренувальні дотики, поки не заспокоїшся', ru: 'Повторять тренировочные касания, пока не успокоишься' },
                { en: 'Altitude, arch, pull at 5,500', es: 'Altura, arco, abrir a 5,500', uk: 'Висота, прогин, розкриття на 5 500', ru: 'Высота, прогиб, раскрытие на 5 500' },
              ],
              answer: 2,
              why: {
                en: 'When in doubt, go back to the basics: altitude, arch, pull at 5,500.',
                es: 'Ante la duda, vuelve a lo básico: altura, arco, abrir a 5,500.',
                uk: 'Сумніваєшся — повертайся до основ: висота, прогин, розкриття на 5 500.',
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
      title: { en: 'Hand signals', es: 'Señales de mano', uk: 'Жести інструктора', ru: 'Жесты инструктора' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Too loud to talk: instructors <b>show</b> these right in front of your face, or <b>touch</b> you.',
            es: 'Hay demasiado ruido para hablar: los instructores las <b>muestran</b> justo delante de tu cara o te <b>tocan</b>.',
            uk: 'Надто гучно, щоб говорити: інструктори <b>показують</b> жести просто перед обличчям або <b>торкаються</b> тебе.',
            ru: 'Слишком шумно, чтобы говорить: инструкторы <b>показывают</b> жесты прямо перед лицом или <b>касаются</b> тебя.',
          },
        },
        {
          type: 'p',
          muted: true,
          text: {
            en: 'Filmed by an AFF school (Skydive Fundamentals). Most schools use the same set, but <b>confirm each one</b> with yours.',
            es: 'Las grabó una escuela AFF (Skydive Fundamentals). La mayoría usa las mismas, pero <b>confirma cada una</b> con la tuya.',
            uk: 'Зняті школою AFF (Skydive Fundamentals). У більшості шкіл жести ті самі, але <b>звір кожен</b> зі своєю.',
            ru: 'Сняты школой AFF (Skydive Fundamentals). В большинстве школ жесты те же, но <b>сверь каждый</b> со своей.',
          },
        },
        {
          type: 'cards',
          items: [
            {
              clip: 's_pull',
              tone: 'key',
              name: { en: 'Pull', es: 'Abre', uk: 'Розкривайся', ru: 'Раскрывайся' },
              what: { en: 'One finger pointed, in any direction.', es: 'Un dedo apuntando, en cualquier dirección.', uk: 'Один витягнутий палець, у будь-який бік.', ru: 'Один вытянутый палец, в любую сторону.' },
              act: {
                en: '<b>Pull right now</b>; you\'ll talk about why on the ground.',
                es: '<b>Abre ahora mismo</b>; el porqué lo hablarán en tierra.',
                uk: '<b>Розкривайся одразу</b>; чому — обговорите на землі.',
                ru: '<b>Раскрывайся сразу</b>; почему — обсудите на земле.',
              },
            },
            {
              clip: 's_alt',
              name: { en: 'Check altitude', es: 'Mira la altura', uk: 'Перевір висоту', ru: 'Проверь высоту' },
              what: { en: 'Slap or tap on your wrist.', es: 'Palmada o toque en la muñeca.', uk: 'Поплескування або дотик по зап’ястю.', ru: 'Хлопок или касание по запястью.' },
              act: { en: 'Look at the altimeter.', es: 'Mira el altímetro.', uk: 'Подивись на висотомір.', ru: 'Посмотри на высотомер.' },
            },
            {
              clip: 's_arch',
              name: { en: 'Arch', es: 'Arquea', uk: 'Прогнись', ru: 'Прогнись' },
              what: {
                en: 'Thumb down. Arch signals differ between schools. <q-check/>',
                es: 'Pulgar abajo. La señal de arquear cambia según la escuela. <q-check/>',
                uk: 'Великий палець униз. Знак прогину в різних школах різний. <q-check/>',
                ru: 'Большой палец вниз. Знак прогиба в разных школах разный. <q-check/>',
              },
              act: {
                en: 'Push your hips forward (toward the ground when you\'re belly to earth), arch more.',
                es: 'Empuja la cadera adelante (hacia el suelo cuando estás panza a tierra), arquea más.',
                uk: 'Таз уперед (до землі, коли ти животом до землі), прогнись сильніше.',
                ru: 'Таз вперёд (к земле, когда ты животом к земле), прогнись сильнее.',
              },
            },
            {
              clip: 's_legsout',
              name: { en: 'Legs out', es: 'Estira las piernas', uk: 'Випрями ноги', ru: 'Выпрями ноги' },
              what: { en: 'Two fingers, V.', es: 'Dos dedos en V.', uk: 'Два пальці літерою V.', ru: 'Два пальца буквой V.' },
              act: {
                en: 'Smoothly extend your legs until you get a thumbs up.',
                es: 'Estira las piernas suavemente hasta que te hagan pulgar arriba.',
                uk: 'Плавно випрямляй ноги, поки не покажуть «палець угору».',
                ru: 'Плавно выпрямляй ноги, пока не покажут «палец вверх».',
              },
            },
            {
              clip: 's_relax',
              name: { en: 'Relax', es: 'Relájate', uk: 'Розслабся', ru: 'Расслабься' },
              what: { en: 'Shaking, floppy hand.', es: 'Mano floja que se sacude.', uk: 'Розслаблена кисть, що труситься.', ru: 'Расслабленная трясущаяся кисть.' },
              act: {
                en: 'Deep breath, loosen up, shake your hands.',
                es: 'Respira hondo, aflójate, sacude las manos.',
                uk: 'Глибокий вдих, розслабся, потруси кистями.',
                ru: 'Глубокий вдох, расслабься, потряси кистями.',
              },
            },
            {
              clip: 's_good',
              name: { en: 'Good', es: 'Bien', uk: 'Добре', ru: 'Хорошо' },
              what: { en: 'Thumbs up.', es: 'Pulgar arriba.', uk: 'Великий палець угору.', ru: 'Большой палец вверх.' },
              act: { en: 'Hold what you have now.', es: 'Mantén la posición que tienes.', uk: 'Так і тримай.', ru: 'Так и держи.' },
            },
            {
              clip: 's_arms',
              name: { en: 'Arms 90/90', es: 'Brazos 90/90', uk: 'Руки 90/90', ru: 'Руки 90/90' },
              what: { en: 'Thumb and pinky out, an "L".', es: 'Pulgar y meñique extendidos, una "L".', uk: 'Великий палець і мізинець убік, літера «L».', ru: 'Большой палец и мизинец в стороны, буква «L».' },
              act: {
                en: 'Check arm position: 90° at the shoulder, 90° at the elbow.',
                es: 'Revisa la posición de los brazos: 90° en el hombro, 90° en el codo.',
                uk: 'Перевір положення рук: 90° у плечі, 90° у лікті.',
                ru: 'Проверь положение рук: 90° в плече, 90° в локте.',
              },
            },
            {
              clip: 's_toetap',
              name: { en: 'Toe taps', es: 'Toque de puntas', uk: 'Стукни носками', ru: 'Стукни носками' },
              what: { en: 'Bent flat hand.', es: 'Mano plana doblada.', uk: 'Зігнута долоня.', ru: 'Согнутая ладонь.' },
              act: {
                en: 'Legs too wide or uneven: tap your toes together and even them out.',
                es: 'Piernas demasiado abiertas o disparejas: junta las puntas de los pies con un toque y emparéjalas.',
                uk: 'Ноги надто широко або нерівно: стукни носками один об один і вирівняй.',
                ru: 'Ноги слишком широко или неровно: стукни носками друг о друга и выровняй.',
              },
            },
            {
              clip: 's_coa',
              name: { en: 'Circle of awareness', es: 'Círculo de atención', uk: 'Коло уваги', ru: 'Круг внимания' },
              what: { en: 'Fingers bunched.', es: 'Dedos juntos en punta.', uk: 'Пальці зібрані в щіпку.', ru: 'Пальцы собраны в щепоть.' },
              act: { en: 'Do your circle of awareness now.', es: 'Haz tu círculo de atención ahora.', uk: 'Зроби коло уваги зараз.', ru: 'Сделай круг внимания сейчас.' },
            },
            {
              clip: 's_touch',
              name: { en: 'Practice touch', es: 'Toque de práctica', uk: 'Тренувальний дотик', ru: 'Тренировочное касание' },
              what: { en: 'Fist.', es: 'Puño.', uk: 'Кулак.', ru: 'Кулак.' },
              act: { en: 'Do one more practice touch, slowly.', es: 'Haz un toque de práctica más, despacio.', uk: 'Зроби ще один тренувальний дотик, повільно.', ru: 'Сделай ещё одно тренировочное касание, медленно.' },
            },
            {
              clip: 's_chin',
              name: { en: 'Chin up', es: 'Barbilla arriba', uk: 'Підборіддя вгору', ru: 'Подбородок вверх' },
              what: { en: 'Tap on the chin.', es: 'Toque en la barbilla.', uk: 'Дотик до підборіддя.', ru: 'Касание по подбородку.' },
              act: { en: 'Head up, look forward.', es: 'Cabeza arriba, mira al frente.', uk: 'Підніми голову, дивися вперед.', ru: 'Подними голову, смотри вперёд.' },
            },
            {
              name: { en: 'Shaking you on exit', es: 'Te sacuden al salir', uk: 'Трусять після відокремлення', ru: 'Трясут после отделения' },
              what: {
                en: 'An instructor shakes your harness right after exit.',
                es: 'Un instructor sacude tu arnés justo después de salir.',
                uk: 'Інструктор трусить тебе за підвісну систему одразу після відокремлення.',
                ru: 'Инструктор трясёт тебя за подвесную систему сразу после отделения.',
              },
              act: {
                en: 'Push your hips further forward, into the wind, chin up.',
                es: 'Empuja más la cadera adelante, contra el viento, barbilla arriba.',
                uk: 'Таз ще сильніше вперед, назустріч потоку, підборіддя вгору.',
                ru: 'Таз ещё сильнее вперёд, навстречу потоку, подбородок вверх.',
              },
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'V4rn53L4isw', t: 105, label: { en: 'All freefall hand signals', es: 'Todas las señales de mano en caída libre', uk: 'Усі жести у вільному падінні', ru: 'Все жесты в свободном падении' }, credit: 'Skydive Fundamentals' },
            { yt: 'o6hGuKffq1k', t: 399, label: { en: 'Signals, longer version', es: 'Señales, versión larga', uk: 'Жести, детальна версія', ru: 'Жесты, подробная версия' }, credit: 'Skydive Fundamentals' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'An instructor shows you one finger pointed in any direction. What do you do?', es: 'Un instructor te muestra un dedo apuntando en cualquier dirección. ¿Qué haces?', uk: 'Інструктор показує тобі один палець, спрямований у будь-який бік. Що робиш?', ru: 'Инструктор показывает тебе один палец, направленный в любую сторону. Что делаешь?' },
              options: [
                { en: 'Turn toward the finger', es: 'Girar hacia el dedo', uk: 'Повернути за пальцем', ru: 'Повернуть за пальцем' },
                { en: 'Pull right now', es: 'Abrir ahora mismo', uk: 'Розкритися одразу', ru: 'Раскрыться сразу' },
                { en: 'Check your altimeter', es: 'Mirar el altímetro', uk: 'Подивитися на висотомір', ru: 'Посмотреть на высотомер' },
              ],
              answer: 1,
              why: {
                en: 'One finger pointed means pull, right now. You\'ll talk about why on the ground.',
                es: 'Un dedo apuntando significa abrir, ahora mismo. El porqué lo hablarán en tierra.',
                uk: 'Один палець — розкривайся одразу. Чому — обговорите на землі.',
                ru: 'Один палец — раскрывайся сразу. Почему — обсудите на земле.',
              },
            },
            {
              q: { en: 'An instructor slaps or taps your wrist. What does it mean?', es: 'Un instructor te da una palmada o un toque en la muñeca. ¿Qué significa?', uk: 'Інструктор поплескує або торкається твого зап’ястя. Що це означає?', ru: 'Инструктор хлопает или касается твоего запястья. Что это значит?' },
              options: [
                { en: 'Check altitude', es: 'Mira la altura', uk: 'Перевір висоту', ru: 'Проверь высоту' },
                { en: 'Relax', es: 'Relájate', uk: 'Розслабся', ru: 'Расслабься' },
                { en: 'Legs out', es: 'Estira las piernas', uk: 'Випрями ноги', ru: 'Выпрями ноги' },
              ],
              answer: 0,
              why: {
                en: 'A slap or tap on the wrist means look at the altimeter.',
                es: 'Una palmada o un toque en la muñeca significa mirar el altímetro.',
                uk: 'Поплескування або дотик по зап’ястю — подивись на висотомір.',
                ru: 'Хлопок или касание по запястью — посмотри на высотомер.',
              },
            },
            {
              q: { en: 'You see two fingers in a V. What do you do?', es: 'Ves dos dedos en V. ¿Qué haces?', uk: 'Бачиш два пальці літерою V. Що робиш?', ru: 'Видишь два пальца буквой V. Что делаешь?' },
              options: [
                { en: 'Do two more practice touches, slowly', es: 'Hacer dos toques de práctica más, despacio', uk: 'Зробити ще два тренувальні дотики, повільно', ru: 'Сделать ещё два тренировочных касания, медленно' },
                { en: 'Bring your knees up to your chest', es: 'Llevar las rodillas hacia el pecho', uk: 'Підтягнути коліна до грудей', ru: 'Подтянуть колени к груди' },
                { en: 'Extend your legs until you see a thumbs up', es: 'Estirar las piernas hasta ver un pulgar arriba', uk: 'Випрямляти ноги, поки не побачиш «палець угору»', ru: 'Выпрямлять ноги, пока не увидишь «палец вверх»' },
              ],
              answer: 2,
              why: {
                en: 'V is legs out. Extend smoothly; a thumbs up means good, hold it.',
                es: 'La V es estirar las piernas. Estíralas suavemente; el pulgar arriba significa bien, mantenlo así.',
                uk: 'V — випрями ноги. Випрямляй плавно; «палець угору» означає «добре», так і тримай.',
                ru: 'V — выпрями ноги. Выпрямляй плавно; «палец вверх» значит «хорошо», так и держи.',
              },
            },
            {
              q: { en: 'In the filmed signals, what does thumb down mean?', es: 'En las señales grabadas, ¿qué significa pulgar abajo?', uk: 'Що означає «палець униз» у знятих жестах?', ru: 'Что значит «палец вниз» в снятых жестах?' },
              options: [
                { en: 'Dive: head down to fall faster', es: 'Picada: cabeza abajo para caer más rápido', uk: 'Пікіруй: голову вниз, щоб падати швидше', ru: 'Пикируй: голову вниз, чтобы падать быстрее' },
                { en: 'Arch: hips forward, arch more', es: 'Arquea: cadera adelante, arquea más', uk: 'Прогнись: таз уперед, сильніше', ru: 'Прогнись: таз вперёд, сильнее' },
                { en: 'Problem: wave off and pull now', es: 'Problema: wave-off y abre ya', uk: 'Проблема: відмашка й розкривайся', ru: 'Проблема: отмашка и раскрывайся' },
              ],
              answer: 1,
              why: {
                en: 'Thumb down is arch: hips forward, arch more. Confirm it with your school.',
                es: 'Pulgar abajo es arquear: cadera adelante, arquea más. Confírmalo con tu escuela.',
                uk: 'Палець униз — прогин: таз уперед, прогнись сильніше. Звір зі своєю школою.',
                ru: 'Палец вниз — прогиб: таз вперёд, прогнись сильнее. Сверь со своей школой.',
              },
            },
          ],
        },
      ],
    },
  ],
};
