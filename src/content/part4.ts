import type { Clip, L, Part } from './types';

// Part IV: emergencies, two canopies out, how people get hurt, stage-by-stage mistakes, questions.
// Source: docs/legacy-page.html (#ep, #mal, #two, #real, #tips, #questions) plus docs/research.

const t = (en: string, es: string, ru: string): L => ({ en, es, ru });
const clip = (src: string, caption: L, credit: string, yt: string, start: number): Clip => ({
  src,
  caption,
  credit,
  yt,
  t: start,
});

const EP = t(`<b>Emergency procedure.</b>`, `<b>Procedimiento de emergencia.</b>`, `<b>Аварийная процедура.</b>`);

export const part4: Part = {
  id: 'part4',
  roman: 'IV',
  range: t(`Any time`, `En cualquier momento`, `В любой момент`),
  title: t(`When it goes wrong`, `Cuando algo sale mal`, `Если что-то не так`),
  tone: 'red',
  chapters: [
    // ---------------------------------------------------------------- EP
    {
      id: 'ep',
      title: t(
        `Emergency procedure: cutaway and reserve`,
        `Procedimiento de emergencia: liberación y reserva`,
        `Аварийная процедура: отцеп и запасной`,
      ),
      blocks: [
        {
          type: 'p',
          text: t(
            `Two parachutes: the main and the reserve. If the main is not good, you get rid of it (red handle, right chest) and open the reserve (silver handle, left chest). Look at each handle before you grab it.`,
            `Dos paracaídas: la principal y la reserva. Si la principal no está bien, te deshaces de ella (manija roja, pecho derecho) y abres la reserva (manija plateada, pecho izquierdo). Mira cada manija antes de agarrarla.`,
            `Два парашюта: основной и запасной. Если основной плохой, отцепляем его (красная подушка, правая сторона груди) и открываем запасной (серебряное кольцо, левая сторона груди). Перед тем как взять ручку, смотрим на неё.`,
          ),
        },
        {
          type: 'split',
          left: [
            {
              type: 'steps',
              items: [
                {
                  title: t(`Look red`, `Mira la roja`, `Смотрим на красную`),
                  sub: t(`Cutaway pad, right chest.`, `Almohadilla de liberación, pecho derecho.`, `Подушка отцепки, справа на груди.`),
                },
                {
                  title: t(`Grab red`, `Agarra la roja`, `Берём красную`),
                  sub: t(
                    `Right hand, or both hands. <q-check/>`,
                    `Mano derecha, o ambas manos. <q-check/>`,
                    `Правой рукой или обеими. <q-check/>`,
                  ),
                },
                {
                  title: t(`Look silver`, `Mira la plateada`, `Смотрим на серебряное`),
                  sub: t(`Reserve handle, left chest.`, `Manija de la reserva, pecho izquierdo.`, `Кольцо запасного, слева на груди.`),
                },
                {
                  title: t(`Grab silver`, `Agarra la plateada`, `Берём кольцо`),
                  sub: t(`Left hand.`, `Mano izquierda.`, `Левой рукой.`),
                },
                {
                  title: t(`Peel and pull red`, `Despega y tira de la roja`, `Отрываем красную`),
                  sub: t(
                    `To full arm extension, still looking at silver. The main is gone.`,
                    `Hasta extender el brazo del todo, sin dejar de mirar la plateada. La principal se fue.`,
                    `До полного выпрямления руки, глядя на кольцо. Основной отцеплен.`,
                  ),
                },
                {
                  title: t(`Pull silver`, `Tira de la plateada`, `Тянем кольцо`),
                  sub: t(`Full arm extension.`, `Brazo totalmente extendido.`, `До полного выпрямления руки.`),
                },
                {
                  title: t(`Arch, look up, check the reserve`, `Arquea, mira arriba, revisa la reserva`, `Прогиб, смотрим вверх, проверяем запасной`),
                  sub: t(
                    `Same check: there, square, stable, steerable.`,
                    `Mismo chequeo: está, cuadrada, estable, gobernable.`,
                    `Та же проверка: есть, квадратный, стабильный, управляемый.`,
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
                    `Настоящая система, по руке на ручку: посмотрел на красную, взял, на кольцо, взял, красную, кольцо.`,
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
              title: t(`Decision altitude`, `Altura de decisión`, `Высота принятия решения`),
              text: t(
                `Students decide and act by 2,500 ft (USPA SIM 4-1). Two tries or about 5 seconds to fix, then cut away.`,
                `Los alumnos deciden y actúan antes de 2,500 ft (USPA SIM 4-1). Dos intentos o unos 5 segundos para arreglarlo, luego liberas.`,
                `Студенты решают и действуют не ниже 2 500 футов (USPA SIM 4-1). Две попытки или около 5 секунд на исправление, потом отцеп.`,
              ),
            },
            {
              big: '1,000',
              tone: 'red',
              title: t(`Hard deck`, `Límite mínimo`, `Нижняя граница`),
              text: t(
                `Below 1,000 ft don't cut away: pull the reserve and land with two canopies. Exception: a downplane.`,
                `Por debajo de 1,000 ft no liberes: abre la reserva y aterriza con dos velas. Excepción: un downplane.`,
                `Ниже 1 000 футов не отцепляемся: открываем запасной и садимся на двух куполах. Исключение — «даунплейн».`,
              ),
            },
            {
              big: '5 s',
              tone: 'red',
              title: t(`Don't delay`, `No esperes`, `Не тянуть`),
              text: t(
                `In 10 years nobody in the US died of a spinning malfunction alone after acting at or above decision altitude within about 5 s.`,
                `En 10 años nadie en EE. UU. murió solo por una malfunción en giro tras actuar a la altura de decisión o por encima, en unos 5 s.`,
                `За 10 лет в США никто не погиб только от вращающегося отказа, если действовал на высоте решения или выше примерно за 5 с.`,
              ),
            },
          ],
        },
        {
          type: 'callout',
          text: t(
            `This 2,500 ft is about keeping or dropping a bad main. It is not the 2,500 ft point in the landing pattern, where a good canopy decides where to fly. Same number, different question.`,
            `Estos 2,500 ft son para decidir si te quedas con una principal mala o la liberas. No son el punto de 2,500 ft del circuito de aterrizaje, donde con una vela buena decides adónde volar. Mismo número, otra pregunta.`,
            `Эти 2 500 футов — решение, оставить плохой основной или отцепить. Это не точка 2 500 футов в схеме захода, где с хорошим куполом решаешь, куда лететь. Число то же, вопрос другой.`,
          ),
        },
        {
          type: 'callout',
          tone: 'red',
          check: true,
          text: t(
            `After a cutaway, pull the reserve yourself, straight away: the AAD won't fire until you're falling fast again. Many dropzones teach both hands on the red handle; others one hand per handle. Ask which one yours uses.`,
            `Después de liberar, abre la reserva tú mismo, enseguida: el AAD no se activa hasta que vuelvas a caer rápido. Muchas zonas de salto enseñan las dos manos en la manija roja; otras, una mano por manija. Pregunta cuál usa la tuya.`,
            `После отцепа запасной открываешь сам и сразу: AAD не сработает, пока снова не разгонишься. Многие школы учат обе руки на красную ручку, другие — по руке на ручку. Спроси, как у вас.`,
          ),
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
            `Heard on the course, not sure what it was: "two hands forward and clear the lines that run from right to left toward the shoulder".`,
            `Oído en el curso, no sé bien qué era: "dos manos adelante y despejar las líneas que van de derecha a izquierda hacia el hombro".`,
            `Было на курсе, не понял точно: «двумя руками вперёд и очистить линии, которые идут справа налево к плечу».`,
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
                `Отцеп и запасной: по руке на ручку, потом обеими`,
              ),
            },
            {
              yt: 'YD1we-F9-3c',
              t: 0,
              credit: 'APF',
              label: t(`Emergency procedures drill`, `Simulacro de procedimientos de emergencia`, `Отработка аварийной процедуры`),
            },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: t(`Where is the cutaway handle?`, `¿Dónde está la manija de liberación?`, `Где ручка отцепки?`),
              options: [
                t(`Red, right chest`, `Roja, pecho derecho`, `Красная, справа на груди`),
                t(`Silver, left chest`, `Plateada, pecho izquierdo`, `Серебряная, слева на груди`),
                t(`On the bottom of the container`, `En la parte de abajo del contenedor`, `Внизу ранца`),
              ],
              answer: 0,
              why: t(
                `Red, right chest, gets rid of the main. Silver, left chest, opens the reserve.`,
                `La roja, en el pecho derecho, suelta la principal. La plateada, en el pecho izquierdo, abre la reserva.`,
                `Красная справа отцепляет основной. Серебряное кольцо слева открывает запасной.`,
              ),
            },
            {
              q: t(
                `By what altitude must a student decide and act on a bad main?`,
                `¿A qué altura, como mínimo, debe un alumno decidir y actuar con una principal mala?`,
                `До какой высоты студент должен решить и действовать, если основной плохой?`,
              ),
              options: [t(`2,500 ft`, `2,500 ft`, `2 500 футов`), t(`1,000 ft`, `1,000 ft`, `1 000 футов`), t(`4,000 ft`, `4,000 ft`, `4 000 футов`)],
              answer: 0,
              why: t(
                `Decision altitude for students is 2,500 ft (USPA SIM 4-1). 1,000 ft is the hard deck, the lowest point for a cutaway.`,
                `La altura de decisión para alumnos es 2,500 ft (USPA SIM 4-1). 1,000 ft es el límite mínimo, lo más bajo para liberar.`,
                `Высота решения для студентов — 2 500 футов (USPA SIM 4-1). 1 000 футов — нижняя граница, ниже которой не отцепляются.`,
              ),
            },
            {
              q: t(
                `You have just cut away. What opens the reserve?`,
                `Acabas de liberar. ¿Qué abre la reserva?`,
                `Ты только что отцепился. Что откроет запасной?`,
              ),
              options: [
                t(`You, pulling silver right away`, `Tú, tirando de la plateada enseguida`, `Ты сам, сразу дёрнув кольцо`),
                t(`The AAD, a second later`, `El AAD, un segundo después`, `AAD через секунду`),
                t(`Nothing until 1,000 ft`, `Nada hasta 1,000 ft`, `Ничего до 1 000 футов`),
              ],
              answer: 0,
              why: t(
                `The AAD only fires when you are falling fast again, which takes time you don't have. Pull silver yourself, straight away.`,
                `El AAD solo se activa cuando vuelves a caer rápido, y eso lleva un tiempo que no tienes. Tira de la plateada tú mismo, enseguida.`,
                `AAD срабатывает, только когда ты снова разгонишься, а на это нет времени. Кольцо тянешь сам и сразу.`,
              ),
            },
            {
              q: t(
                `Below 1,000 ft the main is bad (not a downplane). What do you do?`,
                `Por debajo de 1,000 ft la principal está mal (no es un downplane). ¿Qué haces?`,
                `Ниже 1 000 футов основной плохой (не даунплейн). Что делаешь?`,
              ),
              options: [
                t(`Don't cut away: pull the reserve, land with two`, `No liberes: abre la reserva y aterriza con dos`, `Не отцепляюсь: открываю запасной, сажусь на двух`),
                t(`Cut away fast, then reserve`, `Libera rápido y luego la reserva`, `Быстро отцеп, потом запасной`),
                t(`Keep trying to fix the main`, `Sigue intentando arreglar la principal`, `Продолжаю чинить основной`),
              ],
              answer: 0,
              why: t(
                `Below the hard deck a cutaway leaves too little height for the reserve. Pull silver and land with both. Only a downplane is cut away at any altitude.`,
                `Por debajo del límite mínimo, liberar deja muy poca altura para la reserva. Tira de la plateada y aterriza con las dos. Solo el downplane se libera a cualquier altura.`,
                `Ниже нижней границы после отцепа запасному не хватит высоты. Тянешь кольцо и садишься на двух. Только даунплейн отцепляют на любой высоте.`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- malfunctions
    {
      id: 'mal',
      title: t(`What can go wrong`, `Qué puede salir mal`, `Какие бывают отказы`),
      blocks: [
        {
          type: 'p',
          text: t(
            `Three families. Spot which one you have, then act. When in doubt, it's an emergency procedure. Most clips are first person, the way you'd see it looking up (USPA-linked malfunction series by Sigma, and APF "Cutaway!").`,
            `Tres familias. Identifica cuál tienes y actúa. Si dudas, es procedimiento de emergencia. La mayoría de los clips son en primera persona, como lo verías mirando hacia arriba (serie de malfunciones de Sigma vinculada a USPA, y "Cutaway!" de APF).`,
            `Три группы. Понял, какая у тебя, и действуй. Сомневаешься — аварийная процедура. Большинство клипов — от первого лица, как ты увидишь, подняв голову (серия отказов Sigma, на которую ссылается USPA, и APF «Cutaway!»).`,
          ),
        },
        {
          type: 'cards',
          pill: 'EP',
          groupTitle: t(`Nothing out, or almost nothing`, `Nada fuera, o casi nada`, `Ничего не вышло или почти ничего`),
          groupSub: t(`High speed: you are still falling fast.`, `Velocidad alta: sigues cayendo rápido.`, `Высокая скорость: ты всё ещё быстро падаешь.`),
          items: [
            {
              drawing: 'none',
              tone: 'ep',
              name: t(`Hard pull / can't find the handle`, `Apertura dura / no encuentras la manija`, `Тугое вытягивание / не найти ручку`),
              what: t(
                `The pilot chute handle won't come out, or your hand can't find it.`,
                `La manija del extractor no sale, o tu mano no la encuentra.`,
                `Ручка вытяжного не выходит, или рука её не находит.`,
              ),
              act: t(
                `<b>Two more tries</b>, then emergency procedure. <q-check/>`,
                `<b>Dos intentos más</b>, luego procedimiento de emergencia. <q-check/>`,
                `<b>Ещё две попытки</b>, потом аварийная процедура. <q-check/>`,
              ),
            },
            {
              clip: 'pov_tow',
              tone: 'ep',
              name: t(`Pilot chute in tow`, `Extractor remolcado (pilot chute in tow)`, `Вытяжной в следе`),
              what: t(
                `The small pilot chute flies behind you but the container stays closed.`,
                `El pequeño extractor vuela detrás de ti pero el contenedor sigue cerrado.`,
                `Маленький вытяжной летит за тобой, но ранец остался закрыт.`,
              ),
              act: t(
                `<b>Emergency procedure.</b> USPA allows two ways: reserve only, or cut away then reserve. Do what your school teaches. <q-check/>`,
                `<b>Procedimiento de emergencia.</b> USPA permite dos formas: solo reserva, o liberar y luego reserva. Haz lo que enseña tu escuela. <q-check/>`,
                `<b>Аварийная процедура.</b> USPA допускает два варианта: сразу запасной или отцеп и запасной. Делай так, как учит твоя школа. <q-check/>`,
              ),
            },
            {
              clip: 'pov_baglock',
              tone: 'ep',
              name: t(`Bag lock`, `Bag lock`, `Купол застрял в камере`),
              what: t(
                `The bag is out, but the canopy is stuck inside it.`,
                `La bolsa salió, pero la vela está atascada dentro.`,
                `Камера вышла, а купол остался внутри неё.`,
              ),
              act: EP,
            },
          ],
        },
        {
          type: 'cards',
          pill: 'EP',
          groupTitle: t(`Out, but not flyable`, `Fuera, pero no se puede volar`, `Вышел, но не летит`),
          groupSub: t(
            `Partial: you lose height fast, the canopy is not a rectangle.`,
            `Parcial: pierdes altura rápido, la vela no es un rectángulo.`,
            `Частичный отказ: быстро теряешь высоту, купол не прямоугольник.`,
          ),
          items: [
            {
              clip: 'm_streamer',
              tone: 'ep',
              name: t(`Streamer`, `Streamer`, `Колбаса`),
              what: t(
                `Canopy out but not inflated, flapping like a flag.`,
                `Vela fuera pero sin inflar, flameando como una bandera.`,
                `Купол вышел, но не наполнился, полощется как флаг.`,
              ),
              act: EP,
            },
            {
              clip: 'pov_lineover',
              tone: 'ep',
              name: t(`Line-over`, `Line-over`, `Перехлёст`),
              what: t(
                `A line goes over the top and splits the canopy in two. "Caught on top".`,
                `Una línea pasa por encima y parte la vela en dos. "Atrapada por arriba".`,
                `Стропа легла поверх и разделила купол на две части. «Зацепился сверху».`,
              ),
              act: t(
                `<b>Emergency procedure. Don't try to fix it.</b>`,
                `<b>Procedimiento de emergencia. No intentes arreglarlo.</b>`,
                `<b>Аварийная процедура. Не пытаться исправить.</b>`,
              ),
            },
            {
              drawing: 'spin',
              tone: 'ep',
              name: t(`Spinning, can't control`, `Gira, no se puede controlar`, `Вращается, не управляется`),
              what: t(
                `Fast spin or a turn you can't stop, broken lines.`,
                `Giro rápido o un giro que no puedes parar, líneas rotas.`,
                `Быстрое вращение или поворот, который не остановить, порванные стропы.`,
              ),
              act: t(`<b>Emergency procedure.</b> Don't wait.`, `<b>Procedimiento de emergencia.</b> No esperes.`, `<b>Аварийная процедура.</b> Не ждать.`),
            },
          ],
        },
        {
          type: 'cards',
          pill: 'FIX',
          groupTitle: t(`Fixable: two tries, watch the altitude`, `Arreglable: dos intentos, vigila la altura`, `Можно исправить: две попытки, следим за высотой`),
          groupSub: t(
            `The canopy is there and mostly square. Two tries to fix it. Still not good, or at the decision altitude: emergency procedure.`,
            `La vela está y es casi cuadrada. Dos intentos para arreglarla. ¿Sigue mal, o llegaste a la altura de decisión? Procedimiento de emergencia.`,
            `Купол есть и почти квадратный. Две попытки исправить. Не получилось или дошли до высоты принятия решения — аварийная процедура.`,
          ),
          items: [
            {
              clip: 'pov_twist',
              tone: 'fix',
              name: t(`Line twists`, `Vueltas en las líneas (twists)`, `Перекрут строп`),
              what: t(
                `Lines twisted under the canopy, you may slowly turn.`,
                `Líneas retorcidas bajo la vela, puede que gires despacio.`,
                `Стропы перекручены под куполом, тебя может медленно крутить.`,
              ),
              act: t(
                `<b>Grab the rear risers, spread them apart, kick</b> to untwist. Don't unstow the toggles until the twists are out.`,
                `<b>Agarra las bandas traseras, sepáralas, patea</b> para desenroscar. No sueltes los batidores hasta que se quiten las vueltas.`,
                `<b>Взять задние свободные концы, развести их и бить ногами</b>, чтобы раскрутиться. Клеванты не снимать, пока не раскрутишься.`,
              ),
            },
            {
              clip: 'm_slider',
              tone: 'fix',
              name: t(`Slider stuck up`, `Slider trabado arriba`, `Слайдер наверху`),
              what: t(
                `The slider stays at the top, canopy only half open.`,
                `El slider se queda arriba, la vela solo medio abierta.`,
                `Слайдер остался вверху, купол раскрыт не полностью.`,
              ),
              act: t(
                `<b>Pump the rear risers</b> a few times. Check altitude. <q-check/>`,
                `<b>Bombea las bandas traseras</b> unas cuantas veces. Mira la altura. <q-check/>`,
                `<b>Покачать задние свободные концы</b> несколько раз. Проверить высоту. <q-check/>`,
              ),
            },
            {
              clip: 'm_endcells',
              tone: 'fix',
              name: t(`End cells closed`, `Celdas de los extremos cerradas`, `Закрыты крайние секции`),
              what: t(`The outer cells stay folded.`, `Las celdas exteriores siguen plegadas.`, `Крайние секции не наполнились.`),
              act: t(
                `<b>Pull both toggles down</b>, hold 2–3 s, let up. <q-check/>`,
                `<b>Baja los dos batidores</b>, mantén 2–3 s, suelta. <q-check/>`,
                `<b>Обе клеванты вниз</b>, держать 2–3 с, отпустить. <q-check/>`,
              ),
            },
          ],
        },
        {
          type: 'clips',
          items: [
            clip('m_twists', t(`Line twists: risers apart, kick`, `Vueltas en las líneas: bandas separadas, patada`, `Перекрут: развести концы, бить ногами`), 'APF', 'MZx3lN-lwok', 65),
            clip('m_tow', t(`Pilot chute in tow, from outside`, `Extractor remolcado, visto desde fuera`, `Вытяжной в следе, вид со стороны`), 'APF', 'iBNf-HsD3Ms', 101),
            clip('m_baglock', t(`Bag lock, from outside`, `Bag lock, visto desde fuera`, `Купол в камере, вид со стороны`), 'APF', 'iBNf-HsD3Ms', 242),
            clip('m_lineover', t(`Line-over, from outside`, `Line-over, visto desde fuera`, `Перехлёст, вид со стороны`), 'APF', 'UL87Ceo02L4', 150),
            clip(
              'm_horseshoe',
              t(
                `Horseshoe: part of the main is out but something still holds it to the container. Emergency procedure.`,
                `Herradura (horseshoe): parte de la principal salió pero algo la sigue sujetando al contenedor. Procedimiento de emergencia.`,
                `«Подкова»: часть основного вышла, но что-то держит её на ранце. Аварийная процедура.`,
              ),
              'APF',
              'iBNf-HsD3Ms',
              407,
            ),
          ],
        },
        { type: 'h', text: t(`Cut away anyway if…`, `Libera de todos modos si…`, `Отцепляйся в любом случае, если…`) },
        {
          type: 'rules',
          items: [
            { text: t(`More than one broken line.`, `Más de una línea rota.`, `Порвано больше одной стропы.`) },
            {
              text: t(
                `A hole the size of your head, or sky through the bottom skin.`,
                `Un agujero del tamaño de tu cabeza, o se ve el cielo a través de la tela inferior.`,
                `Дыра размером с голову или видно небо сквозь нижнюю оболочку.`,
              ),
            },
            {
              text: t(
                `The canopy still isn't inflated at 2,500 ft.`,
                `La vela todavía no está inflada a 2,500 ft.`,
                `К 2 500 футам купол так и не наполнился.`,
              ),
            },
            {
              text: t(
                `It spins and the spin gets faster.`,
                `Gira y el giro se hace más rápido.`,
                `Купол вращается, и вращение ускоряется.`,
              ),
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'MwIcFPK6DKU', t: 59, credit: 'Skydive Vibes', label: t(`Malfunction types overview`, `Resumen de tipos de malfunción`, `Обзор видов отказов`) },
            { yt: 'MZx3lN-lwok', t: 65, credit: 'APF', label: t(`Line twists: risers apart, kick`, `Vueltas en las líneas: bandas separadas, patada`, `Перекрут: развести концы, бить ногами`) },
            { yt: 'lPmK9OJHdXc', t: 107, credit: 'Skydive Vibes', label: t(`Line twists, real footage`, `Vueltas en las líneas, imágenes reales`, `Перекрут, реальное видео`) },
            { yt: 'iBNf-HsD3Ms', t: 101, credit: 'APF', label: t(`Pilot chute in tow`, `Extractor remolcado (pilot chute in tow)`, `Вытяжной в следе`) },
            { yt: 'iBNf-HsD3Ms', t: 242, credit: 'APF', label: t(`Bag lock`, `Bag lock`, `Купол в камере`) },
            { yt: 'iBNf-HsD3Ms', t: 303, credit: 'APF', label: t(`Streamer`, `Streamer`, `Колбаса`) },
            { yt: 'UL87Ceo02L4', t: 150, credit: 'APF', label: t(`Line-over`, `Line-over`, `Перехлёст`) },
            { yt: 'MZx3lN-lwok', t: 125, credit: 'APF', label: t(`End cells closed`, `Celdas de los extremos cerradas`, `Закрыты крайние секции`) },
            { yt: 'MZx3lN-lwok', t: 240, credit: 'APF', label: t(`Slider stuck`, `Slider trabado`, `Слайдер наверху`) },
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
              ),
              options: [
                t(`Pilot chute in tow: emergency procedure`, `Extractor remolcado: procedimiento de emergencia`, `Вытяжной в следе: аварийная процедура`),
                t(`Slider stuck: pump the risers`, `Slider trabado: bombea las bandas`, `Слайдер наверху: покачать концы`),
                t(`Normal opening: wait a few seconds`, `Apertura normal: espera unos segundos`, `Нормальное раскрытие: подождать пару секунд`),
              ],
              answer: 0,
              why: t(
                `Nothing is holding you up, so it's an emergency procedure. Whether you cut away first depends on your school.`,
                `Nada te está frenando, así que es procedimiento de emergencia. Si liberas primero o no depende de tu escuela.`,
                `Тебя ничего не держит, значит аварийная процедура. Отцепляться ли сначала — как учит твоя школа.`,
              ),
            },
            {
              q: t(`Line twists. What's the order?`, `Vueltas en las líneas. ¿En qué orden?`, `Перекрут строп. В каком порядке?`),
              options: [
                t(
                  `Risers apart and kick; toggles stay stowed until the twists are out`,
                  `Bandas separadas y patear; los batidores quedan puestos hasta quitar las vueltas`,
                  `Развести концы и бить ногами; клеванты не снимать, пока не раскрутишься`,
                ),
                t(`Unstow the toggles first, then kick`, `Suelta primero los batidores, luego patea`, `Сначала снять клеванты, потом бить ногами`),
                t(`Cut away straight away`, `Libera enseguida`, `Сразу отцепиться`),
              ],
              answer: 0,
              why: t(
                `Releasing the brakes while still twisted can turn the twist into a spin. Untwist first, then unstow.`,
                `Soltar los frenos con las vueltas puestas puede convertir el twist en un giro. Primero desenrosca, luego suelta.`,
                `Если снять клеванты на перекрученных стропах, перекрут может перейти во вращение. Сначала раскрутиться, потом клеванты.`,
              ),
            },
            {
              q: t(
                `A line goes over the top and splits the canopy in two. What do you do?`,
                `Una línea pasa por encima y parte la vela en dos. ¿Qué haces?`,
                `Стропа легла поверх и разделила купол на два. Что делаешь?`,
              ),
              options: [
                t(`Emergency procedure, don't try to fix it`, `Procedimiento de emergencia, sin intentar arreglarlo`, `Аварийная процедура, не чинить`),
                t(`Pump the rear risers`, `Bombea las bandas traseras`, `Покачать задние концы`),
                t(`Pull both toggles down for 2–3 s`, `Baja los dos batidores 2–3 s`, `Обе клеванты вниз на 2–3 с`),
              ],
              answer: 0,
              why: t(
                `A line-over is in the "out, but not flyable" family: emergency procedure, no fixing.`,
                `El line-over es de la familia "fuera, pero no se puede volar": procedimiento de emergencia, sin arreglos.`,
                `Перехлёст — из группы «вышел, но не летит»: аварийная процедура, без попыток исправить.`,
              ),
            },
            {
              q: t(
                `You're at 2,500 ft and the canopy still isn't inflated. Now what?`,
                `Estás a 2,500 ft y la vela todavía no está inflada. ¿Y ahora?`,
                `2 500 футов, а купол всё ещё не наполнился. Что теперь?`,
              ),
              options: [
                t(`Cut away and pull the reserve`, `Libera y abre la reserva`, `Отцеп и запасной`),
                t(`Keep pumping the risers`, `Sigue bombeando las bandas`, `Продолжать качать концы`),
                t(`Wait until 1,000 ft`, `Espera hasta 1,000 ft`, `Ждать до 1 000 футов`),
              ],
              answer: 0,
              why: t(
                `Not inflated by 2,500 ft is on the "cut away anyway" list. Decision altitude means you act now.`,
                `No inflada a 2,500 ft está en la lista de "libera de todos modos". Altura de decisión: actúas ya.`,
                `Не наполнился к 2 500 — это из списка «отцепляйся в любом случае». Высота решения: действуешь сейчас.`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- two canopies
    {
      id: 'two',
      title: t(`Two canopies out`, `Dos velas abiertas`, `Два купола`),
      blocks: [
        {
          type: 'p',
          text: t(
            `The main and the reserve can both open. The reserve flies just like the main. What you do depends on how they sit.`,
            `La principal y la reserva pueden abrirse las dos. La reserva vuela igual que la principal. Lo que haces depende de cómo queden.`,
            `Могут раскрыться и основной, и запасной. Запасной летит так же, как основной. Что делать, зависит от того, как они расположены.`,
          ),
        },
        {
          type: 'cards',
          items: [
            {
              clip: 'two_bi',
              name: t(`Biplane`, `Biplano`, `Биплан`),
              what: t(`One canopy in front of the other.`, `Una vela delante de la otra.`, `Один купол впереди другого.`),
              act: t(
                `<b>Don't cut away.</b> Steer the front one gently, leave the back one alone, small or no flare, PLF.`,
                `<b>No liberes.</b> Dirige suave la de adelante, deja la de atrás tranquila, flare pequeño o ninguno, PLF.`,
                `<b>Не отцепляться.</b> Аккуратно управлять передним, задний не трогать, flare слабый или без него, PLF.`,
              ),
            },
            {
              clip: 'two_side',
              name: t(`Side by side`, `Lado a lado`, `Бок о бок`),
              what: t(
                `The two canopies fly next to each other.`,
                `Las dos velas vuelan una junto a la otra.`,
                `Купола летят рядом друг с другом.`,
              ),
              act: t(
                `<b>Don't cut away.</b> Steer the bigger one gently, no flare, PLF. <q-check/>`,
                `<b>No liberes.</b> Dirige suave la más grande, sin flare, PLF. <q-check/>`,
                `<b>Не отцепляться.</b> Аккуратно управлять тем, что больше, без flare, PLF. <q-check/>`,
              ),
            },
            {
              clip: 'two_down',
              tone: 'ep',
              name: t(`Downplane`, `Downplane`, `Даунплейн`),
              what: t(
                `They pull apart, both pointing down, tearing you between them. Rare.`,
                `Se separan, las dos apuntando hacia abajo, y te tiran entre ellas. Es raro.`,
                `Купола разошлись и оба смотрят вниз, тебя растягивает между ними. Редко.`,
              ),
              act: t(`<b>Cut away the main</b>, at any altitude.`, `<b>Libera la principal</b>, a cualquier altura.`, `<b>Отцепить основной</b> на любой высоте.`),
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          text: t(
            `Main and reserve tangled together: don't cut away; clear what you can and get ready to PLF. Ask the instructors to walk through all three cases on the ground.`,
            `Principal y reserva enredadas: no liberes; despeja lo que puedas y prepárate para el PLF. Pide a los instructores que repasen los tres casos en tierra.`,
            `Основной и запасной перепутались: не отцепляться; освободить, что получается, и готовиться к PLF. Попроси инструкторов разобрать все три случая на земле.`,
          ),
        },
        {
          type: 'watch',
          items: [
            {
              yt: 'or3MhI4MhAc',
              t: 202,
              credit: 'Skydive Vibes',
              label: t(`Two canopies out: all 5 configurations`, `Dos velas abiertas: las 5 configuraciones`, `Два купола: все 5 вариантов`),
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
              ),
              options: [
                t(
                  `Don't cut away; steer the front one gently, PLF`,
                  `No liberes; dirige suave la de adelante, PLF`,
                  `Не отцепляюсь; аккуратно управляю передним, PLF`,
                ),
                t(`Cut away the main`, `Libera la principal`, `Отцепляю основной`),
                t(`Steer the back one hard`, `Dirige fuerte la de atrás`, `Активно управляю задним`),
              ],
              answer: 0,
              why: t(
                `A biplane flies. Keep both, steer the front one gently, leave the back one alone, small or no flare, PLF.`,
                `Un biplano vuela. Quédate con las dos, dirige suave la de adelante, deja la de atrás, flare pequeño o ninguno, PLF.`,
                `Биплан летит. Оставить оба, аккуратно управлять передним, задний не трогать, flare слабый или без него, PLF.`,
              ),
            },
            {
              q: t(
                `Both canopies point down and pull you between them. What is it?`,
                `Las dos velas apuntan hacia abajo y te tiran entre ellas. ¿Qué es?`,
                `Оба купола смотрят вниз и растягивают тебя между собой. Что это?`,
              ),
              options: [
                t(`A downplane: cut away the main at any altitude`, `Un downplane: libera la principal a cualquier altura`, `Даунплейн: отцепить основной на любой высоте`),
                t(`A biplane: steer the front one`, `Un biplano: dirige la de adelante`, `Биплан: управлять передним`),
                t(`Side by side: steer the bigger one`, `Lado a lado: dirige la más grande`, `Бок о бок: управлять большим`),
              ],
              answer: 0,
              why: t(
                `A downplane falls fast. It's the one exception to the 1,000 ft hard deck: cut away the main whatever the altitude.`,
                `Un downplane cae rápido. Es la única excepción al límite de 1,000 ft: libera la principal a cualquier altura.`,
                `Даунплейн падает быстро. Это единственное исключение из нижней границы 1 000 футов: отцепить основной на любой высоте.`,
              ),
            },
            {
              q: t(
                `Two canopies side by side. What does this page say to do?`,
                `Dos velas lado a lado. ¿Qué dice esta página que hagas?`,
                `Два купола бок о бок. Что советует эта страница?`,
              ),
              options: [
                t(`Don't cut away; steer the bigger one gently, no flare, PLF`, `No liberes; dirige suave la más grande, sin flare, PLF`, `Не отцепляться; аккуратно управлять большим, без flare, PLF`),
                t(`Cut away the main straight away`, `Libera la principal enseguida`, `Сразу отцепить основной`),
                t(`Full flare with both`, `Flare completo con las dos`, `Полный flare на обоих`),
              ],
              answer: 0,
              why: t(
                `Keep both, steer the bigger one gently, no flare, PLF. This one is marked to confirm with your instructors.`,
                `Quédate con las dos, dirige suave la más grande, sin flare, PLF. Este caso está marcado para confirmar con tus instructores.`,
                `Оставить оба, аккуратно управлять большим, без flare, PLF. Этот случай помечен: уточнить у инструкторов.`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- how people get hurt
    {
      id: 'real',
      eyebrow: t(`Real data`, `Datos reales`, `Реальные данные`),
      title: t(`How people actually get hurt`, `Cómo se lastima la gente en realidad`, `Как люди на самом деле травмируются`),
      blocks: [
        {
          type: 'p',
          text: t(
            `Malfunctions get the attention, but most injuries happen in the last 10 feet.`,
            `Las malfunciones se llevan la atención, pero la mayoría de las lesiones ocurren en los últimos 10 pies.`,
            `Все боятся отказов, но большинство травм случается в последних 10 футах.`,
          ),
        },
        {
          type: 'stats',
          items: [
            {
              big: '73–90%',
              tone: 'red',
              text: t(
                `of injuries happen at <b>landing</b> (Danish, Swedish, Dutch studies).`,
                `de las lesiones ocurren en el <b>aterrizaje</b> (estudios daneses, suecos y neerlandeses).`,
                `травм — при <b>приземлении</b> (датские, шведские, голландские исследования).`,
              ),
            },
            {
              big: '~6×',
              tone: 'red',
              text: t(
                `Students are about six times as likely to be injured as licensed jumpers.`,
                `Los alumnos tienen unas seis veces más probabilidad de lesionarse que los paracaidistas con licencia.`,
                `Студенты травмируются примерно в шесть раз чаще, чем прыгуны с лицензией.`,
              ),
            },
            {
              big: '30–60%',
              tone: 'red',
              text: t(`of injuries are to the ankle.`, `de las lesiones son en el tobillo.`, `травм — лодыжка.`),
            },
            {
              big: '46%',
              tone: 'red',
              text: t(
                `of US deaths 2001–2020 were landing problems, many from <a href="#lowturn">low turns</a>.`,
                `de las muertes en EE. UU. 2001–2020 fueron problemas de aterrizaje, muchas por <a href="#lowturn">giros bajos</a>.`,
                `смертей в США в 2001–2020 — при посадке, многие из-за <a href="#lowturn">низких разворотов</a>.`,
              ),
            },
          ],
        },
        {
          type: 'h',
          text: t(
            `USPA's 2024 incident report (US, non-fatal)`,
            `Informe de incidentes 2024 de USPA (EE. UU., no fatales)`,
            `Отчёт USPA об инцидентах за 2024 год (США, без смертей)`,
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
                `всех инцидентов пришлось на <b>приземление</b>.`,
              ),
            },
            {
              big: '22%',
              tone: 'red',
              text: t(
                `of landing incidents without a turn were <b>flare errors</b>: early, late or none. No flare at all gave the worst injuries.`,
                `de los incidentes de aterrizaje sin giro fueron <b>errores de flare</b>: temprano, tarde o ninguno. Sin flare, las peores lesiones.`,
                `инцидентов при посадке без разворота — <b>ошибки flare</b>: рано, поздно или вовсе нет. Без flare — самые тяжёлые травмы.`,
              ),
            },
            {
              big: '20%',
              tone: 'red',
              text: t(
                `of those were students and tandems, usually because they <b>didn't lift their legs</b>.`,
                `de esos fueron alumnos y tándems, casi siempre por <b>no levantar las piernas</b>.`,
                `из них — студенты и тандемы, обычно потому, что <b>не подняли ноги</b>.`,
              ),
            },
            {
              big: '7%',
              tone: 'red',
              text: t(
                `were unintended <b>low turns</b>, up from a 4.8% average.`,
                `fueron <b>giros bajos</b> sin querer, más que el promedio de 4.8%.`,
                `— непреднамеренные <b>низкие развороты</b>, больше среднего 4,8 %.`,
              ),
            },
          ],
        },
        {
          type: 'p',
          muted: true,
          text: t(
            `Also in 2024: obstacles (fences, ditches, roads) 14%, turbulence near buildings and paved areas 9% of landing incidents without a turn. A PLF, even an imperfect one, went with milder injuries. In the US there are about 4,000 cutaways a year, roughly one per 700–800 jumps; reserves rarely fail, delay is what kills.`,
            `También en 2024: obstáculos (cercas, zanjas, caminos) 14% y turbulencia cerca de edificios y asfalto 9% de los incidentes de aterrizaje sin giro. Un PLF, aunque sea imperfecto, se asoció a lesiones más leves. En EE. UU. hay unas 4,000 liberaciones al año, una cada 700–800 saltos; las reservas casi nunca fallan, lo que mata es esperar.`,
            `Ещё в 2024: препятствия (заборы, канавы, дороги) — 14 %, турбулентность у зданий и асфальта — 9 % посадочных инцидентов без разворота. PLF, даже неидеальный, давал более лёгкие травмы. В США около 4 000 отцепок в год, примерно одна на 700–800 прыжков; запасные отказывают редко, убивает промедление.`,
          ),
        },
        {
          type: 'h',
          text: t(`The ones to remember, most common first`, `Las que hay que recordar, de más a menos comunes`, `Что запомнить, от самого частого`),
        },
        {
          type: 'steps',
          items: [
            {
              title: t(`Bad flare, no PLF`, `Mal flare, sin PLF`, `Плохой flare, нет PLF`),
              sub: t(
                `Early, late, half or jerky flare, then trying to stand it up. Flare fully at ~10 ft, hold it, legs up, feet and knees together, PLF every time.`,
                `Flare temprano, tardío, a medias o brusco, y luego intentar aterrizar de pie. Flare completo a ~10 ft, mantenlo, piernas arriba, pies y rodillas juntos, PLF siempre.`,
                `Рано, поздно, не до конца или рывком, а потом попытка устоять на ногах. Полный flare на ~10 футах, держать, ноги поднять, ступни и колени вместе, PLF всегда.`,
              ),
            },
            {
              title: t(`Obstacles, landing off`, `Obstáculos, aterrizaje fuera`, `Препятствия, посадка вне площадки`),
              sub: t(
                `Trying to stretch back to the target. Decide high: if you can't make it, pick a clear field and land there, into the wind.`,
                `Intentar estirar hasta el blanco. Decide arriba: si no llegas, elige un campo despejado y aterriza ahí, contra el viento.`,
                `Попытка дотянуть до цели. Решать высоко: не долетаешь — выбрать чистое поле и садиться туда, против ветра.`,
              ),
            },
            {
              title: t(`Low turns`, `Giros bajos`, `Низкие развороты`),
              sub: t(
                `A big turn near the ground makes the canopy dive. Low and in trouble: stop turning, fly straight, flare. A level wing comes before the target and before the wind.`,
                `Un giro grande cerca del suelo hace picar la vela. ¿Bajo y en problemas? Deja de girar, vuela recto, haz el flare. El ala nivelada va antes que el blanco y que el viento.`,
                `Большой разворот у земли — купол ныряет. Низко и что-то не так: перестать крутить, лететь прямо, flare. Ровное крыло важнее цели и ветра.`,
              ),
            },
            {
              title: t(`Downwind landing and turbulence`, `Aterrizaje con viento en cola y turbulencia`, `Посадка по ветру и турбулентность`),
              sub: t(
                `Land into the wind; stay away from buildings and tree lines that stir the air.`,
                `Aterriza contra el viento; mantente lejos de edificios y filas de árboles que revuelven el aire.`,
                `Садиться против ветра; держаться дальше от зданий и лесополос, за ними воздух бурлит.`,
              ),
            },
            {
              title: t(`Canopy collisions`, `Choques entre velas`, `Столкновения куполов`),
              sub: t(
                `Look before every turn, fly the same pattern as everyone.`,
                `Mira antes de cada giro, vuela el mismo circuito que todos.`,
                `Смотреть перед каждым поворотом, летать по общей схеме.`,
              ),
            },
            {
              title: t(
                `Late or wrong emergency procedure`,
                `Procedimiento de emergencia tardío o equivocado`,
                `Поздняя или неправильная аварийная процедура`,
              ),
              sub: t(
                `Too long fixing a spinning canopy. Two tries, then cut away, straight to the reserve.`,
                `Demasiado tiempo arreglando una vela que gira. Dos intentos, luego liberas, directo a la reserva.`,
                `Слишком долго пытались исправить вращающийся купол. Две попытки, потом отцеп и сразу запасной.`,
              ),
            },
            {
              title: t(`No pull or low pull`, `Sin apertura o apertura baja`, `Нет раскрытия или раскрытие низко`),
              sub: t(
                `Lost track of altitude. Altimeter first, always. The automatic opener (AAD) is a backup, not a plan.`,
                `Perdiste la noción de la altura. Altímetro primero, siempre. El abridor automático (AAD) es un respaldo, no un plan.`,
                `Потеряли высоту. Высотомер прежде всего. Страхующий прибор (AAD) — запасной вариант, а не план.`,
              ),
            },
          ],
        },
        { type: 'h', text: t(`Three real cases`, `Tres casos reales`, `Три реальных случая`) },
        {
          type: 'rules',
          items: [
            {
              title: t(`Distracted at 6,000 ft`, `Distraída a 6,000 ft`, `Отвлеклась на 6 000 футах`),
              text: t(
                `A Category F student fixed her goggles, stared at the altimeter, went head-down and threw the pilot chute weakly with one leg out of place. It wrapped her leg, she froze, and the AAD fired the reserve at about 700 ft.`,
                `Una alumna de Categoría F se acomodó las gafas, se quedó mirando el altímetro, se fue cabeza abajo y lanzó el extractor sin fuerza con una pierna fuera de lugar. Se le enredó en la pierna, se bloqueó y el AAD abrió la reserva a unos 700 ft.`,
                `Студентка категории F поправляла очки, уставилась на высотомер, ушла головой вниз и слабо выбросила вытяжной, одна нога была не на месте. Вытяжной обмотал ногу, она замерла, и запасной открыл AAD примерно на 700 футах.`,
              ),
            },
            {
              title: t(`Mixed up the two altitudes`, `Confundió las dos alturas`, `Перепутал две высоты`),
              text: t(
                `A jumper with over 1,200 jumps didn't cut away at 2,100 ft because he thought it was already too low. The hard deck is 1,000 ft: between 2,500 and 1,000 you can still cut away.`,
                `Un paracaidista con más de 1,200 saltos no liberó a 2,100 ft porque creyó que ya era demasiado bajo. El límite mínimo es 1,000 ft: entre 2,500 y 1,000 todavía puedes liberar.`,
                `Парашютист с 1 200+ прыжками не отцепился на 2 100 футах: решил, что уже слишком низко. Нижняя граница — 1 000 футов: между 2 500 и 1 000 отцепляться ещё можно.`,
              ),
            },
            {
              title: t(`Spinning, and waiting`, `Girando, y esperando`, `Вращение и ожидание`),
              text: t(
                `By mid-May 2019, 4 of the 5 US deaths involved spinning malfunctions. USPA's safety director judged all of them avoidable with an early decision. Spins disorient you and make the handles harder to pull.`,
                `A mediados de mayo de 2019, 4 de las 5 muertes en EE. UU. tenían que ver con malfunciones en giro. El director de seguridad de USPA consideró que todas se podían evitar decidiendo pronto. El giro desorienta y hace más difícil tirar de las manijas.`,
                `К середине мая 2019 года 4 из 5 смертей в США были связаны с вращающимися отказами. Директор по безопасности USPA считал, что всех можно было избежать ранним решением. Вращение дезориентирует, и ручки тянуть тяжелее.`,
              ),
            },
          ],
        },
        {
          type: 'callout',
          title: t(`What students say on Reddit`, `Lo que dicen los alumnos en Reddit`, `Что пишут студенты на Reddit`),
          text: t(
            `Many broke an ankle on AFF levels 2–4 after a few soft landings made them try to stand one up. Look at the horizon, not the ground. Practise flares up high. Experienced jumpers still PLF on no-wind days. One late flare while fixated on the target ended in a rod in the shin and 14 months of rehab.`,
            `Muchos se rompieron un tobillo en los niveles 2–4 de AFF después de que unos aterrizajes suaves los animaran a intentar quedar de pie. Mira el horizonte, no el suelo. Practica flares arriba. Los paracaidistas con experiencia siguen haciendo PLF los días sin viento. Un flare tardío por mirar fijo el blanco terminó con un clavo en la tibia y 14 meses de rehabilitación.`,
            `Многие сломали лодыжку на 2–4 уровне AFF: после пары мягких посадок пытались приземлиться стоя. Смотреть на горизонт, а не в землю. Тренировать flare наверху. Опытные прыгуны делают PLF даже в безветрие. Один поздний flare из-за фиксации на цели закончился штифтом в голени и 14 месяцами реабилитации.`,
          ),
        },
        {
          type: 'p',
          muted: true,
          text: t(
            `Sources: <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA 2024 non-fatal incidents</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">2020 fatality summary</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">Dutch study, 2.1 M jumps</a> · <a href="http://www.uspa.org/thats-how-we-roll-ankle-injuries-in-skydiving">USPA: ankle injuries</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: broke my ankle on AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: late flare</a>`,
            `Fuentes: <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA, incidentes no fatales 2024</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">resumen de muertes 2020</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">estudio neerlandés, 2.1 M saltos</a> · <a href="http://www.uspa.org/thats-how-we-roll-ankle-injuries-in-skydiving">USPA: lesiones de tobillo</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: tobillo roto en AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: flare tardío</a>`,
            `Источники: <a href="http://parachutist.com/The-2024-Non-Fatal-Incident-Summary-Part-One-Landing-Incidents">USPA, несмертельные инциденты 2024</a> · <a href="https://parachutist.com/another-record-lowthe-2020-fatality-summary">сводка смертей 2020</a> · <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10900578/">голландское исследование, 2,1 млн прыжков</a> · <a href="http://www.uspa.org/thats-how-we-roll-ankle-injuries-in-skydiving">USPA: травмы лодыжки</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/6/artmid/2830/articleid/7485">Planche Wallace 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/9/ArtMID/2830/ArticleID/7486">Bell 2019</a> · <a href="https://parachutist.com/p/PgrID/2839/PageID/160/ArtMID/2834/ArticleID/9488">Bell 2024</a> · <a href="https://www.uspa.org/about-uspa/uspa-news/rating-corner-emergency-procedure-proficiency">USPA Rating Corner 2023</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/uavxqs/broke_my_ankle_on_aff_3_any_advice/">r/SkyDiving: сломал лодыжку на AFF 3</a> · <a href="https://www.reddit.com/r/SkyDiving/comments/1ixg4yn/late_flare/">r/SkyDiving: поздний flare</a>`,
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
              ),
              options: [
                t(`At landing`, `En el aterrizaje`, `При приземлении`),
                t(`On exit`, `En la salida`, `На отделении`),
                t(`During the opening`, `Durante la apertura`, `При раскрытии`),
              ],
              answer: 0,
              why: t(
                `73–90% of injuries happen at landing, and landings were 52% of USPA's 2024 incident reports.`,
                `El 73–90% de las lesiones ocurren al aterrizar, y los aterrizajes fueron el 52% de los incidentes de USPA en 2024.`,
                `73–90 % травм — при приземлении, а посадки дали 52 % инцидентов в отчёте USPA за 2024 год.`,
              ),
            },
            {
              q: t(
                `What is the usual student mistake in landing incidents?`,
                `¿Cuál es el error típico del alumno en los incidentes de aterrizaje?`,
                `Какая типичная ошибка студента при посадочных инцидентах?`,
              ),
              options: [
                t(`Not lifting the legs`, `No levantar las piernas`, `Не поднял ноги`),
                t(`Landing into the wind`, `Aterrizar contra el viento`, `Посадка против ветра`),
                t(`Opening too high`, `Abrir demasiado alto`, `Раскрытие слишком высоко`),
              ],
              answer: 0,
              why: t(
                `USPA's 2024 report: students and tandems were 20% of landing incidents without a turn, usually from not lifting their legs.`,
                `Informe 2024 de USPA: alumnos y tándems fueron el 20% de los incidentes de aterrizaje sin giro, casi siempre por no levantar las piernas.`,
                `Отчёт USPA 2024: студенты и тандемы — 20 % посадочных инцидентов без разворота, обычно потому, что не подняли ноги.`,
              ),
            },
            {
              q: t(
                `Your main is bad at 2,100 ft. Can you still cut away?`,
                `Tu principal está mal a 2,100 ft. ¿Todavía puedes liberar?`,
                `На 2 100 футах основной плохой. Ещё можно отцепиться?`,
              ),
              options: [
                t(`Yes, the hard deck is 1,000 ft`, `Sí, el límite mínimo es 1,000 ft`, `Да, нижняя граница — 1 000 футов`),
                t(`No, it's below 2,500 ft`, `No, ya estás por debajo de 2,500 ft`, `Нет, уже ниже 2 500 футов`),
                t(`Only if the AAD has fired`, `Solo si el AAD se activó`, `Только если сработал AAD`),
              ],
              answer: 0,
              why: t(
                `2,500 ft is when you should have decided; 1,000 ft is the lowest you cut away. A jumper with 1,200+ jumps mixed these up and didn't cut away at 2,100.`,
                `2,500 ft es cuando ya deberías haber decidido; 1,000 ft es lo más bajo para liberar. Un paracaidista con más de 1,200 saltos los confundió y no liberó a 2,100.`,
                `2 500 футов — когда уже надо было решить; 1 000 футов — ниже не отцепляются. Парашютист с 1 200+ прыжками это перепутал и не отцепился на 2 100.`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- tips
    {
      id: 'tips',
      eyebrow: t(`From coaches, USPA and Reddit`, `De coaches, USPA y Reddit`, `От тренеров, USPA и Reddit`),
      title: t(
        `Common mistakes and tips, stage by stage`,
        `Errores comunes y consejos, etapa por etapa`,
        `Частые ошибки и советы по этапам`,
      ),
      blocks: [
        {
          type: 'p',
          text: t(
            `Read the one for the stage you're on before each jump day.`,
            `Lee la de la etapa en la que estás antes de cada día de saltos.`,
            `Перед каждым прыжковым днём перечитай этап, на котором ты сейчас.`,
          ),
        },
        {
          type: 'tips',
          items: [
            {
              title: t(`Plane and exit`, `Avión y salida`, `Самолёт и отделение`),
              bad: [
                t(
                  `Unbuckling early, taking the helmet off, acting without a command.`,
                  `Desabrocharse antes de tiempo, quitarse el casco, actuar sin una orden.`,
                  `Рано отстегнулся, снял шлем, действовал без команды.`,
                ),
                t(
                  `Rig or handles catching on seats and the door frame.`,
                  `Equipo o manijas que se enganchan en asientos y en el marco de la puerta.`,
                  `Ранец или ручки цепляются за сиденья и косяк двери.`,
                ),
                t(`Looking down on exit: you lose stability.`, `Mirar hacia abajo al salir: pierdes estabilidad.`, `Смотреть вниз на отделении: теряешь стабильность.`),
                t(
                  `Hips sideways to the wind: a hard arch doesn't save a crooked exit.`,
                  `Cadera de lado al viento: un arco fuerte no salva una salida torcida.`,
                  `Таз боком к потоку: сильный прогиб не спасает кривое отделение.`,
                ),
                t(
                  `Rushed count on the ground = rushed count in the door.`,
                  `Conteo apurado en tierra = conteo apurado en la puerta.`,
                  `Скомканный счёт на земле = скомканный счёт в двери.`,
                ),
              ],
              good: [
                t(
                  `Ask for a pin check before the door; cover your handles with a hand on the way.`,
                  `Pide un pin check antes de la puerta; cubre tus manijas con una mano al moverte.`,
                  `Попроси проверить пины перед дверью; по пути прикрывай ручки рукой.`,
                ),
                t(
                  `On the ride up: slow breathing and run the dive flow in your head.`,
                  `En la subida: respira lento y repasa el plan de salto en la cabeza.`,
                  `В наборе: медленное дыхание и прогон плана прыжка в голове.`,
                ),
                t(
                  `Present belly and hips to the wind, look up at the plane. Square to the wind with a soft arch is stable; a hard arch sideways is not.`,
                  `Presenta panza y cadera al viento, mira hacia arriba al avión. De frente al viento con un arco suave eres estable; con un arco fuerte de lado, no.`,
                  `Подставь живот и таз потоку, смотри вверх, на самолёт. Ровно к потоку с мягким прогибом — стабильно; сильный прогиб боком — нет.`,
                ),
                t(`Don't grab the instructors: they hold you.`, `No agarres a los instructores: ellos te sujetan a ti.`, `Не хватайся за инструкторов: держат они.`),
                t(
                  `Lost one instructor: carry on. Lost both: pull now.`,
                  `¿Perdiste a un instructor? Sigue. ¿Perdiste a los dos? Abre ya.`,
                  `Потерял одного инструктора: продолжай. Обоих: раскрывайся сразу.`,
                ),
              ],
            },
            {
              title: t(`Freefall`, `Caída libre`, `Свободное падение`),
              bad: [
                t(
                  `Legs bent too much, or drifting up and uneven: you start to spin.`,
                  `Piernas demasiado dobladas, o que suben y quedan desparejas: empiezas a girar.`,
                  `Ноги слишком согнуты или «уплывают» вверх и неровно: начинает крутить.`,
                ),
                t(`Hips back, knees dropping: the arch is gone.`, `Cadera atrás, rodillas cayendo: se perdió el arco.`, `Таз назад, колени опускаются: прогиба нет.`),
                t(
                  `Stiff and scared: can't learn, can't be released.`,
                  `Rígido y asustado: no puedes aprender ni te pueden soltar.`,
                  `Зажат и боишься: не учишься, и отпустить тебя нельзя.`,
                ),
                t(
                  `Skipping a practice touch, looking away at lock-on: instructors read it as "won't pull".`,
                  `Saltarte un toque de práctica o mirar a otro lado en el lock on: los instructores lo leen como "no va a abrir".`,
                  `Пропустил касание, отвёл взгляд на 6 000: инструктор читает это как «не раскроется».`,
                ),
                t(
                  `Thinking nine good pulls mean the tenth is automatic: students still freeze.`,
                  `Creer que nueve buenas aperturas hacen automática la décima: los alumnos igual se bloquean.`,
                  `Думать, что после девяти хороших раскрытий десятое будет само: студенты всё равно замирают.`,
                ),
              ],
              good: [
                t(
                  `Practise the arch at home; tap your heels together; look at a point on the horizon.`,
                  `Practica el arco en casa; junta los talones; mira un punto en el horizonte.`,
                  `Тренируй прогиб дома; стукни пятками; смотри на точку на горизонте.`,
                ),
                t(
                  `Check altitude every 3 seconds (USPA; some schools teach about 5), after every move and whenever something surprises you.`,
                  `Mira la altura cada 3 segundos (USPA; algunas escuelas enseñan unos 5), después de cada maniobra y cada vez que algo te sorprenda.`,
                  `Проверяй высоту каждые 3 секунды (USPA; некоторые школы учат около 5), после каждого манёвра и при любой неожиданности.`,
                ),
                t(
                  `Overloaded or lost? Default to: altitude, arch, pull at 5,500.`,
                  `¿Saturado o perdido? Vuelve a lo básico: altura, arco, abrir a 5,500.`,
                  `Перегружен или потерялся? По умолчанию: высота, прогиб, раскрытие на 5 500.`,
                ),
                t(
                  `Every jump morning: dive flow out loud, handle touches with eyes closed.`,
                  `Cada mañana de salto: plan de salto en voz alta, toques de manijas con los ojos cerrados.`,
                  `Каждое утро прыжка: план вслух, касания ручки с закрытыми глазами.`,
                ),
                t(
                  `About 10 minutes of wind tunnel before AFF helps, if you tell the coach you're on AFF.`,
                  `Unos 10 minutos de túnel de viento antes del AFF ayudan, si le dices al coach que estás en AFF.`,
                  `Около 10 минут в аэротрубе до AFF помогают, если сказать тренеру, что ты на AFF.`,
                ),
                t(
                  `Level 1 has two goals: arch and pull on time. Everything else is a bonus.`,
                  `El Nivel 1 tiene dos objetivos: arquear y abrir a tiempo. Todo lo demás es extra.`,
                  `На уровне 1 две цели: прогнуться и раскрыться вовремя. Остальное — бонус.`,
                ),
              ],
            },
            {
              title: t(`Deployment and canopy check`, `Apertura y revisión de la vela`, `Раскрытие и проверка купола`),
              bad: [
                t(
                  `Weak throw of the pilot chute; going head-low while staring at the altimeter.`,
                  `Lanzamiento débil del extractor; quedar cabeza abajo mientras miras fijo el altímetro.`,
                  `Слабый выброс вытяжного; уход головой вниз, пока смотришь на высотомер.`,
                ),
                t(
                  `Looking over the shoulder too early, which turns you.`,
                  `Mirar por encima del hombro demasiado pronto, lo que te hace girar.`,
                  `Слишком рано смотришь через плечо, и тебя разворачивает.`,
                ),
                t(
                  `Releasing the brakes while still in line twists: twist becomes a spin.`,
                  `Soltar los frenos con vueltas en las líneas todavía: el twist se convierte en giro.`,
                  `Снял клеванты, пока стропы ещё перекручены: перекрут переходит во вращение.`,
                ),
                t(
                  `Skipping the turns and practice flare, and finding out at the ground the canopy doesn't steer.`,
                  `Saltarte los giros y el flare de práctica, y descubrir en el suelo que la vela no responde.`,
                  `Пропустил повороты и пробный flare и узнал у земли, что купол не управляется.`,
                ),
              ],
              good: [
                t(
                  `Can't find the handle: sweep along the bottom of the container, then down the side. Two tries or 5 s, then EP.`,
                  `¿No encuentras la manija? Barre a lo largo de la parte de abajo del contenedor y luego por el costado. Dos intentos o 5 s, luego procedimiento de emergencia.`,
                  `Не найти ручку: проведи по низу ранца, потом вниз по боку. Две попытки или 5 с, потом аварийная процедура.`,
                ),
                t(
                  `Hard pull: brace your elbow against the container; second try with both hands.`,
                  `Apertura dura: apoya el codo contra el contenedor; segundo intento con las dos manos.`,
                  `Тугое вытягивание: упрись локтем в ранец, вторая попытка двумя руками.`,
                ),
                t(
                  `Free hand over your head while you pull, body symmetrical.`,
                  `Mano libre sobre la cabeza mientras abres, cuerpo simétrico.`,
                  `Свободная рука над головой, пока тянешь, тело симметрично.`,
                ),
                t(
                  `Pilot chute hesitating behind you: twist at the waist and look over your shoulder. That's the one time looking back is right.`,
                  `¿El extractor se queda flotando detrás de ti? Gira la cintura y mira por encima del hombro. Es el único momento en que mirar atrás está bien.`,
                  `Вытяжной «завис» за спиной: повернись в поясе и посмотри через плечо. Это единственный момент, когда так смотреть правильно.`,
                ),
                t(
                  `Full canopy check: there, square, stable, steerable; full flare; turns of 90° each way.`,
                  `Revisión completa de la vela: está, cuadrada, estable, gobernable; flare completo; giros de 90° a cada lado.`,
                  `Полная проверка: есть, квадратный, стабильный, управляемый; полный flare; повороты на 90° в обе стороны.`,
                ),
                t(
                  `Turning on its own after the twists are out? Check that a toggle hasn't come unstowed.`,
                  `¿Gira solo después de quitar las vueltas? Mira si se soltó un batidor.`,
                  `Купол сам поворачивает после раскрутки? Проверь, не снялась ли одна клеванта.`,
                ),
              ],
            },
            {
              title: t(`Emergencies`, `Emergencias`, `Отказы`),
              bad: [
                t(`Trying to fix a spinning canopy for too long.`, `Intentar arreglar demasiado tiempo una vela que gira.`, `Слишком долго пытаешься исправить вращающийся купол.`),
                t(
                  `Mixing up decision altitude (2,500) and hard deck (1,000), and not cutting away when you still could.`,
                  `Confundir la altura de decisión (2,500) con el límite mínimo (1,000), y no liberar cuando todavía podías.`,
                  `Путаешь высоту решения (2 500) и нижнюю границу (1 000) и не отцепляешься, когда ещё можно.`,
                ),
                t(`Waiting for the AAD after a cutaway.`, `Esperar al AAD después de liberar.`, `Ждёшь AAD после отцепа.`),
                t(
                  `One-handed cutaway failing under spin forces.`,
                  `Liberación con una mano que falla por las fuerzas del giro.`,
                  `Отцеп одной рукой не проходит при перегрузке во вращении.`,
                ),
                t(
                  `Thinking a landable canopy stays landable: damage, a collision or a growing problem can come later.`,
                  `Creer que una vela aterrizable lo seguirá siendo: un daño, un choque o un problema que crece pueden llegar después.`,
                  `Думать, что купол, на котором можно сесть, таким и останется: повреждение, столкновение или растущая проблема могут прийти позже.`,
                ),
              ],
              good: [
                t(
                  `5-second rule: spot it, 5 s to decide, act counting out loud. Clearly getting better? Another 5 s, rarely more than 15 in all.`,
                  `Regla de los 5 segundos: detéctalo, 5 s para decidir, actúa contando en voz alta. ¿Mejora claramente? Otros 5 s, casi nunca más de 15 en total.`,
                  `Правило 5 секунд: заметил, 5 с на решение, действуй, считая вслух. Явно становится лучше? Ещё 5 с, но редко больше 15 в сумме.`,
                ),
                t(
                  `Hanging-harness drill all the way to landing, 3 times per session, saying each step out loud. Ask for a second problem under the reserve and called-out hazards ("power lines!").`,
                  `Simulacro en el arnés colgante hasta el aterrizaje, 3 veces por sesión, diciendo cada paso en voz alta. Pide un segundo problema bajo la reserva y peligros anunciados ("¡cables!").`,
                  `Отработка в подвеске до самой посадки, 3 раза за занятие, проговаривая каждый шаг. Попроси вторую проблему под запасным и выкрики об опасностях («провода!»).`,
                ),
                t(
                  `Under load the handles sit higher on the chest than on the ground.`,
                  `Con carga, las manijas quedan más arriba en el pecho que en tierra.`,
                  `Под нагрузкой ручки на груди выше, чем на земле.`,
                ),
                t(
                  `Practise until it's automatic, not until it feels comfortable.`,
                  `Practica hasta que sea automático, no hasta que te sientas cómodo.`,
                  `Тренируй до автоматизма, а не пока не станет комфортно.`,
                ),
                t(
                  `Someone else cut away? Say "well done" first. Second-guessing other people's cutaways teaches you to hesitate.`,
                  `¿Alguien liberó? Primero dile "bien hecho". Cuestionar las liberaciones de otros te enseña a dudar.`,
                  `Кто-то отцепился? Сначала скажи «молодец». Разбор чужих отцепок в духе «можно было спасти» учит колебаться.`,
                ),
              ],
            },
            {
              title: t(`Canopy flight, flare and landing`, `Vuelo de vela, flare y aterrizaje`, `Полёт под куполом, flare и посадка`),
              bad: [
                t(
                  `Flaring early, late or not at all. No flare causes the worst injuries.`,
                  `Flare temprano, tarde o sin flare. Sin flare se producen las peores lesiones.`,
                  `Flare рано, поздно или вообще нет. Без flare — самые тяжёлые травмы.`,
                ),
                t(
                  `Not lifting the legs; reaching for the ground with a foot or a hand.`,
                  `No levantar las piernas; buscar el suelo con un pie o una mano.`,
                  `Не поднял ноги; тянешься к земле ногой или рукой.`,
                ),
                t(
                  `Trying to stand it up after a few soft landings (the classic AFF 2–4 broken ankle).`,
                  `Intentar quedar de pie después de unos aterrizajes suaves (el clásico tobillo roto de AFF 2–4).`,
                  `Пытаешься устоять после пары мягких посадок (классический перелом лодыжки на AFF 2–4).`,
                ),
                t(
                  `Fixating on the target and turning low to reach it.`,
                  `Fijarse en el blanco y girar bajo para alcanzarlo.`,
                  `Зацикливаешься на цели и поворачиваешь низко, чтобы до неё дотянуть.`,
                ),
                t(
                  `Straight arms swung out to the sides in the flare ("iron cross").`,
                  `Brazos rectos abiertos a los lados en el flare ("cruz de hierro").`,
                  `Прямые руки в стороны во время flare («железный крест»).`,
                ),
                t(
                  `Looking straight down at the ground under you: it rushes up and the timing goes wrong.`,
                  `Mirar justo abajo, al suelo debajo de ti: se te viene encima y el momento sale mal.`,
                  `Смотреть прямо вниз, под себя: земля «набегает», и момент выходит неправильный.`,
                ),
                t(
                  `Treating "5, 4, 3, 2, 1" as five full seconds of pull.`,
                  `Tomar el "5, 4, 3, 2, 1" como cinco segundos completos de tirón.`,
                  `Считать «5, 4, 3, 2, 1» пятью полными секундами затяжки.`,
                ),
                t(
                  `Dropping a toggle near the ground: the worst landing case without a turn in 2024.`,
                  `Soltar un batidor cerca del suelo: el peor caso de aterrizaje sin giro en 2024.`,
                  `Выронить клеванту у земли: самый тяжёлый посадочный случай без разворота в 2024 году.`,
                ),
              ],
              good: [
                t(`Priorities: level wing, clear area, flare and PLF.`, `Prioridades: ala nivelada, zona despejada, flare y PLF.`, `Приоритеты: ровное крыло, свободная площадка, flare и PLF.`),
                t(
                  `Look at the horizon ahead, about 45° down, not at your feet.`,
                  `Mira al horizonte adelante, unos 45° hacia abajo, no a tus pies.`,
                  `Смотри на горизонт впереди, примерно под 45° вниз, а не себе под ноги.`,
                ),
                t(
                  `"5, 4, 3, 2, 1" is a count: one smooth pull, both hands, elbows back, hands close to the body, finished at touchdown.`,
                  `"5, 4, 3, 2, 1" es un conteo: un tirón suave, las dos manos, codos atrás, manos pegadas al cuerpo, terminado al tocar el suelo.`,
                  `«5, 4, 3, 2, 1» — это счёт: одно плавное движение, обе руки, локти назад, кисти у корпуса, закончить в момент касания.`,
                ),
                t(
                  `Flared high? Stop, hold what you have, fly straight, finish on the way down.`,
                  `¿Flare demasiado alto? Para, mantén lo que tienes, vuela recto y termina mientras bajas.`,
                  `Начал flare высоко? Остановись, держи, лети прямо и добирай на снижении.`,
                ),
                t(
                  `The radio is a backup: ground coming fast and no "flare" call? Flare.`,
                  `La radio es un respaldo: ¿el suelo se acerca rápido y nadie dice "flare"? Haz el flare.`,
                  `Радио — только подстраховка: земля близко, а команды нет? Делай flare.`,
                ),
                t(
                  `At 2,500 ft decide whether you can reach the holding point; if not, pick a clear alternate by 2,000 ft at the latest.`,
                  `A 2,500 ft decide si llegas al punto de espera; si no, elige una zona alternativa despejada a más tardar a 2,000 ft.`,
                  `На 2 500 футах реши, долетаешь ли до точки ожидания; если нет, выбери чистую запасную площадку не позже 2 000 футов.`,
                ),
                t(
                  `PLF every time; thumbs together at the crotch so a hand doesn't go out.`,
                  `PLF siempre; pulgares juntos a la altura de la entrepierna para que no se salga una mano.`,
                  `PLF каждый раз; большие пальцы вместе у паха, чтобы рука не выставилась.`,
                ),
                t(`Collision ahead: both turn right.`, `Choque de frente: los dos giran a la derecha.`, `Угроза столкновения: оба уходят вправо.`),
              ],
            },
            {
              title: t(`Getting through AFF and the A-license`, `Cómo pasar el AFF y la licencia A`, `Как пройти AFF и получить лицензию A`),
              badTitle: t(`Why students repeat levels`, `Por qué los alumnos repiten niveles`, `Почему повторяют уровни`),
              goodTitle: t(`Rules and habits`, `Reglas y hábitos`, `Правила и привычки`),
              bad: [
                t(
                  `Too stiff to learn; drifting from the instructor; ignoring signals.`,
                  `Demasiado rígidos para aprender; se alejan del instructor; ignoran las señales.`,
                  `Слишком зажат, чтобы учиться; отплываешь от инструктора; не реагируешь на жесты.`,
                ),
                t(
                  `Can't find the handle, or loses control at pull time.`,
                  `No encuentran la manija o pierden el control al abrir.`,
                  `Не находишь ручку или теряешь контроль при раскрытии.`,
                ),
                t(
                  `Scraping through level B at the minimum: level C rarely passes first time.`,
                  `Pasar el nivel B por los pelos: el nivel C rara vez sale a la primera.`,
                  `Проскочил уровень B на минимуме: C с первого раза почти не проходят.`,
                ),
                t(
                  `Sloppy pull altitude: level A allows 1,000 ft off, level B 500 ft, level C has no written margin.`,
                  `Altura de apertura descuidada: el nivel A admite 1,000 ft de diferencia, el B 500 ft, el C no tiene margen escrito.`,
                  `Небрежная высота раскрытия: на уровне A допуск 1 000 футов, на B — 500, на C письменного допуска нет.`,
                ),
                t(`Long gaps between jumps.`, `Mucho tiempo entre saltos.`, `Большие перерывы между прыжками.`),
              ],
              good: [
                t(
                  `A-license: 25 jumps, progression card, check dive, written (75%+) and oral exam.`,
                  `Licencia A: 25 saltos, tarjeta de progresión, salto de control, examen escrito (75%+) y oral.`,
                  `Лицензия A: 25 прыжков, карточка прогресса, check dive, письменный (от 75%) и устный экзамен.`,
                ),
                t(
                  `Student wind limit 14 mph; no alcohol 8 h before; after 30 days off, a supervised jump.`,
                  `Límite de viento para alumnos 14 mph; nada de alcohol 8 h antes; tras 30 días sin saltar, un salto supervisado.`,
                  `Лимит ветра для студента 14 миль/ч; без алкоголя за 8 ч; после 30 дней перерыва — прыжок под надзором.`,
                ),
                t(
                  `Gear check four times: before putting it on, after, before boarding, before exit.`,
                  `Revisa el equipo cuatro veces: antes de ponértelo, después, antes de subir, antes de salir.`,
                  `Проверка снаряжения четыре раза: до того как надел, после, перед посадкой, перед выходом.`,
                ),
                t(
                  `Jump in a tight block, take a canopy course after AFF.`,
                  `Salta en bloques seguidos, haz un curso de vela después del AFF.`,
                  `Прыгай плотным блоком, после AFF — курс пилотирования купола.`,
                ),
                t(
                  `Learn only what today's jump needs; skip scary videos without context.`,
                  `Aprende solo lo que pide el salto de hoy; evita videos de miedo sin contexto.`,
                  `Учи только то, что нужно на сегодняшний прыжок; не смотри страшные ролики без контекста.`,
                ),
                t(
                  `The A-license is a start, not the finish: keep jumps 26–100 structured and conservative.`,
                  `La licencia A es un comienzo, no el final: que los saltos 26–100 sean ordenados y prudentes.`,
                  `Лицензия A — начало, а не финиш: прыжки 26–100 делай структурными и осторожными.`,
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
              label: t(`USPA dive flows, all categories`, `Planes de salto USPA, todas las categorías`, `Планы прыжков USPA, все категории`),
            },
            {
              href: 'https://www.uspa.org/skydiveschool/landing',
              credit: 'uspa.org',
              label: t(`USPA online ground school`, `Curso en tierra online de USPA`, `Онлайн-курс USPA`),
            },
            {
              yt: 'IIN4WylwLGo',
              t: 0,
              credit: 'Brian Germain',
              label: t(`Flaring too high`, `Flare demasiado alto`, `Flare слишком высоко`),
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
                `Сразу после отделения ты потерял обоих инструкторов. Что делать?`,
              ),
              options: [
                t(`Pull now`, `Abre ya`, `Сразу раскрываться`),
                t(`Carry on with the dive flow`, `Sigue con el plan de salto`, `Продолжать план прыжка`),
                t(`Wait for them until 5,500`, `Espéralos hasta 5,500`, `Ждать их до 5 500`),
              ],
              answer: 0,
              why: t(
                `Lost one instructor: carry on. Lost both: pull now.`,
                `¿Perdiste a uno? Sigue. ¿A los dos? Abre ya.`,
                `Потерял одного — продолжай. Обоих — раскрывайся сразу.`,
              ),
            },
            {
              q: t(
                `How often does USPA say to check your altitude in freefall?`,
                `¿Cada cuánto dice USPA que mires la altura en caída libre?`,
                `Как часто USPA советует проверять высоту в свободном падении?`,
              ),
              options: [
                t(`Every 3 seconds`, `Cada 3 segundos`, `Каждые 3 секунды`),
                t(`Every 10 seconds`, `Cada 10 segundos`, `Каждые 10 секунд`),
                t(`Only at lock-on`, `Solo en el lock on`, `Только на 6 000`),
              ],
              answer: 0,
              why: t(
                `Every 3 seconds, after every move and whenever something surprises you. Some schools teach about 5.`,
                `Cada 3 segundos, después de cada maniobra y cada vez que algo te sorprenda. Algunas escuelas enseñan unos 5.`,
                `Каждые 3 секунды, после каждого манёвра и при любой неожиданности. Некоторые школы учат около 5.`,
              ),
            },
            {
              q: t(
                `What does the "5, 4, 3, 2, 1" in the flare mean?`,
                `¿Qué significa el "5, 4, 3, 2, 1" del flare?`,
                `Что значит «5, 4, 3, 2, 1» во flare?`,
              ),
              options: [
                t(
                  `A count for one smooth pull, finished at touchdown`,
                  `Un conteo para un tirón suave, terminado al tocar el suelo`,
                  `Счёт для одного плавного движения, законченного при касании`,
                ),
                t(`Pull for five full seconds`, `Tirar durante cinco segundos completos`, `Тянуть ровно пять секунд`),
                t(`Five quick pumps on the toggles`, `Cinco bombeos rápidos de los batidores`, `Пять быстрых качков клевантами`),
              ],
              answer: 0,
              why: t(
                `It's a count, not a timer. What matters is where the flare finishes: at touchdown, with both hands, elbows back, hands close to the body.`,
                `Es un conteo, no un cronómetro. Lo que importa es dónde termina el flare: al tocar el suelo, con las dos manos, codos atrás, manos pegadas al cuerpo.`,
                `Это счёт, а не таймер. Важно, где flare заканчивается: в момент касания, обеими руками, локти назад, кисти у корпуса.`,
              ),
            },
            {
              q: t(
                `The ground is coming fast and the radio says nothing. What do you do?`,
                `El suelo se acerca rápido y la radio no dice nada. ¿Qué haces?`,
                `Земля быстро приближается, а по радио тишина. Что делаешь?`,
              ),
              options: [
                t(`Flare yourself`, `Haz el flare tú`, `Делаю flare сам`),
                t(`Wait for the "flare" call`, `Espera a que digan "flare"`, `Жду команды «flare»`),
                t(`Turn to slow down`, `Gira para frenar`, `Поворачиваю, чтобы затормозить`),
              ],
              answer: 0,
              why: t(
                `The radio is a backup. You fly your canopy: ground close and no call, flare.`,
                `La radio es un respaldo. Tú vuelas tu vela: suelo cerca y nadie dice nada, haz el flare.`,
                `Радио — подстраховка. Куполом управляешь ты: земля близко, команды нет — flare.`,
              ),
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- questions
    {
      id: 'questions',
      eyebrow: t(`Before the next session`, `Antes de la próxima sesión`, `Перед следующим занятием`),
      title: t(`Ask the instructors`, `Pregunta a los instructores`, `Спросить у инструкторов`),
      blocks: [
        {
          type: 'questions',
          items: [
            t(
              `Aircraft emergency: what do we do, and at which altitudes?`,
              `Emergencia del avión: ¿qué hacemos y a qué alturas?`,
              `Авария в самолёте: что делаем и на каких высотах?`,
            ),
            t(
              `Exit count: exact words, which instructor first, exit altitude.`,
              `Conteo de salida: palabras exactas, qué instructor primero, altura de salida.`,
              `Отсчёт: точные слова, на кого смотрим первым, высота выброски.`,
            ),
            t(
              `Confirm: thumb down = arch (hips forward), like in the filmed signals?`,
              `Confirmar: ¿pulgar abajo = arquear (cadera adelante), como en las señales del video?`,
              `Уточнить: палец вниз = прогиб (таз вперёд), как в видео с жестами?`,
            ),
            t(`Flare: one-stage or two-stage?`, `Flare: ¿en una etapa o en dos?`, `Flare: в одно движение или в два?`),
            t(`Two canopies side by side: cut away or not?`, `Dos velas lado a lado: ¿liberar o no?`, `Два купола бок о бок: отцепляться или нет?`),
            t(
              `Cutaway: one hand per handle, or both hands on red?`,
              `Liberación: ¿una mano por manija o las dos en la roja?`,
              `Отцеп: по руке на каждую ручку или обе руки на красную?`,
            ),
            t(
              `Nothing out at all (hard pull, pilot chute in tow): cut away first, or reserve only?`,
              `Nada fuera (apertura dura, extractor remolcado): ¿liberar primero o solo reserva?`,
              `Вообще ничего не вышло (тугое вытягивание, вытяжной в следе): сначала отцеп или сразу запасной?`,
            ),
            t(
              `"Clear the lines from right to left toward the shoulder": what was that?`,
              `"Despejar las líneas de derecha a izquierda hacia el hombro": ¿qué era eso?`,
              `«Очистить линии справа налево к плечу»: что это было?`,
            ),
          ],
        },
      ],
    },
  ],
};
