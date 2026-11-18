import type { Part } from './types';

export const part1: Part = {
  id: 'part1',
  roman: 'I',
  range: { en: '0 → 13,000 ft{exit}', es: '0 → 13,000 ft', uk: '0 → 13 000 футів', ru: '0 → 13 000 футов' },
  title: { en: 'In the plane', es: 'En el avión', uk: 'У літаку', ru: 'В самолёте' },
  chapters: [
    // ---------------------------------------------------------------- plane
    {
      id: 'plane',
      title: { en: 'The ride up', es: 'La subida', uk: 'Набір висоти', ru: 'Подъём на высоту' },
      blocks: [
        {
          type: 'rules',
          items: [
            {
              icon: 'plane',
              title: { en: 'Walk up from behind', es: 'Acércate por detrás', uk: 'Підходь ззаду', ru: 'Подходи сзади' },
              text: {
                en: 'Always approach the plane <b>from the rear</b>, away from the <b>propeller</b>.',
                es: 'Acércate siempre al avión <b>por detrás</b>, lejos de la <b>hélice</b>.',
                uk: 'До літака завжди підходь <b>ззаду</b>, подалі від <b>пропелера</b>.',
                ru: 'К самолёту всегда подходи <b>сзади</b>, подальше от <b>пропеллера</b>.',
              },
            },
            {
              icon: 'seatbelt',
              title: { en: 'Seatbelt on', es: 'Cinturón puesto', uk: 'Ремінь пристебнутий', ru: 'Ремень пристёгнут' },
              text: {
                en: 'From <b>boarding</b> (before the plane taxis) until the instructor says it\'s time to <b>get ready</b>.',
                es: 'Desde que <b>subes</b> (antes de que el avión ruede) hasta que el instructor diga que es hora de <b>prepararse</b>.',
                uk: 'Від <b>посадки</b> (ще до руління) і доти, поки інструктор не скаже <b>готуватися</b>.',
                ru: 'С <b>посадки</b> (ещё до руления) и до тех пор, пока инструктор не скажет <b>готовиться</b>.',
              },
            },
            {
              icon: 'helmet',
              title: { en: 'Helmet on, handles covered', es: 'Casco puesto, manijas cubiertas', uk: 'Шолом на голові, ручки прикриті', ru: 'Шлем надет, ручки прикрыты' },
              text: {
                en: 'Move carefully: <b>protect</b> your handles and keep the rig off seats and the door frame, so <b>nothing opens</b> in the plane.',
                es: 'Muévete con cuidado: <b>protege</b> tus manijas y no roces el equipo con los asientos ni con el marco de la puerta, para que <b>nada se abra</b> en el avión.',
                uk: 'Рухайся обережно: <b>прикривай</b> ручки й не чіпляй систему за сидіння та дверний проріз, щоб у літаку <b>нічого не розкрилося</b>.',
                ru: 'Двигайся осторожно: <b>прикрывай</b> ручки и не цепляй систему за сиденья и дверной проём, чтобы в самолёте <b>ничего не раскрылось</b>.',
              },
            },
            {
              icon: 'door',
              title: { en: 'Instructors lead', es: 'Los instructores guían', uk: 'Ведуть інструктори', ru: 'Ведут инструкторы' },
              text: {
                en: 'They take you to the door. Move <b>only on their signal</b>.',
                es: 'Te llevan a la puerta. Muévete <b>solo cuando te den la señal</b>.',
                uk: 'Вони підводять тебе до дверей. Рухайся <b>лише за їхнім сигналом</b>.',
                ru: 'Они подводят тебя к двери. Двигайся <b>только по их команде</b>.',
              },
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          title: { en: 'Aircraft emergency', es: 'Emergencia en el avión', uk: 'Аварійна ситуація в літаку', ru: 'Аварийная ситуация в самолёте' },
          text: {
            en: 'USPA lists four possible commands; your school sets which altitude gets which (ask). <b>Stay calm</b> and wait for the instructor\'s command. Usually, from low to high:',
            es: 'USPA prevé cuatro órdenes posibles; tu escuela fija qué altura corresponde a cada una (pregunta). <b>Mantén la calma</b> y espera la orden del instructor. Por lo general, de baja a alta:',
            uk: 'USPA передбачає чотири можливі команди; на якій висоті яка, визначає твоя школа (запитай). <b>Зберігай спокій</b> і чекай команди інструктора. Зазвичай, від малої висоти до великої:',
            ru: 'USPA предусматривает четыре возможные команды; на какой высоте какая, определяет твоя школа (спроси). <b>Сохраняй спокойствие</b> и жди команды инструктора. Обычно, от малой высоты к большой:',
          },
          points: [
            {
              en: '<b>Low</b>: land with the plane. Stay in, <b>helmet and belt on</b>, <b>brace</b> (hands clasped behind your head)',
              es: '<b>Bajo</b>: aterrizas con el avión. Quédate dentro, con <b>casco y cinturón</b>, en <b>posición de impacto</b> (manos entrelazadas detrás de la cabeza)',
              uk: '<b>Низько</b>: сідаємо разом із літаком. Залишаємося всередині, <b>у шоломі й пристебнуті</b>, у <b>позі безпеки</b> (руки зчеплені на потилиці)',
              ru: '<b>Низко</b>: садимся вместе с самолётом. Остаёмся внутри, <b>в шлеме и пристёгнуты</b>, в <b>позе безопасности</b> (руки сцеплены на затылке)',
            },
            {
              en: '<b>Higher</b>: exit on command and pull the <b>reserve</b> right away',
              es: '<b>Más alto</b>: sal a la orden y abre la <b>reserva</b> enseguida',
              uk: '<b>Вище</b>: покидаємо літак за командою й одразу розкриваємо <b>запасний</b>',
              ru: '<b>Выше</b>: покидаем самолёт по команде и сразу раскрываем <b>запасной</b>',
            },
            {
              en: '<b>Higher still</b>: exit on command and pull the <b>main</b> right away',
              es: '<b>Más alto aún</b>: sal a la orden y abre la <b>principal</b> enseguida',
              uk: '<b>Ще вище</b>: покидаємо літак за командою й одразу розкриваємо <b>основний</b>',
              ru: '<b>Ещё выше</b>: покидаем самолёт по команде и сразу раскрываем <b>основной</b>',
            },
            {
              en: '<b>High</b>: exit the way the instructor says, maybe a normal exit',
              es: '<b>Alto</b>: sal como diga el instructor, quizá con una salida normal',
              uk: '<b>Високо</b>: відокремлюємося так, як скаже інструктор, можливо, звичайним відокремленням',
              ru: '<b>Высоко</b>: отделяемся так, как скажет инструктор, возможно, обычным отделением',
            },
            {
              en: 'Container opens in the plane: <b>hold it closed</b> and tell the instructor. If it goes out the door, <b>follow it</b> right away',
              es: 'Se abre el contenedor en el avión: <b>mantenlo cerrado</b> y avisa al instructor. Si sale por la puerta, <b>síguelo</b> enseguida',
              uk: 'Ранець розкрився в літаку: <b>тримай його закритим</b> і скажи інструктору. Якщо парашут вилетів у двері, <b>іди за ним</b> одразу',
              ru: 'Ранец раскрылся в самолёте: <b>держи его закрытым</b> и скажи инструктору. Если парашют вылетел в дверь, <b>иди за ним</b> сразу',
            },
            {
              en: 'Landed with the plane: get out calmly, move <b>at least 100 ft (30 m)</b> away',
              es: 'Aterrizaste con el avión: sal con calma y aléjate <b>al menos 100 ft (30 m)</b>',
              uk: 'Сіли разом із літаком: спокійно виходимо, відходимо <b>щонайменше на 100 футів (30 м)</b>',
              ru: 'Сели вместе с самолётом: спокойно выходим, отходим <b>минимум на 100 футов (30 м)</b>',
            },
            {
              en: 'Riding the plane down: a student-mode AAD should be <b>switched off</b> before the plane descends, or the descent can fire it. Who does it: <q-check/>',
              es: 'Si bajas con el avión: un AAD en modo alumno debe <b>apagarse</b> antes de que el avión descienda, o el descenso puede dispararlo. Quién lo hace: <q-check/>',
              uk: 'Якщо знижуєтеся разом із літаком: AAD у студентському режимі треба <b>вимкнути</b> до зниження, інакше під час зниження він може спрацювати. Хто це робить: <q-check/>',
              ru: 'Если снижаетесь вместе с самолётом: AAD в студенческом режиме нужно <b>выключить</b> до снижения, иначе при снижении он может сработать. Кто это делает: <q-check/>',
            },
            { en: 'Your school\'s altitude for each command: <q-check/>', es: 'La altura de tu escuela para cada orden: <q-check/>', uk: 'Висота для кожної команди у твоїй школі: <q-check/>', ru: 'Высота для каждой команды в твоей школе: <q-check/>' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'When can you take your seatbelt off?', es: '¿Cuándo puedes quitarte el cinturón?', uk: 'Коли можна відстебнути ремінь?', ru: 'Когда можно отстегнуть ремень?' },
              options: [
                { en: 'As soon as the plane has taken off', es: 'En cuanto el avión despegue', uk: 'Одразу після зльоту', ru: 'Сразу после взлёта' },
                { en: 'When the instructor says it\'s time to get ready', es: 'Cuando el instructor diga que es hora de prepararse', uk: 'Коли інструктор скаже готуватися', ru: 'Когда инструктор скажет готовиться' },
                { en: 'When the door opens before the jump', es: 'Cuando se abra la puerta antes del salto', uk: 'Коли перед стрибком відчинять двері', ru: 'Когда перед прыжком откроют дверь' },
              ],
              answer: 1,
              why: {
                en: 'The belt stays on from boarding, through taxi and take-off, until the instructor tells you to get ready.',
                es: 'El cinturón va puesto desde que subes, durante el rodaje y el despegue, hasta que el instructor te diga que te prepares.',
                uk: 'Ремінь пристебнутий від посадки, під час руління і зльоту, поки інструктор не скаже готуватися.',
                ru: 'Ремень пристёгнут с посадки, во время руления и взлёта, пока инструктор не скажет готовиться.',
              },
            },
            {
              q: { en: 'Aircraft emergency at low altitude. What is the typical rule?', es: 'Emergencia en el avión a baja altura. ¿Cuál es la regla típica?', uk: 'Аварійна ситуація в літаку на малій висоті. Яке звичайне правило?', ru: 'Аварийная ситуация в самолёте на малой высоте. Какое обычное правило?' },
              options: [
                { en: 'Stay in, helmet and belt on, brace', es: 'Quédate dentro, con casco y cinturón, en posición de impacto', uk: 'Залишаємося в літаку, у шоломі й пристебнуті, у позі безпеки', ru: 'Остаёмся в самолёте, в шлеме и пристёгнуты, в позе безопасности' },
                { en: 'Unbuckle and jump out right away', es: 'Quítate el cinturón y salta enseguida', uk: 'Відстібаємося й одразу стрибаємо', ru: 'Отстёгиваемся и сразу прыгаем' },
                { en: 'Take your helmet off, go to the door', es: 'Quítate el casco y ve a la puerta', uk: 'Знімаємо шолом і йдемо до дверей', ru: 'Снимаем шлем и идём к двери' },
              ],
              answer: 0,
              why: {
                en: 'Low means you land with the plane: helmet and belt on, brace, and wait for the instructor\'s command.',
                es: 'Bajo significa que aterrizas con el avión: casco y cinturón puestos, posición de impacto y esperas la orden del instructor.',
                uk: 'Низько — отже, сідаємо разом із літаком: у шоломі й пристебнуті, у позі безпеки, чекаємо команди інструктора.',
                ru: 'Низко — значит, садимся вместе с самолётом: в шлеме и пристёгнуты, в позе безопасности, ждём команды инструктора.',
              },
            },
            {
              q: { en: 'Who decides when you move to the door?', es: '¿Quién decide cuándo vas a la puerta?', uk: 'Хто вирішує, коли йти до дверей?', ru: 'Кто решает, когда идти к двери?' },
              options: [
                { en: 'You, as soon as you feel ready', es: 'Tú, en cuanto te sientas listo', uk: 'Ти сам, щойно відчуєш, що готовий', ru: 'Ты сам, как только почувствуешь, что готов' },
                { en: 'The pilot, when the jump light turns on', es: 'El piloto, cuando se enciende la luz de salto', uk: 'Пілот, коли загориться лампа стрибка', ru: 'Пилот, когда загорится лампа прыжка' },
                { en: 'Your instructors: you move on their signal', es: 'Tus instructores: te mueves a su señal', uk: 'Інструктори: рухаєшся за їхнім сигналом', ru: 'Инструкторы: двигаешься по их команде' },
              ],
              answer: 2,
              why: {
                en: 'Instructors lead you to the door. You move only on their signal.',
                es: 'Los instructores te llevan a la puerta. Te mueves solo a su señal.',
                uk: 'Інструктори підводять тебе до дверей. Рухаєшся лише за їхнім сигналом.',
                ru: 'Инструкторы подводят тебя к двери. Двигаешься только по их команде.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- gear
    {
      id: 'gear',
      title: { en: 'Your gear', es: 'Tu equipo', uk: 'Твоє спорядження', ru: 'Твоё снаряжение' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'As a student you <b>don\'t pack</b> anything. Trained people pack and check every part of your rig. <b>Trust it, but check it.</b>',
            es: 'Como alumno <b>no pliegas</b> nada. Personal capacitado pliega y revisa cada parte de tu equipo. <b>Confía en él, pero revísalo.</b>',
            uk: 'Ти студент і сам <b>нічого не вкладаєш</b>. Кожну частину системи вкладають і перевіряють навчені люди. <b>Довіряй системі, але перевіряй.</b>',
            ru: 'Ты студент и сам <b>ничего не укладываешь</b>. Каждую часть системы укладывают и проверяют обученные люди. <b>Доверяй системе, но проверяй.</b>',
          },
        },
        {
          type: 'rules',
          items: [
            {
              icon: 'rig',
              title: { en: 'Main', es: 'Principal', uk: 'Основний', ru: 'Основной' },
              points: [
                { en: 'Packed by a <b>packer</b>', es: 'La pliega un <b>plegador</b>', uk: 'Вкладає <b>укладальник</b>', ru: 'Укладывает <b>укладчик</b>' },
                { en: 'Checked by your <b>instructor</b> before the jump', es: 'La revisa tu <b>instructor</b> antes del salto', uk: 'Перевіряє твій <b>інструктор</b> перед стрибком', ru: 'Проверяет твой <b>инструктор</b> перед прыжком' },
                { en: 'Opened by <b>you</b>, at 5,500 ft{pull} (category A)', es: 'La abres <b>tú</b>, a 5,500 ft (categoría A)', uk: 'Розкриваєш <b>ти</b>, на 5 500 футах (категорія A)', ru: 'Раскрываешь <b>ты</b>, на 5 500 футах (категория A)' },
              ],
            },
            {
              icon: 'reserve',
              title: { en: 'Reserve', es: 'Reserva', uk: 'Запасний', ru: 'Запасной' },
              points: [
                { en: 'Packed only by a <b>certified rigger</b>', es: 'Solo la pliega un <b>rigger certificado</b>', uk: 'Вкладає лише <b>сертифікований ригер</b>', ru: 'Укладывает только <b>сертифицированный риггер</b>' },
                {
                  en: '<b>Inspected, repacked and sealed</b> on a fixed schedule: every <b>180 days</b> (FAA rule)',
                  es: 'Se <b>inspecciona, se repliega y se sella</b> según un plazo fijo: cada <b>180 días</b> (norma de la FAA)',
                  uk: 'Його <b>оглядають, перевкладають і пломбують</b> за чітким графіком: кожні <b>180 днів</b> (правило FAA)',
                  ru: 'Его <b>осматривают, переукладывают и пломбируют</b> по чёткому графику: каждые <b>180 дней</b> (правило FAA)',
                },
              ],
            },
            {
              icon: 'chip',
              title: { en: 'AAD', es: 'AAD', uk: 'AAD (страхувальний прилад)', ru: 'AAD (страхующий прибор)' },
              points: [
                {
                  en: 'Fires the reserve <b>automatically</b> if you are still falling <b>fast</b> when low: in freefall, or under a bad canopy that still comes down fast. Student CYPRES 2: about 750 ft in freefall, about 1,000 ft{~} under a canopy still falling faster than 29 mph. Vigil II Student: about 1,040 ft. Ask which one is on your rig.',
                  es: 'Abre la reserva <b>automáticamente</b> si sigues cayendo <b>rápido</b> a poca altura: en caída libre o bajo una vela en mal estado que todavía baja rápido. CYPRES 2 de alumno: unos 750 ft en caída libre, unos 1,000 ft bajo una vela que todavía baja a más de 29 mph. Vigil II en modo alumno: unos 1,040 ft. Pregunta cuál lleva tu equipo.',
                  uk: '<b>Автоматично</b> розкриває запасний, якщо ти ще <b>швидко</b> падаєш низько: у вільному падінні або під несправним куполом, що все ще швидко знижується. Студентський CYPRES 2: приблизно 750 футів у вільному падінні, приблизно 1 000 футів під куполом, що ще знижується швидше за 29 mph. Vigil II у студентському режимі: приблизно 1 040 футів. Запитай, який стоїть на твоїй системі.',
                  ru: '<b>Автоматически</b> раскрывает запасной, если ты ещё <b>быстро</b> падаешь низко: в свободном падении или под неисправным куполом, который всё ещё быстро снижается. Студенческий CYPRES 2: примерно 750 футов в свободном падении, примерно 1 000 футов под куполом, который ещё снижается быстрее 29 mph. Vigil II в студенческом режиме: примерно 1 040 футов. Спроси, какой стоит на твоей системе.',
                },
                { en: 'It is <b>only a backup</b>', es: 'Es <b>solo un respaldo</b>', uk: 'Це <b>лише підстраховка</b>', ru: 'Это <b>только подстраховка</b>' },
                { en: 'Pulling is always <b>your job</b>', es: 'Abrir siempre es <b>tu responsabilidad</b>', uk: 'Розкриватися — завжди <b>твоє завдання</b>', ru: 'Раскрываться — всегда <b>твоя задача</b>' },
              ],
            },
          ],
        },
        { type: 'h', text: { en: 'Know your rig', es: 'Conoce tu equipo', uk: 'Знай свою систему', ru: 'Знай свою систему' } },
        {
          type: 'rig',
          parts: [
            {
              id: 'reserve',
              name: { en: 'Reserve', es: 'Reserva', uk: 'Запасний', ru: 'Запасной' },
              text: { en: '<b>Top</b> of the container. Packed and sealed by a rigger.', es: '<b>Arriba</b> en el contenedor. La pliega y la sella un rigger.', uk: '<b>Верхній</b> відсік ранця. Вкладає й пломбує ригер.', ru: '<b>Верхний</b> отсек ранца. Укладывает и пломбирует риггер.' },
            },
            {
              id: 'main',
              name: { en: 'Main', es: 'Principal', uk: 'Основний', ru: 'Основной' },
              text: { en: '<b>Bottom</b> of the container. You open it at <b>5,500 ft{pull}</b> (category A).', es: '<b>Abajo</b> en el contenedor. La abres a <b>5,500 ft</b> (categoría A).', uk: '<b>Нижній</b> відсік ранця. Розкриваєш його на <b>5 500 футах</b> (категорія A).', ru: '<b>Нижний</b> отсек ранца. Раскрываешь его на <b>5 500 футах</b> (категория A).' },
            },
            {
              id: 'pc',
              name: { en: 'Pilot chute handle', es: 'Manija del extractor', uk: 'Ручка витяжного', ru: 'Ручка вытяжного' },
              text: { en: 'The little <b>ball</b> at the bottom of the container, <b>right side</b>. Right hand. On your student rig: <q-check/>', es: 'La <b>bolita</b> abajo del contenedor, <b>lado derecho</b>. Mano derecha. En tu equipo de alumno: <q-check/>', uk: '<b>Кулька</b> внизу ранця, <b>праворуч</b>. Права рука. На твоїй студентській системі: <q-check/>', ru: '<b>Шарик</b> внизу ранца, <b>справа</b>. Правая рука. На твоей студенческой системе: <q-check/>' },
            },
            {
              id: 'aad',
              name: { en: 'AAD', es: 'AAD', uk: 'AAD (страхувальний прилад)', ru: 'AAD (страхующий прибор)' },
              text: { en: 'Small computer <b>inside the reserve</b>. Opens it if you are still falling fast too low. <b>Switched on</b> on the ground, before you gear up.', es: 'Pequeña computadora <b>dentro de la reserva</b>. La abre si sigues cayendo rápido demasiado bajo. Se <b>enciende</b> en tierra, antes de ponerte el equipo.', uk: 'Маленький комп’ютер <b>у відсіку запасного</b>. Розкриває його, якщо ти ще швидко падаєш надто низько. <b>Вмикається</b> на землі, перед тим як одягнути систему.', ru: 'Маленький компьютер <b>в отсеке запасного</b>. Раскрывает его, если ты ещё быстро падаешь слишком низко. <b>Включается</b> на земле, перед тем как надеть систему.' },
            },
            {
              id: 'cutaway',
              name: { en: 'Cutaway handle (red)', es: 'Manija de liberación (roja)', uk: 'Подушка відчеплення (червона)', ru: 'Подушка отцепки (красная)' },
              text: { en: '<b>Right chest</b>. Releases the main.', es: '<b>Pecho derecho</b>. Suelta la principal.', uk: '<b>Праворуч на грудях</b>. Відчіплює основний.', ru: '<b>Справа на груди</b>. Отцепляет основной.' },
            },
            {
              id: 'silver',
              name: { en: 'Reserve handle (silver)', es: 'Manija de la reserva (plateada)', uk: 'Кільце запасного (срібне)', ru: 'Кольцо запасного (серебристое)' },
              text: { en: '<b>Left chest</b>. Opens the reserve.', es: '<b>Pecho izquierdo</b>. Abre la reserva.', uk: '<b>Зліва на грудях</b>. Розкриває запасний.', ru: '<b>Слева на груди</b>. Раскрывает запасной.' },
            },
            {
              id: 'rings',
              name: { en: 'Three rings', es: 'Tres anillos', uk: 'Три кільця', ru: 'Три кольца' },
              text: { en: 'On <b>each shoulder</b>, where the main is attached. The red handle opens them.', es: 'En <b>cada hombro</b>, donde se une la principal. La manija roja los suelta.', uk: 'На <b>кожному плечі</b>, де кріпиться основний. Червона подушка їх відчіплює.', ru: 'На <b>каждом плече</b>, где крепится основной. Красная подушка их отцепляет.' },
            },
            {
              id: 'straps',
              name: { en: 'Chest and leg straps', es: 'Cinta de pecho y perneras', uk: 'Грудна перемичка й ножні обхвати', ru: 'Грудная перемычка и ножные обхваты' },
              text: { en: '<b>Snug</b> and threaded right. Hold you in the harness.', es: '<b>Ajustadas</b> y bien pasadas. Te sujetan al arnés.', uk: '<b>Щільно</b> затягнуті й правильно протягнуті. Тримають тебе в підвісній системі.', ru: '<b>Плотно</b> затянуты и правильно продеты. Держат тебя в подвесной системе.' },
            },
          ],
        },
        {
          type: 'clips',
          items: [
            {
              src: 'rig_real',
              caption: { en: 'The real thing, from the back: reserve on top, main below', es: 'El equipo real, por detrás: la reserva arriba, la principal abajo', uk: 'Справжня система ззаду: запасний зверху, основний знизу', ru: 'Настоящая система сзади: запасной сверху, основной снизу' },
              credit: 'Start Skydiving',
              yt: 'Sg9lNMv1vdU',
              t: 197,
            },
            {
              src: 'rig_real_front',
              caption: { en: 'The front: chest and leg straps, then the red cutaway handle in its pocket', es: 'Por delante: cinchas de pecho y piernas, luego la manija roja de liberación en su bolsillo', uk: 'Спереду: грудна перемичка й ножні обхвати, потім червона подушка відчеплення в кишені', ru: 'Спереди: грудная перемычка и ножные обхваты, потом красная подушка отцепки в кармашке' },
              credit: 'Matt Walker',
              yt: 'LQZhlBAsWgE',
              t: 228,
            },
          ],
        },
        { type: 'h', text: { en: 'Checked four times', es: 'Se revisa cuatro veces', uk: 'Перевіряється чотири рази', ru: 'Проверяется четыре раза' } },
        {
          type: 'steps',
          timeline: true,
          items: [
            { icon: 'rig', title: { en: 'Before you put it on', es: 'Antes de ponértelo', uk: 'Перед тим як одягнути', ru: 'Перед тем как надеть' } },
            { icon: 'person', title: { en: 'After you put it on', es: 'Después de ponértelo', uk: 'Після того як одягнув', ru: 'После того как надел' } },
            { icon: 'plane', title: { en: 'Before boarding', es: 'Antes de subir al avión', uk: 'Перед посадкою в літак', ru: 'Перед посадкой в самолёт' } },
            { icon: 'door', title: { en: 'Before exit', es: 'Antes de salir', uk: 'Перед відокремленням від літака', ru: 'Перед отделением от самолёта' } },
          ],
        },
        {
          type: 'callout',
          title: { en: 'What gets checked', es: 'Qué se revisa', uk: 'Що перевіряють', ru: 'Что проверяют' },
          points: [
            { en: '<b>Handles</b> in place, <b>three rings</b>', es: '<b>Manijas</b> en su sitio, <b>tres anillos</b>', uk: '<b>Ручки</b> на місці, <b>три кільця</b>', ru: '<b>Ручки</b> на месте, <b>три кольца</b>' },
            { en: '<b>Leg and chest straps</b>, <b>pins</b>', es: '<b>Perneras y cinta de pecho</b>, <b>pines</b>', uk: '<b>Ножні обхвати й грудна перемичка</b>, <b>чеки (піни)</b>', ru: '<b>Ножные обхваты и грудная перемычка</b>, <b>чеки (пины)</b>' },
            { en: '<b>RSL</b> hooked up, <b>reserve pin and seal</b> in place', es: '<b>RSL</b> conectado, <b>pin y sello de la reserva</b> en su sitio', uk: '<b>RSL</b> під’єднаний, <b>чека й пломба запасного</b> на місці', ru: '<b>RSL</b> подсоединён, <b>чека и пломба запасного</b> на месте' },
            { en: '<b>AAD</b> switched on', es: '<b>AAD</b> encendido', uk: '<b>AAD</b> увімкнений', ru: '<b>AAD</b> включён' },
            {
              en: '<b>Altimeter</b> set (zero on the ground), <b>helmet</b> chin strap done up, <b>goggles</b> clean and secure',
              es: '<b>Altímetro</b> ajustado (cero en tierra), <b>casco</b> con la correa abrochada, <b>gafas</b> limpias y bien puestas',
              uk: '<b>Висотомір</b> виставлений (нуль на землі), <b>шолом</b> із застебнутим ремінцем, <b>окуляри</b> чисті й добре сидять',
              ru: '<b>Высотомер</b> выставлен (ноль на земле), <b>шлем</b> с застёгнутым ремешком, <b>очки</b> чистые и хорошо сидят',
            },
            { en: 'Before exit: ask for a <b>pin check</b>', es: 'Antes de salir: pide un <b>pin check</b>', uk: 'Перед відокремленням попроси <b>перевірити чеки (pin check)</b>', ru: 'Перед отделением попроси <b>проверить чеки (pin check)</b>' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'Who packs the reserve?', es: '¿Quién pliega la reserva?', uk: 'Хто вкладає запасний?', ru: 'Кто укладывает запасной?' },
              options: [
                { en: 'You, with an instructor', es: 'Tú, con un instructor', uk: 'Ти, з інструктором', ru: 'Ты, с инструктором' },
                { en: 'Any packer', es: 'Cualquier plegador', uk: 'Будь-який укладальник', ru: 'Любой укладчик' },
                { en: 'Only a certified rigger', es: 'Solo un rigger certificado', uk: 'Лише сертифікований ригер', ru: 'Только сертифицированный риггер' },
              ],
              answer: 2,
              why: {
                en: 'Only a certified rigger packs the reserve, and it is inspected, repacked and sealed on a fixed schedule.',
                es: 'Solo un rigger certificado pliega la reserva, y se inspecciona, se repliega y se sella según un plazo fijo.',
                uk: 'Запасний вкладає лише сертифікований ригер; його оглядають, перевкладають і пломбують за чітким графіком.',
                ru: 'Запасной укладывает только сертифицированный риггер; его осматривают, переукладывают и пломбируют по чёткому графику.',
              },
            },
            {
              q: { en: 'How many times is your gear checked before a jump?', es: '¿Cuántas veces se revisa tu equipo antes de un salto?', uk: 'Скільки разів перевіряють спорядження перед стрибком?', ru: 'Сколько раз проверяют снаряжение перед прыжком?' },
              options: [
                { en: 'Three times: on the ground, in the plane, in the door', es: 'Tres veces: en tierra, en el avión y en la puerta', uk: 'Тричі: на землі, у літаку й у дверях', ru: 'Три раза: на земле, в самолёте и в двери' },
                { en: 'Four times: before and after putting it on, before boarding, before exit', es: 'Cuatro veces: antes y después de ponértelo, antes de subir, antes de salir', uk: 'Чотири рази: до й після того як одягнув, перед посадкою, перед відокремленням', ru: 'Четыре раза: до и после того как надел, перед посадкой, перед отделением' },
                { en: 'Twice: once when you gear up, once more in the door', es: 'Dos veces: una al equiparte y otra en la puerta', uk: 'Двічі: коли одягаєш систему і ще раз у дверях', ru: 'Два раза: когда надеваешь систему и ещё раз в двери' },
              ],
              answer: 1,
              why: {
                en: 'Four checks: before you put it on, after, before boarding and before exit.',
                es: 'Cuatro revisiones: antes de ponértelo, después, antes de subir al avión y antes de salir.',
                uk: 'Чотири перевірки: перед тим як одягнути, після, перед посадкою і перед відокремленням.',
                ru: 'Четыре проверки: перед тем как надеть, после, перед посадкой и перед отделением.',
              },
            },
            {
              q: { en: 'What is the AAD?', es: '¿Qué es el AAD?', uk: 'Що таке AAD?', ru: 'Что такое AAD?' },
              options: [
                { en: 'A backup that fires the reserve; pulling is still your job', es: 'Un respaldo que abre la reserva; abrir sigue siendo tu responsabilidad', uk: 'Підстраховка, яка розкриває запасний; розкриватися все одно маєш ти', ru: 'Подстраховка, которая раскрывает запасной; раскрываться всё равно должен ты' },
                { en: 'The device that opens your main for you at 5,500 ft{pull}', es: 'El aparato que abre la principal por ti a 5,500 ft', uk: 'Прилад, який сам розкриває основний на 5 500 футах', ru: 'Прибор, который сам раскрывает основной на 5 500 футах' },
                { en: 'The red handle on your chest that releases the main', es: 'La manija roja del pecho que suelta la principal', uk: 'Червона подушка на грудях, що відчіплює основний', ru: 'Красная подушка на груди, которая отцепляет основной' },
              ],
              answer: 0,
              why: {
                en: 'The AAD fires the reserve only as a backup. You never count on it.',
                es: 'El AAD abre la reserva solo como respaldo. Nunca cuentes con él.',
                uk: 'AAD розкриває запасний лише як підстраховка. Розраховувати на нього не можна.',
                ru: 'AAD раскрывает запасной только в качестве подстраховки. Рассчитывать на него нельзя.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- climb
    {
      id: 'climb',
      title: { en: 'Climb-out into the door', es: 'Colócate en la puerta (climb-out)', uk: 'Вихід у двері', ru: 'Выход в дверь' },
      blocks: [
        {
          type: 'p',
          text: {
            en: '<b>Six moves</b> in a fixed order. As taught in the ground course: <b>right side first</b>, then left. Which side goes first depends on which side the door is on, so check it for your aircraft <q-check/>. The red part is the one that moves.',
            es: '<b>Seis movimientos</b> en un orden fijo. Como se enseñó en el curso de tierra: <b>primero el lado derecho</b>, luego el izquierdo. Qué lado va primero depende del lado en que esté la puerta, así que confírmalo para tu avión <q-check/>. La parte roja es la que se mueve.',
            uk: '<b>Шість рухів</b> у чіткому порядку. Як на наземному курсі: <b>спершу права сторона</b>, потім ліва. Яка сторона перша, залежить від того, з якого боку двері, тож перевір це для свого літака <q-check/>. Червоним показано те, що рухається.',
            ru: '<b>Шесть движений</b> в чётком порядке. Как на наземном курсе: <b>сначала правая сторона</b>, потом левая. Какая сторона первая, зависит от того, с какой стороны дверь, так что уточни это для своего самолёта <q-check/>. Красным показано то, что движется.',
          },
        },
        {
          type: 'climb',
          steps: [
            {
              title: { en: 'Set up facing the propeller', es: 'Colócate de cara a la hélice', uk: 'Стаємо обличчям до пропелера', ru: 'Встаём лицом к пропеллеру' },
              sub: { en: 'Look forward, toward the <b>prop</b>.', es: 'Mira hacia adelante, hacia la <b>hélice</b>.', uk: 'Дивимося вперед, на <b>пропелер</b>.', ru: 'Смотрим вперёд, на <b>пропеллер</b>.' },
            },
            {
              title: { en: 'Right hand', es: 'Mano derecha', uk: 'Права рука', ru: 'Правая рука' },
              sub: { en: 'Grab the <b>door handle</b> (in the mock-up below, a bar across the top of the door).', es: 'Agarra la <b>agarradera de la puerta</b> (en la maqueta de abajo, una barra sobre la puerta).', uk: 'Візьмися за <b>поручень</b> біля дверей (на макеті нижче — перекладина над дверима).', ru: 'Возьмись за <b>поручень</b> у двери (на макете ниже — перекладина над дверью).' },
            },
            {
              title: { en: 'Right foot to the door edge', es: 'Pie derecho al borde de la puerta', uk: 'Праву ногу до краю дверей', ru: 'Правую ногу к краю двери' },
              sub: { en: 'Toes at the <b>edge</b> of the door.', es: 'La punta del pie en el <b>borde</b> de la puerta.', uk: 'Носок — на <b>краю</b> дверей.', ru: 'Носок — на <b>краю</b> двери.' },
            },
            {
              title: { en: 'Left hand', es: 'Mano izquierda', uk: 'Ліва рука', ru: 'Левая рука' },
              sub: { en: 'On the door handle, <b>next to the right</b>.', es: 'En la agarradera, <b>junto a la derecha</b>.', uk: 'На поручень, <b>поруч із правою</b>.', ru: 'На поручень, <b>рядом с правой</b>.' },
            },
            {
              title: { en: 'Left foot next to the right', es: 'Pie izquierdo junto al derecho', uk: 'Ліву ногу поруч із правою', ru: 'Левую ногу рядом с правой' },
              sub: { en: 'Both feet at the <b>door edge</b>.', es: 'Los dos pies en el <b>borde de la puerta</b>.', uk: 'Обидві ноги на <b>краю дверей</b>.', ru: 'Обе ноги на <b>краю двери</b>.' },
            },
            {
              title: { en: 'Head out: chin up, chest out', es: 'Cabeza afuera: barbilla arriba, pecho afuera', uk: 'Голову назовні: підборіддя вгору, груди вперед', ru: 'Голову наружу: подбородок вверх, грудь вперёд' },
              sub: { en: 'You are in the <b>exit position</b>.', es: 'Estás en <b>posición de salida</b>.', uk: 'Ти в <b>позиції для відокремлення</b>.', ru: 'Ты в <b>позиции для отделения</b>.' },
            },
          ],
          captions: [
            { en: 'Face the prop', es: 'De cara a la hélice', uk: 'Обличчям до пропелера', ru: 'Лицом к пропеллеру' },
            { en: 'Right hand', es: 'Mano derecha', uk: 'Права рука', ru: 'Правая рука' },
            { en: 'Right foot', es: 'Pie derecho', uk: 'Права нога', ru: 'Правая нога' },
            { en: 'Left hand', es: 'Mano izquierda', uk: 'Ліва рука', ru: 'Левая рука' },
            { en: 'Left foot', es: 'Pie izquierdo', uk: 'Ліва нога', ru: 'Левая нога' },
            { en: 'Chin up, chest out', es: 'Barbilla arriba, pecho afuera', uk: 'Підборіддя вгору, груди вперед', ru: 'Подбородок вверх, грудь вперёд' },
          ],
        },
        {
          type: 'clips',
          items: [
            {
              src: 'climb',
              caption: { en: 'Climb-out practised in a mock-up door', es: 'Climb-out practicado en una maqueta de puerta', uk: 'Вихід у двері на макеті, на землі', ru: 'Выход в дверь на макете, на земле' },
              credit: 'Skydive Spaceland',
              yt: 'ufz1HjyYs_0',
              t: 28,
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'ufz1HjyYs_0', t: 28, label: { en: 'Climb-out and exit', es: 'Climb-out y salida', uk: 'Вихід у двері й відокремлення', ru: 'Выход в дверь и отделение' }, credit: 'Skydive Spaceland' },
            { yt: '7YxgNbzzwHk', t: 43, label: { en: 'Door and climb-out, Twin Otter', es: 'Puerta y climb-out, Twin Otter', uk: 'Двері та вихід у двері, Twin Otter', ru: 'Дверь и выход в дверь, Twin Otter' }, credit: 'Rhythm Skydiving' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'In the ground course climb-out, which side moves first?', es: 'En el climb-out del curso de tierra, ¿qué lado se mueve primero?', uk: 'Яка сторона рухається першою у виході в двері з наземного курсу?', ru: 'Какая сторона двигается первой в выходе в дверь с наземного курса?' },
              options: [
                { en: 'Left hand, then left foot', es: 'Mano izquierda, luego pie izquierdo', uk: 'Ліва рука, потім ліва нога', ru: 'Левая рука, потом левая нога' },
                { en: 'Right hand, then right foot', es: 'Mano derecha, luego pie derecho', uk: 'Права рука, потім права нога', ru: 'Правая рука, потом правая нога' },
                { en: 'Both hands at once', es: 'Las dos manos a la vez', uk: 'Обидві руки одразу', ru: 'Обе руки сразу' },
              ],
              answer: 1,
              why: {
                en: 'As taught: right side first, right hand on the door handle, right foot to the door edge. Then the left side. With the door on the other side, it can be the mirror image.',
                es: 'Como se enseñó: primero el lado derecho, mano derecha en la agarradera, pie derecho al borde de la puerta. Luego el izquierdo. Con la puerta al otro lado puede ser al revés.',
                uk: 'Як навчали: спершу права сторона, права рука на поручень, права нога до краю дверей. Потім ліва. Якщо двері з іншого боку, може бути навпаки.',
                ru: 'Как учили: сначала правая сторона, правая рука на поручень, правая нога к краю двери. Потом левая. Если дверь с другой стороны, может быть наоборот.',
              },
            },
            {
              q: { en: 'Where do you face when you set up?', es: '¿Hacia dónde miras al colocarte?', uk: 'Куди дивишся, коли стаєш у двері?', ru: 'Куда смотришь, когда встаёшь в дверь?' },
              options: [
                { en: 'Toward the propeller', es: 'Hacia la hélice', uk: 'На пропелер', ru: 'На пропеллер' },
                { en: 'Down at the ground', es: 'Abajo, al suelo', uk: 'Униз, на землю', ru: 'Вниз, на землю' },
                { en: 'Back toward the tail', es: 'Atrás, hacia la cola', uk: 'Назад, на хвіст', ru: 'Назад, на хвост' },
              ],
              answer: 0,
              why: {
                en: 'You set up facing the propeller and look forward, toward the prop.',
                es: 'Te colocas de cara a la hélice y miras hacia adelante, hacia ella.',
                uk: 'Стаєш обличчям до пропелера і дивишся вперед, на нього.',
                ru: 'Встаёшь лицом к пропеллеру и смотришь вперёд, на него.',
              },
            },
            {
              q: { en: 'What is the last move before you are in the exit position?', es: '¿Cuál es el último movimiento antes de estar en posición de salida?', uk: 'Який останній рух перед позицією для відокремлення?', ru: 'Какое последнее движение перед позицией для отделения?' },
              options: [
                { en: 'Sit on the edge of the door', es: 'Sentarte en el borde de la puerta', uk: 'Сісти на край дверей', ru: 'Сесть на край двери' },
                { en: 'Look down to find the ground', es: 'Mirar abajo para ver el suelo', uk: 'Подивитися вниз на землю', ru: 'Посмотреть вниз на землю' },
                { en: 'Head out: chin up, chest out', es: 'Cabeza afuera: barbilla arriba, pecho afuera', uk: 'Голову назовні: підборіддя вгору, груди вперед', ru: 'Голову наружу: подбородок вверх, грудь вперёд' },
              ],
              answer: 2,
              why: {
                en: 'Move six is head out with chin up and chest out. Then you are in the exit position.',
                es: 'El sexto movimiento es cabeza afuera, barbilla arriba y pecho afuera. Entonces estás en posición de salida.',
                uk: 'Шостий рух — голову назовні, підборіддя вгору, груди вперед. Після цього ти в позиції для відокремлення.',
                ru: 'Шестое движение — голову наружу, подбородок вверх, грудь вперёд. После этого ты в позиции для отделения.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- count
    {
      id: 'count',
      title: { en: 'Exit count', es: 'Conteo de salida', uk: 'Відлік на відокремлення', ru: 'Счёт на отделение от самолёта' },
      blocks: [
        {
          type: 'exit',
          steps: [
            {
              title: { en: '"Check in"', es: '"Check in"', uk: '«Check in»', ru: '«Check in»' },
              sub: {
                en: 'Look at the instructor <b>inside</b> the plane. They answer "OK".',
                es: 'Mira al instructor que está <b>dentro</b> del avión. Te responde "OK".',
                uk: 'Дивишся на інструктора <b>всередині</b> літака. Він відповідає «OK».',
                ru: 'Смотришь на инструктора <b>внутри</b> самолёта. Он отвечает «OK».',
              },
            },
            {
              title: { en: '"Check out"', es: '"Check out"', uk: '«Check out»', ru: '«Check out»' },
              sub: {
                en: 'Look at the instructor <b>outside</b>, in the door. They answer "OK".',
                es: 'Mira al instructor que está <b>fuera</b>, en la puerta. Te responde "OK".',
                uk: 'Дивишся на інструктора <b>назовні</b>, у дверях. Він відповідає «OK».',
                ru: 'Смотришь на инструктора <b>снаружи</b>, в двери. Он отвечает «OK».',
              },
            },
            {
              title: { en: '"Prop"', es: '"Prop"', uk: '«Prop»', ru: '«Prop»' },
              sub: { en: 'Look at the <b>propeller</b>, chin up.', es: 'Mira a la <b>hélice</b>, barbilla arriba.', uk: 'Дивишся на <b>пропелер</b>, підборіддя вгору.', ru: 'Смотришь на <b>пропеллер</b>, подбородок вверх.' },
            },
            {
              title: { en: '"Up" · rock out', es: '"Up" · balanceo hacia afuera', uk: '«Up» · хитнутися назовні', ru: '«Up» · качнуться наружу' },
              sub: {
                en: 'The rock gives the instructors your <b>timing</b>, so all three leave <b>together</b>.',
                es: 'El balanceo les marca el <b>ritmo</b> a los instructores, para que los tres salgan <b>a la vez</b>.',
                uk: 'Похитування задає інструкторам <b>ритм</b>, щоб ви втрьох відокремилися <b>разом</b>.',
                ru: 'Покачивание задаёт инструкторам <b>ритм</b>, чтобы вы втроём отделились <b>вместе</b>.',
              },
            },
            {
              title: { en: '"Down" · rock in', es: '"Down" · balanceo hacia adentro', uk: '«Down» · хитнутися всередину', ru: '«Down» · качнуться внутрь' },
            },
            {
              title: { en: '"Arch!" · rock out and go', es: '"Arch!" · balanceo hacia afuera y sales', uk: '«Arch!» · хитнутися назовні й відокремитися', ru: '«Arch!» · качнуться наружу и отделиться' },
              sub: {
                en: '<b>Hips forward, into the wind</b> (toward the prop), chin up, arch.',
                es: '<b>Cadera adelante, contra el viento</b> (hacia la hélice), barbilla arriba, arquea.',
                uk: '<b>Таз уперед, назустріч потоку</b> (у бік пропелера), підборіддя вгору, прогин.',
                ru: '<b>Таз вперёд, навстречу потоку</b> (в сторону пропеллера), подбородок вверх, прогиб.',
              },
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          points: [
            {
              en: 'Words <b>differ</b> by school and aircraft ("Out, in, arch!", "Ready, set, go")',
              es: 'Las palabras <b>cambian</b> según la escuela y el avión ("Out, in, arch!", "Ready, set, go")',
              uk: 'Слова <b>залежать</b> від школи й літака («Out, in, arch!», «Ready, set, go»)',
              ru: 'Слова <b>зависят</b> от школы и самолёта («Out, in, arch!», «Ready, set, go»)',
            },
            {
              en: '<b>Two instructors</b> on the first categories, one on each side; later just one, and the climb-out changes',
              es: '<b>Dos instructores</b> en las primeras categorías, uno a cada lado; después solo uno, y el climb-out cambia',
              uk: '<b>Два інструктори</b> на перших категоріях, по одному з кожного боку; згодом лише один, і вихід у двері змінюється',
              ru: '<b>Два инструктора</b> на первых категориях, по одному с каждой стороны; позже только один, и выход в дверь меняется',
            },
            {
              en: 'Which instructor is outside depends on the door side: on a left-door plane (Caravan) it is often the one on your <b>left</b>, reserve side. Your aircraft: <q-check/>',
              es: 'Qué instructor va fuera depende del lado de la puerta: en un avión con la puerta a la izquierda (Caravan) suele ser el de tu <b>izquierda</b>, lado de la reserva. Tu avión: <q-check/>',
              uk: 'Хто з інструкторів назовні, залежить від боку дверей: на літаку з дверима ліворуч (Caravan) це часто той, що <b>ліворуч</b> від тебе, з боку запасного. На твоєму літаку: <q-check/>',
              ru: 'Кто из инструкторов снаружи, зависит от стороны двери: на самолёте с дверью слева (Caravan) это часто тот, что <b>слева</b> от тебя, со стороны запасного. На твоём самолёте: <q-check/>',
            },
            {
              en: 'Usually "check <b>in</b>" = the instructor inside the plane, "check <b>out</b>" = the one outside. Your school: <q-check/>',
              es: 'Lo habitual: "check <b>in</b>" = el instructor de dentro del avión, "check <b>out</b>" = el de fuera. Tu escuela: <q-check/>',
              uk: 'Зазвичай «check <b>in</b>» — інструктор усередині літака, «check <b>out</b>» — той, що назовні. У твоїй школі: <q-check/>',
              ru: 'Обычно «check <b>in</b>» — инструктор внутри самолёта, «check <b>out</b>» — тот, что снаружи. В твоей школе: <q-check/>',
            },
          ],
        },
        {
          type: 'clips',
          items: [
            {
              src: 'exit_real',
              caption: { en: 'A real first AFF exit, filmed from inside: the student in the door between two instructors, all three leave together', es: 'Una salida real de primer AFF, filmada desde dentro: el alumno en la puerta entre dos instructores, salen los tres a la vez', uk: 'Справжнє перше відокремлення за AFF, знято зсередини: студент у дверях між двома інструкторами, усі троє відокремлюються разом', ru: 'Настоящее первое отделение по AFF, снято изнутри: студент в двери между двумя инструкторами, все трое отделяются вместе' },
              credit: 'Matt (YouTube)',
              yt: 'Z5lxQOmDIKk',
              t: 6,
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'kd8HVlIfzqc', t: 0, label: { en: 'Real AFF exit with instructors', es: 'Salida AFF real con instructores', uk: 'Справжнє відокремлення за AFF з інструкторами', ru: 'Настоящее отделение по AFF с инструкторами' }, credit: 'Perris' },
            { yt: 'LpoztnjW5c8', t: 134, label: { en: 'Exit count explained', es: 'El conteo de salida explicado', uk: 'Відлік на відокремлення: пояснення', ru: 'Счёт на отделение: объяснение' }, credit: 'Skydive Fundamentals' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'You say "Check in" to the instructor inside. What comes back?', es: 'Le dices "Check in" al instructor de dentro. ¿Qué te responde?', uk: 'Ти кажеш інструктору всередині «Check in». Що він відповідає?', ru: 'Ты говоришь инструктору внутри «Check in». Что он отвечает?' },
              options: [
                { en: '"Go"', es: '"Go"', uk: '«Go»', ru: '«Go»' },
                { en: '"OK"', es: '"OK"', uk: '«OK»', ru: '«OK»' },
                { en: '"Arch"', es: '"Arch"', uk: '«Arch»', ru: '«Arch»' },
              ],
              answer: 1,
              why: {
                en: 'Each instructor answers "OK": the one inside to "Check in", the one outside to "Check out".',
                es: 'Cada instructor responde "OK": el de dentro a "Check in" y el de fuera a "Check out".',
                uk: 'Кожен інструктор відповідає «OK»: той, що всередині, на «Check in», той, що назовні, на «Check out».',
                ru: 'Каждый инструктор отвечает «OK»: тот, что внутри, на «Check in», тот, что снаружи, на «Check out».',
              },
            },
            {
              q: { en: 'What comes right after "Check out"?', es: '¿Qué viene justo después de "Check out"?', uk: 'Що йде одразу після «Check out»?', ru: 'Что идёт сразу после «Check out»?' },
              options: [
                { en: '"Prop": look at the propeller, chin up', es: '"Prop": mira a la hélice, barbilla arriba', uk: '«Prop»: дивишся на пропелер, підборіддя вгору', ru: '«Prop»: смотришь на пропеллер, подбородок вверх' },
                { en: '"Arch!": rock out and leave the plane', es: '"Arch!": balanceo afuera y sales del avión', uk: '«Arch!»: хитаєшся назовні й відокремлюєшся', ru: '«Arch!»: качаешься наружу и отделяешься' },
                { en: '"Down": rock in, toward the plane', es: '"Down": balanceo hacia adentro, al avión', uk: '«Down»: хитаєшся всередину, до літака', ru: '«Down»: качаешься внутрь, к самолёту' },
              ],
              answer: 0,
              why: {
                en: 'The order is Check in, Check out, Prop, Up, Down, Arch!',
                es: 'El orden es Check in, Check out, Prop, Up, Down, Arch!',
                uk: 'Порядок: Check in, Check out, Prop, Up, Down, Arch!',
                ru: 'Порядок: Check in, Check out, Prop, Up, Down, Arch!',
              },
            },
            {
              q: { en: 'What does your body do on "Arch!"?', es: '¿Qué hace tu cuerpo con el "Arch!"?', uk: 'Що робить тіло на «Arch!»?', ru: 'Что делает тело на «Arch!»?' },
              options: [
                { en: 'Rocks in toward the plane, head down', es: 'Se balancea hacia el avión, cabeza abajo', uk: 'Хитається до літака, голова вниз', ru: 'Качается к самолёту, голова вниз' },
                { en: 'Waits in the door for one more count', es: 'Espera en la puerta un conteo más', uk: 'Чекає в дверях ще один відлік', ru: 'Ждёт в двери ещё один счёт' },
                { en: 'Rocks out and goes: hips into the wind, chin up', es: 'Se balancea afuera y sale: cadera contra el viento, barbilla arriba', uk: 'Хитається назовні й іде: таз назустріч потоку, підборіддя вгору', ru: 'Качается наружу и уходит: таз навстречу потоку, подбородок вверх' },
              ],
              answer: 2,
              why: {
                en: 'On "Arch!" you rock out and leave: hips forward into the wind, chin up, arch. Belly to earth comes a few seconds later.',
                es: 'Con el "Arch!" te balanceas hacia afuera y sales: cadera adelante contra el viento, barbilla arriba, arco. Panza a tierra llega unos segundos después.',
                uk: 'На «Arch!» хитаєшся назовні й відокремлюєшся: таз уперед назустріч потоку, підборіддя вгору, прогин. Животом до землі ти опинишся за кілька секунд.',
                ru: 'На «Arch!» качаешься наружу и отделяешься: таз вперёд навстречу потоку, подбородок вверх, прогиб. Животом к земле ты окажешься через несколько секунд.',
              },
            },
          ],
        },
      ],
    },
  ],
};
