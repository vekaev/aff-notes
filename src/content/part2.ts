import type { Part } from './types';

export const part2: Part = {
  id: 'part2',
  roman: 'II',
  range: { en: '13,500 → 5,500 ft', es: '13,500 → 5,500 ft', uk: '13 500 → 5 500 футів', ru: '13 500 → 5 500 футов' },
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
                en: 'Right after exit: push the <b>hips down</b> toward the ground and <b>arch</b>. This is the most stable position, belly to earth.',
                es: 'Justo después de salir: empuja la <b>cadera hacia el suelo</b> y <b>arquea</b>. Es la posición más estable, panza a tierra.',
                uk: 'Одразу після відокремлення: <b>таз штовхаємо вниз</b>, до землі, і <b>прогинаємося</b>. Це найстійкіше положення — животом до землі.',
                ru: 'Сразу после отделения: <b>таз толкаем вниз</b>, к земле, и <b>прогибаемся</b>. Это самое устойчивое положение — животом к земле.',
              },
            },
            {
              type: 'steps',
              items: [
                {
                  title: { en: 'Hips down, arch', es: 'Cadera abajo, arquea', uk: 'Таз униз, прогин', ru: 'Таз вниз, прогиб' },
                  sub: { en: 'The hips are the <b>lowest point</b> of the body.', es: 'La cadera es el <b>punto más bajo</b> del cuerpo.', uk: 'Таз — <b>найнижча точка</b> тіла.', ru: 'Таз — <b>самая нижняя точка</b> тела.' },
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
                    en: 'Touch your <b>thumbs to your ears</b>, then <b>open back out</b>: that\'s where square arms are.',
                    es: 'Toca las <b>orejas con los pulgares</b> y <b>vuelve a abrir</b>: ahí están los brazos en escuadra.',
                    uk: 'Приклади <b>великі пальці до вух</b> і <b>розведи руки назад</b>: це і є руки «квадратом».',
                    ru: 'Приложи <b>большие пальцы к ушам</b> и <b>разведи руки обратно</b>: это и есть руки «квадратом».',
                  },
                },
                {
                  title: { en: 'Legs', es: 'Piernas', uk: 'Ноги', ru: 'Ноги' },
                  sub: {
                    en: 'You said "legs together and up". Many schools teach knees about <b>shoulder width</b>, shins up, toes pointed. <q-check/>',
                    es: 'Dijiste "piernas juntas y arriba". Muchas escuelas enseñan rodillas más o menos a la <b>anchura de los hombros</b>, espinillas arriba, puntas de los pies estiradas. <q-check/>',
                    uk: 'Ти сказав «ноги разом і вгору». У багатьох школах навчають: коліна приблизно на <b>ширині плечей</b>, гомілки вгору, носки витягнуті. <q-check/>',
                    ru: 'Ты сказал «ноги вместе и вверх». Во многих школах учат: колени примерно на <b>ширине плеч</b>, голени вверх, носки вытянуты. <q-check/>',
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
                { en: 'Push the hips down and arch', es: 'Empujas la cadera hacia abajo y arqueas', uk: 'Штовхаєш таз униз і прогинаєшся', ru: 'Толкаешь таз вниз и прогибаешься' },
                { en: 'Look down to find the ground', es: 'Miras abajo para ver el suelo', uk: 'Дивишся вниз, шукаєш землю', ru: 'Смотришь вниз, ищешь землю' },
                { en: 'Pull your knees to your chest', es: 'Llevas las rodillas al pecho', uk: 'Підтягуєш коліна до грудей', ru: 'Подтягиваешь колени к груди' },
              ],
              answer: 0,
              why: {
                en: 'Hips down and arch: belly to earth is the most stable position, with the hips as the lowest point.',
                es: 'Cadera abajo y arco: panza a tierra es la posición más estable, con la cadera como punto más bajo.',
                uk: 'Таз униз і прогин: животом до землі — найстійкіше положення, таз — найнижча точка.',
                ru: 'Таз вниз и прогиб: животом к земле — самое устойчивое положение, таз — самая нижняя точка.',
              },
            },
            {
              q: { en: 'How do you find square arms?', es: '¿Cómo encuentras los brazos en escuadra?', uk: 'Як знайти положення рук «квадратом»?', ru: 'Как найти положение рук «квадратом»?' },
              options: [
                { en: 'Stretch both arms straight out to the sides', es: 'Estiras los dos brazos rectos a los lados', uk: 'Витягнути руки прямо в сторони', ru: 'Вытянуть руки прямо в стороны' },
                { en: 'Touch your thumbs to your ears, then open back out', es: 'Tocas las orejas con los pulgares y vuelves a abrir', uk: 'Прикласти великі пальці до вух і розвести руки назад', ru: 'Приложить большие пальцы к ушам и развести руки обратно' },
                { en: 'Hold the chest strap', es: 'Agarras la cinta de pecho', uk: 'Триматися за грудну перемичку', ru: 'Держаться за грудную перемычку' },
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
              q: { en: 'In the box, which part of your body is the lowest?', es: 'En la caja, ¿qué parte del cuerpo queda más baja?', uk: 'Яка частина тіла в «коробочці» найнижча?', ru: 'Какая часть тела в «коробочке» самая нижняя?' },
              options: [
                { en: 'Your head', es: 'La cabeza', uk: 'Голова', ru: 'Голова' },
                { en: 'Your knees', es: 'Las rodillas', uk: 'Коліна', ru: 'Колени' },
                { en: 'Your hips', es: 'La cadera', uk: 'Таз', ru: 'Таз' },
              ],
              answer: 2,
              why: {
                en: 'You push the hips down toward the ground, so they are the lowest point of the body.',
                es: 'Empujas la cadera hacia el suelo, así que es el punto más bajo del cuerpo.',
                uk: 'Таз штовхаємо вниз, до землі, тому він — найнижча точка тіла.',
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
              alt: '~13,500',
              value: 13.5,
              title: { en: 'Exit, arch', es: 'Salida, arquea', uk: 'Відокремлення, прогин', ru: 'Отделение, прогиб' },
              sub: {
                en: '<b>Hips down</b>, chin up. Exit altitude not confirmed. <q-check/>',
                es: '<b>Cadera abajo</b>, barbilla arriba. Altura de salida sin confirmar. <q-check/>',
                uk: '<b>Таз униз</b>, підборіддя вгору. Висота відокремлення не підтверджена. <q-check/>',
                ru: '<b>Таз вниз</b>, подбородок вверх. Высота отделения не подтверждена. <q-check/>',
              },
            },
            {
              alt: '↓',
              value: 12.5,
              title: { en: 'Circle of awareness', es: 'Círculo de atención', uk: 'Коло уваги', ru: 'Круг внимания' },
              sub: {
                en: '<b>Altitude</b> → left instructor → right instructor → chin up → <b>altitude</b>.',
                es: '<b>Altura</b> → instructor izquierdo → instructor derecho → barbilla arriba → <b>altura</b>.',
                uk: '<b>Висота</b> → лівий інструктор → правий інструктор → підборіддя вгору → <b>висота</b>.',
                ru: '<b>Высота</b> → левый инструктор → правый инструктор → подбородок вверх → <b>высота</b>.',
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
                en: 'Left → right → chin up → <b>altitude</b>.',
                es: 'Izquierda → derecha → barbilla arriba → <b>altura</b>.',
                uk: 'Ліворуч → праворуч → підборіддя вгору → <b>висота</b>.',
                ru: 'Влево → вправо → подбородок вверх → <b>высота</b>.',
              },
            },
            {
              alt: '↓',
              value: 8,
              title: { en: 'Hold the box, check altitude every 3–5 s', es: 'Mantén la caja, mira la altura cada 3–5 s', uk: 'Тримаємо коробочку, висота кожні 3–5 с', ru: 'Держим коробочку, высота каждые 3–5 с' },
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
              title: { en: 'Lock on', es: 'Lock on', uk: 'Тільки висотомір', ru: 'Только высотомер' },
              sub: { en: '<b>No more</b> exercises.', es: '<b>Se acabaron</b> los ejercicios.', uk: 'Більше <b>жодних</b> вправ.', ru: 'Больше <b>никаких</b> упражнений.' },
            },
            {
              alt: '5,500',
              value: 5.5,
              hot: true,
              title: { en: 'PULL', es: 'ABRIR', uk: 'РОЗКРИТТЯ', ru: 'РАСКРЫТИЕ' },
              sub: {
                en: '<b>Look, reach, pull</b>. Then count to five (Part III).',
                es: '<b>Mira, alcanza, tira</b>. Luego cuenta hasta cinco (Parte III).',
                uk: '<b>Подивись, дотягнись, витягни</b>. Потім відлік до п’яти (частина III).',
                ru: '<b>Посмотри, дотянись, выдерни</b>. Потом счёт до пяти (часть III).',
              },
            },
          ],
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
                { en: 'Chin up → pull → altitude', es: 'Barbilla arriba → abrir → altura', uk: 'Підборіддя вгору → розкриття → висота', ru: 'Подбородок вверх → раскрытие → высота' },
                { en: 'Right instructor → ground → altitude', es: 'Instructor derecho → suelo → altura', uk: 'Правий інструктор → земля → висота', ru: 'Правый инструктор → земля → высота' },
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
              q: { en: 'What happens at 6,000 ft?', es: '¿Qué pasa a 6,000 ft?', uk: 'Що відбувається на висоті 6 000 футів?', ru: 'Что происходит на высоте 6 000 футов?' },
              options: [
                { en: 'Another circle of awareness', es: 'Otro círculo de atención', uk: 'Ще одне коло уваги', ru: 'Ещё один круг внимания' },
                { en: 'You pull', es: 'Abres', uk: 'Розкриття', ru: 'Раскрытие' },
                { en: 'Lock on: no more exercises', es: 'Lock on: se acabaron los ejercicios', uk: 'Тільки висотомір: більше жодних вправ', ru: 'Только высотомер: больше никаких упражнений' },
              ],
              answer: 2,
              why: {
                en: '6,000 is lock on: stop exercises and watch the altimeter. You pull at 5,500.',
                es: '6,000 es lock on: deja los ejercicios y mira el altímetro. Abres a 5,500.',
                uk: '6 000 — тільки висотомір: припиняєш вправи й дивишся на висотомір. Розкриття на 5 500.',
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
              big: '3–5 s',
              text: {
                en: 'USPA says <b>every 3 seconds</b>; some schools teach about 5. <b>All the time.</b>',
                es: 'La USPA dice <b>cada 3 segundos</b>; algunas escuelas enseñan unos 5. <b>Todo el tiempo.</b>',
                uk: 'USPA: <b>кожні 3 секунди</b>; деякі школи вчать близько 5. <b>Постійно.</b>',
                ru: 'USPA: <b>каждые 3 секунды</b>; некоторые школы учат около 5. <b>Постоянно.</b>',
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
                en: 'When an <b>instructor signals</b> you to. <q-check/>',
                es: 'Cuando un <b>instructor te lo indique</b>. <q-check/>',
                uk: 'Коли <b>інструктор подає знак</b>. <q-check/>',
                ru: 'Когда <b>инструктор подаёт знак</b>. <q-check/>',
              },
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          points: [
            {
              en: 'You remembered three reasons; the usual fourth is <b>instructor signal</b> (a slap on the wrist)',
              es: 'Recordaste tres motivos; el cuarto suele ser <b>señal del instructor</b> (una palmada en la muñeca)',
              uk: 'Ти запам’ятав три причини; зазвичай четверта — <b>за знаком інструктора</b> (плескання по зап’ястю)',
              ru: 'Ты запомнил три причины; обычно четвёртая — <b>по знаку инструктора</b> (хлопок по запястью)',
            },
            {
              en: 'Your "every 3" is <b>USPA\'s rule</b>: an altitude check every 3 seconds',
              es: 'Tu "cada 3" es la <b>regla de la USPA</b>: mirar la altura cada 3 segundos',
              uk: 'Твоє «кожні 3» — <b>правило USPA</b>: перевірка висоти кожні 3 секунди',
              ru: 'Твоё «каждые 3» — <b>правило USPA</b>: проверка высоты каждые 3 секунды',
            },
            {
              en: 'Overloaded or lost? Default to: <b>altitude, arch, pull at 5,500</b>',
              es: '¿Saturado o perdido? Vuelve a lo básico: <b>altura, arco, abrir a 5,500</b>',
              uk: 'Перевантажений чи загубився? За замовчуванням: <b>висота, прогин, розкриття на 5 500</b>',
              ru: 'Перегружен или потерялся? По умолчанию: <b>высота, прогиб, раскрытие на 5 500</b>',
            },
          ],
        },
        {
          type: 'rules',
          items: [
            {
              big: '6,000',
              tone: 'accent',
              title: { en: 'Lock on', es: 'Lock on', uk: 'Тільки висотомір', ru: 'Только высотомер' },
              text: {
                en: 'Stop <b>all exercises</b>. Watch the <b>altimeter only</b>.',
                es: 'Deja <b>todos los ejercicios</b>. Mira <b>solo el altímetro</b>.',
                uk: 'Припини <b>усі вправи</b>. Дивися <b>тільки на висотомір</b>.',
                ru: 'Прекрати <b>все упражнения</b>. Смотри <b>только на высотомер</b>.',
              },
            },
            {
              big: '5,500',
              tone: 'accent',
              title: { en: 'Pull', es: 'Abrir', uk: 'Розкриття', ru: 'Раскрытие' },
              text: {
                en: 'Our pull altitude is <b>5,500 ft</b>, not 5,000.',
                es: 'Nuestra altura de apertura es <b>5,500 ft</b>, no 5,000.',
                uk: 'Ми розкриваємося на висоті <b>5 500 футів</b>, а не 5 000.',
                ru: 'Мы раскрываемся на высоте <b>5 500 футов</b>, а не 5 000.',
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
                en: 'USPA says every 3 seconds; some schools teach about 5. Either way, all the time.',
                es: 'La USPA dice cada 3 segundos; algunas escuelas enseñan unos 5. En todo caso, todo el tiempo.',
                uk: 'USPA: кожні 3 секунди; деякі школи вчать близько 5. У будь-якому разі — постійно.',
                ru: 'USPA: каждые 3 секунды; некоторые школы учат около 5. В любом случае — постоянно.',
              },
            },
            {
              q: { en: 'What is our pull altitude?', es: '¿Cuál es nuestra altura de apertura?', uk: 'На якій висоті ми розкриваємося?', ru: 'На какой высоте мы раскрываемся?' },
              options: [
                { en: '5,000 ft', es: '5,000 ft', uk: '5 000 футів', ru: '5 000 футов' },
                { en: '5,500 ft', es: '5,500 ft', uk: '5 500 футів', ru: '5 500 футов' },
                { en: '6,000 ft', es: '6,000 ft', uk: '6 000 футів', ru: '6 000 футов' },
              ],
              answer: 1,
              why: {
                en: 'We pull at 5,500 ft, not 5,000. 6,000 is lock on.',
                es: 'Abrimos a 5,500 ft, no a 5,000. 6,000 es lock on.',
                uk: 'Розкриваємося на 5 500 футах, а не на 5 000. На 6 000 — тільки висотомір.',
                ru: 'Раскрываемся на 5 500 футах, а не на 5 000. На 6 000 — только высотомер.',
              },
            },
            {
              q: { en: 'You feel overloaded or lost in freefall. What do you default to?', es: 'Te sientes saturado o perdido en caída libre. ¿A qué vuelves?', uk: 'У вільному падінні ти перевантажений або загубився. До чого повертаєшся?', ru: 'В свободном падении ты перегружен или потерялся. К чему возвращаешься?' },
              options: [
                { en: 'Look for the instructors until you find them', es: 'Buscar a los instructores hasta encontrarlos', uk: 'Шукати інструкторів, поки не знайдеш', ru: 'Искать инструкторов, пока не найдёшь' },
                { en: 'Repeat the practice touches', es: 'Repetir los toques de práctica', uk: 'Повторити тренувальні дотики', ru: 'Повторить тренировочные касания' },
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
              clip: 's_arch',
              name: { en: 'Arch', es: 'Arquea', uk: 'Прогнись', ru: 'Прогнись' },
              what: {
                en: 'Thumb down. This is the "thumb down" you remembered. <q-check/>',
                es: 'Pulgar abajo. Este es el "pulgar abajo" que recordabas. <q-check/>',
                uk: 'Великий палець униз. Це той самий «палець униз», який ти запам’ятав. <q-check/>',
                ru: 'Большой палец вниз. Это тот самый «палец вниз», который ты запомнил. <q-check/>',
              },
              act: {
                en: 'Push your hips forward / down, arch more.',
                es: 'Empuja la cadera hacia adelante / abajo, arquea más.',
                uk: 'Таз уперед / вниз, прогнись сильніше.',
                ru: 'Таз вперёд / вниз, прогнись сильнее.',
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
              clip: 's_good',
              name: { en: 'Good', es: 'Bien', uk: 'Добре', ru: 'Хорошо' },
              what: { en: 'Thumbs up.', es: 'Pulgar arriba.', uk: 'Великий палець угору.', ru: 'Большой палец вверх.' },
              act: { en: 'Hold what you have now.', es: 'Mantén la posición que tienes.', uk: 'Так і тримай.', ru: 'Так и держи.' },
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
              clip: 's_alt',
              name: { en: 'Check altitude', es: 'Mira la altura', uk: 'Перевір висоту', ru: 'Проверь высоту' },
              what: { en: 'Slap or tap on your wrist.', es: 'Palmada o toque en la muñeca.', uk: 'Плескання або дотик по зап’ястю.', ru: 'Хлопок или касание по запястью.' },
              act: { en: 'Look at the altimeter.', es: 'Mira el altímetro.', uk: 'Подивись на висотомір.', ru: 'Посмотри на высотомер.' },
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
                en: 'Push hips further forward, chin up.',
                es: 'Empuja más la cadera hacia adelante, barbilla arriba.',
                uk: 'Таз ще сильніше вперед, підборіддя вгору.',
                ru: 'Таз ещё сильнее вперёд, подбородок вверх.',
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
                { en: 'Turn the way the finger points', es: 'Girar hacia donde apunta el dedo', uk: 'Повернути туди, куди показує палець', ru: 'Повернуть туда, куда показывает палец' },
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
              q: { en: 'An instructor slaps or taps your wrist. What does it mean?', es: 'Un instructor te da una palmada o un toque en la muñeca. ¿Qué significa?', uk: 'Інструктор плескає або торкається твого зап’ястя. Що це означає?', ru: 'Инструктор хлопает или касается твоего запястья. Что это значит?' },
              options: [
                { en: 'Check altitude', es: 'Mira la altura', uk: 'Перевір висоту', ru: 'Проверь высоту' },
                { en: 'Relax', es: 'Relájate', uk: 'Розслабся', ru: 'Расслабься' },
                { en: 'Legs out', es: 'Estira las piernas', uk: 'Випрями ноги', ru: 'Выпрями ноги' },
              ],
              answer: 0,
              why: {
                en: 'A slap or tap on the wrist means look at the altimeter.',
                es: 'Una palmada o un toque en la muñeca significa mirar el altímetro.',
                uk: 'Плескання або дотик по зап’ястю — подивись на висотомір.',
                ru: 'Хлопок или касание по запястью — посмотри на высотомер.',
              },
            },
            {
              q: { en: 'You see two fingers in a V. What do you do?', es: 'Ves dos dedos en V. ¿Qué haces?', uk: 'Бачиш два пальці літерою V. Що робиш?', ru: 'Видишь два пальца буквой V. Что делаешь?' },
              options: [
                { en: 'Two more practice touches', es: 'Dos toques de práctica más', uk: 'Ще два тренувальні дотики', ru: 'Ещё два тренировочных касания' },
                { en: 'Bring your knees to your chest', es: 'Llevar las rodillas al pecho', uk: 'Підтягнути коліна до грудей', ru: 'Подтянуть колени к груди' },
                { en: 'Smoothly extend your legs until you get a thumbs up', es: 'Estirar las piernas suavemente hasta que te hagan pulgar arriba', uk: 'Плавно випрямляти ноги, поки не покажуть «палець угору»', ru: 'Плавно выпрямлять ноги, пока не покажут «палец вверх»' },
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
                { en: 'Go lower, dive', es: 'Baja más, en picada', uk: 'Нижче, пікіруй', ru: 'Ниже, пикируй' },
                { en: 'Arch: push your hips forward, arch more', es: 'Arquea: empuja la cadera hacia adelante, arquea más', uk: 'Прогнись: таз уперед, прогнись сильніше', ru: 'Прогнись: таз вперёд, прогнись сильнее' },
                { en: 'Something is wrong, pull', es: 'Algo va mal, abre', uk: 'Щось не так, розкривайся', ru: 'Что-то не так, раскрывайся' },
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
