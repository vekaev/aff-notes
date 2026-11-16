import type { Part } from './types';

export const part1: Part = {
  id: 'part1',
  roman: 'I',
  range: { en: '0 → ~13,500 ft', es: '0 → ~13,500 ft', ru: '0 → ~13 500 футов' },
  title: { en: 'In the plane', es: 'En el avión', ru: 'В самолёте' },
  chapters: [
    // ---------------------------------------------------------------- plane
    {
      id: 'plane',
      title: { en: 'The ride up', es: 'La subida', ru: 'Набор высоты' },
      blocks: [
        {
          type: 'rules',
          items: [
            {
              icon: 'seatbelt',
              title: { en: 'Seatbelt on', es: 'Cinturón puesto', ru: 'Ремень пристёгнут' },
              text: {
                en: 'From <b>take-off</b> until the instructor says it\'s time to <b>get ready</b>.',
                es: 'Desde el <b>despegue</b> hasta que el instructor diga que es hora de <b>prepararse</b>.',
                ru: 'Со <b>взлёта</b> и до тех пор, пока инструктор не скажет <b>готовиться</b>.',
              },
            },
            {
              icon: 'helmet',
              title: { en: 'Helmet on, handles covered', es: 'Casco puesto, manijas cubiertas', ru: 'Шлем надет, ручки прикрыты' },
              text: {
                en: '<b>Protect</b> your main and reserve handles when you move. <q-check/>',
                es: '<b>Protege</b> las manijas de la principal y de la reserva cuando te muevas. <q-check/>',
                ru: 'Когда двигаешься, <b>прикрывай</b> ручки основного и запасного. <q-check/>',
              },
            },
            {
              icon: 'door',
              title: { en: 'Instructors lead', es: 'Los instructores guían', ru: 'Ведут инструкторы' },
              text: {
                en: 'They take you to the door. Move <b>only on their signal</b>.',
                es: 'Te llevan a la puerta. Muévete <b>solo cuando te den la señal</b>.',
                ru: 'Они подводят тебя к двери. Двигайся <b>только по их команде</b>.',
              },
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          title: { en: 'Aircraft emergency', es: 'Emergencia en el avión', ru: 'Аварийная ситуация в самолёте' },
          text: {
            en: 'Covered in the course, not in these notes. <b>Stay calm</b> and wait for the instructor\'s command. Typical rule:',
            es: 'Se vio en el curso, no en estas notas. <b>Mantén la calma</b> y espera la orden del instructor. Regla típica:',
            ru: 'Разбирали на курсе, в заметках подробностей нет. <b>Сохраняй спокойствие</b> и жди команды инструктора. Обычное правило:',
          },
          points: [
            {
              en: '<b>Low</b>: stay in, belt on, <b>brace</b> (hands clasped behind your head)',
              es: '<b>Bajo</b>: quédate dentro, con cinturón, en <b>posición de impacto</b> (manos entrelazadas detrás de la cabeza)',
              ru: '<b>Низко</b>: остаёмся в самолёте, пристёгнуты, в <b>группировке</b> (руки сцеплены на затылке)',
            },
            { en: '<b>Mid altitude</b>: exit on command', es: '<b>Altura media</b>: salida a la orden', ru: '<b>Средняя высота</b>: покидаем самолёт по команде' },
            { en: '<b>High</b>: normal exit', es: '<b>Alto</b>: salida normal', ru: '<b>Высоко</b>: обычное отделение' },
            {
              en: 'Landed with the plane: get out calmly, move <b>at least 100 ft (30 m)</b> away',
              es: 'Aterrizaste con el avión: sal con calma y aléjate <b>al menos 100 ft (30 m)</b>',
              ru: 'Сели вместе с самолётом: спокойно выходим, отходим <b>минимум на 100 футов (30 м)</b>',
            },
            { en: 'Our school\'s altitudes: <q-check/>', es: 'Alturas de nuestra escuela: <q-check/>', ru: 'Высоты в нашей школе: <q-check/>' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'When can you take your seatbelt off?', es: '¿Cuándo puedes quitarte el cinturón?', ru: 'Когда можно отстегнуть ремень?' },
              options: [
                { en: 'As soon as the plane has taken off', es: 'En cuanto el avión despegue', ru: 'Сразу после взлёта' },
                { en: 'When the instructor says it\'s time to get ready', es: 'Cuando el instructor diga que es hora de prepararse', ru: 'Когда инструктор скажет готовиться' },
                { en: 'When the door opens', es: 'Cuando se abra la puerta', ru: 'Когда откроют дверь' },
              ],
              answer: 1,
              why: {
                en: 'The belt stays on from take-off until the instructor tells you to get ready.',
                es: 'El cinturón va puesto desde el despegue hasta que el instructor te diga que te prepares.',
                ru: 'Ремень пристёгнут со взлёта, пока инструктор не скажет готовиться.',
              },
            },
            {
              q: { en: 'Aircraft emergency at low altitude. What is the typical rule?', es: 'Emergencia en el avión a baja altura. ¿Cuál es la regla típica?', ru: 'Аварийная ситуация в самолёте на малой высоте. Какое обычное правило?' },
              options: [
                { en: 'Stay in, belt on, brace', es: 'Quédate dentro, con el cinturón puesto, en posición de impacto', ru: 'Остаёмся в самолёте, пристёгнуты, в группировке' },
                { en: 'Jump out right away', es: 'Salta enseguida', ru: 'Сразу прыгаем' },
                { en: 'Take your helmet off and go to the door', es: 'Quítate el casco y ve a la puerta', ru: 'Снимаем шлем и идём к двери' },
              ],
              answer: 0,
              why: {
                en: 'Low means you land with the plane: belt on, brace, and wait for the instructor\'s command.',
                es: 'Bajo significa que aterrizas con el avión: cinturón puesto, posición de impacto y esperas la orden del instructor.',
                ru: 'Низко — значит, садимся вместе с самолётом: пристёгнуты, в группировке, ждём команды инструктора.',
              },
            },
            {
              q: { en: 'Who decides when you move to the door?', es: '¿Quién decide cuándo vas a la puerta?', ru: 'Кто решает, когда идти к двери?' },
              options: [
                { en: 'You, when you feel ready', es: 'Tú, cuando te sientas listo', ru: 'Ты сам, когда почувствуешь, что готов' },
                { en: 'The pilot', es: 'El piloto', ru: 'Пилот' },
                { en: 'Your instructors: you move only on their signal', es: 'Tus instructores: te mueves solo a su señal', ru: 'Инструкторы: двигаешься только по их команде' },
              ],
              answer: 2,
              why: {
                en: 'Instructors lead you to the door. You move only on their signal.',
                es: 'Los instructores te llevan a la puerta. Te mueves solo a su señal.',
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
      title: { en: 'Your gear', es: 'Tu equipo', ru: 'Твоё снаряжение' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'As a student you <b>don\'t pack</b> anything. Trained people pack and check every part of your rig. <b>Trust it, but check it.</b>',
            es: 'Como alumno <b>no pliegas</b> nada. Personal capacitado pliega y revisa cada parte de tu equipo. <b>Confía en él, pero revísalo.</b>',
            ru: 'Ты студент и сам <b>ничего не укладываешь</b>. Каждую часть системы укладывают и проверяют обученные люди. <b>Доверяй системе, но проверяй.</b>',
          },
        },
        {
          type: 'rules',
          items: [
            {
              icon: 'rig',
              title: { en: 'Main', es: 'Principal', ru: 'Основной' },
              text: {
                en: 'Packed by a <b>packer</b>.',
                es: 'La pliega un <b>plegador</b>.',
                ru: 'Укладывает <b>укладчик</b>.',
              },
            },
            {
              icon: 'reserve',
              title: { en: 'Reserve', es: 'Reserva', ru: 'Запасной' },
              points: [
                { en: 'Packed only by a <b>certified rigger</b>', es: 'Solo la pliega un <b>rigger certificado</b>', ru: 'Укладывает только <b>сертифицированный риггер</b>' },
                { en: '<b>Inspected and sealed</b> on a schedule', es: 'Se <b>inspecciona y se precinta</b> según un calendario', ru: 'Его <b>осматривают и пломбируют</b> по графику' },
              ],
            },
            {
              icon: 'chip',
              title: { en: 'AAD', es: 'AAD', ru: 'AAD (страхующий прибор)' },
              points: [
                { en: 'Fires the reserve <b>automatically</b>', es: 'Abre la reserva <b>automáticamente</b>', ru: '<b>Автоматически</b> раскрывает запасной' },
                { en: 'It is <b>only a backup</b>', es: 'Es <b>solo un respaldo</b>', ru: 'Это <b>только подстраховка</b>' },
                { en: 'Pulling is always <b>your job</b>', es: 'Abrir siempre es <b>tu responsabilidad</b>', ru: 'Раскрываться — всегда <b>твоя задача</b>' },
              ],
            },
          ],
        },
        { type: 'h', text: { en: 'Checked four times', es: 'Se revisa cuatro veces', ru: 'Проверяется четыре раза' } },
        {
          type: 'steps',
          timeline: true,
          items: [
            { icon: 'rig', title: { en: 'Before you put it on', es: 'Antes de ponértelo', ru: 'Перед тем как надеть' } },
            { icon: 'person', title: { en: 'After you put it on', es: 'Después de ponértelo', ru: 'После того как надел' } },
            { icon: 'plane', title: { en: 'Before boarding', es: 'Antes de subir al avión', ru: 'Перед посадкой в самолёт' } },
            { icon: 'door', title: { en: 'Before exit', es: 'Antes de salir', ru: 'Перед отделением' } },
          ],
        },
        {
          type: 'callout',
          title: { en: 'What gets checked', es: 'Qué se revisa', ru: 'Что проверяют' },
          points: [
            { en: '<b>Handles</b> in place, <b>three rings</b>', es: '<b>Manijas</b> en su sitio, <b>tres anillos</b>', ru: '<b>Ручки</b> на месте, <b>три кольца</b>' },
            { en: '<b>Leg and chest straps</b>, <b>pins</b>', es: '<b>Perneras y cinta de pecho</b>, <b>pines</b>', ru: '<b>Ножные обхваты и грудная перемычка</b>, <b>чеки (пины)</b>' },
            { en: '<b>AAD</b> switched on', es: '<b>AAD</b> encendido', ru: '<b>AAD</b> включён' },
            { en: 'Before exit: ask for a <b>pin check</b>', es: 'Antes de salir: pide un <b>pin check</b>', ru: 'Перед отделением попроси <b>проверить чеки (pin check)</b>' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'Who packs the reserve?', es: '¿Quién pliega la reserva?', ru: 'Кто укладывает запасной?' },
              options: [
                { en: 'You, with an instructor', es: 'Tú, con un instructor', ru: 'Ты, с инструктором' },
                { en: 'Any packer', es: 'Cualquier plegador', ru: 'Любой укладчик' },
                { en: 'Only a certified rigger', es: 'Solo un rigger certificado', ru: 'Только сертифицированный риггер' },
              ],
              answer: 2,
              why: {
                en: 'Only a certified rigger packs the reserve, and it is inspected and sealed on a schedule.',
                es: 'Solo un rigger certificado pliega la reserva, y se inspecciona y se precinta según un calendario.',
                ru: 'Запасной укладывает только сертифицированный риггер; его осматривают и пломбируют по графику.',
              },
            },
            {
              q: { en: 'How many times is your gear checked before a jump?', es: '¿Cuántas veces se revisa tu equipo antes de un salto?', ru: 'Сколько раз проверяют снаряжение перед прыжком?' },
              options: [
                { en: 'Once, before boarding', es: 'Una vez, antes de subir al avión', ru: 'Один раз, перед посадкой' },
                { en: 'Four times: before putting it on, after, before boarding, before exit', es: 'Cuatro veces: antes de ponértelo, después, antes de subir al avión, antes de salir', ru: 'Четыре раза: перед тем как надеть, после, перед посадкой, перед отделением' },
                { en: 'Twice: on the ground and in the door', es: 'Dos veces: en tierra y en la puerta', ru: 'Два раза: на земле и в двери' },
              ],
              answer: 1,
              why: {
                en: 'Four checks: before you put it on, after, before boarding and before exit.',
                es: 'Cuatro revisiones: antes de ponértelo, después, antes de subir al avión y antes de salir.',
                ru: 'Четыре проверки: перед тем как надеть, после, перед посадкой и перед отделением.',
              },
            },
            {
              q: { en: 'What is the AAD?', es: '¿Qué es el AAD?', ru: 'Что такое AAD?' },
              options: [
                { en: 'A backup that fires the reserve; pulling is still your job', es: 'Un respaldo que abre la reserva; abrir sigue siendo tu responsabilidad', ru: 'Подстраховка, которая раскрывает запасной; раскрываться всё равно должен ты' },
                { en: 'The normal way your main opens', es: 'La forma normal de abrir la principal', ru: 'Обычный способ раскрыть основной' },
                { en: 'The handle you pull at 5,500 ft', es: 'La manija de la que tiras a 5,500 ft', ru: 'Ручка, которую тянешь на высоте 5 500 футов' },
              ],
              answer: 0,
              why: {
                en: 'The AAD fires the reserve only as a backup. You never count on it.',
                es: 'El AAD abre la reserva solo como respaldo. Nunca cuentes con él.',
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
      title: { en: 'Climb-out into the door', es: 'Colocarse en la puerta (climb-out)', ru: 'Выход в дверь' },
      blocks: [
        {
          type: 'p',
          text: {
            en: '<b>Six moves</b>, always in this order. <b>Right side first</b>, then left. The red part is the one that moves.',
            es: '<b>Seis movimientos</b>, siempre en este orden. <b>Primero el lado derecho</b>, luego el izquierdo. La parte roja es la que se mueve.',
            ru: '<b>Шесть движений</b>, всегда в этом порядке. <b>Сначала правая сторона</b>, потом левая. Красным показано то, что движется.',
          },
        },
        {
          type: 'climb',
          steps: [
            {
              title: { en: 'Set up facing the propeller', es: 'Colócate de cara a la hélice', ru: 'Встаём лицом к пропеллеру' },
              sub: { en: 'Look forward, toward the <b>prop</b>.', es: 'Mira hacia adelante, hacia la <b>hélice</b>.', ru: 'Смотрим вперёд, на <b>пропеллер</b>.' },
            },
            {
              title: { en: 'Right hand', es: 'Mano derecha', ru: 'Правая рука' },
              sub: { en: 'On the <b>door frame</b>.', es: 'En el <b>marco de la puerta</b>.', ru: 'На <b>край дверного проёма</b>.' },
            },
            {
              title: { en: 'Right foot closer', es: 'Pie derecho más cerca', ru: 'Правую ногу ближе' },
              sub: { en: 'Toward the <b>edge</b> of the door.', es: 'Hacia el <b>borde</b> de la puerta.', ru: 'К <b>краю</b> двери.' },
            },
            {
              title: { en: 'Left hand', es: 'Mano izquierda', ru: 'Левая рука' },
              sub: { en: 'On the frame <b>next to the right</b>.', es: 'En el marco, <b>junto a la derecha</b>.', ru: 'На край проёма <b>рядом с правой</b>.' },
            },
            {
              title: { en: 'Left foot closer', es: 'Pie izquierdo más cerca', ru: 'Левую ногу ближе' },
              sub: { en: '<b>Next to the right foot</b>.', es: '<b>Junto al pie derecho</b>.', ru: '<b>Рядом с правой ногой</b>.' },
            },
            {
              title: { en: 'Head out: chin up, chest out', es: 'Cabeza afuera: barbilla arriba, pecho afuera', ru: 'Голову наружу: подбородок вверх, грудь вперёд' },
              sub: { en: 'You are in the <b>exit position</b>.', es: 'Estás en <b>posición de salida</b>.', ru: 'Ты в <b>позиции для отделения</b>.' },
            },
          ],
          captions: [
            { en: 'Face the prop', es: 'De cara a la hélice', ru: 'Лицом к пропеллеру' },
            { en: 'Right hand', es: 'Mano derecha', ru: 'Правая рука' },
            { en: 'Right foot', es: 'Pie derecho', ru: 'Правая нога' },
            { en: 'Left hand', es: 'Mano izquierda', ru: 'Левая рука' },
            { en: 'Left foot', es: 'Pie izquierdo', ru: 'Левая нога' },
            { en: 'Chin up, chest out', es: 'Barbilla arriba, pecho afuera', ru: 'Подбородок вверх, грудь вперёд' },
          ],
        },
        {
          type: 'clips',
          items: [
            {
              src: 'climb',
              caption: { en: 'Real climb-out and exit, step by step', es: 'Climb-out y salida reales, paso a paso', ru: 'Настоящий выход в дверь и отделение, шаг за шагом' },
              credit: 'Skydive Spaceland',
              yt: 'ufz1HjyYs_0',
              t: 28,
            },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'ufz1HjyYs_0', t: 28, label: { en: 'Climb-out and exit', es: 'Climb-out y salida', ru: 'Выход в дверь и отделение' }, credit: 'Skydive Spaceland' },
            { yt: '7YxgNbzzwHk', t: 43, label: { en: 'Door and climb-out, Twin Otter', es: 'Puerta y climb-out, Twin Otter', ru: 'Дверь и выход в дверь, Twin Otter' }, credit: 'Rhythm Skydiving' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'Which side moves first in the climb-out?', es: '¿Qué lado se mueve primero en el climb-out?', ru: 'Какая сторона двигается первой при выходе в дверь?' },
              options: [
                { en: 'Left hand, then left foot', es: 'Mano izquierda, luego pie izquierdo', ru: 'Левая рука, потом левая нога' },
                { en: 'Right hand, then right foot', es: 'Mano derecha, luego pie derecho', ru: 'Правая рука, потом правая нога' },
                { en: 'Both hands at once', es: 'Las dos manos a la vez', ru: 'Обе руки сразу' },
              ],
              answer: 1,
              why: {
                en: 'Right side first: right hand on the frame, right foot closer. Then the left side.',
                es: 'Primero el lado derecho: mano derecha en el marco, pie derecho más cerca. Luego el izquierdo.',
                ru: 'Сначала правая сторона: правая рука на край проёма, правая нога ближе. Потом левая.',
              },
            },
            {
              q: { en: 'Where do you face when you set up?', es: '¿Hacia dónde miras al colocarte?', ru: 'Куда смотришь, когда встаёшь в дверь?' },
              options: [
                { en: 'Toward the propeller', es: 'Hacia la hélice', ru: 'На пропеллер' },
                { en: 'Down at the ground', es: 'Abajo, al suelo', ru: 'Вниз, на землю' },
                { en: 'Back toward the tail', es: 'Atrás, hacia la cola', ru: 'Назад, на хвост' },
              ],
              answer: 0,
              why: {
                en: 'You set up facing the propeller and look forward, toward the prop.',
                es: 'Te colocas de cara a la hélice y miras hacia adelante, hacia ella.',
                ru: 'Встаёшь лицом к пропеллеру и смотришь вперёд, на него.',
              },
            },
            {
              q: { en: 'What is the last move before you are in the exit position?', es: '¿Cuál es el último movimiento antes de estar en posición de salida?', ru: 'Какое последнее движение перед позицией для отделения?' },
              options: [
                { en: 'Sit on the edge of the door', es: 'Sentarte en el borde de la puerta', ru: 'Сесть на край двери' },
                { en: 'Look down to find the ground', es: 'Mirar abajo para ver el suelo', ru: 'Посмотреть вниз на землю' },
                { en: 'Head out: chin up, chest out', es: 'Cabeza afuera: barbilla arriba, pecho afuera', ru: 'Голову наружу: подбородок вверх, грудь вперёд' },
              ],
              answer: 2,
              why: {
                en: 'Move six is head out with chin up and chest out. Then you are in the exit position.',
                es: 'El sexto movimiento es cabeza afuera, barbilla arriba y pecho afuera. Entonces estás en posición de salida.',
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
      title: { en: 'Exit count', es: 'Conteo de salida', ru: 'Счёт на отделение' },
      blocks: [
        {
          type: 'exit',
          steps: [
            {
              title: { en: '"Check in"', es: '"Check in"', ru: '«Check in»' },
              sub: { en: 'Look at the <b>first instructor</b>. They answer "OK".', es: 'Mira al <b>primer instructor</b>. Te responde "OK".', ru: 'Смотришь на <b>первого инструктора</b>. Он отвечает «OK».' },
            },
            {
              title: { en: '"Check out"', es: '"Check out"', ru: '«Check out»' },
              sub: { en: 'Look at the <b>second instructor</b>. They answer "OK".', es: 'Mira al <b>segundo instructor</b>. Te responde "OK".', ru: 'Смотришь на <b>второго инструктора</b>. Он отвечает «OK».' },
            },
            {
              title: { en: '"Prop"', es: '"Prop"', ru: '«Prop»' },
              sub: { en: 'Look at the <b>propeller</b>, chin up.', es: 'Mira a la <b>hélice</b>, barbilla arriba.', ru: 'Смотришь на <b>пропеллер</b>, подбородок вверх.' },
            },
            {
              title: { en: '"Up" · rock out', es: '"Up" · balanceo hacia afuera', ru: '«Up» · качнуться наружу' },
            },
            {
              title: { en: '"Down" · rock in', es: '"Down" · balanceo hacia adentro', ru: '«Down» · качнуться внутрь' },
            },
            {
              title: { en: '"Arch!" · rock out and go', es: '"Arch!" · balanceo hacia afuera y sales', ru: '«Arch!» · качнуться наружу и отделиться' },
              sub: { en: '<b>Hips forward</b>, chin up, arch.', es: '<b>Cadera adelante</b>, barbilla arriba, arquea.', ru: '<b>Таз вперёд</b>, подбородок вверх, прогиб.' },
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
              ru: 'Слова <b>зависят</b> от школы и самолёта («Ready, set, go», «Out, in, out»)',
            },
            { en: '<b>One instructor</b> on each side', es: '<b>Un instructor</b> a cada lado', ru: 'По <b>одному инструктору</b> с каждой стороны' },
            { en: 'Who you check first: <q-check/>', es: 'A quién miras primero: <q-check/>', ru: 'На кого смотреть первым: <q-check/>' },
          ],
        },
        {
          type: 'watch',
          items: [
            { yt: 'kd8HVlIfzqc', t: 0, label: { en: 'Real AFF exit with instructors', es: 'Salida AFF real con instructores', ru: 'Настоящее отделение по AFF с инструкторами' }, credit: 'Perris' },
            { yt: 'LpoztnjW5c8', t: 134, label: { en: 'Exit count explained', es: 'El conteo de salida explicado', ru: 'Счёт на отделение: объяснение' }, credit: 'Skydive Fundamentals' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'You say "Check in" to the first instructor. What comes back?', es: 'Le dices "Check in" al primer instructor. ¿Qué te responde?', ru: 'Ты говоришь первому инструктору «Check in». Что он отвечает?' },
              options: [
                { en: '"Go"', es: '"Go"', ru: '«Go»' },
                { en: '"OK"', es: '"OK"', ru: '«OK»' },
                { en: '"Arch"', es: '"Arch"', ru: '«Arch»' },
              ],
              answer: 1,
              why: {
                en: 'Each instructor answers "OK": the first to "Check in", the second to "Check out".',
                es: 'Cada instructor responde "OK": el primero a "Check in" y el segundo a "Check out".',
                ru: 'Каждый инструктор отвечает «OK»: первый на «Check in», второй на «Check out».',
              },
            },
            {
              q: { en: 'What comes right after "Check out"?', es: '¿Qué viene justo después de "Check out"?', ru: 'Что идёт сразу после «Check out»?' },
              options: [
                { en: '"Prop": look at the propeller, chin up', es: '"Prop": mira a la hélice, barbilla arriba', ru: '«Prop»: смотришь на пропеллер, подбородок вверх' },
                { en: '"Arch!" and go', es: '"Arch!" y sales', ru: '«Arch!» и отделяешься' },
                { en: '"Down": rock in', es: '"Down": balanceo hacia adentro', ru: '«Down»: качнуться внутрь' },
              ],
              answer: 0,
              why: {
                en: 'The order is Check in, Check out, Prop, Up, Down, Arch!',
                es: 'El orden es Check in, Check out, Prop, Up, Down, Arch!',
                ru: 'Порядок: Check in, Check out, Prop, Up, Down, Arch!',
              },
            },
            {
              q: { en: 'What does your body do on "Arch!"?', es: '¿Qué hace tu cuerpo con el "Arch!"?', ru: 'Что делает тело на «Arch!»?' },
              options: [
                { en: 'Rocks in, toward the plane', es: 'Se balancea hacia adentro, hacia el avión', ru: 'Качается внутрь, к самолёту' },
                { en: 'Waits for one more count', es: 'Espera un conteo más', ru: 'Ждёт ещё один счёт' },
                { en: 'Rocks out and goes: hips forward, chin up, arch', es: 'Se balancea hacia afuera y sale: cadera adelante, barbilla arriba, arco', ru: 'Качается наружу и отделяется: таз вперёд, подбородок вверх, прогиб' },
              ],
              answer: 2,
              why: {
                en: 'On "Arch!" you rock out and leave, with hips forward, chin up and an arch.',
                es: 'Con el "Arch!" te balanceas hacia afuera y sales, con la cadera adelante, la barbilla arriba y en arco.',
                ru: 'На «Arch!» качаешься наружу и отделяешься: таз вперёд, подбородок вверх, прогиб.',
              },
            },
          ],
        },
      ],
    },
  ],
};
