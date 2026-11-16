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
          title: t(`Two parachutes: the main and the reserve`, `Dos paracaídas: la principal y la reserva`, `Два парашюта: основной и запасной`, `Два парашути: основний і запасний`),
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
          type: 'split',
          left: [
            {
              type: 'steps',
              items: [
                {
                  title: t(`Look red`, `Mira la roja`, `Смотри на красную`, `Дивись на червону`),
                  sub: t(`Cutaway pad, <b>right chest</b>.`, `Almohadilla de liberación, <b>pecho derecho</b>.`, `Подушка отцепки, <b>справа на груди</b>.`, `Подушка відчеплення, <b>справа на грудях</b>.`),
                },
                {
                  title: t(`Grab red`, `Agarra la roja`, `Возьмись за красную`, `Візьмися за червону`),
                  sub: t(
                    `<b>Right hand</b>, or both hands. <q-check/>`,
                    `<b>Mano derecha</b>, o ambas manos. <q-check/>`,
                    `<b>Правой рукой</b> или обеими. <q-check/>`,
                    `<b>Правою рукою</b> або обома. <q-check/>`,
                  ),
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
                  title: t(`Peel and pull red`, `Despega y tira de la roja`, `Выдерни красную`, `Висмикни червону`),
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
          type: 'rules',
          items: [
            {
              big: '2,500',
              tone: 'red',
              title: t(`Decision altitude`, `Altura de decisión`, `Высота принятия решения`, `Висота ухвалення рішення`),
              points: [
                t(
                  `Students <b>decide and act</b> by 2,500 ft (USPA SIM 4-1)`,
                  `Los alumnos <b>deciden y actúan</b> antes de 2,500 ft (USPA SIM 4-1)`,
                  `Студенты <b>решают и действуют</b> не ниже 2 500 футов (USPA SIM 4-1)`,
                  `Студенти <b>вирішують і діють</b> не нижче 2 500 футів (USPA SIM 4-1)`,
                ),
                t(`<b>Two tries</b> or about <b>5 seconds</b> to fix`, `<b>Dos intentos</b> o unos <b>5 segundos</b> para arreglarlo`, `<b>Две попытки</b> или около <b>5 секунд</b> на исправление`, `<b>Дві спроби</b> або близько <b>5 секунд</b> на виправлення`),
                t(`Then <b>cut away</b>`, `Después, <b>libera</b>`, `Потом <b>отцепка</b>`, `Потім <b>відчеплення</b>`),
              ],
            },
            {
              big: '1,000',
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
            {
              big: '5 s',
              tone: 'red',
              title: t(`Don't delay`, `No esperes`, `Не медли`, `Не зволікай`),
              text: t(
                `In 10 years, nobody in the US who <b>acted within about 5 s</b>, at or above decision altitude, died from a spinning malfunction alone.`,
                `En 10 años, en EE. UU. nadie que <b>actuara en unos 5 s</b>, a la altura de decisión o por encima, murió solo por una malfunción en giro.`,
                `За 10 лет в США никто из тех, кто <b>действовал примерно за 5 с</b> на высоте принятия решения или выше, не погиб только из-за вращающегося отказа.`,
                `За 10 років у США ніхто з тих, хто <b>діяв приблизно за 5 с</b> на висоті ухвалення рішення або вище, не загинув лише через відмову з обертанням.`,
              ),
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
          check: true,
          points: [
            t(
              `After a cutaway, <b>pull the reserve yourself</b>, straight away.`,
              `Después de liberar, <b>abre la reserva tú mismo</b>, enseguida.`,
              `После отцепки <b>раскрывай запасной сам</b> и сразу.`,
              `Після відчеплення <b>розкривай запасний сам</b>, і одразу.`,
            ),
            t(
              `The <b>AAD won't fire</b> until you're falling fast again.`,
              `El <b>AAD no se activa</b> hasta que vuelvas a caer rápido.`,
              `Страхующий прибор (AAD) <b>не сработает</b>, пока ты снова не разгонишься.`,
              `Страхувальний прилад (AAD) <b>не спрацює</b>, поки ти знову не розженешся.`,
            ),
            t(
              `Many dropzones: <b>both hands</b> on the red handle.`,
              `Muchas zonas de salto: <b>las dos manos</b> en la manija roja.`,
              `Во многих школах: <b>обе руки</b> на красной ручке.`,
              `У багатьох школах: <b>обидві руки</b> на червоній ручці.`,
            ),
            t(
              `Others: <b>one hand per handle</b>. Ask which way yours teaches.`,
              `Otras: <b>una mano por manija</b>. Pregunta cómo lo enseñan en la tuya.`,
              `В других: <b>по руке на ручку</b>. Спроси, как учат у вас.`,
              `В інших: <b>по руці на ручку</b>. Запитай, як навчають у вас.`,
            ),
          ],
        },
        {
          type: 'clips',
          items: [
            clip(
              'ep2',
              t(
                `Two hands on the red handle (what USPA's safety director recommends)`,
                `Dos manos en la manija roja (lo que recomienda el director de seguridad de USPA)`,
                `Обе руки на красной ручке (так советует директор по безопасности USPA)`,
                `Обидві руки на червоній ручці (так радить директор з безпеки USPA)`,
              ),
              'Bodyflight Spotlight',
              'nC6D6NHjccI',
              192,
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
                t(`Silver, left chest`, `Plateada, pecho izquierdo`, `Серебряная, слева на груди`, `Срібна, зліва на грудях`),
                t(`On the bottom of the container`, `En la parte de abajo del contenedor`, `Внизу ранца`, `Унизу ранця`),
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
                `The AAD only fires when you are falling fast again, which takes time you don't have. Pull silver yourself, straight away.`,
                `El AAD solo se activa cuando vuelves a caer rápido, y eso lleva un tiempo que no tienes. Tira de la plateada tú mismo, enseguida.`,
                `AAD срабатывает, только когда ты снова разгонишься, а на это нет времени. Кольцо выдёргиваешь сам и сразу.`,
                `AAD спрацьовує, лише коли ти знову розженешся, а на це немає часу. Кільце висмикуєш сам і одразу.`,
              ),
            },
            {
              q: t(
                `Below 1,000 ft the main is bad (not a downplane). What do you do?`,
                `Por debajo de 1,000 ft la principal está mal (no es un downplane). ¿Qué haces?`,
                `Ниже 1 000 футов основной плохой (не даунплейн). Что делаешь?`,
                `Нижче 1 000 футів основний поганий (не «даунплейн»). Що робиш?`,
              ),
              options: [
                t(`Don't cut away: pull the reserve, land with two`, `No liberes: abre la reserva y aterriza con dos`, `Не отцепляюсь: раскрываю запасной, сажусь на двух`, `Не відчіплююся: розкриваю запасний, сідаю на двох`),
                t(`Cut away fast, then reserve`, `Libera rápido y luego abre la reserva`, `Быстро отцепляюсь, потом запасной`, `Швидко відчіплююся, потім запасний`),
                t(`Keep trying to fix the main`, `Sigue intentando arreglar la principal`, `Продолжаю исправлять основной`, `Далі виправляю основний`),
              ],
              answer: 0,
              why: t(
                `Below the hard deck a cutaway leaves too little height for the reserve. Pull silver and land with both. Only a downplane is cut away at any altitude.`,
                `Por debajo del límite mínimo, si liberas queda muy poca altura para la reserva. Tira de la plateada y aterriza con las dos. Solo un downplane se libera a cualquier altura.`,
                `Ниже нижней границы после отцепки запасному не хватит высоты. Выдёргивай кольцо и садись на двух. Только при даунплейне отцепляются на любой высоте.`,
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
            `Most clips are first person, as you'd see it looking up (Sigma's USPA-linked malfunction series, APF "Cutaway!").`,
            `Casi todos los clips son en primera persona, como lo verías al mirar arriba (serie de malfunciones de Sigma que enlaza USPA, "Cutaway!" de APF).`,
            `Почти все клипы — от первого лица, как увидишь купол, подняв голову (серия Sigma про отказы, на которую ссылается USPA, «Cutaway!» от APF).`,
            `Майже всі кліпи — від першої особи, як побачиш купол, піднявши голову (серія Sigma про відмови, на яку посилається USPA, «Cutaway!» від APF).`,
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
                `<b>Two more tries</b>, then emergency procedure. <q-check/>`,
                `<b>Dos intentos más</b>; luego, procedimiento de emergencia. <q-check/>`,
                `<b>Ещё две попытки</b>, потом аварийная процедура. <q-check/>`,
                `<b>Ще дві спроби</b>, потім аварійна процедура. <q-check/>`,
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
              drawing: 'spin',
              tone: 'ep',
              name: t(`Spinning, can't control`, `Gira, no se puede controlar`, `Вращается, не управляется`, `Обертається, не керується`),
              what: t(
                `Fast spin or a turn you can't stop; broken lines.`,
                `Gira rápido o no puedes detener el giro; líneas rotas.`,
                `Быстрое вращение или разворот, который не остановить; порванные стропы.`,
                `Швидке обертання або розворот, який не зупинити; порвані стропи.`,
              ),
              act: t(`<b>Emergency procedure.</b> Don't wait.`, `<b>Procedimiento de emergencia.</b> No esperes.`, `<b>Аварийная процедура.</b> Не жди.`, `<b>Аварійна процедура.</b> Не чекай.`),
            },
          ],
        },
        {
          type: 'cards',
          pill: 'FIX',
          groupTitle: t(`Fixable: two tries, watch the altitude`, `Arreglable: dos intentos, vigila la altura`, `Можно исправить: две попытки, следи за высотой`, `Можна виправити: дві спроби, стеж за висотою`),
          groupSub: t(
            `The canopy is there and mostly square. Two tries to fix it. Still not good, or at the decision altitude: emergency procedure.`,
            `La vela está ahí y es casi cuadrada. Dos intentos para arreglarla. ¿Sigue mal, o llegaste a la altura de decisión? Procedimiento de emergencia.`,
            `Купол есть и почти квадратный. Две попытки исправить. Не получилось или дошёл до высоты принятия решения — аварийная процедура.`,
            `Купол є і майже квадратний. Дві спроби виправити. Не вийшло або дійшов до висоти ухвалення рішення — аварійна процедура.`,
          ),
          items: [
            {
              clip: 'pov_twist',
              tone: 'fix',
              name: t(`Line twists`, `Vueltas en las líneas (twists)`, `Закрутка строп`, `Закрутка строп`),
              what: t(
                `The lines are twisted under the canopy; you may turn slowly.`,
                `Las líneas están enroscadas bajo la vela; puede que gires despacio.`,
                `Стропы закручены под куполом; тебя может медленно вращать.`,
                `Стропи закручені під куполом; тебе може повільно обертати.`,
              ),
              act: t(
                `<b>Grab the rear risers, spread them apart, kick</b> to untwist. Don't unstow the toggles until the twists are out.`,
                `<b>Agarra las bandas traseras, sepáralas y patea</b> para desenroscarte. No sueltes los batidores hasta quitar las vueltas.`,
                `<b>Возьмись за задние свободные концы, разведи их и работай ногами</b>, чтобы раскрутиться. Клеванты не снимай, пока не раскрутишься.`,
                `<b>Візьмися за задні вільні кінці, розведи їх і працюй ногами</b>, щоб розкрутитися. Клеванти не знімай, поки не розкрутишся.`,
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
                `<b>Pump the rear risers</b> a few times. Check altitude. <q-check/>`,
                `<b>Bombea las bandas traseras</b> unas cuantas veces. Mira la altura. <q-check/>`,
                `<b>Подкачай задними свободными концами</b> несколько раз. Проверь высоту. <q-check/>`,
                `<b>Підкачай задніми вільними кінцями</b> кілька разів. Перевір висоту. <q-check/>`,
              ),
            },
            {
              clip: 'm_endcells',
              tone: 'fix',
              name: t(`End cells closed`, `Celdas laterales cerradas`, `Закрыты концевые секции`, `Закриті крайні секції`),
              what: t(`The outer cells stay folded.`, `Las celdas laterales siguen plegadas.`, `Концевые секции не наполнились.`, `Крайні секції не наповнилися.`),
              act: t(
                `<b>Pull both toggles down</b>, hold 2–3 s, let up. <q-check/>`,
                `<b>Baja los dos batidores</b>, mantenlos 2–3 s y suéltalos. <q-check/>`,
                `<b>Обе клеванты вниз</b>, подержи 2–3 с, отпусти. <q-check/>`,
                `<b>Обидві клеванти вниз</b>, потримай 2–3 с, відпусти. <q-check/>`,
              ),
            },
          ],
        },
        {
          type: 'clips',
          items: [
            clip('m_twists', t(`Line twists: risers apart, kick`, `Vueltas en las líneas: separa las bandas y patea`, `Закрутка строп: развести концы, работать ногами`, `Закрутка строп: розвести кінці, працювати ногами`), 'APF', 'MZx3lN-lwok', 65),
            clip('m_tow', t(`Pilot chute in tow, from outside`, `Extractor remolcado, visto desde fuera`, `Вытяжной в следе, вид со стороны`, `Витяжний у сліді, вигляд збоку`), 'APF', 'iBNf-HsD3Ms', 101),
            clip('m_baglock', t(`Bag lock, from outside`, `Bolsa trabada, vista desde fuera`, `Купол в камере, вид со стороны`, `Купол у камері, вигляд збоку`), 'APF', 'iBNf-HsD3Ms', 242),
            clip('m_lineover', t(`Line-over, from outside`, `Line-over, visto desde fuera`, `Перехлёст, вид со стороны`, `Перехльост, вигляд збоку`), 'APF', 'UL87Ceo02L4', 150),
            clip(
              'm_horseshoe',
              t(
                `Horseshoe: part of the main is out, but something still holds it to the container. Emergency procedure.`,
                `Herradura (horseshoe): parte de la principal salió, pero algo la sigue sujetando al contenedor. Procedimiento de emergencia.`,
                `«Подкова»: часть основного вышла, но что-то держит её на ранце. Аварийная процедура.`,
                `«Підкова»: частина основного вийшла, але щось тримає її на ранці. Аварійна процедура.`,
              ),
              'APF',
              'iBNf-HsD3Ms',
              407,
            ),
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
              `It spins and the spin <b>gets faster</b>.`,
              `Gira y el giro <b>se hace más rápido</b>.`,
              `Купол вращается, и вращение <b>ускоряется</b>.`,
              `Купол обертається, і обертання <b>прискорюється</b>.`,
            ),
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'MwIcFPK6DKU', t: 59, credit: 'Skydive Vibes', label: t(`Malfunction types overview`, `Tipos de malfunción: resumen`, `Обзор видов отказов`, `Огляд видів відмов`) },
            { yt: 'MZx3lN-lwok', t: 65, credit: 'APF', label: t(`Line twists: risers apart, kick`, `Vueltas en las líneas: separa las bandas y patea`, `Закрутка строп: развести концы, работать ногами`, `Закрутка строп: розвести кінці, працювати ногами`) },
            { yt: 'lPmK9OJHdXc', t: 107, credit: 'Skydive Vibes', label: t(`Line twists, real footage`, `Vueltas en las líneas, imágenes reales`, `Закрутка строп, реальные съёмки`, `Закрутка строп, реальні зйомки`) },
            { yt: 'iBNf-HsD3Ms', t: 101, credit: 'APF', label: t(`Pilot chute in tow`, `Extractor remolcado (pilot chute in tow)`, `Вытяжной в следе`, `Витяжний парашут у сліді`) },
            { yt: 'iBNf-HsD3Ms', t: 242, credit: 'APF', label: t(`Bag lock`, `Bolsa trabada`, `Купол в камере`, `Купол у камері`) },
            { yt: 'iBNf-HsD3Ms', t: 303, credit: 'APF', label: t(`Streamer`, `Streamer`, `«Колбаса»`, `«Ковбаса»`) },
            { yt: 'UL87Ceo02L4', t: 150, credit: 'APF', label: t(`Line-over`, `Line-over`, `Перехлёст`, `Перехльост`) },
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
                t(`Slider stuck: pump the risers`, `Slider trabado: bombea las bandas`, `Слайдер застрял: подкачать концами`, `Слайдер застряг: підкачати кінцями`),
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
              q: t(`Line twists. What's the order?`, `Vueltas en las líneas. ¿En qué orden?`, `Закрутка строп. В каком порядке?`, `Закрутка строп. У якому порядку?`),
              options: [
                t(
                  `Risers apart and kick; toggles stay stowed until the twists are out`,
                  `Separa las bandas y patea; no sueltes los batidores hasta quitar las vueltas`,
                  `Развести концы и работать ногами; клеванты не снимать, пока не раскрутишься`,
                  `Розвести кінці й працювати ногами; клеванти не знімати, поки не розкрутишся`,
                ),
                t(`Unstow the toggles first, then kick`, `Suelta primero los batidores, luego patea`, `Сначала снять клеванты, потом работать ногами`, `Спершу зняти клеванти, потім працювати ногами`),
                t(`Cut away straight away`, `Libera enseguida`, `Сразу отцепиться`, `Одразу відчепитися`),
              ],
              answer: 0,
              why: t(
                `Releasing the brakes while still twisted can turn the twist into a spin. Untwist first, then unstow.`,
                `Soltar los frenos con las líneas aún enroscadas puede convertir las vueltas en un giro. Primero desenróscate, luego suelta los batidores.`,
                `Если снять клеванты на закрученных стропах, закрутка может перейти во вращение. Сначала раскрутись, потом снимай клеванты.`,
                `Якщо зняти клеванти на закручених стропах, закрутка може перейти в обертання. Спершу розкрутися, потім знімай клеванти.`,
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
                t(`Emergency procedure, don't try to fix it`, `Procedimiento de emergencia, sin intentar arreglarlo`, `Аварийная процедура, не пытаться исправить`, `Аварійна процедура, не намагатися виправити`),
                t(`Pump the rear risers`, `Bombea las bandas traseras`, `Подкачать задними концами`, `Підкачати задніми кінцями`),
                t(`Pull both toggles down for 2–3 s`, `Baja los dos batidores 2–3 s`, `Обе клеванты вниз на 2–3 с`, `Обидві клеванти вниз на 2–3 с`),
              ],
              answer: 0,
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
                t(`Keep pumping the risers`, `Sigue bombeando las bandas`, `Продолжать подкачивать концами`, `Далі підкачувати кінцями`),
                t(`Wait until 1,000 ft`, `Espera hasta 1,000 ft`, `Ждать до 1 000 футов`, `Чекати до 1 000 футів`),
              ],
              answer: 0,
              why: t(
                `Not inflated by 2,500 ft is on the "cut away anyway" list. Decision altitude means you act now.`,
                `No inflada a 2,500 ft está en la lista de "libera de todos modos". Altura de decisión: actúas ya.`,
                `Не наполнился к 2 500 — это из списка «отцепляйся в любом случае». Высота принятия решения: действуешь сейчас.`,
                `Не наповнився до 2 500 — це зі списку «відчіплюйся в будь-якому разі». Висота ухвалення рішення: дієш зараз.`,
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
            `Both can open; the reserve flies like the main. What you do depends on <b>how they sit</b>.`,
            `Pueden abrirse las dos; la reserva vuela como la principal. Lo que haces depende de <b>cómo queden</b>.`,
            `Могут раскрыться оба; запасной летит как основной. Что делать, зависит от того, <b>как они встали</b>.`,
            `Можуть розкритися обидва; запасний летить, як основний. Що робити, залежить від того, <b>як вони стали</b>.`,
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
                `<b>Don't cut away.</b> Steer the front one gently, leave the back one alone, small or no flare, PLF.`,
                `<b>No liberes.</b> Dirige con suavidad la de adelante, no toques la de atrás, flare pequeño o ninguno, PLF.`,
                `<b>Не отцепляйся.</b> Аккуратно управляй передним, задний не трогай, flare слабый или без него, PLF.`,
                `<b>Не відчіплюйся.</b> Обережно керуй переднім, заднього не чіпай, flare слабкий або без нього, PLF.`,
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
                `<b>Don't cut away.</b> Steer the bigger one gently, no flare, PLF. <q-check/>`,
                `<b>No liberes.</b> Dirige con suavidad la más grande, sin flare, PLF. <q-check/>`,
                `<b>Не отцепляйся.</b> Аккуратно управляй тем, что больше, без flare, PLF. <q-check/>`,
                `<b>Не відчіплюйся.</b> Обережно керуй більшим, без flare, PLF. <q-check/>`,
              ),
            },
            {
              clip: 'two_down',
              tone: 'ep',
              name: t(`Downplane`, `Downplane`, `Даунплейн`, `«Даунплейн»`),
              what: t(
                `They pull apart, both pointing down, pulling you between them. Rare.`,
                `Se separan, las dos apuntando hacia abajo, y tiran de ti entre ellas. Es raro.`,
                `Купола разошлись и оба смотрят вниз, тебя растягивает между ними. Редко.`,
                `Куполи розійшлися, і обидва дивляться вниз, тебе розтягує між ними. Рідко.`,
              ),
              act: t(`<b>Cut away the main</b>, at any altitude.`, `<b>Libera la principal</b>, a cualquier altura.`, `<b>Отцепи основной</b> на любой высоте.`, `<b>Відчепи основний</b> на будь-якій висоті.`),
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
              `Ask the instructors to <b>walk through all three</b> cases on the ground.`,
              `Pide a los instructores que <b>repasen los tres</b> casos en tierra.`,
              `Попроси инструкторов <b>разобрать все три</b> случая на земле.`,
              `Попроси інструкторів <b>розібрати всі три</b> випадки на землі.`,
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
                t(
                  `Don't cut away; steer the front one gently, PLF`,
                  `No liberes; dirige con suavidad la de adelante, PLF`,
                  `Не отцепляюсь; аккуратно управляю передним, PLF`,
                  `Не відчіплююся; обережно керую переднім, PLF`,
                ),
                t(`Cut away the main`, `Libera la principal`, `Отцепляю основной`, `Відчіплюю основний`),
                t(`Steer the back one hard`, `Dirige con fuerza la de atrás`, `Активно управляю задним`, `Активно керую заднім`),
              ],
              answer: 0,
              why: t(
                `A biplane flies. Keep both, steer the front one gently, leave the back one alone, small or no flare, PLF.`,
                `Un biplano vuela. Quédate con las dos, dirige con suavidad la de adelante, no toques la de atrás, flare pequeño o ninguno, PLF.`,
                `Биплан летит. Оставь оба, аккуратно управляй передним, задний не трогай, flare слабый или без него, PLF.`,
                `Біплан летить. Залиш обидва, обережно керуй переднім, заднього не чіпай, flare слабкий або без нього, PLF.`,
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
                t(`A downplane: cut away the main at any altitude`, `Un downplane: libera la principal a cualquier altura`, `Даунплейн: отцепить основной на любой высоте`, `«Даунплейн»: відчепити основний на будь-якій висоті`),
                t(`A biplane: steer the front one`, `Un biplano: dirige la de adelante`, `Биплан: управлять передним`, `Біплан: керувати переднім`),
                t(`Side by side: steer the bigger one`, `Lado a lado: dirige la más grande`, `Бок о бок: управлять большим`, `Пліч-о-пліч: керувати більшим`),
              ],
              answer: 0,
              why: t(
                `A downplane falls fast. It's the one exception to the 1,000 ft hard deck: cut away the main whatever the altitude.`,
                `Un downplane cae rápido. Es la única excepción al límite de 1,000 ft: libera la principal a cualquier altura.`,
                `Даунплейн падает быстро. Это единственное исключение из нижней границы 1 000 футов: отцепить основной на любой высоте.`,
                `«Даунплейн» падає швидко. Це єдиний виняток із нижньої межі 1 000 футів: відчепити основний на будь-якій висоті.`,
              ),
            },
            {
              q: t(
                `Two canopies side by side. What does this page say to do?`,
                `Dos velas lado a lado. ¿Qué dice esta página que hagas?`,
                `Два купола бок о бок. Что советует эта страница?`,
                `Два куполи пліч-о-пліч. Що радить ця сторінка?`,
              ),
              options: [
                t(`Don't cut away; steer the bigger one gently, no flare, PLF`, `No liberes; dirige con suavidad la más grande, sin flare, PLF`, `Не отцепляться; аккуратно управлять большим, без flare, PLF`, `Не відчіплюватися; обережно керувати більшим, без flare, PLF`),
                t(`Cut away the main straight away`, `Libera la principal enseguida`, `Сразу отцепить основной`, `Одразу відчепити основний`),
                t(`Full flare with both`, `Flare completo con las dos`, `Полный flare на обоих`, `Повний flare на обох`),
              ],
              answer: 0,
              why: t(
                `Keep both, steer the bigger one gently, no flare, PLF. This one is marked to confirm with your instructors.`,
                `Quédate con las dos, dirige con suavidad la más grande, sin flare, PLF. Este caso está marcado para confirmar con tus instructores.`,
                `Оставь оба, аккуратно управляй большим, без flare, PLF. Этот случай помечен: уточни у инструкторов.`,
                `Залиш обидва, обережно керуй більшим, без flare, PLF. Цей випадок позначено: уточни в інструкторів.`,
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
                `<b>Students</b> are about six times as likely to be injured as licensed jumpers.`,
                `Los <b>alumnos</b> tienen unas seis veces más probabilidad de lesionarse que los paracaidistas con licencia.`,
                `<b>Студенты</b> травмируются примерно в шесть раз чаще, чем прыгуны с лицензией.`,
                `<b>Студенти</b> травмуються приблизно вшестеро частіше, ніж парашутисти з ліцензією.`,
              ),
            },
            {
              big: '41%',
              tone: 'red',
              text: t(
                `of student injuries in a Swedish study happened on the <b>first two jumps</b>.`,
                `de las lesiones de alumnos en un estudio sueco ocurrieron en los <b>dos primeros saltos</b>.`,
                `травм студентов в шведском исследовании случились на <b>первых двух прыжках</b>.`,
                `травм студентів у шведському дослідженні сталися на <b>перших двох стрибках</b>.`,
              ),
            },
            {
              big: '46%',
              tone: 'red',
              text: t(
                `of US deaths in 2001–2020 came from landing problems, many from <a href="#lowturn">low turns</a>.`,
                `de las muertes en EE. UU. entre 2001 y 2020 fueron por problemas de aterrizaje, muchas por <a href="#lowturn">giros bajos</a>.`,
                `смертей в США в 2001–2020 годах — при посадке, многие из-за <a href="#lowturn">низких разворотов</a>.`,
                `смертей у США у 2001–2020 роках — під час посадки, багато через <a href="#lowturn">низькі розвороти</a>.`,
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
          source: { label: 'Westman & Björnstig 2007, Sweden, 257 injuries / 540,000 jumps', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2465315/' },
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
          source: { label: 'Westman & Björnstig 2007, Sweden (via a 2023 review)', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2465315/' },
        },
        {
          type: 'bars',
          title: t(`Inside the leg: where it breaks`, `Dentro de la pierna: dónde se rompe`, `Нога: где ломается`, `Нога: де ламається`),
          items: [
            { label: t(`Ankle`, `Tobillo`, `Лодыжка`, `Щиколотка`), value: 37, hl: true },
            { label: t(`Thigh`, `Muslo`, `Бедро`, `Стегно`), value: 25 },
            { label: t(`Shin`, `Espinilla`, `Голень`, `Гомілка`), value: 23 },
            { label: t(`Knee`, `Rodilla`, `Колено`, `Коліно`), value: 10 },
            { label: t(`Foot`, `Pie`, `Стопа`, `Стопа`), value: 6 },
          ],
          source: { label: 'USPA incident reports, 130 leg injuries (one person can count twice)', href: 'http://www.uspa.org/thats-how-we-roll-ankle-injuries-in-skydiving' },
        },
        {
          type: 'bars',
          title: t(`What went wrong at landing`, `Qué salió mal al aterrizar`, `Что пошло не так при посадке`, `Що пішло не так під час посадки`),
          items: [
            { label: t(`Wrong flare`, `Flare incorrecto`, `Неправильный flare`, `Неправильний flare`), value: 31, hl: true },
            { label: t(`Terrain`, `Terreno`, `Рельеф и препятствия`, `Рельєф і перешкоди`), value: 30 },
            { label: t(`Bad landing position`, `Mala posición al aterrizar`, `Неправильное положение тела`, `Неправильне положення тіла`), value: 19 },
          ],
          source: { label: 'Netherlands 2015–2020, 2.1 M jumps', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/' },
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
              `<b>Finish the flare</b>, feet and knees together.`,
              `<b>Termina el flare</b>, pies y rodillas juntos.`,
              `<b>Доведи flare до конца</b>, ступни и колени вместе.`,
              `<b>Доведи flare до кінця</b>, стопи й коліна разом.`,
            ),
            t(`<b>PLF every time</b>, look at the horizon.`, `<b>PLF siempre</b>, mira al horizonte.`, `<b>PLF всегда</b>, смотри на горизонт.`, `<b>PLF завжди</b>, дивись на горизонт.`),
            t(
              `Canada 2025: all three student landing injuries were a <b>slow or half flare, no PLF</b>.`,
              `Canadá 2025: las tres lesiones de alumnos al aterrizar fueron un <b>flare lento o a medias sin PLF</b>.`,
              `Канада, 2025: все три травмы студентов при посадке — <b>медленный или неполный flare без PLF</b>.`,
              `Канада, 2025: усі три травми студентів під час посадки — <b>повільний або неповний flare без PLF</b>.`,
            ),
          ],
        },
        {
          type: 'h',
          text: t(
            `USPA's 2024 incident report (US, non-fatal)`,
            `Informe de USPA sobre incidentes de 2024 (EE. UU., no mortales)`,
            `Отчёт USPA об инцидентах за 2024 год (США, без смертельных исходов)`,
            `Звіт USPA про інциденти за 2024 рік (США, без смертельних наслідків)`,
          ),
        },
        {
          type: 'stats',
          items: [
            {
              big: '52%',
              tone: 'red',
              text: t(
                `of reported incidents were <b>landings</b>.`,
                `de los incidentes reportados fueron <b>aterrizajes</b>.`,
                `инцидентов пришлось на <b>приземление</b>.`,
                `інцидентів припало на <b>приземлення</b>.`,
              ),
            },
            {
              big: '22%',
              tone: 'red',
              text: t(
                `of landing incidents without a turn were <b>flare errors</b>: early, late or none. No flare at all gave the worst injuries.`,
                `de los incidentes de aterrizaje sin giro fueron <b>errores de flare</b>: temprano, tarde o sin flare. Sin flare, las peores lesiones.`,
                `посадочных инцидентов без разворота — <b>ошибки flare</b>: слишком рано, слишком поздно или без flare вообще. Без flare — самые тяжёлые травмы.`,
                `посадкових інцидентів без розвороту — <b>помилки flare</b>: зарано, запізно або взагалі без flare. Без flare — найважчі травми.`,
              ),
            },
            {
              big: '20%',
              tone: 'red',
              text: t(
                `of those were tandem landings, usually the passenger <b>not lifting their legs</b>. Lift yours too.`,
                `de esos fueron aterrizajes en tándem, por lo general el pasajero <b>no levantó las piernas</b>. Levanta las tuyas también.`,
                `из них — тандемные посадки, обычно пассажир <b>не поднял ноги</b>. Ты тоже поднимай свои.`,
                `з них — тандемні посадки, зазвичай пасажир <b>не підняв ноги</b>. Ти теж піднімай свої.`,
              ),
            },
            {
              big: '7%',
              tone: 'red',
              text: t(
                `were unintended <b>low turns</b>, up from a 4.8% average.`,
                `fueron <b>giros bajos</b> involuntarios, por encima del promedio de 4.8%.`,
                `— непреднамеренные <b>низкие развороты</b>, выше среднего уровня 4,8 %.`,
                `— ненавмисні <b>низькі розвороти</b>, більше за середні 4,8 %.`,
              ),
            },
          ],
        },
        {
          type: 'list',
          items: [
            t(
              `2024, landing incidents without a turn: <b>obstacles 14%</b> (fences, ditches, roads).`,
              `2024, incidentes de aterrizaje sin giro: <b>obstáculos 14%</b> (cercas, zanjas, caminos).`,
              `2024, посадочные инциденты без разворота: <b>препятствия 14 %</b> (заборы, канавы, дороги).`,
              `2024, посадкові інциденти без розвороту: <b>перешкоди 14 %</b> (паркани, канави, дороги).`,
            ),
            t(
              `<b>Turbulence 9%</b>, near buildings and paved areas.`,
              `<b>Turbulencia 9%</b>, cerca de edificios y asfalto.`,
              `<b>Турбулентность 9 %</b> — у зданий и асфальта.`,
              `<b>Турбулентність 9 %</b> — біля будівель та асфальту.`,
            ),
            t(
              `A PLF, even an imperfect one, went with <b>milder injuries</b>.`,
              `Un PLF, aunque sea imperfecto, se asoció a <b>lesiones más leves</b>.`,
              `PLF, даже неидеальный, — <b>более лёгкие травмы</b>.`,
              `PLF, навіть неідеальний, — <b>легші травми</b>.`,
            ),
            t(
              `US: about <b>4,000 cutaways a year</b>, roughly one per 700–800 jumps.`,
              `EE. UU.: unas <b>4,000 liberaciones al año</b>, más o menos una cada 700–800 saltos.`,
              `США: около <b>4 000 отцепок в год</b>, примерно одна на 700–800 прыжков.`,
              `США: близько <b>4 000 відчеплень на рік</b>, приблизно одне на 700–800 стрибків.`,
            ),
            t(
              `Reserves rarely fail: <b>delay is what kills</b>.`,
              `Las reservas casi nunca fallan: <b>lo que mata es la demora</b>.`,
              `Запасные отказывают редко: <b>убивает промедление</b>.`,
              `Запасні відмовляють рідко: <b>убиває зволікання</b>.`,
            ),
          ],
        },
        {
          type: 'h',
          text: t(`The ones to remember, most common first`, `Lo que hay que recordar, de lo más común a lo menos`, `Что запомнить, начиная с самого частого`, `Що запам'ятати, починаючи з найчастішого`),
        },
        {
          type: 'steps',
          items: [
            {
              title: t(`Bad flare, no PLF`, `Flare malo, sin PLF`, `Плохой flare, нет PLF`, `Поганий flare, немає PLF`),
              sub: t(
                `Early, late, half or jerky, then trying to stand. <b>Full flare at ~10 ft</b>, hold, legs up, feet and knees together, <b>PLF every time</b>.`,
                `Temprano, tardío, a medias o brusco, y luego intentar quedar de pie. <b>Flare completo a ~10 ft</b>, mantenlo, piernas arriba, pies y rodillas juntos, <b>PLF siempre</b>.`,
                `Ранний, поздний, неполный или резкий, а потом попытка устоять. <b>Полный flare на ~10 футах</b>, держи, ноги вверх, ступни и колени вместе, <b>PLF всегда</b>.`,
                `Ранній, пізній, неповний або різкий, а потім спроба встояти. <b>Повний flare на ~10 футах</b>, тримай, ноги вгору, стопи й коліна разом, <b>PLF завжди</b>.`,
              ),
            },
            {
              title: t(`Obstacles, landing off`, `Obstáculos, aterrizaje fuera de la zona`, `Препятствия, посадка вне площадки`, `Перешкоди, посадка поза майданчиком`),
              sub: t(
                `Stretching back to the target. <b>Decide high</b>: can't make it? <b>Pick a clear field</b>, land into the wind.`,
                `Estirar el planeo hasta el blanco. <b>Decide arriba</b>: ¿no llegas? <b>Elige un campo despejado</b>, contra el viento.`,
                `Попытка дотянуть до цели. <b>Решай высоко</b>: не долетаешь — <b>выбери чистое поле</b>, садись против ветра.`,
                `Спроба дотягнути до цілі. <b>Вирішуй високо</b>: не долітаєш — <b>обери чисте поле</b>, сідай проти вітру.`,
              ),
            },
            {
              title: t(`Low turns`, `Giros bajos`, `Низкие развороты`, `Низькі розвороти`),
              sub: t(
                `A big turn low makes the canopy dive. In trouble: <b>stop turning</b>, fly straight, flare. <b>Level wing</b> first, then target and wind.`,
                `Un giro grande abajo hace picar la vela. ¿Problemas? <b>Deja de girar</b>, vuela recto, flare. <b>Ala nivelada</b> antes que blanco y viento.`,
                `Большой разворот у земли — купол ныряет. Что-то не так: <b>прекрати разворот</b>, лети прямо, flare. <b>Ровное крыло</b> важнее цели и ветра.`,
                `Великий розворот біля землі — купол пірнає. Щось не так: <b>припини розворот</b>, лети прямо, flare. <b>Рівне крило</b> важливіше за ціль і вітер.`,
              ),
            },
            {
              title: t(`Downwind landing and turbulence`, `Aterrizaje con viento de cola y turbulencia`, `Посадка по ветру и турбулентность`, `Посадка за вітром і турбулентність`),
              sub: t(
                `<b>Land into the wind</b>; keep away from buildings and tree lines that stir the air.`,
                `<b>Aterriza contra el viento</b>; lejos de edificios y filas de árboles que revuelven el aire.`,
                `<b>Садись против ветра</b>; подальше от зданий и лесополос: за ними воздух завихряется.`,
                `<b>Сідай проти вітру</b>; тримайся подалі від будівель і лісосмуг: за ними повітря завихрюється.`,
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
                `Too long fixing a spinning canopy. <b>Two tries</b>, then cut away, straight to the reserve.`,
                `Demasiado tiempo arreglando una vela que gira. <b>Dos intentos</b>, luego libera, directo a la reserva.`,
                `Слишком долго исправлял вращающийся купол. <b>Две попытки</b>, потом отцепка и сразу запасной.`,
                `Надто довго виправляв купол, що обертається. <b>Дві спроби</b>, потім відчеплення й одразу запасний.`,
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
                  `Between 2,500 and 1,000 you <b>can still cut away</b>`,
                  `Entre 2,500 y 1,000 <b>todavía puedes liberar</b>`,
                  `Между 2 500 и 1 000 <b>отцепляться ещё можно</b>`,
                  `Між 2 500 і 1 000 <b>відчіплюватися ще можна</b>`,
                ),
              ],
            },
            {
              title: t(`Spinning, and waiting`, `Girando, y esperando`, `Вращение и ожидание`, `Обертання й очікування`),
              points: [
                t(
                  `Mid-May 2019: <b>4 of the 5</b> US deaths were spinning malfunctions`,
                  `Mayo de 2019: <b>4 de las 5</b> muertes en EE. UU., malfunciones en giro`,
                  `Середина мая 2019: <b>4 из 5</b> смертей в США — вращающиеся отказы`,
                  `Середина травня 2019: <b>4 з 5</b> смертей у США — відмови з обертанням`,
                ),
                t(
                  `USPA's safety director: all <b>avoidable</b> with an early decision`,
                  `Director de seguridad de USPA: todas <b>evitables</b> decidiendo pronto`,
                  `Директор по безопасности USPA: все <b>можно было предотвратить</b> ранним решением`,
                  `Директор з безпеки USPA: усім <b>можна було запобігти</b> раннім рішенням`,
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
              `Багато хто <b>ламав щиколотку</b> на AFF 2–4: після кількох м'яких посадок намагалися встояти на ногах.`,
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
            `Sources: <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA 2024 non-fatal incidents</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">2020 fatality summary</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">Dutch study, 2.1 M jumps</a> · <a href="http://www.uspa.org/thats-how-we-roll-ankle-injuries-in-skydiving">USPA: ankle injuries</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: broke my ankle on AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: late flare</a>`,
            `Fuentes: <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA, incidentes no fatales 2024</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">resumen de accidentes mortales 2020</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">estudio neerlandés, 2.1 M saltos</a> · <a href="http://www.uspa.org/thats-how-we-roll-ankle-injuries-in-skydiving">USPA: lesiones de tobillo</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: tobillo roto en AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: flare tardío</a>`,
            `Источники: <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA, несмертельные инциденты 2024</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">сводка смертельных случаев 2020</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">голландское исследование, 2,1 млн прыжков</a> · <a href="http://www.uspa.org/thats-how-we-roll-ankle-injuries-in-skydiving">USPA: травмы лодыжки</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: сломал лодыжку на AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: поздний flare</a>`,
            `Джерела: <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA, несмертельні інциденти 2024</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">зведення смертельних випадків 2020</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">нідерландське дослідження, 2,1 млн стрибків</a> · <a href="http://www.uspa.org/thats-how-we-roll-ankle-injuries-in-skydiving">USPA: травми щиколотки</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: зламав щиколотку на AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: пізній flare</a>`,
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
                `73–88% of injuries happen at landing, and landings were 52% of USPA's 2024 incident reports.`,
                `El 73–88% de las lesiones ocurren al aterrizar, y los aterrizajes fueron el 52% de los incidentes de USPA en 2024.`,
                `73–88 % травм — при приземлении, а посадки дали 52 % инцидентов в отчёте USPA за 2024 год.`,
                `73–88 % травм — під час приземлення, а посадки становили 52 % інцидентів у звіті USPA за 2024 рік.`,
              ),
            },
            {
              q: t(
                `What is the usual student mistake in landing incidents?`,
                `¿Cuál es el error típico del alumno en los incidentes de aterrizaje?`,
                `Какая типичная ошибка студентов в посадочных инцидентах?`,
                `Яка типова помилка студентів у посадкових інцидентах?`,
              ),
              options: [
                t(`Not lifting the legs`, `No levantar las piernas`, `Не поднять ноги`, `Не підняти ноги`),
                t(`Landing into the wind`, `Aterrizar contra el viento`, `Посадка против ветра`, `Посадка проти вітру`),
                t(`Opening too high`, `Abrir demasiado alto`, `Раскрытие слишком высоко`, `Розкриття надто високо`),
              ],
              answer: 0,
              why: t(
                `USPA's 2024 report: students and tandems were 20% of landing incidents without a turn, usually from not lifting their legs.`,
                `Informe 2024 de USPA: alumnos y tándems fueron el 20% de los incidentes de aterrizaje sin giro, casi siempre por no levantar las piernas.`,
                `Отчёт USPA 2024: студенты и тандемы — 20 % посадочных инцидентов без разворота, обычно потому, что не подняли ноги.`,
                `Звіт USPA 2024: студенти й тандеми — 20 % посадкових інцидентів без розвороту, зазвичай тому, що не підняли ноги.`,
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
                `2,500 ft is when you should have decided; 1,000 ft is the lowest you cut away. A jumper with 1,200+ jumps mixed these up and didn't cut away at 2,100.`,
                `2,500 ft es cuando ya deberías haber decidido; 1,000 ft es lo más bajo para liberar. Un paracaidista con más de 1,200 saltos los confundió y no liberó a 2,100.`,
                `К 2 500 футам решение уже должно быть принято; 1 000 футов — ниже не отцепляются. Парашютист с 1 200+ прыжками это перепутал и не отцепился на 2 100.`,
                `До 2 500 футів рішення вже має бути ухвалене; 1 000 футів — нижче не відчіплюються. Парашутист із 1 200+ стрибками це переплутав і не відчепився на 2 100.`,
              ),
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
                  `Зім'ятий відлік на землі = зім'ятий відлік у дверях.`,
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
                  `Підстав потоку живіт і таз, дивись угору, на літак. Рівно до потоку з м'яким прогином — стабільно; сильний прогин боком — ні.`,
                ),
                t(`Don't grab the instructors: they hold you.`, `No agarres a los instructores: ellos te sujetan a ti.`, `Не хватайся за инструкторов: держат тебя они.`, `Не хапайся за інструкторів: тримають тебе вони.`),
                t(
                  `Lost one instructor: carry on. Lost both: pull now.`,
                  `¿Perdiste a un instructor? Sigue. ¿Perdiste a los dos? Abre ya.`,
                  `Потерял одного инструктора — продолжай. Обоих — раскрывайся сразу.`,
                  `Втратив одного інструктора — продовжуй. Обох — розкривайся одразу.`,
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
                  `Пропустил тренировочное касание, отвёл взгляд на 6 000: инструкторы читают это как «не раскроется».`,
                  `Пропустив тренувальний дотик, відвів погляд на 6 000: інструктори читають це як «не розкриється».`,
                ),
                t(
                  `Thinking nine good pulls mean the tenth is automatic: students still freeze.`,
                  `Creer que nueve buenas aperturas hacen automática la décima: aun así, los alumnos se bloquean.`,
                  `Думать, что после девяти хороших раскрытий десятое будет само: студенты всё равно замирают.`,
                  `Думати, що після дев'яти добрих розкриттів десяте буде само собою: студенти все одно завмирають.`,
                ),
              ],
              good: [
                t(
                  `Practice the arch at home; tap your heels together; look at a point on the horizon.`,
                  `Practica el arco en casa; junta los talones; mira un punto en el horizonte.`,
                  `Тренируй прогиб дома; стукни пятками; смотри на точку на горизонте.`,
                  `Тренуй прогин удома; стукни п'ятами; дивись на точку на горизонті.`,
                ),
                t(
                  `Check altitude every 3 seconds (USPA; some schools teach about 5), after every move and whenever something surprises you.`,
                  `Mira la altura cada 3 segundos (USPA; algunas escuelas enseñan unos 5), después de cada maniobra y cada vez que algo te sorprenda.`,
                  `Проверяй высоту каждые 3 секунды (USPA; некоторые школы учат около 5), после каждого манёвра и при любой неожиданности.`,
                  `Перевіряй висоту кожні 3 секунди (USPA; деякі школи навчають близько 5), після кожного маневру і за будь-якої несподіванки.`,
                ),
                t(
                  `Overloaded or lost? Default to: altitude, arch, pull at 5,500.`,
                  `¿Saturado o perdido? Vuelve a lo básico: altura, arco, abrir a 5,500.`,
                  `Перегружен или потерялся? По умолчанию: высота, прогиб, раскрытие на 5 500.`,
                  `Перевантажений або загубився? За замовчуванням: висота, прогин, розкриття на 5 500.`,
                ),
                t(
                  `Every jump morning: dive flow out loud, handle touches with your eyes closed.`,
                  `Cada mañana de salto: plan de salto en voz alta, toques de manijas con los ojos cerrados.`,
                  `Каждое утро перед прыжками: план прыжка вслух, касания ручки с закрытыми глазами.`,
                  `Щоранку перед стрибками: план стрибка вголос, дотики до ручки із заплющеними очима.`,
                ),
                t(
                  `About 10 minutes of wind tunnel before AFF helps, if you tell the coach you're on AFF.`,
                  `Unos 10 minutos de túnel de viento antes del AFF ayudan, si le dices al entrenador que estás en AFF.`,
                  `Около 10 минут в аэротрубе до AFF помогают, если сказать тренеру, что ты на AFF.`,
                  `Близько 10 хвилин в аеротрубі до AFF допомагають, якщо сказати тренерові, що ти на AFF.`,
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
                  `Mixing up decision altitude (2,500) and hard deck (1,000), and not cutting away when you still could.`,
                  `Confundir la altura de decisión (2,500) con el límite mínimo (1,000), y no liberar cuando todavía podías.`,
                  `Путать высоту принятия решения (2 500) и нижнюю границу (1 000) и не отцепиться, когда ещё можно.`,
                  `Плутати висоту ухвалення рішення (2 500) і нижню межу (1 000) та не відчепитися, коли ще можна.`,
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
                  `Думати, що купол, на якому можна сісти, таким і залишиться: пошкодження, зіткнення або проблема, що наростає, можуть з'явитися пізніше.`,
                ),
              ],
              good: [
                t(
                  `5-second rule: spot it, 5 s to decide, act counting out loud. Clearly getting better? Another 5 s, rarely more than 15 in all.`,
                  `Regla de los 5 segundos: detéctalo, 5 s para decidir, actúa contando en voz alta. ¿Mejora claramente? Otros 5 s, casi nunca más de 15 en total.`,
                  `Правило 5 секунд: заметил проблему — 5 с на решение, действуй, считая вслух. Явно становится лучше? Ещё 5 с, но редко больше 15 в сумме.`,
                  `Правило 5 секунд: помітив проблему — 5 с на рішення, дій, рахуючи вголос. Явно стає краще? Ще 5 с, але рідко більше ніж 15 загалом.`,
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
                  `Not lifting the legs; reaching for the ground with a foot or a hand.`,
                  `No levantar las piernas; buscar el suelo con un pie o una mano.`,
                  `Не поднять ноги; тянуться к земле ногой или рукой.`,
                  `Не підняти ноги; тягнутися до землі ногою чи рукою.`,
                ),
                t(
                  `Trying to stand it up after a few soft landings (the classic AFF 2–4 broken ankle).`,
                  `Intentar quedar de pie después de unos aterrizajes suaves (el clásico tobillo roto de AFF 2–4).`,
                  `Пытаться устоять на ногах после пары мягких посадок (классический перелом лодыжки на AFF 2–4).`,
                  `Намагатися встояти на ногах після кількох м'яких посадок (класичний перелом щиколотки на AFF 2–4).`,
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
                  `Сприймати «5, 4, 3, 2, 1» як п'ять повних секунд гальмування.`,
                ),
                t(
                  `Dropping a toggle near the ground: the worst landing case without a turn in 2024.`,
                  `Soltar un batidor cerca del suelo: el peor caso de aterrizaje sin giro en 2024.`,
                  `Выпустить клеванту у земли: самый тяжёлый посадочный случай без разворота в 2024 году.`,
                  `Випустити клеванту біля землі: найважчий посадковий випадок без розвороту у 2024 році.`,
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
                  `Sloppy pull altitude: category A allows 1,000 ft off, category B 500 ft, category C has no written margin.`,
                  `Altura de apertura descuidada: la categoría A admite 1,000 ft de diferencia, la B 500 ft, la C no tiene margen escrito.`,
                  `Небрежная высота раскрытия: на категории A допуск 1 000 футов, на B — 500, на C письменного допуска нет.`,
                  `Недбала висота розкриття: на категорії A допуск 1 000 футів, на B — 500, на C письмового допуску немає.`,
                ),
                t(`Long gaps between jumps.`, `Mucho tiempo entre saltos.`, `Большие перерывы между прыжками.`, `Великі перерви між стрибками.`),
              ],
              good: [
                t(
                  `A-license: 25 jumps, progression card, check dive, written (75%+) and oral exam.`,
                  `Licencia A: 25 saltos, tarjeta de progresión, salto de verificación (check dive), examen escrito (75%+) y oral.`,
                  `Лицензия A: 25 прыжков, карточка прогресса, контрольный прыжок (check dive), письменный (от 75 %) и устный экзамен.`,
                  `Ліцензія A: 25 стрибків, картка прогресу, контрольний стрибок (check dive), письмовий (від 75 %) та усний іспит.`,
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
                t(`Pull now`, `Abre ya`, `Сразу раскрываюсь`, `Одразу розкриваюся`),
                t(`Carry on with the dive flow`, `Sigue con el plan de salto`, `Продолжаю план прыжка`, `Продовжую план стрибка`),
                t(`Wait for them until 5,500`, `Espéralos hasta 5,500`, `Жду их до 5 500`, `Чекаю на них до 5 500`),
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
                t(`Only at lock-on`, `Solo en el lock on`, `Только на 6 000`, `Лише на 6 000`),
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
                t(
                  `A count for one smooth pull, finished at touchdown`,
                  `Un conteo para un tirón suave, terminado al tocar el suelo`,
                  `Счёт для одного плавного движения, которое заканчивается в момент касания`,
                  `Лік для одного плавного руху, який закінчується в момент дотику`,
                ),
                t(`Pull for five full seconds`, `Tirar durante cinco segundos completos`, `Тянуть ровно пять секунд`, `Тягнути рівно п'ять секунд`),
                t(`Five quick pumps on the toggles`, `Cinco bombeos rápidos de los batidores`, `Пять быстрых качков клевантами`, `П'ять швидких підкачувань клевантами`),
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
        {
          type: 'questions',
          items: [
            t(
              `Aircraft emergency: what do we do, and at which altitudes?`,
              `Emergencia del avión: ¿qué hacemos y a qué alturas?`,
              `Аварийная ситуация с самолётом: что делаем и на каких высотах?`,
              `Аварійна ситуація з літаком: що робимо і на яких висотах?`,
            ),
            t(
              `Exit count: exact words, which instructor first, exit altitude.`,
              `Conteo de salida: palabras exactas, qué instructor primero, altura de salida.`,
              `Отсчёт на выходе: точные слова, на какого инструктора смотрим первым, высота выброски.`,
              `Відлік на виході: точні слова, на якого інструктора дивимося першим, висота викидання.`,
            ),
            t(
              `Confirm: thumb down = arch (hips forward), like in the filmed signals?`,
              `Confirmar: ¿pulgar abajo = arquearse (cadera adelante), como en el video de las señales?`,
              `Уточнить: большой палец вниз = прогиб (таз вперёд), как в видео с сигналами?`,
              `Уточнити: великий палець униз = прогин (таз уперед), як у відео із сигналами?`,
            ),
            t(`Flare: one-stage or two-stage?`, `Flare: ¿en una etapa o en dos?`, `Flare: в одно движение или в два?`, `Flare: в один рух чи у два?`),
            t(`Two canopies side by side: cut away or not?`, `Dos velas lado a lado: ¿liberar o no?`, `Два купола бок о бок: отцепляться или нет?`, `Два куполи пліч-о-пліч: відчіплюватися чи ні?`),
            t(
              `Cutaway: one hand per handle, or both hands on red?`,
              `Liberación: ¿una mano por manija o las dos en la roja?`,
              `Отцеп: по руке на каждую ручку или обе руки на красную?`,
              `Відчеплення: по руці на кожну ручку чи обидві руки на червону?`,
            ),
            t(
              `Nothing out at all (hard pull, pilot chute in tow): cut away first, or reserve only?`,
              `No sale nada (tirón duro, extractor remolcado): ¿liberar primero o solo la reserva?`,
              `Вообще ничего не вышло (тугое вытягивание, вытяжной в следе): сначала отцепка или сразу запасной?`,
              `Взагалі нічого не вийшло (туге витягування, витяжний у сліді): спершу відчеплення чи одразу запасний?`,
            ),
            t(
              `"Clear the lines from right to left toward the shoulder": what was that?`,
              `"Despejar las líneas de derecha a izquierda hacia el hombro": ¿qué era eso?`,
              `«Освободить стропы справа налево к плечу»: что это было?`,
              `«Звільнити стропи справа наліво до плеча»: що це було?`,
            ),
          ],
        },
      ],
    },
  ],
};
