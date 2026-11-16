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
              big: '01',
              title: { en: 'Seatbelt on', es: 'Cinturón puesto', ru: 'Пристёгнут' },
              text: {
                en: 'From take-off until the instructor says it\'s time to get ready.',
                es: 'Desde el despegue hasta que el instructor dice que es hora de prepararse.',
                ru: 'С взлёта и пока инструктор не скажет готовиться.',
              },
            },
            {
              big: '02',
              title: { en: 'Helmet on, handles covered', es: 'Casco puesto, manijas cubiertas', ru: 'Шлем надет, ручки закрыты' },
              text: {
                en: 'Protect your main and reserve handles when you move. <q-check/>',
                es: 'Protege las manijas de la principal y de la reserva al moverte. <q-check/>',
                ru: 'Береги ручки основного и запасного, когда двигаешься. <q-check/>',
              },
            },
            {
              big: '03',
              title: { en: 'Instructors lead', es: 'Los instructores guían', ru: 'Ведут инструкторы' },
              text: {
                en: 'They take you to the door. Move only on their signal.',
                es: 'Te llevan a la puerta. Muévete solo cuando te den la señal.',
                ru: 'Они подводят к двери. Двигаешься только по команде.',
              },
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          title: { en: 'Aircraft emergency', es: 'Emergencia del avión', ru: 'Авария в самолёте' },
          text: {
            en: 'Covered on the course, details missing here. Stay calm and wait for the instructor\'s command. Typical rule: low = stay in, belt on, brace (hands clasped behind your head); mid altitude = exit on command; high = normal exit. After landing with the plane, get out calmly and move at least 100 ft (30 m) away. Our school\'s altitudes: <q-check/>',
            es: 'Se vio en el curso, aquí faltan detalles. Mantén la calma y espera la orden del instructor. Regla típica: bajo = quédate dentro, cinturón puesto, posición de impacto (manos entrelazadas detrás de la cabeza); altura media = salir a la orden; alto = salida normal. Si aterrizas con el avión, sal con calma y aléjate al menos 100 ft (30 m). Alturas de nuestra escuela: <q-check/>',
            ru: 'Разбирали на курсе, деталей тут нет. Сохраняй спокойствие и жди команды инструктора. Обычно: низко = остаёмся, пристёгнуты, группировка (руки сцеплены за головой); средняя высота = выходим по команде; высоко = обычный выход. Если сели вместе с самолётом, спокойно выходим и отходим минимум на 100 футов (30 м). Высоты нашей школы: <q-check/>',
          },
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'When can you take your seatbelt off?', es: '¿Cuándo puedes quitarte el cinturón?', ru: 'Когда можно отстегнуть ремень?' },
              options: [
                { en: 'As soon as the plane has taken off', es: 'En cuanto el avión despega', ru: 'Сразу после взлёта' },
                { en: 'When the instructor says it\'s time to get ready', es: 'Cuando el instructor dice que es hora de prepararse', ru: 'Когда инструктор скажет готовиться' },
                { en: 'When the door opens', es: 'Cuando se abre la puerta', ru: 'Когда откроют дверь' },
              ],
              answer: 1,
              why: {
                en: 'The belt stays on from take-off until the instructor tells you to get ready.',
                es: 'El cinturón va puesto desde el despegue hasta que el instructor te dice que te prepares.',
                ru: 'Ремень пристёгнут с взлёта, пока инструктор не скажет готовиться.',
              },
            },
            {
              q: { en: 'Aircraft emergency at low altitude. What is the typical rule?', es: 'Emergencia del avión a baja altura. ¿Cuál es la regla típica?', ru: 'Авария самолёта на малой высоте. Какое обычное правило?' },
              options: [
                { en: 'Stay in, belt on, brace', es: 'Quédate dentro, cinturón puesto, posición de impacto', ru: 'Остаёмся, пристёгнуты, группировка' },
                { en: 'Jump out right away', es: 'Salta enseguida', ru: 'Сразу прыгаем' },
                { en: 'Take your helmet off and go to the door', es: 'Quítate el casco y ve a la puerta', ru: 'Снять шлем и идти к двери' },
              ],
              answer: 0,
              why: {
                en: 'Low means you land with the plane: belt on, brace, and wait for the instructor\'s command.',
                es: 'Bajo significa que aterrizas con el avión: cinturón puesto, posición de impacto y esperar la orden del instructor.',
                ru: 'Низко — значит садимся с самолётом: пристёгнуты, группировка, ждём команды инструктора.',
              },
            },
            {
              q: { en: 'Who decides when you move to the door?', es: '¿Quién decide cuándo vas a la puerta?', ru: 'Кто решает, когда идти к двери?' },
              options: [
                { en: 'You, when you feel ready', es: 'Tú, cuando te sientas listo', ru: 'Ты сам, когда готов' },
                { en: 'The pilot', es: 'El piloto', ru: 'Пилот' },
                { en: 'Your instructors: you move only on their signal', es: 'Tus instructores: te mueves solo con su señal', ru: 'Инструкторы: двигаешься только по их команде' },
              ],
              answer: 2,
              why: {
                en: 'Instructors lead you to the door. You move only on their signal.',
                es: 'Los instructores te llevan a la puerta. Te mueves solo con su señal.',
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
            en: 'As a student you don\'t pack anything. Trained people pack and check every part of your rig. Trust it, but check it.',
            es: 'Como alumno no armas nada. Gente formada arma y revisa cada parte de tu equipo. Confía en él, pero revísalo.',
            ru: 'Как студент ты ничего не укладываешь. Каждую часть системы укладывают и проверяют обученные люди. Доверяй ей, но проверяй.',
          },
        },
        {
          type: 'rules',
          items: [
            {
              title: { en: 'Main', es: 'Principal', ru: 'Основной' },
              text: {
                en: 'Packed by a packer.',
                es: 'La arma un plegador (packer).',
                ru: 'Укладывает укладчик.',
              },
            },
            {
              title: { en: 'Reserve', es: 'Reserva', ru: 'Запасной' },
              text: {
                en: 'Packed only by a certified rigger. Inspected and sealed on a schedule.',
                es: 'Solo la arma un rigger certificado. Se inspecciona y se sella según un calendario.',
                ru: 'Укладывает только сертифицированный риггер. Осматривается и пломбируется по графику.',
              },
            },
            {
              title: { en: 'AAD', es: 'AAD', ru: 'AAD (страхующий прибор)' },
              text: {
                en: 'Fires the reserve automatically as a backup. It is only a backup: pulling is always your job.',
                es: 'Abre la reserva automáticamente como respaldo. Es solo un respaldo: abrir siempre es tu trabajo.',
                ru: 'Сам раскрывает запасной как страховка. Это только страховка: раскрываться — всегда твоя задача.',
              },
            },
          ],
        },
        { type: 'h', text: { en: 'Checked four times', es: 'Se revisa cuatro veces', ru: 'Проверка четыре раза' } },
        {
          type: 'steps',
          items: [
            { title: { en: 'Before you put it on', es: 'Antes de ponértelo', ru: 'Перед тем как надеть' } },
            { title: { en: 'After you put it on', es: 'Después de ponértelo', ru: 'Сразу после того как надел' } },
            { title: { en: 'Before boarding', es: 'Antes de subir al avión', ru: 'Перед посадкой в самолёт' } },
            { title: { en: 'Before exit', es: 'Antes de salir', ru: 'Перед выходом' } },
          ],
        },
        {
          type: 'callout',
          text: {
            en: 'What gets looked at: handles in place, three rings, leg and chest straps, pins, AAD switched on. Ask for a pin check before exit.',
            es: 'Qué se mira: manijas en su sitio, tres anillas, perneras y cinta de pecho, pines, AAD encendido. Pide un pin check antes de salir.',
            ru: 'Что смотрят: ручки на месте, три кольца, ножные и грудная перемычки, шпильки, включённый AAD. Перед выходом попроси pin check.',
          },
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'Who packs the reserve?', es: '¿Quién arma la reserva?', ru: 'Кто укладывает запасной?' },
              options: [
                { en: 'You, with an instructor', es: 'Tú, con un instructor', ru: 'Ты, с инструктором' },
                { en: 'Any packer', es: 'Cualquier plegador', ru: 'Любой укладчик' },
                { en: 'Only a certified rigger', es: 'Solo un rigger certificado', ru: 'Только сертифицированный риггер' },
              ],
              answer: 2,
              why: {
                en: 'Only a certified rigger packs the reserve, and it is inspected and sealed on a schedule.',
                es: 'Solo un rigger certificado arma la reserva, y se inspecciona y se sella según un calendario.',
                ru: 'Запасной укладывает только сертифицированный риггер, его осматривают и пломбируют по графику.',
              },
            },
            {
              q: { en: 'How many times is your gear checked before a jump?', es: '¿Cuántas veces se revisa tu equipo antes de un salto?', ru: 'Сколько раз проверяют снаряжение перед прыжком?' },
              options: [
                { en: 'Once, before boarding', es: 'Una vez, antes de subir', ru: 'Один раз, перед посадкой' },
                { en: 'Four times: before putting it on, after, before boarding, before exit', es: 'Cuatro veces: antes de ponértelo, después, antes de subir, antes de salir', ru: 'Четыре раза: до того как надел, после, перед посадкой, перед выходом' },
                { en: 'Twice: on the ground and in the door', es: 'Dos veces: en tierra y en la puerta', ru: 'Два раза: на земле и в двери' },
              ],
              answer: 1,
              why: {
                en: 'Four checks: before you put it on, after, before boarding and before exit.',
                es: 'Cuatro revisiones: antes de ponértelo, después, antes de subir y antes de salir.',
                ru: 'Четыре проверки: до того как надел, после, перед посадкой и перед выходом.',
              },
            },
            {
              q: { en: 'What is the AAD?', es: '¿Qué es el AAD?', ru: 'Что такое AAD?' },
              options: [
                { en: 'A backup that fires the reserve; pulling is still your job', es: 'Un respaldo que abre la reserva; abrir sigue siendo tu trabajo', ru: 'Страховка, которая раскрывает запасной; раскрываться всё равно тебе' },
                { en: 'The normal way your main opens', es: 'La forma normal de abrir la principal', ru: 'Обычный способ раскрыть основной' },
                { en: 'The handle you pull at 5,500 ft', es: 'La manija que tiras a 5,500 ft', ru: 'Ручка, которую тянешь на 5 500 футов' },
              ],
              answer: 0,
              why: {
                en: 'The AAD fires the reserve only as a backup. You never count on it.',
                es: 'El AAD abre la reserva solo como respaldo. Nunca cuentes con él.',
                ru: 'AAD раскрывает запасной только как страховка. Рассчитывать на него нельзя.',
              },
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- climb
    {
      id: 'climb',
      title: { en: 'Climb-out into the door', es: 'Salida a la puerta (climb-out)', ru: 'Выход в дверь' },
      blocks: [
        {
          type: 'p',
          text: {
            en: 'Six moves, always in this order. Right side first, then left. The red part is the one that moves.',
            es: 'Seis movimientos, siempre en este orden. Primero el lado derecho, luego el izquierdo. La parte roja es la que se mueve.',
            ru: 'Шесть движений, всегда в этом порядке. Сначала правая сторона, потом левая. Красным — то, что двигается.',
          },
        },
        {
          type: 'climb',
          steps: [
            {
              title: { en: 'Set up facing the propeller', es: 'Colócate mirando a la hélice', ru: 'Встаём лицом к пропеллеру' },
              sub: { en: 'Look forward, toward the prop.', es: 'Mira hacia adelante, hacia la hélice.', ru: 'Смотрим вперёд, на пропеллер.' },
            },
            {
              title: { en: 'Right hand', es: 'Mano derecha', ru: 'Правая рука' },
              sub: { en: 'On the door frame.', es: 'En el marco de la puerta.', ru: 'На проём двери.' },
            },
            {
              title: { en: 'Right foot closer', es: 'Pie derecho más cerca', ru: 'Правую ногу ближе' },
              sub: { en: 'Toward the edge of the door.', es: 'Hacia el borde de la puerta.', ru: 'К краю двери.' },
            },
            {
              title: { en: 'Left hand', es: 'Mano izquierda', ru: 'Левая рука' },
              sub: { en: 'On the frame next to the right.', es: 'En el marco, junto a la derecha.', ru: 'На проём рядом с правой.' },
            },
            {
              title: { en: 'Left foot closer', es: 'Pie izquierdo más cerca', ru: 'Левую ногу ближе' },
              sub: { en: 'Next to the right foot.', es: 'Junto al pie derecho.', ru: 'К правой ноге.' },
            },
            {
              title: { en: 'Head out: chin up, chest out', es: 'Cabeza fuera: barbilla arriba, pecho fuera', ru: 'Голову наружу: подбородок вверх, грудь вперёд' },
              sub: { en: 'You are in the exit position.', es: 'Estás en posición de salida.', ru: 'Ты в позиции для отделения.' },
            },
          ],
          captions: [
            { en: 'Face the prop', es: 'Mira a la hélice', ru: 'Лицом к пропеллеру' },
            { en: 'Right hand', es: 'Mano derecha', ru: 'Правая рука' },
            { en: 'Right foot', es: 'Pie derecho', ru: 'Правая нога' },
            { en: 'Left hand', es: 'Mano izquierda', ru: 'Левая рука' },
            { en: 'Left foot', es: 'Pie izquierdo', ru: 'Левая нога' },
            { en: 'Chin up, chest out', es: 'Barbilla arriba, pecho fuera', ru: 'Подбородок вверх, грудь вперёд' },
          ],
        },
        {
          type: 'clips',
          items: [
            {
              src: 'climb',
              caption: { en: 'Real climb-out and exit, step by step', es: 'Climb-out y salida reales, paso a paso', ru: 'Настоящий выход в дверь и отделение' },
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
            { yt: '7YxgNbzzwHk', t: 43, label: { en: 'Door and climb-out, Twin Otter', es: 'Puerta y climb-out, Twin Otter', ru: 'Дверь и выход, Twin Otter' }, credit: 'Rhythm Skydiving' },
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
                es: 'Primero el lado derecho: mano derecha al marco, pie derecho más cerca. Luego el izquierdo.',
                ru: 'Сначала правая сторона: правая рука на проём, правая нога ближе. Потом левая.',
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
                es: 'Te colocas mirando a la hélice y miras hacia adelante, hacia ella.',
                ru: 'Встаёшь лицом к пропеллеру и смотришь вперёд, на него.',
              },
            },
            {
              q: { en: 'What is the last move before you are in the exit position?', es: '¿Cuál es el último movimiento antes de estar en posición de salida?', ru: 'Какое последнее движение перед позицией для отделения?' },
              options: [
                { en: 'Sit on the edge of the door', es: 'Sentarte en el borde de la puerta', ru: 'Сесть на край двери' },
                { en: 'Look down to find the ground', es: 'Mirar abajo para ver el suelo', ru: 'Посмотреть вниз на землю' },
                { en: 'Head out: chin up, chest out', es: 'Cabeza fuera: barbilla arriba, pecho fuera', ru: 'Голову наружу: подбородок вверх, грудь вперёд' },
              ],
              answer: 2,
              why: {
                en: 'Move six is head out with chin up and chest out. Then you are in the exit position.',
                es: 'El sexto movimiento es cabeza fuera, barbilla arriba y pecho fuera. Entonces estás en posición de salida.',
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
      title: { en: 'Exit count', es: 'Conteo de salida', ru: 'Отсчёт и отделение' },
      blocks: [
        {
          type: 'exit',
          steps: [
            {
              title: { en: '"Check in"', es: '"Check in"', ru: '"Check in"' },
              sub: { en: 'Look at the first instructor. They answer "OK".', es: 'Mira al primer instructor. Te responde "OK".', ru: 'Смотришь на первого инструктора. Он отвечает "OK".' },
            },
            {
              title: { en: '"Check out"', es: '"Check out"', ru: '"Check out"' },
              sub: { en: 'Look at the second instructor. They answer "OK".', es: 'Mira al segundo instructor. Te responde "OK".', ru: 'Смотришь на второго. Он отвечает "OK".' },
            },
            {
              title: { en: '"Prop"', es: '"Prop"', ru: '"Prop"' },
              sub: { en: 'Look at the propeller, chin up.', es: 'Mira a la hélice, barbilla arriba.', ru: 'Смотришь на пропеллер, подбородок вверх.' },
            },
            {
              title: { en: '"Up" · rock out', es: '"Up" · balanceo afuera', ru: '"Up" · качок наружу' },
            },
            {
              title: { en: '"Down" · rock in', es: '"Down" · balanceo adentro', ru: '"Down" · качок внутрь' },
            },
            {
              title: { en: '"Arch!" · rock out and go', es: '"Arch!" · balanceo afuera y sal', ru: '"Arch!" · наружу и отделяемся' },
              sub: { en: 'Hips forward, chin up, arch.', es: 'Cadera adelante, barbilla arriba, arquea.', ru: 'Таз вперёд, подбородок вверх, прогиб.' },
            },
          ],
        },
        {
          type: 'callout',
          check: true,
          text: {
            en: 'Words differ by school and aircraft ("Ready, set, go", "Out, in, out"). One instructor on each side. Who you check first: <q-check/>',
            es: 'Las palabras cambian según la escuela y el avión ("Ready, set, go", "Out, in, out"). Un instructor a cada lado. A quién miras primero: <q-check/>',
            ru: 'Слова зависят от школы и самолёта ("Ready, set, go", "Out, in, out"). По инструктору слева и справа. На кого смотреть первым: <q-check/>',
          },
        },
        {
          type: 'watch',
          items: [
            { yt: 'kd8HVlIfzqc', t: 0, label: { en: 'Real AFF exit with instructors', es: 'Salida AFF real con instructores', ru: 'Настоящее отделение AFF с инструкторами' }, credit: 'Perris' },
            { yt: 'LpoztnjW5c8', t: 134, label: { en: 'Exit count explained', es: 'El conteo de salida explicado', ru: 'Объяснение отсчёта' }, credit: 'Skydive Fundamentals' },
          ],
        },
        {
          type: 'quiz',
          questions: [
            {
              q: { en: 'You say "Check in" to the first instructor. What comes back?', es: 'Le dices "Check in" al primer instructor. ¿Qué te responde?', ru: 'Ты говоришь первому инструктору "Check in". Что он отвечает?' },
              options: [
                { en: '"Go"', es: '"Go"', ru: '"Go"' },
                { en: '"OK"', es: '"OK"', ru: '"OK"' },
                { en: '"Arch"', es: '"Arch"', ru: '"Arch"' },
              ],
              answer: 1,
              why: {
                en: 'Each instructor answers "OK": first to "Check in", then the second to "Check out".',
                es: 'Cada instructor responde "OK": el primero a "Check in" y el segundo a "Check out".',
                ru: 'Каждый инструктор отвечает "OK": первый на "Check in", второй на "Check out".',
              },
            },
            {
              q: { en: 'What comes right after "Check out"?', es: '¿Qué viene justo después de "Check out"?', ru: 'Что идёт сразу после "Check out"?' },
              options: [
                { en: '"Prop": look at the propeller, chin up', es: '"Prop": mira a la hélice, barbilla arriba', ru: '"Prop": смотришь на пропеллер, подбородок вверх' },
                { en: '"Arch!" and go', es: '"Arch!" y sales', ru: '"Arch!" и отделяемся' },
                { en: '"Down": rock in', es: '"Down": balanceo adentro', ru: '"Down": качок внутрь' },
              ],
              answer: 0,
              why: {
                en: 'The order is Check in, Check out, Prop, Up, Down, Arch!',
                es: 'El orden es Check in, Check out, Prop, Up, Down, Arch!',
                ru: 'Порядок: Check in, Check out, Prop, Up, Down, Arch!',
              },
            },
            {
              q: { en: 'What does your body do on "Arch!"?', es: '¿Qué hace tu cuerpo en "Arch!"?', ru: 'Что делает тело на "Arch!"?' },
              options: [
                { en: 'Rocks in, toward the plane', es: 'Se balancea adentro, hacia el avión', ru: 'Качок внутрь, к самолёту' },
                { en: 'Waits for one more count', es: 'Espera un conteo más', ru: 'Ждёт ещё один счёт' },
                { en: 'Rocks out and goes: hips forward, chin up, arch', es: 'Se balancea afuera y sale: cadera adelante, barbilla arriba, arco', ru: 'Качок наружу и отделение: таз вперёд, подбородок вверх, прогиб' },
              ],
              answer: 2,
              why: {
                en: 'On "Arch!" you rock out and leave, with hips forward, chin up and an arch.',
                es: 'En "Arch!" te balanceas afuera y sales, con la cadera adelante, la barbilla arriba y en arco.',
                ru: 'На "Arch!" качок наружу и отделение: таз вперёд, подбородок вверх, прогиб.',
              },
            },
          ],
        },
      ],
    },
  ],
};
