import type { Clip, L, Part } from './types';

// Part IV: emergencies, two canopies out, how people get hurt, stage-by-stage mistakes, questions.
// Source: docs/legacy-page.html (#ep, #mal, #two, #real, #tips, #questions) plus docs/research.

const t = (en: string, es: string, ru: string, uk: string): L => ({ en, es, uk, ru });
const clip = (src: string, caption: L, credit: string, yt: string, start: number): Clip => ({
  src,
  caption,
  credit,
  yt,
  t: start,
});

const EP = t(`<b>Emergency procedure.</b>`, `<b>Procedimiento de emergencia.</b>`, `<b>Аварийная процедура.</b>`, `<b>Аварійна процедура.</b>`);

export const part4: Part = {
  id: 'part4',
  roman: 'IV',
  range: t(`Any time`, `En cualquier momento`, `В любой момент`, `Будь-коли`),
  title: t(`When it goes wrong`, `Cuando algo sale mal`, `Если что-то не так`, `Якщо щось пішло не так`),
  tone: 'red',
  chapters: [
    // ---------------------------------------------------------------- EP
    {
      id: 'ep',
      title: t(
        `Emergency procedure: cutaway and reserve`,
        `Procedimiento de emergencia: liberación y reserva`,
        `Аварийная процедура: отцепка и запасной`,
        `Аварійна процедура: відчеплення і запасний`,
      ),
      blocks: [
        {
          type: 'list',
          title: t(
            `Two handles: red cuts away, silver opens the reserve`,
            `Dos manijas: la roja libera, la plateada abre la reserva`,
            `Две ручки: красная отцепляет, кольцо раскрывает запасной`,
            `Дві ручки: червона відчіплює, кільце розкриває запасний`,
          ),
          items: [
            t(
              `Main is bad? <b>Cut it away</b>: red handle, right chest.`,
              `¿La principal está mal? <b>Libérala</b>: manija roja, pecho derecho.`,
              `Основной плохой? <b>Отцепи его</b>: красная подушка, справа на груди.`,
              `Основний поганий? <b>Відчепи його</b>: червона подушка, справа на грудях.`,
            ),
            t(
              `Then <b>open the reserve</b>: silver handle, left chest.`,
              `Luego <b>abre la reserva</b>: manija plateada, pecho izquierdo.`,
              `Потом <b>раскрой запасной</b>: серебряное кольцо, слева на груди.`,
              `Потім <b>розкрий запасний</b>: срібне кільце, зліва на грудях.`,
            ),
            t(
              `<b>Look at each handle</b> before you grab it.`,
              `<b>Mira cada manija</b> antes de agarrarla.`,
              `<b>Посмотри на ручку</b>, прежде чем за неё взяться.`,
              `<b>Подивися на ручку</b>, перш ніж за неї взятися.`,
            ),
          ],
        },
        {
          type: 'p',
          text: t(
            `First, <b>altitude</b>: above 1,000 ft you cut away; below it, silver only (USPA ISP). Then schools teach one of two ways. Learn <b>one clean sequence</b>: which one does your school teach? <q-check/>`,
            `Primero, la <b>altura</b>: por encima de 1,000 ft liberas; por debajo, solo la plateada (USPA ISP). Luego las escuelas enseñan una de dos formas. Aprende <b>una sola secuencia</b>: ¿cuál enseña tu escuela? <q-check/>`,
            `Сначала <b>высота</b>: выше 1 000 футов отцепляешься, ниже — только кольцо (USPA ISP). Дальше школы учат одним из двух способов. Выучи <b>одну чёткую последовательность</b>: какую учат в твоей школе? <q-check/>`,
            `Спершу <b>висота</b>: вище 1 000 футів відчіплюєшся, нижче — лише кільце (USPA ISP). Далі школи навчають одним із двох способів. Вивчи <b>одну чітку послідовність</b>: яку навчають у твоїй школі? <q-check/>`,
          ),
        },
        {
          type: 'split',
          left: [
            { type: 'h', text: t(`A. One hand per handle`, `A. Una mano por manija`, `A. По руке на ручку`, `A. По руці на ручку`) },
            {
              type: 'steps',
              items: [
                {
                  title: t(`Look red`, `Mira la roja`, `Смотри на красную`, `Дивись на червону`),
                  sub: t(`Cutaway pad, <b>right chest</b>.`, `Almohadilla de liberación, <b>pecho derecho</b>.`, `Подушка отцепки, <b>справа на груди</b>.`, `Подушка відчеплення, <b>справа на грудях</b>.`),
                },
                {
                  title: t(`Grab red`, `Agarra la roja`, `Возьмись за красную`, `Візьмися за червону`),
                  sub: t(`<b>Right hand</b>.`, `<b>Mano derecha</b>.`, `<b>Правой рукой</b>.`, `<b>Правою рукою</b>.`),
                },
                {
                  title: t(`Look silver`, `Mira la plateada`, `Смотри на кольцо`, `Дивись на кільце`),
                  sub: t(`Reserve handle, <b>left chest</b>.`, `Manija de la reserva, <b>pecho izquierdo</b>.`, `Кольцо запасного, <b>слева на груди</b>.`, `Кільце запасного, <b>зліва на грудях</b>.`),
                },
                {
                  title: t(`Grab silver`, `Agarra la plateada`, `Возьмись за кольцо`, `Візьмися за кільце`),
                  sub: t(`<b>Left hand</b>.`, `<b>Mano izquierda</b>.`, `<b>Левой рукой</b>.`, `<b>Лівою рукою</b>.`),
                },
                {
                  title: t(`Peel and pull red`, `Despega y tira de la roja`, `Отлепи и выдерни красную`, `Відліпи і висмикни червону`),
                  sub: t(
                    `To <b>full arm extension</b>, still looking at silver. The main is gone.`,
                    `Hasta <b>extender el brazo</b> del todo, sin dejar de mirar la plateada. La principal queda liberada.`,
                    `До <b>полного выпрямления руки</b>, не отводя глаз от кольца. Основной отцеплен.`,
                    `До <b>повного випрямлення руки</b>, не відводячи очей від кільця. Основний відчеплено.`,
                  ),
                },
                {
                  title: t(`Pull silver`, `Tira de la plateada`, `Выдерни кольцо`, `Висмикни кільце`),
                  sub: t(`<b>Full arm extension</b>.`, `Hasta <b>extender el brazo</b> del todo.`, `До <b>полного выпрямления руки</b>.`, `До <b>повного випрямлення руки</b>.`),
                },
                {
                  title: t(`Arch, look up, check the reserve`, `Arquea, mira arriba, revisa la reserva`, `Прогнись, посмотри вверх, проверь запасной`, `Прогнися, подивися вгору, перевір запасний`),
                  sub: t(
                    `Same check: <b>there, square, stable, steerable</b>.`,
                    `La misma revisión: <b>está, cuadrada, estable, gobernable</b>.`,
                    `Та же проверка: <b>есть, квадратный, стабильный, управляемый</b>.`,
                    `Та сама перевірка: <b>є, квадратний, стабільний, керований</b>.`,
                  ),
                },
              ],
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                clip(
                  'ep1',
                  t(
                    `Real rig, one hand per handle: look red, grab, look silver, grab, pull red, pull silver.`,
                    `Equipo real, una mano por manija: mira la roja, agarra, mira la plateada, agarra, tira de la roja, tira de la plateada.`,
                    `Настоящая система, по руке на ручку: посмотреть на красную, взяться, посмотреть на кольцо, взяться, выдернуть красную, выдернуть кольцо.`,
                    `Справжня система, по руці на ручку: подивитися на червону, взятися, подивитися на кільце, взятися, висмикнути червону, висмикнути кільце.`,
                  ),
                  'Bodyflight Spotlight',
                  'nC6D6NHjccI',
                  149,
                ),
              ],
            },
          ],
        },
        {
          type: 'split',
          left: [
            {
              type: 'h',
              text: t(
                `B. Two hands on red (taught at many schools)`,
                `B. Dos manos en la roja (se enseña en muchas escuelas)`,
                `B. Обе руки на красной (так учат во многих школах)`,
                `B. Обидві руки на червоній (так навчають у багатьох школах)`,
              ),
            },
            {
              type: 'steps',
              items: [
                {
                  title: t(`Look red`, `Mira la roja`, `Смотри на красную`, `Дивись на червону`),
                  sub: t(`Cutaway pad, <b>right chest</b>.`, `Almohadilla de liberación, <b>pecho derecho</b>.`, `Подушка отцепки, <b>справа на груди</b>.`, `Подушка відчеплення, <b>справа на грудях</b>.`),
                },
                {
                  title: t(`Both hands on red`, `Las dos manos en la roja`, `Обе руки на красную`, `Обидві руки на червону`),
                  sub: t(`A firm <b>two-hand grip</b>.`, `Agarre firme con <b>las dos manos</b>.`, `Крепко, <b>двумя руками</b>.`, `Міцно, <b>двома руками</b>.`),
                },
                {
                  title: t(`Peel and punch red`, `Despega y empuja la roja`, `Отлепи и пробей красную вниз`, `Відліпи і пробий червону вниз`),
                  sub: t(
                    `Peel it off the Velcro, punch down to <b>full arm extension</b>. The main is gone.`,
                    `Despégala del velcro y empuja hacia abajo hasta <b>extender los brazos</b>. La principal queda liberada.`,
                    `Отлепи с липучки и резко вниз до <b>полного выпрямления рук</b>. Основной отцеплен.`,
                    `Відліпи з липучки й різко вниз до <b>повного випрямлення рук</b>. Основний відчеплено.`,
                  ),
                },
                {
                  title: t(`Look silver`, `Mira la plateada`, `Смотри на кольцо`, `Дивись на кільце`),
                  sub: t(`Reserve handle, <b>left chest</b>.`, `Manija de la reserva, <b>pecho izquierdo</b>.`, `Кольцо запасного, <b>слева на груди</b>.`, `Кільце запасного, <b>зліва на грудях</b>.`),
                },
                {
                  title: t(`Both hands on silver`, `Las dos manos en la plateada`, `Обе руки на кольцо`, `Обидві руки на кільце`),
                  sub: t(
                    `Straight away: <b>don't wait</b> for the AAD. One or two hands on silver: ask your school. <q-check/>`,
                    `Enseguida: <b>no esperes</b> al AAD. ¿Una o dos manos en la plateada? Pregunta en tu escuela. <q-check/>`,
                    `Сразу: <b>не жди</b> AAD. Одной или двумя руками на кольцо — спроси в школе. <q-check/>`,
                    `Одразу: <b>не чекай</b> на AAD. Однією чи двома руками на кільце — запитай у школі. <q-check/>`,
                  ),
                },
                {
                  title: t(`Pull silver`, `Tira de la plateada`, `Выдерни кольцо`, `Висмикни кільце`),
                  sub: t(`<b>Full arm extension</b>.`, `Hasta <b>extender los brazos</b> del todo.`, `До <b>полного выпрямления рук</b>.`, `До <b>повного випрямлення рук</b>.`),
                },
                {
                  title: t(`Arch, look up, check the reserve`, `Arquea, mira arriba, revisa la reserva`, `Прогнись, посмотри вверх, проверь запасной`, `Прогнися, подивися вгору, перевір запасний`),
                  sub: t(
                    `Same check: <b>there, square, stable, steerable</b>.`,
                    `La misma revisión: <b>está, cuadrada, estable, gobernable</b>.`,
                    `Та же проверка: <b>есть, квадратный, стабильный, управляемый</b>.`,
                    `Та сама перевірка: <b>є, квадратний, стабільний, керований</b>.`,
                  ),
                },
              ],
            },
          ],
          right: [
            {
              type: 'clips',
              items: [
                clip(
                  'ep2',
                  t(
                    `Two hands on the red handle (method B). Why: in spins, some jumpers couldn't pull red with one hand (Parachutist, 2019).`,
                    `Dos manos en la manija roja (método B). Por qué: en giros, algunos paracaidistas no pudieron tirar de la roja con una mano (Parachutist, 2019).`,
                    `Обе руки на красной ручке (способ B). Зачем: при вращении некоторые не смогли выдернуть красную одной рукой (Parachutist, 2019).`,
                    `Обидві руки на червоній ручці (спосіб B). Навіщо: під час обертання дехто не зміг висмикнути червону однією рукою (Parachutist, 2019).`,
                  ),
                  'Bodyflight Spotlight',
                  'nC6D6NHjccI',
                  192,
                ),
              ],
            },
          ],
        },
        {
          type: 'rules',
          items: [
            {
              big: '5 s',
              tone: 'red',
              title: t(`5-second rule`, `Regla de los 5 segundos`, `Правило 5 секунд`, `Правило 5 секунд`),
              points: [
                t(
                  `Unclear canopy: <b>5 s at most</b> to decide, counting out loud. A limit, not a wait`,
                  `Vela dudosa: <b>5 s como máximo</b> para decidir, contando en voz alta. Es un límite, no una espera`,
                  `Купол непонятный: <b>не больше 5 с</b> на решение, считая вслух. Это предел, а не время ожидания`,
                  `Купол незрозумілий: <b>не більше 5 с</b> на рішення, рахуючи вголос. Це межа, а не час очікування`,
                ),
                t(
                  `Not clearly better? <b>Emergency procedure</b>`,
                  `¿No mejora claramente? <b>Procedimiento de emergencia</b>`,
                  `Явно не лучше? <b>Аварийная процедура</b>`,
                  `Явно не краще? <b>Аварійна процедура</b>`,
                ),
                t(
                  `Spinning, diving, or clearly not a flying canopy: <b>no 5 s, act now</b>`,
                  `Gira, cae en picado o claramente no es una vela que vuela: <b>sin 5 s, actúa ya</b>`,
                  `Вращается, пикирует или явно не летит: <b>никаких 5 с, действуй сразу</b>`,
                  `Обертається, пікірує або явно не летить: <b>жодних 5 с, дій одразу</b>`,
                ),
                t(
                  `Students: <b>never below 2,500 ft</b>`,
                  `Alumnos: <b>nunca por debajo de 2,500 ft</b>`,
                  `Студенты: <b>никогда ниже 2 500 футов</b>`,
                  `Студенти: <b>ніколи нижче 2 500 футів</b>`,
                ),
                t(
                  `Why (Parachutist, 2019): in the 10 years before, nobody in the US who <b>acted within ~5 s</b>, at or above decision altitude, with working gear, died of a spinning malfunction alone`,
                  `Por qué (Parachutist, 2019): en los 10 años anteriores, en EE. UU. nadie que <b>actuara en ~5 s</b>, a la altura de decisión o por encima y con el equipo en buen estado, murió solo por una malfunción en giro`,
                  `Почему (Parachutist, 2019): за 10 лет до этого в США никто из тех, кто <b>действовал за ~5 с</b> на высоте принятия решения или выше и с исправным снаряжением, не погиб только из-за вращающегося отказа`,
                  `Чому (Parachutist, 2019): за 10 років до того в США ніхто з тих, хто <b>діяв за ~5 с</b> на висоті ухвалення рішення або вище і зі справним спорядженням, не загинув лише через відмову з обертанням`,
                ),
              ],
            },
            {
              big: '2,500 ft',
              tone: 'red',
              title: t(`Decision altitude`, `Altura de decisión`, `Высота принятия решения`, `Висота ухвалення рішення`),
              points: [
                t(
                  `Students <b>decide and act</b> by 2,500 ft (USPA SIM 4-1)`,
                  `Los alumnos <b>deciden y actúan</b> antes de 2,500 ft (USPA SIM 4-1)`,
                  `Студенты <b>решают и действуют</b> не ниже 2 500 футов (USPA SIM 4-1)`,
                  `Студенти <b>вирішують і діють</b> не нижче 2 500 футів (USPA SIM 4-1)`,
                ),
                t(
                  `Fixable canopy problem: <b>two tries only</b>, check your <b>altitude</b> between them`,
                  `Problema arreglable de la vela: <b>solo dos intentos</b>, mira la <b>altura</b> entre uno y otro`,
                  `Исправимая проблема с куполом: <b>только две попытки</b>, между ними смотри на <b>высоту</b>`,
                  `Проблема з куполом, яку можна виправити: <b>лише дві спроби</b>, між ними дивись на <b>висоту</b>`,
                ),
                t(
                  `Not fixed by 2,500 ft? <b>Emergency procedure</b>`,
                  `¿Sin arreglar a 2,500 ft? <b>Procedimiento de emergencia</b>`,
                  `Не исправил к 2 500 футов? <b>Аварийная процедура</b>`,
                  `Не виправив до 2 500 футів? <b>Аварійна процедура</b>`,
                ),
              ],
            },
            {
              big: '1,000 ft',
              tone: 'red',
              title: t(`Hard deck`, `Límite mínimo`, `Нижняя граница`, `Нижня межа`),
              points: [
                t(`Below 1,000 ft <b>don't cut away</b>`, `Por debajo de 1,000 ft <b>no liberes</b>`, `Ниже 1 000 футов <b>не отцепляйся</b>`, `Нижче 1 000 футів <b>не відчіплюйся</b>`),
                t(
                  `<b>Pull the reserve</b> and land with two canopies`,
                  `<b>Abre la reserva</b> y aterriza con dos velas`,
                  `<b>Раскрой запасной</b> и садись на двух куполах`,
                  `<b>Розкрий запасний</b> і сідай на двох куполах`,
                ),
                t(`Exception: a <b>downplane</b>`, `Excepción: un <b>downplane</b>`, `Исключение — <b>«даунплейн»</b>`, `Виняток — <b>«даунплейн»</b>`),
              ],
            },
          ],
        },
        {
          type: 'callout',
          title: t(`Same number, different question`, `Mismo número, otra pregunta`, `Число то же, вопрос другой`, `Число те саме, питання інше`),
          points: [
            t(
              `This 2,500 ft: <b>keep or drop</b> a bad main.`,
              `Estos 2,500 ft: <b>quedarte o liberar</b> una principal mala.`,
              `Эти 2 500 футов: <b>оставить или отцепить</b> плохой основной.`,
              `Ці 2 500 футів: <b>залишити чи відчепити</b> поганий основний.`,
            ),
            t(
              `The 2,500 ft point in the landing pattern (good canopy): <b>where to fly</b>.`,
              `El punto de 2,500 ft del circuito (vela buena): <b>adónde volar</b>.`,
              `Точка 2 500 футов в схеме захода (купол хороший): <b>куда лететь</b>.`,
              `Точка 2 500 футів у схемі заходу (купол добрий): <b>куди летіти</b>.`,
            ),
          ],
        },
        {
          type: 'callout',
          tone: 'red',
          points: [
            t(
              `After a cutaway, <b>pull the reserve yourself</b>, straight away.`,
              `Después de liberar, <b>abre la reserva tú mismo</b>, enseguida.`,
              `После отцепки <b>раскрывай запасной сам</b> и сразу.`,
              `Після відчеплення <b>розкривай запасний сам</b>, і одразу.`,
            ),
            t(
              `The <b>AAD fires only very low</b>, at a preset altitude: far too late to wait for.`,
              `El <b>AAD solo se activa muy bajo</b>, a una altura fijada: demasiado tarde para esperarlo.`,
              `Страхующий прибор (AAD) <b>срабатывает только очень низко</b>, на заданной высоте: ждать его слишком поздно.`,
              `Страхувальний прилад (AAD) <b>спрацьовує лише дуже низько</b>, на заданій висоті: чекати на нього надто пізно.`,
            ),
            t(
              `An <b>RSL</b>, if your rig has one, can open the reserve as the main leaves. It's a backup: <b>pull silver anyway</b>. <q-check/>`,
              `Un <b>RSL</b>, si tu equipo lo tiene, puede abrir la reserva cuando se va la principal. Es un respaldo: <b>tira de la plateada igual</b>. <q-check/>`,
              `<b>RSL</b>, если он есть на системе, может раскрыть запасной, когда уходит основной. Это страховка: <b>кольцо всё равно выдёргиваешь</b>. <q-check/>`,
              `<b>RSL</b>, якщо він є на системі, може розкрити запасний, коли йде основний. Це страховка: <b>кільце все одно висмикуєш</b>. <q-check/>`,
            ),
          ],
        },
        {
          type: 'callout',
          check: true,
          text: t(
            `Heard on the course, not sure what it meant: "two hands forward and clear the lines that run from right to left toward the shoulder".`,
            `Lo oí en el curso, no sé bien qué significaba: "dos manos adelante y despejar las líneas que van de derecha a izquierda hacia el hombro".`,
            `Слышал на курсе, не понял, что имелось в виду: «двумя руками вперёд и освободить стропы, которые идут справа налево к плечу».`,
            `Чув на курсі, не зрозумів, що мали на увазі: «двома руками вперед і звільнити стропи, що йдуть справа наліво до плеча».`,
          ),
        },
        {
          type: 'watch',
          items: [
            {
              yt: 'nC6D6NHjccI',
              t: 149,
              credit: 'Bodyflight Spotlight',
              label: t(
                `Cutaway and reserve: one hand per handle, then two hands`,
                `Liberación y reserva: una mano por manija, luego dos manos`,
                `Отцепка и запасной: по руке на ручку, потом обеими`,
                `Відчеплення і запасний: по руці на ручку, потім обома`,
              ),
            },
            {
              yt: 'YD1we-F9-3c',
              t: 0,
              credit: 'APF',
              label: t(`Emergency procedures drill`, `Simulacro de procedimientos de emergencia`, `Отработка аварийной процедуры`, `Відпрацювання аварійної процедури`),
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: t(`Where is the cutaway handle?`, `¿Dónde está la manija de liberación?`, `Где подушка отцепки?`, `Де подушка відчеплення?`),
              options: [
                t(`Red, right chest`, `Roja, pecho derecho`, `Красная, справа на груди`, `Червона, справа на грудях`),
                t(`Silver, left chest`, `Plateada, pecho izquierdo`, `Серебряное кольцо, слева на груди`, `Срібне кільце, зліва на грудях`),
                t(`Bottom of the container`, `Abajo del contenedor`, `Внизу ранца`, `Унизу ранця`),
              ],
              answer: 0,
              why: t(
                `Red, on the right chest, cuts away the main. Silver, on the left chest, opens the reserve.`,
                `La roja, en el pecho derecho, libera la principal. La plateada, en el pecho izquierdo, abre la reserva.`,
                `Красная подушка справа отцепляет основной. Серебряное кольцо слева раскрывает запасной.`,
                `Червона подушка справа відчіплює основний. Срібне кільце зліва розкриває запасний.`,
              ),
            },
            {
              q: t(
                `By what altitude must a student decide and act on a bad main?`,
                `¿A qué altura, como mínimo, debe un alumno decidir y actuar con una principal mala?`,
                `До какой высоты студент должен принять решение и действовать, если основной плохой?`,
                `До якої висоти студент має ухвалити рішення й діяти, якщо основний поганий?`,
              ),
              options: [t(`2,500 ft`, `2,500 ft`, `2 500 футов`, `2 500 футів`), t(`1,000 ft`, `1,000 ft`, `1 000 футов`, `1 000 футів`), t(`4,000 ft`, `4,000 ft`, `4 000 футов`, `4 000 футів`)],
              answer: 0,
              why: t(
                `Decision altitude for students is 2,500 ft (USPA SIM 4-1). 1,000 ft is the hard deck, the lowest point for a cutaway.`,
                `La altura de decisión para alumnos es 2,500 ft (USPA SIM 4-1). 1,000 ft es el límite mínimo, la altura más baja para liberar.`,
                `Высота принятия решения для студентов — 2 500 футов (USPA SIM 4-1). 1 000 футов — нижняя граница, ниже которой не отцепляются.`,
                `Висота ухвалення рішення для студентів — 2 500 футів (USPA SIM 4-1). 1 000 футів — нижня межа, нижче якої не відчіплюються.`,
              ),
            },
            {
              q: t(
                `You have just cut away. What opens the reserve?`,
                `Acabas de liberar. ¿Qué abre la reserva?`,
                `Ты только что отцепился. Что откроет запасной?`,
                `Ти щойно відчепився. Що розкриє запасний?`,
              ),
              options: [
                t(`You, pulling silver right away`, `Tú, tirando de la plateada enseguida`, `Ты сам: сразу выдёргиваешь кольцо`, `Ти сам: одразу висмикуєш кільце`),
                t(`The AAD, a second later`, `El AAD, un segundo después`, `AAD, через секунду`, `AAD, за секунду`),
                t(`Nothing until 1,000 ft`, `Nada hasta 1,000 ft`, `Ничего до 1 000 футов`, `Нічого до 1 000 футів`),
              ],
              answer: 0,
              why: t(
                `The AAD fires only very low, at a preset altitude, and the RSL is only a backup. Pulling the handles is always your job (USPA ISP): pull silver yourself, straight away.`,
                `El AAD solo se activa muy bajo, a una altura fijada, y el RSL es solo un respaldo. Tirar de las manijas siempre es tu trabajo (USPA ISP): tira de la plateada tú mismo, enseguida.`,
                `AAD срабатывает только очень низко, на заданной высоте, а RSL — лишь страховка. Выдёргивать ручки — всегда твоя работа (USPA ISP): кольцо выдёргиваешь сам и сразу.`,
                `AAD спрацьовує лише дуже низько, на заданій висоті, а RSL — лише страховка. Висмикувати ручки — завжди твоя робота (USPA ISP): кільце висмикуєш сам і одразу.`,
              ),
            },
            {
              q: t(
                `Your canopy looks odd, but you're not sure it's bad. How long at most before you decide?`,
                `Tu vela se ve rara, pero no estás seguro de que esté mal. ¿Cuánto tiempo como máximo antes de decidir?`,
                `Купол выглядит странно, но ты не уверен, что он плохой. Сколько максимум до решения?`,
                `Купол виглядає дивно, але ти не впевнений, що він поганий. Скільки максимум до рішення?`,
              ),
              options: [
                t(`About 5 seconds`, `Unos 5 segundos`, `Около 5 секунд`, `Близько 5 секунд`),
                t(`Until about 1,000 ft`, `Hasta unos 1,000 ft`, `До 1 000 футов`, `До 1 000 футів`),
                t(`As long as it improves`, `Mientras vaya mejorando`, `Пока становится лучше`, `Доки стає краще`),
              ],
              answer: 0,
              why: t(
                `The 5-second rule: 5 s is the upper limit, not a wait. Not clearly better? Emergency procedure, and as a student never below 2,500 ft. A spin or a canopy that clearly can't fly gets no 5 s: act now.`,
                `La regla de los 5 segundos: 5 s es el máximo, no una espera. ¿No mejora claramente? Procedimiento de emergencia, y como alumno nunca por debajo de 2,500 ft. Un giro o una vela que claramente no vuela no tiene 5 s: actúa ya.`,
                `Правило 5 секунд: 5 с — это предел, а не ожидание. Явно не лучше — аварийная процедура, а студенту никогда не ниже 2 500 футов. При вращении или явно не летящем куполе никаких 5 с: действуй сразу.`,
                `Правило 5 секунд: 5 с — це межа, а не очікування. Явно не краще — аварійна процедура, а студентові ніколи не нижче 2 500 футів. При обертанні або куполі, що явно не летить, жодних 5 с: дій одразу.`,
              ),
            },
            {
              q: t(
                `Below 1,000 ft the main is bad (not a downplane). What do you do?`,
                `Por debajo de 1,000 ft la principal está mal (no es un downplane). ¿Qué haces?`,
                `Ниже 1 000 футов основной плохой (не «даунплейн»). Что делаешь?`,
                `Нижче 1 000 футів основний поганий (не «даунплейн»). Що робиш?`,
              ),
              options: [
                t(`Reserve only, land with both`, `Solo la reserva, aterriza con las dos`, `Только запасной, сажусь на двух`, `Лише запасний, сідаю на двох`),
                t(`Cut away, then the reserve`, `Libera y luego abre la reserva`, `Отцепляюсь, потом запасной`, `Відчіплююся, потім запасний`),
                t(`Keep fixing the main`, `Sigo arreglando la principal`, `Продолжаю исправлять основной`, `Далі виправляю основний`),
              ],
              answer: 0,
              why: t(
                `Below the hard deck a cutaway leaves too little height for the reserve. Pull silver and land with both. Only a downplane is cut away at any altitude.`,
                `Por debajo del límite mínimo, si liberas queda muy poca altura para la reserva. Tira de la plateada y aterriza con las dos. Solo un downplane se libera a cualquier altura.`,
                `Ниже нижней границы после отцепки запасному не хватит высоты. Выдёргивай кольцо и садись на двух. Только при «даунплейне» отцепляются на любой высоте.`,
                `Нижче нижньої межі після відчеплення запасному не вистачить висоти. Висмикуй кільце й сідай на двох. Лише при «даунплейні» відчіплюються на будь-якій висоті.`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- malfunctions
    {
      id: 'mal',
      title: t(`What can go wrong`, `Qué puede salir mal`, `Какие бывают отказы`, `Які бувають відмови`),
      blocks: [
        {
          type: 'p',
          text: t(
            `Three families: <b>spot which one</b>, then act. In doubt? <b>Emergency procedure.</b>`,
            `Tres familias: <b>identifica cuál</b> tienes y actúa. ¿Dudas? <b>Procedimiento de emergencia.</b>`,
            `Три группы: <b>пойми, какая</b> у тебя, и действуй. Сомневаешься — <b>аварийная процедура.</b>`,
            `Три групи: <b>зрозумій, яка</b> в тебе, і дій. Сумніваєшся — <b>аварійна процедура.</b>`,
          ),
        },
        {
          type: 'p',
          muted: true,
          text: t(
            `Some clips are first person, as you'd see it looking up (USPA's VR malfunction series); the rest are mostly from outside (APF "Cutaway!").`,
            `Algunos clips son en primera persona, como lo verías al mirar arriba (serie VR de malfunciones de USPA); los demás son sobre todo desde fuera ("Cutaway!" de APF).`,
            `Часть клипов — от первого лица, как увидишь купол, подняв голову (VR-серия USPA про отказы); остальные в основном со стороны («Cutaway!» от APF).`,
            `Частина кліпів — від першої особи, як побачиш купол, піднявши голову (VR-серія USPA про відмови); решта здебільшого збоку («Cutaway!» від APF).`,
          ),
        },
        {
          type: 'cards',
          pill: 'EP',
          groupTitle: t(`Nothing out, or almost nothing`, `No sale nada, o casi nada`, `Ничего не вышло или почти ничего`, `Нічого не вийшло або майже нічого`),
          groupSub: t(`High speed: you are still falling fast.`, `Alta velocidad: sigues cayendo rápido.`, `Высокая скорость: ты всё ещё быстро падаешь.`, `Висока швидкість: ти досі швидко падаєш.`),
          items: [
            {
              drawing: 'none',
              tone: 'ep',
              name: t(`Hard pull / can't find the handle`, `Tirón duro / no encuentras la manija`, `Тугое вытягивание / не найти ручку`, `Туге витягування / не знайти ручку`),
              what: t(
                `The pilot chute handle won't come out, or your hand can't find it.`,
                `La manija del extractor no sale, o tu mano no la encuentra.`,
                `Ручка вытяжного (медузы) не вытаскивается, или рука её не находит.`,
                `Ручка витяжного парашута (медузи) не витягується, або рука її не знаходить.`,
              ),
              act: t(
                `<b>Two tries or 5 s</b>, whichever comes first. Then your school's emergency procedure: reserve only (USPA SIM) or cut away, then reserve. <q-check/>`,
                `<b>Dos intentos o 5 s</b>, lo que llegue antes. Luego el procedimiento de emergencia de tu escuela: solo la reserva (USPA SIM) o liberar y luego la reserva. <q-check/>`,
                `<b>Две попытки или 5 с</b>, что наступит раньше. Потом аварийная процедура твоей школы: сразу запасной (USPA SIM) или отцепка, потом запасной. <q-check/>`,
                `<b>Дві спроби або 5 с</b>, що настане раніше. Потім аварійна процедура твоєї школи: одразу запасний (USPA SIM) або відчеплення, потім запасний. <q-check/>`,
              ),
            },
            {
              clip: 'pov_tow',
              tone: 'ep',
              name: t(`Pilot chute in tow`, `Extractor remolcado (pilot chute in tow)`, `Вытяжной в следе`, `Витяжний парашут у сліді`),
              what: t(
                `The small pilot chute flies behind you, but the container stays closed.`,
                `El extractor vuela detrás de ti, pero el contenedor sigue cerrado.`,
                `Маленький вытяжной (медуза) летит за тобой, но ранец остался закрыт.`,
                `Маленький витяжний (медуза) летить за тобою, але ранець лишився закритим.`,
              ),
              act: t(
                `<b>Emergency procedure.</b> USPA allows two ways: reserve only, or cut away then reserve. Do what your school teaches. <q-check/>`,
                `<b>Procedimiento de emergencia.</b> USPA permite dos formas: solo la reserva, o liberar y luego la reserva. Haz lo que enseña tu escuela. <q-check/>`,
                `<b>Аварийная процедура.</b> USPA допускает два варианта: сразу запасной или отцепка, потом запасной. Делай так, как учит твоя школа. <q-check/>`,
                `<b>Аварійна процедура.</b> USPA допускає два варіанти: одразу запасний або відчеплення, потім запасний. Роби так, як навчає твоя школа. <q-check/>`,
              ),
            },
            {
              clip: 'pov_baglock',
              tone: 'ep',
              name: t(`Bag lock`, `Bolsa trabada (bag lock)`, `Купол в камере`, `Купол у камері`),
              what: t(
                `The bag is out, but the canopy is stuck inside it.`,
                `La bolsa salió, pero la vela sigue trabada dentro.`,
                `Камера вышла, а купол остался внутри неё.`,
                `Камера вийшла, а купол лишився в ній.`,
              ),
              act: EP,
            },
          ],
        },
        {
          type: 'cards',
          pill: 'EP',
          groupTitle: t(`Out, but not flyable`, `Fuera, pero no se puede volar`, `Вышел, но не летит`, `Вийшов, але не летить`),
          groupSub: t(
            `Partial: you lose height fast, the canopy is not a rectangle.`,
            `Parcial: pierdes altura rápido, la vela no es un rectángulo.`,
            `Частичный отказ: быстро теряешь высоту, купол не прямоугольник.`,
            `Часткова відмова: швидко втрачаєш висоту, купол не прямокутник.`,
          ),
          items: [
            {
              clip: 'm_streamer',
              tone: 'ep',
              name: t(`Streamer`, `Streamer`, `«Колбаса»`, `«Ковбаса»`),
              what: t(
                `Canopy out but not inflated, flapping like a flag.`,
                `Vela fuera pero sin inflar, flameando como una bandera.`,
                `Купол вышел, но не наполнился, полощется как флаг.`,
                `Купол вийшов, але не наповнився, полощеться, як прапор.`,
              ),
              act: EP,
            },
            {
              clip: 'pov_lineover',
              tone: 'ep',
              name: t(`Line-over`, `Line-over`, `Перехлёст`, `Перехльост`),
              what: t(
                `A line goes over the top and splits the canopy in two. "Caught on top".`,
                `Una línea pasa por encima y parte la vela en dos. "Atrapada por arriba".`,
                `Стропа захлестнула купол сверху и разделила его на две части. «Зацепился сверху».`,
                `Стропа перехлеснула купол згори й розділила його на дві частини. «Зачепився згори».`,
              ),
              act: t(
                `<b>Emergency procedure. Don't try to fix it.</b>`,
                `<b>Procedimiento de emergencia. No intentes arreglarlo.</b>`,
                `<b>Аварийная процедура. Не пытайся исправить.</b>`,
                `<b>Аварійна процедура. Не намагайся виправити.</b>`,
              ),
            },
            {
              clip: 'pov_twist',
              tone: 'ep',
              name: t(`Spinning, can't control`, `Gira, no se puede controlar`, `Вращается, не управляется`, `Обертається, не керується`),
              what: t(
                `It spins or dives: line twists that spin, a turn you can't stop, broken lines. Or you're not under the canopy.`,
                `Gira o cae en picado: vueltas en las líneas que giran, un giro que no puedes detener, líneas rotas. O no estás debajo de la vela.`,
                `Вращается или пикирует: закрутка с вращением, разворот, который не остановить, порванные стропы. Или ты не под куполом.`,
                `Обертається або пікірує: закрутка з обертанням, розворот, який не зупинити, порвані стропи. Або ти не під куполом.`,
              ),
              act: t(
                `<b>Emergency procedure now.</b> Don't kick, don't wait: a spin can cost up to 300 ft a turn.`,
                `<b>Procedimiento de emergencia ya.</b> No patees, no esperes: un giro puede costar hasta 300 ft por vuelta.`,
                `<b>Аварийная процедура сразу.</b> Не раскручивайся, не жди: вращение может съедать до 300 футов за оборот.`,
                `<b>Аварійна процедура одразу.</b> Не розкручуйся, не чекай: обертання може з'їдати до 300 футів за оберт.`,
              ),
            },
            {
              clip: 'm_horseshoe',
              tone: 'ep',
              name: t(`Horseshoe`, `Herradura (horseshoe)`, `«Подкова»`, `«Підкова»`),
              what: t(
                `Part of the main is out, but something still holds it to the container.`,
                `Parte de la principal salió, pero algo la sigue sujetando al contenedor.`,
                `Часть основного вышла, но что-то держит её на ранце.`,
                `Частина основного вийшла, але щось тримає її на ранці.`,
              ),
              act: t(
                `<b>Emergency procedure.</b> Pilot chute bridle round an arm or leg? USPA ISP also allows pointing that limb to the sky to shake it off: two tries or 5 s, then emergency procedure. Ask what your school teaches. <q-check/>`,
                `<b>Procedimiento de emergencia.</b> ¿La brida del extractor está enrollada en un brazo o una pierna? El ISP de USPA también permite apuntar ese miembro al cielo para soltarla: dos intentos o 5 s, luego procedimiento de emergencia. Pregunta qué enseña tu escuela. <q-check/>`,
                `<b>Аварийная процедура.</b> Стренга вытяжного (bridle) обмотала руку или ногу? ISP USPA допускает и другое: направь эту руку или ногу в небо, чтобы стряхнуть её, две попытки или 5 с, потом аварийная процедура. Спроси, как учит твоя школа. <q-check/>`,
                `<b>Аварійна процедура.</b> Стренга витяжного (bridle) обмотала руку чи ногу? ISP USPA допускає й інше: спрямуй цю руку чи ногу в небо, щоб струсити її, дві спроби або 5 с, потім аварійна процедура. Запитай, як навчає твоя школа. <q-check/>`,
              ),
            },
          ],
        },
        {
          type: 'cards',
          pill: 'FIX',
          groupTitle: t(`Fixable: two tries, watch the altitude`, `Arreglable: dos intentos, vigila la altura`, `Можно исправить: две попытки, следи за высотой`, `Можна виправити: дві спроби, стеж за висотою`),
          groupSub: t(
            `The canopy is there, mostly square and not spinning. Two tries to fix it. Still not good, or at the decision altitude: emergency procedure.`,
            `La vela está ahí, es casi cuadrada y no gira. Dos intentos para arreglarla. ¿Sigue mal, o llegaste a la altura de decisión? Procedimiento de emergencia.`,
            `Купол есть, почти квадратный и не вращается. Две попытки исправить. Не получилось или дошёл до высоты принятия решения — аварийная процедура.`,
            `Купол є, майже квадратний і не обертається. Дві спроби виправити. Не вийшло або дійшов до висоти ухвалення рішення — аварійна процедура.`,
          ),
          items: [
            {
              clip: 'm_twists',
              source: { yt: 'MZx3lN-lwok', t: 65, credit: 'APF' },
              tone: 'fix',
              name: t(`Line twists, not spinning`, `Vueltas en las líneas, sin girar`, `Закрутка строп без вращения`, `Закрутка строп без обертання`),
              what: t(
                `The lines are twisted, but the canopy is <b>straight overhead</b>, not spinning or diving.`,
                `Las líneas están enroscadas, pero la vela está <b>justo encima</b>, sin girar ni caer en picado.`,
                `Стропы закручены, но купол <b>прямо над головой</b>, не вращается и не пикирует.`,
                `Стропи закручені, але купол <b>прямо над головою</b>, не обертається і не пікірує.`,
              ),
              act: t(
                `<b>Rear risers apart, kick</b> to untwist; toggles stay stowed until the twists are out. Two tries, check altitude. It starts to spin? <b>Emergency procedure now.</b>`,
                `<b>Separa las bandas traseras y patea</b> para desenroscarte; los batidores siguen puestos hasta quitar las vueltas. Dos intentos, mira la altura. ¿Empieza a girar? <b>Procedimiento de emergencia ya.</b>`,
                `<b>Разведи задние свободные концы и работай ногами</b>, чтобы раскрутиться; клеванты не снимай, пока не раскрутишься. Две попытки, смотри на высоту. Начало вращать? <b>Аварийная процедура сразу.</b>`,
                `<b>Розведи задні вільні кінці й працюй ногами</b>, щоб розкрутитися; клеванти не знімай, поки не розкрутишся. Дві спроби, дивись на висоту. Почало обертати? <b>Аварійна процедура одразу.</b>`,
              ),
            },
            {
              clip: 'm_slider',
              tone: 'fix',
              name: t(`Slider stuck up`, `Slider trabado arriba`, `Слайдер застрял вверху`, `Слайдер застряг угорі`),
              what: t(
                `The slider stays at the top; the canopy is only half open.`,
                `El slider se queda arriba y la vela solo se abre a medias.`,
                `Слайдер остался вверху, купол раскрыт наполовину.`,
                `Слайдер лишився вгорі, купол розкритий наполовину.`,
              ),
              act: t(
                `<b>Pump the toggles</b> (some schools teach rear risers). Two tries, check altitude between them. <q-check/>`,
                `<b>Bombea los batidores</b> (algunas escuelas enseñan las bandas traseras). Dos intentos, mira la altura entre uno y otro. <q-check/>`,
                `<b>Подкачай клевантами</b> (в некоторых школах учат задними свободными концами). Две попытки, между ними смотри на высоту. <q-check/>`,
                `<b>Підкачай клевантами</b> (у деяких школах навчають задніми вільними кінцями). Дві спроби, між ними дивись на висоту. <q-check/>`,
              ),
            },
            {
              clip: 'm_endcells',
              tone: 'fix',
              name: t(`End cells closed`, `Celdas laterales cerradas`, `Закрыты концевые секции`, `Закриті крайні секції`),
              what: t(`The outer cells stay folded.`, `Las celdas laterales siguen plegadas.`, `Концевые секции не наполнились.`, `Крайні секції не наповнилися.`),
              act: t(
                `<b>Pull both toggles down</b>, hold 2–3 s, let up. Two tries, check altitude between them. <q-check/>`,
                `<b>Baja los dos batidores</b>, mantenlos 2–3 s y suéltalos. Dos intentos, mira la altura entre uno y otro. <q-check/>`,
                `<b>Обе клеванты вниз</b>, подержи 2–3 с, отпусти. Две попытки, между ними смотри на высоту. <q-check/>`,
                `<b>Обидві клеванти вниз</b>, потримай 2–3 с, відпусти. Дві спроби, між ними дивись на висоту. <q-check/>`,
              ),
            },
          ],
        },
        {
          type: 'clips',
          items: [
            clip('m_tow', t(`Pilot chute in tow, from outside`, `Extractor remolcado, visto desde fuera`, `Вытяжной в следе, вид со стороны`, `Витяжний у сліді, вигляд збоку`), 'APF', 'iBNf-HsD3Ms', 101),
            clip('m_baglock', t(`Bag lock, from outside`, `Bolsa trabada, vista desde fuera`, `Купол в камере, вид со стороны`, `Купол у камері, вигляд збоку`), 'APF', 'iBNf-HsD3Ms', 242),
          ],
        },
        { type: 'h', text: t(`Cut away anyway if…`, `Libera de todos modos si…`, `Отцепляйся в любом случае, если…`, `Відчіплюйся в будь-якому разі, якщо…`) },
        {
          type: 'list',
          items: [
            t(`<b>More than one</b> broken line.`, `<b>Más de una</b> línea rota.`, `Порвано <b>больше одной</b> стропы.`, `Порвано <b>більше ніж одну</b> стропу.`),
            t(
              `A hole the <b>size of your head</b>, or sky through the bottom skin.`,
              `Un agujero del <b>tamaño de tu cabeza</b>, o se ve el cielo a través de la tela inferior.`,
              `Дыра <b>размером с голову</b> или видно небо сквозь нижнюю оболочку.`,
              `Діра <b>завбільшки з голову</b> або видно небо крізь нижню оболонку.`,
            ),
            t(
              `Still <b>not inflated at 2,500 ft</b>.`,
              `La vela todavía <b>no está inflada a 2,500 ft</b>.`,
              `К <b>2 500 футам</b> купол так и не наполнился.`,
              `Досі <b>не наповнився на 2 500 футах</b>.`,
            ),
            t(
              `It <b>spins or dives</b> and you can't stop it: act now.`,
              `<b>Gira o cae en picado</b> y no puedes pararlo: actúa ya.`,
              `Купол <b>вращается или пикирует</b>, и это не остановить: действуй сразу.`,
              `Купол <b>обертається або пікірує</b>, і це не зупинити: дій одразу.`,
            ),
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'MwIcFPK6DKU', t: 59, credit: 'Skydive Vibes', label: t(`Malfunction types overview`, `Tipos de malfunción: resumen`, `Обзор видов отказов`, `Огляд видів відмов`) },
            { yt: 'lPmK9OJHdXc', t: 107, credit: 'Skydive Vibes', label: t(`Line twists, real footage`, `Vueltas en las líneas, imágenes reales`, `Закрутка строп, реальные съёмки`, `Закрутка строп, реальні зйомки`) },
            { yt: 'iBNf-HsD3Ms', t: 303, credit: 'APF', label: t(`Streamer`, `Streamer`, `«Колбаса»`, `«Ковбаса»`) },
            { yt: 'MZx3lN-lwok', t: 125, credit: 'APF', label: t(`End cells closed`, `Celdas laterales cerradas`, `Закрыты концевые секции`, `Закриті крайні секції`) },
            { yt: 'MZx3lN-lwok', t: 240, credit: 'APF', label: t(`Slider stuck`, `Slider trabado`, `Слайдер застрял`, `Слайдер застряг`) },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: t(
                `The pilot chute is out behind you, but the container stays closed. What is it, and what do you do?`,
                `El extractor está fuera detrás de ti, pero el contenedor sigue cerrado. ¿Qué es y qué haces?`,
                `Вытяжной летит за тобой, а ранец закрыт. Что это и что делать?`,
                `Витяжний летить за тобою, а ранець закритий. Що це і що робити?`,
              ),
              options: [
                t(`Pilot chute in tow: emergency procedure`, `Extractor remolcado: procedimiento de emergencia`, `Вытяжной в следе: аварийная процедура`, `Витяжний у сліді: аварійна процедура`),
                t(`Slider stuck: pump the toggles`, `Slider trabado: bombea los batidores`, `Слайдер застрял: подкачать клевантами`, `Слайдер застряг: підкачати клевантами`),
                t(`Normal opening: wait a few seconds`, `Apertura normal: espera unos segundos`, `Нормальное раскрытие: подождать несколько секунд`, `Нормальне розкриття: почекати кілька секунд`),
              ],
              answer: 0,
              why: t(
                `Nothing is holding you up, so it's an emergency procedure. Whether you cut away first depends on your school.`,
                `Nada te está frenando, así que es procedimiento de emergencia. Si liberas primero o no depende de tu escuela.`,
                `Тебя ничего не держит, значит, аварийная процедура. Отцепляться ли сначала — зависит от твоей школы.`,
                `Тебе ніщо не тримає, отже, аварійна процедура. Чи відчіплюватися спершу — залежить від твоєї школи.`,
              ),
            },
            {
              q: t(
                `Line twists, canopy straight overhead and not spinning. What's the order?`,
                `Vueltas en las líneas, la vela justo encima y sin girar. ¿En qué orden?`,
                `Закрутка строп, купол прямо над головой и не вращается. В каком порядке?`,
                `Закрутка строп, купол прямо над головою і не обертається. У якому порядку?`,
              ),
              options: [
                t(`Cut away straight away`, `Libera enseguida`, `Сразу отцепиться`, `Одразу відчепитися`),
                t(`Unstow the toggles, then kick`, `Suelta los batidores, luego patea`, `Снять клеванты, потом работать ногами`, `Зняти клеванти, потім працювати ногами`),
                t(`Risers apart and kick, toggles stowed`, `Separa las bandas y patea, batidores puestos`, `Развести концы и работать ногами, клеванты на месте`, `Розвести кінці й працювати ногами, клеванти на місці`),
              ],
              answer: 2,
              why: t(
                `Releasing the brakes while still twisted can turn the twist into a spin. Untwist first, then unstow. Twists that spin or dive are different: emergency procedure now, no kicking.`,
                `Soltar los frenos con las líneas aún enroscadas puede convertir las vueltas en un giro. Primero desenróscate, luego suelta los batidores. Si las vueltas giran o caen en picado, es otra cosa: procedimiento de emergencia ya, sin patear.`,
                `Если снять клеванты на закрученных стропах, закрутка может перейти во вращение. Сначала раскрутись, потом снимай клеванты. Закрутка с вращением или пикированием — другое дело: аварийная процедура сразу, без раскручивания.`,
                `Якщо зняти клеванти на закручених стропах, закрутка може перейти в обертання. Спершу розкрутися, потім знімай клеванти. Закрутка з обертанням чи пікіруванням — інша справа: аварійна процедура одразу, без розкручування.`,
              ),
            },
            {
              q: t(
                `A line goes over the top and splits the canopy in two. What do you do?`,
                `Una línea pasa por encima y parte la vela en dos. ¿Qué haces?`,
                `Стропа захлестнула купол сверху и разделила его на две части. Что делаешь?`,
                `Стропа перехлеснула купол згори й розділила його на дві частини. Що робиш?`,
              ),
              options: [
                t(`Pump the toggles a few times`, `Bombea los batidores varias veces`, `Подкачать клевантами несколько раз`, `Підкачати клевантами кілька разів`),
                t(`Emergency procedure, no fixing`, `Procedimiento de emergencia, sin arreglar`, `Аварийная процедура, без исправлений`, `Аварійна процедура, без виправлень`),
                t(`Both toggles down for 2–3 s`, `Los dos batidores abajo 2–3 s`, `Обе клеванты вниз на 2–3 с`, `Обидві клеванти вниз на 2–3 с`),
              ],
              answer: 1,
              why: t(
                `A line-over is in the "out, but not flyable" family: emergency procedure, no fixing.`,
                `El line-over es de la familia "fuera, pero no se puede volar": procedimiento de emergencia, sin intentar arreglarlo.`,
                `Перехлёст — из группы «вышел, но не летит»: аварийная процедура, без попыток исправить.`,
                `Перехльост — із групи «вийшов, але не летить»: аварійна процедура, без спроб виправити.`,
              ),
            },
            {
              q: t(
                `You're at 2,500 ft and the canopy still isn't inflated. Now what?`,
                `Estás a 2,500 ft y la vela todavía no está inflada. ¿Y ahora?`,
                `2 500 футов, а купол всё ещё не наполнился. Что теперь?`,
                `2 500 футів, а купол досі не наповнився. Що тепер?`,
              ),
              options: [
                t(`Cut away and pull the reserve`, `Libera y abre la reserva`, `Отцепка и запасной`, `Відчеплення і запасний`),
                t(`Keep pumping the toggles`, `Sigue bombeando los batidores`, `Продолжать подкачивать клевантами`, `Далі підкачувати клевантами`),
                t(`Wait until 1,000 ft`, `Espera hasta 1,000 ft`, `Ждать до 1 000 футов`, `Чекати до 1 000 футів`),
              ],
              answer: 0,
              why: t(
                `Not inflated by 2,500 ft is on the "cut away anyway" list. Decision altitude means you act now.`,
                `No inflada a 2,500 ft está en la lista de "libera de todos modos". Altura de decisión: actúas ya.`,
                `Не наполнился к 2 500 футов — это из списка «отцепляйся в любом случае». Высота принятия решения: действуешь сейчас.`,
                `Не наповнився до 2 500 футів — це зі списку «відчіплюйся в будь-якому разі». Висота ухвалення рішення: дієш зараз.`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- two canopies
    {
      id: 'two',
      title: t(`Two canopies out`, `Dos velas abiertas`, `Два купола`, `Два куполи`),
      blocks: [
        {
          type: 'p',
          text: t(
            `Both can open. The reserve is a real canopy: you steer and land it like the main. What you do depends on <b>how they sit</b>. USPA adds: if there's time, disconnect the RSL first; ask if and where your school teaches it. <q-check/>`,
            `Pueden abrirse las dos. La reserva es una vela de verdad: la diriges y aterrizas como la principal. Lo que haces depende de <b>cómo queden</b>. USPA añade: si hay tiempo, desconecta antes el RSL; pregunta si tu escuela lo enseña y dónde está. <q-check/>`,
            `Могут раскрыться оба. Запасной — настоящий купол: управляешь и садишься на нём, как на основном. Что делать, зависит от того, <b>как они встали</b>. USPA добавляет: если есть время, сначала отсоедини RSL; спроси, учат ли этому в школе и где он. <q-check/>`,
            `Можуть розкритися обидва. Запасний — справжній купол: керуєш і сідаєш на ньому, як на основному. Що робити, залежить від того, <b>як вони стали</b>. USPA додає: якщо є час, спершу від'єднай RSL; запитай, чи навчають цього в школі і де він. <q-check/>`,
          ),
        },
        {
          type: 'cards',
          items: [
            {
              clip: 'two_bi',
              name: t(`Biplane`, `Biplano`, `Биплан`, `Біплан`),
              what: t(`One canopy in front of the other.`, `Una vela delante de la otra.`, `Один купол впереди другого.`, `Один купол попереду іншого.`),
              act: t(
                `<b>Don't cut away.</b> Steer the front one gently with its <b>rear risers</b>, only if needed; leave the back one alone. <b>No flare</b>, PLF.`,
                `<b>No liberes.</b> Dirige con suavidad la de adelante con sus <b>bandas traseras</b>, solo si hace falta; no toques la de atrás. <b>Sin flare</b>, PLF.`,
                `<b>Не отцепляйся.</b> Аккуратно управляй передним его <b>задними свободными концами</b>, только если нужно; задний не трогай. <b>Без flare</b>, PLF.`,
                `<b>Не відчіплюйся.</b> Обережно керуй переднім його <b>задніми вільними кінцями</b>, лише якщо треба; заднього не чіпай. <b>Без flare</b>, PLF.`,
              ),
            },
            {
              clip: 'two_side',
              name: t(`Side by side`, `Lado a lado`, `Бок о бок`, `Пліч-о-пліч`),
              what: t(
                `The two canopies fly next to each other.`,
                `Las dos velas vuelan una junto a la otra.`,
                `Купола летят рядом друг с другом.`,
                `Куполи летять поруч один з одним.`,
              ),
              act: t(
                `<b>Don't cut away.</b> Steer the <b>dominant</b> one (more overhead) gently with its rear risers, only if needed. <b>No flare</b>, PLF.`,
                `<b>No liberes.</b> Dirige con suavidad la <b>dominante</b> (la que está más encima) con sus bandas traseras, solo si hace falta. <b>Sin flare</b>, PLF.`,
                `<b>Не отцепляйся.</b> Аккуратно управляй <b>ведущим</b> куполом (тем, что больше над головой) его задними свободными концами, только если нужно. <b>Без flare</b>, PLF.`,
                `<b>Не відчіплюйся.</b> Обережно керуй <b>провідним</b> куполом (тим, що більше над головою) його задніми вільними кінцями, лише якщо треба. <b>Без flare</b>, PLF.`,
              ),
            },
            {
              clip: 'two_down',
              tone: 'ep',
              name: t(`Downplane`, `Downplane`, `«Даунплейн»`, `«Даунплейн»`),
              what: t(
                `They pull apart, both pointing down, pulling you between them. Rare.`,
                `Se separan, las dos apuntando hacia abajo, y tiran de ti entre ellas. Es raro.`,
                `Купола разошлись и оба смотрят вниз, тебя растягивает между ними. Редко.`,
                `Куполи розійшлися, і обидва дивляться вниз, тебе розтягує між ними. Рідко.`,
              ),
              act: t(
                `<b>Cut away the main</b>, at any altitude (RSL first if there's time). Then steer the reserve and land normally.`,
                `<b>Libera la principal</b>, a cualquier altura (antes el RSL si hay tiempo). Luego dirige la reserva y aterriza normal.`,
                `<b>Отцепи основной</b> на любой высоте (если есть время, сначала RSL). Потом управляй запасным и садись как обычно.`,
                `<b>Відчепи основний</b> на будь-якій висоті (якщо є час, спершу RSL). Потім керуй запасним і сідай як зазвичай.`,
              ),
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          title: t(`Main and reserve tangled together`, `Principal y reserva enredadas`, `Основной и запасной перепутались`, `Основний і запасний переплуталися`),
          points: [
            t(`<b>Don't cut away</b>.`, `<b>No liberes</b>.`, `<b>Не отцепляйся</b>.`, `<b>Не відчіплюйся</b>.`),
            t(
              `<b>Clear what you can</b> and get ready to PLF.`,
              `<b>Desenreda lo que puedas</b> y prepárate para el PLF.`,
              `<b>Освободи, что получится</b>, и готовься к PLF.`,
              `<b>Звільни, що вийде</b>, і готуйся до PLF.`,
            ),
            t(
              `Pull in the <b>less-inflated canopy</b> hand over hand.`,
              `Recoge la <b>vela menos inflada</b>, mano sobre mano.`,
              `Подтяни к себе <b>менее наполненный купол</b>, перехватывая руками.`,
              `Підтягни до себе <b>менш наповнений купол</b>, перехоплюючи руками.`,
            ),
          ],
        },
        {
          type: 'callout',
          title: t(`One open, the other still coming out`, `Una abierta, la otra todavía saliendo`, `Один раскрыт, второй ещё выходит`, `Один розкритий, другий ще виходить`),
          points: [
            t(
              `<b>Trap the deploying canopy between your legs</b>.`,
              `<b>Atrapa la vela que está saliendo entre las piernas</b>.`,
              `<b>Зажми выходящий купол между ногами</b>.`,
              `<b>Затисни купол, що виходить, між ногами</b>.`,
            ),
            t(
              `It opens anyway? RSL off if possible, let it inflate, then see which case it is: biplane, side by side or downplane (USPA SIM 4-1).`,
              `¿Se abre igual? Desconecta el RSL si puedes, deja que se infle y mira qué caso es: biplano, lado a lado o downplane (USPA SIM 4-1).`,
              `Всё равно раскрывается? Отсоедини RSL, если можешь, дай наполниться и посмотри, что вышло: биплан, бок о бок или «даунплейн» (USPA SIM 4-1).`,
              `Однаково розкривається? Від'єднай RSL, якщо можеш, дай наповнитися й подивися, що вийшло: біплан, пліч-о-пліч чи «даунплейн» (USPA SIM 4-1).`,
            ),
          ],
        },
        {
          type: 'watch',
          items: [
            {
              yt: 'or3MhI4MhAc',
              t: 202,
              credit: 'Skydive Vibes',
              label: t(`Two canopies out: all 5 configurations`, `Dos velas abiertas: las 5 configuraciones`, `Два купола: все 5 вариантов`, `Два куполи: усі 5 варіантів`),
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: t(
                `Biplane: one canopy in front of the other. What do you do?`,
                `Biplano: una vela delante de la otra. ¿Qué haces?`,
                `Биплан: один купол впереди другого. Что делаешь?`,
                `Біплан: один купол попереду іншого. Що робиш?`,
              ),
              options: [
                t(`Keep both, steer the front one gently`, `Me quedo con las dos, dirijo suave la de adelante`, `Оставляю оба, аккуратно управляю передним`, `Залишаю обидва, обережно керую переднім`),
                t(`Cut away the main straight away`, `Libero la principal enseguida`, `Сразу отцепляю основной`, `Одразу відчіплюю основний`),
                t(`Keep both, steer the back one hard`, `Me quedo con las dos, dirijo fuerte la de atrás`, `Оставляю оба, активно управляю задним`, `Залишаю обидва, активно керую заднім`),
              ],
              answer: 0,
              why: t(
                `A biplane flies. Keep both, steer the front one gently with its rear risers, leave the back one alone, no flare, PLF (USPA SIM 4-1). A flare can slow the front canopy and let the back one fly over it.`,
                `Un biplano vuela. Quédate con las dos, dirige con suavidad la de adelante con sus bandas traseras, no toques la de atrás, sin flare, PLF (USPA SIM 4-1). Un flare puede frenar la de adelante y hacer que la de atrás la pase por encima.`,
                `Биплан летит. Оставь оба, аккуратно управляй передним его задними свободными концами, задний не трогай, без flare, PLF (USPA SIM 4-1). Flare может затормозить передний купол, и задний налетит на него.`,
                `Біплан летить. Залиш обидва, обережно керуй переднім його задніми вільними кінцями, заднього не чіпай, без flare, PLF (USPA SIM 4-1). Flare може загальмувати передній купол, і задній налетить на нього.`,
              ),
            },
            {
              q: t(
                `Both canopies point down and pull you between them. What is it?`,
                `Las dos velas apuntan hacia abajo y te tiran entre ellas. ¿Qué es?`,
                `Оба купола смотрят вниз и растягивают тебя между собой. Что это?`,
                `Обидва куполи дивляться вниз і розтягують тебе між собою. Що це?`,
              ),
              options: [
                t(`Downplane: cut away the main`, `Downplane: libera la principal`, `«Даунплейн»: отцепить основной`, `«Даунплейн»: відчепити основний`),
                t(`Biplane: steer the front one`, `Biplano: dirige la de adelante`, `Биплан: управлять передним`, `Біплан: керувати переднім`),
                t(`Side by side: steer the dominant one`, `Lado a lado: dirige la dominante`, `Бок о бок: управлять ведущим`, `Пліч-о-пліч: керувати провідним`),
              ],
              answer: 0,
              why: t(
                `A downplane falls fast. It's the one exception to the 1,000 ft hard deck: cut away the main whatever the altitude.`,
                `Un downplane cae rápido. Es la única excepción al límite de 1,000 ft: libera la principal a cualquier altura.`,
                `«Даунплейн» падает быстро. Это единственное исключение из нижней границы 1 000 футов: отцепить основной на любой высоте.`,
                `«Даунплейн» падає швидко. Це єдиний виняток із нижньої межі 1 000 футів: відчепити основний на будь-якій висоті.`,
              ),
            },
            {
              q: t(
                `Main and reserve are tangled together. Do you cut away?`,
                `La principal y la reserva están enredadas. ¿Liberas?`,
                `Основной и запасной перепутались. Отцепляешься?`,
                `Основний і запасний переплуталися. Відчіплюєшся?`,
              ),
              options: [
                t(`No: clear what you can, ready to PLF`, `No: desenredo lo que pueda, listo para el PLF`, `Нет: освобождаю, что могу, готовлюсь к PLF`, `Ні: звільняю, що можу, готуюся до PLF`),
                t(`Yes: cut away the main at once`, `Sí: libero la principal enseguida`, `Да: сразу отцепляю основной`, `Так: одразу відчіплюю основний`),
                t(`Yes, but only above 1,000 ft`, `Sí, pero solo por encima de 1,000 ft`, `Да, но только выше 1 000 футов`, `Так, але лише вище 1 000 футів`),
              ],
              answer: 0,
              why: t(
                `Tangled canopies: don't cut away. Clear what you can, pull in the less-inflated canopy hand over hand, and PLF (USPA SIM 4-1).`,
                `Velas enredadas: no liberes. Desenreda lo que puedas, recoge la vela menos inflada mano sobre mano y haz el PLF (USPA SIM 4-1).`,
                `Купола перепутались: не отцепляйся. Освободи, что можешь, подтяни менее наполненный купол, перехватывая руками, и делай PLF (USPA SIM 4-1).`,
                `Куполи переплуталися: не відчіплюйся. Звільни, що можеш, підтягни менш наповнений купол, перехоплюючи руками, і роби PLF (USPA SIM 4-1).`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- how people get hurt
    {
      id: 'real',
      eyebrow: t(`Real data`, `Datos reales`, `Реальные данные`, `Реальні дані`),
      title: t(`How people actually get hurt`, `Cómo se lesiona la gente de verdad`, `Как люди травмируются на самом деле`, `Як люди травмуються насправді`),
      blocks: [
        {
          type: 'p',
          text: t(
            `Malfunctions get the attention, but most injuries happen in the last 10 feet.`,
            `Las malfunciones se llevan la atención, pero la mayoría de las lesiones ocurren en los últimos 10 pies.`,
            `Внимание достаётся отказам, но большинство травм случается на последних 10 футах.`,
            `Уся увага — відмовам, але більшість травм стається на останніх 10 футах.`,
          ),
        },
        {
          type: 'stats',
          items: [
            {
              big: '73–88%',
              tone: 'red',
              text: t(
                `of injuries happen under canopy and at <b>landing</b> (Swedish, Danish, French, Dutch studies).`,
                `de las lesiones ocurren bajo la vela y en el <b>aterrizaje</b> (estudios suecos, daneses, franceses y neerlandeses).`,
                `травм — под куполом и при <b>приземлении</b> (шведские, датские, французские и нидерландские исследования).`,
                `травм — під куполом і під час <b>приземлення</b> (шведські, данські, французькі й нідерландські дослідження).`,
              ),
            },
            {
              big: '~6×',
              tone: 'red',
              text: t(
                `<b>Students</b> are about six times as likely to be injured as licensed jumpers (France 2010–19, 6.2 M jumps).`,
                `Los <b>alumnos</b> tienen unas seis veces más probabilidad de lesionarse que los paracaidistas con licencia (Francia 2010–19, 6,2 M de saltos).`,
                `<b>Студенты</b> травмируются примерно в шесть раз чаще, чем прыгуны с лицензией (Франция 2010–19, 6,2 млн прыжков).`,
                `<b>Студенти</b> травмуються приблизно вшестеро частіше, ніж парашутисти з ліцензією (Франція 2010–19, 6,2 млн стрибків).`,
              ),
            },
            {
              big: '41%',
              tone: 'red',
              text: t(
                `of student injuries in a Swedish study happened on the <b>first two jumps</b> (most of those students were on static line, not AFF).`,
                `de las lesiones de alumnos en un estudio sueco ocurrieron en los <b>dos primeros saltos</b> (la mayoría eran alumnos de cuerda estática, no de AFF).`,
                `травм студентов в шведском исследовании случились на <b>первых двух прыжках</b> (в основном это были студенты на принудительном раскрытии, не AFF).`,
                `травм студентів у шведському дослідженні сталися на <b>перших двох стрибках</b> (здебільшого це були студенти на примусовому розкритті, не AFF).`,
              ),
            },
            {
              big: '46%',
              tone: 'red',
              text: t(
                `of US deaths in 2001–2020 came from landing problems, about half of them <a href="#lowturn">low turns</a>, more often deliberate than accidental.`,
                `de las muertes en EE. UU. entre 2001 y 2020 fueron por problemas de aterrizaje, cerca de la mitad por <a href="#lowturn">giros bajos</a>, más a menudo intencionados que accidentales.`,
                `смертей в США в 2001–2020 годах — при посадке, около половины из них — <a href="#lowturn">низкие развороты</a>, чаще намеренные, чем случайные.`,
                `смертей у США у 2001–2020 роках — під час посадки, близько половини з них — <a href="#lowturn">низькі розвороти</a>, частіше навмисні, ніж випадкові.`,
              ),
            },
          ],
        },
        {
          type: 'bars',
          title: t(`When in the jump people get hurt`, `En qué momento del salto se lesiona la gente`, `На каком этапе прыжка травмируются`, `На якому етапі стрибка травмуються`),
          items: [
            { label: t(`Exit`, `Salida`, `Отделение`, `Відокремлення`), value: 1.9 },
            { label: t(`Freefall`, `Caída libre`, `Свободное падение`, `Вільне падіння`), value: 2.7 },
            { label: t(`Opening`, `Apertura`, `Раскрытие`, `Розкриття`), value: 7.4 },
            { label: t(`Canopy and landing`, `Vela y aterrizaje`, `Купол и приземление`, `Купол і приземлення`), value: 87.9, hl: true },
          ],
          source: { label: { en: 'Westman & Björnstig 2007, Sweden, 257 injuries / 540,000 jumps', es: 'Westman y Björnstig 2007, Suecia, 257 lesiones / 540,000 saltos', uk: 'Westman і Björnstig 2007, Швеція, 257 травм / 540 000 стрибків', ru: 'Westman и Björnstig 2007, Швеция, 257 травм / 540 000 прыжков' }, href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2465315/' },
        },
        {
          type: 'bars',
          title: t(`Which part of the body`, `Qué parte del cuerpo`, `Какая часть тела`, `Яка частина тіла`),
          items: [
            { label: t(`Legs`, `Piernas`, `Ноги`, `Ноги`), value: 51, hl: true },
            { label: t(`Arms`, `Brazos`, `Руки`, `Руки`), value: 19 },
            { label: t(`Spine`, `Columna`, `Позвоночник`, `Хребет`), value: 18 },
            { label: t(`Other`, `Otras`, `Другое`, `Інше`), value: 12 },
          ],
          source: { label: { en: 'Westman & Björnstig 2007, Sweden, 311 injuries (via Barthel et al. 2023 review); "Other" is the remainder, not given in the papers', es: 'Westman y Björnstig 2007, Suecia, 311 lesiones (vía la revisión de Barthel et al. 2023); «Otras» es el resto, no figura en los artículos', uk: 'Westman і Björnstig 2007, Швеція, 311 травм (за оглядом Barthel et al. 2023); «Інше» — залишок, у статтях його немає', ru: 'Westman и Björnstig 2007, Швеция, 311 травм (по обзору Barthel et al. 2023); «Другое» — остаток, в статьях его нет' }, href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9859333/' },
        },
        {
          type: 'bars',
          title: t(`Inside the leg: where it gets hurt`, `Dentro de la pierna: dónde se lesiona`, `Нога: где травма`, `Нога: де травма`),
          items: [
            { label: t(`Ankle`, `Tobillo`, `Лодыжка`, `Щиколотка`), value: 37, hl: true },
            { label: t(`Thigh`, `Muslo`, `Бедро`, `Стегно`), value: 25 },
            { label: t(`Shin`, `Espinilla`, `Голень`, `Гомілка`), value: 23 },
            { label: t(`Knee`, `Rodilla`, `Колено`, `Коліно`), value: 10 },
            { label: t(`Foot`, `Pie`, `Стопа`, `Стопа`), value: 6 },
          ],
          source: { label: { en: 'USPA incident reports 2008–2023 (Forrester 2023), 130 leg injuries (77% fractures); one person can count twice; 12% "leg, not specified" not shown', es: 'Informes de incidentes de USPA 2008–2023 (Forrester 2023), 130 lesiones de pierna (77% fracturas); una persona puede contar dos veces; no se muestra el 12% «pierna, sin especificar»', uk: 'Звіти USPA про інциденти 2008–2023 (Forrester 2023), 130 травм ніг (77% переломи); одна людина може рахуватися двічі; 12% «нога, без уточнення» не показано', ru: 'Отчёты USPA об инцидентах 2008–2023 (Forrester 2023), 130 травм ног (77% переломы); один человек может считаться дважды; 12% «нога, без уточнения» не показаны' }, href: 'https://lermagazine.com/?p=39724' },
        },
        {
          type: 'bars',
          title: t(`What went wrong at landing`, `Qué salió mal al aterrizar`, `Что пошло не так при посадке`, `Що пішло не так під час посадки`),
          items: [
            { label: t(`Wrong flare`, `Flare incorrecto`, `Неправильный flare`, `Неправильний flare`), value: 31, hl: true },
            { label: t(`Terrain`, `Terreno`, `Рельеф и препятствия`, `Рельєф і перешкоди`), value: 30 },
            { label: t(`Bad landing position`, `Mala posición al aterrizar`, `Неправильное положение тела`, `Неправильне положення тіла`), value: 19 },
            { label: t(`Other`, `Otras`, `Другое`, `Інше`), value: 20 },
          ],
          source: { label: { en: 'Damhuis et al. 2024, Netherlands 2015–2020, 234 landing injuries', es: 'Damhuis et al. 2024, Países Bajos 2015–2020, 234 lesiones al aterrizar', uk: 'Damhuis et al. 2024, Нідерланди 2015–2020, 234 травми при приземленні', ru: 'Damhuis et al. 2024, Нидерланды 2015–2020, 234 травмы при приземлении' }, href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/' },
        },
        {
          type: 'callout',
          title: t(`What this means for you`, `Qué significa para ti`, `Что это значит для тебя`, `Що це означає для тебе`),
          points: [
            t(
              `Risky moment: the <b>last few seconds</b>, on the <b>first few jumps</b>.`,
              `Momento de riesgo: los <b>últimos segundos</b>, en los <b>primeros saltos</b>.`,
              `Опасный момент — <b>последние секунды</b> на <b>первых прыжках</b>.`,
              `Небезпечний момент — <b>останні секунди</b> на <b>перших стрибках</b>.`,
            ),
            t(
              `Canada, Jan–May 2025: all three student landing injuries were a <b>slow or half flare, no PLF</b>.`,
              `Canadá, enero–mayo de 2025: las tres lesiones de alumnos al aterrizar fueron un <b>flare lento o a medias sin PLF</b>.`,
              `Канада, январь–май 2025: все три травмы студентов при посадке — <b>медленный или неполный flare без PLF</b>.`,
              `Канада, січень–травень 2025: усі три травми студентів під час посадки — <b>повільний або неповний flare без PLF</b>.`,
            ),
          ],
        },
        {
          type: 'h',
          text: t(`The ones to remember`, `Lo que hay que recordar`, `Что запомнить`, `Що запам’ятати`),
        },
        {
          type: 'p',
          muted: true,
          text: t(
            `Shares are from USPA's 2024 report of US non-fatal incidents.`,
            `Los porcentajes son del informe de USPA de 2024 sobre incidentes no mortales en EE. UU.`,
            `Доли — из отчёта USPA за 2024 год о несмертельных инцидентах в США.`,
            `Частки — зі звіту USPA за 2024 рік про несмертельні інциденти у США.`,
          ),
        },
        {
          type: 'steps',
          items: [
            {
              title: t(`Bad flare, no PLF`, `Flare malo, sin PLF`, `Плохой flare, нет PLF`, `Поганий flare, немає PLF`),
              sub: t(
                `<b>22%</b> of landing incidents without a turn: flaring too early, too late or not at all. No flare at all gave the worst injuries. <b>Full flare at ~10 ft</b>, hold it, feet and knees together, knees slightly bent, <b>feet touch first</b>, <b>PLF every time</b>: even an imperfect PLF meant milder injuries.`,
                `<b>22%</b> de los incidentes de aterrizaje sin giro: flare demasiado pronto, demasiado tarde o sin flare. Sin flare, las peores lesiones. <b>Flare completo a ~10 ft</b>, mantenlo, pies y rodillas juntos, rodillas un poco flexionadas, <b>los pies tocan primero</b>, <b>PLF siempre</b>: incluso un PLF imperfecto dio lesiones más leves.`,
                `<b>22 %</b> посадочных инцидентов без разворота: flare слишком рано, слишком поздно или без flare вообще. Без flare — самые тяжёлые травмы. <b>Полный flare на ~10 футах</b>, держи, ступни и колени вместе, колени чуть согнуты, <b>первыми касаются ступни</b>, <b>PLF всегда</b>: даже неидеальный PLF давал более лёгкие травмы.`,
                `<b>22 %</b> посадкових інцидентів без розвороту: flare зарано, запізно або взагалі без flare. Без flare — найважчі травми. <b>Повний flare на ~10 футах</b>, тримай, стопи й коліна разом, коліна трохи зігнуті, <b>першими торкаються стопи</b>, <b>PLF завжди</b>: навіть неідеальний PLF давав легші травми.`,
              ),
            },
            {
              title: t(`Legs down on a tandem`, `Piernas abajo en un tándem`, `Ноги вниз на тандеме`, `Ноги вниз на тандемі`),
              sub: t(
                `<b>20%</b> were tandem landings, usually the passenger not lifting their legs. That's a tandem rule: on your own jumps, <b>feet and knees together, feet first</b>.`,
                `<b>20%</b> fueron aterrizajes en tándem, casi siempre porque el pasajero no levantó las piernas. Es una regla del tándem: en tus saltos, <b>pies y rodillas juntos, primero los pies</b>.`,
                `<b>20 %</b> — тандемные посадки, обычно пассажир не поднял ноги. Это правило тандема: на своих прыжках — <b>ступни и колени вместе, первыми касаются ступни</b>.`,
                `<b>20 %</b> — тандемні посадки, зазвичай пасажир не підняв ноги. Це правило тандему: на своїх стрибках — <b>стопи й коліна разом, першими торкаються стопи</b>.`,
              ),
            },
            {
              title: t(`Obstacles, landing off`, `Obstáculos, aterrizaje fuera de la zona`, `Препятствия, посадка вне площадки`, `Перешкоди, посадка поза майданчиком`),
              sub: t(
                `<b>14%</b>: fences, ditches, roads. Stretching back to the target. <b>Decide high</b>: can't make it? <b>Pick a clear field</b>, land into the wind.`,
                `<b>14%</b>: cercas, zanjas, caminos. Estirar el planeo hasta el blanco. <b>Decide arriba</b>: ¿no llegas? <b>Elige un campo despejado</b>, contra el viento.`,
                `<b>14 %</b>: заборы, канавы, дороги. Попытка дотянуть до цели. <b>Решай высоко</b>: не долетаешь — <b>выбери чистое поле</b>, садись против ветра.`,
                `<b>14 %</b>: паркани, канави, дороги. Спроба дотягнути до цілі. <b>Вирішуй високо</b>: не долітаєш — <b>обери чисте поле</b>, сідай проти вітру.`,
              ),
            },
            {
              title: t(`Downwind landing and turbulence`, `Aterrizaje con viento de cola y turbulencia`, `Посадка по ветру и турбулентность`, `Посадка за вітром і турбулентність`),
              sub: t(
                `Turbulence <b>9%</b>. <b>Land into the wind</b>; keep away from buildings, paved areas and tree lines that stir the air.`,
                `Turbulencia <b>9%</b>. <b>Aterriza contra el viento</b>; lejos de edificios, asfalto y filas de árboles que revuelven el aire.`,
                `Турбулентность <b>9 %</b>. <b>Садись против ветра</b>; подальше от зданий, асфальта и лесополос: за ними воздух завихряется.`,
                `Турбулентність <b>9 %</b>. <b>Сідай проти вітру</b>; тримайся подалі від будівель, асфальту й лісосмуг: за ними повітря завихрюється.`,
              ),
            },
            {
              title: t(`Low turns`, `Giros bajos`, `Низкие развороты`, `Низькі розвороти`),
              sub: t(
                `<b>7%</b> of all reported 2024 incidents (about 13% of landing incidents) were unintended low turns. A big turn low makes the canopy dive. In trouble: <b>stop turning</b>, fly straight, flare. <b>Level wing</b> first, then target and wind.`,
                `<b>7%</b> de todos los incidentes reportados en 2024 (cerca del 13% de los de aterrizaje) fueron giros bajos involuntarios. Un giro grande abajo hace picar la vela. ¿Problemas? <b>Deja de girar</b>, vuela recto, flare. <b>Ala nivelada</b> antes que blanco y viento.`,
                `<b>7 %</b> всех инцидентов 2024 года (около 13 % посадочных) — непреднамеренные низкие развороты. Большой разворот у земли — купол ныряет. Что-то не так: <b>прекрати разворот</b>, лети прямо, flare. <b>Ровное крыло</b> важнее цели и ветра.`,
                `<b>7 %</b> усіх інцидентів 2024 року (близько 13 % посадкових) — ненавмисні низькі розвороти. Великий розворот біля землі — купол пірнає. Щось не так: <b>припини розворот</b>, лети прямо, flare. <b>Рівне крило</b> важливіше за ціль і вітер.`,
              ),
            },
            {
              title: t(`Canopy collisions`, `Choques entre velas`, `Столкновения куполов`, `Зіткнення куполів`),
              sub: t(
                `<b>Look before every turn</b>, fly the same pattern as everyone.`,
                `<b>Mira antes de cada giro</b>, vuela el mismo circuito que todos.`,
                `<b>Смотри перед каждым разворотом</b>, летай по общей схеме.`,
                `<b>Дивись перед кожним розворотом</b>, літай за спільною схемою.`,
              ),
            },
            {
              title: t(
                `Late or wrong emergency procedure`,
                `Procedimiento de emergencia tardío o equivocado`,
                `Поздняя или неправильная аварийная процедура`,
                `Пізня або неправильна аварійна процедура`,
              ),
              sub: t(
                `More than <b>4,000 cutaways a year</b> in the US, and reserves rarely fail: <b>delay is what kills</b>. Unclear canopy? <b>5 s at most</b> to see it clearly getting better; if not, cut away and go to the reserve. Spinning line twists: <b>cut away right away</b> (USPA, 2019). As a student, never below 2,500 ft.`,
                `Más de <b>4,000 liberaciones al año</b> en EE. UU., y las reservas casi nunca fallan: <b>lo que mata es la demora</b>. ¿Vela dudosa? <b>5 s como máximo</b> para ver que mejora claramente; si no, libera y ve a la reserva. Vueltas en las líneas que giran: <b>libera enseguida</b> (USPA, 2019). Como alumno, nunca por debajo de 2,500 ft.`,
                `Больше <b>4 000 отцепок в год</b> в США, а запасные отказывают редко: <b>убивает промедление</b>. Купол непонятный? <b>Не больше 5 с</b>, чтобы увидеть, что явно становится лучше; если нет — отцепка и запасной. Закрутка с вращением — <b>отцепка сразу</b> (USPA, 2019). Студенту никогда не ниже 2 500 футов.`,
                `Понад <b>4 000 відчеплень на рік</b> у США, а запасні відмовляють рідко: <b>убиває зволікання</b>. Купол незрозумілий? <b>Не більше 5 с</b>, щоб побачити, що явно стає краще; якщо ні — відчеплення й запасний. Закрутка з обертанням — <b>відчеплення одразу</b> (USPA, 2019). Студентові ніколи не нижче 2 500 футів.`,
              ),
            },
            {
              title: t(`No pull or low pull`, `Sin apertura o apertura baja`, `Нет раскрытия или раскрытие низко`, `Немає розкриття або розкриття низько`),
              sub: t(
                `Lost track of altitude. <b>Altimeter first</b>, always. The automatic opener (AAD) is a backup, not a plan.`,
                `Perdiste la noción de la altura. <b>Altímetro primero</b>, siempre. La apertura automática (AAD) es un respaldo, no un plan.`,
                `Потерял контроль высоты. <b>Высотомер — первым</b>, всегда. Страхующий прибор (AAD) — подстраховка, а не план.`,
                `Втратив контроль висоти. <b>Висотомір — першим</b>, завжди. Страхувальний прилад (AAD) — підстраховка, а не план.`,
              ),
            },
          ],
        },
        { type: 'h', text: t(`Three real cases`, `Tres casos reales`, `Три реальных случая`, `Три реальні випадки`) },
        {
          type: 'rules',
          items: [
            {
              title: t(`Distracted at 6,000 ft`, `Distraída a 6,000 ft`, `Отвлеклась на 6 000 футах`, `Відволіклася на 6 000 футах`),
              points: [
                t(
                  `Category F student: fixed her goggles, <b>stared at the altimeter</b>`,
                  `Alumna de categoría F: se acomodó las gafas, <b>miró fijo el altímetro</b>`,
                  `Студентка категории F поправляла очки, <b>уставилась на высотомер</b>`,
                  `Студентка категорії F поправляла окуляри, <b>утупилася у висотомір</b>`,
                ),
                t(
                  `Went head-down, <b>weak pilot-chute throw</b>, one leg out of place`,
                  `Cabeza abajo, <b>lanzó el extractor sin fuerza</b>, una pierna fuera de lugar`,
                  `Ушла головой вниз, <b>вяло выбросила вытяжной</b>, одна нога не на месте`,
                  `Пішла головою вниз, <b>мляво викинула витяжний</b>, одна нога не на місці`,
                ),
                t(`It <b>wrapped her leg</b>; she froze`, `Se le <b>enredó en la pierna</b>; se bloqueó`, `Вытяжной <b>обмотал ногу</b>; она замерла`, `Витяжний <b>обмотав їй ногу</b>; вона завмерла`),
                t(
                  `The <b>AAD fired</b> the reserve at about 700 ft`,
                  `El <b>AAD abrió</b> la reserva a unos 700 ft`,
                  `<b>AAD раскрыл</b> запасной примерно на 700 футах`,
                  `<b>AAD розкрив</b> запасний приблизно на 700 футах`,
                ),
                t(
                  `Pilot chute wrapped or in tow: <b>emergency procedure now</b>, by 2,500 ft. The AAD is not a plan`,
                  `Extractor enredado o remolcado: <b>procedimiento de emergencia ya</b>, antes de 2,500 ft. El AAD no es un plan`,
                  `Вытяжной обмотался или в следе: <b>аварийная процедура сразу</b>, не ниже 2 500 футов. AAD — не план`,
                  `Витяжний обмотався або в сліді: <b>аварійна процедура одразу</b>, не нижче 2 500 футів. AAD — не план`,
                ),
              ],
            },
            {
              title: t(`Mixed up the two altitudes`, `Confundió las dos alturas`, `Перепутал две высоты`, `Переплутав дві висоти`),
              points: [
                t(
                  `Over <b>1,200 jumps</b>, didn't cut away at 2,100 ft`,
                  `Más de <b>1,200 saltos</b>, no liberó a 2,100 ft`,
                  `Больше <b>1 200 прыжков</b>, не отцепился на 2 100 футах`,
                  `Понад <b>1 200 стрибків</b>, не відчепився на 2 100 футах`,
                ),
                t(`Thought it was <b>already too low</b>`, `Creyó que ya era <b>demasiado bajo</b>`, `Решил, что <b>уже слишком низко</b>`, `Вирішив, що <b>вже надто низько</b>`),
                t(`The hard deck is <b>1,000 ft</b>`, `El límite mínimo es <b>1,000 ft</b>`, `Нижняя граница — <b>1 000 футов</b>`, `Нижня межа — <b>1 000 футів</b>`),
                t(
                  `Between 2,500 and 1,000 ft you <b>can still cut away</b>`,
                  `Entre 2,500 y 1,000 ft <b>todavía puedes liberar</b>`,
                  `Между 2 500 и 1 000 футов <b>отцепляться ещё можно</b>`,
                  `Між 2 500 і 1 000 футів <b>відчіплюватися ще можна</b>`,
                ),
              ],
            },
            {
              title: t(`Spinning, and waiting`, `Girando, y esperando`, `Вращение и ожидание`, `Обертання й очікування`),
              points: [
                t(
                  `Mid-May 2019: <b>4 of the 5</b> US deaths were spinning malfunctions`,
                  `A mediados de mayo de 2019: <b>4 de las 5</b> muertes en EE. UU., malfunciones en giro`,
                  `Середина мая 2019: <b>4 из 5</b> смертей в США — вращающиеся отказы`,
                  `Середина травня 2019: <b>4 з 5</b> смертей у США — відмови з обертанням`,
                ),
                t(
                  `Ed Scott, USPA Executive Director: all <b>avoidable</b> with an early decision`,
                  `Ed Scott, director ejecutivo de USPA: todas <b>evitables</b> decidiendo pronto`,
                  `Эд Скотт, исполнительный директор USPA: все <b>можно было предотвратить</b> ранним решением`,
                  `Ед Скотт, виконавчий директор USPA: усім <b>можна було запобігти</b> раннім рішенням`,
                ),
                t(
                  `Spins <b>disorient you</b> and make the handles harder to pull`,
                  `El giro <b>desorienta</b> y hace más difícil tirar de las manijas`,
                  `Вращение <b>дезориентирует</b>, ручки выдёргивать тяжелее`,
                  `Обертання <b>дезорієнтує</b>, ручки висмикувати важче`,
                ),
              ],
            },
          ],
        },
        {
          type: 'callout',
          title: t(`What students say on Reddit`, `Lo que dicen los alumnos en Reddit`, `Что пишут студенты на Reddit`, `Що пишуть студенти на Reddit`),
          points: [
            t(
              `Many <b>broke an ankle</b> on AFF 2–4: a few soft landings, then tried to stand one up.`,
              `Muchos <b>se rompieron un tobillo</b> en AFF 2–4: tras unos aterrizajes suaves, intentaron quedar de pie.`,
              `Многие <b>ломали лодыжку</b> на AFF 2–4: после пары мягких посадок пытались встать на ноги.`,
              `Багато хто <b>ламав щиколотку</b> на AFF 2–4: після кількох м’яких посадок намагалися встояти на ногах.`,
            ),
            t(`Look at the <b>horizon</b>, not the ground.`, `Mira el <b>horizonte</b>, no el suelo.`, `Смотри на <b>горизонт</b>, а не в землю.`, `Дивись на <b>горизонт</b>, а не в землю.`),
            t(`<b>Practice flares</b> up high.`, `<b>Practica el flare</b> en altura.`, `<b>Тренируй flare</b> на высоте.`, `<b>Тренуй flare</b> на висоті.`),
            t(
              `Experienced jumpers still <b>PLF on no-wind days</b>.`,
              `Los experimentados siguen haciendo <b>PLF sin viento</b>.`,
              `Опытные прыгуны делают <b>PLF даже в безветрие</b>.`,
              `Досвідчені парашутисти роблять <b>PLF навіть у безвітря</b>.`,
            ),
            t(
              `One late flare, fixated on the target: a <b>rod in the shin</b>, 14 months of rehab.`,
              `Un flare tardío por mirar fijo el blanco: <b>clavo en la tibia</b>, 14 meses de rehabilitación.`,
              `Поздний flare из-за фиксации на цели: <b>штифт в голени</b>, 14 месяцев реабилитации.`,
              `Пізній flare через фіксацію на цілі: <b>штифт у гомілці</b>, 14 місяців реабілітації.`,
            ),
          ],
        },
        {
          type: 'p',
          muted: true,
          text: t(
            `Sources: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2465315/">Westman 2007</a> · <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA 2024 non-fatal incidents</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">2020 fatality summary</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">Dutch study 2015–2020</a> · <a href="https://lermagazine.com/?p=39724">Forrester 2023: leg injuries</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9859333/">Barthel 2023 review</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: broke my ankle on AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: late flare</a>`,
            `Fuentes: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2465315/">Westman 2007</a> · <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA, incidentes no fatales 2024</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">resumen de accidentes mortales 2020</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">estudio neerlandés 2015–2020</a> · <a href="https://lermagazine.com/?p=39724">Forrester 2023: lesiones de pierna</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9859333/">revisión de Barthel 2023</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: tobillo roto en AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: flare tardío</a>`,
            `Источники: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2465315/">Westman 2007</a> · <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA, несмертельные инциденты 2024</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">сводка смертельных случаев 2020</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">нидерландское исследование 2015–2020</a> · <a href="https://lermagazine.com/?p=39724">Forrester 2023: травмы ног</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9859333/">обзор Barthel 2023</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: сломал лодыжку на AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: поздний flare</a>`,
            `Джерела: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2465315/">Westman 2007</a> · <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA, несмертельні інциденти 2024</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">зведення смертельних випадків 2020</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">нідерландське дослідження 2015–2020</a> · <a href="https://lermagazine.com/?p=39724">Forrester 2023: травми ніг</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9859333/">огляд Barthel 2023</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: зламав щиколотку на AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: пізній flare</a>`,
          ),
        },
        {
          type: 'quiz',
          questions: [
            {
              q: t(
                `Where do most skydiving injuries happen?`,
                `¿Dónde ocurren la mayoría de las lesiones en paracaidismo?`,
                `Где случается большинство травм в парашютизме?`,
                `Де стається більшість травм у парашутному спорті?`,
              ),
              options: [
                t(`At landing`, `En el aterrizaje`, `При приземлении`, `Під час приземлення`),
                t(`On exit`, `En la salida`, `При отделении`, `Під час відокремлення`),
                t(`During the opening`, `Durante la apertura`, `При раскрытии`, `Під час розкриття`),
              ],
              answer: 0,
              why: t(
                `In four national studies, 73–88% of injuries happened under canopy and at landing. In the Swedish study, exit and freefall together were under 5%.`,
                `En cuatro estudios nacionales, el 73–88% de las lesiones ocurrieron bajo la vela y al aterrizar. En el estudio sueco, salida y caída libre juntas, menos del 5%.`,
                `В четырёх национальных исследованиях 73–88 % травм случились под куполом и при приземлении. В шведском исследовании отделение и свободное падение вместе — меньше 5 %.`,
                `У чотирьох національних дослідженнях 73–88 % травм сталися під куполом і під час приземлення. У шведському дослідженні відокремлення й вільне падіння разом — менше 5 %.`,
              ),
            },
            {
              q: t(
                `In the Dutch study, what was the top cause of landing injuries?`,
                `En el estudio neerlandés, ¿cuál fue la causa principal de las lesiones al aterrizar?`,
                `Какая главная причина травм при посадке в нидерландском исследовании?`,
                `Яка головна причина травм під час посадки в нідерландському дослідженні?`,
              ),
              options: [
                t(`A wrong flare`, `Un flare incorrecto`, `Неправильный flare`, `Неправильний flare`),
                t(`Uneven terrain`, `Terreno irregular`, `Неровная земля`, `Нерівна земля`),
                t(`A low turn`, `Un giro bajo`, `Низкий разворот`, `Низький розворот`),
              ],
              answer: 0,
              why: t(
                `Wrong flare 31%, terrain 30%, bad landing position 19% (Netherlands 2015–2020, 234 landing injuries). Terrain is a close second.`,
                `Flare incorrecto 31%, terreno 30%, mala posición al aterrizar 19% (Países Bajos 2015–2020, 234 lesiones al aterrizar). El terreno queda muy cerca.`,
                `Неправильный flare — 31 %, рельеф — 30 %, неправильное положение тела — 19 % (Нидерланды 2015–2020, 234 травмы при посадке). Рельеф почти вровень.`,
                `Неправильний flare — 31 %, рельєф — 30 %, неправильне положення тіла — 19 % (Нідерланди 2015–2020, 234 травми під час посадки). Рельєф майже нарівні.`,
              ),
            },
            {
              q: t(
                `Your main is bad at 2,100 ft. Can you still cut away?`,
                `Tu principal está mal a 2,100 ft. ¿Todavía puedes liberar?`,
                `На 2 100 футах основной плохой. Ещё можно отцепиться?`,
                `На 2 100 футах основний поганий. Ще можна відчепитися?`,
              ),
              options: [
                t(`Yes, the hard deck is 1,000 ft`, `Sí, el límite mínimo es 1,000 ft`, `Да, нижняя граница — 1 000 футов`, `Так, нижня межа — 1 000 футів`),
                t(`No, it's below 2,500 ft`, `No, ya estás por debajo de 2,500 ft`, `Нет, уже ниже 2 500 футов`, `Ні, вже нижче 2 500 футів`),
                t(`Only if the AAD has fired`, `Solo si el AAD se activó`, `Только если сработал AAD`, `Лише якщо спрацював AAD`),
              ],
              answer: 0,
              why: t(
                `2,500 ft is when you should have decided; 1,000 ft is the lowest you cut away. A jumper with 1,200+ jumps mixed these up and didn't cut away at 2,100 ft.`,
                `2,500 ft es cuando ya deberías haber decidido; 1,000 ft es lo más bajo para liberar. Un paracaidista con más de 1,200 saltos los confundió y no liberó a 2,100 ft.`,
                `К 2 500 футам решение уже должно быть принято; 1 000 футов — ниже не отцепляются. Парашютист с 1 200+ прыжками это перепутал и не отцепился на 2 100 футах.`,
                `До 2 500 футів рішення вже має бути ухвалене; 1 000 футів — нижче не відчіплюються. Парашутист із 1 200+ стрибками це переплутав і не відчепився на 2 100 футах.`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- what went wrong: real footage
    {
      id: 'mistakes',
      eyebrow: t(`Real footage`, `Videos reales`, `Настоящие видео`, `Справжні відео`),
      title: t(`What went wrong: real jumps`, `Qué salió mal: saltos reales`, `Что пошло не так: настоящие прыжки`, `Що пішло не так: справжні стрибки`),
      blocks: [
        {
          type: 'p',
          text: t(
            `Real jumps where something went wrong, and the <b>one lesson</b> from each. No injury is shown on screen.`,
            `Saltos reales donde algo salió mal y la <b>lección</b> de cada uno. Ninguna lesión se ve en pantalla.`,
            `Настоящие прыжки, где что-то пошло не так, и <b>один урок</b> из каждого. Самих травм в кадре не видно.`,
            `Справжні стрибки, де щось пішло не так, і <b>один урок</b> із кожного. Самих травм у кадрі не видно.`,
          ),
        },
        {
          type: 'cards',
          groupTitle: t(`Low turns`, `Giros bajos`, `Низкие развороты`, `Низькі розвороти`),
          items: [
            {
              clip: 'x_lowturn', tone: 'ep', source: { yt: 'qiJUPUghXyc', t: 34, credit: 'JOINTHETEEM' },
              name: t(`Turn too low, into the ground`, `Giro demasiado bajo, contra el suelo`, `Слишком низкий разворот — в землю`, `Занизький розворот — у землю`),
              what: t(`A big turn near the ground; the canopy was still diving at impact. Broken femur and ankle.`, `Un giro grande cerca del suelo; la vela seguía picando al impactar. Fémur y tobillo rotos.`, `Большой разворот у земли; купол ещё нырял при ударе. Перелом бедра и лодыжки.`, `Великий розворот біля землі; купол ще пірнав під час удару. Перелом стегна й щиколотки.`),
              act: t(`<b>No big turns low.</b> Below 300 ft, small flat turns only.`, `<b>Nada de giros grandes abajo.</b> Bajo 300 ft, solo giros pequeños y planos.`, `<b>Никаких больших разворотов низко.</b> Ниже 300 футов — только маленькие плоские.`, `<b>Жодних великих розворотів низько.</b> Нижче 300 футів — лише малі пласкі.`),
            },
            {
              clip: 'x_lowturn2', tone: 'ep', source: { yt: '5Lj_O4MLo0M', t: 19, credit: 'Chris Forman' },
              name: t(`The dive, from the ground`, `La picada, desde el suelo`, `Нырок купола, вид с земли`, `Пірнання купола, вигляд із землі`),
              what: t(`Same mistake seen from outside: the turn starts low and the canopy can't level out before the water.`, `El mismo error visto desde fuera: el giro empieza bajo y la vela no se nivela antes del agua.`, `Та же ошибка со стороны: разворот начат низко, купол не успевает выровняться до воды.`, `Та сама помилка збоку: розворот почато низько, купол не встигає вирівнятися до води.`),
              act: t(`A turn makes the canopy <b>dive and speed up</b>. Give it height to recover.`, `Un giro hace que la vela <b>pique y acelere</b>. Dale altura para recuperar.`, `Разворот заставляет купол <b>нырнуть и разогнаться</b>. Нужна высота, чтобы выйти.`, `Розворот змушує купол <b>пірнути й розігнатися</b>. Потрібна висота, щоб вийти.`),
            },
          ],
        },
        {
          type: 'cards',
          groupTitle: t(`Flare`, `Flare`, `Flare`, `Flare`),
          items: [
            {
              clip: 'x_flarehigh', tone: 'fix', source: { yt: 'hZXQpFu8I1s', t: 2, credit: 'Zach Foreman' },
              name: t(`Flared too high, then fixed it`, `Flare demasiado alto, y bien corregido`, `Flare слишком высоко — и правильное исправление`, `Flare зависоко — і правильне виправлення`),
              what: t(`An AFF student flares early; the instructor on the radio: hold it, then finish.`, `Un alumno AFF hace el flare pronto; el instructor por radio: mantén y luego termina.`, `Студент AFF начал flare рано; инструктор по радио: держи, потом дожми.`, `Студент AFF почав flare рано; інструктор по радіо: тримай, потім дотисни.`),
              act: t(`Too high? <b>Hold, don't let up</b>, finish as you sink.`, `¿Muy alto? <b>Mantén, no subas</b>, termina al bajar.`, `Слишком высоко? <b>Держи, не отпускай</b>, дожми при снижении.`, `Зависоко? <b>Тримай, не відпускай</b>, дотисни під час зниження.`),
            },
            {
              clip: 'x_flarefast', tone: 'ep', source: { yt: 'N8vpe-olEYs', t: 9, credit: 'jpelligrinelli' },
              name: t(`Flare stabbed too fast`, `Flare demasiado brusco`, `Flare рывком`, `Flare ривком`),
              what: t(`An AFF B student; the uploader says only "too fast of a flare". He hits hard and tumbles.`, `Un alumno AFF B; quien subió el video solo dice "un flare demasiado rápido". Golpea fuerte y rueda.`, `Студент AFF B; автор видео пишет только «слишком быстрый flare». Жёсткий удар, и он кувыркается.`, `Студент AFF B; автор відео пише лише «надто швидкий flare». Жорсткий удар, і він перекидається.`),
              act: t(`Flare <b>smoothly and all the way</b>; feet and knees together, PLF.`, `Flare <b>suave y hasta abajo</b>; pies y rodillas juntos, PLF.`, `Flare <b>плавно и до конца</b>; ступни и колени вместе, PLF.`, `Flare <b>плавно й до кінця</b>; стопи й коліна разом, PLF.`),
            },
          ],
        },
        {
          type: 'cards',
          groupTitle: t(`Wind`, `Viento`, `Ветер`, `Вітер`),
          items: [
            {
              clip: 'x_wind', tone: 'ep', source: { yt: '1h7fvb46wug', t: 54, credit: 'JOINTHETEEM' },
              name: t(`Strong wind, landed crosswind`, `Viento fuerte, aterrizaje de lado`, `Сильный ветер, посадка боком`, `Сильний вітер, посадка боком`),
              what: t(`The wind picked up while the load was in the air; he landed sideways and was dragged.`, `El viento subió durante el vuelo; aterrizó de lado y la vela lo arrastró.`, `Ветер усилился, пока группа была в воздухе; сел боком, и купол его протащил.`, `Вітер посилився, поки група була в повітрі; сів боком, і купол його протягнув.`),
              act: t(`In strong wind <b>face straight into it</b>, then collapse the canopy fast.`, `Con viento fuerte <b>de frente al viento</b>, luego colapsa la vela rápido.`, `В сильный ветер <b>садись строго против ветра</b>, потом быстро гаси купол.`, `У сильний вітер <b>сідай строго проти вітру</b>, потім швидко гаси купол.`),
            },
            {
              clip: 'x_downwind', tone: 'ep', source: { yt: 'tG63N8Y-ti4', t: 11, credit: 'Paul Lewis' },
              name: t(`Downwind landing`, `Aterrizaje con viento de cola`, `Посадка по ветру`, `Посадка за вітром`),
              what: t(`The landing direction was set wrong. He saw it at 300 ft but, with 19 canopies around, chose not to turn low: landed downwind, too fast, and his legs folded.`, `La dirección de aterrizaje estaba mal. Lo vio a 300 ft, pero con 19 velas alrededor decidió no girar bajo: aterrizó con viento de cola, demasiado rápido, y se le doblaron las piernas.`, `Направление посадки было выставлено неверно. Он заметил это на 300 футах, но вокруг было 19 куполов, и он не стал разворачиваться низко: сел по ветру, слишком быстро, ноги подломились.`, `Напрямок посадки було виставлено неправильно. Він помітив це на 300 футах, але навколо було 19 куполів, і він не став розвертатися низько: сів за вітром, надто швидко, ноги підломилися.`),
              act: t(`Check the <b>windsock</b> yourself. Wrong way low, with traffic around? <b>Don't turn low</b>: land downwind, flare fully, PLF.`, `Mira tú el <b>cono de viento</b>. ¿Al revés, abajo y con tráfico? <b>No gires bajo</b>: aterriza con viento de cola, flare completo, PLF.`, `Сам смотри на <b>колдун</b>. Низко, не в ту сторону, вокруг купола? <b>Не разворачивайся низко</b>: садись по ветру, полный flare, PLF.`, `Сам дивись на <b>вітровказ</b>. Низько, не в той бік, навколо куполи? <b>Не розвертайся низько</b>: сідай за вітром, повний flare, PLF.`),
            },
          ],
        },
        {
          type: 'cards',
          groupTitle: t(`Obstacles`, `Obstáculos`, `Препятствия`, `Перешкоди`),
          items: [
            {
              clip: 'x_power', tone: 'ep', source: { yt: 'KWO7U-PNEus', t: 20, credit: 'JOINTHETEEM' },
              name: t(`Power lines he didn't see`, `Cables que no vio`, `Провода, которых он не заметил`, `Дроти, яких він не помітив`),
              what: t(`Landing off, he aimed for a gap in the trees; power lines ran along the driveway.`, `Fuera de zona, apuntó a un hueco entre árboles; los cables seguían el camino.`, `Садился вне площадки в просвет между деревьями; вдоль дороги шли провода.`, `Сідав поза майданчиком у просвіт між деревами; уздовж дороги йшли дроти.`),
              act: t(`Wires follow <b>roads and straight cuts</b>: look for the poles early.`, `Los cables siguen <b>caminos y cortes rectos</b>: busca los postes pronto.`, `Провода идут <b>вдоль дорог и просек</b>: ищи столбы заранее.`, `Дроти йдуть <b>уздовж доріг і просік</b>: шукай стовпи заздалегідь.`),
            },
            {
              clip: 'x_trees', tone: 'ep', source: { yt: 'QkUIomzFj_c', t: 90, credit: 'JOINTHETEEM' },
              name: t(`Steered into the trees`, `Directo a los árboles`, `Прямо в деревья`, `Просто в дерева`),
              what: t(`A late, long turn pointed him at the trees, and he kept staring at them (target fixation). Broken ankle.`, `Un giro largo y tardío lo apuntó a los árboles y siguió mirándolos (fijación). Tobillo roto.`, `Поздний длинный разворот навёл его на деревья, и он смотрел на них (фиксация на цели). Перелом лодыжки.`, `Пізній довгий розворот навів його на дерева, і він дивився на них (фіксація на цілі). Перелом щиколотки.`),
              act: t(`Look <b>where you want to go</b>, not at the obstacle.`, `Mira <b>adonde quieres ir</b>, no al obstáculo.`, `Смотри <b>туда, куда хочешь</b>, а не на препятствие.`, `Дивись <b>туди, куди хочеш</b>, а не на перешкоду.`),
            },
            {
              clip: 'x_roof', tone: 'ep', source: { yt: 'cxnjXmlNqaw', t: 110, credit: 'JOINTHETEEM' },
              name: t(`Roof and wires on a late decision`, `Tejado y cables por decidir tarde`, `Крыша и провода из-за позднего решения`, `Дах і дроти через пізнє рішення`),
              what: t(`He decided too late that he couldn't make the landing area and skimmed a roof and lines.`, `Decidió tarde que no llegaba y rozó un tejado y unos cables.`, `Слишком поздно понял, что не долетает, и прошёл над крышей и проводами.`, `Надто пізно зрозумів, що не долітає, і пройшов над дахом і дротами.`),
              act: t(`Decide <b>by 2,000 ft</b>: can't make it? Pick a clear field.`, `Decide <b>antes de 2,000 ft</b>: ¿no llegas? Elige un campo despejado.`, `Решай <b>к 2 000 футам</b>: не долетаешь — выбирай чистое поле.`, `Вирішуй <b>до 2 000 футів</b>: не долітаєш — обирай чисте поле.`),
            },
          ],
        },
        {
          type: 'cards',
          groupTitle: t(`In the air`, `En el aire`, `В воздухе`, `У повітрі`),
          items: [
            {
              clip: 'x_collision', tone: 'ep', source: { yt: 'BUogil8WvRI', t: 16, credit: 'JOINTHETEEM' },
              name: t(`Canopy collision at 250 ft`, `Choque de velas a 250 ft`, `Столкновение куполов на 250 футах`, `Зіткнення куполів на 250 футах`),
              what: t(`Four canopies on final; one made a sudden 90° turn and the other flew into it.`, `Cuatro velas en final; una giró 90° de repente y la otra chocó con ella.`, `Четыре купола на финале; один резко повернул на 90°, другой влетел в него.`, `Чотири куполи на фіналі; один різко повернув на 90°, інший влетів у нього.`),
              act: t(`<b>Watch traffic</b>, give room, no sudden turns near the ground.`, `<b>Vigila el tráfico</b>, deja espacio, nada de giros bruscos abajo.`, `<b>Следи за другими</b>, держи дистанцию, никаких резких поворотов у земли.`, `<b>Стеж за іншими</b>, тримай дистанцію, жодних різких поворотів біля землі.`),
            },
            {
              clip: 'x_aff', tone: 'ep', source: { yt: 'jA8A3sv7hx8', t: 84, credit: 'Zach Foreman' },
              name: t(`Spinning and nearly no pull`, `Girando y casi sin abrir`, `Вращение и почти без раскрытия`, `Обертання й майже без розкриття`),
              what: t(`A student before solo: head high, unstable, turning, and late to pull.`, `Un alumno antes de saltar solo: cabeza alta, inestable, girando y tarde para abrir.`, `Студент перед самостоятельными прыжками: голова задрана, нестабилен, крутится и тянет с раскрытием.`, `Студент перед самостійними стрибками: голова задерта, нестабільний, крутиться й зволікає з розкриттям.`),
              act: t(`First priority: <b>pull at your altitude</b>, stable or not.`, `Lo primero: <b>abrir a tu altura</b>, estable o no.`, `Главное — <b>раскрыться на своей высоте</b>, стабилен ты или нет.`, `Головне — <b>розкритися на своїй висоті</b>, стабільний ти чи ні.`),
            },
            {
              clip: 'x_nohandle', tone: 'ep', source: { yt: 'qidpLSdggOo', t: 46, credit: 'Zach Foreman' },
              name: t(`Can't find the handle`, `No encuentra la manija`, `Не находит ручку`, `Не знаходить ручку`),
              what: t(`He stopped arching as he reached back, so the handle rode up his back and he couldn't find it; the instructor docks and throws the pilot chute for him.`, `Dejó de arquear al llevar la mano atrás, la manija subió por la espalda y no la encontraba; el instructor se acerca y lanza el extractor por él.`, `Он перестал прогибаться, когда потянулся назад, ручка уехала вверх по спине, и он её не нашёл; инструктор подлетает и выбрасывает вытяжной за него.`, `Він перестав прогинатися, коли потягнувся назад, ручка з’їхала вгору по спині, і він її не знайшов; інструктор підлітає й викидає витяжний за нього.`),
              act: t(`<b>Keep the arch</b> while you reach. <b>Two tries or 5 s</b>, then the emergency procedure.`, `<b>Mantén el arco</b> mientras buscas la manija. <b>Dos intentos o 5 s</b>, luego el procedimiento de emergencia.`, `<b>Держи прогиб</b>, когда тянешься к ручке. <b>Две попытки или 5 с</b>, потом аварийная процедура.`, `<b>Тримай прогин</b>, коли тягнешся до ручки. <b>Дві спроби або 5 с</b>, потім аварійна процедура.`),
            },
            {
              clip: 'x_cutaway', tone: 'fix', source: { yt: 'wx1gJRlAdPE', t: 20, credit: 'JOINTHETEEM' },
              name: t(`Spinning main, cutaway, reserve`, `Principal girando, liberación, reserva`, `Вращение основного, отцепка, запасной`, `Обертання основного, відчеплення, запасний`),
              what: t(`The main started spinning; he felt the G-force rise and cut away. The reserve opened.`, `La principal empezó a girar; sintió subir la fuerza G y liberó. Se abrió la reserva.`, `Основной начал вращаться; он почувствовал рост перегрузки и отцепился. Запасной раскрылся.`, `Основний почав обертатися; він відчув зростання перевантаження й відчепився. Запасний розкрився.`),
              act: t(`A spin <b>gets worse fast</b>: decide, cut away, reserve.`, `Un giro <b>empeora rápido</b>: decide, libera, reserva.`, `Вращение <b>быстро усиливается</b>: решай, отцепка, запасной.`, `Обертання <b>швидко посилюється</b>: вирішуй, відчеплення, запасний.`),
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: t(`You flared too high. What do you do?`, `Hiciste el flare demasiado alto. ¿Qué haces?`, `Ты начал flare слишком высоко. Что делаешь?`, `Ти почав flare зависоко. Що робиш?`),
              options: [
                t(`Let up and flare again`, `Subir los batidores y repetir`, `Отпустить и повторить flare`, `Відпустити й повторити flare`),
                t(`Hold, finish as you sink`, `Mantener y terminar al bajar`, `Держать, дожать при снижении`, `Тримати, дотиснути при зниженні`),
                t(`Turn to lose height`, `Girar para perder altura`, `Повернуть, чтобы снизиться`, `Повернути, щоб знизитися`),
              ],
              answer: 1,
              why: t(`Letting up makes the canopy dive; a turn low is worse. Hold, then finish.`, `Subir hace picar la vela; girar abajo es peor. Mantén y termina.`, `Если отпустить, купол нырнёт; разворот низко ещё хуже. Держи, потом дожми.`, `Якщо відпустити, купол пірне; розворот низько ще гірше. Тримай, потім дотисни.`),
            },
            {
              q: t(`Where do power lines usually run?`, `¿Por dónde suelen ir los cables?`, `Где обычно идут провода?`, `Де зазвичай ідуть дроти?`),
              options: [
                t(`Along roads and straight tree cuts`, `Junto a caminos y cortes rectos`, `Вдоль дорог и прямых просек`, `Уздовж доріг і прямих просік`),
                t(`Only in towns and cities`, `Solo en pueblos y ciudades`, `Только в городах и посёлках`, `Лише в містах і селищах`),
                t(`Across the middle of fields`, `Por el medio de los campos`, `Посреди открытых полей`, `Посеред відкритих полів`),
              ],
              answer: 0,
              why: t(`Look for the poles along roads and straight lines in the trees, early.`, `Busca los postes junto a caminos y líneas rectas entre árboles, pronto.`, `Ищи столбы вдоль дорог и прямых просек, заранее.`, `Шукай стовпи вздовж доріг і прямих просік, заздалегідь.`),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- tips
    {
      id: 'tips',
      eyebrow: t(`From coaches, USPA and Reddit`, `De entrenadores, USPA y Reddit`, `От тренеров, USPA и Reddit`, `Від тренерів, USPA і Reddit`),
      title: t(
        `Common mistakes and tips, stage by stage`,
        `Errores comunes y consejos, etapa por etapa`,
        `Частые ошибки и советы по этапам`,
        `Часті помилки й поради за етапами`,
      ),
      blocks: [
        {
          type: 'p',
          text: t(
            `Read the one for the stage you're on before each jump day.`,
            `Lee la de la etapa en la que estás antes de cada día de saltos.`,
            `Перед каждым прыжковым днём перечитай этап, на котором ты сейчас.`,
            `Перед кожним стрибковим днем перечитай етап, на якому ти зараз.`,
          ),
        },
        {
          type: 'tips',
          items: [
            {
              title: t(`Plane and exit`, `Avión y salida`, `Самолёт и отделение`, `Літак і відокремлення`),
              bad: [
                t(
                  `Unbuckling early, taking the helmet off, acting without a command.`,
                  `Desabrocharte antes de tiempo, quitarte el casco, actuar sin una orden.`,
                  `Рано отстегнуться, снять шлем, действовать без команды.`,
                  `Зарано відстебнутися, зняти шолом, діяти без команди.`,
                ),
                t(
                  `Rig or handles catching on seats and the door frame.`,
                  `Equipo o manijas que se enganchan en asientos y en el marco de la puerta.`,
                  `Система или ручки цепляются за сиденья и косяк двери.`,
                  `Система або ручки чіпляються за сидіння й одвірок.`,
                ),
                t(`Looking down on exit: you lose stability.`, `Mirar hacia abajo al salir: pierdes estabilidad.`, `Смотреть вниз на отделении: теряешь стабильность.`, `Дивитися вниз під час відокремлення: втрачаєш стабільність.`),
                t(
                  `Hips sideways to the wind: a hard arch doesn't save a crooked exit.`,
                  `Cadera de lado al viento: arquearte fuerte no salva una salida torcida.`,
                  `Таз боком к потоку: сильный прогиб не спасает кривое отделение.`,
                  `Таз боком до потоку: сильний прогин не рятує криве відокремлення.`,
                ),
                t(
                  `Rushed count on the ground = rushed count in the door.`,
                  `Conteo apurado en tierra = conteo apurado en la puerta.`,
                  `Скомканный отсчёт на земле = скомканный отсчёт в двери.`,
                  `Зім’ятий відлік на землі = зім’ятий відлік у дверях.`,
                ),
              ],
              good: [
                t(
                  `Ask for a pin check before the door; cover your handles with a hand on the way.`,
                  `Pide una revisión de pines (pin check) antes de la puerta; cubre tus manijas con una mano al moverte.`,
                  `Попроси проверить пины (pin check) перед дверью; по пути к двери прикрывай ручки рукой.`,
                  `Попроси перевірити піни (pin check) перед дверима; дорогою до дверей прикривай ручки рукою.`,
                ),
                t(
                  `On the ride up: slow breathing and run the dive flow in your head.`,
                  `En la subida: respira lento y repasa el plan de salto en la cabeza.`,
                  `В наборе высоты: медленно дыши и прогоняй план прыжка в голове.`,
                  `Під час набору висоти: повільно дихай і прокручуй план стрибка в голові.`,
                ),
                t(
                  `Present belly and hips to the wind, look up at the plane. Square to the wind with a soft arch is stable; a hard arch sideways is not.`,
                  `Pon el vientre y la cadera de cara al viento y mira hacia arriba, al avión. De frente al viento con un arco suave eres estable; con un arco fuerte de lado, no.`,
                  `Подставь потоку живот и таз, смотри вверх, на самолёт. Ровно к потоку с мягким прогибом — стабильно; сильный прогиб боком — нет.`,
                  `Підстав потоку живіт і таз, дивись угору, на літак. Рівно до потоку з м’яким прогином — стабільно; сильний прогин боком — ні.`,
                ),
                t(`Don't grab the instructors: they hold you.`, `No agarres a los instructores: ellos te sujetan a ti.`, `Не хватайся за инструкторов: держат тебя они.`, `Не хапайся за інструкторів: тримають тебе вони.`),
                t(
                  `Lost one instructor: carry on. Lost both: pull now (USPA Cat A).`,
                  `¿Perdiste a un instructor? Sigue. ¿Perdiste a los dos? Abre ya (USPA, categoría A).`,
                  `Потерял одного инструктора — продолжай. Обоих — раскрывайся сразу (USPA, категория A).`,
                  `Втратив одного інструктора — продовжуй. Обох — розкривайся одразу (USPA, категорія A).`,
                ),
              ],
            },
            {
              title: t(`Freefall`, `Caída libre`, `Свободное падение`, `Вільне падіння`),
              bad: [
                t(
                  `Legs bent too much, or drifting up and uneven: you start to spin.`,
                  `Piernas demasiado dobladas, o que suben y quedan disparejas: empiezas a girar.`,
                  `Ноги слишком согнуты или неровно «уплывают» вверх: начинает крутить.`,
                  `Ноги надто зігнуті або нерівно «спливають» угору: починає крутити.`,
                ),
                t(`Hips back, knees dropping: the arch is gone.`, `Cadera atrás, rodillas cayendo: se perdió el arco.`, `Таз назад, колени опускаются: прогиба нет.`, `Таз назад, коліна опускаються: прогину немає.`),
                t(
                  `Stiff and scared: can't learn, can't be released.`,
                  `Rígido y con miedo: no aprendes y no te pueden soltar.`,
                  `Зажат и боишься: не можешь учиться, и отпускать тебя нельзя.`,
                  `Затиснутий і боїшся: не можеш навчатися, і відпускати тебе не можна.`,
                ),
                t(
                  `Skipping a practice touch, looking away at lock-on: instructors read it as "won't pull".`,
                  `Saltarte un toque de práctica o mirar a otro lado en el lock on: los instructores lo leen como "no va a abrir".`,
                  `Пропустил тренировочное касание, отвёл взгляд на 6 000 футах: инструкторы читают это как «не раскроется».`,
                  `Пропустив тренувальний дотик, відвів погляд на 6 000 футах: інструктори читають це як «не розкриється».`,
                ),
                t(
                  `Thinking nine good pulls mean the tenth is automatic: students still freeze.`,
                  `Creer que nueve buenas aperturas hacen automática la décima: aun así, los alumnos se bloquean.`,
                  `Думать, что после девяти хороших раскрытий десятое будет само: студенты всё равно замирают.`,
                  `Думати, що після дев’яти добрих розкриттів десяте буде само собою: студенти все одно завмирають.`,
                ),
              ],
              good: [
                t(
                  `Practice the arch at home; tap your heels together; look at a point on the horizon.`,
                  `Practica el arco en casa; junta los talones; mira un punto en el horizonte.`,
                  `Тренируй прогиб дома; стукни пятками; смотри на точку на горизонте.`,
                  `Тренуй прогин удома; стукни п’ятами; дивись на точку на горизонті.`,
                ),
                t(
                  `Check altitude every 3 seconds (USPA; some schools teach about 5), after every move and whenever something surprises you.`,
                  `Mira la altura cada 3 segundos (USPA; algunas escuelas enseñan unos 5), después de cada maniobra y cada vez que algo te sorprenda.`,
                  `Проверяй высоту каждые 3 секунды (USPA; некоторые школы учат около 5), после каждого манёвра и при любой неожиданности.`,
                  `Перевіряй висоту кожні 3 секунди (USPA; деякі школи навчають близько 5), після кожного маневру і за будь-якої несподіванки.`,
                ),
                t(
                  `Overloaded or lost? Default to: altitude, arch, pull at 5,500 ft.`,
                  `¿Saturado o perdido? Vuelve a lo básico: altura, arco, abrir a 5,500 ft.`,
                  `Перегружен или потерялся? По умолчанию: высота, прогиб, раскрытие на 5 500 футах.`,
                  `Перевантажений або загубився? За замовчуванням: висота, прогин, розкриття на 5 500 футах.`,
                ),
                t(
                  `Every jump morning: dive flow out loud, handle touches with your eyes closed.`,
                  `Cada mañana de salto: plan de salto en voz alta, toques de manijas con los ojos cerrados.`,
                  `Каждое утро перед прыжками: план прыжка вслух, касания ручки с закрытыми глазами.`,
                  `Щоранку перед стрибками: план стрибка вголос, дотики до ручки із заплющеними очима.`,
                ),
                t(
                  `One AFF instructor: about 10 minutes of wind tunnel before the course lowers the chance of repeating levels. Tell the tunnel coach you have AFF booked.`,
                  `Un instructor de AFF: unos 10 minutos de túnel de viento antes del curso reducen la probabilidad de repetir niveles. Dile al entrenador del túnel que tienes AFF reservado.`,
                  `Один инструктор AFF: около 10 минут в аэротрубе до курса снижают шанс повторять уровни. Скажи тренеру трубы, что у тебя впереди AFF.`,
                  `Один інструктор AFF: близько 10 хвилин в аеротрубі до курсу знижують шанс повторювати рівні. Скажи тренерові труби, що в тебе попереду AFF.`,
                ),
                t(
                  `Category A has two goals: arch and pull on time. Everything else is a bonus.`,
                  `La categoría A tiene dos objetivos: arquear y abrir a tiempo. Todo lo demás es extra.`,
                  `На категории A две цели: прогнуться и раскрыться вовремя. Остальное — бонус.`,
                  `На категорії A дві цілі: прогнутися й розкритися вчасно. Решта — бонус.`,
                ),
              ],
            },
            {
              title: t(`Deployment and canopy check`, `Apertura y revisión de la vela`, `Раскрытие и проверка купола`, `Розкриття і перевірка купола`),
              bad: [
                t(
                  `Weak throw of the pilot chute; going head-low while staring at the altimeter.`,
                  `Lanzar el extractor sin fuerza; quedar cabeza abajo mientras miras fijo el altímetro.`,
                  `Слабый выброс вытяжного; уходишь головой вниз, пока смотришь на высотомер.`,
                  `Слабкий викид витяжного; ідеш головою вниз, поки дивишся на висотомір.`,
                ),
                t(
                  `Looking over the shoulder too early, which turns you.`,
                  `Mirar por encima del hombro demasiado pronto, lo que te hace girar.`,
                  `Слишком рано смотришь через плечо, и тебя разворачивает.`,
                  `Надто рано дивишся через плече, і тебе розвертає.`,
                ),
                t(
                  `Releasing the brakes while still in line twists: the twist becomes a spin.`,
                  `Soltar los frenos con las líneas todavía enroscadas: las vueltas se convierten en un giro.`,
                  `Снять клеванты, пока стропы ещё закручены: закрутка переходит во вращение.`,
                  `Зняти клеванти, поки стропи ще закручені: закрутка переходить в обертання.`,
                ),
                t(
                  `Skipping the turns and practice flare, and finding out near the ground that the canopy doesn't steer.`,
                  `Saltarte los giros y el flare de práctica, y descubrir cerca del suelo que la vela no responde.`,
                  `Пропустить развороты и пробный flare — и у земли узнать, что купол не управляется.`,
                  `Пропустити розвороти й пробний flare — і біля землі дізнатися, що купол не керується.`,
                ),
              ],
              good: [
                t(
                  `Can't find the handle: sweep along the bottom of the container, then down the side. Two tries or 5 s, then emergency procedure.`,
                  `¿No encuentras la manija? Barre a lo largo de la parte de abajo del contenedor y luego por el costado. Dos intentos o 5 s, luego procedimiento de emergencia.`,
                  `Не находишь ручку: проведи рукой по низу ранца, потом вниз по боку. Две попытки или 5 с, потом аварийная процедура.`,
                  `Не знаходиш ручку: проведи рукою по низу ранця, потім униз по боці. Дві спроби або 5 с, потім аварійна процедура.`,
                ),
                t(
                  `Hard pull: brace your elbow against the container; second try with both hands.`,
                  `Tirón duro: apoya el codo contra el contenedor; segundo intento con las dos manos.`,
                  `Тугое вытягивание: упрись локтем в ранец, вторая попытка двумя руками.`,
                  `Туге витягування: уприся ліктем у ранець, друга спроба двома руками.`,
                ),
                t(
                  `Free hand over your head while you pull, body symmetrical.`,
                  `Mano libre sobre la cabeza mientras abres, cuerpo simétrico.`,
                  `Свободная рука над головой, пока тянешь, тело симметрично.`,
                  `Вільна рука над головою, поки тягнеш, тіло симетричне.`,
                ),
                t(
                  `Pilot chute hesitating behind you: twist at the waist and look over your shoulder. That's the one time looking back is right.`,
                  `¿El extractor se queda flotando detrás de ti? Gira la cintura y mira por encima del hombro. Es el único momento en que mirar atrás está bien.`,
                  `Вытяжной «завис» за спиной: повернись в поясе и посмотри через плечо. Это единственный момент, когда так смотреть правильно.`,
                  `Витяжний «завис» за спиною: повернися в поясі й подивися через плече. Це єдиний момент, коли так дивитися правильно.`,
                ),
                t(
                  `Full canopy check: there, square, stable, steerable; full flare; turns of 90° each way.`,
                  `Revisión completa de la vela: está, cuadrada, estable, gobernable; flare completo; giros de 90° a cada lado.`,
                  `Полная проверка купола: есть, квадратный, стабильный, управляемый; полный flare; развороты на 90° в обе стороны.`,
                  `Повна перевірка купола: є, квадратний, стабільний, керований; повний flare; розвороти на 90° в обидва боки.`,
                ),
                t(
                  `Turning on its own after the twists are out? Check that a toggle hasn't come unstowed.`,
                  `¿Gira solo después de quitar las vueltas? Revisa si se soltó un batidor.`,
                  `Купол сам поворачивает после раскрутки? Проверь, не сошла ли одна клеванта с фиксации.`,
                  `Купол сам повертає після розкручування? Перевір, чи не зійшла одна клеванта з фіксації.`,
                ),
              ],
            },
            {
              title: t(`Emergencies`, `Emergencias`, `Аварийные ситуации`, `Аварійні ситуації`),
              bad: [
                t(`Trying to fix a spinning canopy for too long.`, `Intentar arreglar demasiado tiempo una vela que gira.`, `Слишком долго пытаться исправить вращающийся купол.`, `Надто довго намагатися виправити купол, що обертається.`),
                t(
                  `Mixing up decision altitude (2,500 ft) and hard deck (1,000 ft), and not cutting away when you still could.`,
                  `Confundir la altura de decisión (2,500 ft) con el límite mínimo (1,000 ft), y no liberar cuando todavía podías.`,
                  `Путать высоту принятия решения (2 500 футов) и нижнюю границу (1 000 футов) и не отцепиться, когда ещё можно.`,
                  `Плутати висоту ухвалення рішення (2 500 футів) і нижню межу (1 000 футів) та не відчепитися, коли ще можна.`,
                ),
                t(`Waiting for the AAD after a cutaway.`, `Esperar al AAD después de liberar.`, `Ждать AAD после отцепки.`, `Чекати на AAD після відчеплення.`),
                t(
                  `One-handed cutaway failing under spin forces.`,
                  `Liberación con una mano que falla por las fuerzas del giro.`,
                  `Отцепка одной рукой не проходит из-за перегрузки при вращении.`,
                  `Відчеплення однією рукою не проходить через перевантаження при обертанні.`,
                ),
                t(
                  `Thinking a landable canopy stays landable: damage, a collision or a growing problem can come later.`,
                  `Creer que una vela aterrizable lo seguirá siendo: un daño, un choque o un problema que crece pueden llegar después.`,
                  `Думать, что купол, на котором можно сесть, таким и останется: повреждение, столкновение или нарастающая проблема могут появиться позже.`,
                  `Думати, що купол, на якому можна сісти, таким і залишиться: пошкодження, зіткнення або проблема, що наростає, можуть з’явитися пізніше.`,
                ),
              ],
              good: [
                t(
                  `5-second rule (Parachutist, 2019): unclear canopy, 5 s at most to decide, counting out loud; spinning or clearly not flying, act now. Clearly getting better? The article allows more 5-second blocks, rarely past 15 s in all; as a student it's still two tries, and never below 2,500 ft.`,
                  `Regla de los 5 segundos (Parachutist, 2019): vela dudosa, 5 s como máximo para decidir, contando en voz alta; si gira o claramente no vuela, actúa ya. ¿Mejora claramente? El artículo permite más bloques de 5 s, casi nunca más de 15 en total; como alumno siguen siendo dos intentos, y nunca por debajo de 2,500 ft.`,
                  `Правило 5 секунд (Parachutist, 2019): купол непонятный — не больше 5 с на решение, считая вслух; вращается или явно не летит — действуй сразу. Явно становится лучше? Статья допускает ещё блоки по 5 с, но редко больше 15 в сумме; студенту всё равно две попытки и никогда не ниже 2 500 футов.`,
                  `Правило 5 секунд (Parachutist, 2019): купол незрозумілий — не більше 5 с на рішення, рахуючи вголос; обертається або явно не летить — дій одразу. Явно стає краще? Стаття допускає ще блоки по 5 с, але рідко більше ніж 15 загалом; студентові все одно дві спроби і ніколи не нижче 2 500 футів.`,
                ),
                t(
                  `Hanging-harness drill all the way to landing, 3 times per session, saying each step out loud. Ask for a second problem under the reserve and called-out hazards ("power lines!").`,
                  `Simulacro en el arnés colgante hasta el aterrizaje, 3 veces por sesión, diciendo cada paso en voz alta. Pide un segundo problema bajo la reserva y peligros anunciados ("¡cables!").`,
                  `Отработка на подвесной системе до самой посадки, 3 раза за занятие, проговаривая каждый шаг. Попроси дать вторую проблему под запасным и выкрикивать опасности («провода!»).`,
                  `Відпрацювання на підвісній системі аж до посадки, 3 рази за заняття, проговорюючи кожен крок. Попроси дати другу проблему під запасним і вигукувати небезпеки («дроти!»).`,
                ),
                t(
                  `Under load the handles sit higher on the chest than on the ground.`,
                  `Con carga, las manijas quedan más arriba en el pecho que en tierra.`,
                  `Под нагрузкой ручки на груди выше, чем на земле.`,
                  `Під навантаженням ручки на грудях вище, ніж на землі.`,
                ),
                t(
                  `Practice until it's automatic, not until it feels comfortable.`,
                  `Practica hasta que sea automático, no hasta que te sientas cómodo.`,
                  `Тренируй до автоматизма, а не пока не станет комфортно.`,
                  `Тренуй до автоматизму, а не доки не стане комфортно.`,
                ),
                t(
                  `Someone else cut away? Say "well done" first. Second-guessing other people's cutaways teaches you to hesitate.`,
                  `¿Alguien liberó? Primero dile "bien hecho". Cuestionar las liberaciones de otros te enseña a dudar.`,
                  `Кто-то отцепился? Сначала скажи «молодец». Разговоры в духе «можно было не отцепляться» учат тебя колебаться.`,
                  `Хтось відчепився? Спершу скажи «молодець». Розмови на кшталт «можна було не відчіплюватися» вчать тебе вагатися.`,
                ),
              ],
            },
            {
              title: t(`Canopy flight, flare and landing`, `Vuelo bajo vela, flare y aterrizaje`, `Полёт под куполом, flare и посадка`, `Політ під куполом, flare і посадка`),
              bad: [
                t(
                  `Flaring early, late or not at all. No flare causes the worst injuries.`,
                  `Hacer el flare temprano, tarde o no hacerlo. Sin flare se producen las peores lesiones.`,
                  `Flare слишком рано, слишком поздно или без flare вообще. Без flare — самые тяжёлые травмы.`,
                  `Flare зарано, запізно або взагалі без flare. Без flare — найважчі травми.`,
                ),
                t(
                  `Feet apart, or reaching for the ground with one foot or a hand.`,
                  `Pies separados, o buscar el suelo con un pie o una mano.`,
                  `Ступни врозь или тянуться к земле одной ногой или рукой.`,
                  `Стопи нарізно або тягнутися до землі однією ногою чи рукою.`,
                ),
                t(
                  `Trying to stand it up after a few soft landings (the classic AFF 2–4 broken ankle).`,
                  `Intentar quedar de pie después de unos aterrizajes suaves (el clásico tobillo roto de AFF 2–4).`,
                  `Пытаться устоять на ногах после пары мягких посадок (классический перелом лодыжки на AFF 2–4).`,
                  `Намагатися встояти на ногах після кількох м’яких посадок (класичний перелом щиколотки на AFF 2–4).`,
                ),
                t(
                  `Fixating on the target and turning low to reach it.`,
                  `Fijarse en el blanco y girar bajo para alcanzarlo.`,
                  `Зациклиться на цели и сделать низкий разворот, чтобы до неё дотянуть.`,
                  `Зациклитися на цілі й зробити низький розворот, щоб до неї дотягнути.`,
                ),
                t(
                  `Straight arms swung out to the sides in the flare ("iron cross").`,
                  `Brazos rectos abiertos a los lados en el flare ("cruz de hierro").`,
                  `Прямые руки в стороны во время flare («железный крест»).`,
                  `Прямі руки в боки під час flare («залізний хрест»).`,
                ),
                t(
                  `Looking straight down at the ground under you: it rushes up and the timing goes wrong.`,
                  `Mirar justo abajo, al suelo debajo de ti: parece que se te viene encima y calculas mal el momento.`,
                  `Смотреть прямо вниз, под себя: земля «набегает», и ошибаешься с моментом.`,
                  `Дивитися прямо вниз, під себе: земля «набігає», і помиляєшся з моментом.`,
                ),
                t(
                  `Treating "5, 4, 3, 2, 1" as five full seconds of pull.`,
                  `Tomar el "5, 4, 3, 2, 1" como cinco segundos completos de tirón.`,
                  `Принимать «5, 4, 3, 2, 1» за пять полных секунд торможения.`,
                  `Сприймати «5, 4, 3, 2, 1» як п’ять повних секунд гальмування.`,
                ),
                t(
                  `Dropping a toggle near the ground: the single worst injury among 2024 US landings without a turn.`,
                  `Soltar un batidor cerca del suelo: la lesión más grave de todos los aterrizajes sin giro en EE. UU. en 2024.`,
                  `Выпустить клеванту у земли: самая тяжёлая травма среди всех посадок без разворота в США в 2024 году.`,
                  `Випустити клеванту біля землі: найважча травма серед усіх посадок без розвороту у США у 2024 році.`,
                ),
              ],
              good: [
                t(`Priorities: level wing, clear area, flare and PLF.`, `Prioridades: ala nivelada, zona despejada, flare y PLF.`, `Приоритеты: ровное крыло, свободная площадка, flare и PLF.`, `Пріоритети: рівне крило, вільний майданчик, flare і PLF.`),
                t(
                  `Look at the horizon ahead, about 45° down, not at your feet.`,
                  `Mira al horizonte adelante, unos 45° hacia abajo, no a tus pies.`,
                  `Смотри на горизонт впереди, примерно под 45° вниз, а не себе под ноги.`,
                  `Дивись на горизонт попереду, приблизно під 45° униз, а не собі під ноги.`,
                ),
                t(
                  `"5, 4, 3, 2, 1" is a count: one smooth pull, both hands, elbows back, hands close to the body, finished at touchdown.`,
                  `"5, 4, 3, 2, 1" es un conteo: un tirón suave, las dos manos, codos atrás, manos pegadas al cuerpo, terminado al tocar el suelo.`,
                  `«5, 4, 3, 2, 1» — это счёт: одно плавное движение, обе руки, локти назад, кисти у корпуса, закончить в момент касания.`,
                  `«5, 4, 3, 2, 1» — це лік: один плавний рух, обидві руки, лікті назад, кисті біля тіла, закінчити в момент дотику.`,
                ),
                t(
                  `Flared high? Stop, hold what you have, fly straight, finish on the way down.`,
                  `¿Flare demasiado alto? Para, mantén lo que tienes, vuela recto y termina mientras bajas.`,
                  `Начал flare слишком высоко? Остановись, держи то, что есть, лети прямо и добирай на снижении.`,
                  `Почав flare надто високо? Зупинись, тримай те, що є, лети прямо й добирай на зниженні.`,
                ),
                t(
                  `The radio is a backup: ground coming fast and no "flare" call? Flare.`,
                  `La radio es un respaldo: ¿el suelo se acerca rápido y nadie dice "flare"? Haz el flare.`,
                  `Радио — только подстраховка: земля близко, а команды нет? Делай flare.`,
                  `Радіо — лише підстраховка: земля близько, а команди «flare» немає? Роби flare.`,
                ),
                t(
                  `At 2,500 ft decide whether you can reach the holding point; if not, pick a clear alternate by 2,000 ft at the latest.`,
                  `A 2,500 ft decide si llegas al punto de espera; si no, elige una zona alternativa despejada a más tardar a 2,000 ft.`,
                  `На 2 500 футах реши, долетишь ли до точки ожидания; если нет, выбери чистую запасную площадку не позже 2 000 футов.`,
                  `На 2 500 футах виріши, чи долетиш до точки очікування; якщо ні, обери чистий запасний майданчик не пізніше ніж на 2 000 футах.`,
                ),
                t(
                  `PLF every time; thumbs together at the crotch so a hand doesn't go out.`,
                  `PLF siempre; pulgares juntos a la altura de la entrepierna para que no se salga una mano.`,
                  `PLF каждый раз; большие пальцы вместе у паха, чтобы не выставить руку.`,
                  `PLF щоразу; великі пальці разом біля паху, щоб не виставити руку.`,
                ),
                t(`Collision ahead: both turn right.`, `¿Riesgo de choque de frente? Los dos giran a la derecha.`, `Угроза столкновения: оба уходят вправо.`, `Загроза зіткнення: обидва відходять праворуч.`),
              ],
            },
            {
              title: t(`Getting through AFF and the A-license`, `Cómo pasar el AFF y la licencia A`, `Как пройти AFF и получить лицензию A`, `Як пройти AFF і отримати ліцензію A`),
              badTitle: t(`Why students repeat levels`, `Por qué los alumnos repiten niveles`, `Почему повторяют уровни`, `Чому повторюють рівні`),
              goodTitle: t(`Rules and habits`, `Reglas y hábitos`, `Правила и привычки`, `Правила і звички`),
              bad: [
                t(
                  `Too stiff to learn; drifting from the instructor; ignoring signals.`,
                  `Demasiado rígidos para aprender; se alejan del instructor; ignoran las señales.`,
                  `Слишком зажат, чтобы учиться; отплывает от инструктора; не реагирует на сигналы.`,
                  `Надто затиснутий, щоб навчатися; відпливає від інструктора; не реагує на сигнали.`,
                ),
                t(
                  `Can't find the handle, or loses control at pull time.`,
                  `No encuentran la manija o pierden el control al abrir.`,
                  `Не находит ручку или теряет контроль при раскрытии.`,
                  `Не знаходить ручку або втрачає контроль під час розкриття.`,
                ),
                t(
                  `Scraping through category B at the minimum: category C is then rarely passed the first time.`,
                  `Pasar la categoría B por los pelos: luego la C rara vez sale a la primera.`,
                  `Проскочил категорию B на минимуме: тогда C с первого раза почти не сдают.`,
                  `Проскочив категорію B на мінімумі: тоді C з першого разу майже не складають.`,
                ),
                t(
                  `Sloppy pull altitude. Category A passes within 1,000 ft of the planned altitude, category B within 500 ft, category C with no written margin.`,
                  `Altura de apertura descuidada. La categoría A se aprueba a menos de 1,000 ft de la altura prevista, la B a menos de 500 ft, la C sin margen escrito.`,
                  `Небрежная высота раскрытия. Категорию A засчитывают в пределах 1 000 футов от заданной высоты, B — в пределах 500, на C письменного допуска нет.`,
                  `Недбала висота розкриття. Категорію A зараховують у межах 1 000 футів від заданої висоти, B — у межах 500, на C письмового допуску немає.`,
                ),
                t(`Long gaps between jumps.`, `Mucho tiempo entre saltos.`, `Большие перерывы между прыжками.`, `Великі перерви між стрибками.`),
              ],
              good: [
                t(
                  `A-license: 25 jumps, progression card, check dive, written (75%+) and oral exam (100%).`,
                  `Licencia A: 25 saltos, tarjeta de progresión, salto de verificación (check dive), examen escrito (75%+) y oral (100%).`,
                  `Лицензия A: 25 прыжков, карточка прогресса, контрольный прыжок (check dive), письменный (от 75 %) и устный экзамен (100 %).`,
                  `Ліцензія A: 25 стрибків, картка прогресу, контрольний стрибок (check dive), письмовий (від 75 %) та усний іспит (100 %).`,
                ),
                t(
                  `Student wind limit 14 mph; no alcohol 8 h before; after 30 days off, a supervised jump.`,
                  `Límite de viento para alumnos 14 mph; nada de alcohol 8 h antes; tras 30 días sin saltar, un salto supervisado.`,
                  `Лимит ветра для студентов 14 миль/ч; без алкоголя за 8 ч до прыжка; после 30 дней перерыва — прыжок под контролем инструктора.`,
                  `Ліміт вітру для студентів 14 миль/год; без алкоголю за 8 год до стрибка; після 30 днів перерви — стрибок під наглядом інструктора.`,
                ),
                t(
                  `Gear check four times: before putting it on, after, before boarding, before exit.`,
                  `Revisa el equipo cuatro veces: antes de ponértelo, después, antes de subir, antes de salir.`,
                  `Проверка снаряжения четыре раза: перед тем как надеть, после, перед посадкой в самолёт, перед выходом.`,
                  `Перевірка спорядження чотири рази: перед тим як одягнути, після, перед посадкою в літак, перед виходом.`,
                ),
                t(
                  `Jump in a tight block, take a canopy course after AFF.`,
                  `Salta seguido, sin largas pausas; después del AFF, haz un curso de pilotaje de vela.`,
                  `Прыгай плотно, без больших пауз; после AFF — курс пилотирования купола.`,
                  `Стрибай щільно, без великих пауз; після AFF — курс пілотування купола.`,
                ),
                t(
                  `Learn only what today's jump needs; skip scary videos without context.`,
                  `Aprende solo lo que pide el salto de hoy; evita videos de miedo sin contexto.`,
                  `Учи только то, что нужно на сегодняшний прыжок; не смотри страшные ролики без контекста.`,
                  `Вчи лише те, що потрібно на сьогоднішній стрибок; не дивись страшні ролики без контексту.`,
                ),
                t(
                  `The A-license is a start, not the finish: keep jumps 26–100 structured and conservative.`,
                  `La licencia A es un comienzo, no el final: que los saltos 26–100 sean ordenados y prudentes.`,
                  `Лицензия A — начало, а не финиш: прыжки 26–100 планируй заранее и не рискуй.`,
                  `Ліцензія A — початок, а не фініш: стрибки 26–100 плануй заздалегідь і не ризикуй.`,
                ),
              ],
            },
          ],
          sources: [
            { label: 'USPA ISP Cat A', href: 'http://www.uspa.org/skydiveschool/A' },
            { label: 'SIM 4-1', href: 'https://www.uspa.org/sim/4-1' },
            { label: 'Brodsky-Chenfeld', href: 'https://www.uspa.org/rating-corner-aff-tips' },
            { label: 'Grau', href: 'https://www.uspa.org/rating-corner-tips-for-new-aff-instructors' },
            { label: 'Sharp 2022', href: 'https://parachutist.com/p/PgrID/2839/PageID/110/artmid/2830/articleid/9023' },
            { label: 'Sharp 2019', href: 'https://parachutist.com/Article/ArtMID/2847/ArticleID/7495/Rating-Corner%20-%20Clarifying-Goals-for-Early-AFF-Jumps' },
            { label: 'Planche Wallace', href: 'https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485' },
            { label: 'Bell', href: 'https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486' },
            { label: 'Bell 2024', href: 'https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488' },
            { label: 'EP Proficiency', href: 'https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency' },
            { label: 'When, Not If', href: 'https://www.skydivemag.com/new?p=32958' },
            { label: 'Schock 2025', href: 'https://parachutist.com/p/PgrID/2839/PageID/160/artmid/2830/articleid/9555' },
            { label: '2024 incidents', href: 'http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents' },
            { label: 'Foundations of Flight', href: 'https://parachutist.com/p/PgrID/2839/PageID/52/artmid/2830/articleid/9015' },
            { label: 'Scott Miller', href: 'https://www.skydivemag.com/new?p=16580' },
            { label: 'Pointer 2020', href: 'https://www.skydivemag.com/new/5-hot-tips-for-your-aff-course/' },
            { label: 'r/SkyDiving', href: 'https://www.reddit.com/r/SkyDiving/comments/1o7djbb/student_flare_timing/' },
            { label: 'A-license', href: 'https://www.uspa.org/members/licenses/a-license-requirements-and-forms' },
            { label: 'SIM 2-1', href: 'https://www.uspa.org/SIM/2-1' },
            { label: 'SIM 4-4', href: 'https://uspa.org/sim/4-4' },
            { label: 'BKPC', href: 'https://bkpc.co.uk/2026/05/09/one-year-100-jumps-a-shift-in-perspective/' },
          ],
        },
        {
          type: 'watch',
          items: [
            {
              href: 'https://www.youtube.com/playlist?list=PL5NtYTSapvjCNbMA5CE_P8s1PEN2danzh',
              credit: 'USPA',
              label: t(`USPA dive flows, all categories`, `Planes de salto USPA, todas las categorías`, `Планы прыжков USPA, все категории`, `Плани стрибків USPA, усі категорії`),
            },
            {
              href: 'https://www.uspa.org/skydiveschool/landing',
              credit: 'uspa.org',
              label: t(`USPA online ground school`, `Curso teórico online de USPA`, `Онлайн-курс наземной подготовки USPA`, `Онлайн-курс наземної підготовки USPA`),
            },
            {
              yt: 'IIN4WylwLGo',
              t: 0,
              credit: 'Brian Germain',
              label: t(`Flaring too high`, `Flare demasiado alto`, `Flare слишком высоко`, `Flare надто високо`),
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: t(
                `Right after exit you've lost both instructors. What now?`,
                `Justo después de salir perdiste a los dos instructores. ¿Y ahora?`,
                `Сразу после отделения ты потерял обоих инструкторов. Что делаешь?`,
                `Одразу після відокремлення ти втратив обох інструкторів. Що робиш?`,
              ),
              options: [
                t(`Arch and pull right now`, `Arqueo y abro ya mismo`, `Прогибаюсь и сразу раскрываюсь`, `Прогинаюся й одразу розкриваюся`),
                t(`Carry on with the dive flow`, `Sigue con el plan de salto`, `Продолжаю план прыжка`, `Продовжую план стрибка`),
                t(`Wait for them until 5,500 ft`, `Espéralos hasta 5,500 ft`, `Жду их до 5 500 футов`, `Чекаю на них до 5 500 футів`),
              ],
              answer: 0,
              why: t(
                `Lost one instructor: carry on. Lost both: pull now.`,
                `¿Perdiste a uno? Sigue. ¿A los dos? Abre ya.`,
                `Потерял одного — продолжай. Обоих — раскрывайся сразу.`,
                `Втратив одного — продовжуй. Обох — розкривайся одразу.`,
              ),
            },
            {
              q: t(
                `How often does USPA say to check your altitude in freefall?`,
                `¿Cada cuánto dice USPA que mires la altura en caída libre?`,
                `Как часто, по USPA, нужно проверять высоту в свободном падении?`,
                `Як часто, за USPA, треба перевіряти висоту у вільному падінні?`,
              ),
              options: [
                t(`Every 3 seconds`, `Cada 3 segundos`, `Каждые 3 секунды`, `Кожні 3 секунди`),
                t(`Every 10 seconds`, `Cada 10 segundos`, `Каждые 10 секунд`, `Кожні 10 секунд`),
                t(`Only at 6,000 ft`, `Solo a 6,000 ft`, `Только на 6 000 футах`, `Лише на 6 000 футах`),
              ],
              answer: 0,
              why: t(
                `Every 3 seconds, after every move and whenever something surprises you. Some schools teach about 5.`,
                `Cada 3 segundos, después de cada maniobra y cada vez que algo te sorprenda. Algunas escuelas enseñan unos 5.`,
                `Каждые 3 секунды, после каждого манёвра и при любой неожиданности. Некоторые школы учат около 5.`,
                `Кожні 3 секунди, після кожного маневру і за будь-якої несподіванки. Деякі школи навчають близько 5.`,
              ),
            },
            {
              q: t(
                `What does the "5, 4, 3, 2, 1" in the flare mean?`,
                `¿Qué significa el "5, 4, 3, 2, 1" del flare?`,
                `Что значит «5, 4, 3, 2, 1» во время flare?`,
                `Що означає «5, 4, 3, 2, 1» під час flare?`,
              ),
              options: [
                t(`One smooth pull, done at touchdown`, `Un tirón suave, terminado al tocar`, `Одно плавное движение до касания`, `Один плавний рух до дотику`),
                t(`Pull for five full seconds`, `Tirar cinco segundos completos`, `Тянуть ровно пять секунд`, `Тягнути рівно п’ять секунд`),
                t(`Five quick pumps on the toggles`, `Cinco bombeos rápidos de los batidores`, `Пять быстрых качков клевантами`, `П’ять швидких підкачувань клевантами`),
              ],
              answer: 0,
              why: t(
                `It's a count, not a timer. What matters is where the flare finishes: at touchdown, with both hands, elbows back, hands close to the body.`,
                `Es un conteo, no un cronómetro. Lo que importa es dónde termina el flare: al tocar el suelo, con las dos manos, codos atrás, manos pegadas al cuerpo.`,
                `Это счёт, а не таймер. Важно, где flare заканчивается: в момент касания, обеими руками, локти назад, кисти у корпуса.`,
                `Це лік, а не таймер. Важливо, де flare закінчується: у момент дотику, обома руками, лікті назад, кисті біля тіла.`,
              ),
            },
            {
              q: t(
                `The ground is coming fast and the radio says nothing. What do you do?`,
                `El suelo se acerca rápido y la radio no dice nada. ¿Qué haces?`,
                `Земля быстро приближается, а по радио тишина. Что делаешь?`,
                `Земля швидко наближається, а по радіо тиша. Що робиш?`,
              ),
              options: [
                t(`Flare yourself`, `Haz el flare tú`, `Делаю flare сам`, `Роблю flare сам`),
                t(`Wait for the "flare" call`, `Espera a que digan "flare"`, `Жду команды «flare»`, `Чекаю на команду «flare»`),
                t(`Turn to slow down`, `Gira para frenar`, `Поворачиваю, чтобы затормозить`, `Повертаю, щоб загальмувати`),
              ],
              answer: 0,
              why: t(
                `The radio is a backup. You fly your canopy: ground close and no call, flare.`,
                `La radio es un respaldo. Tú vuelas tu vela: suelo cerca y nadie dice nada, haz el flare.`,
                `Радио — подстраховка. Куполом управляешь ты: земля близко, команды нет — flare.`,
                `Радіо — підстраховка. Куполом керуєш ти: земля близько, команди немає — flare.`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- questions
    {
      id: 'questions',
      eyebrow: t(`Before the next session`, `Antes de la próxima sesión`, `Перед следующим занятием`, `Перед наступним заняттям`),
      title: t(`Ask the instructors`, `Pregunta a los instructores`, `Спросить у инструкторов`, `Запитати в інструкторів`),
      blocks: [
        { type: 'h', text: t(`Gear`, `Equipo`, `Снаряжение`, `Спорядження`) },
        {
          type: 'questions',
          items: [
            t(
              `Student rigs: which pilot chute handle, and which reserve handle (metal ring or soft pillow, what colour)?`,
              `Equipos de alumno: ¿qué manija del extractor y qué manija de reserva (anilla metálica o almohadilla blanda, de qué color)?`,
              `Студенческие системы: какая ручка вытяжного и какая ручка запасного (металлическое кольцо или мягкая подушка, какого цвета)?`,
              `Студентські системи: яка ручка витяжного і яка ручка запасного (металеве кільце чи м'яка подушка, якого кольору)?`,
            ),
            t(
              `Which AAD, which mode, and at what altitude does it fire?`,
              `¿Qué AAD, en qué modo y a qué altura se activa?`,
              `Какой AAD, в каком режиме и на какой высоте срабатывает?`,
              `Який AAD, у якому режимі й на якій висоті спрацьовує?`,
            ),
            t(
              `Is there an RSL or a MARD (Skyhook) on the student rigs?`,
              `¿Los equipos de alumno llevan RSL o MARD (Skyhook)?`,
              `Есть ли на студенческих системах RSL или MARD (Skyhook)?`,
              `Чи є на студентських системах RSL або MARD (Skyhook)?`,
            ),
            t(
              `"Clear the lines from right to left toward the shoulder": what was that? A bridle over the shoulder, or the RSL?`,
              `"Despejar las líneas de derecha a izquierda hacia el hombro": ¿qué era eso? ¿Una brida sobre el hombro o el RSL?`,
              `«Освободить стропы справа налево к плечу»: что это было? Стренга через плечо или RSL?`,
              `«Звільнити стропи справа наліво до плеча»: що це було? Стренга через плече чи RSL?`,
            ),
          ],
        },
        { type: 'h', text: t(`In the plane`, `En el avión`, `В самолёте`, `У літаку`) },
        {
          type: 'questions',
          items: [
            t(
              `Aircraft emergency: at which altitudes do we land with the plane, exit on the reserve, exit on the main, or exit normally?`,
              `Emergencia del avión: ¿a qué alturas aterrizamos con el avión, salimos con la reserva, con la principal o normal?`,
              `Авария самолёта: на каких высотах садимся с самолётом, прыгаем на запасном, на основном или обычно?`,
              `Аварія літака: на яких висотах сідаємо з літаком, стрибаємо на запасному, на основному чи звичайно?`,
            ),
            t(
              `Are those altitudes the same on the Caravan and the Cessna?`,
              `¿Son esas alturas iguales en el Caravan y el Cessna?`,
              `Эти высоты одинаковы на Caravan и Cessna?`,
              `Ці висоти однакові на Caravan і Cessna?`,
            ),
            t(
              `If we ride the plane down, who switches off my AAD?`,
              `Si bajamos con el avión, ¿quién apaga mi AAD?`,
              `Если снижаемся с самолётом, кто выключает мой AAD?`,
              `Якщо знижуємося з літаком, хто вимикає мій AAD?`,
            ),
            t(
              `Which aircraft do AFF students jump?`,
              `¿De qué avión saltan los alumnos AFF?`,
              `С какого самолёта прыгают студенты AFF?`,
              `З якого літака стрибають студенти AFF?`,
            ),
            t(
              `Which instructor is inside and which outside?`,
              `¿Qué instructor va dentro y cuál fuera?`,
              `Кто из инструкторов внутри, кто снаружи?`,
              `Хто з інструкторів усередині, хто назовні?`,
            ),
            t(
              `In the climb-out, which hand and foot go first, and which bar do I hold?`,
              `En el climb-out, ¿qué mano y qué pie van primero y de qué barra me agarro?`,
              `При выходе в дверь: какая рука и нога первыми, за какой поручень держаться?`,
              `Під час виходу в двері: яка рука й нога першими, за який поручень триматися?`,
            ),
            t(
              `Exit count: exact words, which instructor first, exit altitude.`,
              `Conteo de salida: palabras exactas, qué instructor primero, altura de salida.`,
              `Отсчёт на выходе: точные слова, на какого инструктора смотрим первым, высота отделения.`,
              `Відлік на виході: точні слова, на якого інструктора дивимося першим, висота відокремлення.`,
            ),
          ],
        },
        { type: 'h', text: t(`Freefall`, `Caída libre`, `Свободное падение`, `Вільне падіння`) },
        {
          type: 'questions',
          items: [
            t(
              `Signals: does thumb down mean arch (hips forward), like in the filmed signals?`,
              `Señales: ¿el pulgar abajo significa arquearse (cadera adelante), como en el video?`,
              `Сигналы: большой палец вниз значит прогиб (таз вперёд), как в видео?`,
              `Сигнали: великий палець униз означає прогин (таз уперед), як у відео?`,
            ),
            t(
              `How do you show "legs in", "OK" and "let go of the pilot chute"?`,
              `¿Cómo muestran "piernas adentro", "OK" y "suelta el extractor"?`,
              `Как вы показываете «подбери ноги», «OK» и «отпусти вытяжной»?`,
              `Як ви показуєте «підбери ноги», «OK» і «відпусти витяжний»?`,
            ),
            t(
              `Does a closed fist mean "practice touch" or "pull now" here?`,
              `¿El puño cerrado aquí es "toque de práctica" o "abre ya"?`,
              `Кулак у вас значит «тренировочное касание» или «раскрывайся сейчас»?`,
              `Кулак у вас означає «тренувальний дотик» чи «розкривайся зараз»?`,
            ),
            t(
              `What does a shake of my harness right after exit mean?`,
              `¿Qué significa que me sacudan el arnés justo después de salir?`,
              `Что значит, когда трясут за подвесную систему сразу после отделения?`,
              `Що означає, коли трусять за підвісну систему одразу після відокремлення?`,
            ),
            t(
              `Can't find the handle or a hard pull after two tries: straight to the reserve (as the USPA SIM says) or cut away first, then the reserve?`,
              `Si no encuentro la manija o está dura tras dos intentos: ¿directo a la reserva (como dice el SIM de USPA) o primero liberar y luego la reserva?`,
              `Не нашёл ручку или тугое раскрытие после двух попыток: сразу запасной (как в USPA SIM) или сначала отцепка, потом запасной?`,
              `Не знайшов ручку або туге розкриття після двох спроб: одразу запасний (як у USPA SIM) чи спочатку відчеплення, потім запасний?`,
            ),
            t(
              `My pilot chute hesitates behind me: which shoulder do I look over?`,
              `El extractor se queda detrás de mí: ¿por encima de qué hombro miro?`,
              `Вытяжной завис за спиной: через какое плечо смотреть?`,
              `Витяжний завис за спиною: через яке плече дивитися?`,
            ),
            t(
              `Wave-off: how many times, and does it start exactly at 5,500 ft?`,
              `Wave-off: ¿cuántas veces y empieza justo a 5,500 ft?`,
              `Отмашка: сколько раз и начинать ровно на 5 500 футах?`,
              `Відмашка: скільки разів і починати рівно на 5 500 футах?`,
            ),
            t(
              `Pull altitude on categories D and E?`,
              `¿Altura de apertura en las categorías D y E?`,
              `Высота раскрытия на категориях D и E?`,
              `Висота розкриття на категоріях D і E?`,
            ),
            t(
              `Is D-1 my first exit without being held?`,
              `¿En D-1 salgo por primera vez sin que me sujeten?`,
              `На D-1 я впервые отделяюсь без того, чтобы меня держали?`,
              `На D-1 я вперше відокремлююсь без того, щоб мене тримали?`,
            ),
            t(
              `Which altimeter will I wear, and where does the colour on its dial start?`,
              `¿Qué altímetro voy a llevar y dónde empieza el color en su esfera?`,
              `Какой высотомер я надену и с какой высоты на нём начинается цветная дуга?`,
              `Який висотомір я одягну і з якої висоти на ньому починається кольорова дуга?`,
            ),
          ],
        },
        { type: 'h', text: t(`Opening and emergencies`, `Apertura y emergencias`, `Раскрытие и аварийные ситуации`, `Розкриття та аварійні ситуації`) },
        {
          type: 'questions',
          items: [
            t(
              `Count after the pull: three or five, and what exactly do we check at the end?`,
              `Cuenta tras abrir: ¿hasta tres o hasta cinco, y qué revisamos exactamente al final?`,
              `Счёт после раскрытия: до трёх или до пяти, и что именно проверяем в конце?`,
              `Рахунок після розкриття: до трьох чи до п'яти, і що саме перевіряємо наприкінці?`,
            ),
            t(
              `USPA says students decide by 2,500 ft and don't cut away below 1,000 ft. Does our school use higher numbers?`,
              `USPA dice que los alumnos deciden antes de 2,500 ft y no liberan por debajo de 1,000 ft. ¿Nuestra escuela usa alturas más altas?`,
              `USPA говорит: студенты решают не ниже 2 500 футов и не отцепляются ниже 1 000 футов. В нашей школе высоты выше?`,
              `USPA каже: студенти вирішують не нижче 2 500 футів і не відчіплюються нижче 1 000 футів. У нашій школі висоти вищі?`,
            ),
            t(
              `Emergency procedure: the exact first words ("altitude, arch, look red…"?), one hand per handle or both hands on red, and one or two hands on silver?`,
              `Procedimiento de emergencia: ¿las primeras palabras exactas ("altura, arco, mira la roja…"?), una mano por manija o las dos en la roja, y una o dos manos en la plateada?`,
              `Аварийная процедура: точные первые слова («высота, прогиб, смотрю на красную…»?), по руке на ручку или обе на красную, одной или двумя руками на кольцо?`,
              `Аварійна процедура: точні перші слова («висота, прогин, дивлюся на червону…»?), по руці на ручку чи обидві на червону, однією чи двома руками на кільце?`,
            ),
            t(
              `Hard pull or lost handle: USPA SIM says reserve only. Pilot chute in tow: USPA allows reserve only, or cut away then reserve. Which do you teach for each?`,
              `Tirón duro o manija perdida: el SIM de USPA dice solo la reserva. Extractor remolcado: USPA permite solo la reserva, o liberar y luego la reserva. ¿Cuál enseñan en cada caso?`,
              `Тугое вытягивание или потерянная ручка: SIM USPA говорит — сразу запасной. Вытяжной в следе: USPA допускает сразу запасной или отцепку, потом запасной. Что учите вы в каждом случае?`,
              `Туге витягування або загублена ручка: SIM USPA каже — одразу запасний. Витяжний у сліді: USPA допускає одразу запасний або відчеплення, потім запасний. Чого навчаєте ви в кожному випадку?`,
            ),
            t(
              `USPA says line twists that spin are cut away right away, no kicking. Is that what you teach?`,
              `USPA dice que las vueltas en las líneas que giran se liberan enseguida, sin patear. ¿Es lo que enseñan?`,
              `USPA говорит: закрутку с вращением отцепляют сразу, не раскручиваясь. Вы учите так же?`,
              `USPA каже: закрутку з обертанням відчіплюють одразу, не розкручуючись. Ви навчаєте так само?`,
            ),
            t(
              `Pilot chute bridle round an arm or leg: shake it off first (limb to the sky, two tries or 5 s), or straight to the emergency procedure?`,
              `Brida del extractor enrollada en un brazo o una pierna: ¿primero soltarla (el miembro al cielo, dos intentos o 5 s) o directo al procedimiento de emergencia?`,
              `Стренга вытяжного обмотала руку или ногу: сначала стряхнуть (рука или нога в небо, две попытки или 5 с) или сразу аварийная процедура?`,
              `Стренга витяжного обмотала руку чи ногу: спершу струсити (рука чи нога в небо, дві спроби або 5 с) чи одразу аварійна процедура?`,
            ),
            t(
              `Slider stuck or end cells closed: toggles or rear risers, and how long do we hold them down?`,
              `Slider trabado o celdas laterales cerradas: ¿batidores o bandas traseras, y cuánto tiempo los mantenemos abajo?`,
              `Слайдер застрял или закрыты концевые секции: клевантами или задними свободными концами, и сколько держать внизу?`,
              `Слайдер застряг або закриті крайні секції: клевантами чи задніми вільними кінцями, і скільки тримати внизу?`,
            ),
            t(
              `Two canopies out: USPA says land a biplane or side by side with no flare, and cut away a downplane. Do students disconnect the RSL first, and where is it on our rigs? Walk us through all the cases on the ground.`,
              `Dos velas abiertas: USPA dice aterrizar biplano o lado a lado sin flare y liberar un downplane. ¿Los alumnos desconectan antes el RSL y dónde está en nuestros equipos? Repasar todos los casos en tierra.`,
              `Два купола: USPA говорит — биплан и бок о бок садить без flare, при «даунплейне» отцепляться. Студенты сначала отсоединяют RSL, и где он на наших системах? Разобрать все случаи на земле.`,
              `Два куполи: USPA каже — біплан і пліч-о-пліч садити без flare, при «даунплейні» відчіплятися. Студенти спершу від'єднують RSL, і де він на наших системах? Розібрати всі випадки на землі.`,
            ),
          ],
        },
        { type: 'h', text: t(`Canopy and landing`, `Vela y aterrizaje`, `Купол и посадка`, `Купол і посадка`) },
        {
          type: 'questions',
          items: [
            t(
              `Radio: is there a check under canopy?`,
              `Radio: ¿hay prueba bajo la vela?`,
              `Рация: есть ли проверка связи под куполом?`,
              `Рація: чи є перевірка зв’язку під куполом?`,
            ),
            t(
              `If the radio is silent or I can't understand it, what do I do? Is there a signal from the ground?`,
              `Si la radio no suena o no la entiendo, ¿qué hago? ¿Hay alguna señal desde el suelo?`,
              `Если рация молчит или я её не понимаю, что делать? Есть ли сигнал с земли?`,
              `Якщо рація мовчить або я її не розумію, що робити? Чи є сигнал із землі?`,
            ),
            t(
              `On the map: the holding point, pattern altitudes, the usual wind and pattern side, what shows the landing direction, where not to land, alternate fields, power lines and other hazards.`,
              `En el mapa: el punto de espera, las alturas del circuito, el viento y el lado habituales, qué indica la dirección de aterrizaje, dónde no aterrizar, campos alternativos, cables y otros peligros.`,
              `На карте: точка ожидания, высоты схемы, обычный ветер и сторона схемы, что показывает направление посадки, где нельзя садиться, запасные поля, провода и другие опасности.`,
              `На карті: точка очікування, висоти схеми, звичайний вітер і бік схеми, що показує напрямок посадки, де не можна сідати, запасні поля, дроти та інші небезпеки.`,
            ),
            t(
              `Over the holding point: S-turns only, or full circles too? Our ground course said turns up to 180° above 1,000 ft: is that your rule?`,
              `Sobre el punto de espera: ¿solo eses o también círculos completos? En el curso de tierra dijimos giros de hasta 180° por encima de 1,000 ft: ¿es su regla?`,
              `Над точкой ожидания: только «змейка» или можно и полные круги? На наземном курсе говорили: развороты до 180° выше 1 000 футов. Это ваше правило?`,
              `Над точкою очікування: лише «змійка» чи можна й повні кола? На наземному курсі казали: розвороти до 180° вище 1 000 футів. Це ваше правило?`,
            ),
            t(
              `Flare: one-stage or two-stage, and where do we look, the horizon or forward and down at about 45°? How long can our student canopy stay at full brakes before it stalls?`,
              `Flare: ¿en una etapa o en dos, y adónde miramos, al horizonte o adelante y abajo a unos 45°? ¿Cuánto aguanta nuestra vela de alumno a frenos completos antes de entrar en pérdida?`,
              `Flare: в одно движение или в два, и куда смотрим — на горизонт или вперёд и вниз примерно под 45°? Сколько наш студенческий купол летит на полных тормозах до сваливания?`,
              `Flare: в один рух чи у два, і куди дивимося — на горизонт чи вперед і вниз приблизно під 45°? Скільки наш студентський купол летить на повних гальмах до звалювання?`,
            ),
            t(
              `Ground-school test Q27: what altitude stops major turns, 1,000 ft or 300 ft?`,
              `Pregunta 27 del examen: ¿a qué altura se dejan los giros grandes, 1,000 ft o 300 ft?`,
              `Вопрос 27 теста: на какой высоте прекращаем большие развороты, 1 000 или 300 футов?`,
              `Питання 27 тесту: на якій висоті припиняємо великі розвороти, 1 000 чи 300 футів?`,
            ),
          ],
        },
      ],
    },
  ],
};
