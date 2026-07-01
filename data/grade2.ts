import { Grade } from "./types";

const grade2: Grade = {
  grade: 2,
  label: "Grade 2",
  emoji: "✌️",
  color: "#7C3AED",
  units: [
    {
      teks: "2.4A",
      cambridge: "Stage 2 · 2Nc1",
      emoji: "🥫",
      title: {
        en: "Adding & Subtracting",
        es: "Sumar y Restar",
        ur: "جمع اور تفریق",
      },
      vocabulary: [
        {
          id: "add",
          emoji: "➕",
          word: { en: "add", es: "sumar", ur: "جمع کرنا" },
          definition: {
            en: "put numbers together to get a bigger number",
            es: "juntar números para obtener un número más grande",
            ur: "نمبروں کو ملانا تاکہ بڑا نمبر بنے",
          },
        },
        {
          id: "subtract",
          emoji: "➖",
          word: { en: "subtract", es: "restar", ur: "تفریق کرنا" },
          definition: {
            en: "take away a number to get a smaller number",
            es: "quitar un número para obtener uno más pequeño",
            ur: "نمبر ہٹانا تاکہ چھوٹا نمبر بنے",
          },
        },
        {
          id: "sum",
          emoji: "🔢",
          word: { en: "sum", es: "la suma", ur: "حاصل جمع" },
          definition: {
            en: "the answer when you add numbers",
            es: "la respuesta cuando sumas números",
            ur: "جمع کرنے کے بعد جو جواب آتا ہے",
          },
        },
        {
          id: "difference",
          emoji: "🔢",
          word: { en: "difference", es: "la diferencia", ur: "فرق" },
          definition: {
            en: "the answer when you subtract numbers",
            es: "la respuesta cuando restas números",
            ur: "تفریق کرنے کے بعد جو جواب آتا ہے",
          },
        },
        {
          id: "equals",
          emoji: "🟰",
          word: { en: "equals", es: "igual a", ur: "برابر ہے" },
          definition: {
            en: "has the same value as",
            es: "tiene el mismo valor que",
            ur: "جس کی قیمت ایک جیسی ہو",
          },
        },
      ],
      lesson: {
        en: "🥫 **Math can help our community!** Our school is running a food drive to help families who need food. When we **add**, we count how much we collected together. When we **subtract**, we find out how much more we still need.\n\nExample: Our class brought 6 cans on Monday and 5 cans on Tuesday. 6 + 5 = **11 cans total!** The food bank needs 20 cans. 20 - 11 = **9 more cans to go!** You are helping real families with your math! 💪",
        es: "🥫 **¡Las matemáticas pueden ayudar a nuestra comunidad!** Nuestra escuela tiene una colecta de alimentos para ayudar a familias que necesitan comida. Cuando **sumamos**, contamos todo lo que recolectamos juntos. Cuando **restamos**, averiguamos cuánto más necesitamos.\n\nEjemplo: Nuestra clase trajo 6 latas el lunes y 5 el martes. 6 + 5 = **¡11 latas en total!** El banco de alimentos necesita 20 latas. 20 - 11 = **¡9 latas más!** ¡Estás ayudando a familias reales con tus matemáticas! 💪",
        ur: "🥫 **ریاضی ہماری کمیونٹی کی مدد کر سکتی ہے!** ہمارا اسکول کھانے کی مہم چلا رہا ہے تاکہ ضرورتمند خاندانوں کی مدد ہو سکے۔ جب ہم **جمع** کرتے ہیں تو ہم دیکھتے ہیں کہ مل کر کتنا جمع کیا۔ جب **تفریق** کرتے ہیں تو پتہ چلتا ہے کہ ابھی کتنا اور چاہیے۔\n\nمثال: ہماری کلاس نے پیر کو 6 ڈبے اور منگل کو 5 ڈبے لائے۔ 6 + 5 = **کل 11 ڈبے!** فوڈ بینک کو 20 ڈبے چاہیے۔ 20 - 11 = **9 مزید ڈبے چاہیے!** تم اپنی ریاضی سے اصلی خاندانوں کی مدد کر رہے ہو! 💪",
      },
      exercises: [
        {
          id: "ex-2.4A-1",
          type: "multiple-choice",
          prompt: {
            en: "🥫 Your class collected 7 cans of food on Monday and 6 cans on Friday for the food drive. How many cans did you collect in all?",
            es: "🥫 Tu clase recolectó 7 latas el lunes y 6 latas el viernes para la colecta. ¿Cuántas latas recolectaron en total?",
            ur: "🥫 تمہاری کلاس نے فوڈ ڈرائیو کے لیے پیر کو 7 ڈبے اور جمعہ کو 6 ڈبے جمع کیے۔ کل کتنے ڈبے جمع ہوئے؟",
          },
          choices: [
            { en: "12", es: "12", ur: "12" },
            { en: "13", es: "13", ur: "13" },
            { en: "14", es: "14", ur: "14" },
            { en: "11", es: "11", ur: "11" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-2.4A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Students planted 15 trees in the school garden to help clean the air. A storm knocked down 6 trees. How many trees are still standing?",
            es: "🌱 Los estudiantes plantaron 15 árboles en el jardín escolar para limpiar el aire. Una tormenta derribó 6 árboles. ¿Cuántos árboles siguen en pie?",
            ur: "🌱 طلبا نے ہوا صاف کرنے کے لیے اسکول کے باغ میں 15 درخت لگائے۔ طوفان نے 6 درخت گرا دیے۔ ابھی کتنے درخت کھڑے ہیں؟",
          },
          choices: [
            { en: "8", es: "8", ur: "8" },
            { en: "10", es: "10", ur: "10" },
            { en: "9", es: "9", ur: "9" },
            { en: "7", es: "7", ur: "7" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.4A-3",
          type: "true-false",
          prompt: {
            en: "♻️ Our class recycled 8 bottles in the morning and 8 more in the afternoon. The sum is 16 bottles kept out of the trash!",
            es: "♻️ Nuestra clase recicló 8 botellas por la mañana y 8 más por la tarde. ¡La suma es 16 botellas que no fueron a la basura!",
            ur: "♻️ ہماری کلاس نے صبح 8 بوتلیں اور دوپہر میں 8 مزید بوتلیں ری سائیکل کیں۔ حاصل جمع 16 بوتلیں ہیں جو کوڑے میں نہیں گئیں!",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "qz-2.4A-1",
          type: "multiple-choice",
          prompt: {
            en: "🥫 The food bank had 20 bags of rice. They gave 13 bags to families in need. How many bags are left?",
            es: "🥫 El banco de alimentos tenía 20 bolsas de arroz. Repartieron 13 bolsas a familias que las necesitaban. ¿Cuántas bolsas quedan?",
            ur: "🥫 فوڈ بینک کے پاس چاول کے 20 تھیلے تھے۔ انہوں نے ضرورتمند خاندانوں کو 13 تھیلے دیے۔ کتنے تھیلے بچے؟",
          },
          choices: [
            { en: "8", es: "8", ur: "8" },
            { en: "6", es: "6", ur: "6" },
            { en: "9", es: "9", ur: "9" },
            { en: "7", es: "7", ur: "7" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-2.4A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌳 Grade 1 planted 9 trees and Grade 2 planted 7 trees for Earth Day. How many trees did both grades plant together?",
            es: "🌳 El primer grado plantó 9 árboles y el segundo grado plantó 7 árboles por el Día de la Tierra. ¿Cuántos árboles plantaron los dos grados juntos?",
            ur: "🌳 پہلی جماعت نے یوم ارض پر 9 درخت لگائے اور دوسری جماعت نے 7 درخت لگائے۔ دونوں جماعتوں نے مل کر کتنے درخت لگائے؟",
          },
          choices: [
            { en: "15", es: "15", ur: "15" },
            { en: "17", es: "17", ur: "17" },
            { en: "16", es: "16", ur: "16" },
            { en: "14", es: "14", ur: "14" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-2.4A-3",
          type: "multiple-choice",
          prompt: {
            en: "♻️ Our school collected 18 cans for recycling. We already sorted 9 of them. How many cans still need to be sorted?",
            es: "♻️ Nuestra escuela juntó 18 latas para reciclar. Ya separamos 9. ¿Cuántas latas faltan por separar?",
            ur: "♻️ ہمارے اسکول نے ری سائیکلنگ کے لیے 18 ڈبے جمع کیے۔ ہم نے پہلے ہی 9 چھانٹ لیے۔ ابھی کتنے ڈبے چھانٹنے باقی ہیں؟",
          },
          choices: [
            { en: "10", es: "10", ur: "10" },
            { en: "8", es: "8", ur: "8" },
            { en: "7", es: "7", ur: "7" },
            { en: "9", es: "9", ur: "9" },
          ],
          correctIndex: 3,
        },
      ],
      fluency: {
        instructions: {
          en: "⚡ Quick math facts! Solve as many as you can before time runs out. Type the answer and press Enter.",
          es: "⚡ ¡Datos matemáticos rápidos! Resuelve tantos como puedas antes de que se acabe el tiempo. Escribe la respuesta y presiona Enter.",
          ur: "⚡ فوری ریاضی کے حقائق! وقت ختم ہونے سے پہلے جتنے ممکن ہوں حل کرو۔ جواب لکھو اور Enter دباؤ۔",
        },
        timeLimitSeconds: 60,
        problems: [
          { id: "fl-2.4A-1", prompt: "5 + 3", answer: 8 },
          { id: "fl-2.4A-2", prompt: "9 - 4", answer: 5 },
          { id: "fl-2.4A-3", prompt: "6 + 6", answer: 12 },
          { id: "fl-2.4A-4", prompt: "10 - 7", answer: 3 },
          { id: "fl-2.4A-5", prompt: "8 + 5", answer: 13 },
          { id: "fl-2.4A-6", prompt: "12 - 5", answer: 7 },
          { id: "fl-2.4A-7", prompt: "7 + 7", answer: 14 },
          { id: "fl-2.4A-8", prompt: "15 - 9", answer: 6 },
          { id: "fl-2.4A-9", prompt: "4 + 9", answer: 13 },
          { id: "fl-2.4A-10", prompt: "11 - 6", answer: 5 },
          { id: "fl-2.4A-11", prompt: "8 + 8", answer: 16 },
          { id: "fl-2.4A-12", prompt: "14 - 8", answer: 6 },
          { id: "fl-2.4A-13", prompt: "6 + 9", answer: 15 },
          { id: "fl-2.4A-14", prompt: "13 - 7", answer: 6 },
          { id: "fl-2.4A-15", prompt: "10 + 10", answer: 20 },
        ],
      },
      wordProblems: [
        {
          id: "wp-2.4A-1",
          emoji: "🌳🌱",
          scene: "Reforestation project at Klyde Warren Park, Dallas",
          prompt: {
            en: "Rangers planted 13 oak trees in the morning and 6 pine trees in the afternoon. How many trees were planted in all?",
            es: "Los guardabosques plantaron 13 robles por la mañana y 6 pinos por la tarde. ¿Cuántos árboles se plantaron en total?",
            ur: "رینجرز نے صبح 13 بلوط اور دوپہر میں 6 صنوبر کے درخت لگائے۔ کل کتنے درخت لگائے گئے؟",
          },
          answer: 19,
          answerUnit: { en: "trees", es: "árboles", ur: "درخت" },
        },
        {
          id: "wp-2.4A-2",
          emoji: "🐝🍯",
          scene: "Bee rescue shelter near Houston, Texas",
          prompt: {
            en: "The shelter had 15 bee houses. Volunteers installed 8 more to help save the bees. How many bee houses are there now?",
            es: "El refugio tenía 15 casas para abejas. Los voluntarios instalaron 8 más para salvar las abejas. ¿Cuántas casas para abejas hay ahora?",
            ur: "پناہ گاہ میں 15 مکھیوں کے گھر تھے۔ رضاکاروں نے 8 مزید نصب کیے۔ اب کتنے گھر ہیں؟",
          },
          answer: 23,
          answerUnit: { en: "bee houses", es: "casas para abejas", ur: "مکھیوں کے گھر" },
        },
        {
          id: "wp-2.4A-3",
          emoji: "♻️🥤",
          scene: "Lincoln Elementary recycling drive, Dallas ISD",
          prompt: {
            en: "Students collected 17 plastic bottles and 8 aluminum cans. How many recyclable items did they collect altogether?",
            es: "Los estudiantes recolectaron 17 botellas de plástico y 8 latas de aluminio. ¿Cuántos artículos reciclables recolectaron en total?",
            ur: "طلبہ نے 17 پلاسٹک بوتلیں اور 8 ایلومینیم ڈبے جمع کیے۔ انہوں نے مجموعی طور پر کتنی اشیاء جمع کیں؟",
          },
          answer: 25,
          answerUnit: { en: "items", es: "artículos", ur: "اشیاء" },
        },
        {
          id: "wp-2.4A-4",
          emoji: "🌊🐢",
          scene: "Beach cleanup at South Padre Island, Texas",
          prompt: {
            en: "Volunteers picked up 19 pieces of trash from the beach. They already bagged 11 pieces. How many pieces are still left to bag?",
            es: "Los voluntarios recogieron 19 pedazos de basura de la playa. Ya embolsaron 11 pedazos. ¿Cuántos pedazos quedan por embolsar?",
            ur: "رضاکاروں نے ساحل سے کوڑے کے 19 ٹکڑے اٹھائے۔ 11 تھیلوں میں ڈال دیے۔ کتنے ابھی باقی ہیں؟",
          },
          answer: 8,
          answerUnit: { en: "pieces", es: "pedazos", ur: "ٹکڑے" },
        },
        {
          id: "wp-2.4A-5",
          emoji: "🌻🌿",
          scene: "Community garden fighting food insecurity in South Dallas",
          prompt: {
            en: "The garden grew 16 tomato plants. A storm knocked down 7 of them. How many tomato plants are still standing?",
            es: "El jardín cultivó 16 plantas de tomate. Una tormenta derribó 7 de ellas. ¿Cuántas plantas de tomate siguen en pie?",
            ur: "باغ میں ٹماٹر کے 16 پودے اگائے گئے۔ ایک طوفان نے 7 گرا دیے۔ ابھی کتنے کھڑے ہیں؟",
          },
          answer: 9,
          answerUnit: { en: "plants", es: "plantas", ur: "پودے" },
        },
      ],
    },

    {
      teks: "2.7A",
      cambridge: "Stage 2 · 2Nn5",
      emoji: "🧦",
      title: {
        en: "Even & Odd Numbers",
        es: "Números Pares e Impares",
        ur: "جفت اور طاق نمبر",
      },
      vocabulary: [
        {
          id: "even",
          emoji: "2️⃣",
          word: { en: "even", es: "par", ur: "جفت" },
          definition: {
            en: "a number you can split into two equal groups — like 4, 6, 8",
            es: "un número que puedes dividir en dos grupos iguales — como 4, 6, 8",
            ur: "وہ نمبر جسے دو برابر حصوں میں بانٹ سکتے ہیں — جیسے 4، 6، 8",
          },
        },
        {
          id: "odd",
          emoji: "1️⃣",
          word: { en: "odd", es: "impar", ur: "طاق" },
          definition: {
            en: "a number that has one left over when split into pairs — like 3, 5, 7",
            es: "un número que tiene uno sobrante al dividirlo en pares — como 3, 5, 7",
            ur: "وہ نمبر جو جوڑوں میں بانٹنے پر ایک بچ جائے — جیسے 3، 5، 7",
          },
        },
        {
          id: "pairs",
          emoji: "👫",
          word: { en: "pairs", es: "pares", ur: "جوڑے" },
          definition: {
            en: "groups of two",
            es: "grupos de dos",
            ur: "دو دو کے گروپ",
          },
        },
        {
          id: "equal",
          emoji: "⚖️",
          word: { en: "equal", es: "igual", ur: "برابر" },
          definition: {
            en: "the same amount in each group — fair for everyone",
            es: "la misma cantidad en cada grupo — justo para todos",
            ur: "ہر گروپ میں ایک جیسی تعداد — سب کے لیے انصاف",
          },
        },
      ],
      lesson: {
        en: "🧦 **Fairness starts with math!** Imagine your class collected 14 warm blankets to donate. Can every family get an equal share? If the number is **even**, we can split things into two fair groups — nobody is left out! If the number is **odd**, one group gets more — that's not fair.\n\nEven numbers end in 0, 2, 4, 6, or 8. Odd numbers end in 1, 3, 5, 7, or 9. When we share things equally in our community, we use even numbers to make sure everyone is treated fairly! ⚖️",
        es: "🧦 **¡La justicia empieza con las matemáticas!** Imagina que tu clase juntó 14 cobijas para donar. ¿Puede cada familia recibir la misma cantidad? Si el número es **par**, podemos dividir las cosas en dos grupos justos — ¡nadie queda fuera! Si el número es **impar**, un grupo recibe más — eso no es justo.\n\nLos números pares terminan en 0, 2, 4, 6 u 8. Los impares terminan en 1, 3, 5, 7 o 9. ¡Cuando compartimos cosas en nuestra comunidad, usamos números pares para que todos sean tratados justamente! ⚖️",
        ur: "🧦 **انصاف ریاضی سے شروع ہوتا ہے!** سوچو تمہاری کلاس نے دینے کے لیے 14 گرم کمبل جمع کیے۔ کیا ہر خاندان کو برابر حصہ مل سکتا ہے؟ اگر نمبر **جفت** ہو تو ہم چیزیں دو برابر حصوں میں بانٹ سکتے ہیں — کوئی باہر نہیں رہتا! اگر نمبر **طاق** ہو تو ایک گروپ کو زیادہ ملتا ہے — یہ انصاف نہیں۔\n\nجفت نمبر 0، 2، 4، 6، یا 8 پر ختم ہوتے ہیں۔ طاق نمبر 1، 3، 5، 7، یا 9 پر ختم ہوتے ہیں۔ جب ہم کمیونٹی میں چیزیں بانٹتے ہیں تو جفت نمبر استعمال کرتے ہیں تاکہ سب کے ساتھ انصاف ہو! ⚖️",
      },
      exercises: [
        {
          id: "ex-2.7A-1",
          type: "multiple-choice",
          prompt: {
            en: "🧣 Your class collected 14 scarves to give to children in need. Is 14 even or odd? Can every child get a fair share if we split into 2 equal groups?",
            es: "🧣 Tu clase juntó 14 bufandas para dar a niños que las necesitan. ¿14 es par o impar? ¿Puede cada niño recibir una parte justa si los dividimos en 2 grupos iguales?",
            ur: "🧣 تمہاری کلاس نے ضرورتمند بچوں کو دینے کے لیے 14 اسکارف جمع کیے۔ کیا 14 جفت ہے یا طاق؟ کیا 2 برابر گروپ بنا کر ہر بچے کو برابر حصہ مل سکتا ہے؟",
          },
          choices: [
            { en: "Even — yes, it's fair! ✅", es: "Par — ¡sí, es justo! ✅", ur: "جفت — ہاں، انصاف ہے! ✅" },
            { en: "Odd — no, not fair ❌", es: "Impar — no, no es justo ❌", ur: "طاق — نہیں، انصاف نہیں ❌" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-2.7A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 The garden club has 27 seed packets to hand out equally to two classrooms. Is 27 even or odd?",
            es: "🌱 El club de jardinería tiene 27 sobres de semillas para repartir por igual entre dos salones. ¿27 es par o impar?",
            ur: "🌱 گارڈن کلب کے پاس دو کلاسوں میں برابر بانٹنے کے لیے 27 بیجوں کے پیکٹ ہیں۔ کیا 27 جفت ہے یا طاق؟",
          },
          choices: [
            { en: "Even", es: "Par", ur: "جفت" },
            { en: "Odd — one classroom gets more", es: "Impar — un salón recibe más", ur: "طاق — ایک کلاس کو زیادہ ملے گا" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "qz-2.7A-1",
          type: "multiple-choice",
          prompt: {
            en: "🥤 The school collected 20 water bottles for a hot-day giveaway. Which word best describes 20?",
            es: "🥤 La escuela juntó 20 botellas de agua para repartirlas en un día de calor. ¿Qué palabra describe mejor al 20?",
            ur: "🥤 اسکول نے گرم دن پر تقسیم کرنے کے لیے 20 پانی کی بوتلیں جمع کیں۔ 20 کو بہترین طریقے سے کون سا لفظ بیان کرتا ہے؟",
          },
          choices: [
            { en: "Odd", es: "Impar", ur: "طاق" },
            { en: "Even", es: "Par", ur: "جفت" },
            { en: "Sum", es: "Suma", ur: "حاصل جمع" },
            { en: "Difference", es: "Diferencia", ur: "فرق" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-2.7A-2",
          type: "true-false",
          prompt: {
            en: "♻️ Our class put 15 items in the recycling bin today. Because 15 is odd, we cannot split them into two perfectly equal groups.",
            es: "♻️ Nuestra clase puso hoy 15 artículos en el contenedor de reciclaje. Como 15 es impar, no podemos dividirlos en dos grupos perfectamente iguales.",
            ur: "♻️ ہماری کلاس نے آج ری سائیکلنگ بن میں 15 چیزیں ڈالیں۔ چونکہ 15 طاق ہے، ہم انہیں دو بالکل برابر گروپوں میں نہیں بانٹ سکتے۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
    },

    {
      teks: "2.8A",
      cambridge: "Stage 2 · 2Gs1",
      emoji: "☀️",
      title: {
        en: "2D Shapes",
        es: "Figuras 2D",
        ur: "دو جہتی شکلیں",
      },
      vocabulary: [
        {
          id: "circle",
          emoji: "⭕",
          word: { en: "circle", es: "círculo", ur: "دائرہ" },
          definition: {
            en: "a round shape with no corners — like the sun or a wheel",
            es: "una figura redonda sin esquinas — como el sol o una rueda",
            ur: "گول شکل جس کے کوئی کونے نہ ہوں — جیسے سورج یا پہیہ",
          },
        },
        {
          id: "square",
          emoji: "🟥",
          word: { en: "square", es: "cuadrado", ur: "مربع" },
          definition: {
            en: "a shape with 4 equal sides — like a garden plot",
            es: "una figura con 4 lados iguales — como un cuadro de jardín",
            ur: "وہ شکل جس کے 4 برابر اطراف ہوں — جیسے باغ کا ایک حصہ",
          },
        },
        {
          id: "triangle",
          emoji: "🔺",
          word: { en: "triangle", es: "triángulo", ur: "تکون" },
          definition: {
            en: "a shape with 3 sides — like a roof that catches rainwater",
            es: "una figura con 3 lados — como un techo que recoge agua de lluvia",
            ur: "وہ شکل جس کے 3 اطراف ہوں — جیسے وہ چھت جو بارش کا پانی جمع کرتی ہے",
          },
        },
        {
          id: "rectangle",
          emoji: "🟦",
          word: { en: "rectangle", es: "rectángulo", ur: "مستطیل" },
          definition: {
            en: "a shape with 4 sides where opposite sides are equal — like a solar panel",
            es: "una figura con 4 lados donde los lados opuestos son iguales — como un panel solar",
            ur: "وہ شکل جس کے 4 اطراف ہوں اور آمنے سامنے والے اطراف برابر ہوں — جیسے سولر پینل",
          },
        },
        {
          id: "sides",
          emoji: "📐",
          word: { en: "sides", es: "lados", ur: "اطراف" },
          definition: {
            en: "the straight lines that make up a shape",
            es: "las líneas rectas que forman una figura",
            ur: "سیدھی لکیریں جو شکل بناتی ہیں",
          },
        },
      ],
      lesson: {
        en: "☀️ **Shapes help save our planet!** Did you know that solar panels — the machines that make electricity from sunlight — are shaped like **rectangles**? Community gardens use **squares** to grow food for neighbors. Rooftops shaped like **triangles** collect rainwater so we don't waste it. Even wind turbines spin in a **circle**!\n\nShapes are everywhere in the tools people use to take care of our Earth. When you learn shapes, you are learning the building blocks of a better world! 🌍",
        es: "☀️ **¡Las figuras ayudan a salvar nuestro planeta!** ¿Sabías que los paneles solares — las máquinas que producen electricidad con la luz del sol — tienen forma de **rectángulo**? Los jardines comunitarios usan **cuadrados** para cultivar comida para los vecinos. Los techos con forma de **triángulo** recogen agua de lluvia para no desperdiciarla. ¡Hasta las turbinas de viento giran en **círculo**!\n\nLas figuras están en todas partes en las herramientas que usamos para cuidar nuestra Tierra. ¡Cuando aprendes figuras, estás aprendiendo los bloques para construir un mundo mejor! 🌍",
        ur: "☀️ **شکلیں ہماری زمین بچانے میں مدد کرتی ہیں!** کیا تم جانتے ہو کہ سولر پینل — وہ مشینیں جو سورج کی روشنی سے بجلی بناتی ہیں — **مستطیل** شکل کے ہوتے ہیں؟ کمیونٹی گارڈن پڑوسیوں کے لیے کھانا اگانے کے لیے **مربع** استعمال کرتے ہیں۔ **تکون** شکل کی چھتیں بارش کا پانی جمع کرتی ہیں تاکہ ہم اسے ضائع نہ کریں۔ حتیٰ کہ ونڈ ٹربائن بھی **دائرے** میں گھومتی ہے!\n\nہمارے سیارے کی دیکھ بھال کے اوزاروں میں شکلیں ہر جگہ ہیں۔ جب تم شکلیں سیکھتے ہو، تم ایک بہتر دنیا کی بنیاد سیکھ رہے ہو! 🌍",
      },
      exercises: [
        {
          id: "ex-2.8A-1",
          type: "multiple-choice",
          prompt: {
            en: "☀️ A solar panel on the school roof makes clean energy. Solar panels have 4 sides and the opposite sides are equal. What shape is a solar panel?",
            es: "☀️ Un panel solar en el techo de la escuela produce energía limpia. Los paneles solares tienen 4 lados y los lados opuestos son iguales. ¿Qué forma tiene un panel solar?",
            ur: "☀️ اسکول کی چھت پر ایک سولر پینل صاف توانائی بناتا ہے۔ سولر پینل کے 4 اطراف ہوتے ہیں اور آمنے سامنے والے اطراف برابر ہوتے ہیں۔ سولر پینل کی شکل کیا ہے؟",
          },
          choices: [
            { en: "Circle", es: "Círculo", ur: "دائرہ" },
            { en: "Triangle", es: "Triángulo", ur: "تکون" },
            { en: "Rectangle", es: "Rectángulo", ur: "مستطیل" },
            { en: "Square", es: "Cuadrado", ur: "مربع" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.8A-2",
          type: "true-false",
          prompt: {
            en: "🌱 The community garden plots are shaped like squares — 4 equal sides. A circle has 0 sides.",
            es: "🌱 Los cuadros del jardín comunitario tienen forma de cuadrado — 4 lados iguales. Un círculo tiene 0 lados.",
            ur: "🌱 کمیونٹی گارڈن کے حصے مربع شکل کے ہیں — 4 برابر اطراف۔ دائرے کے 0 اطراف ہوتے ہیں۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "qz-2.8A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌬️ Wind turbines spin to make clean electricity. The spinning part makes a circle shape. How many sides does a circle have?",
            es: "🌬️ Las turbinas de viento giran para producir electricidad limpia. La parte que gira hace una figura circular. ¿Cuántos lados tiene un círculo?",
            ur: "🌬️ ونڈ ٹربائن صاف بجلی بنانے کے لیے گھومتی ہے۔ گھومنے والا حصہ دائرہ بناتا ہے۔ دائرے کے کتنے اطراف ہوتے ہیں؟",
          },
          choices: [
            { en: "1", es: "1", ur: "1" },
            { en: "3", es: "3", ur: "3" },
            { en: "4", es: "4", ur: "4" },
            { en: "0", es: "0", ur: "0" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-2.8A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌧️ A rooftop shaped like a triangle collects rainwater for the garden. How many sides does a triangle have?",
            es: "🌧️ Un techo con forma de triángulo recoge agua de lluvia para el jardín. ¿Cuántos lados tiene un triángulo?",
            ur: "🌧️ تکون شکل کی چھت باغ کے لیے بارش کا پانی جمع کرتی ہے۔ تکون کے کتنے اطراف ہوتے ہیں؟",
          },
          choices: [
            { en: "2", es: "2", ur: "2" },
            { en: "3", es: "3", ur: "3" },
            { en: "4", es: "4", ur: "4" },
            { en: "5", es: "5", ur: "5" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-2.8A-3",
          type: "multiple-choice",
          prompt: {
            en: "🥫 Which shape has 4 equal sides — like a fair garden plot where every student gets the same space?",
            es: "🥫 ¿Qué figura tiene 4 lados iguales — como un cuadro de jardín justo donde cada estudiante tiene el mismo espacio?",
            ur: "🥫 کون سی شکل کے 4 برابر اطراف ہیں — جیسے منصفانہ باغ کا ٹکڑا جہاں ہر طالب علم کو برابر جگہ ملے؟",
          },
          choices: [
            { en: "Circle", es: "Círculo", ur: "دائرہ" },
            { en: "Triangle", es: "Triángulo", ur: "تکون" },
            { en: "Rectangle", es: "Rectángulo", ur: "مستطیل" },
            { en: "Square", es: "Cuadrado", ur: "مربع" },
          ],
          correctIndex: 3,
        },
      ],
      story: {
        title: {
          en: "Leo's Flying Machine",
          es: "La Máquina Voladora de Leo",
          ur: "لیو کی اڑن مشین",
        },
        pages: [
          {
            emoji: "📓",
            text: {
              en: "Young Leo sat in his workshop in Florence, sketching in his notebook. \"Today,\" he said, \"I will build a flying machine!\"",
              es: "El joven Leo estaba sentado en su taller en Florencia, dibujando en su cuaderno. \"Hoy,\" dijo, \"¡voy a construir una máquina voladora!\"",
              ur: "نوجوان لیو فلورنس میں اپنی ورکشاپ میں بیٹھا اپنی کاپی میں خاکہ بنا رہا تھا۔ \"آج،\" اس نے کہا، \"میں ایک اڑن مشین بناؤں گا!\"",
            },
          },
          {
            emoji: "🔺",
            text: {
              en: "First, Leo needed wings — wide and strong, with 3 straight sides that could cut through the wind. \"A triangle!\" he said, and sketched two big ones.",
              es: "Primero, Leo necesitaba alas — anchas y fuertes, con 3 lados rectos que pudieran cortar el viento. \"¡Un triángulo!\" dijo, y dibujó dos grandes.",
              ur: "پہلے، لیو کو پر چاہیے تھے — چوڑے اور مضبوط، 3 سیدھے اطراف کے ساتھ جو ہوا کو کاٹ سکیں۔ \"تکون!\" اس نے کہا، اور دو بڑی تکونیں بنائیں۔",
            },
          },
          {
            emoji: "🟦",
            text: {
              en: "Next, the machine needed a body to hold everything together — 4 sides, with opposite sides equal, so it would stay balanced. \"A rectangle!\" said Leo.",
              es: "Después, la máquina necesitaba un cuerpo para sostener todo junto — 4 lados, con los lados opuestos iguales, para que se mantuviera equilibrada. \"¡Un rectángulo!\" dijo Leo.",
              ur: "پھر، مشین کو سب کچھ جوڑے رکھنے کے لیے ایک باڈی چاہیے تھی — 4 اطراف، جس کے آمنے سامنے والے اطراف برابر ہوں، تاکہ توازن رہے۔ \"مستطیل!\" لیو نے کہا۔",
            },
          },
          {
            emoji: "⭕",
            text: {
              en: "Leo tried to roll the machine out of the workshop, but it would not move. \"I need wheels — round, with no corners, so they can spin.\" He drew 2 circles.",
              es: "Leo trató de rodar la máquina fuera del taller, pero no se movía. \"Necesito ruedas — redondas, sin esquinas, para que puedan girar.\" Dibujó 2 círculos.",
              ur: "لیو نے مشین کو ورکشاپ سے باہر نکالنے کی کوشش کی، مگر وہ حرکت نہ کر سکی۔ \"مجھے پہیے چاہئیں — گول، بغیر کونوں کے، تاکہ وہ گھوم سکیں۔\" اس نے 2 دائرے بنائے۔",
            },
          },
          {
            emoji: "🟥",
            text: {
              en: "Last, Leo wanted a small flag on top, fair and even on every side. \"4 equal sides... a square!\" He painted it bright red.",
              es: "Por último, Leo quería una pequeña bandera arriba, justa e igual en cada lado. \"4 lados iguales... ¡un cuadrado!\" La pintó de rojo brillante.",
              ur: "آخر میں، لیو چاہتا تھا کہ اوپر ایک چھوٹا جھنڈا ہو، جو ہر طرف سے برابر اور منصفانہ ہو۔ \"4 برابر اطراف... مربع!\" اس نے اسے چمکدار سرخ رنگ دیا۔",
            },
          },
          {
            emoji: "🔧",
            text: {
              en: "Leo put the pieces together: triangle wings, a rectangle body, circle wheels, and a square flag. Every shape had its own job to do.",
              es: "Leo unió las piezas: alas triangulares, un cuerpo rectangular, ruedas circulares y una bandera cuadrada. Cada figura tenía su propio trabajo.",
              ur: "لیو نے سب حصے جوڑے: تکون پر، مستطیل باڈی، دائرے کے پہیے، اور مربع جھنڈا۔ ہر شکل کا اپنا کام تھا۔",
            },
          },
          {
            emoji: "🪽",
            text: {
              en: "He rolled the machine up to the rooftop on its circle wheels, and the wind caught the triangle wings. The flying machine lifted into the sky!",
              es: "Subió la máquina al techo sobre sus ruedas circulares, y el viento atrapó las alas triangulares. ¡La máquina voladora se elevó hacia el cielo!",
              ur: "اس نے مشین کو گول پہیوں پر چھت تک لے گیا، اور ہوا نے تکون پروں کو پکڑ لیا۔ اڑن مشین آسمان کی طرف اڑ گئی!",
            },
          },
          {
            emoji: "✨",
            text: {
              en: "\"Every shape has a job!\" Leo laughed, watching it soar. \"Round things roll, triangles cut the wind, and equal sides keep things fair and strong.\"",
              es: "\"¡Cada figura tiene un trabajo!\" rio Leo, mirándola volar. \"Las cosas redondas ruedan, los triángulos cortan el viento, y los lados iguales mantienen las cosas justas y fuertes.\"",
              ur: "\"ہر شکل کا ایک کام ہوتا ہے!\" لیو نے ہنستے ہوئے کہا، اسے اڑتا دیکھ کر۔ \"گول چیزیں لڑھکتی ہیں، تکونیں ہوا کاٹتی ہیں، اور برابر اطراف چیزوں کو منصفانہ اور مضبوط رکھتے ہیں۔\"",
            },
          },
        ],
      },
    },
    {
      teks: "2.4C",
      cambridge: "Stage 2 · 2Nc3",
      emoji: "📊",
      title: {
        en: "Word Problems: Add & Subtract",
        es: "Problemas de Suma y Resta",
        ur: "جمع اور تفریق کے مسائل",
      },
      vocabulary: [
        {
          id: "regroup",
          emoji: "🔄",
          word: { en: "regroup", es: "reagrupar", ur: "دوبارہ گروہ بندی" },
          definition: {
            en: "trade 10 ones for 1 ten, or 10 tens for 1 hundred, when adding or subtracting",
            es: "cambiar 10 unidades por 1 decena, o 10 decenas por 1 centena, al sumar o restar",
            ur: "جمع یا تفریق کرتے وقت 10 اکائیوں کو 1 دہائی سے بدلنا",
          },
        },
        {
          id: "hundred",
          emoji: "💯",
          word: { en: "hundred", es: "centena", ur: "سو" },
          definition: {
            en: "a group of one hundred — 10 tens make 1 hundred",
            es: "un grupo de cien — 10 decenas forman 1 centena",
            ur: "ایک سو کا گروہ — 10 دہائیاں مل کر 1 سو بناتی ہیں",
          },
        },
        {
          id: "equation",
          emoji: "⚖️",
          word: { en: "equation", es: "ecuación", ur: "مساوات" },
          definition: {
            en: "a math sentence showing two amounts are equal, using an = sign",
            es: "una oración matemática que muestra que dos cantidades son iguales, usando el signo =",
            ur: "ایک ریاضی جملہ جو دو مقداروں کی مساوات کو = علامت سے ظاہر کرتا ہے",
          },
        },
        {
          id: "altogether",
          emoji: "🤝",
          word: { en: "altogether", es: "en total", ur: "سب مل کر" },
          definition: {
            en: "the total when you combine all amounts together",
            es: "el total cuando combinas todas las cantidades juntas",
            ur: "تمام مقداروں کو ملانے پر حاصل ہونے والا مجموعہ",
          },
        },
        {
          id: "strategy",
          emoji: "💡",
          word: { en: "strategy", es: "estrategia", ur: "حکمت عملی" },
          definition: {
            en: "a plan or method you use to solve a math problem",
            es: "un plan o método que usas para resolver un problema matemático",
            ur: "وہ منصوبہ یا طریقہ جو آپ ریاضی کا مسئلہ حل کرنے کے لیے استعمال کرتے ہیں",
          },
        },
      ],
      lesson: {
        en: "When we add or subtract numbers within 1,000, we use place value strategies. Break numbers into hundreds, tens, and ones. Sometimes we regroup — that means trading 10 ones for 1 ten. Word problems tell a story. Look for key words: 'in all' and 'altogether' mean add. 'Left,' 'remain,' and 'how many more' often mean subtract. Always write an equation to show your work: 245 + 132 = 377.",
        es: "Cuando sumamos o restamos números hasta 1,000, usamos estrategias de valor posicional. Separamos los números en centenas, decenas y unidades. A veces reagrupamos — eso significa cambiar 10 unidades por 1 decena. Los problemas escritos cuentan una historia. Busca palabras clave: 'en total' y 'en conjunto' significan sumar. 'Quedan' y '¿cuántos más?' generalmente significan restar.",
        ur: "جب ہم 1,000 تک کے نمبر جمع یا تفریق کرتے ہیں تو مقامی قدر کی حکمت عملی استعمال کریں۔ نمبروں کو سینکڑوں، دہائیوں اور اکائیوں میں توڑیں۔ کبھی کبھی دوبارہ گروہ بندی کریں — یعنی 10 اکائیوں کو 1 دہائی سے بدلنا۔ الفاظ کے مسائل میں 'سب مل کر' جمع کا اشارہ ہے اور 'باقی' تفریق کا۔",
      },
      exercises: [
        {
          id: "ex-2.4C-1",
          type: "multiple-choice",
          prompt: {
            en: "🌳 A park has 245 oak trees and 132 elm trees. How many trees are in the park in all?",
            es: "🌳 Un parque tiene 245 robles y 132 olmos. ¿Cuántos árboles hay en el parque en total?",
            ur: "🌳 ایک پارک میں 245 بلوط اور 132 ایلم کے درخت ہیں۔ کل کتنے درخت ہیں؟",
          },
          choices: [
            { en: "377", es: "377", ur: "377" },
            { en: "367", es: "367", ur: "367" },
            { en: "387", es: "387", ur: "387" },
            { en: "357", es: "357", ur: "357" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-2.4C-2",
          type: "multiple-choice",
          prompt: {
            en: "♻️ Students collected 350 cans for the recycling drive. They already recycled 120. How many cans are left to recycle?",
            es: "♻️ Los estudiantes recolectaron 350 latas. Ya reciclaron 120. ¿Cuántas latas quedan por reciclar?",
            ur: "♻️ طلبہ نے 350 ڈبے جمع کیے۔ 120 ری سائیکل کر دیے۔ ابھی کتنے باقی ہیں؟",
          },
          choices: [
            { en: "220", es: "220", ur: "220" },
            { en: "230", es: "230", ur: "230" },
            { en: "240", es: "240", ur: "240" },
            { en: "210", es: "210", ur: "210" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-2.4C-3",
          type: "multiple-choice",
          prompt: {
            en: "🌊 Volunteers picked up 560 pieces of trash. 275 were plastic bottles. How many were other types of trash?",
            es: "🌊 Los voluntarios recogieron 560 pedazos de basura. 275 eran botellas. ¿Cuántos eran de otro tipo?",
            ur: "🌊 رضاکاروں نے 560 ٹکڑے اٹھائے۔ 275 پلاسٹک بوتلیں تھیں۔ باقی کتنے اور قسم کے تھے؟",
          },
          choices: [
            { en: "295", es: "295", ur: "295" },
            { en: "275", es: "275", ur: "275" },
            { en: "285", es: "285", ur: "285" },
            { en: "265", es: "265", ur: "265" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.4C-4",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A forest had 678 trees. A storm knocked down 145. How many trees are still standing?",
            es: "🌱 Un bosque tenía 678 árboles. Una tormenta derribó 145. ¿Cuántos árboles siguen en pie?",
            ur: "🌱 ایک جنگل میں 678 درخت تھے۔ طوفان نے 145 گرا دیے۔ ابھی کتنے کھڑے ہیں؟",
          },
          choices: [
            { en: "543", es: "543", ur: "543" },
            { en: "523", es: "523", ur: "523" },
            { en: "533", es: "533", ur: "533" },
            { en: "553", es: "553", ur: "553" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.4C-5",
          type: "multiple-choice",
          prompt: {
            en: "♻️ Class A recycled 234 items and Class B recycled 156 items. How many items did they recycle together?",
            es: "♻️ La clase A recicló 234 artículos y la clase B recicló 156. ¿Cuántos reciclaron juntos?",
            ur: "♻️ کلاس A نے 234 اور کلاس B نے 156 اشیاء ری سائیکل کیں۔ مل کر کتنی کیں؟",
          },
          choices: [
            { en: "380", es: "380", ur: "380" },
            { en: "400", es: "400", ur: "400" },
            { en: "390", es: "390", ur: "390" },
            { en: "370", es: "370", ur: "370" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.4C-6",
          type: "multiple-choice",
          prompt: {
            en: "🌳 The city planted 400 trees in spring and 250 in fall. How many trees did the city plant in all?",
            es: "🌳 La ciudad plantó 400 árboles en primavera y 250 en otoño. ¿Cuántos árboles plantó en total?",
            ur: "🌳 شہر نے بہار میں 400 اور خزاں میں 250 درخت لگائے۔ کل کتنے لگائے؟",
          },
          choices: [
            { en: "640", es: "640", ur: "640" },
            { en: "660", es: "660", ur: "660" },
            { en: "650", es: "650", ur: "650" },
            { en: "630", es: "630", ur: "630" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.4C-7",
          type: "true-false",
          prompt: {
            en: "🐝 A beekeeper has 525 bees in one hive and 348 in another. That is 873 bees altogether.",
            es: "🐝 Un apicultor tiene 525 abejas en una colmena y 348 en otra. Eso es 873 abejas en total.",
            ur: "🐝 ایک مکھی پالنے والے کے پاس ایک چھتے میں 525 اور دوسرے میں 348 مکھیاں ہیں۔ یہ مجموعی طور پر 873 ہیں۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-2.4C-8",
          type: "multiple-choice",
          prompt: {
            en: "🌊 475 sea turtles were rescued this year. Last year 263 were rescued. How many more were rescued this year?",
            es: "🌊 Este año se rescataron 475 tortugas marinas. El año pasado fueron 263. ¿Cuántas más se rescataron este año?",
            ur: "🌊 اس سال 475 سمندری کچھوے بچائے گئے۔ پچھلے سال 263 بچائے گئے۔ اس سال کتنے زیادہ بچائے گئے؟",
          },
          choices: [
            { en: "202", es: "202", ur: "202" },
            { en: "222", es: "222", ur: "222" },
            { en: "212", es: "212", ur: "212" },
            { en: "232", es: "232", ur: "232" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.4C-9",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Students planted 600 seeds. By spring, 375 had sprouted. How many seeds did not sprout?",
            es: "🌱 Los estudiantes plantaron 600 semillas. Para primavera, habían brotado 375. ¿Cuántas no brotaron?",
            ur: "🌱 طلبہ نے 600 بیج لگائے۔ بہار تک 375 اگ آئے۔ کتنے نہیں اگے؟",
          },
          choices: [
            { en: "235", es: "235", ur: "235" },
            { en: "215", es: "215", ur: "215" },
            { en: "245", es: "245", ur: "245" },
            { en: "225", es: "225", ur: "225" },
          ],
          correctIndex: 3,
        },
        {
          id: "ex-2.4C-10",
          type: "true-false",
          prompt: {
            en: "🌍 A climate club raised $418 in October and $165 in November. They raised $583 altogether.",
            es: "🌍 Un club de clima recaudó $418 en octubre y $165 en noviembre. En total recaudaron $583.",
            ur: "🌍 ایک ماحولیاتی کلب نے اکتوبر میں $418 اور نومبر میں $165 جمع کیے۔ مجموعی طور پر $583 جمع کیے۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "qz-2.4C-1",
          type: "multiple-choice",
          prompt: {
            en: "🌳 Our school planted 325 trees on the east side and 248 trees on the west side. How many trees in all?",
            es: "🌳 Nuestra escuela plantó 325 árboles al este y 248 al oeste. ¿Cuántos árboles en total?",
            ur: "🌳 ہمارے اسکول نے مشرق میں 325 اور مغرب میں 248 درخت لگائے۔ کل کتنے درخت؟",
          },
          choices: [
            { en: "563", es: "563", ur: "563" },
            { en: "583", es: "583", ur: "583" },
            { en: "573", es: "573", ur: "573" },
            { en: "553", es: "553", ur: "553" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-2.4C-2",
          type: "multiple-choice",
          prompt: {
            en: "♻️ The recycling center collected 750 bottles. They sorted 432. How many still need to be sorted?",
            es: "♻️ El centro de reciclaje recolectó 750 botellas. Clasificaron 432. ¿Cuántas quedan por clasificar?",
            ur: "♻️ ری سائیکلنگ مرکز نے 750 بوتلیں جمع کیں۔ 432 چھانٹ لیں۔ ابھی کتنی باقی ہیں؟",
          },
          choices: [
            { en: "308", es: "308", ur: "308" },
            { en: "328", es: "328", ur: "328" },
            { en: "318", es: "318", ur: "318" },
            { en: "338", es: "338", ur: "338" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-2.4C-3",
          type: "multiple-choice",
          prompt: {
            en: "🌊 Volunteers cleaned two beaches. Beach A had 415 pieces of trash and Beach B had 267. How many pieces in all?",
            es: "🌊 Los voluntarios limpiaron dos playas. La playa A tenía 415 pedazos y la playa B tenía 267. ¿Cuántos en total?",
            ur: "🌊 رضاکاروں نے دو ساحل صاف کیے۔ ساحل A میں 415 اور ساحل B میں 267 ٹکڑے تھے۔ کل کتنے؟",
          },
          choices: [
            { en: "672", es: "672", ur: "672" },
            { en: "692", es: "692", ur: "692" },
            { en: "682", es: "682", ur: "682" },
            { en: "662", es: "662", ur: "662" },
          ],
          correctIndex: 2,
        },
      ],
      wordProblems: [
        {
          id: "wp-2.4C-1",
          emoji: "🌳🌱🌿",
          scene: "Reforestation project in Austin, Texas — restoring native forests",
          prompt: {
            en: "Rangers planted 356 trees in the morning and 247 trees in the afternoon. How many trees were planted in all?",
            es: "Los guardabosques plantaron 356 árboles por la mañana y 247 por la tarde. ¿Cuántos árboles se plantaron en total?",
            ur: "رینجرز نے صبح 356 اور دوپہر میں 247 درخت لگائے۔ کل کتنے درخت لگائے گئے؟",
          },
          answer: 603,
          answerUnit: { en: "trees", es: "árboles", ur: "درخت" },
        },
        {
          id: "wp-2.4C-2",
          emoji: "🐝🌻🍯",
          scene: "Bee rescue shelter in Dallas — protecting pollinators for our food supply",
          prompt: {
            en: "A bee rescue shelter had 624 bees in the spring. By summer, 285 bees were moved to new homes. How many bees remain at the shelter?",
            es: "Un refugio de abejas tenía 624 abejas en primavera. Para el verano, 285 fueron llevadas a nuevos hogares. ¿Cuántas quedan?",
            ur: "ایک مکھی پناہ گاہ میں بہار میں 624 مکھیاں تھیں۔ گرمیوں تک 285 نئے گھروں میں منتقل ہوئیں۔ کتنی باقی ہیں؟",
          },
          answer: 339,
          answerUnit: { en: "bees", es: "abejas", ur: "مکھیاں" },
        },
        {
          id: "wp-2.4C-3",
          emoji: "♻️🥤📦",
          scene: "Recycling drive at Dallas ISD schools — keeping plastic out of landfills",
          prompt: {
            en: "Students collected 518 plastic bottles and 175 cardboard boxes. How many recyclable items did they collect in all?",
            es: "Los estudiantes recolectaron 518 botellas y 175 cajas. ¿Cuántos artículos reciclables recolectaron en total?",
            ur: "طلبہ نے 518 پلاسٹک بوتلیں اور 175 گتے کے ڈبے جمع کیے۔ کل کتنی ری سائیکل اشیاء جمع کیں؟",
          },
          answer: 693,
          answerUnit: { en: "items", es: "artículos", ur: "اشیاء" },
        },
        {
          id: "wp-2.4C-4",
          emoji: "🌊🐢🔵",
          scene: "Gulf Coast cleanup — protecting sea turtles and ocean wildlife",
          prompt: {
            en: "Marine volunteers removed 904 pounds of trash from the beach. 463 pounds were glass and plastic. How many pounds were other kinds of trash?",
            es: "Los voluntarios retiraron 904 libras de basura de la playa. 463 libras eran vidrio y plástico. ¿Cuántas libras eran de otro tipo?",
            ur: "سمندری رضاکاروں نے ساحل سے 904 پاؤنڈ کوڑا ہٹایا۔ 463 پاؤنڈ شیشہ اور پلاسٹک تھا۔ باقی کتنے پاؤنڈ؟",
          },
          answer: 441,
          answerUnit: { en: "pounds", es: "libras", ur: "پاؤنڈ" },
        },
        {
          id: "wp-2.4C-5",
          emoji: "🌱🌍💚",
          scene: "Community compost garden in South Dallas — turning food scraps into healthy soil",
          prompt: {
            en: "A compost garden turned 735 food scraps into healthy soil. 268 scraps came from the school cafeteria. How many came from other places?",
            es: "Un jardín de compostaje convirtió 735 restos de comida en tierra fértil. 268 venían de la cafetería escolar. ¿Cuántos venían de otros lugares?",
            ur: "ایک کمپوسٹ باغ نے 735 کھانے کے بچے کھچے کو صحت مند مٹی میں بدل دیا۔ 268 اسکول کیفے ٹیریا سے آئے۔ باقی کتنے اور جگہوں سے آئے؟",
          },
          answer: 467,
          answerUnit: { en: "scraps", es: "restos", ur: "بچے کھچے" },
        },
      ],
    },

    {
      teks: "2.6A",
      cambridge: "Stage 2 · 2Nc8",
      emoji: "🌻",
      title: {
        en: "Equal Groups",
        es: "Grupos Iguales",
        ur: "برابر گروہ",
      },
      vocabulary: [
        {
          id: "equal-groups",
          emoji: "🌿🌿🌿",
          word: { en: "equal groups", es: "grupos iguales", ur: "برابر گروہ" },
          definition: {
            en: "groups that have the same number of objects in each one",
            es: "grupos que tienen el mismo número de objetos en cada uno",
            ur: "وہ گروہ جن میں ہر ایک میں اشیاء کی تعداد برابر ہو",
          },
        },
        {
          id: "group",
          emoji: "👥",
          word: { en: "group", es: "grupo", ur: "گروہ" },
          definition: {
            en: "a set of objects or people that belong together",
            es: "un conjunto de objetos o personas que van juntos",
            ur: "اشیاء یا لوگوں کا ایک مجموعہ جو ایک ساتھ ہو",
          },
        },
        {
          id: "in-each",
          emoji: "🔢",
          word: { en: "in each", es: "en cada uno", ur: "ہر ایک میں" },
          definition: {
            en: "the number of objects inside every single group",
            es: "el número de objetos dentro de cada grupo",
            ur: "ہر ایک گروہ کے اندر اشیاء کی تعداد",
          },
        },
        {
          id: "skip-count",
          emoji: "⏭️",
          word: { en: "skip count", es: "contar salteado", ur: "قدموں میں گننا" },
          definition: {
            en: "counting by 2s, 5s, or 10s to find the total quickly",
            es: "contar de 2 en 2, de 5 en 5 o de 10 en 10 para encontrar el total",
            ur: "کل جلدی معلوم کرنے کے لیے 2، 5 یا 10 کے قدموں میں گننا",
          },
        },
        {
          id: "total",
          emoji: "🏆",
          word: { en: "total", es: "total", ur: "کل" },
          definition: {
            en: "the complete amount when you count all the groups together",
            es: "la cantidad total cuando cuentas todos los grupos juntos",
            ur: "تمام گروہوں کو مل کر گننے پر حاصل ہونے والی مکمل تعداد",
          },
        },
      ],
      lesson: {
        en: "Equal groups are groups that all have the same number. When we have 3 groups of 4 seeds, we can skip count: 4, 8, 12. So 3 groups of 4 = 12 seeds in all! This is the beginning of multiplication. Look for clues in word problems: 'groups of,' 'rows of,' and 'in each' tell you to make equal groups. Draw a picture to help you count!",
        es: "Los grupos iguales son grupos que tienen el mismo número de objetos. Cuando tenemos 3 grupos de 4 semillas, contamos de 4 en 4: 4, 8, 12. ¡Entonces 3 grupos de 4 = 12 semillas en total! Este es el comienzo de la multiplicación. Busca pistas: 'grupos de,' 'filas de' y 'en cada uno' te dicen que hagas grupos iguales.",
        ur: "برابر گروہ وہ ہیں جن میں سب کی تعداد برابر ہو۔ جب 4 بیجوں کے 3 گروہ ہوں تو قدموں میں گنیں: 4، 8، 12۔ یعنی 4 کے 3 گروہ = کل 12 بیج! یہ ضرب کی شروعات ہے۔ 'کے گروہ' اور 'ہر ایک میں' جیسے اشارے تلاش کریں۔",
      },
      exercises: [
        {
          id: "ex-2.6A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 There are 3 equal groups of seedlings. Each group has 4 seedlings. How many seedlings in all?",
            es: "🌱 Hay 3 grupos iguales de plántulas. Cada grupo tiene 4. ¿Cuántas plántulas hay en total?",
            ur: "🌱 پودوں کے 3 برابر گروہ ہیں۔ ہر گروہ میں 4 پودے ہیں۔ کل کتنے پودے ہیں؟",
          },
          choices: [
            { en: "7", es: "7", ur: "7" },
            { en: "12", es: "12", ur: "12" },
            { en: "10", es: "10", ur: "10" },
            { en: "8", es: "8", ur: "8" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-2.6A-2",
          type: "multiple-choice",
          prompt: {
            en: "🍯 A beekeeper has 4 boxes. Each box holds 5 jars of honey. How many jars altogether?",
            es: "🍯 Un apicultor tiene 4 cajas. Cada caja tiene 5 frascos de miel. ¿Cuántos frascos en total?",
            ur: "🍯 ایک مکھی پالنے والے کے پاس 4 ڈبے ہیں۔ ہر ڈبے میں 5 مرتبان ہیں۔ کل کتنے مرتبان؟",
          },
          choices: [
            { en: "9", es: "9", ur: "9" },
            { en: "18", es: "18", ur: "18" },
            { en: "20", es: "20", ur: "20" },
            { en: "15", es: "15", ur: "15" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.6A-3",
          type: "true-false",
          prompt: {
            en: "♻️ Students make 2 equal groups of recycled bottles. Each group has 6 bottles. There are 12 bottles in all.",
            es: "♻️ Los estudiantes forman 2 grupos iguales de botellas. Cada grupo tiene 6. En total hay 12 botellas.",
            ur: "♻️ طلبہ بوتلوں کے 2 برابر گروہ بناتے ہیں۔ ہر گروہ میں 6 بوتلیں ہیں۔ کل 12 بوتلیں ہیں۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-2.6A-4",
          type: "multiple-choice",
          prompt: {
            en: "🌳 The school plants 5 rows of trees. There are 3 trees in each row. How many trees in all?",
            es: "🌳 La escuela planta 5 filas de árboles. Hay 3 árboles en cada fila. ¿Cuántos árboles en total?",
            ur: "🌳 اسکول نے درختوں کی 5 قطاریں لگائیں۔ ہر قطار میں 3 درخت ہیں۔ کل کتنے درخت؟",
          },
          choices: [
            { en: "8", es: "8", ur: "8" },
            { en: "15", es: "15", ur: "15" },
            { en: "12", es: "12", ur: "12" },
            { en: "10", es: "10", ur: "10" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-2.6A-5",
          type: "multiple-choice",
          prompt: {
            en: "🌊 Volunteers form 4 equal groups to clean the beach. Each group picks up 7 bags of trash. How many bags in all?",
            es: "🌊 Los voluntarios forman 4 grupos iguales para limpiar la playa. Cada grupo recoge 7 bolsas. ¿Cuántas bolsas en total?",
            ur: "🌊 رضاکار ساحل صاف کرنے کے لیے 4 برابر گروہ بناتے ہیں۔ ہر گروہ 7 تھیلے اٹھاتا ہے۔ کل کتنے تھیلے؟",
          },
          choices: [
            { en: "11", es: "11", ur: "11" },
            { en: "24", es: "24", ur: "24" },
            { en: "28", es: "28", ur: "28" },
            { en: "21", es: "21", ur: "21" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.6A-6",
          type: "true-false",
          prompt: {
            en: "🌿 A garden has 3 rows of sunflowers. Each row has 8 flowers. There are 22 flowers in all.",
            es: "🌿 Un jardín tiene 3 filas de girasoles. Cada fila tiene 8 flores. En total hay 22 flores.",
            ur: "🌿 باغ میں 3 قطاریں ہیں۔ ہر قطار میں 8 پھول ہیں۔ کل 22 پھول ہیں۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-2.6A-7",
          type: "multiple-choice",
          prompt: {
            en: "🌿 A compost bin has 5 equal sections. Each section holds 4 pounds of compost. How many pounds in all?",
            es: "🌿 Un contenedor de compost tiene 5 secciones iguales con 4 libras cada una. ¿Cuántas libras en total?",
            ur: "🌿 کمپوسٹ ڈبے کے 5 برابر حصے ہیں۔ ہر حصے میں 4 پاؤنڈ ہے۔ کل کتنے پاؤنڈ؟",
          },
          choices: [
            { en: "9", es: "9", ur: "9" },
            { en: "20", es: "20", ur: "20" },
            { en: "15", es: "15", ur: "15" },
            { en: "25", es: "25", ur: "25" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-2.6A-8",
          type: "multiple-choice",
          prompt: {
            en: "🌻 Students plant 2 equal groups of sunflower seeds. Each group has 9 seeds. How many seeds altogether?",
            es: "🌻 Los estudiantes siembran 2 grupos iguales de semillas. Cada grupo tiene 9. ¿Cuántas semillas en total?",
            ur: "🌻 طلبہ بیجوں کے 2 برابر گروہ لگاتے ہیں۔ ہر گروہ میں 9 بیج ہیں۔ مجموعی طور پر کتنے بیج؟",
          },
          choices: [
            { en: "11", es: "11", ur: "11" },
            { en: "16", es: "16", ur: "16" },
            { en: "18", es: "18", ur: "18" },
            { en: "14", es: "14", ur: "14" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.6A-9",
          type: "true-false",
          prompt: {
            en: "♻️ There are 6 recycling bins. Each bin holds 5 bottles. That is 35 bottles in all.",
            es: "♻️ Hay 6 contenedores de reciclaje con 5 botellas cada uno. Eso son 35 botellas en total.",
            ur: "♻️ 6 ری سائیکلنگ ڈبے ہیں۔ ہر ڈبے میں 5 بوتلیں ہیں۔ یہ کل 35 بوتلیں ہیں۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-2.6A-10",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A farm has 4 equal rows of vegetable plants. Each row has 6 plants. How many plants in all?",
            es: "🌱 Una granja tiene 4 filas iguales de plantas de verduras con 6 plantas cada una. ¿Cuántas en total?",
            ur: "🌱 فارم پر سبزیوں کی 4 برابر قطاریں ہیں۔ ہر قطار میں 6 پودے ہیں۔ کل کتنے پودے؟",
          },
          choices: [
            { en: "10", es: "10", ur: "10" },
            { en: "18", es: "18", ur: "18" },
            { en: "22", es: "22", ur: "22" },
            { en: "24", es: "24", ur: "24" },
          ],
          correctIndex: 3,
        },
      ],
      quiz: [
        {
          id: "qz-2.6A-1",
          type: "multiple-choice",
          prompt: {
            en: "🐝 A beekeeper arranges 3 rows of honey jars. Each row has 6 jars. How many jars in all?",
            es: "🐝 Un apicultor organiza 3 filas de frascos de miel con 6 frascos cada una. ¿Cuántos en total?",
            ur: "🐝 مکھی پالنے والا مرتبانوں کی 3 قطاریں بناتا ہے۔ ہر قطار میں 6 مرتبان۔ کل کتنے؟",
          },
          choices: [
            { en: "9", es: "9", ur: "9" },
            { en: "18", es: "18", ur: "18" },
            { en: "15", es: "15", ur: "15" },
            { en: "12", es: "12", ur: "12" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-2.6A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌳 Students plant trees in 4 equal groups. Each group plants 5 trees. How many trees are planted in all?",
            es: "🌳 Los estudiantes plantan árboles en 4 grupos iguales de 5 árboles cada uno. ¿Cuántos en total?",
            ur: "🌳 طلبہ 4 برابر گروہوں میں درخت لگاتے ہیں۔ ہر گروہ 5 درخت۔ کل کتنے درخت؟",
          },
          choices: [
            { en: "9", es: "9", ur: "9" },
            { en: "15", es: "15", ur: "15" },
            { en: "20", es: "20", ur: "20" },
            { en: "25", es: "25", ur: "25" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-2.6A-3",
          type: "true-false",
          prompt: {
            en: "♻️ 5 students each collect 3 bags of recyclables. They collected 15 bags in all.",
            es: "♻️ 5 estudiantes recogen 3 bolsas de reciclables cada uno. En total recogieron 15 bolsas.",
            ur: "♻️ 5 طلبہ ہر ایک 3 تھیلے جمع کرتے ہیں۔ انہوں نے کل 15 تھیلے جمع کیے۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      wordProblems: [
        {
          id: "wp-2.6A-1",
          emoji: "🌻🌻🌻",
          scene: "Community garden in East Dallas — growing food for families in need",
          prompt: {
            en: "The garden has 4 rows of sunflowers. Each row has 6 sunflowers. How many sunflowers are in the garden in all?",
            es: "El jardín tiene 4 filas de girasoles con 6 girasoles cada una. ¿Cuántos girasoles hay en total?",
            ur: "باغ میں سورج مکھی کی 4 قطاریں ہیں۔ ہر قطار میں 6 سورج مکھیاں۔ کل کتنی؟",
          },
          answer: 24,
          answerUnit: { en: "sunflowers", es: "girasoles", ur: "سورج مکھیاں" },
        },
        {
          id: "wp-2.6A-2",
          emoji: "🌊🧹👥",
          scene: "Beach cleanup at Galveston Island, Texas — protecting marine life",
          prompt: {
            en: "Volunteers split into 3 equal groups. Each group picked up 8 bags of trash. How many bags were collected in all?",
            es: "Los voluntarios se dividieron en 3 grupos iguales. Cada grupo recogió 8 bolsas de basura. ¿Cuántas bolsas en total?",
            ur: "رضاکار 3 برابر گروہوں میں بٹ گئے۔ ہر گروہ نے 8 تھیلے اٹھائے۔ کل کتنے تھیلے؟",
          },
          answer: 24,
          answerUnit: { en: "bags", es: "bolsas", ur: "تھیلے" },
        },
        {
          id: "wp-2.6A-3",
          emoji: "🌳🌳🌳",
          scene: "Tree planting day at a city park — fighting climate change one tree at a time",
          prompt: {
            en: "Students planted trees in 5 equal rows. Each row had 4 trees. How many trees did they plant in all?",
            es: "Los estudiantes plantaron árboles en 5 filas iguales de 4 árboles cada una. ¿Cuántos árboles en total?",
            ur: "طلبہ نے 5 برابر قطاروں میں درخت لگائے۔ ہر قطار میں 4 درخت۔ کل کتنے؟",
          },
          answer: 20,
          answerUnit: { en: "trees", es: "árboles", ur: "درخت" },
        },
        {
          id: "wp-2.6A-4",
          emoji: "🐝🍯🏠",
          scene: "Pollinator sanctuary in North Texas — saving bees saves our food",
          prompt: {
            en: "The sanctuary has 2 rows of bee hives. Each row has 7 hives. How many bee hives are there in all?",
            es: "El santuario tiene 2 filas de colmenas con 7 colmenas cada una. ¿Cuántas colmenas en total?",
            ur: "پناہ گاہ میں مکھیوں کے چھتوں کی 2 قطاریں ہیں۔ ہر قطار میں 7 چھتے۔ کل کتنے؟",
          },
          answer: 14,
          answerUnit: { en: "hives", es: "colmenas", ur: "چھتے" },
        },
        {
          id: "wp-2.6A-5",
          emoji: "♻️🗂️💚",
          scene: "Recycling center sorting day — every can and bottle counts!",
          prompt: {
            en: "Workers sorted recyclables into 4 equal bins. Each bin held 9 items. How many items were sorted in all?",
            es: "Los trabajadores clasificaron los reciclables en 4 contenedores iguales de 9 artículos cada uno. ¿Cuántos en total?",
            ur: "کارکنوں نے ری سائیکل اشیاء کو 4 برابر ڈبوں میں رکھا۔ ہر ڈبے میں 9 اشیاء۔ کل کتنی؟",
          },
          answer: 36,
          answerUnit: { en: "items", es: "artículos", ur: "اشیاء" },
        },
      ],
    },
  ],
};

export default grade2;
