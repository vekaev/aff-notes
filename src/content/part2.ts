import type { Part } from './types';

export const part2: Part = {
  id: 'part2',
  roman: 'II',
  range: { en: '13,000{exit} → 5,500 ft{pull}', es: '13,000 → 5,500 ft', uk: '13 000 → 5 500 футів', ru: '13 000 → 5 500 футов' },
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
                    en: 'Upper arms about <b>90°</b> or less from your body, elbows bent <b>90–120°</b>, hands near <b>head level</b>. <b>Relaxed</b>, not locked (USPA).',
                    es: 'Brazos a unos <b>90°</b> o menos del cuerpo, codos doblados <b>90–120°</b>, manos cerca de la <b>altura de la cabeza</b>. <b>Relajados</b>, no rígidos (USPA).',
                    uk: 'Плечі приблизно під <b>90°</b> або менше до тулуба, лікті зігнуті на <b>90–120°</b>, кисті приблизно на <b>рівні голови</b>. <b>Розслаблено</b>, не напружено (USPA).',
                    ru: 'Плечи примерно под <b>90°</b> или меньше к туловищу, локти согнуты на <b>90–120°</b>, кисти примерно на <b>уровне головы</b>. <b>Расслабленно</b>, не зажато (USPA).',
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
                    en: 'USPA cue: <b>heading (horizon), altitude, arch, legs, relax</b>. A <b>stiff</b> body is one of the most common student faults.',
                    es: 'La consigna de la USPA: <b>rumbo (horizonte), altura, arco, piernas, relájate</b>. Un cuerpo <b>rígido</b> es uno de los fallos más comunes del alumno.',
                    uk: 'Підказка USPA: <b>напрямок (горизонт), висота, прогин, ноги, розслабся</b>. <b>Скуте</b> тіло — одна з найчастіших помилок студента.',
                    ru: 'Подсказка USPA: <b>направление (горизонт), высота, прогиб, ноги, расслабься</b>. <b>Скованное</b> тело — одна из самых частых ошибок студента.',
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
              alt: '13,000 ft{exit}',
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
                en: '<b>Altitude</b> → left instructor → right instructor → chin up (horizon) → <b>altitude</b>. (USPA starts with the horizon: horizon → altitude → left → right.)',
                es: '<b>Altura</b> → instructor izquierdo → instructor derecho → barbilla arriba (horizonte) → <b>altura</b>. (La USPA empieza por el horizonte: horizonte → altura → izquierdo → derecho.)',
                uk: '<b>Висота</b> → лівий інструктор → правий інструктор → підборіддя вгору (горизонт) → <b>висота</b>. (USPA починає з горизонту: горизонт → висота → лівий → правий.)',
                ru: '<b>Высота</b> → левый инструктор → правый инструктор → подбородок вверх (горизонт) → <b>высота</b>. (USPA начинает с горизонта: горизонт → высота → левый → правый.)',
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
              alt: '6,000 ft{lockOn}',
              value: 6,
              hot: true,
              title: { en: 'Lock on', es: 'Lock on', uk: 'Лише висотомір', ru: 'Только высотомер' },
              sub: { en: '<b>No more</b> exercises.', es: '<b>Se acabaron</b> los ejercicios.', uk: 'Більше <b>жодних</b> вправ.', ru: 'Больше <b>никаких</b> упражнений.' },
            },
            {
              alt: '5,500 ft{pull}',
              value: 5.5,
              hot: true,
              title: { en: 'PULL', es: 'ABRIR', uk: 'РОЗКРИТТЯ', ru: 'РАСКРЫТИЕ' },
              sub: {
                en: '<b>Wave off</b>: wave both arms smoothly over your head ("I know my altitude, I\'m pulling"). How many waves your school wants <q-check/>. Then <b>look, reach, throw</b> and count to five (Part III).',
                es: '<b>Wave-off</b>: agita los dos brazos suavemente por encima de la cabeza ("sé mi altura, voy a abrir"). Cuántas veces lo pide tu escuela <q-check/>. Luego <b>mira, alcanza, lanza</b> y cuenta hasta cinco (Parte III).',
                uk: '<b>Відмашка</b>: плавно помахай обома руками над головою («знаю висоту, розкриваюся»). Скільки разів — як навчає твоя школа <q-check/>. Потім <b>подивись, дотягнись, викинь</b> і рахуй до п’яти (частина III).',
                ru: '<b>Отмашка</b>: плавно помаши обеими руками над головой («знаю высоту, раскрываюсь»). Сколько раз — как учит твоя школа <q-check/>. Потом <b>посмотри, дотянись, выбрось</b> и считай до пяти (часть III).',
              },
            },
          ],
        },
        {
          type: 'p',
          muted: true,
          text: {
            en: 'A real student altimeter has colour only on the <b>low part</b> of the dial: the Alti-2 Galaxy, for example, has a yellow and red arc that starts at <b>3,000 ft</b> (Para Gear). Nothing marks 6,000{lockOn} or 5,500 ft{pull}: <b>read the numbers</b>. Look at your own altimeter before the jump.',
            es: 'Un altímetro de alumno real solo tiene color en la <b>parte baja</b> de la esfera: el Alti-2 Galaxy, por ejemplo, tiene un arco amarillo y rojo que empieza a <b>3,000 ft</b> (Para Gear). Nada marca 6,000 ni 5,500 ft: <b>lee los números</b>. Mira tu propio altímetro antes del salto.',
            uk: 'На справжньому студентському висотомірі колір є лише в <b>нижній частині</b> циферблата: в Alti-2 Galaxy, наприклад, жовто-червона дуга починається з <b>3 000 футів</b> (Para Gear). 6 000 і 5 500 футів нічим не позначені: <b>читай цифри</b>. Роздивися свій висотомір до стрибка.',
            ru: 'На настоящем студенческом высотомере цвет есть только в <b>нижней части</b> циферблата: у Alti-2 Galaxy, например, жёлто-красная дуга начинается с <b>3 000 футов</b> (Para Gear). 6 000 и 5 500 футов ничем не отмечены: <b>читай цифры</b>. Рассмотри свой высотомер до прыжка.',
          },
        },
        {
          type: 'clips',
          items: [
            {
              src: 'alt_real',
              caption: { en: 'A real wrist altimeter, held up and read in freefall', es: 'Un altímetro de muñeca real, levantado y leído en caída libre', uk: 'Справжній наручний висотомір: підняти й прочитати у вільному падінні', ru: 'Настоящий наручный высотомер: поднять и прочитать в свободном падении' },
              credit: 'Marcin Kobylecki',
              yt: 'gCjqB_kB_qM',
              t: 58,
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
          type: 'callout',
          text: {
            en: 'Unstable after exit: <b>check altitude</b>, <b>arch</b> until the horizon comes flat into view, and follow your instructors\' <b>signals</b> (USPA).',
            es: 'Inestable tras la salida: <b>mira la altura</b>, <b>arquea</b> hasta que el horizonte se vea plano y sigue las <b>señales</b> de tus instructores (USPA).',
            uk: 'Нестабільно після відокремлення: <b>перевір висоту</b>, <b>прогинайся</b>, поки горизонт не стане рівним, і виконуй <b>жести</b> інструкторів (USPA).',
            ru: 'Нестабильно после отделения: <b>проверь высоту</b>, <b>прогибайся</b>, пока горизонт не станет ровным, и выполняй <b>жесты</b> инструкторов (USPA).',
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
                en: 'As taught in our ground course: altitude, left, right, chin up, altitude. USPA starts with the horizon (horizon, altitude, left, right), which is fine too. What matters: left (reserve side) before right, and never skip the altimeter.',
                es: 'Como se enseña en nuestro curso de tierra: altura, izquierda, derecha, barbilla arriba, altura. La USPA empieza por el horizonte (horizonte, altura, izquierda, derecha), y también vale. Lo importante: izquierda (lado de la reserva) antes que derecha, y nunca saltarte el altímetro.',
                uk: 'Як навчали на нашому наземному курсі: висота, ліворуч, праворуч, підборіддя вгору, висота. USPA починає з горизонту (горизонт, висота, ліворуч, праворуч) — так теж правильно. Головне: лівий (бік запасного) перед правим і ніколи не пропускай висотомір.',
                ru: 'Как учили на нашем наземном курсе: высота, влево, вправо, подбородок вверх, высота. USPA начинает с горизонта (горизонт, высота, влево, вправо) — так тоже правильно. Главное: левый (сторона запасного) перед правым и никогда не пропускай высотомер.',
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
            en: 'Overloaded or lost? Default to: <b>altitude, arch, pull at 5,500 ft{pull}</b>, or <b>right now</b> if you\'re already lower.',
            es: '¿Saturado o perdido? Vuelve a lo básico: <b>altura, arco, abrir a 5,500 ft</b>, o <b>ahora mismo</b> si ya estás más bajo.',
            uk: 'Перевантажений чи загубився? За замовчуванням: <b>висота, прогин, розкриття на 5 500 футах</b> або <b>одразу</b>, якщо ти вже нижче.',
            ru: 'Перегружен или потерялся? По умолчанию: <b>высота, прогиб, раскрытие на 5 500 футах</b> или <b>сразу</b>, если ты уже ниже.',
          },
        },
        {
          type: 'callout',
          tone: 'red',
          title: { en: 'Pull priorities (USPA), in this order', es: 'Prioridades de apertura (USPA), en este orden', uk: 'Пріоритети розкриття (USPA), саме в такому порядку', ru: 'Приоритеты раскрытия (USPA), именно в таком порядке' },
          points: [
            { en: '<b>Pull</b>.', es: '<b>Abre</b>.', uk: '<b>Розкрийся</b>.', ru: '<b>Раскройся</b>.' },
            { en: 'Pull <b>at your altitude</b>.', es: 'Abre <b>a tu altura</b>.', uk: 'Розкрийся <b>на своїй висоті</b>.', ru: 'Раскройся <b>на своей высоте</b>.' },
            { en: 'Pull <b>stable</b>, if you can.', es: 'Abre <b>estable</b>, si puedes.', uk: 'Розкрийся <b>стабільно</b>, якщо можеш.', ru: 'Раскройся <b>стабильно</b>, если можешь.' },
            {
              en: 'Altitude comes before stability: unstable or spinning at 5,500 ft{pull}? <b>Pull anyway</b>.',
              es: 'La altura va antes que la estabilidad: ¿inestable o girando a 5,500 ft? <b>Abre igual</b>.',
              uk: 'Висота важливіша за стабільність: нестабільно чи крутить на 5 500 футах? <b>Все одно розкривайся</b>.',
              ru: 'Высота важнее стабильности: нестабильно или крутит на 5 500 футах? <b>Всё равно раскрывайся</b>.',
            },
          ],
        },
        {
          type: 'rules',
          items: [
            {
              big: '6,000 ft{lockOn}',
              tone: 'accent',
              title: { en: 'Lock on', es: 'Lock on', uk: 'Лише висотомір', ru: 'Только высотомер' },
              text: {
                en: '{uspa}Stop <b>all exercises</b>. Watch the <b>altimeter only</b>: from 6,000 ft{lockOn} you have about <b>3 seconds</b> to 5,500 ft{pull}. At 5,500 ft{pull} wave off and pull. Wave-off and pull together take about <b>1,000 ft{~}</b> (USPA), so start on time.',
                es: 'Deja <b>todos los ejercicios</b>. Mira <b>solo el altímetro</b>: de 6,000 a 5,500 ft tienes unos <b>3 segundos</b>. A 5,500 ft haz el wave-off y abre. El wave-off y la apertura juntos llevan unos <b>1,000 ft</b> (USPA), así que empieza a tiempo.',
                uk: 'Припини <b>усі вправи</b>. Дивися <b>лише на висотомір</b>: від 6 000 до 5 500 футів у тебе близько <b>3 секунд</b>. На 5 500 футах — відмашка й розкриття. Відмашка й розкриття разом забирають близько <b>1 000 футів</b> (USPA), тож починай вчасно.',
                ru: 'Прекрати <b>все упражнения</b>. Смотри <b>только на высотомер</b>: от 6 000 до 5 500 футов у тебя около <b>3 секунд</b>. На 5 500 футах — отмашка и раскрытие. Отмашка и раскрытие вместе занимают около <b>1 000 футов</b> (USPA), так что начинай вовремя.',
              },
            },
            {
              big: '5,500 ft{pull}',
              tone: 'accent',
              title: { en: 'Pull', es: 'Abrir', uk: 'Розкриття', ru: 'Раскрытие' },
              text: {
                en: '{uspa}On <b>category A</b> we pull at <b>5,500 ft{pull}</b>, not 5,000 ft. Ask about later categories.',
                es: 'En la <b>categoría A</b> abrimos a <b>5,500 ft</b>, no a 5,000 ft. Pregunta por las categorías siguientes.',
                uk: 'На <b>категорії A</b> розкриваємося на <b>5 500 футах</b>, а не на 5 000 футах. Про наступні категорії запитай.',
                ru: 'На <b>категории A</b> раскрываемся на <b>5 500 футах</b>, а не на 5 000 футах. Про следующие категории спроси.',
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
                { en: 'Only at 6,000 ft{lockOn}', es: 'Solo a 6,000 ft', uk: 'Тільки на висоті 6 000 футів', ru: 'Только на высоте 6 000 футов' },
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
                { en: '5,500 ft{pull}', es: '5,500 ft', uk: '5 500 футів', ru: '5 500 футов' },
                { en: '6,000 ft{lockOn}', es: '6,000 ft', uk: '6 000 футів', ru: '6 000 футов' },
              ],
              answer: 1,
              why: {
                en: 'We pull at 5,500 ft{pull}, not 5,000 ft. 6,000 ft{lockOn} is lock on.',
                es: 'Abrimos a 5,500 ft, no a 5,000 ft. 6,000 ft es lock on.',
                uk: 'Розкриваємося на 5 500 футах, а не на 5 000 футах. На 6 000 футів — лише висотомір.',
                ru: 'Раскрываемся на 5 500 футах, а не на 5 000 футах. На 6 000 футов — только высотомер.',
              },
            },
            {
              q: { en: 'You feel overloaded or lost in freefall. What do you default to?', es: 'Te sientes saturado o perdido en caída libre. ¿A qué vuelves?', uk: 'У вільному падінні ти перевантажений або загубився. До чого повертаєшся?', ru: 'В свободном падении ты перегружен или потерялся. К чему возвращаешься?' },
              options: [
                { en: 'Look for the instructors until you find them', es: 'Buscar a los instructores hasta encontrarlos', uk: 'Шукати інструкторів, поки не знайдеш', ru: 'Искать инструкторов, пока не найдёшь' },
                { en: 'Repeat the practice touches until calm', es: 'Repetir los toques de práctica hasta calmarte', uk: 'Повторювати тренувальні дотики, поки не заспокоїшся', ru: 'Повторять тренировочные касания, пока не успокоишься' },
                { en: 'Altitude, arch, pull at 5,500 ft{pull} (or now, if lower)', es: 'Altura, arco, abrir a 5,500 ft (o ya, si estás más bajo)', uk: 'Висота, прогин, розкриття на 5 500 футах (або одразу, якщо нижче)', ru: 'Высота, прогиб, раскрытие на 5 500 футах (или сразу, если ниже)' },
              ],
              answer: 2,
              why: {
                en: 'When in doubt, go back to the basics: altitude, arch, pull at 5,500 ft{pull}. If the altimeter already reads lower, pull right now.',
                es: 'Ante la duda, vuelve a lo básico: altura, arco, abrir a 5,500 ft. Si el altímetro ya marca menos, abre ahora mismo.',
                uk: 'Сумніваєшся — повертайся до основ: висота, прогин, розкриття на 5 500 футах. Якщо висотомір уже показує менше, розкривайся одразу.',
                ru: 'Сомневаешься — возвращайся к основам: высота, прогиб, раскрытие на 5 500 футах. Если высотомер уже показывает меньше, раскрывайся сразу.',
              },
            },
            {
              q: { en: 'It\'s 5,500 ft{pull} and you\'re unstable, slowly spinning. What do you do?', es: 'Estás a 5,500 ft, inestable y girando despacio. ¿Qué haces?', uk: 'Висота 5 500 футів, ти нестабільний і повільно обертаєшся. Що робиш?', ru: 'Высота 5 500 футов, ты нестабилен и медленно вращаешься. Что делаешь?' },
              options: [
                { en: 'Get stable first, then pull', es: 'Primero estabilizarte, luego abrir', uk: 'Спершу стабілізуватися, потім розкритися', ru: 'Сначала стабилизироваться, потом раскрыться' },
                { en: 'Pull now: altitude comes first', es: 'Abrir ya: la altura va primero', uk: 'Розкритися одразу: висота важливіша', ru: 'Раскрыться сразу: высота важнее' },
                { en: 'Wait for an instructor to stop the spin', es: 'Esperar a que un instructor pare el giro', uk: 'Чекати, поки інструктор зупинить обертання', ru: 'Ждать, пока инструктор остановит вращение' },
              ],
              answer: 1,
              why: {
                en: 'USPA pull priorities: pull, pull at your altitude, pull stable if you can. Arch as you pull, but never delay the pull to get stable.',
                es: 'Prioridades de apertura de la USPA: abrir, abrir a tu altura, abrir estable si puedes. Arquea mientras abres, pero nunca retrases la apertura para estabilizarte.',
                uk: 'Пріоритети розкриття USPA: розкритися, розкритися на своїй висоті, розкритися стабільно, якщо можеш. Прогинайся під час розкриття, але ніколи не відкладай його заради стабільності.',
                ru: 'Приоритеты раскрытия USPA: раскрыться, раскрыться на своей высоте, раскрыться стабильно, если можешь. Прогибайся при раскрытии, но никогда не откладывай его ради стабильности.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- freefall goes wrong
    {
      id: 'ffwrong',
      title: { en: 'When freefall goes wrong', es: 'Cuando la caída libre sale mal', uk: 'Коли у вільному падінні щось не так', ru: 'Когда в свободном падении что-то не так' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'One limit for every problem below: <b>two tries or 5 s</b>, whichever comes first (USPA Cat A). Then stop fixing and go to the <b>reserve</b>.',
            es: 'Un solo límite para todos los problemas de abajo: <b>dos intentos o 5 s</b>, lo que llegue antes (USPA Cat A). Luego deja de arreglar y ve a la <b>reserva</b>.',
            uk: 'Одне обмеження для кожної проблеми нижче: <b>дві спроби або 5 с</b>, що настане раніше (USPA Cat A). Далі перестань виправляти й переходь до <b>запасного</b>.',
            ru: 'Одно ограничение для каждой проблемы ниже: <b>две попытки или 5 с</b>, что наступит раньше (USPA Cat A). Дальше перестань исправлять и переходи к <b>запасному</b>.',
          },
        },
        {
          type: 'list',
          title: { en: 'Covered in other chapters', es: 'En otros capítulos', uk: 'В інших розділах', ru: 'В других главах' },
          items: [
            {
              en: 'Unstable or spinning at 5,500 ft{pull}: <b>pull anyway</b>. Altitude comes before stability: <a href="#altitude">pull priorities</a>.',
              es: '¿Inestable o girando a 5,500 ft? <b>Abre igual</b>. La altura va antes que la estabilidad: <a href="#altitude">prioridades de apertura</a>.',
              uk: 'Нестабільно чи крутить на 5 500 футах — <b>все одно розкривайся</b>. Висота важливіша за стабільність: <a href="#altitude">пріоритети розкриття</a>.',
              ru: 'Нестабильно или крутит на 5 500 футах — <b>всё равно раскрывайся</b>. Высота важнее стабильности: <a href="#altitude">приоритеты раскрытия</a>.',
            },
            {
              en: 'Lost <b>one</b> instructor: carry on. Lost <b>both</b>: <b>pull now</b> (<a href="#flow">freefall dive flow</a>).',
              es: '¿Perdiste a <b>un</b> instructor? Sigue. ¿A <b>los dos</b>? <b>Abre ya</b> (<a href="#flow">plan de salto</a>).',
              uk: 'Втратив <b>одного</b> інструктора — продовжуй. <b>Обох</b> — <b>розкривайся одразу</b> (<a href="#flow">план стрибка</a>).',
              ru: 'Потерял <b>одного</b> инструктора — продолжай. <b>Обоих</b> — <b>раскрывайся сразу</b> (<a href="#flow">план прыжка</a>).',
            },
            {
              en: 'Hard pull, pilot chute in tow and the emergency procedure itself: <a href="#mal">what can go wrong</a>.',
              es: 'Tirón duro, extractor remolcado y el propio procedimiento de emergencia: <a href="#mal">qué puede salir mal</a>.',
              uk: 'Туге витягування, витяжний у сліді та сама аварійна процедура: <a href="#mal">які бувають відмови</a>.',
              ru: 'Тугое вытягивание, вытяжной в следе и сама аварийная процедура: <a href="#mal">какие бывают отказы</a>.',
            },
          ],
        },
        {
          type: 'rules',
          items: [
            {
              icon: 'question',
              title: { en: "Can't find the handle", es: 'No encuentras la manija', uk: 'Не знаходиш ручку', ru: 'Не находишь ручку' },
              points: [
                {
                  en: 'Feel along the <b>bottom of the container</b> to the corner, then <b>down the side</b> to the corner (USPA Cat A).',
                  es: 'Pasa la mano por la <b>parte de abajo del contenedor</b> hasta la esquina y luego <b>por el costado</b> hasta la otra esquina (USPA Cat A).',
                  uk: 'Проведи рукою по <b>низу ранця</b> до кута, потім <b>вниз по боку</b> до кута (USPA Cat A).',
                  ru: 'Проведи рукой по <b>низу ранца</b> до угла, потом <b>вниз по боку</b> до угла (USPA Cat A).',
                },
                {
                  en: 'Keep the <b>arch</b>. <b>Two tries or 5 s</b>.',
                  es: 'Mantén el <b>arco</b>. <b>Dos intentos o 5 s</b>.',
                  uk: 'Тримай <b>прогин</b>. <b>Дві спроби або 5 с</b>.',
                  ru: 'Держи <b>прогиб</b>. <b>Две попытки или 5 с</b>.',
                },
                {
                  en: "Not found: your school's <b>emergency procedure</b>: reserve only (USPA SIM) or cut away, then reserve. <q-check/>",
                  es: 'No la encuentras: el <b>procedimiento de emergencia</b> de tu escuela: solo la reserva (USPA SIM) o liberar y luego la reserva. <q-check/>',
                  uk: 'Не знайшов — <b>аварійна процедура</b> твоєї школи: одразу запасний (USPA SIM) або відчеплення, потім запасний. <q-check/>',
                  ru: 'Не нашёл — <b>аварийная процедура</b> твоей школы: сразу запасной (USPA SIM) или отцепка, потом запасной. <q-check/>',
                },
              ],
            },
            {
              icon: 'repeat',
              title: { en: 'Pilot chute hesitates', es: 'El extractor se queda atrás', uk: 'Витяжний «завис»', ru: 'Вытяжной «завис»' },
              points: [
                {
                  en: 'Thrown, but it hangs in the <b>calm air behind your back</b> (the burble).',
                  es: 'Lo lanzaste, pero se queda en el <b>aire quieto detrás de tu espalda</b> (el burble).',
                  uk: 'Викинув, але він висить у <b>затінку за спиною</b>, де повітря спокійне.',
                  ru: 'Выбросил, но он висит в <b>затенении за спиной</b>, где воздух спокойный.',
                },
                {
                  en: '<b>Twist at the waist</b> and <b>look over your shoulder</b> to change the airflow (USPA Cat A). Which shoulder: <q-check/>',
                  es: '<b>Gira la cintura</b> y <b>mira por encima del hombro</b> para cambiar el flujo de aire (USPA Cat A). ¿Qué hombro? <q-check/>',
                  uk: '<b>Повернися в поясі</b> й <b>подивися через плече</b>, щоб змінити потік (USPA Cat A). Через яке плече: <q-check/>',
                  ru: '<b>Повернись в поясе</b> и <b>посмотри через плечо</b>, чтобы изменить поток (USPA Cat A). Через какое плечо: <q-check/>',
                },
                {
                  en: '<b>Two tries or 5 s</b>. Still on your back: <b>emergency procedure</b>.',
                  es: '<b>Dos intentos o 5 s</b>. ¿Sigue en tu espalda? <b>Procedimiento de emergencia</b>.',
                  uk: '<b>Дві спроби або 5 с</b>. Досі на спині — <b>аварійна процедура</b>.',
                  ru: '<b>Две попытки или 5 с</b>. Всё ещё на спине — <b>аварийная процедура</b>.',
                },
              ],
            },
            {
              icon: 'warn',
              tone: 'red',
              title: { en: 'Container opens early', es: 'El contenedor se abre antes de tiempo', uk: 'Ранець відкрився раніше', ru: 'Ранец открылся раньше' },
              points: [
                {
                  en: 'The main pin came out: the <b>bag leaves your back</b>, but the <b>pilot chute is still in its pouch</b> (USPA SIM 4-1 E).',
                  es: 'Se soltó el pin de la principal: la <b>bolsa sale de tu espalda</b>, pero el <b>extractor sigue en su bolsillo</b> (USPA SIM 4-1 E).',
                  uk: 'Вискочила шпилька основного: <b>камера йде зі спини</b>, а <b>витяжний ще в кишені</b> (USPA SIM 4-1 E).',
                  ru: 'Выскочила шпилька основного: <b>камера уходит со спины</b>, а <b>вытяжной ещё в кармане</b> (USPA SIM 4-1 E).',
                },
                {
                  en: 'Find the pilot chute and <b>throw it</b>: <b>two tries or 5 s</b>.',
                  es: 'Busca el extractor y <b>lánzalo</b>: <b>dos intentos o 5 s</b>.',
                  uk: 'Знайди витяжний і <b>викинь його</b>: <b>дві спроби або 5 с</b>.',
                  ru: 'Найди вытяжной и <b>выбрось его</b>: <b>две попытки или 5 с</b>.',
                },
                {
                  en: 'Not found: <b>cut away, then reserve</b>.',
                  es: '¿No lo encuentras? <b>Libera y luego la reserva</b>.',
                  uk: 'Не знайшов — <b>відчеплення, потім запасний</b>.',
                  ru: 'Не нашёл — <b>отцепка, потом запасной</b>.',
                },
                {
                  en: 'Thrown: be <b>ready for the emergency procedure</b>, the main may not come out of the bag.',
                  es: '¿Lo lanzaste? Prepárate para el <b>procedimiento de emergencia</b>: la principal puede no salir de la bolsa.',
                  uk: 'Викинув — будь <b>готовий до аварійної процедури</b>: основний може не вийти з камери.',
                  ru: 'Выбросил — будь <b>готов к аварийной процедуре</b>: основной может не выйти из камеры.',
                },
              ],
            },
          ],
        },
        {
          type: 'list',
          kind: 'do',
          title: { en: 'Prevent an early opening (USPA SIM 4-1 E)', es: 'Evita una apertura antes de tiempo (USPA SIM 4-1 E)', uk: 'Як не допустити раннього розкриття (USPA SIM 4-1 E)', ru: 'Как не допустить раннего раскрытия (USPA SIM 4-1 E)' },
          items: [
            {
              en: 'Ask for a <b>pin check</b> before exit.',
              es: 'Pide una <b>revisión del pin</b> antes de salir.',
              uk: 'Попроси <b>перевірити шпильку</b> перед відокремленням.',
              ru: 'Попроси <b>проверить шпильку</b> перед отделением.',
            },
            {
              en: 'Move carefully in the plane: <b>keep your rig off the door frame</b> on climb-out and exit.',
              es: 'Muévete con cuidado en el avión: <b>que tu equipo no roce el marco de la puerta</b> al asomarte y al salir.',
              uk: 'Рухайся в літаку обережно: <b>не чіпляй ранцем дверну раму</b>, коли виходиш у двері й відокремлюєшся.',
              ru: 'Двигайся в самолёте осторожно: <b>не задевай ранцем дверной проём</b>, когда выходишь в дверь и отделяешься.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'red',
          title: { en: 'The AAD is not a plan', es: 'El AAD no es un plan', uk: 'AAD — це не план', ru: 'AAD — это не план' },
          points: [
            {
              en: 'It fires the reserve only at a <b>preset altitude and speed</b>, far lower than your pull (USPA Cat A).',
              es: 'Abre la reserva solo a una <b>altura y velocidad fijadas</b>, muy por debajo de tu apertura (USPA Cat A).',
              uk: 'Він розкриває запасний лише на <b>заданій висоті й швидкості</b>, набагато нижче за твоє розкриття (USPA Cat A).',
              ru: 'Он раскрывает запасной только на <b>заданной высоте и скорости</b>, намного ниже твоего раскрытия (USPA Cat A).',
            },
            {
              en: 'It is a <b>backup</b>. Pulling the handles is <b>always your job</b>.',
              es: 'Es un <b>respaldo</b>. Tirar de las manijas es <b>siempre tu trabajo</b>.',
              uk: 'Це <b>підстраховка</b>. Висмикувати ручки — <b>завжди твоя робота</b>.',
              ru: 'Это <b>подстраховка</b>. Выдёргивать ручки — <b>всегда твоя работа</b>.',
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: {
                en: 'In freefall you feel the main bag leave your back, but the pilot chute is still in its pouch. What do you do?',
                es: 'En caída libre sientes que la bolsa de la principal sale de tu espalda, pero el extractor sigue en su bolsillo. ¿Qué haces?',
                uk: 'У вільному падінні відчуваєш, що камера основного пішла зі спини, а витяжний ще в кишені. Що робиш?',
                ru: 'В свободном падении чувствуешь, что камера основного ушла со спины, а вытяжной ещё в кармане. Что делаешь?',
              },
              options: [
                { en: 'Pull silver at once, before anything else', es: 'Tirar de la plateada enseguida, antes que nada', uk: 'Одразу висмикнути кільце запасного, перш за все', ru: 'Сразу выдернуть кольцо запасного, прежде всего' },
                { en: 'Keep the arch and wait for the AAD to fire', es: 'Mantener el arco y esperar a que actúe el AAD', uk: 'Тримати прогин і чекати, поки спрацює AAD', ru: 'Держать прогиб и ждать, пока сработает AAD' },
                { en: 'Throw the pilot chute: two tries or 5 s, else cut away', es: 'Lanzar el extractor: dos intentos o 5 s, si no, liberar', uk: 'Викинути витяжний: дві спроби або 5 с, інакше відчеплення', ru: 'Выбросить вытяжной: две попытки или 5 с, иначе отцепка' },
              ],
              answer: 2,
              why: {
                en: 'USPA SIM 4-1 E: first try to throw the pilot chute, twice or for 5 s. If that fails, cut away and deploy the reserve. If you do throw it, be ready for the emergency procedure.',
                es: 'USPA SIM 4-1 E: primero intenta lanzar el extractor, dos veces o 5 s. Si no puedes, libera y abre la reserva. Si lo lanzas, prepárate para el procedimiento de emergencia.',
                uk: 'USPA SIM 4-1 E: спершу спробуй викинути витяжний, двічі або 5 с. Не вийшло — відчеплення і запасний. Якщо викинув, будь готовий до аварійної процедури.',
                ru: 'USPA SIM 4-1 E: сначала попробуй выбросить вытяжной, дважды или 5 с. Не вышло — отцепка и запасной. Если выбросил, будь готов к аварийной процедуре.',
              },
            },
            {
              q: {
                en: 'You threw the pilot chute, but it hangs behind your back and the main does not open. What now?',
                es: 'Lanzaste el extractor, pero se queda detrás de tu espalda y la principal no se abre. ¿Y ahora?',
                uk: 'Ти викинув витяжний, але він висить за спиною, і основний не розкривається. Що далі?',
                ru: 'Ты выбросил вытяжной, но он висит за спиной, и основной не раскрывается. Что дальше?',
              },
              options: [
                { en: 'Twist and look over your shoulder; 2 tries or 5 s', es: 'Girar y mirar por encima del hombro; 2 intentos o 5 s', uk: 'Повернутися й глянути через плече; 2 спроби або 5 с', ru: 'Повернуться и глянуть через плечо; 2 попытки или 5 с' },
                { en: 'Reach back behind you and pull it by hand', es: 'Llevar la mano atrás y tirar de él a mano', uk: 'Дістати його рукою за спиною й потягнути', ru: 'Достать его рукой за спиной и потянуть' },
                { en: 'Arch harder and wait for it to catch air', es: 'Arquear más y esperar a que tome aire', uk: 'Прогнутися сильніше й чекати, поки підхопить потік', ru: 'Прогнуться сильнее и ждать, пока подхватит поток' },
              ],
              answer: 0,
              why: {
                en: 'Pilot-chute hesitation: twisting changes the airflow behind you (USPA Cat A). Still stuck after two tries or 5 s: emergency procedure.',
                es: 'El extractor se queda atrás: girar cambia el flujo de aire detrás de ti (USPA Cat A). ¿Sigue igual tras dos intentos o 5 s? Procedimiento de emergencia.',
                uk: 'Витяжний «завис»: поворот змінює потік за спиною (USPA Cat A). Після двох спроб або 5 с усе ще висить — аварійна процедура.',
                ru: 'Вытяжной «завис»: поворот меняет поток за спиной (USPA Cat A). После двух попыток или 5 с всё ещё висит — аварийная процедура.',
              },
            },
            {
              q: {
                en: "Second sweep for the pilot chute handle, and your hand still can't find it. What next?",
                es: 'Segunda pasada buscando la manija del extractor y tu mano sigue sin encontrarla. ¿Qué sigue?',
                uk: 'Друга спроба знайти ручку витяжного, а рука її досі не знаходить. Що далі?',
                ru: 'Вторая попытка найти ручку вытяжного, а рука её всё ещё не находит. Что дальше?',
              },
              options: [
                { en: "A third try, you're nearly there", es: 'Un tercer intento, ya casi está', uk: 'Третя спроба, вже майже', ru: 'Третья попытка, уже почти' },
                { en: "Your school's emergency procedure", es: 'El procedimiento de emergencia de tu escuela', uk: 'Аварійна процедура твоєї школи', ru: 'Аварийная процедура твоей школы' },
                { en: 'Signal the instructor and wait', es: 'Hacer una señal al instructor y esperar', uk: 'Подати знак інструктору й чекати', ru: 'Подать знак инструктору и ждать' },
              ],
              answer: 1,
              why: {
                en: 'Two tries or 5 s, whichever comes first, then the emergency procedure (USPA Cat A). USPA SIM says reserve; ask whether your school teaches reserve only or a cutaway first.',
                es: 'Dos intentos o 5 s, lo que llegue antes, y luego el procedimiento de emergencia (USPA Cat A). El SIM de USPA dice la reserva; pregunta si tu escuela enseña solo la reserva o liberar primero.',
                uk: 'Дві спроби або 5 с, що настане раніше, потім аварійна процедура (USPA Cat A). USPA SIM каже: запасний; запитай, чи твоя школа вчить одразу запасний, чи спершу відчеплення.',
                ru: 'Две попытки или 5 с, что наступит раньше, потом аварийная процедура (USPA Cat A). USPA SIM говорит: запасной; спроси, учит ли твоя школа сразу запасной или сначала отцепку.',
              },
            },
            {
              q: {
                en: 'Climbing out, your rig scrapes the door frame. What do you do?',
                es: 'Al asomarte a la puerta, tu equipo roza el marco. ¿Qué haces?',
                uk: 'Коли виходиш у двері, ранець чіпляє дверну раму. Що робиш?',
                ru: 'Когда выходишь в дверь, ранец задевает дверной проём. Что делаешь?',
              },
              options: [
                { en: "Nothing, a scraped rig is normal on exit", es: 'Nada, rozar el equipo al salir es normal', uk: 'Нічого, зачепити рюкзак на виході — нормально', ru: 'Ничего, задеть ранец на выходе — нормально' },
                { en: 'Hold your reserve handle in freefall', es: 'Agarrar la manija de la reserva en caída libre', uk: 'Тримати кільце запасного у вільному падінні', ru: 'Держать кольцо запасного в свободном падении' },
                { en: 'Tell your instructor; get a pin check', es: 'Decírselo al instructor; pedir revisión del pin', uk: 'Сказати інструктору; перевірити шпильку', ru: 'Сказать инструктору; проверить шпильку' },
              ],
              answer: 2,
              why: {
                en: 'A pin knocked loose can open the container early. USPA SIM 4-1 E: ask for a pin check before exit and keep your rig off the door frame.',
                es: 'Un pin que se suelta puede abrir el contenedor antes de tiempo. USPA SIM 4-1 E: pide una revisión del pin antes de salir y que tu equipo no roce el marco de la puerta.',
                uk: 'Збита шпилька може відкрити ранець раніше часу. USPA SIM 4-1 E: попроси перевірити шпильку перед відокремленням і не чіпляй ранцем дверну раму.',
                ru: 'Сбитая шпилька может открыть ранец раньше времени. USPA SIM 4-1 E: попроси проверить шпильку перед отделением и не задевай ранцем дверной проём.',
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
                en: 'Extend your legs <b>a little</b> (about 6 in / 15 cm) and <b>hold</b> (USPA). Thumbs up = good.',
                es: 'Estira las piernas <b>un poco</b> (unos 15 cm) y <b>mantén</b> (USPA). Pulgar arriba = bien.',
                uk: 'Випрями ноги <b>трохи</b> (приблизно на 15 см) і <b>тримай</b> (USPA). «Палець угору» = добре.',
                ru: 'Выпрями ноги <b>немного</b> (примерно на 15 см) и <b>держи</b> (USPA). «Палец вверх» = хорошо.',
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
                en: 'Check arm position: about 90° at the shoulder, 90–120° at the elbow, relaxed.',
                es: 'Revisa la posición de los brazos: unos 90° en el hombro, 90–120° en el codo, relajados.',
                uk: 'Перевір положення рук: приблизно 90° у плечі, 90–120° у лікті, розслаблено.',
                ru: 'Проверь положение рук: примерно 90° в плече, 90–120° в локте, расслабленно.',
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
              name: { en: 'Open hand', es: 'Mano abierta', uk: 'Відкрита долоня', ru: 'Открытая ладонь' },
              what: {
                en: 'An open hand, after you throw (USPA list; not in the filmed set).',
                es: 'Una mano abierta, después de lanzar (lista de la USPA; no está en las grabadas).',
                uk: 'Відкрита долоня після кидка (список USPA; у знятих жестах її немає).',
                ru: 'Открытая ладонь после броска (список USPA; в снятых жестах её нет).',
              },
              act: {
                en: '<b>Let go</b> of the pilot chute: you\'re still holding it.',
                es: '<b>Suelta</b> el extractor: todavía lo tienes en la mano.',
                uk: '<b>Відпусти</b> витяжний парашут: ти досі його тримаєш.',
                ru: '<b>Отпусти</b> вытяжной: ты всё ещё его держишь.',
              },
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
                en: 'An instructor shakes your harness right after exit. Not a USPA signal: ask your school what it means. <q-check/>',
                es: 'Un instructor sacude tu arnés justo después de salir. No es una señal de la USPA: pregunta en tu escuela qué significa. <q-check/>',
                uk: 'Інструктор трусить тебе за підвісну систему одразу після відокремлення. Це не жест USPA: запитай у своїй школі, що він означає. <q-check/>',
                ru: 'Инструктор трясёт тебя за подвесную систему сразу после отделения. Это не жест USPA: спроси в своей школе, что он значит. <q-check/>',
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
                { en: 'Extend your legs about 6 in (15 cm) and hold', es: 'Estirar las piernas unos 15 cm y mantener', uk: 'Випрямити ноги приблизно на 15 см і тримати', ru: 'Выпрямить ноги примерно на 15 см и держать' },
              ],
              answer: 2,
              why: {
                en: 'V is legs out: extend them a little, about 6 in (15 cm), and hold (USPA). Not all the way. A thumbs up means good.',
                es: 'La V es estirar las piernas: un poco, unos 15 cm, y mantener (USPA). No del todo. El pulgar arriba significa bien.',
                uk: 'V — випрями ноги: трохи, приблизно на 15 см, і тримай (USPA). Не до кінця. «Палець угору» означає «добре».',
                ru: 'V — выпрями ноги: немного, примерно на 15 см, и держи (USPA). Не до конца. «Палец вверх» значит «хорошо».',
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
