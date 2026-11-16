import type { Part } from './types';

export const part1: Part = {
  id: 'part1',
  roman: 'I',
  range: { en: '0 → ~13,500 ft', es: '0 → ~13,500 ft', uk: '0 → ~13 500 футів', ru: '0 → ~13 500 футов' },
  title: { en: 'In the plane', es: 'En el avión', uk: 'У літаку', ru: 'В самолёте' },
  chapters: [
    // ---------------------------------------------------------------- plane
    {
      id: 'plane',
      title: { en: 'The ride up', es: 'La subida', uk: 'Набір висоти', ru: 'Набор высоты' },
      blocks: [
        {
          type: 'rules',
          items: [
            {
              icon: 'seatbelt',
              title: { en: 'Seatbelt on', es: 'Cinturón puesto', uk: 'Ремінь пристебнутий', ru: 'Ремень пристёгнут' },
              text: {
                en: 'From <b>take-off</b> until the instructor says it\'s time to <b>get ready</b>.',
                es: 'Desde el <b>despegue</b> hasta que el instructor diga que es hora de <b>prepararse</b>.',
                uk: 'Від <b>зльоту</b> і доти, поки інструктор не скаже <b>готуватися</b>.',
                ru: 'Со <b>взлёта</b> и до тех пор, пока инструктор не скажет <b>готовиться</b>.',
              },
            },
            {
              icon: 'helmet',
              title: { en: 'Helmet on, handles covered', es: 'Casco puesto, manijas cubiertas', uk: 'Шолом на голові, ручки прикриті', ru: 'Шлем надет, ручки прикрыты' },
              text: {
                en: '<b>Protect</b> your main and reserve handles when you move. <q-check/>',
                es: '<b>Protege</b> las manijas de la principal y de la reserva cuando te muevas. <q-check/>',
                uk: 'Коли рухаєшся, <b>прикривай</b> ручки основного і запасного. <q-check/>',
                ru: 'Когда двигаешься, <b>прикрывай</b> ручки основного и запасного. <q-check/>',
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
            en: 'Covered in the course, not in these notes. <b>Stay calm</b> and wait for the instructor\'s command. Typical rule:',
            es: 'Se vio en el curso, no en estas notas. <b>Mantén la calma</b> y espera la orden del instructor. Regla típica:',
            uk: 'Розбирали на курсі, у нотатках подробиць немає. <b>Зберігай спокій</b> і чекай команди інструктора. Звичайне правило:',
            ru: 'Разбирали на курсе, в заметках подробностей нет. <b>Сохраняй спокойствие</b> и жди команды инструктора. Обычное правило:',
          },
          points: [
            {
              en: '<b>Low</b>: stay in, belt on, <b>brace</b> (hands clasped behind your head)',
              es: '<b>Bajo</b>: quédate dentro, con cinturón, en <b>posición de impacto</b> (manos entrelazadas detrás de la cabeza)',
              uk: '<b>Низько</b>: залишаємося в літаку, пристебнуті, у <b>групуванні</b> (руки зчеплені на потилиці)',
              ru: '<b>Низко</b>: остаёмся в самолёте, пристёгнуты, в <b>группировке</b> (руки сцеплены на затылке)',
            },
            { en: '<b>Mid altitude</b>: exit on command', es: '<b>Altura media</b>: salida a la orden', uk: '<b>Середня висота</b>: покидаємо літак за командою', ru: '<b>Средняя высота</b>: покидаем самолёт по команде' },
            { en: '<b>High</b>: normal exit', es: '<b>Alto</b>: salida normal', uk: '<b>Високо</b>: звичайне відокремлення', ru: '<b>Высоко</b>: обычное отделение' },
            {
              en: 'Landed with the plane: get out calmly, move <b>at least 100 ft (30 m)</b> away',
              es: 'Aterrizaste con el avión: sal con calma y aléjate <b>al menos 100 ft (30 m)</b>',
              uk: 'Сіли разом із літаком: спокійно виходимо, відходимо <b>щонайменше на 100 футів (30 м)</b>',
              ru: 'Сели вместе с самолётом: спокойно выходим, отходим <b>минимум на 100 футов (30 м)</b>',
            },
            { en: 'Our school\'s altitudes: <q-check/>', es: 'Alturas de nuestra escuela: <q-check/>', uk: 'Висоти в нашій школі: <q-check/>', ru: 'Высоты в нашей школе: <q-check/>' },
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
                { en: 'When the door opens', es: 'Cuando se abra la puerta', uk: 'Коли відчинять двері', ru: 'Когда откроют дверь' },
              ],
              answer: 1,
              why: {
                en: 'The belt stays on from take-off until the instructor tells you to get ready.',
                es: 'El cinturón va puesto desde el despegue hasta que el instructor te diga que te prepares.',
                uk: 'Ремінь пристебнутий від зльоту, поки інструктор не скаже готуватися.',
                ru: 'Ремень пристёгнут со взлёта, пока инструктор не скажет готовиться.',
              },
            },
            {
              q: { en: 'Aircraft emergency at low altitude. What is the typical rule?', es: 'Emergencia en el avión a baja altura. ¿Cuál es la regla típica?', uk: 'Аварійна ситуація в літаку на малій висоті. Яке звичайне правило?', ru: 'Аварийная ситуация в самолёте на малой высоте. Какое обычное правило?' },
              options: [
                { en: 'Stay in, belt on, brace', es: 'Quédate dentro, con el cinturón puesto, en posición de impacto', uk: 'Залишаємося в літаку, пристебнуті, у групуванні', ru: 'Остаёмся в самолёте, пристёгнуты, в группировке' },
                { en: 'Jump out right away', es: 'Salta enseguida', uk: 'Одразу стрибаємо', ru: 'Сразу прыгаем' },
                { en: 'Take your helmet off and go to the door', es: 'Quítate el casco y ve a la puerta', uk: 'Знімаємо шолом і йдемо до дверей', ru: 'Снимаем шлем и идём к двери' },
              ],
              answer: 0,
              why: {
                en: 'Low means you land with the plane: belt on, brace, and wait for the instructor\'s command.',
                es: 'Bajo significa que aterrizas con el avión: cinturón puesto, posición de impacto y esperas la orden del instructor.',
                uk: 'Низько — отже, сідаємо разом із літаком: пристебнуті, у групуванні, чекаємо команди інструктора.',
                ru: 'Низко — значит, садимся вместе с самолётом: пристёгнуты, в группировке, ждём команды инструктора.',
              },
            },
            {
              q: { en: 'Who decides when you move to the door?', es: '¿Quién decide cuándo vas a la puerta?', uk: 'Хто вирішує, коли йти до дверей?', ru: 'Кто решает, когда идти к двери?' },
              options: [
                { en: 'You, when you feel ready', es: 'Tú, cuando te sientas listo', uk: 'Ти сам, коли відчуєш, що готовий', ru: 'Ты сам, когда почувствуешь, что готов' },
                { en: 'The pilot', es: 'El piloto', uk: 'Пілот', ru: 'Пилот' },
                { en: 'Your instructors: you move only on their signal', es: 'Tus instructores: te mueves solo a su señal', uk: 'Інструктори: рухаєшся лише за їхнім сигналом', ru: 'Инструкторы: двигаешься только по их команде' },
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
              text: {
                en: 'Packed by a <b>packer</b>.',
                es: 'La pliega un <b>plegador</b>.',
                uk: 'Вкладає <b>укладальник</b>.',
                ru: 'Укладывает <b>укладчик</b>.',
              },
            },
            {
              icon: 'reserve',
              title: { en: 'Reserve', es: 'Reserva', uk: 'Запасний', ru: 'Запасной' },
              points: [
                { en: 'Packed only by a <b>certified rigger</b>', es: 'Solo la pliega un <b>rigger certificado</b>', uk: 'Вкладає лише <b>сертифікований ригер</b>', ru: 'Укладывает только <b>сертифицированный риггер</b>' },
                { en: '<b>Inspected and sealed</b> on a schedule', es: 'Se <b>inspecciona y se precinta</b> según un calendario', uk: 'Його <b>оглядають і пломбують</b> за графіком', ru: 'Его <b>осматривают и пломбируют</b> по графику' },
              ],
            },
            {
              icon: 'chip',
              title: { en: 'AAD', es: 'AAD', uk: 'AAD (страхувальний прилад)', ru: 'AAD (страхующий прибор)' },
              points: [
                { en: 'Fires the reserve <b>automatically</b>', es: 'Abre la reserva <b>automáticamente</b>', uk: '<b>Автоматично</b> розкриває запасний', ru: '<b>Автоматически</b> раскрывает запасной' },
                { en: 'It is <b>only a backup</b>', es: 'Es <b>solo un respaldo</b>', uk: 'Це <b>лише підстраховка</b>', ru: 'Это <b>только подстраховка</b>' },
                { en: 'Pulling is always <b>your job</b>', es: 'Abrir siempre es <b>tu responsabilidad</b>', uk: 'Розкриватися — завжди <b>твоє завдання</b>', ru: 'Раскрываться — всегда <b>твоя задача</b>' },
              ],
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
            { icon: 'door', title: { en: 'Before exit', es: 'Antes de salir', uk: 'Перед відокремленням', ru: 'Перед отделением' } },
          ],
        },
        {
          type: 'callout',
          title: { en: 'What gets checked', es: 'Qué se revisa', uk: 'Що перевіряють', ru: 'Что проверяют' },
          points: [
            { en: '<b>Handles</b> in place, <b>three rings</b>', es: '<b>Manijas</b> en su sitio, <b>tres anillos</b>', uk: '<b>Ручки</b> на місці, <b>три кільця</b>', ru: '<b>Ручки</b> на месте, <b>три кольца</b>' },
            { en: '<b>Leg and chest straps</b>, <b>pins</b>', es: '<b>Perneras y cinta de pecho</b>, <b>pines</b>', uk: '<b>Ножні обхвати й грудна перемичка</b>, <b>чеки (піни)</b>', ru: '<b>Ножные обхваты и грудная перемычка</b>, <b>чеки (пины)</b>' },
            { en: '<b>AAD</b> switched on', es: '<b>AAD</b> encendido', uk: '<b>AAD</b> увімкнений', ru: '<b>AAD</b> включён' },
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
                en: 'Only a certified rigger packs the reserve, and it is inspected and sealed on a schedule.',
                es: 'Solo un rigger certificado pliega la reserva, y se inspecciona y se precinta según un calendario.',
                uk: 'Запасний вкладає лише сертифікований ригер; його оглядають і пломбують за графіком.',
                ru: 'Запасной укладывает только сертифицированный риггер; его осматривают и пломбируют по графику.',
              },
            },
            {
              q: { en: 'How many times is your gear checked before a jump?', es: '¿Cuántas veces se revisa tu equipo antes de un salto?', uk: 'Скільки разів перевіряють спорядження перед стрибком?', ru: 'Сколько раз проверяют снаряжение перед прыжком?' },
              options: [
                { en: 'Once, before boarding', es: 'Una vez, antes de subir al avión', uk: 'Один раз, перед посадкою', ru: 'Один раз, перед посадкой' },
                { en: 'Four times: before putting it on, after, before boarding, before exit', es: 'Cuatro veces: antes de ponértelo, después, antes de subir al avión, antes de salir', uk: 'Чотири рази: перед тим як одягнути, після, перед посадкою, перед відокремленням', ru: 'Четыре раза: перед тем как надеть, после, перед посадкой, перед отделением' },
                { en: 'Twice: on the ground and in the door', es: 'Dos veces: en tierra y en la puerta', uk: 'Двічі: на землі та в дверях', ru: 'Два раза: на земле и в двери' },
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
                { en: 'The normal way your main opens', es: 'La forma normal de abrir la principal', uk: 'Звичайний спосіб розкрити основний', ru: 'Обычный способ раскрыть основной' },
                { en: 'The handle you pull at 5,500 ft', es: 'La manija de la que tiras a 5,500 ft', uk: 'Ручка, яку тягнеш на висоті 5 500 футів', ru: 'Ручка, которую тянешь на высоте 5 500 футов' },
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
      title: { en: 'Climb-out into the door', es: 'Colocarse en la puerta (climb-out)', uk: 'Вихід у двері', ru: 'Выход в дверь' },
      blocks: [
        {
          type: 'p',
          text: {
            en: '<b>Six moves</b>, always in this order. <b>Right side first</b>, then left. The red part is the one that moves.',
            es: '<b>Seis movimientos</b>, siempre en este orden. <b>Primero el lado derecho</b>, luego el izquierdo. La parte roja es la que se mueve.',
            uk: '<b>Шість рухів</b>, завжди в цьому порядку. <b>Спершу права сторона</b>, потім ліва. Червоним показано те, що рухається.',
            ru: '<b>Шесть движений</b>, всегда в этом порядке. <b>Сначала правая сторона</b>, потом левая. Красным показано то, что движется.',
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
              sub: { en: 'On the <b>door frame</b>.', es: 'En el <b>marco de la puerta</b>.', uk: 'На <b>край дверного прорізу</b>.', ru: 'На <b>край дверного проёма</b>.' },
            },
            {
              title: { en: 'Right foot closer', es: 'Pie derecho más cerca', uk: 'Праву ногу ближче', ru: 'Правую ногу ближе' },
              sub: { en: 'Toward the <b>edge</b> of the door.', es: 'Hacia el <b>borde</b> de la puerta.', uk: 'До <b>краю</b> дверей.', ru: 'К <b>краю</b> двери.' },
            },
            {
              title: { en: 'Left hand', es: 'Mano izquierda', uk: 'Ліва рука', ru: 'Левая рука' },
              sub: { en: 'On the frame <b>next to the right</b>.', es: 'En el marco, <b>junto a la derecha</b>.', uk: 'На край прорізу <b>поруч із правою</b>.', ru: 'На край проёма <b>рядом с правой</b>.' },
            },
            {
              title: { en: 'Left foot closer', es: 'Pie izquierdo más cerca', uk: 'Ліву ногу ближче', ru: 'Левую ногу ближе' },
              sub: { en: '<b>Next to the right foot</b>.', es: '<b>Junto al pie derecho</b>.', uk: '<b>Поруч із правою ногою</b>.', ru: '<b>Рядом с правой ногой</b>.' },
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
              caption: { en: 'Real climb-out and exit, step by step', es: 'Climb-out y salida reales, paso a paso', uk: 'Справжній вихід у двері й відокремлення, крок за кроком', ru: 'Настоящий выход в дверь и отделение, шаг за шагом' },
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
              q: { en: 'Which side moves first in the climb-out?', es: '¿Qué lado se mueve primero en el climb-out?', uk: 'Яка сторона рухається першою під час виходу в двері?', ru: 'Какая сторона двигается первой при выходе в дверь?' },
              options: [
                { en: 'Left hand, then left foot', es: 'Mano izquierda, luego pie izquierdo', uk: 'Ліва рука, потім ліва нога', ru: 'Левая рука, потом левая нога' },
                { en: 'Right hand, then right foot', es: 'Mano derecha, luego pie derecho', uk: 'Права рука, потім права нога', ru: 'Правая рука, потом правая нога' },
                { en: 'Both hands at once', es: 'Las dos manos a la vez', uk: 'Обидві руки одразу', ru: 'Обе руки сразу' },
              ],
              answer: 1,
              why: {
                en: 'Right side first: right hand on the frame, right foot closer. Then the left side.',
                es: 'Primero el lado derecho: mano derecha en el marco, pie derecho más cerca. Luego el izquierdo.',
                uk: 'Спершу права сторона: права рука на край прорізу, права нога ближче. Потім ліва.',
                ru: 'Сначала правая сторона: правая рука на край проёма, правая нога ближе. Потом левая.',
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
      title: { en: 'Exit count', es: 'Conteo de salida', uk: 'Відлік на відокремлення', ru: 'Счёт на отделение' },
      blocks: [
        {
          type: 'exit',
          steps: [
            {
              title: { en: '"Check in"', es: '"Check in"', uk: '«Check in»', ru: '«Check in»' },
              sub: { en: 'Look at the <b>first instructor</b>. They answer "OK".', es: 'Mira al <b>primer instructor</b>. Te responde "OK".', uk: 'Дивишся на <b>першого інструктора</b>. Він відповідає «OK».', ru: 'Смотришь на <b>первого инструктора</b>. Он отвечает «OK».' },
            },
            {
              title: { en: '"Check out"', es: '"Check out"', uk: '«Check out»', ru: '«Check out»' },
              sub: { en: 'Look at the <b>second instructor</b>. They answer "OK".', es: 'Mira al <b>segundo instructor</b>. Te responde "OK".', uk: 'Дивишся на <b>другого інструктора</b>. Він відповідає «OK».', ru: 'Смотришь на <b>второго инструктора</b>. Он отвечает «OK».' },
            },
            {
              title: { en: '"Prop"', es: '"Prop"', uk: '«Prop»', ru: '«Prop»' },
              sub: { en: 'Look at the <b>propeller</b>, chin up.', es: 'Mira a la <b>hélice</b>, barbilla arriba.', uk: 'Дивишся на <b>пропелер</b>, підборіддя вгору.', ru: 'Смотришь на <b>пропеллер</b>, подбородок вверх.' },
            },
            {
              title: { en: '"Up" · rock out', es: '"Up" · balanceo hacia afuera', uk: '«Up» · хитнутися назовні', ru: '«Up» · качнуться наружу' },
            },
            {
              title: { en: '"Down" · rock in', es: '"Down" · balanceo hacia adentro', uk: '«Down» · хитнутися всередину', ru: '«Down» · качнуться внутрь' },
            },
            {
              title: { en: '"Arch!" · rock out and go', es: '"Arch!" · balanceo hacia afuera y sales', uk: '«Arch!» · хитнутися назовні й відокремитися', ru: '«Arch!» · качнуться наружу и отделиться' },
              sub: { en: '<b>Hips forward</b>, chin up, arch.', es: '<b>Cadera adelante</b>, barbilla arriba, arquea.', uk: '<b>Таз уперед</b>, підборіддя вгору, прогин.', ru: '<b>Таз вперёд</b>, подбородок вверх, прогиб.' },
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          points: [
            {
              en: 'Words <b>differ</b> by school and aircraft ("Ready, set, go", "Out, in, out")',
              es: 'Las palabras <b>cambian</b> según la escuela y el avión ("Ready, set, go", "Out, in, out")',
              uk: 'Слова <b>залежать</b> від школи й літака («Ready, set, go», «Out, in, out»)',
              ru: 'Слова <b>зависят</b> от школы и самолёта («Ready, set, go», «Out, in, out»)',
            },
            { en: '<b>One instructor</b> on each side', es: '<b>Un instructor</b> a cada lado', uk: 'По <b>одному інструктору</b> з кожного боку', ru: 'По <b>одному инструктору</b> с каждой стороны' },
            { en: 'Who you check first: <q-check/>', es: 'A quién miras primero: <q-check/>', uk: 'На кого дивитися першим: <q-check/>', ru: 'На кого смотреть первым: <q-check/>' },
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
              q: { en: 'You say "Check in" to the first instructor. What comes back?', es: 'Le dices "Check in" al primer instructor. ¿Qué te responde?', uk: 'Ти кажеш першому інструктору «Check in». Що він відповідає?', ru: 'Ты говоришь первому инструктору «Check in». Что он отвечает?' },
              options: [
                { en: '"Go"', es: '"Go"', uk: '«Go»', ru: '«Go»' },
                { en: '"OK"', es: '"OK"', uk: '«OK»', ru: '«OK»' },
                { en: '"Arch"', es: '"Arch"', uk: '«Arch»', ru: '«Arch»' },
              ],
              answer: 1,
              why: {
                en: 'Each instructor answers "OK": the first to "Check in", the second to "Check out".',
                es: 'Cada instructor responde "OK": el primero a "Check in" y el segundo a "Check out".',
                uk: 'Кожен інструктор відповідає «OK»: перший на «Check in», другий на «Check out».',
                ru: 'Каждый инструктор отвечает «OK»: первый на «Check in», второй на «Check out».',
              },
            },
            {
              q: { en: 'What comes right after "Check out"?', es: '¿Qué viene justo después de "Check out"?', uk: 'Що йде одразу після «Check out»?', ru: 'Что идёт сразу после «Check out»?' },
              options: [
                { en: '"Prop": look at the propeller, chin up', es: '"Prop": mira a la hélice, barbilla arriba', uk: '«Prop»: дивишся на пропелер, підборіддя вгору', ru: '«Prop»: смотришь на пропеллер, подбородок вверх' },
                { en: '"Arch!" and go', es: '"Arch!" y sales', uk: '«Arch!» і відокремлюєшся', ru: '«Arch!» и отделяешься' },
                { en: '"Down": rock in', es: '"Down": balanceo hacia adentro', uk: '«Down»: хитнутися всередину', ru: '«Down»: качнуться внутрь' },
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
                { en: 'Rocks in, toward the plane', es: 'Se balancea hacia adentro, hacia el avión', uk: 'Хитається всередину, до літака', ru: 'Качается внутрь, к самолёту' },
                { en: 'Waits for one more count', es: 'Espera un conteo más', uk: 'Чекає ще один відлік', ru: 'Ждёт ещё один счёт' },
                { en: 'Rocks out and goes: hips forward, chin up, arch', es: 'Se balancea hacia afuera y sale: cadera adelante, barbilla arriba, arco', uk: 'Хитається назовні й відокремлюється: таз уперед, підборіддя вгору, прогин', ru: 'Качается наружу и отделяется: таз вперёд, подбородок вверх, прогиб' },
              ],
              answer: 2,
              why: {
                en: 'On "Arch!" you rock out and leave, with hips forward, chin up and an arch.',
                es: 'Con el "Arch!" te balanceas hacia afuera y sales, con la cadera adelante, la barbilla arriba y en arco.',
                uk: 'На «Arch!» хитаєшся назовні й відокремлюєшся: таз уперед, підборіддя вгору, прогин.',
                ru: 'На «Arch!» качаешься наружу и отделяешься: таз вперёд, подбородок вверх, прогиб.',
              },
            },
          ],
        },
      ],
    },
  ],
};
